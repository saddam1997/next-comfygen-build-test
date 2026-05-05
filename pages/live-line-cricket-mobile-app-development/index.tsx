
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/livelinecricketmobile.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const InformationSection = dynamic(() => import("../../components/InformationSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});


const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});


import TechStacks from "../../components/TechStacks";


const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

import Features from "../../components/Features";

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});


export default function Ecommerce(props) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Live Line Cricket Mobile App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is the best live line cricket mobile app development company, delivering fast and reliable real-time cricket updates. Get ball-by-ball scores, instant match alerts, live commentary, and accurate stats."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/live-line-cricket-mobile-app-development"
        />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta name="twitter:title" content="Cricket Live Line Mobile App Development Company" />
        <meta name=" twitter: description" content="Build high-speed Cricket Live Line mobile apps with Comfygen. Deliver real-time scores, live streaming, player stats, and interactive features for cricket fans worldwide." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta property="og:image:alt" content="Cricket Live Line Mobile App Development" />
        <meta property="og:url" content="https://www.comfygen.com/live-line-cricket-mobile-app-development" />
        <meta property="og:title" content="Cricket Live Line Mobile App Development Company | Comfygen" />
        <meta property="og:description" content="Build high-speed Cricket Live Line mobile apps with Comfygen. Deliver real-time scores, live streaming, player stats, and interactive features for cricket fans worldwide." />
        <meta property="og:type" content="website" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>
      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <InformationSection InfoSectionData={JSON_DATA?.Information} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Features featuresData={JSON_DATA.FeaturesData} />
        <Solution techData={JSON_DATA.Trading} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <ClientStories />
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
