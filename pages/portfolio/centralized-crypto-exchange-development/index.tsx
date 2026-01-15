import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import Header from '../../../components/Newcomponet/layout/Header';
const benefitSections = [
  {
    index: 1,
    title: "Challenges",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-development-challanges.webp",
    imageAlt: "Crypto Exchange Development Challenges",
    points: [
      "Multi-Asset Integration: Ensuring smooth integration of Bitcoin, Ethereum, and other altcoins into a unified trading engine.",
      "High-Frequency Trading Performance: Designing a backend architecture that supports millisecond-level order execution under heavy load.",
      "KYC & Regulatory Compliance: Enabling seamless onboarding while staying compliant with KYC/AML guidelines across different jurisdictions.",
      "Security Concerns: Implementing multi-layer security architecture, including DDoS protection, anti-phishing modules, and cold wallet storage.",
      "Real-Time Order Matching: Developing a powerful trade matching engine to handle dynamic market conditions and reduce latency.",
    ],
  },
  {
    index: 2,
    title: "Solution",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-development-solution.webp",
    imageAlt: "Crypto Exchange Solutions",
    points: [
      "Created a scalable backend using Node.js, Redis, and RabbitMQ for asynchronous operations.",
      "Integrated advanced charting tools, stop-limit order options, and real-time trade history features.",
      "Built a custom KYC module with AI-powered document verification for global compliance.",
      "Developed a mobile app using Flutter to allow cross-platform trading with full wallet features.",
      "Designed a sleek, intuitive UI/UX that caters to both novice and professional traders.",
    ],
  },
  {
    index: 3,
    title: "Features",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-development-feature.webp",
    imageAlt: "Crypto Exchange Features",
    points: [
      "Spot, Margin & Futures Trading",
      "Secure User Wallets (Hot & Cold)",
      "AI-Based KYC & Identity Verification",
      "Order Book with Real-Time Market Depth",
      "Liquidity Management Tools",
      "Trading Bot API Integration",
      "Two-Factor Authentication & Biometric Login",
      "Multi-Currency Support with Auto Conversion",
      "Admin Dashboard for Monitoring & Control",
    ],
  },
  {
    index: 4,
    title: "Business Benefits",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-development-business-benifit.webp",
    imageAlt: "Crypto Exchange Business Benefits",
    points: [
      "Achieved 10,000+ DAUs (Daily Active Users) within the first 3 months post-launch.",
      "Enabled faster trading with <100ms latency for market orders.",
      "Reduced onboarding time by 50% with intelligent KYC automation.",
      "Increased user trust via advanced security and real-time monitoring.",
      "Supported 24/7 trading with seamless fiat-crypto gateway integration.",
    ],
  },
  {
    index: 5,
    title: "Tech Stack",
    description: "",
    imageUrl:
      "https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-development-tech-stack.webp",
    imageAlt: "Crypto Exchange Tech Stack",
    points: [
      "Backend: Node.js, MongoDB, Redis",
      "Frontend: React.js, Next.js",
      "Mobile App: Flutter",
      "Blockchain: Ethereum, BNB Chain",
      "Security: Cloudflare, JWT, Firebase Auth",
      "Hosting: AWS, Kubernetes",
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
            const [key, ...rest] = item.split(":");
            return (
              <li key={idx}>
                <strong>{key.trim()}:</strong> {rest.join(":").trim()}
              </li>
            );
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
          Centralized Crypto Exchange Development Case Study | Comfygen
        </title>
        <link
          rel="canonical"
          href=" https://www.comfygen.com/portfolio/centralized-crypto-exchange-development"
        />
        <meta
          name="description"
          content=" Explore how Comfygen developed Crypto Exchange – a secure and scalable centralized crypto exchange platform. See features, challenges, solutions, and results delivered by India's top crypto exchange development company."
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
                      Centralized Crypto Exchange Platform Development
                    </h1>
                    <p className="text-[#ffff] text-base">
                      Comfygen developed a Crypto Exchange Platform, a powerful
                      and secure centralized cryptocurrency exchange designed
                      for high-volume trading. Our client envisioned a platform
                      where users could trade multiple cryptocurrencies with
                      advanced trading tools, real-time data, and
                      enterprise-grade security. With the growing demand for
                      secure and scalable exchange solutions, the client
                      partnered with us to launch a robust trading
                      infrastructure that supports spot, margin, and futures
                      trading with a seamless user experience.
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
                    src="https://www.comfygen.com/comfygen-images/cryptocurrency-exchange-development/centralized-crypto-exchange-platform-dev.webp"
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
