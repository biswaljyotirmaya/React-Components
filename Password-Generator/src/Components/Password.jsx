import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Select from "./Select";

function Password() {
  return (
    <div className="bg-[#0a0e31] w-96 rounded-xl p-6 text-white">
      <h2 className="text-3xl font-semibold my-4">Password Generator</h2>
      <div className="flex items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Password"
          value={""}
          readOnly
          className="text-orange-700 bg-[#1D2141] text-lg px-4 outline-none  h-10 rounded-lg w-[80%] mr-8 overflow-hiddens"
        />
        <button>
          <MdOutlineContentCopy size={25} className="hover:text-gray-400" />
        </button>
      </div>

      <p className="mt-2">Length:</p>

      <div className="flex justify-evenly  items-center h-12 bg-[#1D2141] rounded px-6">
        <p>6</p>
        <input
          type="range"
          name=""
          id=""
          min={6}
          max={32}
          className="w-full mx-2 outline-none"
        />
        <p>32</p>
      </div>
      <p className="mt-2 -mb-2">Settings</p>
      <div>
        <Select tag={"Include Uppercase"} />
        <Select tag={"Include Lowercase"} />
        <Select tag={"Include Numbers"} />
        <Select tag={"Include Symbols"} />
      </div>

      <button className="text-center bg-gradient-to-r from-sky-500 to-indigo-500  h-12 w-full my-2 rounded font-semibold text-xl transition hover:from-[#1D2141] hover:to-[#1D2141] duration-2000">
        Generate Password
      </button>
    </div>
  );
}

export default Password;
