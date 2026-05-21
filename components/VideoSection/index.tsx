"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function TaxiDemoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#f3f3f3] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Top Label */}
          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              ▶
            </div>

            <span className="text-sm font-semibold text-black">
              Watch It In Action
            </span>
          </div>

          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-bold leading-tight text-black md:text-3xl">
              Experience Grocery Delivery App Development
              <br />
              Solutions in Live Action?
            </h2>

            {/* Underline */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-[1px] w-14 bg-gray-300"></div>
              <div className="h-2 w-10 bg-yellow-500"></div>
              <div className="h-[1px] w-14 bg-gray-300"></div>
            </div>
          </div>

          {/* Main Image Card */}
          <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl bg-[#dfe4e1] p-4 md:p-8">
            {/* Background Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-video-tumb.webp" // replace with your image
                alt="Taxi App Demo"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
                priority
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Center Play Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-[#f4a623] bg-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              <Play className="ml-1 h-10 w-10 fill-white text-white" />
            </button>

            {/* Rotating Text Ring */}
            {/* <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-spin items-center justify-center rounded-full border-[18px] border-[#f4a623] border-t-transparent">
              <div className="absolute text-[11px] font-bold uppercase tracking-[4px] text-white">
                Watch Live Demo
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          {/* Modal Box */}
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black"
            >
              ✕
            </button>

            {/* YouTube Video */}
            <div className="relative aspect-video w-full">
              <iframe
                className="h-full w-full"
                 src="https://www.youtube.com/embed/WmYAXIF9Ttc?autoplay=1"
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}