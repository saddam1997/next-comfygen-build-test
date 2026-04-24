import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./poa.json";


import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});
import TechStackSection from "../../components/TechStackSection";

import AppClone from "../../components/AppClone"
const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});


const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});
const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});
import Emerging from "../../components/Emerging";
const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"
const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);

import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";

export default function Ecommerce(props) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          POA Blockchain Development Company | Secure & Scalable Solutions
        </title>
        <meta
          name="description"
          content="As leading POA blockchain development company to build secure, fast, and scalable blockchain platforms using Proof of Authority consensus for enterprises and startups."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/poa-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="POA Blockchain Development Company | Hire expert POA blockchain developers."
        />
        <meta
          property="og:facebook_description"
          content="Take your project to the next level with our exceptional DApp development company. As specialists in POA development and POA blockchain development, we offer tailored solutions to meet your specific requirements."
        />
        <meta
          property="og:twitter_title"
          content="POA development company | POA blockchain development company | DApp development company"
        />
        <meta
          property="og:twitter_description"
          content="Experience the difference with our distinguished POA blockchain development services. Our committed team offers comprehensive DApp development solutions alongside impeccable POA development expertise, positioning us as a notable POA blockchain development company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="POA Blockchain Development Company | Readymade POA Blockchain Development Company | Hire expert POA blockchain developers"
        />
        <meta
          name="summary"
          content="POA Blockchain Development Company | Readymade POA Blockchain Development Company || Comfygen Privtate Limited: Are you Looking for a Hire expert POA blockchain developers in India? Hire expert POA blockchain developers for secure and efficient NFT blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a POA Blockchain Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="POA Blockchain Development Company"
          content="Comfygen is a World Class POA Blockchain Development Industry: We Build the Future of Business, One POA Blockchain Development Services at a Time."
        />
        <meta
          name="category"
          content="POA Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="POA Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/poa-blockchain-development-company/poa-blockchain-development-company.webp"
        />
      </Head>
      {/* <BlockChainHeader /> */}
      <div className="overflow-hidden ">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <InformationSection InfoSectionData={JSON_DATA?.InfoSection} />
        <InformationSection InfoSectionData={JSON_DATA?.Considered} />
        <Solution techData={JSON_DATA.AIPowered} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.SpecialOffers} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
         <FaqSection faqData={JSON_DATA.Frequently} title="" />

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

