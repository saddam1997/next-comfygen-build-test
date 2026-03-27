
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/rugbylivelineapidevelopment.json";

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

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});


const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
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






export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>Rugby Live Line API Development Service | Real-Time Sports Data</title>
        <meta
          name="description"
          content="Get accurate, real-time match updates with our Rugby Live Line API development service. We deliver fast, scalable, and reliable sports data solutions for apps and platforms."
        />
        <meta
          name="keywords"
          content="rugby game Live Line API, rugby ball game Live Line API, Rugby Live Data API, Rugby Leagues Live Line API, Rugby API, Rugby Feed API, Rugby Betting API, Rugby API for developers, Live Rugby Match API Integration, Rugby live match feed API, Rugby API for Betting Platforms"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/rugby-live-line-api-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Rugby Live Line API | Real-Time Rugby Score & Data API Solutions"
        />
        <meta
          property="og:description"
          content="Get custom Rugby Live Line API, live scores, highlights, gaming APIs & scoreboard data from Comfygen. Trusted Rugby API integration company with 10+ years’ expertise."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Technologies" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top Rugby Live Line API "
        />
        <meta
          name="summary"
          content="Comfygen provides scalable Rugby Live Line API services with real-time scoring, stats, and global league coverage."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="Founder of Rugby Live Line API services for startups and enterprises. Specializing in real-time rugby scores, stats, and odds integration."
        />
        <meta
          name="Best Rugby Live Line API service Provider"
          content="Comfygen is a trusted Rugby API provider worldwide."
        />
        <meta name="category" content="Rugby Live Line API Provider" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best Rugby Live Line API" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Rugby Live Line API Services Provider"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/rugby-live-line-api-development/rugby-api-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/rugby-live-line-api-development/rugby-api-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rugby Live Line API" />
        <meta property="og:url" content="https://www.comfygen.com/rugby-live-line-api-development" />
        <meta property="og:title" content="Rugby Live Line API | Real-Time Rugby Score & Data API Solutions" />
        <meta property="og:description" content="Get custom Rugby Live Line API, live scores, highlights, live line APIs & scoreboard data from Comfygen. Trusted Rugby API integration company with 10+ years’ expertise." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rugby Live Line API | Real-Time Rugby Score & Data API Solutions" />
        <meta name="twitter:description" content="Get expert Rugby Live Line API services for real-time rugby match scores, stats data. Custom Rugby APIs for apps, websites & fantasy platforms." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/rugby-live-line-api-development/rugby-api-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
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