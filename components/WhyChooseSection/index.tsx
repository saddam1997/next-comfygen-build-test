// components/WhyChoose.tsx
import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { Button } from "../ui/Button";
import styles from './index.module.css';

const WhyChoose = ({ pageData }: any) => {
    const { title, description, mainCardData, gridData } = pageData;
    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header Section */}
                <div className={styles.headerWrapper}>
                    <div className={styles.headerContent}>
                        <HeadingTwo color={"black"} text={title} />
                        {description && (
                            <ParagraphText color={"black"} text={description} />
                        )}
                    </div>
                    <div className={styles.buttonWrapper}>
                        <a href="https://api.whatsapp.com/send?phone=919587867258" className={styles.buttonLink}>
                            <Button variant="secondary" radius="full" className={styles.connectButton}>
                                Connect to expert →
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Grid Section */}
                <div className={styles.gridContainer}>
                    {/* Main Card - Desktop Only */}
                    <div className={styles.mainCard}>
                        <Image
                            src={mainCardData?.imageUrl}
                            alt={mainCardData?.title || "Why Choose Us"}
                            fill
                            className={styles.mainCardImage}
                            sizes="(min-width: 1024px) 25vw"
                            loading="lazy"
                            fetchPriority="low"
                        />
                        <div className={styles.mainCardContent}>
                            <span className={styles.mainCardTitle}>
                                {mainCardData.title}
                            </span>
                            {mainCardData.description && (
                                <ParagraphText color={"white"} text={mainCardData.description} />
                            )}
                            <div className={styles.mainCardButtonWrapper}>
                                <a href="/contact-us">
                                    <button className={styles.mainCardButton}>
                                        Get in Touch
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Items */}
                    <div className={styles.gridItemsWrapper}>
                        <div className={styles.gridItems}>
                            {gridData.slice(0, 6).map((item: any, index: number) => (
                                <div key={index} className={styles.gridItem}>
                                    <div className={styles.gridItemContent}>
                                        <h3 className={styles.gridItemTitle}>{item.title}</h3>
                                        {item.description && (
                                            <ParagraphText color={"black"} text={item.description} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;

