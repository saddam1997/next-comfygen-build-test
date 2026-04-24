import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { SquareChevronLeft, Menu, PhoneMissed, Mail } from 'lucide-react';

import styles from "./styles.module.css";

import ServicesMnue from "./NavbarMnu/ServicesMnue";
import SolutionsMnue from "./NavbarMnu/SolutionsMnue";
import IndustriesMnue from "./NavbarMnu/IndustriesMnue";
import CompanyMnue from "./NavbarMnu/CompanyMnue";

/* ================= NAVBAR ================= */

export default function DesktopNav() {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [showNav, setShowNav] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  return (
    <>
      {/* ================= HEADER SHELL (FIXED CLS SYSTEM) ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white ">

        {/* ================= TOP BAR (STABILIZED) ================= */}
        <div className="hidden max-w-[1600px] mx-auto  lg:block ">
          <div className="lg:flex justify-end gap-6 px-6 py-2 text-sm text-gray-700">
            <a href="mailto:sales@comfygen.com" className="flex items-center gap-2 font-medium">
              <Mail size={20} />
              sales@comfygen.com
            </a>

            <a
              className="flex items-center gap-2 font-medium"
              href="https://api.whatsapp.com/send?phone=919587867258"
            >
              <PhoneMissed size={15} />
              +91 9587867258
            </a>
          </div>
        </div>

        {/* ================= MAIN NAV ================= */}
        <nav className="w-full max-w-[1600px] mx-auto px-4 lg:px-6 flex items-center justify-between h-[70px]">

          {/* LOGO (CLS FIXED) */}
          <Link href="/" className="flex items-center">
            <div className="h-[42px] w-[180px] relative">
              <Image
                src="/svg/Logo1.svg"
                alt="comfygen-logo"
                width={144}
                height={48}
                priority
                sizes="180px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden max-w-7xl mx-auto lg:flex items-center gap-6 text-sm font-medium">
            <Link href="/">
              <span className="cursor-pointer text-black/80 hover:text-black">
                Home
              </span>
            </Link>

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

            {/* <SportsMnue setActiveTab={setActiveTab} activeTab={activeTab} showNav={showNav} handleTabClick={handleTabClick} setShowNav={setShowNav} /> */}

            <CompanyMnue
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              showNav={showNav}
              handleTabClick={handleTabClick}
              setShowNav={setShowNav}
            />
          </div>

          {/* CTA BUTTON */}
          <div className="hidden xl:block">
            <Link href="/contact-us">
              <span
                className={`text-white px-6 py-3 rounded-full flex items-center gap-2 ${styles.head_button}`}
              >
                Get a Quote
                <Image
                  src="https://www.comfygen.com/image/button-arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (STABLE HEIGHT) */}
          <button
            className="lg:hidden p-2 rounded bg-gray-100 text-gray-700"
            onClick={() => setMenu(!menu)}
            aria-label="menu"
          >
            {menu ? <SquareChevronLeft size={26} /> : <Menu size={26} />}
          </button>

        </nav>
      </header>

      {/* ================= RESERVED SPACE (CRITICAL CLS FIX) ================= */}
      <div className="h-[70px] lg:h-[100px]" />
    </>
  );
}