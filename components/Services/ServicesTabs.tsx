// components/ServicesTabs.tsx
// "use client";

import { useState, useMemo, useCallback } from "react";
import ServiceContent from "./ServiceContent";

export default function ServicesTabs({ services = [] }: any) {
  const [active, setActive] = useState(0);

  // ✅ memoized active service
  const activeService = useMemo(() => {
    return services[active];
  }, [active, services]);

  // ✅ stable handler
  const handleClick = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-10">

      {/* LEFT TABS */}
      <nav
        className="lg:w-[30%] space-y-2"
        aria-label="Services Tabs"
      >
        {services.map((service: any, index: number) => {
          const isActive = active === index;

          return (
            <button
              key={service.id || index}
              onClick={() => handleClick(index)}
              className={`w-full text-left px-4 py-3 border rounded-md transition ${
                isActive
                  ? "bg-blue-100 border-blue-500 text-blue-600"
                  : "bg-white border-gray-200"
              }`}
              aria-selected={isActive}
            >
              {service.title}
            </button>
          );
        })}
      </nav>

      {/* RIGHT CONTENT */}
      <div className="lg:w-[70%] bg-gradient-to-r from-[#272868] to-[#5556D1] text-white p-6 rounded-lg">

        {activeService && (
          <ServiceContent service={activeService} />
        )}

      </div>
    </div>
  );
}