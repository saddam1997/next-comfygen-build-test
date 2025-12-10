"use client";
import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Aboutsection({
    heading = "",
    description1 = "",
    description2 = "",
    description3 = "",
    description4 = "",
    description5 = "",
    points = [],
    imageSrc = "",
    link = "",
    linkText = "",
}) {
    return (
        <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-4">
            <div className="container mx-auto h-full">
                <div className="grid lg:grid-cols-2 md:gap-4 gap-16 items-center container mx-auto h-full">

                    {/* ================= LEFT SIDE (Image) ================= */}
                    <div
                      
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl md:h-full lg:max-h-[820px] max-w-[650px]">
                            <Image
                                height={640}
                                width={340}
                                src="/Frame 253.png"
                                alt="Developer working on applications"
                                className="w-full h-full"
                            />
                        </div>

                        {/* Stats Badge */}
                        <div
                           
                            className="absolute -bottom-6 right-0 lg:-right-0 xl:right-10 bg-[#774099] text-white rounded-2xl p-[30px] shadow-2xl max-w-[320px] lg:max-h-[180px]"
                        >
                            <div className="text-[62px] font-poppins font-medium leading-[50px]">150+</div>
                            <div className="text-xl mt-2 font-medium">Project Delivered</div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE (Content) ================= */}
                    <div
                       
                        className="space-y-4 max-w-[1040px] h-full lg:max-h-[767px]"
                    >
                        <div className="inline-block">
                            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase gap-2 flex">
                                <span className="text-[20px] font-poppins font-medium">About Our Company</span>
                                <span className="w-12 h-1 bg-orange-500 mt-1.5"></span>
                            </span>
                        </div>

                        <h2 className="text-sm lg:text-lg xl:text-[45px] font-poppins font-semibold text-[#000] lg:leading-tight">
                            {heading}
                        </h2>

                        <p
                            className="text-[#444] text-sm lg:text-sm xl:text-[20px] lg:leading-relaxed font-normal font-poppins"
                            dangerouslySetInnerHTML={{ __html: description1 }}
                        />

                        {description2 && (
                            <p
                                className="text-[#444444] text-sm lg:text-sm xl:text-[20px] lg:leading-relaxed font-normal font-poppins"
                                dangerouslySetInnerHTML={{ __html: description2 }}
                            />
                        )}

                        {description3 && (
                            <p
                                className="text-[#444444] text-sm lg:text-sm xl:text-[20px] lg:leading-relaxed font-normal font-poppins"
                                dangerouslySetInnerHTML={{ __html: description3 }}
                            />
                        )}

                        {description4 && (
                            <p
                                className="text-[#444444] text-sm lg:text-sm xl:text-[20px] lg:leading-relaxed font-normal font-poppins"
                                dangerouslySetInnerHTML={{ __html: description4 }}
                            />
                        )}

                        {description5 && (
                            <p
                                className="text-[#444444] text-sm lg:text-sm xl:text-[20px] lg:leading-relaxed font-normal font-poppins"
                                dangerouslySetInnerHTML={{ __html: description5 }}
                            />
                        )}

                        {/* Features List */}
                        <div className="space-y-2 pt-2 ">
                            {points.map((feature, index) => (
                                <div
                                   
                                    className="flex items-start gap-3"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <span className="text-[#444] text-sm lg:text-sm xl:text-[20px] lg:leading-relaxed font-normal font-poppins">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        {link && linkText && (
                            <Link href={link} className="pt-6">
                                <button

                                    className="group mt-4 bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                                >
                                    {linkText}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
