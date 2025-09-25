import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

interface GameDevItem {
  img: string;
  title: string;
  num: string;
  url: string;
}

interface SportsApiSupportProps {
  heading: string;
  description: string;
  gameDevItems: GameDevItem[];
}

const SportsApiSupportSection: React.FC<SportsApiSupportProps> = ({
  heading,
  description,
  gameDevItems
}) => {
  return (
    <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
      <div className="space-y-6 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#fff] text-center">
            {heading}
          </h2>
          <p className="text-base text-white">
            {description}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-6 gap-6 relative py-6 capitalize">
          {gameDevItems?.map(({ img, title, num, url }) => (
            <a
              href={url}
              key={num}
              className="flex justify-start items-center rounded-lg bg-white space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center">
                <Image
                  src={img}
                  alt={title}
                  width={64}
                  height={64}
                  className="group-hover:scale-105 transition-all duration-200 transform"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <a href="/contact-us" className="mt-5">
            <button className="text-[#fff] hover:bg-[#ffff] hover:text-[#5556D1] border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
              Get A Free Consultation <MdOutlineArrowOutward />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SportsApiSupportSection;
