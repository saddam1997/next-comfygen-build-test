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
    title: "Students Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/student-panel-tutor-app-development.webp",
    additionalDetails: [
      { details: "Easy Registration", emoji: "", content: "" },
      { details: "Profile Management", emoji: "", content: "" },
      { details: "Search and Filter Tutors", emoji: "", content: "" },
      { details: "Live Video/Audio Classes", emoji: "", content: "" },
      { details: "Instant Chat with Teachar", emoji: "", content: "" },
      { details: "Discussion Forums", emoji: "", content: "" },
      { details: "Video Consultation with Teachers", emoji: "", content: "" },
      { details: "Secure Payment Gateways", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Tutors Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/tutor-panel-tutor-app-development.webp",
    additionalDetails: [
      { details: "Profile Creation", emoji: "", content: "" },
      { details: "Course Listing", emoji: "", content: "" },
      { details: "Class Scheduling & Calendar Integration", emoji: "", content: "" },
      { details: "Virtual Whiteboard for Interactive Teaching", emoji: "", content: "" },
      { details: "Enable Tests", emoji: "", content: "" },
      { details: "Performance Analytics & Feedback", emoji: "", content: "" },
      { details: "Payment Tracking & Earnings Dashboard", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admins Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/admin-panel-tutor-app-development.webp",
    additionalDetails: [
      { details: "User & Content Management", emoji: "", content: "" },
      { details: "Subscription & Monetization Control", emoji: "", content: "" },
      { details: "AI-powered Recommendations System", emoji: "", content: "" },
      { details: "Driver and Delivery Management", emoji: "", content: "" },
      { details: "Controlling the Content", emoji: "", content: "" },
      { details: "Security & Data Protection", emoji: "", content: "" }
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
          We Develop Tutor Apps With Advanced Panel Features
          </h2>
          <p className="text-white lg:w-1/2 mx-auto text-center">At Comfygen, we integrate cutting-edge features into our tutor app development services to enhance user experience, streamline management, and optimize learning processes. Our on-demand tutor mobile app development services include advanced panels for students, tutors, and administrators, securing a seamless and efficient platform.</p>
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

