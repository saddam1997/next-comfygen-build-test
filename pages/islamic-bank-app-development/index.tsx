import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazy-load";
import "aos/dist/aos.css";
import JSON_DATA from "./json/islamicbankappdevelopment.json";
import ContactFromCenter from "../components/ContactFromCenter";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import AboutSection from "../componentsnew/AboutSection";
import ServicesSec from "../componentsnew/ServicesSec";
import ConsultancyApproach from "../componentsnew/ConsultancyApproach";
import PortfolioSec from "../componentsnew/PortfolioSec";
import LatestTechnology from "../componentsnew/LatestTechnology";
import ProcessSec from "../componentsnew/ProcessSec";
import HireDeveloper from "../componentsnew/HireDeveloper";
import CallToAction from "../componentsnew/CallToAction";
import Faq from "../componentsnew/Faq";

import {
  IconCloudComputing,
  IconLock,
  IconRobot,
  IconSettings,
  IconShield,
} from "@tabler/icons-react";
import TechStack from "../componentsnew/TechStack";
import WhyChoose from "../componentsnew/WhyChooseUs";
import ClientTestimonials from "../components/ClientTestimonials";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});




export default function Mobile(props) {
  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const whychooesdata = {
    pageData: {
      title: "Why Choose Comfygen for Islamic Banking App Development?",
      description:
        "Comfygen is your reliable partner for building Shariah-compliant, secure, and scalable Islamic banking applications. With deep expertise in fintech and Islamic finance, we deliver tailored solutions that meet modern banking needs while adhering to Islamic principles.",
      mainCardData: {
        imageUrl: "https://www.comfygen.com/image/why-choose-sec-img.webp",
        title: "Optimum Outcome Focused",
        description:
          "Our developers are focused to bring optimum outcomes through our competitive web and app.",
      },
      gridData: [
        {
          iconUrl: "https://www.comfygen.com/image/blockchain-expertise-icon.svg",
          title: "10+ Years of Fintech App Development Expertise",
          description:
            "We bring over a decade of experience in fintech app development, enabling us to craft technically sound, innovative, and regulation-compliant Islamic banking apps that stand out in the global market.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/support-maintenance-icon.svg",
          title: "Proven Success in Islamic Banking Solutions",
          description:
            "We have a track record of delivering successful Islamic banking platforms, featuring zakat management, halal investments, and Takaful modules—all aligned with Shariah financial laws.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/customer-satisfaction-icon.svg",
          title: "Dedicated Team of Shariah Consultants and Developers",
          description:
            "Our in-house Shariah advisors work closely with our development team to ensure every feature and transaction flow is compliant with Islamic finance guidelines and globally accepted standards.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/projects-delivered-icon.svg",
          title: "Scalable, Customizable Solutions",
          description:
            "Our Islamic banking solutions are fully customizable and built to scale with your business. Whether you're a startup or an established bank, we adapt to your growth and evolving customer needs.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/clients-icon.svg",
          title: "Global Clientele with 24/7 Support",
          description:
            "We serve clients across the Middle East, Asia, and Africa, providing around-the-clock support to ensure continuous performance, quick issue resolution, and peace of mind post-deployment.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/error-free-icon.svg",
          title: "Regulatory-Focused & Security-Driven Approach",
          description:
            "We develop apps with built-in compliance for Islamic finance regulations, GDPR, and local data laws—while embedding advanced security protocols like encryption, biometrics, and two-factor authentication.",
        },
      ]
      
    },
  };

  const techDataForPage1 = {
    All: [
      {
        img: "https://www.comfygen.com/comfygen-images/islamic-banking-app-development/shariah-compliant-mobile-banking-app.webp",
        head: "Shariah-Compliant Mobile Banking App",
        name: "A fully custom mobile app designed for a leading Islamic bank, featuring interest-free loan processing, halal investment tracking, and integrated zakat calculation. The app supports multi-language and RTL layouts, delivering a seamless, compliant banking experience across devices.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/node-portfolio-icon.svg",
          "https://www.comfygen.com/image/mongodb-portfolio-icon.svg",
          "https://www.comfygen.com/image/aws-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png"
        ]
      },
      {
        img: "https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-finance-digital-wallet.webp",
        head: "Islamic Finance Digital Wallet",
        name: "This secure digital wallet app enables users to make halal payments, manage Murabaha and Ijarah contracts, and donate to verified charities with built-in zakat modules. It includes AI-driven support and real-time transaction notifications to enhance transparency and user engagement.",
        num: "2",
        icons: [
          "https://www.comfygen.com/image/flutter-portfolio-icon.svg",
          "https://www.comfygen.com/image/firebase-portfolio-icon.svg",
          "https://www.comfygen.com/image/python-portfolio-icon.svg",
          "https://www.comfygen.com/image/aws-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png"
        ]
      }
    ]
  };
  

  const testimonialData = [
    {
      text: "Comfygen exceeded our expectations in developing a fully Shariah-compliant banking app for our institution. Their team understood the intricacies of Islamic finance and delivered a secure, scalable solution that our users love. Highly professional and responsive throughout the project.",
      name: "Mohammad Al-Fahad",
      title: "Saudi Arabia",
      rating: 5,
    },
    {
      text: "We partnered with Comfygen to build an Islamic mobile banking app with features like zakat tracking and halal investment tools. Their developers showed deep fintech expertise and ensured compliance at every stage. A trustworthy partner for any Islamic fintech venture.",
      name: "Amina Yusuf",
      title: "Malaysia",
      rating: 5,
    }
  ];
  
  
  const Process = [
    {
      title: "Consultation & Requirement Analysis",
      description:
        "We begin by analyzing your business goals, Shariah compliance needs, and functional requirements. Our team collaborates with stakeholders and Islamic finance advisors to define the app’s scope, features, and compliance framework.",
    },
    {
      title: "UI/UX Design with Shariah Advisors",
      description:
        "Our designers work alongside Shariah consultants to create intuitive and ethical interfaces. We ensure the UI reflects Islamic values, supports RTL languages, and enhances usability across devices for global Muslim users.",
    },
    {
      title: "Prototyping & Workflow Simulation",
      description:
        "We create interactive prototypes that map out user journeys, simulate app functionality, and validate the halal transaction flow early in the process. This allows for feedback and refinements before full-scale development begins.",
    },
    {
      title: "Agile Development & Third-Party Integrations",
      description:
        "Using agile methodology, our developers build scalable Islamic banking apps with modular architecture. We integrate secure APIs for KYC, zakat payment gateways, halal investments, and more—ensuring real-time, compliant financial services.",
    },
    {
      title: "Testing & Compliance Verification",
      description:
        "We conduct rigorous testing to validate app functionality, security, and compliance with Islamic finance laws and global data protection standards. Shariah advisors review each financial module before approval.",
    },
    {
      title: "Security & Data Privacy Implementation",
      description:
        "Before deployment, we implement enterprise-grade encryption, secure authentication, and data privacy measures. This ensures the protection of sensitive user and financial data in full alignment with Islamic ethical standards.",
    },
    {
      title: "Launch, Maintenance & Support",
      description:
        "After successful testing, we deploy your app on desired platforms with end-to-end support. We provide ongoing maintenance, updates, performance monitoring, and technical support to keep your app compliant and optimized.",
    }
  ];
  
  

  const technologyData = [
    {
      title: "Artificial Intelligence (AI) & Machine Learning (ML)",
      desc: "We utilize AI and ML to automate compliance checks, personalize halal investment recommendations, detect fraudulent activity, and enhance customer support with intelligent chatbots trained in Islamic finance principles.",
      img: <IconRobot stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Blockchain Technology",
      desc: "Blockchain provides transparency and immutability for Islamic financial transactions. Our blockchain-powered apps ensure secure contract validation for Murabaha, Ijarah, and Takaful products, reducing fraud and enhancing trust through decentralized ledger technology.",
      img: <IconLock stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Cloud Computing",
      desc: "Cloud infrastructure enables scalable, reliable Islamic banking apps accessible worldwide. It supports real-time transaction processing, secure data storage, and high availability, ensuring smooth operations even under heavy usage.",
      img: <IconCloudComputing stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Data Encryption & Cybersecurity",
      desc: "We implement bank-grade encryption and stringent cybersecurity measures to protect sensitive user data, ensuring compliance with global privacy and Islamic finance regulations, and safeguarding against breaches and cyber threats.",
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "API Integration for Financial Systems",
      desc: "Our apps seamlessly integrate with core Islamic banking systems, payment gateways, KYC providers, and charity platforms through secure APIs, enabling real-time data synchronization and efficient financial management.",
      img: <IconSettings stroke={1.5} className="w-12 h-12" />,
    }
  ];
  
  const jsonLdData = [
    
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Shariah-Compliant Islamic Banking App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Build secure, Shariah-compliant Islamic banking apps with Comfygen. We develop halal financial solutions including Zakat calculators, Murabaha modules, and Takaful features. Trusted Islamic fintech app development company.",
      "url": "https://www.comfygen.com/islamic-bank-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/islamic-bank-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Custom Islamic banking app development",
        "Zakat calculators and donation modules",
        "Integration with core Islamic banking systems",
        "Blockchain-Based Islamic Banking App Development",
        "AI & ML-Based Islamic Banking App Development"
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
    {"@context":"http://www.schema.org",
      "@type":"Product",
      "brand":"Comfygen Technologies",
      "Name":"Custom Islamic Banking App Development Company | Comfygen Technologies",
      "image":"Hero section image",
      "description":"Looking for custom Islamic banking app development? Comfygen delivers fully tailored, Shariah-compliant fintech solutions with Zakat, Takaful, Murabaha, and interest-free loan modules. Hire Islamic app developers today.",
      "aggregateRating":{"@type":"AggregateRating",
      "ratingValue":"4.9",
      "reviewCount":"74"}

    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes an app Shariah-compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Shariah-compliant app avoids interest-based transactions and includes Islamic financial principles like risk-sharing, profit-loss models, and ethical investing. Features such as Zakat calculators, halal loan systems (Murabaha, Ijarah), and Takaful modules are included. We also consult Shariah scholars to ensure every feature aligns with Islamic finance laws."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure regulatory compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We follow international and local Islamic finance regulations, such as AAOIFI and IFSB standards, and implement KYC, AML, and GDPR protocols. Our team works closely with compliance officers and Shariah consultants to integrate secure, auditable modules that meet both Islamic banking laws and regional regulatory frameworks."
          }
        },
        {
          "@type": "Question",
          "name": "Can existing banks integrate Islamic modules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in integrating Shariah-compliant modules into existing conventional banking systems. Whether you want to add Murabaha, Zakat, or Islamic investment tools, our developers ensure smooth integration with your core banking systems through APIs, secure data migration, and minimal disruption to your existing operations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the development timeline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The development timeline typically ranges from 8 to 20 weeks, depending on project scope, features, integrations, and customization needs. We follow an agile process—starting with consultation and design, followed by phased development, compliance checks, and testing—ensuring timely delivery without compromising quality or regulatory standards."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost to develop an Islamic banking app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost to develop a Shariah-compliant Islamic banking app typically ranges from $25,000 to $150,000 or more. Pricing depends on factors like app complexity, number of features (e.g., Murabaha, Takaful, Zakat), platform (iOS/Android/Web), third-party integrations, and regulatory requirements. We provide tailored quotes based on your specific needs and goals."
          }
        }
      ]
    }
    
    
  ];
  
  return (
    <>
     <Head>
          <title>
            Islamic Banking App Development Company
          </title>
          <meta
            name="description"
            content="Comfygen is a leading Islamic banking app development company offering Shariah-compliant mobile and web banking solutions. Develop custom Islamic Banking apps with Murabaha, Zakat, Takaful, and halal finance features."
          />
          <meta
            name="keywords"
            content="Custom Islamic banking app development, Zakat calculators and donation modules, Integration with core Islamic banking systems, Blockchain-Based Islamic Banking App Development, AI & ML-Based Islamic Banking App Development"
          />
          <link
            rel="canonical"
            href="https://www.comfygen.com/islamic-bank-app-development"
          />
          <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
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

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="Islamic Banking App Development Company"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.comfygen.com/islamic-bank-app-development"
          />
          <meta
            property="og:image"
            content="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-og.webp"
          />
          <meta property="og:site_name" content="Comfygen Private Limited" />
          <meta
            property="og:description"
            content="Comfygen is a leading Islamic banking app development company offering Shariah-compliant mobile and web banking solutions. Develop custom Islamic Banking apps with Murabaha, Zakat, Takaful, and halal finance features."
          />
          <meta property="og:image:type" content="image/webp" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-og.webp" />
          <meta property="og:image:alt" content="Islamic Banking App Development Company | Shariah-Compliant Finance Solutions" />
          <meta name="fb:page_id" content="110909321596135" />
          <meta name="og:email" content="sales@comfygen.com" />
          <meta name="og:phone_number" content="+91-958-786-7258" />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Islamic Banking App Development Company"
          />
          <meta
            name="twitter:description"
            content="Comfygen is a leading Islamic banking app development company offering Shariah-compliant mobile and web banking solutions. Develop custom Islamic Banking apps with Murabaha, Zakat, Takaful, and halal finance features."
          />
          <meta
            name="twitter:image"
            content="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-og.webp"
          />
          <meta name="twitter:site" content="@comfygentech" />

          {/* Structured Data Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Islamic Banking App Development",
                operatingSystem: "Web, Android, iOS",
                applicationCategory: "FinanceApplication",
                url: "https://www.comfygen.com/islamic-bank-app-development",
                description:
                  "Comfygen is a leading Islamic banking app development company offering Shariah-compliant mobile and web banking solutions. Develop custom Islamic Banking apps with Murabaha, Zakat, Takaful, and halal finance features.",
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
                  "https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-og.webp"
              })
            }}
          />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        </Head>


      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="">
        <HeroSectionForAllPages
          heading="Islamic Banking App Development"
          ptag="Build a Shariah-compliant digital banking app with Comfygen Technologies, a trusted Islamic banking app development company specializing in interest-free and ethical finance solutions. From Islamic fintech startups to established banks, we deliver secure, customized Islamic banking app development services aligned with global Shariah standards."
          li="Shariah-Compliant Finance & Investment Modules"
          li1="Secure & Scalable Digital Banking Architecture"
          li2="1Guided by Islamic Finance Experts & Advisors"
          li3="Custom Features for Zakat, Takaful, Murabaha & More"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-hero.webp"
        />
        <AboutSection
          title=""
          heading="Top Islamic Banking App Development Company Delivering Shariah-Compliant Fintech Solutions"
          description1="Comfygen is a leading Islamic banking app development company, offering innovative and scalable digital banking solutions aligned with Islamic finance principles. We specialize in building secure, interest-free, and ethically driven banking apps for Islamic financial institutions, fintech startups, and enterprises across the globe."
          description2="Our solutions include Shariah-compliant transaction modules, halal investment management, zakat calculators, Takaful integration, and Murabaha financing features, ensuring your platform meets both modern user needs and religious compliance. With expertise in financial technologies and Islamic jurisprudence, we deliver user-centric, high-performing apps tailored for global Muslim communities."
          description3="By combining advanced technologies with a deep understanding of Islamic banking rules, Comfygen helps institutions transform traditional banking into next-gen digital experiences rooted in trust and ethics. Choose us to build a future-ready Islamic banking solution that empowers users and promotes financial inclusion in the halal way."
          imageSrc="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />

        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="We Provide Tailor-Made and Shariah-Compliant Islamic Banking App Development Services"
          description="At Comfygen, our Islamic banking app development services empower financial institutions to deliver ethical, interest-free banking experiences. We specialize in building secure, scalable, and fully Shariah-compliant digital banking platforms for Islamic banks, fintech startups, and enterprises worldwide."
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-consultancyHead.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <PortfolioSec
          techData={techDataForPage1}
          heading="We Have Developed Islamic Banking Apps That You Can Check Out"
          description="Explore our portfolio of Shariah-compliant Islamic banking app projects, crafted to deliver secure, interest-free, and ethical digital financial experiences. Our solutions blend advanced fintech technology with Islamic finance principles to empower institutions and users worldwide."
        />
        <ContactFromCenter />

        <LatestTechnology
          heading="Technologies We Use for Islamic Banking App Development"
          subheading="At Comfygen, a trusted Islamic banking app development company, we harness cutting-edge technologies to build secure, scalable, and fully Shariah-compliant digital banking solutions. Our tech stack ensures robust compliance, seamless user experience, and enhanced financial inclusion through ethical fintech innovation."
          techData={technologyData}
        />
        <ProcessSec
          title="Our Islamic Banking Mobile App Development Approach"
          description="At Comfygen, we follow a structured and Shariah-compliant mobile app development process to build ethical, secure, and scalable Islamic banking solutions. From initial consultation to post-launch support, our approach ensures every product meets Islamic finance principles and modern digital banking standards."
          processSlides={Process}
        />

        <TechStack
          title="Tech Stack We Use in Islamic Banking App Development"
           description="TAt Comfygen, we develop robust and Shariah-compliant Islamic banking apps using a modern and secure technology stack. Our tools and frameworks are carefully selected to ensure seamless performance, airtight security, regulatory compliance, and an exceptional user experience tailored for Islamic fintech."
        />
        
        <WhyChoose
      title={whychooesdata.pageData.title}
      description={whychooesdata.pageData.description}
      mainCardData={whychooesdata.pageData.mainCardData}
      gridData={whychooesdata.pageData.gridData}
    />
      
        <HireDeveloper
          heading="Hire Our Dedicated Islamic Banking App Developers"
          text="Looking to build a secure and Shariah-compliant banking app? Hire expert Islamic banking app developers from Comfygen who specialize in creating scalable, ethical, and regulation-aligned financial solutions. Our developers combine fintech expertise with deep knowledge of Islamic finance to deliver high-performance applications tailored to your needs."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Shariah-Compliant Financial App Architecture",
            "Real-Time Transaction & Payment Integration",
            "Custom UI/UX with RTL & Multi-language Support",
            "Regulatory Compliance & Secure Coding Practices",
          ]}
          
        />

        <ClientTestimonials
          testimonials={testimonialData}
          heading="What Our Clients Say"
        />

        <CallToAction
          heading="Let’s hear what you have to say?"
          text=" Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Islamic Bank  App Develoment"
        />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}
