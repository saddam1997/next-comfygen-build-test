import Image from "next/image";
import React, { useState, useRef } from "react";
import Head from "next/head";
import LazyLoad from "react-lazy-load";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/erc20token.json";


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

import Emerging from "../../components/Emerging";

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



import Script from "next/script";



export default function Ecommerce(props: any) {
  let { initialData } = props;
 


  return (
    <>
      <Head>
        <title>Truted ERC20 Token Development Company | Secure & Custom Ethereum Tokens</title>
        <meta
          name="description"
          content="Comfygen is a trusted ERC20 token development company, offering secure, and scalable token solutions on the Ethereum network. Build high-performance ERC20 tokens with seamless smart contract integration."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/erc20-token-development"
        />


        <meta name='og:title' content='ERC20 Token Development Company | ERC20 Token Development Services' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://www.comfygen.com/erc20-token-development' />
        <meta name='og:image' content='https://www.comfygen.com/image/erc20-token-development.webp' />
        <meta name='og:site_name' content='Comfygen Private Limited' />
        <meta name='og:description' content='Discover secure and scalable ERC20 token development services tailored to your business needs. Partner with a leading ERC20 token development company for custom blockchain solutions, smart contract integration, and seamless token deployment on the Ethereum network.' />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERC20 Token Development  | ERC20 Token Development Company" />
        <meta name="twitter:description" content=" Discover secure and scalable ERC20 token development services tailored to your business needs. Partner with a leading ERC20 token development company for custom blockchain solutions, smart contract integration, and seamless token deployment on the Ethereum network." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/erc20-token-development.webp" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/image/erc20-token-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/erc20-token-development.webp" />
        <meta property="og:image:alt" content="ERC20 Token Development  | ERC20 Token Development Company" />

        <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.faqSchema) }} />
      </Head>
       {/* <Navbar /> */}
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.AIFeatures} />
      <InformationSection InfoSectionData={JSON_DATA?.Information} />
      <InformationSection InfoSectionData={JSON_DATA?.Information1} />
      <InformationSection InfoSectionData={JSON_DATA?.Information2} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <InformationSection InfoSectionData={JSON_DATA?.Information3} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />

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

