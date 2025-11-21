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
    icon: <i className="fas fa-user text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/roadside-assistance-app-development/p4.webp",
    additionalDetails: [
      { details: "Profile Management", emoji: "", content: "" },
      { details: "One-Tap SOS Request", emoji: "", content: "" },
      { details: "Real-Time GPS Tracking", emoji: "", content: "" },
      { details: "Request Car Towing, Fuel, Jumpstart, Flat Tire Help", emoji: "", content: "" },
      { details: "In-App Calling & Chat", emoji: "", content: "" },
      { details: "Payment Wallet & History", emoji: "", content: "" },
      { details: "Rate & Review Services", emoji: "", content: "" },
      { details: "Track Technician’s ETA", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Service Provider App",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/roadside-assistance-app-development/p2.webp",
    additionalDetails: [
      { details: "Request Notifications & Accept/Reject Options", emoji: "", content: "" },
      { details: "Route Optimization & Navigation", emoji: "", content: "" },
      { details: "Service Status Update (Arrived, In Progress, Completed)", emoji: "", content: "" },
      { details: "Earnings Dashboard", emoji: "", content: "" },
      { details: "Availability Settings", emoji: "", content: "" },
      { details: "Live Chat with Customers", emoji: "", content: "" },
      { details: "Job History Log", emoji: "", content: "" },
      { details: "Ratings & Feedback", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Dashboard",
    icon: <i className="fas fa-cogs text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/roadside-assistance-app-development/p1.webp",
    additionalDetails: [
      { details: "User & Service Provider Management", emoji: "", content: "" },
      { details: "Request Tracking & Reports", emoji: "", content: "" },
      { details: "Secure Payment Gateway Management", emoji: "", content: "" },
      { details: "Analytics & Revenue Insights", emoji: "", content: "" },
      { details: "Promo Code & Subscription Control", emoji: "", content: "" },
      { details: "Content & Notification Management", emoji: "", content: "" },
      { details: "Multilingual Support", emoji: "", content: "" },
      { details: "GDPR-Compliant Security Controls", emoji: "", content: "" },
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
          Roadside Assistance App Panels We Develop
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          Comfygen creates on-demand roadside assistance apps for customers, service providers, and administrators. These panels help ensure fast service delivery, smooth communication, real-time tracking, and efficient business operations.
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

