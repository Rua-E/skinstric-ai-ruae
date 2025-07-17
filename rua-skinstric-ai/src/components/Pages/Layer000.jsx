import React, { useState } from "react";

import MainHeading from "../MainHeading";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";

import Polygon from "../../assets/Polygon.png";

const Layer000 = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
        <div className="flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="absolute inset-0 flex items-center justify-center lg:hidden">
            <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center lg:hidden">
            <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
          </div>

          {/* Main Heading */}
          <div
            className={`z-10 transition-transform duration-1000 ease-in-out absolute top-1/2 left-1/2 -translate-y-1/2
    ${
      hovered === "left"
        ? "translate-x-[5%]"
        : hovered === "right"
        ? "-translate-x-full"
        : "-translate-x-1/2"
    }
  `}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <MainHeading />

              <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-muted-foreground text-[#1a1b1c83]">
                Skinstrict developed an A.I. that creates a highly-personalized
                routing tailored to what your skin needs
              </p>

              <div className="z-10 mt-4 lg:hidden flex items-center justify-center">
                <a href="/testing">
                  <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
                    <span className="text-[12px] font-bold cursor-pointer">
                      ENTER EXPERIENCE
                    </span>
                    <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer"></div>

                    <span className="absolute right-[6px] bottom-[8px] scale-[0.9] sm:block group-hover:scale-[0.92] ease duration-300 rotate-180">
                      <img src={Polygon} alt="" className="w-2 h-2" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-47vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
            <p>
              Skinstric developed an A.I. that creates
              <br />
              highly-personalized routing tailored to
              <br />
              what your skin needs.
            </p>
          </div>

          {/* LEFT SECTION */}
          <div
            id="left-section"
            onMouseEnter={() => setHovered("left")}
            onMouseLeave={() => setHovered(null)}
            className={`hidden lg:block fixed left-[calc(-53vw)] xl:left-[calc(-50vw)] top-1/2 -translate-y-1/2 w-[475px] h-[475px] transition-opacity duration-500 ease-in-out
                ${hovered === "right" ? "opacity-0" : "opacity-100"}
              `}
          >
            <div className="relative w-full h-full">
              <div className="w-full h-full border-[1px] border-dotted border-[#A0A4AB] rotate-45 fixed top-[3px] left-[-250px] inset-0"></div>
              <button
                id="discover-button"
                className="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-[250px] left-[100px] -translate-y-1/2 translate-x-1/5 xl:translate-x-1/6 [@media(width>=1920px)]:translate-x-1/20 px-3 py-1"
              >
                <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
                <span className="absolute left-[20px] top-[12px] scale-[0.9] group-hover:scale-105 duration-300">
                  <img src={Polygon} alt="" />
                </span>
                <span>DISCOVER A.I.</span>
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div
            id="right-section"
            onMouseEnter={() => setHovered("right")}
            onMouseLeave={() => setHovered(null)}
            className={`hidden lg:block fixed top-1/2 right-[calc(-53vw)] xl:right-[calc(-50vw)] -translate-y-1/2 w-[475px] h-[475px] transition-opacity duration-500 ease-in-out
                ${hovered === "left" ? "opacity-0" : "opacity-100"}
              `}
          >
            <div className="relative w-full h-full">
              <div className="w-full h-full border-[1px] border-dotted border-[#A0A4AB] rotate-45 fixed top-[3px] left-[250px] inset-0"></div>
              <a href="/testing">
                <button
                  id="take-test-button"
                  className="group inline-flex items-center justify-center gap-4 text-sm font-normal text-[#1A1B1C] cursor-pointer h-9 absolute top-[250px] left-[225px] -translate-y-1/2 -translate-x-1/5 xl:-translate-x-1/6 [@media(width>=1920px)]:-translate-x-1/20 px-3 py-1"
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
        </div>
      </div>
    </>
  );
};

export default Layer000;

<div className="group/left group/right">
  <MainHeading className="" />
  <LeftSection className="" />
  <RightSection />
</div>;
