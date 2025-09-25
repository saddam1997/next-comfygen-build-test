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
                <title>Tarot Card Reading App Development | AI-Powered Virtual Tarot Consultation</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/tarot-card-reading-app" />
                <meta name="description" content="Explore our Casual Dating App Development case study. As a top-rated dating app development company, Comfygen delivers casual dating apps with AI-driven matchmaking, seamless interactions, and strong security to enhance user engagement and retention." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Tarot Card Reading App Development | AI-Powered Virtual Tarot Consultation" />
                <meta property="og:description" content="Explore our Casual Dating App Development case study. As a top-rated dating app development company, Comfygen delivers casual dating apps with AI-driven matchmaking, seamless interactions, and strong security to enhance user engagement and retention." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/tarot-card-reading-app" />
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
                        heading="Tarot Card Reading App"
                        subhead=""
                        ptag="Our client envisioned a virtual tarot reading app development platform that provides accurate and insightful tarot card readings through AI-driven interpretations and real-time consultations. We developed a feature-rich tarot app with customizable card decks, live tarot reader sessions, and in-app purchases to create an engaging and intuitive tarot reading experience."
                        ptag1="We are a top-rated <a class='font-semibold' href='/astrology-app-development'>astrology mobile app development company</a> , We ensure the astrology app delivers personalized, interactive, and AI-enhanced tarot readings for users seeking spiritual guidance."
                        imageSrc="https://www.comfygen.com/image/hero-section-image-tarot-card-reading-app.webp"
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
                        "AI-Driven Tarot Interpretations: Get detailed insights with AI-powered tarot card readings.",
                        "Multiple Tarot Deck Options: Choose from Rider-Waite, Marseille, Thoth, and custom decks.",
                        "Live Tarot Reader Consultations: Real-time video or chat sessions with expert tarot readers.",
                        "Daily, Weekly & Monthly Readings: Personalized tarot insights for love, career, and finances.",
                        "Push Notifications & Daily Card Picks: Receive daily spiritual guidance and tarot card pulls.",
                        "Tarot Learning & Symbol Guide: Educational content for users learning tarot reading.",
                        "Online & Offline Reading Mode: Access saved tarot readings even without the internet.",
                        "Community & Discussion Forums: Engage with other tarot enthusiasts and readers.",
                        "Dark Mode & UI Customization: Personalize themes for a comfortable reading experience.",
                        "Subscription & One-Time Purchase Models: Unlock premium readings, decks, and exclusive insights."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-image-tarot-card-reading-app.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "AI-Powered Tarot Predictions – Implementing machine learning to interpret card meanings accurately.",
                        "Live Tarot Reader Consultations – Instant chat and video readings for a real-time experience.",
                        "Customizable Card Decks – We offer different tarot decks to match user preferences.",
                        "In-App Purchases & Monetization – Creating premium reading plans and paid features.",
                        "Multi-Language Support – Expanding access to international users.",
                        "User Retention & Engagement – Providing a seamless and personalized tarot experience."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challenges-we-overcame-tarot-card-reading-app.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "As an expert tarot reading app development company, we created a secure, scalable, and AI-powered tarot reading platform with intuitive UI/UX and engaging features.",
                        "AI-Powered Interpretation Engine – Integrated NLP and machine learning for accurate tarot insights.",
                        "Live Video & Chat APIs – Enabled real-time tarot consultations through secure chat and video calls.",
                        "Custom Tarot Deck Builder – Allowed users to personalize their experience with unique decks.",
                        "Cloud-Based Infrastructure – Ensured smooth performance and scalability for a growing user base.",
                        "Multi-Currency & Payment Gateway Support – Integrated PayPal, Stripe, and local payment options."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-image-tarot-card-reading-app.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "35% Increase in User Engagement – AI-powered personalized readings improved retention.",
                        "Higher Revenue with Premium Features – Monetization through tarot consultations and deck purchases.",
                        "Global Audience Expansion – Multi-language support attracted international users.",
                        "Enhanced User Experience – Interactive tarot readings and real-time consultations improved customer satisfaction.",
                        "Scalable & Secure Platform – Future-ready infrastructure for new features and expansion."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-tarot-card-reading-app.webp"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Sophia L</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>UK</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen delivered an exceptional tarot reading app with AI-driven interpretations and live reader consultations. The smooth user experience, stunning tarot decks, and interactive readings have made this app a favorite among spiritual seekers. Highly recommended for tarot app development!"</p>
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