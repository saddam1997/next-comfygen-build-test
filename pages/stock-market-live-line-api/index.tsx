
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/stockmarketliveline.json";
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


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);




const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is your API compatible with both mobile and web platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Stock Market Live Line API is fully compatible with iOS, Android, and all major web platforms. Whether you're building a mobile trading app or a web-based dashboard, our API integrates smoothly with your tech stack."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide a free trial for the Stock Market API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We offer a limited-time free trial so you can test our API’s performance, data accuracy, and integration process before committing to a paid plan."
      }
    },
    {
      "@type": "Question",
      "name": "How scalable is your API during high traffic or market hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our API infrastructure is designed to handle large volumes of requests even during peak trading hours."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request a custom API tailored to my business needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in delivering custom Stock Market API solutions tailored to your specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support do you offer for developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide integration support, detailed documentation, and ongoing technical assistance to ensure smooth usage."
      }
    },
    {
      "@type": "Question",
      "name": "Is your API secure for handling sensitive financial data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our API uses HTTPS encryption, token-based authentication, and follows industry security best practices."
      }
    }
  ]
};


export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>Stock Market Live Line API Development Provider Company</title>
        <meta
          name="description"
          content="Leading Stock Market Live Line API development provider company offering real-time stock data, trading APIs, secure integration & scalable solutions."
        />
        <meta name="keywords"
          content="Stock Market Live Line API, 
        Live Stock Market API, 
        Real-Time Stock Market API, Stock Price Live API,
        Stock Data API Provider,
        Stock Ticker API Service, 
        Stock Market API Service Provider,
        Stock Market API Integration Service, 
        Real-Time Stock Market API Solution,
        Live Stock Market Feed API,
        Stock Market API Development Service, Stock Market API for Developers,
        Stock Market API for Applications,
        Live Stock API for Software, Real-Time Stock API for Web Apps, 
        Stock Market API for Fintech Apps,
        Reliable Stock Market API Provider, 
        Affordable Stock Market Data API, 
        Scalable Stock Market API Solution, 
        High-Speed Stock Market Data Service, 
        Professional Stock Market API Services" />
        <link
          rel="canonical"
          href="https://www.comfygen.com/stock-market-live-line-api"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />

        <meta
          property="og:title"
          content="Stock Market Live Line API | Real-Time Stock Data for Traders and Platforms"
        />
        <meta
          property="og:description"
          content="Access fast, reliable, and real-time stock market data through our Stock Market Live Line API. Ideal for trading apps, dashboards, and financial platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.comfygen.com/stock-market-live-line-api" />
        <meta property="og:image" content="https://www.comfygen.com/media/svg/comfygen-logo.svg" />


        <meta
          name="twitter:title"
          content="Stock Market Live Line API | Real-Time Data for Trading Apps"
        />
        <meta
          name="twitter:description"
          content="Get up-to-the-second stock market updates and integrate them into your app or platform with our high-speed Stock Market API."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.comfygen.com/media/svg/comfygen-logo.svg" />


        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Best Stock Market API Development Industry" />
        <meta name="summary" content="Comfygen is the leading provider of real-time Stock Market API development services." />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Technologies, a leading Stock Market API development company." />
        <meta name="category" content="Stock Market Live Line API Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Real-time Stock Market API | Financial Market Data Feed" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      </Head>


       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
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
