"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    title: "How much does it cost to build a mobile app?",
    desc: "The average mobile app development cost ranges between $5,000–$50,000 depending on complexity, features, platform, integrations, and design requirements.",
  },
  {
    title: "How much time does it take to build a mobile application?",
    desc: "A typical mobile app takes 3–9 months depending on scope, platform, UI/UX, and integrations.",
  },
  {
    title: "How does Comfygen ensure confidentiality?",
    desc: "We use NDAs, secure infrastructure, encrypted communication, and strict access control policies.",
  },
  {
    title: "Do you provide custom software development?",
    desc: "Yes, we deliver fully customized software solutions tailored to your business goals.",
  },
  {
    title: "Do you offer post-launch support?",
    desc: "Yes, we provide ongoing maintenance, updates, performance optimization, and security support.",
  },
];

export default function FaqWithImage({ faqData, title }: { faqData: any[], title: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0b1220]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT – FAQ */}
          <div className="">
            <div className="p-6 md:p-8">

              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
                {title}
              </h2>
              <div className="divide-y divide-white/10 bg-[#0f1a2b] overflow-hidden shadow-xl ">
                {faqData.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left py-4 focus:outline-none"
                    aria-expanded={open === i}
                  >
                    <div className={`flex justify-between items-center  px-4 ${open === i ? "bg-[#4963AB] w-full text-white px-2 py-2" : ""}`}>
                      <span className={`text-white text-sm md:text-base font-medium `}>
                        {item.title}
                      </span>
                      <span
                        className={`transition-transform text-white ${open === i ? "rotate-180" : ""
                          }`}
                      >
                        ▼
                      </span>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ${open === i
                        ? "grid-rows-[1fr] opacity-100  bg-white px-4 py-4"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden  text-xs">
                        {item.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className=" flex items-center justify-between  bg-gradient-to-r from-[#7B2FF7] via-[#D63384] to-[#7B2FF7] p-4 ">
                <span className="text-white font-medium text-sm md:text-base">
                  Still Have Questions?
                </span>
                <Link
                  href="/contact-us"
                  aria-label="Ask more questions"
                  className="bg-[#D63384] hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Ask More →
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT – IMAGE + CARDS */}
          <div className="relative">
            <Image
              src="https://www.comfygen.com/comfygen-images/home/Frame20.webp"
              alt="Team working on project"
              width={650}
              height={800}
              loading="lazy"
              className=" w-full h-auto"
              sizes="(max-width: 768px) 100vw, 650px"
              priority={false}
            />

          </div>

        </div>
      </div>
    </section>
  );
}
