import Head from 'next/head';
import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Header from '../../components/Header';
import CompanyHeroSection from '../../components/CompanyHeroSection';
import FormSec from '../../components/FormSec';
import Features from '../components/Features';
import InfomationFirst from '../components/InfomationFirst';
import InfomationSecound from '../components/InfomationSecound';
import TechStack from '../../components/TechStack';
import styles from "../components/styles.module.css"
import { MdStar, MdStarHalf } from 'react-icons/md';

export default function about(props) {
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
                <LazyLoad height={80} offset={100}>
                    <Header />
                </LazyLoad>
            </div>
            <div className="overflow-hidden">
                <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
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
                        " <span class='font-semibold text-black '>High-Speed Transactions:</span> Lightning-fast blockchain transactions with minimal latency.",
                        " <span class='font-semibold text-black '>Low Transaction Fees:</span>  Cost-efficient crypto transactions compared to traditional networks.",
                        "<span class='font-semibold text-black '>Smart Contract Functionality:</span> Enables DeFi, tokenization, and automated agreements.",
                        "<span class='font-semibold text-black '>Secure & Decentralized:</span>  Robust cryptographic security with decentralized governance.",
                        "<span class='font-semibold text-black '>Scalable Infrastructure:</span>  Supports high transaction volumes without compromising performance.",
                        "<span class='font-semibold text-black '>Staking & Rewards System:</span> Encourages long-term holders with incentivized staking.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-feature-image.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        " <span class='font-semibold text-black '>Security & Fraud Prevention:</span> Ensuring a tamper-proof, secure blockchain ecosystem.",
                        "<span class='font-semibold text-black '>Scalability:</span> Building a network that can handle high transaction loads efficiently.",
                        "<span class='font-semibold text-black '>User Adoption & Liquidity:</span>  Encouraging market participation and exchange listings.",
                        "<span class='font-semibold text-black '>Regulatory Compliance:</span>  Navigating evolving crypto regulations for seamless global operations.",
                        "<span class='font-semibold text-black '>Interoperability:</span>  Enabling seamless integration with other blockchain networks and financial systems."
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-challanges-image.webp"
                />
                
                <InfomationSecound
                    heading="Solution"
                    points={[
                        "Developed NASDAC Crypto Coin with an advanced blockchain architecture for enhanced performance.",
                        "Integrated smart contracts, secure consensus mechanisms, and scalable infrastructure.",
                        "Offers a fast, low-cost, and highly secure cryptocurrency solution.",
                        "Designed to meet the needs of both institutional and retail investors.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-solution-image..webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "<span class='font-semibold text-black '>Enhanced Security:</span>  Advanced cryptographic algorithms ensure transaction safety.",
                        "<span class='font-semibold text-black '>Global Accessibility:</span>  Seamless cross-border payments and asset transfers.",
                        "<span class='font-semibold text-black '>Lower Costs:</span>  Significantly reduced transaction fees compared to traditional banking.",
                        "<span class='font-semibold text-black '>Decentralized Governance:</span>  Transparent decision-making through blockchain voting mechanisms.",
                        "<span class='font-semibold text-black '>Revenue Opportunities:</span>  Staking, tokenization, and DeFi integration create new financial opportunities."
                    ]}
                    imageSrc="https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-benifits-image..webp"
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

                <FormSec />
            </div>
        </div>
    )
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