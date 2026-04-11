import Image from "next/image";
import dynamic from "next/dynamic";
import StatsBanner from "./StatsBanner";

const HeroClient = dynamic(() => import("./HeroClient"), {
  ssr: true,
});

export default function HeroSection({ Data }: any) {
  return (
    <section
      className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] overflow-hidden  bg-[#1a1a4f]"
      // style={{
      //   backgroundImage: `url(${Data.bgImage})`, // UX layer
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* LCP layer */}
      <Image
        src={Data.bgImage}
        alt={Data.imageAlt || "hero"}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-0 transition-opacity duration-700"
        onLoadingComplete={(img) => {
          img.style.opacity = "1";
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-16 flex items-center">
        <div className="max-w-[600px] space-y-5">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            {Data?.heading}
          </h1>

          <p className="text-white min-h-[60px]">
            {Data?.ptag}
          </p>

          <div className="min-h-[50px] flex items-center">
            <HeroClient />
          </div>

          <div className="mt-6 min-h-[80px]">
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
