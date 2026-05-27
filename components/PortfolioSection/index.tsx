// components/Portfolio.tsx
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import Slider from "./Slider";
import SliderWrapper from "./SliderWrapper";
import styles from './index.module.css';

export default function Portfolio({ Portfoliodata }) {
  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <HeadingTwo color="black" text={Portfoliodata?.heading} />
        <ParagraphText color="black" text={Portfoliodata?.description} />
      </section>
   
      <SliderWrapper Portfoliodata={Portfoliodata} />
    </div>
  );
}

