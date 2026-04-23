
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";
import AppClone from "../../components/AppClone"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

import Emerging from "../../components/Emerging";

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Trending from "../../components/Trending";
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

import Features from "../../components/Features"

import TechStacks from "../../components/TechStacks";

import InformationSection from "../../components/InformationSection"
const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true }
);

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);
import IndustryGrid from "../../components/IndustryGrid";
import ReviewCard from "../../components/ReviewCard";


import TechStackSection from "../../components/TechStackSection";
import FoodDeliveryCostTable from "./component/FoodDeliveryCostTable";
import CardGrid from "./component/CardGrid";








export default function Ecommerce(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Food Delivery App Development Company | Build Apps Like Zomato & Swiggy
        </title>
        <meta name="keywords" content="Food Delivery App Consultation, Custom Food Delivery App Development, Grocery Delivery App Development, White-Label Food Delivery App Development, UI/UX Designing for Food Delivery App, Food Delivery Website Development, Food Delivery App Maintenance & Support, Cloud Kitchen App Development, Restaurant Aggregator App Development, Multi-Vendor Food Delivery App Development, Hyperlocal Food Delivery App Development" />
        <meta
          name="description"
          content="Build scalable food delivery apps like Zomato & Uber Eats with Comfygen, a leading food delivery app development company. Get custom solutions & fast launch. Book a free consultation!
"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-status-bar-style" content="#E03A3C" />
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:title"
          content="Food Delivery App Development Company | Build Apps Like Zomato & Swiggy"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta
          name="og:image"
          content="https://www.comfygen.com/comfygen-images/food-delivery-app-development/food-delivery-app-development-og.webp"
        />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="We are top food delivery app development company in India, deliver on demand food ordering app development services for startup and enterprise business."
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Food Delivery App Development Company | Build Apps Like Zomato & Swiggy"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a best food develiry app development company in India. we provide online food-ordering app development services. Hire food develiry app developer now."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="food delivery app development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta
          property="og:title"
          content="Food Delivery App Development Company | Build Apps Like Zomato & Swiggy"
        />
        <meta
          property="og:description"
          content="Comfygen is a best food develiry app development company in India. we provide online food-ordering app development services. Hire food develiry app developer now."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Trending trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <Emerging emerging={JSON_DATA.Emerging} />
      <AppClone SliderDATA={JSON_DATA.Industries} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Solution techData={JSON_DATA.AIPoweredFood} />
      <FoodDeliveryCostTable FoodDeliveryCost={JSON_DATA.FoodDeliveryCost} />
      <CardGrid
        techData={JSON_DATA.EnterpriseGrade}
      />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <TechStackSection deliveryApps={JSON_DATA.deliveryApps} />

      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />
    </>
  );
}



export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=food-delivery-app-development&per_page=3`
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


