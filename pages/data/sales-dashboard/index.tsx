import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import dynamic from "next/dynamic";

import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
import TechStacks from "../../../components/TechStacks";

const ClientStories = dynamic(() => import("../../../components/ClientStories"), {
  ssr: true,
});
const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"),
  { ssr: true }
);
import ReviewCard from "../../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);
const CallToActionSection = dynamic(
  () => import("../../../components/CallToActionSection"),
  {
    ssr: true,
  },
); const ProcesSection = dynamic(
  () => import("../../../components/ProcesSection"),
  {
    ssr: true,
  },
);


const WhyChooseSection = dynamic(
  () => import("../../../components/WhyChooseSection"),
  { ssr: true },
);


const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});

import AboutComponent from "../../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../../components/BlogSection"), {
  ssr: true,
});


import Solution from "../../../components/Solution";


import IndustryGrid from "../../../components/IndustryGrid";




export default function Mobile(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>Sales Performance Dashboards Using Microsoft Power BI solution | Comfygen</title>

        <meta
          name="description"
          content="Comfygen offers interactive sales performance dashboards using Microsoft Power BI to help sales teams track leads, monitor KPIs, and optimize the sales funnel."
        />
        <meta
          name="keywords"
          content="Power BI Sales Dashboard Development, Data Visualization, Sales Analytics Solutions, Custom Power BI Reports, Predictive Sales Modeling"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/sales-dashboard"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
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
        <meta name="apple-mobile-web-app-title" content="Sales Dashboard" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/sales-dashboard/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/sales-dashboard/og.webp"
        />
        <meta property="og:image:alt" content="Power BI Sales Dashboard" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/sales-dashboard"
        />
        <meta
          property="og:title"
          content="Power BI Sales Dashboards | Real-Time Sales Insights"
        />
        <meta
          property="og:description"
          content="Visualize, track, and optimize your sales performance with interactive dashboards built in Microsoft Power BI. Turn your sales data into actionable insights with Comfygen."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Power BI Sales Dashboards | Real-Time Sales Insights"
        />
        <meta
          name="twitter:description"
          content="Track revenue, monitor sales KPIs, and gain real-time insights with Microsoft Power BI Sales Dashboards. Transform your sales data into actionable strategies."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/sales-dashboard/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA.jsonLdData),
          }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.cardData} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <IndustryGrid />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
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





