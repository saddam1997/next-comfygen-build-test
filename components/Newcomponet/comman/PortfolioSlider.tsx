"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const CARD_WIDTH = 900; // FIXED WIDTH (key fix)
const GAP = 20;

export default function PortfolioCarousel({ portfolio }: any) {
  const startX = useRef(0);

  const slides = [
    portfolio[portfolio.length - 1],
    ...portfolio,
    portfolio[0],
  ];

  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  /* infinite loop correction */
  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(portfolio.length);
      }, 700);
    }

    if (index === slides.length - 1) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(1);
      }, 700);
    }

    setTimeout(() => setEnableTransition(true), 750);
  }, [index]);

  const truncateText = (text: string, limit = 200) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const onStart = (x: number) => (startX.current = x);
  const onEnd = (x: number) => {
    const diff = startX.current - x;
    if (diff > 60) next();
    if (diff < -60) prev();
  };

  return (
    <section className="relative w-full overflow-hidden py-8">
      <div className="text-center">
        <h2 className="xl:text-4xl text-2xl md:text-3xl text-[#212121] font-bold">
          {/* {heading} */}
          hh
        </h2>
        <p
          className="text-base font-normal mt-2 mx-auto w-full"
        // dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {/* TRACK */}
      <div
        className="hidden md:flex "
        style={{
          transform: `translateX(calc(50% - ${index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
            }px))`,
          transition: enableTransition ? "transform 0.7s ease" : "none",
        }}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
      >
        {slides.map((item: any, i: number) => (
          <div
            key={i}
            className={`shrink-0 flex justify-center`}
            style={{ width: CARD_WIDTH + GAP }}
          >
            {/* CARD */}
            <div
              style={{ width: CARD_WIDTH }}
              className={`rounded-3xl md:bg-gray-100  shadow-xl p-5
                flex items-center gap-10
                transition-all duration-500
                ${i === index
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-60"
                }
              `}
            >
              {/* LEFT */}
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-semibold">{item.title}</h3>

                <p
                  className="text-gray-700 text-sm"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                <Link href={item.link}>
                  <span className="inline-flex items-center gap-2 border border-[#6C63FF] text-[#6C63FF] px-6 py-2 rounded-full hover:bg-[#6C63FF] hover:text-white transition">
                    View Case Study <MdOutlineArrowOutward />
                  </span>
                </Link>
              </div>

              {/* RIGHT */}
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={360}
                className="w-auto h-auto"
              />
            </div>
          </div>
        ))}
      </div>


      {/* mobile view */}
      {/* mobile view */}
      <div className="md:hidden flex gap-10 overflow-x-auto scrollbar-hide px-4">
        {slides.map((item: any, i: number) => (
          <div
            key={i}
            className="shrink-0 w-[90vw] max-w-sm"
          >
            {/* CARD */}
            <div className="rounded-3xl bg-gray-100 shadow-xl p-4 flex flex-col gap-6">
              {/* TEXT */}


              {/* IMAGE */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw"
                  className="object-contain"
                  priority={i === 0}
                />
              </div>

              <h3 className="text-sm font-semibold">{item.title}</h3>

              <p className="text-gray-700 text-xs">
                {truncateText(
                  item.description.replace(/<[^>]*>?/gm, ""), // remove HTML tags
                  200
                )}
              </p>

              <div className="space-y-3">


                <Link href={item.link}>
                  <span className="inline-flex items-center gap-2 border border-[#6C63FF] text-[#6C63FF] px-4 py-2 rounded-full text-xs hover:bg-[#6C63FF] hover:text-white transition">
                    View Case Study <MdOutlineArrowOutward />
                  </span>
                </Link>
              </div>
            </div>


          </div>
        ))}
      </div>


      {/* CONTROLS */}
      <div className="hidden md:flex justify-center gap-4 mt-8 ">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border hover:bg-black hover:text-white transition"
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border hover:bg-black hover:text-white transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
