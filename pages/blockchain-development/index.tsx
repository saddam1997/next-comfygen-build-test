import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchain.json";
import {
  Icon3dCubeSphere,
  IconCpu,
  IconEyeOff,
  IconLeaf,
  IconNetwork,
  IconTrendingUp,
} from "@tabler/icons-react";
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BlockChainHeader from "../Newcomponet/layout/BlockChainHeader";


const AboutSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const BlockchainIcon = dynamic(
  () => import("../Newcomponet/SectionCompoent/BlockchainIcon"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import BlockchainIcon from "../Newcomponet/SectionCompoent/BlockchainIcon";
// import ConsultancyApproach from "../Newcomponet/SectionCompoent/ConsultancyApproach";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
// import IndustriesServe from "../Newcomponet/SectionCompoent/IndustriesServe";
// import TechStack from "../Newcomponet/SectionCompoent/TechStack";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import ClientTestimonials from "../Newcomponet/SectionCompoent/ClientTestimonials";
// import Faq from "../Newcomponet/SectionCompoent/Faq";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";


const GuidSectionBlockchain = dynamic(
  () => import("./components/GuidSectionBlockchain"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Process = [
  {
    title: "Requirement Gathering & Consultation",
    description:
      "We analyze your goals, users, and blockchain needs to create a clear project roadmap.",
  },
  {
    title: "Blockchain Architecture Design",
    description:
      "We design a scalable, secure blockchain framework with the right network, consensus, and smart contract logic. ",
  },
  {
    title: "UI/UX Design",
    description:
      "Our designers create intuitive, user-friendly interfaces that ensure seamless experience and compliance. ",
  },
  {
    title: "Development & Integration",
    description:
      "Using Ethereum, Polygon, Solana, and Hyperledger, we build smart contracts and APIs for a fully functional app",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Rigorous security, performance, and functionality testing ensure a stable, hack-proof app",
  },
  {
    title: "Deployment & Launch",
    description:
      "We manage smooth deployment on main net or enterprise environments with version control.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Ongoing monitoring, support, and upgrades keep your blockchain app performing at its best.",
  },
];

const technologyData = [
  {
    title: "AI-Driven Smart Contract Automation",
    desc: "We develop intelligent smart contracts powered by AI and blockchain to streamline operations, reduce human error, and boost performance in real-time decentralized applications (dApps).",
    img: <IconCpu stroke={1.5} className="w-12 h-12" />,
  },
  {
    title:
      "<a class='' href='/multichain-blockchain-development'>Multi-Chain Blockchain Solutions </a> ",
    desc: "Our developers build interoperable blockchain solutions, enabling secure and seamless transactions across Ethereum, Polygon, Solana, BNB Chain, and more — ensuring frictionless asset mobility.",
    img: <IconNetwork stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Eco-Friendly Blockchain Architecture",
    desc: "We focus on sustainable blockchain development by using energy-efficient consensus mechanisms and green protocols that align with enterprise ESG standards.",
    img: <IconLeaf stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Next-Gen DeFi App Development",
    desc: "From  <a class='text-blue-500 font-semibold ' href='/decentralized-exchange-development'>decentralized exchanges</a> (DEXs) to staking and yield farming, we build robust DeFi applications that redefine finance through automation, liquidity, and borderless access.",
    img: <IconTrendingUp stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Metaverse & Web3 Integration",
    desc: "We merge blockchain with immersive experiences by developing NFT-based assets, virtual worlds, and metaverse-ready infrastructure for gaming, real estate, and eCommerce.",
    img: <Icon3dCubeSphere stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Zero-Knowledge & Privacy-Preserving Protocols",
    desc: "We integrate ZKP, zk-SNARKs, and other privacy-focused technologies to ensure confidential, secure transactions — essential for sectors like healthcare, finance, and legal tech.",
    img: <IconEyeOff stroke={1.5} className="w-12 h-12" />,
  },
];

const Blockchaincards = [
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b1.svg",
    name: "Solana Blockchain Development",
    desc: "An open-source platform known for lightning-fast performance and minimal fees. Solana is ideal for large-scale apps, DeFi protocols, and NFT marketplaces that require high throughput and low latency.",
    url: "https://www.comfygen.com/solana-blockchain-development-company",
  },
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b9.svg",
    name: "Ethereum Blockchain Development",
    desc: "The most widely adopted smart contract platform, Ethereum powers decentralized applications, tokens, and DeFi ecosystems. Its vast developer community and tooling make it the go-to choice for Web3 innovation.",
    url: "https://www.comfygen.com/ethereum-blockchain-development-company",
  },
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b12.svg",
    name: "Hyperledger Blockchain Development",
    desc: "An enterprise-grade framework for building permissioned networks. Hyperledger offers modular tools and strong privacy controls for industries like supply chain and healthcare.",
    url: "https://www.comfygen.com/hyperledger-blockchain-development",
  },
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b11.svg",
    name: "Polygon Blockchain Development",
    desc: "A Layer 2 scaling solution that brings faster, cheaper transactions to Ethereum-compatible applications. Polygon is perfect for building user-friendly dApps at scale.",
    url: "https://www.comfygen.com/polygon-blockchain-development",
  },
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b2.svg",
    name: "Avalanche Blockchain Development",
    desc: "A highly flexible platform designed for rapid transactions and custom networks. Avalanche offers sub-second finality and seamless Ethereum compatibility, making it perfect for scalable dApps.",
    url: "/",
  },
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b3.svg",
    name: "Cardano Blockchain Development",
    desc: "Built on peer-reviewed research and a layered architecture, Cardano supports secure, energy-efficient applications. It’s excellent for smart contracts and sustainable blockchain solutions.",
    url: "https://www.comfygen.com/cardano-blockchain-development-company",
  },
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b16.svg",
    name: "Stellar Blockchain Development",
    desc: "Focused on global payments and asset transfers, Stellar offers fast, affordable transactions across borders. It’s widely used for remittances and token issuance.",
    url: "https://www.comfygen.com/stellar-blockchain-development-company",
  },
  {
    icon: "https://www.comfygen.com/comfygen-images/blockchain-development-new/b4.svg",
    name: "Polkadot Blockchain Development",
    desc: "An ecosystem that connects multiple blockchains to share data securely. Polkadot enables scalable, interoperable networks with shared security and cross-chain compatibility.",
    url: "/",
  },

];

