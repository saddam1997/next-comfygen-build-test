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
    icon: <i className="fas fa-user text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/car-finance-app-development/p3.webp", 
    additionalDetails: [
      { details: "Easy Registration & KYC", emoji: "", content: "" },
      { details: "Car Loan Eligibility Checker", emoji: "", content: "" },
      { details: "EMI Calculator & Loan Simulator", emoji: "", content: "" },
      { details: "Loan Application Form", emoji: "", content: "" },
      { details: "Document Upload & Status Tracking", emoji: "", content: "" },
      { details: "Real-Time Credit Score Checker", emoji: "", content: "" },
      { details: "Loan Comparison & Selection", emoji: "", content: "" },
      { details: "EMI Reminder Notifications", emoji: "", content: "" },
      { details: "Repayment History Tracker", emoji: "", content: "" },
      { details: "Profile and Loan Dashboard", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Admin Panel",
    icon: <i className="fas fa-cogs text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/car-finance-app-development/p2.webp", 
    additionalDetails: [
      { details: "User and Loan Application Management", emoji: "", content: "" },
      { details: "Loan Product Creation & Customization", emoji: "", content: "" },
      { details: "EMI Collection and Payment Tracking", emoji: "", content: "" },
      { details: "KYC and Document Verification Tools", emoji: "", content: "" },
      { details: "Credit Score API Integration", emoji: "", content: "" },
      { details: "Push Notification Management", emoji: "", content: "" },
      { details: "Real-Time Reporting & Analytics", emoji: "", content: "" },
      { details: "Auto-approval & Manual Review Settings", emoji: "", content: "" },
      { details: "Admin Dashboard for Data Control", emoji: "", content: "" },
      { details: "Customer Support Chat Access", emoji: "", content: "" },
    ],
  }
];
;

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
          We Develop Car Finance Apps with Advanced Panel Features
          </h2>
          <p className="text-white lg:w-1/2 mx-auto text-center">At Comfygen, we integrate Comfygen builds powerful car finance apps with smart AI features for users and administrators. Each panel of our car loan app development company supports fast, secure, and simplified auto loan processes. Car finance app development solutions offer seamless experiences for all stakeholders, from applying for a loan to managing repayments.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 mt-10 ">
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

