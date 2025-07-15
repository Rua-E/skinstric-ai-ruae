import React, { useState } from "react";

const ToStartAnalysisForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleNext = () => {
    if (step === 1 && name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    if (step === 2 && location.trim() === "") {
      alert("Please enter your location.");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    // SAVE TO LOCAL STORAGE
    localStorage.setItem("name", name);
    localStorage.setItem("location", location);

    const payload = { name, location };
    const apiUrl =
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit data");

      alert("Submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div>
      <form className="relative z-10">
        <div className="flex flex-col items-center"></div>

        {step === 1 && (
          <>
            <input
              className="text-5xl sm:text-6xl font-light text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[460px] sm:w-[460px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              type="text"
              autoComplete="off"
              autoFocus="name"
              value={name}
              placeholder="Introduce Yourself"
              onChange={(event) => setName(event.target.value)}
            />
            <button type="submit" className="sr-only" onClick={handleNext}>
              Submit
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              className="text-5xl sm:text-6xl font-light text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[460px] sm:w-[460px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              type="text"
              autoComplete="off"
              autoFocus="location"
              value={location}
              placeholder="Where Are You From?"
              onChange={(event) => setLocation(event.target.value)}
            />
            <button type="submit" className="sr-only" onClick={handleNext}>
              Submit
            </button>
          </>
        )}

        {step === 3 && <>{handleSubmit()}</>}
      </form>
    </div>
  );
};

export default ToStartAnalysisForm;
