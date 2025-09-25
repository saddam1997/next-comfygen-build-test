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
    title: "Normal Features",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/normal-features-image.webp",
    additionalDetails: [
      { details: "User Registration and Login", emoji: "", content: "" },
      { details: "Course Categories and Browsing", emoji: "", content: "" },
      { details: "Video Lectures and Study Material", emoji: "", content: "" },
      { details: "Quizzes and Assignments", emoji: "", content: "" },
      { details: "Push Notifications", emoji: "", content: "" },
      { details: "Live Class Scheduling", emoji: "", content: "" },
      { details: "Payment Gateway Integration", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Advanced Features",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/advanced-features-image.webp",
    additionalDetails: [
      { details: "Gamification Elements", emoji: "", content: "" },
      { details: "Live Classes and Real-Time Interactions", emoji: "", content: "" },
      { details: "Offline Mode", emoji: "", content: "" },
      { details: "Advanced Analytics and Reporting", emoji: "", content: "" },
      { details: "Multi-Language Support", emoji: "", content: "" },
      { details: "AI Chatbot for Support", emoji: "", content: "" },
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
            Essential Features of the e-learning app
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
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
          <div className="mt-6 w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2">
            {openedFeature.img && (
              <div className="mb-4 flex mx-auto w-[60%]">
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

