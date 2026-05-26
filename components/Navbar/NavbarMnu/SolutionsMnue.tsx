// components/SolutionsMenu.tsx
import React, { useState, useEffect } from 'react';
import { Blockchain, Blockchain1, Metaverse, Token, Other, cryptoDevelopment, cryptoDevelopment1 } from "../navData";
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/Button';
import styles from './SolutionsMnue.module.css';

const SolutionsMenu = ({ setActiveTab, activeTab, showNav, setShowNav, handleTabClick }: any) => {
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
        <div className={`${styles.solutionsGroup} ${isOpen ? styles.open : ''}`}>
            <button
                onClick={handleToggle}
                onMouseEnter={handleMouseEnter}
                className={styles.solutionsButton}
            >
                <span className={showNav === 2 ? styles.buttonTextActive : styles.buttonText}>
                    Solutions
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
                                        src="https://www.comfygen.com/image/on-demand-mobile-header-icon.svg"
                                        alt="On Demand Mobile App"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>On Demand Mobile App</p>
                                        <span className={styles.categoryDesc}>Tailored Apps for Instant Needs</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab2")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab2" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/blockchain-app-dev-header-icon.svg"
                                        alt="Blockchain Solution"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Blockchain Solution</p>
                                        <span className={styles.categoryDesc}>Secure Your Digital Future</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab3")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab3" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/mobile-app-solutions-header-icon.svg"
                                        alt="Mobile App Solutions"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Mobile App Solutions</p>
                                        <span className={styles.categoryDesc}>Customized Applications for Every Industry</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab4")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab4" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/web3-deve-header-icon.svg"
                                        alt="Web3 Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Web3 Development</p>
                                        <span className={styles.categoryDesc}>Building the Future with Web3</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab5")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab5" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/navbar-img/crypto-development1.svg"
                                        alt="Crypto Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Crypto Development</p>
                                        <span className={styles.categoryDesc}>Innovate Your Crypto Vision</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Middle Column - Dynamic Links */}
                        <div className={styles.middleColumn}>
                            <div>
                                {activeTab === "Tab1" && (
                                    <ul className={styles.linkList}>
                                        {Blockchain.map((elem: any, index: any) => (
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
                                        {Other.map((elem: any, index: any) => (
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
                                        {Token.map((elem: any, index: any) => (
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
                                        {Metaverse.map((elem: any, index: any) => (
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

                                {activeTab === "Tab5" && (
                                    <ul className={styles.linkList}>
                                        {cryptoDevelopment.map((elem: any, index: any) => (
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
                        </div>

                        {/* Third Column - Secondary Links for Tab5 */}
                        <div className={`${styles.thirdColumn} ${activeTab === "Tab5" ? '' : styles.hidden}`}>
                            {activeTab === "Tab5" && (
                                <ul className={styles.linkList}>
                                    {cryptoDevelopment1.map((elem: any, index: any) => (
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

                        {/* Fourth Column - Secondary Links for Tab1 */}
                        <div className={`${styles.fourthColumn} ${activeTab === "Tab1" ? '' : styles.hidden}`}>
                            {activeTab === "Tab1" && (
                                <ul className={styles.linkList}>
                                    {Blockchain1.map((elem: any, index: any) => (
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
                        <div className={`${styles.rightColumn} ${activeTab === "Tab5" || activeTab === "Tab1" ? styles.hidden : ''}`}>
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

export default SolutionsMenu;