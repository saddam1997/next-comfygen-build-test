
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


export default function Mobile(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>Hire the Best Data Scientists in India | Dedicated Data Experts</title>
        <meta
          name="description"
          content="Hire the best data scientists in India from Comfygen. Build expert data teams for ML, AI & analytics to drive smarter, data-driven business decisions."
        />
        <meta
          name="keywords"
          content="Hire Data Science Developer, Hire Data Scientist, Hire Machine Learning Engineer, Hire AI Developer, Hire Data Engineer, Hire Python Developer for Data Science, Hire Freelance Data Scientist, Hire Remote Data Scientist, Data Science Developer for Hire, Affordable Data Science Hiring in India and Europe, Hire Data Scientist for FinTech, Healthcare Data Science Developer for Hire, E-commerce Machine Learning Expert"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/hire-data-scientist"
        />


        <meta
          property="og:title"
          content="Hire data scientist and data science developer"
        />
        <meta
          property="og:description"
          content="Hire data scientist and data science developer for your next project. Comfygen helps you develop a future-ready, data-driven team. Hire now!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/hire-data-scientist"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/hire-data-scientist/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/hire-data-scientist/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Hire data scientist and data science developer"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Data Scientist & Developer" />
        <meta
          name="twitter:description"
          content="Need expert data scientists or developers for your next project? Comfygen helps you build a future-ready, data-driven team. Hire top talent and start innovating today!"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/hire-data-scientist/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
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






