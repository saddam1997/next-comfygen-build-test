import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./insuranceappdevelopment.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import SolutionSec from "../components/SolutionSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import Features from "./components/Features";
import TechStack from "../components/TechStack";
import ClientTestimonials from "../components/ClientTestimonials";
import PortfolioSec from "../componentsnew/PortfolioSec";
import {
  IconHeartRateMonitor,
  IconCar,
  IconSteeringWheel,
  IconUserHeart,
  IconBriefcase,
  IconWorld,
  IconHome,
  IconGasStation,
  IconClipboardCheck,
  IconFirstAidKit,
  IconTruckDelivery,
  IconUsersGroup
} from "@tabler/icons-react";
import ServicesSection from "../componentsnew/ServicesSection";
import TrendsSection from "../componentsnew/TrendsSection";
import ProcessSection from "../componentsnew/ProcessSection";
import AdminUserPanel from "../astrology-app-development/components/AdminUserPanel";

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

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Requirement Analysis & Strategy Planning",
    description:
      "We start by understanding your insurance business, user needs, and compliance rules. Our team sets clear goals, technical specs, and a roadmap that matches your vision.",
  },
  {
    title: "UI/UX Design & Wireframing",
    description:
      "We design simple, intuitive screens and wireframes that map the full user journey. The focus stays on easy navigation, modern visuals, and a smooth experience.",
  },
  {
    title: "App Development & Feature Implementation",
    description:
      "Our App developers build secure, scalable insurance apps for Android and iOS. Key features include policy management, claims, payments, and real-time alerts.",
  },
  {
    title: "Testing & QA",
    description:
      "Every feature goes through strict functional, performance, and security testing. We ensure the app meets industry regulations and handles data safely.",
  },
  {
    title: "Compliance & Security Checks",
    description:
      "We verify that your app follows major data protection standards and add strong security layers like encryption and multi-factor authentication.",
  },
  {
    title: "Deployment & Launch",
    description:
      "After testing, we publish your app to both app stores and set up cloud hosting for stability and scale.",
  },
  {
    title: "Post-launch Support & Maintenance",
    description:
      "We stay with you after launch, handling updates, bug fixes, monitoring, and security improvements to keep your app running smoothly.",
  },
];



