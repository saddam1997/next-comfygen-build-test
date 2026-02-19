;
import { useState } from 'react';
import Image from "next/image";

export default function Industries() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
        <div className="flex justify-center  lg:justify-start pb-10 lg:pb-0 w-full">
          <Image
            className="rounded-md"
            title=" We Introduce Board Game Development Services to Various Industries"
            alt=" We Introduce Board Game Development Services to Various Industries"
            src="https://www.comfygen.com/img/we-introduce-board-g.webp"
            height={450}
            width={650}

            unoptimized={true}
          />
        </div>
        <div className="w-full space-y-6 text-left">
          <div className="space-y-4">
            <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
              We Introduce Board Game Development Services to Various Industries
            </h2>
            <p className="text-base text-black">We are innovators in board game software development services, creating customized and immersive gaming stories for quite a number of industries.</p>
            <h3>Detailed Services for Different Sectors</h3>
            <ul className="px-3 list-disc space-y-1">
              <li>We create instructional board games for the schooling sector to promote learning. Our gamified healthcare answers enhance patient rehabilitation and engagement.
              </li>
              <li>Strategic board games are revolutionizing corporate training by encouraging collaboration and crucial questioning. </li>
              <li>Board games with journey-associated subject matters are beneficial for tourism enterprise promotion.
              </li>
              <li>Our zone-spanning customizable answers provide present-day and fun board video games that perfectly health the targets and functions of every enterprise we work with.
              </li>
            </ul>
          </div>
          <div className="flex flex-row">
            <a href='/quote' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Get a QUOTE</a>
          </div>
        </div>
      </div>
    </section>
  );
}
