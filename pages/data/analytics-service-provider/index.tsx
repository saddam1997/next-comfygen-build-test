import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";
import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
import TechStacks from "../../../components/TechStacks";
const PortfolioSection = dynamic(
  () => import("../../../components/PortfolioSection"),
  {
    ssr: true,
  },
);

const ClientStories = dynamic(() => import("../../../components/ClientStories"), {
  ssr: true,
});

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

const ProcesSection = dynamic(() => import("../../../components/ProcesSection"), {
  ssr: true,
});

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
import IndustryGrid from "../../../components/IndustryGrid";





export default function Mobile(props:any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Data Analytics Services Provider Company | Data Analytics Consulting </title>
        <meta
          property="og:title"
          content="Best Data Analytics Service Company"
        />
        <meta
          name="description"
          content="Comfygen is a leading data analytics services provider company delivering custom data analytics solutions, big data analytics, predictive insights, and business intelligence services to help businesses make smarter data-driven decisions."
        />
        <meta
          name="og:description"
          content="Comfygen Technologies, the best data analytics company, delivers end-to-end data analytics services including BI dashboards, data warehousing, AI analytics & consulting to boost data-driven business growth."
        />

        <meta
          name="keywords"
          content="Data Analytics Strategy, Data Analytics Consulting, Data Management, Data Integration, Data Warehousing, Data Preparation, Managed Data Analysis, Analytics as a Service (AaaS / DAaaS), Data Analytics Modernization"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/analytics-service-provider"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Data Analytics Services Provider"
        />
        <meta
          name="twitter:description"
          content="Recognized as the best data analytics company, Comfygen Technologies provides customized data analytics solutions in BI, AI analytics, data pipelines, and modern cloud infrastructure."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/analytics/analytics-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/analytics/analytics-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/analytics/analytics-og.webp"
        />
        <meta property="og:image:alt" content="Data Analytics Services" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/analytics-service-provider"
        />
        <meta
          property="og:title"
          content="Best Data Analytics Services Provider for Enterprises"
        />
        <meta
          property="og:description"
          content="As a leading data analytics company, we help businesses unlock insights through BI dashboards, AI models, and modern data infrastructure."
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />






      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.cardData3} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <IndustryGrid />
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


