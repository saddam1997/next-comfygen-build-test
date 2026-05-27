// components/HireDeveloper.tsx
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { parseHTMLString } from "../../lib/parseHTML";
import styles from './index.module.css';

const HireDeveloper = ({ HireDeveloper }: any) => {
  const { 
    heading, 
    text, 
    text1, 
    text2, 
    text3, 
    text4, 
    text5, 
    text6, 
    buttonText, 
    buttonLink, 
    imageSrc, 
    imageAlt, 
    listItems, 
    listheading 
  } = HireDeveloper;
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.contentWrapper}>
            <div className={styles.contentInner}>
              <div className={styles.textContent}>
                <HeadingTwo color={"white"} text={heading} />

                <div className={styles.descriptionWrapper}>
                  <ParagraphText color={"white"} text={text} />

                  {text1 && (
                    <ParagraphText color={"white"} text={text1} />
                  )}

                  {text2 && (
                    <ParagraphText color={"white"} text={text2} />
                  )}

                  {text3 && (
                    <ParagraphText color={"white"} text={text3} />
                  )}

                  {text4 && (
                    <ParagraphText color={"white"} text={text4} />
                  )}

                  {text5 && (
                    <ParagraphText color={"white"} text={text5} />
                  )}
                </div>

                {listheading && (
                  <div className={styles.listHeadingWrapper}>
                    <ParagraphText color={"white"} text={listheading} />
                  </div>
                )}

                {listItems?.length > 0 && (
                  <ul className={styles.listItems}>
                    {listItems.map((item: any, index: number) => (
                      <li key={index} className={styles.listItem}>
                        <div className={styles.listBullet}></div>
                        <div className={styles.listText}>
                          {parseHTMLString(item)}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.buttonWrapper}>
                <Link href={buttonLink} passHref>
                  <button className={styles.button}>
                    {buttonText} <ArrowUpRight className={styles.buttonIcon} />
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              {imageSrc ? (
                <Image
                  className={styles.image}
                  src={imageSrc}
                  alt={imageAlt || "Hire Developer"}
                  width={907}
                  height={762}
                  quality={85}
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 907px"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDeveloper;