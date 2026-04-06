
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptoexchange.json";

import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";
import AppClone from "../../components/AppClone"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Trending from "../../components/Trending";
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

import TechStacks from "../../components/TechStacks";

import InformationSection from "../../components/InformationSection"
const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true }
);

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);
import IndustryGrid from "../../components/IndustryGrid";
import ReviewCard from "../../components/ReviewCard";



export default function Ecommerce(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>Cryptocurrency Exchange Development Company | Comfygen</title>
        <meta name="description" content="Comfygen is a cryptocurrency exchange development company that builds a scalable crypto exchange platform. Expert crypto exchange development services — CEX, DEX, P2P, hybrid & white label. Contact Us." />
        <link rel="canonical" href="https://www.comfygen.com/cryptocurrency-exchange-development" />

        <meta name="keywords" content="Cryptocurrency Exchange Development, Cryptocurrency Exchange Development Company, crypto exchange development company, Cryptocurrency Exchange software development, Cryptocurrency Exchange App Development, Cryptocurrency Exchange Development Services, Hybrid Crypto Exchange Development, Cryptocurrency Exchange Development Solutions, Crypto Exchange Development solutions, White Label Crypto Exchange development, crypto exchange developer, crypto exchange platform development, crypto exchange website development company, p2p crypto exchange development, crypto trading app development company, smart contract development for crypto exchange, build a crypto exchange app, build a cryptocurrency exchange platform, white label crypto exchange software development company, white label crypto exchange development company, custom cryptocurrency exchange development, centralized crypto exchange development, decentralized exchange development company, hire crypto exchange developers" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Cryptocurrency Exchange Development Company | Comfygen" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.comfygen.com/cryptocurrency-exchange-development" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/cryptocurrency-exchange-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/cryptocurrency-exchange-development.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cryptocurrency Exchange Development" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:description" content="Comfygen is a cryptocurrency exchange development company that builds a scalable crypto exchange platform. Expert crypto exchange development services — CEX, DEX, P2P, hybrid & white label. Contact Us." />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptocurrency Exchange Development Company | Comfygen" />
        <meta name="twitter:description" content="Comfygen is a cryptocurrency exchange development company that builds a scalable crypto exchange platform. Expert crypto exchange development services — CEX, DEX, P2P, hybrid & white label. Contact Us." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/cryptocurrency-exchange-development.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData),
          }}
        />
      </Head>
      <Navbar />
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Trending trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <Solution techData={JSON_DATA.Features} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Solution techData={JSON_DATA.Networks} />
      <Consultancy consultancyData={JSON_DATA.NFTTechnologies} />
      <Solution techData={JSON_DATA.ExchangeSolutions} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <AppClone SliderDATA={JSON_DATA.Industries} />
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