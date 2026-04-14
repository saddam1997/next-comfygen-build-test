import { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/ecommerceapp.json";
import dynamic from "next/dynamic";


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
import EcommerceHeader from "../../components/Newcomponet/layout/EcommerceHeader";



export default function Ecommerce(props:any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>Custom Ecommerce App Development Services | Comfygen</title>
        <meta name="description" content="Build high-performance ecommerce apps with Comfygen Technologies offering secure payments, order management, and scalable mobile commerce solutions." />
        <link rel="canonical" href="https://www.comfygen.com/e-commerce-app-development" />

        <meta name="keywords" content="Custom Ecommerce App Development, Shopping App Development, White-label Ecommerce App Solutions, eCommerce Website Development, Multivendor Ecommerce App Development, B2B & B2C Ecommerce App Development, Marketplace Ecommerce Development, Fashion eCommerce App Development, Data Analytics for Ecommerce" />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top eCommerce App Development Company in India & USA" />
        <meta name="twitter:description" content="Looking for the best eCommerce app? Comfygen is a top eCommerce app development company in India & USA, delivering powerful B2B & B2C solutions for startups and enterprises." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/e-commerce-app-development/ecommerce-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />



        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/e-commerce-app-development/ecommerce-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/e-commerce-app-development/ecommerce-app-development.webp" />
        <meta property="og:image:alt" content="Ecommerce App Development" />
        <meta property="og:url" content="https://www.comfygen.com/e-commerce-app-development" />
        <meta property="og:title" content="On-Demand eCommerce Mobile App Development Solutions" />
        <meta property="og:description" content="Develop profitable on-demand eCommerce mobile apps with Comfygen. We provide tailor-made multi-vendor marketplace apps with smart shopping features." />





        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

      </Head>

      <EcommerceHeader />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <IndustryGrid />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Solution techData={JSON_DATA.Trading} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
        <Features featuresData={JSON_DATA.featuresData} />
        <Solution techData={JSON_DATA.Industries} />
        <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
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
      `${process.env.URL}/api/v1/posts?tag=e-commerce-app-development&per_page=3`
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