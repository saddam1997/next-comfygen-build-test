import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/baccarat.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

import ReviewCard from "../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);

import InformationSection from "../../components/InformationSection"

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




export default function Altcoin(props:any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Baccarat Game Development Company | Game development Solutions
        </title>
        <meta
          name="description"
          content="Launch high-quality online baccarat games with our expert baccarat game development services. We build secure, scalable, and feature-rich games with real-time gameplay and seamless user experience."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/baccarat-game-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Baccarat Game Development Company In Canada &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Looking for an online baccarat game development company in India? Comfygen offers high-quality baccarat game development services, customizable to create a unique and engaging game experience for your players."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/baccarat-game-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/baccarat-game-1024x789.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <InformationSection InfoSectionData={JSON_DATA?.InfoSection2} />
      <Solution techData={JSON_DATA.AdvancedtechnologyData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <Solution techData={JSON_DATA.AdvancedFunctionalities} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
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