
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./quick-commerce-app-development.json";
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";
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
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});
import TechStackSection from "../../components/TechStackSection";

import AppClone from "../../components/AppClone"
const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

import ReviewCard from "../../components/ReviewCard";
const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});
const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});
import Emerging from "../../components/Emerging";
import TechStacks from "../../components/TechStacks";
import Trending from "../../components/Trending";
import IndustryGrid from "../../components/IndustryGrid";
const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
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

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);



export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let { Frequently } = JSON_DATA;

  // const [talkToExpertModal, setTalkToExpertModal] = useState(false);



  // const openModal = () => {
  //   setTalkToExpertModal(true);
  // };







  return (
    <>
      <Head>
        <title>Quick Commerce App Development Company for Startups & Enterprises</title>
        <meta name="description" content="Looking for a quick commerce app development company? We build high-performance instant delivery apps with smart routing, dark store integration, and seamless user experience." />
        <link rel="canonical" href="https://www.comfygen.com/quick-commerce-app-development" />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen" />
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
        <meta name="keywords" content="Quick Commerce App Development, Quick Commerce App Development Company, quick commerce application development company, Qcommerce app development, Quick Commerce App Development Services, Qcommerce app developers, Qcommerce mobile app developers, Zepto Clone App, GoPuff Clone App, JioMart Express Clone App, Zomato Clone App, Swiggy Clone App, PillPack Clone App, 1mg Clone App, ZocDoc Clone App, XpressBees Clone, Lalamove Clone App, Nykaa Clone App, Purplle Clone App" />

        {/* Open Graph Meta Tags */}
        <meta name="og:title" content="Quick Commerce App Development Company for Startups & Enterprises" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://www.comfygen.com/quick-commerce-app-development" />
        <meta name="og:image" content="https://www.comfygen.com/comfygen-images/quick-commerce-app-development/quick-commerce-app-development-og.webp" />
        <meta name="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/quick-commerce-app-development/quick-commerce-app-development-og.webp" />
        <meta name="og:image:type" content="image/webp" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="og:image:alt" content="Quick Commerce App Development" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta name="og:description" content="Looking for a quick commerce app development company? We build high-performance instant delivery apps with smart routing, dark store integration, and seamless user experience." />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quick Commerce App Development Company for Startups & Enterprises" />
        <meta name="twitter:description" content="Looking for a quick commerce app development company? We build high-performance instant delivery apps with smart routing, dark store integration, and seamless user experience." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/quick-commerce-app-development/quick-commerce-app-development-og.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData)
          }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <AppClone SliderDATA={JSON_DATA.Clones} />

      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Solution techData={JSON_DATA.AIPowered} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <IndustryGrid />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
 
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <TechStackSection deliveryApps={JSON_DATA.deliveryApps} />

      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <ClientStories />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
      <BlogSection initialData={initialData} />

    </>
  );
}







export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=quick-commerce-app-development&per_page=3`
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

