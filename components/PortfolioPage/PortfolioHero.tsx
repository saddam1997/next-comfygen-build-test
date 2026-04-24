import React, { useState } from "react";
import Link from "next/link";
import ContactFrom from "./ContactFrom";
import { X, ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import HeroClient from "./HeroClient";



const PortfolioHero = ({ Data }: any) => {
  return (
    <section className="bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] py-[5rem]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="lg:grid-cols-2 grid md:items-center lg:space-x-20 lg:space-y-0 space-y-6 mx-auto ">
          <div>
            <div className="space-y-2">
              <h1 className="text-white xl:text-4xl text-xl font-extrabold xl:leading-[3rem]  text-start">
                {Data?.heading}
              </h1>
              <h2 className="w-full mx-auto xl:text-3xl text-xl font-normal text-white text-start">
                {Data?.subhead}
              </h2>
              {Data?.ptag && (
                <p
                  className="w-full mx-auto text-sm font-light text-white lg:text-base"
                  dangerouslySetInnerHTML={{ __html: Data?.ptag }}
                />
              )}
              {Data?.ptag1 && (
                <p
                  className="w-full mx-auto text-sm font-light text-white lg:text-lg text-start"
                  dangerouslySetInnerHTML={{ __html: Data?.ptag1 }}
                />
              )}
              {Data?.ptag2 && (
                <p className="w-full mx-auto text-sm font-light text-white lg:text-lg text-start">
                  {Data?.ptag2}
                </p>
              )}
            </div>
            {Data?.buttonText && (
              <div className="">
                <div className="mt-6 min-h-[48px]">
                  <HeroClient />
                </div>


              </div>
            )}
          </div>
          <div className="hidden lg:block relative w-full h-[260px] sm:h-[320px] md:h-[369px]">
            <Image
              src={Data?.imageSrc}
              alt={Data?.heading}
              fill
              priority
              sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           640px"
              className="object-contain"
            />
          </div>

        </div>
      </div>


    </section>
  );
};

export default PortfolioHero;
