import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Ourgames from "../../components/ourgames";
import JSON_DATA from "./json/game.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import TechStacks from "../../components/TechStacks";

const PortfolioSection = dynamic(
  () => import("../../components/PortfolioSection"),
  {
    ssr: true,
  },
);

import ReviewCard from "../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
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
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-gray-100 rounded-lg`} />
);

const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => skeleton("h-[400px]"),
});



import AboutComponent from "../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});


export default function MultiChain(props:any) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new window.Image();
    img.src = "https://www.comfygen.com/img/hire-baccrate-game.webp";
    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  const imageHire = {
    backgroundImage: loaded ? `url("https://www.comfygen.com/img/hire-baccrate-game.webp")` : "none",
  };



 

  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Game Development Company | Mobile, 2D/3D, AR/VR & NFT Game Development
        </title>
        <meta property="og:title" content="Game Development Company | Mobile, 2D/3D, AR/VR & NFT Game Development" />
        <meta
          name="description"
          content="Comfygen Technologies is a top-rated game development company specializing in mobile game development, 2D/3D games, AR/VR, blockchain, NFT, and metaverse solutions. Hire expert game developers."
        />
        <meta
          name="og:description"
          content="Comfygen Technologies is a top-rated game development company specializing in mobile game development, 2D/3D games, AR/VR, blockchain, NFT, and metaverse solutions. Hire expert game developers."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/game-development-company"
        />
        <meta
          name="robots"
          content=" Index,follow,MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Mobile Game Development, 2D & 3D Game Development, Unity & Unreal Game Development, AR/VR Game Development, Blockchain Game Development, NFT Game Development, Metaverse Game Development, Multiplayer Game Development, Educational Game Development" />


        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Game Development Services in the USA, UK and UAE | Game App & Software Programmers"
        />
        <meta
          property="og:facebook_description"
          content="Custom Game App Development Company in the USA, UK, UAE | We provide the best quality Game Development Services along with features. Hire a Game App Development Company!"
        />
        <meta
          property="og:twitter_title"
          content="Best Game Development Services in the USA, UK and UAE | Game App & Game Software Developers"
        />
        <meta
          property="og:twitter_description"
          content="Are you looking for Game Development Company? Hire Video game developers & designers from top-making game studio in USA, UK and UAE"
        />
        <meta
          property="schema:type"
          content="Best Game Development Company | Game development services & Api Provider"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Game Development Company/ Firm/ Industries/ Organization"
        />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of a Top-Notch Game App & Software Development Company in UK, USA and UAE, providing first- class Game Software & Application Development Services to help your online Game software and Application venture to reach new heights."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Game Development Company, firm, industry, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Game Development Company"
          content="Comfygen is best Game App & Software Development Company. Our Custom Game App & Software Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta name="category" content="Leading Game Devlopment Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Leading Game Application & Software Devlopment Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        <meta name="og:country-name" content="India, USA, UK, And UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="website" />


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

        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />



        {/* seo meta */}

        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Open Graph (OG) Tag  */}

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />


        {/* twitter */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Game Development Company | Custom Mobile & 3D Game Development Services" />
        <meta name="twitter:description" content=" Comfygen Technologies is a trusted game app development company offering mobile, 2D/3D, AR/VR, NFT, and metaverse game development services. We create engaging, scalable, and innovative games for startups, enterprises, and gaming studios worldwide." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:site" content="@Comfygen_Tech" />



        {/* Facebook Meta  */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/game-development/game_development_og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/game-development/game_development_og.webp" />
        <meta property="og:image:alt" content="Game Development" />
        <meta property="og:url" content="https://www.comfygen.com/game-development-company" />
        <meta property="og:title" content="Game App Development Company | Unity, Unreal, AR/VR & NFT Games" />
        <meta property="og:description" content="As a leading game development company, Comfygen builds custom mobile, AR/VR, metaverse, and blockchain games. Our expert developers deliver feature-rich and scalable gaming apps for global startups and enterprises." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} /> */}
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.PortfolioData} />
      <section className="py-10 mb-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
        <Emerging emerging={JSON_DATA.EmergingData} />
      </section>

      <section className="bg-[#F5F5F9] lg:py-16 py-10">
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      </section>

      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <Ourgames hideSportBettingTab={true} hideFantasyGames={true} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection
        faqData={JSON_DATA.Frequently}
        title=" Game Development Company"
      />
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