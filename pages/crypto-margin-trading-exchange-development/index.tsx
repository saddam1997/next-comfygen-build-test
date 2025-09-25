import Image from "next/image";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { IoStarSharp } from "react-icons/io5";
import JSON_DATA from "./json/cryptomargintradingexchangedevelopment.json";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import TechStack from "../components/TechStack";
import HireDeveloper from "../components/HireDeveloper";
import ProcessSec from "../components/ProcessSec";
import InfoSectionLeft from "../components/InfoSectionLeft";
import InfoSectionRight from "../components/InfoSectionRight";
import ModelsSec from "../components/ModelsSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
import CardItem from "../components/CardItem";
import Script from "next/script";
import PortfolioSec from "../components/PortfolioSec";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import ClientTestimonials from "../components/ClientTestimonials";
import ServicesSection from "../componentsnew/ServicesSection";
import SolutionsFeature from "../componentsnew/SolutionsFeature";
import ProcessSection from "../componentsnew/ProcessSection";
import TrendsSection from "../componentsnew/TrendsSection";
import Features from "./components/Features"
import { 
  FaProjectDiagram, 
  FaLayerGroup, 
  FaShieldAlt, 
  FaGavel, 
  FaPaintBrush, 
  FaTools 
} from 'react-icons/fa';




const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Processs = [
  {
    title: "Requirement Analysis & Planning",
    description:
      "We begin by understanding your business goals, target audience, compliance requirements, and unique features. This phase includes market research, competitor analysis, and defining technical specifications to create a clear roadmap.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our expert designers craft intuitive and responsive user interfaces that simplify complex margin trading workflows. A seamless user experience is key for trader retention and platform adoption.",
  },
  {
    title: "Architecture & Technology Stack Selection",
    description:
      "We design a scalable, low-latency system architecture leveraging modern blockchain frameworks, microservices, and APIs. This ensures high performance, security, and easy integration with third-party services like wallets and payment gateways.",
  },
  {
    title: "Core Development",
    description:
      "Our development team builds critical modules, including the margin trading engine, order matching system, leverage management, risk controls, and wallet integrations. Security and speed are prioritized to handle high-frequency trading and real-time margin calls.",
  },
  {
    title: "Smart Contract Development",
    description:
      "For decentralized margin trading platforms, we develop and rigorously audit smart contracts that manage lending pools, collateralization, liquidations, and governance mechanisms on blockchains like Ethereum and Binance Smart Chain.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We conduct thorough testing — functional, security, load, and penetration tests — to ensure your exchange is reliable, secure, and scalable under heavy trading volumes.",
  },
  {
    title: "Deployment & Launch",
    description:
      "Post-testing, we deploy your platform on secure cloud infrastructure or on-premises servers with full data encryption and backup protocols. We also assist in regulatory compliance and platform certification.",
  }
];


const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/image/cloud-based-crypto-trading-bot-crypto-trading-bot-development.webp",
      head: "Cloud-Based Crypto Trading Bot",
      name: "We develop an advanced, cloud-based crypto trading bot designed to automate trading strategies for beginners and experienced traders. It integrates seamlessly with major cryptocurrency exchanges, providing users with powerful trading tools to maximize their profits with minimal effort. Our development team at Comfygen built this platform with a focus on automation, real-time analytics, and user-friendly functionality.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/cloud-based-crypto-trading-bot",
    },
    {
      img: "https://www.comfygen.com/image/ai-based-crypto-trading-bot-crypto-trading-bot-development.webp",
      head: "AI-Based Crypto Trading Bot Development",
      name: "At Comfygen, we developed an advanced crypto trading bot solution designed to automate trading strategies, optimize market execution, and maximize profits. Our cutting-edge platform seamlessly integrates with multiple exchanges, providing traders with AI-driven insights and powerful automation tools.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/crypto-trading-bot-development",
    },


  ],
};

