import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  MdMenuOpen,
  MdMenu,
  MdAddCall,
} from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import styles from "./styles.module.css"

import ServicesMnue from "./NavbarMnu/ServicesMnue";
import SolutionsMnue from "./NavbarMnu/SolutionsMnue"
import IndustriesMnue from "./NavbarMnu/IndustriesMnue";
import SportsMnue from "./NavbarMnu/SportsMnue";
import CompanyMnue from "./NavbarMnu/CompanyMnue";


export default function DesktopNav(props: any) {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [showNav, setShowNav] = useState(0);
  const [menu] = useState(false);


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  function toggleSlideover() { }

  return (
    <div className={`fixed top-0 w-full bg-white z-50 max-w-[1600px] mx-auto`}>
      <div className="flex gap-6 justify-end mx-10">
        <p className="hidden lg:block">
          <a href="mailto:sales@comfygen.com" className="flex  pt-1 gap-2">
            <IoMdMail className=" mt-1" /> sales@comfygen.com
          </a>
        </p>

        <p className="hidden lg:block">
          <a
            className="flex pt-1 gap-1"
            href="https://api.whatsapp.com/send?phone=919587867258"
          >
            <MdAddCall className=" mt-1" />
            +91 9587867258
          </a>
        </p>
      </div>

      <nav className="flex items-center justify-between px-4 py-0  md:px-0 relative 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
        <div>
          <Link
            href="/"
            passHref={true}
            className="relative flex items-center flex-shrink-0 text-white"
          >
            <Image
              src="/svg/Logo1.svg"
              alt="comfygen-logo"
              width={244}
              height={51}
              priority
            />
          </Link>
        </div>
        <div>
          <div
            onClick={() => toggleSlideover()}
            className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 lg:hidden"
          >
            {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
          </div>
          <div
            className={
              "lg:flex hidden xl:w-auto w-full items-center text-white px-6 "
            }
          >
            <div className="block space-x-4 text-sm font-medium 2xl:space-x-4 lg:flex lg:items-center lg:space-y-0 lg:p-0">
              <div>
                <Link href="/" passHref={true}>
                  <span className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-black/100 text-black/80 ">
                    Home
                  </span>
                </Link>
              </div>

              <ServicesMnue
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                showNav={showNav}
                handleTabClick={handleTabClick}
                setShowNav={setShowNav}

              />

              <SolutionsMnue
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                showNav={showNav}
                handleTabClick={handleTabClick}
                setShowNav={setShowNav}
              />

              <IndustriesMnue
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                showNav={showNav}
                handleTabClick={handleTabClick}
                setShowNav={setShowNav}
              />

              <SportsMnue
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                showNav={showNav}
                handleTabClick={handleTabClick}
                setShowNav={setShowNav}
              />
              <CompanyMnue
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                showNav={showNav}
                handleTabClick={handleTabClick}
                setShowNav={setShowNav}
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:block ">
          <Link href="/contact-us" passHref={true}>
            <span className={`text-base font-medium text-white ${styles.head_button} rounded-full px-8 py-3.5 text-center hover:text-white  cursor-pointer transition duration-300 relative flex gap-3 items-center `}>
              Get a Quote
              <Image
                src="https://www.comfygen.com/image/button-arrow.svg"
                alt="button-arrow"
                height={24}
                width={24}
              />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
