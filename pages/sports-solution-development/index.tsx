
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cricketliveline.json";
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sports Solution Development",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "url": "https://www.comfygen.com/"
  },
  "description": "Get expert sports solution development services from Comfygen Technologies. We build custom sports software, fantasy apps platforms, APIs & analytics tools.",
  "url": "https://www.comfygen.com/handball-live-line-api-development",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.comfygen.com/sports-solution-development"
  },
  "areaServed": "Global",
  "serviceType": [
    "Custom Sports App Development",
    "Sports Management Software Development",
    "Fantasy Sports App Development",
    "Sports Analytics Software Development",
    "Sports Live Score API Development",
    "Sports  Software Development",
    "Sports Data Integration Services"
  ],
  "sameAs": [
    "https://www.facebook.com/comfygen.technologies/",
    "https://www.linkedin.com/company/comfygen-technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies/",
    "https://www.youtube.com/@Comfygentechnologies"
  ]
}


const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is sports solution development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It involves building custom sports software, apps, APIs, and platforms for performance, management, and fan engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Why do sports businesses need custom software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom sports software is designed to address the unique workflows, audiences, and data requirements of sports organizations."
      }
    },
    {
      "@type": "Question",
      "name": "What services does Comfygen offer for sports software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer app development, analytics tools, live score APIs, fantasy platforms, management systems, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Do you develop fantasy sports apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we build custom, scalable fantasy sports platforms for various sports with real-time data integration."
      }
    },
    {
      "@type": "Question",
      "name": "What is sports data API integration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It means connecting external data sources to your app for live updates, player stats, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide sports software development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we create legal, secure, and data-driven sports platforms tailored to regulations."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build sports management software for clubs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We develop robust management tools for teams, leagues, and entire organizations."
      }
    },
    {
      "@type": "Question",
      "name": "Is your software compatible with mobile devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we develop fully responsive mobile sports apps for iOS and Android."
      }
    },
    {
      "@type": "Question",
      "name": "What is AI-powered sports analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It uses AI algorithms to analyze player performance, predict outcomes, and improve training efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with Comfygen Technologies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply contact us through our website to schedule a free consultation or request a proposal."
      }
    }
  ]

};

export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>Custom Sports Solution Development | Sports Software & App Experts | Comfygen</title>

        <meta name="description" content="Comfygen delivers custom sports solution development, including sports software, fantasy apps, mobile platforms, APIs, and analytics tools to boost fan engagement and performance." />
        <link rel="canonical" href="https://www.comfygen.com/sports-solution-development" />

        <meta name="keywords" content="Sports solution development, Sports software development, Sports app development, Sports technology solutions, Sports software company, Custom sports software development, Fantasy sports app development, Sports data API integration for apps, Sports analytics software development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta charSet="UTF-8" />

        <meta property="og:title" content="Sports Solution Development | Custom Sports Software & App Development Company" />
        <meta property="og:description" content="We specialize in building high-performing sports solutions including apps, fantasy platforms, APIs, and analytics tools for global sports businesses." />
        <meta property="og:url" content="https://www.comfygen.com/comfygen-images/sports-solution-development/sports-solution-development-og.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/sports-solution-development/sports-solution-development-og.webp" />
        <meta property="og:site_name" content="Comfygen" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434" />
        <meta name="og:longitude" content="75.787271" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Sports Software Solutions | Fantasy & Sports App Development" />
        <meta name="twitter:description" content="Get high-performance sports software and app development solutions tailored for leagues, clubs, and fantasy startups." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/sports-solution-development/sports-solution-development-og.webp" />

        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Pvt. Ltd." />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Custom Sports Software & App Development Company" />
        <meta name="summary" content="Comfygen is the leading custom sports solution provider trusted by clubs, leagues, and startups worldwide." />
        <meta name="category" content="Sports Solution Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Custom sports app development | software experts" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="fb:page_id" content="110909321596135" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
