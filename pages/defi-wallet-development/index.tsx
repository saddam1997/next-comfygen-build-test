import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowallet.json";

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


export default function Ecommerce(props: any) {
  let { initialData } = props;




  return (
    <>
      <Head>
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <title>
          Best DeFi Wallet Development Services | DeFi Wallet Solutions

        </title>
        <meta
          name="description"
          content="Comfygen provides secure DeFi wallet development services with smart contract integration, advanced security, scalable architecture, and user-friendly design."
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/defi-wallet-development"
        />

        <meta name="keywords" content="DeFi Wallet Development, Custom Crypto Wallet Development, White Label DeFi Wallet Solutions, NFT Wallet Integration, Multicurrency Wallet Development, Crypto Payment Gateway Integration, Enterprise Blockchain Wallet Solutions" />


        {/* <!-- Viewport and/ Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="DeFi Wallet Development" />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comfygen – Trusted DeFi Wallet Development Company" />
        <meta name="twitter: description" content="Build secure and user-friendly DeFi wallets with Comfygen. From multi-chain support to NFT and DeFi protocol integration, we deliver next-gen wallets designed for growth and trust.
"/>
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/defi-wallet-development/defi-wallet-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />



        {/* <!-- Facebook M/eta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/defi-wallet-development/defi-wallet-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/defi-wallet-development/defi-wallet-development-company.webp" />
        <meta property="og:image:alt" content="DeFi Wallet Development Company" />
        <meta property="og:url" content=" https://www.comfygen.com/defi-wallet-development" />
        <meta property="og: title" content=" DeFi Wallet Development Company" />
        <meta property="og: description" content="Looking for the best DeFi wallet development services? Comfygen builds secure, scalable, and customizable crypto wallets with advanced features like multi-chain support, NFT integration, and enterprise-grade security." />



        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        /> */}
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
      <Solution techData={JSON_DATA.Trading} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <IndustryGrid />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
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