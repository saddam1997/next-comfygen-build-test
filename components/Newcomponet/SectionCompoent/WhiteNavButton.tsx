import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function WhiteNavButton(props: any) {
  return (
    <>
      <a href={props.url} >
        <button className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-white rounded-full cursor-pointer text-slate-900 w-fit group">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
          {props.title}
        </button>
      </a>
    </>
  );
}
