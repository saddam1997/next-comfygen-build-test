// ServicesSec.tsx


import Image from "next/image";
import ServicesTabs from "./ServicesTabs";

export default function ServicesComponet({ servicesData }) {


    return (
        <section className="lg:py-16 py-10 bg-[#F5F5F9 ">

            <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                <div className="space-y-2">
                    <h2 className="xl:text-4xl text-lg text-[#212121] text-center font-bold" dangerouslySetInnerHTML={{ __html: servicesData.heading }}>

                    </h2>
                    <p className="text-base text-center font-normal" dangerouslySetInnerHTML={{ __html: servicesData.description }}>

                    </p>
                </div>
                <div className="">
                    <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6 relative items-stretch">

                        {/* LEFT SIDE TABS */}
                        <ServicesTabs servicesData={servicesData.services} />


                        <div className="hidden lg:block w-[70%] h-[34rem] overflow-hidden relative bg-gradient-to-r from-[#272868] to-[#5556D1]">

                            <Image
                                src="https://www.comfygen.com/image/services-after-img.svg"
                                alt=""
                                width={200}
                                height={200}
                                className="absolute bottom-0 right-0 pointer-events-none"
                            />

                            {servicesData.services.map((service: any, index: any) => (
                                <div
                                    key={index}
                                    id={`service-content-${index}`}
                                    className={index === 0 ? "block" : "hidden"}
                                >
                                    <ServiceContent service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

function ServiceContent({ service }) {
    return (
        <div className="flex justify-center w-full md:justify-start items-start relative md:px-14 px-6 py-12 text-white">
            <div className="xl:space-y-5 space-y-3 w-full">
                <div className="space-y-2">
                    <p>{service.subtitle}</p>

                    <h3
                        className="text-3xl font-bold"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                    />

                    <p dangerouslySetInnerHTML={{ __html: service.description }} />
                    <p dangerouslySetInnerHTML={{ __html: service.description1 }} />
                </div>

                {service.features?.length > 0 && (
                    <ul className="space-y-2">
                        {service.features.map((feature: any, index: any) => (
                            <li key={index} className="flex items-center gap-2 cursor-pointer text-base font-normal hover:text-[#c9c5c5] Services-links">
                                <div className="w-3 h-3 bg-transparent border border-white rounded-full hidden md:block"></div>
                                <p dangerouslySetInnerHTML={{ __html: feature }} />
                            </li>
                        ))}
                    </ul>
                )}

                <a
                    href="/contact-us"
                    className="mt-6 inline-block border px-6 py-2 rounded-full"
                >
                    Connect Experts
                </a>
            </div>
        </div>
    );
}