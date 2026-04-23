
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";

import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import AppClone from "../../components/AppClone"

import Features from "../../components/Features"

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});
import Trending from "../../components/Trending";
const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  {  ssr: true }
)
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



import BusinessSolustion from "../../components/Newcomponet/SectionCompoent/BusinessSolustion";
import AppCard from "../../components/AppCard";
import CostTable from "./CostTable";


export default function Ecommerce(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
        Medicine Delivery App Development Company in India | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top medicine delivery app development company in India. We build HIPAA-compliant, AI-powered pharmacy delivery apps like 1mg & PharmEasy. Get a free quote."
        />

        <meta
          name="keywords"
          content="Medicine Delivery App Development, Medicine Delivery App Development Company, Medicine Delivery App Development Services, Best Medicine Delivery App Development Company, Best Medicine Delivery App Development, Medical Delivery Application Development Services, Medical Delivery Application Development Company, Online Medicine Delivery App Development Company, Medicine Doorstep Delivery App Development, Custom Medicine Delivery App Development Company, Medicine Delivery App Development Solution, Medicine Delivery App Developers "
        />

        {/* <!-- Canonical Tag --> */}
        <link
          rel="canonical"
          href="https://www.comfygen.com/medicine-delivery-app-development"
        />

        {/* <!-- Robots → */}
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}

        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medicine Delivery App Development Company in India | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a top medicine delivery app development company in India. We build HIPAA-compliant, AI-powered pharmacy delivery apps like 1mg & PharmEasy. Get a free quote."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/media/og-images/medicine-delivery-app-development-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta
          property="og:image"
          content="https://www.comfygen.com/media/og-images/medicine-delivery-app-development-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/media/og-images/medicine-delivery-app-development-og.webp"
        />
        <meta
          property="og:image:alt"
          content="Medicine Delivery App Development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/medicine-delivery-app-development"
        />
        <meta
          property="og:title"
          content="Medicine Delivery App Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a top medicine delivery app development company in India. We build HIPAA-compliant, AI-powered pharmacy delivery apps like 1mg & PharmEasy. Get a free quote."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
       <Trending trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
       <AppClone SliderDATA={JSON_DATA.Industries} />
     
      <CostTable CostData={JSON_DATA.Cost} />
       <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <BusinessSolustion
        imageSrc="https://www.comfygen.com/comfygen-images/medicine-delivery-app-development/aI-powered-medicine-delivery-app-development.webp"
        BusinessSolustion={JSON_DATA.BusinessSolustion}
      />
      <Features featuresData={JSON_DATA.featuresData} />
      {/* <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} /> */}
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />

      <WhyChooseSection pageData={JSON_DATA.pageData} />
     
      <ClientStories />
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
      `${process.env.URL}/api/v1/posts?tag=medicine-delivery-app-development&per_page=3`
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
