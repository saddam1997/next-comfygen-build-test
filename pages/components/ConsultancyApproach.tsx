import Link from "next/link";
import { useState } from "react";
import { MdAdd, MdArrowOutward, MdRemove } from "react-icons/md";
import Image from 'next/image';

const ItemDataSection = ({ Head, ItemData, imageSrc, buttonText, buttonLink }) => {

    const [currentCount, setCurrentCount] = useState(0);
    if (!Head || !ItemData) {
        return <div>Loading...</div>;
    }

    return (
        <section className="lg:py-16 py-10 bg-white">
            <div className="items-center space-y-10 lg:flex lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                <div className="lg:flex items-start lg:space-x-10 lg:space-y-0 space-y-6 w-full gap-10">

                    <div className="w-full lg:text-left">
                        {Head.map((elem:any) => (
                            <div key={elem.title} className="w-full lg:text-left">
                                <div className="space-y-6">
                                    <Image
                                        className=""
                                        src={imageSrc}
                                        alt={elem.title}
                                        unoptimized
                                        width={754}
                                        height={210}
                                    />
                                    <div className="space-y-2 ">
                                        <h2 className="text-2xl font-bold text-[#212121] lg:text-3xl">
                                            {elem.title}
                                        </h2>
                                        <p className="text-base text-[#212121]" dangerouslySetInnerHTML={{ __html: elem.desc }}></p>
                                        <p className="text-base text-[#212121]" dangerouslySetInnerHTML={{ __html: elem.desc1 }}></p>
                                    </div>
                                    <div className="flex">
                                        <Link href={buttonLink || "#"} passHref>
                                            <button className="text-base font-medium text-[#5556D1] border border-[#5556D1] rounded-full px-6 py-2.5 text-center hover:text-white hover:bg-[#5556D1] cursor-pointer transition duration-300 relative flex gap-2 items-center">
                                                {buttonText} <MdArrowOutward />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full space-y-4">
                        {ItemData.map((elem:any, index:any) => (
                            <div
                            key={index}
                            className={`p-4 mt-2 border border-[#5556D1]/60 rounded-lg cursor-pointer w-full ${
                                currentCount === index ? "bg-[#5556D1]/10" : "bg-[#fff]"
                            }`}
                            onClick={() => setCurrentCount(currentCount === index ? null : index)}
                            >
                            <div className="flex justify-between w-full text-base font-medium text-left text-black rounded-lg md:text-lg">
                                <span className="font-semibold lg:text-lg text-base text-[#000000]">
                                {elem.title}
                                </span>
                                {currentCount === index ? (
                                <MdRemove size={26} />
                                ) : (
                                <MdAdd size={26} />
                                )}
                            </div>
                            <div
                                className={`pt-4 text-medium text-black ${
                                currentCount === index ? "" : "hidden"
                                }`}
                                dangerouslySetInnerHTML={{ __html: elem.desc }}
                            />
                            </div>
                        ))}
                        </div>

                </div>
            </div>
        </section>
    );
};

export default ItemDataSection;
