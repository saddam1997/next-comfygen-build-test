
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptonftexchangedevelopment.json";
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



export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Trusted NFT Exchange Development Service | NFT Trading Platform
        </title>
        <meta
          name="description"
          content="Comfygen provide trusted NFT exchange development service delivering secure, scalable NFT trading platforms with multi-chain support, wallet integration, high liquidity, and advanced security."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-nft-exchange-development"
        />

        <meta
          name="keywords"
          content="NFT Exchange Development, NFT Marketplace Development, Crypto NFT Exchange Development, NFT Platform Development Company, NFT Exchange Development Company, Custom NFT Exchange Development"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top NFT Exchange Development Company | Custom Crypto NFT Marketplace Solutions"
        />
        <meta
          name="twitter:description"
          content="Get secure, scalable NFT exchange development with custom crypto marketplace solutions. Multi-chain support, wallet integration, and top security."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/nft-exchange-development/crypto-nft-exchange-development.webp" />
        <meta name="twitter:site" content="@comfygentech" />


        <meta
          property="og:url"
          content="https://www.comfygen.com/crypto-nft-exchange-development"
        />
        <meta
          property="og:title"
          content="Top NFT Exchange Development Company | Custom Crypto NFT Marketplace Solutions"
        />
        <meta
          property="og:description"
          content="Get secure, scalable NFT exchange development with custom crypto marketplace solutions. Multi-chain support, wallet integration, and top security."
        />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/nft-exchange-development/crypto-nft-exchange-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/nft-exchange-development/crypto-nft-exchange-development.webp" />
        <meta property="og:image:alt" content="NFT Exchange Development" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>


       {/* <Navbar /> */}
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
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