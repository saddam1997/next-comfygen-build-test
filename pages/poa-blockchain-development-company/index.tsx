import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./poa.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import BlueButton from "../components/button/BlueButton";
import ContactUsButton from "../components/ContactUsButton";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import AboutSection from "../components/AboutSection";
import InfoSectionRight from "../components/InfoSectionRight";
import InfoSectionLeft from "../components/InfoSectionLeft";
import ServicesSec from "../components/ServicesSec";
import { MdOutlineArrowOutward } from "react-icons/md";
import CallToAction from "../components/CallToAction";
import WhyChoose from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import PortfolioSec from "../componentsnew/PortfolioSec";
import BlockchainNav from "../componentsnew/blockchain-navbar";

const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
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
const BlogSection = dynamic(() => import("../components/BlogSection1"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
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
    num: "01",
    url: "/ethereum-token-development",
    icon: (
      <Image
        src="https://www.comfygen.com/img/forking-ethereum-blockchain-development-services.webp"
        alt="Forking Ethereum Blockchain"
        width={60}
        height={60}
      />
    ),
    title: "Forking Ethereum Blockchain Development Services",
    decs: (
      <p>
        Comfygen provides you with the flexibility of forking the Ethereum
        blockchain development services with the use of PoA blockchain
        development services as the consensus algorithm. We will be copying the
        current state of the Ethereum blockchain blockchain development services
        and preparing a duplicate version of it for making necessary changes in
        the next stages.
      </p>
    ),
  },
  {
    num: "02",
    icon: (
      <Image
        src="https://www.comfygen.com/img/branding-explorer-icon.webp"
        alt="Branding Explorer"
        width={60}
        height={60}
      />
    ),
    title: "Branding Explorer",
    decs: "We provide you with a branding or blockchain development services explorer for allowing the users to visualize, extract, or review the various metrics or blockchain development networks, consisting of information associated with transaction history, cryptocurrency development transactions, transaction fees, and crypto wallet balances. We implement the customizable and white-label blockchain explorer. ",
  },
  {
    num: "03",
    icon: (
      <Image
        src="https://www.comfygen.com/img/network-status-monitoring.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Network Status Monitoring",
    decs: "We provide you with network status monitoring blockchain app development services with the use of branding explorer, which will listen to various events and then provide certain visualization of various transactions that are processed, queued, or received. Later, these transactions are grouped in the face of a new block. ",
  },
  {
    num: "04",
    icon: (
      <Image
        src="https://www.comfygen.com/img/brand-block-explorer-icon.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Brand Block Explorer ",
    decs: (
      <p>
        We will integrate a brand block explorer into your PoA blockchain
        development project, which is an online tool that would enable you to
        search the real-time or past information associated with a{" "}
        <span className="font-bold">blockchain app development agency</span> .
        For instance, you can search for data that relates to blocks, addresses,
        transactions, and others.{" "}
      </p>
    ),
  },
  {
    num: "05",
    icon: (
      <Image
        src="https://www.comfygen.com/img/blockchain-documentation-services.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Blockchain Documentation Services",
    decs: (
      <p>
        We provide impeccable documentation or record-keeping services alongside
        our <span className="font-bold">Proof of Authority </span> blockchain
        development agency. As this technology tends to create a tamper-proof
        transaction ledger, we ensure that the process documentation is recorded
        and stored securely. Clarity and precision are ensured to maintain the
        information integrity and eliminate the risk of unauthorized errors.
      </p>
    ),
  },
  {
    num: "06",
    icon: (
      <Image
        src="https://www.comfygen.com/img/blockchain-&-faucet-app-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Testnet Blockchain & Faucet App Development",
    decs: "We will be creating an identical copy of the blockchain development services solution and will then be testing out various new features or products before they can be implemented into the main blockchain app development. Following that, we can also create faucet apps, which would reward specific users with small crypto amounts as rewards for completing specific tasks. ",
  },
  {
    num: "07",
    icon: (
      <Image
        src="https://www.comfygen.com/img/metamask-integration-icon.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Metamask Integration",
    decs: (
      <p>
        Our{" "}
        <span className="font-bold">PoA blockchain development service</span> is
        made compatible with that of Metamask, with just the effort of changing
        the network. Metamask is a popular{" "}
        <a href="/crypto-wallet-development" className="text-blue-500">
          cryptocurrency wallet{" "}
        </a>{" "}
        that is used for interacting with the Ethereum blockchain development
        services. We enable features onto our blockchain development services
        solution, which would enable you to configure the Metamask wallet with
        just a single click.{" "}
      </p>
    ),
  },
  {
    num: "08",
    icon: (
      <Image
        src="https://www.comfygen.com/img/ethereum-dApps-and-contracts.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Integration with Ethereum dApps and Contracts",
    decs: (
      <p>
        Comfygen implements its PoA blockchain development solutions to create
        apps that will be compatible with all the{" "}
        <a href="/dapp-development-company" className="text-blue-500">
          dApps blockchain development services
        </a>{" "}
        or{" "}
        <span className="font-bold">
          smart contracts blockchain development services
        </span>{" "}
        that are built over dApps blockchain development services.
      </p>
    ),
  },
  {
    num: "09",
    icon: (
      <Image
        src="https://www.comfygen.com/img/blockchain-aPI-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Blockchain API Development",
    decs: (
      <p>
        If you seek <span className="font-bold">PoA blockchain features</span>{" "}
        in your dedicated applications, we implement powerful APIs that can be
        used in diverse ways. Thus, our team will be helping you create
        blockchain development APIs for developing dApps blockchain development
        services, storing data securely, powering{" "}
        <a
          href="/blog/real-world-asset-tokenization-on-blockchain-development/"
          className="text-blue-500"
        >
          crypto real world assets tokenization
        </a>{" "}
        , or developing{" "}
        <a href="/defi-development-company" className="text-blue-500">
          Decentralized Finance blockchain development services
        </a>{" "}
        .{" "}
      </p>
    ),
  },
  {
    num: "10",
    icon: (
      <Image
        src="https://www.comfygen.com/img/virtual-node-Development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Virtual Node Development",
    decs: (
      <p>
        We can help you build around 5 virtual nodes for the dedicated status
        monitoring page to support the marketing boost requirements you have for
        your{" "}
        <span className="font-bold">
          Proof of Authority blockchain development services, solutions{" "}
        </span>{" "}
        Our node integration will distribute data across different nodes
        following a finer granularity with the use of single-token architecture.
        .{" "}
      </p>
    ),
  },
  {
    num: "11",
    icon: (
      <Image
        src="https://www.comfygen.com/img/encouraging-interoperability-icon.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Encouraging Interoperability",
    decs: (
      <p>
        {" "}
        <span className="font-bold">
          We bring in all the technologies such as{" "}
          <a href="/game-development-company" className="text-blue-500">
            Game blockchain development services
          </a>{" "}
          , Web3 blockchain development services, smart contracts blockchain
          development services,{" "}
          <a href="/metaverse-development" className="text-blue-500">
            Metaverse blockchain development services
          </a>{" "}
          , dApps blockchain development services, and other such toolsets to
          ensure interoperability of them with that of Ethereum blockchain
          development services
        </span>{" "}
        and other such EVM chains.
      </p>
    ),
  },
];

const Ser = [
  {
    num: "01",
    img: "https://www.comfygen.com/img/smart-contract-solutions-icon.webp",
    title: (
      <p>
        <a href="/smart-contract-development">Smart Contract Solutions</a>{" "}
      </p>
    ),
    decs: (
      <p>
        We implement our PoA blockchain development approach to help you
        automate most of the complex tasks within your business operations and
        speed them up by using airtight smart contracts blockchain development
        services built over the blockchain development services. And we make it
        possible with our{" "}
        <span className="font-bold">PoA blockchain development solution</span> .{" "}
      </p>
    ),
  },
  {
    num: "02",
    img: "https://www.comfygen.com/img/high-scalability-icon.webp",
    title: "High Scalability",
    decs: (
      <p>
        Most of the public blockchains have failed to be used in enterprise{" "}
        <a className="text-blue-500" href="/mobile-app-development">
          mobile application development services
        </a>{" "}
        , usually because they lack the scalability aspects in them. Therefore,
        we bring to you the PoA blockchain development solutions that are widely
        popular for their high-end scalability, which would provide operational
        efficiency for your business.{" "}
      </p>
    ),
  },
  {
    num: "03",
    img: "https://www.comfygen.com/img/multilateral-ledger-icon.webp",
    title: "Multilateral Ledger",
    decs: (
      <p>
        With our{" "}
        <span className="font-bold">
          readymade Proof of Authority blockchain development{" "}
        </span>{" "}
        solution, you can expect to enable the participants of the network to
        maintain copies of all the associated transactions that they check or
        inspect. Thus, the participants no longer have to be only the observer
        of the transactions but can also store them to better analyze them over
        time.
      </p>
    ),
  },
  {
    num: "04",
    img: "https://www.comfygen.com/img/enterprise-support-icon.webp",
    title: "Enterprise Support",
    decs: (
      <p>
        At Comfygen, we bring in the highest form of privacy, scalability, and
        security with the PoA blockchain development services to complement the
        efficacies of{" "}
        <span className="font-bold">
          enterprise mobile applications development agency
        </span>{" "}
        Under this development service, we deliver quality enterprise support to
        boost functionality and operational approaches with customizable
        solutions.
      </p>
    ),
  },
  {
    num: "05",
    img: "https://www.comfygen.com/img/point-to-point-architecture-icon.webp",
    title: "Point-to-Point Architecture",
    decs: "Enabling point-to-point architecture is a winning move for business owners with their PoA blockchain development project, as this indicates that only the participants of the network will be able to access the transactions that take place. And Comfygen tends to help you implement the same on priority. ",
  },
  {
    num: "06",
    img: "https://www.comfygen.com/img/pluggable-consensus-icon.webp",
    title: "Pluggable Consensus",
    decs: (
      <p>
        The{" "}
        <span className="font-bold">
          custom PoA blockchain development solution
        </span>{" "}
        offered by our experts will allow you to implement pluggable consensus.
        It means you will be able to make necessary changes to the blockchain
        development platform without experiencing much downtime. Thus, it would
        keep your business up and running at all times.
      </p>
    ),
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  let { LatestTechno, Major } = JSON_DATA;



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
        name: "NASDAC Crypto Coin is a cutting-edge cryptocurrency built on its dedicated blockchain—not just another token. Featuring a powerful ‘Four Square’ architecture, it excels in speed, mining efficiency, seamless integration, and predictable growth. It is designed to surpass Bitcoin in strength, speed, and security. Hence, NASDAC Coin is purpose-built for businesses, establishing itself as the first true SUPER COIN in the blockchain industry.",
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
        name: "YatriPay revolutionizes global transactions with instant, zero-fee transfers through its decentralized P2P blockchain technology, powered by the advanced YatriPay Virtual Machine (YVM). Offering seamless peer-to-peer payments guarantees security, efficiency, and accessibility. With the YatriPay Mobile App, users can onboard effortlessly, enabling truly borderless digital transactions worldwide.",
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
  return (
    <>
      <Head>
        <title>
          POA Blockchain Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen provide Readymade or custumzation POA Blockchain Development services In India & The USA. Contact us today for Hire expert POA blockchain developers.!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/poa-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="POA Blockchain Development Company | Hire expert POA blockchain developers."
        />
        <meta
          property="og:facebook_description"
          content="Take your project to the next level with our exceptional DApp development company. As specialists in POA development and POA blockchain development, we offer tailored solutions to meet your specific requirements."
        />
        <meta
          property="og:twitter_title"
          content="POA development company | POA blockchain development company | DApp development company"
        />
        <meta
          property="og:twitter_description"
          content="Experience the difference with our distinguished POA blockchain development services. Our committed team offers comprehensive DApp development solutions alongside impeccable POA development expertise, positioning us as a notable POA blockchain development company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="POA Blockchain Development Company | Readymade POA Blockchain Development Company | Hire expert POA blockchain developers"
        />
        <meta
          name="summary"
          content="POA Blockchain Development Company | Readymade POA Blockchain Development Company || Comfygen Privtate Limited: Are you Looking for a Hire expert POA blockchain developers in India? Hire expert POA blockchain developers for secure and efficient NFT blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a POA Blockchain Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="POA Blockchain Development Company"
          content="Comfygen is a World Class POA Blockchain Development Industry: We Build the Future of Business, One POA Blockchain Development Services at a Time."
        />
        <meta
          name="category"
          content="POA Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="POA Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/poa-blockchain-development-company/poa-blockchain-development-company.webp"
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <BlockchainNav/>
      <div className="overflow-hidden ">
        {/* hero section */}
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/poa-blockchain-dev-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="POA Blockchain Development Company"
            ptag="Unlock unmatched security, transparency, and efficiency with Comfygen's blockchain development solutions. We specialize in creating customized, secure, and scalable blockchain systems for various needs, including NFT gaming, DeFi, and metaverse projects. Our solutions ensure end-to-end traceability and tamper-proof transactions, leveraging smart contract compatibility for maximum reliability. With a focus on cutting-edge innovation, Comfygen empowers your business with cost-effective, future-ready blockchain technology."
            li="Enhanced Data Security"
            li1="Transparent Transaction Tracking"
            li2="Scalable Blockchain Solutions"
            li3="Future-Ready Innovation"
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
          heading="What Advantages Does Blockchain Technology Have to Offer?"
          description1="Blockchain Development Technology is the revolution that introduces security, transparency, traceability, and trust for the data that is being shared across diverse business networks. Following that, its purpose of execution is to introduce cost savings with enhanced efficiencies."
          description2="The blockchain development company attributes being implemented for businesses make use of an immutable and shared ledger, which can only be accessed by the validated or approved members with the given permission. Upon leveraging the decentralized concept of blockchain development technology, you can avail traceability and end-to-end visibility."
          description3="At Comfygen, we have been bringing in a quality approach for blockchain development services , solutions to ensure the utmost security for the business transactions you make. We can help you develop games, NFT game development, DeFi development services, solutions, and much more to make them compatible with smart contracts blockchain development, metaverse blockchain development, and other latest technology development solutions."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <InfoSectionRight
          heading="What is the Significance of POA Blockchain Development?"
          description1="Proof of Authority, or PoA Blockchain development, is a popular algorithm or consensus mechanism that is used with blockchains for delivering faster transactions."
          description2="Proof of Authority, or PoA Blockchain development, is a popular algorithm or consensus mechanism that is used with blockchains for delivering faster transactions."
          description3="The utilization of PoA in blockchain development services, solutions doesn’t depend solely on the nodes for solving complex mathematical problems. Instead, it uses a diverse set of authorities, with explicit permission, to create new blocks and then secure the linked blockchain development services."
          imageSrc="https://www.comfygen.com/img/what-is-the-Significance-of-poa-blockchain-development.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <InfoSectionLeft
          heading="Why is PoA Considered the Digital Revolution in the Blockchain Development Sector?"
          description1="PoA Blockchain development makes use of pre-approved validators with access to specific blockchain development software for organizing various transactions into specific blocks."
          description2="The introduction to PoA blockchain development is the ideology to meet business needs using blockchain app development services, solutions and with the ability to handle confidential data without any security hassle."
          description3="Comfygen, being the best Proof of Authority blockchain development company , provides you with quality solutions with all features and functionalities guaranteed."
          imageSrc="https://www.comfygen.com/comfygen-images/poa-blockchain-development-company/poa-blockchain-development-company2.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Explore Our PoA Blockchain Development Services</h2>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1] ">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="">
              {Major.map((elem: any) => {
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
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Ser.map((elem: any) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-8 rounded-lg border-2 bg-white space-y-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center bg-[#5556D1]/10 p-3 rounded-lg">
                        <Image src={img} alt={title} width="40" height="40" />
                      </div>
                      <h3 className="text-xl font-bold text-black">
                        {title}
                      </h3>
                    </div>
                    <div>
                      <p className="text-black">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <a href="/contact-us">
                <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                  Get A Free Consultation <MdOutlineArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Here’s Our Array of Some Special Offers for You to Count On!
                </h2>
                <p>Comfygen has curated certain offers for you to attain the flexibility of adapting your specific requirements associated with PoA blockchain development services.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {JSON_DATA.FutureDriven.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-2xl">
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                      <p className=" text-base font-normal mt-2">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <PortfolioSec
          techData={techDataForPage1}
          heading="Explore Our POA Blockchain Based Portfolio"
          description="Discover our portfolio of innovative projects that showcase our expertise in POA Blockchain solutions, online development, and app creation. Each project reflects our commitment to excellence, creativity, and client satisfaction."
        />
        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
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
