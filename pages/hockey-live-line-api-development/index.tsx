import React, { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hockeylivelineapi.json";

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


const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



const Process = [
  {
    title: "Requirement Consultation",
    description:
      "Understand your target users and app architecture."
  },
  {
    title: "Select the Right Hockey API",
    description:
      "Choose from NHL API, Hockey Pro League API, or custom feeds."
  },
  {
    title: "Live Line API Development & Integration",
    description:
      "Our expert Hockey Live Line API developers build scalable APIs for seamless data flow."
  },
  {
    title: "Design & Customization",
    description:
      "API widgets, layout integration, and branding support."
  },
  {
    title: "Testing & QA",
    description:
      "Live simulation, performance checks, bug resolution."
  },
  {
    title: "Go-Live & Deployment",
    description:
      "Final integration on app or web platform."
  },
  {
    title: "Ongoing Support",
    description:
      "Maintenance, updates, and custom add-ons."
  }
];



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
        <title>Hockey Live Line API Services | Real-Time Hockey Scores API</title>
        <meta name="description" content="Get real-time hockey scores, live match updates, player stats, and play-by-play data with our Hockey Live Line API services. Reliable NHL and global league coverage for sports apps and websites. Request a free API demo today." />
        <meta name="keywords" content="Hockey Live Line API, NHL API, Live Hockey Scores, Hockey Stats API, Real-time Hockey Data" />
        <link rel="canonical" href="https://www.comfygen.com/hockey-live-line-api-development" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-US" />
        <meta name="author" content="Mr. Saddam Husen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="category" content="Hockey Live Line API Provider" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best Hockey Live Line API | Real-time NHL Score API" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />


        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Hockey Live Line API Provider – NHL & Global Stats" />
        <meta property="og:description" content="Integrate Comfygen’s Hockey Live Line API into your sports platform. Get real-time NHL scores, match stats, events, and global hockey data." />
        <meta property="og:url" content="https://www.comfygen.com/hockey-live-line-api-development" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/hockey-live-line-api/hockey-live-line-api-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/hockey-live-line-api/hockey-live-line-api-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hockey Live Line API " />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Hockey Live Line API | Real-Time NHL Scores & Global Hockey Data" />
        <meta name="twitter:description" content="Build cutting-edge hockey platforms with Comfygen’s powerful Live Line API. Access real-time data from NHL and global leagues with 99.9% uptime." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/hockey-live-line-api/hockey-live-line-api-og-image.webp" />


        


      </Head>

     {/* <Header /> */}

      <div className="overflow-hidden ">

        <HeroSectionForAllPages
          heading="Hockey Live Line API Services"
          ptag="Get real-time hockey updates for your sports app with our fast and reliable Hockey Live Line API. We provide instant scores, live match updates, player stats, and play-by-play details for NHL, Hockey Pro League, and major hockey tournaments around the world."
          ptag1="Whether you run a fantasy sports app and website, our fast Hockey Data API helps you deliver accurate and lightning-fast hockey information to your users."
          li="Live Scores & Match Updates"
          li1="NHL & Global League Coverage"
          li2="Player Stats & Match Insights"
          li3="Play-by-Play Commentary"
          li4="Easy API Integration"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/hockey-live-line-api/hockey-live-line-api-hero.webp"
        />


        <AboutSection
          title="About Company"
          heading="About Our Hockey Live Line API Integration Services"
          description1="We are a trusted Hockey Live Line API Provider delivering high-performance APIs for hockey-focused software and app solutions. With a team of seasoned developers and deep experience in NHL API and NHL Stats API integrations, we provide everything you need to build powerful hockey score platforms. Our APIs support full coverage of events, statistics, lineups, penalties, game outcomes, and more across multiple leagues, including international and regional game"
          imageSrc="https://www.comfygen.com/comfygen-images/hockey-live-line-api/hockey-live-line-api-about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Experience Elite Hockey Live Score API Solutions Tailored for Every Need</h2>
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
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">How Our Hockey API Integration Process Works</h2>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>



        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Hockey Live Line API Developers"
          text="Get in touch with our expert Hockey Live Line API developers to build or enhance your sports application. We work with startups, leagues, data providers, and broadcasters to deliver real-time data systems using NHL Data API, Hockey Stats API, and Hockey Live Line API tech stacks."
          text1="Let’s Build It Together!"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Flexible hiring models",
            "24/7 project support",
            "Fully NDA-protected solutions",
            "API white-labeling options",
          ]}
        />


        <Faq
          faqData={JSON_DATA.Frequently}
          title=" Football Live Line Api "
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