import { useState, useEffect } from "react";

import BackButton from "../BackButton";

import RadioButton from "../../assets/radio-button.png";
import CircleProgress from "../CircleProgress";
import { useNavigate } from "react-router-dom";

const Layer0131 = () => {
  const navigate = useNavigate();
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(0);
  const [selectedSexIndex, setSelectedSexIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("RACE");

  const [demographicData, setDemographicData] = useState(null);

  const [raceFields, setRaceFields] = useState([]);
  const [ageFields, setAgeFields] = useState([]);
  const [sexFields, setSexFields] = useState([]);

  const [selectedRaceLabel, setSelectedRaceLabel] = useState("");
  const [selectedSexLabel, setSelectedSexLabel] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("demographicData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);

        setDemographicData(parsedData);

        const formatFields = (obj) =>
          Object.entries(obj || {}).map(([label, value]) => ({
            label,
            value: `${Math.round(value * 100).toFixed(2)}%`,
          }));

        setRaceFields(formatFields(parsedData.race));
        setSexFields(formatFields(parsedData.gender));

        const sortedRace = [...formatFields(parsedData.race)].sort(
          (a, b) => parseFloat(b.value) - parseFloat(a.value)
        );
        setSelectedRaceLabel(sortedRace[0]?.label || "");

        const sortedSex = [...formatFields(parsedData.gender)].sort(
          (a, b) => parseFloat(b.value) - parseFloat(a.value)
        );
        setSelectedSexLabel(sortedSex[0]?.label || "");

        const formattedAgeFields = formatFields(parsedData.age);

        // Find the index of the highest value
        let maxIndex = 0;
        let maxValue = -Infinity;

        formattedAgeFields.forEach((field, idx) => {
          const num = parseFloat(field.value.replace("%", ""));
          if (num > maxValue) {
            maxValue = num;
            maxIndex = idx;
          }
        });

        setAgeFields(formattedAgeFields);
        setSelectedAgeIndex(maxIndex);
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

  const getSelectedLabel = () => getSelectedField()?.label || "";

  const getSelectedValue = () => getSelectedField()?.value || "0%";

  const handleSelection = (index) => {
    const field = getSortedFieldsWithIndex()[index];
    if (activeSection === "RACE") {
      setSelectedRaceLabel(field.label);
    } else if (activeSection === "AGE") {
      setSelectedAgeIndex(field.originalIndex);
    } else if (activeSection === "SEX") {
      setSelectedSexLabel(field.label);
    }
  };

  const getSelectedField = () => {
    if (activeSection === "RACE") {
      return raceFields.find((f) => f.label === selectedRaceLabel);
    }
    if (activeSection === "SEX") {
      return sexFields.find((f) => f.label === selectedSexLabel);
    }
    if (activeSection === "AGE") {
      return ageFields[selectedAgeIndex];
    }
    return null;
  };

  const getSortedFieldsWithIndex = () => {
    const fields = getActiveFields();
    if (activeSection === "AGE") {
      return fields.map((f, i) => ({ ...f, originalIndex: i }));
    }

    return fields
      .map((f, i) => ({ ...f, originalIndex: i }))
      .sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
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

            <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-0 md:gap-4 pb-0 md:pb-0 md:mb-0">
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
                        {(fields[index]?.label || "").toUpperCase()}
                      </p>
                      <h4 className="text-base font-semibold mb-1">
                        {section}
                      </h4>
                    </div>
                  );
                })}
              </div>

              {/* Center Circle */}
              <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[55vh] border-t border-black md:border-t">
                <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                  {activeSection === "RACE"
                    ? getSelectedLabel()?.charAt(0).toUpperCase() +
                      getSelectedLabel()?.slice(1).toLowerCase()
                    : activeSection === "AGE"
                    ? `${getSelectedLabel()} y.o.`
                    : getSelectedLabel()?.toUpperCase()}
                </p>
                <div className="absolute bottom-0.5 right-4 w-[384px] h-[384px]">
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
              <div className="bg-gray-100 pt-4 border-t border-black md:border-t h-[100%]">
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
                      {getSortedFieldsWithIndex().map((field, index) => {
                        const isSelected =
                          (activeSection === "RACE" &&
                            field.label === selectedRaceLabel) ||
                          (activeSection === "AGE" &&
                            field.originalIndex === selectedAgeIndex) ||
                          (activeSection === "SEX" &&
                            field.label === selectedSexLabel);

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
                                {activeSection === "RACE"
                                  ? field.label?.charAt(0).toUpperCase() +
                                    field.label?.slice(1).toLowerCase()
                                  : activeSection === "SEX"
                                  ? field.label?.toUpperCase()
                                  : field.label}
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

            <div className="pt-4 md:pt-[37px] pb-10 mb-20 bg-white sticky bottom-40 md:static md:bottom-0 md:mb-16">
              <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">
                <a href="/select">
                  <BackButton />
                </a>

                <div className="flex justify-center space-x-6">
                  <button
                    className="px-4 py-1 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 shadow-md text-sm"
                    onClick={() => navigate("/result")}
                  >
                    RESET
                  </button>
                  <button
                    className="px-6 py-2 bg-[#1A1B1C] text-[#FCFCFC] cursor-not-allowed hover:bg-gray-800 shadow-md text-sm"
                    disabled
                  >
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layer0131;
