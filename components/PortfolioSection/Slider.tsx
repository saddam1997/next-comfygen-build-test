"use client";

import { useRef } from "react";
import Card from "./Card";

export default function Slider({ Portfoliodata }: any) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (dir: "next" | "prev") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const card = container.querySelector(".slide-item") as HTMLElement;
    if (!card) return;

    const gap = 10;
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const slides = Portfoliodata?.portfolio ?? [];

  return (
    <div className="w-full">
      {/* SLIDER */}
     <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory gap-[10px] px-[5%]" style={{         scrollBehavior: "smooth", scrollbarWidth: "none", }} >
        {slides.map((item: any, i: number) => (
          <div key={`${item.title}-${i}`} className="slide-item snap-center shrink-0 w-full lg:max-w-[1200px]">
            <Card item={item} isActive={true} />
          </div>
          ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="w-10 h-10 border rounded-full hover:bg-gray-800 hover:text-white" onClick={() => scrollToCard("prev")}>←</button>
        <button className="w-10 h-10 border rounded-full hover:bg-gray-800 hover:text-white" onClick={() => scrollToCard("next")}>→</button>
      </div>
    </div>
  );
}
