import React from "react";

function InputCurrency({type}) {
  return (
    <div className="w-[500px]  bg-white rounded-md my-4 flex  justify-between p-6">
      <div className="flex flex-col items-start">
      <p className="text-lg mb-4">{type}</p>
        <input type="number" defaultValue={0} min={0} className="bg-gray-200 p-2 outline-none rounded-md text-lg font-semibold h-10"/>
      </div>
      <div className="flex flex-col items-end">
        <p className="mb-4 text-lg">Currency Type</p>
        <select name="" id="" className="outline-none h-10 px-4 p-2 text-lg font-semibold rounded-md bg-gray-200">
          <option value="" className="p-2">Rupees</option>
          <option value="" className="p-2">Rupees</option>
          <option value="" className="p-2">Rupees</option>
        </select>
      </div>
    </div>
  );
}

export default InputCurrency;
