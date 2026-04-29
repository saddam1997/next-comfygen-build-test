
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./fmcg.json";
import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Trending = dynamic(() => import("../../../components/Trending"), {
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


const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(() => import("../../../components/BlogSection"), {
  ssr: true,
});


const ReviewCard = dynamic(() => import("../../../components/ReviewCard"), {
  ssr: true,
});


const Solution = dynamic(() => import("../../../components/Solution"), {
  ssr: true,
});

const DeliverySection = dynamic(() => import("../../../components/Newcomponet/comman/DeliverySection"), {
  ssr: true,
});
const Consultancy = dynamic(() => import("../../../components/Consultancy"), {
  ssr: true,
});

import IndustryGrid from "../../../components/IndustryGrid";

export default function ClinicalApp(props: any) {
  let { initialData } = props;




  return (
    <>
      <Head>
        <title>
          Top FMCG Delivery App Development Company | On-Demand Delivery Apps
        </title>
        <meta
          name="description"
          content="Comfygen offers FMCG delivery app development services to build secure, fast, and user-friendly mobile apps with real-time tracking, automated orders, and smooth delivery management."
        />
        <link rel="canonical" href="https://www.comfygen.com/ecommerce/fmcg " />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

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
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/fmcg/fmcg-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/fmcg/fmcg-og.webp"
        />
        <meta property="og:image:alt" content="FMCG App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ecommerce/fmcg"
        />
        <meta
          property="og:title"
          content="FMCG Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for reliable FMCG mobile app development? Comfygen develops the best delivery app platforms for groceries, pharma, and consumer goods. Tailored FMCG app development solutions for enterprise and startup growth."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom FMCG App Development Company | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Hire expert FMCG app developers for custom delivery app development solutions. We build powerful mobile apps for FMCG startups, supermarkets, and direct-to-consumer brands with real-time tracking & smart reordering."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/fmcg/fmcg-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="FMCG App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ecommerce/fmcg"
        />
        <meta
          property="og:title"
          content="FMCG Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for reliable FMCG mobile app development? Comfygen develops the best delivery app platforms for groceries, pharma, and consumer goods. Tailored FMCG app development solutions for enterprise and startup growth."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData),
          }}
        />
      </Head>
      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.AIFeatures} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />

        <Trending
          trendingData={JSON_DATA.trendingData}
          heading="Top-Rated App Development Company Recognized by Global Platforms"
        />
        <Consultancy consultancyData={JSON_DATA.ModelsSec} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <IndustryGrid />
        <TechStacks
          TabData={JSON_DATA.Tabs}
          TechData={JSON_DATA.TechstackData}
          Default={JSON_DATA.Tabs[0]}
        />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <DeliverySection />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />

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
