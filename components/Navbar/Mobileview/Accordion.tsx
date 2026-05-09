

import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

const Accordion = ({ data, active, setActive, onLinkClick }: any) => {
  const isOpen = active === data.id;
  const [activeSub, setActiveSub] = useState<number | null>(null);

  return (
    <div className="border-b border-gray-100">

      {/* HEADER */}
      <button
        onClick={() => setActive(isOpen ? 0 : data.id)}
        className={`flex w-full justify-between items-center px-6 py-3 text-left transition-colors
        ${isOpen ? "bg-blue-50 text-blue-600" : ""}`}
      >
        <div className="flex items-center gap-2 min-h-[24px]">

          {/* ICON SPACE RESERVED */}
          <div className="w-4 h-4 relative shrink-0">
            <Image
              src={data.icon}
              alt=""
              fill
              sizes="16px"
              className="object-contain"
            />
          </div>

          <span className="text-sm font-medium">{data.title}</span>
        </div>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* MAIN CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-3">

          {data.sections.map((section: any) => {
            const isSubOpen = activeSub === section.id;

            return (
              <div key={section.id}>

                {/* SUB HEADER */}
                <button
                  onClick={() =>
                    setActiveSub(isSubOpen ? null : section.id)
                  }
                  className={`flex w-full justify-between items-center py-2 text-left
                  ${isSubOpen ? "font-semibold text-black" : ""}`}
                >
                  <span className="text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    {section.label}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isSubOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* SUB ITEMS */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isSubOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 space-y-2 text-sm pt-1">

                    {section.items.map((item: any) => (
                      <li key={item.url}>
                        <Link
                          href={item.url}
                          onClick={onLinkClick}
                          className="block py-1 hover:translate-x-2 transition"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}

                  </ul>
                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
};

export default Accordion;





