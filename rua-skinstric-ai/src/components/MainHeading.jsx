import React from "react";

const MainHeading = () => {
  return (
    <>
      <div id="main-heading" className="relative z-10 text-center">
        <h1
          className="text-[60px] text-[#1A1B1C] lg:text-[100px] font-inter font-normal tracking-tighter leading-none opacity-0"
          style={{
            opacity: "1",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        >
          Sophisticated
          <br />
          <span
            className="block text-[#1A1B1C]"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px,0px)",
            }}
          >
            {" "}
            skincare
          </span>
        </h1>
      </div>
    </>
  );
};

export default MainHeading;
