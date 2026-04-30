
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
import TechStacks from "../../../components/TechStacks";
const Consultancy = dynamic(() => import("../../../components/Consultancy"), {
  ssr: true,
});
const ClientStories = dynamic(() => import("../../../components/ClientStories"), {
  ssr: true,
});
const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"),
  { ssr: true }
);
import ReviewCard from "../../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);

const WhyChooseSection = dynamic(
  () => import("../../../components/WhyChooseSection"),
  { ssr: true },
);


const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});

import AboutComponent from "../../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../../components/BlogSection"), {
  ssr: true,
});


import Solution from "../../../components/Solution";



export default function ClinicalApp(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Business Intelligence & Analytics Services | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen delivers end-to-end Business Intelligence and Analytics services that convert complex data into actionable insights through advanced dashboards, data warehousing, and predictive analytics."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/data/business-intelligence"
        />
        <meta
          name="keywords"
          content="Business Intelligence service, Business Analytics Service, BI Services, Data Visualization Service, KPI & Performance Tracking, Marketing Analytics, Predictive Analytics, Data Dashboard Development, Data Integration & Warehousing"
        />

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/business-intelligence/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/business-intelligence/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Business Intelligence and Analytics Services"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/business-intelligence"
        />
        <meta
          property="og:title"
          content="Business Intelligence & Analytics Services | Comfygen"
        />
        <meta
          property="og:description"
          content="Unlock real-time dashboards, predictive insights, and smarter decisions with Comfygen’s Business Intelligence and Analytics services."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Business Intelligence & Analytics Services | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Turn your business data into smart decisions with Comfygen. Get BI dashboards, analytics, forecasting, and insights that actually drive growth."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/business-intelligence/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Trading} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
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

