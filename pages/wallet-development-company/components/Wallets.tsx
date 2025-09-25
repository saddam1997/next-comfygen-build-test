import React, { useState } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  titlewallet: string;
  icon: JSX.Element;
  img: string;
  additionalDetails: { emoji: string; details: string; content: string }[];
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Digital Wallets",
    titlewallet: "Digital Wallets Development (E-Wallets)",
    description: "Comfygen provides advanced digital wallet development solutions to streamline payments, enhance security, and provide seamless user experiences. Our custom digital wallet development solution helps businesses, startups, and enterprises modernize transactions, enable fast and secure payments, and provide convenient, reliable digital payment experiences for their customers.",
    icon: <i className="fas fa-robot text-4xl"></i>,
    img: "",
    additionalDetails: [
      {
        details: "Mobile Wallets",
        emoji: "",
        content: "Build secure, scalable, and user-friendly mobile digital wallet apps for iOS and Android, enabling fast, on-the-go transactions with a seamless and unexpected user experience."
      },
      {
        details: "NFC / Contactless Wallets",
        emoji: "",
        content: "Develop secure tap-and-pay digital wallets that allow fast, convenient, and contactless payments, perfect for retail, transport, and everyday transactions."
      },
      {
        details: "Closed, Semi-Closed & Open Wallets ",
        emoji: "",
        content: "We develop flexible digital wallet solutions that support restricted, semi-restricted, or open-use transactions, catering to businesses, merchants, and individual users with varying transaction requirements."
      },
      {
        details: "Peer-to-Peer (P2P) Wallets",
        emoji: "",
        content: "Build secure P2P digital wallets that enable direct cryptocurrency and digital asset transfers between users without intermediaries, ensuring fast, low-cost, and decentralized transactions."
      },
      {
        details: "Gift Card & Voucher Wallets",
        emoji: "",
        content: " Create digital wallets for storing and redeeming prepaid credits, gift cards, and vouchers, offering secure, convenient, and seamless transactions for businesses and customers alike."
      },
      {
        details: "Utility Payment Wallets",
        emoji: "",
        content: " Develop digital wallets for paying electricity, water, and other utility bills directly, providing secure, fast, and convenient payment solutions for businesses and consumers."
      },

    ]
  },
  {
    id: 2,
    title: "Crypto Wallets",
    titlewallet: "Crypto Wallets Development",
    icon: <i className="fas fa-link text-4xl"></i>,
    description: "At Comfygen, we specialize in providing secure and feature-rich crypto wallet development solutions for businesses, enterprises, and individual users. Our crypto wallet development solutions are designed to store, send, and manage cryptocurrencies efficiently while providing top-most security, seamless transactions, and multi-chain support.",
    img: "",
    additionalDetails: [
      {
        details: "Hot Wallets & Cold Wallets",
        emoji: "",
        content: "Build secure online (hot) wallets for fast crypto transactions and offline (cold) wallets for maximum security, providing flexible and reliable cryptocurrency storage solutions for users and enterprises."
      },
      {
        details: "Custodial & Non-Custodial Wallets",
        emoji: "",
        content: " Develop custodial wallets managed by a trusted provider or non-custodial wallets giving users full control of private keys, ensuring secure, flexible, and user-centric cryptocurrency management."
      },
      {
        details: "Multi-Currency Wallets",
        emoji: "",
        content: "ICreate digital wallets that support multiple cryptocurrencies and tokens in a single secure platform, enabling efficient portfolio management and seamless multi-asset transactions for traders and enterprises."
      },
      {
        details: "DeFi Wallets",
        emoji: "",
        content: "Build secure decentralized wallets that allow users to access DeFi platforms, staking, yield farming, and decentralized exchanges (DEXs), providing full control, transparency, and seamless participation in the decentralized finance ecosystem."
      },
      {
        details: "NFT Wallets",
        emoji: "",
        content: " Develop secure crypto wallets for storing, trading, and showcasing NFTs, with built-in marketplace integration for collectors, artists, and gamers, enabling safe and seamless NFT management across multiple chains."
      },
      {
        details: "Multi-Signature Wallets",
        emoji: "",
        content: "Create crypto wallets that require multiple approvals for transactions, ensuring enhanced security, reduced risk of unauthorized access, and safer management of high-value digital assets."
      },
      {
        details: "Blockchain-Specific Wallets",
        emoji: "",
        content: " Build custom wallets tailored for specific blockchains like Bitcoin, Ethereum, BSC, Polygon, Solana, and more, offering optimized features, token compatibility, and secure transactions for each network."
      },
      {
        details: "Cross-Chain Wallets",
        emoji: "",
        content: " Develop interoperable crypto wallets that allow users to manage assets seamlessly across multiple blockchains, enabling efficient multi-chain transactions, portfolio diversification, and enhanced blockchain accessibility."
      },
      {
        details: "Smart Contract Wallets",
        emoji: "",
        content: "Build crypto wallets integrated with smart contracts to automate transactions, agreements, and decentralized operations, enabling secure, efficient, and self-executing workflows for DeFi, DAOs, and enterprise blockchain ecosystems."
      }
    ]
  },
  {
    id: 3,
    title: "Finance & Banking Wallet",
    titlewallet: "Finance & Banking Wallet development",
    icon: <i className="fas fa-link text-4xl"></i>,
    description: "At Comfygen, we develop finance and banking wallets that enable businesses, banks, and financial institutions to offer secure, fast, and seamless digital transactions. Our Finance & Banking wallets are designed to support mobile banking, corporate finance, and payment bank operations with advanced features for transaction management, compliance, and reporting.",
    img: "",
    additionalDetails: [
      {
        details: "Mobile Banking Wallets",
        emoji: "",
        content: " Create safe, secure, and feature-rich mobile banking wallets that integrate traditional banking services, enabling users to check balances, transfer funds, pay bills, and manage accounts on the go with a seamless mobile experience."
      },
      {
        details: "Payment Bank Wallets",
        emoji: "",
        content: "Build Payment Bank wallets for microfinance, remittances, and everyday payments, offering secure, fast, and cost-effective financial transactions for individuals, businesses, and banking institutions."
      },
      {
        details: "Corporate Finance Wallets",
        emoji: "",
        content: "Develop safe and secure corporate finance wallets to manage payroll, expenses, vendor payments, and high-value transactions, ensuring compliance, transparency, and efficient financial operations for businesses and organizations."
      },
      {
        details: "Investment Wallets ",
        emoji: "",
        content: "Build digital Investment wallets for tracking stocks, mutual funds, and cryptocurrency investments, providing users with real-time portfolio insights, performance analytics, and secure management of diverse financial assets."
      },

    ]
  },
  {
    id: 4,
    title: "Specialized Wallet",
    titlewallet: "Specialized Wallet development",
    icon: <i className="fas fa-link text-4xl"></i>,
    description: "At Comfygen, we develop innovative, specialized wallets developed for niche industries and unique business needs. Our Specialized Wallet development service provides secure, seamless, and feature-rich digital solutions for gaming, travel, healthcare, loyalty programs, IoT, and more.",
    img: "",
    additionalDetails: [
      {
        details: "Gaming Wallets Development",
        emoji: "",
        content: "Create secure gaming wallets for in-game currency storage, purchases, and transaction management, providing gamers and developers with seamless, real-time, and efficient gaming payment solutions."
      },
      {
        details: "Travel Wallets",
        emoji: "",
        content: " Build digital travel wallets for travelers with currency conversion, booking payments, and secure transaction management, offering seamless, cashless, and convenient travel experiences worldwide."
      },
      {
        details: "Healthcare Wallets",
        emoji: "",
        content: " Develop secure digital healthcare wallets for managing patient payments, insurance claims, and healthcare credits, enabling efficient, transparent, and convenient financial transactions in the healthcare ecosystem."
      },
      {
        details: "Loyalty & Rewards Wallets",
        emoji: "",
        content: "Develop loyalty & rewards wallets to track loyalty points, rewards, and cashback programs, offering businesses and customers a seamless, secure, and efficient way to manage incentives and drive engagement."
      },
      {
        details: "IoT Wallets Development",
        emoji: "",
        content: " Develop digital IoT wallets for machine-to-machine payments and smart device transactions, enabling secure, automated, and seamless financial interactions in connected IoT ecosystems."
      },
      {
        details: "Education Wallets",
        emoji: "",
        content: " Develop digital education wallets for managing tuition, online course payments, and student allowances, providing secure, convenient, and transparent financial solutions for educational institutions and learners."
      },

    ]
  }
];


