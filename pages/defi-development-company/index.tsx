import {
  IconSettingsAutomation,
  IconCurrencyDollar,
  IconWorld,
  IconEyeCode,
  IconLock,
  IconChartBar,
  IconArrowsExchange,
  IconFingerprint,
  IconPigMoney,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/defidevelopment.json";
import dynamic from "next/dynamic";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";

import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import Features from "../../components/Features"

import Networks from "../../components/Networks"

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

export default function Ecommerce(props) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          DeFi Development Company | Secure & Scalable DeFi Solutions
        </title>

        {/* Primary SEO */}
        <meta
          name="description"
          content="Comfygen is a DeFi development company building secure, scalable solutions including DEXs, DeFi tokens, lending platforms, and wallets."
        />
        <meta
          name="keywords"
          content="DeFi development company, decentralized finance solutions, DeFi smart contracts, DeFi staking platform, yield farming, DEX development, DeFi consulting services"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/defi-development-company"
        />


        <meta
          name="apple-mobile-web-app-title"
          content="DeFi Development Company"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/defi-development-company"
        />
        <meta
          property="og:title"
          content="DeFi Development Company | Custom Decentralized Finance Solutions"
        />
        <meta
          property="og:description"
          content="Build scalable DeFi platforms with Comfygen — from DEX and liquidity pools to yield farming, lending, staking, and DAO development. Secure. Reliable. Future-ready."
        />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/defi-development-company/og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/defi-development-company/og.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DeFi Development Company" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DeFi Development Company | Custom Decentralized Finance Solutions"
        />
        <meta
          name="twitter:description"
          content="Partner with Comfygen to launch secure and scalable DeFi platforms. From DEXs to staking, lending, and yield farming, we build finance for the future."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/defi-development-company/og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />
       <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
          />
      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[110px] pt-16">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.Trading} />
        <Emerging emerging={JSON_DATA.EmergingData} />
        <InformationSection InfoSectionData={JSON_DATA?.Information} />
        <Solution techData={JSON_DATA.DeFiDevelopment} />
        <Networks Data={JSON_DATA.BlockchainNetworks} />
        <InformationSection InfoSectionData={JSON_DATA?.Information1} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
        <FaqSection faqData={JSON_DATA.Frequently} />
        <BlogSection initialData={initialData} />

      </div>
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