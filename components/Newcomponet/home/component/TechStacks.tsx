"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type StackItem = {
  img: string;
  name: string;
};

type Props = {
  heading: string;
  description: string;
  TABS?: string[];
  STACKS?: Record<string, StackItem[]>;
};

export default function TechStacks({
  heading,
  description,
  TABS = [],
  STACKS = {},
}: Props) {

  const [activeTab, setActiveTab] = useState<string>("");

  // ✅ set default tab AFTER render (client only)
  useEffect(() => {
    if (!activeTab && TABS.length > 0) {
      setActiveTab(TABS[0]);
    }
  }, [TABS, activeTab]);

  // 🔒 SSR SAFETY
  if (!TABS.length || !activeTab || !STACKS[activeTab]) {
    return null;
  }

  return (
    <section className="relative py-20 bg-[#040B2D]/90 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0A1A5E,transparent_60%)]" />

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E] bg-clip-text text-transparent">
          {heading}
        </h2>

        <p
          className="mt-4 max-w-3xl mx-auto text-gray-300"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${activeTab === tab
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  : "bg-[#0B1445] text-gray-300 hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 bg-[#0B1445] rounded-2xl p-6 md:p-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {STACKS[activeTab].map((item:any, index) => (
              <div
                key={index}
                className="bg-[#050C3A] cursor-pointer hover:border hover:border-red-400 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition"
              >


                {item.link ? (
                  <Link
                    href={item.link}
                    aria-label={`Go to ${item.name}`}
                  >
                    <div className="w-14 h-14 mb-4 relative">
                      <Image loading="lazy" src={item.img} alt={item.name} fill className="object-contain" />
                    </div>
                    <p className="text-white text-sm font-medium">{item.name}</p>
                  </Link>
                ) : (
                 <div
                  >
                    <div className="w-14 h-14 mb-4 relative">
                      <Image loading="lazy" src={item.img} alt={item.name} fill className="object-contain" />
                    </div>
                    <p className="text-white text-sm font-medium">{item.name}</p>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        <Link href="/contact-us" aria-label="Connect Experts" className="mt-10 inline-block">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium">
            Connect Experts →
          </button>
        </Link>
      </div>
    </section>
  );
}
