import Link from "next/link";
import React from "react";

export default function GradientRoundFullButton(props: any) {
  return (
    <>
      <a href={props.url}>
        <button type="button"
          className="rounded-full px-7 pb-2.5 pt-3 text-lg font-medium uppercase leading-normal bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white transition duration-150 ease-in-out  hover:bg-neutral-900 hover:bg-opacity-10 "
          data-te-ripple-init data-te-ripple-color="light">
          {props.title}
        </button>
      </a>
    </>
  );
}
