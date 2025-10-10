import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import Ourgames from "../../components/ourgames";
import { BsFillStarFill } from "react-icons/bs";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import JSON_DATA from "./json/game.json";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import HireDeveloper from "../components/HireDeveloper";
import ProcessSec from "../components/ProcessSec";
import TechStack from "../components/TechStack";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import InfoSectionRight from "../components/InfoSectionRight";
import SolutionSec from "../components/SolutionSec";
import PortfolioSlider from "../components/PortfolioSlider";
import { IconApi, IconDeviceGamepad2, IconDice, IconStar } from "@tabler/icons-react";
import NewTeckStack from "../componentsnew/NewTeckStack";
import WhyChoose from "../components/WhyChooseUs";
import ClientTestimonials from "../components/ClientTestimonials";


const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
// const BlogSection = dynamic(() => import("../components/BlogSection1"), {
//   loading: () => <p>Loading...</p>,
// });


const GuidSection = dynamic(() => import("./components/GuidSection"), {
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
    "title": "Concept & Planning",
    "description": "We begin with brainstorming, market research, and defining game objectives. Our team creates a detailed game design document (GDD) outlining features, gameplay, and technology stack."
  },
  {
    "title": "Game Design & Prototyping",
    "description": "Our mobile game designers build engaging <a class='underline font-semibold text-blue-500' href='https://www.comfygen.com/web-design' >UI/UX</a>, storyboards, and character designs. A prototype is developed to showcase core gameplay mechanics and ensure it aligns with client expectations."
  },
  {
    "title": "Game Development",
    "description": "This phase involves coding the game mechanics, developing the visual assets, and integrating all elements into a cohesive whole. Our skilled developers leverage the latest tools and technologies to ensure smooth gameplay, engaging interactions, and optimal performance across platforms."
  },
  {
    "title": "Quality Assurance and Testing",
    "description": "Rigorous testing is a cornerstone of our process. We conduct comprehensive QA testing to identify and rectify bugs, glitches, and any performance issues. User feedback is invaluable during this stage to fine-tune the gaming experience."
  },
  {
    "title": "Iteration and Refinement",
    "description": "Feedback gathered during testing is used to refine gameplay elements, optimize performance, and enhance user experience. This iterative process ensures that the game meets the highest standards of quality."
  },
  {
    "title": "Launch and Deployment",
    "description": "With the game polished and tested, we prepare for launch. We assist in publishing the game on the desired platforms, whether it's app stores, PC, consoles, or web. Our game development outsourcing team ensures a smooth launch process, including setting up distribution, marketing assets, and promotional strategies."
  },
  {
    "title": "Post-Launch Support and Updates",
    "description": "Our commitment extends beyond launch. We provide ongoing support to address any unforeseen issues, gather player feedback, and implement updates that introduce new features, content, and improvements based on player engagement."
  }
]

const technologyData = [
  {
    img: <IconDeviceGamepad2 stroke={1.5} className="w-12 h-12" />,
    title: "Game Development",
    desc: "As a pioneering force in game app development, we have an expertise in developing engaging experiences that span the spectrum from classic favorites like poker, ludo, bingo, and blackjack to a myriad of other captivating games."
  },
  {
    img: <IconApi stroke={1.5} className="w-12 h-12" />,
    title: "Game Development API",
    desc: "We extend our expertise through our comprehensive Game Development API, designed to empower developers to elevate their creations. Our API like Cricket Live Line API, Live Casino API opens up a world of possibilities, granting seamless access.From integrating immersive graphics and real-time multiplayer capabilities to enabling in-game transactions, our API is a gateway to crafting exceptional gaming experiences."
  },
  {
    img: <IconDice stroke={1.5} className="w-12 h-12" />,
    title: "Betting Game Development",
    desc: "Whenever you decide to invest a good amount of capital on an all-inclusive web or app interface on sports betting you need to think twice whenever opting the right firm. We offer our global clients all kinds of sports betting apps including casino game development, cricket betting apps, matka game development and many more. You just name it and our expert professionals can develop a highly profitable betting app with the latest AI technology and tools for users worldwide that too on different platforms."
  },
  {
    img: <IconStar stroke={1.5} className="w-12 h-12" />,
    title: "Fantasy Game Development",
    desc: "Being experts in the Fantasy Sports industry, we feel proud to own a team of fantasy game developers who have developed 30+ fantasy websites and apps. We have created an advanced level of white label fantasy apps with unique features and customizations according to the client’s desire and requirements to make a profitable business model."
  }
];


