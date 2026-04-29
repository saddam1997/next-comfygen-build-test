import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaversegame.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

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
const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-gray-100 rounded-lg`} />
);



import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});

import IndustryGrid from "../../components/IndustryGrid";
import Solution from "../../components/Solution";






export default function Ecommerce(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Board Game Development Company | Custom Board Game Solutions
        </title>
        <meta
          name="description"
          content="Comfygen Technologies is a leading board game development company offering innovative and engaging board game solutions. Our expert designers and developers create interactive, fun, and scalable gaming experiences."
        />

        <meta
          name="keywords"
          content="Board Game Development, Online Board Game Development Company, Board Game Development Company India, Board Game Developers, Decentralized Gaming Platform Development, Multiplayer Board Game Development, AR-Enhanced Board Game Development"
        />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/board-game-development" />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Board Game Development Company in India & USA | Comfygen" />
        <meta name="twitter:description" content="Looking for professional board game development? Comfygen Technologies delivers custom board game design, development, and testing services to bring your creative gaming ideas to life." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta property="og:image:alt" content="Board Game Development" />
        <meta property="og:url" content="https://www.comfygen.com/board-game-development" />
        <meta property="og:title" content="Custom Board Game Development Services | Hire Expert Game Developers" />
        <meta property="og:description" content="Build exciting board games with Comfygen’s skilled developers and designers. We create innovative, engaging, and market-ready board games for web, mobile, and desktop platforms." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

        {/* {metaTags} */}

      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <IndustryGrid />
      <Solution techData={JSON_DATA.Chooseyourdesired2} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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