export default function Ecommerce(props) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
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
      "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      "addressLocality": "Jaipur, Rajasthan",
      "addressRegion": "India",
      "postalCode": "302006",
      "telephone": "+91-958-786-7258"
    },
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      "streetAddress": "40 Tuxedo Ct, Toronto, ON",
      "addressLocality": "Toronto",
      "addressRegion": "Canada",
      "postalCode": "M1G3S7",
      "telephone": "+1 579-977-4475"
    },
    {
      "@type": "Service",
  "name": "Margin Trading Exchange Development Company",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen",
    "url": "https://www.comfygen.com/"
  },
  "description": "Launch your crypto margin trading exchange with 7+ years of expertise. We build secure, scalable, and compliant platforms for the USA with advanced features like leverage, auto-liquidation, and real-time analytics.",
  "url": "https://www.comfygen.com/crypto-margin-trading-exchange-development",
  "mainEntityOfPage": "https://www.comfygen.com/crypto-margin-trading-exchange-development",
  "areaServed": "Global",
  "serviceType": [
    "Margin Trading Exchange Development Company",
    "Crypto Margin Trading Platform Development",
    "Margin Trading Software Development",
    "Margin trading exchanges",
    "Margin trading crypto USA"
  ],
 
  "sameAs": [
    "https://www.facebook.com/comfygen", 
    "https://www.linkedin.com/company/comfygen-private-limited"
  ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
          "addressLocality": "Jaipur",
          "postalCode": "302006",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7",
          "addressLocality": "Toronto",
          "postalCode": "M1G3S7",
          "addressCountry": "Canada"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "areaServed": ["IN", "US", "CA", "GB", "AU", "DE", "FR"],
        "email": "sales@comfygen.com",
        "availableLanguage": ["en", "in"]
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },
    {
    "@context":"http://www.schema.org",
    "@type":"Product",
    "brand":"Comfygen Private Limited",
    "Name":"Margin Trading Exchange Development Company | Crypto Margin Trading Solutions USA",
    "image":"https://www.comfygen.com/comfygen-images/crypto-margin-trading/margin-trading-development-about.webp",
    "description":"Launch your crypto margin trading exchange with 7+ years of expertise. We build secure, scalable, and compliant platforms for the USA with advanced features like leverage, auto-liquidation, and real-time analytics.",
    "aggregateRating":{"@type":"AggregateRating",
    "ratingValue":"4.9",
    "reviewCount":"1748"}

    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a margin trading exchange platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A margin trading exchange is a crypto trading platform that allows users to borrow funds to increase their trading position size. It supports features like leverage, long/short trading, auto liquidation, and risk management."
          }
        },
        {
          "@type": "Question",
          "name": "How is a margin trading exchange different from a regular crypto exchange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike a regular crypto exchange, a margin trading platform enables users to trade with borrowed capital (leverage), increasing potential profits and risks, with features like margin calls and liquidation."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build a crypto margin trading platform for the USA market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in developing compliant crypto margin trading platforms for the USA, adhering to regulatory standards like KYC/AML and offering secure APIs, leverage control, and liquidity integration."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a margin trading exchange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development time varies based on feature complexity. A basic platform can take 2–3 months, while a fully custom solution with advanced trading tools may require 4–6+ months."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use for margin trading exchange development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use modern stacks like Node.js, React, Solidity, and blockchain protocols (Ethereum, Binance Smart Chain, etc.), with secure APIs, trading engines, smart contract integration, and microservices architecture."
          }
        },
        {
          "@type": "Question",
          "name": "Is the platform secure for high-volume trading?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We implement multi-layered security, including SSL encryption, 2FA, DDoS protection, anti-market manipulation features, and compliance-ready modules to ensure secure high-volume trading."
          }
        },
        {
          "@type": "Question",
          "name": "Can your solution support both centralized and decentralized margin trading?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we develop both centralized margin trading platforms with admin control and decentralized (DeFi) margin trading exchanges using smart contracts and trustless protocols."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer post-launch support and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide ongoing technical support, feature upgrades, compliance updates, and performance monitoring to ensure your exchange evolves with market demands."
          }
        }
      ]
    }
    
  ];

  return (
    <>
      <Head>
        <title>
         Margin Trading Exchange Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen margin trading exchange development services provide high-performance platforms, multi-asset support, advanced risk management, and regulatory compliance."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-margin-trading-exchange-development"
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-title" content="Comfygen" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta
          name="keywords"
          content="Margin Trading Exchange Development Company, Crypto Margin Trading Platform Development, Margin Trading Software Development, Margin trading exchanges, Margin trading crypto USA"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Margin Trading Exchange Development Company | Crypto Margin Trading Solutions USA"
        />
        <meta
          name="twitter:description"
          content="Launch your crypto margin trading exchange with 7+ years of expertise. We build secure, scalable, and compliant platforms for the USA with advanced features like leverage, auto-liquidation, and real-time analytics."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/crypto-margin-trading/crypto-margin-trading-exchange-development.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/crypto-margin-trading-exchange-development"
        />
        <meta
          property="og:title"
          content="Margin Trading Exchange Development Company | Crypto Margin Trading Solutions USA"
        />
        <meta
          property="og:description"
          content="Launch your crypto margin trading exchange with 7+ years of expertise. We build secure, scalable, and compliant platforms for the USA with advanced features like leverage, auto-liquidation, and real-time analytics."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/crypto-margin-trading/crypto-margin-trading-exchange-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/crypto-margin-trading/crypto-margin-trading-exchange-development.webp"
        />
        <meta property="og:image:alt" content="Crypto Margin Trading Exchange Development" />

        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Margin Trading Exchange Development",
              operatingSystem: "Web, Android, iOS",
              applicationCategory: "FinanceApplication",
              url: "https://www.comfygen.com/crypto-margin-trading-exchange-development",
              description:
                "Comfygen is a leading crypto margin trading exchange development company delivering secure, compliant, and feature-rich platforms with leverage, real-time analytics, and risk management tools.",
              author: {
                "@type": "Organization",
                name: "Comfygen Private Limited"
              },
              publisher: {
                "@type": "Organization",
                name: "Comfygen Private Limited",
                url: "https://www.comfygen.com"
              },
              image:
                "https://www.comfygen.com/comfygen-images/crypto-margin-trading/margin-trading-og.webp"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

        <Header />
      
      <div className="overflow-hidden ">

        <HeroSectionForAllPages
          heading="Margin Trading Exchange Development"
          ptag="Comfygen specializes in margin trading exchange development, creating secure, high-performance platforms for leveraged trading. Our solutions provide real-time order matching, multi-asset support, advanced risk management, and regulatory compliance. Fully customizable and scalable, our software enables fast deployment with seamless user experiences for both retail and institutional traders."
          
          li="Leveraged trading for multiple crypto assets"
          li1="Advanced risk management & compliance"
          li2="High-speed order matching & liquidity integration"
          li3="Scalable, customizable architecture with 24/7 support"
         
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/crypto-margin-trading/margin-trading-development-hero.webp"
        />


        <NewSection NewSection={JSON_DATA.NewSections} />
        <AboutSection
          title=""
          heading="Enterprise-Grade Margin Trading Software to Empower Your Exchange"
          description1="TUnlock the full potential of your crypto trading business with our enterprise-grade margin trading software. Built for performance, compliance, and scalability, our solution helps exchanges deliver powerful leveraged trading experiences with maximum security and control."
          points={[
            "Enterprise-ready margin trading infrastructure",
            "End-to-end secure leverage trading platform",
            "Customizable crypto margin trading architecture",
            "Proven expertise in scalable exchange development solutions",
            "Compliant crypto margin exchange development for the USA",
            "Trusted white label crypto margin trading provider",
          ]}
          
          imageSrc="https://www.comfygen.com/comfygen-images/crypto-margin-trading/margin-trading-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
       

        <ServicesSection 
          heading="Our Margin Trading Exchange Development Services"
          subtitle="As a trusted margin trading exchange development company, we offer comprehensive, scalable, and secure solutions tailored to your business needs. Our expert team leverages advanced technology and industry best practices to help you launch and grow a competitive margin trading platform."
          servicesData={JSON_DATA.servicesData}
         />

        

          <SolutionsFeature 
            title="Use Cases & Industry Applications of Crypto Margin Trading Exchange Development"
            subtitle="Crypto margin trading exchanges have revolutionized the digital asset trading landscape by enabling traders to amplify their positions using leverage. This innovation opens a variety of opportunities across multiple industries and use cases:"
            data={JSON_DATA.LeadingSoftware}

          />

        <ProcessSection title="Our End-to-End Process of Crypto Margin Trading Exchanges Development" description="Building a robust and secure crypto margin trading exchange requires a well-structured, step-by-step development process. At Comfygen, we follow industry best practices and agile methodologies to deliver scalable, high-performance margin trading platforms tailored to your business needs." processSlides={Processs} />

        <Features />

        {/* <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} /> */}
        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Portfolio: Crypto Margin Trading Exchange Development"
          description="We pride ourselves on delivering robust and innovative crypto margin trading exchanges tailored to meet diverse client needs. Our portfolio showcases a variety of successful projects, from startups launching their first margin trading platforms to enterprises upgrading existing systems with advanced features."
        />

        <TrendsSection heading="Benefits of Choosing Our Crypto Margin Trading Exchange Development Services "
          subtitle="Partnering with Comfygen for your crypto margin trading exchange development ensures you gain a competitive edge with future-ready technology, expert developers, and robust security protocols. From custom leverage management to post-launch support, our end-to-end services are designed to help you launch faster, scale efficiently, and trade with confidence."
          trends={JSON_DATA.Emerging} />

        <TechStack
          title="Our Margin Trading Exchange Development Technology Stack"
          description="To build high-performance, secure, and scalable margin trading exchanges, we leverage the latest and most reliable technologies."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Crypto Margin Trading Exchange Developers"
          text="Looking to build a robust, secure, and scalable margin trading exchange? Our skilled developers bring extensive experience in blockchain and crypto exchange platforms, delivering tailor-made solutions that perfectly fit your business needs. From concept to deployment and beyond, our team ensures your project succeeds with quality and reliability."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Proven expertise in <a class='text-white font-semibold underline' href='https://www.comfygen.com/blog/centralized-crypto-exchange-development-in-2025-trends-tech-stack-market-outlook/' target='_blank' rel='noopener noreferrer'>centralized</a> & <a class='text-white font-semibold underline' href='https://www.comfygen.com/blog/a-complete-guide-to-decentralized-exchange-development-in-2025/' target='_blank' rel='noopener noreferrer'>decentralized</a> margin trading",
            "Strong knowledge of blockchain protocols and smart contracts",
            "Skilled in advanced features like leverage and auto-liquidation",
            "Strict adherence to security best practices and compliance",
            "Clear communication with agile project management",
            "Reliable post-launch support for ongoing improvements"
          ]}
          
        />

          <ConsultancyApproach
            Head={JSON_DATA.consultancyHead}
            ItemData={JSON_DATA.consultancyData}
            imageSrc="https://www.comfygen.com/comfygen-images/crypto-margin-trading/margin-trading-development-ConsultancyApproach-key-feature.webp"
            buttonText="Let’s Discuss"
            buttonLink="/contact-us"
                />


        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.testimonials}
        />
        <Faq faqData={JSON_DATA.Frequently} />
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
