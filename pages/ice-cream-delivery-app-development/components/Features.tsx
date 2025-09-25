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
    img: "https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/Customer Panel.webp",
    additionalDetails: [
      { details: "Easy Sign-Up & Social Login", emoji: "", content: "" },
      { details: "Browse Ice Cream Flavors & Combos", emoji: "", content: "" },
      { details: "Real-Time Order Tracking with ETA", emoji: "", content: "" },
      { details: "AI-Powered Flavor Recommendations", emoji: "", content: "" },
      { details: "In-App Payments & Digital Wallets", emoji: "", content: "" },
      { details: "Subscription & Pre-Scheduling Options", emoji: "", content: "" },
      { details: "Push Notifications for Offers & Discounts", emoji: "", content: "" },
      { details: "Ratings & Reviews for Shops & Flavors", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Vendor Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/Parlors).webp",
    additionalDetails: [
      { details: "Add/Manage Flavors & Pricing", emoji: "", content: "" },
      { details: "Inventory & Stock Management", emoji: "", content: "" },
      { details: "Real-Time Order Management", emoji: "", content: "" },
      { details: "Offer & Discount Creation", emoji: "", content: "" },
      { details: "Delivery Partner Assignment", emoji: "", content: "" },
      { details: "Earnings & Sales Reports", emoji: "", content: "" },
      { details: "Customer Feedback Management", emoji: "", content: "" },
      { details: "Multi-Outlet Support", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Driver Panel",
    img: "https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/Delivery Panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Quick Registration & Verification", emoji: "", content: "" },
      { details: "Accept/Reject Delivery Requests", emoji: "", content: "" },
      { details: "Optimized GPS Routes & Navigation", emoji: "", content: "" },
      { details: "Real-Time Delivery Status Updates", emoji: "", content: "" },
      { details: "Earnings & Commission Tracking", emoji: "", content: "" },
      { details: "Order History & Reports", emoji: "", content: "" },
      { details: "In-App Chat with Customers/Vendors", emoji: "", content: "" },
      { details: "Availability Toggle (Online/Offline)", emoji: "", content: "" },
    ],
  },
  {
    id: 4,
    title: "Admin Panel",
    img: "https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/Admin Panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Centralized Dashboard with Analytics", emoji: "", content: "" },
      { details: "Manage Users, Vendors & Delivery Partners", emoji: "", content: "" },
      { details: "Revenue & Commission Management", emoji: "", content: "" },
      { details: "Approve/Reject Vendor Listings", emoji: "", content: "" },
      { details: "Content & Promotion Management (CMS)", emoji: "", content: "" },
      { details: "Offers, Discounts & Coupon Control", emoji: "", content: "" },
      { details: "Multi-Branch & Franchise Support", emoji: "", content: "" },
      { details: "Blockchain-Powered Transaction Security", emoji: "", content: "" },


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
       We Develop Ice Cream Delivery Apps With Advanced Panel Features
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          Comfygen is among the best ice cream delivery mobile app development firm. We craft feature-rich Ice Cream Delivery Apps that deliver a seamless experience for customers, ice cream shop owners, delivery agents, and administrators. With AI-powered personalization, blockchain-secured payments, and real-time tracking, our apps are designed to transform the ice cream delivery experience.

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

