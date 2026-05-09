
import Head from "next/head";
import JSON_DATA from "./json/reactjs.json";
import dynamic from "next/dynamic";
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
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});


const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

import IndustryGrid from "../../components/IndustryGrid";

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);




export default function ReactJS(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Top React Native App Development Company in Jaipur, India | Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen is a leading React Native app development company in Jaipur, India, delivering scalable iOS and Android apps with expert developers, agile process, and cost-effective solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/react-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best React Native APP Development Company in Jaipur, India"
        />
        <meta
          property="og:description"
          content="Comfygen is a top React Native app development company in Jaipur, India, specializing in building business apps for startups. Hire expert developers for global success"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/react-js-development"
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
          content="https://www.comfygen.com/images/react-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name="language" content="en-us" />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Benefits} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <IndustryGrid />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />

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

