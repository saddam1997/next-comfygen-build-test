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
                <title>AI-Powered Language Learning App Development | Custom E-Learning Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/ai-powered-language-learning-app" />
                <meta name="description" content="Discover our AI-driven language learning app development case study. As a top e-learning app development company, Comfygen delivers personalized lessons, real-time speech recognition, and gamified learning experiences for enhanced engagement." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="AI-Powered Language Learning App Development | Custom E-Learning Solutions" />
                <meta property="og:description" content="Discover our AI-driven language learning app development case study. As a top e-learning app development company, Comfygen delivers personalized lessons, real-time speech recognition, and gamified learning experiences for enhanced engagement." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/ai-powered-language-learning-app" />
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
                        heading="AI-Powered Language Learning App"
                        subhead=""
                        ptag="Our client wanted an AI-powered language learning app development solution that provides personalized lessons, gamified exercises, and real-time progress tracking. As a leading tutor booking app development company, we built an interactive language learning platform that enhances engagement with speech recognition, AI-driven adaptive learning, and multilingual support."
                        imageSrc="https://www.comfygen.com/image/hero-image-ai-powered-language-learning-app.png"
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
                        "AI-Driven Personalized Learning: Adapts lessons based on user progress and learning patterns.",
                        "Speech Recognition & Pronunciation Analysis: AI-powered voice recognition for real-time pronunciation feedback.",
                        "Gamified Learning Experience: Quizzes, challenges, and rewards to keep learners engaged.",
                        "Live AI Chatbot Tutor: Conversational AI for real-time language practice",
                        "Real-Time Progress Tracking: AI-generated reports and analytics on user improvement.",
                        "Offline Learning Mode: Download lessons for uninterrupted learning anytime, anywhere.",
                        "Multi-Language Support: Covers major global languages with cultural context integration.",
                        "Interactive Flashcards & Memory Boosters: AI-based spaced repetition for vocabulary retention.",
                        "In-App Voice & Video Conversations: Connect with native speakers for immersive learning.",
                        "Subscription Plans & In-App Purchases: Premium content access and personalized coaching."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-ai-powered-language-learning-app.png"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client required a custom language learning app with AI-based adaptive lessons, interactive gamification, and real-time speech analysis.",
                        "Ensuring accurate pronunciation feedback, real-time progress tracking, and engaging content delivery was a major challenge.",
                        "The platform needed multi-language support, offline accessibility, and AI-driven personalized learning paths."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-ai-powered-language-learning-app.png"
                    imagePosition="left"
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a top-rated language learning app development company, we developed an AI-powered e-learning platform that offers personalized lessons, real-time feedback, and gamified learning experiences.",
                        "Our custom e-learning app development services ensured seamless content delivery, high user engagement, and AI-driven performance tracking.",
                        "Integrated speech recognition technology, live AI chatbot tutors, and multilingual voice assistance."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-ai-powered-language-learning-app.png"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Improved user engagement and retention through AI-powered personalized learning.",
                        "Higher monetization opportunities via subscription plans, premium lessons, and in-app purchases.",
                        "Enhanced learning experience with speech recognition and gamification elements",
                        "Scalable architecture to support global expansion and future AI advancements.",
                        "Real-time AI analytics for personalized feedback and user performance improvement."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-ai-powered-language-learning-app.png"
                    imagePosition="left"
                />

                <TechStack
                    title="Technology Stack We Use"
                    description="At Comfygen, we leverage cutting-edge technologies to develop high-performance, scalable, and secure tutor app solutions that enhance the learning experience."
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'> Isabella,</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Bangalore, India</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen built a revolutionary AI-powered language learning app that personalizes the learning journey for each user. The speech recognition feature and gamification have transformed the way people learn new languages. Their expertise in e-learning mobile app development is unmatched!"</p>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                </section>
                
            </div>
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
