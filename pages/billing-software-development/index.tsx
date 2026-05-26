import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./billing.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import ReviewCard from "../../components/ReviewCard";

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});
const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
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
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);

import TechStackSection from "../../components/TechStackSection";


export default function ClinicalApp(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Billing Software Development Company | Comfygen Technologies</title>
        <meta
          name="description"
          content="Comfygen is a leading billing software development company delivering custom, cloud-based, GST-compliant billing solutions for scalable business growth."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/billing-software-development "
        />
        <meta name="keywords" content="best billing software development company, billing software development company, billing software development services, custom billing software development, billing software developers, billing software development solutions, online billing software development, cloud billing software development, GST billing software development, billing software company, billing software services, billing software development firm, custom billing software solutions" />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Billing Software Development Company | Comfygen Technologies" />
        <meta name="twitter:description" content=" Custom billing software development solutions with GST compliance, automation, and secure payment integrations." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/billing-software-development/Billing Software Development Company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/billing-software-development/Billing Software Development Company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/billing-software-development/Billing Software Development Company.webp" />
        <meta property="og:image:alt" content="Billing Software Development" />
        <meta property="og:url" content="https://www.comfygen.com/billing-software-development" />
        <meta property="og:title" content="Billing Software Development Company | Comfygen Technologies" />
        <meta property="og:description" content="Build scalable, secure, and custom billing software with Comfygen Technologies to automate invoicing, payments, and financial operations." />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
        <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.NFTBenefits} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <TechStackSection deliveryApps={JSON_DATA.deliveryApps} />
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
