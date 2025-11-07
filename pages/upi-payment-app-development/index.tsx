import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/upipaymentappdevelopment.json";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import ClientTestimonials from "../components/ClientTestimonials";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import HireDeveloper from "../components/HireDeveloper";
import TechStack from "../components/TechStack";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import ProcessSec from "../components/ProcessSec";
import PortfolioSecs from "../components/PortfolioSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
import CardGrid from "../components/CardGrid";
import ServicesSection from '../componentsnew/ServicesSection'
import ProcessSection from "../componentsnew/ProcessSection";
import {
  IconBrain,
  IconBrandAndroid,
  IconBrandApple,
  IconBrush,
  IconBulb,
  IconCalendarHeart,
  IconCheck,
  IconCloud,
  IconCode,
  IconCpu,
  IconDatabase,
  IconDeviceGamepad2,
  IconDevices,
  IconGlobe,
  IconLock,
  IconMessageChatbot,
  IconMicrophone,
  IconPalette,
  IconRocket,
  IconShieldCheck,
  IconUserSearch,
  IconUsersGroup,
  IconVideo,
} from "@tabler/icons-react";
import LatestTechnology from "../componentsnew/LatestTechnology";
import Tab from "../components/Tab";
import TabsPanel from "../components/Tab";
import TrendsSection from "../componentsnew/TrendsSection";
import CoreFeaturesSection from "../componentsnew/CoreFeaturesSection";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const Features = dynamic(() => import("./components/Features"), {
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
    title: "Discovery & Requirements Gathering",
    description:
      "We begin by understanding your business model, transaction flows, and compliance needs. This stage includes gathering technical requirements, identifying key stakeholders, and aligning your goals with the UPI ecosystem to set a solid project foundation.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive, user-friendly interfaces with a focus on simplicity and trust. We wireframe the UPI app to ensure smooth user journeys, minimal friction during payments, and brand consistency across all touchpoints.",
  },
  {
    title: "API & Bank Integration",
    description:
      "We integrate NPCI UPI APIs, third-party bank SDKs, and KYC/AML services to enable real-time payment capabilities, balance checks, and secure authentication — ensuring compliance with Indian banking regulations.",
  },
  {
    title: "Development & Testing",
    description:
      "Our developers build robust frontends and scalable backends using Flutter, Node.js, Python, and other modern stacks. Simultaneously, we conduct unit and integration testing to validate each feature, ensuring a bug-free experience.",
  },
  {
    title: "User Acceptance Testing (UAT) & Go Live",
    description:
      "We engage you in UAT to validate that the UPI app meets all functional, compliance, and user requirements. Once approved, we deploy the solution on production servers and app stores with full launch support.",
  },
  {
    title: "Support & Updates",
    description:
      "Post-launch, we provide continuous monitoring, performance optimization, and regular updates to ensure security, fix bugs, and improve features — keeping your UPI app competitive and up-to-date with the latest trends.",
  },
  {
    title: "Scalability Planning",
    description:
      "We help future-proof your app by building scalable infrastructure capable of handling millions of transactions. Whether you expand to new markets or integrate more banks, our architecture grows with your business.",
  }
];





