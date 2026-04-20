import Image from "next/image";
const ServicesTabs = dynamic(() => import("./ServicesTabs"), {
    ssr: false, // 🚨 IMPORTANT
});
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import style from "./scrollhide.module.css"
import dynamic from "next/dynamic";

export default function ServicesComponet({ servicesData }) {
    return (
        <section className="bg-[#F5F5F9] min-h-[700px] sm:min-h-[650px] lg:min-h-[500px]">
            <div className="w-full  lg:py-16 lg:px-5 xl:px-10 2xl:px-0 py-10 ">

                {/* SEO Heading */}
                <div className="space-y-2 text-center">
                    <HeadingTwo color="black" text={servicesData.heading} />
                    <ParagraphText color="black" text={servicesData.description} />
                </div>

                {/* Layout */}
                <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6 ">

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

                        {/* ✅ ALL CONTENT RENDERED HERE (SEO WIN) */}
                        <div className="h-full relative">
                            {servicesData.services.map((service: any, index: any) => (
                                <div
                                    key={index}
                                    id={`service-${index}`}
                                    className={`service-content absolute inset-0 px-6 py-12 text-white `}
                                >
                                    <div className="space-y-4">

                                        <p>{service.subtitle}</p>

                                        <h3 className="text-3xl font-bold">
                                            {service.title}
                                        </h3>
                                        <ParagraphText color="white" text={service.description} />

                                        <p>{service.description1}</p>

                                        {service.features?.length > 0 && (
                                            <ul className="space-y-2 mt-4">
                                                {service.features.map((f: any, i: any) => (
                                                    <li key={i} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 border border-white rounded-full"></div>
                                                        <div dangerouslySetInnerHTML={{ __html: f }}></div>
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

// import Image from "next/image";
// import dynamic from "next/dynamic";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";

// // ✅ FIX: SSR TRUE (important)
// const ServicesTabs = dynamic(() => import("./ServicesTabs"), {
//     ssr: false,
// });

// export default function ServicesComponet({ servicesData }) {
//     return (
//         <section className="bg-[#F5F5F9]">

//             <div className="w-full py-10 lg:py-16 lg:px-5 xl:px-10 2xl:px-0">

//                 {/* HEADER */}
//                 <div className="space-y-2 text-center">
//                     <HeadingTwo color="black" text={servicesData.heading} />
//                     <ParagraphText color="black" text={servicesData.description} />
//                 </div>

//                 {/* LAYOUT */}
//                 <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6">

//                     {/* ✅ MOBILE SAFE WRAPPER */}
//                     <div className="w-full lg:w-[30%] min-h-[300px]">
//                         <ServicesTabs services={servicesData.services} />
//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className="hidden lg:block w-[70%]">

//                         {/* ✅ FIXED HEIGHT ONLY FOR DESKTOP */}
//                         <div className="h-[34rem] relative bg-gradient-to-r from-[#272868] to-[#5556D1] overflow-hidden">

//                             <Image
//                                 src="https://www.comfygen.com/image/services-after-img.svg"
//                                 alt="services background"
//                                 width={200}
//                                 height={200}
//                                 className="absolute bottom-0 right-0 pointer-events-none"
//                             />

//                             {/* CONTENT */}
//                             <div className="h-full relative">
//                                 {servicesData.services.map((service: any, index: any) => (
//                                     <div
//                                         key={index}
//                                         className={`absolute inset-0 px-6 py-12 text-white transition-opacity duration-300 ${index === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
//                                             }`}
//                                     >
//                                         <div className="space-y-4">

//                                             <p>{service.subtitle}</p>

//                                             <h3 className="text-3xl font-bold">
//                                                 {service.title}
//                                             </h3>

//                                             <ParagraphText
//                                                 color="white"
//                                                 text={service.description}
//                                             />

//                                             <p>{service.description1}</p>

//                                             {service.features?.length > 0 && (
//                                                 <ul className="space-y-2 mt-4">
//                                                     {service.features.map((f:any, i:any) => (
//                                                         <li key={i} className="flex items-center gap-2">
//                                                             <div className="w-2 h-2 border border-white rounded-full"></div>
//                                                             <div dangerouslySetInnerHTML={{ __html: f }} />
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             )}

//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }