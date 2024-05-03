import React from "react";
import sort from "./images/sort.jpg";
import week from "./images/salesmanagement.png";
import Portfolio from "./images/portfolio.jpg";
export const Work = () => {
  return (
    <div
      id="work"
      className="text-gray-700 flex-col w-[460px] justify-center sm:w-[600px] md:w-[1200px] px-4 py-6 bg-gradient-to-tr from-purple-600 to-orange-500 rounded-lg mx-auto mt-5"
    >
      <h1 className="text-gray-700 font-bold text-3xl">Works</h1>
      <div className="flex-col  w-full h-full  mt-5">
        <div className="flex-col w-[350px]  text-center  text-xl mx-auto my-5">
          <img className="rounded-2xl" src={sort} alt='/'></img>
          <h1 className="text-2xl  mt-2"><a href="https://sorting-algorithm-visuli-d9108.web.app/">Sorting Algorithm Visulization</a></h1>
        </div>
        <div className="flex-col text-center w-[350px] text-xl mx-auto my-5">
          <img className="rounded-2xl" src={week} alt='/'></img>
          <h1 className="text-2xl mt-2"><a href="https://react-store-c7c13.web.app">Sales Management System</a></h1>
        </div>
        <div className="flex-col text-center v w-[350px]   text-xl mx-auto my-5">
          <img className="rounded-2xl" src={Portfolio} alt='/'></img>
          <h1 className="text-2xl mt-2"><a href="https://bipin-portfolio.web.app/">Bipin Portfolio</a></h1>
        </div>
      </div>
    </div>
  );
};
