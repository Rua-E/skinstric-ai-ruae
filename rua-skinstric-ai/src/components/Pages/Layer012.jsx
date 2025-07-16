import React from "react";
import BackButton from "../BackButton";
import GetSummaryButton from "../GetSummaryButton";
import LargeRectangle from "../../assets/Rectangle 2780.png";
import MediumRectangle from "../../assets/Rectangle 2779.png";
import SmallRectangle from "../../assets/Rectangle 2778.png";

const Layer012 = () => {
  return (
    <>
      <div className="absolute top-10 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">
          A.I. ANALYSIS
        </h1>
        <p className="test-sm mt-1 text-muted-foreground uppercase leading-[24px]">
          A.I. HAS ESTIMATED THE FOLLOWING.
          <br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </p>
      </div>
      <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <img
                alt="Diamond Small"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet={`${SmallRectangle} 640w, ${SmallRectangle} 750w, ${SmallRectangle} 828w, ${SmallRectangle} 1080w, ${SmallRectangle} 1200w, ${SmallRectangle} 1920w, ${SmallRectangle} 2048w, ${SmallRectangle} 3840w,`}
                src={SmallRectangle}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <img
                alt="Diamond Medium"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet={`${MediumRectangle} 640w, ${MediumRectangle} 750w, ${MediumRectangle} 828w, ${MediumRectangle} 1080w, ${MediumRectangle} 1200w, ${MediumRectangle} 1920w, ${MediumRectangle} 2048w, ${MediumRectangle} 3840w,`}
                src={MediumRectangle}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <img
                alt="Diamond Large"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet={`${LargeRectangle} 640w, ${LargeRectangle} 750w, ${LargeRectangle} 828w, ${LargeRectangle} 1080w, ${LargeRectangle} 1200w, ${LargeRectangle} 1920w, ${LargeRectangle} 2048w, ${LargeRectangle} 3840w,`}
                src={LargeRectangle}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
            <div className="flex items-center justify-center col-start-2">
              <a href="/summary">
                <button className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300">
                  <span className="transform -rotate-45">Demographics</span>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
                      <img
                        alt="Diamond Medium"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="100vw"
                        srcSet={`${MediumRectangle} 640w, ${MediumRectangle} 750w, ${MediumRectangle} 828w, ${MediumRectangle} 1080w, ${MediumRectangle} 1200w, ${MediumRectangle} 1920w, ${MediumRectangle} 2048w, ${MediumRectangle} 3840w,`}
                        src={MediumRectangle}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          objectFit: "contain",
                          color: "transparent",
                        }}
                        className="hover:scale-[1.5]"
                      />
                    </div>
                  </div>
                </button>
              </a>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-1">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Cosmetic Concerns</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-3">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Skin Type Details</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-3 col-start-2">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Weather</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 md:pt-12 pb-8 bg-white sticky md:static bottom-40 mb-0 md:mb-0">
        <div className="flex justify-between max-w-full mx-auto px-13 md:px-9">
          <a href="/result">
            <BackButton />
          </a>
          <a href="/summary">
            <GetSummaryButton />
          </a>
        </div>
      </div>
    </>
  );
};

export default Layer012;
