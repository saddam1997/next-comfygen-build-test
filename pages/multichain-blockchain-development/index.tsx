import React, { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/multichainblockchain.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import Faq from "../components/Faq";
import SolutionSec from "../components/SolutionSec";
import { IconCode, IconCoin, IconLock, IconPresentation, IconTablePlus, IconUserCheck } from '@tabler/icons-react';
import CallToAction from "../components/CallToAction";
import ConsultancyApproach from "../components/ConsultancyApproach";
import HireDeveloper from "../components/HireDeveloper";
import PortfolioSec from "../componentsnew/PortfolioSec";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import ServicesSec from "../componentsnew/ServicesSec";
import BlockchainNav from "../componentsnew/blockchain-navbar";


const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "An In-depth Look",
    desc: "Using the global naming standards for each service wallet, the token will precisely reflect the unique crypto entity. Get Your Token Now"
  },
  {
    img: <IconTablePlus stroke={1.5} className="w-12 h-12" />,
    title: "Combustible",
    desc: "Burning tokens is a way for users to reduce the number of tokens in circulation. By doing this, the user gains control over the removal of tokens from the market. Get Your Token Now"
  },
  {
    img: <IconCoin stroke={1.5} className="w-12 h-12" />, // Replace with an appropriate icon if necessary
    title: "A Mintable Coin",
    desc: "Token owners may mint their tokens and produce as many tokens as they wish. Token production and release can be stopped at any time by disabling this process. Create Your Token Now"
  },
  {
    img: <IconPresentation stroke={1.5} className="w-12 h-12" />, // Replace with an appropriate icon if necessary
    title: "A Pauseable Process",
    desc: "Trading activity can be paused to halt the movement of your tokens. During that period, all trading and transactions will be prohibited. Get Your Token Now"
  },
  {
    img: <IconUserCheck stroke={1.5} className="w-12 h-12" />,
    title: "Taking Ownership",
    desc: "Your tokens belong to you as the rightful and entitled owner. Mapping the token identity to your wallet address establishes your exclusive token ownership. Create Your Token Now"
  },
  {
    img: <IconLock stroke={1.5} className="w-12 h-12" />,
    title: "Capped",
    desc: "It is possible to cap the number of tokens a user can create centrally. By applying limits to token creation, the value of the token is not diluted. Create Your Token Now"
  }
];



