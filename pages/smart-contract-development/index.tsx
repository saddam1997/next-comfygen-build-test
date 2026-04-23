
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/smartcontractdev.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls";
import Navbar from "../../components/Navbar";

/* ================= CLS SAFE DYNAMIC COMPONENTS ================= */

const withSkeleton = (height: string) => () =>
  <div className={`${height} w-full bg-gray-100 animate-pulse`} />;

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true, loading: withSkeleton("h-[500px]") }
);

const AboutComponent = dynamic(
  () => import("../../components/Abouts/AboutComponent"),
  { ssr: true, loading: withSkeleton("h-[400px]") }
);

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  { ssr: true, loading: withSkeleton("h-[500px]") }
);

const CallToActionSection = dynamic(
  () => import("../../components/CallToActionSection"),
  { ssr: true, loading: withSkeleton("h-[300px]") }
);

const Emerging = dynamic(
  () => import("../../components/Emerging"),
  { ssr: true, loading: withSkeleton("h-[450px]") }
);

const ProcesSection = dynamic(
  () => import("../../components/ProcesSection"),
  { ssr: true, loading: withSkeleton("h-[500px]") }
);

const TechStacks = dynamic(() => import("../../components/TechStacks"), {
  ssr: true,
});

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true, loading: withSkeleton("h-[450px]") }
);

const Consultancy = dynamic(
  () => import("../../components/Consultancy"),
  { ssr: true, loading: withSkeleton("h-[450px]") }
);

const HireSection = dynamic(
  () => import("../../components/HireSection"),
  { ssr: true, loading: withSkeleton("h-[450px]") }
);

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true, loading: withSkeleton("h-[400px]") }
);

const FaqSection = dynamic(
  () => import("../../components/FaqSection"),
  { ssr: true, loading: withSkeleton("h-[450px]") }
);

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true, loading: withSkeleton("h-[500px]") }
);



export default function Ecommerce(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Top Rated Smart Contract Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top rated smart contract development company delivering secure, scalable blockchain solutions for DeFi, NFTs, and enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/smart-contract-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Smart Contract Development Company | Custom Smart Contract Development Services"
        />
        <meta
          property="og:description"
          content="Partner with the best smart contract development company in India for custom smart contract development services. Build secure, automated, and efficient blockchain solutions for your business."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/smart-contract-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:12:49+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/smart-contract.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Smart Contract Development Company | Hire Our smart contract developer | Smart contract development company India"
        />
        <meta
          property="og:facebook_description"
          content="Looking for a Smart Contract Development Company in India? Hire our expert smart contract developers for secure and efficient blockchain solutions."
        />
        <meta
          property="og:twitter_title"
          content="Smart Contract Development Company India | Smart Contract Developer in India | Hire Blockchain Smart Contract Developer"
        />
        <meta
          property="og:twitter_description"
          content="Looking to engage a premier Smart Contract Development Company in India? Hire our seasoned Smart Contract Developers proficient in blockchain technology for unparalleled expertise in smart contract development."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Blockchain Smart Contract Development Industry | Hire Blockchain Smart Contract Development Services"
        />
        <meta
          name="summary"
          content="Smart Contract Development Services via Comfygen Privtate Limited: Are you Looking for a Smart Contract Development Company in India? Hire our expert smart contract developers for secure and efficient blockchain solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Smart Contract Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Smart Contract Development Company"
          content="Comfygen is a First Class Smart Contract Development Agency: We Build the Future of Business, One Blockchain Smart Contract Development Solution at a Time."
        />
        <meta
          name="category"
          content="Smart Contract Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Smart Contract Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Smart Contract Development Services Provider"
        />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.faqSchema) }}
        />
      </Head>

     <div className="overflow-x-hidden">

        {/* ================= FIXED NAVBAR (REAL CLS FIX) ================= */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
           {/* <Navbar /> */}
        </header>

        {/* spacer prevents layout shift */}
        <div className="h-[60px] md:h-[70px]" />

        {/* ================= HERO (CRITICAL FIX) ================= */}
        <section className="min-h-[85vh] md:min-h-[75vh]">
          <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        </section>

        {/* ================= SAFE SECTION WRAPPER SYSTEM ================= */}

        <section className="min-h-[450px]">
          <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        </section>

        <section className="min-h-[400px]">
          <AboutComponent AboutData={JSON_DATA.AboutSection} />
        </section>

        <section className="min-h-[400px]">
          <Emerging emerging={JSON_DATA.Contract} />
        </section>

        <section className="min-h-[400px]">
          <Consultancy consultancyData={JSON_DATA.consultancyData} />
        </section>

        <section className="min-h-[450px]">
          <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        </section>

        <section className="min-h-[300px]">
          <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        </section>

        <section className="min-h-[450px]">
          <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        </section>

        <section className="min-h-[400px]">
          <WhyChooseSection pageData={JSON_DATA.pageData} />
        </section>

        <section className="min-h-[400px]">
          <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        </section>

   <div className="">
        <TechStacks
          TabData={JSON_DATA.Tabs}
          TechData={JSON_DATA.TechstackData}
          Default={JSON_DATA.Tabs[0]}
        />
      </div>

        <ClientStories />

        <section className="min-h-[450px]">
          <FaqSection faqData={JSON_DATA.Frequently} title="" />
        </section>

        <section className="min-h-[500px]">
          <BlogSection initialData={initialData ?? []} />
        </section>

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
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}