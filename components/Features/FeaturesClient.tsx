"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { ImArrowRight } from "react-icons/im";

const FeaturesClient = ({ featuresData = [], grid }: any) => {

  const [active, setActive] = useState(
    featuresData?.length ? featuresData[0] : null
  );

  // ✅ INP improvement (stable function)
  const handleClick = useCallback((item: any) => {
    setActive(item);
  }, []);

  // ✅ Avoid recalculation
  const gridCols = useMemo(() => Math.min(grid, 4), [grid]);

  return (
    <>
      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden">

        {/* BUTTON ROW */}
        <div className="mt-8 px-1 overflow-hidden w-full">
          <div className={`grid grid-cols-${gridCols} gap-2 overflow-x-auto scrollbar-hide`}>
            {featuresData.map((item: any) => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
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

              {/* ✅ CLS FIX (aspect ratio added) */}
              <div className="relative w-full aspect-video">
                <Image
                  src={active.img}
                  alt={active.title}
                  fill
                  sizes="100vw"
                  className="rounded-lg border object-cover"
                />
              </div>

              <div className="space-y-4">
                {active.additionalDetails?.map((d: any, i: number) => (
                  <div key={i} className="flex gap-3 text-black">
                    <ImArrowRight className="text-[#5556D1] mt-1 shrink-0" />
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
        <div className={`grid grid-cols-${gridCols} gap-4 mx-auto mt-10 2xl:w-10/12 w-11/12`}>
          {featuresData.map((item: any) => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
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

          {/* ✅ Only render active item (INP improvement) */}
          {active && (
            <div className="grid grid-cols-2 gap-8 items-center">

              {/* ✅ CLS FIX */}
              <div className="relative w-full aspect-video">
                <Image
                  src={active.img}
                  alt={active.title}
                  fill
                  sizes="50vw"
                  className="rounded-lg border object-cover"
                />
              </div>

              <div className="space-y-4">
                {active.additionalDetails?.map((d: any, i: number) => (
                  <div key={i} className="flex gap-3 text-black">
                    <ImArrowRight className="text-[#5556D1] mt-1 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: d.details }} />
                  </div>
                ))}
              </div>

            </div>
          )}

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
    </>
  );
};

export default FeaturesClient;