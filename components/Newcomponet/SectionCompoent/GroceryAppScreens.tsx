"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
  "https://www.comfygen.com/comfygen-images/grocery/about.webp",
  "https://www.comfygen.com/comfygen-images/grocery/checkout.webp",
  "https://www.comfygen.com/comfygen-images/grocery/explore.webp",
  "https://www.comfygen.com/comfygen-images/grocery/myCart.webp",
  "https://www.comfygen.com/comfygen-images/grocery/order-accepted.webp",
  "https://www.comfygen.com/comfygen-images/grocery/product-Detail.webp",
  "https://www.comfygen.com/comfygen-images/grocery/search.webp",
  "https://www.comfygen.com/comfygen-images/grocery/sign-up.webp",
  "https://www.comfygen.com/comfygen-images/grocery/sing-in.webp",
  "https://www.comfygen.com/comfygen-images/grocery/splash-Screen.webp",
];

const CARD_WIDTH = 250;
const CARD_HEIGHT = 550;
const GAP = 2;
const VISIBLE_CARDS = 7;
const AUTO_DELAY = 3000;

export default function AppShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const centerIndex = Math.floor(VISIBLE_CARDS / 2);

  const getCircularIndex = useCallback((index) => {
    return ((index % screens.length) + screens.length) % screens.length;
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => getCircularIndex(prev + 1));
  }, [getCircularIndex]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => getCircularIndex(prev - 1));
  }, [getCircularIndex]);

  const goToSlide = useCallback((index) => {
    setActiveIndex(getCircularIndex(index));
  }, [getCircularIndex]);

  // Auto slide effect
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(nextSlide, AUTO_DELAY);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, nextSlide]);

  // Touch events for mobile
  const handleTouchStart = (e:any) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Calculate visible indices
  const getVisibleIndices = () => {
    const indices = [];
    const start = activeIndex - centerIndex;
    
    for (let i = 0; i < VISIBLE_CARDS; i++) {
      indices.push(getCircularIndex(start + i));
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          {/* <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium tracking-wider">
              APP SHOWCASE
            </span>
          </div> */}
          
          <h2 className="text-xl md:text-5xl font-bold text-white  tracking-tight py-3">
            Our Grocery Delivery App Screens
            {/* Grocery Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">App Screens</span> */}
          </h2>
          <div className="w-28 bg-red-600 mx-auto h-1.5 "></div>
          
          {/* <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore the seamless user experience and modern interface of our grocery delivery application
          </p> */}
          
          {/* <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"></div>
            <div className="w-8 h-1 bg-emerald-500/50 rounded-full"></div>
            <div className="w-4 h-1 bg-emerald-500/30 rounded-full"></div>
          </div> */}
        </div>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white flex items-center justify-center shadow-2xl hover:from-emerald-600 hover:to-emerald-700 hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="sr-only">Previous</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white flex items-center justify-center shadow-2xl hover:from-emerald-600 hover:to-emerald-700 hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="sr-only">Next</span>
          </button>

          {/* Slider Track */}
          <div className="flex items-center justify-center gap-1 py-12">
            {visibleIndices.map((screenIndex, positionIndex) => {
              const isCenter = positionIndex === centerIndex;
              const distanceFromCenter = Math.abs(positionIndex - centerIndex);
              const scale = 1 - (distanceFromCenter * 0.15);
              const opacity = 1 - (distanceFromCenter * 0.3);
              const zIndex = VISIBLE_CARDS - distanceFromCenter;
              
              return (
                <div
                  key={`${screenIndex}-${positionIndex}`}
                  className="relative flex-shrink-0 transition-all duration-700 ease-out"
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    transform: `scale(${scale})`,
                    opacity: isCenter ? 1 : opacity,
                    zIndex: isCenter ? 30 : zIndex,
                    filter: isCenter ? 'none' : 'blur(2px)',
                  }}
                >
                  {/* Screen Frame */}
                  <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
                    {/* iPhone-style notch */}
                    {/* {isCenter && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                    )} */}
                    
                    {/* Screen Content */}
                    <div className="relative w-full h-full bg-black">
                      <Image
                        src={screens[screenIndex]}
                        alt={`App screen ${screenIndex + 1}`}
                        fill
                        sizes="(max-width: 568px) 100vw, 250px"
                        className="h-full w-full overflow-hidden"
                       
                      />
                    </div>
                    
                    {/* Glow effect for center card */}
                    {isCenter && (
                      <div className="absolute inset-0 rounded-[40px] pointer-events-none border-4 border-blue-600">
                        {/* <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                        <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-r from-emerald-500/20 to-transparent blur-xl -z-10"></div> */}
                      </div>
                    )}
                  </div>
                  
                  {/* Screen indicator (only for center card) */}
                  {/* {isCenter && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-emerald-400 text-sm font-medium">
                          Screen {screenIndex + 1}
                        </span>
                      </div>
                    </div>
                  )} */}
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          {/* <div className="max-w-md mx-auto mt-16">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">
                {activeIndex + 1} of {screens.length}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500/50 animate-pulse"></div>
                <span className="text-emerald-400 text-sm">
                  {isHovering ? 'Paused' : 'Auto Playing'}
                </span>
              </div>
            </div>
            
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full transition-all duration-1000"
                style={{ width: `${((activeIndex + 1) / screens.length) * 100}%` }}
              />
            </div>
          </div> */}
        </div>

        {/* Dots Navigation */}
        {/* <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-gradient-to-r from-emerald-500 to-emerald-300' : 'bg-gray-700 hover:bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      {/* Add CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(6, 78, 59, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 78, 59, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}




