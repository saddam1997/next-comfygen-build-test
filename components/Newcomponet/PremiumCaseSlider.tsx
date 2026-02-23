import { useState, useEffect, useRef } from "react";
import { caseStudies } from "./caseStudies"



export default function CaseStudySection() {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isPinned, setIsPinned] = useState(false);


    const sectionRef = useRef<HTMLDivElement | null>(null);
    const tabsRef = useRef<HTMLDivElement | null>(null);

    const switchTab = (idx: number) => {
        if (idx === active || animating) return;

        setAnimating(true);
        setActive(idx);

        setTimeout(() => {
            setAnimating(false);
        }, 500); // match animation duration
    };

    /* ---------------------------
       Detect section in viewport
    ----------------------------*/
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsPinned(entry.isIntersecting);
            },
            { threshold: 0.8 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);



    /* ---------------------------
       Handle wheel
    ----------------------------*/
    useEffect(() => {
        let ticking = false;

        const handleWheel = (e: WheelEvent) => {
            if (!isPinned) return;

            if (animating) {
                e.preventDefault();
                return;
            }

            if (ticking) {
                e.preventDefault();
                return;
            }

            if (e.deltaY > 40 && active < caseStudies.length - 1) {
                e.preventDefault();
                ticking = true;
                switchTab(active + 1);
            }
            else if (e.deltaY < -40 && active > 0) {
                e.preventDefault();
                ticking = true;
                switchTab(active - 1);
            }

            requestAnimationFrame(() => {
                ticking = false;
            });
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [active, animating, isPinned]);

    const study = caseStudies[active];

  return (
  <section
    ref={sectionRef}
    className="min-h-screen flex items-center bg-black text-white justify-center relative overflow-hidden scroll-smooth px-4"
  >
    <div className="w-full">

      {/* Heading Section */}
      <div className="max-w-7xl mx-auto space-y-4 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          Industries We Serve As Best Mobile App Development Company
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl mx-auto">
          Comfygen provides custom web and mobile app development solutions across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success.
        </p>
      </div>

      {/* Tabs */}
      <div
        ref={tabsRef}
        className="mb-5 overflow-x-auto py-6 scrollbar-hide min-w-max mx-auto text-center"
      >
        <div className="flex border-b border-white/20 min-w-max mx-auto text-center">
          {caseStudies.map((s, i) => (
            <button
              key={s.id}
              onClick={() => switchTab(i)}
              className={`relative whitespace-nowrap px-4 sm:px-5 pt-2 pb-3 text-sm sm:text-base transition-colors`}
            >
              {s.label}
              {active === i && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t"
                  style={{ backgroundColor: study.accent }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Card */}
      <div
        className={`w-full max-w-[960px] h-auto sm:h-[360px] mx-auto rounded-2xl relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          animating
            ? "opacity-0 translate-y-6 scale-[0.98]"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${study.bg})` }}
        />

        <div className="absolute inset-0 bg-black/60 rounded-2xl" />

        <div className="relative z-10 p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold pt-10 sm:pt-28">
            {study.label}
          </h2>

          <p
            className="text-sm sm:text-base text-white/80 mt-4"
            dangerouslySetInnerHTML={{ __html: study.description }}
          />
        </div>
      </div>

    </div>
  </section>
);
}