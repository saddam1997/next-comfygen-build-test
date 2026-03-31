
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nextjs.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome";

const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});
const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


export default function Altcoin(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Next.js Development Company | Hire Expert Next.js Developers – Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen is a trusted Next.js development company delivering fast, scalable, and SEO-friendly web applications with expert developers and server-side rendering solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/next-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best NextJS Development Company In Jaipur, India | Hire NextJS Developers"
        />
        <meta
          property="og:description"
          content="Hire Best NextJS Development company In Jaipur India. We are providing user friendly website and app in NextJS to boost your sells and services. "
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/next-js-development"
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
          content="https://www.comfygen.com/images/next-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name="language" content="en-us" />
      </Head>

      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Technologies} />
      <Consultancy consultancyData={JSON_DATA.Nextechnologies} />
      <InformationSection InfoSectionData={JSON_DATA?.Software} />
      <HireSection HireDeveloper={JSON_DATA.HireNFTDeveloper} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
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
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}