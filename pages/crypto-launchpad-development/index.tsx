import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptolaunchpaddevelopment.json";

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


export default function Ecommerce(props) {
  let { initialData } = props;



 


  return (
    <>
      <Head>
        <title>
          Crypto Launchpad Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen provides crypto launchpad development services with token sale management, smart contract integration, KYC/AML compliance, and investor dashboards."
        />

        <meta name="keywords" content="Crypto Launchpad Development Company, Crypto Launchpad Development, Launchpad Development Services, Crypto Launchpad Solutions, White Label Crypto Launchpad, Custom Launchpad Development" />

        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-launchpad-development"
        />


        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Top Crypto Launchpad Development Company"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/crypto-launchpad-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/crypto-launchpad-development/crypto-launchpad-development.webp"
        />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta
          property="og:description"
          content="Comfygen offers expert Crypto Launchpad development services, including custom & white-label solutions, multi-chain support, smart contract integration, token creation, and KYC/AML. Build your secure, scalable launchpad today."
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/crypto-launchpad-development/crypto-launchpad-development.webp" />
        <meta property="og:image:alt" content="Top Crypto Launchpad Development Company" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Crypto Launchpad Development Company | Custom & White-Label Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen offers expert Crypto Launchpad development services, including custom & white-label solutions, multi-chain support, smart contract integration, token creation, and KYC/AML. Build your secure, scalable launchpad today."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/crypto-launchpad-development/crypto-launchpad-development.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Crypto Launchpad Development",
              operatingSystem: "Web, Android, iOS",
              applicationCategory: "FinanceApplication",
              url: "https://www.comfygen.com/crypto-launchpad-development",
              description:
                "Comfygen offers expert Crypto Launchpad development services, including custom & white-label solutions, multi-chain support, smart contract integration, token creation, and KYC/AML.",
              author: {
                "@type": "Organization",
                name: "Comfygen Private Limited",
              },
              publisher: {
                "@type": "Organization",
                name: "Comfygen Private Limited",
                url: "https://www.comfygen.com",
              },
              image:
                "https://www.comfygen.com/comfygen-images/crypto-launchpad-development/og-crypto-launchpad-development-company.webp",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <Solution techData={JSON_DATA.Launchpads} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
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