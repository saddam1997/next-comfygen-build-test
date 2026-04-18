import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import CommonImage from '../comman/CommonImage';

// Default slider data
const defaultSliderData = [
  {
    imgSrc: "https://www.comfygen.com/image/industries-ecommerce-img.webp",
    title: "E-Commerce",
    description: "We develop scalable eCommerce websites and <a href='https://www.comfygen.com/e-commerce-app-development' class='text-blue-600 font-semibold'>marketplace app development solutions</a> with secure payment gateways, inventory management, omnichannel selling, and conversion-optimized user experiences.",
    link: "/e-commerce-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-healthcare-img.webp",
    title: "Healthcare",
    description: "We deliver secure and compliant <a href='https://www.comfygen.com/healthcare-app-development'>healthcare mobile apps</a> and medical software development solutions including telemedicine apps, EHR systems, fitness apps, and patient management platforms.",
    link: "/healthcare-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-blockchain-img.webp",
    title: "Blockchain",
    description: "We deliver secure, transparent, and decentralized <a href='https://www.comfygen.com/blockchain-development' class='text-blue-600 font-semibold'>blockchain app development solutions<a/> including smart contracts, dApps, crypto wallets, NFT marketplaces, and enterprise blockchain platforms for future-ready digital ecosystems.",
    link: "/blockchain-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-education-img.webp",
    title: "Education",
    description: "We build interactive and scalable <a href='https://www.comfygen.com/ca/education-app-development-company' class='text-blue-600 font-semibold'>education apps<a/> and <a href='https://www.comfygen.com/e-learning-app-development' class='text-blue-600 font-semibold'>eLearning app development</a> solutions such as LMS systems, virtual classrooms, <a href='https://www.comfygen.com/tutor-app-development' class='text-blue-600 font-semibold'>Tutor apps</a>, and AI-powered digital education platforms.",
    link: "/ca/education-app-development-company"
  },
  {
    imgSrc: "https://www.comfygen.com/image/transportation-industries-img.webp",
    title: "Transportation & Logistics",
    description: "We specialize in <a href='https://www.comfygen.com/taxi-app-development-company' class='text-blue-600 font-semibold'>taxi app development</a> and <a href='https://www.comfygen.com/logistics-app-development' class='text-blue-600 font-semibold'>logistics app solutions</a> such as Uber-like taxi booking apps, fleet and driver management systems, GPS tracking, and real-time ride monitoring  for modern mobility businesses."
  },

  {
    imgSrc: "https://www.comfygen.com/image/construction-industries-img.webp",
    title: "Real Estate",
    description: "We deliver <a href='https://www.comfygen.com/smart-contract-development' class='text-blue-600 font-semibold'>real estate smart contract development</a> solutions designed to streamline project planning, resource management, workflow automation, and team collaboration through intelligent, scalable technologies."
  },
  {
    imgSrc: "https://www.comfygen.com/image/game-industries-img.webp",
    title: "Gaming & Sports",
    description: "We build immersive and scalable <a href='https://www.comfygen.com/game-development-company' class='text-blue-600 font-semibold'>game app development</a> solutions including mobile games, multiplayer gaming platforms, real-time gaming apps, and cloud-based gaming solutions.",
    link: "/game-development-company"
  },
  {
    imgSrc: "https://www.comfygen.com/image/entertainment-industries-img.webp",
    title: "Entertainment & Media",
    description: "We develop innovative entertainment and <a href='https://www.comfygen.com/social-media-app-development' class='text-blue-600 font-semibold'>social media app development solutions</a> such as OTT platforms, video streaming apps, music apps, and content distribution systems."
  },
 
  {
    imgSrc: "https://www.comfygen.com/image/finance-industries-img.webp",
    title: "Finance & FinTech",
    description: "We deliver secure and compliant <a href='https://www.comfygen.com/finance-app-development' class='text-blue-600 font-semibold'>fintech app development solutions</a> including digital wallets, payment gateways, banking apps, financial analytics platforms, and <a href='https://www.comfygen.com/portfolio/blockchain-based-fintech-app' class='text-blue-600 font-semibold'>blockchain-based finance systems</a>.",
    link: "/finance-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/dating-industries-img.webp",
    title: "Dating",
    description: "We design secure and user-friendly matrimonial and <a href='https://www.comfygen.com/dating-app-development' class='text-blue-600 font-semibold'>dating app development solutions</a> with matchmaking algorithms, real-time messaging, and profile verification features.",
    link: "/dating-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/restaurant-industries-img.webp",
    title: "Restaurant & FoodTech",
    description: "We build smart restaurant management and <a href='https://www.comfygen.com/food-delivery-app-development' class='text-blue-600 font-semibold'>food delivery app development solutions</a> including online ordering systems, <a href='https://www.comfygen.com/billing-software-development' class='text-blue-600 font-semibold'>POS integration</a>, table reservation apps, and customer loyalty platforms.",
    link: "/food-delivery-app-development"
  }
];

const DEFAULT_HEADING = "Industries We Serve As Best Mobile App Development Company";
const DEFAULT_DESCRIPTION = "Comfygen provides custom web and mobile app development solutions across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success.";


