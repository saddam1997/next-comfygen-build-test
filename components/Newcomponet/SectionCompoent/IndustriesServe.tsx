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
  sliderData = defaultSliderData
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Responsive slides calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        next();
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, slidesToShow]);

  const next = () => {
    setCurrentIndex((prev) => {
      const maxIndex = sliderData.length - slidesToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const previous = () => {
    setCurrentIndex((prev) => {
      const maxIndex = sliderData.length - slidesToShow;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="lg:py-5 py-10">
      <div className="mx-auto max-w-[1440px] xl:w-5/6 w-11/12 bg-[#F5F5F9] md:py-14 py-8 md:px-10 px-6 rounded-3xl">
        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="space-y-2 flex-1">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">{heading || "Industries We Empower with Our Digital Solutions"}</h2>
            <p className="xl:text-lg text-base text-[#212121] font-normal">{description || "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations."}</p>
          </div>
          <div className="md:flex hidden items-center gap-4 flex-shrink-0">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={previous}
              className="w-12 h-12 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border-2 transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] cursor-pointer shadow-sm"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="w-12 h-12 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border-2 transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] cursor-pointer shadow-sm"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden h-full "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out items-stretch"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
            }}
          >
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3 p-2  "
                style={{ width: `${100 / slidesToShow}%` }}
              >
                {item.link ? (
                  <a href={item.link} className="block overflow-hidden cursor-pointer min-h-[400px]">
                    <div className="bg-white border border-[#E8E8E8] rounded-lg p-4
                h-full flex flex-col
                hover:shadow-lg transition-shadow duration-500">
                      <div className="relative w-full   rounded-lg">
                        <CommonImage
                          src={item.imgSrc}
                          alt={item.title}
                          width={640}
                          height={360}
                          priorityLoad={false}
                          blurDataURL="/blur-placeholder.webp"
                          className="w-full  object-cover "
                        />

                      </div>
                      <div>
                        <h3 className="text-[#212121] text-lg font-semibold mb-2">{item.title}</h3>
                        <p
                          className="text-[#212121] text-sm"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white cursor-pointer border overflow-hidden min-h-[410px] border-[#E8E8E8] rounded-lg p-4 space-y-4 hover:shadow-lg transition-shadow  duration-500 group-hover:scale-150">
                    <div className="relative w-full min-h-fit overflow-hidden rounded-lg">
                      <CommonImage
                        src={item.imgSrc}
                        alt={item.title}
                        width={640}
                        height={360}
                        priorityLoad={false}
                        blurDataURL="/blur-placeholder.webp"
                        className="w-full h-full object-cover "
                      />

                    </div>
                    <div>
                      <h3 className="text-[#212121] text-lg font-semibold mb-2">{item.title}</h3>
                      <p
                        className="text-[#212121] text-sm"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex  justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(sliderData.length) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#5556D1] w-6' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesServe;














