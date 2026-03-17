import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";


const AboutComponent = ({ AboutData }) => {
  const imageAlt = AboutData?.altTag || AboutData?.heading || "About image";

  return (
    <section className="bg-white lg:py-16 py-4 lg:p-0 p-4">

      <div className="w-full lg:px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 mx-auto items-center lg:gap-10 gap-4">
          <div className="">
            <Image
              src={AboutData.imageSrc}
              alt={imageAlt}
              width={320}
              height={120}
              quality={60}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full  h-auto xl:object-contain lg:object-cover rounded-md lg:h-[60vh]"
            />
          </div>
          <div>
            <div className="space-y-4">
              <div>


                <HeadingTwo color={"#212121"} text={AboutData.heading} />
                {/* <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                  {AboutData.heading}
                </h2> */}
              </div>
              <div className="xl:space-y-4 md:space-y-4 lg:space-y-2 space-y-4">
                {AboutData.description1 && (
                  <ParagraphText color={"black"} text={AboutData.description1} />
                )}
                {AboutData.description2 && (
                   <ParagraphText color={"black"} text={AboutData.description2} />
                 
                )}
                {AboutData.description3 && (
                   <ParagraphText color={"black"} text={AboutData.description3} />
                  
                )}
                {AboutData.description4 && (
                  <ParagraphText color={"black"} text={AboutData.description4} />
                 
                )}
                {AboutData.description5 && (
                  <ParagraphText color={"black"} text={AboutData.description5} />
                 
                )}
                {AboutData.points && AboutData.points.length > 0 && (
                  <ul className="space-y-2">
                    {AboutData.points.map((point: any, index: any) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="min-w-[10px] min-h-[10px] w-[10px] h-[10px] border-2 border-[#5556D1] rounded-full mt-1.5"></div>
                        <span
                          className="xl:text-base text-sm text-black"
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {AboutData.description6 && (
                   <ParagraphText color={"black"} text={AboutData.description6} />
                  
                )}
              </div>
            </div>
            {AboutData.link && AboutData.linkText && (
              <div className="mt-7">
                <Link href={AboutData.link} passHref legacyBehavior>
                  <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 transition-colors duration-200">
                    {AboutData.linkText} <MdOutlineArrowOutward />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

