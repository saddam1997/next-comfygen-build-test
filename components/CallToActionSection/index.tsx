// components/CallToAction.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import styles from './CallToAction.module.css';

export default function CallToAction({ CallToAction }: any) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* ===== Main Content ===== */}
                <div className={styles.contentWrapper}>
                    {/* ===== Text Section ===== */}
                    <div className={styles.textSection}>
                        <HeadingTwo color={"white"} text={CallToAction?.heading} />
                        <ParagraphText color={"white"} text={CallToAction?.text} />

                        <div className={styles.buttonWrapper}>
                            <Link
                                href={CallToAction?.buttonLink || "#"}
                                className={styles.button}
                            >
                                {CallToAction?.buttonText}
                                <ArrowUpRight className={styles.buttonIcon} />
                            </Link>
                        </div>
                    </div>

                    {/* ===== Image Section ===== */}
                    <div className={styles.imageSection}>
                        <Image
                            src={CallToAction?.imageSrc}
                            alt={CallToAction?.imageAlt || "Call to action image"}
                            width={400}
                            height={225}
                            loading="lazy"
                            fetchPriority="low"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
