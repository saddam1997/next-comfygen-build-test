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
                <title>Advanced Blockchain-Based Logistics Software Solutions | Comfygen</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/advanced-blockchain-based-logistics-software" />
                <meta name="description" content="Streamline your supply chain with Comfygen’s advanced blockchain-based logistics software. Ensure transparency, security, and efficiency across logistics and transportation operations." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Advanced Blockchain-Based Logistics Software Solutions | Comfygen" />
                <meta property="og:description" content="Streamline your supply chain with Comfygen’s advanced blockchain-based logistics software. Ensure transparency, security, and efficiency across logistics and transportation operations." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/advanced-blockchain-based-logistics-software" />
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
                        heading="Mezovest - advanced blockchain-based logistics software."
                        subhead=""
                        ptag="Successfully developed and deployed Mezovest, an advanced blockchain-based logistics software that enhances efficiency, security, and transparency in supply chain operations. It enables logistics providers, manufacturers, and retailers to track shipments and verify transactions while automating key processes using decentralized ledger technology. Mezovest eliminates inefficiencies, reduces fraud, and improves real-time visibility of goods movement."
                        imageSrc="https://www.comfygen.com/image/hero-image-advanced-blockchain-based-logistics-software.webp"
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
                        "<span class='font-semibold'>Decentralized & Transparent Tracking:<span> End-to-end visibility for all stakeholders.",
                        "<span class='font-semibold'>Smart Contracts for Automation:<span> Automates order processing, payments, and dispute resolution.",
                        "<span class='font-semibold'>Tamper-Proof Ledger:<span> Immutable records ensure trust and reduce fraud.",
                        "<span class='font-semibold'>Efficient Supply Chain Management:<span> Optimized workflows for reduced delays and improved logistics.",
                        "<span class='font-semibold'>Real-Time Monitoring:<span> Live updates on shipment status, conditions, and estimated delivery times.",
                        "<span class='font-semibold'>Interoperability & Scalability:<span> Supports integration with existing logistics systems and third-party applications.",
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-image-advanced-blockchain-based-logistics-software.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "<span class='font-semibold'>Lack of Supply Chain Transparency: </span> Traditional logistics often suffer from data manipulation and mismanagement.",
                        "<span class='font-semibold'>High Costs & Inefficiencies: </span> Manual processes lead to delays and increased operational expenses.",
                        "<span class='font-semibold'>Security & Fraud Prevention: </span> Ensuring data integrity and reducing counterfeiting risks.",
                        "<span class='font-semibold'>Cross-Border Logistics: </span> Handling international trade complexities and compliance issues.",
                        "<span class='font-semibold'>Data Silos & Fragmentation: </span> Bridging the gap between different logistics stakeholders and systems."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challenges-image-advanced-blockchain-based-logistics-software.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "Built Mezovest using a decentralized blockchain architecture to tackle logistics challenges.",
                        "Integrated smart contracts, real-time tracking, and tamper-proof digital ledgers for security and efficiency.",
                        "Automates key logistics operations to streamline processes.",
                        "Enhances supply chain visibility and ensures seamless communication between vendors, manufacturers, and transporters."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solutions-image-advanced-blockchain-based-logistics-software.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        " <span class='font-semibold'>Enhanced Supply Chain Efficiency: </span> Optimized processes lead to cost savings and reduced delays.",
                        " <span class='font-semibold'>Fraud Prevention & Security: </span> Blockchain ensures authenticity and eliminates data manipulation.",
                        " <span class='font-semibold'>Automated Smart Contract Execution: </span> Reduces paperwork and manual processing, increasing efficiency.",
                        " <span class='font-semibold'>Global Trade Facilitation: </span> Simplifies cross-border transactions with transparent, immutable records.",
                        " <span class='font-semibold'>Real-Time Decision-Making: </span> Instant access to shipment data for proactive logistics management."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-image-advanced-blockchain-based-logistics-software.webp"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Daniele Martino</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'> Florence, TOS, Italy</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Mezovest has transformed our logistics operations! We now have real-time tracking, secure transactions, and faster deliveries."</p>
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