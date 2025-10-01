import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import LazyLoad from "react-lazy-load";
import Image from 'next/image';

const CallToAction = ({
    heading,
    text,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt
}) => {
    return (
        <section className="lg:py-16 py-10 bg-[#fff]">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 action-sec relative bg-[#0C0F18] rounded-[24px]">
                <div className="lg:py-12 py-6 lg:px-14 px-8 lg:flex gap-8 items-center">
                    <div className="space-y-3 lg:w-[70%] w-full">
                        <h2 className="xl:text-4xl text-3xl text-[#fff] mt-3 font-semibold">
                            {heading}
                        </h2>
                        <p className="text-base text-white">
                            {text}
                        </p>
                        <div className="mt-7 z-10 relative">
                            <Link href={buttonLink || "#"} passHref>
                                <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] bg-[#0C0F18] border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                                    {buttonText} <MdOutlineArrowOutward />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-[30%] w-full mx-auto flex justify-center lg:mt-0 mt-5">
                        <LazyLoad>
                            <Image
                                className="action-img"
                                src={imageSrc}
                                alt={imageAlt || "Call to Action"}
                                width={800}
                                height={600}
                                unoptimized
                                priority={true}
                                quality={75}
                            />
                        </LazyLoad>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
