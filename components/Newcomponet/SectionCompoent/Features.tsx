import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

const Features = ({ featuresData = [], grid, heading, description }: any) => {

  // ✅ SSR SAFE DEFAULT ACTIVE
  const [active, setActive] = useState(
    featuresData?.length ? featuresData[0] : null
  );

  return (
    <section className="bg-[#F5F5F9] lg:py-16 py-10">

      {/* HEADER */}
      <div className="text-center space-y-2 max-w-6xl mx-auto px-4">
        <h2 className="xl:text-4xl text-xl font-bold text-black">
          {heading}
        </h2>
        <p
          className="text-black lg:tsxt-lg text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* ================= MOBILE + TABLET ================= */}
      <div className="block lg:hidden">

        {/* BUTTON ROW */}
        <div className="mt-8 px-1 overflow-hidden w-full">
          <div className={`grid grid-cols-${Math.min(
            grid,
            4
          )} gap-2 overflow-x-auto scrollbar-hide`}>
            {featuresData.map((item: any) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className={`w-full py-2 rounded-full border text-xs font-medium transition
                  ${active?.id === item.id
                    ? "bg-[#5556D1] text-white border-[#5556D1]"
                    : "bg-white border-gray-300 py-1 p-1"
                  }`}
              >
                {item.title?.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}

        {active && (
          <div className="mt-12 mx-auto 2xl:w-10/12 w-11/12">
            <div className="grid grid-cols-1 gap-8 items-center">

              <Image
                src={active.img}
                alt={active.title}
                width={640}
                height={360}
                loading="lazy"
                sizes="100vw"
                className="rounded-lg border"
              />

              <div className="space-y-4">
                {active.additionalDetails?.map((d: any, i: number) => (
                  <div key={i} className="flex gap-3 text-black">
                    <ArrowRight className="text-[#5556D1] mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: d.details }} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">

        {/* BUTTON GRID */}
        <div
          className={`grid grid-cols-${Math.min(
            grid,
            4
          )} gap-4 mx-auto mt-10 2xl:w-10/12 w-11/12`}
        >
          {featuresData.map((item: any) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className={`px-4 py-3 text-lg font-medium border rounded-md transition
                ${active?.id === item.id
                  ? "bg-[#5556D1] text-white border-[#5556D1]"
                  : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* DETAIL SECTION */}
        <div className="mt-12 mx-auto 2xl:w-10/12 w-11/12">
          {featuresData.map((item: any) => (
            <div
              key={item.id}
              className={`${active?.id === item.id ? "grid" : "hidden"
                } grid-cols-2 gap-8 items-center`}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={640}
                height={360}
                loading="lazy"
                sizes="50vw"
                className="rounded-lg border"
              />

              <div className="space-y-4">
                {item.additionalDetails?.map((d: any, i: number) => (
                  <div key={i} className="flex gap-3 text-black">
                    <ArrowRight className="text-[#5556D1] mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: d.details }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
       
      </div>

      {/* Scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
};

export default Features;