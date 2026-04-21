import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./polygonblockchain.json";

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

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import InformationSection from "../../components/InformationSection"

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
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

import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import ClientStories from "../../components/ClientStories";
import ReviewCard from "../../components/ReviewCard";

export default function Polygon(props:any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Polygon Blockchain Development Company | Web3 App Development
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Polygon blockchain development company helping businesses build high-performance Web3 apps, NFT marketplaces, and brand-driven blockchain solutions"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/polygon-blockchain-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Hire the Best Polygon Blockchain Development Company in INDIA"
        />
        <meta
          property="og:description"
          content="Comfygen, a leading Polygon Blockchain Development Company in India, offers scalable, secure, and cost-effective Polygon blockchain development services. Contact us today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/polygon-blockchain-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/Polygon-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Polygon Blockchain Development Company | Polygon Development Company | Polygon NFT Marketplace Development"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen offers a complete range of Polygon blockchain development services for better scalability, usability, robustness in Ethereum solutions."
        />
        <meta
          property="og:twitter_title"
          content="Polygon Blockchain Development Company | Polygon Development Company | Polygon NFT Marketplace Development"
        />
        <meta
          property="og:twitter_description"
          content="Check out our comprehensive Polygon blockchain development services that help different businesses utilize the potential of blockchain technology to the fullest. Let our premium Polygon blockchain development company help you build dApps on blockchain that are suitable for your business"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Polygon Blockchain Development Industry | Polygon Blockchain Development Services"
        />
        <meta
          name="summary"
          content="Polygon Blockchain Development: We Build the Future of Blockchain, the Polygon Blockchain Development team in crafting the future of blockchain through the creation of decentralized applications (DApps) that leverage the capabilities of the Polygon network. "
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a polygon blockchain development agency in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Polygon Blockchain Development Organization in India, USA"
          content="Comfygen is a leading Polygon Blockchain Development Services: Powering the Next Generation of Decentralized Applications"
        />
        <meta
          name="category"
          content="Polygon Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Polygon Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Polygon Blockchain Development Services Provider"
        />
      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden ">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <InformationSection InfoSectionData={JSON_DATA?.InfoSection} />
        <InformationSection InfoSectionData={JSON_DATA?.Potential} />
        <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.Benefits} />
        <InformationSection InfoSectionData={JSON_DATA?.Disney} />
        <Solution techData={JSON_DATA.ProvenProcess} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
          <ReviewCard testimonials={JSON_DATA.ReviewData}/>
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
