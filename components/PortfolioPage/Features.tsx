import React from "react";
import Image from "next/image";

interface FeaturesProps {
    heading?: string;
    points?: any[];
    imageSrc?: string;
    imagePosition?: "right" | "left";
}

const Features = ({Data}:any) => {

    return (
        <section className="bg-white lg:py-16 py-10">
            <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">

                {Data?.imagePosition === "right" ? (
                    <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
                        <div>
                            <div className="space-y-4">
                                <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                                    {Data?.heading}
                                </h2>
                                <div className="space-y-4 ">
                                    <ul className="space-y-2">
                                        {Data?.points.map((point: any, index: number) => (
                                            <li
                                                key={index}
                                                className="text-[#212121] md:text-base text-sm"
                                                dangerouslySetInnerHTML={{ __html: point }}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full">
                            <Image
                                src={Data?.imageSrc}
                                alt="About Us"
                                width={800}
                                height={650}
                                sizes="(max-width: 1024px) 0px, 50vw"
                                className="rounded-2xl w-full h-auto"
                                quality={70}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
                        <div className="relative w-full">
                            <Image
                                src={Data?.imageSrc}
                                alt="About Us"
                                width={800}
                                height={650}
                                sizes="(max-width: 1024px) 0px, 50vw"
                                className="rounded-2xl w-full h-auto"
                                quality={70}
                            />
                        </div>

                        <div>
                            <div className="space-y-4">
                                <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                                    {Data?.heading}
                                </h2>
                                <div className="space-y-4 ">
                                    <ul className="space-y-2">
                                        {Data?.points.map((point: any, index: number) => (
                                            <li
                                                key={index}
                                                className="text-[#212121] md:text-base text-sm"
                                                dangerouslySetInnerHTML={{ __html: point }}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </section>
    );
};

export default Features;
