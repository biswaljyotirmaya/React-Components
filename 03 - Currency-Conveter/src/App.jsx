import React from "react";
import InputCurrency from "./Components/InputCurrency";

function App() {
  return (
    <div className="h-screen w-full bg-[url('/background.jpeg')] bg-cover bg-no-repeat flex justify-center items-center">
      <div className=" bg-[#0057] p-8 rounded-lg">
      <InputCurrency type={"From"}/>
      <button className="text-center bg-[#0057ff] hover:bg-[#5173b6] px-8 py-2 font-bold text-lg rounded-3xl absolute top-[47%] left-[47%]">Swap</button>
      <InputCurrency type={"To"}/>
      </div>
      
    </div>
  );
}

export default App;
