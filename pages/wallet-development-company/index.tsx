import Image from "next/image";
import React, { useRef, useState } from "react";
import Cryptocurrency from "../components/Cryptocurrency";
import { VscCircleFilled, VscServerProcess } from "react-icons/vsc";
import Head from "next/head";
import { RiCoinLine, RiCoinsLine } from "react-icons/ri";
import { AiOutlineRight, AiOutlineTranslation } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { HiOutlineChevronLeft } from "react-icons/hi";
import JSON_DATA from "./json/cryptowallet.json";
import Link from "next/link";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import InfoSectionRight from "../components/InfoSectionRight";
import SolutionSec from "../components/SolutionSec";
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
import {
  IconCashBanknote,
  IconShoppingCart,
  IconTools,
  IconTicket,
  IconChartBar,
  IconHeart,
  IconShield,
} from "@tabler/icons-react";
import TechStack from "../components/TechStack";
import ProcessSec from "../components/ProcessSec";
import HireDeveloper from "../components/HireDeveloper";
import Faq from "../components/Faq";
import WhyChoose from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import BlogSection from "../components/BlogSection";
import PortfolioSec from "../componentsnew/PortfolioSec";
import InfoSectionLeft from "../components/InfoSectionLeft";
import PortfolioSlider from "../components/PortfolioSlider";
import Testimonial from "../ca/components/Testimonials";
import ClientTestimonials from "../components/ClientTestimonials";
import ConsultancyApproach from "../components/ConsultancyApproach";
import IndustriesServe from "../componentsnew/IndustriesServe";
import { IconCash, IconDeviceMobile, IconHeadphones, IconHierarchy3, IconLayoutDashboard, IconMessageCircle, IconShieldCheck, IconUsers } from "@tabler/icons-react";
import AboutSectionTwo from "./components/AboutSectionTwo";
import Features from "./components/Features";
import NewPanel from "./components/NewPanel";
import Wallets from "./components/Wallets";
import SolutionsFeature from "../componentsnew/SolutionsFeature";


const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const ModusSection = dynamic(() => import("../components/ModusSection"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
// const BlogSection = dynamic(() => import("../components/BlogSection1"), {
//   loading: () => <p>Loading...</p>,
// });
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});

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


const Process = [
  {
    title: "Requirement Analysis & Planning",
    description: " We begin by understanding your business goals, target audience, and wallet use cases. A detailed roadmap is created to define features, security protocols, and compliance needs."
  },
  {
    title: " UI/UX Design",
    description: " Our design team builds intuitive, user-friendly interfaces with seamless navigation, ensuring both beginners and advanced users can use the wallet with ease."
  },
  {
    title: "Architecture & Technology Selection",
    description: "We select the right blockchain (Ethereum, Polygon, Solana, etc.), databases, APIs, and frameworks. The wallet’s architecture is designed for scalability, high performance, and multi-platform support."
  },
  {
    title: "Core Development",
    description: " Our developers code wallet functionalities including user accounts, transaction modules, encryption layers, payment gateways, and blockchain integrations."
  },
  {
    title: "Security Implementation",
    description: " We integrate multi-layer security features such as biometric authentication, multi-signature approvals, data encryption, fraud detection, and cold storage support."
  },
  {
    title: "Testing & Quality Assurance",
    description: " The wallet undergoes rigorous functional, security, and performance testing to ensure it works flawlessly across devices and platforms."
  },
  {
    title: "Deployment & Ongoing Support",
    description: " Once tested, the wallet is deployed to app stores, web, or enterprise environments. We provide continuous monitoring, upgrades, and feature enhancements."
  }
]

