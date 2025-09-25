import Link from "next/link";
import React from "react";

export default function LinkTagButton(props: any) {
  return (
    <>
      <a href={props.url} >
        <span className="block text-base font-medium active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white lg:mt-0 cursor-pointer transition duration-300 relative">
          {props.title}
        </span>
      </a>
    </>
  );
}
