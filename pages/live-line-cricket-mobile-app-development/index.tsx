import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/livelinecricketmobile.json";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import InfoSectionRight from "../components/InfoSectionRight";
import SolutionSec from "../components/SolutionSec";
import {IconBell, IconBulb, IconCalendarEvent, IconClock, IconCoin, IconFileSpreadsheet, IconGlobe, IconHistory, IconLivePhoto,  IconNews,  IconTrendingUp, } from '@tabler/icons-react';
import PortfolioSec from "../components/PortfolioSec";
import InfoSectionLeft from "../components/InfoSectionLeft";


const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});


const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const technologyData = [

  {
    img: <IconLivePhoto stroke={1.5} className="w-12 h-12" />, // Represents live events

    title: "The cricket live line.",
    desc: "ODIs, T20s, and Tests are all covered, along with domestic and women's matches."
  },
  {
    img: <IconCalendarEvent stroke={1.5} className="w-12 h-12" />, // Represents event scheduling

    title: "Upcoming Events",
    desc: "Cricket Fast Line gives you all the information you need about upcoming cricket matches.As well as domestic and women's matches, it covers all ODI, T20, and Test international matches"
  },
  {
    img: <IconHistory stroke={1.5} className="w-12 h-12" />, // Represents historical data
    title: "Result",
    desc: "There is coverage of all ODI matches, T20 matches, Test matches, domestic matches, and women's matches. There is a list of all recent matches for all teams"
  },
  {
    img: <IconBulb stroke={1.5} className="w-12 h-12" />, // Represents predictions and insights
    title: "Prediction",
    desc: "Utilizing our app's prediction feature, you can find out which team will win or lose a game."
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />, // Represents news updates

    title: "  Latest News and Status",
    desc: "Admins can create a new match from their dashboard."
  },
  {
    img: <IconTrendingUp stroke={1.5} className="w-12 h-12" />, // Represents trends and stats

    title: "Updates & News on Cricket",
    desc: "Records, rankings, and statistics. Find out who the cricket players are and their details."
  },
  {
    img: <IconFileSpreadsheet stroke={1.5} className="w-12 h-12" />, // Represents scorecards

    title: "Score Card",
    desc: "The Score Card feature provides ball-by-ball commentary of the match scorecard."
  },
  {
    img: <IconCoin stroke={1.5} className="w-12 h-12" />, // Represents odds and betting

    title: "  Match Odds",
    desc: "Information about match odds and sessions is accurate."
  },
  {
    img: <IconBell stroke={1.5} className="w-12 h-12" />, // Represents notifications

    title: "  Alerts and Notifications",
    desc: "The best feature of this app is that you will receive live notifications from ongoing cricket matches. ODIs, T20s, IPLs, and other matches."
  },
  {
    img: <IconClock stroke={1.5} className="w-12 h-12" />, // Represents real-time updates

    title: " Cricket Live Updates",
    desc: "On the app, you can view live cricket scores at a fast pace. The latest cricket scores and ball-by-ball updates."
  },
  {
    img: <IconGlobe stroke={1.5} className="w-12 h-12" />,
    title: " Cricket Live Line",
    desc: "All the information you need can be found with this cricket live line feature."
  }
  
];