const testimonialData = [
  {
    text: "Comfygen’s custom-built crypto wallet solution was exactly what we needed to secure our digital assets. Their team provided an intuitive, secure, and feature-rich wallet that has significantly improved our user experience and business operations.",
    name: "Daniel Thompson",
    title: "UK",
  },
  {
    text: "We hired Comfygen to develop a crypto wallet, and they truly delivered. The wallet is secure, easy to use, and integrates perfectly with our existing systems. It’s a reliable solution, and we’ve seen an increase in user adoption.",
    name: "Sophia Zhang",
    title: "China",
  },
  {
    text: "The Comfygen team exceeded our expectations when developing our crypto wallet. They understood the importance of security and seamless user experience, and the final product is exceptional. It has helped streamline our business operations.",
    name: "Liam O’Connor",
    title: "Ireland",
  },
  {
    text: "Working with Comfygen was a smooth process from start to finish. They built a secure, multi-platform wallet with all the features we needed. Their customer support and project management were stellar, and we couldn’t be happier with the results.",
    name: "Olivia Torres",
    title: "Spain",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  const slider: any = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settingstwo = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": {
        "@type": "Brand",
        "name": "Comfygen Technologies"
      },
      "name": "Wallet Development Services | Secure E-Wallet & Crypto Wallet Solutions",
      "image": "https://www.comfygen.com/assets/images/wallet-development-hero.jpg",
      "description": "Comfygen provides end-to-end wallet development services, including e-wallets, crypto wallets, DeFi wallets, NFT wallets, and enterprise-grade digital payment solutions with security, scalability, and user-friendly features.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "425"
      }
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Wallet Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen offers secure, scalable, and user-friendly wallet development solutions, including e-wallets, crypto wallets, DeFi wallets, NFT wallets, and enterprise-grade digital payment systems.",
      "url": "https://www.comfygen.com/wallet-development-company ",
      "mainEntityOfPage": "https://www.comfygen.com/wallet-development-company ",
      "areaServed": "Global",
      "serviceType": [
        "E-Wallet Development",
        "Crypto Wallet Development",
        "NFT Wallet Development",
        "DeFi Wallet Development",
        "Enterprise Wallet Solutions",
        "Mobile Wallet App Development",
        "White Label Wallet Development"
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is wallet development, and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wallet development is the process of building digital or crypto wallets that allow users to securely store, send, receive, and manage money or digital assets. It is essential for enabling secure, fast, and convenient transactions for businesses and customers."
          }
        },
        {
          "@type": "Question",
          "name": "What types of wallets can be developed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wallets can include e-wallets, crypto wallets, multi-currency wallets, DeFi wallets, NFT wallets, mobile wallets, web and desktop wallets, and specialized wallets for industries like gaming, healthcare, travel, and finance."
          }
        },
        {
          "@type": "Question",
          "name": "Can a wallet be customized to match a brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wallets can be fully customized with branding options, UI/UX design, and feature tailoring to meet unique business requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Are wallets secure for handling digital assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Secure wallets use multi-layer encryption, multi-signature security, cold storage options, and regulatory compliance measures to protect both fiat and crypto assets."
          }
        },
        {
          "@type": "Question",
          "name": "Are wallets suitable for both startups and large enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Scalable wallet solutions can cater to startups, fintechs, banks, corporates, and large enterprises, maintaining reliability even with millions of transactions."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms do wallets support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wallets can be developed for mobile (iOS, Android), web, desktop, and hardware devices, ensuring cross-platform accessibility and seamless user experience."
          }
        },
        {
          "@type": "Question",
          "name": "Can wallets handle multiple currencies and cryptocurrencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wallets can support multi-currency fiat payments, multiple cryptocurrencies, tokens, stablecoins, and NFTs, including cross-chain and multi-asset management."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development time depends on features and complexity. Simple e-wallets can be launched in a few weeks, while advanced crypto or enterprise wallets may take several months."
          }
        },
        {
          "@type": "Question",
          "name": "Are ready-to-launch wallet solutions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. White-label wallet solutions can be deployed quickly with full customization and branding, ideal for businesses entering the market fast."
          }
        },
        {
          "@type": "Question",
          "name": "Can payment gateways be integrated into a wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wallets can integrate debit/credit cards, UPI, net banking, and crypto payment gateways for seamless transactions."
          }
        }
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com/ ",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blockchain Development",
          item: "https://www.comfygen.com/blockchain-development ",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: " Wallet Development Company",
          item: "https://www.comfygen.com/wallet-development-company ",
        },
      ],
    },
  ];

  return (
    <>
      <Head>

        <title>
          Wallet Development Company | E-Wallet & Crypto Wallet Solutions – Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading wallet development company delivering secure, scalable, and user-friendly e-wallets and crypto wallets. From mobile payment wallets to enterprise crypto solutions, we build custom and white-label wallets with advanced security, multi-currency support, and seamless integrations."
        />

        <meta name="keywords" content="E-Wallet Development, Crypto Wallet Development, NFT Wallet Development, DeFi Wallet Development, Enterprise Wallet Solutions, Mobile Wallet App Development, White Label Wallet Development" />

        <link
          rel="canonical"
          href="https://www.comfygen.com/wallet-development-company"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"></meta>


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
          content="Wallet Development"
        />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

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

        {/* <!-- Open Graph (OG) Tag --> */}

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wallet Development Company"

        />
        <meta
          name="twitter:description"
          content=" Build powerful e-wallets and crypto wallets with Comfygen. From mobile payments to enterprise-grade crypto storage, our wallet development services ensure security, scalability, and seamless user experience."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/crypto-wallet-development/crypto-wallet-development-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/wallet-development-company/wallet-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/wallet-development-company/wallet-development-company.webp" />
        <meta property="og:image:alt" content="wallet development company" />
        <meta property="og:url" content="https://www.comfygen.com/wallet-development-company" />
        <meta property="og:title" content="Secure & Scalable Wallet Development Solutions | Comfygen" />
        <meta property="og:description" content="Build powerful e-wallets and crypto wallets with Comfygen. From mobile payments to enterprise-grade crypto storage, our wallet development services ensure security, scalability, and seamless user experience." />


        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        {/* hero section */}
        <div className="lg:bg-center  bg-no-repeat bg-cener-center bg-left bg-[url('https://www.comfygen.com/comfygen-images/wallet-development-company/wallet-development-hero.webp')]">
          <HeroSectionForAllPages
            heading="Best Wallet development company"
            ptag="Comfygen is the best wallet development company that develops safe,  secure, scalable, and user-friendly e-wallets and crypto wallets. Our wallet development solution helps businesses and their customers manage digital transactions. Whether you want to develop a mobile e-wallet for everyday payments, a crypto wallet for secure asset storage and trading, or an enterprise-level wallet for large-scale financial transactions, our wallets are designed based on your business goal. From startups to global brands, we deliver wallet development services that keep you ahead in the digital economy."
            ptag1=""
            li="Multi-layer authentication with advanced encryption"
            li1="Wallet development for mobile, web, and enterprise systems"
            li2="Customized wallet development solutions aligned with business goals"
            li3="Scalable architecture designed to grow with your business"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <AboutSection
          heading="What is Wallet Development?"
          description1="Wallet development is the process of creating digital wallets that allow users to securely store, send, receive, and manage money, loyalty points, or digital assets. An e-wallet can be a simple mobile app for peer-to-peer payments and everyday purchases, while a crypto wallet can be built for holding, trading, and safeguarding digital currencies. On the enterprise side, wallets can be designed to process millions of transactions daily with advanced compliance and security features."
          description2=""
          description3=""
          points={[
            "Multi-Currency & Multi-Asset Support",
            "Advanced Security Features ",
            "Seamless Payment Integrations ",
            "Scalable & Customizable Solutions",
          ]}


          imageSrc="https://www.comfygen.com/comfygen-images/wallet-development-company/About_2.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <AboutSectionTwo
          heading="How Comfygen Defines Wallet Development"
          description1="At Comfygen, wallet development is not limited only on coding. We focus on developing the best e-wallets and crypto wallets that help businesses to gain customer trust by providing top features. Every wallet we deliver is built on three key principles:"
          description2="Security at the Core – Multi-layer encryption, authentication, and fraud prevention."
          description3="User-Centric Design – Simple, intuitive interfaces that work for both everyday users and advanced traders."
          description4="Scalable Architecture – Flexible builds that adapt as your customer base and transaction volume grow."
          points={[]}
          imageSrc="https://www.comfygen.com/comfygen-images/wallet-development-company/wallet-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <Features />


        <Wallets />

        {/* <NewPanel /> */}


        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Next-Gen Wallet development Company (Emerging Technologies)
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen, we specialize in providing next-generation wallet development services that take advantage of growing technologies to deliver innovative, secure, and futuristic financial solutions. Next-Gen Wallets are designed to meet the evolving demands of digital payments, blockchain technology integration, and multi-asset management.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={title} className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                        {/* <Image
                                          src={img}
                                          className="object-cover"
                                          width={35}
                                          height={50}
                                          alt={title}
                                        /> */}
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
        </section>

        <SolutionsFeature title="Key Features We Deliver in Wallet Development" subtitle="At Comfygen, we provide wallet development solutions tailored to your business needs, whether it’s an e-wallet or a crypto wallet. Every wallet we develop is packed with features that ensure top-level security, user-friendly design, scalability, and regulatory compliance. Our goal is to deliver best wallets that are not only reliable but also flexible enough to grow with your business:" data={JSON_DATA.servicesData1} />

        <IndustriesServe
          heading="Industries We Serve as a Wallet Development Company"
          description="Comfygen, a wallet development company, we provide fully customized crypto, DeFi, and NFT wallet solutions designed for different industries, ensuring secure transactions and digital transformation."
          sliderData={JSON_DATA.IndustriesServe}
        />


        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Portfolio of  Wallet Development Services"
          description="At Comfygen, we develop secure, scalable, and high-performance crypto wallet development solutions that focus to various industries. Our portfolio highlights custom crypto wallet development solution."
        />
        <ContactFromCenter />


        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our End-to-End Wallet Development Process
              </h2>
              <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                Comfygen is a Next-gen wallet development company that follows a proven process to build secure, scalable, and AI-powered digital wallets. Whether you need e-wallet or crypto wallet development services for startups, enterprises, or fintechs, our step-by-step approach ensures your success.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Tech stack we use in wallet development"
          description="At Comfygen, we use a modern, robust tech stack to build secure, scalable, and user-friendly digital and crypto wallets, ensuring smooth performance and seamless integration across mobile, web, and enterprise platforms."
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />



        <Faq
          faqData={JSON_DATA.Frequently}
          title=" Cryptocurrency Wallet Development"
        />

        <HireDeveloper
          heading="Hire Wallet Developers"
          text="Looking to develop a secure, scalable, and feature-rich wallet? Hiring dedicated wallet developers ensures your project gets expert attention from design to deployment. Skilled developers can create e-wallets, crypto wallets, multi-currency wallets, DeFi wallets, and NFT wallets tailored to your business needs."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Custom Development",
            "Advanced Security",
            "Cross-Platform Expertise ",
            "Scalable Architecture",
            "Integration Capabilities ",
          ]}
        />



        {/* 
          <SolutionSec
          heading="Our end-to-end Crypto Wallet Development Services"
          subheading="We offer end-to-end crypto wallet development services developed for startups, enterprises, DeFi platforms, and exchanges. Our expertise spans across all types of wallets to meet diverse business and user needs."
          techData={technologyData}
        /> */}




        <ClientTestimonials
          testimonials={testimonialData}
          heading="What Our Clients Say"
        />
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
