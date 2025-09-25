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
                <title>Best Mobile Payment App Development | Custom FinTech Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio" />
                <meta name="description" content="Find out how our mobile payment app development solution can make your payments fast, secure, and seamless. We developed a FinTech app for a US client that provides real-time transaction tracking, AI-powered fraud detection, and seamless payment integrations." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Best Mobile Payment App Development | Custom FinTech Solutions" />
                <meta property="og:description" content="Find out how our mobile payment app development solution can make your payments fast, secure, and seamless. We developed a FinTech app for a US client that provides real-time transaction tracking, AI-powered fraud detection, and seamless payment integrations." />
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
                        heading="Mobile Payment Solution"
                        subhead=""
                        ptag="Our client wanted a custom mobile payment app development solution that enables fast, secure, and seamless digital transactions. As a top-rated custom FinTech mobile app development company, we designed a feature-rich platform with AI-driven fraud detection, multi-layer security, and real-time transaction tracking, ensuring a smooth and reliable payment experience."
                        imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-hero-image.webp"
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
                        " <span class='font-semibold text-black '>Instant Peer-to-Peer & Merchant Payments:</span>   Fast transactions for individuals and businesses.",
                        " <span class='font-semibold text-black '>Multi-Layer Security:</span>  Encryption, biometric authentication, and secure OTP verification.",
                        "<span class='font-semibold text-black '>AI-Powered Fraud Detection:</span>   Real-time risk assessment and fraud prevention.",
                        "<span class='font-semibold text-black '>Real-Time Transaction Tracking:</span>  View detailed transaction history and spending insights.",
                        "<span class='font-semibold text-black '>Bank & Digital Wallet Integration:</span>   Seamless connection with multiple banking networks.",
                        "<span class='font-semibold text-black '>Cross-Border Payment Support:</span> Global transactions with currency conversion options.",
                        " <span class='font-semibold text-black '>Cryptocurrency Payments: </span> Secure crypto transactions alongside traditional payment methods.",
                        " <span class='font-semibold text-black '>Automated Bill Payments & Reminders: </span> Schedule recurring payments and receive alerts.",
                        "<span class='font-semibold text-black '>Loyalty & Reward System: </span>  Cashback, discounts, and reward points for user engagement."
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-features.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "The client required a Finance App Development Solutions platform that ensures high-speed transactions, regulatory compliance, and seamless integration with multiple payment gateways.",
                        "Overcoming security threats, ensuring scalability, and providing an intuitive user experience were key challenges.",
                        "The app needed to support cross-border transactions, integrating with banks, digital wallets, and cryptocurrencies while maintaining financial compliance."
                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-challanges.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "As the Best Custom Finance App Development Company in India, we built a secure and scalable custom mobile payment app development platform with encrypted transactions, AI-powered risk analysis, and cross-border payment support.",
                        "Our custom FinTech app development services ensured smooth functionality, regulatory compliance, and a user-friendly interface.",
                        "The app architecture supported high transaction volumes, ensuring zero downtime and enhanced speed."
                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-solution.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "Our custom mobile payment app development services improved transaction efficiency, reduced payment processing time, and increased customer trust with advanced security measures.",
                        "The scalable infrastructure supported business growth, allowing seamless expansion.",
                        "Integrated monetization strategies like transaction fees, premium services, and subscription-based models maximized revenue potential.",
                        "User-friendly design and AI-driven recommendations enhanced customer satisfaction and engagement."
                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-business-benefits.webp"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>John Williams</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>USA</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen is the Best Custom Finance App Development Company in India! Their expertise in custom mobile payment app development helped us create a secure and scalable platform. Their custom FinTech app development services ensured smooth transactions, top-notch security, and seamless payment integrations."</p>
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