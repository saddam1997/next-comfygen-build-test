"use client";

import React, { useEffect, useState } from "react";

/* ================= DATA ================= */
const defaultTestimonials = [
  {
    text: "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations.",
    name: "Jessica Moore",
    title: "Texas, USA",
  },
  {
    text: "Outstanding work on our mobile application. The team was professional and responsive.",
    name: "Michael Chen",
    title: "California, USA",
  },
  {
    text: "The custom software solution transformed our business operations.",
    name: "Sarah Johnson",
    title: "New York, USA",
  },
  {
    text: "Impressive turnaround time and exceptional quality.",
    name: "David Williams",
    title: "Florida, USA",
  },
  {
    text: "Great communication and timely delivery.",
    name: "Emma Brown",
    title: "London, UK",
  },
  {
    text: "Highly skilled and professional team.",
    name: "Daniel Lee",
    title: "Singapore",
  },
  {
    text: "Very reliable and professional service.",
    name: "Olivia Smith",
    title: "Sydney, Australia",
  },
  {
    text: "Exceeded expectations with quality delivery.",
    name: "James Wilson",
    title: "Toronto, Canada",
  },
];

/* ================= COMPONENT ================= */
const ClientTestimonials = ({
  testimonials = defaultTestimonials,
  heading = "We appreciate feedback from our customers",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const checkView = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkView();
    window.addEventListener("resize", checkView);
    return () => window.removeEventListener("resize", checkView);
  }, []);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, INITIAL_COUNT);

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto w-11/12 xl:w-5/6">
        <h2 className="text-3xl xl:text-4xl font-bold text-center text-gray-900">
          {heading}
        </h2>

        {/* ================= GRID ================= */}
        <div
          className={`mt-10 grid gap-6 ${
            isMobile
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleTestimonials.map((item, i) => (
            <div
              key={i}
              className="h-full cursor-pointer p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 mb-4">{item.text}</p>
              <p
                className="font-semibold text-gray-900"
                dangerouslySetInnerHTML={{ __html: item.name }}
              />
              <p className="text-blue-600 text-sm">{item.title}</p>
            </div>
          ))}
        </div>

        {/* ================= SEE MORE BUTTON ================= */}
        {testimonials.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-white font-medium hover:bg-purple-700 transition"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientTestimonials;
