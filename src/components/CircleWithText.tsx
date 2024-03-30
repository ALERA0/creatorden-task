"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CircleWithText = ({ text }) => {
  const router = useRouter();
  return (
    <div
      className="border-2 bg-gray-400 rounded-full justify-center items-center cursor-pointer flex w-8 h-8 border-black text-black p-1 hover:bg-gray-500 hover:text-white duration-200"
      onClick={()=>router.push(text)}
    >
      <p className=" text-xs font-semibold ">{text}</p>
    </div>
  );
};

export default CircleWithText;
