import React from "react";

const LatestTechnology = ({ heading, subheading, techData }) => {
    return (
        <section className="lg:py-14 py-8">
            <div className="mx-auto 2xl:w-10/12 lg:w-11/12 lg:px-0 px-6 w-full">
                <div className="2xl:max-w-5xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                        {heading}
                    </h2>
                    <p className="text-base text-black text-center">
                        {subheading}
                    </p>
                </div>
                <div className="grid py-10 text-left lg:grid-cols-2 md:grid-cols-2 2xl:gap-8 gap-4">
                    {techData && techData.map((techItem, index) => (
                        <div
                            key={index}
                            className="bg-[#FAFAFA] p-6 border border-[#5556D1]/10 group rounded-md space-y-4 hover:bg-[#5556D1]/10 hover:border-[#5556D1] cursor-pointer transition-all duration-200"
                        >
                            <div className="relative rounded-md border w-fit text-[#5556D1] p-2">
                                {techItem.img} 
                            </div>
                            <div className="space-y-2">
                                <h2 className="2xl:text-2xl text-xl text-[#212121] font-semibold" dangerouslySetInnerHTML={{ __html: techItem.title }}>
                                   
                                </h2>
                                <p className="text-base text-[#212121]"  dangerouslySetInnerHTML={{ __html: techItem.desc }}>
                                  
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestTechnology;
