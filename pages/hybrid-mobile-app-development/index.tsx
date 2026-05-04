
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hybrid.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

import ReviewCard from "../../components/ReviewCard";

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const InformationSection = dynamic(() => import("../../components/InformationSection"), {
  ssr: true,
});


const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

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
          Hybrid Mobile App Development Company | Hire Hybrid App Developers – Comfygen
        </title>
        <meta
          property="og:title"
          content="Best Hybrid Mobile App Development Company in jaipur, India | Get Best Solutions"
        />
        <meta
          name="description"
          content="Comfygen is a leading hybrid mobile app development company in India and the USA, delivering secure, scalable, and cost-effective cross-platform app solutions with expert developers."
        />
        <meta
          name="og:description"
          content="Comfygen, the premier hybrid mobile app development company in Jaipur India, offers top-notch hybrid mobile app development services to bring your app vision to life. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hybrid-mobile-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Are you looking for best Hybrid App Development Company | Hire Hybrid App Developers"
        />
        <meta
          property="og:facebook_description"
          content="Looking for a reliable Hybrid mobile app development Industry? Our expert Hire Hybrid App Developers provide end-to-end Hybrid mobile app development services that meet your business needs."
        />
        <meta
          property="og:twitter_title"
          content="Top Hybrid Mobile App Developers Company India & USA | Hybrid App Development Services | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, the Best Hybrid mobile application development company in India, UK, UAE & USA. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Hybrid Mobile App Development Company in  India"
        />
        <meta
          name="summary"
          content="Comfygen is the No 1 Hybrid mobile app development Industry in India, USA."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a company, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hybrid Mobile App Development Company in  India"
          content="Comfygen is a leading Hybrid Mobile app development company in jaipur, India. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5."
        />
        <meta
          name="category"
          content="Hybrid Mobile App Development Company in  India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Hybrid Mobile Application Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hybrid Mobile App Development Company in  India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <InformationSection InfoSectionData={JSON_DATA?.Information} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <IndustryGrid />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
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