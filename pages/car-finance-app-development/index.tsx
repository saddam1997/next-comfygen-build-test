
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";


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

import Features from "../../components/Features"

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


export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Custom Car Loan App Development Company | Loan Management Platform

        </title>
        <meta
          name="description"
          content="Build secure, scalable, and feature-rich car loan management platforms with Comfygen. As a top custom car loan app development company, we deliver apps with EMI tracking, automated payments, and seamless user experiences."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/car-finance-app-development"
        />


        <meta
          property="og:title"
          content="Car Finance Mobile App Development | Build Smart Auto Loan Apps"
        />
        <meta
          property="og:description"
          content="Comfygen Technologies delivers powerful car finance mobile apps with document upload, KYC, EMI simulation, and repayment management. We help fintech brands transform auto loan services through seamless digital solutions."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/car-finance-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/car-finance-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/car-finance-app-development/og.webp"
        />
        <meta property="og:image:alt" content="Car Finance App Development" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Car Finance App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Looking for a car finance app development company? Comfygen Technologies offers feature-rich, user-friendly auto loan apps with real-time approvals, secure APIs, and repayment tracking. Hire our expert developers today!"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/car-finance-app-development/og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>
      <Navbar />
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.featuresData} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <Solution techData={JSON_DATA.NFTBenefits} />
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