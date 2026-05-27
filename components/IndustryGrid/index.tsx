// components/IndustryGrid.tsx
import Link from "next/link";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import styles from './IndustryGrid.module.css';

const industries = [
  { name: "Healthcare", icon: "🏥", link: "https://www.comfygen.com/healthcare-app-development" },
  { name: "Banking", icon: "🏦", link: "https://www.comfygen.com/banking-software-development" },
  { name: "Insurance", icon: "📜", link: "https://www.comfygen.com/insurance-app-development" },
  { name: "Finance", icon: "💰", link: "https://www.comfygen.com/finance-app-development" },
  { name: "eCommerce", icon: "🛒", link: "https://www.comfygen.com/ecommerce" },
  { name: "Logistics & Transportation", icon: "🚚", link: "https://www.comfygen.com/logistics-app-development" },
  { name: "Education", icon: "🎓", link: "https://www.comfygen.com/ca/education-app-development-company" },
  { name: "Gaming", icon: "🎮", link: "https://www.comfygen.com/game-development-company" },
  { name: "Dating", icon: "💘", link: "https://www.comfygen.com/dating-app-development" },
  { name: "Entertainment and media", icon: "🎬", link: "https://www.comfygen.com/social-media-app-development" },
  { name: "Food & Restaurant", icon: "🍔", link: "https://www.comfygen.com/food-delivery-app-development" },
  { name: "Beauty & Lifestyle", icon: "💄", link: "https://www.comfygen.com/salon-app-development" },
];

export default function IndustryGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <HeadingTwo color={"black"} text={"Industries We Serve – Comfygen Technologies"} />
          <ParagraphText
            color={"black"}
            text={
              "At Comfygen Technologies, we deliver innovative digital solutions for various industries, helping businesses leverage AI, Blockchain, and modern app development."
            }
          />

          {/* Decorative line */}
          <div className={styles.decorativeLine}></div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {industries.map((item, index) => (
            <Link
              href={item?.link}
              key={index}
              className={styles.cardLink}
            >
              {/* Glow Background */}
              <div className={styles.glowBackground}></div>

              {/* Gradient Border */}
              <div className={styles.gradientBorder}>
                {/* Card */}
                <div className={styles.card}>
                  {/* Icon Wrapper */}
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconGlow}></div>
                    <div className={styles.iconContainer}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={styles.cardTitle}>
                    {item.name}
                  </h3>

                  {/* Bottom Animation Line */}
                  <div className={styles.animationLine}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

