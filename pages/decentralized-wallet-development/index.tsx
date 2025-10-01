import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./decentralized-wallet-development.json";
import LazyLoad from "react-lazy-load";


import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import ClientTestimonials from "../components/ClientTestimonials";
import NewTeckStack from "../componentsnew/NewTeckStack";
import WhoCanStart from "./components/WhoCanStart";
import AppCard from "../componentsnew/AppCard";
// import PortfolioSlider from "../components/PortfolioSlider";
import IndustriesServe from "../componentsnew/IndustriesServe";
import NewPanel from "./components/NewPanel";
import ConsultancyApproach from "../componentsnew/ConsultancyApproach";
import ServicesSec from "../components/ServicesSec";
import WhyChoose from "../components/WhyChooseUs";
import PortfolioSec from "../components/PortfolioSec";
import SolutionSec from "../components/SolutionSec";
import { IconCash, IconChartBar, IconCode, IconDeviceMobile, IconHeadphones, IconHierarchy3, IconLayoutDashboard, IconMessageCircle, IconShieldCheck, IconShoppingCart, IconUsers, IconWallet } from "@tabler/icons-react";


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
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, audience, and required features. From there, we choose the right tech stack, define the scope, and set a clear roadmap.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "We map user journeys, design wireframes, and create prototypes. The focus is a clean, secure interface that makes every action feel simple and transparent.",
  },
  {
    title: "Core Development & Integration",
    description: "We build the wallet engine, implement secure key management, and connect to blockchains like Bitcoin and Ethereum. Optional backends can support push notifications and enhanced monitoring.",
  },
  {
    title: "Feature Implementation",
    description: "Advanced features come in here: dApp connectivity, token swaps, NFT management, and multi-chain support—customized to your roadmap.",
  },
  {
    title: "Testing & QA",
    description: "The wallet undergoes functional, security, and load testing, with audits and beta testing to ensure reliability under real-world conditions.",
  },
  {
    title: "Deployment & Launch",
    description: "We handle app store submissions, browser extension publishing, and backend deployment to take your wallet live.",
  },
  {
    title: "Maintenance & Support",
    description: "Post-launch, we provide 24/7 monitoring, regular updates, new feature rollouts, and dedicated technical support.",
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
      "name": "Decentralized Wallet Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com"
      },
      "description": "Comfygen provides secure, scalable, and customizable decentralized wallet development services with multi-chain support, non-custodial architecture, token swaps, staking, NFT management, and dApp integration for startups, enterprises, and DeFi ecosystems.",
      "url": "https://www.comfygen.com/decentralized-wallet-development ",
      "mainEntityOfPage": "https://www.comfygen.com/decentralized-wallet-development ",
      "areaServed": "Global",
      "serviceType": [
        "Decentralized Wallet Development",
        "Non-Custodial Wallet Development",
        "Multi-Chain Wallet Solutions",
        "Enterprise Blockchain Solutions",
        "DeFi Wallet Development",
        "Custom Mobile and Desktop Wallets"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    }
    ,

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Technologies",
      Name: "Decentralized Wallet Development Company",
      image:
        "https://www.comfygen.com/comfygen-images/decentralized-wallet-development/decentrelize_about.webp",
      description:
        "Comfygen Technologies offers enterprise-grade logistics and transport app development. Build custom solutions for freight, warehouse, courier, and supply chain operations with full post-launch support.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "560",
      },
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Logistics App Development",
          item: "https://www.comfygen.com/logistics-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to develop a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to develop a delivery app typically ranges between $10,000 to $50,000, depending on features, design, and platform (iOS, Android, or both). At Comfygen, we provide cost-effective delivery app development solutions with real-time tracking, secure payments, and custom features tailored to your business needs."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to build a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery app development timelines typically range from 8 to 20 weeks, depending on the complexity and features. Comfygen’s expert team follows an agile process, ensuring faster delivery without compromising quality. From design to deployment, we help you launch your app quickly and efficiently."
        }

      }, {
        "@type": "Question",
        "name": "Can I get a white-label delivery app solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Comfygen offers white-label delivery app solutions that are ready to launch, customizable, and cost-effective. Our solutions include real-time tracking, easy payments, and multi-vendor support, helping businesses save time and enter the market faster with a scalable and branded app."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide multi-delivery app development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in multi-delivery app development services, enabling businesses to manage food, grocery, parcel, and medicine deliveries from a single platform. With advanced features, user-friendly design, and AI-powered delivery application development solutions, our delivery mobile apps make delivery management seamless and efficient."
        }

      }, {
        "@type": "Question",
        "name": "Why should I choose Comfygen for delivery app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen is a leading delivery app development firm trusted by startups and enterprises. We provide custom, scalable, and cost-effective delivery app solutions with real-time tracking, AI integration, and secure payments. Make Sure your delivery business succeeds digitally from concept to launch."
        }


      }]

    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Decentralized Wallet Development Company | Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen provides decentralized wallet development services with multi-chain support, private key ownership, peer-to-peer transactions, and robust encryption."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/decentralized-wallet-development"
        />
        <meta
          name="keywords"
          content="Decentralized Wallet Development, Non-Custodial Wallet Development, Multi-Chain Wallet Solutions, Enterprise Blockchain Solutions, DeFi Wallet Development, Supply Chain App Development, Custom Mobile and Desktop Wallets,"
        />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Decentralized Wallet Development" />


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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:url" content="https://www.comfygen.com/decentralized-wallet-development" />
        <meta property="og:title" content="Decentralized Wallet Development Company – Comfygen" />
        <meta property="og: description" content="Build secure, scalable, and feature-rich decentralized wallets with Comfygen. Multi-chain support, token swaps, staking, NFT management, and dApp integration for Web3-ready solutions." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/decentralized-wallet-development/decentralized-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/decentralized-wallet-development/decentralized-wallet-development.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Decentralized Wallet Development" />


        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Decentralized Wallet Development Company – Comfygen" />
        <meta name=" twitter: description" content=" Comfygen delivers custom decentralized wallet development services, creating non-custodial wallets with multi-chain support, advanced DeFi features, and seamless Web3 connectivity." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/decentralized-wallet-development/decentralized-wallet-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


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
            heading="Decentralized wallet development Company"
            ptag="Comfygen is a leading decentralized wallet development company, delivering secure, scalable, and user-friendly wallets for cryptocurrencies and digital assets. Our Decentralized wallet development Services provide multi-chain support, private key ownership, peer-to-peer transactions, and robust encryption for maximum security. Fully customizable and compliant, our Decentralized wallet development solutions enable seamless token storage, transfers, and portfolio management."
            li="Multi-chain support & secure token management"
            li1="Private key ownership & peer-to-peer transactions"
            li2="Robust encryption & regulatory compliance"
            li3="Scalable, customizable architecture with 24/7 support"

            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/decentralized-wallet-development/decentrelize_hero.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="What is a Decentralized Wallet?"
          description1="A decentralized wallet is a cryptocurrency wallet that allows users to store, send, and receive digital assets without depending on a central authority or third-party service. Unlike centralized wallets, decentralized wallets give users full control over their private keys, ensuring complete ownership and security of their funds. These Decentralized crypto wallets typically support multiple blockchains and tokens, enabling seamless peer-to-peer transactions. With strong encryption, multi-chain compatibility, and enhanced privacy, decentralized wallets are ideal for individuals and businesses looking for secure, transparent, and self-custodied crypto storage solutions."
          imageSrc="https://www.comfygen.com/comfygen-images/decentralized-wallet-development/decentrelize_about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Full control of private keys and assets",
            "Peer-to-peer transactions without intermediaries",
            "Multi-chain and multi-token support",
            "Enhanced security with encryption and backup options",
          ]}
        />



        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Features of Our Decentralized Wallet Development
              </h2>
              <p className="text-base text-center font-normal">

                Comfygen, a Decentralized wallet development Company, develops a Decentralized Crypto Wallet to put you in absolute control of your digital assets. Unlike custodial services that hold your keys, our decentralized <a className="underline  text-blue-500" href="https://www.comfygen.com/crypto-wallet-development"> Crypto wallets Development Service </a> makes sure that you have control over your cryptocurrencies and digital identity.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />

        {/* <AppCard
          title="Take Your Business to the Next Level with our Custom Delivery App Development Solutions"
          subtitle="Comfygen is a <a class='underline font-semibold' href='https://www.comfygen.com/mobile-app-development'> mobile app development company</a>  that provides custom delivery apps for a wide range of industries. Whatever your business type, we have scalable delivery apps that boost efficiency, streamline operations, and deliver a smooth user experience with real-time tracking, safe payments, and advanced features."
          cards={CardClone}
          openModal={openModal}
        /> */}

        {/* <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Our Delivery Apps Portfolio"
          description="Explore our delivery app development portfolio, showcasing innovative, scalable, and feature-rich solutions tailored for multiple industries. From real-time logistics to on-demand food delivery apps, our delivery solutions simplify operations, engage customers, and boost revenue. Comfygen helps businesses build top-tier delivery platforms that thrive in today's competitive world."
        /> */}

        {/* <NewPanel /> */}

        {/* <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Technologies We Use in Delivery App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen, we use next-gen technologies to deliver custom delivery app solutions that are smart, scalable, and future-ready. These technologies improve performance, enhance user experience, and optimize operations for startups, enterprises, and on-demand businesses.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                       
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p
                          className="break-all text-white text-start "
                          dangerouslySetInnerHTML={{ __html: decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Step-by-Step Decentralized Crypto Wallet Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                At Comfygen, We Develop a secure, reliable, and user-friendly decentralized wallet that requires a meticulous and phased approach. Our tested process makes sure that we deliver a Crypto Wallet that meets your strategic goals and exceeds user expectations.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/exclusive-features-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <IndustriesServe
          heading="Industries we serve: Decentralized Wallet Development Services"
          description="The transition to a decentralized digital economy is transforming industries globally. Our secure and versatile decentralized wallet solutions provide the critical infrastructure needed to navigate this shift. We empower businesses across diverse sectors to embrace blockchain technology, enhance user engagement, and unlock new revenue streams."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Decentralized Wallet Development Portfolio"
          description="Our work speaks for itself. We have a proven track record of delivering secure, innovative, and user-centric decentralized wallet solutions for a diverse range of clients and blockchains. Below are highlights of our expertise and the types of projects we have successfully launched."
        />



        <NewTeckStack
          title="Technology Stack Used by Decentralized Wallet Development Company"
          description="We leverage a cutting-edge, battle-tested technology stack to build secure, scalable, and feature-rich blockchain wallets. Our expertise spans the entire ecosystem, ensuring we select the right tool for every aspect of your project."
        />

        {/* <SolutionSec
          heading="Our end-to-end Crypto Wallet Development Services"
          subheading="We offer end-to-end crypto wallet development services developed for startups, enterprises, DeFi platforms, and exchanges. Our expertise spans across all types of wallets to meet diverse business and user needs."
          techData={technologyData}
        /> */}
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Decentralized Wallet Developers"
          text="Hire expert decentralized wallet developers from Trusted Blockchain development company Comfygen to build secure, scalable, and feature-rich non-custodial wallets. Our Wallet Development team delivers multi-chain support, token swaps, staking, NFT management, and seamless dApp integration, providing businesses with a reliable gateway into the Web3 ecosystem."
          buttonText="Hire Delivery"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Skilled in on-demand delivery app development",
            "10+ years of mobile app development expertise",
            "Proficiency with Google Maps, Twilio, Stripe, and third-party integrations",
            "Custom solutions for single-vendor & multi-vendor delivery platforms",
            "Ready-made delivery app scripts for faster time-to-market",
            "Agile development with end-to-end support & maintenance"
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Frequently Asked Questions (FAQ): Decentralized Wallet Development" />
        <BlogSection initialData={initialData} />
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
