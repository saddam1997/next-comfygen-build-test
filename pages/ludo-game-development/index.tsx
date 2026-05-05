
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ludo.json";

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


const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
});

import TechStacks from "../../components/TechStacks";

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const Features = dynamic(() => import("./components/Features"), {
  ssr: true,
});

const CardsGames = dynamic(() => import("./components/CardsGames"), {
  ssr: true,
});











export default function LudoGame(props: any) {
  let { initialData } = props;

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Top Ludo Game Development Company in India & USA | Comfygen</title>
        <meta
          name="description"
          content="Comfygen is a leading Ludo game development company in India and the USA. We build advanced, feature-rich Ludo apps with real-money play, multiplayer, and secure systems. Hire top Ludo game developers today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ludo-game-development"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Top Ludo Game Development Company in India & USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Get high-quality, custom Ludo game development services with Comfygen. We specialize in real-money Ludo apps, 3D gameplay, AI/ML, and multiplayer features."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ludo-game-development"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-portfolio.webp"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Top Ludo Game Development Company in India & USA | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Build secure, engaging Ludo game apps with Comfygen – the trusted Ludo game development company in India & the USA."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-portfolio.webp"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Ludo game app developer India USA" />
        <meta name="summary" content="Best Ludo game app development services by Comfygen" />
        <meta name="author" content="Comfygen Private Limited" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Private Limited" />
        <meta name="category" content="Ludo Game Development Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Ludo game app development in India and the USA" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5, user-scalable=yes" />
        <meta property="og:locale" content="en_US" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="business:contact_data:locality" content="Jaipur" />
        <meta name="og:latitude" content="26.912434" />
        <meta name="og:longitude" content="75.787271" />
        <meta name="fb:page_id" content="110909321596135" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>



      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Software} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <Features Data={JSON_DATA.FeaturesLudo} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <Solution techData={JSON_DATA.Emerging} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <CardsGames Data={JSON_DATA.GameCardData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />
    </div>
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