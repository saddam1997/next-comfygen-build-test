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
    title: "Customer Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/customer-panel-food-delivery-app-development.webp",
    additionalDetails: [
      { details: "Easy Sign-Up & Social Login", emoji: "", content: "" },
      { details: "Browse Restaurants & Menus", emoji: "", content: "" },
      { details: "Real-Time Order Tracking", emoji: "", content: "" },
      { details: "Ratings & Reviews for Restaurants", emoji: "", content: "" },
      { details: "Multiple Payment Options (Cards, UPI, Wallets, COD)", emoji: "", content: "" },
      { details: "Reorder & Subscription Plans", emoji: "", content: "" },
      { details: "GPS-Based Restaurant Discovery", emoji: "", content: "" },
      { details: "Push Notifications for Offers & Updates", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Restaurant Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/restaurant-panel-food-delivery-app-development.webp",
    additionalDetails: [
      { details: "Manage Menus & Pricing", emoji: "", content: "" },
      { details: "Accept/Reject Orders Instantly", emoji: "", content: "" },
      { details: "Real-Time Order Alerts & Updates", emoji: "", content: "" },
      { details: "Track Deliveries & Assign Drivers", emoji: "", content: "" },
      { details: "Revenue & Commission Tracking", emoji: "", content: "" },
      { details: "Customer Feedback Management", emoji: "", content: "" },
      { details: "Analytics Dashboard for Sales Insights", emoji: "", content: "" },
      { details: "Promotions & Discount Management", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Driver Panel",
    img: "https://www.comfygen.com/image/admin-panel-food-delivery-app-development.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Easy Registration & Profile Setup", emoji: "", content: "" },
      { details: "Accept/Reject Delivery Requests", emoji: "", content: "" },
      { details: "Optimized GPS Routes & Navigation", emoji: "", content: "" },
      { details: "Real-Time Order Pick-Up & Drop Alerts", emoji: "", content: "" },
      { details: "Delivery History & Earnings Reports", emoji: "", content: "" },
      { details: "In-App Chat/Call with Customers", emoji: "", content: "" },
      { details: "Wallet Integration for Payments", emoji: "", content: "" },
      { details: "Push Notifications for New Orders", emoji: "", content: "" },
    ],
  },
  {
    id: 4,
    title: "Admin Panel",
    img: "https://www.comfygen.com/image/driver-panel-food-delivery-app-development.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Centralized Dashboard with Key Metrics", emoji: "", content: "" },
      { details: "Manage Customers, Restaurants & Drivers", emoji: "", content: "" },
      { details: "Order & Delivery Tracking System", emoji: "", content: "" },
      { details: "Revenue & Commission Settings", emoji: "", content: "" },
      { details: "Approve/Reject Vendor Registrations", emoji: "", content: "" },
      { details: "CMS for Content, Offers & Promotions", emoji: "", content: "" },
      { details: "Advanced Analytics & Reporting", emoji: "", content: "" },
      { details: "Multi-Region & Multi-Branch Control", emoji: "", content: "" },


    ],
  },
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
          We Develop Food Delivery Apps With Advanced Panel Features
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          At Comfygen Technologies, we design powerful food delivery app solutions with smart panel integrations to ensure a smooth experience for customers, restaurants, drivers, and administrators. Our food delivery apps simplify food ordering, improve delivery efficiency, and provide complete control for business owners — all within one robust platform.

        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-[#5556D1]"
              : "bg-white hover:bg-gray-100"
              }`}>
            <button
              className="text-lg font-medium p-2 focus:outline-none"
              onClick={() => handleButtonClick(feature)}>
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
                priority={true}
                quality={75}
                unoptimized
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

