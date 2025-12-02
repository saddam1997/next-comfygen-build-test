"use client";

import React from "react";
import Image from "next/image";

interface CardData {
  image: string;
  alt: string;
  title: string;
  description: string;
  points: string[];
}

interface IndustriesBlockchainProps {
  heading: string;
  description: string;
  cards: CardData[];
}

const IndustriesBlockchain: React.FC<IndustriesBlockchainProps> = ({
  heading,
  description,
  cards = [],
}) => {
  if (!Array.isArray(cards) || cards.length === 0) return null;

  return (
    <div className="p-4 space-y-8 max-w-9xl">
      <div className="text-center flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold max-w-4xl">{heading}</h1>
        <p className="mt-2 max-w-5xl text-base">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-md p-4 space-y-3 border overflow-hidden"
          >
            {card.image && (
              <Image
                src={card.image}
                alt={card.alt || "card image"}
                width={40}
                height={40}
                className="mb-2 object-contain"
              />
            )}
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm">{card.description}</p>
            <ul className="list-disc list-inside text-sm ">
              {card.points?.map((point, idx) => <li key={idx}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesBlockchain;