const website = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Blockchain App Development Company | Comfygen",
  url: "https://www.comfygen.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen Technologies",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  alternateName: "Comfygen Technologies",
  sameAs: [
    "https://www.facebook.com/comfygen.technologies",
    "https://www.instagram.com/comfygen_technologies/",
    "https://www.linkedin.com/company/comfygen-technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.threads.com/@comfygen_technologies",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9587867258",
      contactType: "sales",
      email: "sales@comfygen.com",
      areaServed: [
        "US",
        "CA",
        "GB",
        "AD",
        "AU",
        "AT",
        "BS",
        "BH",
        "IO",
        "KM",
        "CU",
        "AR",
        "CW",
        "CY",
        "DK",
        "DM",
        "EG",
        "FK",
        "FI",
        "FR",
        "DE",
        "GR",
        "GL",
        "HK",
        "IS",
        "IN",
        "ID",
        "IT",
        "JP",
        "JE",
        "JO",
        "KW",
        "KG",
        "KR",
        "MX",
        "FM",
        "NZ",
        "NI",
        "OM",
        "PE",
        "PH",
        "PL",
        "PT",
        "QA",
        "RO",
        "RU",
        "SA",
        "SG",
        "SE",
        "SZ",
        "CH",
        "TH",
        "TR",
        "TN",
        "UA",
        "UM",
        "AE",
        "039",
        "155",
        "154",
        "151",
        "150",
      ],
      availableLanguage: ["en", "hi"],
    },
  ],
};
const testimonialData = [
  {
    text: "Working with Comfygen Technologies was a game changer for our blockchain project. Their team guided us through every step, from architecture to deployment, delivering a secure, scalable solution that exceeded our expectations. We couldn’t have asked for a better technology partner.",
    name: "Sarah Mitchell",
    title: "USA",
  },
  {
    text: "Comfygen Technologies brought deep expertise and clear communication to our decentralized application development. They helped us launch a robust platform on time and within budget. Their commitment to quality and innovation truly sets them apart in the blockchain space.",
    name: "David Lee",
    title: "USA",
  },
  {
    text: "We trusted Comfygen Technologies to build our custom blockchain network, and they delivered flawlessly. Their team combined technical excellence with a clear understanding of our business goals, resulting in a solution that’s reliable, efficient, and ready to scale.",
    name: "Priyank Kumar",
    title: "India",
  },
];

