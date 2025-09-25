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
    title: "AI-Based Mobile Banking Application",
    icon: <i className="fas fa-robot text-4xl"></i>,
    img: "https://www.comfygen.com/image/ai-banking-app.webp",
    additionalDetails: [
      { details: "AI-Powered Chatbots and Virtual Assistance", emoji: "", content: "Intelligent bots offer 24/7 support, handle queries, and reduce support costs with human-like interactions." },
      { details: "Personalized Financial Insights", emoji: "", content: "AI analyzes user behavior to offer budget tips, saving goals, and personalized financial planning." },
      { details: "Smart Fraud Detection", emoji: "", content: "Real-time monitoring of transactions using AI helps prevent unauthorized activity and enhances security." },
      { details: "Automated Credit Scoring & Loan Underwriting", emoji: "", content: "AI evaluates creditworthiness with broader data, improving loan approval accuracy and speed." },
      { details: "Voice and Biometric Banking Interfaces", emoji: "", content: "Secure and hands-free access using face, fingerprint, iris, and voice command authentication." },
    ],
  },
  {
    id: 2,
    title: "Blockchain-Based Mobile Banking Features",
    icon: <i className="fas fa-link text-4xl"></i>,
    img: "https://www.comfygen.com/image/blockchain-banking-app.webp",
    additionalDetails: [
      { details: "Enhanced Security and Transparency", emoji: "", content: "End-to-end encryption with blockchain ensures secure, tamper-proof transactions and boosts customer trust." },
      { details: "Faster and Cheaper Transactions", emoji: "", content: "Near-instant, low-cost transfers by eliminating intermediaries—ideal for global and DeFi payments." },
      { details: "Immutable Record Keeping", emoji: "", content: "Once recorded on the blockchain, transaction data can't be altered, ensuring compliance and trust." },
      { details: "Decentralization and Trust", emoji: "", content: "No central authority means more transparency and fair access for users, disrupting traditional banking." },
      { details: "Smart Contracts and Automation", emoji: "", content: "Self-executing contracts for loans, payments, and claims reduce delays and manual effort." },
    ],
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
            AI and Blockchain-Based Mobile Banking Application Development Solutions
          </h2>
          <p className="text-white lg:w-1/2 mx-auto text-center">
            At Comfygen, we deliver AI and Blockchain-powered mobile banking app development solutions that redefine digital finance. By integrating artificial intelligence and decentralized technologies, we empower banking apps to be smarter, safer, and more efficient.
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
                <h3 className="text-xl font-semibold mb-2 text-[#272868]">{detail.details}</h3>
                <p className="text-gray-700">{detail.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
