
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/handballlivelineapidevelopment.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});
import ReviewCard from "../../components/ReviewCard";
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true,}
);
const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"),
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
const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"),
  { ssr: true}
);
import AboutComponent from "../../components/Abouts/AboutComponent";
const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});


export default function Ecommerce(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>Handball Live Line API | Comfygen Technologies</title>
        <meta
          name="description"
          content="Comfygen offers expert Handball Live Line API Integration services, providing real-time handball data, livescore widgets, and Live Line API integration for your platform."
        />
        <meta
          name="keywords"
          content="Handball Live Scores,Handball Match Commentary,Live Match Tracking, handball odds API, live line handball data API, Handball data feed API,Handball API service"
        />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/handball-live-line-api-development" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Handball Live Line API Integration | Real-Time Handball Data Solutions" />
        <meta name="twitter:description" content=" Comfygen provides expert Handball Live Line API integration services with real-time scores, live match updates, and data widgets. Enhance your sports platform with accurate handball insights." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/handball-live-line-api-development/handball-api-og-image.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/handball-live-line-api-development/handball-api-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/handball-live-line-api-development/handball-api-og-image.webp" />
        <meta property="og:image:alt" content="Handball Live Line API Provider" />
        <meta property="og:url" content="https://www.comfygen.com/handball-live-line-api-development" />
        <meta property="og:title" content="Real-Time Handball Live Line API Provider | Comfygen Sports API Solutions" />
        <meta property="og:description" content="Integrate Comfygen’s Handball Live Line API to access real-time match stats, scores, and event data. Build powerful handball apps and platforms with reliable live data feeds." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

      </Head>


      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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