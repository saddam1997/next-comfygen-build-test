"use client";

import Image from "next/image";
import Link from "next/link";
// import { Linkedin } from "lucide-react";

const TeamProfile = () => {
    return (
        <section className="w-full py-8 lg:p-0 p-2">
            <div className="mx-auto max-w-7xl rounded-[24px] border border-gray-200 bg-[#f8f8f8] p-4 md:p-3">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

                    {/* Image */}
                    <div className="relative mx-auto h-[290px] w-[220px] overflow-hidden rounded-[30px] sm:h-[320px] sm:w-[250px] lg:mx-0">
                        <Image
                            src="/ChatGPT Image May 25, 2026, 04_04_11 PM.png"
                            alt="Mr. Saddam Husen CTO"
                            fill
                            priority
                            className=" object-cover rounded-[30px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="lg:flex-1">
                        <h2 className="text-[28px] font-bold leading-tight text-black md:text-[25px]">
                            Mr. Abhishek Singh{" "} <br></br>
                            <span className="text-[#0B6CF4] text-sm">(Project Manager)</span>
                        </h2>

                        <p className="mt-5 text-[16px] leading-[1.9] text-[#333] md:text-[18px]">
                           Mr. Abhishek Singh, Project Manager at Comfygen, is an experienced IT
                            professional specializing in project planning, agile development, and team
                            coordination. With strong expertise in managing web, mobile, blockchain, and
                            on-demand app development projects
                        </p>

                        {/* Button */}
                        <div className="mt-8">
                            <Link
                                href="https://www.linkedin.com/"
                                target="_blank"
                                className="group inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#0B6CF4] bg-white px-6 py-2 text-[16px] font-semibold text-[#0B6CF4] transition-all duration-300 hover:bg-[#0B6CF4] hover:text-white"
                            >
                                <span>LinkedIn</span>

                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B6CF4] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#0B6CF4]">
                                    {/* <Linkedin size={18} /> */}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamProfile;