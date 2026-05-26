import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/startApp.json";

import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import WhoCanStart from "../../../components/WhoCanStart";

import ReviewCard from "../../../components/ReviewCard";

const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../../components/ProcesSection"), {
  ssr: true,
});

import TechStacks from "../../../components/TechStacks";

const WhyChooseSection = dynamic(() => import("../../../components/WhyChooseSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../../components/ClientStories"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(
  () => import("../../../components/BlogSection"),
  { ssr: true }
);




export default function Mobile(props:any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Top Startup App Development Company in Canada | App Development For Startup
        </title>
        <meta
          name="description"
          content="Comfygen is a leading startup app development company in Canada offering scalable startup app development services, MVP development, and custom mobile apps to help founders launch and grow faster."
        />

        <meta name="keywords" content="startup business app development, startup app development, mvp app development for startups, product development for startups, startup software development, startup web app development, custom application development for startups, saas product development for startups, ui ux design for startup apps" />

        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/startup-app-development"
        />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Startup App Development Services for Startups & Entrepreneurs" />
        <meta name="twitter:description" content=" Build scalable mobile and web apps with Comfygen. We offer startup app development, MVP, SaaS solutions & dedicated developers." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/startup-app-development/Startup-App-Development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/startup-app-development/Startup-App-Development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/startup-app-development/Startup-App-Development.webp" />
        <meta property="og:image:alt" content="Startup App Development" />
        <meta property="og:url" content="https://www.comfygen.com/ca/startup-app-development" />
        <meta property="og:title" content="Custom Startup App Development Company" />
        <meta property="og:description" content="Comfygen helps startups build secure, scalable apps. Get mobile apps, web apps, MVP development & post-launch support." />




        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData),
          }}
        />

      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <WhoCanStart cards={JSON_DATA?.WhoCanStartData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <WhoCanStart cards={JSON_DATA?.Technologies} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
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
