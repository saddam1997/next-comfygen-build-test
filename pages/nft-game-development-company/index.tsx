import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nftmarketplace.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"
import ReviewCard from "../../components/ReviewCard";

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});


const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});


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

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


import GameCard from "../../components/GameCard";

export default function Ecommerce(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Best NFT Game Development Company | NFT Game Development Services
        </title>
        <meta
          name="description"
          content="Comfygen is the best NFT game development company offering secure, scalable, and engaging NFT games with smart contract integration, tokenized assets, and interactive gameplay for startups and enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-game-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="NFT Game Development Company | NFT Game Company | Build NFT Game | NFT Game Developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen specializes in delivering full-spectrum NFT Game development services backed by tailored technologies. Whether you need NFT Game development Organization or want to develop an NFT Game from the ground up, our rich experience NFT Game developers successfully cater to evolving and modern business needs. Our knowledge, experience, and expertise have helped us position ourselves as the best NFT Game development agency today!"
        />
        <meta
          property="og:twitter_title"
          content="NFT Game Development Company | NFT Game Development Services"
        />
        <meta
          property="og:twitter_description"
          content="When seeking to hire NFT Game Developers who possess the expertise to establish a robust and launch your own NFT Game that gives your customers a seamless buying experience, it's essential to find professionals who are adept in NFT Game blockchain technology. These NFT Game developers should have a deep understanding of blockchain technology, smart contracts, user experience (UX) design, security and compliance, and decentralized storage solutions like IPFS."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="NFT Game Development Company | NFT Software Development"
        />
        <meta
          name="summary"
          content="Choose Comfygen is a top NFT Game Development Company that offers the best NFT Game Development Services & NFT Game Development Solutions to Create NFT Game."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a White-label NFT Development Platform Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="NFT Game Development Company in India, USA"
          content="Comfygen is a prominent nft Game development company,helping businesses to Launch and deploy NFT trading platforms in coordination with certified NFT developers in the USA, UK, and India."
        />
        <meta
          name="category"
          content="NFT Game development company in the worldwide"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Complete NFT Game development company in the world"
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
          content="Best NFT Game Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/nft-game-development-company"
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
      </Head>
      <Navbar />
      {/* <HeroSectionforHome herosection={JSON_DATA.Herosection} /> */}
       <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      {/* <Milestones /> */}
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <InformationSection InfoSectionData={JSON_DATA?.InfoSection} />
      <Consultancy consultancyData={JSON_DATA.WhyNFTs} />
      <Solution techData={JSON_DATA.NFTBenefits} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <HireSection HireDeveloper={JSON_DATA.HireNFTDeveloper} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <GameCard GameCardData={JSON_DATA.GameCardData} />
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