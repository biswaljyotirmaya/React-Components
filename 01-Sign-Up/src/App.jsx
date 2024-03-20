import React from "react";
import Home from "./Home";

const App = () => {
  return (
    <div className="flex">
      <div className="bg-[#0057ff] h-screen flex-[40%] flex justify-center items-center rounded-r-3xl">
        <img src="/sign-up-8694031-6983270.webp" alt="" />
      </div>
      <div className="bg-white h-screen flex-[60%] flex justify-center items-center rounded-r-3xl"><Home /></div>
      
    </div>
  );
};

export default App;
