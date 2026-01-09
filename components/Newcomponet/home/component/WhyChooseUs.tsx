"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="bg-gradient-to-br from-[#E2F3FF] to-[#FFFBEF] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="flex justify-start max-w-2xl">
          <div className="space-y-4">
            <h2 className="text-xl flex justify-start md:text-[45px] font-semibold text-gray-800">
              {heading}
            </h2>

            <p
              className="mt-3 text-start text-gray-600 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="mt-3 flex justify-start">
              <Link href="/contact-us" aria-label="Connect Experts" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-medium">
                Connect to Experts <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-purple-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-4">
                <div className="h-[84px] w-[84px] rounded-full">
                  <Image width={140} loading="lazy" height={70} src={item.icon} alt={item.title} className="h-[84px] w-[84px] object-contain " />
                </div>
                <div className="w-full">

                  <h3 className="text-sm text-gray-800 ">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc }}>
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14">
          <Link href="/contact-us" aria-label="Get in Touch" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-medium">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
