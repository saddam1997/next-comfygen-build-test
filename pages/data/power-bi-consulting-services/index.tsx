
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
const ProcesSection = dynamic(
  () => import("../../../components/ProcesSection"),
  {
    ssr: true,
  },
);

import AboutComponent from "../../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../../components/BlogSection"), {
  ssr: true,
});


import Solution from "../../../components/Solution";

import IndustryGrid from "../../../components/IndustryGrid";









export default function ClinicalApp(props: any) {
  let { initialData } = props;




  return (
    <>
      <Head>
        <title>
          Microsoft Power BI Consulting Services | Data-Driven Insights – Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen provides Microsoft Power BI consulting services to centralize data, deliver real-time analytics, actionable insights, and enable smarter, outcome-driven business decisions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/data/power-bi-consulting-services"
        />
        <meta
          name="keywords"
          content="Microsoft Power BI Consulting Services, Microsoft Power BI Dashboard Development, Microsoft Power BI Custom Dashboard Development, Power BI Report Customization, Power BI Data Modeling, Power BI Embedded Analytics, Power BI for Financial Reporting, Power BI for Sales Analytics, Hire Power BI Developer, Hire Power BI Consultant, Power BI Implementation Services, Power BI for Enterprise BI Solutions"
        />

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/power-bi-consulting-services/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/power-bi-consulting-services/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Microsoft Power BI Consulting with Experts"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/power-bi-consulting-services"
        />
        <meta
          property="og:title"
          content="Microsoft Power BI Consulting with Experts"
        />
        <meta
          property="og:description"
          content="Our Microsoft Power BI consulting services deliver custom dashboards, real-time reports, and analytics that help you make confident business decisions faster."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Microsoft Power BI Consulting Services | Comfygen BI Experts"
        />
        <meta
          name="twitter:description"
          content="Our Microsoft Power BI consulting services deliver custom dashboards, real-time reports, and analytics that help you make confident business decisions faster."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/power-bi-consulting-services/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <IndustryGrid />
      <Solution techData={JSON_DATA.cardData} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
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



