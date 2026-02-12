import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { FeatureList } from '../ui/FeatureList';
import { SubHeading } from '../ui/SubHeading';

export default function Services({ heading = "", description = "", serviceskey = [], servicedata = {}, defaultActiveService = "" }: any) {
    const [activeService, setActiveService] = useState(defaultActiveService || serviceskey?.[0] || "");

    const activeData = servicedata?.[activeService] || {};

    const desc = activeData.description || "";
    const features = activeData.features || [];

    return (
        <div className=" bg-[#000128] py-16 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Heading text={heading}
                        gradient={{
                            from: "#C05FE2",
                            via: "#DD3D98",
                            to: "#2A39DD",
                        }}
                        align="center"
                    />
                    <Paragraph html={description} align="center" color="#FFFFFF" />
                </div>

                {/* Main Content Container */}
                <div className="hidden lg:block bg-white backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-[1760px] h-full xl:h-[780px]">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-[400px,1fr] gap-8 ">
                        {/* Services Menu */}
                        <div className="space-y-3 overflow-y-auto overflow-x-hidden h-[700px] pr-2 ">
                            {serviceskey.map((service: any) => (
                                <ul
                                    key={service}
                                    onClick={() => setActiveService(service)}
                                    className={`w-full text-left px-6 py-4 text-sm lg:text-lg xl:text-[22px] font-poppins rounded-xl font-medium transition-all duration-300 ${activeService === service
                                        ? 'bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E] text-white shadow-lg '
                                        : 'bg-gradient-to-r from-[#EDF1FD] to-[#DBE0FD]'
                                        }`}
                                >
                                    <SubHeading text={service} color={activeService === service ? "#FFFFFF" : "#000000"} />
                                </ul>
                            ))}
                        </div>


                        {/* Service Details */}
                        <div className="bg-[#000823]/95 max-w-[1258px] rounded-2xl p-8 py-16 relative overflow-hidden " style={{ backgroundImage: "url('https://www.comfygen.com/comfygen-images/home/service-bg.webp')" }}>

                            <div className="absolute -right-2 -bottom-4 w-96 h-96 ">
                                <Image
                                    width={640}
                                    height={340}
                                    src="https://www.comfygen.com/comfygen-images/home/services-containt.webp"
                                    alt=""
                                    className="w-full h-full object-contain pointer-events-none"
                                    loading="lazy"
                                />
                            </div>

                            <div className="relative z-10">
                                <SubHeading text={activeService} color="#FFFFFF" />
                                <div className='mt-4 mb-4'>
                                    <Paragraph html={desc} color="#FFFFFF" align="left" />
                                </div>


                                <div className="space-y-3 md:mb-10">
                                    {features?.map((feature: any, index: any) => (

                                        <div key={index} className='flex items-center'>
                                            <span className="flex items-center gap-2 text-sm lg:text-base xl:text-[16px] font-medium font-poppins text-[#FFFFFF] mr-3">-</span>
                                            <FeatureList items={[feature]} color="#FFFFFF" key={index} />
                                        </div>

                                    ))}
                                </div>
                                <Link href="/contact-us">
                                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        Connect Experts
                                        <ArrowRight size={20} />
                                    </button>
                                </Link>
                            </div>

                            {/* Decorative Robot Hand Image Placeholder */}
                            <div className="absolute right-8 bottom-8 w-64 h-64 opacity-20">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden space-y-3 lg:h-[700px] lg:overflow-y-auto pr-2 ">
                    {serviceskey.map((service: any) => {
                        const isActive = activeService === service;
                        const data = servicedata?.[service] || {};

                        return (
                            <div key={service}>
                                <ul
                                    onClick={() =>
                                        setActiveService(isActive ? "" : service)
                                    }
                                    className={`w-full text-left px-6 py-4 text-sm lg:text-lg xl:text-[22px] font-poppins rounded-xl font-medium transition-all duration-300 ${isActive ? "bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E] text-white" : "bg-gradient-to-r from-[#EDF1FD] to-[#DBE0FD]"}`}
                                >
                                    <SubHeading text={service} color={activeService === service ? "#FFFFFF" : "#000000"} />
                                </ul>


                                {/* 🔽 MOBILE DETAILS */}
                                {
                                    isActive && (
                                        <div className="lg:hidden">
                                            <ServiceDetails
                                                title={service}
                                                desc={data.description || ""}
                                                features={data.features || []}
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        );
                    })}
                </div>

            </div>
        </div >
    );
}


const ServiceDetails = ({ title, desc, features }: any) => {
    return (
        <div className="bg-[#000823] rounded-xl p-5 mt-4 text-white">
            <SubHeading text={title} color="#FFFFFF" />
            <Paragraph html={desc} color="#FFFFFF" align="left" />
          
            <div className="space-y-2 mb-4 mt-4">
                {features?.map((feature: any, i: number) => (
                    <FeatureList items={[feature]} color="#FFFFFF" key={i} />
                ))}
            </div>
            <Link href="/contact-us">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Connect Experts
                    <ArrowRight size={20} />
                </button>
            </Link>
        </div>
    );
};
