import React from "react";
import CircleWithText from "./CircleWithText";
import { findTop3InfluencersByReachRate } from "@/functions/findTop3InfluencersByReachRate";

const CircleWithTextGroup = () => {
  const top3 = findTop3InfluencersByReachRate();

  return (
    <div className="w-full bg-white sm:flex flex-col sm:flex-row  justify-between px-4 py-2 mt-4 shadow-md">
      <div className="sm:flex hidden justify-start gap-2">
        {top3.slice(0, 3).map((item, index) => (
          <CircleWithText key={index} text={item.influencer} />
        ))}
      </div>
      <div className="flex justify-center text-black items-center">
        <h1>
          <span className="font-semibold">TOP 3 INFLUENCER</span> BY REACH RATE
        </h1>
      </div>
      <div className="flex sm:justify-end justify-center gap-2 sm:mt-0 mt-1">
        {top3.slice(0, 3).map((item, index) => (
          <CircleWithText key={index} text={item.influencer} />
        ))}
      </div>
    </div>
  );
};

export default CircleWithTextGroup;
