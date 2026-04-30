
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";

import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
import TechStacks from "../../../components/TechStacks";

const Consultancy = dynamic(() => import("../../../components/Consultancy"), {
  ssr: true,
});

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

import IndustryGrid from "../../../components/IndustryGrid";



export default function Mobile(props) {
  let { initialData } = props;
 

  return (
    <>
      <Head>
        <title>AWS Data Analytics Services Company | End-to-End AWS Analytics</title>
        <meta name="description" content="Comfygen is a trusted AWS data analytics services company delivering scalable AWS analytics solutions, real-time data processing, data lakes, and BI dashboards for businesses." />

        <meta name="keywords" content="Data Engineering on AWS, Real-Time Analytics, Cloud Data Warehousing, BI Dashboard Development, ETL Pipeline Automation" />

        <link rel="canonical" href="https://www.comfygen.com/data/aws-analytics-services" />



        <meta property="og:url" content="https://www.comfygen.com/data/aws-analytics-services" />
        <meta property="og:title" content="AWS Analytics Services | Real-Time Data Insights" />
        <meta property="og:description" content="Comfygen helps businesses unlock the full potential of AWS Analytics Services — including Redshift, Glue, QuickSight, and more. Scalable. Secure. Built for action." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/aws-analytics-services/og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/aws-analytics-services/og.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AWS Data Analytics services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AWS Analytics Services | Real-Time Data Insights" />
        <meta name="twitter:description" content=" Track performance, analyze data pipelines, and make better decisions with AWS analytics solutions by Comfygen." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/aws-analytics-services/og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <IndustryGrid />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
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
