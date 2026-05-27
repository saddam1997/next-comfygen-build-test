// components/Trending.tsx
import Image from "next/image";
import Link from "next/link";
import styles from './Trending.module.css';

const Trending = ({ trendingData = [], heading }: any) => {
  const data = trendingData.slice(0, 5);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.decorativeLine}></div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {data.map((token: any, index: number) => (
            <Link
              key={index}
              href={token?.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={styles.cardLink}
            >
              {/* Glow Background */}
              <div className={styles.glowBackground}></div>

              {/* Card */}
              <div className={styles.gradientBorder}>
                <div className={styles.card}>
                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageGlow}></div>
                    <Image
                      src={token.icon}
                      alt={token.alt || token.name}
                      width={900}
                      height={700}
                      className={styles.image}
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>

                  {/* Title */}
                  <p className={styles.title}>
                    {token.name}
                  </p>
                  
                  {/* Bottom Line Animation */}
                  <div className={styles.animationLine}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;

