import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { Button } from "../ui/Button";

const WhyChoose = ({ pageData }: any) => {
    const { title, description, mainCardData, gridData } = pageData
    return (
        <section
            className="bg-cover bg-no-repeat mt-8 lg:py-16 py-10 w-full bg-gradient-to-br from-[#FEEBC8]/30 via-[#C4B5FD]/20 to-[#A5B4FC]/20"

        >
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
                <div className="lg:flex space-y-3 items-center justify-between gap-10">
                    <div>
                        <HeadingTwo color={"black"} text={title} />

                        {description && (
                            <ParagraphText color={"black"} text={description} />

                        )}
                    </div>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=919587867258">

                        <Button variant="secondary" radius="full" className="w-[225px] py-2 text-white rounded-full">Connect to expert →</Button>
                        
                        </a>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 mt-10">
                    <div className="lg:flex hidden justify-end items-end px-6 py-8 rounded-lg relative overflow-hidden">

                        {/* Optimized Image instead of CSS background */}
                        <Image
                            src={mainCardData?.imageUrl}
                            alt={mainCardData?.title || "Why Choose Us"}
                            fill
                            className="object-cover object-left"
                            sizes="(min-width: 1024px) 25vw"
                            loading="lazy"
                            fetchPriority="low"
                        />

                        {/* Content Layer */}
                        <div className="relative z-10">


                            <span className="xl:text-xl text-xl text-white font-semibold">
                                {mainCardData.title}
                            </span>



                            {mainCardData.description && (

                                <ParagraphText color={"white"} text={mainCardData.description} />

                            )}

                            <div className="mt-4">
                                <a href="/contact-us">
                                    <button className="text-base border border-white font-medium text-white rounded-full px-8 py-2.5 hover:bg-white hover:text-black">
                                        Get in Touch
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-span-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                            {gridData.slice(0, 6).map((item: any, index: any) => (
                                <div key={index} className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        {item.description && (

                                            <ParagraphText color={"black"} text={item.description} />

                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WhyChoose;





