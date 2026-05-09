// components/OtherGameDevelopment.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from 'lucide-react';

export interface GameCard {
  num?: string;
  img?: string;
  url?: string;
  title?: string;
}

interface OtherGameDevelopmentProps {
  heading?: string;
  gameCards?: GameCard[];
}

const OtherGameDevelopment: React.FC<OtherGameDevelopmentProps> = ({ heading, gameCards }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="lg:py-16 py-10 space-y-4 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
      <div className="flex flex-col justify-center text-center">
        <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
          {heading}
        </h2>
      </div>
      <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 mt-6">
        {gameCards?.slice(0, 6)?.map(({ title, url, img }, idx) => (
          <div key={idx} className="w-full">
            <Link href={url} passHref>
              <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <Image src={img} alt={title} width={730} height={419} className="w-full" />
                <div className="p-4 bg-[#5556D1]/80 flex flex-col">
                  <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                    {title}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}

        {showContent &&
          gameCards?.slice(6)?.map(({ title, url, img }, idx) => (
            <div key={idx + 6} className="w-full">
              <Link href={url} passHref>
                <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                  <Image src={img} alt={title} width={730} height={419} className="w-full" />
                  <div className="p-4 bg-[#5556D1]/80 flex flex-col">
                    <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                      {title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>

      <div className="flex justify-center items-center">
        <button
          className="text-[#5556D1] hover:bg-[#5556D1] hover:text-white border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 transition duration-300"
          onClick={() => setShowContent(!showContent)}
        >
          {showContent ? "Load Less" : "Load More"} <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default OtherGameDevelopment;
