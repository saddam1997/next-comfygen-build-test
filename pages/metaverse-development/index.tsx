import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaverse.json";

import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import Faq from "../components/Faq";
import InfoSectionLeft from "../components/InfoSectionLeft";
import HireDeveloper from "../components/HireDeveloper";
import IndustriesServe from "../components/IndustriesServe";
import AboutSection from "../components/AboutSection";
import ProcessSec from "../components/ProcessSec";
import ServicesSec from "../components/ServicesSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
import WhyChoose from "../components/WhyChooseUs";
import CardItem from "../components/CardItem";
import ModelsSec from "../components/ModelsSec";
import PortfolioSec from "../components/PortfolioSec";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Ecommerce(props) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;

  const countryNames = [
    "US",
    "CA",
    "GB",
    "AD",
    "AU",
    "AT",
    "BS",
    "BH",
    "IO",
    "KM",
    "CU",
    "AR",
    "CW",
    "CY",
    "DK",
    "DM",
    "EG",
    "FK",
    "FI",
    "FR",
    "DE",
    "GR",
    "GL",
    "HK",
    "IS",
    "IN",
    "ID",
    "IT",
    "JP",
    "JE",
    "JO",
    "KW",
    "KG",
    "KR",
    "MX",
    "FM",
    "NZ",
    "NI",
    "OM",
    "PE",
    "PH",
    "PL",
    "PT",
    "QA",
    "RO",
    "RU",
    "SA",
    "SG",
    "SE",
    "SZ",
    "CH",
    "TH",
    "TR",
    "TN",
    "UA",
    "UM",
    "AE",
    "039",
    "155",
    "154",
    "151",
    "150",
  ];

  const Process = [
    {
      title: "Discovery of Requirements",
      description:
        "The first step of our metaverse development services involves discovery of client requirements. We understand your business requirements, pain points and critical priorities for mapping existing workflows and future objectives.",
    },
    {
      title: "Designing Strategies and Solutions",
      description:
        "Based on your requirements observed in the previous step, our experts design and create prototypes for your metaverse development solution. We also employ comprehensive user testing of your desired platform.",
    },
    {
      title: "Scalability and Future Updates",
      description:
        "To keep your metaverse platform aligned with emerging trends and user demands, we focus on scalability and periodic updates. This ensures your platform evolves with the changing landscape, maintaining relevance and competitiveness.",
    },
    {
      title: "Development of Solutions",
      description:
        "The development phase involves programming and coding to achieve the desired designs. We employ the development stage in three distinct phases: alpha phase, beta phase and the release phase.",
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "We follow a data-centric validation process alongside comprehensive QA testing on your metaverse development solution. It helps us in ensuring that your final product is ready for delivery to the market.",
    },
    {
      title: "Deployment and Maintenance",
      description:
        "We are a professional metaverse development industry, and we uphold our reputation by supporting clients with the deployment phase. Our metaverse development services also cater for your requirements for cloud and on-premise hosting.",
    },
    {
      title: "Post-Deployment Customer Service",
      description:
        "Once we have deployed your metaverse development solution, we are readily available to support you with promoting your solution. It can help in performing continuous product and platform maintenance alongside deploying market strategies",
    },
  ];

  const techDataForPage1 = {
    All: [
      {
        img: "https://www.comfygen.com/image/hero-section-metaverse-gaming-development.webp",
        head: "Blockchain-Based Metaverse Gaming Development",
        name: "At Comfygen, a leading Metaverse Development Company, we developed a futuristic, decentralized gaming Metaverse with a blockchain-powered economy, NFT-based assets, and Play-to-Earn (P2E) mechanisms. Our team integrated Solana smart contracts, DeFi mechanics, and an NFT marketplace to enhance the gaming experience, allowing players to own, trade, and explore digital assets in a fully immersive space economy.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg",
        ],
        buttonLink: "/portfolio/metaverse-gaming-development",
      },
      {
        img: "https://www.comfygen.com/image/hero-section-social-metaverse-development.webp",
        head: "VKSChat – Social Metaverse Development",
        name: "Comfygen played a pivotal role in enhancing VKSChat, a leading Social Metaverse where users interact in customizable virtual worlds using 3D avatars and VR technology. Our team implemented AI-powered avatars, VR networking solutions, and real-time multiplayer experiences to create an engaging and interactive digital environment.",
        num: "2",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg",
        ],
        buttonLink: "/portfolio/social-metaverse-development",
      },
    ],
  };

  const metaTags = countryNames.map((country, index) => (
    <meta key={index} name="og:country-name" content={country} />
  ));

  const websiteData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Top Metaverse App Development Company | Comfygen",
    url: "https://www.comfygen.com/media/metaverse-development",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const productData = {
    "@context": "http://www.schema.org",
    "@type": "product",
    brand: "Comfygen",
    name: "Best Metaverse App Development Company - Metaverse App Development Services",
    image:
      "https://www.comfygen.com/media/metaverse/tap-in-to-world-of-metaverse.webp",
    description:
      "Comfygen Private Limited is top Metaverse Application Development Company. We provide the best Metaverse application development services to enterprises & startups worldwide.",
    aggregateRating: {
      "@type": "aggregateRating",
      ratingValue: "4.9",
      reviewCount: "1124",
    },
  };
  const organizationData = {
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
      {
        "@type": "Person",
        name: "Saddam Husen",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
      addressLocality: "Vaishali Nagar",
      addressRegion: "Jaipur, Rajasthan, India",
      postalCode: "302021",
      addressCountry: "India",
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which are the top metaverse development companies in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The top metaverse development companies in 2025 include Comfygen, along with other industry leaders specializing in Web3, AI, and blockchain-powered virtual ecosystems. Choose a company based on expertise, technology stack, and successful project delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best metaverse development company in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comfygen is one of the best metaverse development companies in India, offering AI-powered, Web3-integrated, and blockchain-driven metaverse solutions tailored for businesses, gaming, virtual real estate, and digital commerce.",
        },
      },
      {
        "@type": "Question",
        name: "How to find the best Metaverse development company in UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find the best metaverse development company in UAE, check their portfolio, expertise in blockchain & AI, client reviews, and project success rates. Comfygen provides customized metaverse solutions with secure and scalable architecture.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best Metaverse development company in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comfygen ranks among the top Metaverse development companies in Dubai, delivering immersive virtual spaces, NFT-based solutions, and decentralized ecosystems for various industries.",
        },
      },
      {
        "@type": "Question",
        name: "How to hire a Metaverse development company in the USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To hire a Metaverse development company in the USA, evaluate expertise in Web3, smart contracts, AR/VR, and blockchain technology. Comfygen offers full-scale metaverse development with end-to-end customization.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of Metaverse development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of Metaverse development depends on project complexity, features, technology stack, and customization needs. Basic solutions start at $30,000, while advanced platforms with AI, NFTs, and blockchain integration may cost over $100,000.",
        },
      },
      {
        "@type": "Question",
        name: "How to hire a Metaverse developer in New York?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To hire a Metaverse developer in New York, consider expertise in smart contracts, blockchain, 3D modeling, AI, and AR/VR. Comfygen provides skilled Metaverse developers for innovative digital experiences.",
        },
      },
      {
        "@type": "Question",
        name: "What is a certified Web3.0 and Metaverse developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A certified Web3.0 and Metaverse developer is an expert in blockchain-based decentralized applications, smart contracts, AR/VR integration, and AI-powered virtual environments. Certifications from platforms like Blockchain Council and Udacity validate expertise.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Metaverse developer salary in the US?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metaverse developer salaries in the US range from $80,000 to $200,000 annually, depending on expertise in blockchain, AI, AR/VR, and Web3 technologies.",
        },
      },
      {
        "@type": "Question",
        name: "Which company is heavily investing in the development of the Metaverse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Major companies investing in the Metaverse include Meta (Facebook), Microsoft, Nvidia, Decentraland, The Sandbox, and Comfygen, focusing on AI-driven virtual ecosystems and decentralized platforms.",
        },
      },
      {
        "@type": "Question",
        name: "What is the main challenge facing the development of the Metaverse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The biggest challenges in Metaverse development include interoperability, high infrastructure costs, security risks, and user adoption. Comfygen addresses these challenges with scalable, secure, and AI-powered solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI contribute to the development of virtual assistants within the Metaverse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI enhances Metaverse virtual assistants by enabling real-time interactions, natural language processing, and personalized experiences. AI-driven avatars and automation improve engagement within decentralized virtual worlds.",
        },
      },
    ],
  };
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
          Best Metaverse Development Company | Software & App Development
          Services
        </title>
        <meta
          name="description"
          content=" Metaverse development company offering cutting-edge Metaverse app & software development solutions. We build AI-powered, blockchain-integrated Metaverse platforms for seamless digital experiences"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/media/metaverse-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Metaverse Development Services | Metaverse App Development Services"
        />
        <meta
          property="og:facebook_description"
          content="Punter with the best metaverse application development company– a leading top metaverse development company offering an array of metaverse development services with end-to-end expertise. With metaverse app development, turn ideas into reality!"
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Metaverse development company in the United States, Comfygen provide you top notch services of metaverse development platform services and solutions with bets metaverse development Programmers"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta name="abstract" content="Leading Metaverse Development Agency" />
        <meta name="summary" content="Leading Metaverse Development Firm" />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Metaverse Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Leading Metaverse Development Company"
          content="Empowering businesses with cutting-edge Metaverse Development Services and solutions and Comfygen's expert metverse blockchain consulting services to drive innovation and sustainable growth in the digital economy."
        />
        <meta
          name="category"
          content="Metaverse Development Services - Metaverse Development Solution"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best Metaverse Development Company - Metaverse Development Solution Firm in India, The USA, UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Metaverse Development Service Provider"
        />
        {metaTags}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/metaverse-development-hero-img.webp')]">
        <HeroSectionForAllPages
          heading="Metaverse Development Company"
          ptag="The metaverse is revolutionizing the way businesses interact with users, creating immersive, AI-powered, and blockchain-secured virtual experiences. As a leading metaverse development company, we provide tailored solutions for businesses looking to establish their presence in the digital realm. Our expertise spans across various industries, including gaming, real estate, education, healthcare, and e-commerce, ensuring scalable and future-ready metaverse platforms."
          li="AI-Driven Metaverse Development"
          li1="Blockchain-Powered Virtual Ecosystems"
          li2="Metaverse Game Development"
          li3="NFT Marketplace Development"
          li4="Virtual Real Estate Solutions"
          li5="3D Virtual Space Creation"
          li6="AR/VR Metaverse Integration"
          li7="Web3-Powered Metaverse Platforms"
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
        heading="Metaverse Development"
        description1="Metaverse development is reshaping digital interactions by creating immersive, AI-powered, and decentralized virtual environments. With the integration of blockchain, AI, AR/VR, and Web3 technologies, businesses can establish their presence in the metaverse, offering interactive and engaging experiences to users worldwide. From virtual gaming and NFT marketplaces to real estate and social platforms, metaverse development opens new opportunities for digital transformation and monetization."
        points={[
          "AI-Driven Virtual Worlds",
          "Blockchain-Based Metaverse Solutions",
          "NFT-Powered Ecosystems",
          "Play-to-Earn and Move-to-Earn Gaming Platforms",
          "Decentralized Social & Business Platforms",
          "AR/VR-Integrated Virtual Spaces",
          "Metaverse Real Estate & Asset Tokenization",
          "Web3-Powered Metaverse Applications",
        ]}
        imageSrc="https://www.comfygen.com/image/about-us-image.webp"
        link="/about-us"
        linkText="Explore More"
      />
      <ContactFromCenter />
      <section className="lg:py-16 py-10 bg-[#F5F5F9]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
              Our Metaverse Development Services
            </h2>
            <p className="text-base text-center font-normal">
              At Comfygen, we specialize in developing cutting-edge metaverse
              ecosystems that bring businesses, brands, and users into the next
              era of digital interaction. Our expertise in Web3, AI, blockchain,
              AR/VR, and NFT development allows us to build highly immersive,
              scalable, and interactive metaverse solutions tailored to various
              industries.
            </p>
            <p className="text-base text-center font-normal">
              Whether you need a metaverse game, virtual mall, real estate
              platform, or a decentralized social media network, we provide
              customized, feature-rich, and future-ready solutions. Our
              development approach focuses on user engagement, security, and
              seamless cross-platform integration to ensure that your metaverse
              platform stands out in the digital landscape.
            </p>
          </div>
          <div className="">
            <ServicesSec servicesData={JSON_DATA.servicesData} />
          </div>
        </div>
      </section>

      <section className="lg:py-16 py-10 bg-[#fff]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-4 text-center">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
              <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                Our Metaverse Development Solutions
              </h2>
              <p>
                At Comfygen, we provide next-gen metaverse solutions designed to
                empower businesses, brands, and entrepreneurs in the digital
                revolution. From customized virtual environments to AI-powered
                smart ecosystems, our metaverse solutions offer scalability,
                security, and immersive experiences.
              </p>
              <p>
                Whether you're in gaming, real estate, social media, eCommerce,
                education, or enterprise solutions, our end-to-end metaverse
                software development solutions ensure seamless integration with
                blockchain, Web3, AR/VR, AI, and NFTs.
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
      <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
        <div className="space-y-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="">
            {JSON_DATA.ImmersiveMetaverse.map((elem: any) => {
              const { title, num, decs } = elem;
              return (
                <div
                  key={num}
                  className="w-full flex flex-col justify-center items-center text-center space-y-2"
                >
                  <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#fff] text-center">
                    {title}
                  </h2>
                  <p className="text-base text-white">{decs}</p>
                </div>
              );
            })}
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {JSON_DATA.Experience.map((elem: any) => {
              const { title, decs, num, img, url } = elem;
              return (
                <div
                  key={num}
                  className="p-4 rounded-lg border-2 bg-[#fff]/80 space-y-2"
                >
                  <div className="flex items-center  space-x-2">
                    <div className="flex items-center justify-center ">
                      <Image src={img} alt={title} width="60" height="60" />
                    </div>
                    <h3 className="text-base font-bold text-black">{title}</h3>
                  </div>
                  <div>
                    <p>{decs}</p>
                  </div>
                </div>
              );
            })}
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

      <section className="bg-white lg:py-16 py-10 ">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
          <div className="text-center">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
              Metaverse Blockchain Development: Process & Execution Strategy
            </h2>
            <p className="text-base font-normal mt-2">
              At Comfygen, we follow a structured Metaverse Blockchain
              Development process to build secure, scalable, and immersive
              digital ecosystems. Our approach begins with concept validation
              and requirement analysis, followed by blockchain framework
              selection, smart contract integration, and 3D environment
              development to ensure a seamless and future-ready metaverse
              experience.
            </p>
          </div>
          <ProcessSec processSlides={Process} />
        </div>
      </section>

      <IndustriesServe
        heading="Industries We Serve"
        description="At Comfygen, we specialize in delivering custom Metaverse Blockchain solutions across various industries, enabling businesses to harness Web3, AI, AR/VR, and decentralized ecosystems for enhanced digital transformation. Our expertise empowers enterprises to build immersive, scalable, and secure virtual experiences tailored to their specific needs."
        sliderData={JSON_DATA.customSliderData}
      />

      {/* <IndustriesServe /> */}

      <PortfolioSec
        techData={techDataForPage1}
        heading="Check Out Our Portfolio: Metaverse Development"
        description="Discover how we are shaping the future of digital interaction through our Metaverse development solutions. Our portfolio showcases a range of immersive virtual experiences, from interactive environments to virtual assets, all designed to push the boundaries of what's possible. Explore our work and see how we bring innovative Metaverse projects to life, blending cutting-edge technology with creative design."
      />
      <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
      <CardItem
        heading="Features of Our Metaverse Development"
        subheading="At Comfygen, we develop cutting-edge Metaverse ecosystems that blend AI, blockchain, AR/VR, and Web3 technologies to deliver secure, immersive, and scalable virtual experiences. Our solutions empower businesses across gaming, real estate, social networking, education, and eCommerce by providing decentralized and interactive virtual spaces."
        techData={JSON_DATA.cardData}
      />
      <section className="lg:py-16 py-10 bg-[#F5F5F9]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-4 text-center">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
              <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
              Top Advantages of Our Metaverse Development Solutions
              </h2>
              <p>
                The Metaverse is revolutionizing digital interactions, offering
                businesses limitless opportunities for engagement, monetization,
                and innovation. At Comfygen, we specialize in developing
                immersive, AI-driven, and blockchain-powered Metaverse solutions
                that empower businesses across industries. Our solutions ensure
                seamless interoperability, high security, and next-level user
                experiences, making us a trusted Metaverse Software development
                company in the industry.
              </p>
            </div>
            <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {JSON_DATA.Benefits.map((elem) => {
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

      <WhyChoose
        title={JSON_DATA.pageData.title}
        description={JSON_DATA.pageData.description}
        mainCardData={JSON_DATA.pageData.mainCardData}
        gridData={JSON_DATA.pageData.gridData}
      />
      <HireDeveloper
        heading="Hire Our Expert Metaverse Developers"
        text="At Comfygen, we provide skilled and experienced Metaverse developers who specialize in building immersive, secure, and scalable virtual ecosystems. Our experts leverage cutting-edge technologies like Web3, AI, AR/VR, and blockchain to create futuristic metaverse platforms tailored to your business needs. Whether you're looking to develop a decentralized metaverse, NFT marketplace, virtual workspace, or gaming ecosystem, our developers ensure seamless execution, top-notch security, and high-end performance."
        text1="Why Hire Metaverse Developers from Comfygen?"
        buttonText="Hire Developer"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
        imageAlt="hire-developer"
        listItems={[
          "Expertise in Blockchain & Web3 – Smart contract development, decentralized applications, and tokenized economies.",
          "Immersive AR/VR Solutions – High-quality 3D environments for metaverse platforms and virtual experiences.",
          "AI-Powered Metaverse Development – Machine learning-driven personalization and automation.",
          "Cross-Platform Integration – Seamless metaverse experiences across mobile, desktop, and VR devices.",
          "End-to-End Development – From ideation to deployment with post-launch support.",
        ]}
      />

      <InfoSectionLeft
        heading="Looking for More Details on Metaverse Development?"
        description1="At Comfygen, we are committed to delivering next-generation Metaverse solutions tailored to your business needs. Whether you are looking for custom Metaverse development, AI-driven virtual experiences, NFT integration, or Web3-powered ecosystems, our team of experts is here to assist you at every stage of development."
        description2="We understand that every business has unique requirements, and we are happy to provide personalized consultations to address any queries you may have. Our specialists ensure that your Metaverse project is secure, scalable, and feature-rich, leveraging blockchain, AR/VR, AI, and decentralized technologies to create truly immersive digital environments."
        points={
          [
            "Have questions about Metaverse app development cost, features, or implementation?",
            "Need a customized Metaverse platform that aligns with your business goals?",
            "Want to explore how blockchain, AI, and NFTs can enhance your Metaverse project?",
            "Looking for end-to-end Metaverse development services with expert guidance?"
          ]
        }
        imageSrc="https://www.comfygen.com/media/metaverse/do-you-want-other-information-aboutour-metaverse-development-services.webp"
        link="/contact-us"
        linkText="LET'S CONNECT "
      />
      <Faq faqData={JSON_DATA.Frequently} title="Metaverse Development" />
      {/*<BlogSection initialData={initialData} />*/}
    </>
  );
}
