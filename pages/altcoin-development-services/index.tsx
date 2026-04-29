
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/altcoin.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);
import InformationSection from "../../components/InformationSection";

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

import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});



export default function Altcoin(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Altcoin Creation & Development Services | Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen is a top altcoin development company, offering custom cryptocurrency and token development, altcoin creation, and exchange integration. We deliver secure, scalable blockchain development solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/altcoin-development-services"
        />


        <meta
          name="og:title"
          content="Altcoin Creation | Altcoin Development Services  | Altcoin Development Company"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/altcoin-development-services"
        />
        <meta
          name="og:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Comfygen is a leading Altcoin Development Company in India offering custom cryptocurrency and token development services. From altcoin creation to exchange integration, we deliver secure, scalable blockchain solutions tailored for startups and enterprises worldwide."
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Altcoin Creation | Altcoin Development Services  | Altcoin Development Company"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a leading Altcoin Development Company in India offering custom cryptocurrency and token development services. From altcoin creation to exchange integration, we deliver secure, scalable blockchain solutions tailored for startups and enterprises worldwide."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta
          property="og:image:alt"
          content="Altcoin Creation | Altcoin Development Services  | Altcoin Development Company"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
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


