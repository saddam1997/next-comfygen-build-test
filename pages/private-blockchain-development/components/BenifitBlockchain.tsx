"use client";
import React from "react";
import Image from "next/image";

interface CardItem {
  image: string;
  name: string;
}

interface BenifitBlockchainProps {
  heading: string;
  cards: CardItem[];
}

const BenifitBlockchain: React.FC<BenifitBlockchainProps> = ({ heading, cards }) => {
  if (!cards || !Array.isArray(cards)) return null;

  return (
    <div className="py-10 max-w-9xl px-4">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">{heading}</h1>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-5 w-full justify-items-center gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex border max-w-[130px] px-2 py-2 flex-col items-center text-center gap-3"
            >
              <Image
                src={card.image}
                alt={card.name}
                height={40}
                width={40}
                className="mb-0"
              />
              <h2 className="text-sm font-medium">{card.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenifitBlockchain;
