import React, { useRef, useState, useEffect } from "react";
import Polygon from "../../assets/Polygon.png";
import TakePictureIcon from "../../assets/Group 40037.png";
import CameraIcon from "../../assets/camera-icon.png";

import LargeRectangle from "../../assets/Rectangle 2780.png";
import MediumRectangle from "../../assets/Rectangle 2779.png";
import SmallRectangle from "../../assets/Rectangle 2778.png";

const Layer007 = () => {
  //   const videoRef = useRef(null);
  //   const canvasRef = useRef(null);
  //   const [imageData, setImageData] = useState(null);

  //   // START CAMERA ON MOUNT
  //   useEffect(() => {
  //     startCamera();
  //   }, []);

  //   const startCamera = async () => {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({
  //         video: { facingMode: "user" },
  //         audio: false,
  //       });
  //       if (videoRef.current) {
  //         videoRef.current.srcObject = stream;
  //         await videoRef.current.play();
  //       }
  //     } catch (error) {
  //       console.error("Error accessing camera:", error);
  //     }
  //   };

  //   const takeSelfie = () => {
  //     const video = videoRef.current;
  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext("2d");

  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;

  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //     const imageDataURL = canvas.toDataURL("image/png");
  //     setImageData(imageDataURL);
  //   };

  //   const handleRedirect = () => {
  //     navigate('/capture')
  //   }

  return (
    <>
      {/* <div className="h-[90vh] w-screen"> */}
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
                // style="color:transparent"
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
                // style="color:transparent"
                src={MediumRectangle}
              />
              <img
                alt="DiamondSmall"
                loading="lazy"
                width="405.18"
                height="405.18"
                decoding="async"
                data-nimg="1"
                class="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
                // style="color:transparent"
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
                  //   style={{ color: transparent }}
                  src={CameraIcon}
                />
                <p className="mt-2 font-semibold text-sm md:text-base leading-[24px] tracking-tight animate-pulse text-center">
                  SETTING UP CAMERA ...
                </p>
              </div>
            </div>

            <div className="mt-0 text-center">
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
      {/* </div> */}
    </>
  );
};

export default Layer007;
