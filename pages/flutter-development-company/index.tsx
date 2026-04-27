
import Head from "next/head";
import dynamic from "next/dynamic";

import JSON_DATA from "./json/flutter.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import InformationSection from "../../components/InformationSection";
const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);
const AboutComponent = dynamic(
  () => import("../../components/Abouts/AboutComponent"),
  {
    ssr: true,
  },
);

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true },
);

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
const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

import ReviewCard from "../../components/ReviewCard";
import IndustryGrid from "../../components/IndustryGrid";

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);





export default function MultiChain(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Best Flutter App Development Company in India | Custom Cross-Platform Apps
        </title>
        <meta
          name="description"
          content="Comfygen is the best Flutter app development company in India building secure, scalable cross-platform apps for Android, iOS & web."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/flutter-development-company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Flutter Development Company in Jaipur, India | Hire Best Cross-Platform App Developers"
        />
        <meta name="language" content="en-us" />
        <meta
          property="og:description"
          content="Comfygen is a leading Flutter Development Company in Jaipur, India that creates customized cross-platform apps for businesses. Get in touch with Comfygen expert flutter app developers to build your next cross-platform app today."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/flutter-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <IndustryGrid />
      {/* <HeadingSec
          title="Why We're India's Premier Flutter App Development Company"
          description="With our Flutter mobile app development services, you can create a multi-platform presence. From discovering the best product-market fit to smoothly deploying your application across multiple platforms, our Flutter developers can help you design, develop, test, and launch full-featured Flutter applications."
        /> */}
      <InformationSection InfoSectionData={JSON_DATA.InfoSection} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection2} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection3} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
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

