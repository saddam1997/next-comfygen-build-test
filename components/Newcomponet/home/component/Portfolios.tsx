"use client";
import Image from "next/image";
import { useState } from "react";
import useInfiniteScroll from "../../../../hooks/useInfiniteScroll";


export default function Portfolios({ heading, description }: any) {
  const [pauseTop, setPauseTop] = useState(false);
  const [pauseBottom, setPauseBottom] = useState(false);

  const images = [
    "/portfolio/image1.png",
    "/portfolio/Frame2.png",
    "/portfolio/image3.png",
    "/portfolio/Frame4.png",
  ];

  // ✅ opposite directions
  const topRef = useInfiniteScroll(0.6, "left", pauseTop);
  const bottomRef = useInfiniteScroll(0.6, "right", pauseBottom);

  const renderImages = () =>
  [...images, ...images].map((src, i) => (
    <div
      key={i}
      className={`
        shrink-0
        h-[120px] md:h-[400px]
        ${
          src.includes("Frame")
            ? "min-w-[140px] md:min-w-[197px]"
            : "min-w-[260px] md:min-w-[667px]"
        }
      `}
    >
      <Image
        src={src}
        width={700}
        height={400}
        alt=""
        pointer-events-none
        className="w-full h-full object-cover rounded-xl md:rounded-2xl pointer-events-none"
        loading="lazy"
      />
    </div>
  ));


  // const renderImages = () =>
  //   [...images, ...images].map((src, i) => (
  //     <div
  //       key={i}
  //       className={`h-[400px] shrink-0 ${
  //         src.includes("Frame") ? "min-w-[197px]" : "min-w-[667px]"
  //       }`}
  //     >
  //       <Image
  //         src={src}
  //         width={700}
  //         height={400}
  //         alt=""
  //         className="w-full h-full object-cover rounded-2xl"
  //       />
  //     </div>
  //   ));

  return (
    <section className="bg-gray-50 py-2 md:py-16 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto text-center mb-2 md:mb-14">
        <h2 className="text-lg md:text-5xl font-bold mb-4">{heading}</h2>
        <p
          className="text-sm md:text-lg text-gray-600 max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* TOP → LEFT */}
      <div
        className="overflow-hidden mb-2 md:mb-6"
        onMouseEnter={() => setPauseTop(true)}
        onMouseLeave={() => setPauseTop(false)}
      >
        <div
          ref={topRef}
          className="flex gap-4 w-max will-change-transform cursor-pointer"
        >
          {renderImages()}
        </div>
      </div>

      {/* BOTTOM → RIGHT */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPauseBottom(true)}
        onMouseLeave={() => setPauseBottom(false)}
      >
        <div
          ref={bottomRef}
          className="flex gap-4 w-max will-change-transform cursor-pointer"
        >
          {renderImages()}
        </div>
      </div>
    </section>
  );
}
