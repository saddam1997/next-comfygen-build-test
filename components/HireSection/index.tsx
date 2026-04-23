import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { parseHTMLString } from "../../lib/parseHTML"

const HireDeveloper = ({ HireDeveloper }: any) => {
  const { heading, text, text1, text2, text3, text4, text5, text6, buttonText, buttonLink, imageSrc, imageAlt, listItems, listheading } = HireDeveloper
  return (
    <section className="lg:py-16 py-10 bg-[#fff]">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 relative bg-[#17162B] rounded-[24px]">
        <div className="lg:px-14 px-8 lg:flex gap-8">
          <div className="lg:w-[60%] w-full lg:py-16 py-6">
            <div className="space-y-4">
              <HeadingTwo color={"white"} text={heading} />

              <div className="space-y-2">
                <ParagraphText color={"white"} text={text} />


                {
                  text1 && (

                    <ParagraphText color={"white"} text={text1} />

                  )
                }

                {
                  text2 && (
                    <ParagraphText color={"white"} text={text2} />

                  )
                }

                {
                  text3 && (
                    <ParagraphText color={"white"} text={text3} />

                  )
                }
                {
                  text4 && (
                    <ParagraphText color={"white"} text={text4} />

                  )
                }

                {
                  text5 && (
                    <ParagraphText color={"white"} text={text5} />

                  )
                }





              </div>

              <div className="text-semibold text- text-white">
                <ParagraphText color={"white"} text={listheading} />

              </div>

              {listItems.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {listItems.map((item: any, index: any) => (
                    <li
                      key={index}
                      className="flex items-start  gap-2 text-white"
                    >
                      <div className="w-3 h-3 border border-white rounded-full flex-shrink-0 mt-1"></div>
                      <p >{parseHTMLString(item)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-8">
              <Link href={buttonLink} passHref>
                <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-4 lg:px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                  {buttonText} <ArrowUpRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-[40%] w-full mx-auto flex justify-center items-end lg:mt-0 mt-5">
            {imageSrc ? (
              <Image
                className="w-full hidden sm:block"
                src={imageSrc}
                alt={imageAlt}
                width={907}
                height={762}
                quality={85}
                loading="lazy"
                fetchPriority="low"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 907px"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDeveloper;
