import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3 relative z-[1000]">
      <div className="flex flex-row pt-1 scale-75 justify-center items-center ">
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-[16px] text-[#1A1B1C] z-1000"
          href="/"
        >
          SKINSTRIC
        </a>
        <img
          alt="left-bracket"
          loading="lazy"
          width={5}
          height={19}
          decoding="async"
          data-nimg="1"
          className="w-[4px] h-[17px]"
          style="color:transparent"
          src=""
        ></img>
      </div>
      <button></button>
    </div>
  );
};

export default NavBar;
