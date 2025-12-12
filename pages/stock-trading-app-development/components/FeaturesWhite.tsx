import React, { useEffect, useState } from "react";
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
    title: "Trader Panel",
    icon: <i className="fas fa-chart-line text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-trader-panel.webp",
    additionalDetails: [
      { emoji: "📈", details: "Real-time stock, forex, and crypto market data", content: "" },
      { emoji: "🛒", details: "One-click buy/sell order execution", content: "" },
      { emoji: "🤖", details: "AI-based trading suggestions and signals", content: "" },
      { emoji: "⭐", details: "Personalized watchlist and portfolio management", content: "" },
      { emoji: "🔔", details: "Push notifications for market alerts and news", content: "" },
      { emoji: "🔐", details: "Secure biometric and two-factor authentication", content: "" },
      { emoji: "💳", details: "Seamless fund deposit and withdrawal options", content: "" },
      { emoji: "📊", details: "Trade history and performance analytics dashboard", content: "" },
      { emoji: "💬", details: "In-app chat and ticket-based support system", content: "" },
    ],
  },
  {
    id: 2,
    title: "Admin Panel",
    icon: <i className="fas fa-user-shield text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-admin-panel.webp",
    additionalDetails: [
      { emoji: "👥", details: "Centralized user and account management", content: "" },
      { emoji: "📡", details: "Live monitoring of trades and transactions", content: "" },
      { emoji: "🧾", details: "Automated KYC and AML verification tools", content: "" },
      { emoji: "💰", details: "Customizable fee and commission settings", content: "" },
      { emoji: "📣", details: "Platform-wide notifications and announcements", content: "" },
      { emoji: "🛡️", details: "Real-time fraud detection and reporting system", content: "" },
      { emoji: "📈", details: "Detailed revenue, tax, and earnings reports", content: "" },
      { emoji: "🖼️", details: "CMS for updating banners, FAQs, and news", content: "" },
      { emoji: "📝", details: "Audit logs and admin activity tracking", content: "" },
    ],
  },
  {
    id: 3,
    title: "Broker Panel",
    icon: <i className="fas fa-briefcase text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-broker-panel.webp",
    additionalDetails: [
      { emoji: "📊", details: "Multi-client portfolio tracking and management", content: "" },
      { emoji: "⚙️", details: "Manual and auto trade execution tools", content: "" },
      { emoji: "📉", details: "Commission and brokerage performance dashboard", content: "" },
      { emoji: "📞", details: "Private client communication (chat/call/email)", content: "" },
      { emoji: "🚨", details: "Alerts for client order triggers and stop loss", content: "" },
      { emoji: "🔍", details: "Access to market insights and analytics tools", content: "" },
      { emoji: "⭐", details: "Custom asset watchlists per client", content: "" },
      { emoji: "🧾", details: "Report generation for transactions and earnings", content: "" },
      { emoji: "✅", details: "Compliance tools for trade validation and audit", content: "" },
    ],
  },
  {
    id: 4,
    title: "Analyst Panel",
    icon: <i className="fas fa-chart-pie text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-analyst-panel1.webp",
    additionalDetails: [
      { emoji: "📈", details: "Live technical and fundamental analysis tools", content: "" },
      { emoji: "📊", details: "Customizable multi-chart view with indicators", content: "" },
      { emoji: "📉", details: "Sentiment and volatility analysis dashboard", content: "" },
      { emoji: "🤖", details: "AI-based trend forecasting models", content: "" },
      { emoji: "📚", details: "Historical data for stock backtesting", content: "" },
      { emoji: "📝", details: "Trade and research reports", content: "" },
      { emoji: "📈", details: "Comparative stock and asset evaluation", content: "" },
      { emoji: "🗓️", details: "Economic calendar", content: "" },
      { emoji: "🔔", details: "Watchlist tracking with predictive alert system", content: "" },
    ],
  }
];

const AdvanceFunction: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(null);

  useEffect(() => {
  setOpenedFeature(featuresData[0]);
}, []);


  const handleButtonClick = (feature: Feature) => {
    setOpenedFeature(openedFeature === feature ? null : feature);
  };

  return (
    <div className="py-10 bg-white">
      <div className="space-y-4 w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold text-center">
        We Deliver Advanced Feature Panels in Your Stock Trading App

        </h2>
        <p className="text-base text-slate-800 text-center">
        We offer 4 robust feature panels to ensure your stock trading app delivers a seamless, secure, and high-performance experience for all user types—Traders, Admins, Brokers, and Analysts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 p-2 w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 border-2 rounded-full border-[#5556D1]/10">
        {featuresData?.map((feature) => (
          <div
          onClick={() => handleButtonClick(feature)}
            key={feature.id}
            className={`relative rounded-full flex justify-center items-center transition-all duration-300 cursor-pointer ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-teal-500"
              : "bg-white hover:bg-gray-100"
              }`}
          >
            <button
              className="text-lg font-medium p-2 focus:outline-none"
              
            >
              {feature.title}
            </button>
          </div>
        ))}
      </div>

      {openedFeature && (
        <div className="items-center  mt-6 lg:w-[80%] w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-2">
          {openedFeature?.img && (
            <div className="my-4">
              <Image
                className="mx-auto md:w-[80%]"
                src={openedFeature?.img}
                alt={openedFeature?.title}
                height={640}
                width={373}
              />
            </div>
          )}

          <div className="mt-2 py-2 mx-4">
            {openedFeature?.additionalDetails?.map((detail, index) => (
              <ul className="max-w-xl" key={index}>
                <li className="py-4 border-b border-green-200 flex justify-start items-center gap-8">
                  {detail.emoji.startsWith("http") ? (
                    <Image
                      src={detail.emoji}
                      alt={detail.details}
                      height={30}
                      width={30}
                    />
                  ) : (
                    <span className="text-2xl">{detail.emoji}</span>
                  )}
                  <div>
                    <h3>{detail.details}</h3>
                    <span>{detail.content}</span>
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

export default AdvanceFunction;
