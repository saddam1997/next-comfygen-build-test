import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import ConsultancyApproach from "../components/ConsultancyApproach";
import ServicesSec from "../components/ServicesSec";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import Features from "./components/Features";
import ClientTestimonials from "../components/ClientTestimonials";
import PortfolioSec from "../componentsnew/PortfolioSec";
import SolutionsFeature from "../componentsnew/SolutionsFeature";
import NewTeckStack from "../componentsnew/NewTeckStack";
import WhoCanStart from "../componentsnew/WhoCanStart";
import DeliverySection from "../components/DeliverySection";
import PortfolioSlider from "../components/PortfolioSlider";
import CallToAction from "../components/CallToAction";
import LatestTechnology from "../componentsnew/LatestTechnology";
import IndustriesServe from "../componentsnew/IndustriesServe";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineVoiceOverOff } from "react-icons/md";
import { LiaCheckSquareSolid } from "react-icons/lia";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineSpatialTracking } from "react-icons/md";
import {
  IconAddressBook,
  IconApps,
  IconBorderAll,
  IconBrain,
  IconCloud,
  IconCode,
  IconCoin,
  IconCurrencyBitcoin,
  IconEyeClosed,
  IconFirstAidKit,
  IconGraph,
  IconMessage,
  IconNews,
  IconPasswordFingerprint,
  IconReportSearch,
  IconSignal5g,
  IconSquaresSelected,
  IconWallet,
} from "@tabler/icons-react";

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
    description:
      "We gather detailed insights about your business goals, target audience, and wallet functionality to define the project scope.",
  },
  {
    title: "Technical Architecture Planning",
    description:
      "Design a robust, scalable, and secure backend infrastructure to support multi-chain operations and high transaction volumes.",
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive, user-friendly designs that ensure smooth navigation and an engaging mobile experience.",
  },
  {
    title: "Agile Development",
    description:
      "Develop the wallet in iterative sprints, integrating core features while continuously testing performance and security.",
  },
  {
    title: "AI & Advanced Feature Integration",
    description:
      "Incorporate AI-driven fraud detection, predictive analytics, portfolio optimization, and other smart functionalities.",
  },
  {
    title: "Quality Assurance & Security Testing",
    description:
      "Conduct comprehensive testing to ensure reliability, security compliance, and seamless user experience.",
  },
  {
    title: "Deployment & Ongoing Support",
    description:
      "Launch the wallet and provide long-term maintenance, updates, and 24/7 monitoring for optimal performance.",
  },
];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/p4.webp",
      head: "Subscription-Based Milk Delivery App",
      name: "Custom milk delivery mobile app built for a city-based dairy startup. It allows users to subscribe to daily or weekly milk deliveries with flexible quantity selection and auto-renewal.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "https://www.comfygen.com/contact-us",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/portfolio5.webp",
      head: "White-Label Dairy Delivery App",
      name: "White-label online milk delivery app solution for a rural dairy distributor. Designed for quick launch and full customization, it offers product catalog browsing, instant order placement, and admin-side inventory control.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "https://www.comfygen.com/contact-us",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/portfolio6.webp",
      head: "Milk Ordering App",
      name: "Milko is an on-demand milk ordering app for local vendors and individual customers. Built for speed and ease, users can place one-time orders, set delivery preferences, and track delivery status live.",
      num: "3",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "https://www.comfygen.com/contact-us",
    },
  ],
};


