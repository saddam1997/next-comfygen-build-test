import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./nft-wallet-development.json";
import LazyLoad from "react-lazy-load";


import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import ClientTestimonials from "../components/ClientTestimonials";
import NewTeckStack from "../componentsnew/NewTeckStack";
import WhoCanStart from "./components/WhoCanStart";
import AppCard from "../componentsnew/AppCard";
import PortfolioSlider from "../components/PortfolioSlider";
import IndustriesServe from "../componentsnew/IndustriesServe";
import NewPanel from "./components/NewPanel";
import ConsultancyApproach from "../componentsnew/ConsultancyApproach";
import ServicesSec from "../components/ServicesSec";
import WhyChoose from "../components/WhyChooseUs";
import PortfolioSec from "../components/PortfolioSec";
import SolutionSec from "../components/SolutionSec";
import { IconBike, IconBolt, IconBriefcase, IconBuildingSkyscraper, IconBus, IconCar, IconCash, IconChartBar, IconCode, IconDeviceMobile, IconHeadphones, IconHelicopter, IconHierarchy3, IconLayoutDashboard, IconMessageCircle, IconPackage, IconPlane, IconShieldCheck, IconShip, IconShoppingCart, IconTruck, IconUsers, IconWallet } from "@tabler/icons-react";

import { MdManageHistory } from "react-icons/md";
import { GiCrossedChains } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import CallToAction from "../components/CallToAction";


const HeroSectionForAllPages = dynamic(
  () => import("../components/HeroSectionForAllPages"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Faq = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Discovery & Requirement Analysis",
    description: "Understand your business goals, NFT use cases, target audience, and technical requirements to design a tailored solution.",
  },
  {
    title: "Project Planning & Strategy",
    description: "Define the roadmap, timelines, technology stack, and feature set for your custom NFT wallet development.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Create an intuitive, user-friendly interface for seamless NFT management across web and mobile platforms.",
  },
  {
    title: "Blockchain & Smart Contract Development",
    description: "Build robust NFT wallet architecture with multi-chain support, secure smart contracts, and reliable transaction handling.",
  },
  {
    title: "Integration & Marketplace Connectivity ",
    description: "Connect your wallet to NFT marketplaces and other platforms for smooth minting, trading, and asset management.",
  },
  {
    title: "Wallet Testing & Security Audit",
    description: "Conduct thorough testing and audits to ensure enterprise-grade security, bug-free performance, and compliance with blockchain standards.",
  },
  {
    title: "Deployment & Ongoing Support ",
    description: "Launch your NFT wallet on scalable infrastructure and provide continuous updates, maintenance, and technical support for a reliable, future-ready solution.",
  },
];

const latesttech = [
  {
    img: <MdManageHistory className="w-12 h-12" />,
    title: "Secure Digital Asset Management",
    desc: "Safely store, transfer, and manage NFTs with high security, encrypted storage, and private key protection, ensuring your digital assets remain fully secure and reliable.",
  },
  {
    img: <GiCrossedChains className="w-12 h-12" />,
    title: "Multi-Chain Compatibility ",
    desc: "Facilitate seamless NFT transactions across Ethereum, Solana, Polygon, and other blockchain networks, enabling cross-chain asset management, wider user reach, and enhanced flexibility for your NFT wallet solution.",
  },
  {
    img: <AiOutlineSolution className="w-12 h-12" />,
    title: "Enhanced User Engagement ",
    desc: "Provide a user-friendly NFT wallet interface with real-time notifications, portfolio tracking, and intuitive navigation, keeping users informed, engaged, and confident in managing their digital assets.",
  },
  {
    img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "Customizable and Scalable Solutions",
    desc: "Build NFT wallets with tailored features and functionality, offering scalable architecture that grows with your business and adapts to increasing users and transaction volumes.",
  },
  {
    img: <IconBolt stroke={1.5} className="w-12 h-12" />,
    title: "Marketplace Integration",
    desc: "Seamlessly connect your NFT wallet with popular marketplaces, enabling users to mint, buy, sell, and trade NFTs directly, ensuring smooth and efficient digital asset management.",
  },
  {
    img: <IconBus stroke={1.5} className="w-12 h-12" />,
    title: "Revenue Opportunities",
    desc: "Maximize business potential with your NFT wallet by enabling trading, royalties, and marketplace participation, creating new monetization channels, and driving additional revenue streams from digital assets.",
  },

];


