
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/python.json"
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
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

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
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
        <title>Python Development Company in India | Custom Python Development Services</title>
        <meta
          property="og:title"
          content="Python Development Company In Jaipur, India | Hire Python Developers"
        />
        <meta name="description" content="Comfygen is a leading Python development company in India offering secure, scalable, and high-performance Python development services for startups and enterprises." />
        <link rel="canonical" href="https://www.comfygen.com/python-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Looking for a reliable Python Development Company In Jaipur, Rajsthan India? Comfygen team of expert Python developers can help you build custom web applications, AI solutions, and more. Contact us now." />
        <meta property="og:url" content="https://www.comfygen.com/python-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-12-26T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/python-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name='language' content='en-us' />
      </Head>

      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <InformationSection InfoSectionData={JSON_DATA?.InfoSection} />
      <InformationSection InfoSectionData={JSON_DATA?.Development} />
      <InformationSection InfoSectionData={JSON_DATA?.Leading} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <InformationSection InfoSectionData={JSON_DATA?.ChooseUs} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
      <BlogSection initialData={initialData} />

    </>
  )
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