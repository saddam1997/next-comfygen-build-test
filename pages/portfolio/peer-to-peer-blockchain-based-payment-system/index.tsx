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
                <title>Decentralized Peer-to-Peer Blockchain Payment Systems | Comfygen</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/peer-to-peer-blockchain-based-payment-system" />
                <meta name="description" content="Discover Comfygen’s decentralized peer-to-peer blockchain-based payment systems. Secure, fast, and scalable solutions designed to revolutionize digital transactions for businesses worldwide." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Decentralized Peer-to-Peer Blockchain Payment Systems | Comfygen" />
                <meta property="og:description" content="Discover Comfygen’s decentralized peer-to-peer blockchain-based payment systems. Secure, fast, and scalable solutions designed to revolutionize digital transactions for businesses worldwide." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/peer-to-peer-blockchain-based-payment-system" />
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
                        heading="YatriPay - peer-to-peer blockchain-based payment system"
                        subhead=""
                        ptag="Successfully developed and deployed YatriPay, a decentralized, peer-to-peer blockchain-based payment system that enables seamless, secure, and instant transactions without intermediaries. It facilitates global payments with low transaction fees, high-speed processing, and enhanced transparency, integrating smart contracts and trustless mechanisms for secure and automated transactions. YatriPay promotes financial inclusion and cross-border payments for both institutional and retail users."
                        imageSrc="https://www.comfygen.com/image/hero-section-peer-to-peer-blockchain-based-payment-system.webp"
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
                        "<span class='font-semibold'>Decentralized & Secure: </span> No central authority, ensuring full transparency and security.",
                        "<span class='font-semibold'>Ultra-Fast Transactions: </span> High-speed blockchain transactions with minimal latency.",
                        "<span class='font-semibold'>Low Transaction Fees: </span> Efficient cost structures reduce overhead compared to traditional banking systems.",
                        "<span class='font-semibold'>Smart Contracts & Automation: </span> Enables programmable payments and escrow services.",
                        "<span class='font-semibold'>Scalability & Interoperability: </span> Supports high transaction volumes with seamless blockchain integrations.",
                        "<span class='font-semibold'>Cross-Border Payments: </span> Facilitates global transactions without currency conversion barriers.",
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-peer-to-peer-blockchain-based-payment-system.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        " <span class='font-semibold'>Ensuring Security & Fraud Prevention: </span> Implementing advanced cryptographic algorithms to mitigate risks.",
                        " <span class='font-semibold'>Scalability & Network Efficiency: </span> Developing a robust framework to handle increasing transaction loads.",
                        " <span class='font-semibold'>User Adoption & Market Expansion: </span> Strategizing global adoption with strong marketing and utility.",
                        " <span class='font-semibold'>Regulatory Compliance: </span> Ensuring adherence to regional and international financial regulations.",
                        " <span class='font-semibold'>Seamless User Experience: </span> Providing an intuitive and easy-to-use interface for all users."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-peer-to-peer-blockchain-based-payment-system.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "Developed YatriPay using an advanced decentralized architecture to tackle key challenges.",
                        "Integrated secure payment channels, optimized consensus mechanisms, and an intuitive user interface.",
                        "Designed for scalability, speed, and high security in digital transactions.",
                        "Tailored to meet the needs of both individuals and businesses for seamless payments."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-peer-to-peer-blockchain-based-payment-system.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "<span class='font-semibold'>Enhanced Security: </span> Fully decentralized cryptographic security ensures trustless transactions.",
                        "<span class='font-semibold'>Global Reach & Accessibility: </span> It facilitates international payments without intermediaries.",
                        "<span class='font-semibold'>Lower Operational Costs: </span> Eliminates banking fees and transaction delays.",
                        "<span class='font-semibold'>Decentralized Payment Processing: </span> This removes dependency on traditional financial institutions.",
                        "<span class='font-semibold'>New Revenue Streams: </span> Smart contract-based automated payments and microtransactions."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-peer-to-peer-blockchain-based-payment-system.webp"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Olivia Taylor</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Berlin, BE, Germany</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"YatriPay has completely transformed our business transactions. Fast, secure, and incredibly cost-effective!"</p>
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