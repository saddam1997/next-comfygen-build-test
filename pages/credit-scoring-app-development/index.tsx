import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazy-load";
import JSON_DATA from "./json/creditscoringappdevelopment1.json";

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









export default function Mobile(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          AI Credit Scoring App Development Company

        </title>
        <meta
          name="description"
          content="Launch AI-driven credit scoring applications with Comfygen Technologies to enable accurate credit risk analysis, real-time scoring, and smarter, data-driven lending decisions."
        />
        <meta name="keywords"
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



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Solution techData={JSON_DATA.CryptoTrading} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA?.whychooesdata?.pageData} />
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