const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-image.webp",
      head: "NASDAC Crypto Coin",
      based: "Blockchain-based Cryptocoin Development",
      name: "NASDAC Crypto Coin is a next-gen cryptocurrency with its own dedicated blockchain, not just a token. Designed with a robust 'Four Square' architecture, it prioritizes speed, mining benefits, seamless integration, and growth predictability. Stronger, faster, and more secure than Bitcoin, NASDAC Coin is engineered for business, making it the first true SUPER COIN in the blockchain crypto space.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/blockchain-based-cryptocoin-development",
    },
    {
      img: "https://www.comfygen.com/image/croston-portfolio-image.webp",
      head: "Croston ",
      based: "Decentralized Blockchain-based Coin Development",
      name: "Croston is the first decentralized cryptocurrency fully backed by gold at a 1:1 ratio, ensuring stability and value growth. Unlike fiat money, it leverages blockchain for security, transparency, and decentralized control. Croston enables secure transactions and controlled coin creation while offering easy purchasing options via credit card, exchange, or crypto. As a gold-backed digital asset, Croston redefines secure investments and powers a decentralized marketplace with standardized blockchain development solutions.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/decentralized-blockchain-based-cryptocurrency",
    },
    {
      img: "https://www.comfygen.com/image/yatripay-portfolio-image.webp",
      head: "YatriPay",
      based: "Peer-to-Peer Blockchain Development",
      name: "YatriPay enables instant, zero-fee global transactions through its decentralized P2P blockchain development, powered by the YatriPay Virtual Machine (YVM). With seamless peer-to-peer transfers, YatriPay ensures secure and efficient digital payments. The YatriPay Mobile App makes onboarding easy, bringing borderless transactions to users worldwide.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/peer-to-peer-blockchain-based-payment-system",
    },

    {
      img: "https://www.comfygen.com/image/mezovest-portfolio-image.webp",
      head: "Mezovest",
      based: "Blockchain Logistics Software Development Solutions",
      name: "Mezovest is transforming commerce in the energy industry, focusing on LPG and CNG with its pioneering F.I.T (Finance, Infrastructure, and Technology) model. Through Mezo Energy Trading Limited (METL), it introduces non-corrosive composite gas cylinders for safety and efficiency. Additionally, its logistics arm, Spatch, streamlines supply and distribution. Mezovest’s blockchain-powered solutions ensure transparency, security, and seamless operations in the energy sector.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/advanced-blockchain-based-logistics-software",
    },

    {
      img: "https://www.comfygen.com/image/hero-image-blockchain-based-real-estate-tokenization-software.webp",
      head: "Blockchain-Based Real Estate Tokenization Software",
      based: "",
      name: "Developed a blockchain-based solution to modernize real estate transactions, enhancing transparency, reducing costs, and streamlining operations through blockchain technology. Created a decentralized platform for property tokenization and fractional ownership, enabling secure, automated transactions for a more efficient real estate ecosystem.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink:
        "/portfolio/blockchain-based-real-estate-tokenization-software",
    },
  ],
};


