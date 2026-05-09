import Head from "next/head";
import React, { useState } from "react";


import dynamic from 'next/dynamic';

import CompanyHeroSection from '../../../components/Newcomponet/portfolio/CompanyHeroSection';
const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);
const Features = dynamic(() => import("../../../components/Newcomponet/portfolio/Features"),
  { loading: loader, ssr: true }
);
const TechStack = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);



const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

import { Star } from 'lucide-react';
import { StarHalf } from 'lucide-react';
import styles from "../components/styles.module.css";


export default function about(props:any) {
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => setTalkToExpertModal(true);
  const closeModal = () => setTalkToExpertModal(false);

  let { initialData } = props;
  return (
    <div className="overflow-hidden">
      <Head>
        <title>decentralized blockchain-based cryptocurrency</title>
        <link rel="canonical" href="https://www.comfygen.com/portfolio" />
        <meta
          name="description"
          content="Transform your vision into reality with Comfygen’s blockchain-based cryptocoin development services. We build next-generation cryptocurrencies with advanced features like staking, governance, smart contracts, and secure wallets, tailored to meet the needs of startups, enterprises, and investors in the evolving digital economy."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Custom Blockchain-Based Cryptocoin Development Solutions"
        />
        <meta
          property="og:description"
          content="Transform your vision into reality with Comfygen’s blockchain-based cryptocoin development services. We build next-generation cryptocurrencies with advanced features like staking, governance, smart contracts, and secure wallets, tailored to meet the needs of startups, enterprises, and investors in the evolving digital economy."
        />
        <meta property="og:url" content="https://www.comfygen.com/portfolio" />
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
     
      <div className="overflow-hidden ">
        <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)]">
          <CompanyHeroSection
            heading="Croston"
            subhead="decentralized blockchain-based cryptocurrency"
            ptag="Successfully developed and deployed Croston, a fully decentralized blockchain-based cryptocurrency designed for secure, scalable, and high-speed transactions. Croston provides a trustless, transparent, and efficient digital asset solution for both businesses and individual users. Featuring advanced smart contract capabilities and an innovative consensus mechanism, it ensures seamless transactions and governance within a next-generation financial ecosystem."
            imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-hero--portfolio-image.webp"
            buttonText="Talk To Consultant"
            openModal={openModal}
            closeModal={closeModal}
            talkToExpertModal={talkToExpertModal}
            buttonLink="/portfolio"
            imageHeight={423}
            imageWidth={640}
          />
        </div>

        <Features
          heading="Features:"
          points={[
            "<b>Decentralized & Secure: </b>  No central authority, ensuring full transparency and security.",
            "<b>Ultra-Fast Transactions: </b>  High-speed blockchain transactions with minimal latency.",
            "<b>Low Transaction Fees: </b>  Efficient cost structures reduce overhead compared to traditional systems.",
            "<b>Smart Contracts & Governance: </b>  Customizable contracts for DeFi applications and on-chain governance.",
            "<b>Scalability & Interoperability: </b>  Supports high transaction volumes with seamless blockchain integrations.",
            "<b>Staking & Yield Rewards: </b>  Encourages long-term participation with incentive-based staking.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-features-portfolio-image.webp"
        />

        <Features
          heading="Challenge"
          points={[
            "<b> Ensuring Security & Fraud Prevention: </b> Implementing advanced cryptographic algorithms to mitigate risks.",
            "<b> Scalability & Network Efficiency: </b> Developing a robust framework to handle increasing transaction loads.",
            "<b> User Adoption & Market Expansion: </b> Strategizing global adoption with strong marketing and utility.",
            "<b> Compliance & Regulatory Considerations: </b> Ensuring adherence to regional and international crypto regulations.",
            "<b> Cross-Blockchain Compatibility: </b> Enabling integration with multiple blockchain ecosystems for wider adoption.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-challanges-portfolio-image.webp"
          imagePosition="left"
        />

        <Features
          heading="Solution"
          points={[
            "Developed Croston using an advanced decentralized architecture to address key challenges.",
            "Integrated high-performance smart contracts and an optimized consensus mechanism for efficiency.",
            "Designed a user-friendly ecosystem catering to both institutional and retail users.",
            "Ensures scalability, speed, and high security for seamless digital asset transactions.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-solution-portfolio-image.webp"
        />

        <Features
          heading="Business Benefits"
          points={[
            "<b>Enhanced Security: </b> Fully decentralized cryptographic security ensuring trustless transactions.",
            "<b>Global Reach & Accessibility: </b> It facilitates international trade and financial transactions with ease.",
            "<b>Lower Operational Costs: </b> Significantly reduced transaction and processing fees.",
            "<b>Decentralized Decision-Making: </b> Community-driven governance model promoting transparency.",
            "<b>New Revenue Streams: </b> Staking, DeFi integrations, and asset tokenization drive additional opportunities.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-business-benefits-portfolio-image.webp"
          imagePosition="left"
        />

        <TechStack
          title="Development Technologies We Use"
          description="We use cutting-edge technologies for blockchain solution development. There is no scope we leave building the best blockchain applications."
          filterCategory={["crypto"]}
        />

        <section className="bg-[#fff] lg:py py-10">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto space-y-6">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                What Our Client Says
              </h2>
              <p className="xl:text-base text-sm text-black">
                500+ Reviews Of Delighted Clients with clutch{" "}
                <span className="text-[#FFB600]">4.5 Star</span> Rating
              </p>
            </div>

            <div>
              <div className={styles.testimonial}>
                <h3 className="lg:text-xl text-lg text-[#212121] font-medium ml-4">
                  John Anderson – Edinburgh
                </h3>
                <p className="text-[#5556D1] md:text-base text-sm font-medium ml-4">
                  Scotland, UK
                </p>
              </div>
              <div className="space-y-2 mt-4">
                <div className="">
                  <span className="text-[#FFB600] flex ">
                    <Star size={24} /> <Star size={24} />
                    <Star size={24} />
                    <Star size={24} /> <StarHalf size={24} />
                  </span>
                </div>
                <div>
                  <p className="md:text-base text-sm text-black">
                    "Croston has set a new benchmark for decentralized
                    cryptocurrencies. It's low fees and lightning-fast
                    transactions have given us a major competitive edge."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
       <BlogSection initialData={initialData} />
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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
