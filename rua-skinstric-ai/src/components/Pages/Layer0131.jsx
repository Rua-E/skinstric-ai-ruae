import BackButton from "../BackButton";
import HomeButton from "../HomeButton";

import RadioButton from "../../assets/radio-button.png";
import { useState } from "react";
import CircleProgress from "../CircleProgress";

const Layer0131 = () => {
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(0);
  const [selectedSexIndex, setSelectedSexIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("RACE");

  const raceFields = [
    { label: "Latino Hispanic", value: "43%" },
    { label: "Southeast Asian", value: "21%" },
    { label: "Black", value: "13%" },
    { label: "East Asian", value: "8%" },
    { label: "South Asian", value: "7%" },
    { label: "White", value: "5%" },
    { label: "Middle eastern", value: "0%" },
  ];

  const ageFields = [
    { label: "0–2", value: "1%" },
    { label: "3–9", value: "6%" },
    { label: "10–19", value: "0%" },
    { label: "20–29", value: "1%" },
    { label: "30-39", value: "1%" },
    { label: "40-49", value: "9%" },
    { label: "50-59", value: "5%" },
    { label: "60-69", value: "47%" },
    { label: "70+", value: "27%" },
  ];

  const sexFields = [
    { label: "Male", value: "60%" },
    { label: "Female", value: "40%" },
  ];

  return (
    <>
      <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
        <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
          <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col">
            <div className="text-start ml-4 mb-4 md:md-10 md:ml-0">
              <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">
                A.I. ANALYSIS
              </h2>
              <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
                DEMOGRAPHICS
              </h3>
              <h4 className="text-sm mt-2 leading-[24px]">
                PREDICTED RACE & AGE
              </h4>
            </div>
            <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
              <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
                <div
                  className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t border-black hover:bg-[#1E1E12]  ${
                    activeSection === "RACE"
                      ? "bg-[#1A1B1C] text-white"
                      : "bg-[#F3F3F4] text-black hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveSection("RACE")}
                >
                  <p className="text-base font-semibold">
                    {selectedRaceIndex !== null
                      ? raceFields[selectedRaceIndex].label
                      : " "}
                  </p>
                  <h4 className="text-base font-semibold mb-1">RACE</h4>
                </div>
                <div
                  className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t border-black hover:bg-[#1E1E12] ${
                    activeSection === "AGE"
                      ? "bg-[#1A1B1C] text-white"
                      : "bg-[#F3F3F4] text-black hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveSection("AGE")}
                >
                  <p className="text-base font-semibold">
                    {selectedAgeIndex !== null
                      ? ageFields[selectedAgeIndex].label
                      : " "}
                  </p>
                  <h4 className="text-base font-semibold mb-1">AGE</h4>
                </div>
                <div
                  className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t border-black hover:bg-[#1E1E12] ${
                    activeSection === "SEX"
                      ? "bg-[#1A1B1C] text-white"
                      : "bg-[#F3F3F4] text-black hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveSection("SEX")}
                >
                  <p className="text-base font-semibold">
                    {selectedSexIndex !== null
                      ? sexFields[selectedSexIndex].label
                      : " "}
                  </p>
                  <h4 className="text-base font-semibold mb-1">SEX</h4>
                </div>
              </div>
              <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] border-t border-black md:border-t">
                <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                  {activeSection === "RACE" && selectedRaceIndex !== null
                    ? raceFields[selectedRaceIndex].label
                    : activeSection === "AGE" && selectedAgeIndex !== null
                    ? ageFields[selectedAgeIndex].label
                    : activeSection === "SEX" && selectedSexIndex !== null
                    ? sexFields[selectedSexIndex].label
                    : " "}
                </p>

                <div className="absolute bottom-4 right-4 w-[384px] h-[384px]">
                  <CircleProgress
                    percent={
                      activeSection === "RACE" && selectedRaceIndex !== null
                        ? parseInt(
                            raceFields[selectedRaceIndex].value.replace("%", "")
                          )
                        : activeSection === "AGE" && selectedAgeIndex !== null
                        ? parseInt(
                            ageFields[selectedAgeIndex].value.replace("%", "")
                          )
                        : activeSection === "SEX" && selectedSexIndex !== null
                        ? parseInt(
                            sexFields[selectedSexIndex].value.replace("%", "")
                          )
                        : 0
                    }
                  />
                </div>

                <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] rxl:left-[45%]">
                  If A.I. estimate is wrong, select the correct one
                </p>
              </div>

              <div className="bg-gray-100 pt-4 pb-4 border-t border-black md:border-t">
                {/* RACE */}
                {activeSection === "RACE" && (
                  <div className="space-y-0">
                    <div className="flex justify-between px-4">
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb:2">
                        RACE
                      </h4>
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                        A.I. CONFIDENCE
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {raceFields.map((field, index) => {
                        const isSelected = selectedRaceIndex === index;

                        return (
                          <div
                            key={field.label}
                            onClick={() => setSelectedRaceIndex(index)}
                            className={`flex items-center justify-between h-[48px] px-4 cursor-pointer transition-colors duration-200 
            ${isSelected ? "bg-black" : "hover:bg-[#E1E1E1] bg-transparent"}
          `}
                          >
                            <div className="flex items-center gap-1">
                              <img
                                src={RadioButton}
                                alt="radio button"
                                className={`w-[12px] h-[12px] mr-2 ${
                                  isSelected ? "invert brightness-0" : ""
                                }`}
                              />
                              <span
                                className={`font-normal text-base leading-6 tracking-tight ${
                                  isSelected ? "text-white" : "text-black"
                                }`}
                              >
                                {field.label}
                              </span>
                            </div>
                            <span
                              className={`font-normal text-base leading-6 tracking-tight ${
                                isSelected ? "text-white" : "text-black"
                              }`}
                            >
                              {field.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* AGE */}
                {activeSection === "AGE" && (
                  <div className="space-y-0">
                    <div className="flex justify-between px-4">
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb:2">
                        AGE
                      </h4>
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                        A.I. CONFIDENCE
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {ageFields.map((field, index) => {
                        const isSelected = selectedAgeIndex === index;

                        return (
                          <div
                            key={field.label}
                            onClick={() => setSelectedAgeIndex(index)}
                            className={`flex items-center justify-between h-[48px] px-4 cursor-pointer transition-colors duration-200 ${
                              isSelected
                                ? "bg-black"
                                : "hover:bg-[#E1E1E1] bg-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-1">
                              <img
                                src={RadioButton}
                                alt="radio button"
                                className={`w-[12px] h-[12px] mr-2 ${
                                  isSelected ? "invert brightness-0" : ""
                                }`}
                              />
                              <span
                                className={`font-normal text-base leading-6 tracking-tight ${
                                  isSelected ? "text-white" : "text-black"
                                }`}
                              >
                                {field.label}
                              </span>
                            </div>
                            <span
                              className={` ${
                                isSelected ? "text-white" : "text-black"
                              }`}
                            >
                              {field.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* SEX */}
                {activeSection === "SEX" && (
                  <div className="space-y-0">
                    <div className="flex justify-between px-4">
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb:2">
                        SEX
                      </h4>
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                        A.I. CONFIDENCE
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {sexFields.map((field, index) => {
                        const isSelected = selectedSexIndex === index;

                        return (
                          <div
                            key={field.label}
                            onClick={() => setSelectedSexIndex(index)}
                            className={`flex items-center justify-between h-[48px] px-4 cursor-pointer transition-colors duration-200 ${
                              isSelected
                                ? "bg-black"
                                : "hover:bg-[#E1E1E1] bg-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-1">
                              <img
                                src={RadioButton}
                                alt="radio button"
                                className={`w-[12px] h-[12px] mr-2 ${
                                  isSelected ? "invert brightness-0" : ""
                                }`}
                              />
                              <span
                                className={`font-normal text-base leading-6 tracking-tight ${
                                  isSelected ? "text-white" : "text-black"
                                }`}
                              >
                                {field.label}
                              </span>
                            </div>
                            <span
                              className={`font-normal text-base leading-6 tracking-tight ${
                                isSelected ? "text-white" : "text-black"
                              }`}
                            >
                              {field.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
              <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">
                <a href="/select">
                  <BackButton />
                </a>
                <a href="/">
                  <HomeButton />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layer0131;
