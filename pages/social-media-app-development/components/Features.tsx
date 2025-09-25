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
    img: "https://www.comfygen.com/image/user-panel-social-media-app.webp",
    additionalDetails: [
      { details: "User Registration and Profile Creation", emoji: "", content: "" },
      { details: "Advanced Search & Filters", emoji: "", content: "" },
      { details: "Real-Time Chat & Messaging", emoji: "", content: "" },
      { details: "Newsfeed Updates with Like, Comment & Share Options", emoji: "", content: "" },
      { details: "Privacy Settings and Content Bookmarking", emoji: "", content: "" },
      { details: "Media Sharing (photos, videos, and files)", emoji: "", content: "" },
      { details: "Group Creation and Community Interaction", emoji: "", content: "" },
      { details: "Video & Audio Calling Features", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Admin Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/social-media-app-admin-panel.webp",
    additionalDetails: [
      { details: "User Management & Role Assignments", emoji: "", content: "" },
      { details: "Content Moderation Tools", emoji: "", content: "" },
      { details: "Analytics Dashboard for Insights", emoji: "", content: "" },
      { details: "Push Notification Management", emoji: "", content: "" },
      { details: "Revenue Tracking & Subscription Handling", emoji: "", content: "" },
      { details: "Ad Campaign Management", emoji: "", content: "" },
      { details: "CMS Integration for Content Updates", emoji: "", content: "" },
      { details: "Security and Performance Monitoring", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Advanced Features",
    img: "https://www.comfygen.com/image/advanced-features-social-media-app.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "AI-Powered Personalization & Recommendations", emoji: "", content: "" },
      { details: "AR/VR Integration for Immersive Experiences", emoji: "", content: "" },
      { details: "Real-Time Updates & Notifications", emoji: "", content: "" },
      { details: "Geolocation Services for Tagging & Discovery", emoji: "", content: "" },
      { details: "Live Streaming with Interactive Features", emoji: "", content: "" },
      { details: "End-to-end encryption for Secure Messaging", emoji: "", content: "" },
      { details: "Social Media & Third-Party API Integration", emoji: "", content: "" },
      { details: "Gamification Elements for Enhanced Engagement", emoji: "", content: "" },
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
    <div className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
          Top Features for Your Social Media App
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
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
                width={1920}
                height={1281}
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

