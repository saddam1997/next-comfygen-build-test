"use client";

import { company, company1 } from "../navData";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../../ui/Button";

import styles from "./CompanyMnue.module.css";

interface CompanyMenuProps {
  showNav: number;
  setShowNav: (value: number) => void;
}

const CompanyMenu = ({
  showNav,
  setShowNav,
}: any) => {
  return (
    <div className={styles.companyGroup}>
      <button
        onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
        className={styles.companyButton}
      >
        <span className={styles.buttonText}>Company</span>

        <ChevronDown
          size={18}
          className={`${styles.chevronIcon} ${
            showNav === 5 ? styles.chevronRotate : ""
          }`}
        />
      </button>

      <div
        className={`${styles.dropdownContainer} ${
          showNav === 5 ? styles.showDropdown : ""
        }`}
      >
        <div className={styles.dropdownInner}>
          <div className={styles.gridContainer}>
            {/* Left Column */}
            <div>
              <ul className={styles.menuList}>
                {company.map((elem: any, index: number) => {
                  const { name, img, dec, url } = elem;

                  return (
                    <li key={index}>
                      <a
                        href={url}
                        className={styles.menuItemLink}
                      >
                        <Image
                          src={img}
                          alt={name}
                          width={40}
                          height={40}
                          className={styles.menuImage}
                        />

                        <div className={styles.menuContent}>
                          <p className={styles.menuTitle}>
                            {name}
                          </p>

                          <span className={styles.menuDesc}>
                            {dec}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Middle Column */}
            <div>
              <ul className={styles.menuList}>
                {company1.map((elem: any, index: number) => {
                  const { name, img, dec, url } = elem;

                  return (
                    <li key={index}>
                      <a
                        href={url}
                        className={styles.menuItemLink}
                      >
                        <Image
                          src={img}
                          alt={name}
                          width={40}
                          height={40}
                          className={styles.menuImage}
                        />

                        <div className={styles.menuContent}>
                          <p className={styles.menuTitle}>
                            {name}
                          </p>

                          <span className={styles.menuDesc}>
                            {dec}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Column */}
            <div className={styles.promoColumn}>
              <a
                href="/contact-us"
                className={styles.promoLink}
              >
                <Image
                  src="https://www.comfygen.com/image/about-us-header-img.webp"
                  alt="Contact Us"
                  width={511}
                  height={486}
                  priority={false}
                  className={styles.promoImage}
                />

                <span className={styles.promoButtonWrapper}>
                  <Button
                    variant="secondary"
                    radius="full"
                    className="py-2 text-white rounded-full"
                  >
                    Connect to expert →
                  </Button>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMenu;