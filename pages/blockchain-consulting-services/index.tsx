import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchainconsulting.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import GuidSectionBlockchain from "./components/GuidSectionBlockchain";

/* ================= SKELETON SYSTEM ================= */

const Skeleton = ({ h }: any) => (
  <div className={`${h} w-full bg-gray-100 animate-pulse`} />
);

/* ================= DYNAMIC COMPONENTS ================= */

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const AboutComponent = dynamic(
  () => import("../../components/Abouts/AboutComponent"),
  { ssr: true, loading: () => <Skeleton h="h-[400px]" /> }
);

const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  { ssr: true, loading: () => <Skeleton h="h-[300px]" /> }
);

const Solution = dynamic(
  () => import("../../components/Solution"),
  { ssr: true, loading: () => <Skeleton h="h-[400px]" /> }
);

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const IndustryGrid = dynamic(
  () => import("../../components/IndustryGrid"),
  { ssr: true, loading: () => <Skeleton h="h-[400px]" /> }
);

const ProcesSection = dynamic(
  () => import("../../components/ProcesSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const TechStacks = dynamic(
  () => import("../../components/TechStacks"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const Emerging = dynamic(
  () => import("../../components/Emerging"),
  { ssr: true, loading: () => <Skeleton h="h-[400px]" /> }
);

const HireSection = dynamic(
  () => import("../../components/HireSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const ReviewCard = dynamic(
  () => import("../../components/ReviewCard"),
  { ssr: true, loading: () => <Skeleton h="h-[400px]" /> }
);

const FaqSection = dynamic(
  () => import("../../components/FaqSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true, loading: () => <Skeleton h="h-[500px]" /> }
);

/* ================= SECTION ENGINE ================= */

const Section = ({ children }: any) => (
  <section className="w-full py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4">{children}</div>
  </section>
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
    <div className="overflow-x-hidden">

        {/* ================= FIXED HEADER (REAL CLS FIX) ================= */}
        <header className="">
          <BlockChainHeader />
        </header>

        {/* reserved space (CRITICAL FIX) */}
        <div className="h-[70px] md:h-[80px]" />

        {/* ================= HERO (CRITICAL CLS FIX) ================= */}
        <section className="min-h-[85vh] md:min-h-[100vh]">
          <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        </section>

        {/* ================= SECTION ENGINE ================= */}

        <Section>
          <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        </Section>

        <Section>
          <AboutComponent AboutData={JSON_DATA.AboutSection} />
        </Section>

        <Section>
          <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        </Section>

        <Section>
          <Solution techData={JSON_DATA.AICrypto} />
        </Section>

        <Section>
          <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        </Section>

        <Section>
          <IndustryGrid />
        </Section>

        <Section>
          <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
        </Section>

        <Section>
          <TechStacks
            TabData={JSON_DATA.Tabs}
            TechData={JSON_DATA.TechstackData}
            Default={JSON_DATA.Tabs?.[0]}
          />
        </Section>

        <Section>
          <WhyChooseSection pageData={JSON_DATA.pageData} />
        </Section>

        <Section>
          <Emerging emerging={JSON_DATA.EmergingData} />
        </Section>

        <Section>
          <HireSection HireDeveloper={JSON_DATA.HireNFTDeveloper} />
        </Section>

        <Section>
          <GuidSectionBlockchain />
        </Section>

        <Section>
          <ReviewCard testimonials={JSON_DATA.ReviewData} />
        </Section>

        <Section>
          <FaqSection faqData={JSON_DATA.Frequently} />
        </Section>

        <Section>
          <BlogSection initialData={initialData ?? []} />
        </Section>

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

