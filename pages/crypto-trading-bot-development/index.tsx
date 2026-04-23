import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptotoken.json";

import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[700px] sm:min-h-[650px] lg:min-h-[500px] bg-[#F5F5F9] animate-pulse" />
  ),
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});

const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});

const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});


const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});



const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const TechStacks = dynamic(() => import("../../components/TechStacks"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const CardListMinimal = dynamic(
  () => import("./components/CardListMinimal"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);





export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          AI-Powered Crypto Trading Bot Development Company

        </title>
        <meta
          name="description"
          content="Comfygen’s AI-powered trading bot development services automate crypto trading. We build AI crypto trading bots with real-time market analysis, risk management."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-trading-bot-development"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-title" content="Comfygen" />
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
        <meta
          name="keywords"
          content="crypto trading bot development, AI crypto bots, binance trading bot, coinbase bot development, kraken trading bot, custom crypto bot development, automated crypto trading solutions"
        />

        <meta
          property="og:title"
          content="Top Crypto Trading Bot Development Company | AI-Powered Bots by Comfygen"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/crypto-trading-bot-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/crypto-trading-bot-development-new/crypto-trading-bot-development-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/crypto-trading-bot-development-new/crypto-trading-bot-development-og.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta
          property="og:image:alt"
          content="Crypto Trading Bot Development Company | Comfygen"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta
          property="og:description"
          content="Comfygen offers advanced crypto trading bot development for Binance, Coinbase, and Kraken. Improve your trading efficiency with secure, AI-powered bots."
        />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Crypto Trading Bot Development Company | AI-Powered Bots by Comfygen"
        />
        <meta
          name="twitter:description"
          content="Automate your trading strategies with Comfygen's AI-powered crypto trading bot development services. Compatible with Binance, Coinbase, Kraken, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/crypto-trading-bot-development-new/crypto-trading-bot-development-og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA.jsonLdData),
          }}
        />
      </Head>
      <div className="min-h-[60px] md:min-h-[70px]">
         {/* <Navbar /> */}
      </div>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <Solution techData={JSON_DATA.Trading} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Solution techData={JSON_DATA.CryptoTrading} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <Solution techData={JSON_DATA.UseCases} />
      <CardListMinimal techData={JSON_DATA.Exchanges} />
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