// components/ProcessSlider.tsx
import { useState, useEffect } from "react";
import HeadingThree from "../ui/HeadingThree";
import ParagraphText from "../ui/ParagraphText";
import styles from './ProcessSlider.module.css';

interface SlideContent {
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides: SlideContent[];
}

const ProcessSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  if (!slides || slides.length === 0) {
    return <p className={styles.fallback}>No slides available</p>;
  }

  const handlePrev = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || isAnimating) return;

    const touchCurrentX = e.touches[0].clientX;
    const diffX = touchStartX - touchCurrentX;

    // Swipe left
    if (diffX > 50) {
      handleNext();
      setTouchStartX(null);
    }

    // Swipe right
    if (diffX < -50) {
      handlePrev();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <div
      className={styles.sliderContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slideWrapper}>
        <div className={`${styles.slideContent} ${isAnimating ? styles.slideAnimating : ''}`}>
          <HeadingThree color={"white"} text={slides[currentIndex].title} />
          <ParagraphText color={"white"} text={slides[currentIndex].description || ""} />
        </div>
      </div>

      <div className={styles.navigationDots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dotButton} ${
              index === currentIndex ? styles.dotActive : styles.dotInactive
            }`}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 300);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProcessSlider;