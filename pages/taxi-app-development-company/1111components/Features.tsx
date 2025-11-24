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
    title: "Customer’s or Passenger’s App",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/taxi-app-development-customer-or-passenger-app.webp",
    additionalDetails: [
      { details: "Instant Booking", emoji: "", content: "" },
      { details: "Ride Details", emoji: "", content: "" },
      { details: "Scheduled Booking", emoji: "", content: "" },
      { details: "Multiple Payment Gateways", emoji: "", content: "" },
      { details: "Real-Time Tracking", emoji: "", content: "" },
      { details: "Push Notifications", emoji: "", content: "" }
    ],
  },
  {
    id: 2,
    title: "Driver Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/taxi-app-development-driver-panel-image.webp",
    additionalDetails: [
      { details: "Registration and Profile Management", emoji: "", content: "" },
      { details: "Real-Time Location Tracking", emoji: "", content: "" },
      { details: "Booking Management", emoji: "", content: "" },
      { details: "Earnings and Payment", emoji: "", content: "" },
      { details: "Communication Tools", emoji: "", content: "" },
      { details: "Feedback and Ratings", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    img: "https://www.comfygen.com/image/taxi-app-development-admin-panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Dashboard and Analytics", emoji: "", content: "" },
      { details: "User and Driver Management", emoji: "", content: "" },
      { details: "Trip Management", emoji: "", content: "" },
      { details: "Fare and Pricing Management", emoji: "", content: "" },
      { details: "Promotions and Discounts", emoji: "", content: "" },
      { details: "Safety and Compliance", emoji: "", content: "" }
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
    <div className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
        Features of a Taxi Booking App
        </h2>
        <p className="text-base text-center  font-normal">As a leading on-demand taxi app development company in India, we integrate advanced functionalities to make your taxi app competitive and user-friendly.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData.map((feature) => (
          <button
          key={feature.id}
          onClick={() => handleButtonClick(feature)}
          className={`rounded-full flex justify-center border border-gray-300 cursor-pointer text-lg font-medium p-2 focus:outline-none ${
            openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-[#5556D1]"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {feature.title}
        </button>
        ))}
      </div>
      {openedFeature && (
        <div className="mt-6 mx-auto p-4 grid grid-cols-1 lg:gap-6 md:grid-cols-2 2xl:w-10/12 w-10/12 lg:w-11/12">
          {openedFeature.img && (
            <div className="mb-4 flex mx-auto ">
              <Image
                src={openedFeature.img}
                alt={openedFeature.title}
                width={1920}
                height={1280}
                className="rounded-lg w-full" 
              />
            </div>
          )}
          <div className="mt-2 py-2 mx-4">
            {openedFeature.additionalDetails.map((detail, index) => (
              <ul className="max-w-xl" key={index}>
                <li className="py-4 border-b border-[#5556D1] flex justify-start place-items-center gap-8">
                  <div>
                    <h3>{detail?.details}</h3>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;

