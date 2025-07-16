import React, { useEffect, useState } from "react";

const MainHeading = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div id="main-heading" className="relative z-10 text-center">
        <h1
         
          className={`text-[60px] lg:text-[100px] text-[#1A1B1C] font-inter font-normal tracking-normal leading-none transition-opacity duration-[2000ms] ease-in ${
            visible ? "opacity-100" : "opacity-0"
          }`}
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
