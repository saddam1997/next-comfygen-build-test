import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./delivery-app-development.json";
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
const BusinessSolustion = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Top-Rated Delivery App Development Company in India
        </title>
        <meta
          name="description"
          content="Comfygen is a trusted delivery app development company offering custom delivery app development services for startups and enterprises. Build powerful pickup and delivery apps with real-time tracking and advanced features."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/delivery-app-development"
        />

        <meta name="keywords" content="Custom Delivery App Development, Delivery Website Development, Delivery App UI/UX Design Service, White-Label Delivery App Development, Food Delivery App Development, Grocery Delivery App Development, Medicine Delivery App Development, Courier Delivery App Development, Water Delivery App Development, Milk Delivery App Development, Parcel Delivery App Development, Logistics Delivery App Development, Fuel Delivery App Development, Liquor Delivery App Development, Alcohol Delivery App Development, Fish Delivery App Development, Flower Delivery App Development, Meat Delivery App Development, Gas Cylinder Delivery App Development, Ice Cream Delivery App Development, Pizza Delivery App Development, Pet Food Delivery App Development, Hyperlocal Delivery App Development, Cake Delivery App Development" />

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
          content="Comfygen Delivery App"
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
          content="https://www.comfygen.com/comfygen-images/delivery-app-development/delivery-app-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/delivery-app-development/delivery-app-development.webp"
        />
        <meta property="og:image:alt" content="Delivery App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/comfygen-images/delivery-app-development/delivery-app-development.webp"
        />
        <meta
          property="og:title"
          content="Custom Delivery App Development Solutions | On-Demand Experts"
        />
        <meta
          property="og:description"
          content="Build next-gen delivery apps with Comfygen. Our delivery app development agency delivers tailored, cost-effective, and scalable solutions for food, grocery, courier & logistics businesses."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Delivery App Development Company"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a top-rated delivery app development company offering custom on-demand delivery app solutions for food, grocery, medicine, courier, milk, and logistics. Hire expert delivery app developers to build scalable, feature-rich, and cost-effective delivery apps with real-time tracking, AI features, and end-to-end support."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/delivery-app-development/delivery-app-development.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <Navbar />
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <BusinessSolustion BusinessSolustion={JSON_DATA.BusinessSolustion} />
      <IndustryGrid />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
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
      `${process.env.URL}/api/v1/posts?tag=delivery-app-development&per_page=3`
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