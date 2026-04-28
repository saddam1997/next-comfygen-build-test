
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/generative.json";


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


import Solution from "../../components/Solution";
import IndustryGrid from "../../components/IndustryGrid";



export default function Mobile(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.comfygen.com/generative-ai-development"
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556d1" />
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
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
        <title>
          Generative AI Development Company | Custom AI Solutions India

        </title>
        <meta
          name="description"
          content="Comfygen is a leading Generative AI development company in India, delivering custom AI models, automation tools, AI-powered applications, and scalable enterprise AI solutions to drive innovation and growth."
        />
        <meta
          name="keywords"
          content="Generative AI Consulting Services, Generative AI Software Development Company, Generative AI Software Development Services, Generative AI Model Development, Generative AI Engineer "
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:title"
          content="Generative AI Development Company in India | Custom GenAI Services"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/generative-ai-development"
        />
        <meta name="og:image" content="url" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Looking for expert Generative AI development services? Build AI-driven applications for content creation, automation, chatbots, and more with cutting-edge GenAI solutions."
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top-notch Custom Generative AI Mobile App Development Company"
        />
        <meta
          name="twitter:description"
          content="A leading generative AI company that specializes in creating end-to-end generative AI software solutions and applications. Get customized GenAI development services from experts"
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta
          property="og:image:alt"
          content="custom generative ai development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/generative-ai-development"
        />
        <meta
          property="og:title"
          content="Best Generative AI software development company in India | Service Provider"
        />
        <meta
          property="og:description"
          content="Looking for the best Generative AI software development company in India? We offer cutting-edge AI development solutions, including custom GenAI models, automation, and AI-powered applications for enterprise businesses."
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
      <section className="lg:py-16 py-10 bg-[#fff]">
        <Solution techData={JSON_DATA.AIPoweredFood} />
      </section>
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
