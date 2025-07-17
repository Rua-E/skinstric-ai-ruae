import React, { useState } from "react";
import BackButton from "../BackButton";
import GetSummaryButton from "../GetSummaryButton";
import LargeRectangle from "../../assets/Rectangle 2780.png";
import MediumRectangle from "../../assets/Rectangle 2779.png";
import SmallRectangle from "../../assets/Rectangle 2778.png";

const Layer012 = () => {
  const [hoveredButton, setHoveredButton] = useState("");

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

      <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white overflow-visible">
        <div className="relative group">
          {/* Small Rectangle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`absolute transition-transform duration-500 w-[400px] h-[400px] scale-100 opacity-0 z-20 ${
                hoveredButton === "demographics"
                  ? "scale-[1.4] opacity-100"
                  : ""
              }`}
            >
              <img
                alt="Diamond Small"
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

          {/* Medium Rectangle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`absolute transition-transform duration-500 w-[400px] h-[400px] scale-100 opacity-0 z-10 ${
                hoveredButton === "cosmetic" || hoveredButton === "skin"
                  ? "scale-[1.6] opacity-100 rotate-30"
                  : ""
              }`}
            >
              <img
                alt="Diamond Medium"
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

          {/* Large Rectangle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`absolute transition-transform duration-500 w-[400px] h-[400px] scale-100 opacity-0 z-0 ${
                hoveredButton === "weather" ? "scale-[1.8] opacity-100" : ""
              }`}
            >
              <img
                alt="Diamond Large"
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

          {/* Buttons Grid */}
          <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
            {/* Demographics */}
            <div className="flex items-center justify-center col-start-2">
              <a href="/summary">
                <button
                  onMouseEnter={() => setHoveredButton("demographics")}
                  onMouseLeave={() => setHoveredButton("")}
                  className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300"
                >
                  <span className="transform -rotate-45">Demographics</span>
                </button>
              </a>
            </div>

            {/* Cosmetic Concerns */}
            <div className="flex items-center justify-center row-start-2 col-start-1">
              <button
                onMouseEnter={() => setHoveredButton("cosmetic")}
                onMouseLeave={() => setHoveredButton("")}
                className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
              >
                <span className="transform -rotate-45">Cosmetic Concerns</span>
              </button>
            </div>

            {/* Skin Type Details */}
            <div className="flex items-center justify-center row-start-2 col-start-3">
              <button
                onMouseEnter={() => setHoveredButton("skin")}
                onMouseLeave={() => setHoveredButton("")}
                className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
              >
                <span className="transform -rotate-45">Skin Type Details</span>
              </button>
            </div>

            {/* Weather */}
            <div className="flex items-center justify-center row-start-3 col-start-2">
              <button
                onMouseEnter={() => setHoveredButton("weather")}
                onMouseLeave={() => setHoveredButton("")}
                className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed"
              >
                <span className="transform -rotate-45">Weather</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
