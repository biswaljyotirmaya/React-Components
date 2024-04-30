import React from "react";
import { useId } from "react";

function InputCurrency({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`w-[500px]  bg-[#0057ff] rounded-md my-4 flex border border-white  justify-between p-6 text-white pb-8 ${className}`}
    >
      <div className="flex flex-col items-start">
        <label
          htmlFor={amountInputId}
          className="text-white mb-4 text-lg inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="text-black bg-gray-200 p-2 outline-none rounded-md text-lg font-semibold h-10"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-col items-end">
        <p className="mb-4 text-lg ">Currency Type</p>

        <select
          className="outline-none h-10 px-4 p-2 text-lg font-semibold  bg-gray-200 text-black rounded-full cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputCurrency;
