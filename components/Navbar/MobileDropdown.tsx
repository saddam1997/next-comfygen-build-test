"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type MenuItem = {
  name: string;
  url?: string;
  children?: MenuItem[];
};

type Props = {
  title: string;
  items: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileDropdown({
  title,
  items,
  setMenu,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b pb-4">
      {/* TITLE */}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-medium"
      >
        {title}

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* CONTENT */}

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden space-y-2">
          {items.map((item, index) => (
            <SubMenuItem
              key={index}
              item={item}
              setMenu={setMenu}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= SUB MENU ================= */

function SubMenuItem({
  item,
  setMenu,
}: {
  item: MenuItem;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [subOpen, setSubOpen] = useState(false);

  /* SIMPLE LINK */

  if (!item.children) {
    return (
      <Link
        href={item.url || "/"}
        onClick={() => setMenu(false)}
        className="block py-2 text-sm  hover:text-[#5556D1]"
      >
        {item.name}
      </Link>
    );
  }

  /* SUB MENU */

  return (
    <div className="border rounded-xl overflow-hidden">
      <button
        onClick={() => setSubOpen(!subOpen)}
        className="w-full flex items-center justify-between px-3 py-3 bg-gray-50"
      >
        <span className="text-sm font-medium">
          {item.name}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            subOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 overflow-hidden ${
          subOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-white">
          <div className="p-3 space-y-2">
            {item.children.map((child, index) => (
              <Link
                key={index}
                href={child.url || "/"}
                onClick={() => setMenu(false)}
                className="block text-sm text-gray-700 hover:text-[#5556D1]"
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}