const Wallets: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(featuresData[0]);

  const handleButtonClick = (feature: Feature) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  return (
    <section className="bg-center bg-repeat bg-fixed">
      <div className=" lg:py-16 py-10">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-black">
            Types of Wallets We Develop
          </h2>
          <p className="text-black lg:w-2/3 mx-auto text-center">
            Comfygen, Best wallet development company, specializes in creating digital, crypto, and next-generation wallets to cater to businesses, enterprises, and individual users. Our wallet development solutions combine security, usability, and advanced features to help you manage digital assets efficiently and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border cursor-pointer ${openedFeature?.id === feature.id
                ? "bg-white hover:bg-gray-100 text-black border-[#5556D1]"
                : "bg-[#5556D1] text-white border-[#5556D1]"
                }`}
            >
              <button
                className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
                onMouseEnter={() => handleButtonClick(feature)}
              >

                {feature.title}
              </button>
            </div>
          ))}
        </div>

        {openedFeature && (
          <div className="mt-8 mx-auto 2xl:w-10/12 w-11/12">
            {/* Added title and description section */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-[#272868] mb-4">
                {openedFeature.titlewallet}
              </h3>
              {openedFeature.description && (
                <p className="text-gray-700 max-w-2/3 mx-auto">
                  {openedFeature.description}
                </p>
              )}
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {openedFeature.additionalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3
                    dangerouslySetInnerHTML={{ __html: detail.details }}
                    className="text-xl font-semibold mb-2 text-[#272868]"
                  />
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: detail.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wallets;