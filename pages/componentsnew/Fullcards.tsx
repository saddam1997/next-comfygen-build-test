import React from "react";
import Image from "next/image";
import styles from "./styles.module.css"; 

const Craditem = ({ heading, subheading, products }) => {
    return (
        <section className="lg:py-16 py-10">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
                <div className="space-y-4">
                    <div className="flex flex-col justify-center text-center">
                        {heading && (
                            <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#212121] capitalize">
                                {heading}
                            </h2>
                        )}
                        {subheading && (
                            <p className="text-lg text-gray-600">{subheading}</p>
                        )}
                    </div>
                    <div className="grid gap-4 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-8">
                        {products?.map(({ title, img, decs, num, url }) => (
                            <div
                                key={num}
                                className="space-y-2 overflow-hidden text-left bg-white border rounded-xl p-6"
                            >
                                <Image src={img} alt={title} height={500} width={500} />
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-[#0E1F51]">
                                        {title}
                                    </h3>
                                  <div className={`h-40 overflow-y-auto pr-4 ${styles.cardbar}`}>
                                        <p className="text-base text-black ">
                                            {decs}
                                        </p>
                                        <div className="pt-2">
                                            <a href={url} title="More Detail page">
                                                <button className="text-base font-medium text-white rounded-full px-8 py-2 text-center bg-[#5556D1] cursor-pointer transition duration-300 flex items-center whitespace-nowrap">
                                                    More
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://api.whatsapp.com/send?phone=919587867258">
                        <button className="text-base font-medium text-white rounded-full px-8 py-3.5 text-center bg-[#5556D1] cursor-pointer transition duration-300 flex items-center whitespace-nowrap">
                            Let's Communicate With IT Experts!
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Craditem;
