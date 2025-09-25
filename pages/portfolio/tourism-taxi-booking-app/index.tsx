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
                <title>Tourism Taxi Booking App Development | Custom Travel Booking Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/tourism-taxi-booking-app" />
                <meta name="description" content="Explore our tourism taxi app development case study. As a top-rated travel taxi app development company, Comfygen delivers AI-powered tourism taxi apps with multi-city booking, real-time tracking, and multilingual support for a seamless travel experience." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Tourism Taxi Booking App Development | Custom Travel Booking Solutions" />
                <meta property="og:description" content="Boost corporate travel efficiency with our AI-powered corporate taxi app development. Automate scheduling, billing, and real-time tracking for seamless ride management." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/tourism-taxi-booking-app" />
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
                        heading="Tourism Taxi Booking App"
                        subhead=""
                        ptag="Our client is a leading tourism company that needed a custom tourism taxi app development solution to provide seamless tourism and inter-city travel experience. As a top-rated travel taxi app development company, we built a feature-rich, AI-powered platform offering multi-city booking, tour packages, and multilingual support to enhance user convenience and accessibility."
                        imageSrc="https://www.comfygen.com/image/hero-tourism-taxi-booking-app.webp"
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
                        "Multi-City Booking System: Allows tourists to book taxis across different cities.",
                        "Customizable Tour Packages: Pre-designed and flexible sightseeing plans.",
                        "AI-Powered Route Optimization: Ensures the fastest and most scenic travel routes.",
                        "Live Tour Guide Integration: Provides real-time travel insights and historical facts.",
                        "Multilingual Support: Offers services in multiple languages for international tourists.",
                        "Seamless Digital Payments: Integrates UPI, cards, digital wallets, and international payment gateways.",
                        "Real-Time Ride Tracking & Safety Features: GPS tracking, SOS button, and driver authentication.",
                        "Custom Pricing & Discounts: Automated seasonal pricing and exclusive tourist discounts.",
                        "In-App Chat & Support: 24/7 multilingual customer assistance for seamless communication."
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-tourism-taxi-booking-app.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "The client required a tourism taxi service app that integrates real-time booking, guided tour packages, and dynamic pricing.",
                        "Ensuring availability across multiple cities, route optimization, and multilingual customer support was a major challenge.",
                        "The app needed to handle high user traffic, secure payment processing, and an engaging tourist-friendly interface."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-tourism-taxi-booking-app.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "As a custom travel taxi booking app development company, we built an AI-driven tourism taxi booking platform with intelligent routing, real-time availability tracking, and integrated tour packages.",
                        "Implemented secure digital payments, multilingual support, and a user-friendly booking interface for seamless travel experiences.",
                        "Our tourism taxi app development services ensured a scalable, high-performance platform that could handle peak travel seasons efficiently."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-tourism-taxi-booking-app.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "35% increase in tourist bookings with convenient and user-friendly travel options.",
                        "25% boost in customer retention due to personalized experiences and AI-driven route planning.",
                        "Enhanced operational efficiency with automated ride scheduling and dynamic pricing models.",
                        "Higher revenue generation through custom tour packages and premium ride options.",
                        "Scalable platform supporting expansion to new destinations and travel categories."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-tourism-taxi-booking-app.webp"
                />

                <TechStack
                    title="Technologies Used for Taxi Booking App Development"
                    description="We use the core technologies in our cutting edge Taxi Booking App Development Services and solutions to build efficient cab booking app development service to ease users and businesses"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>David W.</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>London, UK</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen transformed our vision into a fully functional tourism taxi booking app development solution. The AI-powered routing, real-time booking, and multilingual support significantly improved our customer experience. Their expertise as a top-rated travel taxi booking app development company helped us scale our services seamlessly."</p>
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