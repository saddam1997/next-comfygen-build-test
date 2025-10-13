import React, { useRef, } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultSliderData = [
  // {
  //   imgSrc: "https://www.comfygen.com/comfygen-images/fmcg/fmcg-grocery.webp",
  //   title: "<a class='text-blue-500 font-semibold' href='/ecommerce/grocery' >Grocery & Daily Essentials</a>",
  //   description: "We develop feature-rich apps for grocery retailers and daily needs brands. Our FMCG mobile app development helps you offer smooth product browsing, fast deliveries, and easy reordering for everyday essentials across all platforms.",
  //   link: "/fmcg-grocery-app-development"
  // },
  // {
  //   imgSrc: "https://www.comfygen.com/comfygen-images/fmcg/fmcg-food.webp",
  //   title: "Packaged Food Brands",
  //   description: "From snacks to ready-to-eat meals, our solutions help packaged food FMCG companies manage inventory, track demand, and reach customers with personalized offers. We build powerful FMCG app development services to support direct-to-consumer strategies.",
  //   link: "/fmcg-packaged-food-app-development"
  // },
  // {
  //   imgSrc: "https://www.comfygen.com/comfygen-images/fmcg/fmcg-beverage.webp",
  //   title: "Beverage Companies",
  //   description: "We empower beverage brands to launch apps for quick ordering, subscription models, and delivery tracking. Our FMCG software development ensures seamless user experience and smart backend management for cold chains and stock rotation.",
  //   link: "/fmcg-beverage-app-development"
  // },
  // {
  //   imgSrc: "https://www.comfygen.com/comfygen-images/fmcg/fmcg-household.webp",
  //   title: "Personal Care & Household FMCG",
  //   description: "Whether you sell soaps, detergents, or skincare, our apps make it easier to browse, review, and reorder products. We offer FMCG delivery app development for both single-brand and multi-vendor platforms.",
  //   link: "/fmcg-personal-care-app-development"
  // },
  // {
  //   imgSrc: "https://www.comfygen.com/comfygen-images/fmcg/fmcg-pharma.webp",
  //   title: "Pharmaceutical FMCG",
  //   description: "We <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/medicine-delivery-app-development' >create a medicine delivery app</a> for pharma FMCG businesses offering over-the-counter products and wellness items. Our enterprise FMCG delivery app development solutions support real-time tracking, prescription uploads, and seamless restocking.",
  //   link: "/fmcg-pharma-delivery-app-development"
  // }
];
;

function IndustriesServe({ heading = "Industries We Serve", description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",  sliderData = defaultSliderData }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
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
          autoplaySpeed: 6000,
          cssEase: "linear",
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
    <section className="lg:py-16 py-10">
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
            {sliderData?.map((item, index) => (
              <div key={index} className="md:px-3">
                <a href={item.link} className="block">
                  <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[360px]">
                    <Image
                      src={item.imgSrc} 
                      alt={item.title}
                      height={416}
                      width={269}
                      className="w-full"
                    />
                    <div>
                      <h3 className="text-[#212121] text-lg font-semibold"dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                      <p className="text-[#212121] text-sm" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default IndustriesServe;

