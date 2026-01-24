import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cricketliveline.json";

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
    title: "Requirement Gathering",
    description: "We start by understanding your goals, users, and desired outcomes."
  },
  {
    title: "Market & Competitor Analysis",
    description: "We explore what’s trending and who you’re up against to ensure uniqueness."
  },
  {
    title: "UI/UX Design Mockups",
    description: "Designing interfaces that your users will love and navigate effortlessly."
  },
  {
    title: "Agile Development",
    description: "Our team builds your product in sprints for faster releases and better flexibility."
  },
  {
    title: "QA & Testing",
    description: "We ensure every feature works flawlessly with rigorous testing."
  },
  {
    title: "Launch & Deployment",
    description: "We handle full deployment and app store submissions."
  },
  {
    title: "Maintenance & Support",
    description: "Post-launch, we monitor, update, and support your product for continued success."
  }
];
;

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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sports Solution Development",
  "description": "Explore professional sports solution development services from Comfygen Technologies, including fantasy app development, sports analytics, APIs, and more.",
  "author": {
    "@type": "Organization",
    "name": "Comfygen Technologies"
  }
}

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
  "@context":"http://www.schema.org",
"@type":"Product",
"brand":"Comfygen Technologies",
"Name":"Sports Solution Development",
"image":"Hero section image",
"description":"Get expert sports solution development services from Comfygen Technologies. We build custom sports software, fantasy apps platforms, APIs & analytics tools.",
"aggregateRating":{"@type":"AggregateRating",
"ratingValue":"4.9",
"reviewCount":"1748"}
,
};


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
  <title>Sports Solution Development | Custom Sports Software & App Development Company</title>

  <meta name="description" content="Get expert sports solution development services from Comfygen Technologies. We build custom sports software, fantasy apps platforms, APIs & analytics tools." />
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
  />
</Head>

      {/* <LazyLoad height={80} offset={100}> */}
        <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden pt-16">

        <HeroSectionForAllPages
          heading="Sports Solution Development"
          subhead="Empowering the Future of Sports with Tailored Technology"
          ptag="Welcome to Comfygen Technologies – where sports meets innovation. As a leading name in sports solution development, we craft dynamic, user-friendly, and scalable sports software and apps for today’s digital-first sports world. From real-time score APIs to AI-powered analytics and immersive fan engagement platforms, our solutions are designed to empower clubs, leagues, startups, and enterprises alike. Whether it's fantasy leagues, fitness tracking apps, or sports management systems, our team delivers with precision, creativity, and passion. We don’t just build software—we create the future of sports. Join us and redefine the game with cutting-edge sports technology solutions."
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/sports-solution-development/sports-solution-development-hero.webp"
        />


        <AboutSection
          title="About Company"
          heading="Your Vision. Our Technology. One Winning Team."
          description1="We believe the future of sports lies in innovation, real-time data, and unforgettable digital experiences. That’s why our approach to sports solution development goes beyond basic functionality—we build smart, scalable, and dynamic platforms that revolutionize the way sports are played, managed, and enjoyed by fans across the globe."
          description2="As a trusted name in sports software development, we craft tailor-made solutions for clubs, leagues, academies, and businesses that want to lead the game with technology. Whether it’s building a seamless sports management software for teams and leagues or launching fantasy sports apps that thrill users, we put your vision at the center of everything."
          description3="Our expertise covers everything from custom sports app development and AI-powered sports analytics solutions to cloud-based sports platforms and real-time sports data solutions. We empower you to make faster decisions, automate operations, and deliver high-performing experiences across devices."
          description4="Partnering with us means you’re choosing a sports software company that values innovation, security, and performance. Whether you're exploring how to develop a sports app, need sports live score API development, or require sports event management software—we’re here to elevate your journey in sports tech."
          imageSrc="https://www.comfygen.com/comfygen-images/sports-solution-development/sports-solution-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Game-Changing Sports Software Solutions Tailored to Every Play, Team & Goal</h2>
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
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Step-by-Step Sports Solution Development Process</h2>
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
          heading="Let’s Build Your Next Sports Innovation"
          text="Are you ready to transform your sports vision into a high-performing digital product?
          We specialize in building scalable, feature-rich, and user-centric sports technology solutions that match your unique business goals. Whether you're developing a fantasy sports app, need robust sports management software, or want to integrate real-time data APIs, our team brings the innovation, expertise, and commitment to make it happen."
          text1="We go beyond just writing code—we become your technology partner, ensuring every project we deliver enhances fan engagement, streamlines operations, and gives you a competitive edge. Our proven development processes, agile methodologies, and personalized support ensure that your sports app or platform is future-ready."
          text2="Here’s what you get when you hire Comfygen Technologies:"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
             "Tailored development services built around your specific needs",
              "End-to-end support from ideation to deployment",
             "Access to modern tech stacks like AI, cloud, and mobile",
             "A results-driven team focused on performance and scalability"
          ]}
          
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title=" Cricket Live Line Api"
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
