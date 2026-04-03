import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nbalivelineapidevelopment.json";

import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

import BusinessSolustion from "../../components/BusinessSolustion"

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import Features from "../../components/Features"

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

import Emerging from "../../components/Emerging";

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"
import ClientTestimonials from "../../components/TestimonialSection";
const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});
const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);














































import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import ReviewCard from "../../components/ReviewCard";

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

const ConsultancyApproach = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);


const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
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


const Process = [
  {
    title: "Requirement Gathering",
    description:
      "We begin by analyzing your business goals, user needs, and application structure. This ensures our API aligns perfectly with your product vision."
  },
  {
    title: "Planning Endpoints & Data Flow",
    description:
      "We map out clear, efficient endpoints and design an optimized data flow that delivers real-time NBA updates with minimal latency."
  },
  {
    title: "Wireframing & Documentation",
    description:
      "Our team creates a detailed API structure, including method outlines, request-response models, and developer-friendly documentation."
  },
  {
    title: "API Development",
    description:
      "We build robust, scalable NBA API endpoints with precision, ensuring real-time delivery, high performance, and seamless data accuracy."
  },
  {
    title: "Testing & Validation",
    description:
      "Every module is rigorously tested under simulated live conditions to ensure your API handles high traffic and real-time demands reliably."
  },
  {
    title: "Deployment & Integration",
    description:
      "We launch your API in your live environment with secure access, test credentials, and seamless integration with web or mobile platforms."
  },
  {
    title: "Monitoring & Support",
    description:
      "Our 24/7 support includes live monitoring, proactive error resolution, version control, and continuous performance optimization."
  }
];



const ServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "NBA Live Line API | NBA Data Solutions by Comfygen",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "url": "https://www.comfygen.com/"
  },
  "description": "Get real-time NBA data with Comfygen’s NBA Live Line API. Scalable, reliable, and built for developers, and fantasy platforms.",
  "url": "https://www.comfygen.com/nba-live-line-api-development",
  "mainEntityOfPage": "https://www.comfygen.com/nba-live-line-api-development",
  "areaServed": "Global",
  "serviceType": [
    "Custom NBA Live Line API",
    "NBA Scores API Integration",
    "NBA Odds API & Historical Odds Access",
    "NBA Fantasy Data API",
    "Developer-Friendly NBA API for Developers",
    "NBA Data Feed API Solutions"
  ],
  "sameAs": [
    "https://www.facebook.com/comfygen",
    "https://www.linkedin.com/company/comfygen-private-limited"
  ]

};




const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an NBA Live Line API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s an API that delivers real-time NBA match data including scores, stats, odds, and more for apps and platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Is your NBA API free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a free trial version for developers to test key features before upgrading to a paid plan."
      }
    },
    {
      "@type": "Question",
      "name": "Does your API include NBA historical odds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide access to historical odds and match results for data analysis and modeling."
      }
    },
    {
      "@type": "Question",
      "name": "Can I integrate your API into mobile apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our APIs are mobile-ready and support both Android and iOS platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Is developer support available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer complete documentation, sandbox, and live support for smooth integration."
      }
    },
    {
      "@type": "Question",
      "name": "What data formats are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our API supports JSON and XML formats for flexible integration."
      }
    },
    {
      "@type": "Question",
      "name": "How frequently is the data updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our APIs update in real-time — typically every second — to keep your app live and accurate."
      }
    },
    {
      "@type": "Question",
      "name": "Is Comfygen's NBA API scalable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our cloud infrastructure handles high-traffic spikes and growing user bases with ease."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer white-label solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, white-label versions of our API can be offered for platforms needing brand consistency."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to deploy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typical deployments take 3–7 business days, depending on customization and data volume."
      }
    }
  ]
};







export default function Ecommerce(props: any) {
  let { initialData } = props;
  const [showContent, setShowContent] = useState(false);
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
        <title>NBA Live Line API | NBA Data API Solutions by Comfygen</title>
        <meta
          name="description"
          content="Get real-time NBA data with Comfygen’s NBA Live Line API. Scalable, reliable, and built for developers. and fantasy platforms."
        />
        <meta
          name="keywords"
          content="NBA Live Line API, NBA odds API, NBA data API, real-time NBA scores API, NBA data feed, NBA match stats API, NBA API integration, NBA historical odds API, NBA developer API"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nba-live-line-api-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="NBA Live Line API | NBA Data API Solutions by Comfygen"
        />
        <meta
          property="og:description"
          content="Get real-time NBA data with Comfygen’s NBA Live Line API. Scalable, reliable, and built for developers, and fantasy platforms."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top NBA Live Line API Services"
        />
        <meta
          name="summary"
          content="Comfygen provides reliable and scalable NBA Live Line API services with historical and real-time data coverage."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="Founder of NBA Live Line API services for startups and enterprises. Specializing in real-time NBA scores, stats, and data integration."
        />
        <meta
          name="Best NBA Live Line API Service Provider"
          content="Comfygen is a trusted NBA API provider worldwide."
        />
        <meta name="category" content="NBA Live Line API" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best NBA Live Line API" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="NBA Live Line API Services Provider"
        />

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
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/nba-live-line-api-development/nba-api-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/nba-live-line-api-development/nba-api-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NBA Live Line API" />
        <meta property="og:url" content="https://www.comfygen.com/nba-live-line-api-development" />
        <meta property="og:title" content="NBA Live Line API Services | Real-Time NBA Data Solutions" />
        <meta property="og:description" content="Get real-time NBA data with our NBA Live Line API. We provide scores, odds, stats, and integration services for fantasy and platforms." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NBA Live Line API Services | Real-Time NBA Data Solutions" />
        <meta name="twitter:description" content="Get real-time NBA data with our NBA Live Line API. We provide scores, odds, stats, and integration services for fantasy and  platforms." />
        <meta name="twitter:image" content="https://www.comfygen.com/svg/Logo1.svg" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Updated JSON-LD schema for SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "NBA Live Line API",
            operatingSystem: "Web, Android, iOS",
            applicationCategory: "SportsApplication",
            offers: {
              "@type": "Offer",
              price: "Contact Us - 9587867258",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "300"
            },
            publisher: {
              "@type": "Organization",
              name: "Comfygen"
            }
          })}
        </script>

        {/* Structured data scripts */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      </Head>

      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.Nextechnologies} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
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