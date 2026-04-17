"use client";

import { useState, useEffect, useCallback } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import Accordion from "./Accordion";
import Image from "next/image";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function MobileNavClient({ menuData }: any) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // ✅ Scroll lock without CLS
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <div className="h-[70px] fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <nav className="flex items-center justify-between h-full w-11/12 mx-auto">
        <Link href="/">
          <Image
            src="/svg/Logo1.svg"
            alt="Logo"
            width={160}
            height={50}
            priority
            className="w-fit"
          />
        </Link>

        <button onClick={toggle} className="p-2 bg-gray-100 rounded z-50">
          {open ? <MdMenuOpen size={24} /> : <MdMenu size={24} />}
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 transition-opacity duration-300 ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            onClick={toggle}
            className="absolute inset-0 bg-black/50"
          />

          <div
            className={`fixed right-0 top-0 h-screen w-80 bg-white transition-transform duration-300 flex flex-col
            ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="shrink-0 px-6 py-4 border-b bg-white">
              Menu
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
              <Link href="/" onClick={closeMenu}>
                <div className="flex p-3 px-6 space-x-2 hover:bg-gray-50 cursor-pointer">
                  <FiHome size={22} />
                  <span>Home</span>
                </div>
              </Link>

              {menuData.map((menu: any) => (
                <Accordion
                  key={menu.id}
                  data={menu}
                  active={active}
                  setActive={setActive}
                  onLinkClick={closeMenu}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}