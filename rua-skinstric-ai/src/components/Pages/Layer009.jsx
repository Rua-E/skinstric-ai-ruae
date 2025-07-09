import React from "react";
import Polygon from "../../assets/Polygon.png";
import TakePictureIcon from "../../assets/Group 40037.png";

const Layer009 = () => {
  return (
    <>
      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
          <div className="absolute inset-00 z-10">
            <div className="vsc-controller vsc-nosource">
              #shadow-root (open)
              <style>
                @import
                "chrome-extension://nffaoalbilbmmfgbnbgppjihopabppdk/shadow.css";
              </style>
              <div id="controller" style="top:0px; left:0px; opacity:0.3;">
                <span
                  data-action="drag"
                  class="draggable"
                  style="font-size:24px; line-height:14px;"
                >
                  1.00
                </span>
                <span id="controls" style="cont-size:14px; line-height:14px;">
                  <button data-action="rewind" class="rw">
                    «
                  </button>
                  <button data-action="slower">−</button>
                  <button data-action="faster">+</button>
                  <button data-action="advance" class="rw">
                    »
                  </button>
                  <button data-action="display" class="hideButton">
                    ×
                  </button>
                </span>
              </div>
            </div>
            <video
              autoplay
              playsinline
              className="absolute inset-0 w-full h0full object-cover"
            ></video>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
              <div className="front-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
                TAKE PICTURE
              </div>
              <div className="transform hover:scale-105 ease-in-out duration-300">
                <img
                  src={TakePictureIcon}
                  alt="Take Picture"
                  loading="lazy"
                  width={60}
                  height={60}
                  decoding="async"
                  data-nimg="1"
                  className="w-16 h-16 cursor-pointer"
                  style={{ color: transparent }}
                />
              </div>
            </div>
            <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
              <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
                TO GET BETTER RESULTS MAKE SURE TO HAVE
              </p>
              <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ FRONTAL POSE</p>
                <p>◇ ADEQUATE LIGHTING</p>
              </div>
            </div>
          </div>
          <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
            <a href="/result">
              <div>
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm-hidden sm:hidden text-[#FCFCFC]">
                    BACK
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale[0.92] ease duration-300"></div>
                  <span className="absolute left-[13px] bottom-[16px] scale-[0.9] hidden sm:block text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300">
                    <img src={Polygon} alt="" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6">
                    BACK
                  </span>
                </div>
              </div>
            </a>
          </div>
          <canvas className="hidden" />
        </div>
      </div>
      <grammarly-desktop-integration data-grammarly-shadow-root="true">
        #shadow-root (open)
        <style>
          {/* div.grammarly-desktop-integration {
                  position: absolute;
                  width: 1px;
                  height: 1px;
                  padding: 0;
                  margin: -1px;
                  overflow: hidden;
                  clip: rect(0, 0, 0, 0);
                  white-space: nowrap;
                  border: 0;
                  -moz-user-select: none;
                  -webkit-user-select: none;
                  -ms-user-select:none;
                  user-select:none;
                }
                div.grammarly-desktop-integration:before {
                  content: attr(data-content);
                } */}
        </style>
        <div
          aria-label="grammarly-integration"
          role="group"
          tabindex="-1"
          className="grammarly-desktop-integration"
          data-content={{
            mode: limited,
            isActive: false,
            isUserDisabled: false,
          }}
        >
          ::before
        </div>
      </grammarly-desktop-integration>
    </>
  );
};

export default Layer009;
