// components/BlogSection.tsx
import Image from "next/image";
import React from "react";
import { ChevronRight } from 'lucide-react';
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { parseHTMLString } from "../../lib/parseHTML";
import styles from './BlogSection.module.css';

export default function BlogSection(props: any) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ================= HEADING ================= */}
        <div className={styles.headingWrapper}>
          <div className={styles.headingContent}>
            <HeadingTwo color={"black"} text="Our Latest Blog" />
            <ParagraphText color={"black"} text="We have the knowledge and skills to work on diverse niches with
              high-performing solutions. Get insights about the tech revolutions
              and their significance through our updated blogs." />
          </div>
        </div>

        {/* ================= BLOG LIST ================= */}
        <div className={styles.blogList}>
          {props?.initialData?.length > 0 &&
            props.initialData.map((element: any, index: number) =>
              element ? (
                <a
                  href={element?.link}
                  key={index}
                  className={styles.blogLink}
                >
                  <article className={styles.blogCard}>

                    {/* IMAGE */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={element?.og_image}
                        alt={element?.title}
                        width={1280}
                        height={720}
                        quality={70}
                        loading="lazy"
                        fetchPriority="low"
                        placeholder="empty"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className={styles.blogContent}>
                      <h3 className={styles.blogTitle}>
                        {parseHTMLString(element?.title)}
                      </h3>
                      {element?.description && (
                        <p className={styles.blogDescription}>
                          {parseHTMLString(element.description)}
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <div className={styles.blogCta}>
                      <span className={styles.blogCtaText}>
                        Learn More <ChevronRight size={22} />
                      </span>
                    </div>
                  </article>
                </a>
              ) : null
            )}
        </div>
      </div>
    </section>
  );
}