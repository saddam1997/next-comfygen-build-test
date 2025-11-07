import Image from "next/image";
import "aos/dist/aos.css";
import React, { useState } from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/hireBlockchain.json";
import OurGames from "./components/OurGames";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import BlogSection from "../components/BlogSection";
import ModelsSec from "../components/ModelsSec";
import IndustriesServe from "../components/IndustriesServe";
import ServicesSec from "../components/ServicesSec";
import SolutionSec from "../components/SolutionSec";
import { IconApps, IconBrain, IconCloud, IconCode, IconCurrencyBitcoin, IconCurrencyDollar, IconEye, IconFirstAidKit, IconHeadset, IconMessage, IconNews, IconRefresh, IconReportSearch, IconSettingsAutomation, IconShieldCheck, IconShieldLock, IconSignal5g, IconTrendingUp } from '@tabler/icons-react';
import { IconCashBanknote, IconShoppingCart, IconTools, IconTicket, IconChartBar, IconHeart, IconShield, } from '@tabler/icons-react';
import PortfolioSec from "../components/PortfolioSec";
const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("./components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Tailored Apps for Your Business",
    desc: "Custom apps are designed to fit your specific business needs. We create solutions that integrate seamlessly with your processes, leveraging blockchain-powered solutions to solve complex problems."
  },
  {
    img: <IconSettingsAutomation stroke={1.5} className="w-12 h-12" />,
    title: "Automate and Streamline Operations",
    desc: "With custom app development, you can automate manual tasks and workflows. Our apps help improve business efficiency, saving time and reducing errors in everyday operations."
  },
  {
    img:  <IconTrendingUp stroke={1.5} className="w-12 h-12" />,
    title: "Scalable Solutions for Growth",
    desc: "We design scalable apps that grow as your business expands, ensuring your technology adapts to your evolving needs."
  },
  {
    img: <IconChartBar stroke={1.5} className="w-12 h-12" />,
    title: "Real-Time Insights for Better Decisions",
    desc: "Our apps provide real-time analytics, enabling you to make smarter, data-driven decisions that drive success."
  },
  {
    img: <IconShieldLock stroke={1.5} className="w-12 h-12" />,
    title: "Secure and Reliable Data Management",
    desc: "Security is crucial in custom app development. Our blockchain integration ensures top-level security, protecting your business data from cyber threats."
  },
  {
    img: <IconHeadset stroke={1.5} className="w-12 h-12" />,
    title: " Comprehensive Support",
    desc: "From development to post-launch maintenance, we offer end-to-end support to keep your app performing at its best and evolving with your business."
  }


];
export default function Mobile(props) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };
  const techDataForPage1 = {
    All: [
      {
        img: "https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-image.webp",
        head: "NASDAC Crypto Coin",
        based: "Blockchain-based Cryptocoin Development",
        name: "NASDAC Crypto Coin is a next-gen cryptocurrency with its own dedicated blockchain, not just a token. Designed with a robust 'Four Square' architecture, it prioritizes speed, mining benefits, seamless integration, and growth predictability. Stronger, faster, and more secure than Bitcoin, NASDAC Coin is engineered for business, making it the first true SUPER COIN in the blockchain crypto space.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },
      {
        img: "https://www.comfygen.com/image/croston-portfolio-image.webp",
        head: "Croston ",
        based: "Decentralized Blockchain-based Coin Development",
        name: "Croston is the first decentralized cryptocurrency fully backed by gold at a 1:1 ratio, ensuring stability and value growth. Unlike fiat money, it leverages blockchain for security, transparency, and decentralized control. Croston enables secure transactions and controlled coin creation while offering easy purchasing options via credit card, exchange, or crypto. As a gold-backed digital asset, Croston redefines secure investments and powers a decentralized marketplace with standardized blockchain development solutions.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },
      {
        img: "https://www.comfygen.com/image/yatripay-portfolio-image.webp",
        head: "YatriPay",
        based: "Peer-to-Peer Blockchain Development",
        name: "YatriPay enables instant, zero-fee global transactions through its decentralized P2P blockchain development, powered by the YatriPay Virtual Machine (YVM). With seamless peer-to-peer transfers, YatriPay ensures secure and efficient digital payments. The YatriPay Mobile App makes onboarding easy, bringing borderless transactions to users worldwide.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },
  
      {
        img: "https://www.comfygen.com/image/mezovest-portfolio-image.webp",
        head: "Mezovest",
        based: "Blockchain Logistics Software Development Solutions",
        name: "Mezovest is transforming commerce in the energy industry, focusing on LPG and CNG with its pioneering F.I.T (Finance, Infrastructure, and Technology) model. Through Mezo Energy Trading Limited (METL), it introduces non-corrosive composite gas cylinders for safety and efficiency. Additionally, its logistics arm, Spatch, streamlines supply and distribution. Mezovest’s blockchain-powered solutions ensure transparency, security, and seamless operations in the energy sector.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      }
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I choose and interview developers using the specifications for my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indeed. Of course! Our strategy is centered on transparency and collaboration. Blockchain Developers can be chosen and interviewed based on the specifications of your project. We give you access to a pool of skilled developers so you can select the ones that best fit the requirements of your team and the project."
        }
      },
      {
        "@type": "Question",
        "name": "Which best practices are adhered to by your blockchain developers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our unique selling point is that we never skimp on quality and always guarantee client satisfaction. Comfygen uses an agile project management methodology that is streamlined for development, testing, and customer support all the way through the project's completion."
        }
      },
      {
        "@type": "Question",
        "name": "Are the blockchain developers working with you adaptable to new tools or systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indeed! Making our end-of-service as adaptable as possible for our clients has been our regular procedure. Many of our clients required our assistance to improve their systems even if they already had a website or app."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price to employ a blockchain developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of employing a blockchain developer is determined by a number of variables, namely the area from which the developer is being hired, the developer's experience and skill level, and the features and integrations you require. However, a rough estimate of the cost would be in the range of $5,000 and $30,000."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to hire a blockchain developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The region from which the developer is being employed, the developer's experience and skill level, and the features and integrations you need are some of the factors that affect the cost of hiring a blockchain developer. But roughly speaking, the price would fall between $5,000 and $30,000."
        }
      }
    ]
  };


  return (
    <>
      <Head>
        <title>
          Hire Blockchain Developers in India | Hire blockchain developers from India
        </title>
        <meta
          property="og:title"
          content="Hire Blockchain Developers in India | Hire blockchain developers from India"
        />
        <meta
          name="description"
          content="Looking to hire blockchain developers in India? Get expert blockchain developers for building dApps, crypto wallets, and enterprise solutions on Solana, Hyperledger, and Polygon."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-blockchain-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Elevate Your Blockchain Development Projects with Comfygen Experienced Blockchain Developers - Start Building Now!"
        />
        <meta
          property="og:facebook_description"
          content="Are you looking to hire the best blockchain developers in India for your project? We provide skilled blockchain developers and programmers for hire."
        />
        <meta
          property="og:twitter_title"
          content="The Best Blockchain Developers For Hire In India | Hire Blockchain Developers / Programmers India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Hire Expert Blockchain Developers with Comfygen: Secure, Scalable Solutions for Your Business. Find Top Talent Globally & Launch Your Project Today!."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Hire Blockchain Developers / Programmers India | Comfygen"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="summary"
          content="Empower Your Business with Secure and Scalable Blockchain Applications Designed by Experienced Blockchain Developers."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Blockchain Application Developer Company in India startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hire Blockchain Developer or Programmer from India"
          content="Are you looking to hire the best blockchain developers in India for your project? We provide skilled blockchain developers and programmers for hire."
        />
        <meta
          name="category"
          content="BLOCKCHAIN DEVELOPERS: Hire blockchain developers skilled in building decentralized app for blockchain development protocols like Ethereum Blockchain app development, Hyperledger Blockchain app development, Polkadot Blockchain app development, Stellar Blockchain app development, Tezos Blockchain app development, Neo Blockchain app development, etc. by Comfygen"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Blockchain dedicated mobile app developers in India - Best Dedicated Blockchain app developers in Jaipur, India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />

      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">

        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left  bg-[url('https://www.comfygen.com/herosection/hire-blockchain-developers-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="Hire Blockchain Developers in india"
                ptag="Looking to develop a cutting-edge blockchain solution? Hire blockchain developers in India from Comfygen and get expert assistance in smart contract development, dApps, DeFi, and enterprise blockchain solutions. Our skilled developers deliver secure, scalable, and customized solutions tailored to your business needs. With deep expertise in Ethereum, Hyperledger, and Polygon, we ensure seamless integration and high performance. Hire blockchain developers from India today and take your blockchain project to the next level!"
                li="Expert Blockchain Developers"
                li1="Full-Stack Blockchain Solutions"
                li2="Smart Contract Development"
                li3="Secure & Scalable Solutions"
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
        <AboutSection
          title="About Us"
          heading="Why Choose Our Blockchain Developers? "
          description1="At Comfygen, we bring innovation, security, and expertise to your blockchain projects. When you hire blockchain developers in India from us, you get a team with deep technical knowledge, hands-on experience, and a commitment to delivering high-performance solutions."
          points={
            [
              "Proven Expertise – Skilled in Ethereum, Hyperledger, Polygon, Solana, and more.",
              "Custom-Tailored Solutions – We design scalable, secure, and business-specific blockchain applications.",
              "Cost-Effective Development – Get premium-quality services at competitive rates.",
              "Security & Compliance – Robust smart contracts and secure architectures ensure trust.",
              "End-to-End Support – From consultation to deployment and maintenance."
            ]
          }
          description6="Partner with a trusted blockchain developer company and turn your ideas into reality. Hire blockchain developers from India today! "
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Blockchain Platforms Our Developers Work On</h2>
              <p className="text-base text-center font-normal">At Comfygen, we provide expert blockchain developers in India who specialize in building secure and scalable solutions across various blockchain platforms. Whether you need to hire a blockchain developer company for smart contracts, DeFi solutions, or NFT marketplaces, we have the expertise to deliver.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <OurGames />
        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Step-by-Step Process to Hire Blockchain Developers at Comfygen
                </h2>
                <p>At Comfygen, we offer flexible hiring models to help businesses hire blockchain developers in India based on project needs and budget. Whether you're looking for short-term support or long-term collaboration, we provide tailored solutions to meet your blockchain development goals.</p>
              </div>
              <div className="grid gap-6 pt-8 text-left md:grid-cols-2 grid-cols-1">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num, } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }}></p>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </section>
        <IndustriesServe
          heading="Industry-Specific Blockchain Solutions We Offer"
          description="Blockchain technology is transforming industries across the globe, offering innovative solutions to enhance transparency, security, and efficiency. At Comfygen, we provide industry-specific blockchain development services tailored to meet the unique needs of each sector. Whether you're in finance, healthcare, supply chain, or another industry, our blockchain solutions help streamline your processes and secure transactions."
          sliderData={JSON_DATA.customSliderData}
        />
        <PortfolioSec
          techData={techDataForPage1}
          heading="Explore Our Successful Blockchain-Based Portfolio"
          description="Explore our selection of accomplished blockchain development projects that highlight our proficiency in online solutions and app development. Whether you’re looking to hire blockchain developers in India or need custom blockchain solutions, our portfolio showcases our expertise in smart contracts, DeFi platforms, NFT marketplaces, and <a class=' text-blue-600' href='/decentralized-exchange-development'>decentralized exchange development</a>  (dApps). Each project reflects our dedication to excellence, innovation, and client satisfaction, ensuring scalable and secure blockchain solutions."
        />
        
        <SolutionSec
          heading="Unlock Business Efficiency with Custom App Development"
          subheading="Custom app development helps businesses streamline operations, automate tasks, and improve efficiency. At Comfygen, we specialize in creating custom apps that drive business growth with the latest blockchain technology."
          techData={technologyData}
        />
        <WhyChoose
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
        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
        />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
