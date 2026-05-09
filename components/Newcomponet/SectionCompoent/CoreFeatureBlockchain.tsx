
import React from "react";
import Image from "next/image";

interface CardItem {
  image: string;
  title: string;
  description: string;
}

interface CoreFeatureBlockchainProps {
  heading: string;
  description: string;
  cards?: CardItem[]; // Make cards optional
}

const CoreFeatureBlockchain: React.FC<CoreFeatureBlockchainProps> = ({
  heading,
  description,
  cards = [], // Default to empty array
}) => {
  return (
    <div className="py-10 px-4 max-w-9xl mx-auto">
      <div className="text-center max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <p className="mt-2">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 border lg:ps-6 rounded-lg"
          >
            <Image
              src={card.image}
              alt={card.title}
              height={50}
              width={50}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatureBlockchain;
