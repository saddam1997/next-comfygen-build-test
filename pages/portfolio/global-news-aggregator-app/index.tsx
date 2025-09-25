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
                <title>Global News Aggregator App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/global-news-aggregator-app" />
                <meta name="description" content="Discover our AI-powered global news aggregator app development solution for real-time updates, multilingual support, and personalized news recommendations. The platform enhances user engagement and seamless content aggregation for a Canadian client." />
                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Global News Aggregator App Development" />
                <meta property="og:description" content="Discover our AI-powered global news aggregator app development solution for real-time updates, multilingual support, and personalized news recommendations. The platform enhances user engagement and seamless content aggregation for a Canadian client." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/global-news-aggregator-app" />
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
                        heading="Global News Aggregator App"
                        subhead=""
                        ptag="Our Canada-based client sought a custom news aggregator app development solution to deliver real-time news updates, AI-driven recommendations, and multilingual content aggregation. As a top-rated news app development company, we built a scalable, feature-rich platform that provides users with personalized news feeds, trending updates, and seamless multi-source integration for a global audience."
                        imageSrc="https://www.comfygen.com/image/hero-image-global-news-aggregator-app.webp"
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
                        "<span class='font-semibold'>AI-Powered News Recommendations: </span> Personalized content based on reading history and user behavior.",
                        "<span class='font-semibold'>Multi-Language Support: </span> AI-driven translation for a seamless global experience.",
                        "<span class='font-semibold'>Real-Time News Updates: </span> Instant delivery of breaking news and trending topics.",
                        "<span class='font-semibold'>Multi-Source Integration: </span> Aggregates news from verified publishers, blogs, and RSS feeds.",
                        "<span class='font-semibold'>Customizable News Feeds: </span> Users can select categories, sources, and regions.",
                        "<span class='font-semibold'>In-App Search & Filters: </span> Advanced search functionality with keyword-based filtering.",
                        "<span class='font-semibold'>Text-to-Speech Feature: </span> Enables hands-free news consumption.",
                        "<span class='font-semibold'>Offline Reading Mode: </span> Save articles to read later without an internet connection.",
                        "<span class='font-semibold'>Push Notifications & Alerts: </span> Real-time updates on important news events.",
                        "<span class='font-semibold'>Dark Mode & UI Customization: </span> Enhances readability and user experience."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-global-news-aggregator-app.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "The client required a smart news aggregation platform that curates content from various sources, ensuring credibility and accuracy.",
                        "Implementing AI-driven recommendations to tailor news based on user preferences and reading habits.",
                        "Handling multi-language support for a diverse global audience.",
                        "Ensuring real-time updates, push notifications, and an engaging UI for better user retention."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-global-news-aggregator-app.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "We are one of the best news app development company in India, USA, UK, and UAE, we developed a high-performance AI-powered news aggregator platform that delivers real-time, multi-language news updates with a smooth and engaging user experience.",
                        "Integrated natural language processing (NLP) and machine learning to improve content recommendations.",
                        "Ensured scalability to accommodate large traffic loads and real-time updates.",
                        "We developed the best newspaper app a secure and compliant architecture to prevent misinformation and make sure data integrity."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-global-news-aggregator-app.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "30% increase in user engagement due to AI-driven personalized news feeds.",
                        "Expanded global reach with multi-language support and regional news curation.",
                        "Real-time news delivery improved retention and app usage.",
                        "Enhanced monetization with ad integration and premium subscription models.",
                        "Improved content credibility with AI-based fact-checking mechanisms."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-global-news-aggregator-app.webp"
                />

                <TechStack
                    title="Technologies Used for App Development"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Mark R.</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Toronto, Canada</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen developed an innovative AI-driven news aggregator app that transformed the way users consume news. Their expertise in real-time content delivery, multilingual support, and AI-based personalization has significantly improved user engagement. Highly recommended for custom news app development!"</p>
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