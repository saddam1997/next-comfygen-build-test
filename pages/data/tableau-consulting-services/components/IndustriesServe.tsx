import React, { useRef, } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultSliderData = [
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Healthcare.webp",
    title: "Healthcare",
    description: "We offer Tableau consulting for <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/healthcare-app-development' >healthcare</a> analytics, helping hospitals and clinics track patient outcomes, streamline operations, and ensure regulatory compliance. Our Tableau dashboards provide real-time insights into clinical and administrative data, enabling improvements in care delivery.",
    link: ""
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Finance.webp",
    title: "Finance and Banking",
    description: "We design intuitive Tableau dashboards for <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/finance-app-development' >financial</a> institutions that help simplify complex data, enabling real-time risk monitoring, anomaly detection, and regulatory compliance. This empowers financial institutions to make faster, more confident decisions.",
    link: ""
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/e-Commerce.webp",
    title: "Retail and E-commerce",
    description: "We design and develop Tableau dashboards tailored for <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ecommerce' >e-commerce</a> retailers to understand buying patterns, track marketing performance, and forecast demand, ultimately improving sales and customer satisfaction.",
    link: ""
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Manufacturing.webp",
    title: "Manufacturing",
    description: "We develop tailored Tableau dashboards for the manufacturing industry. Our Tableau dashboards provide real-time data insights into production efficiency, downtime, resource utilization, and quality control, enabling faster and more informed decisions, as well as improved operational performance.",
    link: ""
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Logistics.webp",
    title: "Logistics and Supply Chain",
    description: "We use Tableau to help logistics and supply chain businesses gain real-time visibility into shipments, inventory, and supplier performance. By transforming raw data into clear, actionable dashboards, Tableau enables faster decisions, better forecasting, and improved operational efficiency.",
    link: ""
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Education.webp",
    title: "Education",
    description: "We use Tableau to transform <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/e-learning-app-development' >educational</a> data into clear, visual dashboards, helping institutions track student performance, enrollment trends, and resource allocation. With data-driven insights, educators and administrators can make informed decisions that improve outcomes and efficiency.",
    link: ""
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/tableau-consulting-services/Marketing.webp",
    title: "Marketing and Advertising",
    description: "We help marketing teams visualise campaign data, ROI, audience demographics, and engagement metrics using Tableau. These insights lead to more effective targeting, improved budget allocation, and higher conversion rates.",
    link: ""
  },
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

