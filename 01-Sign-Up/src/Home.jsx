import React from "react";

const Home = () => {
  return (
    <form className="w-[600px] border bg-white  shadow-lg rounded-2xl">
      <div className="h-[10%] my-3">
        <p className="text-4xl font-bold my-4 text-center ">Sign-Up</p>
      </div>
      <div className="rounded-2xl border h-[90%] p-8 pb-14">
        <div className="">
          <input
            className="h-14 w-full rounded-3xl  my-2 border-[#0057ff] border-[3px] px-6 placeholder:text-lg font-semibold  outline-none placeholder:text-black"
            type="text"
            placeholder="User Name"
            required
          />
          <input
            className="h-14 w-full rounded-3xl  my-2 border-[#0057ff] border-[3px] px-6 placeholder:text-lg font-semibold outline-none placeholder:text-black "
            type="email"
            placeholder="Enter Email"
            required
          />
          <input
            className="h-14 w-full rounded-3xl  my-2 border-[#0057ff] border-[3px] px-6 placeholder:text-lg font-semibold outline-none placeholder:text-black "
            type="password"
            placeholder="Enter Password"
            required
          />
          <input
            className="h-14 w-full rounded-3xl  my-2 border-[#0057ff] border-[3px] px-6 placeholder:text-lg font-semibold outline-none placeholder:text-black "
            type="password"
            placeholder="Re-enter Password"
            required
          />
        </div>
        <div className="p-6 flex items-center font-bold ">
          <input
            type="checkbox"
            className=" h-8 w-8 mr-4"
            name=""
            id="mark"
            required
          />
          <label htmlFor="mark" className="cursor-pointer">
            Agree{" "}
            <a href="" className="text-[#0057ff] hover:underline">
              term
            </a>{" "}
            and{" "}
            <a href="" className="text-[#0057ff] hover:underline">
              condition
            </a>{" "}
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </label>
        </div>
        <div className=" text-center">
          <button className="bg-[#0057ff] rounded-3xl h-12 text-white px-8  hover:border-[#0057ff] hover:bg-white hover:text-black hover:border-[3px] font-bold text-xl">
            Sign-Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default Home;
