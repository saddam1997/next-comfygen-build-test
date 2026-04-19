
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nbalivelineapidevelopment.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[700px] sm:min-h-[650px] lg:min-h-[500px] bg-[#F5F5F9] animate-pulse" />
  ),
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});


const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});




export default function Ecommerce(props:any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Surf League Live Line API | Comfygen Technologies</title>
        <meta
          name="description"
          content="Comfygen Technologies offers expert Surf League Live Line API services, providing real-time surfing scores and data integration for your applications."
        />
        <meta
          name="keywords"
          content="surf league live score API, Surf League Live Line API Provider, world surf league, wsl pipeline, wsl live Line API , world surf league Data API, world surf league stats API, Surf League Score API, Surfing Data API Solutions, surfing api developer, surfing data feed api, livescore surfing api, Surfing stats api, World Surf League, surf league live score API, surfing live line API, surf competition live data API, surf event live feed API, surfing match live updates API, surf league statistics API, surfing scores integration API, surf league data feed API, surf competition live data API"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/surf-league-live-line-api-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Surf League Live Line API | Real-Time Surfing Data by Comfygen"
        />
        <meta
          property="og:description"
          content="Get real-time surf league data with Comfygen’s Surf Live Line API. Accurate, scalable, and tailored for apps, analytics, and event platforms."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top Surf League Live Line API"
        />
        <meta
          name="summary"
          content="Comfygen provides scalable Surf League API solutions with real-time surf competition and wave data integration."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="Founder of Surf League API services for startups and enterprises. Specializing in real-time surf scores, data feeds, and event integration."
        />
        <meta
          name="Best Surf Live Line API service Provider"
          content="Comfygen is a trusted surf API provider worldwide."
        />
        <meta name="category" content="Surf League Live Line API" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best Surf League Live Line API" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Surf Live Line API Services Provider"
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
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/surf-league-live-line-api-development/surf-api-og-image.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/surf-league-live-line-api-development/surf-api-og-image.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Surf League Live Line API" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/surf-league-live-line-api-development"
        />
        <meta
          property="og:title"
          content="Surf League Live Line API Services | Real-Time Surfing Data Solutions"
        />
        <meta
          property="og:description"
          content="Get real-time surf competition data with our Surf League Live Line API. We provide wave stats, event scores, and seamless integration services for surf forecasting and sports apps."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Surf League Live Line API Services | Real-Time Surfing Data Solutions"
        />
        <meta
          name="twitter:description"
          content="Get real-time surf competition data with our Surf League Live Line API. We provide wave stats, event scores, and seamless integration services for surf forecasting and sports apps."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/svg/Logo1.svg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
       <div className="min-h-[60px] md:min-h-[70px]">
        <Navbar />
      </div>
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
     
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
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