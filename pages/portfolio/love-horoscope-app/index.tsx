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
                <title>Love Horoscope App Development | AI-Powered Astrology Solution</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/love-horoscope-app" />
                <meta name="description" content="Discover our love horoscope app development solution with AI-driven astrology insights, real-time astrologer consultations, zodiac matchmaking, and personalized love predictions. Built for enhanced user engagement, our feature-rich app ensures a seamless astrology experience." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Love Horoscope App Development | AI-Powered Astrology Solution" />
                <meta property="og:description" content="Explore our Casual Dating App Development case study. As a top-rated dating app development company, Comfygen delivers casual dating apps with AI-driven matchmaking, seamless interactions, and strong security to enhance user engagement and retention." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/love-horoscope-app" />
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
               
                    <Header />
             
            </div>
            <div className="overflow-hidden lg:pt-[110px]">
                <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
                    <CompanyHeroSection
                        heading="Love Horoscope App"
                        subhead=""
                        ptag="Our client wanted a custom love horoscope app development solution that offers daily, weekly, and monthly love predictions based on zodiac compatibility. The app was designed to provide AI-driven astrology insights, real-time astrologer consultations, and interactive matchmaking features to enhance the love and relationship experience for users."
                        ptag1="As a top astrology app development company, we created a feature-rich, intuitive, and AI-powered horoscope app that offers real-time predictions, personalized matchmaking, and live consultations with expert astrologers."
                        imageSrc="https://www.comfygen.com/image/hero-section-love-horoscope-app.webp"
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
                        "AI-Driven Love Horoscope Predictions – Daily, weekly, and monthly astrological insights tailored for relationships.",
                        "Zodiac Compatibility Matchmaking – Discover potential partners based on astrology-based compatibility.",
                        "Live Astrologer Consultations – Instant chat and video call sessions with expert astrologers.",
                        "Personalized Astrology Reports – Detailed birth chart (kundli) and relationship guidance.",
                        "Push Notifications & Love Tips – Receive daily love quotes, relationship advice, and lucky predictions.",
                        "Astrology Blog & Articles – Access exclusive astrology content from professional astrologers.",
                        "Numerology & Tarot Readings – Get additional relationship insights beyond horoscope matching.",
                        "Dark Mode & UI Customization – Enhance user experience with customizable themes.",
                        "Multi-Language Support – Available in multiple languages to cater to a global audience.",
                        "Secure Payments & Subscription Models – Offer premium horoscope reports and astrology consultations."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-love-horoscope-app.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "Accurate Horoscope Predictions – Implementing AI and astrological algorithms for precise love compatibility reports.",
                        "Live Astrologer Consultations – Enabling real-time chat and video calls with certified astrologers.",
                        "Interactive Matchmaking Features – Helping users find partners based on astrological compatibility.",
                        "Multi-Language Support – Expanding reach with diverse linguistic options.",
                        "Scalability for High Traffic – Handling thousands of daily horoscope readings and consultations.",
                        "User Engagement & Retention – Providing a personalized experience to keep users engaged."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challenges-love-horoscope-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As an expert love horoscope app development company, we built a scalable and engaging astrology platform using AI, NLP, and real-time communication features.",
                        "AI-powered astrology Engine – We integrated machine learning models for predictive astrology readings.",
                        "Live Chat & Video Call APIs – Enabled instant astrologer consultations via secure video and chat integration.",
                        "Personalized Content Algorithm – Delivered unique love horoscope content based on user profiles.",
                        "Cloud-Based Infrastructure – Ensured seamless performance and high availability during peak traffic.",
                        "Astrological Data Accuracy – Implemented Vedic, Western, and Chinese astrology models for diverse user preferences."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-love-horoscope-app.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "30% Increase in User Engagement – AI-driven insights improved user retention and satisfaction.",
                        "Higher Revenue with Premium Subscriptions – Monetization through astrology reports and consultations.",
                        "Scalable & Feature-Rich Solution – Future-proof technology stack for additional astrology features.",
                        "Wider Market Reach – Multi-language support expanded the user base globally.",
                        "Improved Customer Trust & Satisfaction – Secure and accurate horoscope predictions boosted credibility."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-love-horoscope-app.webp"
                    imagePosition='left'
                />
                <TechStack
                    title="Technology Stack"
                    description=""
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Shyam Jyotish</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>India</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen built a stunning love horoscope app with real-time astrology insights and matchmaking features. The AI-powered predictions and astrologer consultations have helped our users confidently navigate their love life. Highly recommended for astrology app development!"</p>
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
