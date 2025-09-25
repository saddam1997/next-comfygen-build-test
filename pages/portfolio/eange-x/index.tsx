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
                <title>EangeX – A Social Media Platform</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio" />
                <meta name="description" content="Transform your vision into reality with Comfygen’s blockchain-based cryptocoin development services. We build next-generation cryptocurrencies with advanced features like staking, governance, smart contracts, and secure wallets, tailored to meet the needs of startups, enterprises, and investors in the evolving digital economy." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
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
                        heading="EangeX – A Social Media Platform"
                        subhead=""
                        ptag="Our client envisioned EangeX, a next-gen social media platform designed to foster engagement, content sharing, and seamless interactions. As a Best Social Media App Development Company, we built an innovative, user-friendly app with AI-driven recommendations, real-time messaging, and multimedia sharing features. Our expertise as an offshore social media app development company ensured a scalable and high-performance solution."
                        imageSrc="https://www.comfygen.com/image/eange-x-horo-image.webp"
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
                        "AI-driven content recommendations and personalized feeds",
                        "Secure messaging, video calls, and multimedia sharing",
                        "Real-time notifications and interactive user engagement tools",
                        "End-to-end encrypted chats and privacy-focused user settings",
                        "AI-based content moderation to prevent spam and misinformation",
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-features-image.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "The client required a Social Media App Development Company in India to create a dynamic platform with real-time content delivery, high user engagement, and secure data management. Overcoming challenges like high-traffic handling, content moderation, and seamless multimedia sharing was essential."
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-challenges-image.webp"
                />

                <InfomationSecound
                    heading="Solution"
                    points={[
                        "As the best custom social media app development company in India, we designed and developed a feature-rich social media app development services provider solution with AI-powered content suggestions, real-time chat, and cloud-based media storage. Our robust architecture ensured high-speed performance and enhanced user experience.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-solutions-image.webp"
                />
                
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "Our Social Media App Development Company solution helped EangeX boost user engagement, enhance content virality, and provide a seamless networking experience. The scalable architecture supported future growth, while monetization models like in-app ads and premium subscriptions increased revenue."
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-business-benefits-image.webp"
                />

                <TechStack
                    title="Development Technologies We Use"
                    description="We use cutting-edge technologies for blockchain solution development. There is no scope we leave building the best blockchain applications."
                    filterCategory={["crypto"]}
                />


                {/* <section className='bg-[#fff] lg:py py-10'>
                    <div className='2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto space-y-6'>
                        <div className='space-y-2'>
                            <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                                What Our Client Says
                            </h2>
                            <p className='xl:text-base text-sm text-black'>500+ Reviews Of Delighted Clients with clutch <span className='text-[#FFB600]'>4.5 Star</span> Rating</p>
                        </div>

                        <div>
                            <div className={styles.testimonial}>
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>John Anderson – Edinburgh</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Scotland, UK</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Croston has set a new benchmark for decentralized cryptocurrencies. It's low fees and lightning-fast transactions have given us a major competitive edge."</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}

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