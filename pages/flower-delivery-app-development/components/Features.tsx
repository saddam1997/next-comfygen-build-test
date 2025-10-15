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
    icon: <i className="fas fa-user text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/flower-delivery-app-development/p1.webp",
    additionalDetails: [
      { details: "Easy Product Browsing", emoji: "", content: "" },
      { details: "Quick & Secure Checkout", emoji: "", content: "" },
      { details: "Real-Time Order Tracking", emoji: "", content: "" },
      { details: "Delivery Scheduling Options", emoji: "", content: "" },
      { details: "Flexible Subscriptions", emoji: "", content: "" },
      { details: "Discounts & Loyalty Rewards", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Delivery Partner Panel",
    icon: <i className="fas fa-motorcycle text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/flower-delivery-app-development/p2.webp",
    additionalDetails: [
      { details: "Route Optimization with GPS", emoji: "", content: "" },
      { details: "Status Updates in Real Time", emoji: "", content: "" },
      { details: "Earnings & Order History", emoji: "", content: "" },
      { details: "Proof of Delivery", emoji: "", content: "" },
      { details: "Auto Order Assignment", emoji: "", content: "" },
      { details: "Instant Alerts & Messaging", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-cogs text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/flower-delivery-app-development/p3.webp",
    additionalDetails: [
      { details: "Complete Order & Inventory Control", emoji: "", content: "" },
      { details: "Vendor, Driver & Customer Management", emoji: "", content: "" },
      { details: "Sales Reports & Business Insights", emoji: "", content: "" },
      { details: "Promotions, Pricing & Plans Setup", emoji: "", content: "" },
      { details: "Multi-location Vendor Management", emoji: "", content: "" },
      { details: "Ratings, Feedback & Support Tools", emoji: "", content: "" },
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
    <div className="lg:py-16 lg:mt-10 py-10 bg-[#F5F5F9]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
            Key Features of Our Flower Delivery App
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
         delivery app development company, Comfygen Technologies delivers powerful app solutions packed with essential features for users, delivery agents, and admins. Each panel is designed to enhance performance, simplify operations, and deliver an exceptional user experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-[#5556D1]"
              : "bg-white hover:bg-gray-100"
              }`}>
            <button
              className="text-lg font-medium p-2 focus:outline-none"
              onMouseEnter={() => handleButtonClick(feature)}>
              {feature.title}
            </button>
          </div>
        ))}
      </div>
      {openedFeature && (
        <div className="mt-6 w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2">
          {openedFeature.img && (
            <div className="mb-4 flex mx-auto w-[60%]">
              <Image
                src={openedFeature.img}
                alt={openedFeature.title}
                width={640}
                height={538}
                className="w-full h-auto object-cover rounded-lg"
                // unoptimized
                // priority={true}
                // quality={75}
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

