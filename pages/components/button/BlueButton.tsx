import Link from "next/link";
import React from "react";

export default function BlueButton(props: any) {
  return (
    <>
      <a href={props.url} >
        <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA] rounded cursor-pointer text-white w-fit group">
          {props.title}
        </button>
      </a>
    </>
  );
}
