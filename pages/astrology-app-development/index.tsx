import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import ConsultancyApproach from "../components/ConsultancyApproach";
import ServicesSec from "../components/ServicesSec";
import SolutionSec from "../components/SolutionSec";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import Features from "./components/Features";
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
  IconApps,
} from "@tabler/icons-react";
import SolutionsFeature from "../componentsnew/SolutionsFeature";

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
    title: "Requirement Analysis & Research",
    description:
      "We begin by analyzing your business goals, target audience, and competitors. Our astrology app developers define clear objectives and workflows to build a strong foundation for your custom astrology app development project.",
  },
  {
    title: "Marketing & Growth Strategy",
    description:
      "Our team creates a growth-focused strategy to position your astrology app in the market. From user acquisition plans to engagement tactics, we ensure your app attracts astrologers, startups, and global users.",
  },
  {
    title: "Wireframing & UI/UX Design",
    description:
      "We design engaging, user-friendly interfaces with intuitive navigation. Our astrology app development services focus on elegant visuals, smooth booking of consultations, horoscope readings, and personalized astrology experiences.",
  },
  {
    title: "Development & Integration",
    description:
      "Our expert astrology app developers build robust, scalable apps with AI, Machine Learning, Blockchain, and AR/VR integration. Whether it’s horoscope, zodiac, Kundli, or astrology consultation apps, we integrate all key features for a seamless user journey.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We conduct rigorous testing for performance, usability, and security. Our QA team ensures your astrology app runs flawlessly across Android, iOS, and web platforms, delivering accurate predictions and smooth functionality.",
  },
  {
    title: "Deployment & Launch",
    description:
      "Once approved, we deploy your astrology app on app stores with complete backend configuration. As a trusted custom astrology mobile app development company, we make sure a seamless launch and integration with your business operations.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Post-launch, we provide 24/7 support, regular updates, and feature enhancements. Our custom astrology and horoscope app development company ensures your app stays secure, scalable, and aligned with the latest astrology trends.",
  },
];