const CardClone = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card1.webp",
    title: "Food Delivery App Development",
    description:
      "We offer advanced <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/food-delivery-app-development' > food delivery app development solutions  </a> that empower restaurants, startups, and aggregators to provide seamless ordering and real-time tracking. With our custom food delivery apps, you can scale your food business, improve customer satisfaction, and increase sales through smooth user experiences and secure digital payments.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card2.webp",
    title: "Grocery Delivery App Development",
    description:
      "Our  <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ecommerce/grocery' > grocery delivery app development services </a>  help supermarkets, retailers, and entrepreneurs build feature-rich apps for hassle-free grocery shopping. From quick ordering to doorstep delivery, our custom grocery delivery apps make the buying experience smooth and engaging while helping businesses manage inventory, deliveries, and customer loyalty effectively.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card3.webp",
    title: "Medicine Delivery App Development",
    description:
      "We provide the best <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/medicine-delivery-app-development' > medicine delivery app development services </a>  that enable pharmacies, startups, and healthcare providers to deliver medicines online. With real-time tracking, secure payment integration, and prescription uploads, our apps ensure safe and fast access to medicines while helping businesses expand their digital presence in the healthcare sector.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card4.webp",
    title: "Courier Delivery App Development",
    description:
      "Our courier delivery app development solutions are designed for logistics companies and startups to simplify parcel management, tracking, and deliveries. With advanced technology, our custom courier apps ensure efficient dispatching, real-time monitoring, and seamless customer communication to optimize courier operations and build customer trust.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card5.webp",
    title: "Water Delivery App Development",
    description:
      "We provide powerful  <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/water-delivery-app-development' > water delivery app development solutions </a>  that allow water suppliers and distributors to manage orders, deliveries, and subscriptions digitally. With features like scheduling and route optimization, our apps streamline water delivery services, helping businesses expand their reach and improve operational efficiency.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Milk Delivery App Development",
    description:
      "Our top-notch  <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/milk-delivery-app-development' > milk delivery app development services </a>  enable dairy businesses and startups to offer convenient daily milk and dairy product delivery. With customizable subscription models, online payments, and delivery tracking, our milk delivery apps simplify operations while ensuring timely service and customer satisfaction.",
    buttonText: "View Demo",
  },

  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Parcel Delivery App Development",
    description:
      "We provide parcel delivery app development solutions that help logistics and shipping businesses deliver packages quickly and securely. Our apps include order booking, route optimization, and delivery tracking, ensuring a smooth process for customers and boosting operational efficiency for businesses handling high parcel volumes.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Logistics Delivery App Development",
    description:
      "With our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/logistics-app-development' > logistics delivery app development services </a> , enterprises and startups can manage large-scale delivery operations seamlessly. From fleet management to order tracking, our logistics apps streamline supply chain operations, reduce costs, and improve customer experiences with real-time visibility and automation.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Fuel Delivery App Development",
    description:
      "We specialize in fuel delivery app development that enables businesses to deliver fuel directly to customers' locations. These apps provide on-demand booking, GPS-enabled tracking, and secure payment gateways, offering convenience while helping fuel distributors expand their services in the digital marketplace.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Liquor Delivery App Development",
    description:
      "Our liquor delivery app development services allow liquor stores and distributors to take their business online with ease. With fast ordering, age verification, and real-time delivery tracking, our apps ensure compliance while offering a convenient experience for customers seeking doorstep liquor delivery.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Alcohol Delivery App Development",
    description:
      "We <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blog/ai-powered-alcohol-delivery-app-development/' >  build AI-based alcohol delivery apps </a>  that empower businesses to deliver wine, beer, and spirits directly to customers. Our alcohol delivery app development services include smooth ordering, secure payments, and compliance-friendly features, ensuring that your alcohol delivery business operates efficiently while meeting customer demands for convenience.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Fish Delivery App Development",
    description:
      "Our fish delivery app development services allow seafood businesses and fish markets to digitize their delivery process. With fresh stock listings, fast ordering, and tracking, our fish delivery mobile apps help businesses ensure timely deliveries and maintain quality while catering to growing customer demand for fresh seafood online.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Flower Delivery App Development",
    description:
      "We deliver custom flower delivery app development solutions for florists, shops, and bouquet subscription services. Our florist apps enable easy browsing, online payments, and timely delivery, helping businesses attract more customers and increase revenue with personalized digital flower delivery experiences.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Meat Delivery App Development",
    description:
      "We offer top-rated meat delivery app development services to support butchers, meat shops, and distributors in providing fresh meat online. With features for order management, real-time tracking, and digital payments, our apps ensure smooth operations and timely deliveries while enhancing customer satisfaction.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Gas Cylinder Delivery App Development",
    description:
      "We provide gas cylinder delivery app development solutions that enable suppliers to manage bookings, track deliveries, and ensure safety compliance. Our gas booking apps provide scheduling, secure payments, and real-time updates, enabling gas businesses to automate operations and serve customers more effectively.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Ice Cream Delivery App Development",
    description:
      "Our ice cream delivery app development services help ice cream brands and shops offer on-demand ordering and fast delivery. With engaging UI, order scheduling, and tracking, our apps provide customers with a delightful experience while boosting brand loyalty and repeat purchases.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Pizza Delivery App Development",
    description:
      "We offer <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/pizza-delivery-app-development' >custom pizza delivery app development solutions </a>  that allow restaurants and startups to manage orders, track deliveries, and accept payments easily. With fast ordering and GPS-enabled tracking, our pizza delivery apps enhance customer satisfaction and drive more revenue for pizza businesses.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Pet Food Delivery App Development",
    description:
      "Our pet food delivery app development services empower pet shops and suppliers to offer seamless online ordering for pet food and accessories. With subscription models, doorstep delivery, and customer-friendly features, our apps help businesses increase customer loyalty in the pet care industry.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Hyperlocal Delivery App Development",
    description:
      "We specialize in hyperlocal delivery app development for businesses catering to specific local areas. These apps help connect customers with nearby shops, restaurants, or services, offering fast deliveries, real-time tracking, and smooth transactions for a convenient local shopping experience.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "Cake Delivery App Development",
    description:
      "Our cake delivery app development solutions help bakeries, cafes, and online cake shops offer custom orders, instant delivery, and order tracking. With attractive UI/UX and reliable payment options, our delivery apps ensure delightful customer experiences for every celebration.",
    buttonText: "View Demo",
  },
];

