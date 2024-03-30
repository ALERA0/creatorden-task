"use client";
import React, { useEffect, useState } from "react";
import InfoLineWithPerc from "@/components/InfoLineWithPerc";
import CircleWithTextGroup from "@/components/CircleWithTextGroup";
import LinesWithRate from "@/components/LinesWithRate";
import { calculateTotalAndReachRate } from "@/functions/calculateTotalAndReachRate";
import { calculateShareCounts } from "@/functions/calculateShareCounts";
import { calculateStatistic } from "@/functions/calculateStatistic";
import CircleWithText from "@/components/CircleWithText";
import { Spinner } from "flowbite-react";

export default function HomePage({ params }) {
  const [isLoading, setIsLoading] = useState(true); 

  const reachRate2020 = calculateTotalAndReachRate(
    params.tab ? params.tab : params,
    2020
  );
  const reachRate2021 = calculateTotalAndReachRate(
    params.tab ? params.tab : params,
    2021
  );
  const totalShare2020 = calculateShareCounts(
    params.tab ? params.tab : params,
    2020
  );
  const totalShare2021 = calculateShareCounts(
    params.tab ? params.tab : params,
    2021
  );
  const statisticInfo = calculateStatistic(params.tab ? params.tab : params);

  const profitReachRate = parseFloat(
    (reachRate2021 - reachRate2020).toFixed(2)
  );


  // 2 saniye sonra yükleme durumunu false yap
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Temizlik
    return () => clearTimeout(timer);
  }, []);



  return (
    <main className="w-full sm:h-screen h-full bg-[#C7CFD1] flex justify-center items-center xl:px-0 px-2 sm:py-0 py-2">
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-full ">
          <Spinner aria-label="Loading"  size="xl" color="warning"/>
          <p className="text-black">Loading...</p>
        </div>
      ) : (
        <div className="2xl:w-2/3 xl:w-3/4 w-full  pb-8  rounded-3xl bg-[#DEE1E2] 2xl:pt-6 pt-5   flex-col shadow-lg  ">
          <div className="w-full flex justify-between text-black font-semibold ">
            <div className="px-3 bg-white py-2 rounded-r-lg flex items-center ">
              <p className="sm:text-2xl text-sm">REACH RATE</p>
            </div>
            <p className="items-center flex text-2xl">{params.tab}</p>
            <div className="sm:px-3 px-2 bg-white py-2 rounded-l-lg flex sm:gap-6 gap-2  items-center">
              <p className="sm:text-2xl text-sm ">{reachRate2021}%</p>
              <div className="flex flex-col">
                <p
                  className={`sm:text-sm text-xs font-semibold ${
                    profitReachRate > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {profitReachRate > 0 ? "+" : null}
                  {profitReachRate}%
                </p>
                <p className="sm:text-sm text-xs">in 2021</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center py-2 gap-2">
            <CircleWithText text={"AA"} />
            <CircleWithText text={"BB"} />
            <CircleWithText text={"CC"} />
            <CircleWithText text={"DD"} />
            <CircleWithText text={"EE"} />
            <CircleWithText text={"FF"} />
          </div>
          <div className="w-full  justify-between text-black  grid grid-cols-3   ">
            <p className="font-semibold sm:pl-6 pl-2 sm:text-xl text-base  text-start col-span-1 ">
              2020
            </p>
            <div className="grid gap-4 col-span-1 justify-center items-center  grid-cols-6 sm:text-base text-sm">
              <p className=" col-span-1  justify-center flex">%</p>
              <p className="font-semibold  col-span-1 justify-center flex">#</p>
              <p className="font-semibold  col-span-2 justify-center flex">
                TYPE
              </p>
              <p className="font-semibold  col-span-1 justify-center flex">#</p>
              <p className=" col-span-1 justify-center flex">%</p>
            </div>
            <p className="font-semibold sm:pr-6 pr-2 sm:text-xl text-base col-span-1 text-end ">
              2021
            </p>
          </div>
          <InfoLineWithPerc
            firstWidth={totalShare2020.storyReachPercentage}
            firstPerc={totalShare2020.storyPercentage}
            firstCount={totalShare2020.shareCounts.story}
            type={"STORIES"}
            secondCount={totalShare2021.shareCounts.story}
            secondPerc={totalShare2021.storyPercentage}
            secondWidth={totalShare2021.storyReachPercentage}
            change={parseFloat(
              totalShare2021.storyReachPercentage -
                totalShare2020.storyReachPercentage
            ).toFixed(2)}
            backgroundTrans={"bg-[#CB9CDA]"}
            backgroundFirst={totalShare2020.storyReachPercentage>totalShare2021.storyReachPercentage ? "bg-[#B32BD5]" : "bg-[#BA80C9]"}
            backgroundSecond={totalShare2021.storyReachPercentage<totalShare2020.storyReachPercentage ?   "bg-[#BA80C9]":"bg-[#B32BD5]"}

          />
          <InfoLineWithPerc
            firstWidth={totalShare2020.staticReachPercentage}
            firstPerc={totalShare2020.staticPercentage}
            firstCount={totalShare2020.shareCounts.static}
            type={"STATIC POSTS"}
            secondCount={totalShare2021.shareCounts.static}
            secondPerc={totalShare2021.staticPercentage}
            secondWidth={totalShare2021.staticReachPercentage}
            change={parseFloat(
              totalShare2021.staticReachPercentage -
                totalShare2020.staticReachPercentage
            ).toFixed(2)}
            backgroundTrans={"bg-[#F0CDB7]"}
            backgroundFirst={totalShare2020.staticReachPercentage>totalShare2021.staticReachPercentage ? "bg-[#DC6A19]" : "bg-[#E29D6B]"}
            backgroundSecond={totalShare2021.staticReachPercentage<totalShare2020.staticReachPercentage ?   "bg-[#E29D6B]":"bg-[#DC6A19]"}

          />
          <InfoLineWithPerc
            firstWidth={totalShare2020.reelsReachPercentage}
            firstPerc={totalShare2020.reelsPercentage}
            firstCount={totalShare2020.shareCounts.reels}
            type={"REELS"}
            secondCount={totalShare2021.shareCounts.reels}
            secondPerc={totalShare2021.reelsPercentage}
            secondWidth={totalShare2021.reelsReachPercentage}
            change={parseFloat(
              totalShare2021.reelsReachPercentage -
                totalShare2020.reelsReachPercentage
            ).toFixed(2)}
            backgroundTrans={"bg-[#C1E9F3]"}
            backgroundFirst={totalShare2020.reelsReachPercentage>totalShare2021.reelsReachPercentage ? "bg-[#047BE2]" : "bg-[#61A8E6]"}
            backgroundSecond={totalShare2021.reelsReachPercentage<totalShare2020.reelsReachPercentage ?   "bg-[#61A8E6]":"bg-[#047BE2]"}

          />
          <CircleWithTextGroup />
          <div className="w-full px-4 flex flex-col mt-4 gap-2">
            <LinesWithRate
              type={"STATIC"}
              rateInfo={`Static Post Reach Rate is ${
                statisticInfo.static > 0 ? "up" : "down"
              } by ${statisticInfo.static}%`}
              developmentInfo={statisticInfo.static > 0 ? "GREAT" : "IMPROVE"}
              borderColor={"border-[#D68D70]"}
              textColor={"text-[#D68D70]"}
              developmentBackground={
                statisticInfo.static > 0 ? "bg-[#7EA486]" : "bg-[#D3BAB0]"
              }
            />
            <LinesWithRate
              type={"VIDEO"}
              rateInfo={`Reels Reach Rate is ${
                statisticInfo.reels > 0 ? "up" : "down"
              } by ${statisticInfo.reels}%`}
              developmentInfo={statisticInfo.reels > 0 ? "GREAT" : "IMPROVE"}
              borderColor={"border-[#75C6F5]"}
              textColor={"text-[#75C6F5]"}
              developmentBackground={
                statisticInfo.reels > 0 ? "bg-[#7EA486]" : "bg-[#D3BAB0]"
              }
            />
            <LinesWithRate
              type={"ALL"}
              rateInfo={`Reach Rate in total ${
                statisticInfo.reachRateDifference > 0
                  ? "increased"
                  : "decreased"
              } by ${statisticInfo.reachRateDifference}%`}
              developmentInfo={
                statisticInfo.reachRateDifference > 0 ? "GREAT" : "IMPROVE"
              }
              borderColor={"border-black"}
              textColor={"text-black"}
              developmentBackground={
                statisticInfo.reachRateDifference > 0
                  ? "bg-[#7EA486]"
                  : "bg-[#D3BAB0]"
              }
            />
            <LinesWithRate
              type={"ALL"}
              rateInfo={`Total number of content ${
                statisticInfo.sharesDifference > 0 ? "increased" : "decreased"
              } by ${statisticInfo.sharesDifference}%`}
              developmentInfo={
                statisticInfo.sharesDifference > 0 ? "GREAT" : "IMPROVE"
              }
              borderColor={"border-black"}
              textColor={"text-black"}
              developmentBackground={
                statisticInfo.sharesDifference > 0
                  ? "bg-[#7EA486]"
                  : "bg-[#D3BAB0]"
              }
            />
            <LinesWithRate
              type={"STORIES"}
              rateInfo={`Stories Reach Rate is ${
                statisticInfo.story > 0 ? "up" : "down"
              } by ${statisticInfo.story}%`}
              developmentInfo={statisticInfo.story > 0 ? "GREAT" : "IMPROVE"}
              borderColor={"border-[#733EB0]"}
              textColor={"text-[#733EB0]"}
              developmentBackground={
                statisticInfo.story > 0 ? "bg-[#7EA486]" : "bg-[#D3BAB0]"
              }
            />
          </div>
        </div>
      )}
    </main>
  );
}
