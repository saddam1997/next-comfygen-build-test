import Link from "next/link";
import React from "react";

export default function GradientRoundFullButton(props: any) {
  return (
    <a href={props.url} className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-80 group-hover:h-60 opacity-10 origin-center"></span>{props.title}
    </a>
  );
}
