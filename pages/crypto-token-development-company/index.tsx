
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptotoken.json";
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
const Trending = dynamic(
  () => import("../../components/Newcomponet/comman/Trending"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);






export default function Ecommerce(props) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>Best Crypto Token Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="As the best crypto token development company, Comfygen delivers secure, scalable, and feature-rich blockchain tokens with smart contracts, ICO, DeFi, and NFT support."
        />

        <meta name="keywords" content="Crypto Token Development, Utility Token Development, Security Token Development, DeFi Token Development, Custom Blockchain Token Solutions, Blockchain Token Development Company, Token Creation Services, Cryptocurrency Token Development, Tokenomics Development, Smart Contract Token Development, ERC20 Token Development, BEP20 Token Development" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/crypto-token-development-company" />


        <meta name="apple-mobile-web-app-title" content="Token Development" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Token Development Company | Custom Token Creation Services" />
        <meta name="twitter:description" content=" Launch your own crypto token with Comfygen. We build secure, scalable, and audited tokens on Ethereum, BNB, Polygon, and more. Get full blockchain integration and expert support." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-og.webp" />
        <meta property="og:image:alt" content="Crypto Token Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/crypto-token-development-company" />
        <meta property="og:title" content="Crypto Token Development | Secure, Scalable & Custom Solutions" />
        <meta property="og: description" content=" Launch your own crypto token with Comfygen. We offer secure, scalable, and audit-ready token development on Ethereum, BNB Chain, Polygon, and other leading blockchains." />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

      </Head>

      <Navbar />
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Leading Blockchain Networks for Token Development"
      />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
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