"use client";

import { useState } from "react";
import ServiceContent from "./ServiceContent";
import Image from "next/image";

export default function ServicesClient({ services }: any) {
    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-6">

            {/* 🔹 LEFT SIDEBAR (ALL DATA) */}
            <div className="w-full lg:w-[30%] max-h-[600px] overflow-y-auto space-y-3 pr-2">

                {services.map((service: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-full flex justify-between items-center px-4 py-3 rounded-xl border transition ${active === index
                            ? "bg-indigo-100 text-indigo-600 border-indigo-500"
                            : "bg-white border-gray-200"
                            }`}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: service.title }}
                        />


                        <span>{active === index ? "−" : "+"}</span>
                    </button>
                ))}

            </div>

            {/* 🔹 RIGHT CONTENT */}
            <div className="hidden lg:block w-[70%]">

                <div className="relative h-[34rem] bg-gradient-to-r from-[#272868] to-[#5556D1] rounded-xl overflow-hidden">

                    <Image
                        src="https://www.comfygen.com/image/services-after-img.svg"
                        alt="bg"
                        width={150}
                        height={90}
                        className="absolute bottom-0 right-0 w-36 h-36"
                    />

                    {/* ✅ ALL CONTENT SSR + CONTROLLED */}
                    {services.map((service: any, index: number) => (
                        <div
                            key={index}
                            className={`absolute inset-0 px-6 py-10 text-white transition-all duration-300 ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <ServiceContent service={service} />
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}