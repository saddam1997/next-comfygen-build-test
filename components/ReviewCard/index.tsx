// components/TestimonialsSlider.tsx
import { useState, useEffect } from "react";
import HeadingTwo from "../ui/HeadingTwo";
import Card from "./Card";
import styles from './index.module.css';

const Index = ({ testimonials }: any) => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // ✅ Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);   // mobile
      else setSlidesToShow(2);                           // tablet + desktop
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials?.Review?.length || 0;
  const maxIndex = Math.max(totalSlides - slidesToShow, 0);

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.header}>
          <HeadingTwo color="black" text={testimonials?.heading} />
        </div>

        {/* Slider */}
        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${(current * 100) / slidesToShow}%)`,
            }}
          >
            {testimonials?.Review?.map((item: any, i: number) => (
              <div
                key={i}
                className={styles.slide}
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className={styles.buttonWrapper}>
          <button
            onClick={prev}
            className={styles.navButton}
          >
            ←
          </button>
          <button
            onClick={next}
            className={styles.navButton}
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Index;