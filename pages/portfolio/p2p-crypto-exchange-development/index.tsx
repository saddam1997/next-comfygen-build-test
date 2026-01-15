import Image from "next/image";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import Header from '../../../components/Newcomponet/layout/Header';
const benefitSections = [
  {
    index: 1,
    title: "Challenges",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/p2p-crypto-exchange-development-challenges.webp",
    imageAlt: "P2P Crypto Exchange Challenges",
    points: [
      "Escrow System Complexity: Creating a smart contract-based escrow that automatically releases funds on successful transactions.",
      "KYC for P2P: Building a compliance layer without compromising decentralization.",
      "Cross-Border Payment Integration: Supporting multiple fiat channels (bank, UPI, PayPal) in different countries.",
      "Fraud Protection: Implementing a reputation system and dispute management for buyer-seller safety.",
      "Mobile UX Optimization: Delivering a seamless user experience across devices with responsive components.",
    ],
  },
  {
    index: 2,
    title: "Solution",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/p2p-crypto-exchange-development-solution.webp",
    imageAlt: "P2P Crypto Exchange Solution",
    points: [
      "Deployed a decentralized P2P trading engine integrated with multi-wallet support.",
      "Implemented smart contract-based escrow release triggered by mutual agreement or automated timeout.",
      "Integrated KYC with third-party providers like Jumio for global verification.",
      "Developed an in-app chat and dispute resolution system between buyers and sellers.",
      "Enabled regional fiat on-ramps and auto-matching algorithms for user convenience.",
    ],
  },
  {
    index: 3,
    title: "Features",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/p2p-crypto-exchange-development-feature.webp",
    imageAlt: "P2P Crypto Exchange Features",
    points: [
      "Smart Contract Escrow Protection",
      "Reputation & Rating System for Traders",
      "Multi-Fiat Support (INR, AED, NGN, USD)",
      "Instant Trade Matching Algorithm",
      "AI-Powered Fraud Detection & Risk Flags",
      "Built-in Messaging & Dispute Resolution",
      "Crypto Wallet Integration (MetaMask, Trust Wallet)",
      "Admin Panel with Trade Monitoring",
      "P2P Trading Analytics Dashboard",
    ],
  },
  {
    index: 4,
    title: "Business Benefits",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/p2p-crypto-exchange-development-business-benefit.webp",
    imageAlt: "P2P Crypto Exchange Business Benefits",
    points: [
      "Expanded into 7+ countries within 2 quarters.",
      "Reduced fraud complaints by 80% with AI monitoring.",
      "Achieved 100% increase in user engagement due to mobile-first UX design.",
      "Enabled secure fiat-crypto trading without intermediaries.",
      "Facilitated over 250K+ verified KYC user onboardings.",
    ],
  },
  {
    index: 5,
    title: "Tech Stack",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-development-tech-stack.webp",
    imageAlt: "P2P Crypto Exchange Tech Stack",
    points: [
      "Backend: Express.js, PostgreSQL",
      "Frontend: Vue.js, Tailwind CSS",
      "Smart Contracts: Solidity, Polygon",
      "Mobile: React Native",
      "Fiat Integration: Razorpay, Stripe, Flutterwave",
      "Security: SSL Encryption, IP Whitelisting",
    ],
  },
];

const BenefitSection = ({
  index,
  title,
  description,
  imageUrl,
  imageAlt,
  points,
}) => {
  return (
    <section className=" mt-20 gap-20 items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
      {index % 2 === 0 && (
        <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            // className="rounded-lg"
            width={800}
            height={800}
          />
        </div>
      )}
      <div className="w-full space-y-4 text-center md:text-left">
        <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
          {title}
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          {points?.map((item, idx) => {
            if (item.includes(":")) {
              const [key, ...rest] = item.split(":");
              return (
                <li key={idx}>
                  <strong>{key.trim()}:</strong> {rest.join(":").trim()}
                </li>
              );
            } else {
              return <li key={idx}>{item}</li>;
            }
          })}
        </ul>
      </div>
      {index % 2 !== 0 && (
        <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            // className="rounded-lg"
            width={800}
            height={800}
          />
        </div>
      )}
    </section>
  );
};

export default function about(props) {
  let { initialData } = props;

  return (
    <div className="overflow-hidden">
      <Head>
        <title>
          P2P & OTC Crypto Exchange Platform Development Portfolio | ExchangeX
          OTC by Comfygen
        </title>
        <link rel="https://www.comfygen.com/portfolio/p2p-crypto-exchange-development" />

        <meta
          name="description"
          content=" Discover ExchangeX OTC – a custom P2P crypto exchange with smart escrow, multi-fiat integration, and global KYC. Developed by Comfygen, a leading P2P & OTC crypto exchange development company in India."
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" About comfygen.com a App and Web Development Company "
        />
        <meta
          property="og:description"
          content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs."
        />
        <meta property="og:url" content="https://www.comfygen.com/about-us" />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-09-10T07:43:51+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>

      <div className="overflow-hidden">
        <div className=" ">
          <div
            className=" w-full  bg-cover bg-right-bottom"
            style={{
              backgroundImage: `url("https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-details.webp")`,
            }}
          >
            <div className="">
              <Header />
              <div className="flex flex-col-reverse w-12/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center lg:py-40 py-8">
                <div className="w-full">
                  <div className="space-y-6">
                    <h1 className="text-[#ffff] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      ExchangeX OTC – P2P & OTC Crypto Exchange Platform
                      Development
                    </h1>
                    <p className="text-[#ffff] text-base">
                      Comfygen partnered with a fintech startup to build
                      ExchangeX OTC, a hybrid crypto exchange platform
                      supporting P2P and Over-the-Counter (OTC) trading
                      functionalities. The goal was to create a decentralized
                      yet secure environment where users can trade directly,
                      bypassing traditional intermediaries. This custom-built
                      platform empowers users with privacy, transparency, and
                      control over crypto transactions, with fiat payment
                      integrations across regions like the UAE, India, and
                      Nigeria.
                    </p>
                  </div>
                  <div className="py-10">
                    <Link href="/contact-us" passHref={true}>
                      <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center shadow-xl cursor-pointer bg-[#fff] text-slate-800 overflow-hidden">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#D0FFDA] rounded-full group-hover:w-60 group-hover:h-60 "></span>
                        <span className="relative"> TALK TO CONSULTANT</span>
                        <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:flex justify-center md:py-0 py-10">
                  <Image
                    className="object-cover "
                    src="https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/p2p-crypto-exchange-development.webp"
                    width={760}
                    height={484}
                    alt=" Efincap MLM Software"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-10 py-6 bg-gray-100">
          {benefitSections.map((section) => (
            <BenefitSection key={section.index} {...section} />
          ))}
        </div>
      </div>
    </div>
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