const technologyData = [
  {
    img: <IconHeartRateMonitor stroke={1.5} className="w-12 h-12" />,
    title: "Health Insurance App Development",
    desc: "We create health insurance apps that put customers first. Our health insurance apps help people manage their health insurance policies, calculate premiums, connect with healthcare providers, and file claims easily—all while keeping data secure and compliant with <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blog/hipaa-compliance-in-mobile-health-apps/'>HIPAA</a> standards.",
  },
  {
    img: <IconCar stroke={1.5} className="w-12 h-12" />,
    title: "Vehicle Insurance App Development",
    desc: "Our vehicle insurance app development solutions help insurers streamline everything from policy renewals to claims and roadside assistance. With features like instant messaging and notifications, insurers can provide better service and make managing vehicle insurance effortless for their customers.",
  },
  {
    img: <IconSteeringWheel stroke={1.5} className="w-12 h-12" />,
    title: "Auto Insurance App Development",
    desc: "Our auto insurance apps include helpful tools like GPS accident reporting, easy claim filing, and premium calculators. We use modern tech like AI and real-time data to create user-friendly, efficient auto insurance experiences.",
  },
  {
    img: <IconUserHeart stroke={1.5} className="w-12 h-12" />,
    title: "Life Insurance App Development",
    desc: "Our life insurance apps offer users a simple and stress-free way to explore life insurance options. Features like instant quotes, easy policy comparisons, and reminders for renewals ensure users can manage life insurance confidently and conveniently.",
  },
  {
    img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "Business Insurance App Development",
    desc: "We develop apps that help insurers manage business insurance policies, track compliance, and automate claims. These tools improve transparency and make it easier for insurers to serve business customers with accurate information and timely support.",
  },
  {
    img: <IconWorld stroke={1.5} className="w-12 h-12" />,
    title: "Travel Insurance App Development",
    desc: "Our travel insurance apps provide complete coverage on the go. They make it simple for users to buy, manage, and claim travel insurance from anywhere, making travel stress-free and secure.",
  },
  {
    img: <IconHome stroke={1.5} className="w-12 h-12" />,
    title: "Property Insurance App Development",
    desc: "Our property insurance apps allow homeowners and landlords to handle everything from policy details to damage claims in one place. They ensure quick, easy access to important information while keeping data safe.",
  },
  {
    img: <IconGasStation stroke={1.5} className="w-12 h-12" />,
    title: "Car Insurance App Development",
    desc: "We create car insurance apps that simplify policy management, renewal processes, and claim filing. These apps have user-friendly designs and smart features that help insurers deliver better service and build trust with their customers.",
  },
  {
    img: <IconClipboardCheck stroke={1.5} className="w-12 h-12" />,
    title: "On-Demand Insurance Claim Apps",
    desc: "Our on-demand insurance claim apps give users the power to file, track, and approve claims anytime. With simple interfaces and helpful support tools, these apps make the entire process smooth for both users and insurance agents.",
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Medical Insurance App Development",
    desc: "Our medical insurance app solutions help patients, providers, and insurers manage policies and claims instantly. They make it easy to access medical coverage and help patients get the care they need without any hassle.",
  },
  {
    img: <IconTruckDelivery stroke={1.5} className="w-12 h-12" />,
    title: "Logistics Insurance App Development",
    desc: "We create logistics insurance apps to protect cargo and deliveries. These apps help companies keep track of goods, manage insurance coverage, and quickly file claims if anything goes wrong during transport.",
  },
  {
    img: <IconUsersGroup stroke={1.5} className="w-12 h-12" />,
    title: "Social Insurance App Development",
    desc: "Our social insurance apps make managing social insurance policies and claims easier for both citizens and government agencies. They’re designed to be simple, secure, and supportive, helping everyone get the most out of their social insurance programs.",
  },
];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/insurance-app-development/hero-section-ai-life-insurance.webp",
      head: "AI-Enabled Life Insurance App",
      name: "We built a smart life insurance app with AI-driven underwriting, predictive risk modeling, and personalized policy suggestions. Users receive tailored life plans while insurers gain instant eligibility assessments and fraud detection automation.",
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
      img: "https://www.comfygen.com/comfygen-images/insurance-app-development/hero-section-health-claim-app.webp",
      head: "On-Demand Health Claim App",
      name: "This app revolutionized health insurance claims with real-time AI verification, instant e-document uploads, and chatbot-guided filing. It reduces claim processing time from days to minutes—designed for both speed and compliance.",
      num: "2",
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
      img: "https://www.comfygen.com/comfygen-images/insurance-app-development/hero-section-auto-insurance-blockchain.webp",
      head: "Blockchain-Based Auto Insurance App",
      name: "A decentralized insurance app that uses blockchain to auto-validate accident claims through GPS and image data. Features include a secure driver record vault, dynamic premium calculations, and immutable accident logs.",
      num: "3",
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
      img: "https://www.comfygen.com/comfygen-images/insurance-app-development/hero-section-travel-insurance-superapp.webp",
      head: "All-in-One Travel Insurance SuperApp",
      name: "We crafted a multi-policy travel insurance app with flight delay compensation automation, live geolocation coverage activation, and multilingual AI support. Users manage everything from trip claims to emergency contacts in one place.",
      num: "4",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
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

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to develop an insurance app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of developing an insurance app depends on various factors like features, platforms (iOS, Android, or both), third-party integrations, and complexity. On average, it can range from $20,000 to $100,000+. At Comfygen, we offer flexible pricing models to suit startups, brokers, and enterprises while ensuring secure, scalable, and future-ready app solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom insurance app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development timeline for a custom insurance app typically ranges from 3 to 6 months, depending on the app's complexity, feature set, and platform requirements. At Comfygen, we follow an agile approach and ensure on-time delivery with milestone-based tracking, delivering a fully functional, secure, and compliant app tailored to your business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs and CRMs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in integrating third-party APIs, CRM systems, and tools like payment gateways, document management, policy validation, and analytics. Whether you're using Salesforce, HubSpot, or a custom CRM, our developers ensure seamless and secure integration to enhance operational efficiency and deliver a unified insurance app experience."
        }
      },
      {
        "@type": "Question",
        "name": "Is the app GDPR/HIPAA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Compliance is a top priority at Comfygen. We develop insurance apps that meet global regulatory standards including GDPR, HIPAA, and industry-specific data protection laws. From secure data storage and access controls to audit logs and encryption, we ensure your app is legally compliant and ready for global markets."
        }
      }
    ]
  };



  const structuredData = [
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
      "name": "Custom Insurance App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get tailored insurance app development services from Comfygen. We specialize in AI & Blockchain integration, offering secure, scalable, and innovative mobile apps for health, vehicle, life, and business insurance.",
      "url": "https://www.comfygen.com/insurance-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/insurance-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Custom Insurance App Development",
        "Health Insurance App Development",
        "Vehicle Insurance App Development Solution",
        "Auto Insurance App Development Solution",
        "Life Insurance App Development",
        "Business Insurance App Development",
        "Travel Insurance App Development",
        "Property Insurance App Development",
        "Car Insurance App Development",
        "AI-based Insurance App Development",
        "Blockchain-based Insurance App Development"

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
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://www.comfygen.com/"
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
        "areaServed": "US, IN",
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
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "areaServed": ["IN", "US", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "IN", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
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
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Private Limited",
      "Name": "Insurance App Development Services",
      "image": "Hero section image",
      "description": "Comfygen offers top-tier insurance app development services for health, auto, life, and business sectors. Build secure, scalable, and AI-integrated mobile insurance apps tailored to your business needs.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "829"
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
        "name": "Insurance App Development Company",
        "item": "https://www.comfygen.com/insurance-app-development"
      }]
    }



  ];

  return (
    <>
      <Head>
        <title>Best Insurance App Development Company | Custom Solutions</title>

        <meta
          name="description"
          content="Looking for a trusted insurance app development company? Comfygen delivers secure, custom insurance apps with AI, blockchain, and cloud integration. We help brokers, startups, and insurers thrive with user-focused, compliant mobile solutions."
        />
        <meta
          name="keywords"
          content="Custom Insurance App Development, Health Insurance App Development, Vehicle Insurance App Development Solution, Auto Insurance App Development Solution, Life Insurance App Development, Business Insurance App Development, Travel Insurance App Development, Property Insurance App Development, Car Insurance App Development, AI-based Insurance App Development, Blockchain-based Insurance App Development"
        />
        <link rel="canonical" href="https://www.comfygen.com/insurance-app-development" />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen Insurance App" />
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

        <meta property="og:title" content="Top Insurance App Development Company – Custom InsurTech Solutions" />
        <meta
          property="og:description"
          content="Comfygen is a leading insurance mobile app development company delivering custom, AI-powered InsurTech solutions. We build secure, scalable, and compliant insurance apps for brokers, startups, and enterprises."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Insurance App Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/insurance-app-development" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:title" content="Top Insurance App Development Company – Custom InsurTech Solutions" />
        <meta
          name="twitter:description"
          content="Comfygen is a leading insurance mobile app development company delivering custom, AI-powered InsurTech solutions. We build secure, scalable, and compliant insurance apps for brokers, startups, and enterprises."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </Head>

      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-devlopment-hero.webp')]" >
          <HeroSectionForAllPages
            heading="Insurance Mobile App Development Company"
            ptag="Comfygen’s insurance Mobile app development solutions help you bring your insurance ideas to life. Whether it's a startup, broker, or enterprise, we provide secure, user-friendly, and fully compliant insurance app development services. Our insurance app development solutions are designed to meet your exact business needs, whether you need them for claims management, policy tracking, or customer engagement."
            li="Custom Insurance App Development for Startups, Brokers & Enterprises"
            li1="Secure, Compliant & Scalable Architecture"
            li2="Advanced Features for Claims, Policy & Customer Management"
            li3="AI-Powered Automation for Better Efficiency & User Experience"
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
          heading="Leading Insurance App Development Company for Modern Insurers"
          description1="In today’s digital world, insurance businesses need modern and intuitive insurance mobile app development solutions to stay ahead. At Comfygen, we specialise in insurance app development services that cater to insurers, brokers, and agencies of all sizes. From policy management and claims processing to AI-driven risk analysis and customer engagement, our App development team builds secure, scalable, and user-friendly mobile app development solutions that transform traditional insurance services into seamless digital experiences."
          description2="10 years back, FinTech app development and InsurTech, we leveraged advanced technologies such as AI/ML, blockchain, and cloud computing to deliver a feature-rich, regulation-compliant insurance mobile app development solution. Our dedicated insurance app developers work closely with you to ensure your digital insurance solution aligns with your unique needs and future goals."
          description3=""

          imageSrc="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-devlopment-about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <ServicesSection
          heading="Our Insurance Mobile App Development Services"
          subtitle="Building a reliable insurance mobile app takes more than forms and payment screens. You need a smooth, trustworthy experience that makes life easier for customers and keeps your internal team in control. That’s exactly where Comfygen delivers with its end-to-end insurance mobile app development services."
          servicesData={JSON_DATA.servicesData} />

        <Features />

        <ContactFromCenter />


        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Insurance App Development Portfolio"
          description="Explore our innovative insurance app development portfolio, featuring AI-powered underwriting systems, blockchain-based claim processing, and on-demand solutions for every insurance sector. From health to auto, our apps redefine digital insurance experiences with speed, security, and user-first designs. Partner with Comfygen to launch your next-gen InsurTech solution with confidence."
        />

        <AdminUserPanel />

        <SolutionSec
          heading="A Variety of Insurance Application Development Solutions for Every Industry"
          subheading="The insurance mobile application we create at Comfygen is customised to meet the requirements of every industry and customer. We can help you better serve your clients in the following ways:"
          techData={technologyData} />

        <TrendsSection
          heading="The Emerging Technologies We Use For Insurance Mobile App Development"
          subtitle="At Comfygen, we harness the power of advanced technologies to deliver insurance app solutions that drive success. By integrating the latest innovations such as AI, Blockchain, Cloud Computing, and Big Data, we provide scalable, secure, and user-centric insurance applications that streamline operations, enhance customer experiences, and ensure business growth."
          trends={JSON_DATA.Emerging}
        />

        <ProcessSection
          title="Our End-to-End insurance mobile App development process"
          description="Our insurance mobile app development services follow a structured and transparent approach to ensure that we develop secure, scalable, and user-centric insurance apps. Using cutting-edge technologies and industry best practices, we provide innovative digital insurance solutions that meet regulatory standards."
          processSlides={Process} />

        <TechStack
          title="Technologies We Use in Insurance Application Development"
          description="At Comfygen, we utilize an advanced and robust technology stack to deliver cutting-edge insurance application development solutions."
          filterCategory={["crypto"]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Dedicated Insurance App Developers"
          text="At Comfygen, we stand as a leading <a href='https://www.comfygen.com/mobile-app-development' class='underline font-semibold'>mobile app development company</a>, offering expert services that cater to your specific insurance app needs. With our deep industry expertise, we craft insurance apps that are secure, compliant, and optimized for a seamless user experience across iOS, Android, and web platforms. We take pride in building advanced, scalable solutions that drive business growth and meet evolving customer demands."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Certified and Experienced Developers",
            "Flexible Hiring Models",
            "Custom Solutions Aligned with Your Business Goals",
            "Cutting-Edge Technologies Integration",
            "End-to-End Development and Support"
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Insurance App Development" />
      </div>
    </>
  );
}
