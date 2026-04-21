"use client";
import { useState } from "react";
import Image from "next/image";

export default function TechStacksClient({ TabData, TechData, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-4 md:p-10 w-full max-w-5xl mx-auto shadow-2xl">

      {/* TABS */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {TabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-md text-sm border ${
              activeTab === tab
                ? "bg-white text-black"
                : "text-gray-300 border-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ FIXED HEIGHT CONTAINER (CLS FIX) */}
      <div className="min-h-[220px]">

        {/* ✅ RENDER ALL, HIDE VIA CSS */}
        {TabData.map((tab, i) => {
          const techs = TechData.TechItems[tab] || [];
          const isActive = activeTab === tab;

          return (
            <div
              key={i}
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="bg-[#111111] border border-gray-800 rounded-xl flex flex-col items-center justify-center py-3 px-1 gap-3"
                >
                  <Image src={tech.img} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                  <span className="text-gray-300 text-sm text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}