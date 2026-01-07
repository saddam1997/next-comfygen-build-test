import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./mobilebankingappdevelopment.json";

import {
  IconBuildingBank,
  IconCreditCard,
  IconLink,
  IconDeviceMobile,
  IconShieldLock,
  IconTools,
} from "@tabler/icons-react";


import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);


const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TeckStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);









const Process = [
  {
    title: "Requirement Analysis & Strategic Planning",
    description:
      "We begin by deeply understanding your vision, audience, and regulatory needs. As a top-rated stock trading <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/mobile-app-development' >mobile app development company</a>, we plan the technical roadmap, define the app’s key features, and align everything with your business objectives for a successful custom trading app development journey.",
  },
  {
    title: "UI/UX Design & Wireframing",
    description:
      "Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX designers</a> craft clean, modern interfaces that offer smooth navigation and real-time stock insights. Every screen is designed with mobile responsiveness and intuitive flow in mind, ensuring a strong foundation for your trading application development.",
  },
  {
    title: "Interactive Prototyping & User Flow Validation",
    description:
      "We develop interactive prototypes that simulate the user experience—trade execution, dashboards, watchlists, and portfolio views. This helps you and your team validate design logic and functionality before full-scale development begins.",
  },
  {
    title: "Development & API Integration",
    description:
      "Our expert trading app developers build a secure backend and integrate real-time stock market APIs, trading bots, multi-asset support, and payment systems. We make sure your app supports crypto, forex, and stock trading with live data feeds and smooth transactions.",
  },
  {
    title: "Quality Assurance & Security Testing",
    description:
      "We conduct complete testing—performance, security, usability, and compliance. As a trusted <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/finance-app-development' >fintech app development company</a>, we use advanced QA practices like penetration testing to keep user data safe and ensure smooth performance across all devices.",
  },
  {
    title: "Deployment & Post-Launch Maintenance",
    description:
      "After final testing, we launch your app across platforms and app stores. Post-launch, our team offers full maintenance, regular updates, bug fixing, and scaling support to keep your app running at peak performance.",
  },
  {
    title: "User Training & Documentation Support",
    description:
      "We don’t just deliver an app—we make sure your team knows how to use it. From admin guides to training videos, we provide everything you need to onboard users quickly and confidently.",
  },
];

