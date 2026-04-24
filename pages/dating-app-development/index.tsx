import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";

import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls";

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true }
);


import AboutComponent from "../../components/Abouts/AboutComponent";

const CardGrid = dynamic(() => import("../../components/CardGrid"),
  { ssr: true }
);



const TechStacks = dynamic(() => import("../../components/TechStacks"),
  { ssr: true }
);

import Trending from "../../components/Trending";

const Features = dynamic( () => import("../../components/Features"),
  { ssr: true}
);

import CallToActionSection from "../../components/CallToActionSection";

import Emerging from "../../components/Emerging";

const AppCard = dynamic(() => import("../../components/AppCard"),
  { ssr: true }
);


const ReviewCard = dynamic(() => import("../../components/ReviewCard"),
  { ssr: true }
);

const Consultancy = dynamic(() => import("../../components/Consultancy"),
  { ssr: true,}
);

const PortfolioSection = dynamic( () => import("../../components/PortfolioSection"),
  { ssr: true, }
);

import WhyChooseSection from "../../components/WhyChooseSection";

import ProcesSection from "../../components/ProcesSection";

import HireSection from "../../components/HireSection";

const FaqSection = dynamic(() => import("../../components/FaqSection"),
  { ssr: true}
);

const ClientStories = dynamic(() => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(() => import("../../components/BlogSection"),
  { ssr: true }
);

const BusinessSolustion = dynamic(() => import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"),
  { ssr: true}
);
export default function Ecommerce(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>Custom Dating App Development Company in India | Comfygen</title>
        <meta name="description" content=" Comfygen is a top dating app development company offering custom, secure, and AI-powered dating app development services for startups and enterprises." />
        <link rel="canonical" href="https://www.comfygen.com/dating-app-development" />

        <meta name="keywords" content="Matchmaking Dating Apps Development, Niche Dating App Development, Social Dating App Development, Video Dating App Development, Casual Dating App Development, Astrology Dating App Development, Community-Based Dating App Development, Android Dating App Development, iOS Dating App Development, Dating Website Development, Tinder Clone Development, AI-Based Matchmaking, AI-based Dating App Development, Blockchain-based Dating App Development" />


        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:url" content="https://www.comfygen.com/dating-app-development" />
        <meta property="og:title" content="Custom Dating App Development Company in India | Comfygen" />
        <meta property="og:description" content="Comfygen is a top dating app development company offering custom, secure, and AI-powered dating app development services for startups and enterprises." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/dating-app-development/dating-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/dating-app-development/dating-app-development.webp" />
        <meta property="og:image:alt" content="Dating App Development" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:13:21+00:00" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Dating App Development Company in India | Comfygen" />
        <meta name="twitter:description" content="Comfygen is a top dating app development company offering custom, secure, and AI-powered dating app development services for startups and enterprises." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/dating-app-development/dating-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      {/* ================= HERO (CRITICAL CLS FIX) ================= */}
      <div className="min-h-[90vh] md:min-h-[80vh]">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      </div>

      {/* ================= SECTIONS WRAPPED WITH MIN HEIGHT ================= */}

      <div className="min-h-[500px]">
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      </div>

      <div className="min-h-[400px]">
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
      </div>

      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />

      <div className="min-h-[400px]">
        <CardGrid techData={JSON_DATA.GridData} />
      </div>

      <div className="min-h-[400px]">
        <AppCard Data={JSON_DATA.CardClone} />
      </div>

      <div className="min-h-[500px]">
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      </div>

      <div className="min-h-[300px]">
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      </div>

      <div className="min-h-[500px]">
        <Features featuresData={JSON_DATA.featuresData} />
      </div>

      <div className="min-h-[450px]">
        <BusinessSolustion
          imageSrc="https://www.comfygen.com/comfygen-images/dating-app-development/ai-dating.webp"
          BusinessSolustion={JSON_DATA.BusinessSolustion}
        />
      </div>

      <div className="min-h-[450px]">
        <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      </div>

      {/* ✅ SAFE DEFAULT PROP */}
      <TechStacks
        TabData={JSON_DATA?.Tabs ?? []}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA?.Tabs?.[0] ?? null}
      />

      <div className="min-h-[400px]">
        <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      </div>

      <div className="min-h-[400px]">
        <Emerging emerging={JSON_DATA.EmergingData} />
      </div>

      <div className="min-h-[400px]">
        <WhyChooseSection pageData={JSON_DATA.pageData} />
      </div>

      <ClientStories />

      <div className="min-h-[400px]">
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      </div>

      <div className="min-h-[450px]">
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
      </div>

      <div className="min-h-[400px]">
        <FaqSection faqData={JSON_DATA.Frequently} />
      </div>

      {/* ================= BLOG (API SAFE WRAP) ================= */}
      <div className="min-h-[500px]">
        <BlogSection initialData={initialData ?? []} />
      </div>






    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=dating-app-development&per_page=3`
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