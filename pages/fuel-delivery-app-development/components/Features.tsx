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
    img: "https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/User-Panel.webp",
    additionalDetails: [
      { details: "Easy Sign-Up & Login", emoji: "", content: "" },
      { details: "Book Fuel Delivery Instantly", emoji: "", content: "" },
      { details: "Real-Time Order Tracking", emoji: "", content: "" },
      { details: "View Fuel Prices & Promotions", emoji: "", content: "" },
      { details: "Rate & Review Delivery Experience", emoji: "", content: "" },
      { details: "In-App Secure Payments", emoji: "", content: "" },
      { details: "GPS-Based Fuel Station Finder", emoji: "", content: "" },
      { details: "Push Notifications & Alerts", emoji: "", content: "" }
    ],
  },
  {
    id: 2,
    title: "Driver Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/Driver-Panel.webp",
    additionalDetails: [
      { details: "Accept & Schedule Orders", emoji: "", content: "" },
      { details: "Live Route Navigation", emoji: "", content: "" },
      { details: "Update Delivery Status in Real-Time", emoji: "", content: "" },
      { details: "Track Earnings & Commissions", emoji: "", content: "" },
      { details: "View Delivery History", emoji: "", content: "" },
      { details: "Push Notifications for New Orders", emoji: "", content: "" },
      { details: "Safety & Compliance Alerts", emoji: "", content: "" }
    ],
  },
  {
    id: 3,
    title: "Vendor Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/Vendor-Panel.webp",
    additionalDetails: [
      { details: "Manage Fuel Stock & Pricing", emoji: "", content: "" },
      { details: "Receive & Confirm Orders", emoji: "", content: "" },
      { details: "Track Deliveries & Driver Assignments", emoji: "", content: "" },
      { details: "View Sales Reports & Analytics", emoji: "", content: "" },
      { details: "Manage Multiple Fuel Types (Petrol, Diesel, Gas)", emoji: "", content: "" },
      { details: "Push Notifications for Incoming Orders", emoji: "", content: "" },
      { details: "Customer Feedback & Ratings", emoji: "", content: "" }
    ],
  },
  {
    id: 4,
    title: "Admin Panel",
    img: "https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/Admin-Panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Manage Users, Drivers & Vendors", emoji: "", content: "" },
      { details: "Real-Time Delivery & Order Monitoring", emoji: "", content: "" },
      { details: "Analytics & Revenue Reports", emoji: "", content: "" },
      { details: "Manage Offers, Promotions & Pricing", emoji: "", content: "" },
      { details: "Assign Orders & Optimize Routes", emoji: "", content: "" },
      { details: "Track Payment & Transaction History", emoji: "", content: "" },
      { details: "Support & Complaint Management", emoji: "", content: "" }
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
    <div className="lg:py-16 lg:mt-10 py-10 bg-[#F5F5F9]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
         Comprehensive Fuel Delivery App Features for Seamless Management
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          At Comfygen, we build feature-rich fuel delivery apps designed to make fuel ordering, delivery, and management easy for users, drivers, vendors, and business administrators. Our apps include smart panel integrations that simplify operations, improve engagement, and support end-to-end fuel delivery management.

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

