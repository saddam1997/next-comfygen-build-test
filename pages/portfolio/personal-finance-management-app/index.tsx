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
                <title>Personal Finance Management App Development Solution</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio" />
                <meta name="description" content="Explore our personal finance management app development case study. As India's best custom finance app development company, Comfygen delivers secure, AI-driven FinTech solutions with seamless integration, intuitive UI, and top-tier security." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Personal Finance Management App Development Solution" />
                <meta property="og:description" content="Explore our personal finance management app development case study. As India's best custom finance app development company, Comfygen delivers secure, AI-driven FinTech solutions with seamless integration, intuitive UI, and top-tier security." />
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
                        heading="Personal Finance Management App"
                        subhead=""
                        ptag="Our client sought a personal finance management app development solution to help users track expenses, manage budgets, and improve financial planning. As a top-rated custom finance management mobile app development company, we built a feature-rich platform that offers AI-driven insights, automated savings plans, and real-time financial analytics for smarter money management."
                        imageSrc="https://www.comfygen.com/image/hero-image-personal-finance-management-app.webp"
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
                        " <b>AI-Powered Expense Tracking & Budgeting –: </b>  Smart categorization of expenses and AI-driven budgeting suggestions.",
                        " <b>Automated Bill Payments & Reminders – </b> Secure scheduling for utility bills, loans, and subscriptions.",
                        "<b>Real-Time Financial Insights & Reporting – </b>  AI-based analytics for better money management.",
                        "<b>Secure Bank Account Integration – </b>  Multi-layer encryption for safe financial transactions.",
                        "<b>Goal-Based Savings & Investment Tracking – </b>  AI-driven recommendations for savings and investments.",
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-image-personal-finance-management-app.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client required a finance management app development solution with high-level security, seamless bank integrations, and user-friendly analytics.",
                        "Handling real-time financial data, ensuring regulatory compliance, and providing AI-driven financial recommendations were key challenges.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-image-personal-finance-management-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As the best custom finance app development company in India, we designed a scalable and secure finance app development solutions platform with:",
                        "AI-powered insights for smarter financial decisions.",
                        "Automated transaction categorization for seamless money management.",
                        "Encrypted financial data storage make sure high-level security.",
                        "Our custom FinTech app development services provide an intuitive and engaging user experience."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-image-personal-finance-management-app.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Our personal finance management app development solution enhanced financial awareness and helped users save efficiently.",
                        "The AI-driven analytics improved user engagement, while integrated monetization models like premium subscriptions and financial advisory services increased revenue.",
                        "The top-rated custom FinTech mobile app development company ensured a scalable architecture to support business growth."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-personal-finance-management-app.webp"
                    imagePosition='left'
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>David Smith</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'> USA</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen is the Best Custom Finance App Development Company in India! Their expertise in personal finance management app development helped us create a secure, user-friendly, and AI-driven platform. Their custom FinTech app development services ensured seamless integration, excellent UI, and top-notch security."</p>
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
