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
    img: "https://www.comfygen.com/comfygen-images/courier-delivery-app-development/user-panel.webp",
    additionalDetails: [
      { details: "Easy Profile Setup & Management", emoji: "", content: "" },
      { details: "Real-Time Parcel Tracking", emoji: "", content: "" },
      { details: "Schedule Pickups & Deliveries", emoji: "", content: "" },
      { details: "Multiple Secure Payment Options", emoji: "", content: "" },
      { details: "Delivery History & Status Updates", emoji: "", content: "" },
      { details: "Push Notifications & Alerts", emoji: "", content: "" },
      { details: "Rate & Review Courier Services", emoji: "", content: "" },
      { details: "In-App Customer Support", emoji: "", content: "" },
      { details: "Loyalty Rewards & Discounts", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Driver Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/courier-delivery-app-development/driver-panel.webp",
    additionalDetails: [
      { details: "Profile Verification & Management", emoji: "", content: "" },
      { details: "Smart Route Optimization with GPS", emoji: "", content: "" },
      { details: "Accept/Reject Delivery Requests", emoji: "", content: "" },
      { details: "Earnings Dashboard & Reports", emoji: "", content: "" },
      { details: "Delivery Status Updates", emoji: "", content: "" },
      { details: "Proof of Delivery (Photo/Signature)", emoji: "", content: "" },
      { details: "Instant Notifications & Alerts", emoji: "", content: "" },
      { details: "Availability Toggle (Online/Offline)", emoji: "", content: "" },
      { details: "Customer Communication Tools", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    img: "https://www.comfygen.com/comfygen-images/courier-delivery-app-development/admin-panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "User & Driver Management System", emoji: "", content: "" },
      { details: "Real-Time Delivery Monitoring", emoji: "", content: "" },
      { details: "Automated Dispatch & Scheduling", emoji: "", content: "" },
      { details: "Secure Payment & Invoice Management", emoji: "", content: "" },
      { details: "Revenue & Analytics Dashboard", emoji: "", content: "" },
      { details: "Multi-Branch & Franchise Support", emoji: "", content: "" },
      { details: "AI-Based Insights & Reporting", emoji: "", content: "" },
      { details: "Multi-Language & Localization Options", emoji: "", content: "" },
       { details: "Data Security & Privacy Controls", emoji: "", content: "" },
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
          Key Features of Our Courier Delivery App
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          Comfygen Technologies develops advanced feature-rich courier delivery apps to improve customer experience, streamline logistics, and optimize courier management. Our top-rated courier service delivery apps include advanced panels for users, drivers, and administrators, ensuring a smooth and efficient delivery process.

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

