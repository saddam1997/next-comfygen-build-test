
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/dpos.json";
import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});
const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Solution from "../../../components/Solution";
import InformationSection from "../../../components/InformationSection"
import Features from "../../../components/Features";
const Consultancy = dynamic(() => import("../../../components/Consultancy"),
  { ssr: true }
);
import ReviewCard from "../../../components/ReviewCard";
const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"), {
  ssr: true,
});
const ProcesSection = dynamic(() => import("../../../components/ProcesSection"), {
  ssr: true,
});
import TechStacks from "../../../components/TechStacks";
const WhyChooseSection = dynamic(() => import("../../../components/WhyChooseSection"), {
  ssr: true,
});
const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});
const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});
const BlogSection = dynamic(() => import("../../../components/BlogSection"),
  { ssr: true }
);

export default function Ecommerce(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          DPoS Blockchain Development Company In Canada for Enterprises | Comfygen
        </title>
        <meta
          name="description"
          content="DPoS blockchain development Company provide secure, scalable, and high-performance blockchain app development solutions for enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/dpos-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="DPoS Blockchain Development Company | Hire expert DPoS blockchain developers."
        />
        <meta
          property="og:facebook_description"
          content="Take your project to the next level with our exceptional DApp development company. As specialists in DPoS development and DPoS blockchain development, we offer tailored solutions to meet your specific requirements."
        />
        <meta
          property="og:twitter_title"
          content="DPoS development company | DPoS blockchain development company | DApp development company"
        />
        <meta
          property="og:twitter_description"
          content="Experience the difference with our distinguished DPoS blockchain development services. Our committed team offers comprehensive DApp development solutions alongside impeccable DPoS development expertise, positioning us as a notable DPoS blockchain development company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="DPoS Blockchain Development Company | Readymade DPoS Blockchain Development Company | Hire expert DPoS blockchain developers"
        />
        <meta
          name="summary"
          content="DPoS Blockchain Development Company | Readymade DPoS Blockchain Development Company || Comfygen Privtate Limited: Are you Looking for a Hire expert DPoS blockchain developers in India? Hire expert DPoS blockchain developers for secure and efficient NFT blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a DPoS Blockchain Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="DPoS Blockchain Development Company"
          content="Comfygen is a World Class DPoS Blockchain Development Industry: We Build the Future of Business, One DPoS Blockchain Development Services at a Time."
        />
        <meta
          name="category"
          content="DPoS Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="DPoS Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Customized} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.featureData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <Solution techData={JSON_DATA.Engagement} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection1} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />

    </>
  );
}
// This gets called on every request


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
