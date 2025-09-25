import Link from "next/link";
import React from "react";

export default function ConnectWithExpertButtonHoverEffect(props: any) {
  return (
    <a href={props.url} >
      <button className=" bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] hover:bg-white text-white hover:text-black border shadow rounded-lg  px-10  transition-all duration-500 ease-in py-5 text-2xl">{props.title}</button>
    </a>
  );
}
