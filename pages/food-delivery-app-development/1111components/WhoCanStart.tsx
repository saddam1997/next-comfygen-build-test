"use client";

import React from "react";

interface Card {
  heading?: string;
  description?: string;
}

interface Props {
  title: string;
  description: string;
  cards: Card[];
}

const WhoCanStart: React.FC<Props> = ({ title, description, cards }) => {
  return (
    <div className="bg-[#5556D1] max-w-9xl mt-8">
      <div className="py-10 px-4 max-w-6xl mx-auto ">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-white">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[1px] bg-white">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="bg-[#5556D1] text-white cursor-pointer p-8  flex flex-col justify-start transition-all duration-300 hover:bg-[#0f0f0f]"
            >
              <h2 className="text-xl font-semibold mb-2">{card.heading}</h2>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: card.description || "" }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanStart;