const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/ai-driven-app.webp",
      head: "AI-Driven Mobile Banking App",
      name: "We developed an AI-powered mobile banking app featuring smart budgeting, predictive insights, and automated assistance for personalized, real-time financial management and customer support.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "#"
    },
    {
      img: "https://www.comfygen.com/comfygen-images/comfygen/blockchain-wallet.webp",
      head: "Blockchain-Based Digital Wallet",
      name: "This blockchain-integrated digital wallet app ensures secure, transparent, and lightning-fast transactions with features like crypto-wallet linking, biometric login, and immutable ledger history.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "#"
    },
    {
      img: "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/core-banking-app.webp",
      head: "Core Banking System App",
      name: "A robust mobile banking app integrated with core banking APIs, enabling secure fund transfers, account management, and instant notifications with PCI-DSS-compliant infrastructure.",
      num: "3",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "#"
    }
  ]
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
    "name": "UPI payment App Development Company",
    "provider": {
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/"
    },
    "description": "Launch your branded UPI app with our white-label solutions. Comfygen offers full-stack UPI app development with QR, KYC, and bank API integration for fast deployment.",
    "url": "https://www.comfygen.com/upi-payment-app-development",
    "mainEntityOfPage": "https://www.comfygen.com/upi-payment-app-development",
    "areaServed": "Global",
    "serviceType": [
      "Custom UPI App Development",
      "UPI Payment Gateway Integration",
      "White Label UPI Payment Solutions",
      "Android & iOS UPI App Development",
      "QR Code and Scan & Pay Integration",
      "Backend Admin Dashboard Development",
      "NPCI and Bank API Integration",
      "Digital Wallet Integration",
      "UPI payment app development",
      "Develop UPI app",
      "UPI wallet app development"
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
    "@context": "http://www.schema.org",
    "@type": "Product",
    "brand": "Comfygen Private Limited",
    "name": "UPI Payment App Development Services",
    "image": "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/upi-payment-app-development-hero.webp",
    "description": "Comfygen is a leading UPI payment app development company, offering secure, scalable, and NPCI-compliant solutions with seamless UI/UX, advanced security, and fast transactions for fintech businesses.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1928"
    }
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
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to develop a UPI payment app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to develop a UPI payment app depends on various factors such as the complexity of features, platform (Android/iOS), and integrations with NPCI and banks. On average, the development cost ranges from $12,000 to $60,000, depending on your specific requirements and customization."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a UPI app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development timeline for a UPI payment app typically ranges from 3 to 6 months. Factors such as the complexity of features, integrations (like NPCI APIs), and security measures can impact the timeline. A thorough project planning phase can help ensure a smooth and timely delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Is NPCI approval required for UPI integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, NPCI approval is necessary for UPI integration. The National Payments Corporation of India (NPCI) oversees UPI and ensures that all payment apps adhere to security standards and guidelines. Developers must obtain NPCI certification to integrate UPI functionality and ensure the app’s compliance with regulatory requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can I monetize a UPI app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can monetize a UPI payment app in various ways, such as charging transaction fees, offering premium services, or providing value-added features like bill payments, cashback offers, and in-app ads. However, any monetization model must align with NPCI guidelines and financial regulations."
        }
      },
      {
        "@type": "Question",
        "name": "What are the security measures in place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement robust security measures for UPI payment apps, including AES encryption, SSL certificates, and biometric authentication to safeguard user data. Additionally, our apps adhere to PCI-DSS compliance and follow industry best practices to ensure secure transactions and protect sensitive information."
        }
      }
    ]
  }

];



