"use client";
import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { FeatureList } from "../ui/FeatureList";

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
                        className="relative h-full"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl md:h-full lg:max-h-[820px] max-w-[650px]">
                            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-[650px]">
                                <Image
                                    src={imageSrc}
                                    alt="Developer working on applications"
                                    width={650}
                                    height={860} // real image ratio
                                    className="w-full h-auto"
                                    sizes="(max-width: 768px) 100vw, 650px"
                                    loading="lazy"
                                />
                            </div>
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

                        <Heading text={heading} />

                        <Paragraph html={description1} />

                        {description2 && (
                            <Paragraph html={description2} />
                        )}

                        {description3 && (
                            <Paragraph html={description3} />

                        )}

                        {description4 && (
                            <Paragraph html={description4} />
                        )}

                        {description5 && (
                            <Paragraph html={description4} />
                        )}

                        {/* Features List */}
                        <div className="space-y-2 pt-2 ">
                            {points.map((feature, index) => (
                                <div
                                    key={index}

                                    className="flex items-start gap-3"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="w-5 h-5 text-orange-500" />
                                    </div>
                                   <FeatureList items={[feature]} />
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
