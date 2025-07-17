import React from "react";
import LargeRectangle from "../../assets/Rectangle 2780.png";
import MediumRectangle from "../../assets/Rectangle 2779.png";
import SmallRectangle from "../../assets/Rectangle 2778.png";

const Layer011 = () => {
  return (
    <>
      <div className="min-h-[92vh] flex flex-col bg-white items-center justify-center text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>
        <div className="relative flex flex-col items-center justify-center mb-10 mt-10 w-full h-full">
          <div className="relative z-10">
            <p className="text-lt text-gray-500 mb-2">
              PREPARING YOUR ANALYSIS
            </p>
            <div className="flex items-center justify-center space-x-4 py-8">
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_250ms] opacity-30"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
              <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
            </div>
          </div>
          <img
            alt="Diamond Large"
            loading="lazy"
            width={482}
            height={482}
            decoding="async"
            data-nimg="1"
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205"
            srcSet={`${LargeRectangle} 1x, ${LargeRectangle} 2x`}
            src={LargeRectangle}
            style={{ color: "transparent" }}
          />
          <img
            alt="Diamond Medium"
            loading="lazy"
            width={444.34}
            height={444.34}
            decoding="async"
            data-nimg="1"
            className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195"
            srcSet={`${MediumRectangle} 1x, ${MediumRectangle} 2x`}
            src={MediumRectangle}
            style={{ color: "transparent" }}
          />
          <img
            alt="Diamond Small"
            loading="lazy"
            width={405.18}
            height={405.18}
            decoding="async"
            data-nimg="1"
            className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest rotate-190"
            srcSet={`${SmallRectangle} 1x, ${SmallRectangle} 2x`}
            src={SmallRectangle}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </>
  );
};

export default Layer011;
