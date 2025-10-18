import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./web3-wallet-development.json";
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
import CallToAction from "../componentsnew/CallToAction";
import SolutionSec from "../componentsnew/SolutionSec";
import IndustriesServe from "../componentsnew/IndustriesServe";


const PortfolioSlider = dynamic(() => import("../components/PortfolioSlider"), {
  loading: () => <p>Loading...</p>,
});

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
    title: " Consultation & Requirement Analysis ",
    description:
      "We understand your goals, business model, and target users to craft a tailored wallet solution.",
  },
  {
    title: "Blockchain Selection & Architecture Design",
    description:
      "Choose the right blockchain framework and define a secure, scalable wallet architecture.",
  },
  {
    title: "Smart Contract Development",
    description:
      " Develop and audit smart contracts for DeFi, NFT, or custom token functionalities.",
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive, engaging, and responsive interfaces for an enhanced user experience.",
  },
  {
    title: "Wallet Integration & Security Audits",
    description:
      "Implement robust APIs, conduct penetration testing, and ensure full data protection.",
  },
  {
    title: "Testing & Deployment",
    description:
      "Perform multi-stage testing for performance, compatibility, and security before going live.",
  },
  {
    title: "Post-launch Maintenance & Support",
    description:
      "Continuous monitoring, updates, and scalability enhancements to keep your Web3 wallet future-ready.",
  },
];


const portfoliodata = [

  {
    "image": "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/p4.webp",
    "title": "Subscription-Based Milk Delivery App",
    "description": "Custom milk delivery mobile app built for a city-based dairy startup. It allows users to subscribe to daily or weekly milk deliveries with flexible quantity selection and auto-renewal.",
    "link": "https://www.comfygen.com/contact-us"
  },

  {
    "image": "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/portfolio5.webp",
    "title": "White-Label Dairy Delivery App",
    "description": "White-label online milk delivery app solution for a rural dairy distributor. Designed for quick launch and full customization, it offers product catalog browsing, instant order placement, and admin-side inventory control.",
    "link": "https://www.comfygen.com/contact-us",
  },

  {
    "image": "https://www.comfygen.com/comfygen-images/milk-delivery-app-development/portfolio6.webp",
    "title": "Milk Ordering App",
    "description": "Milko is an on-demand milk ordering app for local vendors and individual customers. Built for speed and ease, users can place one-time orders, set delivery preferences, and track delivery status live.",
    "link": "https://www.comfygen.com/contact-us",
  },
]

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

