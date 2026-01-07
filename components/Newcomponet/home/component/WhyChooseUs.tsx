"use client";

import { ArrowRight } from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

type WhyChooseProps = {
  heading: string;
  description: string;
  features?: Feature[];
};

export default function WhyChooseUs({
  heading,
  description,
  features = [], // ✅ default value
}: WhyChooseProps) {

  // 🔒 SSR + runtime safety
  if (!Array.isArray(features) || features.length === 0) {
    return null; // or skeleton loader
  }

  return (
    <section className="bg-[#eef8ff] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="flex justify-start max-w-2xl">
          <div>
            <h2 className="text-3xl md:text-2xl font-bold text-gray-800">
              {heading}
            </h2>

            <p
              className="mt-3 text-start text-gray-600 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="mt-3 flex justify-start">
              <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-medium">
                Connect to Experts <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-purple-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14">
          <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-medium">
            Get in Touch <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
