import Image from "next/image";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { IoStarSharp } from "react-icons/io5";
import JSON_DATA from "./json/cryptoderivativesexchangedevelopment.json";
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
import Features from "./components/Features";
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
    title: "Requirement Analysis and Market Research",
    description:
      "We start by understanding your business objectives and conducting market research to identify target users, key features, and competitive gaps to build a strategic development roadmap."
  },
  {
    title: "Platform Architecture and Technology Stack Selection",
    description:
      "Our experts design a scalable architecture and select the best blockchain frameworks, databases, and tools that ensure speed, security, and flexibility for derivatives trading."
  },
  {
    title: "UI/UX Design and Prototyping",
    description:
      "We create user-centric, intuitive designs and prototypes to ensure seamless navigation and an engaging experience for traders and admins."
  },
  {
    title: "Core Development and Feature Integration",
    description:
      "Development of essential components, including order matching engines, wallet systems, derivatives instruments, and real-time data feed, is carried out with a focus on accuracy and security."
  },
  {
    title: "Security Audits and Regulatory Compliance",
    description:
      "Thorough security testing and implementation of KYC/AML protocols guarantee user data protection and adherence to legal standards."
  },
  {
    title: "Integration of Payment Systems and APIs",
    description:
      "We integrate multiple payment gateways and third-party APIs to support smooth transactions and liquidity sourcing."
  },
  {
    title: "Testing, Deployment, and Post-Launch Support",
    description:
      "Comprehensive testing followed by seamless deployment ensures a reliable launch, with ongoing maintenance and updates to keep your platform optimized and competitive."
  }
];



