"use client";

import Image from "next/image";
import Link from "next/link";

const Calltoaction = () => {
  return (
    <section className="relative h-[400.77px] w-full overflow-hidden bg-[#120F66]">
      
      {/* Background Image */}
      <Image
        src="/call-to-action.png"
        alt="Call to Action Background"
        fill
        priority
        className="h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#120F66]/10 opacity-5 z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-[400.77px] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-xl md:text-[45px] lg:text-[45px] font-semibold font-poppins text-white leading-tight">
          Let’s Build the{" "}
          <span className="text-[#ff4d4f]">Future of Technology Together</span>{" "}
        
        </h2>

        <p className="mt-6 w-[1520px] mx-auto text-base md:text-[24px] font-normal text-gray-200 leading-relaxed">
          At Comfygen, we use creativity and teamwork to shape the direction of
          technology. Our innovative solutions help organizations stay ahead
          of the times in a world that is changing quickly. Together, let's
          develop the technologies of the future.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="#get-started"
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
