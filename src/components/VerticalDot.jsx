import React from "react";
import "../main"

const VerticalDot = () => {
  return (
    <div className="fixed z-50 cursor-pointer bottom-[280px] right-[65px] flex flex-col justify-center gap-2">
      <a href="#sec1">
        <div
          className={`w-3 h-3 shadow-lg custom-shadow rounded-full cursor-pointer transition-all duration-300 bg-[#F5821F] hover:bg-[#F5821F]`}
        ></div>
      </a>
      <a href="#sec2">
        <div
          className={`w-3 h-3 shadow-lg custom-shadow rounded-full cursor-pointer transition-all duration-300 bg-[#F5821F] hover:bg-[#F6BC5E]`}
        ></div>
      </a>
      <a href="#sec3">
        <div
          className={`w-3 h-3 shadow-lg custom-shadow rounded-full cursor-pointer transition-all duration-300 bg-[#F5821F] hover:bg-[#F6BC5E]`}>
          </div>
      </a>
      <a href="#sec4">
        <div
          className={`w-3 h-3 shadow-lg custom-shadow rounded-full cursor-pointer transition-all duration-300 bg-[#F5821F] hover:bg-[#F6BC5E]`}
        ></div>
      </a>
      <a href="#sec5">
        <div
          className={`w-3 h-3 shadow-lg custom-shadow rounded-full cursor-pointer transition-all duration-300 bg-[#F5821F] hover:bg-[#F6BC5E]`}
        ></div>
      </a>
      <a href="#sec6">
        <div
          className={`w-3 h-3 shadow-lg custom-shadow rounded-full cursor-pointer transition-all duration-300 bg-[#F5821F] hover:bg-[#D9741B]`}
        ></div>
      </a>
      <a href="#sec7">
        <div
          className={`w-3 h-3 shadow-lg custom-shadow rounded-full cursor-pointer transition-all duration-300 bg-[#F5821F] hover:bg-[#D9741B]`}
        ></div>
      </a>
    </div>
  );
};

export default VerticalDot;

