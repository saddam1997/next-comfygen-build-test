import Image from "next/image";
import ServicesTabs from "./ServicesTabs";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";


export default function ServicesComponet({ servicesData }) {
    return (
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
            <div className="w-full lg:px-4 xl:px-0">

                {/* Heading (SEO Friendly) */}
                <div className="space-y-2 text-center">
                    <HeadingTwo color="black" text={servicesData.heading} />
                    <ParagraphText color="black" text={servicesData.description} />
                </div>

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6 items-stretch">

                    {/* ✅ Client Component handles interaction */}
                    <ServicesTabs services={servicesData.services} />

                    {/* ✅ Static Right Section (structure only) */}
                    <div className="hidden lg:block w-[70%] h-[34rem] relative bg-gradient-to-r from-[#272868] to-[#5556D1] overflow-hidden">

                        <Image
                            src="https://www.comfygen.com/image/services-after-img.svg"
                            alt="services background"
                            width={200}
                            height={200}
                            className="absolute bottom-0 right-0 pointer-events-none"
                        />

                        {/* 👉 Content will be injected by client (no duplication) */}
                        <div id="service-content-container" className="h-full" />
                    </div>

                </div>
            </div>
        </section>
    );
}
