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
    title: "Customer App",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/p1.webp",
    additionalDetails: [
      { details: "Quick Sign-Up & Location Detection", emoji: "", content: "" },
      { details: "Easy Product Browsing & Ordering", emoji: "", content: "" },
      { details: "Daily/Weekly/Monthly Subscriptions", emoji: "", content: "" },
      { details: "Real-Time Delivery Tracking", emoji: "", content: "" },
      { details: "Multiple Secure Payment Options", emoji: "", content: "" },
      { details: "Order History & Reorder Option", emoji: "", content: "" },
      { details: "In-App Notifications & Alerts", emoji: "", content: "" },
      { details: "Delivery Time Slot Selection", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Delivery Agent App",
    icon: <i className="fas fa-truck text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/p2.webp",
    additionalDetails: [
      { details: "Agent Profile & Login Access", emoji: "", content: "" },
      { details: "Optimized Delivery Routes", emoji: "", content: "" },
      { details: "Assigned Orders Management", emoji: "", content: "" },
      { details: "Live Delivery Status Updates", emoji: "", content: "" },
      { details: "Earnings & Payout Summary", emoji: "", content: "" },
      { details: "Proof of Delivery Capture", emoji: "", content: "" },
      { details: "In-App Chat with Admin/Support", emoji: "", content: "" },
      { details: "Availability Toggle (Online/Offline)", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-cogs text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/p3.webp",
    additionalDetails: [
      { details: "Customer & Order Management", emoji: "", content: "" },
      { details: "Inventory & Product Management", emoji: "", content: "" },
      { details: "Delivery Agent Allocation & Monitoring", emoji: "", content: "" },
      { details: "Subscription Plan Builder", emoji: "", content: "" },
      { details: "Analytics & Reports Dashboard", emoji: "", content: "" },
      { details: "Push Notification Management", emoji: "", content: "" },
      { details: "Multi-Store & Zone Management", emoji: "", content: "" },
      { details: "Payment & Transaction Logs", emoji: "", content: "" },
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
      Key Features of Our Milk Delivery App
    </h2>
    <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
     At Comfygen, we integrate Using Comfygen Technologies, a top-rated dairy milk delivery app development company, you will get robust milk delivery apps for customers, delivery agents, and admins. The panels are thoughtfully designed to ensure a smooth ordering, delivery, and management process.
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
        <div className="mb-4 flex mx-auto w-auto ">
          <Image
            src={openedFeature.img}
            alt={openedFeature.title}
            width={640}
            height={538}
            className="w-auto h-auto  rounded-lg"
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

