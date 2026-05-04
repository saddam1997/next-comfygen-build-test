import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ios.json";
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
import IndustryGrid from "../../components/IndustryGrid";

export default function Mobile(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Best iOS App Development Company | Custom iPhone App Developers</title>

        <meta
          name="description"
          content="Comfygen is the best iOS app development company delivering custom iPhone, iPad, and iOS applications with modern UI/UX, scalable architecture, and high-performance mobile solutions."
        />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="iOS App Development Company | Custom iPhone & iPad App Solutions - Comfygen"
        />
        <meta
          name="twitter:description"
          content="Build high-performance iOS apps with Comfygen. We create secure, fast, and user-friendly iPhone and iPad applications using Swift, SwiftUI, and the latest Apple technologies."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-ios-app-image.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Custom iOS App Development by Comfygen"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="ADD-IMAGE-URL" />
        <meta property="og:image:secure_url" content="ADD-IMAGE-URL" />
        <meta
          property="og:image:alt"
          content="iOS App Development Company - Comfygen"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ios-app-development "
        />
        <meta
          property="og:title"
          content="Comfygen iOS App Development Services | Custom iPhone & iPad App Solutions"
        />
        <meta
          property="og:description"
          content="Build high-quality iOS applications with Comfygen. We develop secure, scalable, and user-friendly iPhone and iPad apps using Swift, SwiftUI, and the latest Apple technologies."
        />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      {/* <Header /> */}

      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Solution techData={JSON_DATA.Trading} />
        <IndustryGrid />
        <InformationSection InfoSectionData={JSON_DATA?.Information} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <ClientStories />
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

