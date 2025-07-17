import React, { useState, useEffect } from "react";
import ProceedButton from "./ProceedButton";

function ToStartAnalysisForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [prepareAnalysis, setPrepareAnalysis] = useState(true);

  const handleSubmit = async () => {
    // SAVE TO LOCAL STORAGE
    localStorage.setItem("name", name);
    localStorage.setItem("location", location);

    const payload = { name, location };
    console.log("Submitting to backend API:", payload);

    const apiUrl =
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
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

    const jsonResponse = {
      SUCCESS: `Added ${name} from ${location}`,
    };
    setResponse(jsonResponse);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrepareAnalysis(false);
    }, 2500);

    // CLEANUP TIMER ON UNMOUNT
    return () => clearTimeout(timer);
  }, []);


  const handleNext = () => {
    if (step === 1) {
      if (!isValidString(name)) {
        alert("Please enter a valid name. Letters only. No Numbers.");
        return;
      }
    }

    if (step === 2) {
      if (!isValidString(location)) {
        alert("Please enter a valid location. Letters only. No Numbers.");
        return;
      }

      handleSubmit(); // Submit after validating location
    }

    setStep(step + 1);
  };

  const isValidString = (str) => {
    const trimmed = str.trim();
    const onlyLetters = /^[A-Za-z\s]+$/; // only letters and spaces
    return trimmed.length > 0 && onlyLetters.test(trimmed);
  };

  return (
    <div>
      <form className="relative z-10">
        <div className="flex flex-col items-center"></div>

        {step === 1 && (
          <>
            <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
              CLICK TO TYPE
            </p>
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
            <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
              CLICK TO TYPE
            </p>
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

        {step === 3 && (
          <>
            {prepareAnalysis ? (
              <div className="relative z-10">
                <p className="text-lt text-gray-500 mb-2">
                  PROCESSING SUBMISSION
                </p>
                <div className="flex items-center justify-center space-x-4 py-8">
                  <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_250ms] opacity-30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col items-center gap-4 z-10">
                  <p className="text-2xl font-normal text-[#1A1B1C] tracking-wide">
                    Thank you!
                  </p>
                  <p className="text-lg text-gray-600">
                    Proceed for the next step
                  </p>
                </div>
                <div className="fixed bottom-8 right-8 md:px-9 px-13">
                  <a className="inline-block" href="/result">
                    <ProceedButton />
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
}

export default ToStartAnalysisForm;
