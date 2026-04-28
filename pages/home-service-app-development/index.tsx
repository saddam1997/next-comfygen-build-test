
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./home-service-app-development.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import TechStacks from "../../components/TechStacks";
const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"),
  { ssr: true,},
);

import ReviewCard from "../../components/ReviewCard";
const ServicesComponet = dynamic( () => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true},
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
const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
});
import Features from "../../components/Features";
import AboutComponent from "../../components/Abouts/AboutComponent";
const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
import Solution from "../../components/Solution";

export default function ClinicalApp(props: any) {
  let { initialData } = props;
 

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Top Home Services App Development Company | Comfygen</title>
        <meta
          name="description"
          content="Top home services app development company offering real-time booking, tracking, secure payments, and scalable multi-vendor apps to boost customer engagement and business growth."
        />
        <meta
          name="keywords"
          content="White-Label Home Service App Development, Salon and Beauty Services App Development, Uber-like App for Home Services, Handyman App Development, Electrical Service App Development, Home Services App Design and Development Services, Laundry Service App Development, Child Care Services"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/home-service-app-development"
        />
        {/* Robots */}
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />

        {/* Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen App" />

        {/* Author Info */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* SEO Meta */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Meta */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph Meta */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
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
          content="https://www.comfygen.com/comfygen-images/home-services-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/home-services-app-development/og.webp"
        />
        <meta property="og:image:alt" content="Home Service App Development" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/home-service-app-development"
        />
        <meta
          property="og:title"
          content="Top Mobile App Development Company for Home Services Industry"
        />
        <meta
          property="og:description"
          content="Looking to digitize your home service business? We develop high-performance mobile apps for all services — from plumbing to salon bookings. Scalable, secure, and easy to use."
        />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Home Services App Development Solutions | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Launch your branded home services app with Comfygen Technologies. We deliver tailored solutions for single and multi-service businesses with real-time tracking, secure payments, and user-friendly design."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/home-services-app-development/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />
        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <Solution techData={JSON_DATA.cardData3} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <Features featuresData={JSON_DATA.FeaturesData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
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