const WhoCanStartCards = [
  {
    heading: "Logistics Startups",
    description:
      "Get your logistics business off the ground with our ready-to-deploy logistics app solutions. Launch your own branded app with features like shipment tracking, driver assignment, and live route navigation to enhance visibility, improve delivery speed, and build trust with your customers.",
  },
  {
    heading: "Enterprises & 3PL Providers",
    description:
      "Simplify complex logistics operations with custom enterprise-grade solutions. Manage warehouses, multiple delivery agents, and customer orders from a centralized dashboard. Integrate with ERP systems, automate workflows, and monitor performance in real time with advanced analytics and reporting tools.",
  },
  {
    heading: "Freight Forwarders & Fleet Operators",
    description:
      "Enhance efficiency with apps built for freight tracking and fleet management. Monitor vehicle movement, optimize routes, and ensure compliance with transport regulations. Real-time updates help reduce delays, save fuel costs, and improve driver coordination.",
  },
  {
    heading: "E-commerce & Retail Businesses",
    description:
      "Add powerful delivery capabilities to your <a class='text-black font-semibold' href='https://www.comfygen.com/e-commerce-app-development'>eCommerce</a> or retail business. Integrate last-mile delivery apps that support order tracking, digital proof of delivery, customer notifications, and automated dispatch, ensuring a seamless shopping and delivery experience.",
  },
];

