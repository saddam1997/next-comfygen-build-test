// "use client";
import Image from "next/image";
import { useState } from "react";

interface CardItem {
  icon?: string;
  name?: string;
  desc?: string;
  url?: string;
}

interface CardSectionProps {
  heading?: string;
  desc?: string;
  cards?: CardItem[];
}

const BlockchainSection: React.FC<CardSectionProps> = ({
  heading,
  desc,
  cards = [],
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? cards || [] : (cards || []).slice(0, 8);
  return (
    <section className="py-10 px-4 max-w-9xl mx-auto text-center">
      <div className="max-w-9xl text-center flex flex-col items-center">
        <h2 className="text-lg md:text-2xl max-w-5xl font-semibold mb-4">
          {heading}
        </h2>
        <p className=" mb-10 text-sm md:text-lg max-w-5xl">{desc}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
  {visibleCards.map((card, index) => (
    <a
      key={index}
      href={card.url}
      className="bg-white p-2 rounded-xl border min-h-[380px] flex flex-col items-center text-center hover:shadow-lg transition-shadow"
    >
      <div className="w-[70px] h-[70px] relative">
        <Image
          src={card.icon}
          alt={card.name}
          fill
          className="object-contain my-6"
        />
      </div>
      <h3
        className="text-lg font-medium mt-14"
        dangerouslySetInnerHTML={{ __html: card.name }}
      ></h3>
      <p className="text-md mt-4">{card.desc}</p>
    </a>
  ))}
</div>


      {cards.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 px-6 py-2 text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] rounded-full  text-lg font-semibold  capitalize gap-1 transition"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </section>
  );
};
export default BlockchainSection;
