"use client";

import Image from "next/image";
import Link from "next/link";
import ParagraphText from "../ui/ParagraphText";

export default function Card({ item }: any) {
  return (
    <div>
      {/* Outer Section */}
      <div className="bg-transparent rounded-[28px] p-4 sm:p-10 relative max-w-5xl mx-auto">

        {/* Google Badge */}
        <Link
          href={item.URL}
          target="_blank"
          className="absolute top-3 right-3 sm:top-10 sm:right-10 bg-white border-l border-b border-gray-800 px-2 py-1.5 sm:px-2 sm:py-2 flex items-center gap-1"
        >
          <Image
            src={item.image}
            alt={item.Source}
            width={100}
            height={120}
            className="object-contain h-4 sm:h-6 w-auto"
          />
          <div className="text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">
            {item.Source} Review
          </div>
        </Link>

        {/* Inner Card */}
        <div className="bg-white border border-gray-800 rounded-[22px] p-4 sm:p-6 pt-10 sm:pt-6">

          {/* Header */}
          <div className="mb-2">
            <h3 className="text-base sm:text-xl font-semibold text-gray-900">
              {item.name}
            </h3>
            <ParagraphText color="black" text={item.location} />
          </div>

          {/* Content */}
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
}