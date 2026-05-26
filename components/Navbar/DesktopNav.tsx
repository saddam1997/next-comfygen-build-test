"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  SquareChevronLeft,
  Menu,
  PhoneMissed,
  Mail,
} from "lucide-react";

import ServicesMnue from "./NavbarMnu/ServicesMnue";
import SolutionsMnue from "./NavbarMnu/SolutionsMnue";
import IndustriesMnue from "./NavbarMnu/IndustriesMnue";
import CompanyMnue from "./NavbarMnu/CompanyMnue";
import MobileMenu from "./MobileMenu";
import { Button } from "../ui/Button";

import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [showNav, setShowNav] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  return (
    <>
      <header className={styles.header}>
        {/* TOP BAR */}

        <div className={styles.topBarWrapper}>
          <div className={styles.topBar}>
            <a
              href="mailto:sales@comfygen.com"
              className={styles.topLink}
              aria-label="Send email to Comfygen"
            >
              <Mail size={18} />
              <span>sales@comfygen.com</span>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=919587867258"
              className={styles.topLink}
              aria-label="Call Comfygen"
            >
              <PhoneMissed size={16} />
              <span>+91 9587867258</span>
            </a>
          </div>
        </div>

        {/* MAIN NAV */}

        <nav className={styles.navbar}>
          {/* LOGO */}

          <Link
            href="/"
            className={styles.logoLink}
            aria-label="Comfygen Home"
          >
            <div className={styles.logoWrapper}>
              <Image
                src="/svg/Logo1.svg"
                alt="Comfygen Logo"
                fill
                priority
                fetchPriority="high"
                quality={90}
                sizes="(max-width: 768px) 180px, 260px"
                className={styles.logo}
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}

          <div className={styles.desktopMenu}>
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
            <CompanyMnue
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              showNav={showNav}
              handleTabClick={handleTabClick}
              setShowNav={setShowNav}
            />
          </div>

          {/* CTA */}

          <div className={styles.ctaWrapper}>
            <Link href="/contact-us">
              <Button
                variant="secondary"
                radius="full"
                className={styles.ctaButton}
              >
                Get a Quote →
              </Button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            className={styles.mobileToggle}
            onClick={() => setMenu(!menu)}
            aria-label="Toggle Menu"
            aria-expanded={menu}
          >
            {menu ? (
              <SquareChevronLeft size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}

      <MobileMenu menu={menu} setMenu={setMenu} />

      {/* HEADER SPACE */}

      <div className={styles.headerSpace} />
    </>
  );
}

