import React from "react";

const InfoLineWithPerc = ({
  firstWidth,
  firstPerc,
  firstCount,
  type,
  secondCount,
  secondWidth,
  secondPerc,
  change,
  backgroundTrans,
  backgroundFirst,
  backgroundSecond
}) => {
  return (
    <div className={`w-full  justify-between text-black grid grid-cols-3 mt-4 ${backgroundTrans} `}>
      <div className="sm:col-span-1 hidden sm:flex w-full pr-4">
        <div className="w-full rounded-r-lg">
          <div
            className={`${backgroundFirst} font-medium text-blue-100 text-center flex p-0.5 leading-none rounded-r-lg h-12  items-center justify-start xl:pl-4 text-xl `}
            style={{ width: `${firstWidth}%` }} // Değişken firstWidth burada kullanıldı
          >
            {firstWidth}%
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:hidden w-full pr-4">
        <div className="w-4/5 rounded-r-lg flex gap-1">
          <div
            className={`${backgroundFirst} font-medium text-blue-100 text-center flex p-0.5 leading-none rounded-r-lg h-12  items-center justify-start xl:pl-4 text-xl `}
            style={{ width: `${firstWidth}%` }}
          />

          <p className="flex justify-center items-center text-xs">
            {firstWidth}%
          </p>
        </div>
      </div>
      <div className="grid  gap-6 sm:gap-4 col-span-1 justify-center items-center grid-cols-6 sm:text-base text-xs">
        <p className="col-span-1 justify-center flex">{firstPerc}</p>
        <p className="font-semibold col-span-1 justify-center flex">
          {firstCount}
        </p>
        <p className="font-semibold col-span-2 justify-center sm:text-base text-xs text-center flex">
          {type}
        </p>
        <p className="font-semibold col-span-1 justify-center flex">
          {secondCount}
        </p>
        <p className="col-span-1 justify-center flex">{secondPerc}</p>
      </div>
      <div className="sm:col-span-1 hidden sm:flex w-full pl-4">
        <div className="w-full rounded-l-lg flex  justify-end ">
          <p
            className={`${
              change > 0 ? "text-green-800" : "text-red-800"
            } sm:flex hidden justify-center items-center text-xs font-semibold`}
          >
            {change > 0 ? "+" : null}
            {change}%
          </p>
          <div className="w-full flex justify-end">
            <div
              className={`${backgroundSecond} font-medium text-blue-100 text-center py-0.5 leading-none rounded-l-lg h-12 flex  items-center justify-end xl:pr-4 text-xl`}
              style={{ width: `${secondWidth}%` }}
            >
              {secondWidth}%
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:hidden w-full pl-3">
        <div className="w-full rounded-l-lg flex  justify-end ">
          <div className="w-5/6 flex justify-end gap-1">
            <p className="flex justify-center items-center text-xs">{secondWidth}%</p>
            <div
              className={`${backgroundSecond} font-medium text-blue-100 text-center py-0.5 leading-none rounded-l-lg h-12 flex  items-center justify-end xl:pr-4 text-xl`}
              style={{ width: `${secondWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLineWithPerc;
