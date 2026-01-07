"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";

const Arena = [
  {
    name: "Ayush Khatkar",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Fantastic service! The team delivered a custom notes-like web app that exceeded our expectations.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Rishabh Shukla",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen did an excellent job designing and building our dating app for both iOS and Android.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Raunak Pradhan",
    city: "New York",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen delivered a top-notch custom healthcare app with seamless UI and flawless functionality.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Kowamin Smith",
    city: "Canada",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen did an outstanding job developing our workout app with smooth performance and analytics.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Orenarts",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen exceeded our expectations in developing a healthcare app with excellent design and UX.",
    stars: [true, true, true, true, true],
  },
];

const Arena1 = [
  {
    name: "Rakesh Kumar",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "We have been extremely satisfied with Comfygen's responsiveness and dedication to understanding our needs.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Harsh Patel",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen delivered an excellent crypto coin project on time, exceeding expectations.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Dr. Anita Sharma",
    city: "India",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen developed a telemedicine app for us with great video consultations and smooth scheduling.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Michael Johnson",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen delivered an outstanding taxi app with real-time tracking and perfect performance.",
    stars: [true, true, true, true, true],
  },
  {
    name: "Sarah Miller",
    city: "USA",
    img: "https://www.comfygen.com/images/profileimg.webp",
    decs: "Comfygen developed a fantastic dating app with swipe functionality and secure payments.",
    stars: [true, true, true, true, true],
  },
];

export default function Responsive() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    let leftScroll = 0;
    let rightScroll = 0;

    const scrollLeft = () => {
      leftScroll += 1;
      if (left.scrollLeft >= left.scrollWidth / 2) leftScroll = 0;
      left.scrollLeft = leftScroll;
    };

    const scrollRight = () => {
      rightScroll -= 1;
      if (Math.abs(rightScroll) >= right.scrollWidth / 2) rightScroll = 0;
      right.scrollLeft = Math.abs(rightScroll);
    };

    const leftInterval = setInterval(scrollLeft, 20);
    const rightInterval = setInterval(scrollRight, 20);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  const Card = ({ item }) => (
    <div className="bg-[#F3F4F6] p-8 text-center rounded-lg space-y-6 h-[21rem] min-w-[350px] mx-4">
      <p className="text-[#212121] text-lg font-medium line-clamp-5 text-start">
        {item.decs}
      </p>
      <div>
        <p className="font-semibold text-start text-lg">{item.name}</p>
        <p className="font-light text-start text-lg">{item.city}</p>
      </div>
      <div className="flex justify-between items-center">
        <Image
          alt="COMFYGEN LIMITED"
          src="https://www.comfygen.com/image/clutch-img.svg"
          height={49}
          width={93}
        />
        <div>
          <div className="flex justify-end space-x-1">
            {item.stars.map((isFilled, i) => (
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
  );

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-4xl font-bold leading-[3rem] text-[#212121]">
          We appreciate feedback From Our customers
        </h2>
        <p className="lg:text-xl text-lg font-normal capitalize text-[#212121]">
          500+ Reviews Of Delighted Clients with clutch{" "}
          <span className="text-[#FFB600]">4.5 Star</span> Rating
        </p>
      </div>

      {/* Right-to-Left Slider */}
      <div
        ref={rightRef}
        className="flex overflow-hidden whitespace-nowrap pb-6"
      >
        {[...Arena, ...Arena].map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* Left-to-Right Slider */}
      <div ref={leftRef} className="flex overflow-hidden whitespace-nowrap">
        {[...Arena1, ...Arena1].map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
