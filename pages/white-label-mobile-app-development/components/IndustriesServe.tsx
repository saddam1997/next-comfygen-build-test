import React, { useRef, } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultSliderData = [
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/On-Demand.webp",
    title: "On-Demand Services",
    description: "On-demand white label apps for <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/taxi-app-development-company' >taxi apps</a> and home services simplify bookings and enhance customer convenience with real-time tracking, scheduling, payments, and user-friendly interfaces.",
    link:"/"
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/ecommerce.webp",
    title: "eCommerce & Retail",
    description: "We build scalable <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/e-commerce-app-development' >white label ecommerce mobile apps</a> for online stores, marketplaces, and retailers. With smooth checkout, product filters, and multi-currency support, you can grow your business under your brand.",
    link: "/"
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/food-delivery.webp",
    title: "Food Delivery",
    description: "Launch your own Swiggy or Zomato-style <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/food-delivery-app-development' >white label food delivery app</a>. We offer real-time delivery tracking, order management, and driver apps—all under your logo and business identity.",
    link: "/"
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/healthcare.webp",
    title: "Healthcare",
    description: "Our white-label <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/healthcare-app-development' >healthcare app development</a> company delivers HIPAA-compliant mobile solutions for clinics, telehealth platforms, and fitness businesses—offering doctor appointment booking, video consultations, and medical record access.",
    link: "/"
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/healthcare1.webp",
    title: "Real Estate",
    description: "We create property listing apps with map search, lead generation, and agent dashboards. Our white label apps help real estate agencies manage buyers, sellers, and renters with ease.",
    link: "/"
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/education.webp",
    title: "Education & eLearning",
    description: "Launch your own branded <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/e-learning-app-development' >eLearning</a> platform with video streaming, live classes, quizzes, and certification features. Our education mobile apps are ideal for schools, tutors, and training businesses.",
    link: "/"
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/finance.webp",
    title: "Fintech & Banking",
    description: "We build secure <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/finance-app-development' >white label fintech apps</a> for digital wallets, loan platforms, personal finance tools, and banking services—featuring KYC, payment gateways, and transaction history tracking.",
    link: "/"
  }
];

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
    <section className="lg:py-16  py-10">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 min-h-[850px] pb-4 sm:min-h-[700px] bg-[#F5F5F9] md:pt-14 pt-6 md:px-10 px-6 rounded-3xl">
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
                      <h3 className="text-[#212121] text-lg font-semibold">{item.title}</h3>
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

