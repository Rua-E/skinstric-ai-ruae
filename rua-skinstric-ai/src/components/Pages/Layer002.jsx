import BackButton from "../BackButton";
import ToStartAnalysisForm from "../ToStartAnalysisForm";

import LargeRectangle from "../../assets/Rectangle 2780.png";
import MediumRectangle from "../../assets/Rectangle 2779.png";
import SmallRectangle from "../../assets/Rectangle 2778.png";

const Layer002 = () => {
  return (
    <>
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center ">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <ToStartAnalysisForm />
          <img
            alt="Diamond Large"
            loading="lazy"
            width={762}
            height={762}
            decoding="async"
            data-nimg="1"
            className="absolute w-[400px] h-[400px] md:w-[762px] md:h-[762px] animate-spin-slow"
            srcSet={`${LargeRectangle} 1x, ${LargeRectangle} 2x`}
            src={LargeRectangle}
            style={{ color: "transparent" }}
          />
          <img
            alt="Diamond Medium"
            loading="lazy"
            width={682}
            height={682}
            decoding="async"
            data-nimg="1"
            className="absolute w-[320px] h-[320px] md:w-[682px] md:h-[682px] animate-spin-slower"
            srcSet={`${MediumRectangle} 1x, ${MediumRectangle} 2x`}
            src={MediumRectangle}
            style={{ color: "transparent" }}
          />
          <img
            alt="Diamond Small"
            loading="lazy"
            width={602}
            height={602}
            decoding="async"
            data-nimg="1"
            className="absolute w-[240px] h-[240px] md:w-[602px] md:h-[602px] animate-spin-slowest"
            srcSet={`${SmallRectangle} 1x, ${SmallRectangle} 2x`}
            src={SmallRectangle}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <a className="inset-0" aria-label="Back" href="/">
            <BackButton />
          </a>
        </div>
      </div>
    </>
  );
};

export default Layer002;
