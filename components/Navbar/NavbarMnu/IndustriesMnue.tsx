// components/IndustriesMenu.tsx
import { Healthcare, Finance, Finance1, EcommerceApp, EducationApp } from "../navData";
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "../../ui/Button";
import styles from './IndustriesMnue.module.css';

const IndustriesMenu = ({ setActiveTab, activeTab, showNav, setShowNav, handleTabClick }: any) => {
    return (
        <div className={styles.industriesGroup}>
            <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className={styles.industriesButton}
                onMouseEnter={() => setActiveTab("Tab1")}
            >
                <span className={showNav === 2 ? styles.buttonTextActive : styles.buttonText}>
                    Industries
                </span>
                <ChevronDown className={styles.chevronIcon} size={18} />
            </button>

            <div className={styles.dropdownContainer}>
                <div className={styles.dropdownInner}>
                    <div className={styles.gridContainer}>
                        {/* Left Column - Main Categories */}
                        <div className={styles.leftColumn}>
                            <ul className={styles.categoryList}>
                                <li
                                    onClick={() => handleTabClick("Tab1")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab1" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/healthcare-app-dev-header-icon.svg"
                                        alt="Healthcare App Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Healthcare App Development</p>
                                        <span className={styles.categoryDesc}>Transforming Healthcare with Smart Apps</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab2")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab2" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/astrology-app-development/finance.svg"
                                        alt="Web3 Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Finance App Development</p>
                                        <span className={styles.categoryDesc}>Transforming Financial Ideas into Apps</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab3")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab3" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/navbar/education-app-development.svg"
                                        alt="education-app-development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Education App Development</p>
                                        <span className={styles.categoryDesc}>Customized Applications for Every Industry</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab4")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab4" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/navbar/ecommerce-development.svg"
                                        alt="ecommerce-development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Ecommerce Development</p>
                                        <span className={styles.categoryDesc}>Empowering Seamless Online Shopping</span>
                                    </div>
                                </li>

                                <Link
                                    onClick={() => handleTabClick("Tab5")}
                                    href="/dating-app-development"
                                    className={`${styles.categoryItem} ${activeTab === "Tab5" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/navbar/dating-app-development.svg"
                                        alt="dating-app-development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Dating App Development</p>
                                        <span className={styles.categoryDesc}>Smart Solutions for Digital Romance</span>
                                    </div>
                                </Link>
                            </ul>
                        </div>

                        {/* Middle Column - Dynamic Links */}
                        <div className={styles.middleColumn}>
                            {activeTab === "Tab1" && (
                                <ul className={styles.linkList}>
                                    {Healthcare.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {activeTab === "Tab2" && (
                                <ul className={styles.linkList}>
                                    {Finance.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {activeTab === "Tab3" && (
                                <ul className={styles.linkList}>
                                    {EducationApp?.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {activeTab === "Tab4" && (
                                <ul className={styles.linkList}>
                                    {EcommerceApp.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Third Column - Finance Secondary Links */}
                        <div className={`${styles.thirdColumn} ${activeTab === "Tab2" ? '' : styles.hidden}`}>
                            {activeTab === "Tab2" && (
                                <ul className={styles.linkList}>
                                    {Finance1.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Right Column - Promotional Banner */}
                        <div className={`${styles.rightColumn} ${activeTab === "Tab5" || activeTab === "Tab2" ? styles.hidden : ''}`}>
                            <a href="/contact-us" className={styles.promoLink}>
                                <Image
                                    src="https://www.comfygen.com/image/solutions-header-img.webp"
                                    alt="Solutions Header"
                                    height={486}
                                    width={511}
                                    className={styles.promoImage}
                                    loading="lazy"
                                />
                                <span className={styles.promoButtonWrapper}>
                                    <Button variant="secondary" radius="full" className={styles.promoButton}>
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

export default IndustriesMenu;

