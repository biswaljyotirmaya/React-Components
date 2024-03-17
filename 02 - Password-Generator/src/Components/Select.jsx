import React from "react";

function Select({ tag }) {
  return (
    <div className="flex justify-between items-center px-6 bg-[#1D2141] h-12 my-2 rounded">
      <label htmlFor={tag} className="cursor-pointer text-white text-lg font-semibold">
        {tag}
      </label>
      <input type="checkbox" id={tag} className="h-4 w-4 cursor-pointer" />
    </div>
  );
}

export default Select;
