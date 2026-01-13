import React, { useState, useEffect, useRef } from "react";

const StatsCounter = () => {
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const sectionRef = useRef(null);

  const targetValues = {
    stat1: 35,
    stat2: 2500,
    stat3: 2000,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          Object.keys(targetValues).forEach((key) => {
            let current = 0;
            const increment = targetValues[key] / steps;

            const interval = setInterval(() => {
              current += increment;
              if (current >= targetValues[key]) {
                setCounts((prev) => ({ ...prev, [key]: targetValues[key] }));
                clearInterval(interval);
              } else {
                setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
              }
            }, stepDuration);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const cardClass =
    "bg-[#5556D1] rounded-2xl py-10 text-center text-white shadow-xl";

  return (
    <section
      ref={sectionRef}
      className="hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto space-y-6">

        {/* ===== TOP ROW (ALWAYS 2 CARDS) ===== */}
        <div className="grid grid-cols-2 gap-4">
          <div className={cardClass}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {counts.stat1}+
            </h2>
            <p className="text-sm sm:text-base mt-2">
              Industry Excellence
            </p>
          </div>

          <div className={cardClass}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {counts.stat2}+
            </h2>
            <p className="text-sm sm:text-base mt-2">
              Empowered Clients
            </p>
          </div>
        </div>

        {/* ===== BOTTOM ROW (SINGLE CARD) ===== */}
        <div className={cardClass}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {counts.stat3}+
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Digital Solutions Launched
          </p>
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;
