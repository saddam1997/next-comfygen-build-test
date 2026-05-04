
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hyperledgerblockchain.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"),
  { ssr: true },
);

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
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


export default function Blockchain(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Hyperledger Blockchain Development Services | Solutions
        </title>

        <meta
          name="description"
          content="Hyperledger blockchain development service for secure, permissioned enterprise networks with AI integration and scalability Hyperledger blockchain development solution."
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/hyperledger-blockchain-development"
        />
        {/* keywords */}
        <meta name="keywords" content="Hyperledger Blockchain Development, Hyperledger Fabric Development, Hyperledger Sawtooth Development, Hyperledger Indy Solutions, Hyperledger Iroha Development, Hyperledger Besu Development, Enterprise Blockchain Consulting, Private Blockchain Development, Permissioned Blockchain Solutions, Decentralized Application Development, Blockchain Integration Services, Smart Contract Development, Custom Blockchain Applications, Supply Chain Blockchain Solutions, Blockchain for Healthcare, Blockchain for Finance, Blockchain Consulting Services" />


        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Hyperledger Blockchain Development" />


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


        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}/
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

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyperledger Blockchain Development | AI-Driven Enterprise Solutions" />
        <meta name="twitter:description" content=" Comfygen’s Hyperledger blockchain expertise to build secure, scalable, and AI-powered enterprise solutions. Drive innovation, transparency, and efficiency with next-gen blockchain frameworks." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/hyperledger-blockchain-development/hyperledger-blockchain-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/hyperledger-blockchain-development/hyperledger-blockchain-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/hyperledger-blockchain-development/hyperledger-blockchain-development.webp" />
        <meta property="og:image:alt" content="Hyperledger Blockchain Development" />
        <meta property="og:url" content="https://www.comfygen.com/data/sales-dashboard" />
        <meta property="og:title" content="Hyperledger Blockchain Development Services | Enterprise-Grade AI Solutions" />
        <meta property="og:description" content="Comfygen’s Hyperledger Blockchain Development services. We design secure, scalable, AI-integrated blockchain frameworks for finance, healthcare, retail, and supply chain industries. Future-ready enterprise solutions you can trust." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

      </Head>

      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.Trading} />
        <Solution techData={JSON_DATA.Hyperledger} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Consultancy consultancyData={JSON_DATA.ModelsSec} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
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