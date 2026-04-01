

import { useState } from "react";
import HeadingTwo from "../ui/HeadingTwo";
import { parseHTMLString } from "../../lib/parseHTML";

import Card from "./Card";

const Index = ({testimonials}:any) => {
  const [current, setCurrent] = useState(0);

  // detect slides per view using CSS breakpoint logic
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return 1; // SSR safe default
    return window.innerWidth < 1024 ? 1 : 1;
  };

  const slidesToShow = getSlidesToShow();

  const maxIndex = Math.max(
    testimonials.Review.length - slidesToShow,
    0
  );

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-4 lg:py-4 bg-white">
      <div className="mx-auto ">
        <div className="text-center">
          <HeadingTwo color="black" text={testimonials?.heading} />
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden mt-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (current * 100) / slidesToShow
              }%)`,
            }}
          >
            {testimonials.Review.map((item:any, i:any) => (
              <div
                key={i}
                className="px-3 shrink-0 w-full "
              >
                <Card item={item}/>
                
              </div>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 ">
          <button className="w-10 h-10 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white" onClick={prev}>←</button>
          <button className="w-10 h-10 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white" onClick={next}>→</button>
        </div>


      
      </div>
      {/* <ReviewCard/> */}
    </section>
  );
};

export default Index;



// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import HeadingTwo from "../ui/HeadingTwo";
// import { parseHTMLString } from "../../lib/parseHTML";

// /* ================= DATA ================= */
// const defaultTestimonials = [
//   {
//     text: "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations.",
//     name: "Jessica Moore",
//     title: "Texas, USA",
//   },
//   {
//     text: "Outstanding work on our mobile application. The team was professional and responsive.",
//     name: "Michael Chen",
//     title: "California, USA",
//   },
//   {
//     text: "The custom software solution transformed our business operations.",
//     name: "Sarah Johnson",
//     title: "New York, USA",
//   },
//   {
//     text: "Impressive turnaround time and exceptional quality.",
//     name: "David Williams",
//     title: "Florida, USA",
//   },
// ];

// /* ================= COMPONENT ================= */
// const ClientTestimonials = ({
//   testimonials = defaultTestimonials,
//   heading = "We appreciate feedback from our customers",
// }) => {
//   const [current, setCurrent] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(2);

//   /* ================= REFS ================= */
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   const isDragging = useRef(false);
//   const isInteracting = useRef(false);

//   const startX = useRef(0);
//   const prevTranslate = useRef(0);
//   const currentTranslate = useRef(0);

//   const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

//   /* ================= RESPONSIVE ================= */
//   useEffect(() => {
//     const updateSlides = () => {
//       setSlidesToShow(window.innerWidth < 1024 ? 1 : 2);
//     };
//     updateSlides();
//     window.addEventListener("resize", updateSlides);
//     return () => window.removeEventListener("resize", updateSlides);
//   }, []);

//   /* ================= SYNC POSITION ================= */
//   useEffect(() => {
//     if (!containerRef.current || !sliderRef.current) return;

//     const slideWidth = containerRef.current.offsetWidth / slidesToShow;
//     prevTranslate.current = -current * slideWidth;
//     currentTranslate.current = prevTranslate.current;

//     sliderRef.current.style.transition = "transform 0.4s ease";
//     sliderRef.current.style.transform = `translate3d(${prevTranslate.current}px,0,0)`;
//   }, [current, slidesToShow]);

//   /* ================= AUTO SLIDE ================= */
//   const startAutoSlide = () => {
//     if (autoSlideRef.current) return;

//     autoSlideRef.current = setInterval(() => {
//       if (isInteracting.current) return;
//       setCurrent((prev) =>
//         prev < testimonials.length - 1 ? prev + 1 : 0
//       );
//     }, 3500);
//   };

//   const stopAutoSlide = () => {
//     if (autoSlideRef.current) {
//       clearInterval(autoSlideRef.current);
//       autoSlideRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, []);

//   /* ================= SNAP LOGIC ================= */
//   const snapSlide = () => {
//     if (!containerRef.current || !sliderRef.current) return;

//     const slideWidth = containerRef.current.offsetWidth / slidesToShow;
//     const movedBy = currentTranslate.current - prevTranslate.current;
//     const threshold = slideWidth * 0.25;

//     if (movedBy < -threshold && current < testimonials.length - 1) {
//       setCurrent((p) => p + 1);
//     } else if (movedBy > threshold && current > 0) {
//       setCurrent((p) => p - 1);
//     } else {
//       sliderRef.current.style.transition = "transform 0.4s ease";
//       sliderRef.current.style.transform = `translate3d(${prevTranslate.current}px,0,0)`;
//     }
//   };

//   /* ================= DESKTOP DRAG ================= */
//   const onMouseDown = (e: React.MouseEvent) => {
//     isDragging.current = true;
//     isInteracting.current = true;
//     stopAutoSlide();

//     startX.current = e.clientX;
//     sliderRef.current!.style.transition = "none";
//   };

//   const onMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging.current) return;
//     const diff = e.clientX - startX.current;
//     currentTranslate.current = prevTranslate.current + diff;
//     sliderRef.current!.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
//   };

//   const onMouseUp = () => {
//     if (!isDragging.current) return;
//     isDragging.current = false;
//     snapSlide();
//     isInteracting.current = false;
//     startAutoSlide();
//   };

//   const onMouseLeave = () => {
//     if (isDragging.current) onMouseUp();
//   };

//   /* ================= TOUCH DRAG ================= */
//   const onTouchStart = (e: React.TouchEvent) => {
//     isInteracting.current = true;
//     stopAutoSlide();

//     startX.current = e.touches[0].clientX;
//     sliderRef.current!.style.transition = "none";
//   };

//   const onTouchMove = (e: React.TouchEvent) => {
//     const diff = e.touches[0].clientX - startX.current;
//     currentTranslate.current = prevTranslate.current + diff;
//     sliderRef.current!.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
//   };

//   const onTouchEnd = () => {
//     snapSlide();
//     isInteracting.current = false;
//     startAutoSlide();
//   };

//   /* ================= RENDER ================= */
//   return (
//     <section className="py-10 lg:py-16 bg-white">
//       <div className="mx-auto w-11/12 xl:w-5/6">
//         <div className="text-center">
//           <HeadingTwo color={"black"} text="Client Testimonial" />
//         </div>


//         <div
//           ref={containerRef}
//           className="overflow-hidden mt-8 cursor-grab active:cursor-grabbing select-none"
//           onMouseEnter={stopAutoSlide}
//           onMouseLeave={startAutoSlide}
//           onMouseDown={onMouseDown}
//           onMouseMove={onMouseMove}
//           onMouseUp={onMouseUp}
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//         >
//           <div ref={sliderRef} className="flex will-change-transform">
//             {testimonials.map((item, i) => (
//               <div
//                 key={i}
//                 className="px-3 flex-shrink-0"
//                 style={{ width: `${100 / slidesToShow}%` }}
//               >
//                 <div className="h-full p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                   <p className="text-gray-700 mb-4">{item.text}</p>
//                   <p className="font-semibold text-gray-900">{parseHTMLString(item.name)}</p>
//                   <p className="text-blue-600 text-sm" >{item.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DOTS */}
//         <div className="flex justify-center gap-3 mt-6">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Go to slide ${i + 1}`}
//               onClick={() => setCurrent(i)}
//               className="w-4 h-4 flex items-center justify-center"
//             >
//               <span
//                 className={`block rounded-full transition-all ${current === i
//                   ? "w-4 h-4 bg-purple-600"
//                   : "w-4 h-4 bg-gray-300"
//                   }`}
//               />
//             </button>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ClientTestimonials;
