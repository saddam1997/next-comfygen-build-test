
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./Flower.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);
import Features from "../../components/Features";

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true },
);

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

import TechStacks from "../../components/TechStacks";

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-gray-100 rounded-lg`} />
);

import ReviewCard from "../../components/ReviewCard";
import Trending from "../../components/Trending";
import IndustryGrid from "../../components/IndustryGrid";

const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => skeleton("h-[400px]"),
});



const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  },
);

const AboutComponent = dynamic(
  () => import("../../components/Abouts/AboutComponent"),
  {ssr: true},
);
const ClientStories = dynamic(() => import("../../components/ClientStories"),
  { ssr: true }
);


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>Flower Delivery App Development Company | Comfygen</title>
        <meta
          name="description"
          content="Comfygen is the best flower delivery app development company offering custom and on-demand flower delivery apps with real-time tracking, secure payments, and scalable features for florists and startups."
        />
        <meta
          name="keywords"
          content="Custom Flower Delivery App Development, AI-based Flower Delivery App Development, Florist App Development, Multi-Vendor Flower Delivery App Development, White-Label Flower Delivery App Solutions"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/flower-delivery-app-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

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

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />

        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Build Your On Demand Flower Delivery App with Comfygen"
        />
        <meta
          name="twitter:description"
          content=" Partner with a leading online flower delivery app development company. We deliver powerful mobile apps for florists with payment gateway, GPS, and order tracking features."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/flower-delivery-app-development/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/flower-delivery-app-development/og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/flower-delivery-app-development/og.webp" />
        <meta
          property="og:image:alt"
          content="Flower Delivery App Development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/flower-delivery-app-development"
        />
        <meta
          property="og:title"
          content="Flower Delivery App Development Company"
        />
        <meta
          property="og:description"
          content="As a top flower delivery app development company, we offer tailored bouquet delivery mobile app development solutions for floral businesses with user-friendly design, backend panel, and live tracking."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Trending trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <Emerging emerging={JSON_DATA.WhoCanStartSection} />

      <section className="py-8">
        <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      </section>

       <IndustryGrid />

      <Features featuresData={JSON_DATA.featureData} />

      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />

      <DeliverySection hideUrl="flower-delivery-app-development" />
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
      `${process.env.URL}/api/v1/posts?tag=delivery-app-development&per_page=3`
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
