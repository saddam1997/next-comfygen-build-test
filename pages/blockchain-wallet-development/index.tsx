import { useState } from "react";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchain.json";
import Header from "../componentsnew/Header";
import AboutSection from "../componentsnew/AboutSection";
import ServicesSec from "../componentsnew/ServicesSec";
import ContactFromCenter from "../componentsnew/ContactFromCenter";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import IndustriesServe from "../componentsnew/IndustriesServe";
import ProcessSec from "../componentsnew/ProcessSec";
import PortfolioSec from "../componentsnew/PortfolioSec";
import WhyChoose from "../componentsnew/WhyChooseUs";
import Faq from "../componentsnew/Faq";
import BlogSection from "../componentsnew/BlogSection";
import ConsultancyApproach from "../componentsnew/ConsultancyApproach";
import ClientTestimonials from "../components/ClientTestimonials";
import BlockchainNav from "../componentsnew/blockchain-navbar";
import BlockChainTech from "../enterprise-blockchain-development/components/BlockChainTech";
import SolutionSec from "../components/SolutionSec";
import CallToAction from "../components/CallToAction";

const PortfolioSlider = dynamic(() => import("../components/PortfolioSlider"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});
import { IconCash, IconDeviceMobile, IconLayoutDashboard, IconMessageCircle, IconUsers, IconWallet } from "@tabler/icons-react";

const Process = [
  {
    title: "Discovery & Strategy Workshop",
    description:
      "We begin by diving deep into your vision. Together, we define your target audience, features, and technical requirements. This phase sets a clear roadmap and blueprint for your entire project, ensuring we build the right blockchain wallet for your goals.",
  },
  {
    title: "UI/UX Prototyping & Design",
    description:
      "Before writing code, we design the complete user journey. We create wireframes and interactive prototypes to craft an intuitive, user-friendly, and visually stunning interface that builds trust and ensures seamless navigation for your users.",
  },
  {
    title: "Core Wallet Engine Development",
    description:
      "This is where we build the secure heart of your wallet. Our blockchain wallet developers implement strong key management (seed phrase generation, encryption), seamless blockchain connectivity to fetch data, and the transaction signing mechanisms that keep assets safe.",
  },
  {
    title: "Feature Implementation & Integration",
    description:
      "We bring your wallet to life by coding all planned functionalities. This includes integrating with blockchain technology, adding support for tokens and NFTs, connecting to <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/decentralized-exchange-development' >DeFi exchange</a> protocols or marketplaces, and implementing custom features like swaps or staking.",
  },
  {
    title: "Rigorous Security Auditing & Testing",
    description:
      "Security is topmost. We conduct deep testing, including penetration tests and smart contract audits, by internal and external <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blockchain-development' >blockchain development</a> experts. We hunt for bugs to ensure your wallet is ironclad against threats before it ever reaches users.",
  },
  {
    title: "Deployment & Launch",
    description:
      "We conduct the technical audit as well, submitting your application to app stores (iOS/Android) and deploying web platforms. We manage the backend infrastructure and provide live support to make sure a smooth and successful public launch.",
  },
  {
    title: "Ongoing Maintenance & Upgrades",
    description:
      "Our partnership continues after launch. We provide continuous monitoring, regular updates for new OS versions and blockchain protocols, technical support, and strategic upgrades to add new features and keep your blockchain wallet competitive and secure.",
  },
];

