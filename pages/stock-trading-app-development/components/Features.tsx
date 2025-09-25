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
    title: "AI-Powered Trading App Development",
    icon: <i className="fas fa-robot text-4xl"></i>,
    img: "https://www.comfygen.com/image/ai-banking-app.webp",
    additionalDetails: [
      {
        details: "Predictive Trading Insights",
        emoji: "",
        content: "AI models analyze historical and real-time market data to predict stock trends, helping users make smarter, more informed investment decisions with minimal guesswork."
      },
      {
        details: "Behavior-Based Portfolio Optimization",
        emoji: "",
        content: "Our <a class='text-blue-500 font-semibold' href='/ai-development'  >AI-based stock trading app development</a> studies individual user behavior, risk tolerance, and investment patterns to auto-suggest personalized portfolio strategies tailored for better returns."
      },
      {
        details: "AI-Driven Sentiment Analysis",
        emoji: "",
        content: "We leverage NLP algorithms to scan news, tweets, and market chatter, delivering real-time sentiment analysis to help traders react faster to market-moving events."
      },
      {
        details: "Dynamic Risk Assessment Engine",
        emoji: "",
        content: "Our smart engine calculates user-specific risk in real-time, flagging risky trades and optimizing asset allocations based on current volatility levels."
      },
      {
        details: "Adaptive Learning Algorithms",
        emoji: "",
        content: "Machine learning models continuously evolve based on user behavior and market changes, ensuring the app’s trading logic improves over time."
      },
      {
        details: "Automated Trading Bot",
        emoji: "",
        content: "Our <a class='text-blue-500 font-semibold' href='/crypto-trading-bot-development' >crypto trading bot development</a>  executes buy/sell orders automatically based on predefined user rules, market patterns, and predictive analytics to capitalize on profitable opportunities."
      },
      {
        details: "Voice-Controlled Trade Commands",
        emoji: "",
        content: "Enable hands-free trading through secure voice recognition that lets users place trades, check stock prices, or request portfolio updates effortlessly."
      },
      {
        details: "Emotion-Aware Trading Alerts",
        emoji: "",
        content: "AI detects emotional trading patterns and alerts users to take a step back when making impulsive decisions, encouraging better trading discipline."
      },
      {
        details: "User Behavior Anomaly Detection",
        emoji: "",
        content: "Detects irregular trading activity or login behavior using AI models to flag suspicious actions and prevent unauthorized access or errors."
      }
    ]
    
  },
  {
    id: 2,
    title: "Blockchain-Based Trading App Development",
    icon: <i className="fas fa-link text-4xl"></i>,
    img: "https://www.comfygen.com/image/blockchain-banking-app.webp",
    additionalDetails: [
      {
        details: "Decentralized Trade Settlement",
        emoji: "",
        content: `Using <a href="/blockchain-development" class="text-blue-500 font-semibold">blockchain development</a>, trades are settled in near real-time without relying on central intermediaries, improving speed, transparency, and reducing operational costs.`
      },
      {
        details: "Tokenized Asset Support",
        emoji: "",
        content: "Support for tokenized stocks and commodities enables fractional ownership and 24/7 trading, making financial markets more inclusive and liquid."
      },
      {
        details: "Zero-Knowledge Proof Authentication",
        emoji: "",
        content: "Privacy-focused authentication ensures identity verification without revealing sensitive data, delivering enhanced privacy without compromising security."
      },
      {
        details: "Blockchain-Based Audit Trails",
        emoji: "",
        content: "Immutable, timestamped records of every transaction provide end-to-end transparency for compliance, dispute resolution, and investor confidence."
      },
      {
        details: "Smart Compliance Automation",
        emoji: "",
        content: `<a href="/smart-contract-development" class="text-blue-500 font-semibold">Smart contracts</a> automatically enforce compliance rules, such as KYC and AML checks, reducing regulatory overhead and manual reviews.`
      },
      {
        details: "Cross-Border Blockchain Payments",
        emoji: "",
        content: "Enable low-fee, real-time international transfers for investors using crypto or fiat, reducing time and costs associated with traditional banking systems."
      },
      {
        details: "Decentralized Identity Management (DID)",
        emoji: "",
        content: "Give users full control over their identity with blockchain-based digital IDs, reducing fraud and simplifying onboarding across platforms."
      },
      {
        details: "Blockchain-Powered Voting Rights",
        emoji: "",
        content: "Empower shareholders with blockchain-based voting systems that are tamper-proof, transparent, and instantly verifiable—ideal for managing equity and governance securely."
      },
      {
        details: "Smart Escrow for Trade Settlements",
        emoji: "",
        content: "Use blockchain-based smart escrow systems to automate asset delivery only upon fulfillment of contract terms, ensuring secure peer-to-peer trading."
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
          AI & Blockchain-Based Trading App Development Solutions
          </h2>
          <p className="text-white lg:w-1/2 mx-auto text-center">
          At Comfygen, we harness the power of artificial intelligence and blockchain to revolutionize trading experiences. Our next-gen AI & Blockchain-Based stock trading app development solutions bring real-time decision-making, unmatched security, and intelligent automation to today’s dynamic stock markets.
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
