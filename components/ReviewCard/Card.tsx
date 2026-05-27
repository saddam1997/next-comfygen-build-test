// components/Card.tsx
import Image from "next/image";
import Link from "next/link";
import ParagraphText from "../ui/ParagraphText";
import styles from './Card.module.css';

export default function Card({ item }: any) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        {/* Top Section */}
        <div className={styles.cardTop}>
          {/* Header */}
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>
              {item.name}
            </h3>
            <p className={styles.cardLocation}>{item.location}</p>
          </div>

          {/* Content */}
          <p className={styles.cardText}>
            {item.text}
          </p>
        </div>

        {/* Bottom Badge */}
        <div className={styles.cardBadge}>
          <Link
            href={item.URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={styles.badgeLink}
          >
            <Image
              src={item.image}
              alt={item.Source}
              width={80}
              height={40}
              className={styles.badgeImage}
            />
            <p className={styles.badgeText}>
              Review
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}