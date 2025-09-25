"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { TbComponents, TbLogout2, TbPageBreak } from "react-icons/tb";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdFolder, MdKeyboardAlt } from "react-icons/md";

interface SidebarProps {
  setSelectedPage: (pageName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedPage }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);

    const savedPage = sessionStorage.getItem("selectedPage");
    if (savedPage) {
      setSelectedPage(savedPage);
    }
  }, [setSelectedPage]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    if (isMounted) {
      window.sessionStorage.removeItem("adminUser");
      router.push("/super-admin/login");
    }
  };

  const navigateTo = (path: string, pageName: string) => {
    if (isMounted) {
      setSelectedPage(pageName);
      sessionStorage.setItem("selectedPage", pageName);
      router.push(path);
    }
  };

  return (
    <div>
      <div className=" md:hidden">
        <button onClick={toggleSidebar} className="text-white text-3xl relative z-50">
          <HiMenuAlt2 className="text-red-600" />
        </button>
      </div>

      <div
        className={`py-4 px-5 min-w-80 h-screen overflow-y-auto bg-[#131327] md:block ${isOpen ? "block" : "hidden"}`} >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <div className="">
              <img width={240} height={50} src="/svg/comfygen-logo01.svg" alt="" />
            </div>
          </div>

          <div className="mt-10  space-y-4">
            <div
              className={`py-2.5 flex items-center md:text-lg text-base px-4 duration-300 cursor-pointer hover:bg-white/20 gap-2 font-medium ${pathname === "/super-admin/page-manag" ? "bg-white text-[#131327] rounded-md" : "text-white"}`}
              onClick={() => navigateTo("/super-admin/page-manag", "Page Management")}
            >
              <TbPageBreak size={22} />
              <span className="">
                Page Management
              </span>
            </div>
            <div
              className={`py-2.5 flex items-center md:text-lg text-base px-4 duration-300 cursor-pointer hover:bg-white/20 gap-2 font-medium ${pathname === "/super-admin/meta-component" ? "bg-white text-[#131327] rounded-md" : "text-white"}`}
              onClick={() => navigateTo("/super-admin/meta-component", "Meta Component Management")}
            >
              <TbComponents size={22} />
              <span className="">
                Component Management
              </span>
            </div>
            <div
              className={`py-2.5 flex items-center md:text-lg text-base px-4 duration-300 cursor-pointer hover:bg-white/20 gap-2 font-medium ${pathname === "/super-admin/meta-keys" ? "bg-white text-[#131327] rounded-md" : "text-white"}`}
              onClick={() => navigateTo("/super-admin/meta-keys", "Meta Keys Management")}
            >
              <MdKeyboardAlt size={22} />
              <span className="">
                Meta Keys
              </span>
            </div>
            <div
              className={`py-2.5 flex items-center md:text-lg text-base px-4 duration-300 cursor-pointer hover:bg-white/20 gap-2 font-medium ${pathname === "/super-admin/media-library" ? "bg-white text-[#131327] rounded-md" : "text-white"}`}
              onClick={() => navigateTo("/super-admin/media-library", "Media Library")}
            >
              <MdFolder size={22} />
              <span className="">
                Media Library
              </span>
            </div>
          </div>

          {/* <div
            className={`p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-white/20 ${pathname === "/adminmanagement" ? "bg-white/20" : "text-white"}`}
            onClick={() => navigateTo("/adminmanagement", "Admin Management")}
          >
            <RiUser3Line />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Admin Management
            </span>
          </div>
          <div
            className={`p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-white/20 ${pathname === "/empty" ? "bg-white/20" : "text-white"}`}
          >
            <LuGraduationCap />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Empty</span>
          </div> */}
        </div>

        <div
          className="py-2.5 flex items-center md:text-lg text-base px-4 font-medium cursor-pointer hover:bg-white/20 text-white gap-2 "
          onClick={handleLogout}
        >
          <TbLogout2 size={22} />
          <span className="">
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;