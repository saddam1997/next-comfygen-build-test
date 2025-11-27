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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const autoplayRef = useRef<any>(null);

  // 🧠 Adjust slides per view based on screen size
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 680) setVisibleSlides(4);
      else if (window.innerWidth < 1024) setVisibleSlides(4);
      else setVisibleSlides(4);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // ⚡ Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= sliderData.length ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [sliderData.length]);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= sliderData.length ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? sliderData.length - 1 : prev - 1
    );
  };

  // 🧮 Calculate slide width dynamically
  const slideWidth = 100 / visibleSlides;

  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9] mt-8 lg:p-0 p-4 overflow-hidden">
      <div className="container mb-8 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2 p-2">
            <h2 className="xl:text-4xl text-2xl text-black font-bold">{heading}</h2>
            <p className="text-black font-normal text-sm">{description}</p>
          </div>

          {/* Controls */}
          <div className="md:flex hidden items-center gap-4 px-4">
            <button
              title="Previous"
              onClick={previous}
              className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] transition-all duration-200 cursor-pointer"
            >
              <BiChevronLeft size={35} />
            </button>
            <button
              title="Next"
              onClick={next}
              className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] transition-all duration-200 cursor-pointer"
            >
              <BiChevronRight size={35} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-6">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
              width: `${(sliderData.length * 100) / visibleSlides}%`,
            }}
          >
            {sliderData.map((item: any, index: number) => (
              <div
                key={index}
                className="p-3"
                style={{ flex: `0 0 ${slideWidth}%` }}
              >
                <div className="border border-[#5556D1] rounded-lg p-4 space-y-4 bg-white shadow-sm hover:shadow-md transition">
                  <div className="w-full flex justify-center">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      width={297}
                      height={192}
                      quality={70}
                      priority
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="rounded-lg object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-[#212121] text-lg font-semibold">{item.title}</h3>
                    <p
                      className="text-[#212121] text-sm"
                       dangerouslySetInnerHTML={{
    __html: item.description?.length > 200 ? item.description.slice(0, 200) + "..."  : item.description
  }}
                    />
                    <a
                      href={item.buttonLink}
                      onClick={openModal}
                      className="mt-4 inline-block border hover:bg-white transition text-white bg-[#5556D1] hover:border-[#5556D1] hover:text-[#5556D1] border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full"
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}












// import React, { useRef } from "react";
// import Image from "next/image";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// // Optimized blur data URL for better loading
// const blurDataURL = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4IBAAAABwAgCdASoIAAQAAQAcJbACdASEf8WAP4AAABCTbFzAAA=";

// function AppcardSlider({
//   heading = "Industries We Empower with Our Digital Solutions",
//   description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",
//   sliderData = [],
//   openModal,
// }) {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 4000, // Increased for better UX
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 680,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplaySpeed: 4000,
//         }
//       }
//     ]
//   };

//   const sliderRef = useRef(null);

//   const next = () => {
//     sliderRef.current.slickNext();
//   };

//   const previous = () => {
//     sliderRef.current.slickPrev();
//   };

  

//   return (
//     <section className="lg:py-16 py-10 bg-[#F5F5F9] mt-8 lg:p-0 p-4">
//       <div className="container mb-8 mx-auto bg-[#F5F5F9] ">
//         <div className="flex items-center justify-between">
//           <div className="space-y-2 p-2">
//             <h2 className="xl:text-4xl text-2xl text-black font-bold">{heading}</h2>
//             <p className=" text-black font-normal text-sm">{description}</p>
//           </div>
//           <div className="md:flex hidden items-center gap-4 px-4">
//             <button
//               title="Previous"
//               type="button"
//               aria-label="Previous"
//               onClick={previous}
//               className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] cursor-pointer">
//               <BiChevronLeft size={35} />
//             </button>
//             <button
//               title="Next"
//               type="button"
//               aria-label="Next"
//               onClick={next}
//               className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] cursor-pointer"
//             >
//               <BiChevronRight size={35} />
//             </button>
//           </div>
//         </div>

//         <div className="slider-container mt-6">
//           <Slider {...settings} ref={sliderRef}>
//             {sliderData.map((item:any, index:any) => (
//               <div key={index} className="md:px-3">
//                 {item.link ? (
//                   <a href={item.link} key={item.link} className="block">
//                     <div className="border border-[#5556D1] rounded-lg p-4 space-y-8 ">
//                       <div className="relative w-full flex justify-center">
//                         <Image
//                           src={item.imgSrc}
//                           alt={item.title}
//                           width={297}
//                           height={192}
//                           quality={50}
//                           priority
//                           sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
//                           placeholder="blur"
//                           blurDataURL={blurDataURL}
//                           className=" rounded-lg object-contain"
//                         />
//                       </div>
//                       <div className="text-center">
//                         <h3 className="text-black text-lg font-semibold">{item.title}</h3>
//                         <p
//                           className="text-black text-sm"
//                           dangerouslySetInnerHTML={{ __html: item.description }}
//                         />

//                         <a
//                         href={item.buttonLink}
//                         onClick={openModal}
//                         className="mt-4 inline-block border  hover:bg-white transition text-white bg-[#5556D1] hover:border-[#5556D1] hover:text-[#5556D1]  border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full"
//                       >
//                         {item.buttonText}
//                       </a>
//                       </div>
//                     </div>
//                   </a>
//                 ) : (
//                   <div className="border border-[#5556D1] rounded-lg p-4 space-y-4 ">
//                     <div className="w-full">
//                       <Image
//                         src={item.imgSrc}
//                         alt={item.title}
//                         width={640}
//                         height={360}
//                         quality={70}
//                         priority
//                         sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
//                         className="rounded-lg object-contain w-full h-full"
//                       />
//                     </div>
//                     <div className="text-center">
//                       <h3 className="text-[#212121] text-lg font-semibold">{item.title}</h3>
//                       <p
//                         className="text-[#212121] text-sm"
//                         dangerouslySetInnerHTML={{ __html: item.description }}
//                       />

//                       <a
//                         href={item.buttonLink}
//                         onClick={openModal}
//                         className="mt-4 inline-block border  hover:bg-white transition text-white bg-[#5556D1] hover:border-[#5556D1] hover:text-[#5556D1]  border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full"
//                       >
//                         {item.buttonText}
//                       </a>
//                     </div>
//                   </div>
//                 )}

//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AppcardSlider;
