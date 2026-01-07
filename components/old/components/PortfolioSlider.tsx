"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdArrowBack, MdArrowForward, MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function PortfolioSec({
  techData = [],
  heading = "Our Portfolio",
  description = "Explore our latest projects.",
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<any>(null);

  // 🕒 Auto slide
  useEffect(() => {
    if (techData.length === 0) return;
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [techData]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev + 1) % techData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev - 1 + techData.length) % techData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Responsive center padding logic
  const [centerPadding, setCenterPadding] = useState("140px");
  useEffect(() => {
    const updatePadding = () => {
      setCenterPadding(window.innerWidth < 700 ? "0px" : "140px");
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9] mt-8 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="xl:text-4xl text-2xl md:text-3xl text-[#212121] font-bold">
            {heading}
          </h2>
          <p
            className="text-base font-normal mt-2 lg:w-2/3 mx-auto w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>

        {techData.length > 0 ? (
          <div className="relative">
            {/* Slider container */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(-${activeSlide * 100}% + ${centerPadding}))`,
              }}
            >
              {techData.map((slide, index) => {
                const isActive = index === activeSlide;
                const bgColor =
                  index % 3 === 0
                    ? "bg-[#e5f5f0]"
                    : index % 3 === 1
                    ? "bg-[#edeffe]"
                    : "bg-[#fffbe6]";

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full px-2 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: isActive ? 1 : 0.5 }}
                  >
                    <div
                      className={`p-6 rounded-xl border border-[#000]/10 ${bgColor}`}
                    >
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
                        {/* Image */}
                        <div className="h-auto flex justify-center">
                          <Image
                            className="h-auto w-full object-contain"
                            src={slide.image}
                            alt={slide.title}
                            width={800}
                            height={400}
                            quality={70}
                            priority
                          />
                        </div>

                        {/* Text */}
                        <div>
                          <div className="md:space-y-4 space-y-2">
                            <h3 className="xl:text-4xl md:text-2xl text-xl font-semibold">
                              {slide.title}
                            </h3>
                            <p
                              className="text-black py-3 text-base block md:hidden"
                              dangerouslySetInnerHTML={{
                                __html:
                                  slide.description.slice(0, 80) + "...",
                              }}
                            ></p>
                            <p
                              className="text-black py-3 text-base hidden md:block"
                              dangerouslySetInnerHTML={{
                                __html: slide.description,
                              }}
                            ></p>

                            <Link href={slide.link} passHref>
                              <button  aria-label="Explore Now" className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-3 sm:px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                                Explore Now <MdOutlineArrowOutward />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-5 mt-6">
              <button
                aria-label="Prev Slide"
                onClick={handlePrev}
                className="text-xl border border-[#000] rounded-full p-2.5 text-black hover:text-white hover:bg-[#5556D1] transition"
              >
                <MdArrowBack />
              </button>
              <button
                aria-label="Next Slide"
                onClick={handleNext}
                className="text-xl border border-[#000] rounded-full p-2.5 text-black hover:text-white hover:bg-[#5556D1] transition"
              >
                <MdArrowForward />
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No portfolio items available.
          </p>
        )}
      </div>
    </section>
  );
}




// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import {
//   MdArrowBack,
//   MdArrowForward,
//   MdOutlineArrowOutward,
// } from "react-icons/md";
// import Link from "next/link";

// function PortfolioSec({
//   techData = [],
//   heading = "Our Portfolio",
//   description = "Explore our latest projects.",
// }) {
//   const sliderRef = useRef(null);
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 1500,
//     className: "center",
//     centerMode: true,
//     centerPadding: "140px",
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     beforeChange: (_, newIndex) => setActiveSlide(newIndex),
//     responsive: [
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//           centerPadding: "0px",
//         },
//       },
//     ],
//   };

//   return (
//     <section className="lg:py-16 py-10 bg-[#F5F5F9] mt-8">
//       <div className="slider-container">
//         <div className="mx-auto max-w-[1600px]  px-6 lg:px-8 w-full">
//           <div className="text-center mb-10">
//             <h2 className="xl:text-4xl text-2xl md:text-3xl text-[#212121] font-bold">
//               {heading}
//             </h2>
//             <p
//               className="text-base font-normal mt-2 lg:w-2/3 mx-auto w-full"
//               dangerouslySetInnerHTML={{ __html: description }}
//             ></p>
//           </div>

       
//            {techData.length > 0 ? (
//             <Slider ref={sliderRef} {...settings}>
//               {techData.map((slide, index) => {
//                 const bgColor =
//                   index % 3 === 0
//                     ? "bg-[#e5f5f0]"
//                     : index % 3 === 1
//                       ? "bg-[#edeffe]"
//                       : "bg-[#fffbe6]";

//                 return (
//                   <div key={index} className="px-2 overflow-hidden lg:w-[1256px]">
//                     <div
//                       className={`p-6 rounded-xl transition-opacity duration-300 min-h-max ${index === activeSlide ? "opacity-100" : "opacity-50"
//                         } border border-[#000]/10 ${bgColor}`}
//                     >
//                       <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
//                         <div className="h-[160] md:h-[400px] object-contain">
                          
//                           <Image
//                             className="h-auto w-full object-contain"
//                             src={slide.image}
//                             alt={slide.title}
//                             width={297}
//                             height={192}
//                             quality={50}
//                             priority
//                             // loading="lazy"
//                             // decoding="async"
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 907px"
//                             // placeholder="blur"
//                             // blurDataURL="/blur-placeholder.webp"
//                           />
//                         </div>
//                         <div>
//                           <div className="md:space-y-4 space-y-2">
//                             <div>
//                               <h3 className="xl:text-4xl md:text-2xl text-xl font-semibold">
//                                 {slide.title}
//                               </h3>
//                               {/* <p className="text-black py-3 text-base">
//                                 {slide.description}
//                               </p> */}
//                               <p
//                                 className="text-black py-3 text-base block md:hidden"
//                                 dangerouslySetInnerHTML={{
//                                   __html:
//                                     slide.description.slice(0, 80) + "...",
//                                 }}
//                               ></p>
//                               <p
//                                 className="text-black py-3 text-base hidden md:block"
//                                 dangerouslySetInnerHTML={{
//                                   __html: slide.description,
//                                 }}
//                               ></p>

//                               {/* last here  */}
//                             </div>
//                             <div>
//                               <Link href={slide.link} passHref>
//                                 <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-3 sm:px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
//                                   Explore Now <MdOutlineArrowOutward />
//                                 </button>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </Slider>
//           ) : (
//             <p className="text-center text-gray-500 text-lg">
//               No portfolio items available.
//             </p>
//           )}
        

//           {techData.length > 0 && (
//             <div className="flex justify-center gap-5 mt-6">
//               <button
//                 aria-label="Prev Slide"
//                 onClick={() => sliderRef.current.slickPrev()}
//                 className="text-xl border border-[#000] rounded-full p-2.5 text-black hover:text-white hover:bg-[#5556D1]"
//               >
//                 <MdArrowBack />
//               </button>
//               <button
//                 aria-label="Next Slide"
//                 onClick={() => sliderRef.current.slickNext()}
//                 className="text-xl border border-[#000] rounded-full p-2.5 text-black hover:text-white hover:bg-[#5556D1]"
//               >
//                 <MdArrowForward />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PortfolioSec;
