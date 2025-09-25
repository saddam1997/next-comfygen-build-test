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
    title: "Admin Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/admin-panel-finance-app-development.webp",
    additionalDetails: [
      { details: "User & Role Management", emoji: "", content: "" },
      { details: "Transaction Monitoring", emoji: "", content: "" },
      { details: "KYC & Compliance Management ", emoji: "", content: "" },
      { details: "AI-Powered Analytics ", emoji: "", content: "" },
      { details: "Fraud Detection & Risk Management ", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "User Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/user-panel-finance-app-development.webp",
    additionalDetails: [
      { details: "Intuitive Dashboard ", emoji: "", content: "" },
      { details: "Secure Payment Gateways ", emoji: "", content: "" },
      { details: "Automated Expense Tracking ", emoji: "", content: "" },
      { details: "Multi-Currency Support ", emoji: "", content: "" },
      { details: "Push Notifications & Alerts ", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Agent Panel",
    img: "https://www.comfygen.com/image/agent-panel-finance-app-development.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Loan & Credit Management ", emoji: "", content: "" },
      { details: "Investment Portfolio Management ", emoji: "", content: "" },
      {
        details: "Instant Support & Query Management ",
        emoji: "",
        content: "",
      },
      { details: "Commission & Revenue Tracking ", emoji: "", content: "" },
      { details: "Customer KYC & Verification ", emoji: "", content: "" },
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
          We Develop FinTech Apps With Advanced Panel Features
        </h2>
        <p className="text-base text-black text-center lg:w-1/2 w-full mx-auto">
          At Comfygen, we specialize in Custom Finance App Development,
          integrating advanced panel features to enhance user experience,
          security, and operational efficiency. Our Fintech App Development
          Services are tailored for banks, financial institutions, and startups,
          ensuring seamless transactions, AI-driven insights, and high-end
          security protocols.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            onClick={() => handleButtonClick(feature)}
            className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${
              openedFeature?.id === feature.id
                ? "bg-[#5556D1] text-white border-[#5556D1]"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <div className="text-lg font-medium p-2 focus:outline-none">
              {" "}
              {feature.title}
            </div>
          </div>
        ))}
      </div>
      {openedFeature && (
        <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          {openedFeature.img && (
            <div className="mb-4 flex mx-auto w-full">
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
