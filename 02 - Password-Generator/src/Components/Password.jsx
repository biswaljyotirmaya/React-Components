import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Select from "./Select";

function Password() {
  const [length, setLength] = useState(8);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(false);
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let str = "";
    let pass = "";
    if (uppercaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseAllowed) str += "abcdefghijklmnopqustuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (symbolsAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log(password);
  }, [
    length,
    uppercaseAllowed,
    lowercaseAllowed,
    numbersAllowed,
    symbolsAllowed,
  ]);

  return (
    <div className="bg-[#0a0e31] w-96 rounded-xl p-6 text-white">
      <h2 className="text-3xl font-semibold my-4">Password Generator</h2>
      <div className="flex items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Password"
          value={password}
          readOnly
          className="text-orange-700 bg-[#1D2141] text-lg px-4 outline-none  h-10 rounded-lg w-[80%] mr-8 overflow-hiddens"
        />
        <button>
          <MdOutlineContentCopy size={25} className="hover:text-gray-400" />
        </button>
      </div>

      <p className="mt-2">Length: {length}</p>

      <div className="flex justify-evenly  items-center h-12 bg-[#1D2141] rounded px-6">
        <p>6</p>
        <input
          type="range"
          name=""
          id=""
          defaultValue={length}
          min={6}
          max={32}
          className="w-full mx-2 outline-none"
          onChange={(e) => setLength(e.target.value)}
        />
        <p>32</p>
      </div>
      <p className="mt-2 -mb-2">Settings</p>
      <div>
        <Select
          tag={"Include Uppercase"}
          defultChecked={uppercaseAllowed}
          setCheck={setUppercaseAllowed}
        />
        <Select
          tag={"Include Lowercase"}
          defultChecked={lowercaseAllowed}
          setCheck={setLowercaseAllowed}
        />
        <Select
          tag={"Include Numbers"}
          defultChecked={numbersAllowed}
          setCheck={setNumbersAllowed}
        />
        <Select
          tag={"Include Symbols"}
          defultChecked={symbolsAllowed}
          setCheck={setSymbolsAllowed}
        />
      </div>

      <button
        className="text-center bg-gradient-to-r from-sky-500 to-indigo-500  h-12 w-full my-2 rounded font-semibold text-xl transition hover:from-[#545fb1] hover:to-[#303c97] hover:text-[#6478fa] duration-2000 "
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  );
}

export default Password;