const technologyData = [
  {
    img: <IconUsers stroke={1.5} className="w-12 h-12" />,
    title: "Crypto Wallet Development Services",
    desc: "Comfygen <a class='text-blue-500 font-medium' href='https://www.comfygen.com/crypto-wallet-development'>crypto wallet development</a> services provide secure, scalable, and custom-built solutions that put you at the forefront of the Web3 revolution. From intuitive mobile apps to powerful browser extensions, we Develop Crypto Wallets that offer unmatched security, seamless multi-chain access, and a superior user experience—turning your vision into a trusted gateway for the decentralized economy.",
  },
  {
    img: <IconDeviceMobile stroke={1.5} className="w-12 h-12" />,
    title: "Blockchain Wallet Development Services",
    desc: "Comfygen <a class='text-blue-500 font-medium' href='https://www.comfygen.com/blockchain-wallet-development'>Blockchain Wallet Development</a> Services develops secure, non-custodial wallets that give users full control of their digital assets. Supporting multiple blockchain technologies like Bitcoin, Ethereum, Solana, and Polygon, our wallets include token swaps, staking, NFT management, and dApp connectivity, delivering a secure, scalable, and user-friendly gateway to the Web3 ecosystem.",
  },
  {
    img: <IconCash stroke={1.5} className="w-12 h-12" />,
    title: "Decentralized Wallet Development Services",
    desc: "Comfygen Decentralized Wallet Development Services builds secure, non-custodial  Crypto wallets with full user control, multi-chain support, dApp integration, token swaps, staking, and NFT management. Scalable and secure, they provide a user-friendly gateway into DeFi, Web3, and the broader blockchain ecosystem.",
  },
  {
    img: <IconLayoutDashboard stroke={1.5} className="w-12 h-12" />,
    title: "cryptocurrency wallet development services",
    desc: "Comfygen Cryptocurrency Wallet Development Services create secure, custom multi-chain wallets that give users full control of their digital assets. Featuring token swaps, staking, NFT management, and dApp integration, they combine security, scalability, and ease of use to provide a reliable gateway into the decentralized economy and Web3 ecosystem.",
  },
  {
    img: <IconWallet stroke={1.5} className="w-12 h-12" />,
    title: "Multi-Currency Crypto Wallet Development Services",
    desc: "We deliver Multi-Currency Crypto Wallet Development solutions designed for businesses seeking secure, scalable, and feature-rich platforms. From multi-chain support to token swaps, staking, NFT management, and dApp integration, our wallets open the door to Web3 and decentralized finance.",
  },
  {
    img: <IconMessageCircle stroke={1.5} className="w-12 h-12" />,
    title: "Enterprise Cryptocurrency Wallet Development Services",
    desc: "Comfygen Enterprise Cryptocurrency Wallet Development Services offer non-custodial wallets with multi-chain and multi-currency support, integrated token swaps, staking, NFT management, and dApp connectivity, designed for robust security, compliance, and seamless scalability.",
  },

];


