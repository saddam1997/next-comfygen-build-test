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
    title: "Crypto Wallet Development Services",
    icon: <i className="fas fa-robot text-4xl"></i>,
    img: "",
    additionalDetails: [
      {
        details: "Cryptocurrency Wallet Development",
        emoji: "",
        content: "Comfygen is a top-rated <a href='https://www.comfygen.com/crypto-wallet-development' class='text-blue-500'>AI-based Cryptocurrency Wallet Development company</a>. Build a secure, scalable, user-friendly Cryptocurrency Wallet Development with multi-layer authentication, detailed transaction tracking, and seamless blockchain integration, designed for your business-specific needs."
      },
      {
        details: "Multi-Currency Wallet Development",
        emoji: "",
        content: "Comfygen, <a class='text-blue-500' href='https://www.comfygen.com/multi-currency-wallet-development-company'>Multi-Currency Wallet Development</a> supports multiple cryptocurrencies, tokens, and stablecoins on one platform, ideal for traders, exchanges, and global enterprises."
      },
      {
        details: "White Label Cryptocurrency Wallet Development",
        emoji: "",
        content: "Being the <a class='https://www.comfygen.com/white-label-crypto-exchange-development' class='text-blue-500'>best White Label Crypto Wallet Development company</a>, we provide a fully customizable crypto wallet with rapid deployment, branding options, and cost efficiency, perfect for businesses entering the crypto market quickly."
      },
      {
        details: "DeFi Wallet Development",
        emoji: "",
        content: "Comfygen, the Best wallet development company, provides Non-Custodial <a href='https://www.comfygen.com/defi-wallet-development' class='text-blue-500'>DeFi Wallet Development</a> Service that allows users to stake, yield farm, and trade on DEXs without intermediaries."
      },
      {
        details: "NFT Wallet Development",
        emoji: "",
        content: "Being the best <a href='NFT wallet development company' class='text-blue-500'>NFT wallet development company</a>, we develop Secure crypto wallets for storing, trading, and showcasing NFTs, with seamless NFT marketplace integration for collectors, artists, and gamers."
      },
      {
        details: "Blockchain Wallet Development",
        emoji: "",
        content: "Comfygen, the <a href='https://www.comfygen.com/blockchain-development' class='text-blue-500'>best blockchain development company</a>, offers <a href='https://www.comfygen.com/blockchain-wallet-development' class='text-blue-500'> top-notch Blockchain Wallet Development service</a> that includes advanced features like Lightning Network for Bitcoin and ERC-20, ERC-721, and ERC-1155 token support for Ethereum."
      },
      {
        details: "Mobile Crypto Wallet Development",
        emoji: "",
        content: "Comfygen provides <a href='- https://www.comfygen.com/mobile-crypto-wallet-development' class='text-blue-600'>top-notch mobile crypto wallet development</a> service for iOS and Android with biometric authentication, QR-code payments, and real-time price tracking."
      },
      {
        details: "Web & Desktop Wallet Development",
        emoji: "",
        content: "Being the best Wallet Development company, offering Browser-based and desktop crypto wallet development services with analytics dashboards and top security for Windows, Mac, and web platforms."
      },
      {
        details: "Hardware Wallet Development ",
        emoji: "",
        content: "Cold storage crypto wallets with air-gapped technology and offline signing for maximum protection and long-term investment."
      },

       {
        details: "Enterprise Crypto Wallet Development",
        emoji: "",
        content: "Comfygen is a top-rated Wallet Development company that provides an enterprise crypto wallet development service for corporations, funds, and institutions with multi-user access, high-value approvals, audit trails, and compliance-ready architecture."
      },
       {
        details: "Payment Gateway Integration",
        emoji: "",
        content: "Being a trusted wallet development company, we integrate secure crypto payment gateways into wallets to accept and settle crypto payments safely and efficiently."
      },
       {
        details: "Smart Contract Wallet Development",
        emoji: "",
        content: "Being a leading best wallet development company, we <a href='https://www.comfygen.com/smart-contract-wallet-development' class='text-blue-500'>develop smart contract crypto wallets</a> with smart contract automation for DAOs, DeFi, and enterprise blockchain workflows."
      }
    ]
  },
  {
    id: 2,
    title: "E-Wallet Development Services",
    icon: <i className="fas fa-link text-4xl"></i>,
    img: "",
    additionalDetails: [
      {
        details: "E-Wallet App Development",
        emoji: "",
        content: "Being a Best wallet development company, we provide an <a href='https://www.comfygen.com/ewallet-app-development' class='text-blue-500'>E-wallet development solution</a>  that allows peer-to-peer (P2P) payments, bill payments, mobile recharges, and digital banking features with a focus on speed and security."
      },
      {
        details: "White Label E-Wallet Solutions ",
        emoji: "",
        content: "Comfygen, a Top-rated wallet development company, offers fully customizable, Ready-to-use e-wallet apps with your branding, designed for startups, banks, and fintechs to deploy quickly and cost-effectively."
      },
      {
        details: "Mobile Payment Wallet Development",
        emoji: "",
        content: "Being a trusted E-wallet Development Company, Intuitive <a href='https://www.comfygen.com/upi-payment-app-development' class='text-blue-500'>mobile UPI payment</a> for everyday use with NFC, QR-code payments, biometric authentication, and real-time transaction alerts."
      },
      {
        details: "Loyalty & Rewards Wallet Development",
        emoji: "",
        content: "Comfygen, a Top-rated wallet development company, offers fully customizable, Ready-to-use e-wallet apps with your branding, designed for startups, banks, and fintechs to deploy quickly and cost-effectively."
      },
      {
        details: "Cross-Border E-Wallet Development",
        emoji: "",
        content: "Comfygen trusted E-wallet Development Company to provide a cross-border e-wallet development solution, enabling international money transfers, multi-currency support, and real-time exchange rates for global businesses."
      },
      {
        details: "Banking & Enterprise E-Wallet Development",
        emoji: "",
        content: "Comfygen, the Best wallet development company, develop secure enterprise-level E-wallets for banks, financial institutions, and corporates with compliance-ready infrastructure."
      },
      {
        details: "Payment Gateway Integration for E-Wallets",
        emoji: "",
        content: "Comfygen, top-rated wallet development company, seamlessly integrates with the leading <a href='https://www.comfygen.com/crypto-payment-gateway-development' class='text-blue-500'>payment gateway development</a> process, debit cards, credit cards, and UPI payments."
      },
      {
        details: "P2P E-Wallet Solutions",
        emoji: "",
        content: "Build a <a href='https://www.comfygen.com/p2p-payment-app-development' class='text-blue-500'>P2P app development</a> for instant peer-to-peer money transfers with secure authentication and transaction transparency."
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
            Our End-to-End Wallet Development Services
          </h2>
          <p className="text-white lg:w-2/3 mx-auto text-center">
           Comfygen specializes in providing end-to-end wallet development solutions that cover both crypto wallets and e-wallets. From startups and enterprises to banks, fintechs, and cryptocurrency exchanges, we design, develop, and deploy wallets tailored to your business needs, industry requirements, and future growth. Whether you need a custom-built wallet or a ready-to-launch <a href='https://www.comfygen.com/white-label-cryptocurrency-wallet-development' className="underline">white-label wallet development</a> solution, we ensure top-notch security, scalability, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border cursor-pointer ${openedFeature?.id === feature.id
                  ? "bg-white hover:bg-gray-100 text-black border-gray-300"
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
          <div className="mt-8 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:w-10/12 w-11/12">
            {openedFeature.additionalDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 
                 dangerouslySetInnerHTML={{ __html: detail.details }} 
                 className="text-xl font-semibold mb-2 text-[#272868]"
                  // {detail.details}
                 
                />
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
