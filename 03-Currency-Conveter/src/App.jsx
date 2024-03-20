import React, { useEffect, useState } from "react";
import InputCurrency from "./Components/InputCurrency";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [options, setOptions] = useState([]);
  const currencyInfo = useCurrencyInfo(from);

  useEffect(() => {
    setOptions(Object.keys(currencyInfo));
  }, [currencyInfo]);

  useEffect(() => {
    convert();
  }, [amount,from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="h-screen w-full bg-[#401570] flex justify-center items-center">
      <div className="bg-[#ffffff15] p-8 rounded-lg shadow-md shadow-black">
        <p className="text-center text-4xl font-bold text-white -mt-2">
          Currency Conveter
        </p>
        <p className="text-center text-orange-500 text-lg font-semibold my-2">
          {" "}
          1 {from.toUpperCase()} = {currencyInfo[to]} {to.toUpperCase()}
        </p>
        <InputCurrency
          readOnly={false}
          amount={amount}
          selectCurrency={from}
          currencyOptions={options}
          setAmount={setAmount}
          setFrom={setFrom}
          setTo={setTo}
          set={true}
        />
        <button
          className="text-white text-center bg-violet-900 hover:bg-violet-700 px-8 py-2 font-bold text-lg rounded-3xl absolute top-[47.5%] left-[47%] shadow-md shadow-black"
          onClick={swap}
        >
          Swap
        </button>
        <InputCurrency
          readOnly={true}
          amount={convertedAmount}
          selectCurrency={to}
          currencyOptions={options}
          setAmount={setAmount}
          setFrom={setFrom}
          setTo={setTo}
          set={false}
        />
        <button
          className="bg-[#401570] hover:shadow-md hover:shadow-black w-full py-4 text-xl font-bold rounded-md text-white"
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
