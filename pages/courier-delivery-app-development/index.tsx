
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./courier-delivery-app-development.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

import FeaturesNewSection from "../../components/FeaturesNewSection"
const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});


const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true }
);

const Trending = dynamic(
  () => import("../../components/Trending"),
  { ssr: true }
);

import TechStacks from "../../components/TechStacks";

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
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

import ReviewCard from "../../components/ReviewCard";


const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { ssr: true }
);


import DeliveryCostTable from "./components/DeliveryCostTable";

const BusinessSolustion = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"),
  { ssr: true }
);


export default function ClinicalApp(props: any) {
  let { initialData } = props;
 



  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Best Courier Delivery App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content=" Build a scalable courier delivery app with Comfygen. Custom courier app development services with AI dispatch, real-time tracking & secure payments. Get a free quote."
        />

        <meta name="keywords" content="On-demand Courier Delivery App Development, Parcel Delivery App Development, Last-mile Delivery App Development, Courier Dispatch & Tracking App Development, White-label Courier App Development Solutions, Courier App Development for Carriers, Haulage Courier App Development, Freight Forwarding Courier App Development, Courier Marketplace App Development, Courier App Development for Delivery Chains" />


        {/* canonical */}
        <link rel="canonical" href="https://www.comfygen.com/courier-delivery-app-development" />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reliable Courier Delivery App Development | Comfygen Technologies" />
        <meta name="twitter:description" content=" Build a scalable courier delivery app with Comfygen. Custom courier app development services with AI dispatch, real-time tracking & secure payments. Get a free quote." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/courier-delivery-app-development/courier-delivery-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/courier-delivery-app-development/courier-delivery-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/courier-delivery-app-development/courier-delivery-app-development.webp" />
        <meta property="og:image:alt" content="Courier Delivery App Development" />
        <meta property="og:url" content="https://www.comfygen.com/courier-delivery-app-development" />
        <meta property="og:title" content="On-Demand Courier App Development Company" />
        <meta property="og:description" content=" Build a scalable courier delivery app with Comfygen. Custom courier app development services with AI dispatch, real-time tracking & secure payments. Get a free quote.
" />



        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
       {/* <Navbar /> */}
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
    
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <BusinessSolustion BusinessSolustion={JSON_DATA.BusinessSolustion} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <FeaturesNewSection FData={JSON_DATA.FData} />
      {/* <Emerging emerging={JSON_DATA.EmergingData} /> */}
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <DeliveryCostTable Cost={JSON_DATA.DeliveryCost} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <DeliverySection hideUrl="https://www.comfygen.com/courier-delivery-app-development" />
      <ClientStories />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />
    </>
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=courier-delivery-app-development&per_page=3`
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


