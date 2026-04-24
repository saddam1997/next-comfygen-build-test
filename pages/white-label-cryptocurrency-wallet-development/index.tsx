
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowallet.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const IndustriesSection = dynamic(() => import("../../components/IndustriesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


export default function Page(props:any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <title>
          White Label Cryptocurrency Wallet Development Services | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises."
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/white-label-cryptocurrency-wallet-development"
        />


        <meta name="keywords" content="White Label Crypto Wallet Development, Multi-Currency Crypto Wallet Solutions, NFT Wallet Development, DeFi Wallet Integration, Custom Crypto Wallet Solutions"></meta>


        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"></meta>

        {/* <!-- Compatibili/ty Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and/ Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="White Label Cryptocurrency Wallet Development" />


        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}

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


        {/* <!-- Geo Location Meta --> */}

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />


        {/* <!-- Open Graph (OG) Tag --> */}

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp"
        />
        <meta
          property="og:title"
          content="White Label Cryptocurrency Wallet Development Services | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises."
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="White Label Cryptocurrency Wallet Development | Comfygen"

        />
        <meta
          name="twitter:description"
          content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp" />
        <meta property="og:image:alt" content="White Label Cryptocurrency Wallet Development" />

        <meta property="og:title" content="White Label Cryptocurrency Wallet Development | Comfygen" />
        <meta property="og:description" content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises." />


   
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}

      <div className="overflow-hidden lg:pt-0 pt-16">
        <HeroSectionforHome herosection={JSON_DATA.Herosection}/>
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData}/>
        <AboutComponent AboutData={JSON_DATA.AboutSection}/>
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <IndustriesSection Industries={JSON_DATA.Industries} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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