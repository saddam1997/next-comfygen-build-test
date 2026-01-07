import Image from "next/image";
import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ethereumtoken.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const NewSection = dynamic(
  () => import("../../components/Newcomponet/comman/NewSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



// import NewSection from "../Newcomponet/comman/NewSection"
// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import InfoSection from "../Newcomponet/SectionCompoent/InfoSection";
// import ModelsSec from '../Newcomponet/SectionCompoent/ModelsSec'
// import SolutionSec from "../Newcomponet/SectionCompoent/Solution";
// import TechStack from "../Newcomponet/SectionCompoent/TechStack";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import Faq from "../Newcomponet/SectionCompoent/Faq";


import {
  IconArrowsExchange,
  IconCoin,
  IconShieldCheck,
  IconCode,
  IconTrophy,
  IconBuildingBridge2,
} from '@tabler/icons-react';




const technologyData = [
  {
    img: <IconArrowsExchange stroke={1.5} className="w-12 h-12" />,
    title: "Flexible swapping and mutation",
    desc: "Easily swap tokens from one form to another based on nature of function with high security."
  },
  {
    img: <IconCoin stroke={1.5} className="w-12 h-12" />,
    title: "Chain compatibility",
    desc: "Easily swap tokens from one form to another based on nature of function with high security."
  },
  {
    img: <IconShieldCheck stroke={1.5} className="w-12 h-12" />,
    title: "Ensure fast listing",
    desc: "Offer compatibility with the currencies or tokens from current on-going chains in trends."
  },
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Rigid smart contract",
    desc: "We use high fidelity design for the smart contracts to ensure rigidity on your token."
  },
  {
    img: <IconBuildingBridge2 stroke={1.5} className="w-12 h-12" />,
    title: "Standardized architecture",
    desc: "Designed with standardized layout architecture to offer assured safety against hacks."
  },
  {
    img: <IconTrophy stroke={1.5} className="w-12 h-12" />,
    title: "Rewards ROI",
    desc: "Contributes to the effective trade-off base assets along with enhanced rewards on returns."
  }
];
export default function Ecommerce(props: any) {
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


  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };



  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best token development company in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best token development company in 2025 offers secure, scalable, and customized blockchain solutions. Companies like Comfygen are known for developing ERC20, ERC721, and ERC1155 tokens with smart contract auditing and end-to-end blockchain services."
        }
      },
      {
        "@type": "Question",
        "name": "Who are Ethereum developers, and what do they do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethereum developers are blockchain experts who create decentralized applications (dApps), smart contracts, and custom tokens on the Ethereum blockchain. They specialize in developing ERC20, ERC721, ERC1155 tokens, and building blockchain-based ecosystems."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to create a coin on Ethereum in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to create a coin or token on Ethereum in 2025 typically ranges from $3,000 to $10,000 or more. Pricing depends on factors like token standards, smart contract complexity, security auditing, and additional services such as exchange listing and wallet integration."
        }
      },
      {
        "@type": "Question",
        "name": "What is token development in blockchain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Token development in blockchain refers to the process of creating digital assets or tokens on platforms like Ethereum. It involves developing smart contracts, adhering to standards such as ERC20 or ERC721, and integrating tokens into DeFi, NFT, and other blockchain applications."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best Ethereum token to create in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2025, ERC20 tokens are ideal for utility and governance purposes, while ERC721 and ERC1155 tokens are perfect for NFTs and gaming applications. The best Ethereum token depends on your project goals and the ecosystem you aim to target."
        }
      },
      {
        "@type": "Question",
        "name": "Which blockchain is best for token creation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethereum is considered the best blockchain for token creation due to its mature ecosystem, robust security, and widespread adoption. Alternatives like Polygon, Solana, and BNB Chain are also popular for lower transaction fees and faster processing."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the king of Ethereum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vitalik Buterin is often referred to as the king of Ethereum. He is the co-founder of Ethereum and plays a pivotal role in its ongoing development and innovation."
        }
      },
      {
        "@type": "Question",
        "name": "Which cryptocurrencies are expected to boom in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cryptocurrencies expected to perform well in 2025 include Ethereum (ETH), Polygon (MATIC), and Solana (SOL), driven by advancements in blockchain scalability and DeFi. AI-powered crypto tokens and utility tokens in gaming and NFTs are also gaining momentum."
        }
      },
      {
        "@type": "Question",
        "name": "How to learn Ethereum development in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To learn Ethereum development in 2025, start with Solidity programming, study smart contract creation, and explore Web3 frameworks like Hardhat and Truffle. Enroll in online blockchain courses or bootcamps for hands-on experience."
        }
      },
      {
        "@type": "Question",
        "name": "What is an Ethereum Token? – Beginner’s Guide",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Ethereum token is a digital asset built on the Ethereum blockchain using smart contracts. These tokens follow standards like ERC20 for fungible tokens and ERC721 for NFTs, enabling applications in DeFi, NFTs, gaming, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Crypto Token Development: A Comprehensive Guide (2025)",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crypto token development involves designing, developing, and deploying tokens on blockchains like Ethereum. It includes selecting token standards, writing and auditing smart contracts, and integrating tokens into DeFi platforms and NFT marketplaces."
        }
      }
    ]
  };



  return (
    <>
      <Head>
        <title>
          Ethereum Token Development Company | Ethereum Token Development Services
        </title>
        <meta
          name="description"
          content=" Comfygen is a leading Ethereum token development company offering comprehensive Ethereum token development services for ERC standards like ERC20, ERC721, and more. Hire our expert Ethereum token developers to create secure, scalable tokens and smart contracts tailored to your project needs."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ethereum-token-development"
        />

        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
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
        <meta name='og:title' content='Ethereum Token Development Company | Ethereum Token Development Services' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://www.comfygen.com/ethereum-token-development' />
        <meta name='og:image' content='https://www.comfygen.com/image/ethereum-token-development-og-image.webp' />
        <meta name='og:site_name' content='Comfygen Private Limited' />
        <meta name='og:description' content='Comfygen is a leading Ethereum token development company offering comprehensive Ethereum token development services for ERC standards like ERC20, ERC721, and more. Hire our expert Ethereum token developers to create secure, scalable tokens and smart contracts tailored to your project needs.' />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ethereum Token Development Company | Ethereum Token Development Services" />
        <meta name="twitter:description" content=" Comfygen is a leading Ethereum token development company offering comprehensive Ethereum token development services for ERC standards like ERC20, ERC721, and more. Hire our expert Ethereum token developers to create secure, scalable tokens and smart contracts tailored to your project needs." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/ethereum-token-development-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/image/ethereum-token-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/ethereum-token-development-og-image.webp" />
        <meta property="og:image:alt" content="Ethereum Token Development Company" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[100px]">

        <HeroSectionForAllPages
          heading="Ethereum Token Development Services"
          ptag="Comfygen is a trusted Ethereum token development company in India, specializing in creating secure, scalable, and custom tokens on the Ethereum blockchain. We offer complete <a class='font-semibold' href='/crypto-token-development-company'>crypto token development services </a>, including ERC20, ERC721, and ERC1155 tokens for DeFi, NFT platforms, ICOs, and more. Our blockchain experts ensure smart contract integration, token security, and seamless deployment. Whether you need a utility token, NFT, or a multi-token solution, we deliver future-ready assets designed for high performance and compliance."
          li="ERC20, ERC721, ERC1155 Token Development"
          li1="Smart Contract Development & Auditing"
          li2="ICO & DeFi Token Launch"
          li3="Wallet Integration and Support"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/ethereum-token-development-company-hero-img.webp"
        />

        <NewSection NewSection={JSON_DATA.NewSections} />
        <AboutSection
          title="About Company"
          heading="Trusted Ethereum Token Development Company in India"
          description1="<a class='text-blue-600' href='https://www.comfygen.com' >Comfygen </a> is recognized as a trusted Ethereum token development company in India. We offer secure and scalable token solutions for businesses, startups, and enterprises. Our expertise includes developing custom ERC20, ERC721, and ERC1155 tokens tailored for DeFi platforms, NFT marketplaces, and fundraising projects like ICOs and STOs."
          description2="As a reliable Ethereum token development agency, we ensure seamless smart contract integration, wallet compatibility, and exchange listings. With a focus on security, compliance, and innovation, Comfygen helps you launch blockchain tokens that drive growth in the evolving Web3 ecosystem."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our Ethereum Token Development Services
              </h2>
              <p className="text-base text-center font-normal">At Comfygen, we deliver end-to-end Ethereum token development services for startups, enterprises, and businesses. As a trusted Ethereum token development company in India, we create secure, scalable ERC20, ERC721, and ERC1155 tokens. Our services include smart contract development, wallet integration, and DeFi, NFT, and ICO/STO token solutions, helping businesses grow in the blockchain ecosystem. With expert developers and a focus on security and compliance, we ensure fast and efficient token deployment.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <InfoSection
          heading="Ethereum – An Overview"
          description1="Ethereum is one of the most widely used blockchain platforms for token development, offering a secure and decentralized ecosystem for creating digital assets and <a href='/smart-contract-development' class='text-blue-600'> smart contracts development </a>. Launched in 2015, Ethereum powers thousands of decentralized applications (dApps) and is the backbone for ERC token standards, including ERC20, ERC721, and ERC1155. As a leading blockchain network for Ethereum token development, it provides developers and businesses with the tools to create custom crypto tokens, including utility tokens, security tokens, and NFTs. Ethereum's smart contract functionality ensures that token transactions are secure, automated, and transparent."
          description2=''
          description3=''
          points={
            [
              "Supports <a href='/erc20-token-development' class='text-blue-600'> ERC20 token development </a> for DeFi platforms",
              "Enables NFT creation via ERC721 and ERC1155 standards",
              "Seamless integration with wallets and exchanges",
              "Scalable and secure smart contract development",
              "Ideal for ICOs, STOs, and tokenized assets"
            ]
          }
          imageSrc="https://www.comfygen.com/images/ethereum-overview.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
          dec=''
        />
        <InfoSection
          heading="What Is an Ethereum Token?"
          description1="An Ethereum token is a digital asset or cryptocurrency token built on the Ethereum blockchain. Unlike Ether (ETH), which is Ethereum’s native currency, these tokens are created through smart contracts and follow specific token standards like ERC20, ERC721, and ERC1155. These tokens represent a wide range of assets and utilities—from cryptocurrency tokens used in DeFi applications to NFTs for digital art and gaming. Ethereum token development allows businesses to create custom tokens for fundraising (ICOs and STOs), decentralized exchanges (DEXs), loyalty programs, and blockchain-based ecosystems."
          description2="As a trusted Ethereum token development company in India, Comfygen specializes in building secure, scalable, and compliant Ethereum tokens that are compatible with popular wallets and exchanges."
          description3=''
          dec=''
          points={
            [
              "Fast and Secure Transactions",
              "Smart Contract Automation",
              "High Liquidity and Market Adoption",
              "Compliance with Web3 and DeFi Standards"
            ]
          }
          imageSrc="https://www.comfygen.com/images/what-is-ethereum-token.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
          imagePosition='right'
        />
        <InfoSection
          heading="What Is Ethereum Token Development?"
          description1="Ethereum token development is the process of creating digital tokens on the Ethereum blockchain using standards like ERC20, ERC721, and ERC1155. These tokens power DeFi platforms, NFTs, and blockchain ecosystems, enabling businesses to launch crypto assets, run ICOs, or develop tokenized solutions. At Comfygen, a leading Ethereum token development company in India, we deliver secure, scalable, and custom token solutions tailored for startups and enterprises. Our services cover custom token creation, smart contract development, wallet integration, and exchange listing, ensuring your tokens are compliant, efficient, and ready for the Web3 economy."
          description2=''
          description3=''
          dec=''
          points={
            [
              "Custom Token Creation (ERC20, ERC721, ERC1155)",
              "Smart Contract Development and Auditing",
              "Wallet and Exchange Integration",
              "Compliance with Web3 and DeFi Protocols",
              "Security-First Architecture",
              "Scalable Token Solutions for Enterprises and Startups"
            ]
          }
          imageSrc="https://www.comfygen.com/images/ethereum-token-creation-services.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <InfoSection
          heading="Ethereum Token Creation Services"
          description1="At Comfygen, we deliver reliable and secure Ethereum token creation services for businesses looking to launch their custom tokens on the Ethereum blockchain. Whether you need ERC20 utility tokens, ERC721 NFTs, or ERC1155 multi-tokens, our team ensures seamless development and deployment aligned with Web3 and DeFi standards."
          description2=''
          description3=''
          dec=''
          points={
            [
              "Custom ERC20 Token Development",
              "ERC721 NFT Token Creation",
              "ERC1155 Multi-Token Development",
              "Smart Contract Development & Auditing",
              "Wallet Integration Services",
              "Token Listing on Crypto Exchanges",
              "Compliance with Web3 and DeFi Protocols"
            ]
          }
          imageSrc="https://www.comfygen.com/img/erc-20-token-wallet-development.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
          imagePosition='right'
        />
        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <SolutionSec
          heading="Core Features of Our Developed Ethereum Tokens"
          subheading=""
          techData={technologyData}
        />
        <div className="py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <section className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-white  ">
                  Ethereum Token Development Across Multiple ERC Standards
                </h2>
                <p className="text-center text-white">At Comfygen, we specialize in Ethereum token development across multiple ERC standards, designed to suit diverse business needs in DeFi, NFT marketplaces, and blockchain ecosystems. Our expert developers create secure, scalable, and compliant tokens that adhere to Ethereum’s widely adopted ERC protocols, ensuring seamless integration with wallets, dApps, and exchanges.</p>
              </div>
              <div className="grid gap-10 mt-6 lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.MLM.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="p-8 space-y-4 bg-slate-100 cursor-pointer rounded-[20px] "
                    >
                      <div className="flex items-center justify-start ">
                        <Image
                          className="items-center object-cover"
                          src={img}
                          alt={title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-[#0E1F51] text-start">
                          {title}
                        </h3>
                        <p className="font-medium text-start text-black">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <TechStack
          title="Our Cryptocurrency Development Technology Stack"
          description=""
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Ethereum Token Developer from Comfygen"
          text="Looking to launch your Ethereum-based tokens? At Comfygen, we provide expert Ethereum token developers who bring deep blockchain expertise and proven experience in delivering secure, scalable, and customized token solutions. Whether you're developing ERC20 tokens for utility, ERC721 tokens for NFTs, or ERC1155 tokens for gaming and metaverse platforms, our developers offer end-to-end services tailored to your unique requirements."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Smart contract development and auditing for secure transactions",
            "Custom token creation aligned with the latest Ethereum token standards",
            "Integration with wallets, DeFi platforms, and crypto exchanges",
            "Compliance with industry regulations and blockchain best practices",
            "Support for ICO/STO token launches and fundraising campaigns",
          ]}
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
        />

      </div>
    </>
  );
}

export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  if (!resData.ok) {
    // console.error("API Request failed:", await resData);
    return { props: { initialData: [] } };
  }
  // console.log(resData)
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

