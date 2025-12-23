"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Optimized blur data URL for better loading
const blurDataURL =
  "data:image/webp;base64,UklGRh4AAABXRUJQVlA4IBAAAABwAgCdASoIAAQAAQAcJbACdASEf8WAP4AAABCTbFzAAA=";

export default function AppcardSlider({
  heading = "Industries We Empower with Our Digital Solutions",
  description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",
  sliderData = [],
  openModal,
}) {

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const slideCrd = React.useRef<HTMLDivElement | null>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef(false);



  const scrollcards = (direction: "left" | "right") => {
    if (!slideCrd.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    slideCrd.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    if (!slideCrd.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = slideCrd.current;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };


  // --- Auto Slide + Infinite Loop + Pause on Hover ---
  useEffect(() => {
    const startAutoSlide = () => {
      if (autoSlideRef.current) return;

      autoSlideRef.current = setInterval(() => {
        if (isPaused.current) return;
        if (!slideCrd.current) return;

        const slider = slideCrd.current;

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 2500);
    };

    const stopAutoSlide = () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = null;
      }
    };

    startAutoSlide();
    return () => stopAutoSlide();
  }, []);


  useEffect(() => {
    if (!slideCrd.current) return;
    const ref = slideCrd.current;

    checkScroll(); // check on mount

    ref.addEventListener("scroll", checkScroll);
    return () => ref.removeEventListener("scroll", checkScroll);
  }, []);





  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9] mt-8 lg:p-0 p-4 overflow-hidden">
      <div className="container mb-8 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mx-auto">
          <div className="space-y-2 p-2 text-center">
            <h2 className="xl:text-4xl text-2xl md:text-3xl text-[#212121] font-bold">{heading}</h2>
            <p className="text-base font-normal mt-2 mx-auto w-full" dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>

          {/* Controls */}
          {/* <div className="flex justify-end gap-4 mt-10 px-10 ">
            <div className="md:flex hidden items-center gap-4 px-4">

              <button
                title="left"
                disabled={!showLeftArrow}
                onClick={() => scrollcards("left")}
                className={`group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] transition-all duration-200 cursor-pointer ${!showLeftArrow ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <BiChevronLeft size={35} />

              </button>


              <button
                title="Next"
                disabled={!showRightArrow}
                onClick={() => scrollcards("right")}
                className={`group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] transition-all duration-200 cursor-pointer ${!showRightArrow ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <BiChevronRight size={35} />
              </button>

            </div>


          </div> */}
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto px-10 pb-4 scroll-hide scroll-smooth container mx-auto mt-5" ref={slideCrd}>
          {
            sliderData?.map((item: any, index: number) => (
              <div
                className="min-w-[390px] text-center h-[540px] flex flex-col justify-center border rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                onMouseEnter={() => (isPaused.current = true)}
                onMouseLeave={() => (isPaused.current = false)}
                key={index}

              >
                <div className="w-full flex justify-center">
                  <Image
                    src={item?.imgSrc}
                    alt={item?.title}
                    width={297}
                    height={192}
                    quality={70}
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="rounded-lg object-contain"
                  />
                </div>

                <div className="text-center w-full overflow-hidden px-4 space-y-4 py-2">
                  <h3 className="text-[#212121] text-lg font-semibold">{item?.title}</h3>
                  <p
                    className="text-[#212121] text-sm  "
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                  <a
                    href={item?.buttonLink}
                    onClick={openModal}
                    className="mt-4 inline-block border hover:bg-white transition text-white bg-[#5556D1] hover:border-[#5556D1] hover:text-[#5556D1] border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full"
                  >
                    {item?.buttonText}
                  </a>
                </div>
              </div>
            ))}
        </div>

        <div
        // className="flex justify-end gap-4 mt-10 px-10 "
        >
          <div className="md:flex hidden items-center gap-4 px-8">

            <button
              title="left"
              disabled={!showLeftArrow}
              onClick={() => scrollcards("left")}
              className={`group absolute top-1/2 left-0 w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] transition-all duration-200 cursor-pointer ${!showLeftArrow ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <BiChevronLeft size={35} />

            </button>


            <button
              title="Next"
              disabled={!showRightArrow}
              onClick={() => scrollcards("right")}
              className={`group w-10 absolute top-1/2  right-0 h-10 flex justify-center items-center hover:text-white text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] transition-all duration-200 cursor-pointer ${!showRightArrow ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <BiChevronRight size={35} />
            </button>

          </div>


        </div>

      </div>


    </section>
  );
}
