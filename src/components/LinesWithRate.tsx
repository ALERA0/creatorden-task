import React from "react";

const LinesWithRate = ({
  type,
  rateInfo,
  developmentInfo,
  borderColor,
  developmentBackground,
  textColor,
}) => {
  return (
    <div
      className={`w-full flex py-2 sm:px-2 px-1 border-2  ${borderColor} rounded-xl justify-between  `}
    >
      <div className="w-full flex sm:gap-0 gap-1">
        <div className="sm:w-20 w-16 flex justify-center items-center ">
          <p className={` ${textColor}  sm:font-bold font-semibold sm:text-base text-xs  `}>{type}</p>
        </div>
        <p className="text-black font-semibold flex justify-center items-center">
          {rateInfo}
        </p>
      </div>
      <div
        className={`rounded-xl sm:w-32 w-24 py-2 flex  justify-center items-center   ${developmentBackground} text-black sm:text-lg text-sm`}
      >
        <p className="font-semibold">{developmentInfo}</p>
      </div>
    </div>
  );
};

export default LinesWithRate;
