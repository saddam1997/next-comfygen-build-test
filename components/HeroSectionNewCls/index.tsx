import Image from "next/image";
import dynamic from "next/dynamic";
import StatsBanner from "./StatsBanner";
import HeadingOne from "../ui/HeadingOne";
import ParagraphText from "../ui/ParagraphText";

const HeroClient = dynamic(() => import("./HeroClient"), {
  ssr: true,
  
});

export default function HeroSection({ Data }: any) {
  return (
<section className="relative w-full overflow-hidden bg-[#1a1a4f] min-h-[700px]">

  <div className="absolute inset-0">
    <Image
      src={Data.bgImage}
      alt={Data.imageAlt || "hero"}
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/80 to-transparent" />

  <div className="relative max-w-[1200px] mx-auto px-4 flex items-center min-h-[700px]">

    <div className="max-w-[600px] space-y-4 ">
      <HeadingOne color={"white"} text={Data.heading} />
   
       <ParagraphText color={"white"} text= {Data?.ptag} />
   

      <div className="mt-6 min-h-[48px]">
        <HeroClient />
      </div>

      <div className="mt-6 min-h-[80px] lg:hidden">
        <StatsBanner />
      </div>

      <div className="hidden lg:block mt-6 min-h-[80px]">
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
