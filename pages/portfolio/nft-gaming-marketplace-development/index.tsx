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
        <title>NFT Gaming Marketplace Development | NFT Gaming Marketplace Clone Script</title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/portfolio/nft-gaming-marketplace-development"
        />
        <meta
          name="description"
          content=" Comfygen specializes in NFT gaming marketplace development, delivering Play-to-Earn (P2E) integration, in-game asset tokenization, and multi-chain compatibility. Our solution enables seamless buying, selling, and trading of in-game NFTs, ensuring a secure and immersive gaming experience."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT Gaming Marketplace Development | NFT Gaming Marketplace Clone Script"
        />
        <meta
          property="og:description"
          content=" Comfygen specializes in NFT gaming marketplace development, delivering Play-to-Earn (P2E) integration, in-game asset tokenization, and multi-chain compatibility. Our solution enables seamless buying, selling, and trading of in-game NFTs, ensuring a secure and immersive gaming experience."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/portfolio/nft-gaming-marketplace-development"
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
            heading="GamezVerse – NFT Gaming Marketplace Development"
            subhead=""
            ptag="Comfygen successfully developed GamezVerse, a next-generation NFT gaming marketplace that allows gamers, developers, and creators to securely trade in-game assets, characters, skins, and virtual land. As a top NFT gaming marketplace development company, we created a scalable and high-performance P2E marketplace that supports cross-chain compatibility and Play-to-Earn (P2E) integration."
            ptag1="Our client wanted an NFT gaming marketplace clone script to launch a fully functional platform similar to top gaming NFT marketplaces. We developed a customized solution with blockchain-based ownership verification, multi-wallet support, and an interactive gaming asset exchange."
            imageSrc="https://www.comfygen.com/image/hero-image-nft-gaming-marketplace-development.webp"
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
            "High Gas Fees – Integrated Layer-2 scaling (Polygon, Immutable X) to reduce costs.",
            "Cross-Platform Compatibility – Developed an NFT gaming marketplace supporting Ethereum, BSC, and Solana.",
            "Security & Fraud Prevention – Implemented AI-driven NFT authentication to eliminate duplicate NFTs.",
            "Liquidity & Trading Speed – Designed a high-speed NFT trading engine with real-time order matching.",
          ]}
          imageSrc="https://www.comfygen.com/image/challenges-we-overcame-nft-gaming-marketplace-development.webp"
          imagePosition="left"
        />
        <Features
          heading="Features"
          points={[
            "Cross-Game NFT Asset Trading – Buy, sell, and auction in-game NFTs across multiple games.",
            "NFT Gaming Marketplace Clone Script – Pre-built customizable NFT gaming marketplace solution.",
            "Play-to-Earn (P2E) Integration – Smart contracts enabling gamers to monetize in-game achievements.",
            "Blockchain Security & Ownership – Decentralized asset verification for gaming NFTs.",
            "One-Click NFT Minting – Simplified asset tokenization for game developers.",
            "Multi-Currency Support – Payments in ETH, MATIC, BNB, and Fiat.",
            "Decentralized Storage – IPFS-backed metadata security for NFT assets.",
          ]}
          imageSrc="https://www.comfygen.com/image/features-nft-gaming-marketplace-development.webp"
        />

        <Features
          heading="Solution"
          points={[
            "Developed a feature-rich NFT gaming marketplace from scratch and provided an NFT gaming marketplace clone script for faster deployment.",
            "Built cross-chain compatibility, enabling seamless transactions across multiple gaming ecosystems.",
            "Implemented anti-cheat mechanisms and NFT duplication prevention.",
            "Provided an admin dashboard with game integration APIs for easy management.",
          ]}
          imageSrc="https://www.comfygen.com/image/solution-nft-gaming-marketplace-development.webp"
          imagePosition="left"
        />
        <Features
          heading="Business Benefits"
          points={[
            "Monetization for Gamers – Enabled users to earn real income through Play-to-Earn (P2E) games.",
            "Revenue Growth for Developers – Game studios could monetize in-game items via NFT sales.",
            "Decentralized Ownership – Players own and trade in-game assets independently.",
            "Scalability & High-Speed Transactions – Optimized for millions of transactions with Layer-2 support.",
            "Faster Market Expansion – Custom NFT gaming marketplace clone script enabled rapid deployment.",
          ]}
          imageSrc="https://www.comfygen.com/image/business-benefits-nft-gaming-marketplace-development.webp"
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
                Why Choose Comfygen for NFT Gaming Marketplace Development?
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
                Felipe Rojas
                </h3>
                <p className="text-[#5556D1] md:text-base text-sm font-medium ml-4">
                Santiago, Chile
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
                    "Comfygen built our NFT gaming marketplace with cutting-edge blockchain technology. Their NFT gaming marketplace clone script allowed us to launch faster, and the Play-to-Earn features are driving massive user engagement!"
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
export async function getServerSideProps({ req, res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
