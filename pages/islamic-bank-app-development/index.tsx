import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/islamicbankappdevelopment.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
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
  ssr: true
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});



export default function Mobile(props) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Custom Islamic Banking App Development Company

        </title>
        <meta
          name="description"
          content="Build secure and Shariah-compliant Islamic banking apps with ethical, interest-free financial models, advanced security, and scalable digital banking solutions."
        />
        <meta
          name="keywords"
          content="Custom Islamic banking app development, Zakat calculators and donation modules, Integration with core Islamic banking systems, Blockchain-Based Islamic Banking App Development, AI & ML-Based Islamic Banking App Development"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/islamic-bank-app-development"
        />
        <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
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

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Islamic Banking App Development Company"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/islamic-bank-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-og.webp"
        />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta
          property="og:description"
          content="Comfygen is a leading Islamic banking app development company offering Shariah-compliant mobile and web banking solutions. Develop custom Islamic Banking apps with Murabaha, Zakat, Takaful, and halal finance features."
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-og.webp" />
        <meta property="og:image:alt" content="Islamic Banking App Development Company | Shariah-Compliant Finance Solutions" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Islamic Banking App Development Company"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a leading Islamic banking app development company offering Shariah-compliant mobile and web banking solutions. Develop custom Islamic Banking apps with Murabaha, Zakat, Takaful, and halal finance features."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/islamic-banking-app-development/islamic-banking-app-development-og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>


      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.Benefits} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.Trading} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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