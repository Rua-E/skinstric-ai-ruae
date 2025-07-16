import React, { useState } from "react";
import Polygon from "../assets/Polygon.png"

const RightSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* <div
        id="right-section"
        className="hidden lg:block fixed top-1/2 right-[calc(-53vw)] xl:right-[calc(-50vw)] -translate-y-1/2 w-[500px] h-[500px] transition-opacity duration-500 ease-in-out opacity-100"
        style={{ opacity: "1" }}
      >
        <div className="relative w-full h-full">
          <div className="w-full h-full border-[2px] border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>
          <a href="/testing">
            <button
              id="take-test-button"
              className="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/5 xl:-translate-x-1/6 [@media(width>=1920px)]:-translate-x-1/20 px-3 py-1"
            >
              TAKE TEST
              <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
              <span className="absolute left-[111px] top-[12px] scale-[0.9] rotate-180 cursor-pointer group-hover:scale-105 duration-300">
                <img src={Polygon} alt="" />
              </span>
            </button>
          </a>
        </div>
      </div> */}
       <div
              id="right-section"
              onMouseEnter={() => setHovered("right")}
              onMouseLeave={() => setHovered(null)}
              className={`hidden lg:block fixed top-1/2 right-[calc(-53vw)] xl:right-[calc(-50vw)] -translate-y-1/2 w-[500px] h-[500px] transition-opacity duration-500 ease-in-out
                ${hovered === "left" ? "opacity-0" : "opacity-100"}
              `}
            >
              <div className="relative w-full h-full">
                <div className="w-full h-full border-[2px] border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>
                <a href="/testing">
                  <button
                    id="take-test-button"
                    className="group inline-flex items-center justify-center gap-4 text-sm font-normal text-[#1A1B1C] cursor-pointer h-9 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/5 xl:-translate-x-1/6 [@media(width>=1920px)]:-translate-x-1/20 px-3 py-1"
                  >
                    TAKE TEST
                    <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
                    <span className="absolute left-[111px] top-[12px] scale-[0.9] rotate-180 group-hover:scale-105 duration-300">
                      <img src={Polygon} alt="" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
    </>
  );
};

export default RightSection;
