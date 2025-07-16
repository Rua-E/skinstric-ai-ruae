import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// const SelfieCapture = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [imageData, setImageData] = useState(null);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "user" },
//         audio: false,
//       });
//       videoRef.current.srcObject = stream;
//       videoRef, current.play();
//     } catch (error) {
//       console.error("Error accessing camera:", error);
//     }
//   };

//   const takeSelfie = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     context.drawImage(video, 0, 0, canvas, width, canvas.height);
//     const imageDataURL = canvas.toDataURL('image/png');
//     setImageData(imageDataURL);
//   };

//   return <div>
//     <div>
//       <video ref={videoRef} className="w-full max-w-md border rounded" autoPlay playsInline></video>
//       <button onClick={startCamera} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">START CAMERA</button>
//       <button onClick={takeSelfie} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">TAKE SELFIE</button>
//       <canvas ref={canvasRef} className="hidden"></canvas>
//       {imageData && (
//         <img src={imageData} alt="Your Selfie" className="w-full max-w-md border rounded"/>
//       )}
//     </div>
//   </div>;
// };

// export default SelfieCapture;

// import React, { useState } from "react";

const SelfieCapture = () => {
  // const videoRef = useRef(null);
  // const canvasRef = useRef(null);
  // const [imageData, setImageData] = useState(null);

  // const startCamera = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: { facingMode: "user" },
  //       audio: false,
  //     });
  //     videoRef.current.srcObject = stream;
  //     videoRef, current.play();
  //   } catch (error) {
  //     console.error("Error accessing camera:", error);
  //   }
  // };

  // const takeSelfie = () => {
  //   const video = videoRef.current;
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");

  //   canvas.width = video.videoWidth;
  //   canvas.height = video.videoHeight;

  //   context.drawImage(video, 0, 0, canvas, width, canvas.height);
  //   const imageDataURL = canvas.toDataURL("image/png");
  //   setImageData(imageDataURL);
  // };

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/camera')
  }

  return (
    <div>
      <div className="absolute md:top-[43%] md:left-[360px] w-[352px] z-50">
        <div className="bg-[#1A1B1C] pt-4 pb-2">
          <h2 className="text-[#FCFCFC] text-base font-semibold mb-12 leading-[24px] pl-4">
            ALLOW A.I. TO ACCESS YOUR CAMERA
          </h2>
          <div className="flex mt-4 border-t border-[#FCFCFC] pt-2 pl-40">
            <button className="px-7 md:translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-500">
              DENY
            </button>
            <button className="px-5 md:translate-x-45 text-[#FCFCFC] font-semibold text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-300" onClick={handleRedirect}>
              ALLOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfieCapture;
