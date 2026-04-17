import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";

import { parseHTMLString } from "../../lib/parseHTML"


const AboutComponent = ({ AboutData }) => {
  const imageAlt = AboutData?.altTag || AboutData?.heading || "About image";

  return (
    <section className="bg-white lg:py-16 py-4 px-4">
      <div className="w-full lg:px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 mx-auto items-center lg:gap-10 gap-4">

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={AboutData.imageSrc}
              alt={AboutData.heading}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="lg:object-contain object-cover rounded-md"
            />
          </div>

          {/* Content */}
          <div className="min-h-[300px]">
            <div className="space-y-4">

              <HeadingTwo color="#212121" text={AboutData.heading} />

              <div className="space-y-4">
                {AboutData.description1 && <ParagraphText color="black" text={AboutData.description1} />}
                {AboutData.description2 && <ParagraphText color="black" text={AboutData.description2} />}
                {AboutData.description3 && <ParagraphText color="black" text={AboutData.description3} />}
                {AboutData.description4 && <ParagraphText color="black" text={AboutData.description4} />}
                {AboutData.description5 && <ParagraphText color="black" text={AboutData.description5} />}

                {AboutData.points?.length > 0 && (
                  <ul className="space-y-2">
                    {AboutData.points.map((point: any, index: any) => (
                      <li key={index} className="flex items-start gap-2 min-h-[24px]">
                        <div className="w-[10px] h-[10px] border-2 border-[#5556D1] rounded-full mt-1.5"></div>
                        <span
                          className="xl:text-base text-sm text-black"
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      </li>
                    ))}
                  </ul>
                )}

                {AboutData.description6 && <ParagraphText color="black" text={AboutData.description6} />}
              </div>
            </div>

            {/* Button */}
            <div className="mt-7 min-h-[50px]">
              {AboutData.link && AboutData.linkText && (
                <Link
                  href={AboutData.link}
                  className="text-[#5556D1] hover:bg-[#5556D1] hover:text-white border border-[#5556D1] w-fit px-10 py-2 text-lg font-semibold rounded-full flex items-center gap-1 transition-colors duration-200"
                >
                  {AboutData.linkText} <MdOutlineArrowOutward />
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

