import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchain.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[700px] sm:min-h-[650px] lg:min-h-[500px] bg-[#F5F5F9] animate-pulse" />
  ),
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});


const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[1000px] sm:min-h-[800px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});

import CardwithImageSection from "../../components/CardwithImageSection"

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[450px] sm:min-h-[350px] lg:min-h-[250px] bg-white animate-pulse rounded-[24px]" />
  ),
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);
const IndustryGrid = dynamic(() => import("../../components/IndustryGrid"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[600px] sm:min-h-[500px] lg:min-h-[400px] bg-gray-100 animate-pulse" />
  )
});

import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import ReviewCard from "../../components/ReviewCard";

export default function Blockchain(props) {
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

      <div className="min-h-[30px] md:min-h-[30px]">
        <BlockChainHeader />
      </div>

      <div className="overflow-hidden lg:pt-[110px] pt-16">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />

        <div className="min-h-[700px] sm:min-h-[650px] lg:min-h-[500px]">
          <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        </div>

        <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px]">
          <AboutComponent AboutData={JSON_DATA.AboutSection} />
        </div>

        <div className="min-h-[450px] sm:min-h-[350px] lg:min-h-[250px]">
          <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        </div>

        <div className="min-h-[1000px] sm:min-h-[800px] lg:min-h-[400px]">
          <Solution techData={JSON_DATA.Customized} />
        </div>


        <CardwithImageSection PlatformsData={JSON_DATA.PlatformsData} />
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px]">
          <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        </div>

        <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px]">
          <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        </div>

        <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px]">
          <WhyChooseSection pageData={JSON_DATA.pageData} />
        </div>

        <IndustryGrid />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />

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

