import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import "aos/dist/aos.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import JSON_DATA from "./json/ludo.json";
import Link from "next/link";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import WhyChoosee from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import InfoSectionRight from "../components/InfoSectionRight";
import ModelsSec from "../components/ModelsSec";
import ProcessSec from "../components/ProcessSec";
import CardItem from "../components/CardItem";
import TechStack from "../components/TechStack";
import CallToAction from "../components/CallToAction";
import { MdOutlineArrowOutward } from "react-icons/md";
import HireDeveloper from "../components/HireDeveloper";
import Faq from "../components/Faq";
import BlogSection from "../components/BlogSection";
import ServicesSec from "../components/ServicesSec";
import PortfolioSlider from "../components/PortfolioSlider";
import CardGrid from "../components/CardGrid";
import {
  Icon3dCubeSphere,
  IconBrain,
  IconCpu,
  IconDevices,
  IconGlobe,
  IconLock,
} from "@tabler/icons-react";
import ClientTestimonials from "../client-testimonials";
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
// const BlogSection = dynamic(() => import("../components/BlogSection1"), {
//   loading: () => <p>Loading...</p>,
// });
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
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
    title: "Conceptualization",
    description:
      "It is the foremost thing required to be done. Comfygen works on the basis of conceptualizing gaming app development solutions; in which the team will gather all the ideas, plan for the things, and think of adding some uniqueness in your Ludo Game Application Development Services.",
  },
  {
    title: "Market Research and Analysis",
    description:
      "To provide the best experience with our ludo game application services; our priority is to do a deep market research and analyze to understand what will be the best game development solution and how the app should be built. The research and evaluation in the current market with competitors helps us to provide the best game development products.",
  },
  {
    title: "User-Interface",
    description:
      "In this, we work on the designing part. Our focus will be on creating a functional yet interactive user-interface. Building a ludo game app development with impressive designs, attractive prototyping, and seamless user-interface will fetch a vast audience to one’s gaming application.",
  },
  {
    title: "Agile Development",
    description:
      "After we give a great impressive user-interface; now time to develop an agile and robust ludo gaming application development services, solutions via putting codes and programs inside. We build an application; which definitely will stand out in the crowd and user’s will be impressed by that.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "When the ludo gaming app development is developed; the most important stage arrives right here called “Testing & Quality Assurance.” The QAs will test the application; all its features, navigational functions, user-interface and other aspects to confirm whether the app is ready to launch or some debugging is still required.",
  },
  {
    title: "App Deployment",
    description:
      "Once you are confirmed with the ludo game app development services, solutions are ready to launch, now deploy / launch the application to the respective platform (Android app development / iOS app development). The clients can also choose for both platforms, via building a cross-platform gaming application development services.",
  },
  {
    title: "Support & Maintenance",
    description:
      "We are not in support till development, in fact our team consistently stays in touch with the clients and monitors the ludo gaming application development services till the moment we are confirmed it is running well in the marketplace.",
  },
];

const CardGridData = [
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
    title: "AI/ML for Intelligent Gameplay",
    desc: "We <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ai-development' >integrate the power of AI and Machine Learning</a> to create smart opponents, enhance gameplay dynamics, and deliver adaptive challenges in your Ludo game app. AI-driven gameplay ensures players stay engaged and entertained longer.",
    listItems: [],
  },
  {
    img: <IconLock stroke={1.5} className="w-12 h-12" />,
    title: "Blockchain for Secure Transactions",
    desc: "We <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blockchain-development' >integrate blockchain technology</a>  to create transparent, secure frameworks for real-money Ludo gaming apps. This emerging tech enhances trust by safeguarding sensitive user data and transactions within the Ludo game ecosystem.",
    listItems: [],
  },
  {
    img: <IconCpu stroke={1.5} className="w-12 h-12" />,
    title: "IoT Integration for Immersive Play",
    desc: "<a class='text-blue-500 font-semibold' href='https://www.comfygen.com/iot-development-company' >IoT integration</a> adds new dimensions to Ludo games by connecting with smart devices like wearables. Players can track progress, monitor health stats, and integrate gaming with their connected lifestyle, creating a truly immersive experience.",
    listItems: [],
  },
  {
    img: <Icon3dCubeSphere stroke={1.5} className="w-12 h-12" />,
    title: "AR/VR for Next-Level Interaction",
    desc: "We incorporate Augmented and Virtual Reality technologies to make Ludo gaming more immersive and engaging. Players experience vibrant 3D environments, interactive boards, and lifelike animations for an unforgettable gaming adventure.",
    listItems: [],
  },
];

