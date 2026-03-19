"use client";

import { useState, useEffect } from "react";
import { parseHTMLString } from "../../lib/parseHTML"

export default function ServicesTabs({ services = [] }) {
  const [active, setActive] = useState(0);

  // ✅ Inject content into right side (NO re-render whole layout)
  useEffect(() => {
    const container = document.getElementById("service-content-container");

    if (container && services[active]) {
      container.innerHTML = generateHTML(services[active]);
    }
  }, [active, services]);

  return (
    <div className="md:space-y-4 space-y-2 w-full lg:pr-6 lg:h-[35rem] lg:overflow-y-auto overflow-hidden lg:w-[30%]">

      {services.map((service, index) => {
        const isActive = active === index;

        return (
          <div key={index}>
            <button
              onClick={() => setActive(index)}
              className={`border px-4 py-3 w-full font-medium text-left ${isActive
                ? "text-[#5556D1] border-[#5556D1] bg-[#5556D1]/10"
                : "text-black border-[#00000018] bg-white"
                }`}

            >
              {parseHTMLString(service.title)}

            </button>

            {/* ✅ Mobile Content */}
            {isActive && (
              <div className="block lg:hidden bg-gradient-to-r from-[#272868] to-[#5556D1]">
                <MobileServiceContent service={service} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


function generateHTML(service: any) {
  return `
    <div class="flex items-start px-6 py-12 text-white h-full">
      <div class="space-y-4 w-full">

        <p>${service.subtitle || ""}</p>

        <h3 class="text-3xl font-bold">
          ${service.title}
        </h3>

        <p>${service.description || ""}</p>
        <p>${service.description1 || ""}</p>

        ${service.features?.length
      ? `
          <ul class="space-y-2 mt-4">
            ${service.features
        .map(
          (f: any) => `
              <li class="flex items-center gap-2">
                <div class="w-2 h-2 border border-white rounded-full"></div>
                <span>${f}</span>
              </li>`
        )
        .join("")}
          </ul>`
      : ""
    }

        <a href="/contact-us" class="mt-6 inline-block border px-6 py-2 rounded-full">
          Connect Experts
        </a>

      </div>
    </div>
  `;
}


function MobileServiceContent({ service }) {
  return (
    <div className="px-6 py-10 text-white">
      <p>{service.subtitle}</p>

      <h3 className="text-2xl font-bold">
        {parseHTMLString(service.title)}

      </h3>

      <p>{parseHTMLString(service.description)}</p>

      {service.features?.length > 0 && (
        <ul className="space-y-2 mt-4">
          {service.features.map((feature:any, index:any) => (
            <li key={index}>
              <p >{parseHTMLString(feature)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}










// "use client";

// import { useState, useEffect, useRef } from "react";
// import style from "./scrollhide.module.css";

// export default function ServicesTabs({ servicesData = [] }) {

//   const [active, setActive] = useState<number | null>(null);
//   const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // ✅ Detect desktop on mount
//   useEffect(() => {
//     if (window.innerWidth >= 1024) {
//       setActive(0); // desktop default open
//     }
//   }, []);

//   // Desktop toggle
//   useEffect(() => {
//     servicesData.forEach((_, index) => {
//       const el = document.getElementById(`service-content-${index}`);
//       if (el) {
//         el.style.display = index === active ? "block" : "none";
//       }
//     });
//   }, [active, servicesData]);

//   return (
//     <div
//       className={`${style.headScroll} md:space-y-4 space-y-2 w-full lg:pr-6 lg:h-[35rem] lg:overflow-y-auto overflow-hidden lg:w-[30%]`}
//     >
//       {servicesData.map((service, index) => (
//         <div
//           key={index}
//           ref={(el) => {
//             tabRefs.current[index] = el;
//           }}
//         >
//           <button
//             onClick={() =>
//               setActive(active === index ? null : index) // mobile toggle
//             }
//             className={`border px-4 py-3 w-full font-medium text-left  ${
//               index === active
//                 ? "text-[#5556D1] border-[#5556D1] bg-[#5556D1]/10"
//                 : "text-black border-[#00000018] bg-white"
//             }`}
//             dangerouslySetInnerHTML={{ __html: service.title }}
//           />

//           {/* MOBILE CONTENT */}
//           {index === active && (
//             <div className="block lg:hidden bg-gradient-to-r from-[#272868] to-[#5556D1]">
//               <MobileServiceContent service={service} />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// function MobileServiceContent({ service }) {
//   return (
//     <div className="px-6 py-10 text-white">
//       <p>{service.subtitle}</p>

//       <h3
//         className="text-2xl font-bold"
//         dangerouslySetInnerHTML={{ __html: service.title }}
//       />

//       <p dangerouslySetInnerHTML={{ __html: service.description }} />
//       <p dangerouslySetInnerHTML={{ __html: service.description1 }} />

//       {service.features?.length > 0 && (
//         <ul className="space-y-2 mt-4">
//           {service.features.map((feature:any, index:any) => (
//             <li key={index}>
//               <p dangerouslySetInnerHTML={{ __html: feature }} />
//             </li>
//           ))}
//         </ul>
//       )}

//       <a
//         href="/contact-us"
//         className="mt-6 inline-block border px-6 py-2 rounded-full"
//       >
//         Connect Experts
//       </a>
//     </div>
//   );
// }