
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./grocery-app-development.json";

import HeroSectionforHomeTest from "../../../components/HeroSectionforHomeTest";


const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});


const FeaturesNewSection = dynamic(() => import("../../../components/FeaturesNewSection"), {
  ssr: true,
});

const Trending = dynamic(() => import("../../../components/Trending"), {
  ssr: true,
});


const AppClone = dynamic(() => import("../../../components/AppClone"), {
  ssr: true,
});


const WhyChooseSection = dynamic(() => import("../../../components/WhyChooseSection"), {
  ssr: true,
});


const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"), {
  ssr: true,
});

const TechStacks = dynamic(() => import("../../../components/TechStacks"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../../components/ProcesSection"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});


const ClientStories = dynamic(() => import("../../../components/ClientStories"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(() => import("../../../components/BlogSection"), {
  ssr: true,
});


const ReviewCard = dynamic(() => import("../../../components/ReviewCard"), {
  ssr: true,
});


const GroceryAppScreens = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/GroceryAppScreens"), {
  ssr: true,
});

import EcommerceHeader from "../../../components/Newcomponet/layout/EcommerceHeader";

const Solution = dynamic(() => import("../../../components/Solution"), {
  ssr: true,
});

const DeliverySection = dynamic(() => import("../../../components/Newcomponet/comman/DeliverySection"), {
  ssr: true,
});




export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Grocery Delivery App Development Company | Custom & Scalable Solutions
        </title>
        <meta
          name="description"
          content=" Build a custom grocery delivery app with Comfygen. We develop multi-vendor, white-label & Instacart-style platforms for startups & enterprises. Multiple projects delivered. "
        />

        <meta
          name="keywords"
          content="grocery mobile app development, grocery delivery app development, App Like Walmart, AI-Based Grocery App Development, Blockchain-Based Grocery App Development, Custom Grocery App Development, Grocery App Consulting Services, Grocery Store App Development, App Like Target, App Like Shipt, App Like Zepto, App Like Blinkit, On-Demand Grocery Delivery App Development, Hyperlocal Grocery App Development, Marketplace Grocery App Development, Grocery Chain App Development, Supermarket App Development Solution, Grocery Loyalty App Development, Grocery Inventory Management App Development, B2B Grocery App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/ecommerce/grocery"
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
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

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

        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="Best Grocery Delivery App Development Company" />
        <meta name="twitter:title" content="  Grocery Delivery App Development Company | Custom & Scalable Solutions" />
        <meta name="twitter:description" content="Build a custom grocery delivery app with Comfygen. We develop multi-vendor, white-label & Instacart-style platforms for startups & enterprises. Multiple projects delivered." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-og.webp" />
        <meta property="og:image:alt" content="Grocery Delivery App Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-og.webp" />
        <meta property="og:title" content="Readymade Grocery Delivery App Development Company" />
        <meta name="og:description" content=" Build a custom grocery delivery app with Comfygen. We develop multi-vendor, white-label & Instacart-style platforms for startups & enterprises. Multiple projects delivered." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData),
          }}
        />
      </Head>
      <div className="min-h-[60px] md:min-h-[70px]">
        <EcommerceHeader />
      </div>

      <div className="overflow-hidden ">
        <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.Business} />
        <AppClone SliderDATA={JSON_DATA.Industries} />
        <FeaturesNewSection FData={JSON_DATA.FData} />
        <GroceryAppScreens />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.AIFeatures} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <Trending
          trendingData={JSON_DATA.trendingData}
          heading="Top-Rated App Development Company Recognized by Global Platforms"
        />
        <DeliverySection hideUrl={"grocery-app-development"} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
        <FaqSection faqData={JSON_DATA.Frequently} />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=grocery-delivery-app-development&per_page=3`
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
