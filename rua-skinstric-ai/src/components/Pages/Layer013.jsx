import React, { useEffect, useState } from "react";
import BackButton from "../BackButton";
import HomeButton from "../HomeButton";
import RadioButton from "../../assets/radio-button.png";
import CircleProgress from "../CircleProgress.jsx"
import { data } from "react-router-dom";

const Layer013 = (categoryData) => {
  return Object.entries(categoryData)
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({
      label,
      score: (value * 100).toFixed(2),
    }));
};

function formatCategory() {
  const [data, setData] = useState(null);
  const [actual, setActual] = useState({
    race: null,
    age: null,
    gender: null,
  });

  const Layer013 = (categoryData) => {
    return Object.entries(categoryData)
      .sort((a, b) => b[1] - a[1])
      .map(([label, value]) => ({
        label,
        score: (value * 100).toFixed(2),
      }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("demographicData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setData(parsed);

      // SET HIGHEST SCORE AS DEFAULT
      setActual({
        race: getTop(parsed.race),
        age: getTop(parsed.age),
        gender: getTop(parsed.gender),
      });
    }
  }, []);

  const getTop = (obj) => {
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
  };

  const handleClick = (type, label) => {
    setActual((prev) => ({
      ...prev,
      [type]: label,
    }));
  };

  const race = formatCategory(data.race);
  const age = formatCategory(data.age);
  const gender = formatCategory(data.gender);

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
                <div className="p-3 cursor-pointer bg-[#1A1B1C] text-white flex-1 flex flex-col justify-between hover:bg-[#1E1E12] border-t">
                  {/* <p className="text-base font-semibold">{actual.race}</p> */}
                  <h4 className="text-base font-semibold mb-1">RACE</h4>
                </div>
                <div className="p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#1E1E1E2] border-t">
                  {/* <p className="text-base font-semibold">{actual.age}+</p> */}
                  <h4 className="text-base font-semibold mb-1">AGE</h4>
                </div>
                <div className="p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#1E1E1E2] border-t">
                  {/* <p className="text-base font-semibold">{actual.gender}</p> */}
                  <h4 className="text-base font-semibold mb-1">SEX</h4>
                </div>
              </div>
              <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
                {/* <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                  {actual.race}
                </p> */}

                
                {/* <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "384px",
                      position: "relative",
                      transform: "scale(1)",
                      transformOrigin: "center",
                      //   center
                    }}
                  >
                    <svg
                      className="CircularProgressbar text-[#1A1B1C]"
                      viewBox="0 0 100 100"
                      data-test-id="CircularProgressbar"
                    >
                      <path></path>
                      <path></path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-3xl md:text-[40px] font-normal">
                        {actual.score}
                        <span className="absolute text-xl md:text-3xl">%</span>
                      </p>
                    </div>
                  </div>
                </div> */}
                <CircleProgress />
                <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] rxl:left-[45%]">
                  If A.I. estimate is wrong, select the correct one
                </p>
              </div>
              <div className="bg-gray-100 pt-4 pb-4 md:border-t">
                <div className="space-y-0">
                  <div className="flex justify-between px-4">
                    <h4 className="text-base leading-[24px] tracking-tight font-medium mb:2">
                      RACE
                    </h4>
                    <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                      A.I. CONFIDENCE
                    </h4>
                  </div>

                  {/* <ul className="mt-1">
                    {race.map((item) => (
                      <li
                        key={item.label}
                        className={`cursor-pointer hover:bg-gray-500 ${
                          actual.race === item.label ? "bg-black" : " "
                        }`}
                        onClick={() => handleClick("race", item.label)}
                      >
                        <div className="flex items-center justify-between h-[48px] px-4 cursor-pointer bg-[#1A1B1C] text-white hover:bg-black">
                          <div className="flex items-center gap-1">
                            <img
                              src={RadioButton}
                              alt="radio button"
                              loading="lazy"
                              width={12}
                              height={12}
                              decoding="async"
                              data-nimg="1"
                              className="w-[12px] h-[12px] mr-2"
                              srcSet=""
                              style={{ color: "transparent" }}
                            />

                            <span className="font-normal text-base leading-6 tracking-tight">
                              {item.label}
                            </span>
                          </div>
                          <span className="font-normal text-base leading-6 tracking-tight">
                            {item.score}%
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul> */}

                  <div className="flex items-center justify-between  h-[48px] hover:bg-[#E1E1E2] pc-4 cursor-pointer">
                    <div className="flex items-center gap-1">
                      <img
                        src={RadioButton}
                        alt="radio button"
                        loading="lazy"
                        width={12}
                        height={12}
                        decoding="async"
                        data-nimg="1"
                        className="w-[12px] h-[12px] mr-2"
                        srcSet=""
                        style={{ color: "transparent" }}
                      />
                      <span className="font-normal text-base leading-6 tracking-tight">
                        Southeast Asian
                      </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      21%
                    </span>
                  </div>
                  <div className="flex items-center justify-between  h-[48px] hover:bg-[#E1E1E2] pc-4 cursor-pointer">
                    <div className="flex items-center gap-1">
                      <img
                        src={RadioButton}
                        alt="radio button"
                        loading="lazy"
                        width={12}
                        height={12}
                        decoding="async"
                        data-nimg="1"
                        className="w-[12px] h-[12px] mr-2"
                        srcSet=""
                        style={{ color: "transparent" }}
                      />
                      <span className="font-normal text-base leading-6 tracking-tight">
                        Black
                      </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      13%
                    </span>
                  </div>
                  <div className="flex items-center justify-between  h-[48px] hover:bg-[#E1E1E2] pc-4 cursor-pointer">
                    <div className="flex items-center gap-1">
                      <img
                        src={RadioButton}
                        alt="radio button"
                        loading="lazy"
                        width={12}
                        height={12}
                        decoding="async"
                        data-nimg="1"
                        className="w-[12px] h-[12px] mr-2"
                        srcSet=""
                        style={{ color: "transparent" }}
                      />
                      <span className="font-normal text-base leading-6 tracking-tight">
                        East Asian
                      </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      "8%
                    </span>
                  </div>
                  <div className="flex items-center justify-between  h-[48px] hover:bg-[#E1E1E2] pc-4 cursor-pointer">
                    <div className="flex items-center gap-1">
                      <img
                        src={RadioButton}
                        alt="radio button"
                        loading="lazy"
                        width={12}
                        height={12}
                        decoding="async"
                        data-nimg="1"
                        className="w-[12px] h-[12px] mr-2"
                        srcSet=""
                        style={{ color: "transparent" }}
                      />
                      <span className="font-normal text-base leading-6 tracking-tight">
                        South Asian
                      </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      7%
                    </span>
                  </div>
                  <div className="flex items-center justify-between  h-[48px] hover:bg-[#E1E1E2] pc-4 cursor-pointer">
                    <div className="flex items-center gap-1">
                      <img
                        src={RadioButton}
                        alt="radio button"
                        loading="lazy"
                        width={12}
                        height={12}
                        decoding="async"
                        data-nimg="1"
                        className="w-[12px] h-[12px] mr-2"
                        srcSet=""
                        style={{ color: "transparent" }}
                      />
                      <span className="font-normal text-base leading-6 tracking-tight">
                        White
                      </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      5%
                    </span>
                  </div>
                  <div className="flex items-center justify-between  h-[48px] hover:bg-[#E1E1E2] pc-4 cursor-pointer">
                    <div className="flex items-center gap-1">
                      <img
                        src={RadioButton}
                        alt="radio button"
                        loading="lazy"
                        width={12}
                        height={12}
                        decoding="async"
                        data-nimg="1"
                        className="w-[12px] h-[12px] mr-2"
                        srcSet=""
                        style={{ color: "transparent" }}
                      />
                      <span className="font-normal text-base leading-6 tracking-tight">
                        Middle eastern
                      </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      0%
                    </span>
                  </div>
                </div>
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
}

export default Layer013;
