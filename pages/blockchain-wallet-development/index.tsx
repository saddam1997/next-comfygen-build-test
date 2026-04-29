
import Head from "next/head";
import JSON_DATA from "./json/blockchain.json";
import dynamic from "next/dynamic";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"

import TechStacks from "../../components/TechStacks";

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

import ReviewCard from "../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);


const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true },
);

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});


const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  {
    ssr: true,
  },
);

import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});


import Solution from "../../components/Solution";
import IndustryGrid from "../../components/IndustryGrid";




export default function Blockchain(props) {
  let { initialData } = props;


  return (
    <div className="overflow-hidden">
      <Head>
        <title>Blockchain Wallet Development Services | Comfygen</title>
        <meta
          name="description"
          content="Comfygen is a leading blockchain wallet development company offering secure, scalable blockchain wallet development services with non-custodial, multi-chain, and white-label solutions for easy crypto asset management."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/blockchain-wallet-development"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Blockchain Wallet Development, Crypto Wallet Development, Multi-Chain Wallet Solutions, Enterprise Blockchain Solutions, DeFi Wallet Development, Custom Mobile and Desktop Wallets"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Blockchain Wallet Development"
        />



        <meta
          property="og:url"
          content="https://www.comfygen.com/blockchain-wallet-development"
        />
        <meta
          property="og:title"
          content="Custom Blockchain Wallet Development for Startups & Enterprises"
        />
        <meta
          property="og:description"
          content="Protect your digital assets with Comfygen’s blockchain wallet development services. Multi-chain, mobile & desktop wallets with advanced security and scalability."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/blockchain-wallet-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/blockchain-wallet-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Blockchain Wallet Development Company"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blockchain Wallet Development Company | Multi-Chain Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen builds scalable blockchain wallets trusted by enterprises, startups, and DeFi ecosystems. Secure, customizable solutions for mobile and desktop platforms."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-wallet-development/blockchain-wallet-development.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.technologyData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <IndustryGrid />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />

    </div>
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