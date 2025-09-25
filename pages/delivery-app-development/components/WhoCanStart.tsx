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
    <div className="bg-gray-200 max-w-9xl">
      <div className="py-10 px-4 max-w-6xl mx-auto ">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg transition-all duration-300 hover:bg-[#5556D1] hover:text-white cursor-pointer shadow-xl"
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
