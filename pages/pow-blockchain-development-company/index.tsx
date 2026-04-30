
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/pow.json";

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
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"


const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});


const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});


const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



export default function Ecommerce(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          PoW Blockchain Development Service | Secure Proof of Work Solutions
        </title>
        <meta
          name="description"
          content="Our PoW blockchain development service delivers secure, decentralized, and scalable blockchain networks using Proof of Work consensus for enhanced transparency and reliability."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/pow-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="POW Development Services | HIRE POW DEVELOPERS | POW blockchain framework | POW Blockchain Technology"
        />
        <meta
          property="og:facebook_description"
          content="Choose POW blockchain development company to establish a customized and self-sustaining POW SDK framework. We stand as a prominent POW blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta
          property="og:twitter_title"
          content="Brilliant POW Development Services | HIRE POW DEVELOPERS | POW blockchain framework | POW Blockchain Technology | POW Blockchain development solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Hire our POW developers who are well-versed to establish a customized and self-sustaining POW SDK framework. We stand as a prominent POW blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="POW Blockchain Development Industry | POW Development Services"
        />
        <meta
          name="summary"
          content="Choose POW blockchain development to establish a customized and self-sustaining POW SDK framework. We stand as a prominent POW Development Company in India & the USA catering to a wide array of businesses."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a POW Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="POW Development Company in India, USA"
          content="Comfygen is a leading White label POW Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="POW Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="POW Blockchain Development Firm in India"
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
          content="POW Blockchain Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/pow-blockchain-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:09:06+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/pow-blockchain-development-company/blockchain-development-company.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />


        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        /> */}
      </Head>

      <div className="overflow-hidden ">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <InformationSection InfoSectionData={JSON_DATA?.InfoSection} />
        <Solution techData={JSON_DATA.AIPowered} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.Develop} />
        <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Solution techData={JSON_DATA.AIPowered} />
        <FaqSection faqData={JSON_DATA.Frequently} title="" />
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

