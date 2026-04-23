import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/clicnicalApp.json";

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

export default function ClinicalApp(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Clinical Application Development Company | Healthcare App Solutions

        </title>
        <meta
          name="description"
          content="As a best clinical application development company we delivers scalable healthcare solutions, including EHR integration, telehealth apps, and patient management systems."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/clinical-application-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top Online Clinical Application Development Company In India!"
        />
        <meta
          property="og:facebook_description"
          content="As the premier Clinical Application Development Company in India, Comfygen delivers top-notch Online Clinical Application Development Services for both Android and iOS platforms. Our team of experts combines state-of-the-art software development with deep industry knowledge to create custom clinical applications that revolutionize patient care, streamline clinical workflows and access healthcare services. Let Comfygen be your partner in shaping the future of digital healthcare solutions."
        />
        <meta
          property="og:title"
          content="Best Clinical Application Development Company In India & The USA"
        />
        <meta
          property="og:twitter_description"
          content="Discover top-notch Online Clinical App Development Services from Comfygen In India & The USA for both Android and iOS platforms. Our expertise combines Clinical Application Development and Clinical Software Development to revolutionize patient care and streamline healthcare services. Let us be your partner in shaping the future of digital healthcare solutions!"
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta
          name="robots"
          content="imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta
          name="abstract"
          content="Clinical Application Development Company | Clinical App Development Services | Comfygen"
        />
        <meta
          name="summary"
          content="We offer top-notch Clinical Application Development Services in India, specializing in creating medical applications for doctors, clinics, and hospitals. Our expert team is dedicated to enhancing and updating your Clinical Application to meet the latest standards."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom Clinical Application and Software Development Services & Solutions in India! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="On-Demand Clinical App Development Company in India"
          content="Are you looking to hire the best Clinical Application Development Agency In India & The USA for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="Clinical Application Development Company In India & The USA : Find Expert Clinical Application and Software Developers for Clinical Application and Software development services with Expertise in Android app development and iOS app development! We are providing you a better Clinical Application Development Service in India. We help to develop medical applications for doctors, clinics, hospitals. Our skilled team helps you to develop the updated version of your Clinical Application."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Clinical Application Design and User Experience company In India & The USA- We builds unique online Clinical Application for patients, doctors and healthcare providers, and individual doctors."
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          name="og:country-name"
          content="US,CA,GB,AD,AU,AT,BS,BH,IO,KM,CU,AR,CW,CY,DK,DM,EG,FK,FI,FR,DE,GR,GL,HK,IS,IN,ID,IT,JP,JE,JO,KW,KG,KR,MX,FM,NZ,NI,OM,PE,PH,PL,PT,QA,RO,RU,SA,SG,SE,SZ,CH,TH,TR,TN,UA,UM,AE,039,155,154,151,150"
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <meta
          property="og:type"
          content="Hire Best Clinical Application Development Company In India & The USA| offshore Clinical Application developer or Programmers"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />

      </Head>

       {/* <Navbar /> */}
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories/>
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
