"use client";

import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import Card from "./Card";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";

const GAP = 5;
const TRANSITION = 500;

export default function Slider({ Portfoliodata }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [cardWidth, setCardWidth] = useState(300);

  const containerWidthRef = useRef(0);
  const dragOffsetRef = useRef(0);

  const startX = useRef(0);
  const isDragging = useRef(false);
  const frame = useRef<number | null>(null);

  /* ---------- RESIZE (DEBOUNCED) ---------- */
  useEffect(() => {
    if (!containerRef.current) return;

    let timeout: any;

    const observer = new ResizeObserver(([entry]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const width = entry.contentRect.width;
        containerWidthRef.current = width;
        setCardWidth(Math.min(900, width * 0.7));
      }, 100);
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------- SLIDES ---------- */
  const slides = useMemo(() => {
    const list = Portfoliodata?.portfolio || [];
    if (!list.length) return [];

    return [list[list.length - 1], ...list, list[0]];
  }, [Portfoliodata?.portfolio]);

  /* ---------- NAV ---------- */
  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  /* ---------- BASE TRANSLATE (MEMOIZED) ---------- */
  const baseTranslate = useMemo(() => {
    const containerWidth = containerWidthRef.current;
    const centerOffset = (containerWidth - cardWidth) / 2;

    return -index * (cardWidth + GAP) + centerOffset;
  }, [index, cardWidth]);

  /* ---------- FINAL STYLE ---------- */
  const sliderStyle = useMemo(() => {
    return {
      gap: `${GAP}px`,
      transform: `translateX(${baseTranslate}px)`,
      transition: enableTransition
        ? `transform ${TRANSITION}ms ease`
        : "none",
    };
  }, [baseTranslate, enableTransition]);

  /* ---------- LOOP ---------- */
  const handleTransitionEnd = () => {
    const total = slides.length;

    if (index === 0) {
      setEnableTransition(false);
      setIndex(total - 2);
    }

    if (index === total - 1) {
      setEnableTransition(false);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  /* ---------- DRAG (THROTTLED) ---------- */
  const updateTransform = () => {
    if (!sliderRef.current) return;

    const value = baseTranslate + dragOffsetRef.current;
    sliderRef.current.style.transform = `translateX(${value}px)`;
  };

  const onPointerDown = (e: any) => {
    isDragging.current = true;
    startX.current = e.clientX;
    setEnableTransition(false);
  };

  const onPointerMove = (e: any) => {
    if (!isDragging.current) return;

    const delta = e.clientX - startX.current;
    dragOffsetRef.current = delta;

    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      updateTransform();
      frame.current = null;
    });
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
    <div className="lg:px-4 xl:px-0">
      <div className="text-center lg:py-16 py-3 lg:px-16">
        <HeadingTwo color="black" text={Portfoliodata?.heading} />
        <ParagraphText color="black" text={Portfoliodata?.description} />
      </div>

      <div className="w-full overflow-hidden" ref={containerRef}>
        <div
          ref={sliderRef}
          className="flex"
          style={sliderStyle}
          onTransitionEnd={handleTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {slides.map((item: any, i: number) => (
            <div
              key={item?.id || i}
              className="shrink-0 cursor-pointer"
              style={{ width: cardWidth }}
            >
              <Card item={item} isActive={i === index} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 border rounded-full hover:bg-gray-800 hover:text-white"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border rounded-full hover:bg-gray-800 hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}















// "use client";

// import { useEffect, useRef, useState, useMemo, useCallback } from "react";
// import Card from "./Card";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";

// const GAP = 5;
// const TRANSITION = 500;

// export default function Slider({ Portfoliodata }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   console.log(containerRef, "containerRef")
//   const [index, setIndex] = useState(1);
//   const [enableTransition, setEnableTransition] = useState(true);
//   const [cardWidth, setCardWidth] = useState(300);

//   const containerWidthRef = useRef(0);
//   const dragOffsetRef = useRef(0);

//   const startX = useRef(0);
//   const isDragging = useRef(false);

//   /* ---------- RESIZE ---------- */
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const observer = new ResizeObserver(([entry]) => {
//       const width = entry.contentRect.width;

//       containerWidthRef.current = width;
//       setCardWidth(Math.min(900, width * 0.7));
//     });

//     observer.observe(containerRef.current);

//     return () => observer.disconnect();
//   }, []);

//   /* ---------- SLIDES ---------- */
//   const slides = useMemo(() => {
//     if (!Portfoliodata?.portfolio.length) return [];

//     return [
//       Portfoliodata?.portfolio[Portfoliodata?.portfolio.length - 1],
//       ...Portfoliodata?.portfolio,
//       Portfoliodata?.portfolio[0],
//     ];
//   }, [Portfoliodata?.portfolio]);

//   /* ---------- NAV ---------- */
//   const next = useCallback(() => setIndex((i) => i + 1), []);
//   const prev = useCallback(() => setIndex((i) => i - 1), []);

//   /* ---------- TRANSLATE ---------- */
//   const getTranslateX = () => {
//     const containerWidth = containerWidthRef.current;
//     const centerOffset = (containerWidth - cardWidth) / 2;

//     return (
//       -index * (cardWidth + GAP) +
//       centerOffset +
//       dragOffsetRef.current
//     );
//   };

//   /* ---------- LOOP ---------- */
//   const handleTransitionEnd = () => {
//     if (index === 0) {
//       setEnableTransition(false);
//       setIndex(Portfoliodata?.portfolio.length);
//     }

//     if (index === slides.length - 1) {
//       setEnableTransition(false);
//       setIndex(1);
//     }
//   };

//   useEffect(() => {
//     if (!enableTransition) {
//       requestAnimationFrame(() => setEnableTransition(true));
//     }
//   }, [enableTransition]);

//   /* ---------- DRAG ---------- */
//   const onPointerDown = (e: any) => {
//     isDragging.current = true;
//     startX.current = e.clientX;
//     setEnableTransition(false);
//   };

//   const onPointerMove = (e: any) => {
//     if (!isDragging.current) return;

//     const delta = e.clientX - startX.current;
//     dragOffsetRef.current = delta;

//     if (containerRef.current) {
//       const slider = containerRef.current.firstElementChild as HTMLElement;
//       if (slider) {
//         slider.style.transform = `translateX(${getTranslateX()}px)`;
//       }
//     }
//   };

//   const onPointerUp = () => {
//     if (!isDragging.current) return;

//     isDragging.current = false;
//     setEnableTransition(true);

//     const delta = dragOffsetRef.current;

//     if (delta < -80) next();
//     else if (delta > 80) prev();

//     dragOffsetRef.current = 0;
//   };

//   /* ---------- RENDER ---------- */
//   return (
//     <div className="lg:px-4 xl:px-0">
//       <div className="text-center lg:py-16 py-3 lg:px-16">

//         <HeadingTwo color={"black"} text={Portfoliodata?.heading} />


//         <ParagraphText color={"black"} text={Portfoliodata?.description} />

//       </div>
//       <div className="w-full overflow-hidden" ref={containerRef}>
//         <div
//           className="flex "
//           style={{
//             gap: `${GAP}px`,
//             transform: `translateX(${getTranslateX()}px)`,
//             transition: enableTransition
//               ? `transform ${TRANSITION}ms ease`
//               : "none",
//           }}
//           onTransitionEnd={handleTransitionEnd}
//           onPointerDown={onPointerDown}
//           onPointerMove={onPointerMove}
//           onPointerUp={onPointerUp}
//           onPointerLeave={onPointerUp}
//         >
//           {slides.map((item, i) => (
//             <div
//               key={i}
//               className="shrink-0 cursor-pointer"
//               style={{ width: cardWidth }}
//             >
//               <Card
//                 item={item}
//                 isActive={i === index}
//               />
//             </div>
//           ))}
//         </div>

       
//         <div className="flex justify-center gap-4 mt-6">
//           <button onClick={prev} className="w-10 h-10 border rounded-full hover:bg-gray-800 hover:text-white">
//             ←
//           </button>
//           <button onClick={next} className="w-10 h-10 border rounded-full hover:bg-gray-800 hover:text-white">
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
