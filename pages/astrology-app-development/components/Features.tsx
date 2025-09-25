import React, { useState } from "react";
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  icon: JSX.Element;
  img: string;
  additionalDetails: { emoji: string; details: string; content: string }[];
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "User Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/astrology-app-development/p5.webp",
    additionalDetails: [
      { details: "Profile Management", emoji: "", content: "" },
      { details: "Daily Horoscopes", emoji: "", content: "" },
      { details: "Zodiac Details", emoji: "", content: "" },
      { details: "Personalized Readings", emoji: "", content: "" },
      { details: "Compatibility Analysis", emoji: "", content: "" },
      { details: "Prediction Tracking", emoji: "", content: "" },
      { details: "Booking Consultations", emoji: "", content: "" },
      { details: "Health & Wealth Forecast View", emoji: "", content: "" },
      { details: "Favorite Astrologers", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Astrologer Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/astrology-app-development/p3.webp",
    additionalDetails: [
      { details: "Profile Setup & Management", emoji: "", content: "" },
      { details: "Consultation Scheduling", emoji: "", content: "" },
      { details: "Real-Time Chat & Video Calls", emoji: "", content: "" },
      { details: "Earnings Dashboard", emoji: "", content: "" },
      { details: "Horoscope & Kundli Analysis Tools", emoji: "", content: "" },
      { details: "Customer Management", emoji: "", content: "" },
      { details: "Availability Settings", emoji: "", content: "" },
      { details: "Review & Rating Management", emoji: "", content: "" },
      { details: "Astrology Content Publishing", emoji: "", content: "" },
      { details: "Notification & Alert System", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/astrology-app-development/p4.webp",
    additionalDetails: [
      { details: "User & Astrologer Management", emoji: "", content: "" },
      { details: "Consultation Booking & Tracking", emoji: "", content: "" },
      { details: "Secure Payment Management", emoji: "", content: "" },
      { details: "Subscription & Revenue Analytics", emoji: "", content: "" },
      { details: "AI-Based Insights & Reports", emoji: "", content: "" },
      { details: "Content & Horoscope Management", emoji: "", content: "" },
      { details: "Multi-Language & Localization Settings", emoji: "", content: "" },
      { details: "Security & Data Privacy Controls", emoji: "", content: "" },
      { details: "Advanced Dashboard & Analytics", emoji: "", content: "" }
    ],
  }
];

const Features: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(
    featuresData[0]
  );
  const handleButtonClick = (feature: Feature) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  return (
    <section className="bg-center bg-repeat bg-fixed "
    //  style={{ backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")` }}
     >
      <div className="lg:py-16 py-10 bg-[#F5F5F9]">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
          We Develop Astrology Apps With Advanced Panel Features
          </h2>
          <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">At Comfygen, we integrate cutting-edge features into our astrology app development services to enhance user experience, streamline management, and optimize astrology consultations. Our custom astrology app solutions include advanced panels for users, astrologers, and administrators, ensuring a seamless and feature-rich platform.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${openedFeature?.id === feature.id
                ? "bg-[#5556D1] text-white border-[#5556D1]"
                : "bg-white hover:bg-gray-100"
                }`}>
              <button
                className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
                onClick={() => handleButtonClick(feature)}>
                {feature.title}
              </button>
            </div>
          ))}
        </div>
        {openedFeature && (
          <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 items-center">
            {openedFeature.img && (
              <div className="mb-4 flex mx-auto ">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  width={500}
                  height={500}
                  className="w-full md:h-[300px] lg:h-[400px] pb-4 border border-[#fff]/10 rounded-lg"
                />
              </div>
            )}
            <div className="mt-2 py-2 mx-4">
              {openedFeature.additionalDetails.map((detail, index) => (
                <ul className="max-w-xl" key={index}>
                  <li className="py-4 border-b border-[#5556D1] flex justify-start place-items-center gap-8">
                    <div>
                      <h3 className="">{detail?.details}</h3>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;

