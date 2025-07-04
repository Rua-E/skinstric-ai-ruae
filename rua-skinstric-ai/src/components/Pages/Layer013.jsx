import React from "react";

const Layer013 = () => {
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
                <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]"></div>
                <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t"></div>
                <div className="bg-gray-100 pt-4 pb-4 md:border-t"></div>
            </div>
            <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16"></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layer013;
