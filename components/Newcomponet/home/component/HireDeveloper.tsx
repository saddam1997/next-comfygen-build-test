"use client";

import Image from "next/image";
import Link from "next/link";

interface HireDeveloperProps {
  heading: string;
  description: string;
  points: string[];
}

const HireDeveloper = ({ heading, description, points }: HireDeveloperProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#3E1966]">

      {/* Background Image */}
      <Image
        src="/hire-developer.png"
        alt="Hire Developer Background"
        fill
        className="object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3E1966]/60" />
   {/* // min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] */}
      {/* Content */}
      <div
        className="
          relative z-10
          flex items-center
       
          px-4 sm:px-6 lg:px-10
          py-10
        "
      >
        <div className="container mx-auto lg:px-12">

          {/* Heading */}
          <h2
            className="
              text-white font-semibold font-poppins
              text-lg md:text-[40px]
              leading-snug
            "
          >
            {heading}
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-5xl
              text-gray-200
              text-sm sm:text-base md:text-lg lg:text-xl
              leading-relaxed
            "
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* Points + CTA */}
          <div
            className="
              mt-6
              flex flex-col
              lg:flex-row
              lg:items-start
              lg:justify-between
              gap-6
            "
          >
            {/* Bullet Points */}
            {points?.length > 0 && (
              <ul className="space-y-3 max-w-3xl">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full border border-white shrink-0" />
                    <span
                      className="text-sm sm:text-base text-white leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: point }}
                    />
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <Link
              href="/contact-us" aria-label="Hire Developer"
              className="
                inline-flex items-center justify-center gap-2
                self-start lg:self-center
                rounded-lg
                bg-gradient-to-r from-orange-500 to-red-500
                px-6 py-3 sm:px-8 sm:py-4
                text-sm sm:text-base font-semibold
                text-white
                shadow-lg
                transition-transform duration-300
                hover:scale-105 hover:shadow-xl
              "
            >
              Hire Developer <span className="text-lg">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HireDeveloper;
