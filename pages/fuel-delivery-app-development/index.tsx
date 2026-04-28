
import Head from "next/head";
import JSON_DATA from "./fuel-delivery-app-development.json";
import dynamic from "next/dynamic";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import Trending from "../../components/Trending";
import TechStacks from "../../components/TechStacks";
import AppClone from "../../components/AppClone"
const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);

const BusinessSolustion = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  },
);

const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  },
);

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});

import ReviewCard from "../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);



const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true },
);

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-gray-100 rounded-lg`} />
);



const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => skeleton("h-[400px]"),
});



const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  {
    ssr: true,
  },
);

import Features from "../../components/Features";
import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});



export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Fuel Delivery App Development Company | On-Demand Solutions</title>
        <meta
          name="description"
          content="Comfygen is a leading fuel delivery app development company offering AI-powered, on-demand fuel delivery app development services with tracking, payments, and scalable solutions."
        />

        {/* keywords */}
        <meta name="keywords" content="On-demand Fuel Delivery App Development, Uber-like fuel delivery, Petrol Delivery App Development, Diesel Delivery App Development, Gas Delivery App Development, White-label Fuel Delivery App Solutions, Fuel Station Finder App Development, Fleet Fuel Management App Development, Fuel Delivery Marketplace App Development" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/fuel-delivery-app-development" />

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
        <meta name="twitter:title" content="Fuel Delivery App Development Company | Custom On-Demand Fuel Delivery Solutions" />
        <meta name="twitter:description" content=" Comfygen is a top fuel delivery app development company offering custom, scalable, and secure on-demand fuel delivery solutions. Hire expert fuel delivery app developers to build Uber-like gas, petrol, and diesel delivery apps with GPS tracking, fleet management, and white-label options." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development.webp" />
        <meta property="og:image:alt" content="Fuel Delivery App Development" />
        <meta property="og:url" content="https://www.comfygen.com/fuel-delivery-app-development" />
        <meta property="og:title" content="Custom Fuel Delivery App Development Company | White-Label Solutions" />
        <meta property="og:description" content="Comfygen Technologies offers custom fuel delivery app development services for startups and enterprises. Get white-label, scalable, and AI-powered fuel ordering apps with real-time tracking and multi-platform support." />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <BusinessSolustion imageSrc="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/Next-Gen-Fuel-delivery-App-development-with-AI-Innovation.webp" BusinessSolustion={JSON_DATA.BusinessSolustion} />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <AppClone SliderDATA={JSON_DATA.Industries} />
      <Features featuresData={JSON_DATA.FeaturesData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <DeliverySection hideUrl="https://www.comfygen.com/fuel-delivery-app-development" />
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
      `${process.env.URL}/api/v1/posts?tag=fuel-delivery-app-development&per_page=3`
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return {
      props: { initialData: data },
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
