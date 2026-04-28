
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/Aidevelopment.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import TechStacks from "../../components/TechStacks";

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});

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


import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
import IndustryGrid from "../../components/IndustryGrid";




export default function Mobile(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          AI & ML Mobile App Development Services in India | Comfygen
        </title>
        <meta
          property="og:title"
          content="Custom Enterprise AI ML Mobile App Development Company In India | Get Best Services"
        />
        <meta
          name="description"
          content="Comfygen offers AI & ML mobile app development services in India to build intelligent, scalable apps with predictive analytics, smart automation, and personalized experiences."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence Development Services, AI Software Development Company, AI Software Development Services, AI Product Development, AI Chatbot Development, AI Engineer "
        />
        <meta
          name="og:description"
          content="Looking for AI-based Enterprise to SME mobile app development company to boost your business. Comfygen custom AI ML development services in Jaipur, India help you to achieve your goal."
        />
        <link rel="canonical" href="https://www.comfygen.com/ai-development" />



        <meta name="og:url" content="https://www.comfygen.com/ai-development" />
        <meta
          name="og:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Our AI software development experts create custom AI solutions for startups, ensuring fast, affordable, and efficient project completion. Build your AI system today!"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258/" />
        <meta
          property="og:image:type"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Development Company | Artificial Intelligence Development Services"
        />
        <meta
          name="twitter:description"
          content="Boost your business efficiency with Comfygen, a leading AI development company offering custom artificial intelligence solutions tailored to your needs."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:image:alt"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ai-development"
        />
        <meta
          property="og:title"
          content="Custom AI Development Company | AI Solutions for Startups"
        />
        <meta
          property="og:description"
          content="Our AI Based App development experts create custom AI Development Service for startups, ensuring fast, affordable, and efficient project completion. Build your AI system today!"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />




      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <IndustryGrid />
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
