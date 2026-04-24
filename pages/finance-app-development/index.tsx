
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/finance.json";
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

import FeaturesNewSection from "../../components/FeaturesNewSection"
const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Trending from "../../components/Trending";

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true }
);

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import InformationSection from "../../components/InformationSection"

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
// import DeliveryCostTable from "./components/DeliveryCostTable";

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

import ReviewCard from "../../components/ReviewCard";


const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { ssr: true }
);
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

import Emerging from "../../components/Emerging";
// import DeliveryCostTable from "./components/DeliveryCostTable";

const BusinessSolustion = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"),
  { ssr: true }
);

import IndustryGrid from "../../components/IndustryGrid";



export default function Mobile(props: any) {
  let { initialData } = props;
 

  return (
    <>
      <Head>
        <title>Finance App Development Company | Banking & Fintech App Development Services</title>
        <meta
          name="description"
          content="Comfygen builds secure, scalable finance apps — from mobile banking and digital wallets to decentralized finance and custom fintech app development. Get a free quote today."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/finance-app-development"
        />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
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
        <meta name="apple-mobile-web-app-title" content="My App" />
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
        <meta name="keywords" content="Custom Fintech App Development, Stock Trading App Development, Digital Wallet Development, Expense Tracker App Development, Mobile Banking App Development, Insurance App Development, Fintech App Development Services, Wealth Management App Development, AI Fintech App Development" />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:title' content='Finance App Development Company | Banking & Fintech App Development Services' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://www.comfygen.com/finance-app-development ' />
        <meta name='og:image' content='https://www.comfygen.com/image/finance-app-development-og-image.webp' />
        <meta name='og:site_name' content='Comfygen Private Limited' />
        <meta name='og:description' content='Looking for a top Fintech app development company? We build secure, AI-powered finance software, lending apps, and digital payment solutions tailored to your business needs. Get a free consultation today!' />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finance App Development Company | Banking & Fintech App Development Services" />
        <meta name="twitter:description" content="Comfygen builds secure, scalable finance apps — from mobile banking and digital wallets to decentralized finance and custom fintech app development. Get a free quote today." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/finance-app-development-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/image/finance-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/finance-app-development-og-image.webp" />
        <meta property="og:image:alt" content="FinTech App Development" />
        <meta property="og:url" content="https://www.comfygen.com/finance-app-development" />
        <meta property="og:title" content="Finance App Development Company | Banking & Fintech App Development Services" />
        <meta property="og:description" content="Comfygen builds secure, scalable finance apps — from mobile banking and digital wallets to decentralized finance and custom fintech app development. Get a free quote today." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      {/* <LazyLoad height={80} offset={100}> */}
       {/* <Navbar /> */}
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <FeaturesNewSection FData={JSON_DATA.FData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <IndustryGrid />

      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
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
      `${process.env.URL}/api/v1/posts?tag=finance-app-development&per_page=3`
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