const portfoliodata = [
  {
    "image": "https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-image.webp",
    "title": "NASDAC Crypto Coin",
    "description": "NASDAC Crypto Coin is a next-gen cryptocurrency with its own dedicated blockchain, not just a token. Designed with a robust 'Four Square' architecture, it prioritizes speed, mining benefits, seamless integration, and growth predictability. Stronger, faster, and more secure than Bitcoin, NASDAC Coin is engineered for business, making it the first true SUPER COIN in the blockchain crypto space.",
    "link": "/portfolio/blockchain-based-cryptocoin-development",
  },
  {
    "image": "https://www.comfygen.com/image/croston-portfolio-image.webp",
    "title": "Croston ",
    "description": "Croston is the first decentralized cryptocurrency fully backed by gold at a 1:1 ratio, ensuring stability and value growth. Unlike fiat money, it leverages blockchain for security, transparency, and decentralized control. Croston enables secure transactions and controlled coin creation while offering easy purchasing options via credit card, exchange, or crypto. As a gold-backed digital asset, Croston redefines secure investments and powers a decentralized marketplace with standardized blockchain development solutions.",
    "link": "/portfolio/decentralized-blockchain-based-cryptocurrency",
  },
  {
    "image": "https://www.comfygen.com/image/yatripay-portfolio-image.webp",
    "title": "YatriPay",
    "description": "YatriPay enables instant, zero-fee global transactions through its decentralized P2P blockchain development, powered by the YatriPay Virtual Machine (YVM). With seamless peer-to-peer transfers, YatriPay ensures secure and efficient digital payments. The YatriPay Mobile App makes onboarding easy, bringing borderless transactions to users worldwide.",
    "link": "/portfolio/peer-to-peer-blockchain-based-payment-system",
  },
  {
    "image": "https://www.comfygen.com/image/mezovest-portfolio-image.webp",
    "title": "Mezovest",
    "description": "Mezovest is transforming commerce in the energy industry, focusing on LPG and CNG with its pioneering F.I.T (Finance, Infrastructure, and Technology) model. Through Mezo Energy Trading Limited (METL), it introduces non-corrosive composite gas cylinders for safety and efficiency. Additionally, its logistics arm, Spatch, streamlines supply and distribution. Mezovest’s blockchain-powered solutions ensure transparency, security, and seamless operations in the energy sector.",

    "link": "/portfolio/advanced-blockchain-based-logistics-software",
  },
  {
    "image": "https://www.comfygen.com/image/hero-image-blockchain-based-real-estate-tokenization-software.webp",
    "title": "Blockchain-Based Real Estate Tokenization Software",
    "description": "Developed a blockchain-based solution to modernize real estate transactions, enhancing transparency, reducing costs, and streamlining operations through blockchain technology. Created a decentralized platform for property tokenization and fractional ownership, enabling secure, automated transactions for a more efficient real estate ecosystem.",
    "link": "/portfolio/blockchain-based-real-estate-tokenization-software",
  }

]




const testimonialData = [
  {
    text: "Partnering with Comfygen for our blockchain wallet was the smartest decision we made. The team delivered a secure, scalable solution that integrated seamlessly with our existing platform. Transactions are faster, and our users finally feel confident managing their assets.",
    name: "Fintech Startup (Global Payments)",
    title: "London, UK",
  },
  {
    text: "We needed a wallet system that could handle high-volume transactions without compromising security. Comfygen built exactly that. Their attention to detail and commitment to our business goals made all the difference.",
    name: "E-commerce Business",
    title: "New York, USA",
  },
  {
    text: "Our exchange required multi-currency wallet support and enterprise-grade security. Comfygen not only delivered but exceeded expectations. Their expertise in blockchain is unmatched, and we now have a system that can grow with us.",
    name: "Crypto Exchange Platform",
    title: "Dubai, UAE",
  },
  {
    text: "Data security is non-negotiable in healthcare. Comfygen developed a blockchain wallet with advanced encryption features that gave us a new level of compliance and trust. They were professional, transparent, and highly skilled throughout the project.",
    name: "Healthcare Data Security Firm",
    title: "Toronto, Canada",
  },
  {
    text: "We approached Comfygen to build a wallet that could track and secure payments across our global supply chain. The result was a custom wallet solution that simplified transactions and improved transparency with our partners worldwide.",
    name: "Logistics & Supply Chain Company",
    title: "Singapore",
  },
];

