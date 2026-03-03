import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/autoracinglivelineapidevelopment.json";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);


const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)


const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const OtherGameDevelopment = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/OtherGameDevelopment"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



export default function Ecommerce(props) {
  let { initialData } = props;
  const [showContent, setShowContent] = useState(false);

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
        <title>Auto Racing Live Line API Services | Real-Time Racing Data API by Comfygen</title>
        <meta
          name="description"
          content="Get real-time racing scores, odds, and stats with Comfygen’s Auto Racing Live Line API services. Custom APIs for, stats, and mobile/web integration."
        />
        <meta
          name="keywords"
          content="Auto Racing Live Line API, Auto Racing API, Auto Racing Live Score API, Auto Racing  API Integration, Auto Racing Data Feed API"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/auto-racing-live-line-api-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />

        <meta
          property="og:title"
          content="Auto Racing Live Line API | Real-Time Racing Score & Data API Solutions"
        />
        <meta
          property="og:description"
          content="Get custom Auto Racing Live Line API, live scores, highlights, APIs & scoreboard data from Comfygen. Trusted Auto Racing API integration company with 10+ years’ expertise."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top Auto Racing Live Line API"
        />
        <meta
          name="summary"
          content="Comfygen provides scalable Auto Racing Live Line API services with real-time scoring, stats, and global racing league coverage."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="Founder of Auto Racing Live Line API services for startups and enterprises. Specializing in real-time racing scores, stats, and odds integration."
        />
        <meta
          name="Best Auto Racing Live Line API service Provider"
          content="Comfygen is a trusted Auto Racing API provider worldwide."
        />
        <meta name="category" content="Auto Racing Live Line API" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best Auto Racing Live Line API " />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Auto Racing Live Line API Services Provider"
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
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/auto-racing-live-line-api-development/auto-racing-api-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/auto-racing-live-line-api-development/auto-racing-api-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Auto Racing Live Line API" />
        <meta property="og:url" content="https://www.comfygen.com/auto-racing-live-line-api-development" />
        <meta property="og:title" content="Auto Racing Live Line API | Real-Time Racing Score & Data API Solutions" />
        <meta property="og:description" content="Get custom Auto Racing Live Line API, live scores, highlights,  APIs & scoreboard data from Comfygen. Trusted Auto Racing API integration company with 10+ years’ expertise." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Racing Live Line API | Real-Time Racing Score & Data API Solutions" />
        <meta name="twitter:description" content="Get expert Auto Racing Live Line API services for real-time race scores, stats &  data. Custom Auto Racing APIs for apps, websites & fantasy platforms." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/auto-racing-live-line-api-development/auto-racing-api-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured data scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.productData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.faqPageSchema) }}
        />
      </Head>



      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Auto Racing Live Line API Development Company"
          subhead="Accelerate Your Platform with Auto Racing Live Line API"
          ptag="Our Auto Racing Live Line API Services bring the thrill of motorsports to your app or platform with real-time, precision-driven data. Whether you're building a sportsbook, a racing fan hub, or a live score app, our APIs offer seamless access to live lap-by-lap updates, driver stats, leaderboards, and odds feeds across events like Formula 1, NASCAR, and MotoGP. Designed with scalability and security in mind, our low-latency APIs integrate effortlessly into your existing tech stack. From data integration to custom racing analytics, we deliver more than just information—we create smooth, engaging user experiences tailored to your platform and audience."
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/auto-racing-live-line-api-development/auto-racing-api-hero.webp"
        />


        <AboutSection
          title="About Company"
          heading="The Pulse of Real-Time Motorsports Innovation"
          description1="Auto racing is all about timing, precision, and performance—and that’s exactly how we build our APIs. At Comfygen, we specialize in creating powerful, real-time auto racing score API solutions that drive user engagement and operational efficiency. With more than a decade in software development, our team understands the technical and competitive requirements of modern racing platforms."
          description2="Our auto racing live line API suite supports a wide range of motorsports, including Formula 1, MotoGP, NASCAR, rally races, and more. Every API is built with performance in mind, delivering auto race odds API, lap times, driver stats, event results, and more with lightning speed. You get reliable auto racing data feed API connectivity that integrates effortlessly into mobile and web platforms."
          description3="We also offer dedicated services for sportsbook operators with auto racing  API integration, compliant with regulatory frameworks. Whether you need a full-scale platform or just live auto racing match API integration, Comfygen delivers both flexibility and stability."
          description4="Our solutions are designed for developers too. The auto racing API for developers comes with RESTful architecture, sample codes, SDKs, and detailed documentation to make integration smooth and fast."
          description5="When you choose Comfygen, you don’t just get another vendor—you gain a technical partner who’s as passionate about racing and performance as you are."

          imageSrc="https://www.comfygen.com/comfygen-images/auto-racing-live-line-api-development/auto-racing-api-about.webp"
          link="/about-us"
          linkText="Explore More"

        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Turbocharged Live Line API Solutions for Every Auto Racing Use Case</h2>
              <p className="text-base text-center font-normal"></p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />



        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Step-by-Step Integration Process of Our Auto Racing Live Line API</h2>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>



        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Us for Auto Racing API "
          text="Looking to power your motorsports platform with real-time race data and live updates? Hire Comfygen for top-notch Auto Racing Live Line API that’s fast, reliable, and built specifically for your needs. Whether you're running a motorsport app, a racing analytics dashboard, or a sportsbook, we offer tailor-made API solutions that ensure seamless integration and unmatched performance."
          text1="From the very first consultation to final deployment, our in-house team handles everything—design, development, integration, and ongoing support. We build APIs that are scalable, secure, and ready to handle high-speed racing events across global circuits. "
          text2="We don’t just deliver code—we deliver speed, accuracy, and future-ready architecture designed to help you stay ahead of the race. Join hands with a trusted Auto Racing API provider with over a decade of experience in live data solutions."
          buttonText="When you hire from Comfygen, you get:"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Free API consultation before project kickoff",
            "Full-cycle development and testing",
            "Dedicated developer support",
            "Budget-friendly pricing with fast turnarounds"
          ]}

        />


        <Faq
          faqData={JSON_DATA.Frequently}
          title="Auto Racing Live Line Api"
        />

        <BlogSection initialData={initialData} />
      </div>
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

