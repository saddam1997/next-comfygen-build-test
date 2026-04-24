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

export default function about(props) {
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => setTalkToExpertModal(true);
    const closeModal = () => setTalkToExpertModal(false);

    let { initialData } = props;
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>ROI-Based Smart Contract MLM Software Development Company</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/roi-based-smart-contract-mlm" />
                <meta name="description" content="Launch your ROI-based MLM platform like SmartWay Run. We develop secure Ethereum smart contract ROI systems with daily payout logic. Hire experts today" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="ROI-Based Smart Contract MLM Software Development Company" />
                <meta property="og:description" content="Launch your ROI-based MLM platform like SmartWay Run. We develop secure Ethereum smart contract ROI systems with daily payout logic. Hire experts today" />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/roi-based-smart-contract-mlm" />
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
            <div className="overflow-hidden ">
                <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="ROI-Based Smart Contract MLM Software"
                        subhead=""
                        ptag="At Comfygen, we developed a smart contract MLM Software, offering users a decentralized ROI-based earning model combined with referral bonuses. Built entirely on Ethereum, this project was tailored for users who prefer daily passive income, backed by trustless smart contract automation. The platform was a hybrid — combining investment returns with MLM-level rewards — without any admin interference."
                        imageSrc="https://www.comfygen.com/image/roi-based-roi-based-smart-contract-mlm.webp"
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
                    heading="Features We Built"
                    points={[
                        "ROI-based system: daily payouts (e.g., 1% to 3%) directly to users",
                        "100% decentralized smart contract on Ethereum",
                        "Built-in referral bonus structure (optional team building)",
                        "Auto-reinvest and withdrawal logic coded in Solidity",
                        "Real-time transaction logs and income dashboard",
                        "Wallet-to-wallet ETH payouts",
                        "Intuitive UI for global users"
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-we-built-roi-based-smart-contract-mlm.webp"
                    imagePosition='left'
                />
                <Features
                    heading=" Challenge"
                    points={[
                        "The client wanted to launch a fully transparent ROI model, with zero manual payout processing and required no backend control — all while maintaining security, stability, and trust on the Ethereum blockchain.",

                    ]}
                    imageSrc="https://www.comfygen.com/image/challenge-roi-based-smart-contract-mlm.webp"
                />

                <Features
                    heading="Our Solution"
                    points={[
                        "Our team at Comfygen designed and deployed a gas-optimized smart contract on Ethereum, capable of calculating and distributing daily ROI payouts. We implemented automatic referral bonuses, reinvestment rules, and withdrawal functionality — all governed entirely by the contract. A mobile-responsive dashboard with wallet integrations allowed easy access and tracking for users across the globe."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-roi-based-smart-contract-mlm.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Attracted investors and non-networkers through passive ROI",
                        "Increased platform stickiness with auto-reinvestment model",
                        "No manual operations — reduced overhead",
                        "High transparency with on-chain records",
                        "Trustless and tamper-proof smart contract logic",
                        "Fast global scalability with 24/7 automated payouts"
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-roi-based-smart-contract-mlm.webp"
                />

                <TechStack
                    title="Our Edgy Tech-Stacks Use for Dating app development"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Olivia Turner</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Atlanta, Georgia, USA</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"We wanted to simplify MLM for users who prefer earning passively — and Comfygen nailed it. They developed a rock-solid ROI smart contract platform for us that pays our users daily without fail. The platform has grown faster than we imagined."</p>
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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
