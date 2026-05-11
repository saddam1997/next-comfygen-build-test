import Link from "next/link";
import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from 'lucide-react';



import Image from 'next/image';
import { Button } from "../ui/Button";

const ItemDataSection = ({ consultancyData }) => {

    const [currentCount, setCurrentCount] = useState(0);
    if (!consultancyData?.title || !consultancyData?.proces) {
        return <div>Loading...</div>;
    }

    return (
        <section className="lg:py-16 py-10 bg-white">
            <div className="items-center space-y-10 lg:flex lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                <div className="lg:flex items-start lg:space-x-10 lg:space-y-0 space-y-6 w-full gap-10">

                    <div className="w-full lg:text-left">

                        <div className="w-full lg:text-left">
                            <div className="space-y-6">
                                <Image
                                    src={consultancyData?.image}
                                    alt={consultancyData?.title || "Comfygen project image"}
                                    width={754}
                                    height={210}
                                    quality={70}
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 754px"
                                    loading="lazy"
                                />

                                <div className="space-y-2 ">
                                    <h2 className="text-2xl font-bold text-[#212121] lg:text-3xl">
                                        {consultancyData?.title}
                                    </h2>
                                    <p className="text-base text-[#212121]" dangerouslySetInnerHTML={{ __html: consultancyData?.description }}></p>
                                    <p className="text-base text-[#212121]" dangerouslySetInnerHTML={{ __html: consultancyData?.description1 }}></p>
                                </div>
                                <div className="flex">

                                    <div className=" min-h-[50px]">
                                        {consultancyData.buttonLink && consultancyData.buttonText && (
                                            <Link
                                                href={consultancyData.buttonLink}
                                                className=" "
                                            >
                                                <Button variant="outline" className="mt-4 items-center text-[#5556D1]"> {consultancyData.buttonText}<span className="mb-4">→</span></Button>

                                            </Link>
                                        )}
                                    </div>
                                    {/* <Link href={consultancyData?.buttonLink || "#"} passHref>
                                        <Button variant="outline" className="mt-4 items-center text-[#5556D1]">  {consultancyData?.buttonText}<span className="mb-4">→</span></Button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full space-y-4">
                        {consultancyData?.proces?.map((elem: any, index: any) => (
                            <div
                                key={index}
                                className={`p-4 mt-2 border border-[#5556D1]/60 rounded-lg cursor-pointer w-full ${currentCount === index ? "bg-[#5556D1]/10" : "bg-[#fff]"
                                    }`}
                                onClick={() => setCurrentCount(currentCount === index ? null : index)}
                            >
                                <div className="flex justify-between w-full text-base font-medium text-left text-black rounded-lg md:text-lg">
                                    <h3 className="font-semibold lg:text-lg text-base text-[#000000]">
                                        {elem.title}
                                    </h3>
                                    {currentCount === index ? (
                                        <Minus size={26} />
                                    ) : (
                                        <Plus size={26} />
                                    )}
                                </div>
                                <div
                                    className={`pt-4 text-medium text-black ${currentCount === index ? "" : "hidden"
                                        }`}
                                    dangerouslySetInnerHTML={{ __html: elem.desc }}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ItemDataSection;