const technologyData = [
  {
    img: <IconBook stroke={1.5} className="w-12 h-12" />,
    title: "Elementary Application Development",
    desc: "Comfygen is a trusted tutor app development company that creates educational and engaging mobile apps for elementary and primary schools. Our education apps feature interactive learning modules, AI-driven assessments, and gamification to make education fun and effective for young learners. Our on-demand tutor app development services make sure safe and engaging learning.",
  },
  {
    img: <IconSchool stroke={1.5} className="w-12 h-12" />,
    title: "Freelance Tutor Marketplace Development",
    desc: "Comfygen builds freelance tutor marketplace apps for independent tutors to offer their services. A profile can be created, a session can be booked, secure payments can be made, and rating systems provide quality assurance for students.",
  },
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
    title: "K-12 Education App Development",
    desc: "Comfygen’s education mobile app development company delivers K-12 education apps that provide structured learning experiences with customizable content. We make sure of seamless curriculum alignment, progress tracking, and gamified learning elements for students of all ages.",
  },
  {
    img: <IconAtom stroke={1.5} className="w-12 h-12" />,
    title: "STEM Learning Application Development",
    desc: "Our best custom tutor booking app development company specializes in STEM learning applications, integrating AI, AR/VR, and interactive simulations to make science, technology, engineering, and mathematics more engaging. With hands-on experiments and 3D models, students grasp complex concepts easily.",
  },
  {
    img: <IconLanguage stroke={1.5} className="w-12 h-12" />,
    title: "Language Learning Application Development",
    desc: "As a leader in online learning app development, we develop innovative language learning applications with AI-powered voice recognition, multilingual support, and interactive exercises. Our tutor management app development solutions help learners master new languages with ease while guaranteeing an immersive experience.",
  },
  {
    img: <IconClipboardCheck stroke={1.5} className="w-12 h-12" />,
    title: "Test Preparation App Development Solutions",
    desc: "We provide custom tutor app development services for test preparation platforms, helping students prepare for competitive exams with AI-driven mock tests, adaptive learning paths, and instant tutor assistance. Our education mobile app development company makes sure of an intuitive and user-friendly experience for aspirants.",
  },
  {
    img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "Corporate Training & Employee Learning App Development",
    desc: "We offer corporate training app development solutions designed for businesses to upskill employees through on-demand courses, microlearning modules, and certification programs. Our on-demand tutor app development services help organizations enhance employee productivity.",
  },
  {
    img: <IconApps stroke={1.5} className="w-12 h-12" />,
    title: "Special Needs & Inclusive Education App Development",
    desc: "We develop inclusive education apps that cater to students with disabilities. Our best <a class='font-semibold text-blue-600' href='/e-learning-app-development'>E-learning mobile app development</a>  agency offers accessibility features such as text-to-speech, sign language support, and adaptive learning modules, ensuring equal learning opportunities for all.",
  },
  {
    img: <IconHeartbeat stroke={1.5} className="w-12 h-12" />,
    title: "Fitness and Wellness Coaching App Development",
    desc: "We provide fitness and wellness coaching apps that connect users with expert trainers for personalized health programs, yoga classes, and mental well-being sessions. Our on-demand tutor app development solutions ensure smooth live sessions and performance tracking",
  },
];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/image/hero-section-love-horoscope-app.webp",
      head: "Love Horoscope App",
      name: "A personalized love horoscope app development solution that provides daily, weekly, and monthly love predictions based on zodiac compatibility. Integrated with AI-driven astrology insights, real-time astrologer consultations, and interactive matchmaking features, this app enhances the love and relationship experience for users.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/love-horoscope-app",
    },
    {
      img: "https://www.comfygen.com/image/hero-image-tarot-card-reading-app.webp",
      head: "Tarot Card Reading App",
      name: "A virtual tarot reading app development platform designed to offer accurate and insightful tarot card readings. Featuring AI-powered tarot interpretations, live tarot reader consultations, customizable card decks, and in-app purchase options, this app provides a seamless and intuitive tarot reading experience.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "/portfolio/tarot-card-reading-app",
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
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "areaServed": ["US", "IN", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
        "email": "sales@comfygen.com",
        "availableLanguage": "en, in"
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
      "@type": "Service",
      "name": "Custom Astrology App Development Services | Comfygen",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get scalable and secure astrology app development services with AI-powered features like horoscope generation, Kundli matching & tarot reading. Let's build your next-gen astrology app!",
      "url": "https://www.comfygen.com/astrology-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/astrology-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Custom Astrology App Development",
        "Love Horoscope App Development Services",
        "Develop Astrology App like Astrotalk",
        "Horoscope App Development Services",
        "Health & Wealth Astrology App Development Service",
        "Astrologer Booking App Development Services",
        "Astrology Ecommerce App Development Service",
        "Panchang App Development Services",
        "Numerology App Development Services",
        "Tarot Card Reading App Development",
        "Cosmobiology App Development",
        "Vedic Astrology App Development",
        "Astrology Dating App Development Services"

      ],

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
      "Name": "Next-Gen Astrology App Development Company | Comfygen",
      "image": "Hero section image",
      "description": "Build next-gen astrology apps with Comfygen – top-rated astrology mobile app development company. Leverage AI, AR/VR & Blockchain to deliver personalized user experiences.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "895"
      }
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com/"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Astrology App Development",
        "item": "https://www.comfygen.com/astrology-app-development"
      }]
    }
    ,

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
        "email": "sales@comfygen.com",

        "availableLanguage": "en, in"
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
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to develop an astrology app like Co-Star?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of developing an astrology app like Co-Star depends on various factors, including features, design complexity, technology stack, and platform compatibility (Android & iOS). On average, a basic astrology app can cost between $15,000 - $25,000, while an advanced AI-powered astrology app with personalized horoscopes, live consultations, and AI-driven insights may range from $50,000 - $80,000. Get a custom quote based on your specific business needs."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build an astrology app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The development timeline for an astrology app varies based on features, UI/UX design, and integrations. A basic astrology app takes around 3-4 months, while a feature-rich astrology consultation app with AI/ML, blockchain integration, and AR/VR may require 6-12 months. Our team follows an agile development approach to ensure timely delivery without compromising quality."
          }
        },
        {
          "@type": "Question",
          "name": "Will my astrology app be available on both Android and iOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! At Comfygen, we develop cross-platform astrology apps that run smoothly on Android and iOS using technologies like React Native and Flutter. Whether you need a native app for each platform or a hybrid solution, our developers ensure an optimized user experience across devices."
          }
        },
        {
          "@type": "Question",
          "name": "Why Must You Invest in Astrology App Development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The astrology industry is booming, with millions of users worldwide seeking horoscope readings, tarot consultations, and Vedic astrology insights. Investing in astrology app development provides high revenue potential through subscription models, in-app purchases, and live consultation fees. With AI-driven predictions, AR/VR-based experiences, and blockchain security, your astrology app can stand out in the competitive market."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate live chat and video calls with astrologers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We specialize in live astrologer consultation app development, integrating real-time chat, video calls, and voice calls. Users can connect with astrologers for personalized horoscope readings, tarot interpretations, and numerology consultations. Our platform also supports secure payment gateways for seamless transactions, ensuring a smooth astrology consultation experience."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use to build astrology apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use modern technologies such as React Native, Flutter, Node.js, Python, and AI/ML frameworks to build feature-rich astrology apps. Our solutions ensure high performance, scalability, and security."
          }
        },
        {
          "@type": "Question",
          "name": "Can you add AI-powered astrology predictions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we integrate AI and ML algorithms to provide personalized astrology predictions, horoscope analysis, and pattern recognition. This enhances user engagement and accuracy in astrology insights."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing support and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer post-launch support and maintenance services to ensure your astrology app runs smoothly. Our team handles updates, bug fixes, security patches, and feature enhancements."
          }
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>
        Best Astrology App Development Company | AI Horoscope & Kundli App Solutions
        </title>
        <meta
          name="description"
          content="Comfygen is a top astrology app development company offering custom horoscope, kundli, and numerology app solutions. Build your AI-powered astrology app with live chat, e-commerce, and accurate predictions today."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/astrology-app-development"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen Astrology App" />
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
          content="Astrology App Development, Horoscope App Development, Kundli App Development, Panchang App Development, Numerology App Development, AI Astrology App, AR Horoscope App, Develop Astrology App like Astrotalk"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:title" content="Best Astrology App Development Company | Comfygen" />
        <meta
          property="og:description"
          content="Build powerful, AI-driven astrology apps with Comfygen – a trusted astrology app development company for personalized, real-time horoscope, kundli, and numerology apps."
        />
        <meta property="og:url" content="https://www.comfygen.com/astrology-app-development" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Astrology App Development Services" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Astrology App Development Company | Custom Astrology Solutions" />
        <meta
          name="twitter:description"
          content="Partner with Comfygen – a leading astrology app development company delivering AI, Blockchain, and AR/VR-powered astrology apps for startups and astrologers worldwide."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/image/hero-imageastrology-app-development.webp')]">
          <HeroSectionForAllPages
            heading="Best Astrology App Development Company"
            ptag="Launch your own powerful astrology app with Comfygen Technologies, a top-notch astrology app development company. We build next-gen AI-powered horoscope, kundli, and numerology apps that offer exact predictions, real-time consultations, and personalized reports. Boost your business with our custom astrology app development services for Android and iOS."
            li="AI-based Astrology App Solution"
            li1="Integrating Blockchain & AR/VR Features"
            li2="Horoscope, Kundli & Zodiac Apps"
            li3="E-Commerce integration for selling astrology products"
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
          heading="Top Reasons Your Business Needs an Astrology App"
          description1="The global astrology market is expected to reach $22.8 billion by 2031, showing huge growth potential. A top-notch astrology app helps your astrology business reach users worldwide, offer personalized predictions, and generate fast earnings through the subscriptions and in-app purchases."

          description2="With more than 70% of users choosing the best mobile astrology services, having your own astrology app builds trust, boosts engagement, and grows your customer base. Partner with Comfygen Technologies, a top AI astrology app development company, to turn your spiritual vision into a moneymaking astrology mobile platform."
   
          imageSrc="https://www.comfygen.com/comfygen-images/astrology-app-development/about1.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide Result-Oriented Astrology App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we offer custom astrology app development services
                designed to enhance user engagement and deliver accurate
                astrological insights. Our expertise ensures real-time
                predictions, seamless consultations, and scalable solutions that
                meet your business needs.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  AI-Powered Astrology App Development Solutions for Next-Gen Experiences
                </h2>
                <p>
                  At Comfygen, we specialize in AI-powered astrology app
                  development. We transform traditional astrology services into
                  smart, interactive, and highly personalized experiences. Our
                  custom astrology app development solutions leverage AI, and
                  machine learning to enhance engagement, accuracy, and user
                  satisfaction.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left md:grid-cols-2 grid-cols-1">
                {JSON_DATA.AIPowered.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={title} className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p
                        className=""
                        dangerouslySetInnerHTML={{ __html: decs }}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/tutor-apps-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <Features />
        <ContactFromCenter />




        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  The Emerging Technologies We Use for Astrology App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  Comfygen Technologies is a top astrology mobile app development agency. We create smart and secure astrology apps using the latest technology. Our astrology apps are fast, easy to use, and offer a personalized experience with the help of AI.
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
                        <p className="break-all text-white text-start " dangerouslySetInnerHTML={{ __html: decs }}>

                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <PortfolioSec
          techData={techDataForPage1}
          heading="We Have Developed Astrology Apps That You Can Check Out"
          description="We at Comfygen are proud to provide high-quality astrology apps that let users experience astrology in a completely new way. As a reputable astrology app development firm in India and USA, we offer feature-rich, scalable, and <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blog/ai-astrology-apps-features-types-cost-to-develop-in-2025/'>AI-powered astrology applications</a>."
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Astrology App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                As a leading astrology app development company, Comfygen Technologies follows a strategic and transparent process to build AI-powered horoscope apps, custom Kundli apps, and astrology solutions that are scalable, secure, and user-friendly. From idea to launch, we provide quality, innovation, and a seamless experience for the astrologer app.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <TechStack
          title="Technology Stack We Use for Astrology App Development"
          description="At Comfygen, we leverage cutting-edge technologies to develop high-performance, scalable, and secure astrology app solutions. Our advanced tech stack ensures seamless performance, real-time predictions, and immersive user experiences."
          filterCategory={["crypto"]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <SolutionsFeature title="Benefits of Creating an Astrology App" subtitle="Building an astrology app offers numerous advantages for astrologers, businesses, and startups looking to expand their digital reach and provide personalized astrology services. Here are the key benefits:" data={JSON_DATA.servicesData1} />

        <HireDeveloper
          heading="Hire Our Dedicated Astrology App Developer"
          text="Looking to build a top-notch astrology app? At Comfygen, we have a team of highly skilled astrology app developers who bring your vision to life with cutting-edge technology and seamless functionality."
          text1="With 8+ years of experience in mobile app development, our best <a class='font-semibold text-blue-600' href='/hire-blockchain-developer'>astrology mobile app developers</a>  specialize in crafting custom astrology app solutions that are intuitive, scalable, and AI-powered. Whether you need a live astrology consultation app, an AI-driven horoscope generator, or a cross-platform astrology platform, our team ensures a smooth, high-performance experience for astrologers and users."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in Advanced Technologies – AI, ML, AR/VR, Blockchain & Cloud Integration",
            "Customized, Scalable Solutions – Tailored to your business needs",
            "Seamless User Experience – Engaging UI/UX for astrologers and users",
            "Secure & High-Performance Apps – Robust architecture with encryption & compliance",
            "Dedicated Support & Maintenance – Continuous improvements & bug fixes",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
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
