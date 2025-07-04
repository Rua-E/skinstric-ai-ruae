import React from "react";
import Polygon from "../assets/Polygon.png";

const BackButton = () => {
  return (
    <>
      <div>
        <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
          <span className="rotate-[-45deg] text-xs font-semibold sm-hidden">
            BACK
          </span>
        </div>
        <div className="group hidden sm:flex flex-row relative justify-center items-center">
          <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale[0.92] ease duration-300"></div>
          <span className="absolute left-[13px] bottom-[16px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300">
            <img src={Polygon} alt="" className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold hidden sm:block ml-6">
            BACK
          </span>
        </div>
      </div>
    </>
  );
};

export default BackButton;
