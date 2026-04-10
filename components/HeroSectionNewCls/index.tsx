import Image from "next/image";
import dynamic from "next/dynamic";
import StatsBanner from "./StatsBanner";

const HeroClient = dynamic(() => import("./HeroClient"), {
  ssr: true,
});

export default function HeroSection({ Data }: any) {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] overflow-hidden bg-[#1a1a4f]">

      {/* Background Image Layer (stable LCP layer) */}
      <div className="absolute inset-0">
        <Image
          src={Data.bgImage}
          alt={Data.imageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={60}
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/90 to-transparent" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-0 py-12 sm:py-16 lg:py-20 min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex items-center">

        <div className="max-w-[600px] space-y-5">

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
            {Data?.heading}
          </h1>

          {/* Paragraph (stable height prevents CLS) */}
          <p className="text-white text-sm sm:text-base leading-relaxed min-h-[60px]">
            {Data?.ptag}
          </p>

          {/* CTA (reserved space avoids shift when hydrated) */}
          <div className="min-h-[50px] flex items-center">
            <HeroClient />
          </div>

          {/* Stats (desktop only but layout-safe) */}
          <div className="mt-6">
            <StatsBanner />
          </div>

        </div>
      </div>
    </section>
  );
}














// import Image from "next/image";
// import dynamic from "next/dynamic";
// import StatsBanner from "./StatsBanner";

// const HeroClient = dynamic(() => import("./HeroClient"), { ssr: true });

// export default function HeroSection({ Data }: any) {
//   return (
//     <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#1a1a4f]">
      
//       {/* Hero Background */}

//         <Image
//           src={Data.bgImage}
//           alt={Data.imageAlt}
//           fill
//           fetchPriority="high"
//            priority
//           quality={60}
//           className="object-cover "
//         />


//       {/* Optional Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/90 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 max-w-[1200px] xl:px-0 px-4 mx-auto h-full flex items-center">
//         <div className="max-w-[600px] space-y-4 min-h-[60px]">
//           <h1 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight">
//             {Data?.heading}
//           </h1>

//           <p className="text-white text-sm sm:text-base ">
//             {Data?.ptag}
//           </p>

//           {/* Hero CTA */}
//           <div className="min-h-[50px]">
//             <HeroClient />
//           </div>

//           {/* Stats Banner */}
//           <StatsBanner />
//         </div>
//       </div>
//     </section>
//   );
// }
