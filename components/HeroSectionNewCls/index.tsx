import Image from "next/image";
import dynamic from "next/dynamic";
import StatsBanner from "./StatsBanner";

const HeroClient = dynamic(() => import("./HeroClient"), {
  ssr: false,
  
});

export default function HeroSection({ Data }: any) {
  return (
<section className="relative w-full overflow-hidden bg-[#1a1a4f]">

  {/* ✅ Stable aspect ratio instead of fixed height */}
  <div className="relative w-full aspect-[4/7] sm:aspect-[16/10] lg:aspect-[16/7]">

    {/* LCP Image */}
    <Image
      src={Data.bgImage}
      alt={Data.imageAlt || "hero"}
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/80 to-transparent" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-[1200px] mx-auto px-4 w-full">
        
        <div className="max-w-[600px] space-y-2">

          {/* ✅ Reserve heading height */}
          <h1 className="text-white text-xl sm:text-2xl font-bold leading-tight min-h-[80px] sm:min-h-[70px]">
            {Data?.heading || " "}
          </h1>

          {/* ✅ FIXED text block height (important) */}
          <p className="text-white leading-relaxed h-[260px] sm:h-[100px] overflow-hidden">
            {Data?.ptag || " "}
          </p>

          {/* ✅ Stable CTA space */}
          <div style={{ height: 50 }} className="flex items-center py-8">
            <HeroClient />
          </div>

          {/* ✅ Prevent mobile CLS from hidden banner */}
          <div>
            <div className="h-[80px] lg:hidden" />
            <div className="hidden lg:block h-[80px]">
              <StatsBanner />
            </div>
          </div>

        </div>

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
