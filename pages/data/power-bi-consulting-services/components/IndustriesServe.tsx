import React, { useRef, } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultSliderData = [
  {
    imgSrc: "https://www.comfygen.com/image/industries-healthcare-img.webp",
    title: "Healthcare & Life Sciences",
    description:
      "Our Microsoft Power BI Consulting Services for Healthcare pull together clinical demographics, financial, and operational data, and have helped hospitals lower wait time, improve patient care, and optimize resources, with full HIPAA-compliant controls. It has enabled real-time dashboards that have improved care coordination and the clinical decision-making process.",
    link: "/healthcare-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/finance-industries-img.webp",
    title: "Finance & Banking",
    description:
      "Our Power BI Consulting Services help the finance team to build Dashboards that allow them to see critical business data in real-time, such as cash flow and risk (derived from revenues, drawn against strategy), profit and loss, and compliance. Areas for Finance teams to automate reporting and quicken response time using Power BI to identify anomalies and forecast expected results.",
    link: "/finance-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-ecommerce-img.webp",
    title: "Retail & E‑Commerce",
    description:
      "Our Microsoft Power BI Consulting Services for Retailers and E-Commerce help to identify trends in sales, drive inventory levels, and analyze customer affinities. Real-time analytics can help retailers identify forecasted demand and build targeted marketing strategies.",
    link: "/e-commerce-app-development"
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-industries-img.webp",
    title: "Manufacturing & Supply Chain",
    description:
      "Power BI explores efficiency and production metrics, including downtime, quality metrics, and throughput of production. Blueprints, for example, integrate sensor and ERP-powered data to predict maintenance schedules, manage production capacity, and improve effectiveness."
  },
  {
    imgSrc: "https://www.comfygen.com/image/industries-education-img.webp",
    title: "Education & Government",
    description:
      "Educational institutions, government agencies, and healthcare provide fabulous use cases as well. Fringe institutions utilize Power BI and can track enrollment and retention figures, attendance, exam performances, but also have launched monitoring and added to public health, engaging budgets, and operating transparently.",
    link: "/ca/education-app-development-company"
  },
  {
    imgSrc: "https://www.comfygen.com/image/social-media-app-industries-img.webp",
    title: "Professional Services & HR",
    description:
      "Companies, firms are analyzing project performance, revenue, and utilization rates. HR can track hiring pipelines and monitor employee engagement and retention trends for a fast-tracked data-driven perspective on the graduate-based streams of people data from hiring and retention.",
    link: "/social-media-app-development"
  }
];


function IndustriesServe({ heading = "Industries We Empower with Our Digital Solutions", description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",  sliderData = defaultSliderData }) {
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
            {sliderData.map((item, index) => (
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
                      <p className="text-[#212121] text-sm" dangerouslySetInnerHTML={{ __html: item.description}}/>
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


