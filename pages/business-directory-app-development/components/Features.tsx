import React, { useState } from "react";
import Image from "next/image";

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
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/business-directory-app-development/customer.webp",
    additionalDetails: [
      { details: "Easy Sign-up & Location-Based Search", emoji: "", content: "" },
      { details: "Advanced Category & Filter Options", emoji: "", content: "" },
      { details: "Business Profile Viewing with Ratings/Reviews", emoji: "", content: "" },
      { details: "Map Integration for Nearby Results", emoji: "", content: "" },
      { details: "Direct Call, Chat, or Inquiry Options", emoji: "", content: "" },
      { details: "Bookmarking & Favorite Listings", emoji: "", content: "" },
      { details: "Instant Push Notifications", emoji: "", content: "" },
      { details: "Review & Feedback Submission", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Business/Vendor Panel",
    icon: <i className="fas fa-store text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/business-directory-app-development/vendor.webp",
    additionalDetails: [
      { details: "Easy Profile Setup & Service Listing", emoji: "", content: "" },
      { details: "Add Photos, Descriptions & Contact Details", emoji: "", content: "" },
      { details: "Real-time Inquiry Management", emoji: "", content: "" },
      { details: "View Customer Ratings & Feedback", emoji: "", content: "" },
      { details: "Business Performance Dashboard", emoji: "", content: "" },
      { details: "Premium Listing & Ad Promotion Options", emoji: "", content: "" },
      { details: "Update Availability & Location Info", emoji: "", content: "" },
      { details: "Notification & Alert Center", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-user-shield text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/business-directory-app-development/admin.webp",
    additionalDetails: [
      { details: "User & Vendor Management Console", emoji: "", content: "" },
      { details: "Listing Approval & Moderation", emoji: "", content: "" },
      { details: "Manage Categories, Tags & Filters", emoji: "", content: "" },
      { details: "Analytics Dashboard & Reporting Tools", emoji: "", content: "" },
      { details: "Advertisement & Monetization Control", emoji: "", content: "" },
      { details: "CMS Integration for Content Updates", emoji: "", content: "" },
      { details: "Spam Control & Review Monitoring", emoji: "", content: "" },
      { details: "Multi-role Access Permissions", emoji: "", content: "" },
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
            Key Panels of Our Business Directory App
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          At Comfygen, we integrate At Comfygen, we develop business directory
            apps with distinct user roles to streamline operations and enhance
            usability. Whether you're an app visitor, a listed business, or an
            admin managing the platform, each panel is equipped with intuitive
            features for seamless performance and better engagement.
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
