
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/video.json";
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

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
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


export default function rummy(props:any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          Top Video Game Development Company | Mobile, Console & VR Games
        </title>
        <meta
          name="description"
          content="Comfygen is a top video game development company delivering immersive and high-quality mobile, console, and VR games with innovative design, advanced technology, and engaging gameplay."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/video-game-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Video Game development company In Canada &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Want to develop Video Game Development Services is our specialty at Comfygen is a leading Video Game Development Company In Canada & The USA. We offers best online video game development services with top-rated video game developers."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/video-game-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T07:02:07+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/video-game.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="17 minutes" />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top-class Video Game Development Company in Jaipur, India | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen offers the most exclusive and unique video game development that help businesses get the most advantage of industry."
        />
        <meta
          property="og:twitter_title"
          content="Best Video Game Development Company in India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen provides the best video game development services in India. Also offers the most exclusive and unique video game development that help businesses get the most advantage of industry."
        />
        <meta
          property="schema:type"
          content="Top Sports Betting Website Development Industry in Jaipur"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Video Game Development Organization" />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of Video game development company in India, providing first-rate Video Game Development services to help your online Video Game venture reach new heights."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Video Game Development company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Video Game Development Company"
          content="Comfygen is best Video Game Development Company in jaipur, India. Our Video Game Development Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta name="category" content="Video Game Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Video Game Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="Video Game Development" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.technologyData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <Solution techData={JSON_DATA.Technologies} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ClientStories />
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