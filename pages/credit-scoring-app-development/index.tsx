import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazy-load";
// import "aos/dist/aos.css";
import JSON_DATA from "./json/creditscoringappdevelopment1.json";
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
  IconRecordMail,
  IconRobot,
  IconSettings,
  IconShield,
  IconWorldWww,
} from "@tabler/icons-react";
import TechStack from "../componentsnew/TechStack";
import WhyChoose from "../componentsnew/WhyChooseUs";
import ClientTestimonials from "../components/ClientTestimonials";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Mobile(props:any) {
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
      title: "Why Choose Us for Your Credit Scoring App Development?",
      description:
        "Comfygen is your trusted partner for developing secure, scalable, and AI-driven credit scoring applications. We bring years of experience in fintech, delivering solutions that meet the highest standards of security, accuracy, and innovation.",
      mainCardData: {
        imageUrl: "https://www.comfygen.com/image/why-choose-sec-img.webp",
        title: "Optimum Outcome Focused",
        description:
          "Our developers are focused to bring optimum outcomes through our competitive web and app.",
      },
      gridData: [
        {
          iconUrl: "https://www.comfygen.com/image/blockchain-expertise-icon.svg",
          title: "Expertise in Fintech Development",
          description:
            "With years of experience in building custom fintech applications, we understand the intricacies of financial technology. We specialize in creating innovative, robust, and scalable credit scoring solutions tailored to your business needs.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/support-maintenance-icon.svg",
          title: "Security First",
          description:
            "We prioritize security with industry-leading encryption and data protection protocols. Your users’ financial data is safeguarded with the highest levels of security, ensuring trust and compliance with financial regulations like GDPR and PCI-DSS.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/customer-satisfaction-icon.svg",
          title: "AI-Powered Solutions",
          description:
            "Our credit scoring apps utilize cutting-edge AI algorithms and machine learning models to provide highly accurate and predictive credit assessments. We transform raw data into actionable insights for smarter, data-driven decision-making.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/projects-delivered-icon.svg",
          title: "Proven Track Record",
          description:
            "We have a proven track record of delivering successful credit scoring solutions. Our case studies and testimonials from satisfied clients highlight our commitment to quality and our ability to meet clients’ business objectives effectively.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/clients-icon.svg",
          title: "Ongoing Support",
          description:
            "We provide continuous post-launch support, ensuring that your app remains secure, functional, and up to date. Our dedicated support team is always available to handle any technical issues or feature enhancements as your business evolves.",
        },
        {
          iconUrl: "https://www.comfygen.com/image/error-free-icon.svg",
          title: "Customizable Solutions for Growth",
          description:
            "Our solutions are highly adaptable, allowing for customization as your business grows. We ensure that the credit scoring app can scale with your expanding user base, incorporating new features and data sources as needed.",
        },
      ],
    },
  };

  const techDataForPage1 = {
    All: [
      {
        img: "https://www.comfygen.com/comfygen-images/credit-scoring-app-development/credit-score-ai-credit-score-app.webp",
        head: "AI-Powered Credit Score App",
        name: "An intelligent app that uses AI and machine learning to calculate real-time credit scores, offer improvement tips, and deliver predictive credit analysis for both individuals and institutions.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/node-portfolio-icon.svg",
          "https://www.comfygen.com/image/python-portfolio-icon.svg",
          "https://www.comfygen.com/image/aws-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png"
        ]
      },
      {
        img: "https://www.comfygen.com/comfygen-images/credit-scoring-app-development/credit-score-secure-credit-monitoring-app.webp",
        head: "Secure Credit Monitoring App",
        name: "A user-centric app featuring encrypted data storage, real-time alerts, and seamless integration with financial institutions to monitor, track, and enhance user credit health efficiently.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/flutter-portfolio-icon.svg",
          "https://www.comfygen.com/image/firebase-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ]
      }
    ]
  };

  const testimonialData = [
    {
      text: "Comfygen’s expertise in credit scoring app development exceeded our expectations. Their team delivered an intuitive, secure app that perfectly aligns with our goals. Highly recommended!",
      name: "Samantha Lee",
      title: "New York",
      rating: 5,
    },
    {
      text: "Working with Comfygen was a game-changer for our business. Their team provided end-to-end development and constant support, making the credit scoring app seamless and reliable for our users.",
      name: "Raj Patel",
      title: "Mumbai",
      rating: 5,
    }
  ];
  
  
  const Process = [
    {
      title: "Consultation & Requirement Gathering",
      description:
        "We begin by understanding your business goals, compliance needs, and technical requirements. Our team collaborates with key stakeholders to outline the credit scoring app’s scope, features, and data sources for accurate financial assessments.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers craft intuitive and responsive interfaces that make complex financial data easy to understand. We focus on clear score visuals, smooth navigation, and an engaging user experience for both consumers and financial professionals.",
    },
    {
      title: "Prototyping & User Flow Simulation",
      description:
        "Before full development begins, we create a clickable prototype to simulate user journeys. This allows for early validation of UI/UX, feature flow, and app functionality to ensure the final product aligns with expectations.",
    },
    {
      title: "App Development",
      description:
        "Using modern tech stacks, our developers build scalable, secure, and high-performance apps for Android, iOS, and the web. Features like real-time credit scoring, AI integration, and analytics dashboards are implemented in this phase.",
    },
    {
      title: "Third-Party API & Data Source Integration",
      description:
        "We integrate your app with financial APIs, credit bureaus, and banking systems to enable real-time data access. This ensures accurate credit evaluations and automates reporting for end users and institutions.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Our QA team conducts end-to-end testing, including functional, security, usability, and compliance checks. We ensure your app meets industry regulations (like GDPR, PCI-DSS) while delivering a bug-free and high-performing experience.",
    },
    {
      title: "Launch & Post-Deployment Support",
      description:
        "After successful testing, we deploy your credit scoring app across platforms and cloud environments. Post-launch, we offer regular maintenance, updates, monitoring, and technical support to ensure stability and performance.",
    },
  ];
  

  const technologyData = [
    {
      title: "Artificial Intelligence (AI) & Machine Learning (ML)",
      desc: "We use AI and ML algorithms to automate credit score predictions, detect fraud, and improve risk modeling. These technologies enable dynamic scoring based on real-time user behavior, financial patterns, and predictive analytics for smarter lending decisions.",
      img: <IconRobot stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Blockchain Technology",
      desc: "Blockchain ensures transparency, security, and immutability in credit scoring systems. We build decentralized credit apps that securely store financial data, automate contract validation, and reduce fraud with tamper-proof, verifiable credit histories.",
      img: <IconLock stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Big Data & Predictive Analytics",
      desc: "Our credit scoring apps harness the power of big data to analyze vast datasets, uncover trends, and generate reliable credit insights. Predictive analytics enhances decision-making by identifying risk profiles and scoring patterns with high accuracy.",
      img: <IconWorldWww stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Cloud Computing",
      desc: "Cloud infrastructure allows us to develop scalable and reliable credit scoring apps with global accessibility. It supports real-time data processing, secure storage, and seamless performance under high traffic or transaction loads.",
      img: <IconCloudComputing stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Data Encryption & Cybersecurity",
      desc: "We implement bank-grade data encryption and cybersecurity protocols to safeguard sensitive user and financial information. This ensures complete compliance with regulatory standards like PCI DSS and GDPR.",
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "API Integration for Financial Institutions",
      desc: "Our solutions integrate seamlessly with third-party services such as banks, credit bureaus, and KYC providers. These APIs allow real-time data sync, faster onboarding, and up-to-date financial data access for credit assessments.",
      img: <IconSettings stroke={1.5} className="w-12 h-12" />,
    },
    {
      title: "Biometric & Multi-Factor Authentication (MFA)",
      desc: "We enhance app security with biometric logins and MFA, helping verify users’ identities and prevent unauthorized access, adding a critical layer of trust for credit-related platforms.",
      img: <IconRecordMail stroke={1.5} className="w-12 h-12" />,
    },
  ];

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
      "name": "Custom Credit Scoring App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get custom salon app development from Comfygen – a trusted beauty salon app development company. We build scalable, feature-rich mobile apps for salons and spas with appointment booking, CRM, payments, and real-time scheduling to elevate your beauty business.",
      "url": "https://www.comfygen.com/credit-scoring-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/credit-scoring-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Credit Scoring App Development Services",
        "Credit Analysis App Development",
        "Credit Management App Development",
        "Blockchain-Based Credit Scoring App Development",
        "AI & Machine Learning Integration"
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
      "Name":"Credit Scoring App Development Services",
      "image":"https://www.comfygen.com/comfygen-images/credit-scoring-app-development/credit-scoring-app-development-about.webp",
      "description":"Explore Comfygen’s expert credit scoring app development services designed for fintech startups and enterprises. We deliver secure, AI-powered apps with real-time analytics, credit monitoring, and scalable architecture.",
      "aggregateRating":{"@type":"AggregateRating",
      "ratingValue":"4.9",
    "reviewCount":"26"}
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is credit scoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Credit scoring is a method used to evaluate an individual’s creditworthiness based on their financial history and behavior. It involves analyzing data such as repayment history, credit utilization, and outstanding debts to assign a score that reflects the risk of lending. Businesses use credit scores to make informed decisions about loans, credit approvals, and financial services."
          }
        },
        {
          "@type": "Question",
          "name": "How does the credit scoring app work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A credit scoring app collects and analyzes user financial data using AI and data analytics. It accesses credit reports, transaction history, and financial behavior to generate a real-time credit score. These apps provide users with personalized financial insights, track score changes, and help lenders assess risk accurately. Advanced apps also offer credit recommendations and alerts for better financial decision-making."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a credit scoring app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The development timeline for a credit scoring app depends on its complexity, features, and platform requirements. On average, a basic app takes 2–4 months, while a feature-rich, AI-integrated solution can take 4–6 months or more. This includes planning, UI/UX design, development, testing, and deployment. Custom integrations and compliance requirements may also extend the development time."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the cost of developing a credit scoring app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of credit scoring app development varies based on app complexity, design, features, technology stack, and development hours. A simple app may cost around $15,000–$30,000, while a custom enterprise-grade app with AI, real-time analytics, and security compliance can range from $40,000–$100,000 or more. We provide a tailored quote after analyzing your project requirements."
          }
        }
      ]
    }
    
  ];
  
  return (
    <>
       <Head>
        <title>
          Credit Scoring App Development Company | AI-Driven Fintech Solutions
        </title>
        <meta
          name="description"
          content="Comfygen is a top credit scoring app development company delivering secure, AI-powered fintech solutions. We build scalable credit scoring apps with real-time analytics, data security, and 10+ years of expertise."
        />
        <meta  name="keywords"
          content="Credit Scoring App Development Services, Credit Analysis App Development, Credit Management App Development, Blockchain-Based Credit Scoring App Development, AI & Machine Learning Integration"
        />
        <link rel="canonical" href="https://www.comfygen.com/credit-scoring-app-development" />
       

        {/* Open Graph Tags */}
        <meta property="og:title" content="Credit Scoring App Development Company | AI-Driven Fintech Solutions"
        />
    
        <meta
          property="og:url"
          content="https://www.comfygen.com/credit-scoring-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/credit-scoring-app-development/og-credit-scoring-app-development.webp"
        />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta
          property="og:description"
          content="Comfygen is a top credit scoring app development company delivering secure, AI-powered fintech solutions. We build scalable credit scoring apps with real-time analytics, data security, and 10+ years of expertise."
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/credit-scoring-app-development/og-credit-scoring-app-development.webp" />
        <meta property="og:image:alt" content="Credit Scoring App Development Company | AI-Driven Fintech Solutions" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Credit Scoring App Development Company | AI-Driven Fintech Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a top credit scoring app development company delivering secure, AI-powered fintech solutions. We build scalable credit scoring apps with real-time analytics, data security, and 10+ years of expertise."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/credit-scoring-app-development/og-credit-scoring-app-development.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Credit Scoring App Development",
              operatingSystem: "Web, Android, iOS",
              applicationCategory: "FinanceApplication",
              url: "https://www.comfygen.com/credit-scoring-app-development",
              description:
                "Comfygen is a top credit scoring app development company delivering secure, AI-powered fintech solutions. We build scalable credit scoring apps with real-time analytics, data security, and 10+ years of expertise.",
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
                "https://www.comfygen.com/comfygen-images/credit-scoring-app-development/og-credit-scoring-app-development.webp"
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
          heading="Credit Scoring App Development"
          ptag="Comfygen is a leading credit scoring app development company, offering innovative and secure solutions tailored to your business needs. Our expert finance app developers use advanced AI, data analytics, and cutting-edge technologies to build scalable apps that deliver accurate credit assessments."
          li="Transforming Financial Insights into Actionable Solutions"
          li1="Empowering Businesses with Secure, Scalable Credit Scoring Apps"
          li2="10+ Years of Expertise in Fintech App Development"
          li3="Secure, Real-Time Credit Scoring Solutions"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/credit-scoring-app-development/credit-scoring-app-development-hero.webp"
        />
        <AboutSection
          title=""
          heading="Best Credit Scoring App Development Company"
          description1="At Comfygen, we are a leading credit scoring app development company specializing in building secure, scalable, and data-driven apps. With over a decade of experience in fintech and financial app development, we provide innovative solutions that help businesses assess creditworthiness more accurately and efficiently."
          description2="Our team of experts leverages cutting-edge technologies like AI, machine learning, and real-time data integration to create user-friendly, reliable credit scoring apps. Whether you're a fintech startup or an established financial institution, Comfygen delivers customized solutions tailored to your specific needs, empowering your business to make data-driven decisions."
          imageSrc="https://www.comfygen.com/comfygen-images/credit-scoring-app-development/credit-scoring-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />

        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title=" Our Credit Scoring App Development Services"
          description="Comfygen is a trusted credit scoring app development company, delivering secure, scalable, and intelligent solutions for modern financial institutions and fintech startups. We offer end-to-end credit management app development services that cover every aspect of credit analysis, from user onboarding to real-time monitoring and AI-powered predictions."
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Credit Scoring Apps Portfolio"
          description="Explore our portfolio of advanced credit scoring app development projects, designed for accuracy, security, and scalability. From AI-based scoring engines to real-time monitoring tools, our solutions empower smarter financial decisions."
        />
        <ContactFromCenter />

        <LatestTechnology
          heading="Technologies We Use for Credit Scoring App Development"
          subheading="At Comfygen, a leading credit management app development company, we leverage emerging technologies to create intelligent, secure, and scalable credit scoring solutions. Our advanced tech stack ensures accurate credit analysis, seamless user experience, and robust data protection tailored to fintech innovation."
          techData={technologyData}
        />
        <ProcessSec
          title="Our Credit Scoring Mobile App Development Process"
          description="As a leading credit scoring app development company, Comfygen follows a transparent, agile, and end-to-end development approach to deliver intelligent and compliant credit scoring applications. See how we develop credit scoring apps."
          processSlides={Process}
        />

        <TechStack
          title="Tech Stack We Use in Credit Analysis App Development"
           description="The Comfygen credit analysis platform is built using a powerful and modern technology stack. Using industry-leading frameworks, tools, and technologies, we build apps that deliver accurate credit scoring, insightful analytics, and seamless user experiences."
        />
        
        <WhyChoose
      title={whychooesdata.pageData.title}
      description={whychooesdata.pageData.description}
      mainCardData={whychooesdata.pageData.mainCardData}
      gridData={whychooesdata.pageData.gridData}
    />
      
        <HireDeveloper
          heading="Hire Our Dedicated Credit Score App Developers"
          text="Looking for expert Credit Score App Developers? At Comfygen, our credit score app developers specialize in creating accurate, scalable, and secure credit scoring applications. With years of experience in fintech, we deliver custom credit management app development solutions that align with your business needs and comply with industry regulations."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "AI-Driven Credit Scoring Models",
            "Real-Time Data Integration",
            "User-Centric UI/UX Design",
            "Robust Data Security & Compliance",
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
          title="Credin Score App Develoment"
        />
      </div>
    </>
  );
}
