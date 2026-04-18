import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowhitepaper.json";

import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import Features from "../../components/Features"

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"
import ReviewCard from "../../components/ReviewCard";
import Emerging from "../../components/Emerging";
const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});
const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});
import TechStacks from "../../components/TechStacks";

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);
import IndustryGrid from "../../components/IndustryGrid";































































import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);


const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)
const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)



import ConsultancyApproach from "../../components/Newcomponet/SectionCompoent/ConsultancyApproach"




export default function MultiChain(props: any) {
  let { initialData } = props;
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
      "@type": "Service",
      "name": "Crypto Whitepaper Writing Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen provides professional crypto whitepaper writing services, delivering clear, engaging, and investor-ready documents. Our blockchain experts craft whitepapers that explain your vision, tokenomics, technology, and business model to attract investors and build credibility.",
      "url": "https://www.comfygen.com/crypto-whitepaper-writing-services",
      "mainEntityOfPage": "https://www.comfygen.com/crypto-whitepaper-writing-services",
      "areaServed": "Global",
      "serviceType": [
        "Crypto Whitepaper Writing",
        "Blockchain Whitepaper Development",
        "ICO Whitepaper Writing",
        "DeFi Whitepaper Services",
        "NFT Whitepaper Creation",
        "Tokenomics Documentation",
        "Web3 Project Whitepaper"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
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
          name: "Crypto Whitepaper Writing Services",
          item: "https://www.comfygen.com/crypto-whitepaper-writing-services",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to develop a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to develop a delivery app typically ranges between $10,000 to $50,000, depending on features, design, and platform (iOS, Android, or both). At Comfygen, we provide cost-effective delivery app development solutions with real-time tracking, secure payments, and custom features tailored to your business needs."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to build a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery app development timelines typically range from 8 to 20 weeks, depending on the complexity and features. Comfygen’s expert team follows an agile process, ensuring faster delivery without compromising quality. From design to deployment, we help you launch your app quickly and efficiently."
        }

      }, {
        "@type": "Question",
        "name": "Can I get a white-label delivery app solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Comfygen offers white-label delivery app solutions that are ready to launch, customizable, and cost-effective. Our solutions include real-time tracking, easy payments, and multi-vendor support, helping businesses save time and enter the market faster with a scalable and branded app."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide multi-delivery app development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in multi-delivery app development services, enabling businesses to manage food, grocery, parcel, and medicine deliveries from a single platform. With advanced features, user-friendly design, and AI-powered delivery application development solutions, our delivery mobile apps make delivery management seamless and efficient."
        }

      }, {
        "@type": "Question",
        "name": "Why should I choose Comfygen for delivery app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen is a leading delivery app development firm trusted by startups and enterprises. We provide custom, scalable, and cost-effective delivery app solutions with real-time tracking, AI integration, and secure payments. Make Sure your delivery business succeeds digitally from concept to launch."
        }


      }]

    },
  ];

  return (
    <>
      <Head>


        <title>
          Crypto White Paper Writing Services | Web3 White paper Writers
        </title>
        <meta
          name="description"
          content="crypto white paper writing services for blockchain, DeFi, NFT, and Web3 projects. Our expert white paper writers craft clear, credible, and research-backed documents that build trust, attract investors."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-white-paper-development"
        />

        <meta name="keywords" content="Crypto Whitepaper Writing, Blockchain Whitepaper Development, ICO Whitepaper Writing, DeFi Whitepaper Services, NFT Whitepaper Creation, Tokenomics Documentation, Web3 Project Whitepaper" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Whitepaper Writing Services" />
        <meta name="twitter:description" content="Get expertly crafted crypto whitepapers with Comfygen. We create clear, engaging, and investor-ready blockchain whitepapers that showcase your vision, technology, and tokenomics for maximum impact." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/crypto-white-paper-development/crypto-whitepaper-writing-services.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/crypto-white-paper-development/crypto-whitepaper-writing-services.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/crypto-white-paper-development/crypto-whitepaper-writing-services.webp" />
        <meta property="og:image:alt" content="crypto whitepaper writing services" />
        <meta property="og:url" content="https://www.comfygen.com/crypto-whitepaper-writing-services" />
        <meta property="og:title" content="Expert Crypto Whitepaper Writing Services | Comfygen" />
        <meta property="og:description" content="Get professionally written crypto whitepapers with Comfygen. Our blockchain experts craft clear, engaging, and investor-ready documents covering tokenomics, technology, and business vision to attract funding and credibility." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Navbar />
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <ClientStories />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />


    </>
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?per_page=3`
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return {
      props: { initialData: data },
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
