"use client";

import { useState, useEffect } from "react";
import style from "../scrollhidecss/scrollhide.module.css";

export default function ServicesTabs({ servicesData = [] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    servicesData.forEach((_, index) => {
      const el = document.getElementById(`service-content-${index}`);
      if (el) {
        el.style.display = index === active ? "block" : "none";
      }
    });
  }, [active, servicesData]);

  return (
    <div
      className={`${style.headScroll} md:space-y-4 space-y-2 w-full lg:pr-6 lg:h-[34rem] lg:overflow-y-auto overflow-hidden lg:w-[30%]`}
    >
      {servicesData.map((service, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`border px-4 py-3 w-full text-left ${
            index === active
              ? "text-[#5556D1] border-[#5556D1] bg-[#5556D1]/10"
              : "text-black border-[#00000018] bg-white"
          }`}
          dangerouslySetInnerHTML={{ __html: service.title }}
        />
      ))}
    </div>
  );
}