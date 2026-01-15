import Head from "next/head";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import dynamic from 'next/dynamic';
import Header from '../../../components/Newcomponet/layout/Header';
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






import styles from "../components/styles.module.css";
import { MdStar, MdStarHalf } from "react-icons/md";
import JSON_DATA from "./metaverse.json";

export default function about(props) {
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => setTalkToExpertModal(true);
  const closeModal = () => setTalkToExpertModal(false);

  let { initialData } = props;
  return (
    <div className="overflow-hidden">
      <Head>
        <title>NFT Real Estate Marketplace Development | Tokenized Real Estate Platform</title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/portfolio/nft-real-estate-marketplace-development"
        />
        <meta
          name="description"
          content="Explore our NFT real estate marketplace development project featuring property tokenization, smart contract-powered ownership transfers, metaverse land trading, and secure blockchain integration. Build your own real estate NFT platform with Comfygen."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT Real Estate Marketplace Development | Tokenized Real Estate Platform"
        />
        <meta
          property="og:description"
          content="Explore our NFT real estate marketplace development project featuring property tokenization, smart contract-powered ownership transfers, metaverse land trading, and secure blockchain integration. Build your own real estate NFT platform with Comfygen."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/portfolio/nft-real-estate-marketplace-development"
        />
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
      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="overflow-hidden">
        <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
          <CompanyHeroSection
            heading="DeepEstate – NFT Real Estate Marketplace Developmentp"
            subhead=""
            ptag="Comfygen successfully developed DeepEstate, a cutting-edge NFT real estate marketplace that allows users to buy, sell, and trade tokenized real estate assets securely. As a leading NFT real estate marketplace development company, we designed a fully decentralized platform to tokenize properties, enabling fractional ownership, metaverse land trading, and real-world real estate investments via blockchain technology."
            ptag1="With the rise of NFT real estate marketplace development, our client sought a secure and scalable solution to facilitate digital property transactions, reduce paperwork, and enhance global investment accessibility."
            imageSrc="https://www.comfygen.com/image/hero-image-nft-real-estate-marketplace-development.webp"
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
          heading="Challenge"
          points={[
            "<b>Legal & Compliance Issues – </b> Developed a smart contract-based KYC system to meet real estate regulations.",
            "<b>User Adoption Barriers  </b>– Designed an intuitive UI/UX to make NFT real estate marketplace usage simple for non-crypto users.",
            "<b>High Gas Fees & Slow Transactions – </b> Integrated Layer-2 solutions like Polygon for cost-efficient transactions.",
            "<b>Security & Trust Issues – </b> Implemented blockchain-based escrow and decentralized identity verification to eliminate fraud risks.",
          ]}
          imageSrc="https://www.comfygen.com/image/challenges-we-overcame-nft-real-estate-marketplace-development.webp"
          imagePosition="left"
        />
        <Features
          heading="Features"
          points={[
            "<b>Tokenized Real Estate Platform – </b> A next-gen NFT real estate marketplace for trading real-world and virtual properties.",
            "<b>Fractional Ownership System – </b> Smart contract-powered fractional property investment.",
            "<b>Metaverse Land Integration –  </b>Seamless buying & selling of virtual properties in Decentraland, Sandbox, and other metaverses.",
            "<b>Automated Smart Contracts –  </b>Secure and transparent property ownership transfers.",
            "<b>KYC & Legal Compliance – </b> Integrated identity verification for fraud prevention.",
            "<b>NFT Auction & Rental Marketplace –  </b>Dynamic listing & bidding system for digital properties.",
            "<b>Multi-Wallet & Payment Gateway – </b> Supports crypto and fiat transactions for wider adoption.",
          ]}
          imageSrc="https://www.comfygen.com/image/features-nft-real-estate-marketplace-development.webp"
        />

        <Features
          heading="Solution"
          points={[
            "Built a scalable NFT real estate marketplace on Ethereum, Polygon, and Solana.",
            "Developed custom smart contracts for secure property transactions & rentals.",
            "Integrated real-time NFT trading engine with instant settlement.",
            "Provided a low-code admin panel for real estate firms to tokenize assets easily.",
          ]}
          imageSrc="https://www.comfygen.com/image/solution-nft-real-estate-marketplace-development.webp"
          imagePosition="left"
        />
        <Features
          heading="Business Benefits"
          points={[
            "<span class='font-semibold'>Global Real Estate Investment –  </span>Enabled borderless property transactions using blockchain.",
            "<span class='font-semibold'>Enhanced Security –  </span>Ensured fraud-proof transactions via NFT real estate marketplace development.",
            "<span class='font-semibold'>Reduced Transaction Costs –  </span>Eliminated traditional middlemen fees.",
            "<span class='font-semibold'>New Revenue Model –  </span>Empowered real estate firms to monetize assets via NFT tokenization.",
            "<span class='font-semibold'>Faster Ownership Transfers – </span> Reduced property sale time from months to minutes.",
          ]}
          imageSrc="https://www.comfygen.com/image/business-benefits-nft-real-estate-marketplace-development.webp"
        />
        <TechStack
          title="Our Edgy Tech-Stacks Use for Dating app development"
          description="The only focus is not the engagement, but building a highly-secured and robust web or application. For strong Dating app development, some edgy tech stacks are being used."
          filterCategory={["crypto"]}
        />

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                Why Choose Comfygen for NFT Real Estate Marketplace Development?
                </h2>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
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

        <section className="bg-[#F3F4F6] lg:py py-10">
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
                Henrik Olsen
                </h3>
                <p className="text-[#5556D1] md:text-base text-sm font-medium ml-4">
                Copenhagen, Denmark
                </p>
              </div>
              <div className="space-y-2 mt-4">
                <div className="">
                  <span className="text-[#FFB600] flex ">
                    <MdStar size={24} /> <MdStar size={24} />
                    <MdStar size={24} />
                    <MdStar size={24} /> <MdStarHalf size={24} />
                  </span>
                </div>
                <div>
                  <p className="md:text-base text-sm text-black">
                    "Comfygen’s expertise in NFT real estate marketplace development transformed our business. Their custom-built NFT real estate marketplace provides seamless property tokenization, boosting transparency and efficiency!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
