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
    icon: <i className="fas fa-user text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-customer.webp",
    additionalDetails: [
      { details: "Quick Sign-Up/Login via Mobile or Email", emoji: "", content: "" },
      { details: "Smart Search with Filters & Categories", emoji: "", content: "" },
      { details: "Real-Time Order Tracking", emoji: "", content: "" },
      { details: "Wishlist & Reorder Functionality", emoji: "", content: "" },
      { details: "In-App Chat with Delivery Agent", emoji: "", content: "" },
      { details: "Secure Multiple Payment Options", emoji: "", content: "" },
      { details: "Ratings, Reviews & Feedback", emoji: "", content: "" }    
    ],
  },
  {
    id: 2,
    title: "Store/Vendor Panel",
    icon: <i className="fas fa-scissors text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-store.webp",
    additionalDetails: [
  { details: "Easy Product Listing & Categorization", emoji: "", content: "" },
  { details: "Real-Time Inventory & Stock Updates", emoji: "", content: "" },
  { details: "Order Alerts & Delivery Coordination", emoji: "", content: "" },
  { details: "Discounts, Offers & Coupon Management", emoji: "", content: "" },
  { details: "Sales Analytics & Reports Dashboard", emoji: "", content: "" },
  { details: "Customer Chat & Order Instructions", emoji: "", content: "" },
  { details: "Earnings Management & Withdrawals", emoji: "", content: "" }
    ],
  },
  {
    id: 3,
    title: "Driver Panel",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-driver.webp",
    additionalDetails: [
      { details: "Easy Login with Verification", emoji: "", content: "" },
      { details: "Real-Time Delivery Alerts", emoji: "", content: "" },
      { details: "GPS Navigation & Route Optimization", emoji: "", content: "" },
      { details: "Order Pickup & Drop Confirmation", emoji: "", content: "" },
      { details: "In-App Call/Chat with Customers", emoji: "", content: "" },
      { details: "Daily Earnings Summary", emoji: "", content: "" },
      { details: "Availability Toggle (Online/Offline)", emoji: "", content: "" }
    ],
  },
  {
    id: 4,
    title: "Admin Panel",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-admin.webp",
    additionalDetails: [
      { details: "Manage Users, Vendors & Delivery Staff", emoji: "", content: "" },
      { details: "Store Approvals & Inventory Control", emoji: "", content: "" },
      { details: "Order & Payment Monitoring", emoji: "", content: "" },
      { details: "Delivery Zone Configuration & Time Slots", emoji: "", content: "" },
      { details: "Loyalty Program & Promo Code Settings", emoji: "", content: "" },
      { details: "Reports, Insights & Revenue Analytics", emoji: "", content: "" },
      { details: "Data Privacy, Security & App Settings", emoji: "", content: "" }
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
          We Develop Walmart-Like Grocery Apps With Excellent Panel Features
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          high-performance, user-friendly features to make sure a seamless shopping experience. The grocery shopping app development of intuitive panels for customers, vendors, and admins is integral to our supermarket app development for Walmart clones and next-generation hyperlocal grocery platforms.

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
                unoptimized
                priority={true}
                quality={75}
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

