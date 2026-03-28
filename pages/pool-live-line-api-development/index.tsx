
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/poollivelineapidevelopment.json";

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

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});
const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
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



const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pool Live Line API | Real-Time Pool Score & Stats API",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "url": "https://www.comfygen.com/"
  },
  "description": "Get expert Pool Live Line API services for real-time pool match scores, stats & live data. Custom Pool APIs for apps, websites & fantasy platforms.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.comfygen.com/pool-live-line-api-development"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "serviceType": [
    "Live Pool Scores",
    "Frame-by-Frame Match Commentary",
    "In-Depth Match Statistics",
    "Live Pool Streaming Integration",
    "Support for Multiple Cue Sports",
    "Real-Time Cue Sport Engagement Tools"
  ],
  "sameAs": [
    "https://www.facebook.com/comfygen.technologies/",
    "https://www.linkedin.com/company/comfygen-technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies/",
    "https://www.youtube.com/@Comfygentechnologies"
  ]
};



const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Pool Live Line API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Pool Live Line API provides real-time scores, frame updates, and player data from live pool matches for use in apps and websites."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Pool live line API integration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide full-featured Pool live line APIs with pre-match and in-play odds, perfect for sportsbooks and gamming platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a free demo of your Pool Data API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Contact us for a free trial to explore our Pool Live Score API in action."
      }
    },
    {
      "@type": "Question",
      "name": "Which sports does your API support besides pool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our APIs support snooker, billiards, cricket, football, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Is your Pool API compatible with mobile apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Pool Live Line API is designed for mobile-first integration with SDKs and REST endpoints."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the live scoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We guarantee sub-second latency and accurate, real-time updates via secure endpoints."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide API documentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our APIs come with detailed documentation for developers."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Pool API customizable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can choose data endpoints for players, matches, scores, odds, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support historical pool data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Pool Historical Odds API gives access to past matches and stats."
      }
    },
    {
      "@type": "Question",
      "name": "What pricing plans are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer custom pricing based on usage, data volume, and feature requirements."
      }
    }
  ]
};






export default function Ecommerce(props:any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Pool Live Line API | Real-Time Pool Score & Stats API</title>
        <meta
          name="description"
          content="Get expert Pool Live Line API  services for real-time pool match scores, stats & gamming data. Custom Pool APIs for apps, websites & fantasy platforms."
        />
        <meta
          name="keywords"
          content="Pool Live Line API , pool stats api, live pool scores api, Pool Data Feed API, Pool Live Sports Data API, historical pool odds, pool api, pool live API, pool historical odds database, free pool api, live scoring api for pool, Pool data API, Livescore Pool API"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/pool-live-line-api-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Pool Live Line API | Real-Time Pool Score & Stats API"
        />
        <meta
          property="og:description"
          content="Get real-time pool match data with our Pool Live Line API. We offer global coverage of pool scores, stats, odds, and integration for fantasy apps & gamming platforms."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top Pool Live Line API"
        />
        <meta
          name="summary"
          content="Comfygen provides reliable and scalable Pool Live Line API services with real-time scoring and global coverage."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="Founder of Pool Live Line API services for startups and enterprises. Specializing in real-time pool match scores, odds, and stats integration."
        />
        <meta
          name="Best Pool Live Line API Service Provider"
          content="Comfygen is a trusted Pool API provider worldwide."
        />
        <meta name="category" content="Pool Live Line API" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best Pool Live Line API" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Pool Live Line API Services Provider"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/pool-live-line-api-development/pool-api-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/pool-live-line-api-development/pool-api-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pool Live Line API" />
        <meta property="og:url" content="https://www.comfygen.com/pool-live-line-api-development" />
        <meta property="og:title" content="Pool Live Line API | Real-Time Pool Score & Stats API" />
        <meta property="og:description" content="Get real-time pool match data with our Pool Live Line API. We offer global coverage of pool scores, stats, odds, and integration for fantasy apps & gamming platforms." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pool Live Line API | Real-Time Pool Score & Stats API" />
        <meta name="twitter:description" content="Get expert Pool Live Line API services for real-time pool match scores, stats & live data. Custom Pool APIs for apps, websites & fantasy platforms." />
        <meta name="twitter:image" content="https://www.comfygen.com/svg/Logo1.svg" />
        <meta name="twitter:site" content="@comfygentech" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      </Head>

      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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