const Portfolio = {
  All: [
    {
      img: "https://www.comfygen.com/img/cricket-live-line-app-web-development.webp",
      head: "Cricket Live Line App & Web Development",
      name: "Live lines, public polls, live commentary, and many other features enhance the thrill of the match. Performance, precision, and perseverance are the keys to success in cricket.",
      name1: "With features such as",
      listItems: ["Real-time live line updates,", "Live commentary,", "Multiple sports live lines," , "Expert polls, public polls, and live chat,"],
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    },
  
  ],
};

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

  return (
    <>
      <Head>
        <title>
          Cricket Fast Line Mobile App Development Company in India & USA
        </title>
        <meta
          name="description"
          content="Looking to develop a Cricket Fast Live Line Mobile App? Our team of expert Mobile app developers can create a top-rated Cricket Fastline APi and applications that provides real-time scores, news, player stats, and more. Contact us today for a app consultation."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/live-line-cricket-mobile-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cricket Fast Line Mobile App Development Company in India & USA"
        />
        <meta
          property="og:description"
          content="Looking to develop a Cricket Fast Live Line Mobile App? Our team of expert Mobile app developers can create a top-rated Cricket Fastline APi and applications that provides real-time scores, news, player stats, and more. Contact us today for a app consultation."
        />
        <meta name="language" content="en-us" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/live-line-cricket-mobile-app-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T11:48:00+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/cricket.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="11 minutes" />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        {/* hero section */}
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/live-line-cricket-mobile-app-development-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="Cricket Fast Live Line Mobile App Development Company"
            ptag="To meet the demands of cricket fans, we provide services for Fast Live Line Cricket Mobile Application Development. Our team specializes in developing engaging mobile applications for cricket fans that include real-time information, live scores, match schedules, player statistics, and other features."
            li="Real-Time Cricket Updates"
            li1="Engaging Cricket App Solutions"
            li2="Live Scores & Stats"
            li3="Customized Cricket App Development"
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
          heading="Cricket Live Line Mobile App Development Company"
          description1="With features like live lines, public votes, live commentary, and more, we specialize in Live Cricket Line Android App Development that improve the experience of watching matches. Our staff is focused on Live Cricket Mobile App Development that give consumers real-time updates and fun features because we comprehend the excitement of cricket matches. Whether you require real-time score updates, match analysis, player data, or interactive features like user polls, we can create a Cricket Live Line software that piques the interest of cricket fans and enhances their experience of watching matches. We can realize your vision for a Cricket fast Live Line app development with a user-friendly layout and fluid performance thanks to our expertise in Live cricket mobile app development. Choosing us for your company would be teh best decision you don’t have to regret we are the most reliable Cricket live line app development Company"
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Make the most popular mobile app for cricket live line</h2>
              <p>You can develop a Live Line Cricket app just in time for the upcoming sports season!</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <InfoSectionRight
          heading="Develop the most downloaded mobile cricket app"
          description1="The three keys to success in cricket are performance, precision, and perseverance. A live line cricket mobile app would be appreciated by countless cricket fans around the world. With features such as real-time live line updates, live commentary, multiple sport live lines, expert polls, public polls, and live chat, cricket enthusiasts can experience the same thrill they would get sitting in the stands of a cricket stadium."
          imageSrc="https://www.comfygen.com/image/develop-the-most-mobile-cricket-app.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <SolutionSec
          heading="Features of Live Cricket Score Mobile Apps"
          subheading="All features are designed to help the business grow exponentially while keeping the thrill of the game alive on the go."
          techData={technologyData}
        />

        {/* <NewSection NewSection={JSON_DATA.NewSections} /> */}
        <ContactFromCenter />
    
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
         
            <InfoSectionLeft
              heading="What makes Comfygen the best app development company for Live Line Cricket?"
              description1="You can maximize your business's ROI and thrill your fans with custom mobile apps from Comfygen."
              points={["Astonishing Features" , "A list of upcoming matches" , "Data related to sports" , "Team of Experts & Innovators" , "The polls" , "Insights and news about sports"]}
              imageSrc="https://www.comfygen.com/images/what-is-cricket-data-api.webp"
              link="/contact-us"
              linkText="LET'S CONNECT "
            />
            <InfoSectionRight
              heading="Multiple sports support"
              description1="How important is it to you that your live Cricket score mobile app also covers T10 Leagues? No worries, we've got you covered! For almost all major sports, Comfygen offers custom live line mobile app development."
              description2="For almost all major sports, Comfygen offers custom live line mobile app development."
              points={["Cricket" , "Tennis" , "News app for Android" , "Football" , "Basketball"]}
              imageSrc="https://www.comfygen.com/images/multiple-sports-support.webp"
              link="/contact-us"
              linkText="Lets Discuss"
            />
             <InfoSectionLeft
              heading="In order to develop Fast Line Cricket apps, we follow a specific process"
              points={["Requirements Analysis" , "Insights & Strategy" , "Plan & Wireframe" , "Development based on sprints" , "Quality Assurance or Testing" , " Deployment"]}
              imageSrc="https://www.comfygen.com/images/cricket-fast-live-line-api-development.webp"
              link="/contact-us"
              linkText="LET'S CONNECT "
            />
          </div>
        </section>
        {/* <CricketCom /> */}
        <PortfolioSec
          techData={Portfolio}
          heading="Our Portfolio"
          description=""
        />

        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title=" "
        />
      </div>
    </>
  );
}