export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let { Frequently } = JSON_DATA;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      addressLocality: "Jaipur, Rajasthan",
      addressRegion: "India",
      postalCode: "302006",
      telephone: "+91-958-786-7258",
    },

    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "40 Tuxedo Ct, Toronto, ON",
      addressLocality: "Toronto",
      addressRegion: "Canada",
      postalCode: "M1G3S7",
      telephone: "+1 579-977-4475",
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        email: "sales@comfygen.com",
        areaServed: ["IN", "US", "CA", "GB"],

        availableLanguage: "en, in",
      },
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Comfygen Technologies",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      telephone: "+91-958-786-7258",
      priceRange: "$",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
          addressLocality: "Jaipur",
          postalCode: "302006",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
          addressLocality: "Toronto",
          postalCode: "M1G3S7",
          addressCountry: "Canada",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "NFT Wallet Development",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen provides secure, scalable, and feature-rich NFT wallet development solutions with multi-chain support, marketplace integration, and white-label customization for startups and enterprises.",
      "url": "https://www.comfygen.com/nft-wallet-development",
      "mainEntityOfPage": "https://www.comfygen.com/nft-wallet-development",
      "areaServed": "Global",
      "serviceType": [
        "NFT Wallet Development",
        "Multi-Chain NFT Wallet Solutions",
        "Custom NFT Wallets",
        "NFT Marketplace Integration",
        "White-Label NFT Wallets"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "name": "NFT Wallet Development | Secure & Scalable NFT Wallets",
      "image": "URL-to-hero section image",
      "description": "Comfygen builds secure, scalable, and feature-rich NFT wallets with multi-chain support, marketplace integration, and white-label customization for startups and enterprises.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "145"
      }
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wallet Development Comapny",
          "item": "https://www.comfygen.com/wallet-development-company"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NFT Wallet Development",
          "item": "https://www.comfygen.com/nft-wallet-development "
        }
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an NFT wallet, and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An NFT wallet is a secure digital wallet that allows users to store, manage, and trade NFTs safely. It is crucial for protecting digital assets, enabling seamless transactions, and managing NFT portfolios efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate my NFT wallet with existing marketplaces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Comfygen’s NFT wallets can be integrated with popular marketplaces, enabling users to mint, buy, sell, and trade NFTs directly from the wallet."
          }
        },
        {
          "@type": "Question",
          "name": "Which blockchains do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NFT wallet development solutions support multiple blockchains, including Ethereum, Solana, Polygon, and Binance Smart Chain, providing multi-chain NFT management and cross-platform flexibility."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure wallet security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We implement enterprise-grade security, including private key management, two-factor authentication, encrypted storage, and regular audits to safeguard all digital assets and ensure secure NFT transactions."
          }
        },
        {
          "@type": "Question",
          "name": "How long does NFT wallet development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline depends on the features and customization required. Comfygen delivers fast, scalable, and secure NFT wallet solutions, ensuring timely deployment without compromising quality."
          }
        }
      ]
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>NFT Wallet Development Company | Secure & Scalable NFT Wallets
        </title>
        <meta
          name="description"
          content="Comfygen, best NFT wallet development company, builds secure, scalable, and feature-rich NFT wallets with multi-chain support, user-friendly portfolio management, and white-label customization for startups and enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-wallet-development"
        />
        <meta name="keywords" content="NFT Wallet Development, Multi-Chain NFT Wallet Solutions, Custom NFT Wallets, NFT Marketplace Integration, White-Label NFT Wallets" />

        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />


        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="NFT Wallet Development" />



        {/* Author & Rights */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />


        {/* SEO */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />


        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />


        {/* Open Graph (Facebook) */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:url" content="https://www.comfygen.com/nft-wallet-development" />
        <meta property="og:title" content="NFT Wallet Development Company | Secure & Scalable NFT Crypto Wallets" />
        <meta property="og: description" content="Comfygen, best NFT wallet development company, builds secure, scalable, and feature-rich NFT wallets with multi-chain support, user-friendly portfolio management, and white-label customization for startups and enterprises." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/nft-wallet-development/nft-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/nft-wallet-development/nft-wallet-development.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NFT Wallet Development Company | Secure & Scalable NFT Crypto Wallets" /> */}


        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom NFT Wallet Development Services | Multi-Chain NFT Wallets" />
        <meta name="twitter:description" content=" Launch your feature-rich NFT wallet with Comfygen. Enjoy enterprise-grade security, multi-chain blockchain support, and seamless digital asset management." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Faceb/ook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/nft-wallet-development/nft-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/nft-wallet-development/nft-wallet-development.webp" />
        <meta property="og:image:alt" content="NFT Wallet Development Company | Secure & Scalable NFT Crypto Wallets" />
        <meta property="og:url" content="https://www.comfygen.com/nft-wallet-development" />
        <meta property="og:title" content="Comfygen NFT Wallet Solutions | Secure, Scalable & User-Friendly" />
        <meta property="og:description" content="Develop secure NFT wallets with Comfygen. Our solutions include multi-chain support, marketplace integration, intuitive portfolio management, and white-label customization." />


        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden sm:pt-16">
        <div className="">
          <HeroSectionForAllPages
            heading="NFT Wallet Development Company"
            ptag="Comfygen, The Best NFT wallet development company, builds secure, scalable, and feature-rich NFT Crypto wallets that allow users to store, trade, and manage digital assets. Our NFT Wallet development solutions provide top-level security, multi-chain NFT wallet support across all blockchain platforms like Ethereum, Solana, and Polygon, user-friendly portfolio management on both web and mobile platforms, and white-label customization for startups and enterprises seeking fast and reliable NFT wallet deployment."
            li="Enterprise-grade NFT wallet security "
            li1="Multi-chain NFT wallet development "
            li2="User-friendly NFT portfolio management "
            li3="White-label NFT wallet solutions"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/nft-wallet-development/nft-wallet-development-company.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Why Your Business Needs an NFT Wallet Deployment solution?"
          description1="In the fast-growing digital world, a custom <a class='text-blue-500 ' href='https://www.comfygen.com/wallet-development-company' >wallet development solution</a> is essential for businesses that want to securely store, trade, and manage their digital collectibles. An NFT wallet for enterprises provides seamless NFT transactions, protects digital assets with enterprise-level security, supports multi-chain platforms like Ethereum, Solana, and Polygon, and provides scalable, customizable solutions that enhance user trust and open new revenue opportunities for your brand."
          imageSrc="https://www.comfygen.com/comfygen-images/nft-wallet-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Enterprise-grade security",
            "Multi-chain support",
            "Seamless NFT transactions",
            "Scalable, customizable solutions",
          ]}
        />



        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our NFT Wallet Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Our NFT Wallet Development Services deliver safe, scalable, and multi-chain crypto wallets with NFT trading, DeFi integration, and user-friendly design—ideal for startups, enterprises, and marketplaces to drive Web3 growth.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/exclusive-features-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        <CallToAction
          heading="Ready To Launch Your NFT Wallet Today ?"
          text="Ready to enter the digital asset ecosystem with a secure and feature-rich NFT wallet? Contact us today for a free consultation and let’s build a custom NFT wallet solution tailored to your business needs"
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <PortfolioSec
          techData={techDataForPage1}
          heading="Our NFT Wallet Development portfolio"
          description="Explore our selection of accomplished projects that showcase our expertise in POW Blockchain solutions, online services, and app development. Each project reflects our commitment to excellence, innovation, and client satisfaction, demonstrating the power of blockchain technology in transforming industries."
        />

        {/* <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Our NFT Wallet Development portfolio"
          description="At Comfygen, we develop secure, scalable, and high-performance crypto wallet development solutions that focus to various industries. Our portfolio highlights custom crypto wallet development solution."
        /> */}

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our NFT Wallet Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                The NFT wallet development company Comfygen focuses on providing scalable, secure, and feature-rich solutions for its clients by following the following procedures:
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <SolutionSec
          heading="Benefits of NFT Wallet Development"
          subheading="Custom NFT Wallet Development Company lets businesses securely store, trade, and manage digital assets while improving user engagement. With multi-chain support, marketplace integration, and scalable, customizable features, it streamlines transactions and unlocks new revenue opportunities through NFT trading and monetization."
          techData={latesttech}
        />
        <NewTeckStack
          title="Tech Stack We Use in NFT Wallet Development"
          description="At Comfygen, we leverage a cutting-edge technology stack to build secure, scalable, and feature-rich NFT wallets. Our NFT wallet development exports ensure seamless performance, multi-chain support, and robust security for all digital assets."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire NFT Wallet Developers"
          text="Looking for a top NFT wallet development company? At Comfygen, our experienced developers build secure, scalable, and user-friendly NFT wallets specific to your business. We deliver multi-chain support, smart contract integration, marketplace connectivity, and real-time notifications, all on time and within budget."
          buttonText="Hire Delivery"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "10+ Years of Experience Developers",
            "Diverse Industry Expertise",
            "Innovative Features",
            "24/7 Support"

          ]}
        />

        <Faq faqData={Frequently} title="Frequently Asked Questions" />















        {/* <IndustriesServe
          heading="Industries we serve: Decentralized Wallet Development Services"
          description="The transition to a decentralized digital economy is transforming industries globally. Our secure and versatile decentralized wallet solutions provide the critical infrastructure needed to navigate this shift. We empower businesses across diverse sectors to embrace blockchain technology, enhance user engagement, and unlock new revenue streams."
          sliderData={JSON_DATA.IndustriesServe}
        /> */}

        {/* <PortfolioSec
          techData={techDataForPage1}
          heading="Our Decentralized Wallet Development Portfolio"
          description="Our work speaks for itself. We have a proven track record of delivering secure, innovative, and user-centric decentralized wallet solutions for a diverse range of clients and blockchains. Below are highlights of our expertise and the types of projects we have successfully launched."
        /> */}




        {/* <SolutionSec
          heading="Our end-to-end Crypto Wallet Development Services"
          subheading="We offer end-to-end crypto wallet development services developed for startups, enterprises, DeFi platforms, and exchanges. Our expertise spans across all types of wallets to meet diverse business and user needs."
          techData={technologyData}
        /> */}



        {/* <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
       
        <BlogSection initialData={initialData} /> */}
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
