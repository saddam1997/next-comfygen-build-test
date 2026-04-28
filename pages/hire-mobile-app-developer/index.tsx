
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});



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
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-gray-100 rounded-lg`} />
);



const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => skeleton("h-[400px]"),
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

export default function Mobile(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Hire Mobile App Developers | Expert App Development Services
        </title>

        <meta
          property="og:title"
          content="Hire Mobile App Developers | Offshore App Programmers | Comfygen"
        />
        <meta
          name="description"
          content="Hire mobile app developers to build secure, scalable, and feature-rich Android and iOS apps tailored to your business needs with seamless UI/UX and advanced technology."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-mobile-app-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile Application Development for Your Business | Hire Mobile Application Developers"
        />
        <meta
          property="og:facebook_description"
          content="Our certified Mobile app developers at Comfygen are the best app developers / programmers for startups, Enterprises the various industry. Hire mobile App Developers in India, In the USA from Comfygen on a monthly & Hourly basis from leading Mobile app development company in India & the USA."
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Our certified hire dedicated mobile app developers at Comfygen are the top mobile app developers / programmers for startups, Enterprises the various industry. Hire mobile App Developers in India, In the USA from Comfygen on a monthly & Hourly basis from leading Mobile app development company in India & the USA."
        />
        <meta property="schema:type" content="Website" />
        <meta property="schema:type" content="Website" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top rated hire dedicated mobile app developers"
        />
        <meta
          name="summary"
          content="Advantages of hiring dedicated mobile app developers: Expertise, Flexibility, Cost-effectiveness, Better communication, Greater accountability, Access to a wider talent pool, Improved scalability, Increased security, Better time zone compatibility, More control over IP etc.."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Mobile Application Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hire Mobile App Developer"
          content="By hiring a dedicated application developer, you can ensure that your application is designed with the user in mind, resulting in a more enjoyable and effective user experience. Expert devs = higher quality apps;
        Customization = tailored to your audience; Better UX = higher user engagement"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire dedicated mobile app developers in India - Hire Mobile app developer in the USA, the UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best Mobile Application Developers India | Offshore Application Programmers"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />



      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <Solution techData={JSON_DATA.CardData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
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