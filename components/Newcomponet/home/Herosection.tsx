"use client";

import Header from "./Header";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { TbX } from "react-icons/tb";

const ContactFrom = dynamic(() => import("../comman/ContactFrom"), {
  ssr: false,
});

export default function Herosection(props: any) {
  // const words = [
  //   "Blockchain Development",
  //   "AI Development",
  //   "Custom Web & Apps",
  // ];

  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [typedText, setTypedText] = useState("");
  // const [mounted, setMounted] = useState(false);

  /* Mount check for LCP-safe animation */
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // /* Typing animation AFTER first paint */
  // useEffect(() => {
  //   if (!mounted) return;

  //   const word = words[currentWordIndex];
  //   const timeout = setTimeout(() => {
  //     setTypedText(word.substring(0, typedText.length + 1));
  //   }, 100);

  //   if (typedText === word) {
  //     setTimeout(() => {
  //       setCurrentWordIndex((prev) => (prev + 1) % words.length);
  //       setTypedText("");
  //     }, 1000);
  //   }

  //   return () => clearTimeout(timeout);
  // }, [typedText, currentWordIndex, mounted]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ✅ Optimized Hero Background (LCP FIX) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Rectangle 331.png"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover  pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center min-h-screen py-32 w-10/12 2xl:w-10/12">
        <div className="xl:w-[58%] lg:w-[65%] w-full space-y-4">
          <h1 className="text-white xl:text-5xl sm:text-3xl text-3xl font-bold xl:leading-[4rem] sm:leading-[3rem]">
            <span className="xl:text-4xl md:text-2xl text-2xl font-medium block">
              {/* {mounted ? typedText : "Blockchain Development"} */}
              {'Blockchain Development'}
            </span>
            <span className="block font-bold">
              Solution & Service Provider
            </span>
          </h1>

          <p className="text-sm lg:text-base 2xl:text-lg text-white">
            {props.ptag}
          </p>

          <Link href="#" passHref>
            <button
              onClick={props.openModal}
              className="mt-4 bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E]
              text-white rounded-[20px] shadow-lg text-[18px] font-semibold
              h-[55px] px-8 flex items-center gap-4 transition-all"
            >
              Talk to an expert!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
              >
                <path
                  d="M0 6h22M22 6l-5-5M22 6l-5 5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* ✅ Lazy Loaded Modal */}
      {props.talkToExpertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-xl w-11/12 lg:w-8/12 relative">
            <button
              onClick={props.closeModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full"
            >
              <TbX className="w-6 h-6" />
            </button>
            <ContactFrom />
          </div>
        </div>
      )}
    </section>
  );
}
