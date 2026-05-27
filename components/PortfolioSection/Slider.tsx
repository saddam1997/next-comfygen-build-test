// components/Slider.tsx
import { useRef, useEffect, useState } from "react";
import Card from "./Card";
import styles from './Slider.module.css';

export default function Slider({ Portfoliodata }: any) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const isScrollable = container.scrollWidth > container.clientWidth;
        setShowButtons(isScrollable);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    
    return () => window.removeEventListener('resize', checkScrollable);
  }, [Portfoliodata]);

  const scrollToCard = (dir: "next" | "prev") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const card = container.querySelector(`.${styles.slideItem}`) as HTMLElement;
    if (!card) return;

    const gap = 10;
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const slides = Portfoliodata?.portfolio ?? [];

  return (
    <div className={styles.container}>
      {/* SLIDER */}
      <div 
        ref={sliderRef} 
        className={styles.sliderContainer}
        style={{ scrollBehavior: "smooth" }}
      >
        {slides.map((item: any, i: number) => (
          <div 
            key={`${item.title}-${i}`} 
            className={styles.slideItem}
          >
            <Card item={item} isActive={true} />
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      {showButtons && slides.length > 1 && (
        <div className={styles.buttonWrapper}>
          <button 
            className={styles.navButton} 
            onClick={() => scrollToCard("prev")}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            className={styles.navButton} 
            onClick={() => scrollToCard("next")}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

