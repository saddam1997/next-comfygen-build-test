"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";

/* ---------------- Types ---------------- */

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type Props = {
  Portfoliodata: {
    heading?: string;
    description?: string;
    portfolio?: PortfolioItem[];
  };
};

/* ---------------- Constants ---------------- */

const CARD_WIDTH = 900;
const GAP = 20;
const SWIPE_THRESHOLD = CARD_WIDTH * 0.15;
const DRAG_START_THRESHOLD = 6;

export default function Portfolio({ Portfoliodata }: Props) {
  const { portfolio = [], heading, description } = Portfoliodata || {};

  /* ---------- refs ---------- */

  const startX = useRef(0);
  const deltaX = useRef(0);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);

  /* ---------- state ---------- */

  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);

  /* ---------- slides (memoized) ---------- */

  const slides = useMemo(() => {
    if (!portfolio.length) return [];
    return [
      portfolio[portfolio.length - 1],
      ...portfolio,
      portfolio[0],
    ];
  }, [portfolio]);

  /* ---------- navigation ---------- */

  const next = useCallback(() => {
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => i - 1);
  }, []);

  /* ---------- infinite slider fix ---------- */

  useEffect(() => {
    if (!portfolio.length) return;

    if (index === 0) {
      const t = setTimeout(() => {
        setEnableTransition(false);
        setIndex(portfolio.length);
      }, 600);
      return () => clearTimeout(t);
    }

    if (index === slides.length - 1) {
      const t = setTimeout(() => {
        setEnableTransition(false);
        setIndex(1);
      }, 600);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setEnableTransition(true), 650);
    return () => clearTimeout(t);
  }, [index, portfolio.length, slides.length]);

  /* ---------- pointer events ---------- */

  const onPointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;

    if (target.closest("a,button")) return;

    startX.current = e.clientX;
    deltaX.current = 0;
    hasMoved.current = false;
    isDragging.current = true;

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setEnableTransition(false);
  };

const raf = useRef<number | null>(null);