export default function MultiChain(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new window.Image();
    img.src = "https://www.comfygen.com/img/hire-baccrate-game.webp";
    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  const imageHire = {
    backgroundImage: loaded ? `url("https://www.comfygen.com/img/hire-baccrate-game.webp")` : "none",
  };



  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      addressLocality: "Jaipur, Rajasthan",
      addressRegion: "India",
      postalCode: "302006",
      telephone: "+91-958-786-7258",
    },
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "40 Tuxedo Ct, Toronto, ON",
      addressLocality: "Toronto",
      addressRegion: "Canada",
      postalCode: "M1G3S7",
      telephone: "+1 579-977-4475",
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Game Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen specializes in 2D & 3D game development services with engaging gameplay, rich graphics, and smooth performance. Hire mobile game developers to create innovative, cross-platform gaming solutions with AR/VR and blockchain integration.",
      "url": "https://www.comfygen.com/game-development-company",
      "mainEntityOfPage": "https://www.comfygen.com/game-development-company",
      "areaServed": "Global",
      "serviceType": [
        "Mobile Game Development",
        "2D & 3D Game Development",
        "Unity & Unreal Game Development",
        "AR/VR Game Development",
        "Blockchain Game Development",
        "NFT Game Development",
        "Metaverse Game Development",
        "Multiplayer Game Development",
        "Educational Game Development"

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
      "brand": "Comfygen Technologies",
      "Name": "Game App Development Company | Unity, Unreal, AR/VR & NFT Games",
      "image": "https://www.comfygen.com/comfygen-images/game-development/game_about.webp",
      "description": "Comfygen offers innovative game app development services with expertise in Unity, Unreal Engine, AR/VR, blockchain, and NFT game development. Build engaging, secure, and cross-platform games that captivate users and boost ROI.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1800"
      }
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Game Development Company",
        "item": "https://www.comfygen.com/game-development-company"

      }]
    },

    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to develop a game app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of game app development depends on the type of game, features, design, and platform. A simple mobile game development project may start at $10,000, while advanced AR/VR, NFT, or multiplayer games can range up to $80,000 or more."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to build a mobile game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for mobile game development varies based on complexity. A basic 2D game may take 2–3 months, while a feature-rich 3D, AR/VR, or multiplayer game can take 6–12 months. Our team ensures timely delivery with high-quality results."
        }

      }, {
        "@type": "Question",
        "name": "Which technologies do you use for game development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Comfygen, we use leading technologies like Unity 3D, Unreal Engine, ARKit, ARCore, Blockchain, NFT integration, AI, and cloud gaming. Our advanced game development tech stack ensures scalable, immersive, and cross-platform gaming solutions for startups and enterprises."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide post-launch support and updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Comfygen provides complete post-launch support and game maintenance services. From bug fixes and performance optimization to adding new features, updates, and security enhancements, our team ensures your game stays competitive and delivers a seamless experience to users."
        }

      }, {
        "@type": "Question",
        "name": "Can I hire dedicated game developers from Comfygen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! You can hire dedicated game developers from Comfygen on hourly, full-time, or project-based models. Our skilled game developers specialize in Unity, Unreal, AR/VR, blockchain, and multiplayer games, ensuring innovative, engaging, and cost-effective gaming solutions tailored to your needs."
        }


      }]
    }








  ];





  let { initialData } = props;

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
          Game Development Company | Mobile, 2D/3D, AR/VR & NFT Game Development
        </title>
        <meta property="og:title" content="Game Development Company | Mobile, 2D/3D, AR/VR & NFT Game Development" />
        <meta
          name="description"
          content="Comfygen Technologies is a top-rated game development company specializing in mobile game development, 2D/3D games, AR/VR, blockchain, NFT, and metaverse solutions. Hire expert game developers."
        />
        <meta
          name="og:description"
          content="Comfygen Technologies is a top-rated game development company specializing in mobile game development, 2D/3D games, AR/VR, blockchain, NFT, and metaverse solutions. Hire expert game developers."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/game-development-company"
        />
        <meta
          name="robots"
          content=" Index,follow,MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Mobile Game Development, 2D & 3D Game Development, Unity & Unreal Game Development, AR/VR Game Development, Blockchain Game Development, NFT Game Development, Metaverse Game Development, Multiplayer Game Development, Educational Game Development" />


        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Game Development Services in the USA, UK and UAE | Game App & Software Programmers"
        />
        <meta
          property="og:facebook_description"
          content="Custom Game App Development Company in the USA, UK, UAE | We provide the best quality Game Development Services along with features. Hire a Game App Development Company!"
        />
        <meta
          property="og:twitter_title"
          content="Best Game Development Services in the USA, UK and UAE | Game App & Game Software Developers"
        />
        <meta
          property="og:twitter_description"
          content="Are you looking for Game Development Company? Hire Video game developers & designers from top-making game studio in USA, UK and UAE"
        />
        <meta
          property="schema:type"
          content="Best Game Development Company | Game development services & Api Provider"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Game Development Company/ Firm/ Industries/ Organization"
        />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of a Top-Notch Game App & Software Development Company in UK, USA and UAE, providing first- class Game Software & Application Development Services to help your online Game software and Application venture to reach new heights."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Game Development Company, firm, industry, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Game Development Company"
          content="Comfygen is best Game App & Software Development Company. Our Custom Game App & Software Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta name="category" content="Leading Game Devlopment Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Leading Game Application & Software Devlopment Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        <meta name="og:country-name" content="India, USA, UK, And UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="website" />


        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />

        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />



        {/* seo meta */}

        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Open Graph (OG) Tag  */}

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />


        {/* twitter */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Game Development Company | Custom Mobile & 3D Game Development Services" />
        <meta name="twitter:description" content=" Comfygen Technologies is a trusted game app development company offering mobile, 2D/3D, AR/VR, NFT, and metaverse game development services. We create engaging, scalable, and innovative games for startups, enterprises, and gaming studios worldwide." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:site" content="@Comfygen_Tech" />



        {/* Facebook Meta  */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/game-development/game_development_og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/game-development/game_development_og.webp" />
        <meta property="og:image:alt" content="Game Development" />
        <meta property="og:url" content="https://www.comfygen.com/game-development-company" />
        <meta property="og:title" content="Game App Development Company | Unity, Unreal, AR/VR & NFT Games" />
        <meta property="og:description" content="As a leading game development company, Comfygen builds custom mobile, AR/VR, metaverse, and blockchain games. Our expert developers deliver feature-rich and scalable gaming apps for global startups and enterprises." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} /> */}
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/comfygen-images/game-development/game_hero.webp')]">
          <HeroSectionForAllPages
            heading="Top Game Development Company"
            ptag="Comfygen is a leading game development company specializing in mobile, 2D/3D, AR/VR, blockchain, and metaverse game development. We deliver high-performance, engaging, and scalable gaming solutions tailored for startups, enterprises, and global brands. Transform your game idea into reality with our expert developers."
            btnName="Talk With Expert"
            btnLink="/contact-us"
            li="Cross-Platform Game Development"
            li1="Next-Gen Technologies"
            li2="Custom & Scalable Solutions"
            li3="End-to-End Development"

            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Comfygen: The Best Game Development Company"
          description1="Welcome to Infinite Realms of futuristic Gaming: Where Imagination Becomes Reality Comfygen is a top custom game app development company in India, USA, UK & UAE that offers the most reliable and tech savvy mobile gaming apps and console gaming platforms with a very pocket friendly cost. With each project, we precisely customize every detail, leveraging cutting-edge technology to deliver a level of quality that is beyond your expectations."
          description2="As one of the leading mobile game development companies in the USA and other offshore countries, we stand at the forefront of the game development industry, designing exceptional virtual experiences that engage, inspire, and entertain the user base. We have a blend of passionate creators, expert Android and iOS developers who alter your ideas into interactive realities that can take your new or traditional business to the new heights."
          description3="Our client-centric intention as the best 2D & 3D game development company revolves around delivering not just games, but transformative experiences. Join us on this exhilarating journey as we continue to turn your imagination into a profitable venture that can light real stars in the sky among game development firms."
          imageSrc="https://www.comfygen.com/comfygen-images/game-development/game_about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Best Game Development Services</h2>
              <p className="text-base text-center font-normal">With a commitment to innovation, quality, and client collaboration, our game development company is dedicated to transforming your concepts into memorable gaming experiences that captivate players and impact the industry. Our mobile video game development agency brings a comprehensive range of services to the table designed to get your gaming ideas to life and deliver exceptional experiences to players</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Our Game Development Portfolio"
          description="Explore our game development portfolio, showcasing advanced, feature-rich, and engaging gaming solutions built for diverse audiences. From casual mobile games to blockchain-based play-to-earn platforms, Comfygen ensures smooth gameplay, rich graphics, and immersive user experiences—partner with us to create next-gen games that stand out in the competitive market.
