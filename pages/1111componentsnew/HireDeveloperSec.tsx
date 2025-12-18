import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import LazyLoad from "react-lazy-load";
import Image from 'next/image';

const HireDeveloper = ({
    heading,
    dec,
    dec1,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
   
}) => {
    return (
        <section className="lg:py-16 py-10 bg-[#fff]">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 relative bg-[#17162B] rounded-[24px]">
                <div className="lg:px-14 px-8 lg:py-16 py-6 lg:flex gap-8 items-center ">
                <div className="lg:w-[50%] w-full mx-auto flex justify-center  lg:mt-0 mt-5 ">
                        <LazyLoad>
                             <Image
                                className="w-full"
                                src={imageSrc}
                                alt={imageAlt || "Call to Action"}
                                width={800}
                                height={600}
                            />
                        </LazyLoad>
                    </div>
                    <div className="lg:w-[50%] w-full  ">
                        <div className="space-y-4">
                            <h2 className="xl:text-4xl lg:text-3xl text-xl text-[#fff] mt-3 font-semibold">
                                {heading}
                            </h2>
                            <p className="lg:text-base text-sm text-white">
                                {dec}
                            </p>
                            <p className="lg:text-base text-sm text-white">
                                {dec1}
                            </p>
                            
                        </div>
                        <div className="mt-8">
                            <Link href={buttonLink || "#"} passHref>
                                <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                                    {buttonText} <MdOutlineArrowOutward />
                                </button>
                            </Link>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    );
};

export default HireDeveloper;
