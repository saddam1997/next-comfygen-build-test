
import Head from "next/head";
import JSON_DATA from "./json/taxi.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import dynamic from "next/dynamic";
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import AppClone from "../../components/AppClone"

import FeaturesNewSection from "../../components/FeaturesNewSection"

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import Trending from "../../components/Trending";
import TechStacks from "../../components/TechStacks";
import ReviewCard from "../../components/ReviewCard";
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";
import ComparisonTable from "../../components/ComparisonTable";

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});


const CardFeatures = dynamic(
  () => import("../../components/CardFeatures"),
  { ssr: true }
);

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});



const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});
const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
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
        {/* Primary Meta Tags */}
        <title>Taxi App Development Company | Comfygen Technologies</title>
        <meta
          name="description"
          content="Leading taxi app development company. We build custom, white-label & on demand taxi booking apps for startups and enterprises. Get a free quote today."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/taxi-app-development-company"
        />
        <meta name="keywords" content="Ride Booking App Development, Carpool Taxi App Development, Vehicle Rental & Cab Booking App Development, Luxury Taxi App Development, Corporate Taxi Booking App Development, On-Demand Taxi App Development, White-Label Taxi Booking App Development" />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        {/* <!-- ================= OPEN GRAPH ================= --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Taxi App Development Company | Comfygen Technologies" />
        <meta property="og:description" content="Leading taxi app development company. We build custom, white-label & on demand taxi booking apps for startups and enterprises. Get a free quote today." />
        <meta property="og:url" content="https://www.comfygen.com/taxi-app-development-company" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp"></meta>


        {/* <!-- ================= TWITT/ER CARD ================= --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxi App Development Company | Comfygen Technologies" />
        <meta name="twitter:description" content="Leading taxi app development company. We build custom, white-label & on demand taxi booking apps for startups and enterprises. Get a free quote today." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
       {/* <Navbar /> */}
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      {/* <Milestones /> */}
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Trending trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <AppClone SliderDATA={JSON_DATA.Industries} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <FeaturesNewSection FData={JSON_DATA.FData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CardFeatures featuresData={JSON_DATA.featuresCardData} />
      <ComparisonTable />
      <CallToActionSection CallToAction={JSON_DATA.CallToActionOne} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
      <BlogSection initialData={initialData} />
    </>
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=taxi-app-development&per_page=3`
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

