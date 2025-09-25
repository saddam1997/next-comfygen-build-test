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
    title: "Patient Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/customer-panel-medicine-delivery-app-development.png",
    additionalDetails: [
      { details: "Simple Registration & Profile Management", emoji: "", content: "" },
      { details: "Search & Connect with Doctors", emoji: "", content: "" },
      { details: "Easy Appointment Booking & Rescheduling", emoji: "", content: "" },
      { details: "Secure Video & Audio Consultations", emoji: "", content: "" },
      { details: "Chat & Secure Messaging", emoji: "", content: "" },
      { details: "Prescription Management", emoji: "", content: "" },
      { details: "Payment & Billing Options", emoji: "", content: "" },
      { details: "Notifications & Reminders", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Doctor Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/pharmacy-panel-image-medicine-delivery-app-development.png",
    additionalDetails: [
      { details: "Doctor Registration & Profile Setup ", emoji: "", content: "" },
      { details: "Manage Appointments & Availability", emoji: "", content: "" },
      { details: "Access Patient Medical History", emoji: "", content: "" },
      { details: "Secure Video & Audio Calls", emoji: "", content: "" },
      { details: "E-Prescription Management", emoji: "", content: "" },
      { details: "Chat & File Sharing with Patients", emoji: "", content: "" },
      { details: "Billing & Payment Tracking", emoji: "", content: "" },
      { details: "Data-Driven Analytics & Reports", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    img: "https://www.comfygen.com/image/admin-panel-medicine-delivery-app-development.png",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "User & Doctor Management", emoji: "", content: "" },
      { details: "Appointment Scheduling Oversight", emoji: "", content: "" },
      { details: "Financial Reports & Payment Management", emoji: "", content: "" },
      { details: "Content Management for App Updates ", emoji: "", content: "" },
      { details: "Advanced Analytics & Performance Tracking", emoji: "", content: "" },
      { details: "Push Notifications & Alerts", emoji: "", content: "" },
      { details: "Regulatory Compliance & Data Security Controls", emoji: "", content: "" }
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
    <div className="lg:py-16 py-10 bg-[#fff]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
        Features We Implement in Your Telemedicine Mobile App to Make it Stand Out
        </h2>
        <p className="text-base text-center font-normal lg:w-1/2 w-full mx-auto">Our telemedicine app development company focuses on creating apps that deliver seamless experiences for patients, doctors, and administrators. Here’s a look at the key features we include in your telemedicine app development solutions to ensure they stand out:       </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
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