const serviceSchema = {
    "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ludo Game App Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "url": "https://www.comfygen.com/"
  },
  "description": "Boost player engagement with our custom Ludo game app development services. We create feature-rich Ludo games for Android, iOS, and web, tailored to your business goals.",
  "url": "https://www.comfygen.com/ludo-game-development",
  "mainEntityOfPage": "https://www.comfygen.com/ludo-game-development",
  "areaServed": "Global",
  "serviceType": [
    "Custom Ludo Game App Development",
    "Real-Money Ludo Game Development",
    "AI & Bots Integration"

  ],
 
  "sameAs": [
    "https://www.facebook.com/comfygen.technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies",
    "https://www.linkedin.com/company/comfygen-technologies"
    
  ]

}

const ldJsonData = {
  "@context":"http://www.schema.org",
"@type":"Product",
"brand":"Comfygen Technologies",
"Name":"Ludo Game Development Services",
"image":"Hero section image",
"description":"Comfygen offers custom Ludo game app development services, delivering fully branded and feature-rich Ludo games for Android, iOS, and web platforms. Our real-money gameplay and multiplayer support ensure maximum player engagement and retention.",
"aggregateRating":{"@type":"AggregateRating",
"ratingValue":"4.9",
"reviewCount":"469"}

};

const BreadcrumbList = {
   "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "https://www.comfygen.com"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Game Development",
    "item": "https://www.comfygen.com/ludo-game-development"  
  }]

}

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does your Ludo game app development company offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comfygen is a leading Ludo game app development company in India. We offer a comprehensive range of services including custom Ludo game development for iOS, Android, and web platforms. Our offerings span game design, development, quality assurance, and post-launch support."
      }
    },
    {
      "@type": "Question",
      "name": "Can you customize the Ludo game rules according to our preferences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely yes. We can fully customize Ludo game rules to align with your vision, enabling unique gameplay and innovative features tailored to your audience."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use for Ludo game app development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use leading game engines and technologies such as Unity, Unreal Engine, and HTML5 to deliver high-quality, engaging Ludo game apps with smooth animations and stunning visuals."
      }
    },
    {
      "@type": "Question",
      "name": "Is it possible to integrate multiplayer features into the Ludo game app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in integrating real-time multiplayer functionality using advanced networking for smooth, engaging gameplay experiences."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide cross-platform compatibility for Ludo game apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our apps are built to work seamlessly across iOS, Android, and web platforms, ensuring wide accessibility and user reach."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle graphics and animation in Ludo game development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our expert design team focuses on stunning visuals, fluid animations, and engaging UI/UX to create a captivating game environment."
      }
    },
    {
      "@type": "Question",
      "name": "Can you assist with monetization strategies for the Ludo game app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we help implement various monetization models like in-app purchases, ads, and premium versions to help maximize your revenue."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical timeframe for developing a custom Ludo game app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline depends on your requirements, but most Ludo games take a few months from planning to launch. We provide a full roadmap upfront."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support and maintenance services for Ludo game apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive post-launch support and maintenance to ensure your app runs smoothly and stays updated."
      }
    },
    {
      "@type": "Question",
      "name": "Is it possible to integrate social media sharing features in the Ludo game app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We can add social sharing features so users can share their achievements on Facebook, Instagram, Twitter, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Can you develop augmented reality (AR) or virtual reality (VR) Ludo game apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our team is experienced in building AR and VR-based Ludo games for a more immersive and futuristic gameplay experience."
      }
    },
    {
      "@type": "Question",
      "name": "What is the process for getting started with your Ludo game app development services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To get started, simply contact us via our website. We'll schedule a consultation to understand your goals and prepare a customized development roadmap. From concept to deployment, we’ll work closely with you to bring your Ludo game app to life."
      }
    }
  ]

};

