import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/defismart.json";
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



export default function MultiChain(props) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          DeFi Smart Contract Development Services | Smart Contract Development Company
        </title>
        <meta
          name="description"
          content="Unlock the potential of decentralized finance with our expert DeFi smart contract development services. As a leading DeFi smart contract development company, we provide secure, scalable solutions to drive innovation and growth for your business. Contact us today to get started!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/defi-smart-contract-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="language" content="en-us" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DeFi Smart Contract Development Company In Canada &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Get professional and secure DeFi smart contract development solutions from our expert blockchain developers. We provide custom DeFi smart contract development solutions tailored to your specific needs for your business. Get in touch now!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/defi-smart-contract-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.faqSchema) }}
        />
      </Head>

      {/* <BlockChainHeader /> */}
      <div className="overflow-hidden lg:pt-[115px]">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.Trading} />
        <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />

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