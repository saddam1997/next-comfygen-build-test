import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import CommonImage from '../comman/CommonImage';

// Default slider data
const defaultSliderData = [
  {
    imgSrc: "https://www.comfygen.com/image/industries-ecommerce-img.webp",
    title: "E-Commerce",
    description: "Revolutionizing online shopping with feature-rich, secure, and user-friendly mobile app solutions.",
    link: "/e-commerce-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-healthcare-img.webp",
    title: "Healthcare",
    description: "Empowering health services with innovative, patient-centric healthcare app development for better outcomes.",
    link: "/healthcare-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-blockchain-img.webp",
    title: "Blockchain",
    description: "Transforming industries with secure, transparent, and decentralized blockchain app development solutions.",
    link: "/blockchain-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-education-img.webp",
    title: "Education",
    description: "Enhancing learning experiences with interactive, engaging, and scalable education apps.",
    link: "/ca/education-app-development-company"
  },
  {
    imgSrc: "https://www.comfygen.com/image/transportation-industries-img.webp",
    title: "Transportation",
    description: "Simplifying travel with seamless, efficient transportation app innovations."
  },

  {
    imgSrc: "https://www.comfygen.com/image/construction-industries-img.webp",
    title: "Construction",
    description: "Driving project efficiency with modern construction management and planning applications."
  },
  {
    imgSrc: "https://www.comfygen.com/image/game-industries-img.webp",
    title: "Game",
    description: "Creating immersive, engaging gaming experiences with cutting-edge app development technologies.",
    link: "/game-development-company"
  },
  {
    imgSrc: "https://www.comfygen.com/image/entertainment-industries-img.webp",
    title: "Entertainment",
    description: "Innovating entertainment platforms with personalized, accessible digital experiences."
  },
  {
    imgSrc: "https://www.comfygen.com/image/social-media-app-industries-img.webp",
    title: "Social Media App",
    description: "Connecting users worldwide through innovative, feature-rich social media app solutions.",
    link: "/social-media-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/finance-industries-img.webp",
    title: "Finance",
    description: "Delivering secure, user-friendly financial apps tailored to modern customer needs.",
    link: "/finance-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/dating-industries-img.webp",
    title: "Dating",
    description: "Crafting intuitive dating platforms to foster meaningful connections seamlessly.",
    link: "/dating-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/restaurant-industries-img.webp",
    title: "Restaurant industries",
    description: "Enhancing dining experiences with user-focused, efficient restaurant management and ordering apps.",
    link: "/food-delivery-app-development"
  }
];





function IndustriesServe({
  heading,
  description,
  sliderData = [],
}) {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  /* ================= REFS ================= */
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const isDragging = useRef(false);
  const isInteracting = useRef(false);

  const startX = useRef(0);
  const prevTranslate = useRef(0);
  const currentTranslate = useRef(0);

  const autoPlayRef = useRef(null);

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 680) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(4);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ================= SYNC POSITION ================= */
  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const slideWidth = containerRef.current.offsetWidth / slidesToShow;
    prevTranslate.current = -current * slideWidth;
    currentTranslate.current = prevTranslate.current;

    trackRef.current.style.transition = "transform 0.45s ease";
    trackRef.current.style.transform = `translate3d(${prevTranslate.current}px,0,0)`;
  }, [current, slidesToShow]);

  /* ================= AUTOPLAY ================= */
  const startAutoPlay = () => {
    if (autoPlayRef.current) return;
    autoPlayRef.current = setInterval(() => {
      if (isInteracting.current) return;
      next();
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  /* ================= NAV ================= */
  const next = () => {
    setCurrent((p) => {
      const max = sliderData.length - slidesToShow;
      return p >= max ? 0 : p + 1;
    });
  };

  const prev = () => {
    setCurrent((p) => {
      const max = sliderData.length - slidesToShow;
      return p <= 0 ? max : p - 1;
    });
  };

  /* ================= SNAP ================= */
  const snap = () => {
    const slideWidth = containerRef.current.offsetWidth / slidesToShow;
    const moved = currentTranslate.current - prevTranslate.current;
    const threshold = slideWidth * 0.25;

    if (moved < -threshold) next();
    else if (moved > threshold) prev();
    else {
      trackRef.current.style.transition = "transform 0.45s ease";
      trackRef.current.style.transform = `translate3d(${prevTranslate.current}px,0,0)`;
    }

    isInteracting.current = false;
    startAutoPlay();
  };

  /* ================= DESKTOP DRAG ================= */
  const onMouseDown = (e) => {
    isDragging.current = true;
    isInteracting.current = true;
    stopAutoPlay();

    startX.current = e.clientX;
    trackRef.current.style.transition = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    snap();
  };

  /* ================= TOUCH ================= */
  const onTouchStart = (e) => {
    isInteracting.current = true;
    stopAutoPlay();
    startX.current = e.touches[0].clientX;
    trackRef.current.style.transition = "none";
  };

  const onTouchMove = (e) => {
    const diff = e.touches[0].clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
  };

  const onTouchEnd = () => snap();

  /* ================= RENDER ================= */
  return (
    <section className="lg:py-5 py-10">
      <div className="mx-auto max-w-[1440px] xl:w-5/6 w-11/12 bg-[#F5F5F9] md:py-14 py-8 md:px-10 px-6 rounded-3xl">

        {/* HEADER */}
        <div className="flex justify-between gap-4 mb-6">
          <div className="space-y-2">
            <h2 className="text-3xl xl:text-4xl font-bold text-[#212121]">
              {heading}
            </h2>
            <p className="text-base xl:text-lg text-[#212121]">
              {description}
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <button onClick={prev} aria-label="Previous">
              <ChevronLeft />
            </button>
            <button onClick={next} aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div ref={trackRef} className="flex items-stretch will-change-transform">
            {sliderData.map((item, i) => (
              <div
                key={i}
                className="px-3 flex-shrink-0"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="h-full min-h-[420px] bg-white border rounded-lg p-4 flex flex-col hover:shadow-lg transition-shadow">
                  <CommonImage
                    src={item.imgSrc}
                    alt={item.title}
                    width={640}
                    height={360}
                    className="rounded-lg object-cover"
                  />
                  <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                  <div
                    className="text-sm text-[#212121] mt-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: sliderData.length }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                current === i ? "w-6 bg-[#5556D1]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesServe;














