
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nftmarketplace.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome";

const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});


const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});


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



const Guidance = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Guidance"),
  { ssr: true }
);



export default function Page(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Best NFT Marketplace Development Company | Custom NFT Solutions
        </title>
        <meta
          name="description"
          content="Looking for the best NFT marketplace development company? We build secure, scalable NFT platforms with smart contracts, multi-wallet support, and advanced trading features."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-marketplace-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="NFT Marketplace Development Company | NFT Marketplace Company | Build NFT Marketplace | NFT Marketplace Developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen specializes in delivering full-spectrum NFT marketplace development services backed by tailored technologies. Whether you need NFT marketplace development Organization or want to develop an NFT marketplace from the ground up, our rich experience NFT marketplace developers successfully cater to evolving and modern business needs. Our knowledge, experience, and expertise have helped us position ourselves as the best NFT marketplace development agency today!"
        />
        <meta
          property="og:twitter_title"
          content="NFT Marketplace Development Company | NFT Marketplace Development Services"
        />
        <meta
          property="og:twitter_description"
          content="When seeking to hire NFT Marketplace Developers who possess the expertise to establish a robust and launch your own NFT marketplace that gives your customers a seamless buying experience, it's essential to find professionals who are adept in NFT Marketplace blockchain technology. These NFT Marketplace developers should have a deep understanding of blockchain technology, smart contracts, user experience (UX) design, security and compliance, and decentralized storage solutions like IPFS."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="NFT Marketplace Development Company | NFT Software Development"
        />
        <meta
          name="summary"
          content="Choose Comfygen is a top NFT Marketplace Development Company that offers the best NFT Marketplace Development Services & NFT Marketplace Development Solutions to Create NFT Marketplace."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a White-label NFT Development Platform Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="NFT Marketplace Development Company in India, USA"
          content="Comfygen is a prominent nft marketplace development company,helping businesses to Launch and deploy NFT trading platforms in coordination with certified NFT developers in the USA, UK, and India."
        />
        <meta
          name="category"
          content="NFT marketplace development company in the worldwide"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Complete NFT marketplace development company in the world"
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
          content="Best NFT Marketplace Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/nft-marketplace-development-company"
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
          content="https://www.comfygen.com/images/ogimages/blockchain-development-company.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.faqSchema) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
       <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
     
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <InformationSection InfoSectionData={JSON_DATA?.NFTvsCrypto} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <Consultancy consultancyData={JSON_DATA.NFTTechnologies} />
      <Solution techData={JSON_DATA.Marketplace} />
      <InformationSection InfoSectionData={JSON_DATA?.OwnNFT} />
      <Guidance />
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