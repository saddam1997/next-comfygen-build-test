import Image from "next/image";
import HeadingOne from "../ui/HeadingOne";
import ParagraphText from "../ui/ParagraphText";
import dynamic from "next/dynamic";
import Ctacls from "./Ctacls"

/* Dynamic Components (space reserved properly) */
const StatsBanner = dynamic(() => import("./StatsBanner"), {
  ssr: false,
  loading: () => <div className="h-[80px] w-full" />,
});

const HeroClientCTA = dynamic(() => import("./HeroClientCTA"), {
  ssr: false,
  loading: () => <div className="h-[60px] w-[220px]" />,
});

export default function HeroSection({ herosection }: any) {
  const imageAlt =
    herosection?.altTag || herosection?.heading || "Hero background image";

  return (
    <section
      className="
      
      relative flex items-center overflow-hidden
      bg-[#5951cd]
      h-[640px] sm:h-[680px] lg:h-[740px]
      "
    >
      {/* Background Image (stable rendering) */}
      <Image
        src={herosection.bgImage}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover"
       
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5951cd]/90 to-transparent" />

      {/* Content Wrapper */}
      <div
        className="
        relative z-20 w-full max-w-[1320px]
        mx-auto px-4 sm:px-6 lg:px-2
        flex flex-col justify-center h-full
      "
      >
        <div className="w-full lg:max-w-[65%] xl:max-w-[58%] space-y-4 sm:space-y-5 lg:space-y-6">

          {/* Heading */}
          {herosection.isHome ? (
            <h1 className="text-white text-3xl sm:text-[36px] xl:text-5xl font-bold leading-tight tracking-normal">
              <span className="block">AI-Based Mobile App & Web</span>
              <span className="block text-xl xl:text-4xl font-medium">
                Development Company
              </span>
            </h1>
          ) : (
            <HeadingOne color="white" text={herosection.heading} />
          )}

          {/* Subheading */}
          {herosection?.subhead && (
            <div className="min-h-[40px]">
              <ParagraphText color="white" text={herosection.subhead} />
            </div>
          )}

          {/* Main Description (height reserved) */}
          <div className="min-h-[120px]">
            <ParagraphText color="white" text={herosection.ptag} />
          </div>

          {/* Optional paragraphs (reserved safely) */}
          {herosection.ptag1 && (
            <div className="min-h-[60px]">
              <ParagraphText color="white" text={herosection.ptag1} />
            </div>
          )}

          {herosection.ptag2 && (
            <div className="min-h-[60px]">
              <ParagraphText color="white" text={herosection.ptag2} />
            </div>
          )}

          {herosection.ptag3 && (
            <div className="min-h-[60px]">
              <ParagraphText color="white" text={herosection.ptag3} />
            </div>
          )}

          {/* CTA (fully stabilized) */}
          <div className="min-h-[60px] min-w-[220px]">
            <Ctacls />
          </div>

          {/* Stats Banner (only desktop, safe load) */}
          {typeof window !== "undefined" && (
            <div className="hidden lg:block min-h-[80px]">
              <StatsBanner />
            </div>
          )}

          {/* List (reserved height prevents jump) */}
          {herosection?.listItems?.length > 0 && (
            <div className="min-h-[100px]">
              <ul className="text-white grid gap-2 text-base font-normal">
                {herosection.listItems.map((item: any, index: any) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}