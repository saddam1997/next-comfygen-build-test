import Head from "next/head";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import Header from "../../components/Header";
import CompanyHeroSection from "../../components/CompanyHeroSection";
import FormSec from "../../components/FormSec";
import Features from "../components/Features";
import InfomationFirst from "../components/InfomationFirst";
import InfomationSecound from "../components/InfomationSecound";
import TechStack from "../../components/TechStack";
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
        <title>Blockchain-Based Metaverse Gaming Development Portfolio | Web3 Game Solutions</title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/portfolio/metaverse-gaming-development"
        />
        <meta
          name="description"
          content="Explore our portfolio of blockchain-based Metaverse gaming projects. We build immersive Web3 games powered by AI, NFTs, and smart contracts for next-gen digital experiences."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Blockchain-Based Metaverse Gaming Development Portfolio | Web3 Game Solutions"
        />
        <meta
          property="og:description"
          content="Explore our portfolio of blockchain-based Metaverse gaming projects. We build immersive Web3 games powered by AI, NFTs, and smart contracts for next-gen digital experiences."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/portfolio/metaverse-gaming-development"
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
            heading="Blockchain-Based Metaverse Gaming Development"
            subhead=""
            ptag="At Comfygen, a leading Metaverse Development Company, we developed a futuristic, decentralized gaming Metaverse with a blockchain-powered economy, NFT-based assets, and Play-to-Earn (P2E) mechanisms. Our team integrated Solana smart contracts, DeFi mechanics, and an NFT marketplace to enhance the gaming experience, allowing players to own, trade, and explore digital assets in a fully immersive space economy."
            imageSrc="https://www.comfygen.com/image/hero-section-metaverse-gaming-development.webp"
            buttonText="Talk To Consultant"
            openModal={openModal}
            closeModal={closeModal}
            talkToExpertModal={talkToExpertModal}
            buttonLink="/portfolio"
            imageHeight={423}
            imageWidth={640}
          />
        </div>
        <InfomationFirst
          heading="Features We Developed"
          points={[
            " <span class='font-semibold'>NFT-Based Asset Ownership – </span> Players can buy, sell, and upgrade NFT-based spaceships, planets, and land.",
            " <span class='font-semibold'>Solana-Powered Play-to-Earn Economy –</span>  Seamless integration of ATLAS & POLIS tokens for in-game transactions.",
            " <span class='font-semibold'>Decentralized DAO Governance – </span> Players gain voting rights to influence the game’s economy and policies.",
            " <span class='font-semibold'>High-Fidelity Game Environment –</span>  Developed with Unreal Engine 5 for cinematic graphics, real-world physics, and AI-driven NPC interactions.",
            " <span class='font-semibold'>Smart Contract-Driven Trading System – </span> Secure and transparent NFT transactions powered by Solana Blockchain."
          ]}
          imageSrc="https://www.comfygen.com/image/features-metaverse-gaming-development.webp"
        />
        <Features
          heading="Challenges We Solved"
          points={[
            "<span class='font-semibold'>High-Frequency Transactions –  </span> Integrated Solana Layer-2 scaling for ultra-fast transactions with low gas fees.",
            "<span class='font-semibold'>Security in NFT Trading – </span>  Built fraud-resistant smart contracts to ensure safe asset ownership and prevent exploits.",
            "<span class='font-semibold'>Complex User Onboarding – </span>  Designed a user-friendly Web3 wallet system for seamless crypto transactions and NFT management.",
            
          ]}
          imageSrc="https://www.comfygen.com/image/challenges-we-overcame-metaverse-gaming-development.webp"
        />

        <InfomationFirst
          heading="Our Metaverse Development Solutions"
          points={[
            "<span class='font-semibold'>Blockchain-Powered Economy – </span> Created a self-sustaining in-game economy with NFT staking & DeFi integrations.",
            "<span class='font-semibold'>Custom Game Mechanics –</span> Developed real-time space exploration, fleet management, and combat features.",
            "<span class='font-semibold'>Secure NFT Marketplace –</span>  Built a decentralized exchange for seamless in-game asset trading.",
          ]}
          imageSrc="https://www.comfygen.com/image/solution-metaverse-gaming-development.webp"
        />
        <InfomationSecound
          heading="Business Benefits"
          points={[
            "<span class='font-semibold'>Revenue Generation – </span> Enabled P2E model, NFT asset sales, and in-game transactions for sustainable earnings.",
            "<span class='font-semibold'>Decentralized Ownership – </span> Players own, trade, and monetize their assets with full blockchain transparency.",
            "<span class='font-semibold'>High Engagement & Retention – </span> Strategic gameplay, real-world rewards, and community-driven governance enhance user retention.",
          ]}
          imageSrc="https://www.comfygen.com/image/business-benefits-metaverse-gaming-development.webp"
        />
<TechStack
          title="Technology Stack: Pharmacy Chain App"
          description="Our team of expert developers used the latest technologies to build a robust and scalable medicine delivery platform."
          filterCategory={["crypto"]}
        />
             <section className="lg:py-16 py-10 bg-[#fff]">
                  <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                    <div className="space-y-4 text-center">
                      <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                        <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                        Why Choose Comfygen for Metaverse Gaming Development?
                        </h2>
                      </div>
                      <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
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


        
        <section className="bg-[#F5F5F9] lg:py py-10">
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
                Jakub Nowak
                </h3>
                <p className="text-[#5556D1] md:text-base text-sm font-medium ml-4">
                Warsaw, Poland
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
                    "Thanks to Comfygen’s Metaverse Development Services, We are now a leading Play-to-Earn Metaverse with a scalable, secure, and blockchain-powered economy. Their expertise in NFT integration, Web3 development, and decentralized Metaverse solutions helped us launch a next-gen blockchain gaming experience!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FormSec />
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