const technologyData = [

  {
    img: null,
    title: "Non-Custodial Wallets ",
    desc: "Empower users with full ownership of their private keys and complete decentralization without third-party interference.",
  },
  {
    img: null,
    title: "DeFi Wallets",
    desc: "Enable seamless participation in decentralized finance activities like staking, lending, yield farming, and token swaps.",
  },
  {
    img: null,
    title: "NFT Wallets",
    desc: "Manage, trade, and showcase NFTs across leading marketplaces and chains.",
  },
  {
    img: null,
    title: "Smart Contract Wallets",
    desc: "Execute automated, secure, and transparent blockchain transactions using smart contracts.",
  },
  {
    img: null,
    title: "Hardware & Cold Wallet Integrations",
    desc: "Combine online convenience with offline security for advanced crypto asset protection.",
  },
  {
    img: null,
    title: "Multi-Currency Wallets",
    desc: "Support for multiple cryptocurrencies, stablecoins, and tokens under one unified dashboard.",
  }



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
      name: "On-Demand Milk Delivery App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Hire expert milk delivery app developers from Comfygen. We create on-demand dairy delivery apps with custom features like subscriptions, delivery tracking, and admin dashboards to ensure efficient operations.",
      url: "https://www.comfygen.com/milk-delivery-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/milk-delivery-app-development",
      areaServed: "Global",
      serviceType: [
        "Dairy Delivery App Development",
        "White-label Milk Delivery App Development",
        "Milk Ordering App Development",
        "Custom Milk Delivery App Solutions",
        "Milk Subscription App Development",
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
      Name: "Custom Milk Delivery App Development Solutions",
      image: "Hero section image",
      description:
        "Build your own custom milk delivery app with Comfygen. We deliver user-friendly, scalable, and secure dairy delivery app solutions for startups, businesses, and enterprises. Launch your app with subscription models and real-time tracking.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "190",
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
          name: "Milk Delivery App Development",
          item: "https://www.comfygen.com/milk-delivery-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          "name": "How much does it cost to develop a milk delivery app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of milk delivery app development depends on features, platform, design, and tech stack. A basic app may start from $5,000, while feature-rich custom solutions can cost $15,000 or more. We offer tailored quotes based on your specific business needs."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a milk delivery app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development time varies based on complexity. A standard milk delivery app takes 4–6 weeks, while advanced solutions with subscriptions, GPS tracking, and analytics may take 10–12 weeks. We ensure timely delivery without compromising on quality."
          }
        },
        {
          "@type": "Question",
          "name": "What key features should a milk delivery app include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Core features include user registration, product catalog, subscription management, payment gateway, delivery tracking, order scheduling, and push notifications. We can also add features like route optimization, inventory alerts, and customer support chat as per your business requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer support and maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide complete post-launch support, including bug fixes, updates, server maintenance, and app enhancements. Our dedicated support ensures your milk delivery app remains secure, updated, and efficient as your business grows."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build the app for both Android and iOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We develop native and cross-platform apps for both Android and iOS using modern frameworks. This ensures wider reach, faster performance, and a consistent user experience across all devices."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer white-label milk delivery app solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer customizable white-label milk delivery app solutions. These are ready-to-launch and fully branded for your business, helping you save time and go live faster without building everything from scratch."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate subscription and recurring billing options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in building milk subscription apps. You can offer daily, weekly, or monthly delivery plans with recurring billing, auto-renewals, and flexible scheduling, improving convenience for your customers and stability for your business."
          }
        },
        {
          "@type": "Question",
          "name": "Will the app support multi-location or multi-dairy operations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely. We can develop the app to manage multiple delivery zones, branches, or dairy partners. You can monitor sales, deliveries, and customer engagement across all locations from a centralized admin panel."
          }
        }
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Best Milk Delivery App Development Company</title>
        <meta
          name="description"
          content="Comfygen is a leading milk delivery app development company offering custom, white-label, and on-demand milk delivery app solutions for dairies & startups."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/milk-delivery-app-development"
        />
        <meta
          name="keywords"
          content="Dairy Delivery App Development, White-label Milk Delivery App Development, Milk Ordering App Development, Custom Milk Delivery App Solutions, Milk Subscription App Development"
        />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-title" content="My App" />

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
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/og1.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/og1.webp"
        />
        <meta property="og:image:alt" content="Milk Delivery App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/milk-delivery-app-development"
        />
        <meta
          property="og:title"
          content="White-Label Milk Delivery App Development Company"
        />
        <meta
          property="og:description"
          content="Comfygen offers white-label milk delivery app development services with advanced features like route optimization, payment gateways, and delivery scheduling. Launch your dairy app quickly and grow your business digitally."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Milk Delivery App Builder | Dairy App Development Company"
        />
        <meta
          name="twitter:description"
          content="Build a smart and efficient milk delivery app with our online milk delivery app builder. We offer affordable, custom solutions with subscription, GPS, and multi-payment options."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/og1.webp"
        />
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
            heading="Web3 wallet development company"
            ptag="Comfygen trusted wallet development company, unlocks the full potential of decentralized finance through secure, scalable, and intelligent Web3 wallet development solutions. We develop feature-rich web3 wallets that allow users to manage digital assets, NFTs, and DeFi portfolios with multiple blockchains. Comfygen blockchain Development experts combine advanced encryption, intuitive design, and interoperability to deliver next-gen crypto wallet experiences tailored to your business."
            li="Multi-chain and cross-platform wallet integration."
            li1="Advanced AI-powered security and private key protection."
            li2="DeFi, NFT, and token swap functionality."
            li3="End-to-end Web3 wallet development with 24/7 support."
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/hero.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Our Web3 Wallet Development Services"
          description1="As a trusted Web3 wallet development company, Comfygen delivers next-generation <a href='https://www.comfygen.com/blockchain-wallet-development' class='text-blue-500'>blockchain wallet development</a> solutions especially designed for the decentralized world. Our Web3 wallets go beyond traditional crypto wallets by offering complete control, transparency, and interoperability across multiple blockchains. Our <a href='https://www.comfygen.com/decentralized-wallet-development' class='text-blue-500'>decentralized wallet development</a> solutions empower users with self-custody, eliminating third-party risks while enabling secure management of cryptocurrencies."
          description2="Businesses worldwide are rapidly adopting Web3 wallet development services that provide users with greater privacy, faster transactions, and seamless multi-chain access. At Comfygen, we specialize in creating secure, scalable, and user-friendly crypto wallets that are designed according to business need, and helping you stay ahead in the evolving decentralized ecosystem."
          imageSrc="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[]}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <CallToAction
          heading="Ready To Launch Your Web3 Wallet Today?"
          text="Comfygen’s Web3 wallet development services deliver secure, scalable, and feature-rich decentralized wallets for multi-chain crypto, NFTs, and DeFi assets."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="py-10 mt-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Core Features of Our Web3 Wallet Development Solutions
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  Comfygen’s Web3 wallet development services build crypto wallets to empower users with seamless, secure, and scalable digital asset management. Our <a href='https://www.comfygen.com/custom-blockchain-development-company' className='underline'>custom blockchain development solutions</a> integrate next-gen technologies that ensure interoperability, decentralization, and user control. Designed for startups and enterprises, our wallets combine AI-powered security, multi-chain compatibility, and intuitive UI/UX design to deliver an exceptional decentralized experience.
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

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our End-to-End Web3 Wallet Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                Comfygen trusted <a href='https://www.comfygen.com/wallet-development-company' className='text-blue-500'>wallet development company</a>, follows a proven and transparent Web3 wallet app development process that ensures speed, security, and scalability. Our development process blends deep blockchain expertise with agile methodologies to deliver high-performance decentralized wallets for every business use case. From planning to post-launch support, every stage focuses on innovation, reliability, and user satisfaction.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="py-10">
          <PortfolioSlider
            techData={portfoliodata}
            heading="Portfolio of Wallet Development Services"
            description="Comfygen is a top-rated wallet development company that develops secure, scalable, and high-performance Web3 wallets that cater to various industries. Our portfolio highlights a custom crypto wallet development solution."
          />
        </section>

        <SolutionSec
          heading="Types of Web3 Wallets We Develop"
          subheading="Comfygen offers a diverse range of Web3 wallet development solutions designed to meet the unique needs of modern decentralized ecosystems. Our Web3 wallets are built with advanced security protocols, seamless UI/UX, and interoperability across multiple blockchains. Whether you’re a startup, enterprise, or DeFi platform, our wallets ensure flexibility, scalability, and complete control over digital assets."
          techData={technologyData}
        />
        <NewTeckStack
          title="Tech Stack We Use for Web3 Wallet Development"
          description="Comfygen top a top-rated Web3 wallet development company, we leverage an advanced Web3 technology stack to build secure, scalable, and high-performing decentralized wallet solutions. Our development process integrates the latest tools and frameworks to ensure interoperability, speed, and user-centric design. Each layer of our tech stack is optimized for blockchain efficiency, data integrity, and next-gen digital asset management."
        />

        <IndustriesServe
          heading="Industries We Serve with Web3 Wallet Development"
          description="Comfygen’s Web3 wallet development services allow businesses across multiple industries to adopt decentralized technologies and improve digital asset management, transparency, and user engagement. Our expertise in blockchain and Web3 integration helps enterprises build customized wallet solutions tailored to their industry-specific needs."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Expert Web3 Wallet Developers"
          text="Boost your business with Comfygen’s Web3 wallet development services. Our blockchain specialists build secure, scalable, and feature-rich wallets with multi-chain support, DeFi and NFT integration, and smart contract functionality."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Developed 50+ Web3 wallet solutions across industries",
            "Assigned Project Consultant & Blockchain Architect",
            "Strict NDA policies for data protection",
            "Customized wallets aligned with your business goals",
          ]}
        />



















        {/* who cane start */}


        {/* <section className="py-5">
          <WhoCanStart
            title="Who Can Start a Milk Delivery App Business?"
            description="Comfygen’s milk delivery app development solutions are ideal for a wide range of businesses. Whether you're just starting out or already established, our scalable and customizable apps help you grow fast in the digital dairy market."
            cards={WhoCanStartCards}
          />
        </section> */}


        {/* <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Milk Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen provides top-notch milk delivery app development
                services to dairy companies, milk distributors, and startups.
                Real-time features enhance customer satisfaction with our
                advanced milk delivery app development services.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <Features />


        <DeliverySection hideUrl="milk-delivery-app-development" /> */}


        <ClientTestimonials
          heading="What Our Clients Say About Comfygen Web3 Wallet Development"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="" />
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
