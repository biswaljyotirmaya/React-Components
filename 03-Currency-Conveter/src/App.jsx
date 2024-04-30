import React, { useEffect, useState } from "react";
import InputCurrency from "./Components/InputCurrency";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(0);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="h-screen w-full flex bg-white">
      <div className="h-screen w-[50%] bg-white flex items-center justify-center">
        <img src="/exchange.jpg" alt="" className="w-full h-screen" />
      </div>
      <div className=" w-[50%]  flex flex-col justify-center items-center  bg-[#0057ff]">
        <div className="border-[3px] border-white p-10 rounded-xl relative">
          <div>
            <p className="text-center text-4xl font-bold text-white mt-2">
              Currency Conveter
            </p>
            <p className="text-center text-black text-lg font-semibold my-2">
              {" "}
              1 {from.toUpperCase()} = {currencyInfo[to]} {to.toUpperCase()}
            </p>

            <InputCurrency
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <button
              className="text-[#0057ff] text-center bg-white border-2 border-black hover:shadow-md px-8 py-2 font-bold text-lg rounded-3xl absolute top-[47.5%] left-[40%]  hover:shadow-black"
              onClick={swap}
            >
              Swap
            </button>
            <InputCurrency
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
            <button
              className="border-2 hover:shadow-md hover:shadow-black w-full py-4 text-xl font-bold rounded-md text-white"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
