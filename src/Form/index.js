import React, { useState } from "react";
import {
  Template,
  LabelText,
  Input,
  Select,
  Legend,
  Field,
} from "./formStyled.js";
import { Button } from "./buttonStyled.js";
import Result from "../Result/index";
import conversionRates from "./conversionRates";
import Clock from "../Clock";

const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const convertedAmount = amount / conversionRates[currency];
    setResult(`${convertedAmount.toFixed(2)} ${currency}`);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setResult(null);
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
    setResult(null);
  };

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
              onChange={handleCurrencyChange}
            >
              <option>EUR</option>
              <option>USD</option>
              <option>CHF</option>
              <option>GBP</option>
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
              onChange={handleAmountChange}
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
