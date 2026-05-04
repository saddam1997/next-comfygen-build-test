import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { Button } from "../ui/Button";

const InfoSection = ({ InfoSectionData }: any) => {
  return (
    <section className="bg-white lg:py-16 py-10">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">

        <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">

          {InfoSectionData?.imagePosition === "left" ? (
            <>
              {/* LEFT IMAGE */}
              <div>
                <Image width={907} height={762} className="rounded-2xl" src={InfoSectionData?.imageSrc} alt="About Us" />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <div className="space-y-4">

                  <HeadingTwo color="#212121" text={InfoSectionData?.heading} />

                  <div className="space-y-4">
                    <ParagraphText color="black" text={InfoSectionData?.description1} />
                    <ParagraphText color="black" text={InfoSectionData?.description2} />
                    <ParagraphText color="black" text={InfoSectionData?.description3} />





                    <ul className="space-y-2">
                      {InfoSectionData?.points?.map((point: any, index: any) => (
                        <li key={index} className="flex items-center lg:gap-2 gap-1">
                          <div className="md:w-[10px] md:h-[10px] bg-[#5556D1] rounded-full hidden md:block"></div>
                          <ParagraphText color="black" text={point} />

                        </li>
                      ))}
                    </ul>
                    <ParagraphText color="black" text={InfoSectionData?.description4} />

                  </div>
                </div>

                <div className="mt-7">
                  {InfoSectionData.link && InfoSectionData.linkText && (
                    <Link href={InfoSectionData?.link}>
                      <Button variant="outline" className="mt-4 items-center text-[#5556D1]"> {InfoSectionData?.linkText}<span className="mb-4">→</span></Button>
                    </Link>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* RIGHT IMAGE */}
              <div className="order-1 lg:order-2">
                <Image width={907} height={762} className="rounded-2xl" src={InfoSectionData?.imageSrc} alt="About Us" />
              </div>

              {/* LEFT CONTENT */}
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <HeadingTwo color="#212121" text={InfoSectionData?.heading} />
                  <div className="space-y-4">
                    <ParagraphText color="black" text={InfoSectionData?.description1} />
                    <ParagraphText color="black" text={InfoSectionData?.description2} />
                    <ParagraphText color="black" text={InfoSectionData?.description3} />
                    <ul className="space-y-2">
                      {InfoSectionData?.points?.map((point: any, index: any) => (
                        <li key={index} className="flex items-center lg:gap-2 gap-1">
                          <div className="w-2 h-2 bg-[#5556D1] rounded-full hidden md:block"></div>
                          <ParagraphText color="black" text={point} />
                        </li>
                      ))}
                    </ul>
                    <ParagraphText color="black" text={InfoSectionData?.description4} />
                  </div>
                </div>

                <div className="mt-7">

                  {InfoSectionData.link && InfoSectionData.linkText && (
                    <Link href={InfoSectionData?.link}>
                      <Button variant="outline" className="mt-4 items-center text-[#5556D1]"> {InfoSectionData?.linkText}<span className="mb-4">→</span></Button>
                    </Link>
                  )}
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};


export default InfoSection;