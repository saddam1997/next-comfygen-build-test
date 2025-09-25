import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiRoundStar } from "react-icons/gi";

const Arena = [
  {
    name: "Ayush Khatkar",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Fantastic service! The team delivered a custom notes-like web app that exceeded our expectations. Their smart suggestions, seamless hosting setup, and dedication left us impressed. Highly recommend it for future projects!",
    stars: [true, true, true, true, true],
  },
  {
    name: "Rishabh Shukla",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen did an excellent job designing and building our dating app for both iOS and Android. The integration of features like geolocation-based matching, swipe functionality, and secure payments exceeded our expectations. Highly recommended!",
    stars: [true, true, true, true, true],
  },
  {
    name: "Raunak Pradhan",
    city: "New York",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen delivered a top-notch custom healthcare app for our review writer company. The features like appointment scheduling, patient record management, and telemedicine functionality were implemented flawlessly. The team also enhanced the UI, making it user-friendly.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Kowamin Smith",
    city: "Canada",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen did an outstanding job developing our workout app. The app’s features, like workout tracking, exercise libraries, and progress analytics, were flawlessly integrated. Their professionalism and expertise made the process smooth from start to finish.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Orenarts",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen exceeded our expectations in developing a healthcare app. The team delivered exceptional features, including patient record management, appointment scheduling, and telemedicine. Their professionalism and attention to detail were outstanding.",
    stars: [true, true, true, true, true],
  },
];



const Arena1 = [
  {
    name: "Rakesh Kumar",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "We have been extremely satisfied with Comfygen Private Limited's responsiveness and dedication to understanding our needs. I appreciated their valuable insights, the fact that they delivered on time, and the fact that they communicated effectively throughout the project. The level of technical expertise they provided exceeded expectations. Recommend for future tech needs!",
    stars: [true, true, true, true, true],
  },
  {
    name: "Harsh Patel",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen delivered an excellent crypto coin project on time, exceeding expectations. Their team was professional, and the final product was outstanding. I'm extremely satisfied with their work and highly recommend them for any future projects.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Dr. Anita Sharma",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen developed a telemedicine app for us, and the results were exceptional. The team integrated features like video consultations, appointment scheduling, and patient management with seamless functionality. Their attention to detail and timely delivery made the project a success.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Michael Johnson",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen delivered an outstanding taxi app for our business. The app’s features, including real-time tracking, payment integration, and driver/passenger matching, were flawlessly implemented. Their team ensured smooth delivery and provided continuous support throughout the process.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Sarah Miller",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen developed a fantastic dating app for us, integrating features like geolocation-based matching, swipe functionality, and secure payment options. Their team's expertise and attention to detail made the app a huge success. Highly recommended!",
    stars: [true, true, true, true, true],
  },
];

function Responsive() {
  const leftToRightSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const rightToLeftSettings = {
    ...leftToRightSettings,
    rtl: true, // Enable right-to-left sliding
  };

  return (
    <section className="md:space-y-0 space-y-2 bg-white">
      <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10 lg:py-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold leading-[3rem] text-[#212121]">
            We appreciate feedback From Our customers
          </h2>
          <p className="lg:text-xl text-lg font-normal capitalize text-[#212121]">
            500+ Reviews Of Delighted Clients with clutch{" "}
            <span className="text-[#FFB600]">4.5 Star</span> Rating
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {/* Right-to-Left Slider */}
        <div className="slider-container">
          <Slider {...rightToLeftSettings}>
            {Arena.map((elem, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#F3F4F6] p-8 text-center rounded-lg space-y-6 h-[21rem]">
                  <div className="space-y-6">
                    <p className="text-[#212121] text-lg font-medium line-clamp-5 text-start">
                      {elem.decs}
                    </p>
                    <div>
                      <p className="font-semibold text-start text-lg">{elem.name}</p>
                      <p className="font-light text-start text-lg">{elem.city}</p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <Image
                          alt="COMFYGEN LIMITED"
                          src="https://www.comfygen.com/image/clutch-img.svg"
                          height={49}
                          width={93}
                        />
                      </div>
                      <div>
                        <div className="flex justify-end space-x-1">
                          {elem.stars.map((isFilled, i) => (
                            <GiRoundStar
                              key={i}
                              size={16}
                              className={isFilled ? "text-yellow-500" : "text-slate-200"}
                            />
                          ))}
                        </div>
                        <p className="text-base text-[#212121]">5 Stars Ratings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Left-to-Right Slider */}
        <div className="slider-container">
          <Slider {...leftToRightSettings}>
            {Arena1.map((elem, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#F3F4F6] p-8 text-center rounded-lg space-y-6 h-[21rem]">
                  <div className="space-y-6">
                    <p className="text-[#212121] text-lg font-medium line-clamp-5 text-start">
                      {elem.decs}
                    </p>
                    <div>
                      <p className="font-semibold text-start text-lg">{elem.name}</p>
                      <p className="font-light text-start text-lg">{elem.city}</p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                      <Image
                          alt="COMFYGEN LIMITED"
                          src="https://www.comfygen.com/image/clutch-img.svg"
                          height={49}
                          width={93}
                        />
                      </div>
                      <div>
                        <div className="flex justify-end space-x-1">
                          {elem.stars.map((isFilled, i) => (
                            <GiRoundStar
                              key={i}
                              size={16}
                              className={isFilled ? "text-yellow-500" : "text-slate-200"}
                            />
                          ))}
                        </div>
                        <p className="text-base text-[#212121]">5 Stars Ratings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Responsive;
