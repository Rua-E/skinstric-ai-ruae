import React from "react";

import MainHeading from "../MainHeading";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";

const Layer000 = () => {
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

          <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-muted-foreground text-[#1a1b1c83]">
            Skinstrict developed an A.I. that creates a highly-personalized
            routing tailored to what your skin needs
          </p>

          <div className="z-10 mt-4 lg:hidden">
            <a href="/testing">
              <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
                <span className="text-[12px] font-bold cursor-pointer">
                  ENTER EXPERIENCE
                </span>
                <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer"></div>
                <span className="absolute left-[129px] scale-[0.5] hover:scale-60 duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-current text-black"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>

          <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] [@media(width>=1920px)]:left-[calc(-33vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
            <p>
              Skinstric developed an A.I. that creates
              <br />
              highly-personalized routing tailored to
              <br />
              what your skin needs.
            </p>
          </div>

          <div className="group/left group/right">
            <MainHeading className=""/>
            <LeftSection className="" />
            <RightSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layer000;
