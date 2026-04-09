
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";


import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import CardGrid from "../../components/CardGrid";

import Features from "../../components/Features"

import AppCardClones from "../../components/AppCardClones";

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

import Emerging from "../../components/Emerging";

const AppCard = dynamic(() => import("../../components/AppCard"), {
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

import Trending from "../../components/Trending";

const BusinessSolustion = dynamic(() => import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});



export default function Ecommerce(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>Custom Dating App Development Company in India | Comfygen</title>
        <meta name="description" content=" Comfygen is a top dating app development company offering custom, secure, and AI-powered dating app development services for startups and enterprises." />
        <link rel="canonical" href="https://www.comfygen.com/dating-app-development" />

        <meta name="keywords" content="Matchmaking Dating Apps Development, Niche Dating App Development, Social Dating App Development, Video Dating App Development, Casual Dating App Development, Astrology Dating App Development, Community-Based Dating App Development, Android Dating App Development, iOS Dating App Development, Dating Website Development, Tinder Clone Development, AI-Based Matchmaking, AI-based Dating App Development, Blockchain-based Dating App Development" />


        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:url" content="https://www.comfygen.com/dating-app-development" />
        <meta property="og:title" content="Custom Dating App Development Company in India | Comfygen" />
        <meta property="og:description" content="Comfygen is a top dating app development company offering custom, secure, and AI-powered dating app development services for startups and enterprises." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/dating-app-development/dating-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/dating-app-development/dating-app-development.webp" />
        <meta property="og:image:alt" content="Dating App Development" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:13:21+00:00" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Dating App Development Company in India | Comfygen" />
        <meta name="twitter:description" content="Comfygen is a top dating app development company offering custom, secure, and AI-powered dating app development services for startups and enterprises." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/dating-app-development/dating-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>
      <Navbar />
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Trending trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <CardGrid techData={JSON_DATA.GridData} />
      <AppCard Data={JSON_DATA.CardClone} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <BusinessSolustion imageSrc="https://www.comfygen.com/comfygen-images/dating-app-development/ai-dating.webp" BusinessSolustion={JSON_DATA.BusinessSolustion} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <Emerging emerging={JSON_DATA.EmergingData} />
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
      `${process.env.URL}/api/v1/posts?tag=dating-app-development&per_page=3`
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