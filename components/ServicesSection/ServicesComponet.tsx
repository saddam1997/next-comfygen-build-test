// components/ServicesComponent.tsx
import Image from "next/image";
import { useState, useEffect } from "react";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import ServicesTabs from "./ServicesTabs";
import styles from "./ServicesComponent.module.css";

export default function ServicesComponent({ servicesData }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SEO Heading */}
        <div className={styles.headerWrapper}>
          <HeadingTwo color="black" text={servicesData.heading} />
          <ParagraphText color="black" text={servicesData.description} />
        </div>

        {/* Layout */}
        <div className={styles.layout}>
          {/* LEFT: Tabs */}
          <div className={styles.leftColumn}>
            <ServicesTabs
              services={servicesData.services}
              active={active}
              setActive={setActive}
            />
          </div>

          {/* RIGHT: ALL CONTENT SSR */}
          <div className={`${styles.rightColumn} ${isMobile ? styles.hidden : styles.visible}`}>
            <Image
              src="https://www.comfygen.com/image/services-after-img.svg"
              alt="services background"
              width={150}
              height={90}
              priority
              className={styles.backgroundImage}
            />

            <div className={styles.contentWrapper}>
              {/* ✅ ALL CONTENT RENDERED (SEO WIN) */}
              {servicesData.services.map((service: any, index: number) => (
                <div
                  key={index}
                  className={`${styles.serviceContent} ${
                    index === active ? styles.activeContent : styles.inactiveContent
                  }`}
                >
                  <div className={styles.serviceInner}>
                    {service.subtitle && (
                      <p
                        className={styles.subtitle}
                        dangerouslySetInnerHTML={{ __html: service.subtitle }}
                      />
                    )}

                    <h3 className={styles.title}>
                      {service.title}
                    </h3>

                    {service.description && (
                      <p
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: service.description }}
                      />
                    )}

                    {service.description1 && (
                      <p
                        className={styles.description1}
                        dangerouslySetInnerHTML={{ __html: service.description1 }}
                      />
                    )}

                    {service.features?.length > 0 && (
                      <ul className={styles.featuresList}>
                        {service.features.map((f: string, i: number) => (
                          <li key={i} className={styles.featureItem}>
                            <div className={styles.featureBullet} />
                            <div
                              className={styles.featureText}
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




















// import Image from "next/image";
// import { useState } from "react";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";
// import ServicesTabs from "./ServicesTabs";

// export default function ServicesComponet({ servicesData }) {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="bg-[#F5F5F9]">
//       <div className="w-full lg:py-16 lg:px-5 xl:px-10 py-10">

//         {/* SEO Heading */}
//         <div className="space-y-2 text-wrap lg:text-center lg:px-0 px-2">
//           <HeadingTwo color="black" text={servicesData.heading} />
//           <ParagraphText color="black" text={servicesData.description} />
//         </div>

//         {/* Layout */}
//         <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6">

//           {/* LEFT: Tabs */}
//           <div className="w-full lg:w-[30%]">
//             <ServicesTabs
//               services={servicesData.services}
//               active={active}
//               setActive={setActive}
//             />
//           </div>

//           {/* RIGHT: ALL CONTENT SSR */}
//           <div className="hidden lg:block w-[70%] h-[34rem] relative bg-gradient-to-r from-[#272868] to-[#5556D1] overflow-hidden">

//             <Image
//               src="https://www.comfygen.com/image/services-after-img.svg"
//               alt="services background"
//               width={150}
//               height={90}
//               priority
//               className="absolute bottom-0 right-0 w-36 h-36"
//             />

//             <div className="h-full relative">

//               {/* ✅ ALL CONTENT RENDERED (SEO WIN) */}
//               {servicesData.services.map((service:any, index:any) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 px-6 py-12 text-white ${
//                     index === active
//                       ? "opacity-100 z-10"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                 >
//                   <div className="space-y-4">

//                     {service.subtitle && (
//                       <p
//                         dangerouslySetInnerHTML={{ __html: service.subtitle }}
//                       />
//                     )}

//                     <h3 className="text-3xl font-bold">
//                       {service.title}
//                     </h3>

//                     {service.description && (
//                       <p
//                         className="text-white/90 text-sm"
//                         dangerouslySetInnerHTML={{ __html: service.description }}
//                       />
//                     )}

//                     {service.description1 && (
//                       <p
//                         dangerouslySetInnerHTML={{ __html: service.description1 }}
//                       />
//                     )}

//                     {service.features?.length > 0 && (
//                       <ul className="space-y-2 mt-4">
//                         {service.features.map((f, i) => (
//                           <li key={i} className="flex gap-2">
//                             <div className="w-2 h-2 border border-white rounded-full mt-2" />
//                             <div
//                               dangerouslySetInnerHTML={{ __html: f }}
//                             />
//                           </li>
//                         ))}
//                       </ul>
//                     )}

//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


