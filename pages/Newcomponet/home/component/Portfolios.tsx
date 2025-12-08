import Image from "next/image";
import { useState } from "react";

export default function Portfolios() {
  const [pauseTop, setPauseTop] = useState(false);
  const [pauseBottom, setPauseBottom] = useState(false);

  const images = [
    "/portfolio/image1.png",
    "/portfolio/Frame2.png",
    "/portfolio/image3.png",
    "/portfolio/Frame4.png",
  ];

  return (
    <div className="bg-gray-50 py-16">

      {/* Header */}
      <div className="container mx-auto mb-16 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Web & App Development Portfolio
        </h1>
        <p className="text-lg text-gray-600 mx-auto max-w-4xl">
          Explore our selection of accomplished projects that highlight our proficiency...
        </p>
      </div>

      {/* ---------------- TOP SLIDER (LEFT → RIGHT) ---------------- */}
      <div
        className="overflow-hidden w-full mb-4"
        onMouseEnter={() => setPauseTop(true)}
        onMouseLeave={() => setPauseTop(false)}
      >
        <div
          className={`flex items-center gap-4 whitespace-nowrap ${
            pauseTop ? "paused" : "animate-scroll-left"
          }`}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className={`h-[400px] cursor-pointer ${
                src.includes("Frame") ? "min-w-[197px]" : "min-w-[667px]"
              } rounded-2xl`}
            >
              <Image
                src={src}
                width={640}
                height={340}
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- BOTTOM SLIDER (RIGHT → LEFT) ---------------- */}
      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setPauseBottom(true)}
        onMouseLeave={() => setPauseBottom(false)}
      >
        <div
          className={`flex items-center gap-4 whitespace-nowrap ${
            pauseBottom ? "paused" : "animate-scroll-right"
          }`}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className={`h-[400px] cursor-pointer ${
                src.includes("Frame") ? "min-w-[197px]" : "min-w-[667px]"
              } rounded-2xl`}
            >
              <Image
                src={src}
                width={640}
                height={340}
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
