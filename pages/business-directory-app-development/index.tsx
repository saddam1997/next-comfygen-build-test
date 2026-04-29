

import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"

import TechStacks from "../../components/TechStacks";

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);


const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

import ReviewCard from "../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);



const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
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
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-gray-100 rounded-lg`} />
);



const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => skeleton("h-[400px]"),
});



const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  {
    ssr: true,
  },
);

import Features from "../../components/Features";
import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});

export default function ClinicalApp(props: any) {
  let { initialData } = props;





  return (
    <>
      <Head>
        <title>Trusted Business Directory App Development Company | Comfygen</title>
        <meta
          name="description"
          content="Comfygen is the best business directory app development company offering custom business listing app development solutions with smart search, maps, reviews, and scalable features."
        />

        <meta
          name="keywords"
          content="Local Business Directory App Development, Niche Industry Directory App Development, B2B Business Listing App Development, B2C Business Directory App, Franchise Directory App, Multi-location Directory App, White-label Business Directory App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/business-directory-app-development"
        />







        <meta
          property="og:url"
          content="https://www.comfygen.com/business-directory-app-development"
        />
        <meta
          property="og:title"
          content="Top Business Directory App Development Company"
        />
        <meta
          property="og:description"
          content="Hire the best business directory app developers. We build powerful, feature-rich business review apps like Yelp, IndiaMart or Justdial for Android, iOS, and web platforms with full support and maintenance."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/business-directory-app-development/og1.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/business-directory-app-development/og1.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Business Directory App Development"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Develop Business Directory App with Comfygen | B2B & Local Listings"
        />
        <meta
          name="twitter:description"
          content="Comfygen Technologies helps you develop custom business directory apps tailored for B2B, B2C, or local markets. Our business directory apps are secure, fast, and optimized for user engagement and revenue generation."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/business-directory-app-development/og1.webp"
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
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.FeaturesData} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <Emerging emerging={JSON_DATA.EmergingData} />
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


