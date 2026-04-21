import Image from "next/image";
import dynamic from "next/dynamic";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";

const ServicesTabs = dynamic(() => import("./ServicesTabs"), {
    ssr: false,
});

export default function ServicesComponet({ servicesData }) {
    return (
        <section className="bg-[#F5F5F9] min-h-[700px] sm:min-h-[650px] lg:min-h-[500px]">
            <div className="w-full lg:py-16 lg:px-5 xl:px-10 2xl:px-0 py-10">

                {/* SEO Heading */}
                <div className="space-y-2 text-center">
                    <HeadingTwo color="black" text={servicesData.heading} />
                    <ParagraphText color="black" text={servicesData.description} />
                </div>

                {/* Layout */}
                <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6">

                    <div className="w-full lg:w-[30%] min-h-[300px]">
                        <ServicesTabs services={servicesData.services} />
                    </div>

                    {/* RIGHT SIDE → ALL CONTENT SSR */}
                    <div className="hidden lg:block w-[70%] h-[34rem] relative bg-gradient-to-r from-[#272868] to-[#5556D1] overflow-hidden">

                        <Image
                            src="https://www.comfygen.com/image/services-after-img.svg"
                            alt="services background"
                            width={150}
                            height={90}
                            loading="lazy"
                            fetchPriority="low"
                            className="absolute bottom-0 right-0 pointer-events-none w-36 h-36"
                        />

                        {/* ALL CONTENT RENDERED HERE (SEO WIN) */}
                        <div className="h-full relative">
                            {servicesData.services.map((service: any, index: any) => (
                                <div
                                    key={index}
                                    id={`service-${index}`}
                                    // First item visible by default; others hidden
                                    className={`service-content absolute inset-0 px-6 py-12 text-white  ${index === 0
                                            ? "opacity-100"
                                            : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <div className="space-y-4">

                                        {service.subtitle && (
                                            <p suppressHydrationWarning
                                                dangerouslySetInnerHTML={{ __html: service.subtitle }}
                                            />
                                        )}

                                        <h3 className="text-3xl font-bold">
                                            {service.title}
                                        </h3>

                                        {service.description && (
                                            <p suppressHydrationWarning
                                                dangerouslySetInnerHTML={{ __html: service.description }}
                                                className="text-white/90 text-sm leading-relaxed"
                                            />
                                        )}

                                        {service.description1 && (
                                            <p suppressHydrationWarning
                                                dangerouslySetInnerHTML={{ __html: service.description1 }}
                                            />
                                        )}

                                        {service.features?.length > 0 && (
                                            <ul className="space-y-2 mt-4">
                                                {service.features.map((f: any, i: any) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center gap-2"
                                                        suppressHydrationWarning
                                                    >
                                                        <div className="w-2 h-2 shrink-0 border border-white rounded-full" />
                                                        <div
                                                            suppressHydrationWarning
                                                            dangerouslySetInnerHTML={{ __html: f }}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}