const technologyData = [
  {
    img: <IconUsers stroke={1.5} className="w-12 h-12" />,
    title: "Multi-Currency Support",
    desc: "Manage multiple cryptocurrencies and fiat currencies in a single wallet, enabling global transactions and easy portfolio management.",
  },
  {
    img: <IconDeviceMobile stroke={1.5} className="w-12 h-12" />,
    title: "Advanced Security",
    desc: "Protect assets with two-factor authentication (2FA), biometric verification, end-to-end encryption, and multi-signature wallets, ensuring complete data and asset safety.",
  },
  {
    img: <IconCash stroke={1.5} className="w-12 h-12" />,
    title: "Cross-Platform Compatibility",
    desc: "Access your wallet from Android, iOS, and web platforms, providing a consistent, responsive, and seamless user experience across devices.",
  },
  {
    img: <IconLayoutDashboard stroke={1.5} className="w-12 h-12" />,
    title: "Seamless API & Blockchain Integration",
    desc: "Easily connect with payment gateways, DeFi protocols, smart contracts, and third-party applications, enabling smooth financial operations and real-time interactions.",
  },
  {
    img: <IconWallet stroke={1.5} className="w-12 h-12" />,
    title: "Real-Time Analytics & Transaction Tracking",
    desc: "Monitor wallet activity, transaction history, and balances instantly for better decision-making and transparent asset management.",
  },
  {
    img: <IconMessageCircle stroke={1.5} className="w-12 h-12" />,
    title: "Custom UI/UX Design",
    desc: "Intuitive interfaces with responsive and engaging designs ensure users enjoy a friendly and interactive experience.",
  },
  {
    img: <IconMessageCircle stroke={1.5} className="w-12 h-12" />,
    title: "Cold & Hot Wallet Configuration",
    desc: "Flexible storage options with offline cold wallets for maximum security and hot wallets for fast, on-demand access",
  },
  {
    img: <IconMessageCircle stroke={1.5} className="w-12 h-12" />,
    title: "Smart Contract Support",
    desc: "Flexible storage options with offline cold wallets for maximum security and hot wallets for fast, on-demand accessExecute automated transactions and programmable workflows via smart contracts, enhancing efficiency and trust in decentralized environments.",
  },
  {
    img: <IconMessageCircle stroke={1.5} className="w-12 h-12" />,
    title: "DeFi & NFT Ready",
    desc: "Built to integrate with DeFi protocols, NFT marketplaces, and token ecosystems, enabling innovative financial services directly from the wallet.",
  }

];

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
        streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
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
    name: "Blockchain Wallet Development Services",
    provider: {
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com ",
    },
    description:
      "Comfygen offers secure, scalable, and customizable blockchain wallet development services with multi-chain support, advanced security, and cross-platform compatibility for startups, enterprises, and DeFi ecosystems.",
    url: "https://www.comfygen.com/blockchain-wallet-development ",
    mainEntityOfPage: "https://www.comfygen.com/blockchain-wallet-development ",
    areaServed: "Global",
    serviceType: [
      "Blockchain Wallet Development",
      "Crypto Wallet Development",
      "Multi-Chain Wallet Solutions",
      "Enterprise Blockchain Solutions",
      "DeFi Wallet Development",
      "Custom Mobile and Desktop Wallets",
    ],
    sameAs: [
      "https://www.facebook.com/comfygen.technologies",
      "https://x.com/Comfygen_Tech",
      "https://www.instagram.com/comfygen_technologies",
      "https://www.linkedin.com/company/comfygen-technologies",
    ],
  },

  {
    "@context": "http://www.schema.org",
    "@type": "Product",
    brand: "Comfygen Technologies",
    Name: "Blockchain Wallet Development Company | Multi-Chain Solutionsts",
    image: "https://www.comfygen.com/comfygen-images/blockchain-wallet-development/about.webp",
    description:
      "Comfygen offers secure, scalable, and customizable blockchain wallet development services with multi-chain support, advanced security, and cross-platform compatibility for startups, enterprises, and DeFi ecosystems.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "115",
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.comfygen.com ",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "wallet  Development Compnay",
        item: "https://www.comfygen.com/crypto-wallet-development ",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blockchain Wallet Development",
        item: "https://www.comfygen.com/blockchain-wallet-development ",
      },
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "What is a blockchain wallet, and why does my business need one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A blockchain wallet is a digital tool that allows secure storage, transfer, and management of cryptocurrencies or digital assets. For businesses, it provides a trusted way to manage payments, streamline transactions, and create new revenue models."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is a blockchain wallet developed by Comfygen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use multi-layer encryption, biometric authentication, and real-time monitoring to protect your wallet from threats. Security is built into every stage of development."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build both custodial and non-custodial wallets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Depending on your business model, we can build custodial wallets (where you manage user keys) or non-custodial wallets (where users control their private keys)."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to develop a blockchain wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on features, wallet type (mobile, desktop, or web), integrations, and security requirements. We provide tailored quotes after understanding your project scope."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a blockchain wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A basic wallet can take 6–10 weeks, while advanced multi-currency wallets with custom features may require 3–6 months. Timelines vary by complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Can a blockchain wallet integrate with my existing platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can integrate wallets with your exchange, e-commerce platform, supply chain system, or enterprise apps using secure APIs and blockchain SDKs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer support and maintenance after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide ongoing monitoring, security updates, bug fixes, and feature upgrades to keep your wallet performing reliably."
        }
      },
      {
        "@type": "Question",
        "name": "Which cryptocurrencies and tokens can the wallet support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your wallet can be designed to support Bitcoin, Ethereum, stablecoins, and custom tokens on popular blockchain networks like ERC-20, BEP-20, Solana, Polygon, and more."
        }
      }
    ]
  },
];

