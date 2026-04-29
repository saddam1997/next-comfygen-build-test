
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/aiinterviewschedulingsoftwaredevelopment.json";
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


const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  {
    ssr: true,
  },
);

import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});

import Solution from "../../components/Solution";

export default function Ecommerce(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>AI Interview Scheduler Software Development Company | Comfygen</title>
        <meta name="description" content="Comfygen delivers intelligent AI interview scheduling software for startups and enterprises, offering automated recruitment workflows, smart job recommendations, and scalable talent acquisition solutions." />
        <link rel="canonical" href="https://www.comfygen.com/ai-interview-scheduling-software-development" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen App" />

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


        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:url" content="https://www.comfygen.com/ai-interview-scheduling-software-development" />
        <meta property="og:title" content="AI-Powered Interview Scheduling Software Development Company" />
        <meta property="og:description" content="Automate interview booking, CV parsing, and candidate management with our secure, scalable AI-powered scheduling software solutions for enterprises." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-og.webp" />
        <meta property="og:image:alt" content="AI Interview Scheduling Software" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2025-05-28T10:13:21+00:00" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Interview Scheduling Software Development Company" />
        <meta name="twitter:description" content="Develop enterprise-grade AI interview scheduling apps. Automate processes like booking, reminders, CV parsing, and more with secure, scalable AI solutions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA.jsonLdData),
          }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Solution techData={JSON_DATA.AIFeatures} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <Solution techData={JSON_DATA.featureData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <Solution techData={JSON_DATA.LatestTechData} />
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

