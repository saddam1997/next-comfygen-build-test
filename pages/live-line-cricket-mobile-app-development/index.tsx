import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/livelinecricketmobile.json";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




import { IconBulb, IconCalendarEvent, IconHistory, IconLivePhoto, IconNews, IconTrendingUp, } from '@tabler/icons-react';
import Milestones from "../../components/Newcomponet/comman/Milestones";


const technologyData = [

  {
    img: <IconLivePhoto stroke={1.5} className="w-12 h-12" />, // Represents live events

    title: "AI-Powered Win Predictor",
    desc: "Analyse real-time stats to show match probabilities and predictive insights."
  },
  {
    img: <IconCalendarEvent stroke={1.5} className="w-12 h-12" />, // Represents event scheduling

    title: "Live Match Streaming",
    desc: " Deliver seamless, high-quality video streams for domestic, international, and league matches."
  },
  {
    img: <IconHistory stroke={1.5} className="w-12 h-12" />, // Represents historical data
    title: "Fantasy Sports Integration",
    desc: " Let users create teams, join contests, and compete based on live match data."
  },
  {
    img: <IconBulb stroke={1.5} className="w-12 h-12" />, // Represents predictions and insights
    title: "Betting Odds Display",
    desc: " Show live odds and predictions where legal, giving fans another way to interact with matches."
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />, // Represents news updates

    title: "Video Highlights",
    desc: "Quick access to key moments, boundaries, wickets, and post-match highlights."
  },
  {
    img: <IconTrendingUp stroke={1.5} className="w-12 h-12" />, // Represents trends and stats

    title: "Social Sharing & Fan Engagement",
    desc: "Enable sharing of scores, highlights, and polls while fostering community discussion within the app."
  }


];



const Process = [
  {
    title: "Requirement Discovery",
    description: "Understand your business goals, target audience, and feature requirements to craft a tailored solution."
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive and engaging interfaces that make it easy for fans to follow matches and access features."
  },
  {
    title: "Real-Time Data Feed Setup",
    description: " Integrate live score APIs, commentary feeds, and match statistics for accurate, instant updates."
  },
  {
    title: "Backend Development",
    description: "Build a scalable and secure server architecture capable of handling high traffic during major tournaments."
  },
  {
    title: "Testing",
    description: " Conduct thorough load, security, and real-time performance testing to ensure a smooth experience under peak usage."
  },
  {
    title: "Deployment & Support",
    description: "Launch the app across platforms and provide ongoing maintenance, updates, and technical support."
  },
  {
    title: "Marketing & User Engagement",
    description: " Implement app store optimisation, push notification strategies, and in-app engagement tools to maximise downloads and retain users."
  },

];

