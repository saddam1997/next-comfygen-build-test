import React, { useState } from "react";

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
    title: "AI-Based Insurance App Development",
    icon: <i className="fas fa-robot text-4xl"></i>,
    img: "https://www.comfygen.com/image/ai-banking-app.webp",
    additionalDetails: [
      {
        details: "AI-Powered Virtual Assistants & Chatbots",
        emoji: "",
        content: "Intelligent bots handle policy inquiries, file claims, and offer instant support. Our AI-based insurance app development features streamline customer service while reducing operational overhead for insurance providers."
      },
      {
        details: "Predictive Risk Assessment",
        emoji: "",
        content: "AI analyzes user data, behavior, and patterns to predict insurance risks more accurately. This enhances underwriting accuracy and supports smart policy pricing models for various insurance products."
      },
      {
        details: "Smart Claims Processing",
        emoji: "",
        content: "Our <a class='text-blue-500 font-semibold ' href='https://www.comfygen.com/ai-development'>AI-based insurance app development</a> includes automation tools that validate claims through image recognition, historical data, and NLP, drastically reducing processing times and minimizing fraud risks."
      },
      {
        details: "Fraud Detection & Prevention",
        emoji: "",
        content: "AI monitors real-time user activity to flag suspicious behavior and prevent fraudulent claims. This ensures a more secure and trustworthy experience for both insurers and users."
      },
      {
        details: "Personalized Policy Recommendations",
        emoji: "",
        content: "AI delivers personalized coverage options based on user behavior, location, and preferences. Improve customer satisfaction with tailored insurance plans and proactive renewal suggestions."
      },
      {
        details: "Voice & Biometric Verification",
        emoji: "",
        content: "Enhance user security with AI-powered voice recognition and biometric login systems. Our insurance app development services ensure compliant, secure, and hands-free authentication methods."
      }
    ]
  },
  {
    id: 2,
    title: "Blockchain-Based Insurance App Development",
    icon: <i className="fas fa-link text-4xl"></i>,
    img: "https://www.comfygen.com/image/blockchain-banking-app.webp",
    additionalDetails: [
      {
        details: "Secure and Transparent Transactions",
        emoji: "",
        content: "Our <a class='text-blue-500 font-semibold underline' href='https://www.comfygen.com/blockchain-development'>blockchain-based insurance app development</a> enhances trust between insurers, agents, and policyholders through encrypted and tamper-resistant transaction records."
      },
      {
        details: "Smart Contract-Based Claims",
        emoji: "",
        content: "Automate insurance claims using <a class='text-blue-500 font-semibold underline' href='https://www.comfygen.com/smart-contract-development'>smart contracts</a> that self-execute when conditions are met. This drastically improves speed and reduces disputes in insurance settlements."
      },
      {
        details: "Decentralized Policy Management",
        emoji: "",
        content: "Blockchain enables decentralized data storage for policy and claim information, eliminating data silos and increasing accessibility across devices and platforms."
      },
      {
        details: "Immutable Audit Trails",
        emoji: "",
        content: "Every action and update on the policy is recorded immutably on the blockchain, helping insurers stay compliant and offering customers full traceability of their data."
      },
      {
        details: "Cost-Effective Settlements",
        emoji: "",
        content: "Blockchain reduces third-party involvement, cutting administrative costs and expediting policy issuance and claims—hallmarks of the best insurance app development company."
      },
      {
        details: "Cross-Border Insurance Solutions",
        emoji: "",
        content: "Our blockchain-powered apps support global, multi-jurisdictional operations. Insurers can offer borderless policies and claim settlements faster, backed by secure distributed ledgers."
      }
    ]
  }
];


const Features: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(featuresData[0]);

  const handleButtonClick = (feature: Feature) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  return (
    <section className="bg-center bg-repeat bg-fixed">
      <div className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95 lg:py-16 py-10">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
          AI and Blockchain-Based Insurance Application Development Solutions
          </h2>
          <p className="text-white lg:w-1/2 mx-auto text-center">
          Comfygen offers cutting-edge AI and blockchain-based insurance app development solutions that modernize claims, underwriting, and policy management. Providers and policyholders alike benefit from our secure, transparent, and automated insurance systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border cursor-pointer ${
                openedFeature?.id === feature.id
                  ? "bg-white hover:bg-gray-100 text-black border-gray-300"
                  : "bg-[#5556D1] text-white border-[#5556D1]"
              }`}
            >
              <button
                className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
                onClick={() => handleButtonClick(feature)}
              >
                {feature.title}
              </button>
            </div>
          ))}
        </div>

        {openedFeature && (
          <div className="mt-8 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:w-10/12 w-11/12">
            {openedFeature.additionalDetails.map((detail, index) => (
              <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#272868]">
                {detail.details}
              </h3>
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: detail.content }}
              />
            </div>
            
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
