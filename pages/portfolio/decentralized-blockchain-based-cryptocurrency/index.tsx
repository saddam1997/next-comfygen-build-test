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

export default function about(props) {
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
      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="overflow-hidden">
        <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
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
            "<span class='font-semibold'>Decentralized & Secure:</span>  No central authority, ensuring full transparency and security.",
            "<span class='font-semibold'>Ultra-Fast Transactions:</span>  High-speed blockchain transactions with minimal latency.",
            "<span class='font-semibold'>Low Transaction Fees:</span>  Efficient cost structures reduce overhead compared to traditional systems.",
            "<span class='font-semibold'>Smart Contracts & Governance:</span>  Customizable contracts for DeFi applications and on-chain governance.",
            "<span class='font-semibold'>Scalability & Interoperability:</span>  Supports high transaction volumes with seamless blockchain integrations.",
            "<span class='font-semibold'>Staking & Yield Rewards:</span>  Encourages long-term participation with incentive-based staking.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-features-portfolio-image.webp"
        />

        <InfomationFirst
          heading="Challenge"
          points={[
            "<span class='font-semibold'> Ensuring Security & Fraud Prevention: </span> Implementing advanced cryptographic algorithms to mitigate risks.",
            "<span class='font-semibold'> Scalability & Network Efficiency: </span> Developing a robust framework to handle increasing transaction loads.",
            "<span class='font-semibold'> User Adoption & Market Expansion: </span> Strategizing global adoption with strong marketing and utility.",
            "<span class='font-semibold'> Compliance & Regulatory Considerations: </span> Ensuring adherence to regional and international crypto regulations.",
            "<span class='font-semibold'> Cross-Blockchain Compatibility: </span> Enabling integration with multiple blockchain ecosystems for wider adoption.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-challanges-portfolio-image.webp"
        />

        <InfomationSecound
          heading="Solution"
          points={[
            "Developed Croston using an advanced decentralized architecture to address key challenges.",
            "Integrated high-performance smart contracts and an optimized consensus mechanism for efficiency.",
            "Designed a user-friendly ecosystem catering to both institutional and retail users.",
            "Ensures scalability, speed, and high security for seamless digital asset transactions.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-solution-portfolio-image.webp"
        />

        <InfomationFirst
          heading="Business Benefits"
          points={[
            "<span class='font-semibold'>Enhanced Security: </span> Fully decentralized cryptographic security ensuring trustless transactions.",
            "<span class='font-semibold'>Global Reach & Accessibility: </span> It facilitates international trade and financial transactions with ease.",
            "<span class='font-semibold'>Lower Operational Costs: </span> Significantly reduced transaction and processing fees.",
            "<span class='font-semibold'>Decentralized Decision-Making: </span> Community-driven governance model promoting transparency.",
            "<span class='font-semibold'>New Revenue Streams: </span> Staking, DeFi integrations, and asset tokenization drive additional opportunities.",
          ]}
          imageSrc="https://www.comfygen.com/image/decentralized-blockchain-based-cryptocurrency-business-benefits-portfolio-image.webp"
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
                    <MdStar size={24} /> <MdStar size={24} />
                    <MdStar size={24} />
                    <MdStar size={24} /> <MdStarHalf size={24} />
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