const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-platform-dev.webp",
      head: "Centralized Crypto Exchange Platform Development",
      name: "Comfygen developed a Crypto Exchange Platform, a powerful and secure centralized cryptocurrency exchange designed for high-volume trading. Our client envisioned a platform where users could trade multiple cryptocurrencies with advanced trading tools, real-time data, and enterprise-grade security.With the growing demand for secure and scalable exchange solutions, the client partnered with us to launch a robust trading infrastructure that supports spot, margin, and futures trading with a seamless user experience.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/centralized-crypto-exchange-development",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/p2p-crypto-exchange-development.webp",
      head: "ExchangeX OTC – P2P & OTC Crypto Exchange Platform Development",
      name: "Comfygen partnered with a fintech startup to build ExchangeX OTC, a hybrid crypto exchange platform supporting P2P and Over-the-Counter (OTC) trading functionalities. The goal was to create a decentralized yet secure environment where users can trade directly, bypassing traditional intermediaries.This custom-built platform empowers users with privacy, transparency, and control over crypto transactions, with fiat payment integrations across regions like the UAE, India, and Nigeria.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/p2p-crypto-exchange-development",
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
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Crypto Derivatives Exchange Development Company",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/"
      },
      "description": "Launch a secure, scalable crypto derivatives exchange with our expert development services. We build custom derivatives trading software for global markets with advanced features, real-time data & compliance.!",
      "url": "https://www.comfygen.com/crypto-derivatives-exchange-development",
      "mainEntityOfPage": "https://www.comfygen.com/crypto-derivatives-exchange-development",
      "areaServed": "Global",
      "serviceType": [
        "Crypto Derivatives Exchange Development",
        "derivatives trading software",
        "derivatives software",
        "blockchain derivatives trading",
        "Cryptocurrency trading platform development"
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
      "Name":"Crypto Derivatives Exchange Development Company | Derivatives Trading Software Solutions",
      "image":"https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/crypto-derivatives-exchange-about.webp",
      "description":"Launch a secure, scalable crypto derivatives exchange with our expert development services. We build custom derivatives trading software for global markets with advanced features, real-time data & compliance.!",
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
          "name": "What is a crypto derivatives exchange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A crypto derivatives exchange is a trading platform where users can buy and sell derivatives contracts based on cryptocurrencies, allowing speculation on price movements without owning the underlying asset."
          }
        },
        {
          "@type": "Question",
          "name": "How is a derivatives exchange different from a regular crypto exchange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike spot exchanges, where actual cryptocurrencies are traded, derivatives exchanges focus on contracts like futures, options, and swaps that derive value from crypto assets’ price movements."
          }
        },
        {
          "@type": "Question",
          "name": "What are the key features of a crypto derivatives exchange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Core features include leveraged trading, margin accounts, real-time market data, advanced order types, risk management tools, and high liquidity."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a crypto derivatives exchange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development timelines vary based on complexity but typically range from 4 to 8 months, including planning, development, testing, and deployment."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to customize the derivatives trading software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, derivatives trading platforms can be fully customized to meet specific business requirements, including UI/UX, supported derivatives types, and integration with third-party services."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies are used in crypto derivatives exchange development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common technologies include blockchain frameworks like Ethereum and Binance Smart Chain, programming languages such as Solidity and Rust, and robust backend frameworks for scalability."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure security in a derivatives trading platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security is ensured through multi-layer encryption, two-factor authentication, cold wallet storage, regular audits, and compliance with regulatory standards."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer continuous maintenance, regular updates, and technical support to ensure your derivatives exchange operates smoothly and securely."
          }
        }
      ]
    }
  
  ];

  return (
    <>
       <Head>
          <title>
           Crypto Derivatives Exchange Development Company | Comfygen

          </title>
          <meta
            name="description"
            content="Comfygen is a top crypto derivatives exchange development company offering secure, scalable, and customizable platforms for futures, options, and perpetual trading."
          />
          <link
            rel="canonical"
            href="https://www.comfygen.com/crypto-derivatives-exchange-development"
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
            content="Crypto Derivatives Exchange Development, derivatives trading software, derivatives software, blockchain derivatives trading, Cryptocurrency trading platform development"
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Crypto Derivatives Exchange Development Company | Derivatives Trading Software Solutions"
          />
          <meta
            name="twitter:description"
            content="Launch a secure, scalable crypto derivatives exchange with our expert development services. We build custom derivatives trading software for global markets with advanced features, real-time data & compliance."
          />
          <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/crypto-derivatives-exchange-development.webp" />
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
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:url"
            content="https://www.comfygen.com/crypto-derivatives-exchange-development"
          />
          <meta
            property="og:title"
            content="Crypto Derivatives Exchange Development Company | Derivatives Trading Software Solutions"
          />
          <meta
            property="og:description"
            content="Launch a secure, scalable crypto derivatives exchange with our expert development services. We build custom derivatives trading software for global markets with advanced features, real-time data & compliance."
          />
          <meta property="og:image" content="https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/crypto-derivatives-exchange-development.webp" />
          <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/crypto-derivatives-exchange-development.webp" />
          <meta property="og:image:alt" content="Crypto Derivatives Exchange Development" />

          {/* Structured Data Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Crypto Derivatives Exchange Development",
                operatingSystem: "Web, Android, iOS",
                applicationCategory: "FinanceApplication",
                url: "https://www.comfygen.com/crypto-derivatives-exchange-development",
                description:
                  "Comfygen is a leading crypto derivatives exchange development company delivering secure, scalable and feature-rich derivatives trading software tailored for global markets.",
                author: {
                  "@type": "Organization",
                  name: "Comfygen Private Limited"
                },
                publisher: {
                  "@type": "Organization",
                  name: "Comfygen Private Limited",
                  url: "https://www.comfygen.com"
                },
                image: "https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/crypto-derivatives-exchange-og.webp"
              })
            }}
          />

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        </Head>


      {/* <LazyLoad height={80} offset={100}> */}
        <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden pt-16">

        <HeroSectionForAllPages
          heading="Best Crypto Derivatives Exchange Development Company"
          ptag="Comfygen is the top crypto derivatives exchange development company, building powerful platforms for futures, options, perpetual contracts, and margin trading. Our crypto derivatives exchange solutions include high-performance order matching, multi-currency and multi-chain support, advanced security, and compliance-ready features. Designed for startups and enterprises, our customizable exchange software ensures liquidity integration, real-time risk management, and seamless user experiences."
          ptag1=""
          li='Futures, options & perpetual contracts support'
          li1='Liquidity integration & advanced risk management'
          li2='Bank-grade security & regulatory compliance'
          li3='Scalable architecture with 24/7 expert support'
          
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/crypto-derivatives-exchange-hero.webp"
        />


        <NewSection NewSection={JSON_DATA.NewSections} />
        <AboutSection
          title=""
          heading="What is a Crypto Derivatives Exchange?"
          description1="Investing in crypto derivatives exchange development opens access to a rapidly growing market where traders use futures, options, and perpetual contracts to leverage price movements and manage risks. A robust derivatives trading software offers faster transaction settlements, increased transparency, and enhanced security by leveraging blockchain technology. These features build trust among users and help meet evolving regulatory standards."
          points={[
            "Attracting both retail and institutional traders",
            "Creating multiple revenue streams such as trading fees, margin interests",
            "Enhancing platform liquidity and user engagement",
            "Positioning your business as an innovator in blockchain derivatives trading",
            "Gaining a competitive edge in the expanding cryptocurrency market",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/crypto-derivatives-exchange-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
       

        <ServicesSection 
          heading="Our Crypto Derivatives Exchange Development Services"
          subtitle="At comfygen, we specialize in developing cutting-edge crypto derivatives exchanges that empower traders to access complex financial instruments securely and efficiently. Our comprehensive suite of services covers every aspect of derivatives <a class='text-blue-500 font-semibold'  href='/cryptocurrency-exchange-development'>exchange development</a>, from designing custom trading platforms and integrating smart contracts to implementing advanced risk management and ensuring strict compliance with global regulations. Whether you want to support multiple asset classes or enable cross-chain trading, our expert team delivers scalable, secure, and feature-rich solutions tailored to your business needs."
          servicesData={JSON_DATA.servicesData}
         />

        

          <SolutionsFeature 
            title="Types of Crypto Derivatives Exchange Development We Support"
            subtitle="At Comfygen, we empower exchanges to support a wide range of crypto derivative instruments, enabling diverse trading strategies for retail and institutional traders alike. Our solutions are built to handle high volumes, ensure precision, and deliver advanced features for each derivative type. Below are the key types of crypto derivatives we enable on your trading platform:"
            data={JSON_DATA.LeadingSoftware}

          />

        <ProcessSection title="Crypto Derivatives Exchange Development Process" description="Developing a high-performance crypto derivatives exchange requires a well-structured and secure development process. Our approach ensures a scalable, compliant, and user-friendly platform tailored to your business needs." processSlides={Processs} />

        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Portfolio: Crypto Derivatives Exchange Development"
          description="At Comfygen, we take pride in delivering cutting-edge crypto derivatives exchange solutions tailored to diverse client needs. Our portfolio showcases a range of successful projects demonstrating our expertise in building secure, scalable, and feature-rich trading platforms that empower users worldwide."
        />

        <TrendsSection heading="Benefits of Crypto Derivatives Exchange Development Services"
          subtitle="Partnering with us for your <a class='text-white font-semibold underline' href='/crypto-derivatives-exchange-development'>crypto derivatives exchange development</a> ensures you gain a competitive edge through advanced technology, robust security, and expert support. Here’s why clients trust us to bring their trading platforms to life:"
          trends={JSON_DATA.Emerging} />

        <Features />

        <TechStack
          title="Our Crypto Derivatives Exchange Development Tech Stack"
          description="Choosing the right technology stack is crucial for building a high-performance, secure, and scalable crypto derivatives exchange. At Comfygen, we leverage the latest and most reliable technologies to ensure your platform delivers seamless trading experiences and robust security."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Derivatives Exchange Developer"
          text="Looking to build a secure and scalable crypto derivatives exchange? Hire our expert developers who specialize in creating custom trading platforms tailored to your unique business needs. Our skilled team has extensive experience in blockchain integration, smart contract development, and building seamless user interfaces that enhance trading experiences."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "7+ years of crypto platform development expertise",
            "Delivered over 40 crypto exchange projects globally",
            "Skilled in centralized & decentralized exchange solutions",
            "100% transparency with full IP ownership",
            "Ongoing maintenance and timely feature upgrades",
            "Dedicated teams for development, QA, and support"
          ]}
          
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
