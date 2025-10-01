import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./salonappdevelopment.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import ConsultancyApproach from "../components/ConsultancyApproach";
import ServicesSec from "../components/ServicesSec";
import SolutionSec from "../components/SolutionSec";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import DeliverySection from "../components/DeliverySection";

import Script from "next/script";
import TechStack from "../components/TechStack";
import ClientTestimonials from "../components/ClientTestimonials";
import PortfolioSec from "../componentsnew/PortfolioSec";
import {
  IconBook,
  IconSchool,
  IconBrain,
  IconAtom,
  IconLanguage,
  IconClipboardCheck,
  IconBriefcase,
  IconHeartbeat,
  IconApps
} from "@tabler/icons-react";
import ServiceSection from "../components/ServiceSection";
import ServicesSection from "../componentsnew/ServicesSection";
import CallToAction from "../components/CallToAction";
import TrendsSection from "../componentsnew/TrendsSection";
import CoreFeaturesSection from "../componentsnew/CoreFeaturesSection";
import ProcessSection from "../componentsnew/ProcessSection";
import Features from "./components/Features";

const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), {
  loading: () => <p>Loading...</p>,
});
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
    title: "Requirement Analysis",
    description: "We begin with requirement gathering and market research to understand your business model. Our experts analyze competitor apps and design a unique ice cream delivery app solution tailored to your goals."
  },
  {
    title: "UI/UX Design & Wireframing",
    description: "Our design team creates intuitive UI/UX for ice cream apps with smooth navigation, attractive visuals, and engaging user flows, ensuring an enjoyable ordering experience."
  },
  {
    title: "Custom App Development",
    description: "Using modern frameworks, we develop on-demand ice cream delivery apps with real-time tracking, multiple payment options, and AI-based personalization features."
  },
  {
    title: "API Integration & Payment Gateway",
    description: "We integrate secure payment gateways, GPS tracking APIs, and third-party delivery tools to provide seamless ordering and delivery management."
  },
  {
    title: " Quality Testing & Performance Check",
    description: "Our QA team performs end-to-end app testing to ensure bug-free performance, fast loading speed, and secure transactions across Android and iOS platforms."
  },
  {
    title: "Deployment & App Store Launch",
    description: "We deploy your ice cream delivery app on Google Play Store and Apple App Store with complete compliance and optimized performance."
  },
  {
    title: "Post-Launch Support & Maintenance",
    description: "Our job doesn’t end at launch. We provide 24/7 app support, updates, and feature upgrades, ensuring your ice cream delivery business app stays competitive."
  }
];

const technologyData = [
  {
    img: <IconBook stroke={1.5} className="w-12 h-12" />,
    title: "StyleSeat App Clone",
    desc: "Launch your own salon booking app like StyleSeat. Enable users to book haircuts, flawless makeup, or trendy nail services with ease. Our beauty salon mobile app development solution empowers beauty professionals and clients alike."
  },
  {
    img: <IconSchool stroke={1.5} className="w-12 h-12" />,
    title: "Booksy App Clone",
    desc: "Get a custom salon booking app clone inspired by Booksy, designed to let your clients book self-care appointments anytime, anywhere. Deliver smooth scheduling, real-time availability updates, and authentic customer reviews—all within a single, easy-to-use platform."
  },
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
    title: "Fresha App Clone",
    desc: "Build your own beauty and wellness platform with a Fresha clone. Let users effortlessly book salon, hair, and spa appointments anytime. Our salon booking application development company crafts intuitive, feature-packed apps customized to reflect your brand’s unique style and deliver a seamless user experience."
  },
  {
    img: <IconAtom stroke={1.5} className="w-12 h-12" />,
    title: "Yes Madam App Clone",
    desc: "Develop India’s next top on-demand beauty services app platform with a Yes Madam clone. Offer at-home salon, spa, and wellness services with secure payments and real-time tracking."
  },
  {
    img: <IconLanguage stroke={1.5} className="w-12 h-12" />,
    title: "GlossGenius App Clone",
    desc: "Deliver a sleek, all-in-one experience for beauty professionals with an on-demand beauty app development company that builds GlossGenius clones. Manage bookings, payments, and client communication in one powerful app. Create your GlossGenius-inspired salon app today with Comfygen!"
  },
  {
    img: <IconClipboardCheck stroke={1.5} className="w-12 h-12" />,
    title: "MindBody App Clone",
    desc: "Combine beauty, wellness, and fitness into one powerful platform. Our MindBody clone includes class booking, meditation sessions, and salon services. Ideal for beauty and salon booking app development projects looking to merge wellness with beauty. Build a MindBody-style beauty salon."
  }
];



