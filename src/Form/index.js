import React, { useState } from "react";
import "./form.css";
import "./button.css";
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
    <form className="form" onSubmit={onFormSubmit}>
      <Clock />
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Converter</legend>
        <p>
          <label>
            <span className="form__labelText">Currency:</span>
            <select
              className="form__field"
              value={currency}
              name="currency"
              id="currency-select"
              onChange={handleCurrencyChange}
            >
              <option>EUR</option>
              <option>USD</option>
              <option>CHF</option>
              <option>GBP</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Amount in PLN:</span>
            <input
              className="form__field"
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
        <button className="button" type="submit">
          Calculate
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
