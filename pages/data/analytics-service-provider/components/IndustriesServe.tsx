
import React, { useRef } from "react";
import Image from "next/image";


const defaultSliderData = [
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Healthcare.webp",
    title: "<a class='text-blue-500' href='https://www.comfygen.com/healthcare-app-development'>Healthcare</a>",
    description:
      "We help hospitals and health tech companies harness data to improve patient outcomes and streamline workflows.",
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Finance.webp",
    title: "<a class='text-blue-500' href='https://www.comfygen.com/finance-app-development'>Finance</a>",
    description:
      "We partner with financial institutions to detect fraud, automate reporting, and optimize performance.",
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/e-Commerce.webp",
    title: "<a class='text-blue-500' href='https://www.comfygen.com/e-commerce-app-development'>E-Commerce</a>",
    description:
      "We empower retailers to understand customers, optimize inventory, and boost conversions with data insights.",
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Manufacturing.webp",
    title: "Manufacturing",
    description:
      "We help manufacturers improve efficiency and predictive maintenance through real-time IoT analytics.",
  },
  {
    imgSrc: "https://www.comfygen.com/comfygen-images/analytics/Logistics.webp",
    title: "Logistics & Supply Chain",
    description:
      "We deliver real-time visibility, demand forecasting, and route optimization using advanced analytics.",
  },
];

export default function IndustriesServe({
  heading = "Industries We Serve",
  description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology.",
  sliderData = defaultSliderData,
}) {
  const scrollRef = useRef(null);

  // const scroll = (direction) => {
  //   const container = scrollRef.current;
  //   const scrollAmount = container.offsetWidth * 0.8; // scroll by ~1 card width
  //   if (direction === "left") container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  //   else container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // };

  return (
    <section className="lg:py-16 py-10">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 bg-[#F5F5F9] md:py-14 py-8 md:px-10 px-6 rounded-3xl">

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">{heading}</h2>
            <p className="xl:text-lg text-base text-[#212121] font-normal">{description}</p>
          </div>

          {/* <div className="md:flex hidden items-center gap-4 px-4">
            <button
              onClick={() => scroll("left")}
              className="group w-10 h-10 flex justify-center items-center text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:text-white transition"
            >
              <BiChevronLeft size={35} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group w-10 h-10 flex justify-center items-center text-[#212121] border border-[#212121] bg-white rounded-full hover:bg-[#5556D1] hover:text-white transition"
            >
              <BiChevronRight size={35} />
            </button>
          </div> */}
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 mt-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {sliderData.map((item, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 min-w-[300px] md:min-w-[45%] lg:min-w-[23%] transition-transform duration-300"
            >
              <div className="border border-[#E8E8E8] rounded-lg p-4 space-y-4 min-h-[360px] bg-white">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={269}
                  height={416}
                  className="w-full rounded-lg"
                  unoptimized
                />
                <div>
                  <h3
                    className="text-[#212121] text-lg font-semibold"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className="text-[#212121] text-sm"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


