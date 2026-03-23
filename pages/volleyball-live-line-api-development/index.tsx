
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/vollyballlivelineapidevelopment.json";
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

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
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

const TechSection = dynamic(() => import("../../components/TechSection"), {
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











export default function Ecommerce(props:any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>Volleyball Live Line API | Comfygen</title>
        <meta
          name="description"
          content="Comfygen offers custom Volleyball API for live scores, gaming platforms & more. Integrate reliable volleyball data feeds today."
        />
        <meta
          name="keywords"
          content="Volleyball API, Volleyball API data, api volleyball, livescore volleyball, live volleyball, Volleyball Livescore API, Volleyball Livescore Widgets API, Live score feed api, Volleyball data feed api, Volleyball Highlights API, Volleyball Teams API, Best Volleyball API, Volleyball Detection API, Volleyball Live Line API, Volleyball Live Score API, Volleyball API for developers, Volleyball stats API integration, Free Volleyball data API, Volleyball real-time score API, Volleyball odds and live line API, Custom Volleyball data feed API, Volleyball live stats API, Live Volleyball data API provider"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/volleyball-live-line-api-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Volleyball Live Line API | Volleyball Data API Solutions by Comfygen"
        />
        <meta
          property="og:description"
          content="Get real-time volleyball data with Comfygen’s Volleyball Live Line API. Scalable, reliable, and built for developers, gaming, and media platforms."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top Volleyball Live Line API Company"
        />
        <meta
          name="summary"
          content="Comfygen provides reliable and scalable Volleyball Live Line API services with historical and real-time data coverage."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="Founder of Volleyball Live Line API services for startups and enterprises. Specializing in real-time volleyball scores, stats, and live line data integration."
        />
        <meta
          name="Best Volleyball Live Line API service Provider"
          content="Comfygen is a trusted Volleyball API provider worldwide."
        />
        <meta name="category" content="Volleyball Live Line API" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best Volleyball Live Line API" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Volleyball Live Line API Services Provider"
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
          content="https://www.comfygen.com/comfygen-images/volleyball-live-line-api-development/volleyball-api-og-image.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/volleyball-live-line-api-development/volleyball-api-og-image.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Volleyball Live Line API" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/volleyball-live-line-api-development"
        />
        <meta
          property="og:title"
          content="Volleyball Live Line API Services | Real-Time Volleyball Data Solutions"
        />
        <meta
          property="og:description"
          content="Get real-time volleyball data with our Volleyball Live Line API. We provide scores, odds, stats, and integration services for live line API and media platforms."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Volleyball Live Line API Services | Real-Time Volleyball Data Solutions"
        />
        <meta
          name="twitter:description"
          content="Get real-time volleyball data with our Volleyball Live Line API. We provide scores, odds, stats, and integration services for gaming and media platforms."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/svg/Logo1.svg" />
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
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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
