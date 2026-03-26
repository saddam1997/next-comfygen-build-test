import Image from "next/image";
import ServicesTabs from "./ServicesTabs";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";

export default function ServicesComponet({ servicesData }) {
    return (
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
            <div className="w-full lg:px-4 xl:px-0">

                {/* Heading */}
                <div className="space-y-2 text-center">
                    <HeadingTwo color="black" text={servicesData.heading} />
                    <ParagraphText color="black" text={servicesData.description} />
                </div>

                <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6 items-stretch">

                    {/* Client Tabs */}
                    <ServicesTabs services={servicesData.services} />

                    {/* ✅ RIGHT SIDE: Render ALL services (SEO visible) */}
                    <div className="hidden lg:block w-[70%] h-[34rem] relative bg-gradient-to-r from-[#272868] to-[#5556D1] overflow-hidden">

                        <Image
                            src="https://www.comfygen.com/image/services-after-img.svg"
                            alt="services background"
                            width={200}
                            height={200}
                            className="absolute bottom-0 right-0 pointer-events-none"
                        />

                        {/* ✅ ALL CONTENT RENDERED HERE */}
                        <div className="h-full relative">
                            {servicesData.services.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-panel absolute inset-0 px-6 py-12 text-white transition-opacity duration-300"
                                    data-index={index}
                                >

                                    <p>{service.subtitle}</p>

                                    <h3 className="text-3xl font-bold">
                                        {service.title}
                                    </h3>
                                    <ParagraphText color="white" text={service.description} />


                                    {service.features?.length > 0 && (
                                        <ul className="space-y-2 mt-4">
                                            {service.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 border border-white rounded-full"></div>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* <a href="/contact-us" className="mt-6 inline-block border px-6 py-2 rounded-full">
                                        Connect Experts
                                    </a> */}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}


















// import Image from "next/image";
// import ServicesTabs from "./ServicesTabs";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";


// export default function ServicesComponet({ servicesData }) {
//     return (
//         <section className="lg:py-16 py-10 bg-[#F5F5F9]">
//             <div className="w-full lg:px-4 xl:px-0">

//                 {/* Heading (SEO Friendly) */}
//                 <div className="space-y-2 text-center">
//                     <HeadingTwo color="black" text={servicesData.heading} />
//                     <ParagraphText color="black" text={servicesData.description} />
//                 </div>

//                 {/* Main Layout */}
//                 <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6 items-stretch">

//                     {/* ✅ Client Component handles interaction */}
//                     <ServicesTabs services={servicesData.services} />

//                     {/* ✅ Static Right Section (structure only) */}
//                     <div className="hidden lg:block w-[70%] h-[34rem] relative bg-gradient-to-r from-[#272868] to-[#5556D1] overflow-hidden">

//                         <Image
//                             src="https://www.comfygen.com/image/services-after-img.svg"
//                             alt="services background"
//                             width={200}
//                             height={200}
//                             className="absolute bottom-0 right-0 pointer-events-none"
//                         />

//                         {/* 👉 Content will be injected by client (no duplication) */}
//                         <div id="service-content-container" className="h-full" />
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }
