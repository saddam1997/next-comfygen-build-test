import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";

const defaultTestimonials = [
  {
    "text": "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations. They’re a reliable partner for any serious brand looking to scale digitally.",
    "name": "Jessica Moore",
    "title": "Texas, USA"
  },
  
];

const ClientTestimonials = ({
  testimonials = defaultTestimonials,
  heading = "We appreciate feedback from our customers",
}) => {
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateCounter = () => {
      setCount((prev) => {
        if (prev < 500) return prev + 1;
        clearInterval(intervalRef.current);
        return prev;
      });
    };
    intervalRef.current = setInterval(updateCounter, 5);
    return () => clearInterval(intervalRef.current);
  }, []);

  const toggleReadMore = (index) => {
    setIsExpanded(!isExpanded);
    setCurrentIndex(index);
  };

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="lg:py-16 py-10 bg-white">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 h-full">
        <div className="space-y-3">
          <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
            {heading}
          </h2>
        </div>
        <div className="mt-6 space-y-6">
          <div className="flex justify-end items-center gap-4 px-4">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="group px-4 py-2 border text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white"
              aria-label="Previous Slide"
            >
              <BiChevronLeft size={24} />
            </button>

            <button
              onClick={() => sliderRef.current.slickNext()}
              className="group px-4 py-2 border text-[#5556D1] rounded hover:bg-[#5556D1] hover:text-white"
              aria-label="Next Slide"
            >
              <BiChevronRight size={24} />
            </button>
          </div>
          <Slider ref={sliderRef} {...settings} className="sm:h-56 h-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 sm:h-56 h-full">
                <div className="p-6 space-y-4 rounded-[6px] shadow-lg border h-full">
                  <p className="text-gray-700 text-base">
                    {isExpanded && currentIndex === index
                      ? testimonial.text
                      : `${testimonial.text.slice(0, 200)}...`}
                    <span
                      onClick={() => toggleReadMore(index)}
                      className="text-blue-700 hover:text-blue-900 font-semibold"
                    >
                      {isExpanded && currentIndex === index
                        ? "Show Less"
                        : "Show More"}
                    </span>
                  </p>
                  <div className="h-full">
                    <p
                      className="text-gray-900 font-semibold"
                      dangerouslySetInnerHTML={{ __html: testimonial.name }}
                    ></p>
                    <p className="text-blue-600">({testimonial.title})</p>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Image
                        alt="COMFYGEN LIMITED"
                        src="https://www.comfygen.com/image/clutch-img.svg"
                        height={49}
                        width={93}
                      />
                      <div>
                        <div className="">
                          <div className="flex items-center ml-2 space-x-1">
                            <span className="text-yellow-400">&#9733;</span>
                            <span className="text-yellow-400">&#9733;</span>
                            <span className="text-yellow-400">&#9733;</span>
                            <span className="text-yellow-400">&#9733;</span>
                            <span className="text-yellow-400">&#9733;</span>
                          </div>
                          <p className="ml-1 text-gray-500">(5 Ratings)</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        alt=" Who We Are?"
                        src="https://www.comfygen.com/image/testimonial-quat.png"
                        height={50}
                        width={50}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
