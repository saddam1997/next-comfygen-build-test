
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchainconsulting.json";

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

import Emerging from "../../components/Emerging";

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

import IndustryGrid from "../../components/IndustryGrid";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";

const GuidSectionBlockchain = dynamic(
  () => import("./components/GuidSectionBlockchain"),
  { ssr: true }
);



export default function rummy(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Blockchain Consulting Services India and USA Enterprise blockchain Solutions
        </title>
        <meta
          name="description"
          content="Comfygen offers blockchain consulting services in India and USA to help businesses implement secure, scalable, and innovative blockchain solutions, smart contracts, and decentralized apps."
        />
        <meta name="keywords" content="Blockchain Consultancy Company, Blockchain Consultancy Services, Blockchain Strategy Consulting, Enterprise Blockchain Solutions, Custom Blockchain Development, DeFi Consulting, NFT Project Consulting, Smart Contract Consulting, Ethereum Consulting, Polygon Consulting, Solana Consulting, Hyperledger Consulting, Blockchain Architecture Design, Blockchain Implementation Support"
        />

        <link rel="canonical" href="https://www.comfygen.com/blockchain-consulting-services " />

        <meta name="apple-mobile-web-app-title" content="Blockchain Consulting Services" />
        <meta name="keywords" content="Blockchain Consulting Company, Blockchain Consulting Services, Blockchain Solutions" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/blockchain-consulting-services/og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/blockchain-consulting-services/og.webp" />
        <meta property="og:image:alt" content="Blockchain Consulting Company - Comfygen" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.comfygen.com/blockchain-consulting-services " />
        <meta property="og:title" content="Blockchain Consulting Company | Expert Blockchain Consulting Services" />
        <meta property="og:description" content="Partner with Comfygen, a trusted Blockchain Consulting Company. We help enterprises, startups, and innovators design, develop, and implement blockchain solutions—covering dApps, DeFi, NFTs, smart contracts, and more." />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blockchain Consulting Company | Expert Blockchain Consulting Services" />
        <meta name="twitter:description" content="Comfygen offers blockchain consulting services for enterprises and startups. Build secure, scalable, and future-ready blockchain solutions tailored to your business." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/blockchain-consulting-services/og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      <div className="">
        <BlockChainHeader />
      </div>

      <div className="overflow-hidden lg:pt-16 pt-16">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Solution techData={JSON_DATA.AICrypto} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <IndustryGrid />
        <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <Emerging emerging={JSON_DATA.EmergingData} />
        <HireSection HireDeveloper={JSON_DATA.HireNFTDeveloper} />
        <GuidSectionBlockchain />
       
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

