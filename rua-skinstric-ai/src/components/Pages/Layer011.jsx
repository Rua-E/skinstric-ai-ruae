import React from "react";
import BackButton from "../BackButton";
import LargeRectangle from "../../assets/Rectangle 2778.png";
import MediumRectangle from "../../assets/Rectangle 2780.png";
import SmallRectangle from "../../assets/Rectangle 2779.png";
import Polygon from "../../assets/Polygon.png";

const Layer011 = () => {
  return (
    <>
      <div className="min-h-[92vh] flex flex-col bg-white items-center justify-center text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <div className="relative z-10">
            <p className="text-lt text-gray-500 mb-2">Processing submission</p>
            <div className="flex items-center justify-center space-x-4 py-8">
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_250ms] opacity-30"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
            </div>

            {/* <div className="flex flex-xol items-center gap-4 z-10">
  <p className="text-2xl font-normal text-[#1A1B1C] tracking-wide">Thank you!</p>
  <p className="text-lg text-gray-600">Proceed to the next Step</p>
</div> */}
          </div>
          <img
            alt="Diamond Large"
            loading="lazy"
            width={762}
            height={762}
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 h-[480px] w-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190"
            src={LargeRectangle}
            //   srcSet={{LargeRectangle, 1x}, {LargeRectangle, 2x}}
            style={{ color: "transparent" }}
          />
          <img
            alt="Diamond Medium"
            loading="lazy"
            width={682}
            height={682}
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-185"
            src={MediumRectangle}
            //   srcSet={{LargeRectangle, 1x}, {LargeRectangle, 2x}}
            style={{ color: "transparent" }}
          />
          <img
            alt="Diamond Small"
            loading="lazy"
            width={602}
            height={602}
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest"
            src={SmallRectangle}
            //   srcSet={{LargeRectangle, 1x}, {LargeRectangle, 2x}}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <a className="" label="Back" href="/">
            <BackButton />
          </a>
          <a className="inline-block" href="/result">
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
                    PROCEED
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">
                    PROCEED
                  </span>
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.5] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute right-[17px] bottom-[17px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300 rotate-180">
                    <img src={Polygon} alt="" className="w-4px h-4px" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Layer011;
