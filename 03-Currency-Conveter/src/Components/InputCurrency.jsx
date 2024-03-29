import React from "react";
import { useId } from "react";

function InputCurrency({
  amount,
  readOnly,
  currencyOptions = [],
  selectCurrency = "inr",
  className = "",
  setAmount,
  setFrom,
  setTo,
  set,
}) {
  const amountInputId = useId(); 
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    if (set) {
      setFrom(selectedCurrency);
    } else {
      setTo(selectedCurrency);
    }
  };

  return (
    <div
      className={`w-[500px]  bg-[#401570] rounded-md my-4 flex  justify-between p-6 text-white pb-8 ${className}`}
    >
      <div className="flex flex-col items-start">
        <label className="text-lg mb-4" htmlFor={amountInputId}>
          Amount
        </label>
        <input
        readOnly={readOnly}
          id={amountInputId}
          type="number"
          placeholder="Amount"
          value={amount}
          min={0}
          className="text-black bg-gray-200 p-2 outline-none rounded-md text-lg font-semibold h-10"
          onChange={handleAmountChange} 
        />
      </div>
      <div className="flex flex-col items-end">
        <p className="mb-4 text-lg ">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={handleCurrencyChange}  
          className="outline-none h-10 px-4 p-2 text-lg font-semibold  bg-gray-200 text-black rounded-full cursor-pointer"
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="text-center py-2"
            >
              {currency && currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputCurrency;
