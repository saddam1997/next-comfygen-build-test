"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const blurDataURL =
  "data:image/webp;base64,UklGRh4AAABXRUJQVlA4IBAAAABwAgCdASoIAAQAAQAcJbACdASEf8WAP4AAABCTbFzAAA=";

export default function Slider({
 SliderDATA
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  const isPaused = useRef(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------- RESPONSIVE ---------- */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

 

  const checkScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, clientWidth } = sliderRef.current;
    const card =
      sliderRef.current.querySelector(".slide-card") as HTMLElement;

    if (!card) return;

    const index = Math.round(scrollLeft / card.offsetWidth);

    setActiveIndex(index);
    setCanLeft(scrollLeft > 5);
    setCanRight(
      scrollLeft + clientWidth <
      sliderRef.current.scrollWidth - 5
    );
  };




  useEffect(() => {
    if (!sliderRef.current) return;

    autoRef.current = setInterval(() => {
      if (!sliderRef.current || isPaused.current || isDown.current)
        return;

      const slider = sliderRef.current;
      const card =
        slider.querySelector(".slide-card") as HTMLElement;
      const cardWidth = card?.offsetWidth || 300;

      // LOOP
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 10
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, isMobile ? 4500 : 3500); // slower on mobile

    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [isMobile]);


  /* ---------- ARROW CLICK ---------- */
  const move = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    isPaused.current = true;

    const card = sliderRef.current.querySelector(".slide-card") as HTMLElement;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -card.offsetWidth : card.offsetWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      isPaused.current = false;
    }, 2000);
  };

  /* ---------- MOUSE DRAG ---------- */
  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    isPaused.current = true;
    sliderRef.current.classList.add("dragging");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDown.current = false;
    sliderRef.current?.classList.remove("dragging");
    setTimeout(() => (isPaused.current = false), 800);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollStart.current - walk;
  };

  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold text-[#212121]">
            {SliderDATA?.heading}
          </h2>
          <p
            className="text-gray-600 mt-3"
            dangerouslySetInnerHTML={{ __html: SliderDATA?.description }}
          />
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            onMouseDown={onMouseDown}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={onMouseMove}
            onMouseEnter={() => (isPaused.current = true)}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 cursor-grab"
            style={{ scrollSnapType: isMobile ? "x mandatory" : "none" }}
          >
            {SliderDATA?.IndustriesServe.map((item:any, i:any) => (
              <div
                key={i}
                className="slide-card flex-shrink-0 bg-white rounded-2xl shadow hover:shadow-xl transition border"
                style={{
                  width: isMobile ? "90%" : "340px",
                  scrollSnapAlign: "center",
                }}
              >
                <div className="h-52 flex items-center justify-center bg-gray-50">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={280}
                    height={180}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-contain h-full"
                  />
                </div>

                <div className="p-6 text-center space-y-4 select-none">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div
                    className="text-gray-600 text-sm" // remove this class line-clamp-3 - resion to change because containt is not show complete
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <button
                    // onClick={openModal}
                    className="bg-[#5556D1] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-white hover:text-[#5556D1] border border-[#5556D1] transition"
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                onClick={() => move("left")}
                aria-label="Previous slide"
                disabled={!canLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-[#5556D1] hover:text-white transition ${!canLeft && "opacity-40 cursor-not-allowed"
                  }`}
              >
                <BiChevronLeft size={30} />
              </button>

              <button
                onClick={() => move("right")}
                 aria-label="Next slide"
                disabled={!canRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-[#5556D1] hover:text-white transition ${!canRight && "opacity-40 cursor-not-allowed"
                  }`}
              >
                <BiChevronRight size={30} />
              </button>
            </>
          )}

          <div className="flex justify-center gap-2 mt-6">
            {SliderDATA?.IndustriesServe.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                aria-controls="appcard-slider"
                onClick={() => {
                  if (!sliderRef.current) return;

                  const card =
                    sliderRef.current.querySelector(
                      ".slide-card"
                    ) as HTMLElement;

                  sliderRef.current.scrollTo({
                    left: card.offsetWidth * index,
                    behavior: "smooth",
                  });
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "bg-[#5556D1] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>


        {/* DOT INDICATORS */}


      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
        .dragging {
          cursor: grabbing !important;
        }
      `}</style>
    </section>
  );
}
