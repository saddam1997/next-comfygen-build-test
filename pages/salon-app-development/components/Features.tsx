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
    img: "https://www.comfygen.com/comfygen-images/salon-app-development/customer-panel-beauty-app-development.webp",
    additionalDetails: [
      { details: "Easy Sign-Up & Login", emoji: "", content: "" },
      { details: "Browse & Book Services", emoji: "", content: "" },
      { details: "Real-Time Appointment Scheduling", emoji: "", content: "" },
      { details: "Service Ratings & Reviews", emoji: "", content: "" },
      { details: "Stylist Profile Viewing", emoji: "", content: "" },
      { details: "In-App Payments & Invoices", emoji: "", content: "" },
      { details: "GPS-Based Salon Discovery", emoji: "", content: "" },
      { details: "Push Notifications & Reminders", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Salon Professional Panel",
    icon: <i className="fas fa-scissors text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/salon-app-development/salon-panel-beauty-app-development.webp",
    additionalDetails: [
      { details: "Manage Availability & Bookings", emoji: "", content: "" },
      { details: "Portfolio Upload & Service Listing", emoji: "", content: "" },
      { details: "Real-Time Chat with Clients", emoji: "", content: "" },
      { details: "Earnings & Commission Tracking", emoji: "", content: "" },
      { details: "Review Management", emoji: "", content: "" },
      { details: "Daily/Weekly Schedule View", emoji: "", content: "" },
      { details: "Automated Reminders", emoji: "", content: "" },
      { details: "Service History & Analytics", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/salon-app-development/admin-panel-beauty-app-development.webp",
    additionalDetails: [
      { details: "Dashboard with Key Metrics", emoji: "", content: "" },
      { details: "Manage Users & Professionals", emoji: "", content: "" },
      { details: "Approve/Reject Vendor Listings", emoji: "", content: "" },
      { details: "Revenue & Commission Settings", emoji: "", content: "" },
      { details: "Track Appointments & Cancellations", emoji: "", content: "" },
      { details: "CMS for Content & Promotions", emoji: "", content: "" },
      { details: "Offer & Discount Management", emoji: "", content: "" },
      { details: "Multi-Branch Salon Control", emoji: "", content: "" },
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
    <section className="bg-center bg-repeat bg-fixed " style={{ backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")` }}>
      <div className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95 lg:py-16 py-10">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
          We Develop Salon Apps With Advanced Panel Features
          </h2>
          <p className="text-white lg:w-1/2 mx-auto text-center">At Comfygen, we build feature-rich salon apps designed to offer a seamless experience for users, salon professionals, and business administrators. Our salon booking mobile app development solutions include smart panel integrations that simplify operations, improve engagement, and support end-to-end salon management — all in one powerful app.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${openedFeature?.id === feature.id
                ? "bg-white hover:bg-gray-100"
                : "bg-[#5556D1] text-white border-[#5556D1]"
                }`}>
              <button
                className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
                onClick={() => handleButtonClick(feature)}>
                {feature.title}
              </button>
            </div>
          ))}
        </div>
        {openedFeature && (
          <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12">
            {openedFeature.img && (
              <div className="mb-4 flex mx-auto ">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  width={1920}
                  height={1280}
                  className="w-full border border-[#fff]/10 rounded-lg"
                />
              </div>
            )}
            <div className="mt-2 py-2 mx-4">
              {openedFeature.additionalDetails.map((detail, index) => (
                <ul className="max-w-xl" key={index}>
                  <li className="py-4 border-b border-[#fff] flex justify-start place-items-center gap-8">
                    <div>
                      <h3 className="text-white">{detail?.details}</h3>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;

