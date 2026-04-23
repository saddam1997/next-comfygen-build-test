import Head from 'next/head';
import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';

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


const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);








import styles from "../components/styles.module.css"
import { MdStar, MdStarHalf } from 'react-icons/md';

export default function about(props:any) {
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => setTalkToExpertModal(true);
    const closeModal = () => setTalkToExpertModal(false);

    let { initialData } = props;
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Custom Blockchain-Based Cryptocoin Development Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio" />
                <meta name="description" content="Transform your vision into reality with Comfygen’s blockchain-based cryptocoin development services. We build next-generation cryptocurrencies with advanced features like staking, governance, smart contracts, and secure wallets, tailored to meet the needs of startups, enterprises, and investors in the evolving digital economy." />
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Custom Blockchain-Based Cryptocoin Development Solutions" />
                <meta property="og:description" content="Transform your vision into reality with Comfygen’s blockchain-based cryptocoin development services. We build next-generation cryptocurrencies with advanced features like staking, governance, smart contracts, and secure wallets, tailored to meet the needs of startups, enterprises, and investors in the evolving digital economy." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio" />
                <meta property="og:site_name" content="Comfygen" />
                <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
                <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
                <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@comfygentech" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="8 minutes" />
            </Head>
            <div className="">
           
                   {/* <Header /> */}
              
            </div>
            <div className="overflow-hidden">
                <div className="lg:py-[7rem] lg:mt-[110px] py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="NASDAC Crypto Coin "
                        subhead="Blockchain-based Cryptocoin Development"
                        ptag="Successfully developed and deployed NASDAC Crypto Coin, a next-generation cryptocurrency built on a robust and scalable blockchain network. The platform enables secure, fast, and cost-efficient transactions, featuring advanced functionalities such as staking, governance, and smart contracts. Designed to serve traders, investors, and enterprises, it offers a comprehensive decentralized financial ecosystem."
                        imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-hero-image.webp"
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
                    heading="Features"
                    points={[
                        " <b>High-Speed Transactions:</b> Lightning-fast blockchain transactions with minimal latency.",
                        " <b>Low Transaction Fees:</b>  Cost-efficient crypto transactions compared to traditional networks.",
                        "<b>Smart Contract Functionality:</b> Enables DeFi, tokenization, and automated agreements.",
                        "<b>Secure & Decentralized:</b>  Robust cryptographic security with decentralized governance.",
                        "<b>Scalable Infrastructure:</b>  Supports high transaction volumes without compromising performance.",
                        "<b>Staking & Rewards System:</b> Encourages long-term holders with incentivized staking.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-feature-image.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        " <b>Security & Fraud Prevention:</b> Ensuring a tamper-proof, secure blockchain ecosystem.",
                        "<b>Scalability:</b> Building a network that can handle high transaction loads efficiently.",
                        "<b>User Adoption & Liquidity:</b>  Encouraging market participation and exchange listings.",
                        "<b>Regulatory Compliance:</b>  Navigating evolving crypto regulations for seamless global operations.",
                        "<b>Interoperability:</b>  Enabling seamless integration with other blockchain networks and financial systems."
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-challanges-image.webp"
                      imagePosition = "left"
                />
                
                <Features
                    heading="Solution"
                    points={[
                        "Developed NASDAC Crypto Coin with an advanced blockchain architecture for enhanced performance.",
                        "Integrated smart contracts, secure consensus mechanisms, and scalable infrastructure.",
                        "Offers a fast, low-cost, and highly secure cryptocurrency solution.",
                        "Designed to meet the needs of both institutional and retail investors.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-solution-image..webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "<b>Enhanced Security:</b>  Advanced cryptographic algorithms ensure transaction safety.",
                        "<b>Global Accessibility:</b>  Seamless cross-border payments and asset transfers.",
                        "<b>Lower Costs:</b>  Significantly reduced transaction fees compared to traditional banking.",
                        "<b>Decentralized Governance:</b>  Transparent decision-making through blockchain voting mechanisms.",
                        "<b>Revenue Opportunities:</b>  Staking, tokenization, and DeFi integration create new financial opportunities."
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-benifits-image..webp"
                    imagePosition="left"
                />

                <TechStack
                    title="Development Technologies We Use"
                    description="We use cutting-edge technologies for blockchain solution development. There is no scope we leave building the best blockchain applications."
                    filterCategory={["crypto"]}
                />


                <section className='bg-[#fff] lg:py py-10'>
                    <div className='2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto space-y-6'>
                        <div className='space-y-2'>
                            <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                                What Our Client Says
                            </h2>
                            <p className='xl:text-base text-sm text-black'>500+ Reviews Of Delighted Clients with clutch <span className='text-[#FFB600]'>4.5 Star</span> Rating</p>
                        </div>

                        <div>
                        <div className={styles.testimonial}>
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>William Johnson</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Chicago, IL, USA</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"This cryptocurrency project exceeded our expectations! The seamless integration and high-speed transactions make it a game-changer in the crypto space."</p>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                </section>
            </div>
             <BlogSection initialData={initialData} />
        </div>
    )
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