const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/On-Demand Ice Cream Delivery App.webp",
      head: "On-Demand Ice Cream Delivery App",
      name: "A US-based startup partnered with Comfygen to launch Ice-creamGo, an on-demand app with AI-powered flavor suggestions, real-time GPS tracking, and blockchain-secured payments. Result: 40% increase in online orders within 3 months.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "#",
    },
    
    {
      img: "https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/Subscription-Based Ice Cream App.webp",
      head: "Subscription-Based Ice Cream App",
      name: "For a European ice cream chain, we built Cream Mart, a subscription-based delivery app offering flexible plans, automated billing, and AI-driven inventory forecasting. Result: 25% reduction in wastage and 60% repeat customer rate.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "#",
    }
    
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
      "name": "Best Ice Cream Delivery App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Launch your own ice cream delivery app with Comfygen Technologies. We deliver AI-based delivery app development, scalable, and white-label app development solutions for ice cream shops & startups.",
      "url": "https://www.comfygen.com/ice-cream-delivery-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/ice-cream-delivery-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Ice Cream Delivery App Development",
        "On-demand Ice Cream Delivery App Development",
        "White-label Ice Cream Delivery App Development",
        "AI Ice Cream Delivery App Development",
        "On-demand Dessert Delivery App"

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
      "Name": "Ice Cream Ordering & Delivery App Development Solutions",
      "image": "https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development-about.webp",
      "description": "Comfygen Technologies provides end-to-end ice cream ordering & delivery app development with AI, GPS, and blockchain features to grow your brand digitally.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Ice Cream Delivery App Development",
        "item": "https://www.comfygen.com/ice-cream-delivery-app-development"

      }]
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to build an ice cream delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of ice cream delivery app development depends on features, design, platform (iOS, Android, or both), and technology stack. On average, a basic app may cost less, while an AI-powered, feature-rich solution with GPS tracking and subscriptions will cost more."
        }
      }, {
        "@type": "Question",
        "name": "What features should an ice cream delivery app have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good ice cream delivery app should include user registration, menu browsing, real-time GPS tracking, multiple payment options, subscription plans, order scheduling, reviews & ratings, and AI-based personalization for better customer experience."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide white-label ice cream delivery app solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, at Comfygen, we offer white-label ice cream delivery app solutions that can be quickly customized with your branding, features, and design. This helps you launch your delivery business faster without building from scratch."
        }

      }, {
        "@type": "Question",
        "name": "Can startups launch an online ice cream delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We help startups and small businesses launch their own ice cream delivery apps with affordable, scalable, and secure solutions. Our apps are designed to grow with your business, from local deliveries to multi-city expansions."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide post-launch support and maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete post-launch support, updates, and maintenance to ensure your ice cream delivery app runs smoothly. Our team fixes bugs, adds new features, and keeps your app up to date with the latest technologies."
        }

      }, {
        "@type": "Question",
        "name": "How long does it take to develop an ice cream delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development time depends on your app’s complexity. A simple app may take 4–6 weeks, while a feature-rich app with AI and blockchain integration can take 3–6 months. We provide a clear timeline after analyzing your requirements."
        }


      }]
    }
  ];



  return (
    <>
      <Head>
        <title>Ice Cream Delivery App Development Company
        </title>
        <meta name="description" content="Comfygen is the best ice cream delivery app development company offering AI-powered ice cream delivery app development services, secure, and custom solutions with GPS tracking & subscription features." />

        <meta name="keywords" content="Ice Cream Delivery App Development, On-demand Ice Cream Delivery App Development, White-label Ice Cream Delivery App Development, AI Ice Cream Delivery App Development, On-demand Dessert Delivery App"/>

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/ice-cream-delivery-app-development"></link>

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />


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
        <meta name="twitter:title" content="Custom Ice Cream Delivery App Development Company" />
        <meta name="twitter:description" content="Comfygen Technologies builds custom ice cream delivery apps with GPS tracking, subscriptions, AI personalization, and blockchain security. Perfect for shops, chains & startups." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development.webp" />
        <meta property="og:image:alt" content="Ice Cream Delivery App Development" />
        <meta property="og:url" content="https://www.comfygen.com/ice-cream-delivery-app-development" />
        <meta property="og:title" content="AI-Powered Ice Cream Delivery App Development | Comfygen Technologies" />
        <meta property="og:description" content="Boost your business with AI-powered ice cream delivery app solutions. Get secure payments, real-time tracking & subscription features from Comfygen Technologies experts." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData)
          }}
        />
      </Head>

      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development_hero.webp')]">
          <HeroSectionForAllPages
            heading="Best Ice Cream Delivery App Development Company"
            ptag="Comfygen is a leading Ice Cream Delivery App Development Company delivering AI-powered Ice Cream Delivery App Development solutions for startups, ice cream shops, and enterprises. Our expert developers integrate AI-based features like smart flavor recommendations, real-time delivery tracking, and personalized offers. With blockchain-powered security and scalable architecture, we build custom ice cream delivery apps that ensure reliability, growth, and customer satisfaction."
            li="AI-Powered Personalization"
            li1="Real-Time Order Tracking"
            li2="Blockchain Security"
            li3="Scalable & Customizable Solutions"
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
          heading="Why Your Business Needs an Ice Cream Delivery App in 2025"
          description1="The global ice cream market is projected to reach $114.7 billion by 2030, with a growing share driven by online ice cream delivery services. Customers today expect convenience, real-time tracking, and personalized offers, making an Ice Cream Delivery App Development solution a necessity rather than a luxury for ice cream brands, cafes, and dessert startups."
          description2="Whether you operate a standalone ice cream shop, run a multi-chain parlor, or launch a frozen dessert startup, a mobile app can boost your business with AI-powered personalization, subscription-based deliveries, blockchain-secure transactions, and instant notifications."
          description3="The AI-powered Ice cream delivery app development services provided by Comfygen help businesses to increase reach, streamline orders, and maximize customer satisfaction with future-ready digital solutions."
          points={[
            "Streamlines Ice Cream Orders & Subscription Deliveries",
            "Enhances Customer Retention with AI-based Flavor Recommendations",
            "Strengthens Security with Blockchain-Powered Payments",
            "Real-Time Delivery Tracking, Notifications & Order Management"
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <ServicesSection
          heading="Our Ice Cream Delivery App Development Services"
          subtitle="We offer affordable online Ice cream delivery app development services tailored for ice cream parlors, cafes, dessert startups, and large enterprises. With AI-powered Ice cream delivery app solutions, we help businesses improve operations, drive customer engagement, and streamline order management. Our custom ice cream delivery apps are designed to meet all business needs with innovative, scalable, and visually stunning products."
          servicesData={JSON_DATA.servicesData} />


        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  AI-Powered Ice Cream Delivery App Development Solutions
                </h2>
                <p>
                  Comfygen Technologies provides AI-powered Ice Cream Delivery App Development services that help brands, parlors, and startups automate operations, enhance user experiences, and increase customer engagement. Using AI to build smarter, data-driven ice cream delivery platforms, we offer personalized flavor suggestions to predict demand.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left md:grid-cols-3 grid-cols-1">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={title} className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
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
        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Ice Cream Delivery App Portfolio"
          description="At Comfygen, we have successfully delivered innovative Ice Cream Delivery App Development projects for global clients. Our portfolio showcases feature-rich, scalable, and AI-powered mobile solutions that help brands deliver frozen treats at the tap of a button."
        />
        {/* <CallToAction
          heading="Is there Anything Else You Need Help With?"
          text="If you have any doubts regarding our Hyperledger blockchain development services, you can always reach us through multiple channels. Get ready for your consultation with our Hyperledger development experts before taking the first step for developing blockchain applications with Hyperledger."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        /> */}
        <section>
          <Features />
        </section>
        <TrendsSection
          heading="Technologies We Use to Build Smart Ice Cream Delivery Apps"
          subtitle="Comfygen is a top-notch ice cream delivery mobile app development agency. We leverage the latest technologies to build innovative and scalable ice cream delivery app solutions. Our advanced tech stack ensures real-time order tracking, secure payments, and seamless customer experiences for ice cream shops, delivery startups, and enterprises."
          trends={JSON_DATA.Emerging}
        />

        <ProcessSection
          title="End-to-End Ice Cream Delivery App Development Process"
          description="Comfygen Technologies is one of the best AI ice cream delivery app development company in India, USA, UK, and UAE. We follow a structured process to deliver high-quality and scalable ice cream delivery app development solutions. From idea to launch, our team ensures smooth execution, advanced features, and reliable performance."
          processSlides={Process} />

        <TechStack
          title="Technology Stack We Use in Your Ice Cream Delivery App"
          description="At Comfygen, we use a modern and reliable technology stack for ice cream delivery app development that ensures scalability, security, and high performance. Our advanced tools and frameworks help us create feature-rich ice cream delivery apps with smooth functionality, real-time tracking, and AI-powered personalization."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <DeliverySection hideUrl="https://www.comfygen.com/ice-cream-delivery-app-development" />

        <HireDeveloper
          heading="Hire Ice Cream Delivery App Developers"
          text="Want to start your own ice cream delivery business? Hire skilled ice cream delivery app developers from Comfygen to build a safe, fast, and user-friendly mobile app for your brand. We create custom ice cream ordering apps with smart AI suggestions, live GPS tracking, easy subscription plans, and secure blockchain payments."
          text1=""
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experts in ice cream delivery app development",
            "10+ years of experience in on-demand food & delivery apps",
            "AI-powered recommendations & subscription modules",
            "Real-time order tracking with GPS integration"
          ]}
        />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials} />

        <ContactFromCenter />

        <Faq faqData={Frequently} title="Frequently Asked Questions" />

        {/* <BlogSection initialData={initialData} /> */}
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
