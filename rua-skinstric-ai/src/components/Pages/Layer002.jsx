import React, { useRef } from "react";
import Rombuses from "../../assets/rombuses.png";
import BackButton from "../BackButton";
import ToStartAnalysisForm from "../ToStartAnalysisForm";

// const myButton = document.getElementById("myButton");
// const myInput = document.getElementById("myInput");

const Layer002 = () => {
  return (
    <>
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center ">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            CLICK TO TYPE
          </p>
          <ToStartAnalysisForm />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190"
            alt="Diamond Large"
            loading="lazy"
            width={762}
            height={762}
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={Rombuses}
          />
        </div>
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <a className="inset-0" aria-label="Back" href="/">
            <BackButton />
          </a>
        </div>
      </div>
    </>
  );
};

export default Layer002;
