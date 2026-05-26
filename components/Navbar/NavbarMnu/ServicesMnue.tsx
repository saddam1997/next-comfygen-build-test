// components/ServicesMenu.tsx
import React, { useState, useEffect } from 'react';
import { MobileApp, Ai, BlockchainSer, coin, Healthcare, FullStackDev, Hire } from "../navData";
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/Button';
import styles from './ServicesMnue.module.css';

const ServicesMenu = ({ setActiveTab, activeTab, showNav, setShowNav, handleTabClick }: any) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleToggle = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setActiveTab("Tab1");
        }
    };

    return (
        <div className={`${styles.servicesGroup} ${isOpen ? styles.open : ''}`}>
            <button
                onClick={handleToggle}
                onMouseEnter={handleMouseEnter}
                className={styles.servicesButton}
            >
                <span className={showNav === 1 ? styles.buttonTextActive : styles.buttonText}>
                    Services
                </span>
                <ChevronDown className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`} size={18} />
            </button>

            <div className={`${styles.dropdownContainer} ${isOpen ? styles.dropdownOpen : ''}`}>
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
                                        src="https://www.comfygen.com/image/mobile-app-development-header-icon.svg"
                                        alt="mobile-app-development-header-icon"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Mobile App Development</p>
                                        <span className={styles.categoryDesc}>Innovative Solutions for Every Platform</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab7")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab7" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/ai-development-icon.svg"
                                        alt="AI Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>AI Development</p>
                                        <span className={styles.categoryDesc}>Best AI Development Service</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab2")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab2" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/blockchain-app-dev-header-icon.svg"
                                        alt="blockchain-app-dev-header-icon.svg"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Blockchain App Development</p>
                                        <span className={styles.categoryDesc}>Secure Blockchain-Based App Solutions</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab3")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab3" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/coin-and-tokens-dev-header-icon.svg"
                                        alt="Coin And Tokens Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Coin And Tokens Development</p>
                                        <span className={styles.categoryDesc}>Custom Cryptocurrency Creation Made Easy</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab5")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab5" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/full-stack-dev-header-icon.svg"
                                        alt="Full Stack Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Full Stack Development</p>
                                        <span className={styles.categoryDesc}>In-depth End-to-End Development Services</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab6")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab6" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/hire-dedicated-dev-header-icon.svg"
                                        alt="Hire Dedicated Developers"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Hire Dedicated Developers</p>
                                        <span className={styles.categoryDesc}>Skilled Developers for Your Projects</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Middle Column - Dynamic Links */}
                        <div className={styles.middleColumn}>
                            <div>
                                {activeTab === "Tab1" && (
                                    <div className={styles.linkList}>
                                        {MobileApp.map((elem: any, index: any) => (
                                            <Link
                                                key={index}
                                                className={styles.link}
                                                onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                                                href={elem.url}
                                            >
                                                {elem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "Tab2" && (
                                    <ul className={styles.linkList}>
                                        {BlockchainSer.map((elem: any, index: any) => (
                                            <li key={index} className={styles.linkItem}>
                                                <Link
                                                    onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
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
                                        {coin.map((elem: any, index: any) => (
                                            <li key={index} className={styles.linkItem}>
                                                <Link
                                                    onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
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
                                        {Healthcare.map((elem: any, index: any) => (
                                            <li key={index} className={styles.linkItem}>
                                                <Link
                                                    onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                                                    href={elem.url}
                                                    className={styles.link}
                                                >
                                                    {elem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {activeTab === "Tab5" && (
                                    <ul className={styles.linkList}>
                                        {FullStackDev.map((elem: any, index: any) => (
                                            <li key={index} className={styles.linkItem}>
                                                <Link
                                                    onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                                                    href={elem.url}
                                                    className={styles.link}
                                                >
                                                    {elem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {activeTab === "Tab6" && (
                                    <ul className={styles.linkList}>
                                        {Hire.map((elem: any, index: any) => (
                                            <li key={index} className={styles.linkItem}>
                                                <Link
                                                    onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                                                    href={elem.url}
                                                    className={styles.link}
                                                >
                                                    {elem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {activeTab === "Tab7" && (
                                    <ul className={styles.linkList}>
                                        {Ai.map((elem: any, index: any) => (
                                            <li key={index} className={styles.linkItem}>
                                                <Link
                                                    onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
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
                        </div>

                        {/* Right Column - Promotional Banner */}
                        <div className={styles.rightColumn}>
                            <a href="/contact-us" className={styles.promoLink}>
                                <Image
                                    src="https://www.comfygen.com/image/mobile-app-development-services-img.webp"
                                    alt="Mobile App Development Services"
                                    height={475}
                                    width={452}
                                    className={styles.promoImage}
                                    loading="lazy"
                                    priority={false}
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

export default ServicesMenu;