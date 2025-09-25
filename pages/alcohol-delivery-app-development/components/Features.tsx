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
    title: "User App Features",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/User-App-Features-Panel.webp",
    additionalDetails: [
      { details: "Quick Sign-Up & Login", emoji: "", content: "" },
      { details: "Browse Liquor Catalog", emoji: "", content: "" },
      { details: "Secure Online Payments", emoji: "", content: "" },
      { details: "Real-Time Order Tracking", emoji: "", content: "" },
      { details: "Personalized Offers & Deals", emoji: "", content: "" },
      { details: "Age & ID Verification", emoji: "", content: "" },
      { details: "Easy Reorders & Subscriptions", emoji: "", content: "" },
      { details: "Push Notifications", emoji: "", content: "" },
    ],

  },
  {
    id: 2,
    title: "Store/Partner App Features",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/Partner-App-Features-Panel.webp",
    additionalDetails: [
      { details: "Inventory Management", emoji: "", content: "" },
      { details: "Product Listing & Pricing", emoji: "", content: "" },
      { details: "Order & Delivery Control", emoji: "", content: "" },
      { details: "Promotions & Discounts", emoji: "", content: "" },
      { details: "Sales & Revenue Reports", emoji: "", content: "" },
      { details: "Customer Review Management", emoji: "", content: "" },
      { details: "Multi-Store Control", emoji: "", content: "" },
      { details: "Performance Analytics", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Driver App Features",
    img: "https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/Driver-App-Features-Panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Easy Registration", emoji: "", content: "" },
      { details: "GPS Route Optimization", emoji: "", content: "" },
      { details: "Delivery Status Updates", emoji: "", content: "" },
      { details: "In-App Chat & Call", emoji: "", content: "" },
      { details: "Earnings Dashboard", emoji: "", content: "" },
      { details: "Delivery History Records", emoji: "", content: "" },
      { details: "Instant Payouts", emoji: "", content: "" },
      { details: "New Order Alerts", emoji: "", content: "" },
    ],
  },
  {
    id: 4,
    title: "Admin Panel Features",
    img: "https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/Admin-Panel-Features-Panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Centralized Dashboard", emoji: "", content: "" },
      { details: "Manage Users & Stores", emoji: "", content: "" },
      { details: "Track Orders & Status", emoji: "", content: "" },
      { details: "Revenue & Commission Control", emoji: "", content: "" },
      { details: "Age Verification Tools", emoji: "", content: "" },
      { details: "Promotions & CMS Management", emoji: "", content: "" },
      { details: "Multi-Region Store Control", emoji: "", content: "" },
      { details: "Advanced Reports & Analytics", emoji: "", content: "" },
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
          We Develop Alcohol Delivery Apps With Advanced Panel Features
        </h2>
        <p className="text-center text-gray-600 lg:px-0 px-4">
          As a leading on demand liquor delivery app development company, Comfygen builds feature-rich alcohol delivery apps that deliver seamless experiences for customers, liquor store owners, delivery partners, and administrators.

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

