"use client";

import { useState, useEffect, useRef } from "react";

export default function ServicesTabs({ services = [] }) {
  const [active, setActive] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Only run DOM manipulation after client mount to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const all = document.querySelectorAll(".service-content");
    all.forEach((el, i) => {
      if (i === active) {
        el.classList.remove("opacity-0", "pointer-events-none");
        el.classList.add("opacity-100");
      } else {
        el.classList.add("opacity-0", "pointer-events-none");
        el.classList.remove("opacity-100");
      }
    });
  }, [active, isMounted]);

  return (
    <div className="md:space-y-4 space-y-2 w-full lg:pr-6 lg:h-[35rem] lg:overflow-y-auto overflow-hidden lg:w-full">

      {services.map((service: any, index: number) => {
        const isActive = active === index;

        return (
          <div key={index}>
            <button
              onClick={() => setActive(index)}
              className={`border px-4 py-3 w-full font-medium text-left transition-colors duration-200 ${isActive
                  ? "text-[#5556D1] border-[#5556D1] bg-[#5556D1]/10"
                  : "text-black border-[#00000018] bg-white"
                }`}
            >
              {service.title}
            </button>

            {/* MOBILE VIEW — only rendered client-side (parent has ssr:false) */}
            {isActive && (
              <div className="block lg:hidden bg-gradient-to-r from-[#272868] to-[#5556D1] px-6 py-10 text-white">

                {service.subtitle && (
                  <p
                    className="text-sm mb-1 text-white/80"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: service.subtitle }}
                  />
                )}

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                {service.description && (
                  <p
                    className="text-sm text-white/90 leading-relaxed"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                )}

                {service.description1 && (
                  <p
                    className="text-sm mt-2 text-white/90"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: service.description1 }}
                  />
                )}

                {service.features?.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {service.features.map((f: any, i: number) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm"
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
            )}
          </div>
        );
      })}
    </div>
  );
}