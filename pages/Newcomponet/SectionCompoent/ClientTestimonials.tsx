
"use client";

import React, { useEffect, useRef, useState } from "react";

const BiChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const BiChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const defaultTestimonials = [
  {
    text: "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations. They're a reliable partner for any serious brand looking to scale digitally.",
    name: "Jessica Moore",
    title: "Texas, USA"
  },
  {
    text: "Outstanding work on our mobile application. The team was professional, responsive, and delivered exactly what we needed. Highly recommend their services to anyone looking for quality development.",
    name: "Michael Chen",
    title: "California, USA"
  },
  {
    text: "The custom software solution they built transformed our business operations. Their attention to detail and commitment to excellence is unmatched. We'll definitely work with them again.",
    name: "Sarah Johnson",
    title: "New York, USA"
  },
  {
    text: "Impressive turnaround time and exceptional quality. The team went above and beyond to ensure our project was successful. Their expertise in modern technologies is evident in every aspect.",
    name: "David Williams",
    title: "Florida, USA"
  }
];

const ClientTestimonials = ({
  testimonials = defaultTestimonials,
  heading = "We appreciate feedback from our customers",
}) => {
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateCounter = () => {
      setCount((prev) => {
        if (prev < 500) return prev + 1;
        clearInterval(intervalRef.current);
        return prev;
      });
    };
    intervalRef.current = setInterval(updateCounter, 5);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1440) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = (index:any) => {
    if (expandedIndex === index) {
      setIsExpanded(false);
      setExpandedIndex(-1);
    } else {
      setIsExpanded(true);
      setExpandedIndex(index);
    }
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Create an extended array for infinite loop effect
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials
  ];

  const startIndex = testimonials.length + currentIndex;

  return (
    <section className="lg:py-16 py-10 bg-white">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 h-full">
        <div className="space-y-3">
          <h2 className="xl:text-4xl text-3xl text-gray-900 text-center font-bold">
            {heading}
          </h2>
        </div>
        <div className="mt-6 space-y-6">
          <div className="flex justify-end items-center gap-4 px-4">
            <button
              onClick={goToPrev}
              disabled={isTransitioning}
              className="group px-4 py-2 border border-gray-900 text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white"
              aria-label="Previous Slide"
            >
              <BiChevronLeft />
            </button>

            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="group px-4 py-2 border  border-gray-900 text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white"
              aria-label="Next Slide"
            >
              <BiChevronRight />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${(startIndex * 100) / slidesToShow}%)`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => {
                const actualIndex = index % testimonials.length;
                return (
                  <div 
                    key={index}
                    className="px-4 flex-shrink-0 "
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    <div className="p-6 space-y-4 rounded-md shadow-lg border border-gray-200 h-full flex flex-col bg-white hover:shadow-xl transition-shadow duration-300">
                      <p className="text-gray-700 text-base flex-grow">
                        {isExpanded && expandedIndex === actualIndex
                          ? testimonial.text
                          : testimonial.text.length > 200
                          ? `${testimonial.text.slice(0, 200)}...`
                          : testimonial.text}
                        {testimonial.text.length > 200 && (
                          <button
                            onClick={() => toggleReadMore(actualIndex)}
                            className="text-blue-700 hover:text-blue-900 font-semibold ml-1"
                          >
                            {isExpanded && expandedIndex === actualIndex
                              ? " Show Less"
                              : " Show More"}
                          </button>
                        )}
                      </p>
                      <div>
                        <p className="text-gray-900 font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-blue-600">({testimonial.title})</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;



























// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const BiChevronLeft = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M15 18l-6-6 6-6" />
//   </svg>
// );

// const BiChevronRight = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M9 18l6-6-6-6" />
//   </svg>
// );

// const defaultTestimonials = [
//   {
//     text: "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations. They're a reliable partner for any serious brand looking to scale digitally.",
//     name: "Jessica Moore",
//     title: "Texas, USA",
//   },
//   {
//     text: "Outstanding work on our mobile application. The team was professional, responsive, and delivered exactly what we needed. Highly recommend their services to anyone looking for quality development.",
//     name: "Michael Chen",
//     title: "California, USA",
//   },
//   {
//     text: "The custom software solution they built transformed our business operations. Their attention to detail and commitment to excellence is unmatched. We'll definitely work with them again.",
//     name: "Sarah Johnson",
//     title: "New York, USA",
//   },
//   {
//     text: "Impressive turnaround time and exceptional quality. The team went above and beyond to ensure our project was successful. Their expertise in modern technologies is evident in every aspect.",
//     name: "David Williams",
//     title: "Florida, USA",
//   },
// ];

// export default function ClientTestimonials({
//   testimonials = defaultTestimonials,
//   heading = "We appreciate feedback from our customers",
// }) {
//   const [count, setCount] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(-1);
//   const [slidesToShow, setSlidesToShow] = useState(2);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const animationFrame = useRef<number | null>(null);

//   // Counter animation
//   useEffect(() => {
//     let frame: any;
//     const step = () => {
//       setCount((prev) => {
//         if (prev < 500) {
//           frame = requestAnimationFrame(step);
//           return prev + 1;
//         }
//         cancelAnimationFrame(frame);
//         return prev;
//       });
//     };
//     frame = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   // Throttled resize handler
//   useEffect(() => {
//     let resizeTimer: any;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         const width = window.innerWidth;
//         setSlidesToShow(width < 1024 ? 1 : 2);
//       }, 200);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       clearTimeout(resizeTimer);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const toggleReadMore = (index: number) => {
//     if (expandedIndex === index) {
//       setIsExpanded(false);
//       setExpandedIndex(-1);
//     } else {
//       setIsExpanded(true);
//       setExpandedIndex(index);
//     }
//   };

//   const goToNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
//     animationFrame.current = requestAnimationFrame(() => setIsTransitioning(false));
//   };

//   const goToPrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
//     animationFrame.current = requestAnimationFrame(() => setIsTransitioning(false));
//   };

//   // Generate visible slides only
//   const visibleSlides = [];
//   for (let i = 0; i < slidesToShow + 1; i++) {
//     const index = (currentIndex + i) % testimonials?.length;
//     visibleSlides?.push(testimonials[index]);
//   }

//   return (
//     <section className="lg:py-16 py-10 bg-white">
//       <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 h-full">
//         <div className="space-y-3">
//           <h2 className="xl:text-4xl text-3xl text-gray-900 text-center font-bold">
//             {heading}
//           </h2>
//         </div>

//         <div className="mt-6 space-y-6">
//           {/* Navigation Buttons */}
//           <div className="flex justify-end items-center gap-4 px-4">
//             <button
//               onClick={goToPrev}
//               disabled={isTransitioning}
//               className="group px-4 py-2 border border-gray-900 text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white transition"
//               aria-label="Previous Slide"
//             >
//               <BiChevronLeft />
//             </button>

//             <button
//               onClick={goToNext}
//               disabled={isTransitioning}
//               className="group px-4 py-2 border border-gray-900 text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white transition"
//               aria-label="Next Slide"
//             >
//               <BiChevronRight />
//             </button>
//           </div>

//           {/* Slider */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-700 ease-in-out will-change-transform"
//               style={{
//                 transform: `translate3d(-${currentIndex * (100 / slidesToShow)}%, 0, 0)`,
//               }}
//             >
//               {visibleSlides?.map((testimonial, i) => (
//                 <div key={i} className="px-4 flex-shrink-0" style={{ width: `${100 / slidesToShow}%` }}>
//                   <div className="p-6 space-y-4 rounded-md shadow-lg border border-gray-200 h-full flex flex-col bg-white hover:shadow-xl transition-shadow duration-300">
//                     <p className="text-gray-700 text-base flex-grow">
//                       {isExpanded && expandedIndex === i
//                         ? testimonial?.text
//                         : testimonial?.text?.length > 200
//                         ? `${testimonial?.text?.slice(0, 200)}...`
//                         : testimonial?.text}
//                       {testimonial?.text?.length > 200 && (
//                         <button
//                           aria-label="is Expanded"
//                           onClick={() => toggleReadMore(i)}
//                           className="text-blue-700 hover:text-blue-900 font-semibold ml-1"
//                         >
//                           {isExpanded && expandedIndex === i ? " Show Less" : " Show More"}
//                         </button>
//                       )}
//                     </p>
//                     <div>
//                       <p className="text-gray-900 font-semibold">{testimonial?.name}</p>
//                       <p className="text-blue-600">({testimonial?.title})</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-4">
//             {testimonials?.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   if (!isTransitioning) {
//                     setIsTransitioning(true);
//                     setCurrentIndex(index);
//                     animationFrame.current = requestAnimationFrame(() =>
//                       setIsTransitioning(false)
//                     );
//                   }
//                 }}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-purple-600 w-8" : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






























// import React, { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import Image from "next/image";

// const defaultTestimonials = [
//   {
//     "text": "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations. They’re a reliable partner for any serious brand looking to scale digitally.",
//     "name": "Jessica Moore",
//     "title": "Texas, USA"
//   },
  
// ];

// const ClientTestimonials = ({
//   testimonials = defaultTestimonials,
//   heading = "We appreciate feedback from our customers",
// }) => {
//   const [count, setCount] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const updateCounter = () => {
//       setCount((prev) => {
//         if (prev < 500) return prev + 1;
//         clearInterval(intervalRef.current);
//         return prev;
//       });
//     };
//     intervalRef.current = setInterval(updateCounter, 5);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const toggleReadMore = (index) => {
//     setIsExpanded(!isExpanded);
//     setCurrentIndex(index);
//   };

//   const settings = {
//     infinite: true,
//     speed: 700,
//     slidesToShow: 2,
//     arrows: false,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           autoplay: false,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: false,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: false,
//           infinite: true,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="lg:py-16 py-10 bg-white">
//       <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 h-full">
//         <div className="space-y-3">
//           <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
//             {heading}
//           </h2>
//         </div>
//         <div className="mt-6 space-y-6">
//           <div className="flex justify-end items-center gap-4 px-4">
//             <button
//               onClick={() => sliderRef.current.slickPrev()}
//               className="group px-4 py-2 border text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white"
//               aria-label="Previous Slide"
//             >
//               <BiChevronLeft size={24} />
//             </button>

//             <button
//               onClick={() => sliderRef.current.slickNext()}
//               className="group px-4 py-2 border text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white"
//               aria-label="Next Slide"
//             >
//               <BiChevronRight size={24} />
//             </button>
//           </div>
//           <Slider ref={sliderRef} {...settings} className="sm:h-56 h-full">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="px-4 sm:h-56 h-full">
//                 <div className="p-6 space-y-4 rounded-[6px] shadow-lg border h-full">
//                   <p className="text-gray-700 text-base">
//                     {isExpanded && currentIndex === index
//                       ? testimonial.text
//                       : `${testimonial.text.slice(0, 200)}...`}
//                     <span
//                       onClick={() => toggleReadMore(index)}
//                       className="text-blue-700 hover:text-blue-900 font-semibold"
//                     >
//                       {isExpanded && currentIndex === index
//                         ? "Show Less"
//                         : "Show More"}
//                     </span>
//                   </p>
//                   <div className="h-full">
//                     <p
//                       className="text-gray-900 font-semibold"
//                       dangerouslySetInnerHTML={{ __html: testimonial.name }}
//                     ></p>
//                     <p className="text-blue-600">({testimonial.title})</p>
//                   </div>
//                   {/* <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-2">
//                       <Image
//                         alt="COMFYGEN LIMITED"
//                         src="https://www.comfygen.com/image/clutch-img.svg"
//                         height={49}
//                         width={93}
//                       />
//                       <div>
//                         <div className="">
//                           <div className="flex items-center ml-2 space-x-1">
//                             <span className="text-yellow-400">&#9733;</span>
//                             <span className="text-yellow-400">&#9733;</span>
//                             <span className="text-yellow-400">&#9733;</span>
//                             <span className="text-yellow-400">&#9733;</span>
//                             <span className="text-yellow-400">&#9733;</span>
//                           </div>
//                           <p className="ml-1 text-gray-500">(5 Ratings)</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <Image
//                         alt=" Who We Are?"
//                         src="https://www.comfygen.com/image/testimonial-quat.png"
//                         height={50}
//                         width={50}
//                       />
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientTestimonials;