const ldJsonData1 = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  priceRange: "$20-$550",
  image: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/ludo-game-development",
  name: "No. 1 Ludo game development company in the USA, UK and India",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-152, Dayanand Marg, Nemi Nagar,",
    addressLocality: "Vaishali Nagar, Near D A V Centenary Public School",
    addressRegion: "Jaipur, Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Saddam husen",
    },
  },
  url: "https://www.comfygen.com/ios-app-development",
  telephone: "+91 9587867258, +1 5145659471",
};
export default function LudoGame(props) {
  let { initialData } = props;
  const [admin, setAdmin] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  return (
    <div className="overflow-hidden">
      <Head>
  <title>Top Ludo Game Development Company in India & USA | Comfygen</title>
  <meta
    name="description"
    content="Comfygen is a leading Ludo game development company in India and the USA. We build advanced, feature-rich Ludo apps with real-money play, multiplayer, and secure systems. Hire top Ludo game developers today!"
  />
  <link
    rel="canonical"
    href="https://www.comfygen.com/ludo-game-development"
  />
  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />
  <meta charSet="UTF-8" />
  <meta
    property="og:title"
    content="Top Ludo Game Development Company in India & USA | Comfygen"
  />
  <meta
    property="og:description"
    content="Get high-quality, custom Ludo game development services with Comfygen. We specialize in real-money Ludo apps, 3D gameplay, AI/ML, and multiplayer features."
  />
  <meta
    property="og:url"
    content="https://www.comfygen.com/ludo-game-development"
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    property="og:image"
    content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-portfolio.webp"
  />
  <meta
    name="twitter:card"
    content="summary_large_image"
  />
  <meta
    name="twitter:title"
    content="Top Ludo Game Development Company in India & USA | Comfygen"
  />
  <meta
    name="twitter:description"
    content="Build secure, engaging Ludo game apps with Comfygen – the trusted Ludo game development company in India & the USA."
  />
  <meta
    name="twitter:image"
    content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-portfolio.webp"
  />
  <meta name="copyright" content="Comfygen Private Limited" />
  <meta name="language" content="en-us" />
  <meta name="abstract" content="Ludo game app developer India USA" />
  <meta name="summary" content="Best Ludo game app development services by Comfygen" />
  <meta name="author" content="Comfygen Private Limited" />
  <meta name="reply-to" content="sales@comfygen.com" />
  <meta name="owner" content="Comfygen Private Limited" />
  <meta name="category" content="Ludo Game Development Company" />
  <meta name="coverage" content="Worldwide" />
  <meta name="distribution" content="Global" />
  <meta name="rating" content="General" />
  <meta name="subtitle" content="Ludo game app development in India and the USA" />
  <meta name="MobileOptimized" content="320" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5, user-scalable=yes" />
  <meta property="og:locale" content="en_US" />
  <meta property="business:contact_data:country_name" content="India" />
  <meta property="business:contact_data:locality" content="Jaipur" />
  <meta name="og:latitude" content="26.912434" />
  <meta name="og:longitude" content="75.787271" />
  <meta name="fb:page_id" content="110909321596135" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData1) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbList) }}
  />
</Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/ludo-game-development-hero-img.webp')]">
        <HeroSectionForAllPages
          heading="Best Ludo Game Development Company"
          ptag="Make your ludo gaming application more interesting with the assistance from Comfygen Technologies. We are one leading ludo game app development company In India & The USA, embark with the latest feature and tech trends integration. Our top-notch Ludo game app developers can bring exciting and innovative alterations in the applications for crafting unforgettable user’s experience. Our ultimate goal is to make Ludo game development services and solutions more appealing to gather a global audience. Our belief is to create applications with fun and challenging elements ensuring reliability, user-friendliness, security and vast engagement."
          ptag1="Let’s have a discussion to start your project!!!"
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
        heading="Top-Notch Ludo Game App Development Company in India & USA"
        description1="We specialize in offering complete Ludo game services as a top Ludo game development company in India and the USA. Our group of talented programmers is experienced in producing engrossing Ludo games for numerous platforms. Whether you require cross-platform development or a Ludo game for mobile devices, we have the know-how to provide simple and engaging gameplay. We provide expert Ludo game development services and the option to engage committed Ludo game app programmers because we have a solid track record of developing Ludo game applications. We are dedicated to providing high-quality Ludo game development solutions that are suited to your particular needs, from design to execution."
        imageSrc="https://www.comfygen.com/image/about-us-image.webp"
        link="/about-us"
        linkText="Explore More"
      />
      <section className="lg:py-16 py-10 bg-[#F5F5F9]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
              Premium Quality Ludo Game App Development Services
            </h2>
            <p className="text-base text-center font-normal">
              Ludo has been a classic game for decades. Thanks to the
              technologies that are incredibly improving this gaming constantly;
              like now the game is available in mobile applications with some
              cool attractive features. Comfygen is the one-stop destination for
              every interested client to get a competitive and
              market-standardized Ludo game app development for businesses.
            </p>
          </div>
          <div className="">
            <ServicesSec servicesData={JSON_DATA.servicesData} />
          </div>
        </div>
      </section>

      <section className="lg:py-16 py-10 bg-[#F5F5F9]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-4 text-center">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
              <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                A Clone of Popular Ludo Games Already Created by Our Designers
              </h2>
              <p>
                At Comfygen, we understand the power of proven gaming models and
                offer high-quality, feature-rich Ludo game clone apps inspired
                by popular Ludo games. Our expert team has already developed
                clones that capture the essence of these games while adding
                unique features to help you stand out in the competitive gaming
                market.
              </p>
            </div>
            <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {JSON_DATA.LeadingSoftware.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                    <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                      {num}
                    </div>
                    <h3 className="text-2xl text-[#212121] font-semibold">
                      {title}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactFromCenter />
      <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />

      {/* <PortfolioSlider
        techData={JSON_DATA.portfoliodata}
        heading="Our Ludo Games Portfolio"
        description="Explore our advanced Ludo game development portfolio, featuring engaging, feature-rich, and innovative gaming experiences tailored to captivate players worldwide. Partner with us to bring your Ludo game vision to life and dominate the market."
      /> */}

      <section className="bg-[#F5F5F9] lg:py-16 py-10">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
          <div className="text-center">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
              World-Class Ludo Game App Development Process
            </h2>
            <p className="text-center">
              The mobile game app developers team at Comfygen follows a certain
              step-by-step process to build the best kind of ludo game app
              development possible. This Ludo game development process plays a
              significant role in completing the task with agility.
            </p>
          </div>
          <ProcessSec processSlides={Process} />
        </div>
      </section>

      <section
        className="w-full bg-end bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("https://www.comfygen.com/img/hire-ludo.webp")`,
        }}
      >
        <div className="w-full lg:py-16 py-10 bg-gradient-to-r from-[#272868]/90 to-[#5556D1]/90 ">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            {/* text-section */}
            <div className="space-y-2 lg:text-center text-white">
              <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Features of Ludo Gaming Application{" "}
              </h2>
              <p className="text-base">
                Comfygen believes to match the current market standards. Our
                ludo game app programmers implement some current common and
                additional updated features in the Ludo game application. The
                principle features we provide in the #No. 1 ludo gaming app are:
              </p>

              <div className="py-10">
                <div className="grid grid-cols-2 text-center border-b">
                  <span
                    onClick={() => setAdmin(admin === 0 ? 0 : 0)}
                    className={
                      admin === 0
                        ? " border-b-2 border-b-[#fff] text-[#fff] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer "
                        : "bg-transparent  text-white  px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                    }
                  >
                    Game Features
                  </span>
                  <span
                    onClick={() => setAdmin(admin === 1 ? 0 : 1)}
                    className={
                      admin === 1
                        ? " border-b-2 border-b-[#fff] text-[#fff] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer"
                        : "bg-transparent text-white  px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                    }
                  >
                    Admin Panel
                  </span>
                </div>

                {admin === 0 ? (
                  <>
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3 py-10">
                      {JSON_DATA.FeaturesLudo.slice(0, 12).map((elem) => {
                        const { title, img, num } = elem;
                        return (
                          <div
                            key={num}
                            className="flex flex-col items-center space-y-2"
                          >
                            <Image
                              className="rounded-md"
                              alt={title}
                              src={img}
                              width={60}
                              height={60}
                            />
                            <p className="text-[#fff]">{title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : null}
                {admin === 1 ? (
                  <>
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3 py-10">
                      {JSON_DATA.FeaturesLudo.slice(12, 18).map((elem) => {
                        const { title, img, num } = elem;
                        return (
                          <div
                            key={num}
                            className="flex flex-col items-center space-y-2"
                          >
                            <Image
                              className="rounded-md"
                              alt={title}
                              src={img}
                              width={60}
                              height={60}
                            />
                            <p className="text-[#fff]">{title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStack
        title="Technologies We Use to Build Ludo Gaming Applications"
        description="Our Ludo game development solutions are built on a powerful stack of technologies, ensuring high performance, scalability, and engaging gameplay across all devices. We combine cutting-edge tools with proven expertise to deliver exceptional gaming experiences tailored to your business goals."
        filterCategory={["crypto"]}
      />

      <CardGrid
        heading="Our Top Emerging Technologies for Improving Ludo Gaming"
        subheading="Comfygen takes your Ludo game app to the next level with cutting-edge technologies. Our strategic use of emerging tech ensures that your gaming platform is engaging, secure, and future-ready."
        techData={CardGridData}
      />

      <WhyChoosee
        title={JSON_DATA.pageData.title}
        description={JSON_DATA.pageData.description}
        mainCardData={JSON_DATA.pageData.mainCardData}
        gridData={JSON_DATA.pageData.gridData}
      />

      <CallToAction
        heading="Let’s hear what you have to say?"
        text="Get in touch with us and discuss your needs and requirements with our experts."
        buttonText="Get Started"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
        imageAlt="Get in touch now."
      />

      <section className="bg-[#fff]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Mark Your Presence in Web/App-based Top Cards Games Development
              via Comfygen
            </h2>
          </div>
          <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 ">
            {JSON_DATA.GameCardData.slice(0, 6).map((elem) => {
              const { title, url, img } = elem;
              return (
                <div className="w-full ">
                  <Link href={url} passHref={true}>
                    <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                      <Image
                        src={img}
                        alt={title}
                        width={730}
                        height={419}
                        className="w-full"
                      />
                      <div className=" p-4 bg-[#5556D1]/80 flex flex-col">
                        <div>
                          <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                            {title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}

            {showContent ? (
              <>
                {JSON_DATA.GameCardData.slice(6, 17).map((elem) => {
                  const { title, url, img } = elem;
                  return (
                    <div className="w-full ">
                      <Link href={url} passHref={true}>
                        <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                          <Image
                            src={img}
                            alt={title}
                            width={730}
                            height={419}
                            className="w-full"
                          />
                          <div className=" p-4 bg-[#5556D1]/80  flex flex-col">
                            <div>
                              <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                                {title}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>

          {showContent ? (
            <div className="flex justify-center items-center mt-8">
              <button
                className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative "
                onClick={() => setShowContent(!showContent)}
              >
                Load Less <MdOutlineArrowOutward />
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-8">
              <button
                className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative "
                onClick={() => setShowContent(!showContent)}
              >
                Load More <MdOutlineArrowOutward />
              </button>
            </div>
          )}
        </div>
      </section>
      <HireDeveloper
        heading="Hire Best Ludo Game App Developers for Proficient Crafting"
        text="Comfygen is a leading mobile and Ludo game app development company, renowned for delivering innovative and cost-effective solutions worldwide. As the #1 Ludo gaming app development service provider, we specialize in creating robust, engaging applications tailored to client needs using the latest technologies and agile methodologies. Our expert developers ensure high-quality, multi-platform gaming solutions that meet global market standards, making us the top choice for Ludo game app development."
        buttonText="Hire Developer"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
        imageAlt="hire-developer"
        listItems={[
          "Skilled and Knowledgeable Development Team",
          "Team of Game App Developers with 10+ Years of Experience.",
          "Promising User-Friendly and Interactive Gaming App Development Services",
          "High-Engagement gathers from Ludo Game App Development Services and Solutions",
        ]}
      />

      {/* <ClientTestimonials
                heading="What Our Clients Say"
                testimonials={JSON_DATA.customTestimonials}
              /> */}
      <Faq
        faqData={JSON_DATA.Frequently}
        title="Ludo Game Development Technology"
      />
      {/*<BlogSection initialData={initialData} />*/}
    </div>
  );
}
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