export default function Ecommerce(props) {
  let { initialData } = props;

  let { Hire, myList, WhyChoosed } = JSON_DATA;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const [show, setshow] = useState(true);
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };
  return (
    <>
      <Head>
        <title>
          Best UPI Payment App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading UPI payment app development company, offering secure, scalable, and NPCI-compliant solutions with seamless UI/UX, advanced security, and fast transactions for fintech businesses."
        />
        <meta name="keywords" content="Custom UPI App Development, UPI Payment Gateway Integration, White Label UPI Payment Solutions, Android & iOS UPI App Development, QR Code and Scan & Pay Integration, Backend Admin Dashboard Development, NPCI and Bank API Integration, Digital Wallet Integration, UPI payment app development, Develop UPI app, UPI wallet app development" />

        <link
          rel="canonical"
          href="https://www.comfygen.com/upi-payment-app-development"
        />

        <meta name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />


        {/* Compatibility */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Mobile Banking App" />

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
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="upi-payment App Development" />
        <meta property="og:url" content="https://www.comfygen.com/upi-payment-app-development" />
        <meta property="og:title" content="Custom UPI App Development Services | Fintech-Ready UPI Solutions" />
        <meta property="og:description" content="Get tailor-made UPI payment apps from certified developers. We build fast, user-friendly, and secure apps with NPCI integration and real-time transactions for all platforms." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom UPI App Development Services | Fintech-Ready UPI Solutions" />
        <meta name="twitter:description" content="Get tailor-made UPI payment apps from certified developers. We build fast, user-friendly, and secure apps with NPCI integration and real-time transactions for all platforms." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="UPI App Development" />
        <meta property="og:url" content="https://www.comfygen.com/upi-payment-app-development" />
        <meta property="og:title" content="UPI Payment App Development Company" />
        <meta property="og:description" content="Partner with Comfygen, a top UPI payment app development company delivering secure, NPCI-compliant apps with seamless performance for fintech startups and enterprises." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-hero.webp')]">
          <HeroSectionForAllPages
            heading="UPI Payment App Development Company"
            ptag="Comfygen is a trusted UPI payment app development company, delivering secure, scalable, and NPCI-compliant payment solutions tailored for fintech startups, banks, and enterprises. Our expert developers build high-performing UPI payment apps with seamless UI/UX, bank-level security, and lightning-fast transactions to enhance user trust and drive digital transformation. Partner with us to build next-gen UPI apps that set new standards in fintech innovation."
            li="Transforming Payments into Seamless UPI Solutions"
            li1="Boosting Fintech with Custom UPI Apps"
            li2="10+ Yr Expert Fintech Developers"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <AboutSection
          heading="Best UPI payment app development company for Startups & Enterprises"
          description1="With the rising demand for secure, real-time digital payments, UPI payment app development has become essential for businesses aiming to lead in fintech. As a top-tier custom UPI payment app development company, Comfygen specializes in building scalable, user-centric solutions for startups and enterprises. "
          description2="Our expert <a class='text-blue-500 font-semibold' href='/finance-app-development'>Fintech app development</a> team has successfully delivered multiple UPI app development projects using advanced technologies like Blockchain, AI/ML, and AR/VR. Whether you're looking to develop a UPI app from scratch or integrate UPI into your existing platform, we provide end-to-end services that drive success in the fast-evolving digital payment ecosystem."
          imageSrc="https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />

        <ServicesSection
          heading="We Offer the Best UPI App Development Services"
          subtitle="As a leading UPI payment app development company, we offer a complete range of services tailored to meet the needs of startups and enterprises looking to integrate UPI payment solutions."
          servicesData={JSON_DATA.servicesData} />

        <CoreFeaturesSection title="Core Features of Our UPI Payment Apps" subtitle="Our advanced UPI payment app development solutions are packed with powerful features that enhance security, convenience, and user engagement. Whether you're a startup or an enterprise, our apps are designed to deliver a seamless, secure, and fast digital payment experience." features={JSON_DATA?.LeadingSoftware || []} />


        <PortfolioSecs
          techData={techDataForPage1}
          heading="Our UPI Payment Apps Portfolio"
          description="Explore Comfygen’s portfolio of UPI payment apps, designed for startups and enterprises. Our secure, scalable solutions offer real-time transactions, multi-banking, QR payments, and AI-based fraud detection—redefining digital finance with seamless user experiences and next-gen fintech innovation."
        />

        <TrendsSection
          heading="The Trends in UPI App Development That Are Shaping the Future of UPI Apps"
          subtitle="The landscape of UPI app development is rapidly evolving with the integration of advanced technologies and changing user expectations. At Comfygen, we stay ahead of the curve by adopting the latest trends that ensure your UPI payment app remains competitive, secure, and future-ready."
          trends={JSON_DATA.FoodAppMaker}
        />

        <ProcessSection
          title="Our UPI Payment App Development Process"
          description="Our UPI payment app development process follows a strategic, step-by-step approach to deliver secure, high-performing, and NPCI-compliant solutions tailored to your business goals and user needs."
          processSlides={Process}
        />

        <TechStack
          title="Our Advanced Tech Stack for UPI Payment App Development"
          description="Our focus isn't just on seamless transactions — it's on building highly secure, scalable, and future-proof UPI solutions. For robust UPI payment app development, we leverage cutting-edge technologies across all layers of the application."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our UPI App Developers for Scalable Fintech Solutions"
          text="At Comfygen, you can hire expert UPI app developers who specialize in creating secure, high-performance UPI payment solutions tailored to your business. Our developers are well-versed in UPI app development, integrating NPCI APIs, and building compliant, scalable fintech apps using the latest technologies."
          text1="We don’t just build apps — we build future-ready solutions that empower your business with seamless digital payments and user-centric features."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expert Developers in UPI App Development",
            "End-to-End Project Transparency",
            "Experience with Diverse Fintech Projects",
            "Flexible Hiring Models",
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="ReactJS Development Technology"
        />
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
