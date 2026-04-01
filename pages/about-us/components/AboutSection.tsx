"use client";

import Image from "next/image";
import { useState } from "react";



export default function AboutSection() {


    return (
        <section className="py-16">
            <div className="mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl font-serif text-[#1e3a5f] mb-4">
                        About Comfygen Technologies –
                    </h2>

                    <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">
                        Your Partner for Project Success
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        Comfygen Technologies founded in 2019 with a vision to deliver reliable and scalable digital solutions, Comfygen Technologies provides comprehensive IT consulting, software development, Application Development and digital transformation services. Our clients trust us for transparent collaboration, timely project delivery, cost-effective solutions, and consistently high-quality results that drive business growth.

                    </p>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow">

                    <Image
                        src="https://www.comfygen.com/comfygen-images/home-image/saddam husan comfygen technologies founder and cto.webp"
                        alt="ScienceSoft Team"
                        width={1240}
                        height={820}
                        className="lg:h-[420px] w-full h-full lg:w-[940px] object-contain"
                    />


                </div>
            </div>
        </section>
    );
}