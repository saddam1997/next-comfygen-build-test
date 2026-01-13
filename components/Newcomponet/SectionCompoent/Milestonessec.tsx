import React, { useState, useEffect, useRef } from "react";

const Milestonessec = () => {
  const sectionRef = useRef(null);

  /* ===== STATES ===== */
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [countryText, setCountryText] = useState("");

  /* ===== DATA ===== */
  const targetValues = {
    stat1: 8,
    stat2: 550,
    stat3: 400,
  };

  const countries = ["India", "USA", "UK", "Canada", "Australia"];

  /* ===== INTERSECTION OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCounts({ stat1: 0, stat2: 0, stat3: 0 });
          setCountryText("");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== NUMBER COUNTER (LCP SAFE) ===== */
  useEffect(() => {
    if (!isVisible) return;

    const delay = setTimeout(() => {
      const duration = 1800;
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = Object.keys(targetValues).map((key) => {
        let current = 0;
        const increment = targetValues[key] / steps;

        return setInterval(() => {
          current += increment;
          if (current >= targetValues[key]) {
            setCounts((prev) => ({ ...prev, [key]: targetValues[key] }));
            clearInterval(intervals[key]);
          } else {
            setCounts((prev) => ({
              ...prev,
              [key]: Math.floor(current),
            }));
          }
        }, stepDuration);
      });

      return () => intervals.forEach(clearInterval);
    }, 250); // LCP improvement

    return () => clearTimeout(delay);
  }, [isVisible]);

  /* ===== COUNTRY TYPING (NO CLS) ===== */
  useEffect(() => {
    if (!isVisible) return;

    let countryIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typing = setInterval(() => {
      const current = countries[countryIndex];

      if (!isDeleting) {
        setCountryText(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) isDeleting = true;
      } else {
        setCountryText(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          countryIndex = (countryIndex + 1) % countries.length;
        }
      }
    }, 150);

    return () => clearInterval(typing);
  }, [isVisible]);

  /* ===== CARD STYLE ===== */
  const cardClass = `
relative overflow-hidden py-8 text-center rounded-[8px] text-white
bg-gradient-to-t from-[#5556D1] via-indigo-900 to-blue-800
shadow-[0_8px_25px_rgba(85,86,209,0.35)]
`;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="milestones-heading"
      className="sm:hidden block bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 py-6 px-6"
    >
      {/* SEO HEADING */}
      <h2 id="milestones-heading" className="sr-only">
        Company Milestones and Global Presence
      </h2>

      <div className="max-w-6xl mx-auto space-y-4">

        {/* ===== TOP ROW ===== */}
        <div className="grid grid-cols-2 gap-4">
          <article
            className={cardClass}
            itemScope
            itemType="https://schema.org/QuantitativeValue"
          >
            <h3
              className="text-[27px] font-bold tabular-nums min-h-[34px]"
              itemProp="value"
            >
              {counts.stat1}+
            </h3>
            <p className="text-[18px]" itemProp="description">
              Years of Experience
            </p>
          </article>

          <article
            className={cardClass}
            itemScope
            itemType="https://schema.org/QuantitativeValue"
          >
            <h3
              className="text-[27px] font-bold tabular-nums min-h-[34px]"
              itemProp="value"
            >
              {counts.stat2}+
            </h3>
            <p className="text-[18px]" itemProp="description">
              Projects Delivered
            </p>
          </article>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="grid grid-cols-2 gap-4">
          <article
            className={cardClass}
            itemScope
            itemType="https://schema.org/QuantitativeValue"
          >
            <h3
              className="text-[27px] font-bold tabular-nums min-h-[34px]"
              itemProp="value"
            >
              {counts.stat3}+
            </h3>
            <p className="text-[18px]" itemProp="description">
              Happy Clients
            </p>
          </article>

          <article className={cardClass}>
            <h3 className="text-[24px] font-bold min-h-[32px] min-w-[140px] inline-block">
              {countryText}
              <span className="animate-pulse">|</span>
            </h3>
            <p className="text-[18px]">Countries Served</p>
          </article>
        </div>

      </div>
    </section>
  );
};

export default Milestonessec;