const product = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Best Blockchain Development Company in India | Comfygen Technologies",
  image: "https://www.comfygen.com/assets/images/blockchain-development.jpg",
  description:
    "Looking for the best blockchain development company in India? Comfygen delivers custom blockchain development solutions, smart contract development, and blockchain app development services.",
  brand: {
    "@type": "Organization",
    name: "Comfygen Technologies",
    url: "https://www.comfygen.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};

const additionalOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  legalName: "Comfygen Pvt. Ltd.",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Saddam Husen",
    },
    {
      "@type": "Person",
      name: "Saddam Husen",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
    addressLocality: "Vaishali Nagar",
    addressRegion: "Jaipur, Rajasthan, India",
    postalCode: "302021",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "[+91 9587867258]",
    email: "sales@comfygen.com",
  },
  areaServed: [
    "US",
    "CA",
    "GB",
    "AD",
    "AU",
    "AT",
    "BS",
    "BH",
    "IO",
    "KM",
    "CU",
    "AR",
    "CW",
    "CY",
    "DK",
    "DM",
    "EG",
    "FK",
    "FI",
    "FR",
    "DE",
    "GR",
    "GL",
    "HK",
    "IS",
    "IN",
    "ID",
    "IT",
    "JP",
    "JE",
    "JO",
    "KW",
    "KG",
    "KR",
    "MX",
    "FM",
    "NZ",
    "NI",
    "OM",
    "PE",
    "PH",
    "PL",
    "PT",
    "QA",
    "RO",
    "RU",
    "SA",
    "SG",
    "SE",
    "SZ",
    "CH",
    "TH",
    "TR",
    "TN",
    "UA",
    "UM",
    "AE",
    "039",
    "155",
    "154",
    "151",
    "150",
  ],
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};

const LocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Comfygen Technologies",
  image: "https://www.comfygen.com/svg/Logo1.svg",
  "@id": "https://maps.app.goo.gl/WRvQs16yDQ624dda6",
  url: "https://www.comfygen.com/",
  telephone: "+91-9587867258",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd",
    addressLocality: "Jaipur",
    postalCode: "302019",
    addressCountry: "IN",
    addressRegion: "IN",
  },
  priceRange: "Contact Us",
  sameAs: [
    "https://www.facebook.com/comfygen.technologies",
    "https://www.instagram.com/comfygen_technologies/",
    "https://www.linkedin.com/company/comfygen-technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.threads.com/@comfygen_technologies",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Thursday", "Wednesday", "Tuesday", "Monday"],
      opens: "09:00",
      closes: "19:30",
    },
  ],
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.comfygen.com/blockchain-development/",
        url: "https://www.comfygen.com/blockchain-development/",
        name: "Blockchain Development Company | Blockchain App Development",
        isPartOf: {
          "@id": "https://www.comfygen.com/#website",
        },
        primaryImageOfPage: {
          "@id":
            "https://www.comfygen.com/blockchain-development/#primaryimage",
        },
        image: {
          "@id":
            "https://www.comfygen.com/blockchain-development/#primaryimage",
        },
        thumbnailUrl:
          "https://www.comfygen.com/comfygen-images/blockchain-development-new/og.webp",
        description:
          "Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company.",
        breadcrumb: {
          "@id": "https://www.comfygen.com/blockchain-development/#breadcrumb",
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://www.comfygen.com/blockchain-development/"],
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.comfygen.com/blockchain-development/#primaryimage",
        inLanguage: "en-US",
        url: "https://www.comfygen.com/comfygen-images/blockchain-development-new/og.webp",
        contentUrl:
          "https://www.comfygen.com/comfygen-images/blockchain-development-new/og.webp",
        width: 1080,
        height: 600,
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.comfygen.com/blockchain-development/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.comfygen.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blockchain Development",
            item: "https://www.comfygen.com/blockchain-development/",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.comfygen.com/#website",
        url: "https://www.comfygen.com/",
        name: "Blockchain Technology, Mobility, AI and IoT Development Company",
        description: "Trusted Blockchain AI IoT Development Company",
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.comfygen.com/?s={search_term_string}",
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
      },
    ],
  },
];

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Best Blockchain Development Company in India",
  url: "https://www.comfygen.com/blockchain-development",
  description:
    "Looking for the best blockchain development company in India? Comfygen delivers custom blockchain development solutions, smart contract development, and blockchain app development services.",
  provider: {
    "@type": "Organization",
    name: "Comfygen Technologies",
    url: "https://www.comfygen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.comfygen.com/assets/images/logo.png",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  serviceType: "Blockchain Development Services",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Blockchain Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Blockchain Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Blockchain Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Public Blockchain Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Blockchain Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consortium Blockchain Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hybrid Blockchain Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Blockchain Wallet Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Layer 2 Blockchain Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "POC Blockchain Development",
        },
      },
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.comfygen.com/blockchain-development",
  },
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build blockchain software development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "<p>There is no bar restricted when it comes to building blockchain software development services. You can consider the average cost for blockchain development services is but the cost can fluctuate if the demands extend to integrate more features, implement some latest tech trends, work on advanced technologies, and so on</p>",
      },
    },
    {
      "@type": "Question",
      name: "Can I Ask for Custom Blockchain Development Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: " Yes, we do work on personalized blockchain development solutions. Our blockchain development agency works on customized blockchain development services, solutions based on client’s perspectives. We fully cooperate with our respective clients and understand their ideology, and also our experts share some unique and latest technologies to eventually build a super-functioning decentralized solution.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Future of Blockchain Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain Development Company based in Jaipur, India is transforming various industries, and majorly the future lies in the Cybersecurity industry. Blockchain Development is an open source and distributed network; which keeps the data fully secured and verified. Blockchain Development Organizations do need such technology in future for optimum security and scalability features in it.",
      },
    },
    {
      "@type": "Question",
      name: "How Do I Choose the Best Blockchain Development Company in Jaipur, Rajasthan India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are looking for best blockchain development company in the In India then here are a few things you must consider to find the righteous and suitable best blockchain app development service company- Experience of the Blockchain Development Company, Skilled and Qualified Blockchain Developers, Use of Latest Trends and Advanced Technology with High Security Features, Evaluate the Pricing Model, Vision of Blockchain Development Project, Blockchain Development Service Offers Blockchain Consultation Services",
      },
    },
    {
      "@type": "Question",
      name: "What are the Benefits of Hiring the Blockchain Development Company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiring Blockchain Development Company in India, Blockchain Development Services improves trust, transactional security, transparency and incur in appropriate data sharing across the entire business development network. The decentralized services are experienced and skilled in blockchain development. Companies have professional trained blockchain experts qualified to provide seamless and secured decentralized solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What are Smart Contracts on Blockchain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Smart Contracts are the simple programs stored on the blockchain app development services, solutions, which run when anything predetermined circumstances and conditions occur. These contracts are used to automate the execution of agreements, so that the participants can immediately get certain outcomes",
      },
    },
    {
      "@type": "Question",
      name: "How Does Blockchain Improve Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain technology development ensures to improvise the data structures and security qualities, because the blockchain technology is based on cryptography, consensus and decentralization solutions. Even so, it improves the accuracy, reliability of data claiming, and reduction in fraudulent activities and manipulations.",
      },
    },
    {
      "@type": "Question",
      name: "How Does Blockchain Improve Transparency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The decentralized technology helps improve the global supply chain efficiently, and also allows companies to complete the trading transactions directly with no third parties involvement.",
      },
    },
    {
      "@type": "Question",
      name: "How Does Blockchain Improve Efficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain technology reduces the overhead and transactional cost by efficiently lessening the paperwork and errors. Also the decentralized solutions reduce the third party involvements and middleman to verify the transactions.",
      },
    },
    {
      "@type": "Question",
      name: "What are the Challenges of Implementing Blockchain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementing the blockchain technology raise numbers of challenges; such as:- Inefficient Technology Desig, Low Scalabilit, Security Problem, Lack of Privac, Higher Energy Consumption",
      },
    },
  ],
};

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
        <title>
          Blockchain App Development Company | Blockchain App Development
        </title>
        <meta
          name="description"
          content="Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/blockchain-development"
        />
        <meta
          name="keywords"
          content="blockchain development company, blockchain development services, blockchain app development services, blockchain development solutions, blockchain development service, blockchain software development company, blockchain software development services, custom blockchain development company, blockchain development services company"
        />



        <meta
          property="og:title"
          content="Blockchain Development Company | Blockchain App Development"
        />
        <meta
          property="og:description"
          content="Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/blockchain-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Best Blockchain Development Company in India"
        />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="fb:page_id" content="110909321596135" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="twitter:title"
          content="Blockchain Development Company | Blockchain App Development"
        />
        <meta
          name="twitter:description"
          content="Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(service),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LocalBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(additionalOrganization),
          }}
        />
      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[50px]">
        <HeroSectionForAllPages
          heading="Blockchain App Development Company"
          ptag="Comfygen is a leading blockchain app development company specializing in creating secure, scalable, and enterprise-grade decentralized applications (dApps). Our team of expert blockchain developers delivers custom blockchain software solutions for startups, SMEs, and large enterprises, helping them leverage distributed ledger technology to enhance transparency, automation, and data security. Whether you need blockchain wallet development, smart contract development, NFT marketplace solutions, or DeFi platform development, Comfygen provides end-to-end blockchain development services according to your business goals. "
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/blockchain-development-new/hero.webp"
        />

        <AboutSection
          title=""
          heading="About Our Blockchain App Development Expertise"
          description1="At Comfygen, we are more than a blockchain development agency, as a leading blockchain app development company, we deliver custom blockchain development solutions, blockchain consulting services, and end-to-end dApp development designed to help businesses harness the power of decentralization, transparency, and data security."
          description2="Our certified <a href='https://www.comfygen.com/hire-blockchain-developer' class='text-blue-600'>blockchain developers</a> and experienced solution architects specialize in building secure, scalable, and tailored blockchain applications that perfectly align with your business objectives. We offer smart contract development, tokenization platforms, DeFi solutions, NFT marketplace services, and <a href='https://www.comfygen.com/blockchain-wallet-development' class='text-blue-600'>blockchain wallet development</a> for startups and enterprises worldwide.  "

          imageSrc="https://www.comfygen.com/gallery/about-images/blockchain-development-about-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our Blockchain App Development Services
              </h2>
              <p className="text-base text-center font-normal">At Comfygen, we provide end-to-end blockchain development services designed to help startups, enterprises, and innovators build secure, scalable, and decentralized digital ecosystems.
                Our blockchain development expertise covers every layer of blockchain technology from architecture design to <a href='https://www.comfygen.com/smart-contract-wallet-development' className="text-blue-600">smart contract deployment</a>, ensuring that your business gains a powerful competitive edge in the digital economy. </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <CallToAction
          heading="Build a Future-Ready Blockchain Application"
          text="Take your business to the next level with secure, scalable, and high-performance blockchain app development solutions."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Customized Blockchain Solutions to Drive Business Excellence
                </h2>
                <p>
                  Explore our suite of cutting-edge blockchain solutions crafted
                  to accelerate digital transformation, enhance trust, and
                  unlock new revenue streams. At Comfygen, we tailor blockchain
                  innovations that align with your unique industry needs and
                  future goals.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {JSON_DATA?.LeadingSoftware.map((elem, index) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={index} className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* <ContactFromCenter /> */}

        <BlockchainIcon
          heading="Explore Our Leading Blockchain Development Platforms"
          desc="We bring deep expertise and extensive knowledge of the most powerful blockchain development platforms. Our ability to deliver innovative, secure, and scalable solutions is driven by a robust technology stack and a highly skilled development team. From DeFi applications to enterprise-grade systems, we transform ideas into cutting-edge blockchain solutions tailored to industry needs."
          cards={Blockchaincards}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/exclusive-features-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our End-to-End Blockchain App Development Process</h2>
              <p className="text-base font-normal mt-2">
                At Comfygen, we follow an agile, strategic approach to turn your vision into a high-performance, decentralized solution with transparency and innovation at every step. 
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Artificial Intelligence Success Stories"
            description="At Comfygen, we take pride in delivering AI solutions that drive measurable results for our clients. Here are some examples of how we’ve helped businesses achieve their goals"
          />
        </section>

        {/* <LatestTechnology
          heading="Blockchain Development Trends We Follow"
          subheading="At Comfygen, we integrate cutting-edge blockchain trends to deliver future-ready digital solutions. As a top blockchain development company, we combine innovation with strategy to build decentralized, secure, and scalable ecosystems for businesses worldwide."
          techData={technologyData}
        /> */}

        <IndustriesServe
          heading="Our Blockchain Development Services for Diverse Industries"
          description="At Comfygen, we provide cutting-edge blockchain development services designed to transform industries across the globe. With a focus on innovation, security, and scalability, our blockchain solutions cater to diverse sectors, offering a tailored approach that meets the unique demands of each industry. From financial services to healthcare, supply chain, gaming, and beyond, our blockchain applications streamline operations, reduce costs, and enhance transparency."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <TechStack
          title="Development Technologies We Use"
          description="We use cutting-edge technologies for blockchain solution development. There is no scope we leave building the best blockchain applications."
        />

        <HireDeveloper
          heading="Hire Blockchain Developers"
          text="Unlock the full potential of blockchain technology by hiring experienced blockchain developers from Comfygen. Our team of certified experts is dedicated to creating custom, scalable, and secure blockchain solutions that drive business transformation and competitive advantage. By choosing our blockchain development professionals, you gain access to a wealth of expertise that covers everything from smart contract creation and decentralized application (dApp) development to enterprise-grade blockchain integration."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Tailored Solutions: Custom blockchain architectures.",
            "Cutting-Edge Tech: Expertise in DeFi, NFTs, and cross-chain integration.",
            "Enhanced Security: Robust, secure coding and audits.",
            "Agile Execution: Fast delivery with iterative improvements.",
            "Comprehensive Service: End-to-end support from planning to deployment.",
          ]}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientTestimonials
          testimonials={testimonialData}
          heading="What Our Clients Say"
        />

        <GuidSectionBlockchain />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
        />

        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </div>
  );
}


export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

