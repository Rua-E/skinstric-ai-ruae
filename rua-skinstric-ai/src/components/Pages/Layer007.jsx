import React, { useEffect } from "react";

import CameraIcon from "../../assets/camera-icon.png";
import LargeRectangle from "../../assets/Rectangle 2780.png";
import MediumRectangle from "../../assets/Rectangle 2779.png";
import SmallRectangle from "../../assets/Rectangle 2778.png";
import { useNavigate } from "react-router-dom";

const Layer007 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/camera/capture");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="md:h-[85vh] h-[65vh] bg-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-[70vh] overflow-auto">
          <div className="flex-0 flex flex-col md:flex-row items-center justify-center relative">
            <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>

            <img
              alt="Diamond Large"
              loading="lazy"
              width="482"
              height="482"
              decoding="async"
              data-nimg="1"
              className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow"
              src={LargeRectangle}
            />
            <img
              alt="DiamondMedium"
              loading="lazy"
              width="444.34"
              height="444.34"
              decoding="async"
              data-nimg="1"
              className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower"
              src={MediumRectangle}
            />
            <img
              alt="DiamondSmall"
              loading="lazy"
              width="405.18"
              height="405.18"
              decoding="async"
              data-nimg="1"
              className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
              src={SmallRectangle}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center animate-pulse">
              <img
                alt="Camera Icon"
                loading="lazy"
                width={136}
                height={136}
                decoding="async"
                data-nimg="1"
                className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] animate-pulse-grow"
                src={CameraIcon}
              />
              <p className="mt-2 font-semibold text-sm md:text-base leading-[24px] tracking-tight animate-pulse text-center">
                SETTING UP CAMERA ...
              </p>
            </div>
          </div>

          <div className="mt-0 mb-5 text-center">
            <p className="text-xs md:text-sm mb-4 leading-6 ">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className="flex justify-center space-x-8">
              <p className="text-xs md:text-sm leading-6">
                ◇ NEUTRAL EXPRESSION
              </p>
              <p className="text-xs md:text-sm leading-6">◇ FRONTAL POSE</p>
              <p className="text-xs md:text-sm leading-6">
                ◇ ADEQUATE LIGHTING
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layer007;
