// "use client";

import Image from "next/image";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const GAP = 5;
const TRANSITION = 500;

export default function Portfolio({ Portfoliodata }) {
  const { portfolio = [] } = Portfoliodata || {};

  const containerRef = useRef<HTMLDivElement>(null);

  /* ---------- STATE ---------- */
  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  // ✅ CLS FIX (default width)
  const [cardWidth, setCardWidth] = useState(300);

  /* ---------- REFS (NO RE-RENDER) ---------- */
  const containerWidthRef = useRef(0);
  const dragOffsetRef = useRef(0);

  const startX = useRef(0);
  const isDragging = useRef(false);

  /* ---------- RESIZE (NO REFLOW LOOP) ---------- */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;

      containerWidthRef.current = width;
      setCardWidth(Math.min(900, width * 0.7));
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------- SLIDES ---------- */
  const slides = useMemo(() => {
    if (!portfolio.length) return [];

    return [
      portfolio[portfolio.length - 1],
      ...portfolio,
      portfolio[0],
    ];
  }, [portfolio]);

  /* ---------- NAV ---------- */
  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  /* ---------- TRANSLATE (PURE, NO DOM READ) ---------- */
  const getTranslateX = () => {
    const containerWidth = containerWidthRef.current;
    const centerOffset = (containerWidth - cardWidth) / 2;

    return (
      -index * (cardWidth + GAP) +
      centerOffset +
      dragOffsetRef.current
    );
  };

  /* ---------- INFINITE LOOP ---------- */
  const handleTransitionEnd = () => {
    if (index === 0) {
      setEnableTransition(false);
      setIndex(portfolio.length);
    }

    if (index === slides.length - 1) {
      setEnableTransition(false);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  /* ---------- DRAG (NO RE-RENDER ON MOVE) ---------- */
  const onPointerDown = (e: any) => {
    isDragging.current = true;
    startX.current = e.clientX;
    setEnableTransition(false);
  };

  const onPointerMove = (e: any) => {
    if (!isDragging.current) return;

    const delta = e.clientX - startX.current;
    dragOffsetRef.current = delta;

    // 🔥 force transform update WITHOUT React render
    if (containerRef.current) {
      const slider = containerRef.current.firstElementChild as HTMLElement;
      if (slider) {
        slider.style.transform = `translateX(${getTranslateX()}px)`;
      }
    }
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    setEnableTransition(true);

    const delta = dragOffsetRef.current;

    if (delta < -80) next();
    else if (delta > 80) prev();

    dragOffsetRef.current = 0;
  };

  /* ---------- RENDER ---------- */
  return (
    <div className="w-full overflow-hidden py-10" ref={containerRef}>
      {/* SLIDER */}
      <div
        className="flex will-change-transform"
        style={{
          gap: `${GAP}px`,
          transform: `translateX(${getTranslateX()}px)`,
          transition: enableTransition
            ? `transform ${TRANSITION}ms ease`
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {slides.map((item, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{ width: cardWidth }}
          >
            <div
              className={`rounded-3xl flex border items-center bg-white shadow-xl p-6 transition-all duration-500 ${
                i === index
                  ? "scale-100"
                  : "scale-90 opacity-70"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={350}
                className="w-full h-[260px] object-contain"
                draggable={false}
              />

              <div>
                <h3 className="text-xl lg:text-3xl font-semibold mt-4">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: item.description }}>
                  
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-4 mt-6">
        <button onClick={prev} className="w-10 h-10 border rounded-full">
          ←
        </button>

        <button onClick={next} className="w-10 h-10 border rounded-full">
          →
        </button>
      </div>
    </div>
  );
}

















// // "use client";

// import Image from "next/image";

// import {
//   useEffect,
//   useRef,
//   useState,
//   useMemo,
//   useCallback,
// } from "react";

// import HeadingTwo from "../../../../components/ui/HeadingTwo";
// import ParagraphText from "../../../../components/ui/ParagraphText";


// /* ---------------- Types ---------------- */

// type PortfolioItem = {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// };

// type Props = {
//   Portfoliodata: {
//     heading?: string;
//     description?: string;
//     portfolio?: PortfolioItem[];
//   };
// };

// /* ---------------- Constants ---------------- */

// const CARD_WIDTH = 900;
// const GAP = 20;
// const SWIPE_THRESHOLD = CARD_WIDTH * 0.15;
// const DRAG_START_THRESHOLD = 6;

// export default function Portfolio({ Portfoliodata }: Props) {
//   const { portfolio = [], heading, description } = Portfoliodata || {};

//   /* ---------- refs ---------- */

//   const startX = useRef(0);
//   const deltaX = useRef(0);
//   const isDragging = useRef(false);
//   const hasMoved = useRef(false);

//   /* ---------- state ---------- */

//   const [index, setIndex] = useState(1);
//   const [enableTransition, setEnableTransition] = useState(true);
//   const [dragOffset, setDragOffset] = useState(0);

//   /* ---------- slides (memoized) ---------- */

//   const slides = useMemo(() => {
//     if (!portfolio.length) return [];
//     return [
//       portfolio[portfolio.length - 1],
//       ...portfolio,
//       portfolio[0],
//     ];
//   }, [portfolio]);

//   /* ---------- navigation ---------- */

//   const next = useCallback(() => {
//     setIndex((i) => i + 1);
//   }, []);

//   const prev = useCallback(() => {
//     setIndex((i) => i - 1);
//   }, []);

//   /* ---------- infinite slider fix ---------- */
//   const handleTransitionEnd = () => {
//   if (!portfolio.length) return;

//   // jump from fake first → real last
//   if (index === 0) {
//     setEnableTransition(false);
//     setIndex(portfolio.length);
//   }

//   // jump from fake last → real first
//   if (index === slides.length - 1) {
//     setEnableTransition(false);
//     setIndex(1);
//   }
// };

//   // useEffect(() => {
//   //   if (!portfolio.length) return;

//   //   if (index === 0) {
//   //     const t = setTimeout(() => {
//   //       setEnableTransition(false);
//   //       setIndex(portfolio.length);
//   //     }, 600);
//   //     return () => clearTimeout(t);
//   //   }

//   //   if (index === slides.length - 1) {
//   //     const t = setTimeout(() => {
//   //       setEnableTransition(false);
//   //       setIndex(1);
//   //     }, 600);
//   //     return () => clearTimeout(t);
//   //   }

//   //   const t = setTimeout(() => setEnableTransition(true), 650);
//   //   return () => clearTimeout(t);
//   // }, [index, portfolio.length, slides.length]);

//   /* ---------- pointer events ---------- */

//   const onPointerDown = (e: React.PointerEvent) => {
//     const target = e.target as HTMLElement;

//     if (target.closest("a,button")) return;

//     startX.current = e.clientX;
//     deltaX.current = 0;
//     hasMoved.current = false;
//     isDragging.current = true;

//     (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
//     setEnableTransition(false);
//   };

// const raf = useRef<number | null>(null);

// const onPointerMove = (e: React.PointerEvent) => {
//   if (!isDragging.current) return;

//   const movement = e.clientX - startX.current;

//   if (Math.abs(movement) > DRAG_START_THRESHOLD) {
//     hasMoved.current = true;
//   }

//   if (!hasMoved.current) return;

//   deltaX.current = startX.current - e.clientX;

//   if (raf.current) cancelAnimationFrame(raf.current);

//   raf.current = requestAnimationFrame(() => {
//     setDragOffset(-deltaX.current);
//   });
// };

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

//   /* ---------- utils ---------- */

//   const truncateText = (text: string, limit = 200) =>
//     !text
//       ? ""
//       : text.length > limit
//       ? text.slice(0, limit) + "..."
//       : text;

//   /* ---------- render ---------- */

//   return (
//     <section
//       className="relative w-full overflow-hidden py-8 bg-gray-50"
//       aria-label="Portfolio projects"
//     >
//       {/* Heading */}

//       <header className="text-center mx-auto max-w-7xl space-y-3 py-8">
//         <HeadingTwo color="black" text={heading} />
//         <ParagraphText color="black" text={description} />
//       </header>

//       {/* ================= DESKTOP ================= */}

//       <div
//         className="hidden md:flex cursor-grab active:cursor-grabbing select-none"
//         style={{
//           transform: `translateX(calc(50% - ${
//             index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
//           }px + ${dragOffset}px))`,
//           transition: enableTransition
//             ? "transform 0.6s cubic-bezier(0.4,0,0.2,1)"
//             : "none",
//           touchAction: "pan-y",
//         }}
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={onPointerUp}
//         onPointerLeave={onPointerUp}
//           onTransitionEnd={handleTransitionEnd} 
//       >
//         {slides.map((item, i) => (
//           <article
//             key={`${item.title}-${i}`}
//             className="shrink-0 flex justify-center"
//             style={{ width: CARD_WIDTH + GAP }}
//           >
//             <div
//               style={{ width: CARD_WIDTH }}
//               className={`h-[390px] rounded-3xl bg-white shadow-xl p-5
//               flex items-center gap-10 transition-all duration-500
//               ${
//                 i === index
//                   ? "scale-100 opacity-100"
//                   : "scale-95 opacity-100"
//               }`}
//             >

//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={460}
//                 height={360}
//                 draggable={false}
//                 priority={i === 1}
//                 sizes="(min-width: 768px) 460px"
//                 className="h-[360px] w-[460px] object-contain"
//               />

//               <div className="flex-1 space-y-6">
//                 <h3 className="text-3xl font-semibold">
//                   {item.title}
//                 </h3>

//                 <ParagraphText
//                   color="black"
//                   text={item.description}
//                 />

//                 {/* <Link
//                   href={item.link}
//                   aria-label={`View ${item.title} case study`}
//                 >
//                   <span className="inline-flex items-center mt-4 gap-2 border border-[#453de3]
//                     text-[#453ecf] px-6 py-2 rounded-full
//                     hover:bg-[#6C63FF] hover:text-white transition">
//                     View Case Study <MdOutlineArrowOutward />
//                   </span>
//                 </Link> */}
//               </div>


//             </div>
//           </article>
//         ))}
//       </div>

//       {/* ================= MOBILE ================= */}

//       <div className="md:hidden flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide">
//         {slides.map((item, i) => (
//           <article
//             key={`${item.title}-${i}`}
//             className="shrink-0 w-[90vw] max-w-sm snap-center"
//           >
//             <div className="rounded-3xl bg-gray-100 shadow-xl p-4 flex flex-col gap-5">
//               <div className="relative w-full aspect-[4/3]">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   draggable={false}
//                   sizes="(max-width: 768px) 90vw"
//                   className="object-contain"
//                 />
//               </div>

//               <h3 className="text-sm font-semibold">
//                 {item.title}
//               </h3>

//               <ParagraphText
//                 color="black"
//                 text={truncateText(
//                   item.description.replace(/<[^>]*>?/gm, ""),
//                   200
//                 )}
//               />

//               {/* <Link
//                 href={item.link}
//                 aria-label={`View ${item.title} case study`}
//               >
//                 <span className="inline-flex items-center gap-2 border border-[#2821a8]
//                   text-[#322bbd] px-4 py-2 rounded-full text-xs
//                   hover:bg-[#6C63FF] hover:text-white transition">
//                   View Case Study <MdOutlineArrowOutward />
//                 </span>
//               </Link> */}
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* Controls */}

//       <nav className="hidden md:flex justify-center gap-4 mt-8">
//         <button
//           onClick={prev}
//           aria-label="Previous slide"
//           className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
//         >
//           ←
//         </button>

//         <button
//           onClick={next}
//           aria-label="Next slide"
//           className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
//         >
//           →
//         </button>
//       </nav>
//     </section>
//   );
// }