export default function Ecommerce(props) {
  let { initialData } = props;
  const [currentCount, setCurrentCount] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const settingstwo = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };


  const jsonLdData = [

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cricket Live Line & Live Streaming Mobile App Development",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen offers custom Cricket Live Line and Live Streaming mobile app development solutions, including real-time scores, cricket live streaming, player stats, fantasy sports integration, and interactive features for fans worldwide.",
      "url": "https://www.comfygen.com/live-line-cricket-mobile-app-development ",
      "mainEntityOfPage": "https://www.comfygen.com/live-line-cricket-mobile-app-development ",
      "areaServed": "Global",
      "serviceType": [
        "Cricket Live Line App Development",
        "Cricket Live Streaming App Development",
        "Live Cricket Score App Development",
        "Fantasy Cricket App Development",
        "Interactive Cricket Mobile App Development",
        "White-Label Cricket App Development"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen Technologies",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      }, {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "email": "sales@comfygen.com",
        "areaServed": ["IN", "US", "CA", "GB"],

        "availableLanguage": "en, in"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": {
        "@type": "Brand",
        "name": "Comfygen Technologies"
      },
      "name": "Cricket Live Line & Live Streaming Mobile App Development",
      "image": "About section Image URL",
      "description": "Comfygen provides end-to-end Cricket Live Line and Live Streaming mobile app development, including real-time scores, live streaming, player stats, fantasy cricket integration, and interactive features for cricket fans worldwide.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "450"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much time does it take to develop a custom Live Line Cricket mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The development time depends on features and complexity. A minimum viable product (MVP) for a live line cricket mobile app typically takes between 3 to 5 months to develop."
          }
        },
        {
          "@type": "Question",
          "name": "Do you sign an NDA before starting a mobile app development project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Comfygen always signs a Non-Disclosure Agreement (NDA) to ensure that all intellectual property and project details are fully protected before starting development."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to develop a custom Live Line Cricket mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost varies depending on app features, complexity, and platforms. Typically, developing a live line cricket mobile app may range from USD 30,000 to USD 60,000."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Comfygen the best app development company for Live Line Cricket apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comfygen delivers custom mobile apps that maximize ROI and fan engagement. Key advantages include advanced features, upcoming match lists, detailed sports data, expert teams, polls, and sports insights and news."
          }
        }
      ]
    }







  ];



  return (
    <>
      <Head>
        <title>
          Fast Live Line Cricket App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen offers fast live line cricket app development services with real-time ball-by-ball updates, instant alerts, live scores, commentary, and scalable cricket mobile app solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/live-line-cricket-mobile-app-development"
        />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta name="twitter:title" content="Cricket Live Line Mobile App Development Company" />
        <meta name=" twitter: description" content="Build high-speed Cricket Live Line mobile apps with Comfygen. Deliver real-time scores, live streaming, player stats, and interactive features for cricket fans worldwide." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/live-line-cricket-mobile-app-development/live-line-cricket-mobile-app-development.webp" />
        <meta property="og:image:alt" content="Cricket Live Line Mobile App Development" />
        <meta property="og:url" content="https://www.comfygen.com/live-line-cricket-mobile-app-development" />
        <meta property="og:title" content="Cricket Live Line Mobile App Development Company | Comfygen" />
        <meta property="og:description" content="Build high-speed Cricket Live Line mobile apps with Comfygen. Deliver real-time scores, live streaming, player stats, and interactive features for cricket fans worldwide." />
        <meta property="og:type" content="website" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />



      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[100px]">
        {/* hero section */}
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/live-line-cricket-mobile-app-development-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="Fast Live Line Cricket Mobile App Development Company"
            ptag=" fast live line cricket mobile app with Comfygen. We are a trusted fast live line cricket mobile app development company delivering real-time ball-by-ball scores faster than TV. Our apps feature instant match alerts, live commentary, accurate stats, and a smooth UI to keep cricket fans engaged without delays, even during high-traffic matches."
            li="Ultra-Fast Ball-by-Ball Live Line Updates"
            li1="Instant Match Alerts & Push Notifications"
            li2="Live Scores, Commentary & Match Statistics"
            li3="Custom Live Line Cricket App Development"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <Milestones/>
<section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Make the most popular Live Line Cricket Mobile App Development</h2>
              <p>Launch your cricket live line application before the season begins and capture the audience early. As the Best Live Line Cricket Mobile App Development Company, we will provide features in the app like real-time scores, instant alerts, match odds, player stats, and fast updates to boost downloads, retention, and engagement as major cricket tournaments pick up pace.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Why Businesses Are Investing in Cricket Score Mobile App Development"
          description1="Cricket has shifted heavily toward mobile-first viewing, and fans want updates the moment a ball is bowled. That’s why cricket fast live line apps have become essential for platforms trying to keep users engaged. Real-time scoring, instant match alerts, and ball-by-ball insights keep fans hooked longer than traditional score portals."
          description2="The demand peaks during major tournaments like the IPL, World Cup, Big Bash, and PSL, where millions of cricket fans depend on cricket live score apps to track matches on the go. For businesses, this creates a strong opportunity to boost user retention, increase daily active users, and build new revenue streams through ads, premium access, and fan engagement tools."
          description3="Sports platforms, broadcasters, and sports analytics companies are adopting the 
Live Line Cricket Mobile App Development Service because they deliver what fans expect: fast scores, accurate data feeds, live match stats, and clean UI"
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        
        <InfoSection
          heading="Develop the Most Downloaded Mobile Cricket score app"
          description1="If you want your cricket score app to rise to the top, focus on what fans care about most: speed, accuracy, and excitement. Our IPL live line mobile app development service gives users the same rush they feel inside a stadium, but right on their phones."
          description2="With real-time score updates, ball-by-ball commentary, multiple sport live lines, expert opinions, public polls, and live chat, fans stay connected to every moment. These features keep users coming back, boost engagement during big tournaments, and help your app become one of the most downloaded cricket platforms worldwide."
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/image/develop-the-most-mobile-cricket-app.webp"
          link="/contact-us"
          linkText="Lets Discuss"
          imagePosition="right"
        />



        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Portfolio"
            description=""
          />
        </section>





        <CallToAction
          heading="Catch Every Local Cricket Match Live!"
          text="Don’t miss a single run, wicket, or boundary—watch local tournaments, club matches, and regional leagues in real time on your mobile. Start Streaming Now!"
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />


        <div className="py-8">
          <Features
            heading="Supported Cricket Formats & Leagues for Live Streaming"
            description="Our cricket live streaming app development covers every major format and tournament, ensuring fans can follow matches in real time from anywhere in the world. Whether it’s high-profile international contests, domestic leagues, or women’s cricket, users get seamless access to live cricket matches, ball-by-ball commentary, player statistics, and real-time score updates."
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>

        <SolutionSec
          heading="Advanced Features for Modern Live Line Cricket Mobile App"
          subheading="Take your cricket app to the next level with features designed to keep fans engaged and coming back for every match."
          techData={technologyData}
        />

        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our End-to-End Live Line Cricket Mobile App Process</h2>
              <p className="text-base font-normal mt-2">
               At Comfygen, we follow a structured process to build cricket live line and live streaming apps that are fast, reliable, and feature-rich. Every step is designed to ensure high performance, user engagement, and scalability.
              </p>
            </div>

            <ProcessSec processSlides={Process} />
          </div>
        </section>


        <TechStack
          title="Tech Stack We use to develop a cricket live line App"
          description="We use a modern, robust technology stack to build cricket live line App and live streaming apps that are fast, scalable, and reliable. Our <a href='https://www.comfygen.com/mobile-app-development' class='underline font-semibold'>App Development</a> team selects the right tools to ensure seamless performance and smooth user experiences across all devices."
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title=" "
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
