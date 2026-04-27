
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ethereumblock.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true,},
);
const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {ssr: true,},
);

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  {
    ssr: true,
  },
);

const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  {
    ssr: true,
  },
);

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});


const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


import ReviewCard from "../../components/ReviewCard";
import AboutComponent from "../../components/Abouts/AboutComponent";
import TechStacks from "../../components/TechStacks";


export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Best Ethereum Blockchain Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is the best Ethereum blockchain development company, offering secure, scalable, and customized blockchain solutions. Build smart contracts, DApps, DeFi platforms, and tokenization solutions."
        />

        <link rel="canonical" href="https://www.comfygen.com/ethereum-blockchain-development-company" />

        {/* <!-- Robots → */}
        <meta name="keywords" content="Ethereum DApp Development, Smart Contract Development, Ethereum Token Development, DeFi Development Solutions, NFT Marketplace Development, Ethereum Wallet & Exchange Development, Enterprise Ethereum Solutions" />


        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Ethereum Blockchain Development" />


        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta/ --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


        {/* <!-- Twit/ter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ethereum Blockchain Development Company | Hire Expert Ethereum Developers" />
        <meta name=" twitter: description" content="Comfygen offers expert Ethereum development services, including DApps, NFTs, DeFi platforms, and smart contracts. Hire certified Ethereum developers to scale your blockchain solutions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum-blockchain-development-company.webp " />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* <!-- Faceb/ook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum-blockchain-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum-blockchain-development-company.webp" />
        <meta property="og:image:alt" content="Ethereum Blockchain Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/ethereum-blockchain-development-company" />
        <meta property="og:title" content="Ethereum Blockchain Development Company | Secure, Scalable & User-Friendly" />
        <meta property="og: description" content=" Comfygen is a top Ethereum Blockchain Development Company offering DApp, DeFi, NFT, and smart contract solutions. Hire certified Ethereum developers for secure, scalable, and future-ready blockchain applications." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.AIFeatures} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <WhyChooseSection pageData={JSON_DATA.PageData} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
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