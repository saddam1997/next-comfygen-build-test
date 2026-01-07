"use client";

import Image from "next/image";
import Link from "next/link";

interface HireDeveloper {
    heading: string;
    description: string
    points: any
}

const HireDeveloper = ({ heading, description, points }: HireDeveloper) => {
    return (
        <section className="relative h-full md:h-[400.77px] w-full overflow-hidden bg-[#3E1966] p-4 px-4 md:p-0 md:px-0 ">

            {/* Background Image */}
            <Image
                src="/hire-developer.png"
                alt="Call to Action Background"
                fill
                priority
                className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#3E1966]/10 opacity-5 z-10" />

            {/* Content */}
            <div className="relative z-20 flex h-full md:h-[400.77px] flex-col items-center justify-center">
                <div className="flex justify-start container mx-auto">
                    <div>
                        <h2 className="text-sm md:text-[45px] lg:text-[45px] font-semibold font-poppins text-white leading-tight">
                            {heading}

                        </h2>

                        <p className="mt-2 w-full md:w-[1520px] mx-auto text-sm md:text-[20px] font-normal text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}>
                        </p>

                        <div className="mt-4 md:mt-10 w-full">
                            <div className="flex-cols md:flex justify-between items-center">
                                <div>

                                    {points && points.length > 0 && (
                                        <ul className="space-y-2">
                                            {points.map((point: any, index: any) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="min-w-[10px] min-h-[10px] w-[10px] h-[10px] border-2 border-white rounded-full mt-1.5"></div>
                                                    <span
                                                        className="xl:text-base text-sm text-white"
                                                        dangerouslySetInnerHTML={{ __html: point }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </div>
                                <Link
                                    href="#get-started"
                                    className="inline-flex items-center mt-2 md:mt-0 gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 md:px-8 md:py-4 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    Hire Developer <span className="text-xl">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireDeveloper;
