import { useState, useEffect } from "react";

import BackButton from "../BackButton";
import HomeButton from "../HomeButton";

import RadioButton from "../../assets/radio-button.png";
import CircleProgress from "../CircleProgress";

// const API_URL =
//   "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo";

const Layer0131 = () => {
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(0);
  const [selectedSexIndex, setSelectedSexIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("RACE");

  const [demographicData, setDemographicData] = useState(null);

  const [raceFields, setRaceFields] = useState([]);
  const [ageFields, setAgeFields] = useState([]);
  const [sexFields, setSexFields] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("demographicData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        // const { race, age, gender } = parsedData;
        setDemographicData(parsedData);

        const formatFields = (obj) =>
          Object.entries(obj || {}).map(([label, value]) => ({
            label,
            value: `${Math.round(value * 100)}%`,
          }));

        setRaceFields(formatFields(parsedData.race));
        setAgeFields(formatFields(parsedData.age));
        setSexFields(formatFields(parsedData.gender));
      } catch (error) {
        console.error(
          "Error parsing demographicData from localStorage:",
          error
        );
      }
    } else {
      console.warn("No demographicData found in localStorage.");
    }
  }, []);

  useEffect(() => {
    const demographicDataRaw = localStorage.getItem("demographicData");

    if (!demographicDataRaw) {
      console.error("No demographicData found in localStorage.");

      return;
    }

    try {
      const parsedData = JSON.parse(demographicDataRaw);
      setDemographicData(parsedData);
    } catch (error) {
      console.error("Error parsing demographicData from localStorage:", error);
    }
  }, []);

  const getActiveFields = () => {
    if (activeSection === "RACE") return raceFields;
    if (activeSection === "AGE") return ageFields;
    if (activeSection === "SEX") return sexFields;
    return [];
  };

  const getSelectedLabel = () => {
    if (activeSection === "RACE") return raceFields[selectedRaceIndex]?.label;
    if (activeSection === "AGE") return ageFields[selectedAgeIndex]?.label;
    if (activeSection === "SEX") return sexFields[selectedSexIndex]?.label;
    return "";
  };

  const getSelectedValue = () => {
    if (activeSection === "RACE" && raceFields[selectedRaceIndex])
      return raceFields[selectedRaceIndex].value;
    if (activeSection === "AGE" && ageFields[selectedAgeIndex])
      return ageFields[selectedAgeIndex].value;
    if (activeSection === "SEX" && sexFields[selectedSexIndex])
      return sexFields[selectedSexIndex].value;
    return "0%";
  };

  const handleSelection = (index) => {
    if (activeSection === "RACE") setSelectedRaceIndex(index);
    if (activeSection === "AGE") setSelectedAgeIndex(index);
    if (activeSection === "SEX") setSelectedSexIndex(index);
  };

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
              {/* Left Tabs */}
              <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
                {["RACE", "AGE", "SEX"].map((section) => {
                  const index =
                    section === "RACE"
                      ? selectedRaceIndex
                      : section === "AGE"
                      ? selectedAgeIndex
                      : selectedSexIndex;

                  const fields =
                    section === "RACE"
                      ? raceFields
                      : section === "AGE"
                      ? ageFields
                      : sexFields;

                  return (
                    <div
                      key={section}
                      className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t border-black hover:bg-[#1E1E12] ${
                        activeSection === section
                          ? "bg-[#1A1B1C] text-white"
                          : "bg-[#F3F3F4] text-black hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveSection(section)}
                    >
                      <p className="text-base font-semibold">
                        {fields[index]?.label || ""}
                      </p>
                      <h4 className="text-base font-semibold mb-1">
                        {section}
                      </h4>
                    </div>
                  );
                })}
              </div>

              {/* Center Circle */}
              <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] border-t border-black md:border-t">
                <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                  {getSelectedLabel()}
                </p>
                <div className="absolute bottom-4 right-4 w-[384px] h-[384px]">
                  <CircleProgress
                    percent={parseInt(
                      getSelectedValue()?.replace("%", "") || "0"
                    )}
                  />
                </div>
                <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] rxl:left-[45%]">
                  If A.I. estimate is wrong, select the correct one
                </p>
              </div>

              {/* Right Options */}
              <div className="bg-gray-100 pt-4 pb-4 border-t border-black md:border-t">
                {getActiveFields().length > 0 && (
                  <div className="space-y-0">
                    <div className="flex justify-between px-4">
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                        {activeSection}
                      </h4>
                      <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                        A.I. CONFIDENCE
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {getActiveFields().map((field, index) => {
                        const isSelected =
                          (activeSection === "RACE" &&
                            selectedRaceIndex === index) ||
                          (activeSection === "AGE" &&
                            selectedAgeIndex === index) ||
                          (activeSection === "SEX" &&
                            selectedSexIndex === index);

                        return (
                          <div
                            key={field.label}
                            onClick={() => handleSelection(index)}
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
