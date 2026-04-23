// "use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from 'lucide-react';
const CardClient = ({ safeData }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="grid py-10 text-left md:grid-cols-2 grid-cols-1 2xl:gap-8 gap-4">
        {safeData.map((techItem: any, index: number) => {
          const isHidden = !showAll && index >= 4;

          return (
            <div
              key={index}
              className={`bg-[#FAFAFA] p-6 border border-[#5556D1]/10 group rounded-md space-y-4 
              hover:bg-[#5556D1]/10 hover:border-[#5556D1] cursor-pointer transition-all duration-200
              ${isHidden ? "hidden" : ""}`}
            >
              {/* Icon */}
              <div className="bg-black w-12 h-12 rounded-md flex items-center justify-center">
                <Image
                  src={techItem.img}
                  alt={techItem.title || "icon"}
                  width={40}
                  height={40}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="2xl:text-2xl text-xl text-[#212121] font-semibold">
                  {techItem.title}
                </h3>
                <p
                  className="text-base text-[#212121]"
                  dangerouslySetInnerHTML={{ __html: techItem.desc }}
                />
              </div>

              {/* List */}
              {techItem?.listItems && (
                <ul className="mt-4 space-y-2">
                  {techItem.listItems.map((item: any, idx: number) => (
                    <li key={idx} className="flex items-center gap-1">
                      <Star /> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* Button */}
      {safeData.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-2 rounded-full bg-[#5556D1] text-white font-semibold"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </>
  );
};

export default CardClient;