import Image from "next/image";
import dynamic from "next/dynamic";
import StatsBanner from "./StatsBanner";

const HeroClient = dynamic(() => import("./HeroClient"), { ssr: true });

export default function HeroSection({ Data }: any) {
  return (
    <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#1a1a4f]">
      
      {/* Hero Background */}
      <Image
        src={Data?.bgImage}
        alt="AI Development Company"
        fill
        priority
        sizes="100vw"
        className="object-cover"
fetchPriority="high"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] xl:px-0 px-4 mx-auto h-full flex items-center">
        <div className="max-w-[600px] space-y-4">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight">
            {Data?.heading}
          </h1>

          <p className="text-white text-sm sm:text-base min-h-[60px]">
            {Data?.ptag}
          </p>

          {/* Hero CTA */}
          <div className="min-h-[50px]">
            <HeroClient />
          </div>

          {/* Stats Banner */}
          <StatsBanner />
        </div>
      </div>
    </section>
  );
}

















// import Image from "next/image";
// import HeroClient from "./HeroClient";
// import StatsBanner from "./StatsBanner";

// export default function HeroSection({Data}:any) {
//   return (
   
//       <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px]  bg-[#1a1a4f] overflow-hidden">

//         {/*  Background Image (SSR + CLS SAFE) */}
//         <Image
//           src={Data?.bgImage}
//           alt="AI Development Company"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover"
//         />

//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/90 to-transparent" /> */}

//         {/*  Content (VISIBLE IN VIEW SOURCE) */}
//         <div className="relative z-10 max-w-[1200px] xl:px-0 px-4 mx-auto  h-full flex items-center">
//           <div className="max-w-[600px] space-y-4">

//             <h1 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight">
//               {Data?.heading}
//             </h1>

//             <p className="text-white text-sm sm:text-base min-h-[60px]">
//               {Data?.ptag}
//             </p>

//             {/*  CLIENT CTA (only this part hydrates) */}
//             <HeroClient />
//             <StatsBanner />
//           </div>
//         </div>
//       </section>
   
//   );
// }