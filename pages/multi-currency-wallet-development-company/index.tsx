import Image from "next/image";
import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowallet.json";
import {
  IconApps,
  IconBrain,
  IconCloud,
  IconCurrencyBitcoin,
  IconReportSearch,
  IconSignal5g,
} from "@tabler/icons-react";

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

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
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

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
)



const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: loader, ssr: true }
)

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
)

const LatestTechnology = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/LatestTechnology"),
  { loading: loader, ssr: true }
)

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




const latesttech = [
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
    title: "Multi-Currency Support",
    desc: "Store, send, and receive Bitcoin, Ethereum, stablecoins, and altcoins in one secure, easy-to-use multicurrency wallet.",
  },
  {
    img: <IconReportSearch stroke={1.5} className="w-12 h-12" />,
    title: "Advanced Security",
    desc: "Protect your assets with two-factor authentication, biometric login, and end-to-end encryption for secure multicurrency wallet transactions.",
  },
  {
    img: <IconSignal5g stroke={1.5} className="w-12 h-12" />,
    title: "Smart Payments",
    desc: "Enable fast, seamless crypto transactions with QR code scanning, contactless payments, and in-app digital currency transfers.",
  },
  {
    img: <IconCloud stroke={1.5} className="w-12 h-12" />,
    title: "Built-In Trading",
    desc: "Trade cryptocurrencies directly within the wallet with in-app swaps, eliminating the need for external exchange platforms.",
  },
  {
    img: <IconCurrencyBitcoin stroke={1.5} className="w-12 h-12" />,
    title: "Cold & Hot Wallet Integration",
    desc: "Securely store cryptocurrencies offline with cold wallets while enabling quick access and transactions via hot wallets.",
  },
  {
    img: <IconApps stroke={1.5} className="w-12 h-12" />,
    title: "Real-Time Tracking",
    desc: "Track all cryptocurrency balances, transactions, and live market prices instantly, ensuring complete transparency and up-to-date portfolio management.",
  },
];


const Process = [
  {
    title: "Requirement Analysis",
    description: " Understand business goals, target audience, and wallet functionality to create a tailored solution."
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive and engaging interfaces for seamless user experiences across web and mobile platforms."
  },
  {
    title: "Blockchain and Backend Development",
    description: "Build strong backend systems with secure blockchain integration for reliable asset management."
  },
  {
    title: "Integration & API Development ",
    description: "Connect wallets with exchanges, payment gateways, and third-party services for full functionality."
  },
  {
    title: "Smart Contract Development",
    description: "Implement secure and efficient smart contracts to manage transactions and automated operations."
  },
  {
    title: "Testing & Deployment ",
    description: "Conduct thorough testing to ensure performance, security, and regulatory compliance before launch."
  },
  {
    title: "Ongoing Support & Upgrades",
    description: "Provide continuous maintenance, feature updates, and technical support to ensure smooth wallet operations."
  }
]


