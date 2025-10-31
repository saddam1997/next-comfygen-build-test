import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Tech({ techData, heading, description, description1 = "" }) {
  return (
    <section className="lg:py-16 py-10 bg-[#F3F4F6]">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
        <div className="text-center mb-10">
          <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">{heading}</h2>
          <div className="mt-2">
            <p className="text-base font-normal " dangerouslySetInnerHTML={{ __html: description }} />
            <p className="text-base font-normal" dangerouslySetInnerHTML={{ __html: description1 }} />
          </div>

        </div>

        <div className="space-y-10">
          {techData?.All?.map((elem, index) => (
            <div
              key={elem.num}
              className={`rounded-[40px] ${index % 2 === 0 ? "bg-[#F5F5F9] border border-[#000000]/10" : "bg-[#fff] border border-[#000000]/10"
                } space-x-3 px-8 md:py-10 py-6`}
            >
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                <div className="flex items-center">
                  <Image
                    src={elem.img}
                    alt={elem.head}
                    width={500}
                    height={300}
                    className="w-full rounded-xl"
                    priority
                  />
                </div>
                <div className="flex items-center">
                  <div className="space-y-4">
                    <div>
                      <h2 className="xl:text-4xl md:text-2xl text-xl font-semibold">{elem.head}</h2>
                      <p className="xl:text-xl text-lg font-medium">{elem.based}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-black">{elem.name}</p>
                      <p className="text-black">{elem.dec1}</p>
                      <p className="text-black">{elem.dec2}</p>
                    </div>

                    <div>
                      <p className="text-black py-3">{elem.name1}</p>

                      <ul className="list-disc list-inside space-y-2">
                        {elem.listItems?.map((item, listIndex) => (
                          <li key={listIndex} className="text-black text-base">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={elem.buttonLink || "#"} passHref>
                      <button className="text-[#5556D1] hover:bg-[#5556D1]  hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                        Explore Now <MdOutlineArrowOutward />
                      </button>
                    </Link>
                    {/* <div>
                      <h3 className="text-[#212121] text-lg mt-6 font-semibold">Technology We Use</h3>
                      <div className="flex space-x-4 mt-3">
                        {elem.icons.map((icon, iconIndex) => (
                          <Image
                            key={iconIndex}
                            src={icon}
                            alt="Tech Icon"
                            width={55}
                            height={55}
                            className="md:w-[55px] w-[40px]"
                          />
                        ))}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a href="/portfolio">
            <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
              View More <MdOutlineArrowOutward />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
