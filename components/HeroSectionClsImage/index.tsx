import Image from "next/image";
import HeroTextAnimation from "./HeroTextAnimation";

export default function HeroSection({ Data }: any) {
  return (
    <section className="relative flex max-w-[1600px] h-[520px] sm:h-[620px] lg:h-[720px] mx-auto items-center justify-center text-center bg-[#00153c] overflow-hidden">
      
      {/* ✅ LCP Image */}
<div className="absolute inset-0"> <img src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/mobile-app-development-company.webp" alt="banner" className="w-full h-full object-cover opacity-40" /> </div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-4xl px-4">
        
        {/* ✅ STATIC TEXT (LCP FAST) */}
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          Your Digital Partner for{" "}
          <span className="text-blue-400">
            Application Development
          </span>
        </h1>

        {/* ✅ Animation AFTER load */}
        <div className="h-[40px] mt-2">
          <HeroTextAnimation />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/contact-us"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Schedule a Call →
          </a>

          <a
            href="/case-studies"
            className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
          >
            Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}













// import Image from "next/image";

// export default function HeroSection({ Data }: any) {
//   return (
//     <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] bg-[#1a1a4f]">
      
//       {/* ✅ LCP Image (fast paint) */}
//       <Image
//         src={Data?.bgImage}
//         alt={Data?.imageAlt || "hero"}
//         fill
//         priority
//         sizes="100vw"
//         quality={60}
//         className="object-cover"
//       />

//       {/* ✅ Lightweight overlay (optimized) */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* ✅ Content (no dynamic / no blocking) */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-4 h-full flex items-center">
//         <div className="max-w-[600px] space-y-5">

//           {/* ✅ Fixed height prevents CLS */}
//           <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight min-h-[60px]">
//             {Data?.heading}
//           </h1>

//           {/* ✅ Fixed height prevents CLS */}
//           <p className="text-white leading-relaxed min-h-[60px]">
//             {Data?.ptag}
//           </p>

//         </div>
//       </div>
//     </section>
//   );
// }














// // import Image from "next/image";
// // import dynamic from "next/dynamic";
// // import StatsBanner from "./StatsBanner";

// // const HeroClient = dynamic(() => import("./HeroClient"), {
// //   ssr: true,
// //     loading: () => <div className="h-[50px]" />, // reserve space
// // });

// // export default function HeroSection({ Data }: any) {
// //   return (
// //     <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#1a1a4f]">

// //       {/* LCP Image */}
// //       <Image
// //         src={Data.bgImage}
// //         alt={Data.imageAlt || "hero"}
// //         fill
// //         priority
// //         sizes="100vw"
// //         className="object-cover"
// //       />

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/80 to-transparent" />

// //       {/* Content */}
// //       <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-16 flex items-center h-full">
// //         <div className="max-w-[600px] space-y-5">
          
// //           <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
// //             {Data?.heading}
// //           </h1>

// //           <p className="text-white min-h-[60px] leading-relaxed">
// //             {Data?.ptag}
// //           </p>

// //           <div className="h-[50px] flex items-center">
// //             <HeroClient />
// //           </div>

// //           <div className="mt-6 h-[80px]">
// //             <StatsBanner />
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }












// // // import Image from "next/image";
// // // import dynamic from "next/dynamic";
// // // import StatsBanner from "./StatsBanner";

// // // const HeroClient = dynamic(() => import("./HeroClient"), { ssr: true });

// // // export default function HeroSection({ Data }: any) {
// // //   return (
// // //     <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#1a1a4f]">
      
// // //       {/* Hero Background */}

// // //         <Image
// // //           src={Data.bgImage}
// // //           alt={Data.imageAlt}
// // //           fill
// // //           fetchPriority="high"
// // //            priority
// // //           quality={60}
// // //           className="object-cover "
// // //         />


// // //       {/* Optional Overlay */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/90 to-transparent" />

// // //       {/* Content */}
// // //       <div className="relative z-10 max-w-[1200px] xl:px-0 px-4 mx-auto h-full flex items-center">
// // //         <div className="max-w-[600px] space-y-4 min-h-[60px]">
// // //           <h1 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight">
// // //             {Data?.heading}
// // //           </h1>

// // //           <p className="text-white text-sm sm:text-base ">
// // //             {Data?.ptag}
// // //           </p>

// // //           {/* Hero CTA */}
// // //           <div className="min-h-[50px]">
// // //             <HeroClient />
// // //           </div>

// // //           {/* Stats Banner */}
// // //           <StatsBanner />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