export default function MultiChain(props) {
  let { initialData } = props;
  const [currentCount, setCurrentCount] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const settingstwo = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };




  const techDataForPage1 = {
    All: [
      {
        img: "https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-image.webp",
        head: "NASDAC Crypto Coin",
        based: "Blockchain-based Cryptocoin Development",
        name: "NASDAC Crypto Coin is a next-generation cryptocurrency with its own dedicated blockchain, setting it apart from traditional tokens. Built on a powerful 'Four Square' architecture, it focuses on speed, mining benefits, seamless integration, and predictable growth. Designed for business, NASDAC Coin is stronger, faster, and more secure than Bitcoin, positioning itself as the first true SUPER COIN in the blockchain ecosystem.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },
      {
        img: "https://www.comfygen.com/image/croston-portfolio-image.webp",
        head: "Croston ",
        based: "Decentralized Blockchain-based Coin Development",
        name: "Croston is the first decentralized cryptocurrency fully backed by gold at a 1:1 ratio, ensuring stability and consistent value growth. Unlike fiat currency, it utilizes blockchain technology to provide enhanced security, transparency, and decentralized control. Croston enables secure transactions and regulated coin issuance while offering convenient purchasing options via credit cards, exchanges, or crypto. As a gold-backed digital asset, Croston redefines secure investments and drives a decentralized marketplace with standardized blockchain development solutions.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
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
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },
      {
        img: "https://www.comfygen.com/image/mezovest-portfolio-image.webp",
        head: "Mezovest",
        based: "Blockchain Logistics Software Development Solutions",
        name: "Mezovest is revolutionizing energy commerce, specializing in LPG and CNG through its pioneering F.I.T (Finance, Infrastructure, and Technology) model. Mezo Energy Trading Limited (METL), enhances safety and efficiency with non-corrosive composite gas cylinders. Its logistics arm, Spatch, optimizes supply chain and distribution, ensuring a smooth and efficient flow of resources. Powered by blockchain technology, Mezovest delivers transparency, security, and seamless operations, redefining the energy sector.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },

    ],
  };

  const jsonLdData = [
    

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "MultiChain Blockchain Development",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen Technologies is a leading MultiChain Blockchain Development Company offering AI-powered blockchain solutions including smart contracts, tokenization, enterprise integration, and scalable private blockchain networks.",
      "url": "https://www.comfygen.com/multichain-blockchain-development  ",
      "mainEntityOfPage": "https://www.comfygen.com/multichain-blockchain-development  ",
      "areaServed": "Global",
      "serviceType": [
        "MultiChain Blockchain Development",
        "AI-Powered MultiChain Solutions",
        "Smart Contract Development on MultiChain",
        "MultiChain Token Development",
        "NFT Marketplace Development on MultiChain",
        "DeFi Platform Development on MultiChain",
        "MultiChain Wallet Development",
        "Enterprise Blockchain Solutions",
        "Private & Permissioned Blockchain Development",
        "MultiChain Blockchain Consulting"
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
      "name": "MultiChain Blockchain Development Company | AI-Powered MultiChain Solutions",
      "image": "https://www.comfygen.com/gallery/about-images/multichain-blockchain-development-about-img.webp",
      "description": "Comfygen Technologies provides AI-powered MultiChain Blockchain Development services, including smart contracts, tokenization, NFT marketplaces, DeFi platforms, and enterprise blockchain solutions for secure and scalable applications.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "385"
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
          "name": "Blockchain Development",
          "item": "https://www.comfygen.com/blockchain-development "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MultiChain Blockchain Development Company",
          "item": "https://www.comfygen.com/multichain-blockchain-development  "
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes MultiChain different from other blockchain platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MultiChain focuses on private, permissioned networks designed for enterprises. Unlike public blockchains, it offers controlled access, customizable permissions, and optimized transaction speed, making it suitable for secure enterprise use cases."
          }
        },
        {
          "@type": "Question",
          "name": "Does MultiChain support token creation and asset management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, MultiChain allows businesses to create, issue, and manage multiple assets or tokens on a single blockchain network. This makes it ideal for use cases like digital currencies, supply chain tokens, and loyalty points."
          }
        },
        {
          "@type": "Question",
          "name": "How does MultiChain handle scalability for growing businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MultiChain supports large-scale transaction processing, efficient consensus mechanisms, and flexible block sizes. These features ensure that businesses can scale their blockchain networks as data and transaction volumes increase."
          }
        },
        {
          "@type": "Question",
          "name": "Can MultiChain Blockchain Development improve supply chain management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. MultiChain enhances supply chain transparency, real-time tracking, and secure data sharing across participants. It helps reduce fraud, ensures authenticity, and improves overall operational efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "Is MultiChain suitable for financial institutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, MultiChain is widely adopted in finance for secure settlements, cross-border payments, asset tokenization, and transaction audits. Its permissioned framework ensures compliance with financial regulations."
          }
        },
        {
          "@type": "Question",
          "name": "What level of customization is possible in MultiChain development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MultiChain is highly customizable, allowing businesses to define governance rules, transaction permissions, block sizes, and access policies to suit specific enterprise needs."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI enhance MultiChain Blockchain Development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI integrates with MultiChain to provide predictive analytics, automated smart contracts, fraud detection, and intelligent decision-making. It empowers enterprises to optimize processes and detect risks in real time."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI-powered MultiChain solutions improve healthcare and supply chain industries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, AI-powered MultiChain solutions can analyze real-time data to predict supply chain bottlenecks, improve drug traceability in healthcare, and enhance patient data security with advanced anomaly detection."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide end-to-end AI-powered MultiChain Blockchain Development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in AI-driven MultiChain solutions, offering end-to-end services like blockchain network setup, AI-based data automation, predictive modeling, and ongoing enterprise support."
          }
        }
      ]
    }







  ];

  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Best MultiChain Blockchain Development Company | AI-Powered Solutions
        </title>
        <meta
          name="description"
          content="Comfygen offers secure, scalable MultiChain blockchain development with AI integration. Build private networks, smart contracts & tokenization for enterprise growth."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/multichain-blockchain-development"
        />

        {/* keywords */}

        <meta name="keywords" content="MultiChain Blockchain Development, AI-Powered MultiChain Solutions, Smart Contract Development on MultiChain, MultiChain Token Development, NFT Marketplace Development on MultiChain, DeFi Platform Development on MultiChain, MultiChain Wallet Development, Enterprise Blockchain Solutions, Private & Permissioned Blockchain Development, MultiChain Blockchain Consulting" />


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
        <meta name="apple-mobile-web-app-title" content=" MultiChain Blockchain Development" />

        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}
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
        <meta name="twitter:title" content="Best MultiChain Blockchain Development Company | AI + Blockchain" />
        <meta name=" twitter: description" content=" Launch secure, scalable, and AI-powered MultiChain blockchain solutions with Comfygen. From smart contracts to enterprise integration, we deliver future-ready innovation.
