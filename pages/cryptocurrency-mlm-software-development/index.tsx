import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptomlmsoftware.json";
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




export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          CryptoCurrency MLM Software Development Service | Comfygen
        </title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/cryptocurrency-mlm-software-development"
        />

        <meta name="keywords" content="Comfygen offers cryptocurrency MLM software development services to build secure, scalable, and automated blockchain-based MLM platforms with smart contracts, transparent transactions, and advanced features." />



        <meta
          property="og:title"
          content="Cryptocurrency MLM Software Development Compnay"
        />

        <meta property="og:description" content=" Comfygen, a leading CryptoCurrency MLM software development company, for secure, scalable, and customizable blockchain-based MLM solutions. " />

        <meta
          property="og:url"
          content="https://www.comfygen.com/cryptocurrency-mlm-software-development"
        />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/cryptocurrency-mlm-software-development/cryptocurrency-mlm-software-development.webp"
        />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/cryptocurrency-mlm-software-development/cryptocurrency-mlm-software-development.webp" />
        <meta property="og:image:alt" content="Cryptocurrency MLM Software Development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:title" content="Cryptocurrency MLM Software Development Compnay" />
        <meta name=" twitter: description" content=" Comfygen provides Cryptocurrency MLM Software Development service that delivers secure and scalable Crypto MLM Software." />
        <meta name="twitter: image" content="https://www.comfygen.com/comfygen-images/cryptocurrency-mlm-software-development/cryptocurrency-mlm-software-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />


        <meta
          name="description"
          content="Comfygen is a Leading cryptocurrency MLM Software Development company In India. We offer white-label blockchain-based Bitcoin MLM software on Tron, Ethereum, BSC, Matic, and SOL. Contact us today!"
        />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Blockchain-Based Cryptocurrency MLM Software Development Company | Smart Contract Based MLM Software Development | Bitcoin MLM software | Comfygen Private Limited"
        />
        <meta
          property="og:facebook_description"
          content="We are a leading Blockchain-Based Cryptocurrency MLM Software Development Company | Smart Contract-Based MLM Software Development | Bitcoin MLM software development company from India for your business."
        />
        <meta
          property="og:twitter_title"
          content="Brilliant Crypto MLM Software development company in the USA, the UK, and India | We provide white-label blockchain-based Crypto MLM software solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is the No. 1 best cryptocurrency mlm software development company in India offer smart contract-based crypto mlm software on Tron, Ethereum, BSC, Matic, and SOL services to startups and dealings Worldwide"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Cryptocurrency MLM Software Development Industry"
        />
        <meta
          name="summary"
          content="Comfygen is the Leading World-class Cryptocurrency MLM Software Development Company in India, USA."
        />

        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Cryptocurrency MLM Software Development Company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Cryptocurrency MLM Software Development Company"
          content="Comfygen is a leading White label Bitcoin MLM Software Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Cryptocurrency MLM Software Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Cryptocurrency MLM Software Development Firm in India"
        />

        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="og:type"
          content="Cryptocurrency MLM Software Development Services Provider"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData),
          }}
        />
      </Head>

      <Navbar />
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Solution techData={JSON_DATA.CryptoTrading} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <Solution techData={JSON_DATA.MLMsoftware} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />

    </>
  );
}
