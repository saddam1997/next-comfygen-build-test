import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import $ from 'jquery';

export default function DesktopNav(props: any) {
  return (
    <div className="headered w-full">
      <nav className="z-20 flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:px-0 ">
        <Link
          passHref={true}
          href="/"
          className="relative flex items-center flex-shrink-0 text-white">
          <Image
            src="https://www.comfygen.com/media/svg/comfygen-logo.svg"
            alt="comfygen-logo"
            width={244}
            height={51}
            priority
          />
        </Link>
        <div className={"xl:flex hidden  xl:w-auto w-full items-center text-white px-6 "}>
          <div className="block space-x-4 text-sm font-medium 2xl:space-x-4 lg:flex lg:items-center lg:space-y-0 lg:p-0">
            <Link href="/quote" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Get a Quote
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
