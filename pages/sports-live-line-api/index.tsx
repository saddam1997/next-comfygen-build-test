import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineArrowOutward, MdSportsCricket, MdWeb } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

import dynamic from "next/dynamic";
import JSON_DATA from "./json/livelineapidevelopment.json";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import Faq from "../components/Faq";
import HireDeveloper from "../components/HireDeveloper";
import ConsultancyApproach from "../components/ConsultancyApproach";
import SportsApiSupportSection from "../componentsnew/SportsApiSupportSection";
import ProcessSection from "../componentsnew/ProcessSection";
import ServicesSection from "../componentsnew/ServicesSection";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Project Consultation",
    description:
      "We begin by understanding your platform’s goals, sport focus, and user needs.",
  },
  {
    title: "Requirement Analysis",
    description:
      "Our team analyzes your functional and technical requirements in depth.",
  },
  {
    title: "API Architecture Design",
    description:
      "We design a secure and scalable architecture tailored to your sport and platform.",
  },
  {
    title: "Development Phase",
    description:
      "We write clean, efficient code and create high-performance API endpoints.",
  },
  {
    title: "Integration Support",
    description:
      "Our team helps your developers integrate and test the API smoothly.",
  },
  {
    title: "QA & Testing",
    description:
      "We run thorough checks to ensure zero downtime, latency, or data mismatches.",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Your API goes live with continuous support, updates, and performance tuning.",
  },
];
const structuredData = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Best Cricket Live Line API Provider Company | Comfygen",
  url: "https://www.comfygen.com/cricket-live-line-api",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.comfygen.com/search?query={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

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

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  description: "Best Cricket Live Line API Service Provider",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};

const productData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sports Live Line API Provider | Fast & Reliable API Seller – ComfygenTechnologies",
  brand: {
    "@type": "Brand",
    name: "Comfygen",
  },
  image:
    "https://www.comfygen.com/_next/image?url=%2Fimg%2Fskyrocket-your-exprience-with-cricket-live-line-api-development-company.webp&w=640&q=75",
  description:
    "Comfygen is a top Sports Live Line API provider offering fast, real-time APIs for cricket, football, NBA & more. Hire expert developers today.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1125",
    bestRating: "5",
    worstRating: "1",
  },
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
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  return (
    <>
      <Head>
        <title>
          Sports Live Line API Provider | Real-Time Cricket, Football & More –
          Comfygen
        </title>

        <meta
          name="description"
          content="Comfygen is your trusted Sports Live Line API provider, delivering lightning-fast real-time data for cricket, football, NBA, tennis & more. Hire expert API developers today."
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Comfygen - Sports API Provider",
              url: "https://www.comfygen.com/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.comfygen.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Comfygen",
              legalName: "Comfygen Pvt. Ltd.",
              url: "https://www.comfygen.com/",
              logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
              foundingDate: "2019",
              founders: [
                {
                  "@type": "Person",
                  name: "Saddam Husen",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
                addressLocality: "Vaishali Nagar",
                addressRegion: "Rajasthan",
                postalCode: "302021",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91 9587867258",
                email: "sales@comfygen.com",
              },
              sameAs: [
                "https://twitter.com/comfygentech",
                "https://www.instagram.com/comfygen_/?hl=en",
                "https://www.linkedin.com/company/comfygen-private-limited",
                "https://www.facebook.com/comfygen",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Cricket Live Line API",
              operatingSystem: "Web, Android, iOS",
              applicationCategory: "SportsApplication",
              offers: {
                "@type": "Offer",
                price: "Contact for pricing",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "256",
              },
              publisher: {
                "@type": "Organization",
                name: "Comfygen",
              },
            }),
          }}
        />

        {/* Optional pre-rendered structured data if defined elsewhere */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden pt-16">
        <div className="md:pt-10 lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/fantasy-cricket-app-development-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="Sports Live Line API Provider"
            subhead="Your Trusted Cricket Live Line Api  Provider Company In India & The USA."
            ptag="Looking for a reliable Sports Live Line API provider that delivers lightning-fast, real-time sports data? Comfygen has you covered. With over 10 years of experience in a high-performance software provider, we create custom Live Line APIs designed for fantasy apps, sports platforms, and live score dashboards. Our APIs are lightweight, fast, secure, and easy to integrate across mobile and web platforms."
            ptag1="As a leading Live Line API provider company, we cover all major sports—cricket, football, tennis, basketball, horse racing, and more. Every second counts in live sports, and our APIs ensure your users get accurate data instantly."
            ptag2="We’re more than just a Live Line API developer—we’re your trusted tech partner for growth, scalability, and real-time engagement."
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <AboutSection
          title="About Company"
          heading="About Our Sports Live Line API Services"
          description1="At Comfygen, we specialize in building software that delivers real-time value—fast, accurate, and scalable. With over 10 years of experience, we've empowered startups, sports platforms, and enterprises to launch reliable digital products with seamless Live Line API integration."
          description2="Our Sports Live Line API services are designed for businesses that require precise live sports data. Whether you're building a fantasy sports app, a real-time score widget, or a media platform, we tailor our APIs to ensure top-tier speed, performance, and compliance."
          description3="As a leading Live Line API provider, we focus on delivering developer-friendly solutions. From clean documentation and easy onboarding to tested, secure endpoints, our APIs are built for performance. Our tech team leverages the latest stack to ensure low-latency, high-uptime solutions."
          description4="What makes us a top Live Line provider company? We tackle real-time challenges—like latency, data validation, and system overload—with robust and scalable infrastructure. We don’t just deliver data; we deliver trust."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Live scores faster than TV",
            "In-depth match stats, odds & commentary",
            "Smooth integration across web and mobile platforms",
          ]}
        />

        <ContactFromCenter />

        <ServicesSection
          heading="We offer a complete range of Live Line API services tailored to fit your sports app’s needs:"
          servicesData={JSON_DATA.servicesData}
        />

        <SportsApiSupportSection
          heading="Covers All Sports"
          description="Whether it's cricket or car racing, our Sports Live Line API services cover it all. At Comfygen, we understand the importance of data in sports tech. That’s why we’ve built robust APIs for all major sports, including Cricket, Football, NBA, Tennis, Golf, Kabaddi, Rugby, and more. You can get match schedules, live updates, scores, stats, and player data in one simple-to-use API endpoint. No matter the sport, we’ve got your data needs covered."
          gameDevItems={JSON_DATA.gamedev}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <ProcessSection
          title="Step-by-Step Guide to Our Sports Live Line API Integration Process"
          description="We recognize the value of a seamless Cricket Live Line API integration and are committed to supporting you throughout every phase of the process. As a global leader in delivering reliable Cricket Live Line API services, Comfygen ensures a hassle-free experience from start to finish. Follow our step-by-step guide to effortlessly harness the full potential of our Live Line API for your cricket-based applications and platforms."
          processSlides={Process}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Expert Live Line API Developers Today"
          text="Ready to transform your app or platform with real-time sports data? At Comfygen, we’re here to help. Our expert Live Line API developers are ready to bring your idea to life—whether you're building something new or upgrading an existing platform."
          text1="We understand the urgency and accuracy your users expect. That's why we deliver APIs that are tested, fast, and ready to integrate. When you work with us, you’re choosing a development partner who’s focused on your success."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "10+ years in API and software development",
            "Fast delivery with high-performance APIs",
            "Complete post-launch support",
          ]}
        />

        <Faq faqData={JSON_DATA.Frequently} title=" Cricket Live Line Api" />

        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}
