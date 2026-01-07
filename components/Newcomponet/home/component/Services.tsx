import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Services({ heading = "", description = "", serviceskey = [], servicedata = {} }) {
    const [activeService, setActiveService] = useState('AI Development');

    const activeData = servicedata?.[activeService] || {};

    const desc = activeData.description || "";
    const features = activeData.features || [];

    return (
        <div className=" bg-[#000128] py-16 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="lg:text-2xl xl:text-[45px] font-semibold font-poppins mb-6">
                        <span className="bg-gradient-to-r from-[#C05FE2] via-[#DD3D98] to-[#2A39DD] text-transparent bg-clip-text">
                            {heading}
                        </span>
                    </h2>
                    <p className="text-[#FFFFFF] lg:text-sm xl:text-[20px] xl:leading-loose font-poppins font-normal max-w-[1525px] mx-auto" dangerouslySetInnerHTML={{ __html: description }}>

                    </p>
                </div>

                {/* Main Content Container */}
                <div className="hidden lg:block bg-white backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-[1760px] h-full xl:h-[780px]">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-[400px,1fr] gap-8 ">
                        {/* Services Menu */}
                        <div className="space-y-3 overflow-y-auto overflow-x-hidden h-[700px] pr-2 scroll-hide ">
                            {serviceskey.map((service) => (
                                <button
                                    key={service}
                                    onClick={() => setActiveService(service)}
                                    className={`w-full text-left px-6 py-4 text-sm lg:text-lg xl:text-[22px] font-poppins rounded-xl font-medium transition-all duration-300 ${activeService === service
                                        ? 'bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E] text-white shadow-lg '
                                        : 'bg-gradient-to-r from-[#EDF1FD] to-[#DBE0FD]'
                                        }`}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>


                        {/* Service Details */}
                        <div className="bg-[#000823]/95 max-w-[1258px] rounded-2xl p-8 py-16 relative overflow-hidden " style={{ backgroundImage: "url('/response-automation.png')" }}>
                            {/* <div className="absolute inset-0 bg-[#000823]/70"></div> */}
                            {/* Background Decoration */}
                            <div className="absolute -right-2 -bottom-4 w-96 h-96 ">
                                <Image
                                    width={640}
                                    height={340}
                                    src="/imageservices.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-sm lg:text-xl xl:text-[36px] font-medium font-poppins text-[#FFFFFF] mb-4">
                                    {activeService}
                                </h2>

                                <p
                                    className="text-sm lg:text-base xl:text-[20px] font-medium font-poppins text-[#FFFFFF] mb-8 md:mb-14  leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            desc.length > 300
                                                ? desc.slice(0, 300) + "...."
                                                : desc,
                                    }}
                                ></p>

                                {/* <p className="text-[20px] font-medium font-poppins text-[#FFFFFF] mb-14 leading-relaxed" dangerouslySetInnerHTML={{ __html: servicedata[activeService].description?.slice(0, 300) + "...." }}>
                                    
                                </p> */}

                                <div className="space-y-3 md:mb-10">
                                    {features?.map((feature: any, index: any) => (
                                        <div
                                            key={index}
                                            className="flex items-center text-gray-200 text-lg gap-2"
                                        >
                                            - {""} <span className="ext-sm lg:text-base xl:text-[20px] font-medium font-poppins text-[#FFFFFF] mr-3" dangerouslySetInnerHTML={{ __html: feature }}></span>

                                        </div>
                                    ))}
                                </div>

                                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    Connect Experts
                                    <ArrowRight size={20} />
                                </button>
                            </div>

                            {/* Decorative Robot Hand Image Placeholder */}
                            <div className="absolute right-8 bottom-8 w-64 h-64 opacity-20">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden space-y-3 lg:h-[700px] lg:overflow-y-auto pr-2 scroll-hide">
                    {serviceskey.map((service) => {
                        const isActive = activeService === service;
                        const data = servicedata?.[service] || {};

                        return (
                            <div key={service}>
                                <button
                                    onClick={() =>
                                        setActiveService(isActive ? "" : service)
                                    }
                                    className={`w-full text-left px-6 py-4 text-sm lg:text-lg xl:text-[22px] font-poppins rounded-xl font-medium transition-all duration-300 ${isActive ? "bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E] text-white" : "bg-gradient-to-r from-[#EDF1FD] to-[#DBE0FD]"}`}
                                >
                                    {service}
                                </button>

                                {/* 🔽 MOBILE DETAILS */}
                                {isActive && (
                                    <div className="lg:hidden">
                                        <ServiceDetails
                                            title={service}
                                            desc={data.description || ""}
                                            features={data.features || []}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}


const ServiceDetails = ({ title, desc, features }: any) => {
    return (
        <div className="bg-[#000823] rounded-xl p-5 mt-4 text-white">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>

            <p
                className="text-sm mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{
                    __html: desc.length > 200 ? desc.slice(0, 200) + "..." : desc,
                }}
            />

            <div className="space-y-2 mb-4">
                {features?.map((feature: any, i: number) => (
                    <div
                        key={i}
                        className="text-sm flex items-start gap-2"
                        dangerouslySetInnerHTML={{ __html: `• ${feature}` }}
                    />
                ))}
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                Connect Experts
                <ArrowRight size={20} />
            </button>
        </div>
    );
};
