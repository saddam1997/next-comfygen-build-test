
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cardano.json";

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

import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import IndustryGrid from "../../components/IndustryGrid";

export default function Ecommerce(props) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Best Cardano Blockchain Development Company | Cardano DApps & Solutions
        </title>
        <meta
          name="description"
          content="Comfygen is the best Cardano blockchain development company, delivering secure, scalable, and customized Cardano DApps, smart contracts, NFT marketplaces, and DeFi platforms."
        />
        <link rel="canonical" href="https://www.comfygen.com/cardano-blockchain-development-company" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* keywords */}
        <meta name="keywords" content="Cardano Blockchain Development, Smart Contract Development on Cardano, Cardano dApps Development, Token Creation on Cardano, NFT Integration on Cardano, Decentralized Finance (DeFi) Solutions, Enterprise Blockchain Solutions, Cardano Wallet Development, Staking and Governance Solutions, Cardano Blockchain Consulting" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cardano Blockchain Development Services | Comfygen" />
        <meta name="twitter:description" content="Build secure, scalable, and decentralized applications with Comfygen’s Cardano Blockchain Development services. Leverage smart contracts, dApps, and token solutions for your business." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/cardano-blockchain-development-company/cardano-blockchain-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/cardano-blockchain-development-company/cardano-blockchain-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/cardano-blockchain-development-company/cardano-blockchain-development-company.webp" />
        <meta property="og:image:alt" content="Cardano Blockchain Development" />
        <meta property="og:url" content="https://www.comfygen.com/data/sales-dashboard" />
        <meta property="og:title" content="Cardano Blockchain Development Services | Comfygen" />
        <meta property="og:description" content="Comfygen delivers expert Cardano Blockchain Development solutions, including smart contracts, decentralized apps, and token creation, ensuring secure, scalable, and efficient blockchain applications" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <IndustryGrid />
        <Consultancy consultancyData={JSON_DATA.ModelsSec} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
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


