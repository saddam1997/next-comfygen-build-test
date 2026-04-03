import Image from "next/image";
import HeadingOne from "../ui/HeadingOne";
import ParagraphText from "../ui/ParagraphText";


import dynamic from "next/dynamic";
const StatsBanner = dynamic(() => import("./StatsBanner"), {
  ssr: false,
});
const HeroClientCTA = dynamic(() => import("./HeroClientCTA"), {
  ssr: false,
});


export default function HeroSection({ herosection }: any) {
  const imageAlt =
    herosection?.altTag || herosection?.heading || "Hero background image";

  return (
    <section
      className="
      relative flex items-center overflow-hidden
      bg-[#5951cd]
      min-h-[640px] sm:min-h-[680px] lg:min-h-[740px] py-
      "
    >
      {/* Background Image */}
 
        <Image
          src={herosection.bgImage}
          alt={imageAlt}
          fill
          fetchPriority="high"
          sizes="(max-width:1024px) 100vw, 1320px"
          quality={75}
          className="object-cover object-center absolute inset-0 hidden lg:block"
        />


      {/* Gradient Overlay (improves text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5951cd]/90 to-transparent"></div>

      {/* Content */}
      <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-2 flex flex-col justify-center
        min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]"
      >
        <div className="w-full lg:max-w-[65%] xl:max-w-[58%] space-y-4 sm:space-y-5 lg:space-y-6">

          {/* Heading */}
          {herosection.isHome ? (
            <h1 className="text-white text-3xl sm:text-[36px] lg:text-[36px] xl:text-5xl font-bold xl:leading-[4rem]">
              <b className="block">AI-Based Mobile App & Web</b>
              <span className="block text-xl xl:text-4xl font-medium">
                Development Company
              </span>
            </h1>
          ) : (
            <HeadingOne color={"white"} text={herosection.heading} />
          )}

          {/* Subheading */}
          {herosection?.subhead && (
            <ParagraphText color={"white"} text={herosection.subhead} />
          )}

          {/* Description */}
          <ParagraphText color={"white"} text={herosection.ptag} />



          {herosection.ptag1 && (
            <ParagraphText color={"white"} text={herosection.ptag1} />
          )}
          {herosection.ptag2 && (
            <ParagraphText color={"white"} text={herosection.ptag2} />
          )}

          {herosection.ptag3 && (
            <ParagraphText color={"white"} text={herosection.ptag3} />
          )}
          {typeof window !== "undefined" && window.innerWidth >= 1024 && (
            <StatsBanner />
          )}
          {/* <div className="-ml-5">
           <StatsBanner/>
         </div> */}

          {/* List */}
          {herosection?.listItems?.length > 0 && (
            <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal">
              {herosection.listItems.map((item: any, index: any) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <HeroClientCTA />
        </div>
      </div>
    </section>
  );
}
