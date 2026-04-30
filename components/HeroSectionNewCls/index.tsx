import Image from "next/image";
import dynamic from "next/dynamic";
import StatsBanner from "./StatsBanner";

import HeroClient from "./HeroClient";

export default function HeroSection({ Data }: any) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a1a4f]  min-h-[700px] sm:min-h-[680px] lg:min-h-[720px]">

      <div className="absolute inset-0">
        <Image
          src={Data.bgImage}
          alt={Data.imageAlt || "hero"}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/80 to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-4 flex items-center min-h-[700px]">

        <div className="max-w-[600px] space-y-4 ">
          <h1 className="text-xl sm:text-xl lg:text-[36px] xl:text-[30px] font-bold text-white sm:leading-tight lg:leading-tight 
        xl:leading-tight">{Data.heading}</h1>

          <p className="text-sm lg:text-[16px]  font-normal leading-relaxed text-white">{Data?.ptag}</p>

          <div className="mt-6 min-h-[48px]">
            <HeroClient />
          </div>

          <div className="mt-6 min-h-[80px]">
            <StatsBanner />
          </div>

          {/* <div className="hidden lg:block mt-6 min-h-[80px]">
        <StatsBanner />
      </div> */}

        </div>

      </div>
    </section>
  );
}











