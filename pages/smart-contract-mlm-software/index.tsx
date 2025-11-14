import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { BsFillStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/smartcontractmlm.json";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
// import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import HireDeveloper from "../components/HireDeveloper";
import WhyChoose from "../components/WhyChooseUs";
import ProcessSec from "../components/ProcessSec";
import CardItem from "../components/CardItem";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import InfoSectionLeft from "../components/InfoSectionLeft";
import InfoSectionRight from "../components/InfoSectionRight";
import SolutionSec from "../components/SolutionSec";
import {
  IconNetwork,
  IconCash,
  IconLockCode,
  IconHierarchy3,
  IconCurrencyBitcoin,
  IconWallet,
  IconUsersGroup,
  IconDeviceMobile,
  IconLanguage,
} from "@tabler/icons-react";
import PortfolioSec from "../componentsnew/PortfolioSec";
import BlockchainNav from "../componentsnew/blockchain-navbar";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});


const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Arena = [
  {
    num: "1",
    url: "/tron-token-development",
    icon: (
      <Image
        src="https://www.comfygen.com/img/tron-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "It is ready to launch TRON MLM Software to deliver decentralized solutions into the MLM Business through TRON Blockchain network. The users can connect in matrix schemes to receive TRX tokens for passive income via referring TRON Network to people.",
    title: "Tron Smart Contract MLM Software",
  },
  {
    num: "2",
    url: "/ethereum-token-development",
    icon: (
      <Image
        src="https://www.comfygen.com/img/ethereum-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "Ethereum Smart Contract Based MLM Software is a ready to launch software with MLM business script developed on Ethereum Blockchain Network. With the Ethereum MLM Software, you can initiate with your own new 60% decentralized solutions and other MLM business platforms; such as LionShare, Doubleway, Million Money, Forsage, Etrix, XOXO Network, etc.",
    title: "Ethereum Smart Contract MLM Software",
  },
  {
    num: "3",
    url: "/cryptocurrency-mlm-software-development",
    icon: (
      <Image
        src="https://www.comfygen.com/img/cryptocurrency-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "We develop super-efficient cryptocurrency MLM Software with all the testing and maintenance handled appropriately, which enables the client’s business to stand at the best in cryptocurrency multi-level marketing zone. Get the best white-label MLM cryptocurrency solutions with our expertised support to gain high-level business profits",
    title: "Cryptocurrency Smart Contract MLM Software",
  },
  {
    num: "4",
    url: "/blockchain-development",
    icon: (
      <Image
        src="https://www.comfygen.com/img/blockchain-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "We build result-oriented white label blockchain smart contract MLM software, which is considered completely transparent decentralized solutions. It is completely secured and immutable smart contract based solutions. Moreover, our Ethereum and TRON smart contract MLM Software enable the businesses for hassle-free calculations and automated transactions.",
    title: "Blockchain Smart Contract MLM Software",
  },
];

const technologyData = [
  {
    img: <IconNetwork stroke={1.5} className="w-12 h-12" />,
    title: "Decentralized Architecture",
    desc: "Say goodbye to intermediaries. Our platform is built on a fully decentralized framework where all transactions and logic are executed through self-executing smart contracts, ensuring transparency and fairness.",
  },
  {
    img: <IconCash stroke={1.5} className="w-12 h-12" />,
    title: "Automated Payouts",
    desc: "Streamline reward distribution with auto-executed smart contracts. This feature ensures that commissions and earnings are directly sent to users’ wallets instantly without human intervention.",
  },
  {
    img: <IconLockCode stroke={1.5} className="w-12 h-12" />,
    title: "Immutable Smart Contracts",
    desc: "Once deployed, our smart contracts are tamper-proof. This immutability guarantees that rules and logic remain unchanged, offering maximum trust and security to users..",
  },
  {
    img: <IconHierarchy3 stroke={1.5} className="w-12 h-12" />,
    title: "Multiple MLM Plan Support",
    desc: "Whether your strategy is Binary, Matrix, Unilevel, Board, or a custom structure, our software can be customized to fit and evolve with your business model.",
  },
  {
    img: <IconCurrencyBitcoin stroke={1.5} className="w-12 h-12" />,
    title: "Cross-Blockchain Compatibility",
    desc: "Enjoy the flexibility of deploying your MLM platform on the blockchain network of your choice, such as Ethereum, BNB Chain, Tron, Solana, or Polygon, depending on your project's goals.",
  },
  {
    img: <IconWallet stroke={1.5} className="w-12 h-12" />,
    title: "Crypto Wallet Integration",
    desc: "Ensure easy access for your users with integration support for popular crypto wallets like MetaMask, Trust Wallet, TronLink, and Phantom, offering secure and smooth onboarding.",
  },
  {
    img: <IconUsersGroup stroke={1.5} className="w-12 h-12" />,
    title: "Real-Time Income & Team Tracking",
    desc: "Empower users with a dynamic dashboard where they can track their income, referral growth, downline structure, and real-time updates on team performance.",
  },
  {
    img: <IconDeviceMobile stroke={1.5} className="w-12 h-12" />,
    title: "Mobile-Friendly Interface",
    desc: "Our platform is fully responsive and optimized for both desktop and mobile devices, making your MLM network accessible anytime, anywhere.",
  },
  {
    img: <IconLanguage stroke={1.5} className="w-12 h-12" />,
    title: "Multi-Language & Multi-Currency Support",
    desc: "Expand globally with ease. Our platform supports multiple languages and currencies to cater to international users and markets.",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  let { SmartContractFeatures } = JSON_DATA;

  useEffect(() => {
    AOS.init();
  }, []);

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
        img: "https://www.comfygen.com/img/decentralised-mlm.webp",
        head: "Decentralized MLM",
        name: "Decentralized MLM Web: Revolutionizing network marketing with blockchain-powered transparency, fairness, and rewards. Empowering communities and redefining success in the digital age.",
        num: "2",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg",
        ],
      },
      {
        img: "https://www.comfygen.com/img/hero-bg-m7-coin.webp",
        head: "M7Coin Web Wallet",
        name: "user-friendly platform. Easily store, send, and receive M7Coins, ensuring seamless transactions in the evolving digital economy.",
        num: "2",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg",
        ],
      },
      {
        img: "https://www.comfygen.com/img/aria-coin-cryptocurrency.webp",
        head: "Aria Coin Cryptocurrency",
        name: "ARIA Currency: Pioneering the future of digital transactions with security, accessibility, and efficiency. Empowering users with a decentralized and seamless financial experience.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg",
        ],
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Smart Contract MLM Software Development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smart Contract MLM Software Development involves creating blockchain-based multi-level marketing platforms using smart contracts that automate transactions and commissions transparently and securely.",
        },
      },
      {
        "@type": "Question",
        name: "How does a Smart Contract enhance MLM platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smart contracts automate and secure MLM processes, reducing intermediaries and ensuring tamper-proof, transparent transactions for better trust and reliability.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of using blockchain in MLM software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Blockchain integration ensures decentralization, transparency, and security by recording transactions on an immutable public ledger.",
        },
      },
      {
        "@type": "Question",
        name: "Which blockchain platforms are commonly used for Smart Contract MLM Software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ethereum, Tron, BNB Chain, and Solana are widely used blockchains for Smart Contract MLM development due to their scalability and smart contract capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "How secure is Smart Contract MLM Software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smart Contract MLM Software is secure by design as smart contracts are immutable, reducing the chances of manipulation and fraud.",
        },
      },
      {
        "@type": "Question",
        name: "Can Smart Contract MLM Software be customized to fit different MLM plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Smart Contract MLM Software can be tailored to Binary, Matrix, Unilevel, and other custom MLM plans depending on business needs.",
        },
      },
      {
        "@type": "Question",
        name: "What is the development cost of Smart Contract MLM Software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on the MLM plan complexity, blockchain choice, and custom features. Contacting a development team is recommended for an accurate estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop and deploy Smart Contract MLM Software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic platforms may take a few weeks; complex solutions with advanced features could require several months.",
        },
      },
      {
        "@type": "Question",
        name: "Why is transparency important in Smart Contract MLM Software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Transparency builds user trust, allowing them to verify all activities and transactions governed by the unchangeable smart contract logic.",
        },
      },
      {
        "@type": "Question",
        name: "How does decentralization benefit MLM platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Decentralization eliminates central authority, reducing fraud and enhancing security while giving users control over their funds and operations.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Smart Contract MLM Software Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Looking for a reliable smart contract MLM software development company? Comfygen builds secure, scalable, and decentralized MLM platforms on Ethereum, Tron, BNB, Solana & more."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/smart-contract-mlm-software"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta
          name="keywords"
          content="Looking for a reliable smart contract MLM software development company? Comfygen builds secure, scalable, and decentralized MLM platforms on Ethereum, Tron, BNB, Solana & more."
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="Twitter:card" content="summary_large_image" />
        <meta
          name="Twitter:title"
          content="Smart Contract MLM Software Development Company | Comfygen"
        />
        <meta
          name="Twitter:description"
          content=" Looking for a reliable smart contract MLM software development company? Comfygen builds secure, scalable, and decentralized MLM platforms on Ethereum, Tron, BNB, Solana & more."
        />
        <meta name="Twitter:image" content="https://www.comfygen.com/image/smart-contract-mlm-software-og-image.webp" />
        <meta name="Twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/image/smart-contract-mlm-software-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/smart-contract-mlm-software-og-image.webp" />
        <meta property="og:image:alt" content="Smart Contract MLM Software" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/smart-contract-mlm-software"
        />
        <meta
          property="og:title"
          content="Smart Contract MLM Software Development Company | Comfygen"
        />
        <meta
          property="og:description"
          content=" Looking for a reliable smart contract MLM software development company? Comfygen builds secure, scalable, and decentralized MLM platforms on Ethereum, Tron, BNB, Solana & more."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      
      </Head>

      <BlockchainNav/>
      <div className="overflow-hidden ">
        {/* hero section */}

        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/smart-contract-mlm-software-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="Smart Contract MLM Software Development Company"
            ptag="Comfygen is a trusted name in smart contract MLM software development, offering cutting-edge solutions for businesses looking to build secure, transparent, and decentralized MLM platforms. Our team combines blockchain expertise with in-depth knowledge of multi-level marketing models to create scalable, automated systems powered by smart contracts. As a professional MLM software development company, we focus on delivering tamper-proof solutions that eliminate manual errors and third-party interference. Whether you're starting a binary, matrix, or uni-level MLM project, our customized platforms are built to align with your goals and ensure long-term growth."
            ptag1="By leveraging blockchain networks like Ethereum, Tron, BNB Chain, and Polygon, we help businesses launch high-performance smart contract-based MLM software that ensures trust, transparency, and instant transactions."
            li="Expert smart contract developers"
            li1="100% decentralized architecture"
            li2="Real-time payouts and transaction records"
            li3="Customizable MLM plan integration"
            li4="Scalable and secure blockchain solutions"
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
          heading="Smart Contract MLM Software Development"
          description1="Comfygen offers advanced smart contract MLM software development to help businesses build secure, automated, and decentralized MLM platforms. Our blockchain-powered systems handle everything from referrals to commission payouts—without any manual effort or admin control."
          description2="We develop smart contract MLM software on Ethereum, Tron, BNB Chain, and Polygon, enabling fast, transparent, and tamper-proof transactions. Whether it’s a binary, matrix, or custom plan, we deliver reliable solutions tailored to your goals."
          points={[
            "Auto-executed commissions",
            "Crypto wallet integration",
            "Transparent genealogy tracking",
            "Custom MLM plan support",
          ]}
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Smart Contract MLM Software Development Services We Offer
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we specialize in delivering blockchain-powered MLM
                development services tailored to your business model. Whether
                you're launching a crypto-based MLM platform or building on
                Ethereum, BSC, or Tron, we’ve got you covered with cutting-edge
                technology and fully automated smart contracts.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-4 lg:text-4xl text-3xl font-bold leading-[3rem] text-[#fff]">
                  Build Smart Contract Based MLM Software Development on
                  Different Blockchain Network
                </h2>
                <p className="text-base text-white ">
                  Smart Contract Based MLM Software is an excellent
                  decentralized solution, which is an instant multi-level
                  marketing strategy empowered by Blockchain Smart Contracts
                  built on various blockchain networks; such as Ethereum, TRON,
                  EOS, and more. Mostly, the Ethereum Smart Contract Based MLM
                  Business is widely known, but now TRON Smart Contract MLM
                  Software is also getting into use often.
                </p>
                <p className="text-base text-white ">
                  Comfygen, a Smart Contract Based MLM Software Development
                  Company, provides innovative blockchain solutions to enhance
                  security, transparency, and automation in MLM businesses.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border rounded-2xl transition-all duration-300 hover:translate-y-2 group"
                    >
                      <div className="w-20 h-20 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
                        <span>{icon}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200">
                        {title}
                      </h3>
                      <p className="text-white transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <SolutionSec
          heading="Features of Smart Contract MLM Software Development"
          subheading="Smart Contract MLM Software revolutionizes the way multi-level marketing platforms operate by integrating the power of blockchain technology. With decentralization, automation, and transparency at its core, our smart contract MLM solutions offer unmatched efficiency, trust, and scalability. Each feature is designed to empower your network marketing platform with advanced security, seamless user experience, and rapid growth potential."
          techData={technologyData}
        />

        <InfoSectionRight
          heading="Key Benefits of a Smart Contract MLM Software Development"
          description1="Smart Contract MLM Software offers a decentralized, secure, and automated solution that transforms how MLM platforms operate. By leveraging blockchain, it eliminates third-party control, increases trust, and ensures faster, tamper-proof transactions."
          points={[
            "A decentralized structure eliminates the need for admin control",
            "Transparent operations with publicly verifiable blockchain records",
            "Instant wallet-to-wallet payouts via automated smart contracts",
            "Immutable code prevents tampering and fraud",
            "Lower operational costs by removing intermediaries",
            "Global accessibility with just a crypto wallet",
            "Easy integration of multiple MLM plan types",
            "24/7 uptime without server dependencies",
            "Full user ownership of earnings and data",
          ]}
          imageSrc="https://www.comfygen.com/image/key-benefits-of-a-smart-contract.png"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Crypto Wallets Supported by Our Metaverse Casino Software
                </h2>
                <p>
                  To ensure a frictionless and secure experience within
                  blockchain-based gaming environments, our Metaverse casino
                  platforms come integrated with a wide array of decentralized
                  crypto wallets. These wallets empower users to access, store,
                  and transact digital assets in real time while maintaining
                  full ownership and privacy. Whether your casino runs on
                  Ethereum, BNB Chain, Tron, or Solana — we’ve got you covered
                  with wallet integrations that are fast, scalable, and
                  user-friendly.
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

        <InfoSectionLeft
          heading="White Label Smart Contract MLM Software"
          description1="Looking to launch your own MLM platform instantly without building from scratch? Our White Label Smart Contract MLM Software offers a ready-made, customizable solution designed to help businesses enter the crypto MLM space faster and more efficiently. Built on decentralized blockchain architecture, it ensures transparency, automation, and security — tailored under your brand name."
          points={[
            "Faster Time to Market - Get your platform up and running in days, not months.",
            "Custom Branding Options - Fully rebrand the platform with your logo, domain, colors, and UI elements.",
            "Multi-Plan Compatibility - Supports Binary, Matrix, Unilevel, Board, and custom MLM structures.",
            "Decentralized & Tamper-Proof - Powered by immutable smart contracts on Ethereum, BNB Chain, Tron, and more.",
            "Crypto Wallet Integration - Seamlessly connect wallets like MetaMask, Trust Wallet, TronLink, etc.",
            "Scalable Architecture - Easily upgrade as your network grows — no performance bottlenecks.",
            "Multi-language & Multi-Currency Ready - Reach global audiences with localization and crypto support.",
            "Cost-Efficient - Save development time and costs with our pre-built solution.",
          ]}
          imageSrc="https://www.comfygen.com/image/white-label-smart-contract-mlm-software.png"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <CardItem
          heading="Latest Tech-Trends Included in Smart Contract based MLM Software"
          subheading=""
          techData={JSON_DATA.cardData}
        />
        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                The Development Process Behind Smart Contract MLM Software
                Solutions
              </h2>
              <p className="text-base font-normal mt-2">
                Do you want to get one dedicated custom Smart Contract MLM
                Software Development Company to handle the process for your
                business? Know its Smart Contract MLM Software Development
                Solutions process.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Processs} />
          </div>
        </section>
        <PortfolioSec
          techData={techDataForPage1}
          heading="Explore Our Smart Contract MLM Based Portfolio"
          description="Showcasing our expertise through innovative design and development projects. A testament to our commitment to creativity, excellence, and impactful solutions."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Why Hire Smart Contract Developers from Comfygen?"
          text="Hiring smart contract developers from Comfygen ensures you get industry-experienced professionals who deliver secure, scalable, and blockchain-optimized smart contract solutions. Whether you're launching a smart contract MLM platform or a DeFi dApp, our team brings the technical expertise and reliability you need."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in Ethereum, BSC, Tron, Solana & Polygon",
            "Specialized in Smart Contract MLM Platform Development",
            "Clean, Gas-Optimized & Auditable Code",
            "Proven Experience with Projects like Forsage & DoubleWay",
            "Flexible Hiring Models (Full-Time, Part-Time, Dedicated)",
            "Fast Turnaround & On-Time Delivery",
            "Post-Launch Maintenance & Technical Support",
            "End-to-End Blockchain Development Support",
          ]}
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
          title="Smart Contract Based MLM Software"
        />
      </div>
    </>
  );
}

