import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/Decentralized.json";

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



export default function Ecommerce(props:any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Decentralized Exchange Development Company | Secure & Scalable DEX Solutions
        </title>
        <meta
          name="description"
          content=" Comfyen, a Decentralized exchange development company to build secure, high-performance DEX platforms. Our expert team offers custom blockchain solutions, optimized for security, scalability, and user experience."
        />

        <meta name="keywords" content="Decentralized Exchange Development Company, Decentralized Exchange Development, DeFi Exchange Development Company, Decentralized Exchange Development Services, Decentralized Exchange Development Solutions" />

        <meta
          property="og:title"
          content="Decentralized Exchange Development (DEX) Company | Comfygen Private Limited"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading Decentralized Exchange (DEX) development company delivering secure, scalable, and customized blockchain solutions. Launch your advanced DEX platform with us. Contact for a free consultation!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/decentralized-exchange-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:type"
          content="Decentralized Exchange Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/decentralized-exchange-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:09:06+00:00"
        />
        {/* <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/decentralized-exchange-development/decentralized-exchange-development-company.webp"
        /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" /> */}


        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434" />
        <meta name="og:longitude" content="75.787271" />


        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en" />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Private Limited" />
        <meta name="category" content="Decentralized Exchange Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Decentralized Exchange Development Firm in India" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Decentralized Exchange Development Services | Comfygen" />
        <meta name="twitter:description" content="Build secure, scalable, and feature-rich decentralized exchanges with Comfygen. Our DeFi experts deliver custom DEX development solutions to power your blockchain business." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/decentralized-exchange-development/decentralized-exchange-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta (Open Graph) --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.comfygen.com/decentralized-exchange-development" />
        <meta property="og:title" content="Decentralized Exchange Development Services | Comfygen" />
        <meta property="og:description" content="Launch your own decentralized exchange with Comfygen. We provide secure, scalable, and customizable DEX development solutions designed to support high-performance crypto trading." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/decentralized-exchange-development/decentralized-exchange-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/decentralized-exchange-development/decentralized-exchange-development-company.webp" />
        <meta property="og:image:alt" content="Decentralized Exchange Development Services Comfygen" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <Solution techData={JSON_DATA.Trading} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Solution techData={JSON_DATA.Technologies} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <Solution techData={JSON_DATA.Decentralized} />
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