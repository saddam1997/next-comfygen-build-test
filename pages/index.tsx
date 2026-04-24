
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./index.json";
import HeroSectionNewCls from "../components/HeroSectionNewCls"
import IndustryGrid from "../components/IndustryGrid";
import Trending from "../components/Trending";
import AboutComponent from "../components/Abouts/AboutComponent"
import ServicesComponet from "../components/ServicesSection/ServicesComponet"



const PortfolioSection = dynamic(() => import("../components/PortfolioSection"),
  { ssr: true }
);
import CallToActionSection from "../components/CallToActionSection"

import ProcesSection from "../components/ProcesSection"

const TechStacks = dynamic(() => import("../components/TechStacks"),
  { ssr: true }
);

import WhyChooseSection from "../components/WhyChooseSection"


const ClientStories = dynamic(() => import("../components/ClientStories"),
  { ssr: true }
);

import HireSection from "../components/HireSection"

const ReviewCard = dynamic(() => import("../components/ReviewCard"),
  { ssr: true }
);

const FaqSection = dynamic(() => import("../components/FaqSection"),
  { ssr: true }
);

const BlogSection = dynamic(() => import("../components/BlogSection"),
  { ssr: true }
);


export default function Home(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          AI-Based Mobile App and Web Development Company
        </title>

        <meta
          name="description"
          content="Comfygen is a AI-based mobile app and web development company delivering scalable, secure, and high-performance digital solutions for startups and enterprises."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://www.comfygen.com" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Web And App Development Company"
        />

        <meta
          name="keywords"
          content="Comfygen Technologies, software development, app development, blockchain development, IT company, custom software solutions"
        />

        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="Comfygen Technologies – App & Software Development Experts"
        />
        <meta
          name="og:description"
          content="Explore top-tier software, app, and blockchain development services by Comfygen Technologies."
        />
        <meta property="og:url" content="https://www.comfygen.com" />
        <meta
          name="og:site_name"
          content="Coustm Blockchain & Mobile App Development Company"
        />
        <meta
          name="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          name="article:modified_time"
          content="2022-12-06T08:49:10+00:00"
        />
        <meta
          name="og:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />

        {/* Author and Company Information */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* Twitter Card  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comfygen Technologies – Digital Transformation Partner" />
        <meta name="twitter:description" content="Join hands with Comfygen for robust software and mobile solutions that scale." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />


        <link rel="preconnect" href="https://www.comfygen.com" />
        <link rel="dns-prefetch" href="https://www.comfygen.com" />
        <link rel="preload" as="image" href={JSON_DATA.Herosection?.bgImage} />
        {/* ✅ LCP IMAGE PRELOAD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      {/*  {/* <Navbar /> */}

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <IndustryGrid />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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
