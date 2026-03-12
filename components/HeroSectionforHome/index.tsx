import Image from "next/image";
const HeroClientCTA = dynamic(() => import("./HeroClientCTA"), {
  ssr: false,
});
import HeadingOne from "../ui/HeadingOne";
import ParagraphText from "../ui/ParagraphText"
import dynamic from "next/dynamic";

export default function HeroSection({ herosection }: any) {
    const imageAlt = herosection?.altTag || herosection?.heading || "Hero background image";

    return (
        <section className="relative flex  min-h-[600px] lg:min-h-[700px] items-center overflow-hidden bg-[#5951cd] pt-8 lg:mt-16 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24"

        >

            {/* ================= LCP IMAGE ================= */}

            <div className="hidden lg:block absolute inset-0 ">
                <Image
                    src={herosection.bgImage}
                    alt={imageAlt}
                    fill
                    priority
                    fetchPriority="high"
                   sizes="100vw"
                    quality={60}
                    className="object-cover object-center"
                />
            </div>
            {/* mobile */}
            {/* ================= CONTENT ================= */}
            <div className=" relative   w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col   justify-center"
            >
                <div className="w-full max-w-full lg:max-w-[65%]  xl:max-w-[58%] space-y-4 sm:space-y-5 lg:space-y-2"
                >
                    {/* ================= HEADING ================= */}
                    {herosection.isHome ? (
                        <h1 className="text-white text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold xl:leading-[4rem] ">
                            <b className="block ">AI-Based Mobile App & Web </b>
                            <span className="block text-xl xl:text-4xl font-medium">
                                Development Company
                            </span>
                        </h1>
                    ) : (
               
                        <HeadingOne color={"white"} text={herosection.heading}/>
                        
                    )}


                    {herosection?.subhead && (

                        <ParagraphText color={"white"} text={herosection.subhead}/>
                    )}


                    {/* ================= DESCRIPTION ================= */}

                     <ParagraphText color={"white"} text={herosection.ptag}/>

                    {herosection.ptag1 && (
                        <ParagraphText color={"white"} text={herosection.ptag1}/>
                    )}

                    {herosection.ptag3 && (
                         <ParagraphText color={"white"} text={herosection.ptag3}/>
                    )}

                    {herosection?.listItems?.length > 0 && (
                        <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal">
                            {herosection?.listItems.map((item: any, index: any) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"
                                    />
                                    <span
                                        dangerouslySetInnerHTML={{ __html: item as string }}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}

                    <HeroClientCTA />
                </div>
            </div>

        </section>
    );
}
