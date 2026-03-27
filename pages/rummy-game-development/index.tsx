
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/rummy.json";

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
import BusinessSolustion from "../../components/BusinessSolustion"

import TechnologiesCard from "../../components/TechnologiesCard"

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import Features from "../../components/Features"

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

import Emerging from "../../components/Emerging";

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});
const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


export default function rummy(props: any) {
  let { initialData } = props;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.comfygen.com/rummy-game-development/",
        url: "https://www.comfygen.com/rummy-game-development",
        name: "No. 1 Rummy Game Development Company In the USA | Comfygen",
        isPartOf: {
          "@id": "https://www.comfygen.com/#website",
        },
        primaryImageOfPage: {
          "@id":
            "https://www.comfygen.com/rummy-game-development/#primaryimage",
        },
        image: {
          "@id":
            "https://www.comfygen.com/rummy-game-development/#primaryimage",
        },
        thumbnailUrl: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
        dateModified: "2023-09-15T06:58:46+00:00",
        description:
          "Comfygen is a leading rummy game app & web development company that can offer end-to-end rummy game design and development services. Hire our highly skilled rummy game developers now to build a world-class Rummy Game Web & App development at an affordable price.",

        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://www.comfygen.com/rummy-game-development"],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://www.comfygen.com/rummy-game-development#primaryimage",
        url: "https://www.comfygen.com/images/rummy-game-software-development.webp",
        contentUrl:
          "https://www.comfygen.com/images/rummy-game-software-development.webp",
        width: 365,
        height: 250,
        caption: "Rummy Game App Development Company In the USA",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.comfygen.com/#website",
        url: "https://www.comfygen.com/",
        name: "Comfygen - Blockchain and Game AI Development Company",
        description: "Simple | Secure | Successive",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.comfygen.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
    ],
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What Is Rummy Game App Development ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>Rummy is a game that endorses a number of players and is a kind of card game. Rummy game apps let players play, enjoy, and win jackpots from their devices. It is an app played from a smartphone.</p>",
        },
      },
      {
        "@type": "Question",
        name: "What Technologies Do You Use To Develop Rummy Games ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: " For the backend, we use Java, and for the database, we rely on MySQL and PostgreSQL. For the front end, we use technologies like Vue, Flutter, Reactive Native, JS, Angular, etc.",
        },
      },
      {
        "@type": "Question",
        name: "Have You Ever Worked In Game Development Before ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have developed 1000+ games for a number of clients. YES, we do have specialized in rummy game development as per requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How Much Does Rummy Game App Development Cost ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Connect with our expert to know a ballpark estimation. Besides, we provide game development services at pocket-friendly rates.",
        },
      },
      {
        "@type": "Question",
        name: "How can I ensure a secure and fair gameplay environment in a Rummy game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, social features like chat functionality, friend invites, leaderboards, and sharing gameplay achievements can be integrated into a Rummy game application to enhance the social experience and increase user engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the rules and design of a Rummy game app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the rules and design of a Rummy game app development can be customized. Our Rummy Game Developers can create variations of the rummy game, customize the visuals, and even introduce new Rummy game application features to make the rummy game unique.",
        },
      },
    ],
  };




  return (
    <>
      <Head>
        <title>
          Best Rummy Game App Development Company In India and USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a Top Rated Rummy Game Development Company in India and USA, delivers high-quality and feature-rich game development solutions for iOS, Android, and the Web platform."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/rummy-game-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="No. 1 Rummy Game App Development Company In Canada &  The USA | Comfygen "
        />
        <meta
          property="og:description"
          content="Comfygen, a reliable Rummy Game Development Company in India, delivers high-quality and feature-rich card game development solutions for iOS, Android, and the Web platform. Transform your gaming vision into reality with our expert development services."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/rummy-game-development"
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
          content="https://www.comfygen.com/images/rummy-game.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="17 minutes" />

        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Rummy Game Development Company | Hire To-notch Poker Game Developers"
        />
        <meta
          property="og:facebook_description"
          content="Are you looking for a reliable Rummy Game App Development Industry? Hire our expert for Rummy Game we provide end-to-end Rummy game app development services that meet your business needs."
        />
        <meta
          property="og:twitter_title"
          content="Top-Class Rummy Game Development company in the USA | Rummy Game Software & App Development Services by Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is the best Rummy Game Development Industry in the USA. We offer Customized and readymade Rummy Game App and Software Development Services."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Rummy Game Development Company | Online Rummy Game App Development Company"
        />
        <meta
          name="summary"
          content="Comfygen is the Leading First Class Rummy Game Development Company in UK, USA."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Poker Game Development Company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Online Rummy Game Development Company"
          content="Comfygen is a leading World Class Rummy Game Software and App Development Company in USA, UK, UAE Our Best Rummy game programmers can create magnificent rummy software and applications.."
        />
        <meta
          name="category"
          content="Online Rummy Game Application Development Services"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Rummy Game application development Industry"
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
          content="Rummy Game Software Development Company | Online Rummy Game Development Company"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingData) }} /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.comfygen.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Game",
                  "item": "https://www.comfygen.com/rummy-game-development"
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </Head>
      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Security} />
      <InformationSection InfoSectionData={JSON_DATA?.InfoSection} />
      <Solution techData={JSON_DATA.Features} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <TechnologiesCard TechnoStack={JSON_DATA.TechnoStack} />
      <Solution techData={JSON_DATA.Trends} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <InformationSection InfoSectionData={JSON_DATA?.Application} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
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