const onPointerMove = (e: React.PointerEvent) => {
  if (!isDragging.current) return;

  const movement = e.clientX - startX.current;

  if (Math.abs(movement) > DRAG_START_THRESHOLD) {
    hasMoved.current = true;
  }

  if (!hasMoved.current) return;

  deltaX.current = startX.current - e.clientX;

  if (raf.current) cancelAnimationFrame(raf.current);

  raf.current = requestAnimationFrame(() => {
    setDragOffset(-deltaX.current);
  });
};

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);

    setEnableTransition(true);

    if (hasMoved.current) {
      if (deltaX.current > SWIPE_THRESHOLD) next();
      else if (deltaX.current < -SWIPE_THRESHOLD) prev();
    }

    isDragging.current = false;
    deltaX.current = 0;
    setDragOffset(0);
  };

  /* ---------- utils ---------- */

  const truncateText = (text: string, limit = 200) =>
    !text
      ? ""
      : text.length > limit
      ? text.slice(0, limit) + "..."
      : text;

  /* ---------- render ---------- */

  return (
    <section
      className="relative w-full overflow-hidden py-8 bg-gray-50"
      aria-label="Portfolio projects"
    >
      {/* Heading */}

      <header className="text-center mx-auto max-w-7xl space-y-3 py-8">
        <HeadingTwo color="black" text={heading} />
        <ParagraphText color="black" text={description} />
      </header>

      {/* ================= DESKTOP ================= */}

      <div
        className="hidden md:flex cursor-grab active:cursor-grabbing select-none"
        style={{
          transform: `translateX(calc(50% - ${
            index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
          }px + ${dragOffset}px))`,
          transition: enableTransition
            ? "transform 0.6s cubic-bezier(0.4,0,0.2,1)"
            : "none",
          touchAction: "pan-y",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {slides.map((item, i) => (
          <article
            key={`${item.title}-${i}`}
            className="shrink-0 flex justify-center"
            style={{ width: CARD_WIDTH + GAP }}
          >
            <div
              style={{ width: CARD_WIDTH }}
              className={`h-[390px] rounded-3xl bg-white shadow-xl p-5
              flex items-center gap-10 transition-all duration-500
              ${
                i === index
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-100"
              }`}
            >
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-semibold">
                  {item.title}
                </h3>

                <ParagraphText
                  color="black"
                  text={item.description}
                />

                <Link
                  href={item.link}
                  aria-label={`View ${item.title} case study`}
                >
                  <span className="inline-flex items-center mt-4 gap-2 border border-[#453de3]
                    text-[#453ecf] px-6 py-2 rounded-full
                    hover:bg-[#6C63FF] hover:text-white transition">
                    View Case Study <MdOutlineArrowOutward />
                  </span>
                </Link>
              </div>

              <Image
                src={item.image}
                alt={item.title}
                width={460}
                height={360}
                draggable={false}
                priority={i === 1}
                sizes="(min-width: 768px) 460px"
                className="h-[360px] w-[460px] object-contain"
              />
            </div>
          </article>
        ))}
      </div>

      {/* ================= MOBILE ================= */}

      <div className="md:hidden flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide">
        {slides.map((item, i) => (
          <article
            key={`${item.title}-${i}`}
            className="shrink-0 w-[90vw] max-w-sm snap-center"
          >
            <div className="rounded-3xl bg-gray-100 shadow-xl p-4 flex flex-col gap-5">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  sizes="(max-width: 768px) 90vw"
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>

              <ParagraphText
                color="black"
                text={truncateText(
                  item.description.replace(/<[^>]*>?/gm, ""),
                  200
                )}
              />

              <Link
                href={item.link}
                aria-label={`View ${item.title} case study`}
              >
                <span className="inline-flex items-center gap-2 border border-[#2821a8]
                  text-[#322bbd] px-4 py-2 rounded-full text-xs
                  hover:bg-[#6C63FF] hover:text-white transition">
                  View Case Study <MdOutlineArrowOutward />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}

      <nav className="hidden md:flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          →
        </button>
      </nav>
    </section>
  );
}









// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState, useMemo } from "react";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";

// const CARD_WIDTH = 900;
// const GAP = 20;
// const SWIPE_THRESHOLD = CARD_WIDTH * 0.15;
// const DRAG_START_THRESHOLD = 6;

// export default function Portfolio({ Portfoliodata }: any) {

//   const { portfolio, heading, description } = Portfoliodata
//   /* ---------- refs ---------- */
//   const startX = useRef(0);
//   const deltaX = useRef(0);
//   const isDragging = useRef(false);
//   const hasMoved = useRef(false);
//   const preventClick = useRef(false);

//   /* ---------- state ---------- */
//   const [index, setIndex] = useState(1);
//   const [enableTransition, setEnableTransition] = useState(true);
//   const [dragOffset, setDragOffset] = useState(0);

//   /* ---------- slides (memoized) ---------- */
//   const slides = useMemo(() => {
//     if (!portfolio || portfolio.length === 0) return [];
//     return [
//       portfolio[portfolio.length - 1],
//       ...portfolio,
//       portfolio[0],
//     ];
//   }, [portfolio]);

//   /* ---------- navigation ---------- */
//   const next = () => setIndex((i) => i + 1);
//   const prev = () => setIndex((i) => i - 1);

//   /* ---------- infinite loop ---------- */
//   useEffect(() => {
//     if (!portfolio?.length) return;

//     if (index === 0) {
//       setTimeout(() => {
//         setEnableTransition(false);
//         setIndex(portfolio.length);
//       }, 600);
//     }

//     if (index === slides.length - 1) {
//       setTimeout(() => {
//         setEnableTransition(false);
//         setIndex(1);
//       }, 600);
//     }

//     const t = setTimeout(() => setEnableTransition(true), 650);
//     return () => clearTimeout(t);
//   }, [index, portfolio, slides.length]);

//   /* ---------- pointer events ---------- */
//   const onPointerDown = (e: React.PointerEvent) => {
//     startX.current = e.clientX;
//     deltaX.current = 0;
//     hasMoved.current = false;
//     preventClick.current = false;
//     isDragging.current = true;

//     const target = e.target as HTMLElement;

//     // 🚀 If clicking on link or button → DO NOT START DRAG
//     if (target.closest("a, button")) {
//       return;
//     }

//     (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
//     setEnableTransition(false);
//   };

//   const onPointerMove = (e: React.PointerEvent) => {
//     if (!isDragging.current) return;

//     const movement = e.clientX - startX.current;

//     if (Math.abs(movement) > DRAG_START_THRESHOLD) {
//       hasMoved.current = true;
//       preventClick.current = true;
//     }

//     if (!hasMoved.current) return;

//     deltaX.current = startX.current - e.clientX;
//     setDragOffset(-deltaX.current);
//   };

//   const onPointerUp = (e: React.PointerEvent) => {
//     if (!isDragging.current) return;

//     (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);

//     setEnableTransition(true);

//     if (hasMoved.current) {
//       if (deltaX.current > SWIPE_THRESHOLD) next();
//       else if (deltaX.current < -SWIPE_THRESHOLD) prev();
//     }

//     isDragging.current = false;
//     deltaX.current = 0;
//     setDragOffset(0);
//   };

//   const truncateText = (text: string, limit = 200) =>
//     !text ? "" : text.length > limit ? text.slice(0, limit) + "..." : text;

//   return (
//     <section className="relative w-full overflow-hidden py-8 bg-gray-50">

//       {/* Heading */}
//       <div className="text-center mx-auto max-w-7xl space-y-3 py-8">
//         <HeadingTwo color={"black"} text={heading} />
//         <ParagraphText color={"black"} text={description} />

//       </div>

//       {/* ================= DESKTOP ================= */}
//       <div
//         className="hidden md:flex cursor-grab active:cursor-grabbing select-none"
//         style={{
//           transform: `translateX(calc(50% - ${index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
//             }px + ${dragOffset}px))`,
//           transition: enableTransition
//             ? "transform 0.6s cubic-bezier(0.4,0,0.2,1)"
//             : "none",
//           touchAction: "pan-y",
//         }}
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={onPointerUp}
//         onPointerLeave={onPointerUp}
//       >
//         {slides.map((item: any, i: number) => (
//           <div
//             key={i}
//             className="shrink-0 flex justify-center"
//             style={{ width: CARD_WIDTH + GAP }}
//           >
//             <div
//               style={{ width: CARD_WIDTH }}
//               className={`h-[390px] rounded-3xl bg-white shadow-xl p-5
//               flex items-center gap-10 transition-all duration-500
//               ${i === index ? "scale-100 opacity-100" : "scale-95 opacity-100"}`}
//             >
//               <div className="flex-1 space-y-6">
//                 <h3 className="text-3xl font-semibold">{item.title}</h3>


//                 <ParagraphText color={"black"} text={item.description} />


//                 <Link href={item.link} aria-label={`View ${item.title} Case Study`}>
//                   <span className="inline-flex items-center mt-4 gap-2 border border-[#453de3]
//                     text-[#453ecf] px-6 py-2 rounded-full
//                     hover:bg-[#6C63FF] hover:text-white transition">
//                     View Case Study <MdOutlineArrowOutward />
//                   </span>
//                 </Link>
//               </div>

//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={460}
//                 height={360}
//                 draggable={false}
//                 // priority={i === 1}   /* 🔥 LCP FIX */
//                 loading="lazy"
//                 sizes="(min-width: 768px) 460px"
//                 className="h-[360px] w-[460px] object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= MOBILE ================= */}
//       <div className="md:hidden flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide">
//         {slides.map((item: any, i: number) => (
//           <div key={i} className="shrink-0 w-[90vw] max-w-sm snap-center">
//             <div className="rounded-3xl bg-gray-100 shadow-xl p-4 flex flex-col gap-5">

//               <div className="relative w-full aspect-[4/3]">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   draggable={false}
//                   // priority={i === 1}   /* 🔥 LCP FIX */
//                   loading="lazy"
//                   sizes="(max-width: 768px) 90vw"
//                   className="object-contain"
//                 />
//               </div>

//               <h3 className="text-sm font-semibold">{item.title}</h3>

//               <ParagraphText color={"black"} text={truncateText(
//                 item.description.replace(/<[^>]*>?/gm, ""),
//                 200
//               )} />



//               <Link href={item.link} aria-label={`View ${item.title} Case Study`}>

//                 <span className="inline-flex items-center gap-2 border border-[#2821a8]
//                   text-[#322bbd] px-4 py-2 rounded-full text-xs
//                   hover:bg-[#6C63FF] hover:text-white transition">
//                   View Case Study <MdOutlineArrowOutward />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <div className="hidden md:flex justify-center gap-4 mt-8">
//         <button
//           onClick={prev}
//           aria-label="Previous slide"
//           className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
//           ←
//         </button>

//         <button
//           onClick={next}
//           aria-label="Next slide"
//           className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
//           →
//         </button>
//       </div>

//     </section>
//   );
// }







