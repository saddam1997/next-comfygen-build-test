// components/TechStacksClient.tsx
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from './TechStacksClient.module.css';

export default function TechStacksClient({ TabData, TechData, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = useCallback((tab: string) => {
    if (tab === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setActiveTab(tab);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [activeTab, isTransitioning]);

  return (
    <div className={styles.container}>
      {/* TABS */}
      <div className={styles.tabsWrapper}>
        {TabData.map((tab: string, index: number) => (
          <button
            key={index}
            onClick={() => handleTabChange(tab)}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.tabActive : styles.tabInactive
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FIXED HEIGHT CONTAINER (CLS FIX) */}
      <div className={styles.contentContainer}>
        {/* RENDER ALL, HIDE VIA CSS */}
        {TabData.map((tab: string, i: number) => {
          const techs = TechData.TechItems[tab] || [];
          const isActive = activeTab === tab;

          return (
            <div
              key={i}
              className={`${styles.techGrid} ${
                isActive ? styles.gridActive : styles.gridInactive
              }`}
            >
              {techs.map((tech: any, index: number) => (
                <div key={index} className={styles.techCard}>
                  <Image 
                    src={tech.img} 
                    alt={tech.name || "Technology icon"} 
                    width={40} 
                    height={40} 
                    className={styles.techImage}
                    loading="lazy"
                  />
                  <span className={styles.techName}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

