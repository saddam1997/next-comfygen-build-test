import { useState, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderSection({ Sliderdata, Sliderheader }) {
  const [currentCount, setCurrentCount] = useState(0);
  const sliderRef = useRef(null); 

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const settingstwo = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!Sliderdata || !Sliderheader) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="py-10 bg-white w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6">
        <div className="space-y-4">
          {Sliderheader.map((elem, index) => (
            <div key={index} className="flex flex-col justify-center text-center">
              <p className="text-lg font-medium text-blue-600 capitalize">{elem.decs}</p>
              <h3 className="pt-4 text-3xl font-bold text-[#0E1F51]">{elem.title}</h3>
            </div>
          ))}
          <div className="flex items-center py-10 relative">
            <button
              title="Previous"
              type="button"
              aria-label="Previous"
              onClick={previous}
              className="flex z-10 px-4 py-2 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 cursor-pointer absolute -left-6 transform -translate-y-1/2"
            >
              <BiChevronLeft className="text-2xl" />
            </button>
            <Slider ref={sliderRef} {...settingstwo} className="w-full flex items-center h-[21rem]"> {/* Assign ref to the Slider */}
              {Sliderdata.map((elem, index) => (
                <div key={index} className="px-4">
                  <div className="p-4 space-y-4 relative bg-slate-100 cursor-pointer rounded-[17px]">
                    <div className="w-14 h-14 bg-[#ffffff] rounded-[17px] flex justify-center items-center text-[24px] font-bold">
                      <span className="text-blue-600">{elem.num}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg text-[#0E1F51] font-semibold group-hover:text-white">
                        {elem.title}
                      </h3>
                      <div className="flex justify-start space-x-2">
                        <div className="w-10 h-1 bg-blue-600 rounded-full "></div>
                        <div className="w-6 h-1 bg-blue-600 rounded-full "></div>
                      </div>
                      <div className="space-y-2">
                        <p className="break-all text-base text-[#000000] group-hover:text-white/90">
                          {elem.decs}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <button
              title="Next"
              type="button"
              aria-label="Next"
              onClick={next}
              className="flex z-10 px-4 py-2 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 cursor-pointer absolute  -right-6 transform -translate-y-1/2"
            >
              <BiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
