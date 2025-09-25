'use client';
import { useState } from 'react';

const CryptoTradingList = ({ heading, subheading, tradingData = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? tradingData : tradingData.slice(0, 3);

  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4 text-center">
          <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
            <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
              {heading}
            </h2>
            <p>{subheading}</p>
          </div>

          <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {visibleCards?.map(({ title, decs, num }) => (
              <div
                key={num}
                className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]"
              >
                <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                  {num}
                </div>
                <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: decs }} />
              </div>
            ))}
          </div>

          {!showAll && tradingData.length > 3 && (
            <div className="pt-6">
              <button
                onClick={() => setShowAll(true)}
                className="text-base font-medium text-[#5556D1] border border-[#5556D1] rounded-full px-6 py-2.5 text-center hover:text-white hover:bg-[#5556D1] transition duration-300"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CryptoTradingList;
