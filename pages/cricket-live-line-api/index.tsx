import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cricketliveline.json";

import Navbar from "../../components/Navbar";
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[700px] sm:min-h-[650px] lg:min-h-[500px] bg-[#F5F5F9] animate-pulse" />
  ),
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});


const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});



const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});

const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});





const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a cricket live score API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cricket live score API is a service that provides real-time updates of cricket match scores for integration into websites or applications."
      }
    },
    {
      "@type": "Question",
      "name": "How can I integrate a cricket live score API into my website or application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Integration typically involves utilizing the API's documentation and following the provided instructions for making API calls to retrieve live cricket scores."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of data does a cricket API provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cricket API can provide various types of data, including live scores, player statistics, team information, match schedules, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Can I access live cricket scores in real-time using a cricket score API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a cricket score API provides real-time updates, allowing you to display accurate and up-to-date scores to your users."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any limitations on the number of API calls to the cricket live score API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "API providers may have rate limits or usage restrictions in place, which can vary depending on the service plan or pricing tier you choose."
      }
    },
    {
      "@type": "Question",
      "name": "How can I use an API cricket service to enhance my sports app or website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An API cricket service allows you to integrate live scores, player stats, and other cricket-related data into your app or website, enhancing the user experience and engagement."
      }
    }
  ]

};

export default function Ecommerce(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Cricket Live Line API Provider Company | Real-Time Cricket Scores</title>

        <meta name="description" content="Comfygen is the best Cricket Live Line API provider company offering fast, developer-friendly APIs for IPL, T20, ODI, and Test matches. Deliver real-time ball-by-ball updates, live scores, and match statistics seamlessly across apps and websites." />
        <link rel="canonical" href="https://www.comfygen.com/cricket-live-line-api" />

        <meta name="keywords" content="Cricket Live Line API, Cricket Live Score API, Cricket Live Streaming API, Cricket Data API, Cricket Stats API, Cricket Live Line App, Cricket Live Line Widget, Cricket Live Line Integration, Cricket Live Line Provider, Cricket Live Line Service" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <meta charSet="UTF-8" />


        <meta property="og:title" content="Cricket Live Line API | Live Cricket Data API for real-time Cricket Score, Stats & Feed" />
        <meta property="og:description" content="When you partner with Comfygen, you can trust that you'll have accurate and up-to-date data at your fingertips. Our cricket data APIs are meticulously maintained to ensure the highest quality and reliability." />
        <meta property="og:url" content="https://www.comfygen.com/cricket-live-line-api" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.comfygen.com/media/images/cricket-api-og-image.jpg" />
        <meta property="og:site_name" content="Comfygen" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434" />
        <meta name="og:longitude" content="75.787271" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Cricket Live Line API | Live Cricket Data API | Best cricket live streaming API for Up to date real-time Cricket Score, Stats & Feed" />
        <meta name="twitter:description" content="Build the next generation of cricket apps by integrating our powerful Cricket Live Line APIs. Elevate your cricket blog, fantasy app, performance analysis tool, or chatbot using our data-rich APIs." />
        <meta name="twitter:image" content="https://www.comfygen.com/media/images/cricket-api-og-image.jpg" />


        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Pvt. Ltd." />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Best Cricket Live Line API Provider" />
        <meta name="summary" content="Comfygen is the Leading World-class Cricket Live Line API Company in India, the USA." />
        <meta name="category" content="Cricket Live Line API" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best cricket live streaming API | Best live score API cricket" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="fb:page_id" content="110909321596135" />









        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      </Head>

      <div className="min-h-[60px] md:min-h-[70px]">
        <Navbar />
      </div>
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <ClientStories />

 
    </>
  );
}
