import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/tableau.json";

import HeroSectionNewCls from "../../../components/HeroSectionNewCls"

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
const ProcesSection = dynamic(
  () => import("../../../components/ProcesSection"),
  {
    ssr: true,
  },
);

const Solution = dynamic(() => import("../../../components/Solution"), {
  ssr: true,
});


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
import IndustryGrid from "../../../components/IndustryGrid";

export default function Mobile(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>Best Tableau Consulting Service Provider | Data Visualization & BI Solutions</title>
        <meta
          name="description"
          content="Comfygen is a leading Tableau consulting service provider, offering expert data visualization, business intelligence, and analytics solutions. Transform your data into actionable insights with our professional Tableau consulting services"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/tableau-consulting-services"
        />

        <meta
          property="og:title"
          content="Tableau Consulting Services | Comfygen Data Experts"
        />
        <meta
          property="og:description"
          content="Comfygen’s Tableau consulting services cover dashboards, data integration, real-time reporting, and server performance tuning for smarter business decisions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/tableau-consulting-services"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/tableau-consulting-services/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/tableau-consulting-services/og.webp"
        />
        <meta property="og:image:type" content="image/webp" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tableau Consulting Services | Comfygen Data Experts"
        />
        <meta
          name="twitter:description"
          content="Hire Tableau consultants to build dashboards, automate reporting, and optimize performance. Tailored solutions for your data challenges."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/tableau-consulting-services/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta
          name="keywords"
          content="Tableau Dashboard Development, Tableau Consulting Services, Data Visualization, Business Intelligence Services, Predictive Analytics, Data Strategy & Architecture, Big Data Solutions, AI & Machine Learning Consulting, Data Engineering"
        />
        <meta name="author" content="Comfygen Technologies" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>

      <div className="pt-16">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.Business} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <IndustryGrid />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <ClientStories />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
        <FaqSection faqData={JSON_DATA.Frequently} />
        <BlogSection initialData={initialData} />
      </div>
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
