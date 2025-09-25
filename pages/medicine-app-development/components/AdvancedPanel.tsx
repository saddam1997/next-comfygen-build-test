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
    title: "For Users",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/customer-panel-medicine-delivery-app-development.png",
    additionalDetails: [
      { details: "Easy login & user profiles", emoji: "", content: "" },
      { details: "Smart search & categorization of medicines", emoji: "", content: "" },
      { details: "Prescription upload & verification", emoji: "", content: "" },
      { details: "Secure online payments", emoji: "", content: "" },
      { details: "Order tracking & delivery notifications", emoji: "", content: "" },
      { details: "Medicine refill reminders", emoji: "", content: "" }
    ],
  },
  {
    id: 2,
    title: "For Pharmacies & Admins",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/pharmacy-panel-image-medicine-delivery-app-development.png",
    additionalDetails: [
      { details: "Inventory & stock management", emoji: "", content: "" },
      { details: "Order management system", emoji: "", content: "" },
      { details: "Customer insights & analytics", emoji: "", content: "" },
      { details: "Multi-vendor support", emoji: "", content: "" },
      { details: "Role-based access", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "For Admin Panel",
    img: "https://www.comfygen.com/image/admin-panel-medicine-delivery-app-development.png",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "A centralized dashboard for real-time monitoring", emoji: "", content: "" },
      { details: "Vendor & pharmacy management system", emoji: "", content: "" },
      { details: "User management & authentication controls", emoji: "", content: "" },
      { details: "Automated commission & payment tracking", emoji: "", content: "" },
      { details: "Marketing & promotions management", emoji: "", content: "" },
      { details: "Reports & analytics for business growth", emoji: "", content: "" },
      { details: "Compliance & regulatory management", emoji: "", content: "" }
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
    <div className="lg:py-16 py-10  bg-gradient-to-r from-[#272868] to-[#5556D1]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
        Features We Implement in Your Medicine Ordering App to Make it Stand Out
        </h2>
        <p className="text-base text-center text-white font-normal lg:w-2/3 w-full mx-auto">At Comfygen, we develop user-friendly and scalable medicine ordering apps with advanced features that cater to both customers and pharmacy administrators. Our app ensures a seamless medicine ordering experience, streamlined management, and compliance with industry regulations.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] bg-white 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${
              openedFeature?.id === feature.id
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
                <li className="py-4 border-b border-[#5556D1] flex justify-start place-items-center gap-8 text-white">
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

