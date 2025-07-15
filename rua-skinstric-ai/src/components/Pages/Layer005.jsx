import React from "react";
import LargeRectangle from "../../assets/Rectangle 2778.png";
import MediumRectangle from "../../assets/Rectangle 2780.png";
import SmallRectangle from "../../assets/Rectangle 2779.png";
import CameraIcon from "../../assets/camera-icon.png";
import ScanLine from "../../assets/Group 39690.png";
import GalleryIcon from "../../assets/gallery-icon.png";
import GalleryLine from "../../assets/Group 39690 (1).png";
import BackButton from "../BackButton";

const Layer005 = () => {
  return (
    <>
      <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
        <div className="absolute top-2 left-9 md:left-8 text-left">
          <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
        </div>
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
          <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center">
            <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
            <img
              alt="Diamond Large"
              loading="lazy"
              width={482}
              height={482}
              decoding="async"
              data-nimg="1"
              className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-200"
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
              className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190"
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
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                alt="Camara Icon"
                loading="lazy"
                width={136}
                height={136}
                decoding="async"
                data-nimg="1"
                className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
                src={CameraIcon}
              />
              <div className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
                <p className="text-xs md:text-sm font-normal mt-1 leading-[24px]">
                  ALLOW A.I
                  <br />
                  TO SCAN YOUR FACE
                </p>
                <img
                  alt="Scan Line"
                  loading="lazy"
                  width={66}
                  height={59}
                  decoding="async"
                  data-nimg="1"
                  src={ScanLine}
                  className="absolute hidden md:block md:right-[143px] md:top-[20px]"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] translation-opacity duration-300 opacity-100">
            <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
            <img
              alt="Diamond Large"
              loading="lazy"
              width={482}
              height={482}
              decoding="async"
              data-nimg="1"
              className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205"
              src={LargeRectangle}
              //   srcSet="LargeRectangle 1x, LargeRectangle 2x"
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
              src={MediumRectangle}
              //   srcSet="LargeRectangle 1x, LargeRectangle 2x"
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
              src={SmallRectangle}
              //   srcSet="LargeRectangle 1x, LargeRectangle 2x"
              style={{ color: "transparent" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                alt="Photo Upload Icon"
                loading="lazy"
                width={136}
                height={136}
                decoding="async"
                data-nimg="1"
                className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
                //   srcSet="LargeRectangle 1x, LargeRectangle 2x"
                src={GalleryIcon}
              />
              <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
                <p className="text-[12px] md:text-[14px] font-normal mt-2 leading-[24px] text-right">
                  ALLOW A.I
                  <br />
                  ACCESS GALLERY
                </p>
                <img
                  alt="Gallery Line"
                  loading="lazy"
                  width={66}
                  height={59}
                  decoding="async"
                  data-nimg="1"
                  src={GalleryLine}
                  className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[75px] right-7 md:top-[-50px] md:right-8 transition-opacity duration-300 opacity-100"></div>
          <input accept="image/*" className="hidden" type="file" />
        </div>
        <div className="pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0">
          <div className="absolute bottom-8 w-full flex justify-between md:px-9 px-13">
            <a className="relative" label="Back" href="/testing">
              <BackButton />
            </a>
            <a href="/select"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layer005;
