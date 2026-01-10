"use client";

import Image from "next/image";
import ProcessSlider from "../../comman/ProcessSlider";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";

type Slide = {
  title: string;
  description: string;
};

interface ProcessProps {
  heading: string;
  description: string;
  processSlides: Slide[];
}

export default function DevelopmentProcess({
  heading,
  description,
  processSlides,
}: ProcessProps) {
  return (
    <section className="relative bg-[#eaf6ff] py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/Explore-Portfolio.png')] 
                   bg-cover bg-center opacity-80"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center container mx-auto mb-10">
          <Heading text={heading} align="center" color="#FF383C" />
          <Paragraph html={description} align="center" />
        </div>

        {/* DESKTOP / TABLET VIEW */}
        <div className="hidden md:block">
          {/* Top labels */}
          <ul className="flex justify-between max-w-5xl mx-auto text-center mb-4 px-4 gap-2 flex-wrap">
            <li className="text-base lg:text-lg font-poppins font-medium">
              UI/UX Design
            </li>
            <li className="text-base lg:text-lg font-poppins font-medium">
              Development
            </li>
            <li className="text-base lg:text-lg font-poppins font-medium">
              Prototype
            </li>
          </ul>

          {/* Process Image */}
          <div className="relative w-full max-w-6xl mx-auto">
            <Image
              src="/Dev-Process.svg"
              alt="Development Process"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
              priority={false}
            />
          </div>

          {/* Bottom labels */}
          <ul className="flex justify-between max-w-6xl mx-auto text-center mt-4 px-4 gap-2 flex-wrap">
            <li className="text-base lg:text-lg font-poppins font-medium">
              Requirement Gathering
            </li>
            <li className="text-base lg:text-lg font-poppins font-medium">
              Prototype
            </li>
            <li className="text-base lg:text-lg font-poppins font-medium">
              Quality Assurance
            </li>
            <li className="text-base lg:text-lg font-poppins font-medium">
              Support & Maintenance
            </li>
          </ul>
        </div>

        {/* MOBILE VIEW */}
        <div className="block md:hidden mt-6">
          <ProcessSlider slides={processSlides} />
        </div>
      </div>
    </section>
  );
}
