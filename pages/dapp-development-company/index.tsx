import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/dapp.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls";


/* ================= SKELETON SYSTEM ================= */

const Skeleton = ({ h }: any) => (
  <div className={`${h} w-full bg-gray-100 animate-pulse`} />
);

/* ================= DYNAMIC COMPONENTS ================= */

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true }
);

import AboutComponent from "../../components/Abouts/AboutComponent";

import Networks from "../../components/Networks";

const Consultancy = dynamic(() => import("../../components/Consultancy"),
  { ssr: true }
);

const TechStacks = dynamic(() => import("../../components/TechStacks"),
  { ssr: true }
);

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"),
  { ssr: true }
);

import IndustryGrid from "../../components/IndustryGrid";

import Solution from "../../components/Solution";

import WhyChooseSection from "../../components/WhyChooseSection";

import HireSection from "../../components/HireSection";

import CallToActionSection from "../../components/CallToActionSection";


const ReviewCard = dynamic(() => import("../../components/ReviewCard"),
  { ssr: true }
);

const FaqSection = dynamic(() => import("../../components/FaqSection"),
  { ssr: true, }
);

const BlogSection = dynamic(() => import("../../components/BlogSection"),
  { ssr: true }
);

/* ================= SECTION ENGINE (IMPORTANT FIX) ================= */

export default function Ecommerce(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Enterprise DApp Development Company | Blockchain Solutions
        </title>

        {/* Primary Meta */}
        <meta
          name="description"
          content="Build secure and scalable decentralized applications with our expert DApp development services for Web3, DeFi, NFT marketplaces, and enterprises."
        />
        <meta
          name="keywords"
          content="dApp Development Services, Decentralized Application Development, Custom dApp Development, Best dApp Development Company, DeFi Platform Development, NFT Marketplace Development, Web3 Application Development, Ethereum dApp Development, Solana dApp Development, Polygon dApp Development, BNB Chain dApp Development, Smart Contract Development, Blockchain App Development"
        />

        {/* Canonical Tag */}

        <link
          rel="canonical"
          href="https://www.comfygen.com/dapp-development-company "
        ></link>
        {/* Viewport + Mobile */}
        <meta
          name="apple-mobile-web-app-title"
          content="dApp Development Company"
        />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a dApp Development Company in India, the USA, startup, or organization."
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />

        {/* Extended SEO */}
        <meta
          name="abstract"
          content="Decentralized application development | dApp Development Company | dApp developers | dApp Development Services"
        />
        <meta
          name="summary"
          content="Blockchain dApp Development Company | Comfygen Private Limited: Are you Looking for a blockchain dApp Development Company in India? Hire our expert blockchain dApp developers for secure and efficient blockchain development solutions."
        />
        <meta
          name="Decentralized Application Development Company"
          content="Comfygen is a World Class Decentralized Application Development Agency."
        />
        <meta
          name="category"
          content="Decentralized Application Development Organisation"
        />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Decentralized application development Firm in India"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.comfygen.com/dapp-development-company"
        />

        {/* Extra OG for Facebook */}
        <meta
          property="og:facebook_title"
          content="Looking for dApp Development Services | Hire Top dApps developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen provide top-notch dApp development services to help startups and enterprises build scalable and robust decentralized applications."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="dApp Development Company | Custom Blockchain Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a top dApp development company delivering secure and scalable decentralized applications on Ethereum, Solana, Polygon, BNB Chain, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/dapp-development-company/dApp-development-company.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Facebook Meta  */}

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/dapp-development-company/dApp-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/dapp-development-company/dApp-development-company.webp"
        />
        <meta property="og:image:alt" content="dApp Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/dapp-development-company "
        />
        <meta
          property="og:title"
          content="dApp Development Company | DeFi & NFT Solutions – Comfygen"
        />
        <meta
          property="og:description"
          content=" Comfygen builds secure, scalable dApps for DeFi, NFT marketplaces, and more. Launch your blockchain project on Ethereum, Solana, Polygon, and BNB Chain with our expert team."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <div className="overflow-x-hidden">

        {/* ================= FIXED HEADER (REAL CLS FIX) ================= */}

        {/* ================= HERO (MOST IMPORTANT FIX) ================= */}
        <section className="min-h-[85vh] md:min-h-[75vh]">
          <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        </section>
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.Trading} />
        <Networks Data={JSON_DATA.BlockchainNetworks} />
        <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
        <TechStacks
          TabData={JSON_DATA.Tabs}
          TechData={JSON_DATA.TechstackData}
          Default={JSON_DATA.Tabs?.[0]}
        />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <IndustryGrid />
        <Solution techData={JSON_DATA.BusinessOriented} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
        <FaqSection faqData={JSON_DATA.Frequently} />
        <BlogSection initialData={initialData ?? []} />

      </div>

    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.URL}/api/v1/posts?per_page=3`);

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
