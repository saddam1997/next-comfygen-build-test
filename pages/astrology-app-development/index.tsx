
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./Astrology.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import AppClone from "../../components/AppClone"

const Features = dynamic(() => import("../../components/Features"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
});

const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
});


const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const TechStacks = dynamic(() => import("../../components/TechStacks"), {
  ssr: false,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true
});


const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});


const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});


import Trending from "../../components/Trending";

const BusinessSolustion = dynamic(() => import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"), {
  ssr: true,
});



export default function ClinicalApp(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Astrology App Development Company in India | Comfygen
        </title>
        <meta
          name="description"
          content="Looking for an astrology app development company in India to take your astrology business online? Comfygen offers advanced astrology app development services with AI-powered & Blockchain for startups."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/astrology-app-development"
        />

        <meta
          name="keywords"
          content="Astrology App Development, Horoscope App Development, Kundli App Development, Panchang App Development, Numerology App Development, AI Astrology App, AR Horoscope App, Develop Astrology App like Astrotalk"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:title" content="Best Astrology App Development Company | Comfygen" />
        <meta
          property="og:description"
          content="Build powerful, AI-driven astrology apps with Comfygen – a trusted astrology app development company for personalized, real-time horoscope, kundli, and numerology apps."
        />
        <meta property="og:url" content="https://www.comfygen.com/astrology-app-development" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Astrology App Development Services" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Astrology App Development Company | Custom Astrology Solutions" />
        <meta
          name="twitter:description"
          content="Partner with Comfygen – a leading astrology app development company delivering AI, Blockchain, and AR/VR-powered astrology apps for startups and astrologers worldwide."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <AppClone SliderDATA={JSON_DATA.Industries} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Solution techData={JSON_DATA.Trading} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <Solution techData={JSON_DATA.Benefits} />
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
      `${process.env.URL}/api/v1/posts?tag=astrology-app-development&per_page=3`
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
