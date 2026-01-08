"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";



/* DATA */
const defaultTestimonials = [
  {
    text: "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations. They're a reliable partner for any serious brand looking to scale digitally.",
    name: "Jessica Moore",
    title: "Texas, USA",
  },
  {
    text: "Comfygen delivered a top-notch UPI payment app with seamless integration and exceptional security. Their developers ensured every detail was handled professionally, making our app ready.",
    name: "Rajesh Kumar",
    title: "India",
  },
  {
    text: "We hired Comfygen to build a fleet management app, and they delivered beyond expectations. The UI was smooth, the backend was powerful, and the team was highly professional.",
    name: "Jessica Turner",
    title: "USA",
  },
];

export default function ClientTestimonials({
  testimonials = defaultTestimonials,
  heading
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* RESPONSIVE SLIDES */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((p) => (p + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const extended = [...testimonials, ...testimonials, ...testimonials];
  const startIndex = testimonials.length + currentIndex;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm text-red-500 font-medium tracking-wide">
          <span className="flex justify-center"> <Image src="/Vector.png" alt="vector" width={80} height={40} className="object-contain w-6 h-6"/></span>
            Client Testimonial
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            What Our Client Says
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm">
            Our business is one of close relationships and we are very fortunate
            to be able to share so many positive real estate experiences with our
            clients.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">
          {/* ARROWS */}
        

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(startIndex * 100) / slidesToShow}%)`,
              }}
            >
              {extended.map((item, index) => (
                <div
                  key={index}
                  className="px-4 p-2 flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  {/* CARD */}
                  <div className="h-full bg-white rounded-xl border border-gray-100 shadow-md p-6 hover:shadow-lg transition">
                 <Image loading="lazy" src="/Vector.png" alt="vector" width={80} height={40} className="object-contain w-6 h-6"/>

                    {/* STARS */}
                    <div className="flex gap-1 my-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-orange-400 text-sm">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-2">
                      <p className="font-semibold text-gray-900 text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-between items-center gap-2 mt-8">
              <button
            onClick={prev}
            className=" -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-[#E8563F] flex items-center justify-center text-[#E8563F] hover:bg-[#E8563F] hover:text-white transition"
          >
            <IoIosArrowRoundBack />
          </button>

          
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-8 bg-red-500"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
            </div>

            <button
            onClick={next}
            className=" -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-[#E8563F] flex items-center justify-center text-[#E8563F] hover:bg-red-500 hover:text-white transition"
          >
            <IoIosArrowRoundForward />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

