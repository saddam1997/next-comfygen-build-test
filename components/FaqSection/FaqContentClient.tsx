// components/FaqSectionClient.tsx
import { useState } from "react";
import { Star } from 'lucide-react';
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import styles from './FaqSectionClient.module.css';

export default function FaqSectionClient({
  title = "Frequently Asked Questions",
  description = "",
  Data = [],
}) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // ✅ Normalize list (STABLE)
  const normalizeList = (item: any) =>
    [
      item.li1,
      item.li2,
      item.li3,
      item.li4,
      item.li5,
      item.li6,
      item.li7,
    ].filter(Boolean);

  if (!Array.isArray(Data) || Data.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>

          {/* Heading */}
          <div className={styles.header}>
            <HeadingTwo
              color="black"
              text={title?.trim() || "Frequently Asked Questions"}
            />
            {description && (
              <ParagraphText color="black" text={description} />
            )}
          </div>

          {/* FAQ */}
          <div className={styles.faqList}>
            {Data.map((item: any, index: number) => {
              const isOpen = currentIndex === index;
              const listItems = normalizeList(item);

              return (
                <div
                  key={item.id || item.title || `faq-${index}`}
                  className={styles.faqItem}
                >
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex(isOpen ? null : index)
                    }
                    className={`${styles.faqButton} ${
                      isOpen ? styles.faqButtonActive : styles.faqButtonInactive
                    }`}
                  >
                    <h3 className={styles.faqTitle}>
                      {item.title}
                    </h3>

                    <span
                      className={`${styles.faqIcon} ${
                        isOpen ? styles.faqIconRotated : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className={`${styles.faqContent} ${
                      isOpen ? styles.faqContentOpen : styles.faqContentClosed
                    }`}
                  >
                    <div className={styles.faqContentInner}>

                      {/* TEXT */}
                      {item.desc && <p dangerouslySetInnerHTML={{ __html: item.desc }} />}
                      {item.dec1 && <p dangerouslySetInnerHTML={{ __html: item.dec1 }} />}
                      {item.dec2 && <p dangerouslySetInnerHTML={{ __html: item.dec2 }} />}
                      {item.dec3 && <p dangerouslySetInnerHTML={{ __html: item.dec3 }} />}

                      {/* ✅ FINAL FIX (NO hydration issue) */}
                      {listItems.length > 0 && (
                        <ul className={styles.faqListDisc}>
                          {listItems.map((li: string, i: number) => (
                            <li key={`${item.id || index}-${i}`} dangerouslySetInnerHTML={{ __html: li }} />
                          ))}
                        </ul>
                      )}

                      {/* Nested Cards */}
                      {item.cards?.length > 0 && (
                        <div className={styles.nestedCards}>
                          {item.cards.map((card: any, i: number) => (
                            <div key={`card-${index}-${i}`} className={styles.nestedCard}>
                              {card.CardItem && (
                                <h4 className={styles.nestedCardTitle}>
                                  {card.CardItem}
                                </h4>
                              )}

                              {card.CardDec && <p className={styles.nestedCardDec}>{card.CardDec}</p>}

                              {card.items?.length > 0 && (
                                <ul className={styles.nestedCardList}>
                                  {card.items.map((li: string, j: number) => (
                                    <li key={`item-${i}-${j}`} className={styles.nestedCardItem}>
                                      <Star className={styles.nestedCardIcon} />
                                      <span>{li}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}