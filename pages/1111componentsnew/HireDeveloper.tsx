import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import LazyLoad from "react-lazy-load";
import Image from "next/image";
import { useRouter } from "next/router";

const HireDeveloper = ({
  heading = "",
  text = "",
  text1 = "",
  text2 = "",
  buttonText = "Get Started",
  buttonLink = "#",
  imageSrc = "",
  imageAlt = "Call to Action",
  listItems = [],
}) => {
  const router = useRouter();
  return (
    <section className="lg:py-16 py-10 bg-[#fff]">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 relative bg-[#17162B] rounded-[24px]">
        <div className="lg:px-14 px-8 lg:flex gap-8">
          <div className="lg:w-[60%] w-full lg:py-16 py-6">
            <div className="space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#fff] mt-3 font-semibold">
                {heading}
              </h2>
              <div className="space-y-2">
                <p
                  className="text-base text-white"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                <p className="text-base text-white">{text1}</p>
                <p className="text-base text-white">{text2}</p>
              </div>

              {listItems.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {listItems?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white"
                    >
                      <span className="w-3 h-3 border border-white rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-8">
              <button
                // onClick={() => router.push(buttonLink)}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey) {
                    window.open(buttonLink, "_blank");
                  } else {
                    router.push(buttonLink);
                  }
                }}
                className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1"
              >
                {buttonText} <MdOutlineArrowOutward />
              </button>
            </div>
          </div>
          <div className="lg:w-[40%] w-full mx-auto flex justify-center items-end lg:mt-0 mt-5">
            <LazyLoad>
              <Image
                className="w-full"
                src={imageSrc}
                alt={imageAlt}
                width={700}
                height={549}
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDeveloper;
