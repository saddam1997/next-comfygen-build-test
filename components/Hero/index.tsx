// app/components/Hero.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#040B1F] text-white h-full">

      {/* ================= NAVBAR ================= */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 border-b border-white/10">

          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a className="relative text-yellow-400">
              Home
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-pink-500"></span>
            </a>
            <a className="hover:text-pink-500 transition">Services</a>
            <a className="hover:text-pink-500 transition">About</a>
            <a className="hover:text-pink-500 transition">Expertise</a>
            <a className="hover:text-pink-500 transition">Technology</a>
            <a className="hover:text-pink-500 transition">Projects</a>
          </nav>

          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-2 rounded-md text-sm font-semibold shadow-lg hover:scale-105 transition">
            Contact <ArrowRight size={16} />
          </button>

        </div>
      </header>

      {/* ================= BACKGROUND WAVES ================= */}
      <div className={`absolute left-[100px] top-[150px] opacity-60 ${styles.animate_waveDrift}`}>
        <Image src="/banner-bg.png" className="w-[1100px]" alt="" width={900} height={600} />
      </div>

      <div className="absolute left-0 bottom-0 w-[900px] h-[500px] bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 opacity-20 blur-3xl rounded-full"></div>

      {/* ================= HEXAGON PATTERN ================= */}
      <div className="absolute right-10 top-40 opacity-10 hidden lg:block">
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 border border-white rotate-45"
            ></div>
          ))}
        </div>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pt-44 pb-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className={`${styles.animate_fadeUp}`}>
            <p className="text-yellow-400 tracking-[0.4em] mb-6">
              IDEAS
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build With Tech
            </h1>

            <p className="mt-6 text-gray-300 max-w-lg leading-relaxed">
              We are a team of passionate individuals with years of experience
              in making products from concepts. We are a Hybrid Company offering
              Products and Services across various domains.
            </p>

            <button className="mt-8 bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-3 rounded-md font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition">
              Contact Us <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Floating Circle Image */}
            <div className={`relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden z-10  shadow-2xl`}>
              <Image
                src="/banner.jpg"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>

            {/* Rotating Yellow Badge */}
            <div className="absolute  bottom-0 left-0 translate-x-[-30%] translate-y-[40%] w-44 h-44">

              <svg viewBox="0 0 200 200" className={`w-full h-full  ${styles.animate_rotateSlow}`}>

                {/* Outer Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="#F4E34A"
                  className="border border-white"
                />

                {/* Inner Dotted Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="black"
                  strokeDasharray="3 6"
                  strokeWidth="1"
                />

                {/* Path for Text */}
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100
                       m -75, 0
                       a 75,75 0 1,1 150,0
                       a 75,75 0 1,1 -150,0"
                  />
                </defs>

                {/* Curved Text */}
                <text fontSize="12" fontWeight="600" fill="black" letterSpacing="4">
                  <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                    MOBILE • BLOCKCHAIN • AI • WEB •
                  </textPath>
                </text>

                {/* Center Logo */}
                <image
                  href="/logo.png"
                  x="75"
                  y="75"
                  width="50"
                  height="50"
                />

              </svg>

            </div>

          </div>

        </div>
      </div>

      {/* ================= IN LINK (SOCIAL ICON) ================= */}
      {/* <div className="absolute bottom-8 right-8 z-20">
        <a 
          href="#" 
          className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:bg-pink-600 transition"
        >
          in
        </a>
      </div> */}

    </section>
  );
}




