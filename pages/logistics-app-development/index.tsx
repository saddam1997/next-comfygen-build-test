
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./logistics-app-development.json";
import Features from "../../components/Features"
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";
import AppClone from "../../components/AppClone"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Trending from "../../components/Trending";

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true }
);

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

import TechStacks from "../../components/TechStacks";

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);
import IndustryGrid from "../../components/IndustryGrid";
import ReviewCard from "../../components/ReviewCard";





export default function ClinicalApp(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Logistics App Development Company | Custom Transport & Fleet Solutions</title>
        <meta
          name="description"
          content="Comfygen builds custom logistics apps with real-time GPS tracking, fleet management, and ERP integration. Get a free quote from India's trusted logistics app development company."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/logistics-app-development"
        />
        <meta name="keywords" content="hire logistics app developer, logistics app development company, custom logistics app development services, logistics software development company, build logistics mobile app, on demand logistics app development, fleet management app development services, supply chain app development company, last mile delivery app development, transport management system development, logistics app development cost, best logistics app development company, top logistics app developers in India, AI-powered logistics app development" />
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
        <meta
          name="apple-mobile-web-app-title"
          content="Comfygen Logistics App"
        />

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
          content="https://www.comfygen.com/comfygen-images/logistics-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/logistics-app-development/og.webp"
        />
        <meta property="og:image:alt" content="Logistic App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/logistics-app-development"
        />
        <meta
          property="og:title"
          content="Logistics App Development Company | Custom Transport & Fleet Solutions"
        />
        <meta
          property="og:description"
          content="Comfygen builds custom logistics apps with real-time GPS tracking, fleet management, and ERP integration. Get a free quote from India's trusted logistics app development company."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Logistics App Development Company | Custom Transport & Fleet Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen builds custom logistics apps with real-time GPS tracking, fleet management, and ERP integration. Get a free quote from India's trusted logistics app development company."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/logistics-app-development/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <Navbar />
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      {/* <HeroSectionforHome herosection={JSON_DATA.Herosection} /> */}
      {/* <Milestones /> */}
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <AppClone SliderDATA={JSON_DATA.Industries} />
      {/* <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} /> */}
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      {/* <TechSection TechStack={JSON_DATA.TechStack} /> */}
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <IndustryGrid />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Awards, Ratings & Recognitions"
      />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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
