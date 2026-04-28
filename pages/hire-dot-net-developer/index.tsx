
import Head from "next/head";
import JSON_DATA from "./json/hireDotNet.json";
import dynamic from "next/dynamic";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});


const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true},
);
const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true },
);

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"),
  { ssr: true },
);

import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
import Solution from "../../components/Solution";


export default function Mobile(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Hire Dedicated .NET Developers | ASP.NET & .NET Core Experts | Comfygen
        </title>
        <meta
          name="description"
          content="Hire skilled .NET developers from India, Comfygen. Our ASP.NET and .NET Core experts build secure, scalable, and high-performance business applications tailored to your needs."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-dot-net-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Optimizing Digital Health Experiences: Comfygen's Hire .Net Developer Expertise"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen's Hire .Net Developer expertise focuses on optimizing digital health app development services experiences through advanced mobile app development services, solutions. We leverage technology to bridge the gap between healthcare app development service providers and patients, fostering enhanced communication,data-driven insights, and improved care outcomes."
        />
        <meta
          property="og:twitter_title"
          content="Hire .Net Developer Services Innovation: Hire Top-Notch Healthcare App Developers in the United States at Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen empowers Hire .Net Developer company in India & the USA innovation by offering top-notch Hire .Net Developer services. Our dedicated team of healthcare app developers combines healthcare expertise with technical prowess to build customized mobile app development that align with your business goals, enhancing patient care and operational efficiency."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        <meta
          name="abstract"
          content="Top rated Healthcare App & Software Development Services"
        />
        <meta
          name="summary"
          content="Through our healthcare software development services, we prioritize quality to deliver robust mobile infrastructure tailored for both healthcare providers and patients, ensuring seamless integration and optimal functionality."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Healthcare Mobile Application Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Best Hire .Net Developer Services"
          content="Comfygen, a prominent Hire .Net Developer company in India & the USA, is at the forefront of revolutionizing patient care through cutting-edge digital health app development solutions. Our innovative approach enhances patient engagement, streamlines healthcare operations, and delivers superior care experiences."
        />
        <meta
          name="category"
          content="Patient Care: Hire .Net Developer Services, Solutions by Comfygen"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Healthcare dedicated mobile app developers in India - Best healthcare app developers in the USA, the UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best Healthcare Mobile Application Programmers India & USA | offshore healthcare software Programmers"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <Solution techData={JSON_DATA.CardData} />
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