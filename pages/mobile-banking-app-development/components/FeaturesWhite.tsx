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
    icon: <i className="fas fa-user-shield text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/banking-user-panel.webp",
    additionalDetails: [
      { details: "Easy Registration & Secure Login", emoji: "", content: "" },
      { details: "Balance & Transaction Overview", emoji: "", content: "" },
      { details: "Quick Fund Transfers", emoji: "", content: "" },
      { details: "Bill Payment & Recharges", emoji: "", content: "" },
      { details: "Card Management", emoji: "", content: "" },
      { details: "Transaction Alerts", emoji: "", content: "" },
      { details: "Personalized Finance Tools", emoji: "", content: "" },
      { details: "24/7 Support", emoji: "", content: "" },
      { details: "Top-Level Security", emoji: "", content: "" }
    ],
  },
  {
    id: 2,
    title: "Admin Panel",
    icon: <i className="fas fa-user-cog text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/banking-admin-panel.webp",
    additionalDetails: [
      { details: "User Management", emoji: "", content: "" },
      { details: "Real-Time Transaction Monitoring", emoji: "", content: "" },
      { details: "Fund Transfer Approvals", emoji: "", content: "" },
      { details: "Interactive Dashboards", emoji: "", content: "" },
      { details: "Comprehensive Reporting", emoji: "", content: "" },
      { details: "Automated Notifications", emoji: "", content: "" },
      { details: "Regulatory Compliance", emoji: "", content: "" },
      { details: "Role-Based Permissions", emoji: "", content: "" },
      { details: "Support Management", emoji: "", content: "" }
    ],
  }
];


const FeaturesWhite: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(
    featuresData[0]
  );
  const handleButtonClick = (feature: Feature) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  return (
    <section className="bg-center bg-repeat bg-fixed">
      <div className="bg-white lg:py-16 py-10">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-black">
          
          We Develop Mobile Banking Apps With Advanced Panel Features
          </h2>
          <p className="text-black lg:w-1/2 mx-auto text-center">
          At Comfygen, we specialize in creating mobile banking apps with advanced panel features designed to enhance the user experience while providing comprehensive control and management tools for administrators.

          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border cursor-pointer ${
                openedFeature?.id === feature.id
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
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
          <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12">
            {openedFeature.img && (
              <div className="mb-4 flex mx-auto">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  width={1920}
                  height={1280}
                  className="w-full border border-gray-200 rounded-lg"
                />
              </div>
            )}
            <div className="mt-2 py-2 mx-4">
              {openedFeature.additionalDetails.map((detail, index) => (
                <ul className="max-w-xl" key={index}>
                  <li className="py-4 border-b border-gray-300 flex justify-start place-items-center gap-8">
                    <div>
                      <h3 className="text-black">{detail?.details}</h3>
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

export default FeaturesWhite;
