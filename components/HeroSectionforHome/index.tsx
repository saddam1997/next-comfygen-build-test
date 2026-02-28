
import Image from "next/image";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import HeroClientCTA from "./HeroClientCTA";

export default function HeroSection({ herosection }: any) {



    const imageAlt = herosection?.altTag || herosection?.heading || "Hero background image";




    /* ================= LOADER ================= */


    return (
        <section className="relative flex  min-h-[600px] lg:min-h-[700px] items-center overflow-hidden bg-[#5951cd] pt-8 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24"

        >

            {/* ================= LCP IMAGE ================= */}

            <div className="hidden lg:block absolute inset-0 ">
                <Image
                    src={herosection.bgImage}
                    alt={imageAlt}
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 0px"
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
                        <h1 className="text-white text-2xl lg:text-3xl xl:text-5xl font-bold xl:leading-[4rem] ">
                            <b className="block ">AI-Based Mobile App & Web </b>
                            <span className="block text-xl xl:text-4xl font-medium">
                                Development Company
                            </span>
                        </h1>
                    ) : (
                        <>
                            <Heading as={1} className="text-white ">
                                {herosection.heading}
                            </Heading>




                        </>
                    )}


                    {herosection?.subhead && (
                        <Paragraph size="sm" className="text-white">
                            <span className="font-semibold"> {herosection.subhead}</span>
                        </Paragraph>
                    )}


                    {/* ================= DESCRIPTION ================= */}

                    <Paragraph size="sm" className="text-white">
                        {herosection.ptag}
                    </Paragraph>


                    {herosection.ptag1 && (
                        <Paragraph size="sm" className="text-white">
                            {herosection.ptag1}
                        </Paragraph>
                    )}


                    {herosection.ptag3 && (
                        <Paragraph size="sm" className="text-white">
                            {herosection.ptag3}
                        </Paragraph>
                    )}

                    {herosection?.listItems.length > 0 && (
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
