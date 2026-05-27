
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import TechStacksClient from "./TechStacksClient";
import styles from './index.module.css';

export default function TechStacks({ TabData, TechData, Default }) {
  const defaultTab = TabData[0]; // ✅ fixed

  return (
    <section className={styles.section}>

      <div className={styles.container}>
        <HeadingTwo color="white" text={TechData.heading} />
        <ParagraphText color="white" text={TechData.description} />
      </div>

      <TechStacksClient
        TabData={TabData}
        TechData={TechData}
        defaultTab={defaultTab}
      />

    </section>
  );
}