export default function Blockchain(props) {
  let { initialData } = props;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Blockchain Wallet Development Company| Blockchain Wallet Development Service.</title>
        <meta
          name="description"
          content="Comfygen is a blockchain wallet development company delivering secure, scalable, and customizable Blockchain wallets with multi-chain support for startups, enterprises, and DeFi."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/blockchain-wallet-development"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Blockchain Wallet Development, Crypto Wallet Development, Multi-Chain Wallet Solutions, Enterprise Blockchain Solutions, DeFi Wallet Development, Custom Mobile and Desktop Wallets"
        />

        {/* Robots */}
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        {/* Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport & Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Blockchain Wallet Development"
        />

        {/* Author */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* SEO Meta */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Meta */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/blockchain-wallet-development"
        />
        <meta
          property="og:title"
          content="Custom Blockchain Wallet Development for Startups & Enterprises"
        />
        <meta
          property="og:description"
          content="Protect your digital assets with Comfygen’s blockchain wallet development services. Multi-chain, mobile & desktop wallets with advanced security and scalability."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/blockchain-wallet-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/blockchain-wallet-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Blockchain Wallet Development Company"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blockchain Wallet Development Company | Multi-Chain Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen builds scalable blockchain wallets trusted by enterprises, startups, and DeFi ecosystems. Secure, customizable solutions for mobile and desktop platforms."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/blockchain-wallet-development.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <div className="">
        {/* <LazyLoad height={80} offset={100}> */}
        <Header />
        {/* </LazyLoad> */}
      </div>
      <BlockchainNav />
      <div className="overflow-hidden pt-16">
        <HeroSectionForAllPages
          heading="Blockchain Wallet development Company"
          ptag="As a top-tier blockchain wallet development company renowned for delivering secure, intuitive, and scalable wallet solutions tailored to meet the diverse needs of individual users, startups, fintech innovators, and large enterprises."
          li="Unmatched Security & Privacy"
          li1="Cross-Platform Compatibility"
          li2="Advanced Technology Integration"
          li3="Custom & White-Label Solutions"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/hero.webp"
        />

        <AboutSection
          title=""
          heading="How Blockchain Wallets Help Businesses Grow"
          description1="Blockchain wallets are more than just crypto storage, they empower businesses to grow, innovate, and operate efficiently in the digital economy. By leveraging secure, <a href='https://www.comfygen.com/decentralized-wallet-development' class='text-blue-500'>decentralized wallets</a>, companies can enhance financial transparency, improve operational efficiency, and tap into new revenue streams."
          description2="<b>Build Trust</b> : Secure and transparent transactions boost customer confidence and loyalty."
          description3="<b>Expand Globally</b> : Accept multiple currencies, including crypto, for international reach."
          description4="<b>Streamline Operations</b> : Automated transactions and smart contracts reduce errors and save time."
          description5="<b>Unlock Revenue</b> : Enable DeFi, NFT trading, and token ecosystems to create new income streams."
          points={[]}
          imageSrc="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="Our Blockchain Wallet Development Services"
          description="At Comfygen, we offer comprehensive blockchain wallet development solutions designed to meet the unique needs of businesses, fintech startups, and enterprises. Our services combine cutting-edge technology, robust security, and user-friendly design to deliver wallets that are scalable, secure, and future-ready."
        />
        {/* <ContactFromCenter /> */}

        <SolutionSec
          heading="Core Features of Our Blockchain Wallet Development Solution"
          subheading="At Comfygen, our blockchain wallets are designed to provide maximum security, seamless usability, and robust performance. Each wallet comes packed with features that meet the needs of businesses, fintech startups, and individual users alike, enabling efficient digital asset management and smooth financial operations."
          techData={technologyData}
        />
        <CallToAction
          heading="Ready to Launch Your Own Blockchain Wallet?"
          text="TEmpower your business with Comfygen’s secure, scalable blockchain wallet solutions — multi-currency, DeFi-ready, and NFT-compatible."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/exclusive-features-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <ProcessSec
          title="Our Blockchain Wallet Development Process"
          description="At Comfygen, we follow a structured and client-focused Blockchain wallet development process to deliver secure, scalable, and feature-rich blockchain wallets. Our approach ensures timely delivery, high performance, and a seamless user experience."
          processSlides={Process}
        />



        <IndustriesServe
          heading="Industries we serve: Blockchain Wallet Development Services"
          description="At Comfygen, we deliver secure and customizable blockchain wallet development solutions built to serve businesses across multiple industries. With a strong focus on usability, scalability, and advanced security, our blockchain wallets are developed to fit the unique needs of each sector. From finance and healthcare to supply chain, gaming, and DeFi platforms, our blockchain wallets development services simplify asset management, enable fast and transparent transactions, and unlock new growth opportunities."
          sliderData={JSON_DATA.IndustriesServe}
        />




        <PortfolioSlider
          techData={portfoliodata}
          heading="Our Blockchain Based Portfolio"
          description="Explore our selection of accomplished projects that highlight our proficiency in online solutions and app development. Every project demonstrates our dedication to excellence, creativity, and client fulfilment."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <BlockChainTech
          title="Technology Stack Used by Blockchain Development Company"
          description="We leverage a cutting-edge, battle-tested technology stack to build secure, scalable, and feature-rich blockchain wallets. Our expertise spans the entire ecosystem, ensuring we select the right tool for every aspect of your project."
        />



        <ClientTestimonials
          testimonials={testimonialData}
          heading="What Our Clients Say"
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions (FAQs)"
        />

        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </div>
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
