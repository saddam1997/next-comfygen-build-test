import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./fashion.json";
import Navbar from "../../../components/Navbar";
import HeroSectionforHome from "../../../components/HeroSectionforHome"
import HeroSectionforHomeTest from "../../../components/HeroSectionforHomeTest";
import AppClone from "../../../components/AppClone"
const Milestones = dynamic(() => import("../../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

import FeaturesNewSection from "../../../components/FeaturesNewSection"
const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Trending from "../../../components/Trending";

const WhyChooseSection = dynamic(
  () => import("../../../components/WhyChooseSection"),
  { ssr: true }
);
import Emerging from "../../../components/Emerging";
const Consultancy = dynamic(() => import("../../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"), {
  ssr: true,
});

import TechStacks from "../../../components/TechStacks";

const CallToActionSection = dynamic(() => import("../../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../../components/ClientStories"),
  { ssr: true }
);

const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../../components/BlogSection"),
  { ssr: true }
);
import IndustryGrid from "../../../components/IndustryGrid";
import ReviewCard from "../../../components/ReviewCard";
import EcommerceHeader from "../../../components/Newcomponet/layout/EcommerceHeader";



export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Fashion App Development Company | Custom Fashion Ecommerce App Solutions
        </title>
        <meta
          name="description"
          content="Build your own fashion ecommerce app with advanced features! Comfygen is a top fashion app development company offering custom fashion shopping app solutions with AR try-on, AI recommendations, and secure payments."
        />

        <meta
          name="keywords"
          content="White-Label Fashion App Development Fashion Ecommerce App Development Fashion Retail Mobile App Development Apparel Ecommerce App Development Fashion Marketplace App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/ecommerce/fashion"
        />
        {/* <!-- Robots --> */}
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />

        {/* <!-- Compatibility Meta --> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization --> */}
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
        <meta name="apple-mobile-web-app-title" content="My App" />

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

        {/* <!-- Open Graph (OG) Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/fashion/fashion-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/fashion/fashion-og.webp"
        />
        <meta property="og:image:alt" content="Fashion App Development" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ecommerce/fashion"
        />
        <meta
          property="og:title"
          content="Multi-Vendor Fashion App Development Company | Comfygen"
        />
        <meta
          property="og:description"
          content="Create your own fashion marketplace with our multi-vendor fashion app development solutions. From vendor dashboards to real-time inventory, we build it all for you."
        />

        {/* <!-- Twitter Card Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fashion Ecommerce App Development Company | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Looking to build a stylish fashion ecommerce shopping app? Comfygen is a leading fashion ecommerce app development company offering custom fashion app solutions with AI recommendations and blockchain."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/fashion/fashion-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <title>
          Fashion Ecommerce App Development Company | Comfygen Technologies
        </title>
        <meta
          name="description"
          content="Looking to build a stylish fashion ecommerce shopping app? Comfygen is a leading fashion ecommerce app development company offering custom fashion app solutions with AI recommendations and blockchain."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData),
          }}
        />
      </Head>
      <EcommerceHeader />
      <div className="overflow-hidden ">
        <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.Nextechnologies} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <FeaturesNewSection FData={JSON_DATA.FData} />
        <Emerging emerging={JSON_DATA.EmergingData} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <Trending
          trendingData={JSON_DATA.trendingData}
          heading="Top-Rated App Development Company Recognized by Global Platforms"
        />
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
