"use client";

import {
  ClipboardList,
  Layout,
  Lightbulb,
  Code,
  ClipboardCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import Image from "next/image";
import ProcessSlider from "../../comman/ProcessSlider";



type Slide = {
  title: string;
  description: string;
};

interface process {
  heading: string;
  description: string
  processSlides: Slide[];
}

export default function DevelopmentProcess({ heading, description,
  processSlides
 }: process) {
  return (
    <section className="relative bg-[#eaf6ff] py-8 overflow-hidden h-full md:h-[732px] flex flex-col items-center justify-center">
      {/* World map background */}
      <div className="absolute inset-0 bg-[url('/Explore-Portfolio.png')] bg-cover bg-no-repeat opacity-80" />

      <div className="relative z-10 container mx-auto px-6  ">
        {/* Heading */}
        <div className="text-center container mx-auto">
          <h2 className="text-lg md:text-4xl font-bold text-pink-600">
            {heading}

          </h2>
          <p className="mt-4 text-sm text-center font-medium text-gray-600" dangerouslySetInnerHTML={{ __html: description }}>

          </p>
        </div>

        <div className="hidden md:block">

          <div className="py-5">
            <ul className="flex justify-between max-w-5xl mx-auto px-4 py-2">

              <li className="text-[20px] font-poppins font-medium">UI/UX Design</li>
              <li className="text-[20px] font-poppins font-medium">Development</li>
              <li className="text-[20px] font-poppins font-medium">Prototype</li>
            </ul>
            <Image className="h-full w-full bg-contain" src={"/Dev-Process.svg"} alt="" width={640} height={460} />
            <ul className="flex justify-between container mx-auto  py-2">

              <li className="text-[20px] font-poppins font-medium">Requirement Gathering</li>
              <li className="text-[20px] font-poppins font-medium">Prototype</li>
              <li className="text-[20px] font-poppins font-medium">Quality Assurance</li>
              <li className="text-[20px] font-poppins font-medium">Support & Maintenance</li>
            </ul>
          </div>
        </div>
      </div>

         <div className="md:hidden block">
        <ProcessSlider slides={processSlides} />
      </div>
    </section>
  );
}
