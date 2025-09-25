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
    img: "https://www.comfygen.com/comfygen-images/home-services-app-development/customer2.webp",
    additionalDetails: [
      { details: "Easy service booking", emoji: "", content: "" },
      { details: "Real-time service tracking", emoji: "", content: "" },
      { details: "In-app chat with providers", emoji: "", content: "" },
      { details: "Secure online payments", emoji: "", content: "" },
      { details: "Ratings and reviews", emoji: "", content: "" },
      { details: "Order history & rebooking", emoji: "", content: "" },
      { details: "Notifications & alerts", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Service Provider Panel",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/home-services-app-development/service2.webp",
    additionalDetails: [
      { details: "Accept/reject service requests", emoji: "", content: "" },
      { details: "View daily job schedule", emoji: "", content: "" },
      { details: "In-app navigation & route details", emoji: "", content: "" },
      { details: "Service history & earnings", emoji: "", content: "" },
      { details: "Real-time status updates", emoji: "", content: "" },
      { details: "Chat with users", emoji: "", content: "" },
      { details: "Availability toggle (on/off duty)", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Vendor Panel",
    icon: <i className="fas fa-briefcase text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/home-services-app-development/vendor2.webp",
    additionalDetails: [
      { details: "Manage team & service listings", emoji: "", content: "" },
      { details: "Assign tasks to providers", emoji: "", content: "" },
      { details: "Track earnings and payouts", emoji: "", content: "" },
      { details: "View customer feedback", emoji: "", content: "" },
      { details: "Inventory & availability tracking", emoji: "", content: "" },
      { details: "Performance insights", emoji: "", content: "" },
      { details: "Subscription or commission setup", emoji: "", content: "" },
    ],
  },
  {
    id: 4,
    title: "Admin Dashboard",
    icon: <i className="fas fa-cogs text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/home-services-app-development/admin2.webp",
    additionalDetails: [
      { details: "Manage users & service providers", emoji: "", content: "" },
      { details: "Add/edit/delete services", emoji: "", content: "" },
      { details: "Track bookings & revenue", emoji: "", content: "" },
      { details: "Approve/verify service providers", emoji: "", content: "" },
      { details: "Offer coupons & discounts", emoji: "", content: "" },
      { details: "Analytics & performance reports", emoji: "", content: "" },
      { details: "App settings & configurations", emoji: "", content: "" },
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
    <section className="bg-center bg-repeat bg-fixed " style={{ backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")` }}>
      <div className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95 lg:py-16 py-10">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
          Fully Functional App Panels Tailored for Home Service Businesses
          </h2>
          <p className="text-white lg:max-w-6xl mx-auto text-center">At Comfygen Technologies, we develop powerful, easy-to-use home service app panels tailored to all user types. Whether you’re a customer, service provider, admin, or vendor, we create feature-rich panels to manage and grow your business smoothly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 mt-10 ">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border border-gray-300 cursor-pointer max-w-[450px] ${openedFeature?.id === feature.id
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
          <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 items-center">
            {openedFeature.img && (
              <div className="mb-4 flex mx-auto ">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  unoptimized
                  width={500}
                  height={500}
                  className="w-full md:h-[300px] lg:h-[400px] border pb-3 sm:pb-0 border-[#fff]/10 rounded-lg"
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