"/>
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/multichain-blockchain-development/multichain-blockchain-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/multichain-blockchain-development/multichain-blockchain-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/multichain-blockchain-development/multichain-blockchain-development.webp" />
        <meta property="og:image:alt" content="MultiChain Blockchain Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/data/sales-dashboard" />
        <meta property="og:title" content="Best MultiChain Blockchain Development Company | Comfygen" />
        <meta property="og: description" content=" Comfygen’s AI-powered MultiChain Blockchain Development Services. Build secure, permissioned networks, automate workflows, and drive business growth with blockchain innovation." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>
      <BlockchainNav />
      <div className="overflow-hidden">
        {/* <div className=" ">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/multichain-blockchain-bevelopment-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="MultiChain Blockchain Development Company"
                ptag="Comfygen is a trusted MultiChain Blockchain Development Company, delivering reliable applications with advanced features like permissions, data streams, and ready-to-deploy options. Our MultiChain solutions enable organizations to build and launch blockchain applications quickly and efficiently."
                li="Robust Permissioned Access"
                li1="Real-Time Data Streams"
                li2="Rapid Deployment Options"
                li3="Fast, Efficient Blockchain Solutions"
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div> */}

        <HeroSectionForAllPages
          heading="Best MultiChain Blockchain Development Company"
          ptag="Comfygen is the leading MultiChain Blockchain Development Company delivering AI-driven blockchain solutions for enterprises. We specialize in developing safe, secure, scalable, and high-performance MultiChain networks, smart contracts, tokenization, and automated workflows. Our AI-powered analytics enable predictive insights, intelligent transaction monitoring, and data-driven decision-making on the blockchain."
          li="Custom MultiChain Development"
          li1="AI-Driven Analytics"
          li2="Secure & Scalable Networks"
          li3="Smart Contracts & Automation"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/multichain-blockchain-bevelopment-hero-img.webp"
        />
        <AboutSection
          title="About Company"
          heading="Why You Need MultiChain Blockchain Development Solutions"
          description1="In today’s digital world, enterprises need safe, secure, scalable, and intelligent systems to manage transaction data. MultiChain Blockchain Development Solutions provide businesses with private, permissioned networks that enhance transparency, reduce fraud, and enable faster transaction processing. By integrating AI, companies can gain predictive insights, automate workflows, and optimize decision-making across departments. MultiChain Blockchain Development solutions are ideal for organizations looking to improve operational efficiency, streamline supply chains, secure sensitive information, and implement smart contracts or tokenization."
          description2=""
          points={[
            "Enhanced Security & Privacy",
            "Faster & Reliable Transactions",
            "AI-Powered Decision Making",
            "Smart Contracts & Automation",
          ]}
          imageSrc="https://www.comfygen.com/gallery/about-images/multichain-blockchain-development-about-img.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="Our MultiChain & AI Blockchain Development Services"
          description="Comfygen offers top-tier MultiChain Blockchain Development Services, combining the power of MultiChain and AI to deliver secure, scalable, and high-performance blockchain solutions. We specialize in building private and permissioned blockchain development solutions tailored for enterprises, enabling seamless integration, real-time transaction processing, and intelligent automation. Our AI-enhanced approach ensures predictive analytics, smart contract optimization, and data-driven decision-making to help businesses innovate and stay ahead in the competitive market."
          description1=""
        />

        <ContactFromCenter />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <SolutionSec
          heading="An innovative token development solution"
          subheading="Comfygen, a leading <a class='text-blue-500 underline' href='https://www.comfygen.com/crypto-token-development-company' > token Development company</a> , helps create tokens with a recognized framework of Tron, Ethereum, and Ripple for participants to effectively manage their digital assets."
          techData={technologyData}
        />
        <PortfolioSec
          techData={techDataForPage1}
          heading="Explore Our MultiChain Blockchain Based Portfolio"
          description="Explore our portfolio of successful projects built on the MultiChain Blockchain, showcasing our expertise in online solutions and app development. Each project reflects our commitment to excellence, innovation, and client satisfaction."
        />
        <CallToAction
          heading="Ready to Launch Your MultiChain Blockchain Development Solution?"
          text="Comfygen, the leading MultiChain Blockchain Development Company, to build secure, scalable, and AI-powered blockchain solutions tailored for your business. "
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                {/* <span className="text-xl font-light text-[#5556D1]">
                  Top Characteristics of Multichain Blockchain Development
                </span> */}
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Key Characteristics of Multichain Blockchain Development
                </h2>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Chartacterstics.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border-2 p-8 space-y-4 bg-white  border-[#5556D1]/40 rounded-[40px]">
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="break-all text-slate-800 line-clamp-5">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <HireDeveloper
          heading="Hire a MultiChain Blockchain Developer"
          text="Hire MultiChain Blockchain Developer at Comfygen to explore the entire blockchain landscape and its potential benefits. With our design-thinking-driven approach, we help you evaluate MultiChain blockchain solutions from multiple perspectives, create proof-of-concepts and pilots, and implement the solution seamlessly. Our expertise, technology-agnostic approach, and purpose-built architectures enable us to deliver end-to-end MultiChain Blockchain Development solutions for enterprises."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Strong application development skills",
            "Deep understanding of MultiChain blockchain technology",
            "Expertise in cryptography and security",
            "Cross-chain compatibility for enhanced versatility"
          ]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <TechStack
          title="Our Cryptocurrency Development Technology Stack"
          description=""
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="MultiChain Blockchain Development"
        />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}
