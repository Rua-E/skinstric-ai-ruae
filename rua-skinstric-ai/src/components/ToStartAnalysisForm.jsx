import React, { useRef } from "react";

function ToStartAnalysisForm() {
  const introduceYourselfRef = useRef(null);
  const whereAreYouFromRef = useRef(null);
  const displayInfoRef = useRef(null);

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      nextInputRef.current.focus(); // Move focus to the next input
    }
  };

  const handleLastInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <>
      <form
        className="relative z-10"
        action="javascript:throw new Error('React form unexpectedly submitted.')"
      >
        <div className="flex flex-col items-center"></div>
        <input
          id="newInput"
          className="text-5xl sm:text-6xl font-light text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[375px] sm:w-[375px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
          type="text"
          autoComplete="off"
          autoFocus="name"
          ref={introduceYourselfRef}
          placeholder="Introduce Yourself"
          onKeyDown={(event) => handleKeyDown(event, whereAreYouFromRef)}
        />
        <input
          id="newInput"
          className="text-5xl sm:text-6xl font-light text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[375px] sm:w-[375px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
          type="text"
          autoComplete="off"
          autoFocus="name"
          ref={whereAreYouFromRef}
          placeholder="Where Are You From?"
          onKeyDown={(event) => handleKeyDown(event, displayInfoRef)}
        />
        <input
          id="newInput"
          className="text-5xl sm:text-6xl font-light text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[375px] sm:w-[375px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
          type="text"
          autoComplete="off"
          autoFocus="name"
          ref={displayInfoRef}
          placeholder="Country"
          onKeyDown={handleLastInputKeyDown}
        />

        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
    </>
  );
}

export default ToStartAnalysisForm;