"
        />


        <section className="py-10 mb-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Technologies We Use in Game Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen, we leverage the latest game development technologies to deliver immersive, high-performance, and future-ready games. Our expert developers combine innovation with advanced tools to create engaging gaming experiences across multiple platforms.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                        {/* <Image
                                          src={img}
                                          className="object-cover"
                                          width={35}
                                          height={50}
                                          alt={title}
                                        /> */}
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p
                          className="break-all text-white text-start "
                          dangerouslySetInnerHTML={{ __html: decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Game Development Process</h2>
              <p className="max-w-[800px] mt-2 mx-auto">At Comfygen, we follow a structured and transparent game development process to transform creative ideas into successful gaming solutions. Our step-by-step approach ensures quality, scalability, and timely delivery.</p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <NewTeckStack
          title="Tech Stack We Use for Mobile Game Development"
          description="At Comfygen, we use a powerful tech stack for mobile game development to build high-performance, scalable, and visually stunning games. Our developers leverage cutting-edge frameworks, engines, and tools to deliver seamless gameplay experiences."
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        {/* <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 space-y-10 py-10">
          <div className="flex flex-col justify-center text-center mx-auto">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Comgygen’s Game Development Stack:{" "}
              <span className="text-blue-600">Tools & Technologies </span> We
              Ace In
            </h2>
            <p className="text-base text-slate-800">
              In the world of game development, a wide array of technologies
              comes into play to create immersive, engaging experiences. These
              technologies, among others, form the foundation of modern game
              development, enabling us to stay up-to-date with the latest tech
              trend among Gaming Industry. Here are some of the key game
              development technologies:
            </p>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 border  divide-x-2 divide-y-2">
            {JSON_DATA.TechnoStack.map((elem) => {
              const { title, num, img } = elem;
              return (
                <div
                  key={num}
                  className="p-4 text-center space-y-2 hover:bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] transition-all duration-300 ease-in-out group"
                >
                  <Image
                    src={img}
                    alt={title}
                    className="mx-auto"
                    width={80}
                    height={60}
                  />
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] font-bold text-lg group-hover:text-white">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </section> */}
        <HireDeveloper
          heading="Hire Game Developers"
          text="Looking to build a powerful, engaging, and scalable game? Hire game developers from Comfygen and bring your idea to life with expert skills and advanced technologies. We offer flexible hiring models—hourly, full-time, or project-based—to suit your budget and requirements. Our skilled team specializes in mobile game development, Unity/Unreal Engine, AR/VR, blockchain, and multiplayer games, ensuring world-class quality. Whether you are a startup, enterprise, or gaming studio, Comfygen provides dedicated developers to deliver innovative, feature-rich, and profitable gaming solutions."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"

        />
        <Ourgames hideSportBettingTab={true} hideFantasyGames={true} />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" Game Development Company"
        />

        <BlogSection initialData={initialData} />
      </div>
    </>
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