export default function Ecommerce(props) {
  let { initialData } = props;
  const slider: any = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settingstwo = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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


  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Multicurrency Wallet Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen offers expert multicurrency wallet development services. Build secure, scalable, and customizable wallets supporting Bitcoin, Ethereum, stablecoins, NFTs, and DeFi for startups, fintechs, and exchanges.",
      "url": "https://www.comfygen.com/multi-currency-wallet-development-company",
      "mainEntityOfPage": "https://www.comfygen.com/multi-currency-wallet-development-company",
      "areaServed": "Global",
      "serviceType": [
        "Custom Multicurrency Wallet Development",
        "White Label Multicurrency Wallet Solutions",
        "NFT Wallet Integration",
        "DeFi Wallet Development",
        "Cryptocurrency Payment Gateway Integration",
        "Regulatory-Compliant Wallet Development"
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a multicurrency wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A multicurrency wallet is a digital platform that allows users to store, send, and receive multiple cryptocurrencies, such as Bitcoin, Ethereum, stablecoins, and altcoins, all in one secure wallet."
          }
        },
        {
          "@type": "Question",
          "name": "How secure is a multicurrency wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our wallets use enterprise-grade security, including multi-signature approvals, biometric authentication, and end-to-end encryption, ensuring complete protection against hacks and unauthorized access."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a multicurrency wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The development timeline depends on the features and customization level. Typically, a full-featured multicurrency wallet can be developed in 6–12 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate DeFi or NFT features into my wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our multicurrency wallet development services include integration of DeFi protocols, NFT management, staking, and other Web3 functionalities to expand your wallet’s capabilities."
          }
        }
      ]

    },
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "name": "Multicurrency Wallet Development Services",
      "image": "https://www.comfygen.com/comfygen-images/multi-currency-wallet-development-company/multi_currency_hero.webp",
      "description": "Comfygen offers secure, scalable, and fully customizable multicurrency wallet development services supporting Bitcoin, Ethereum, stablecoins, NFT & DeFi integration for startups, fintechs, and exchanges.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "245"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com/ "
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wallet development company",
          "item": "https://www.comfygen.com/wallet-development-company  "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": " Multicurrency Wallet Development Company",
          "item": "https://www.comfygen.com/multi-currency-wallet-development-company  "
        }

      ]
    }
    ,
  ];

  return (
    <>
      <Head>
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <title>
           Multicurrency Wallet Development Services | Secure Wallet Solutions
        </title>
        <meta
          name="description"
          content="Get secure multicurrency wallet development services from Comfygen. We build advanced crypto wallets that support multiple cryptocurrencies with seamless transactions and strong asset protection."
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/multi-currency-wallet-development-company"
        />

        {/* <!-- Robots → */}

      <meta name="keywords" content="Custom Multicurrency Wallet Development, White Label Multicurrency Wallet Solutions, NFT Wallet Integration, DeFi Wallet Development, Cryptocurrency Payment Gateway Integration, Regulatory-Compliant Wallet Development"/>

        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />


        {/* <!-- Compatibili/ty Meta → */}
        /
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />


        {/* <!-- Viewport and/ Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />/
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Multicurrency Wallet Development" />
        /


        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}

        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />
        /


        {/* <!-- Geo Location Meta --> */}

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />



        {/* <!-- Open Graph (OG) Tag --> */}

        <meta name='og:type' content='website' />
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


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Launch Secure & Scalable Multicurrency Wallets with Comfygen" />
        <meta name="twitter: description" content=" Build feature-rich multicurrency wallets supporting Bitcoin, Ethereum, stablecoins, NFTs, and DeFi. Comfygen delivers secure, customizable, and user-friendly wallet solutions for businesses worldwide.
"/>
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/multi-currency-wallet-development-company/multi-currency-wallet-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />



        {/* <!-- Facebook M/eta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/multi-currency-wallet-development-company/multi-currency-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/multi-currency-wallet-development-company/multi-currency-wallet-development.webp" />
        <meta property="og:image:alt" content="Comfygen Multicurrency Wallet Development Services" />
        <meta property="og:url" content="https://www.comfygen.com/multi-currency-wallet-development-company" />
        <meta property="og: title" content=" Comfygen Multicurrency Wallet Development – Secure, Custom Crypto Solutions" />
        <meta property="og: description" content="Develop scalable, secure, and customizable multicurrency wallets with Comfygen. Support Bitcoin, Ethereum, stablecoins, NFTs, and DeFi while enhancing user experience." />



        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

        <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        {/* hero section */}
        <div className="">
          <HeroSectionForAllPages
            heading="Best Multicurrency wallet development Service"
            ptag="Build a secure and feature-rich wallet with our multicurrency wallet development services. At Comfygen, we develop advanced multicurrency wallets that enable users to store, send, and receive multiple cryptocurrencies from a single platform. Our multicurrency wallet development solutions are designed for startups, enterprises, and fintech businesses looking to launch scalable and highly secure digital asset wallets."
            ptag1=""
            li="Manage Bitcoin, Ethereum, stablecoins in one wallet"
            li1="Multi-layered security"
            li2="Custom branding and UI/UX options "
            li3="DeFi integration, NFT support"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/multi-currency-wallet-development-company/multi_currency_hero.webp"
          />
        </div>

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Multicurrency Wallet Development Services
              </h2>
              <p className="text-base text-center font-normal">
                We provide top-notch multicurrency wallet development services specially designed for startups, enterprises, and crypto platforms. Our goal is to help you launch safe, secure, scalable, and future-ready crypto wallets that support a wide range of digital assets.

              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          heading="What is a Multi-Currency Wallet?"
          description1="A multi-currency wallet is a <a class='text-blue-500 ' href='https://www.comfygen.com/crypto-wallet-development'>wallet development</a> solution that allows users to transact multiple cryptocurrencies on one platform. Without switching between different wallets, individuals and businesses can manage all their digital assets in a single place."
          description2="For businesses, a multicurrency wallet development solution offers much more than convenience. They allow cross-border payments, DeFi and NFT integration, and multi-language support for worldwide audiences. With advanced features like biometric authentication, multi-signature approvals, and real-time transaction history, multicurrency wallets provide top-tier security while supporting scalable, global financial operations. By adopting a multi-currency wallet, companies can simplify transactions, attract crypto-savvy users, and gain a competitive edge in digital finance.
"
          description3=""
          points={[

          ]}


          imageSrc="https://www.comfygen.com/comfygen-images/multi-currency-wallet-development-company/multi_currency_about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Portfolio Multicurrency Wallet Projects"
            description="At comfygen, we deliver secure, scalable, and feature-rich multicurrency wallets for a variety of clients across fintech, crypto exchanges, and enterprises."
          />
        </section>


     

        <CallToAction
          heading="Ready to Launch Your Multicurrency Wallet?"
          text="Comfygen, multicurrency wallet development company deliver secure, scalable, and customizable multicurrency crypto wallets supporting multiple cryptocurrencies for global users."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <LatestTechnology
          heading="Key Features of Our Multicurrency Wallets"
          subheading="Comfygen multicurrency wallet development services are designed to deliver safe, secure, scalable, and user-friendly solutions that meet the needs of individuals, startups, and enterprises. Each wallet comes equipped with advanced features that make managing digital assets simple, safe, and efficient.
"
          techData={latesttech}
        />



        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our End-to-End Multicurrency Wallet Development Process
              </h2>
              <p className="text-base text-center lg:w-2/3 mx-auto w-full">
               Comfygen multicurrency wallet development services follow a structured, end-to-end process to deliver secure, scalable, and user-friendly wallet solutions.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Tech Stack we use in Multicurrency wallet development"
          description="Our multicurrency wallet development services leverage a modern and robust tech stack to build secure, scalable, and feature-rich wallets."
        />


        <IndustriesServe
          heading="Industries We Serve as Multicurrenct Wallet Development Company"
          description="Multicurrency wallet development services cater to a wide range of industries looking to leverage secure and scalable digital asset solutions."
          sliderData={JSON_DATA.IndustriesServe}
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />



        <HireDeveloper
          heading=" Hire Multicurrency Wallet Developement Experts"
          text="Build secure, scalable, and user-friendly multicurrency wallets with Comfygen. Our expert developers create customizable solutions supporting Bitcoin, Ethereum, stablecoins, and more, ensuring top performance and seamless user experience."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "10+ years of blockchain and wallet development experience",
            "Expertise in the latest blockchain technologies",
            "Timely delivery of high-quality solutions",
            "Scalable, secure, and feature-rich wallets",

          ]}
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions"
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
