import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Polygon from "../../assets/Polygon.png";
import TakePictureIcon from "../../assets/Group 40037.png";

import Layer011 from "./Layer011";

const Layer009 = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  
  
  // START CAMERA ON MOUNT
  useEffect(() => {
    startCamera();
  }, []);
  
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // FRONT CAMERA
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };
  
  const navigate = useNavigate();
  
  const takeSelfie = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imageDataURL = canvas.toDataURL("image/png");
    setImageData(imageDataURL);
  };
  
  
  const handleRedirect = () => {
    navigate("/camera");
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
        {isLoading ? (
          <>
          <Layer011 />
          </>
        ) : (
      <>
          <div className="absolute inset-0 z-10">
            <div className="vsc-controller vsc-nosource"></div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            ></video>

            {imageData && (
              <div className="absolute inset-0 z-10 flex flex-col items-center">
                <img
                  src={imageData}
                  alt="Captured Selfie"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute text-sm leading-6 uppercase text-[#FCFCFC] top-40">
                  GREAT SHOT!
                </div>
                <div className="absolute bottom-40 sm:bottom-16 left-0 right-0 flex flex-col items-center z-20"></div>
              </div>
            )}

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
                  onClick={takeSelfie}
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
                    <img
                      src={Polygon}
                      alt=""
                      className="h-4 w-4 invert brightness-0 saturate-0"
                    />
                  </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6 text-white">
                    BACK
                  </span>
                </div>
              </div>
            </a>
          </div>
          {imageData && (
            <div className="absolute md:bottom-8 bottom-60 right-8 z-20 ">
              <a className="inline-block" href="/select">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]">
                      PROCEED
                    </span>
                  </div>
                  <div className="group hidden sm:flex flex-row relative justify-center items-center">
                    <span className="text-sm font-semibold hidden sm:block mr-6 text-white">
                      PROCEED
                    </span>
                    <div className="w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                    <span className="absolute right-[13px] bottom-[17px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300 rotate-180 text-[#FCFCFC]">
                      <img
                        src={Polygon}
                        alt=""
                        className="w-4 h-4 invert brightness-0 saturate-0"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          )}
          <canvas ref={canvasRef} className="hidden" />
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default Layer009;
