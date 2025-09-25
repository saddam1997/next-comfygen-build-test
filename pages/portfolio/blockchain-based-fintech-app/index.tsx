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
                <title>Blockchain-Based FinTech App Development | Secure & Scalable Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/blockchain-based-fintech-app" />
                <meta name="description" content="Looking for a Blockchain-based FinTech application development company? We build secure, scalable finance apps using smart contracts, DeFi, AI-powered and multilayered security." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Blockchain-Based FinTech App Development | Secure & Scalable Solutions" />
                <meta property="og:description" content="Looking for a Blockchain-based FinTech application development company? We build secure, scalable finance apps using smart contracts, DeFi, AI-powered and multilayered security." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/blockchain-based-fintech-app" />
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
                        heading="Blockchain-Based FinTech Applications"
                        subhead=""
                        ptag="Our client required a secure and transparent Blockchain-based FinTech application development solution to enhance financial transactions, ensure data integrity, and improve transaction efficiency. As a top-rated custom FinTech mobile app development company, we built a decentralized and tamper-proof platform that integrates smart contracts, digital asset management, and real-time transaction processing."
                        imageSrc="https://www.comfygen.com/image/hero-image-blockchain-based-fintech-app.webp"
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
                        " <span class='font-semibold text-black '>Decentralized Finance (DeFi) Solutions:</span>  Smart contract automation for financial operations.",
                        " <span class='font-semibold text-black '>Real-Time & Immutable Transactions:</span>   Transparent and secure transaction records on the blockchain.",
                        "<span class='font-semibold text-black '>Multi-Signature Authentication:</span> Enhanced security for financial transactions.",
                        "<span class='font-semibold text-black '>AI-Powered Risk Assessment: </span> Fraud detection and risk evaluation in real-time.",
                        "<span class='font-semibold text-black '>  Cross-Border Payments:</span> Instant and low-cost international transactions using blockchain technology.",
                        "<span class='font-semibold text-black '>Tokenization & Digital Asset Management: </span> Secure storage and transfer of digital assets.",
                        "<span class='font-semibold text-black '>Regulatory Compliance Integration:</span>  KYC, AML, and GDPR compliance for secure transactions.",
                        "<span class='font-semibold text-black '>Web3 Wallet Connectivity:</span> Seamless integration with cryptocurrency wallets.",
                        "<span class='font-semibold text-black '>Secure Smart Contract Audits:</span>  Automated contract validation to prevent vulnerabilities.",
                        "<span class='font-semibold text-black '>Multi-Layer Security Encryption:</span>  Blockchain-driven security for transaction protection.",
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-image-blockchain-based-fintech-app.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "The client needed a Blockchain-based finance app development solution capable of handling high-speed, secure transactions while ensuring scalability and regulatory compliance.",
                        "Addressing network congestion, transaction speed optimization, and data privacy were key challenges in the development process.",
                        "Implementing decentralized security protocols while ensuring user accessibility and ease of use required innovative solutions."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-image-blockchain-based-fintech-app.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "As a leading finance app development company, we developed a decentralized Finance App Development Solutions platform using blockchain technology, smart contracts, and secure payment processing.",
                        "Our custom FinTech app development services provide seamless transactions, high-level security, and intuitive UI/UX.",
                        "Implemented scalable blockchain architecture with AI-powered risk management tools, ensuring fast, transparent, and secure financial operations."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-image-blockchain-based-fintech-app.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "Our Blockchain-based FinTech application development improved transaction transparency, eliminated intermediaries, and reduced operational costs.",
                        "Enhanced security and decentralization built trust among users, ensuring tamper-proof financial records.",
                        "The scalable platform supported future financial innovations, including DeFi, tokenization, and smart contract banking.",
                        "Cost-effective cross-border transactions enabled seamless global payments and investments.",
                        "Increased compliance and fraud prevention ensured a regulatory-friendly blockchain-based financial ecosystem."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-img-blockchain-based-fintech-app.webp"
                />

                <TechStack
                    title="Our Edgy Tech-Stacks Use for finance management app development"
                    description="The only focus is not the engagement, but building a highly-secured and robust web or application. For strong Dating app development, some edgy tech stacks are being used."
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Ashish </h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>INDIA </p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen delivered a secure and scalable Blockchain-based FinTech application that transformed our financial operations. Their expertise in custom FinTech app development services made the process seamless and efficient!"</p>
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