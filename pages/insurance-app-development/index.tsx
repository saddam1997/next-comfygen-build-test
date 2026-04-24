
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Features = dynamic(() => import("../../components/Features"), {
  ssr: true,
});

const CardFeatures = dynamic(() => import("../../components/CardFeatures"),
  { ssr: true }
);

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
});


const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
});


const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

import TechStacks from "../../components/TechStacks";

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});


const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

import JSON_DATA from "./insuranceappdevelopment.json";

import IndustryGrid from "../../components/IndustryGrid";




export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>Comfygen custom Insurance Mobile App Development Company</title>

        <meta
          name="description"
          content="Build secure and scalable insurance apps with the best insurance mobile app development company. We develop custom insurtech apps with claims management, policy tracking, and seamless user experience."
        />
        <meta
          name="keywords"
          content="Custom Insurance App Development, Health Insurance App Development, Vehicle Insurance App Development Solution, Auto Insurance App Development Solution, Life Insurance App Development, Business Insurance App Development, Travel Insurance App Development, Property Insurance App Development, Car Insurance App Development, AI-based Insurance App Development, Blockchain-based Insurance App Development"
        />
        <link rel="canonical" href="https://www.comfygen.com/insurance-app-development" />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen Insurance App" />
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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <meta property="og:title" content="Top Insurance App Development Company – Custom InsurTech Solutions" />
        <meta
          property="og:description"
          content="Comfygen is a leading insurance mobile app development company delivering custom, AI-powered InsurTech solutions. We build secure, scalable, and compliant insurance apps for brokers, startups, and enterprises."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Insurance App Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/insurance-app-development" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:title" content="Top Insurance App Development Company – Custom InsurTech Solutions" />
        <meta
          name="twitter:description"
          content="Comfygen is a leading insurance mobile app development company delivering custom, AI-powered InsurTech solutions. We build secure, scalable, and compliant insurance apps for brokers, startups, and enterprises."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />

       <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
         />
      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CardFeatures featuresData={JSON_DATA?.featuresData3} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.FeaturesData} />
      <IndustryGrid />
      <Solution techData={JSON_DATA.Trading} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
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
      `${process.env.URL}/api/v1/posts?tag=education-app-development&per_page=3`
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