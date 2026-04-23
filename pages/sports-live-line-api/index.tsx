
import Head from "next/head";

import dynamic from "next/dynamic";
import JSON_DATA from "./json/livelineapidevelopment.json";

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

import BusinessSolustion from "../../components/BusinessSolustion"

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

import SportsApiSupport from "../../components/SportsApiSupport"

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



const ServiceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sports Live Line API Service Provider ",
  provider: {
    "@type": "Organization",
    name: "Comfygen Technologies",
    url: "https://www.comfygen.com/",
  },
  description:
    "Comfygen is a top Live Line API provider offering fast, real-time APIs for cricket, football, NBA & more. Hire expert developers today.",
  url: "https://www.comfygen.com/sports-live-line-api",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.comfygen.com/sports-live-line-api",
  },
  areaServed: "Global",
  serviceType: [
    "Custom Live Line API Solution",
    "Mobile App API Integration",
    "Web Dashboard Integration",
    "Third-Party API Integration Support",
    "AI-Powered Data Insights",
    "Betting & Odds API Development",
    "Maintenance & Support Services",
  ],
  sameAs: [
    "https://www.facebook.com/comfygen.technologies/",
    "https://www.linkedin.com/company/comfygen-technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies/",
    "https://www.youtube.com/@Comfygentechnologies",
  ],
};




const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Live Line API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Live Line API delivers real-time sports data, including scores, commentary, and stats to your app or website.",
      },
    },
    {
      "@type": "Question",
      name: "Which sports do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Live Line APIs for cricket, football, tennis, basketball, kabaddi, horse racing, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is the data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our data updates are faster than TV broadcasts—almost in real time.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a custom API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we build APIs tailored to your platform’s specific needs and tech requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What formats are the APIs available in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer RESTful APIs in JSON format, with optional GraphQL based on requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer trial access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can provide a sandbox or demo environment for testing.",
      },
    },
    {
      "@type": "Question",
      name: "Can your APIs handle high traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our APIs are designed with a scalable cloud-native architecture.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide 24/7 support, monitoring, and maintenance services.",
      },
    },
    {
      "@type": "Question",
      name: "Is integration support included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our team assists with full integration and onboarding documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What’s your pricing model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible pricing based on sport, features, and usage.",
      },
    },
  ],
};

export default function Ecommerce(props) {
  let { initialData } = props;
 

  return (
    <>
      <Head>
        <title>


          Best Sports Live Line API Provider Company | Real-Time Sports data
        </title>

        <meta
          name="description"
          content="Comfygen is Sports Live Line API provider company, delivering lightning-fast real-time data for cricket, football, NBA, tennis & more. Hire expert API developers today."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/sports-live-line-api"
        />

        <meta
          name="keywords"
          content="Live Line API provider, Sports API integration, Cricket live score API, Real-time sports API, Sports data provider, Custom sports API, Comfygen sports API"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta charSet="UTF-8" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Fastest Sports Live Line API | Real-Time Cricket, Football & More | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen’s sports APIs deliver unmatched speed and accuracy. Get real-time cricket, football, and NBA data for your app or website. 24/7 support and custom solutions."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/sports-live-line-api"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/sports-live-line-api/og.webp"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434" />
        <meta name="og:longitude" content="75.787271" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Live Line Sports API | Real-Time Cricket, Football, NBA | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Get lightning-fast live sports data via our robust API. Trusted by global clients for cricket, football, and more. Start your API integration today."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/sports-live-line-api/og.webp"
        />

        {/* Ownership & Info */}
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Pvt. Ltd." />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Top Live Line Sports API Provider" />
        <meta
          name="summary"
          content="World-class provider of real-time Cricket & Sports APIs. Custom sports data integration for apps & platforms."
        />
        <meta name="category" content="Sports Live Line API" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best Live Sports API | Fast Live Score & Stats API"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="fb:page_id" content="110909321596135" />

        {/* Structured Data */}




        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceData) }}
        />
      </Head>
       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <SportsApiSupport GameApiData={JSON_DATA.GameApiData} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
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

