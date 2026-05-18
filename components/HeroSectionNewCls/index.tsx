import Image from "next/image";
import StatsBanner from "./StatsBanner";

import HeroClient from "./HeroClient";

export default function HeroSection({ Data }: any) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a1a4f] flex items-center  min-h-[700px] sm:min-h-[680px] lg:min-h-[720px]">
      <Image
        src={Data.bgImage}
        alt={Data.imageAlt || "hero"}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover absolute inset-0  hidden lg:block"
      />
      <div className="relative z-20 max-w-[600px] space-y-4 lg:ml-20 ml-0  px-4  h-full items-center ">
        <h1 className="text-xl sm:text-xl lg:text-[36px] xl:text-[30px] font-bold text-white sm:leading-tight lg:leading-tight 
        xl:leading-tight">{Data.heading}</h1>

        <p className="text-sm lg:text-[16px]  font-normal leading-relaxed text-white">{Data?.ptag}</p>
        <div className="mt-6 min-h-[48px]">
          <HeroClient />
        </div>
        <div className="mt-6 min-h-[80px]">
          <StatsBanner />
        </div>
      </div>
    </section>
  );
}











