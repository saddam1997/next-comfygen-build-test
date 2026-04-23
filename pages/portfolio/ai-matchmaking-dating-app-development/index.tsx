import Head from 'next/head';
import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import styles from "../components/styles.module.css"
import { MdStar, MdStarHalf } from 'react-icons/md';

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









export default function about(props: any) {
        let { initialData } = props;
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => setTalkToExpertModal(true);
    const closeModal = () => setTalkToExpertModal(false);


    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Matchmaking Dating App - AI-Powered Dating App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/ai-matchmaking-dating-app-development" />
                <meta name="description" content="Discover our AI-driven matchmaking dating app development solution with real-time messaging, secure profile verification, and advanced compatibility algorithms. Built for scalability and engagement, our platform make sure seamless matchmaking and user security." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Matchmaking Dating App - AI-Powered Dating App Development" />
                <meta property="og:description" content="Discover our AI-driven matchmaking dating app development solution with real-time messaging, secure profile verification, and advanced compatibility algorithms. Built for scalability and engagement, our platform make sure seamless matchmaking and user security." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/ai-matchmaking-dating-app-development" />
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
                <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="Matchmaking Dating App"
                        subhead=""
                        ptag="Our client wanted a cutting-edge Matchmaking Dating App Development solution that offers AI-driven compatibility matching, real-time communication, and enhanced user security. As a top-rated dating app development company, we built a highly scalable and engaging platform that ensures meaningful connections through advanced filtering, smart algorithms, and seamless user experience."
                        imageSrc="https://www.comfygen.com/image/matchmaking-dating-app-portfolio-hero-image.webp"
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
                    heading="Challenge"
                    points={[
                        "The client needed an AI Matchmaking Dating App Development solution with precise compatibility matching.",
                        "Ensuring data privacy, real-time messaging, and secure profile verification was a major challenge.",
                        "The app required a seamless onboarding process, scalable infrastructure, and AI-driven matchmaking to enhance user retention."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challenges-ai-matchmaking-dating-app-development-image.png"
                    imagePosition="left"
                />
                <Features
                    heading="Features"
                    points={[
                        " <b>AI-powered matchmaking: </b>  Smart compatibility algorithms for accurate partner recommendations.",
                        " <b>Real-Time Messaging & Video Calls: </b>    Secure chat options with encrypted conversations.",
                        "<b>Personality-Based Compatibility Test: </b> AI-driven questionnaires for precise matchmaking.",
                        "<b> Profile Verification & Safety Features: </b>  AI-powered identity verification and fake profile detection.",
                        "<b>Advanced Filtering Options: </b>   Search based on age, interests, location, and preferences.",
                        "<b>Social Media Integration: </b>    Seamless sign-up using Facebook, Google, and Instagram.",
                        "<b>In-App Events & Virtual Dating: </b>   Host virtual dating events and interactive sessions.",
                        "<b>Multi-Language Support:  </b>  Expand reach with multiple language options.",
                        "<b>In-App Purchases & Subscription Plans: </b>  Premium features like unlimited swipes, profile boosts, and exclusive matchmaking.",

                    ]}
                    imageSrc="https://www.comfygen.com/image/matchmaking-dating-app-portfolio-features-image.webp"
                />

                <Features
                    heading="Solution"
                    points={[
                        "As a custom dating app development company, we built a highly scalable matchmaking platform with AI-driven user recommendations.",
                        "The app included secure login, real-time interactions, profile verification, and video calling.",
                        "Our dating mobile app development company ensured an intuitive UI/UX design for a smooth user experience."
                    ]}
                    imageSrc="https://www.comfygen.com/image/matchmaking-dating-app-portfolio-solution-image.webp"
                    imagePosition="left"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "AI-driven matchmaking enhanced user engagement and retention rates.",
                        "The custom dating app development company integrated monetization models like premium memberships and in-app purchases to boost revenue.",
                        "The scalable architecture enabled easy expansion and long-term business growth."
                    ]}
                    imageSrc="https://www.comfygen.com/image/matchmaking-dating-app-portfolio-business-benefits-image.webp"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Michael S., Los Angeles,</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>USA</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen delivered exactly what we envisioned for our Matchmaking Dating App Development. The AI-powered matching system has significantly improved user engagement and the app's security features ensure a trustworthy experience. Their expertise as a top-rated dating app development company made the entire process smooth and efficient. Highly recommended!"</p>
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
