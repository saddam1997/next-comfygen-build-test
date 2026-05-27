import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeadingThree from "../ui/HeadingThree";
import ParagraphText from "../ui/ParagraphText";
import { Button } from "../ui/Button";
import styles from './Card.module.css';

const Card = ({ item, isActive }: any) => {
  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive : styles.cardInactive}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={item.title}
          width={700}
          height={450}
          className={styles.image}
          draggable={false}
          loading="lazy"
          fetchPriority="low"
        />
      </div>

      <div className={styles.contentWrapper}>
        <HeadingThree color="black" text={item.title} />
        <ParagraphText color="black" text={item.description} />

        <Link
          href={item.link}
          aria-label={`View ${item.title} case study`}
          className={styles.buttonLink}
        >
          <Button variant="outline" className={styles.button}>
            View Portfolio 
            <span className={styles.buttonArrow}>→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Card);













