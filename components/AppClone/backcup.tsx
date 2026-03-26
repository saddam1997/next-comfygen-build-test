"use client";

import { useState } from "react";

const apps = [
  {
    name: "Uber Clone App",
    description:
      "With our Uber Clone app, you can become the top taxi service in your local area. It's also easy to expand the service in new regions as your business grows.",
    badge: "Most Popular",
  },
  {
    name: "Grab Clone App",
    description:
      "With a professionally developed Grab Clone, you can compete with the top companies by offering both delivery services and taxi booking under one single app.",
    badge: "Multi-Service",
  },
  {
    name: "Careem Clone App",
    description:
      "If you want to make an app for booking taxis on-demand, you've come to the right place to start your taxi booking app business with the help of Careem Clone.",
    badge: "On-Demand",
  },
  {
    name: "Ola Clone App",
    description:
      "Become a leader in the taxi booking industry with our unique app solution. Our Ola Clone app will allow you to effectively compete in the ride-hailing market.",
    badge: "Ride-Hailing",
  },
  {
    name: "Lyft Clone App",
    description:
      "Get the top Lyft Clone app to help your business succeed in the market. This app has advanced features and allows you to customize the branding for free.",
    badge: "Custom Branding",
  },
  {
    name: "DiDi Clone App",
    description:
      "Start your own app like DiDi Clone in just 1 to 2 weeks by using our app that allows you to customize the branding for free.",
    badge: "Quick Launch",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Card() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #000 0px,
            #000 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      /> 

      {/* Decorative orange accents */}
       <div className="absolute top-0 left-0 w-2 h-32 bg-gradient-to-b from-amber-500 to-orange-500" />
      <div className="absolute top-0 left-0 w-32 h-2 bg-gradient-to-r from-amber-500 to-orange-500" />
      <div className="absolute bottom-0 right-0 w-2 h-32 bg-gradient-to-t from-amber-500 to-orange-500" />
      <div className="absolute bottom-0 right-0 w-32 h-2 bg-gradient-to-l from-amber-500 to-orange-500" /> 

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-amber-500" />
            <span className="text-amber-600 uppercase tracking-[0.2em] text-xs font-bold font-mono">
              Ready-Made Solutions
            </span>
            <span className="h-px w-8 bg-amber-500" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <span className="text-amber-500">Best End-to-End</span>
            <br />
            <span className="text-gray-900">Taxi Booking App</span>
            <br />
            <span className="text-gray-900">Development Solution</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg leading-relaxed">
            Do you want to create a taxi booking app similar to Uber, Grab, or Careem to start a
            profitable business? Our pre-made app offers similar key features — saving you time and
            money designing from scratch.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white border rounded-sm overflow-hidden cursor-pointer transition-all duration-300 flex flex-col
                  ${isHovered
                    ? "border-amber-500 shadow-[0_8px_30px_rgba(245,158,11,0.2)] -translate-y-1"
                    : "border-gray-200 shadow-sm hover:shadow-md"
                  }`}
              >
                {/* Top color bar */}
                <div
                  className={`h-1 w-full transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"
                      : "bg-gray-100"
                  }`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge + Title Row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className={`text-base font-extrabold uppercase tracking-wide leading-snug transition-colors duration-200 ${
                        isHovered ? "text-amber-600" : "text-gray-900"
                      }`}
                    >
                      {app.name}
                    </h3>
                    <span
                      className={`flex-shrink-0 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full transition-all duration-200 ${
                        isHovered
                          ? "bg-amber-500 text-white"
                          : "bg-amber-50 text-amber-600 border border-amber-200"
                      }`}
                    >
                      <CheckIcon />
                      {app.badge}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px mb-4 transition-all duration-300 ${
                      isHovered ? "bg-amber-200" : "bg-gray-100"
                    }`}
                  />

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{app.description}</p>

                  {/* CTA */}
                  <div className="mt-6">
                    <button
                      className={`w-10 h-10 flex items-center justify-center rounded-sm font-bold transition-all duration-300 ${
                        isHovered
                          ? "bg-amber-500 text-white shadow-lg shadow-amber-200 scale-110"
                          : "bg-amber-400 text-white hover:bg-amber-500"
                      }`}
                      aria-label={`Learn more about ${app.name}`}
                    >
                      <ArrowIcon />
                    </button>
                  </div>
                </div>

                {/* Bottom accent strip on hover */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500 ${
                    isHovered ? "w-full" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
         <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all duration-200 shadow-lg shadow-amber-200 hover:shadow-amber-300 hover:-translate-y-0.5">
              Get a Free Demo
            </button>
            <button className="px-8 py-3.5 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all duration-200">
              View All Solutions
            </button>
          </div>
          <p className="mt-4 text-gray-400 text-xs tracking-wide">
            Launch your app in as little as{" "}
            <span className="text-amber-600 font-semibold">1–2 weeks</span>. No hidden fees.
          </p>
        </div> 
      </div>
    </section>
  );
}