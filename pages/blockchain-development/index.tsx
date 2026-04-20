import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchain.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import IndustryGrid from "../../components/IndustryGrid";

/* ================= SKELETON ================= */

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

const Solution = dynamic(
  () => import("../../components/Solution"),
  { ssr: true, loading: () => <Skeleton h="h-[400px]" /> }
);

const CardwithImageSection = dynamic(
  () => import("../../components/CardwithImageSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const Consultancy = dynamic(
  () => import("../../components/Consultancy"),
  { ssr: true, loading: () => <Skeleton h="h-[400px]" /> }
);

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  { ssr: true, loading: () => <Skeleton h="h-[300px]" /> }
);

const ProcesSection = dynamic(
  () => import("../../components/ProcesSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const TechSection = dynamic(
  () => import("../../components/TechSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
);

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true, loading: () => <Skeleton h="h-[450px]" /> }
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

/* ================= SECTION ENGINE (IMPORTANT FIX) ================= */

const Section = ({ children }: any) => (
  <section className="w-full py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4">{children}</div>
  </section>
);

export default function Blockchain(props: any) {
  let { initialData } = props;
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

      <div className="overflow-x-hidden">

        {/* ================= FIXED HEADER (REAL CLS FIX) ================= */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
          <BlockChainHeader />
        </header>

        {/* reserved space (NO CLS) */}
        <div className="h-[60px] md:h-[70px]" />

        {/* ================= HERO (CRITICAL FIX) ================= */}
        <section className="min-h-[85vh] md:min-h-[75vh]">
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
          <Solution techData={JSON_DATA.Customized} />
        </Section>

        <Section>
          <CardwithImageSection PlatformsData={JSON_DATA.PlatformsData} />
        </Section>

        <Section>
          <Consultancy consultancyData={JSON_DATA.consultancyData} />
        </Section>

        <Section>
          <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        </Section>

        <Section>
          <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        </Section>

        <Section>
          <WhyChooseSection pageData={JSON_DATA.pageData} />
        </Section>

        <Section>
          <TechSection TechStack={JSON_DATA.TechStack} />
        </Section>

        <Section>
          <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        </Section>

        <Section>
          <ReviewCard testimonials={JSON_DATA.ReviewData} />
        </Section>

        <Section>
          <FaqSection faqData={JSON_DATA.Frequently} title="" />
        </Section>

        <Section>
          <BlogSection initialData={initialData ?? []} />
        </Section>

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

