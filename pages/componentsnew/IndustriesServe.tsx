"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const defaultSliderData = [
  {
    imgSrc: "https://www.comfygen.com/image/industries-ecommerce-img.webp",
    title: "E-Commerce",
    description:
      "Revolutionizing online shopping with feature-rich, secure, and user-friendly mobile app solutions.",
    link: "/e-commerce-app-development",
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-healthcare-img.webp",
    title: "Healthcare",
    description:
      "Empowering health services with innovative, patient-centric healthcare app development for better outcomes.",
    link: "/healthcare-app-development",
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-blockchain-img.webp",
    title: "Blockchain",
    description:
      "Transforming industries with secure, transparent, and decentralized blockchain app development solutions.",
    link: "/blockchain-development",
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-education-img.webp",
    title: "Education",
    description:
      "Enhancing learning experiences with interactive, engaging, and scalable education apps.",
    link: "/ca/education-app-development-company",
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-industries-img.webp",
    title: "Logistics",
    description:
      "Streamlining logistics operations through advanced, real-time tracking and management solutions.",
  },
];

export default function IndustriesServe({
  heading = "Industries We Serve",
  description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",
  sliderData = defaultSliderData,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const slidesPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 680) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [visibleSlides, setVisibleSlides] = useState(slidesPerView());

  useEffect(() => {
    const handleResize = () => setVisibleSlides(slidesPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderData.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const next = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev + 1) % sliderData.length);
  };

  const previous = () => {
    stopAutoSlide();
    setCurrentIndex(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <section className="lg:py-16 py-10">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 min-h-[850px] pb-4 sm:min-h-[700px] bg-[#F5F5F9] md:pt-14 pt-6 md:px-10 px-6 rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
              {heading}
            </h2>
            <p
              className="xl:text-lg text-base text-[#212121] font-normal"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="md:flex hidden items-center gap-4 px-4">
            <button
              onClick={previous}
              className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1]"
            >
              <BiChevronLeft size={35} />
            </button>
            <button
              onClick={next}
              className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1]"
            >
              <BiChevronRight size={35} />
            </button>
          </div>
        </div>

        <div className="relative mt-6">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleSlides
              }%)`,
              width: `${(sliderData.length * 100) / visibleSlides}%`,
            }}
          >
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="p-3"
                style={{ width: `${100 / sliderData.length}%` }}
              >
                <a href={item.link || "#"} className="block">
                  <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[360px] bg-white hover:shadow-md transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      width={269}
                      height={416}
                      className="w-full rounded-md"
                      unoptimized
                    />
                    <div>
                      <h3 className="text-[#212121] text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p
                        className="text-[#212121] text-sm"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}













// import React, { useRef, } from "react";
// import Image from "next/image";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const defaultSliderData = [
//   {
//     imgSrc: "https://www.comfygen.com/image/industries-ecommerce-img.webp",
//     title: "E-Commerce",
//     description: "Revolutionizing online shopping with feature-rich, secure, and user-friendly mobile app solutions.",
//     link: "/e-commerce-app-development"
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/industries-healthcare-img.webp",
//     title: "Healthcare",
//     description: "Empowering health services with innovative, patient-centric healthcare app development for better outcomes.",
//     link: "/healthcare-app-development"
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/industries-blockchain-img.webp",
//     title: "Blockchain",
//     description: "Transforming industries with secure, transparent, and decentralized blockchain app development solutions.",
//     link: "/blockchain-development"
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/industries-education-img.webp",
//     title: "Education",
//     description: "Enhancing learning experiences with interactive, engaging, and scalable education apps.",
//     link: "/ca/education-app-development-company"
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/industries-industries-img.webp",
//     title: "Logistics",
//     description: "Streamlining logistics operations through advanced, real-time tracking and management solutions."
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/transportation-industries-img.webp",
//     title: "Transportation",
//     description: "Simplifying travel with seamless, efficient transportation app innovations."
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/travel-hospitality-industries-img.webp",
//     title: "Travel & Hospitality",
//     description: "Enhancing customer journeys with intuitive, tech-driven travel and hospitality applications."
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/construction-industries-img.webp",
//     title: "Construction",
//     description: "Driving project efficiency with modern construction management and planning applications."
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/game-industries-img.webp",
//     title: "Game",
//     description: "Creating immersive, engaging gaming experiences with cutting-edge app development technologies.",
//     link: "/game-development-company"
//   },
 
//   {
//     imgSrc: "https://www.comfygen.com/image/entertainment-industries-img.webp",
//     title: "Entertainment",
//     description: "Innovating entertainment platforms with personalized, accessible digital experiences."
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/social-media-app-industries-img.webp",
//     title: "Social Media App",
//     description: "Connecting users worldwide through innovative, feature-rich social media app solutions.",
//     link: "/social-media-app-development"
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/finance-industries-img.webp",
//     title: "Finance",
//     description: "Delivering secure, user-friendly financial apps tailored to modern customer needs.",
//     link: "/finance-app-development"
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/dating-industries-img.webp",
//     title: "Dating",
//     description: "Crafting intuitive dating platforms to foster meaningful connections seamlessly.",
//     link: "/dating-app-development"
//   },
//   {
//     imgSrc: "https://www.comfygen.com/image/restaurant-industries-img.webp",
//     title: "Restaurant industries",
//     description: "Enhancing dining experiences with user-focused, efficient restaurant management and ordering apps.",
//     link: "/food-delivery-app-development"
//   }
// ];

// function IndustriesServe({ heading = "Industries We Serve", description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",  sliderData = defaultSliderData }) {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
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
//           autoplaySpeed: 6000,
//           cssEase: "linear",
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
//     <section className="lg:py-16  py-10">
//       <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 min-h-[850px] pb-4 sm:min-h-[700px] bg-[#F5F5F9] md:pt-14 pt-6 md:px-10 px-6 rounded-3xl">
//         <div className="flex items-center justify-between">
//           <div className="space-y-2">
//           <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">{heading}</h2>
//           <p className="xl:text-lg text-base text-[#212121] font-normal" dangerouslySetInnerHTML={{ __html: description }} />
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
//             {sliderData?.map((item, index) => (
//               <div key={index} className="md:px-3">
//                 <a href={item.link} className="block">
//                   <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[360px]">
//                     <Image
//                       src={item.imgSrc} 
//                       alt={item.title}
//                       height={416}
//                       unoptimized
//                       width={269}
//                       className="w-full"
//                     />
//                     <div>
//                       <h3 className="text-[#212121] text-lg font-semibold">{item.title}</h3>
//                       <p className="text-[#212121] text-sm" dangerouslySetInnerHTML={{ __html: item.description }}></p>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default IndustriesServe;

