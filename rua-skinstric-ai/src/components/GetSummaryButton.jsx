import React from "react";
import Polygon from "../assets/Polygon.png";

const GerSummaryButton = () => {
  return (
    <>
      <div
        className="invisible"
        style={{
          position: "relative",
          translate: "none",
          rotate: "none",
          scale: "none",
          visibility: "visible",
          opacity: "1",
          transform: "translate(0px,0%)",
        }}
      >
        <div>
          <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
            <span className="rotate-[-45deg] text-xs font-semibold sm;hidden">
              SUM
            </span>
          </div>
          <div className="group hidden sm:flex flex-row relative justify-center items-center">
            <span className="text-sm font-semibold hidden sm:block mr-6">
              GET SUMMARY
            </span>
            <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
            <span className="absolute right-[13px] bottom-[17px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300 rotate-180">
              <img src={Polygon} alt="" className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GerSummaryButton;
