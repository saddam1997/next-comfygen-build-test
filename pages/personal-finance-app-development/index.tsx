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
import ClientTestimonials from "../components/ClientTestimonials";
import PortfolioSec from "../componentsnew/PortfolioSec";
import CallToAction from "../components/CallToAction";
import NewTeckStack from "../componentsnew/NewTeckStack";

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
    title: "Idea & Requirement Analysis",
    description:
      "We begin by understanding your business goals, target users, and app vision. This step ensures we build a personal finance app tailored to your unique requirements and future scalability.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design clean, user-friendly interfaces that simplify money management. Our design team ensures the personal finance software is easy to use, visually appealing, and delivers a great user experience.",
  },
  {
    title: "Development (iOS/Android/Web)",
    description:
      "Our developers build fast, secure, and responsive apps for iOS, Android, and web platforms. We use modern frameworks to ensure smooth performance and cross-platform compatibility.",
  },
  {
    title: "API & Payment Gateway Integration",
    description:
      "We integrate third-party APIs and secure payment gateways for real-time transactions, bank syncing, and financial data management to enhance your finance app’s functionality.",
  },
  {
    title: "Testing & QA",
    description:
      "We conduct full testing to ensure the app runs smoothly without bugs. Our QA team checks performance, security, and usability before final delivery.",
  },
  {
    title: "App Launch",
    description:
      "Once the app is ready, we help you launch it successfully on the App Store, Play Store, or web server. We ensure your product meets all publishing guidelines.",
  },
  {
    title: "Ongoing Maintenance",
    description:
      "After launch, we offer regular updates, bug fixes, and new feature integration to keep your personal finance app running smoothly and up to date.",
  },
];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/personal-finance-app-development/p1.webp",
      head: "Budget & Expense Tracker App",
      name: "A modern personal finance app built for easy budget tracking and daily expense management. Users can set monthly limits, track spending in real time, and get smart alerts. We integrated AI-based insights and bank-level security to ensure a smooth and safe user experience.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/contact-us",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/personal-finance-app-development/p2.webp",
      head: "Smart Personal Finance Manager",
      name: "Money Wallet app is a cross-platform finance app that helps users plan savings, manage bills, and monitor income with ease. We added features like goal tracking, bill reminders, and multi-bank integration. The app was designed with a clean UI and personalized dashboard for better financial control.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/contact-us",
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
      name: "Comfygen",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        areaServed: [
          "US",
          "IN",
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
        email: "sales@comfygen.com",
        availableLanguage: "en, in",
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
      "@type": "Service",
      "name": "Personal Finance App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "We provide expert personal finance app development services to help users manage money, track expenses, and set goals. Build secure and intuitive financial apps tailored to your business needs.",
      "url": "https://www.comfygen.com/personal-finance-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/personal-finance-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Budget tracker app development",
        "Personal finance app development",
        "Custom personal finance app",
        "Personal finance software development",
        "Expense tracker app development"
    
      ],
     
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
        
      ]
    },

    {"@context":"http://www.schema.org",
      "@type":"Product",
      "brand":"Comfygen Technologies",
      "Name":"Personal Finance App Development Company",
      "image":"https://www.comfygen.com/comfygen-images/personal-finance-app-development/about.webp",
      "description":"Looking to build a finance app? We offer personal finance app development in India with secure architecture, rich UI/UX, and advanced financial planning tools for users.",
      "aggregateRating":{"@type":"AggregateRating",
      "ratingValue":"4.9",
      "reviewCount":"160"}
    },

    {
      "@context": "https://schema.org/", 
      "@type": "BreadcrumbList", 
      "itemListElement": [{
        "@type": "ListItem", 
        "position": 1, 
        "name": "Home",
        "item": "https://www.comfygen.com"  
      },{
        "@type": "ListItem", 
        "position": 2, 
        "name": "Personal Finance App Development",
        "item": "https://www.comfygen.com/personal-finance-app-development"  
      }]
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
        email: "sales@comfygen.com",

        availableLanguage: "en, in",
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
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop an astrology app like Co-Star?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of developing an astrology app like Co-Star depends on various factors, including features, design complexity, technology stack, and platform compatibility (Android & iOS). On average, a basic astrology app can cost between $15,000 - $25,000, while an advanced AI-powered astrology app with personalized horoscopes, live consultations, and AI-driven insights may range from $50,000 - $80,000. Get a custom quote based on your specific business needs.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build an astrology app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The development timeline for an astrology app varies based on features, UI/UX design, and integrations. A basic astrology app takes around 3-4 months, while a feature-rich astrology consultation app with AI/ML, blockchain integration, and AR/VR may require 6-12 months. Our team follows an agile development approach to ensure timely delivery without compromising quality.",
          },
        },
        {
          "@type": "Question",
          name: "Will my astrology app be available on both Android and iOS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! At Comfygen, we develop cross-platform astrology apps that run smoothly on Android and iOS using technologies like React Native and Flutter. Whether you need a native app for each platform or a hybrid solution, our developers ensure an optimized user experience across devices.",
          },
        },
        {
          "@type": "Question",
          name: "Why Must You Invest in Astrology App Development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The astrology industry is booming, with millions of users worldwide seeking horoscope readings, tarot consultations, and Vedic astrology insights. Investing in astrology app development provides high revenue potential through subscription models, in-app purchases, and live consultation fees. With AI-driven predictions, AR/VR-based experiences, and blockchain security, your astrology app can stand out in the competitive market.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate live chat and video calls with astrologers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! We specialize in live astrologer consultation app development, integrating real-time chat, video calls, and voice calls. Users can connect with astrologers for personalized horoscope readings, tarot interpretations, and numerology consultations. Our platform also supports secure payment gateways for seamless transactions, ensuring a smooth astrology consultation experience.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies do you use to build astrology apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use modern technologies such as React Native, Flutter, Node.js, Python, and AI/ML frameworks to build feature-rich astrology apps. Our solutions ensure high performance, scalability, and security.",
          },
        },
        {
          "@type": "Question",
          name: "Can you add AI-powered astrology predictions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we integrate AI and ML algorithms to provide personalized astrology predictions, horoscope analysis, and pattern recognition. This enhances user engagement and accuracy in astrology insights.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide ongoing support and maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer post-launch support and maintenance services to ensure your astrology app runs smoothly. Our team handles updates, bug fixes, security patches, and feature enhancements.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Personal Finance App Development Company</title>
        <meta
          name="description"
          content="Looking for a reliable personal finance app development company? We build secure, user-friendly finance apps to track spending, manage budgets, and grow savings. Get custom personal finance software tailored for startups, banks & enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/personal-finance-app-development"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Comfygen Finance App"
        />
        <meta name="author" content="Comfygen Private Limited" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta
          name="keywords"
          content="Budget tracker app development, Personal finance app development, Custom personal finance app, Personal finance software development, Expense tracker app development"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:title"
          content="Personal Finance App Development Company | Custom Finance Solutions"
        />
        <meta
          property="og:description"
          content="We create secure, scalable personal finance apps to track expenses, manage budgets, and automate savings. Build your own fintech solution today with Comfygen."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/personal-finance-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/personal-finance-app-development/og.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/comfygen-images/personal-finance-app-development/og.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Personal Finance App Development Services"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Personal Finance App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Partner with Comfygen – a trusted personal finance app development company. We build custom apps for expense tracking, budget management, and financial insights."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/personal-finance-app-development/og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data (optional) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
        <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden pt-16">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/comfygen-images/personal-finance-app-development/hero.webp')]">
          <HeroSectionForAllPages
            heading="Personal Finance App Development Company"
            ptag="Build a smart and user-friendly personal finance app with Comfygen. We are a trusted personal finance app development company that helps businesses create apps for budgeting, expense tracking, and money management. Whether you're a startup or a financial company, we deliver secure, scalable, and custom personal finance apps that meet your goals."
            li="Simple and Attractive UI/UX Design"
            li1="Secure Bank & Wallet Integrations"
            li2="Real-Time Expense Tracking & Budgeting"
            li3="Smart Reports with AI-Powered Insights"
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
          heading="What is the Purpose of a Personal Finance App for Users?"
          description1="A personal finance app helps users manage their money easily. It allows them to track daily spending, set a monthly budget, save money, and plan for future goals. Everything is available in one app on their phone."
          description2="With helpful alerts and spending insights, users can avoid overspending, pay bills on time, and improve their financial habits. It works like a smart money manager that helps users stay in control of their finances anytime, anywhere."
          points={[
            "Track where money is spent every day",
            "Create and manage a simple budget",
            "Get alerts for bill payments",
            "Set saving goals and follow progress",
            "Keep all financial data safe and private",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/personal-finance-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide the Best Personal Finance App Development Services to
                Startups
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we deliver custom personal finance app development
                services to help startups, banks, and fintech companies build
                smart money management apps. Our personal finance app solutions
                include expense tracking, budgeting tools, and financial goal
                planning to ensure your users stay in control of their
                finances—anytime, anywhere.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/tutor-apps-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Portfolio: Personal  Finance Apps We’ve Built"
          description="We have delivered powerful and secure personal finance apps for startups and businesses around the world. Explore some of our top personal finance app development projects that helped users manage money smartly and grow financially."
        />

        <CallToAction
          heading="Ready to Build Your Personal Finance App?"
          text="Have an idea for a smart money management app? Our expert team is here to turn your vision into a secure and user-friendly solution. Let's create something amazing together."
          buttonText="Request a Proposal"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/personal-finance-app-development/call.webp"
          imageAlt="Get in touch now."
        />

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Types of Personal Finance Apps We Build
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  We specialize in building a wide range of personal finance
                  apps that help users take full control of their financial
                  life. Whether it’s budgeting, tracking expenses, managing
                  investments, or monitoring credit scores, we create secure and
                  scalable apps for all your financial needs.
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
                How We Develop Personal Finance Apps
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                As a leading personal finance app development company, we follow
                a step-by-step approach to deliver secure, scalable, and
                user-friendly finance solutions. Our goal is to build personal
                finance apps that help users manage money with ease and
                confidence.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <NewTeckStack
          title="Technology Stack We Use for Personal Finance App Development"
          description="We use the latest and most reliable technologies to build secure, scalable, and high-performance personal finance apps. Our advanced tech stack supports real-time syncing, smooth performance, and secure financial operations for users across platforms."
        />
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Why Your Business Needs a Personal Finance App
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  Personal finance apps are becoming a powerful tool for
                  businesses. They help attract more users, build trust, and
                  offer better money management solutions that improve customer
                  experience and long-term loyalty.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 ">
                {JSON_DATA.FutureDriven2.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-2xl">
                      <h3
                        className="text-2xl text-[#212121] font-semibold"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <p
                        className=" text-base font-normal mt-2"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Personal Finance App Developers"
          text="Our expert personal finance mobile app developers build feature-rich, secure, and user-friendly apps that help users manage money smartly. Whether you're a startup, bank, or fintech company, our personal finance app developers craft custom solutions that include expense tracking, AI-based insights, and real-time financial planning."
          text1="We use the latest tools, technologies, and proven development strategies to deliver high-performing apps across iOS, Android, and web platforms. From budgeting apps to full-scale finance software—we bring your vision to life."
          text2="Why Choose Our Personal Finance App Developers?"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced in fintech and banking solutions",
            "Skilled in cross-platform development (Flutter, React Native)",
            "Experts in API integration (Plaid, Yodlee, Razorpay)",
            "Focus on security (AES-256, Biometric Auth)",
            "Agile development with fast delivery",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="" />
        {/*<BlogSection initialData={initialData} />*/}
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
