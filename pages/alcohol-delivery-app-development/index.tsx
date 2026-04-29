
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./delivery-app-development.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

import TechStacks from "../../components/TechStacks";
import AppClone from "../../components/AppClone"
const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);


const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  },
);

import ReviewCard from "../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);



const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true },
);

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-gray-100 rounded-lg`} />
);



const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => skeleton("h-[400px]"),
});



const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  {
    ssr: true,
  },
);

import Features from "../../components/Features";
import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});

export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Best Alcohol Delivery App Development Company

        </title>
        <meta
          name="description"
          content="Comfygen is a leading alcohol delivery app development company offering AI-powered liquor delivery app development services for startups, stores & enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/alcohol-delivery-app-development"
        />
        <meta name="keywords" content="Custom Alcohol Delivery App Development Solutions, White-label Alcohol Delivery App Development, Liquor Store App Development, Beer Delivery App Development, Wine Delivery App Development" />

        <meta
          name="apple-mobile-web-app-title"
          content="Comfygen Delivery App"
        />

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/alcohol-delivery-app-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/about.webp"
        />
        <meta property="og:image:alt" content="Alcohol Delivery App Developments" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/comfygen-images/delivery-app-development/delivery_og2.webp"
        />
        <meta
          property="og:title"
          content="On Demand Liquor Delivery App Development Company | Comfygen Technologies"
        />
        <meta
          property="og:description"
          content="Launch your liquor delivery business with our on demand alcohol delivery app development services. Secure payments, compliance tools & real-time tracking included." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="On Demand Liquor Delivery App Development Company | Comfygen Technologies" />
        <meta name="twitter:description" content="Launch your liquor delivery business with our on demand alcohol delivery app development services. Secure payments, compliance tools & real-time tracking included." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/alcohol-delivery-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/about.webp" />
        <meta property="og:image:alt" content="Alcohol Delivery App Development" />
        <meta property="og:url" content="https://www.comfygen.com/alcohol-delivery-app-development" />
        <meta property="og:title" content="Affordable Alcohol Delivery App Development Company" />
        <meta property="og:description" content="Looking for affordable alcohol delivery app development? Comfygen Technologies is a top-rated liquor delivery app development company that builds AI-powered liquor delivery apps with age verification, payments & live order tracking." />



        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <AppClone SliderDATA={JSON_DATA.Industries} />
      <Emerging emerging={JSON_DATA.EmergingData2} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.FeaturesData} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <DeliverySection hideUrl="https://www.comfygen.com/alcohol-delivery-app-development" />
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

