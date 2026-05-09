import Image from "next/image";
import React from "react";


const LatestTechnology = ({ heading, subheading, techData }) => {

    const [showAll, setShowAll] = React.useState(false);
    const safeData = Array.isArray(techData) ? techData : [];

    const visibleData = showAll ? safeData : safeData.slice(0, 4);


    return (
        <section className="lg:py-14 py-8">
            <div className="mx-auto 2xl:w-10/12 lg:w-11/12 lg:px-0 px-6 w-full">
                <div className="2xl:max-w-5xl mx-auto space-y-4">
                    <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                        {heading}
                    </h2>
                    <p className="text-base text-black text-center" dangerouslySetInnerHTML={{ __html: subheading }} />

                </div>
                <div className="grid py-10 text-left md:grid-cols-2 grid-cols-1 2xl:gap-8 gap-4">
                    {visibleData &&
                        visibleData?.map((techItem: any, index: any) => (
                            <div
                                key={index}
                                className="bg-[#FAFAFA] p-6 border border-[#5556D1]/10 group rounded-md space-y-4 hover:bg-[#5556D1]/10 hover:border-[#5556D1] cursor-pointer transition-all duration-200"
                            >
                               <div className="bg-black w-12 h-12 rounded-md">
                                 <Image src={techItem.img} alt="" width={400} height={150} className="object-contain" />
                               </div>

                                {/* <div className="relative rounded-md border w-fit text-[#5556D1] p-2" dangerouslySetInnerHTML={{ __html: techItem.img }}>
                                   
                                </div> */}
                                <div className="space-y-2">
                                    <h2 className="2xl:text-2xl text-xl text-[#212121] font-semibold">
                                        {techItem.title}
                                    </h2>
                                    <p className="text-base text-[#212121]" dangerouslySetInnerHTML={{ __html: techItem.desc }}>
                                    </p>
                                </div>
                                {techItem?.listItems && (
                                    <ul className="mt-4 space-y-2">
                                        {techItem?.listItems?.map((item: any, idx: any) => (
                                            <li
                                                key={idx}
                                                className="text-base font-normal flex items-center gap-1"
                                            >
                                                 {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}



                </div>

                <div className="text-center mt-6">
                    {Array.isArray(techData) && techData?.length > 4 && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-2 rounded-full bg-[#5556D1] text-white font-semibold hover:bg-[#4344b8] transition"
                        >
                            {showAll ? "See Less" : "See More"}
                        </button>
                    )}
                </div>
            </div>

        </section>
    );
};

export default LatestTechnology;