const latesttech = [
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
    title: "Biometric & Multi-Factor Authentication",
    desc: "Protect wallets with fingerprint, face ID, and two-factor authentication to ensure only authorized access.",
  },
  {
    img: <IconReportSearch stroke={1.5} className="w-12 h-12" />,
    title: "AI-Driven Fraud Detection & Anomaly Monitoring",
    desc: "Advanced AI models analyze transactions in real time to detect suspicious activity and prevent fraudulent attempts.",
  },
  {
    img: <IconSignal5g stroke={1.5} className="w-12 h-12" />,
    title: "Private Key & Seed Phrase Security Management",
    desc: "We implement secure key management protocols to safeguard private keys and seed phrases, reducing the risk of unauthorized exposure.",
  },
  {
    img: <AiOutlineTransaction className="w-12 h-12" />,
    title: "Smart Transaction Alerts & Predictive Analytics",
    desc: "Users get instant notifications for transactions, price fluctuations, and AI-powered insights for smarter trading decisions.",
  },
  {
    img: <MdOutlineSpatialTracking className="w-12 h-12" />,
    title: "In-App Swaps, DEX Integration & Price Tracking",
    desc: "Seamlessly swap tokens, connect with decentralized exchanges, and monitor real-time crypto prices within one app.",
  },
  {
    img: <GrOptimize className="w-12 h-12" />,
    title: "AI-Powered Portfolio Optimization",
    desc: "Built-in analytics recommend asset allocations and rebalancing strategies, helping users maximize returns with minimal risk.",
  },
  {
    img: <MdOutlineVoiceOverOff className="w-12 h-12" />,
    title: "Voice-Enabled Transactions",
    desc: "Hands-free wallet operations using secure voice commands improve accessibility and speed for tech-savvy users.",
  },
  {
    img: <LiaCheckSquareSolid className="w-12 h-12" />,
    title: "Automated Compliance & KYC Checks",
    desc: "AI modules streamline identity verification and compliance processes, making the wallet safer and ready for global regulations.",
  }
];


