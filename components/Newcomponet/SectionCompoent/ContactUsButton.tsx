import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ContactUsButton(props: any) {
  return (
    <>
      <a href={props.url}  >
        <button className="shadow-2xl px-8 py-3 md:text-lg text-sm font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded cursor-pointer text-white w-fit group hover:scale-75 transition-all duration-300 ease-in">
          {props.title}
        </button>
      </a>
    </>
  );
}
