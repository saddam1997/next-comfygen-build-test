import React, { useRef } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  // {
  //   imgSrc: "https://www.comfygen.com/image/travel-hospitality-industries-img.webp",
  //   title: "Travel & Hospitality",
  //   description: "Enhancing customer journeys with intuitive, tech-driven travel and hospitality applications."
  // },
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

// Optimized blur data URL for better loading
const blurDataURL = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4IBAAAABwAgCdASoIAAQAAQAcJbACdASEf8WAP4AAABCTbFzAAA=";

function IndustriesServe({
  heading = "Industries We Empower with Our Digital Solutions",
  description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",
  sliderData = defaultSliderData
}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000, // Increased for better UX
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="lg:py-5 py-10">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 bg-[#F5F5F9] md:py-14 py-8 md:px-10 px-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">{heading}</h2>
            <p className="xl:text-lg text-base text-[#212121] font-normal">{description}</p>
          </div>
          <div className="md:flex hidden items-center gap-4 px-4">
            <button
              title="Previous"
              type="button"
              aria-label="Previous"
              onClick={previous}
              className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] cursor-pointer">
              <BiChevronLeft size={35} />
            </button>
            <button
              title="Next"
              type="button"
              aria-label="Next"
              onClick={next}
              className="group w-10 h-10 flex justify-center items-center hover:text-white text-[#212121] border-[#212121] border transition-all duration-200 bg-white rounded-full hover:bg-[#5556D1] hover:border-[#5556D1] cursor-pointer"
            >
              <BiChevronRight size={35} />
            </button>
          </div>
        </div>

        <div className="slider-container mt-6">
          <Slider {...settings} ref={sliderRef}>
            {sliderData.map((item, index) => (
              <div key={index} className="md:px-3">
                {item.link ? (
                  <a href={item.link} key={item.link} className="block">
                    <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[360px]">
                      <div className="relative w-full h-48">
                        <Image
                          src={item.imgSrc}
                          alt={item.title}
                          fill
                          quality={75}
                          priority={index < 4}
                          
                          // sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-[#212121] text-lg font-semibold">{item.title}</h3>
                        <p
                          className="text-[#212121] text-sm"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[360px]">
                    <div className="relative w-full h-48">
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        fill
                        quality={75}
                        priority={index < 4}
                        // unoptimized
                        // sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-[#212121] text-lg font-semibold">{item.title}</h3>
                      <p
                        className="text-[#212121] text-sm"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                )}

              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default IndustriesServe;
