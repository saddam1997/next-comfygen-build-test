

import { useState, useEffect, useCallback } from "react";
import { Menu, SquareChevronLeft, House} from 'lucide-react';
import Accordion from "./Accordion";
import Image from "next/image";
import Link from "next/link";


export default function MobileNavClient({ menuData }: any) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <div className="sticky top-0 left-0 w-full h-[70px] bg-white z-50 shadow-sm">
        <nav className="flex items-center justify-between h-full w-11/12 mx-auto">

          <Link href="/">
            <Image
              src="/svg/Logo1.svg"
              alt="Logo"
              width={160}
              height={50}
              priority
              
            />
          </Link>

          <button
            onClick={toggle}
            className="p-2 bg-gray-100 rounded z-50"
          >
            {open ? <SquareChevronLeft size={24} /> : <Menu size={24} />}
          </button>

        </nav>
      </div>
      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-40">

          <div
            onClick={toggle}
            className="absolute inset-0 bg-black/50"
          />

          <div className="absolute right-0 top-0 h-screen w-80 bg-white shadow-lg flex flex-col">

            <div className="px-6 py-4 border-b bg-white">
              Menu
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-gray-100">

              <Link href="/" onClick={closeMenu}>
                <div className="flex p-3 px-6 space-x-2 hover:bg-gray-50 cursor-pointer">
                  <House size={22} />
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
      )}
    </>
  );
}