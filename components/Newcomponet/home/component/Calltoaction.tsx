"use client";

import Image from "next/image";
import Link from "next/link";

const Calltoaction = ({ heading, description, heading2 }: { heading?: string; description?: string; heading2?: string }) => {
  return (
    <section className="relative  w-full overflow-hidden bg-[#120F66]">

      {/* Background Image */}
      <Image
        src="/call-to-action.png"
        alt="Call to Action Background"
        fill
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#120F66]/10 opacity-5 z-10" />

      {/* Content */}
      <div className="relative z-20 flex min-h-[400.77px] max-h-[400.77px] h-[400.77px] flex-col items-center justify-center px-6 text-center overflow-hidden">
        <h2 className="text-sm lg:text-[45px] font-semibold font-poppins text-white leading-tight overflow-hidden">
          {heading}{" "}
          <span className="text-[#ff4d4f]">{heading2}</span>{" "}

        </h2>

        <p className="mt-6 w-full flex justify-center max-w-7xl mx-auto text-center lg:mx-auto text-sm lg:text-[16px] font-normal text-gray-200 leading-relaxed overflow-hidden" dangerouslySetInnerHTML={{ __html: description }}>

        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact-us"
            aria-label="Get Started"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Calltoaction;