const WhoCanStartCards = [
  {
    heading: "Milk Delivery Startups",
    description:
      "Quickly enter the dairy delivery market with our white-label milk delivery app built for startups. Launch your own branded platform with subscription, tracking, and payment features to scale operations and reach customers faster.",
  },
  {
    heading: "Enterprises & Dairy Franchises",
    description:
      "Simplify operations with our custom milk delivery app solutions for enterprises and franchises. Manage multiple branches, delivery agents, customer data, and orders through one centralized admin panel with real-time analytics and smart automation tools.",
  },
  {
    heading: "FMCG Businesses",
    description:
      "Expand your <a class=' underline text-black font-semibold' href='https://www.comfygen.com/ecommerce/fmcg' >FMCG</a> offerings by adding milk delivery as a recurring service. Our milk delivery mobile app development solutions help streamline inventory, track customer orders, and boost sales through automated scheduling and doorstep delivery.",
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
      "@type": "Service",
      "name": "AI-Powered Mobile Crypto Wallet Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/ "
      },
      "description": "Comfygen delivers secure, scalable, and AI-powered mobile crypto wallet solutions for iOS and Android, including multi-currency support, DeFi and NFT integration, cross-chain functionality, and enterprise-grade security.",
      "url": "https://www.comfygen.com/mobile-crypto-wallet-development ",
      "mainEntityOfPage": "https://www.comfygen.com/mobile-crypto-wallet-development ",
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      },
      "serviceType": [
        "Mobile Crypto Wallet Development",
        "Custom iOS & Android Wallet Solutions",
        "Multi-Currency Wallets",
        "DeFi Wallet Integration",
        "NFT Wallet Development",
        "AI-Powered Wallet Features",
        "Cross-Chain Wallet Solutions",
        "Enterprise Crypto Wallets",
        "mobile crypto wallet",
        " best mobile crypto wallet",
        "most secure mobile crypto wallet",
        "best mobile crypto wallet"

      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen Technologies",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      }, {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",

        "email": "sales@comfygen.com",
        "areaServed": ["IN", "US", "CA", "GB"],

        "availableLanguage": "en, in"
      },
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
      "name": "AI-Powered Mobile Crypto Wallet Development Services",
      "image": "https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/mobile-crypto-wallet-development-about.webp",
      "description": "Comfygen delivers secure, scalable, and AI-powered mobile crypto wallet solutions for iOS and Android, including multi-currency support, DeFi and NFT integration, cross-chain functionality, and enterprise-grade security.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1405"
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
          "item": "https://www.comfygen.com/ "
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wallet development company",
          "item": "https://www.comfygen.com/wallet-development-company  "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": " Mobile Crypto Wallet Development Company",
          "item": "https://www.comfygen.com/mobile-crypto-wallet-development   "
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to develop a mobile crypto wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on features, platform (iOS/Android), AI integration, and security requirements. We provide customized quotes after requirement analysis."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a wallet app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically, a full-featured mobile crypto wallet takes 3–6 months, depending on complexity and integrations."
          }
        },
        {
          "@type": "Question",
          "name": "How secure are your wallets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We implement multi-layer encryption, biometric authentication, AI-driven fraud detection, and compliance with global security standards."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate AI features?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our wallets include AI for fraud detection, predictive analytics, portfolio optimization, and smart transaction alerts."
          }
        },
        {
          "@type": "Question",
          "name": "Can the wallet support multiple cryptocurrencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We build multi-currency wallets with cross-chain support for Bitcoin, Ethereum, stablecoins, and altcoins."
          }
        },
        {
          "@type": "Question",
          "name": "Can the wallet be integrated with exchanges or DeFi platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our solutions support seamless integration with exchanges, DeFi protocols, and NFT marketplaces."
          }
        }
      ]
    }

  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Mobile Crypto Wallet Development | AI-Based Wallet Development Solutions</title>
        <meta
          name="description"
          content="Comfygen delivers secure, scalable, and AI-powered mobile crypto wallet development solutions for iOS and Android. Build custom AI-based multi-currency wallets with DeFi and NFT support."
        />

        <meta name="keywords" content="Mobile Crypto Wallet Development, Custom iOS Wallet Solutions, Custom Android Wallet Solutions, Multi-Currency Wallets, DeFi Wallet Integration, NFT Wallet Development, AI-Powered Wallet Features, Cross-Chain Wallet Solutions, Enterprise Crypto Wallets, Mobile Crypto Wallet, Best Mobile Crypto Wallet, Most Secure Mobile Crypto Wallet, Crypto Wallet App Development, Secure Blockchain Wallets, Cryptocurrency Wallet Solutions" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/mobile-crypto-wallet-development" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="AI-Powered Mobile Crypto Wallet Development" />

        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Com/pany Information --> */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />


        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Mobile Crypto Wallet Development | Secure iOS & Android Wallet Solutions" />
        <meta name=" twitter: description" content=" Comfygen delivers secure, scalable, and AI-powered mobile crypto wallets for iOS and Android. Build custom multi-currency wallets with DeFi, NFT support, advanced security, and cross-chain functionality." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/mobile-crypto-wallet-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/mobile-crypto-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/mobile-crypto-wallet-development.webp" />
        <meta property="og:image:alt" content="AI-based Mobile crypto wallet development" />
        <meta property="og:url" content="https://www.comfygen.com/mobile-crypto-wallet-development" />
        <meta property="og:title" content="Mobile Crypto Wallet Development | Secure iOS & Android Wallet Solutions" />
        <meta property="og:description" content=" Comfygen delivers secure, scalable, and AI-powered mobile crypto wallet solutions for iOS and Android. Build custom multi-currency wallets with DeFi, NFT support, advanced security, and cross-chain functionality." />






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
        <div className="lg:bg-center  bg-no-repeat bg-cener-center bg-left bg-[url('https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/mobile-crypto-wallet-development-hero.webp')]">
          <HeroSectionForAllPages
            heading="Mobile crypto wallet development company"
            ptag="Comfygen is a top-rated wallet development company. We build secure, scalable, and AI-powered mobile crypto wallets that put digital assets in the palm of your hand. As the world of cryptocurrency expands, businesses, startups, and enterprises need mobile crypto wallet development solutions that are not only safe but also intuitive and future-ready."
            ptag1="Our blockchain development expert team develops custom mobile crypto wallet apps for iOS and Android with advanced AI features like biometric security, multi-currency support, and fraud detection. Whether you’re a crypto exchange, DeFi platform, or a business adopting blockchain, our wallets are designed to grow with your needs and ensure smooth, reliable transactions."
            li="Bank-grade security with encryption, biometrics, and AI monitoring"
            li1="Multi-currency and cross-chain support for BTC, ETH, and altcoins"
            li2="Built-in DeFi and NFT features for modern crypto use cases"
            li3="Scalable solutions tailored for startups and enterprises alike"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>

       
        <AboutSection
          title="About Company"
          heading="Why Mobile Crypto Wallets are needed for your business"
          description1="The demand for AI-based crypto wallet development is at an all-time high as millions of users adopt digital assets for payments, trading, and DeFi activities. In 2025, the shift to mobile-first transactions makes most secure mobile crypto wallet apps essential for both individuals and businesses."
          description2="Best mobile crypto wallet apps development service ensures safe storage of Bitcoin, Ethereum, and altcoins while offering anytime and anywhere transactions. With cyber threats on the rise, advanced security like biometrics, encryption, and AI-driven fraud detection has become non-negotiable."
          description3="For startups, fintech companies, and enterprises, investing in professional AI-powered mobile crypto wallet development is no longer optional; it’s the foundation for growth in the digital economy."

          imageSrc="https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/mobile-crypto-wallet-development-about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[]}
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our AI-based Mobile Crypto Wallet Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen is a top-rated Wallet Development company. We deliver end-to-end AI-based mobile crypto wallet development services specially designed according to your business goals. Our wallet development team blends blockchain expertise with AI innovation to build a secure mobile cryptocurrency wallet.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <ConsultancyApproach
         imageSrc="https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/benefit-section-image.webp"
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
         
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Portfolio of Mobile Crypto Wallet Development Services"
          description="Comfygen, a trusted wallet development company, creates secure, scalable, and high-performance AI-based mobile crypto wallet development solutions tailored to the unique needs of various industries. Our wallet development portfolio showcases a wide range of projects, highlighting our expertise in building custom mobile crypto wallets that combine usability, security, and advanced features."
        />

        <CallToAction
          heading="Ready to launch your AI-Powered Mobile crypto wallet?"
          text="Comfygen’s mobile crypto wallet development service helps you launch the most secure mobile crypto wallet development"
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/mobile-crypto-wallet-development/mobile-crypto-wallet-development-cta.webp"
          imageAlt="Get in touch now."
        />

        <LatestTechnology
          heading="Key Features of Our AI-Powered Mobile Crypto Wallets"
          subheading="At Comfygen, we design mobile crypto wallets that go beyond storage; they deliver security, intelligence, and ease of use. By integrating AI with blockchain, our mobile crypto wallets empower businesses and users with smart tools that keep assets safe while enhancing the overall experience."
          techData={latesttech}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our End-to-End AI-Based Secure Mobile Crypto Wallet Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                Comfygen is the best Mobile Crypto wallet development company. We follow a trusted and proven process to build mobile crypto wallets that are secure, scalable, and tailored to your business needs.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <NewTeckStack
          title="Tech Stack We Use in Mobile Crypto Wallet Development "
          description="At Comfygen, we use an advanced technology stack to build AI-based mobile crypto wallets that are secure, scalable, and AI-enabled. Our focus is on combining robust blockchain platforms with advanced AI, secure backend systems, and industry-standard security protocols to deliver next-generation wallet solutions."
        />

        <IndustriesServe
          heading="Industries we serve as a mobile crypto wallet development company"
          description="Comfygen developed an AI-based mobile crypto wallet those are specially designed according to industry."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Mobile Crypto Wallet Developers"
          text="Looking to build a secure and feature-rich mobile crypto wallet? At Comfygen, you can hire expert mobile crypto wallet developers who specialize in creating custom iOS and Android wallets tailored to your business needs."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Proven Expertise",
            "High-Quality Coding Standards",
            "Custom Solutions",
            "Security & Compliance",
            "Scalable & Future-Ready",
            "Collaborative & Transparent"

          ]}
        />

        <Faq faqData={Frequently} title="" />
        <ContactFromCenter />
        {/* <Features /> */}
        {/* <DeliverySection hideUrl="milk-delivery-app-development" /> */}
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
