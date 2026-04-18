import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchain.json";
import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import HeroSectionforHome from "../../components/HeroSectionforHome"
import HeroSectionforcls from "../../components/HeroSectionforcls"
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

import CardwithImageSection from "../../components/CardwithImageSection"

import AppClone from "../../components/AppClone"

import FeaturesNewSection from "../../components/FeaturesNewSection"

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import ComparisonSection from "../../components/ComparisonSection"

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});
const CardFeatures = dynamic(
  () => import("../../components/CardFeatures"),
  { ssr: true }
);
const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
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

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});
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
import IndustryGrid from "../../components/IndustryGrid";

const GuidSectionBlockchain = dynamic(
  () => import("./components/GuidSectionBlockchain"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import ReviewCard from "../../components/ReviewCard";

export default function Blockchain(props) {
  let { initialData } = props;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  return (
    <div className="overflow-hidden">
      <Head>
        <title>
          Blockchain App Development Company | Custom dApp Solutions
        </title>
        <meta
          name="description"
          content="As  a leading blockchain app development company to build secure, scalable, and high-performance dApps, smart contracts, and enterprise blockchain solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/blockchain-development"
        />
        <meta
          name="keywords"
          content="blockchain development company, blockchain development services, blockchain app development services, blockchain development solutions, blockchain development service, blockchain software development company, blockchain software development services, custom blockchain development company, blockchain development services company"
        />



        <meta
          property="og:title"
          content="Blockchain Development Company | Blockchain App Development"
        />
        <meta
          property="og:description"
          content="Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/blockchain-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Best Blockchain Development Company in India"
        />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="fb:page_id" content="110909321596135" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="twitter:title"
          content="Blockchain Development Company | Blockchain App Development"
        />
        <meta
          name="twitter:description"
          content="Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA.jsonLdData),
          }}
        />
      </Head>
      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[110px] pt-16">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        {/* <HeroSectionforcls herosection={JSON_DATA.Herosection} /> */}
        {/* <Milestones /> */}
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Solution techData={JSON_DATA.Customized} />
        <CardwithImageSection PlatformsData={JSON_DATA.PlatformsData} />
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <IndustryGrid />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
        {/* <TestimonialSection testimonials={JSON_DATA.testimonialData} /> */}
        {/* <GuidSectionBlockchain /> */}
        <FaqSection faqData={JSON_DATA.Frequently} title="" />
        <BlogSection initialData={initialData} />



      </div>

    </div>

  );
}


export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=blockchain-development&per_page=3`
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

