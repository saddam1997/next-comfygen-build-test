// components/ServiceContent.tsx
import React from "react";
import { parseHTMLString } from "../../lib/parseHTML"

const ServiceContent = React.memo(({ service }: any) => {
  return (
    <div className="space-y-4">

      {service.subtitle && (
        <p className="text-sm opacity-80">{service.subtitle}</p>
      )}

      <h3 className="text-xl lg:text-2xl font-bold">
        {service.title}
      </h3>

      <p>{parseHTMLString(service.description)}</p>

      {service.features?.length > 0 && (
        <ul className="space-y-2 mt-4">
          {service.features.map((f: string, i: number) => (
            <li key={i} className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full border border-white"></span>
              <span>{parseHTMLString(f)}</span>
            </li>
          ))}
        </ul>
      )}

      <a
        href="/contact-us"
        className="inline-block mt-4 border px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
      >
        Connect Experts
      </a>

    </div>
  );
});

export default ServiceContent;