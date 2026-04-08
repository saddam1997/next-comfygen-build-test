
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowallet.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

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

        <title>
          AI-Powered Crypto Wallet Development Company | Secure Wallet Solutions
        </title>

        <meta
          name="description"
          content="Build intelligent and secure digital wallets with our AI-powered crypto wallet development company. We deliver smart, scalable, and feature-rich wallet solutions for modern businesses."
        />
        {/* keywords */}
        <meta name="keywords" content="AI Crypto Wallet Development, Cryptocurrency Wallet Development, Crypto Wallet Development, Smart Wallet Analytics, Fraud Detection with AI, Custom AI Crypto Wallet Solutions, Blockchain Wallet Security Solutions, DeFi Wallet Integration, Multi-Chain Crypto Wallets, AI-Driven Transaction Monitoring, Biometric Authentication Wallets, Predictive Analytics for Crypto Wallets, Crypto Wallet App Development, AI in Blockchain Security, White-Label Crypto Wallet Solutions, Crypto Wallet for Fintech Startups, AI-Based Cold Wallet Solutions, AI-Based Hot Wallet Solutions" />

        {/* robots */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        {/* canonical */}
        <link rel="canonical" href="https://www.comfygen.com/crypto-wallet-development" />



        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Cryprto Wallet Development" />


        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />


        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Based Crypto Wallet Development Services | Smarter, Safer Wallets" />
        <meta name=" twitter: description" content="Build next-gen AI-powered crypto wallets with Comfygen. Enhance security, automate transactions, and deliver intelligent asset management across multiple blockchains." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/crypto-wallet-development/crypto-wallet-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/crypto-wallet-development/crypto-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/crypto-wallet-development/crypto-wallet-development.webp" />
        <meta property="og:image:alt" content="AI-Based Crypto Wallet Development" />
        <meta property="og:url" content="https://www.comfygen.com/crypto-wallet-development " />
        <meta property="og:title" content="AI Crypto Wallet Development by Comfygen | Intelligent, Secure & Multi-Chain" />
        <meta property="og: description" content=" Unlock the power of AI with Comfygen's crypto wallet development services. Experience smart automation, adaptive security, and seamless multi-chain asset management." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <Navbar />
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Solution techData={JSON_DATA.AICrypto} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <IndustryGrid />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireNFTDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />

    </>
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=crypto-Wallet-development&per_page=3`
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