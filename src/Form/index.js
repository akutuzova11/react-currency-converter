import React, { useState } from "react";
import {
  Template,
  LabelText,
  Input,
  Select,
  Legend,
  Field,
  LoadingStatus,
  LoadingImageStyled,
  ErrorStatus,
  ErrorImageStyled,
} from "./formStyled.js";
import { Button } from "./buttonStyled.js";
import Result from "../Result/index";
import Clock from "../Clock";
import { Loading } from "../Loading";
import { useConversionRates } from "./useConversionRates.js";
import ErrorImage from "../error.jpg";
import LoadingGif from "../Bean_Eater.gif"

const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);
  const conversionRates = useConversionRates();
  const [isErrorReady, setIsErrorReady] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const rate = conversionRates.rates[currency].value;
    const convertedAmount = amount / rate;
    setResult(`${convertedAmount.toFixed(2)} ${currency}`);
  };

  if (conversionRates.status === "loading") {
    return (
      <LoadingStatus>
        Just a moment ...
        <LoadingImageStyled src={LoadingGif} alt="Loading..." />
      </LoadingStatus>
    );
  }

  if (conversionRates.status === "error") {
    return (
      <ErrorStatus style={{ visibility: isErrorReady ? "visible" : "hidden" }}>
        Oops! Something went wrong. Please try again.<ErrorImageStyled src={ErrorImage} alt="Error" onLoad={() => setIsErrorReady(true)}/>
      </ErrorStatus>
    );
  }

  return (
    <Template onSubmit={onFormSubmit}>
      <Clock />
      <Field>
        <Legend>Currency Converter</Legend>
        <p>
          <label>
            <LabelText>Currency:</LabelText>
            <Select
              value={currency}
              name="currency"
              id="currency-select"
              onChange={({ target }) => setCurrency(target.value)}
            >
              {conversionRates.rates &&
                Object.keys(conversionRates.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </Select>
          </label>
        </p>
        <p>
          <label>
            <LabelText>Amount in PLN:</LabelText>
            <Input
              id="amount-input"
              name="amount"
              value={amount}
              type="number"
              min="1"
              step="any"
              required
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <Result result={result} />
        <Button type="submit">Calculate</Button>
      </Field>
    </Template>
  );
};

export default Form;