function IndustriesServe({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  sliderData = defaultSliderData,
}:any) {


    // Helper function to get final heading
  const getFinalHeading = () => {
    if (heading === undefined || heading === null) return DEFAULT_HEADING;
    if (heading.trim() === "") return DEFAULT_HEADING;
    return heading;
  };

  // Helper function to get final description
  const getFinalDescription = () => {
    if (description === undefined || description === null) return DEFAULT_DESCRIPTION;
    if (description.trim() === "") return DEFAULT_DESCRIPTION;
    return description;
  };
  /* ================= STATE ================= */
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // SSR-safe default
  

  /* ================= REFS ================= */
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const isInteracting = useRef(false);
  const startX = useRef(0);
  const prevTranslate = useRef(0);
  const currentTranslate = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);


   // Get final values
  const finalHeading = getFinalHeading();
  const finalDescription = getFinalDescription();


  /* ================= MOUNT GUARD ================= */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ================= RESPONSIVE (CLIENT ONLY) ================= */
  useEffect(() => {
    if (!mounted) return;

    const resize = () => {
      if (window.innerWidth < 680) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(4);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [mounted]);

  /* ================= POSITION SYNC ================= */
  useEffect(() => {
    if (!mounted || !containerRef.current || !trackRef.current) return;

    const slideWidth = containerRef.current.offsetWidth / slidesToShow;
    prevTranslate.current = -current * slideWidth;
    currentTranslate.current = prevTranslate.current;

    trackRef.current.style.transition = "transform 0.45s ease";
    trackRef.current.style.transform = `translate3d(${prevTranslate.current}px,0,0)`;
  }, [current, slidesToShow, mounted]);

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (!mounted) return;

    autoPlayRef.current = setInterval(() => {
      if (isInteracting.current) return;
      next();
    }, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [mounted, slidesToShow]);

  /* ================= NAV ================= */
  const next = () => {
    setCurrent((p) => {
      const max = Math.max(0, sliderData.length - slidesToShow);
      return p >= max ? 0 : p + 1;
    });
  };

  const prev = () => {
    setCurrent((p) => {
      const max = Math.max(0, sliderData.length - slidesToShow);
      return p <= 0 ? max : p - 1;
    });
  };

  /* ================= DRAG ================= */
  const snap = () => {
    if (!containerRef.current) return;

    const slideWidth = containerRef.current.offsetWidth / slidesToShow;
    const moved = currentTranslate.current - prevTranslate.current;
    const threshold = slideWidth * 0.25;

    if (moved < -threshold) next();
    else if (moved > threshold) prev();
    else {
      trackRef.current!.style.transition = "transform 0.45s ease";
      trackRef.current!.style.transform = `translate3d(${prevTranslate.current}px,0,0)`;
    }

    isInteracting.current = false;
  };

  const onMouseDown = (e:any) => {
    isDragging.current = true;
    isInteracting.current = true;
    startX.current = e.clientX;
    trackRef.current!.style.transition = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current!.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    snap();
  };

  /* ================= TOUCH ================= */
  const onTouchStart = (e) => {
    isInteracting.current = true;
    startX.current = e.touches[0].clientX;
    trackRef.current!.style.transition = "none";
  };

  const onTouchMove = (e) => {
    const diff = e.touches[0].clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current!.style.transform = `translate3d(${currentTranslate.current}px,0,0)`;
  };

  const onTouchEnd = () => snap();

  /* ================= SSR SAFE FALLBACK ================= */
  if (!mounted) {
    return (
      <section className="lg:py-5 py-10">
        <div className="mx-auto max-w-[1440px] xl:w-5/6 w-11/12 bg-[#F5F5F9] md:py-14 py-8 md:px-10 px-6 rounded-3xl">
          <h2 className="text-3xl xl:text-4xl font-bold text-[#212121]">
            {finalHeading}
          </h2>
          <p className="text-base xl:text-lg text-[#212121]"  dangerouslySetInnerHTML={{ __html: finalDescription }}>
            {/* {finalDescription} */}
          </p>
        </div>
      </section>
    );
  }

  /* ================= RENDER ================= */
  return (
    <section className="lg:py-5 py-10">
      <div className="mx-auto max-w-[1440px] xl:w-5/6 w-11/12 bg-[#F5F5F9] md:py-14 py-8 md:px-10 px-6 rounded-3xl">

        {/* HEADER */}
        <div className="flex justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl xl:text-4xl font-bold text-[#212121]">
              {finalHeading}
            </h2>
            <p className="text-base xl:text-lg text-[#212121]" dangerouslySetInnerHTML={{ __html: finalDescription }}>
              
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <button  aria-label="Previous slide" onClick={prev}><ChevronLeft /></button>
            <button  aria-label="Next slide" onClick={next}><ChevronRight /></button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={containerRef}
          className="overflow-hidden select-none cursor-grab"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div ref={trackRef} className="flex">
            {sliderData.map((item, i) => (
              <div
                key={i}
                style={{ width: `${100 / slidesToShow}%` }}
                className="px-3 flex-shrink-0"
              >
                <div className="bg-white border rounded-lg p-4 min-h-[420px]">
                  <CommonImage
                    src={item.imgSrc}
                    alt={item.title}
                    width={640}
                    height={360}
                  />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <div
                    className="text-sm mt-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default IndustriesServe;















