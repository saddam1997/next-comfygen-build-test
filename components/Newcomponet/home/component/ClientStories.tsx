"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";

export default function ClientStories() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isYoutube = (url: string) =>
    url.includes("youtube.com") || url.includes("youtu.be");

  const benefits = [
    "Dedicated and accountable development resources",
    "Cost-efficient development with flexible pricing models",
    "Fast team onboarding with no long-term contract lock-ins",
    "Easy team scaling based on project needs",
    "High client retention through consistent delivery",
    "Strict NDA and data security compliance",
    "Clear, reliable communication at every stage",
  ];

  const testimonials = [
    {
      videoUrl: "https://www.youtube.com/watch?v=kedGnt6T-DI",
      thumbnail:
        "https://www.comfygen.com/comfygen-images/thumbnail/bookmytuterappreviewthumbnail.webp",
      clientName: "Nitesh Rajput",
      company: "Book My Tuter",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=-AkHiORQTjA",
      thumbnail:
        "https://www.comfygen.com/comfygen-images/thumbnail/forgeflexrreviewthambnail.webp",
      clientName: "Sayead Shadab Arif",
      company: "Froge Flex",
    },
  ];

  const handlePlayVideo = () => {
    setOpenModal(true);
    setIsPlaying(false);
  };

  return (
    <section className="relative bg-[#F0F0FB] py-2 overflow-hidden">
      {/* ===== Optimized Background Image (replaces CSS bg) ===== */}
      <Image
        src="/Explore-Portfolio.png"
        alt=""
        fill
        loading="lazy"
        aria-hidden
        className="object-cover opacity-80 pointer-events-none"
      />

      <div className="relative z-10 lg:container w-full p-4 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* ===== LEFT CONTENT ===== */}
          <div className="space-y-4 mt-5">
            <p className="text-xl font-medium text-purple-600">
              <Image
                src="https://www.comfygen.com/comfygen-images/home/Vector.webp"
                alt="quote icon"
                width={30}
                height={30}
                loading="lazy"
                className="inline-block mr-2 mb-2"
              />
              What our clients say about Comfygen.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Stories from Our Happy Clients
            </h2>

            <ul className="space-y-3 hidden md:block">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 w-5 h-5 border border-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== RIGHT VIDEO SECTION ===== */}
          <div className="relative">
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-xl bg-black">
              
              {/* Thumbnail */}
              <div
                className="relative cursor-pointer"
                onClick={handlePlayVideo}
              >
                <Image
                  src={testimonials[currentTestimonial].thumbnail}
                  alt={`Client testimonial by ${testimonials[currentTestimonial].clientName}`}
                  width={800}
                  height={450}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain w-full h-[400px]"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute z-20 right-10 bottom-8 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label="testimonial switch"
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === currentTestimonial
                      ? "bg-red-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== VIDEO MODAL ===== */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
          <div className="bg-black rounded-2xl p-4 relative max-w-3xl w-full">
            <button
              aria-label="Close modal"
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${
                testimonials[currentTestimonial].videoUrl.split("v=")[1]
              }?autoplay=1`}
              className="w-full h-[400px] rounded-xl"
              allow="autoplay"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}
