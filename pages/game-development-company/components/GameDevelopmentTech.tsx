import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowUpRight } from 'lucide-react';



export default function Tech({
    title,
    description,
    filterCategory = [],
    customTechData = null,
}) {
    const [tech, setTech] = useState(0);
    const router = useRouter();

    const defaultTechData = {

        GameEngines: [
            { img: "https://www.comfygen.com/image/unity-stack-icon.svg", alt: 'Unity', name: "Unity", num: "1" },
        ],
        ProgrammingLanguages: [

        ],
        ARVRTools: [

        ],
        BlockchainNFTTools: [
            { img: "https://www.comfygen.com/image/ethereum-stack-icon.svg", alt: 'Ethereum', name: "Ethereum", num: "1" },
            { img: "https://www.comfygen.com/img/stackimg/polygon.svg", alt: 'Polygon', name: "Polygon", num: "2" },
            { img: "https://www.comfygen.com/img/stackimg/binance.svg", alt: 'Binance', name: "Binance", num: "3" },
        ],
        "backend": [
            { img: "https://www.comfygen.com/media/svg/tech/nodejs-original.svg", alt: 'Nodejs', name: "Nodejs", num: "1" },
            { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Javascript', name: "Javascript", num: "2" },
            { img: "https://www.comfygen.com/image/next-js-icon.svg", alt: 'Express js', name: "Express js", num: "3" },
            { img: "https://www.comfygen.com/media/svg/tech/sails-js-icon.svg", alt: 'Sails js', name: "Sails js", num: "4" },
            { img: "https://www.comfygen.com/image/next-js-icon.svg", alt: 'Next js', name: "Next js", num: "5" },
            { img: "https://www.comfygen.com/media/svg/tech/django-icon.svg", alt: 'Django', name: "Django", num: "6" },
            { img: "https://www.comfygen.com/media/svg/tech/Python-icon.svg", alt: 'Python', name: "Python", num: "7" },
            { img: "https://www.comfygen.com/media/svg/tech/php-icon.svg", alt: 'PHP', name: "PHP", num: "8" },
        ],
    };

    const techData = customTechData || defaultTechData;

    const filteredTechData = Object.keys(techData)
        .filter((key) => !filterCategory.includes(key))
        .reduce((obj, key) => {
            obj[key] = techData[key];
            return obj;
        }, {});

    const techCategories = Object.keys(filteredTechData);

    return (
        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
            <div className="bg-[#0C0F18] mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 md:py-14 py-8 md:px-10 px-6 rounded-3xl">
                <div className="">
                    <div>
                        <div className="py-4">
                            <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-white">
                                {title}
                            </h2>
                            <p
                                className="text-base mt-2 text-white"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex whitespace-nowrap items-center gap-3 justify-start mt-2 overflow-x-auto button-scroll py-3">
                            {techCategories.map((key, index) => (
                                <span
                                    key={index}
                                    onClick={() => setTech(index)}
                                    className={`px-6 py-2 md:text-base  text-sm font-normal rounded-full cursor-pointer capitalize ${tech === index
                                        ? "bg-[#5556D1] border border-[#5556D1] text-white"
                                        : "text-white border border-white/20 hover:bg-gray-950"
                                        }`}
                                >
                                    {key}
                                </span>
                            ))}
                        </div>

                        <div className="grid xl:grid-cols-4 gap-2 md:grid-cols-3 grid-cols-1 mt-3 max-h-[275px] overflow-y-auto  overflow-hidden  head-scroll">
                            {filteredTechData[techCategories[tech]]?.map((elem) => (
                                <div
                                    key={elem.num}
                                    className="flex items-center border justify-center rounded bg-[#1d1d1d] border-white/5 px-6 py-2 hover:shadow-lg transition-all cursor-pointer group"
                                >
                                    <div className="h-12 md:h-16 w-16 flex items-center justify-center">
                                        <Image
                                            src={elem.img}
                                            alt={elem.name}
                                            width={50}
                                            height={50}
                                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold  text-white ml-3">
                                        {elem.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <button
                                // onClick={() => router.push('/contact-us')}
                                onClick={(e) => {
                                    if (e.metaKey || e.ctrlKey) {
                                        window.open("/contact-us", "_blank");
                                    } else {
                                        router.push("/contact-us");
                                    }
                                }}
                                className="text-white hover:bg-[#5556D1] bg-[#0C0F18] border border-whitesss px-8 py-2.5 text-lg font-semibold rounded-full flex items-center  gap-1"
                            >
                                Connect Experts <ArrowUpRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
