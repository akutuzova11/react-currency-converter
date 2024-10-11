import React, { useState } from "react";
import "./form.css";
import "./button.css";

const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);

  const conversionRates = {
    EUR: 4.34,
    USD: 4.03,
    CHF: 4.57,
    GBP: 4.93,
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const convertedAmount = amount / conversionRates[currency];
    setResult(`${convertedAmount.toFixed(2)} ${currency}`);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setResult(null); // Clear the result
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
    setResult(null); // Clear the result
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
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
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
              <option value="GBP">GBP</option>
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
        <p>
          <span className="form__labelText">Result:</span>
          <span className="form__result">{result || ""}</span>
        </p>
        <button className="button" type="submit">
          Calculate
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
