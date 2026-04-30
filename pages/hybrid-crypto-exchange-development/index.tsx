
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hybridcryptoexchangedevelopment.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import TechStacks from "../../components/TechStacks";
const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"),
  { ssr: true },
);

import ReviewCard from "../../components/ReviewCard";

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true },
);

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"),
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

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"),
  { ssr: true },
);
import Solution from "../../components/Solution";

import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});

export default function Ecommerce(props: any) {
  let { initialData } = props;




  return (
    <>
      <Head>
        <title>Hybrid Crypto Exchange Development servcie | Comfygen</title>
        <meta
          name="description"
          content="Comfygen offers hybrid crypto exchange development services to build secure, scalable, and high-performance trading platforms combining centralized speed with decentralized security."
        />
        <meta
          name="keywords"
          content="hybrid crypto exchange development, hybrid crypto exchange solutions, decentralized and centralized exchange, secure crypto trading, crypto exchange platform, hybrid exchange developers, crypto exchange development services"
        />
        <link rel="canonical" href="https://www.comfygen.com/hybrid-crypto-exchange-development" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hybrid Crypto Exchange Development | Best Hybrid Crypto Exchange Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.comfygen.com/hybrid-crypto-exchange-development" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/hybrid-crypto-exchange-development/hybrid-crypto-exchange-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/hybrid-crypto-exchange-development/hybrid-crypto-exchange-development-company.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hybrid Crypto Exchange Development Company" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:description" content="Comfygen offers top-tier hybrid crypto exchange development, blending centralized and decentralized features for secure, scalable, and efficient trading. Start building your exchange today!" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hybrid Crypto Exchange Development | Best Hybrid Crypto Exchange Solutions" />
        <meta name="twitter:description" content="Comfygen offers top-tier hybrid crypto exchange development, blending centralized and decentralized features for secure, scalable, and efficient trading. Start building your exchange today!" />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/hybrid-crypto-exchange-development/hybrid-crypto-exchange-development-og.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Hybrid Crypto Exchange Development",
              "operatingSystem": "Web, ANDROID, iOS",
              "applicationCategory": "FinanceApplication",
              "url": "https://www.comfygen.com/hybrid-crypto-exchange-development",
              "description": "Comfygen offers hybrid crypto exchange development services that blend the advantages of centralized and decentralized trading. Launch your secure and scalable exchange today!",
              "author": {
                "@type": "Organization",
                "name": "Comfygen Private Limited"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Comfygen Private Limited",
                "url": "https://www.comfygen.com"
              },
              "image": "https://www.comfygen.com/comfygen-images/hybrid-crypto-exchange-development/hybrid-crypto-exchange-development-og.webp"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />


      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.CardData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Consultancy consultancyData={JSON_DATA.Benefits} />
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