const technologyData = [
  {
    img: <IconBuildingBank stroke={1.5} className="w-12 h-12" />,
    title: "Custom Mobile Banking App Development",
    desc: "We develop fully customized mobile banking apps tailored to your business model. Our solutions ensure secure, scalable, and seamless digital banking experiences using advanced technologies like AI, blockchain, and real-time analytics.",
  },
  {
    img: <IconCreditCard stroke={1.5} className="w-12 h-12" />,
    title: "Digital Wallet Integration",
    desc: "From P2P transfers to NFC and QR code payments, our mobile banking apps include secure and compliant digital wallet features with encrypted data and transaction tracking.",
  },
  {
    img: <IconLink stroke={1.5} className="w-12 h-12" />,
    title: "Core Banking System Integration",
    desc: "We integrate your mobile app with core banking systems (CBS) using high-performance APIs and middleware, enabling real-time synchronization and improved operations.",
  },
  {
    img: <IconDeviceMobile stroke={1.5} className="w-12 h-12" />,
    title: "iOS & Android App Development",
    desc: "Our team builds high-performance native and cross-platform banking apps with intuitive UI/UX, real-time features, and responsive performance across devices.",
  },
  {
    img: <IconShieldLock stroke={1.5} className="w-12 h-12" />,
    title: "Regulatory Compliance & Security",
    desc: "We ensure PCI-DSS, GDPR, and RBI compliance with features like end-to-end encryption, MFA, and role-based access to keep your mobile banking app secure and legal.",
  },
  {
    img: <IconTools stroke={1.5} className="w-12 h-12" />,
    title: "Maintenance & Post-Launch Support",
    desc: "Our 24/7 post-launch services include regular updates, performance monitoring, and feature enhancements to keep your banking app optimized and secure.",
  },
];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/comfygen/stock-trading-ai-stock-app.webp",
      head: "AI-Powered Stock Trading App",
      name: "We developed an AI-integrated trading app with real-time analytics, automated buy/sell execution, and predictive investment suggestions, empowering users with smarter and faster decision-making in volatile markets.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "#",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-multi-asset-platform.webp",
      head: "Multi-Asset Trading Platform",
      name: "This cross-platform mobile app enables trading in stocks, crypto, and forex with live data feeds, smart portfolio management, and secure payment gateway integration for seamless transactions.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "#",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-investment-app.webp",
      head: "Beginner-Friendly Investment App",
      name: "Built for new investors, this intuitive app offers educational content, curated portfolios, and SIP planning tools—making investment easy, transparent, and engaging across all devices.",
      num: "3",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "#",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-crypto-stock-wallet.webp",
      head: "Secure Crypto & Stock Wallet App",
      name: "We created a mobile wallet that supports both cryptocurrencies and stocks, featuring biometric login, encrypted storage, and integrated trading tools for instant asset conversion and investment.",
      num: "4",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "#",
    },
  ],
};

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
      "@type": "Service",
      name: "Custom Stock Trading App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen",
        url: "https://www.comfygen.com/",
      },
      description:
        "Get custom stock trading app development services from Comfygen. We build secure, scalable, and real-time trading apps with advanced features like AI trading bots, portfolio management, and multi-asset support.",
      url: "https://www.comfygen.com/stock-trading-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/stock-trading-app-development",
      areaServed: "Global",
      serviceType: [
        "Custom Stock Trading App Development",
        "Native & Cross-Platform App Development",
        "Stock Trading Web App Development",
        "Trading Bot App Development",
        "AI-Powered Stock Trading App Development",
        "Blockchain-Based Stock Trading App Development",
        "White Label Stock Trading App Development",
        "iOS Stock Trading App Development",
        "Android Stock Trading App Development",
        "Crypto Trading App Development",
      ],

      sameAs: [
        "https://www.facebook.com/comfygen",
        "https://www.linkedin.com/company/comfygen-private-limited",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Comfygen",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen",
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
          streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7",
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
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Comfygen",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        areaServed: ["IN", "US", "CA", "GB", "AU", "DE", "FR"],
        email: "sales@comfygen.com",
        availableLanguage: ["en", "in"],
      },
      sameAs: [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/",
      ],
    },
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Private Limited",
      Name: "Trading App Development Services",
      image:
        "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-about.webp",
      description:
        "Comfygen offers top-tier trading app development services for stock, crypto, and forex markets. We deliver secure, scalable, and real-time apps with AI bots, charting tools, and seamless API integration.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "278",
      },
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop a stock trading app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of developing a stock trading app varies depending on features, platforms (iOS/Android/Web), tech stack, and third-party integrations. On average, it ranges from $25,000 to $150,000+. At Comfygen, we offer custom quotes based on your requirements, ensuring you get the best ROI with secure, scalable, and high-performance trading solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Is it legal to build a stock trading platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it’s legal to build a stock trading platform, provided you comply with regulatory requirements like SEC, FINRA (USA), or SEBI (India). You may also need licenses or partnerships with registered brokerage firms. Our team ensures full legal compliance by integrating robust KYC/AML processes, secure APIs, and transaction tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate with brokerage APIs like Alpaca or TD Ameritrade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Comfygen specializes in integrating brokerage APIs such as Alpaca, TD Ameritrade, E*TRADE, and more. We enable seamless market data access, trade execution, portfolio syncing, and account management using secure and scalable APIs to ensure a smooth trading experience for your users.",
          },
        },
        {
          "@type": "Question",
          name: "What services do you offer for stock trading app development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer end-to-end stock trading app development services, including UI/UX design, backend development, real-time data integration, trading bot integration, API integration, multi-asset support, testing, deployment, and post-launch maintenance. Whether it’s a crypto exchange or equity trading app, we build scalable, compliant, and high-performance platforms.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Best Stock Trading App Development Company</title>
        <meta
          name="description"
          content="Comfygen is a trusted stock trading app development company that builds secure, real-time, and AI-driven trading apps. We create stock, crypto, and hybrid platforms tailored for fintech startups and brokerages."
        />

        <meta
          name="keywords"
          content="Custom Stock Trading App Development, Native & Cross-Platform App Development, Stock Trading Web App Development, Trading Bot App Development, AI-Powered Stock Trading App Development, Blockchain-Based Stock Trading App Development, White Label Stock Trading App Development, iOS Stock Trading App Development, Android Stock Trading App Development, Crypto Trading App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/stock-trading-app-development"
        />

        {/* Robots */}
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        {/* Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport and Mobile Optimization */}
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
        <meta name="apple-mobile-web-app-title" content="Stock Trading App" />

        {/* Author Info */}
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />

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
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Stock Trading App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/stock-trading-app-development"
        />
        <meta
          property="og:title"
          content="Best Stock Trading App Development Company"
        />
        <meta
          property="og:description"
          content="Comfygen is a trusted stock trading app development company that builds secure, real-time, and AI-driven trading apps. We create stock, crypto, and hybrid platforms tailored for fintech startups and brokerages."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Stock Trading App Development Company"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a trusted stock trading app development company that builds secure, real-time, and AI-driven trading apps. We create stock, crypto, and hybrid platforms tailored for fintech startups and brokerages."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Stock Trading App Development",
              operatingSystem: "ANDROID, iOS, Web",
              applicationCategory: "FinanceApplication",
              url: "https://www.comfygen.com/stock-trading-app-development",
              description:
                "Leading stock trading app development company building AI and blockchain-powered custom trading platforms.",
              author: {
                "@type": "Organization",
                name: "Comfygen Private Limited",
              },
              publisher: {
                "@type": "Organization",
                name: "Comfygen Private Limited",
                url: "https://www.comfygen.com",
              },
              image:
                "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>


      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-hero1.webp')]">
          <HeroSectionForAllPages
            heading="Stock Trading App Development Company"
            ptag="Looking to launch your own stock trading app? Comfygen is a leading stock trading app development company offering custom-built, secure, and easy-to-use trading platforms. Our expert team delivers smart stock trading app development services that help you stay ahead—whether you're a startup or a large brokerage."
            ptag1="We create apps with real-time stock updates, AI-powered insights, smooth performance, and strong security. You’ll get a modern, user-friendly app your customers will love—backed by our 10+ years of experience in fintech."
            li="Real-Time Trading Features"
            li1="10+ Years of Fintech App Development Experience"
            li2="SEC, GDPR, and FINRA-Compliant Solutions"
            li3="AI-Powered Analytics & Blockchain Integration"
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
          heading="Hire the No.1 Stock Trading Mobile App Development Company for Startups"
          description1="At Comfygen, we help fintech startups and brokers build smart, secure, and easy-to-use stock trading apps. As a trusted stock trading mobile app development company, we bring over 10 years of hands-on experience in building apps that perform fast, stay compliant, and keep users engaged."
          description2="We offer custom fintech app development solutions that blend powerful features with cutting-edge technologies like AI/ML, blockchain, and real-time market integration. Whether you're creating a stock, crypto, or multi-asset trading app, we design platforms tailored to your business goals—making it easier for traders and investors to succeed in fast-moving markets.."
          imageSrc="https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-about1.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Take Your Business to The Next Level With Our Custom Stock Trading App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen delivers top-grade stock trading app development services, helping fintech startups, brokers, and financial institutions launch next-gen trading platforms.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <div className="py-8">
          <Features
            heading="AI & Blockchain-Based Trading App Development Solutions"
            description="At Comfygen, we harness the power of artificial intelligence and blockchain to revolutionize trading experiences. Our next-gen AI & Blockchain-Based stock trading app development solutions bring real-time decision-making, unmatched security, and intelligent automation to today’s dynamic stock markets."
            featuresData={JSON_DATA.featuresData}
            grid={2} />
        </div>

        {/* <ContactFromCenter /> */}
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/mobile-banking-app-development/develop-app-clones.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Mobile Trading Apps Portfolio"
            description="Explore our innovative stock trading app development portfolio, featuring secure, scalable, and AI-powered solutions for stock trading. From real-time analytics to crypto integration, our trading apps deliver next-gen investment experiences."
          />
        </section>


        <div className="py-8">
          <Features
            heading=" We Deliver Advanced Feature Panels in Your Stock Trading App"
            description="We offer 4 robust feature panels to ensure your stock trading app delivers a seamless, secure, and high-performance experience for all user types—Traders, Admins, Brokers, and Analysts."
            featuresData={JSON_DATA.featuresData1}
            grid={4} />
        </div>



        <TrendsSection
          heading="Top Features of Our Stock Trading Apps"
          subtitle="At Comfygen, we build advanced stock trading apps equipped with powerful, user-centric features that ensure real-time insights, seamless transactions, and unmatched security for traders and investors across all experience levels."
          trends={JSON_DATA.Emerging}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Stock Trading App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
               Our proven stock trading application development process ensures that every trading solution we deliver is market-ready, compliant, and tailored to your business goals.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TeckStack
          title="Tech Stack We Use in Stock Trading App Development"
          description="At Comfygen, we use a future-ready tech stack to build secure, scalable, and real-time stock trading applications. Our technologies ensure top-tier performance, data protection, and seamless trading experiences."
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Experienced Stock Market App Developers"
          text="We provide top-tier stock market app developers with extensive knowledge of trading platforms, real-time data integration, and secure financial technologies. Whether you're a fintech startup or a brokerage firm, stock for app developers build high-performance, scalable trading apps. Invest in your ideas with us, and we'll make them a reality with speed, precision, and compliance in mind."
          text1="Our dedicated trading app developers are proficient in the latest tools and technologies, including <a href='/react-native-development' class='text-white font-semibold underline'  >React Native development</a>, TradingView APIs, and AI/ML-based trading bots. We ensure timely delivery, transparent communication, and 100% client satisfaction, backed by years of fintech mobile app development success."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "10+ Years of Fintech Development Expertise",
            "Hands-on Experience with Trading APIs & Market Data Feeds",
            "Custom Solutions for Stocks, Crypto & Forex",
            "NDA-Protected Projects with Timely Delivery",
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={Frequently} title="" />

        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}

