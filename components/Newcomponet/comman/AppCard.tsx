import Image from "next/image";
import React, { useState } from "react";

const AppCard = ({ title, cards, subtitle, openModal }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="container mb-8 mx-auto">
      <h2 className="text-3xl px-1 mt-6 text-center font-bold mb-6 max-w-8xl">
        {title}
      </h2>
      <p
        className="text-md text-center px-1 mx-auto mb-6 max-w-5xl"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      ></p>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 m-6 lg:m-0">
        {cards?.slice(0, visibleCount).map((card: any, index: any) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-8xl 2xl:flex-row bg-white rounded-3xl border-2 border-gray-300 overflow-hidden min-h-[360px]"
          >
            {/* Image Section */}
            <div className="w-full 2xl:w-1/2 p-4 flex justify-center">
              <Image
                src={card.image}
                alt={card.title}
                width={722}
                height={687}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full max-w-md object-cover rounded-xl"
              />
            </div>

            {/* Content Section */}
            <div className="w-full 2xl:w-2/3 p-4 flex flex-col justify-between items-center text-center 2xl:items-start 2xl:text-left">
              <div>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p
                  className="mt-2 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
              <a
                href={card.buttonLink}
                onClick={openModal}
                className="mt-4 inline-block border  hover:bg-white transition text-white bg-[#5556D1] hover:border-[#5556D1] hover:text-[#5556D1]  border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full"
              >
                {card.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < cards?.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-whitw text-[#5556D1]  hover:bg-[#5556D1] transition  hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default AppCard;
