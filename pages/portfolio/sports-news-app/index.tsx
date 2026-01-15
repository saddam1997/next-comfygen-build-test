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
                <title>Sports News App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/e-paper-app" />
                <meta name="description" content="Explore our AI-powered sports news app development solution, offering real-time scores, match analysis, and personalized sports content. We provide live updates, video highlights, and multi-sport coverage to a USA-based sports media company." />
                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Sports News App Development" />
                <meta property="og:description" content="Explore our AI-powered sports news app development solution, offering real-time scores, match analysis, and personalized sports content. We provide live updates, video highlights, and multi-sport coverage to a USA-based sports media company." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/e-paper-app" />
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
                        heading="All Sports News App"
                        subhead=""
                        ptag="Our USA-based client, a leading sports media company, required a custom sports news app development solution to provide real-time sports updates, match analysis, and AI-driven content recommendations. As a top-rated news app development company, we built a feature-rich, scalable platform that delivers live scores, breaking news, player stats, and personalized sports content for fans worldwide."
                        imageSrc="https://www.comfygen.com/image/hero-image-sports-news-app.webp"
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
                        "<b>Live Scores & Match Updates: </b> Real-time score updates for multiple sports and leagues.",
                        "<b>AI-Powered Personalized Feed: </b> Custom sports news based on user interests and favorite teams.",
                        "<b>Multi-Sport Coverage: </b> News, stats, and updates for football, basketball, baseball, cricket, tennis, and more.",
                        "<b>Video Highlights & Match Analysis </b>: Watch key moments, expert analysis, and post-game breakdowns.",
                        "<b>Push Notifications & Alerts: </b> Instant updates for match results, injuries, and transfers.",
                        "<b>Fantasy Sports Integration: </b> Sync with fantasy leagues for player performance insights.",
                        "<b>Social Media Sharing: </b> Easily share news, scores, and highlights with friends.",
                        "<b>Dark Mode & UI Customization: </b> Enhanced readability with adjustable themes.",
                        "<b>Live Commentary & Polls: </b> Engage with expert opinions and fan discussions.",
                        "<b>Offline Reading Mode: </b> Save articles and match reports for later viewing."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-image-sports-news-app.webp"
                />
                <Features
                    heading="Challenge"
                    points={[
                        "The client wanted an AI-powered sports news app with real-time updates, multi-sport coverage, and interactive content.",
                        "Ensuring seamless live data integration with sports APIs for scores, match highlights, and player statistics.",
                        "Providing a personalized user experience through AI-driven recommendations and custom news feeds.",
                        "Managing high traffic spikes during major sporting events."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-image-sports-news-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a leading sports news app development company, we built an AI-powered, real-time sports news platform that ensures fast content delivery and an engaging user experience.",
                        "Integrated official sports APIs for live scores, match details, and player stats.",
                        "Developed AI-driven news recommendations for personalized content delivery.",
                        "Implemented cloud-based infrastructure to handle high traffic loads during major events."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-image-sports-news-app.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "40% increase in user engagement with AI-powered content recommendations.",
                        "Faster news delivery with real-time sports data integration.",
                        "Higher ad revenue and subscription growth through personalized content.",
                        "Global audience reach with multi-sport, multi-language, and offline support.",
                        "Scalable infrastructure to support high-traffic sporting events."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-image-sports-news-app.webp"
                    imagePosition='left'
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'> Michael T</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>New York, USA</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen built an exceptional sports news app with real-time updates and AI-driven content recommendations. The live match coverage and personalized sports news feed have significantly improved user engagement. Highly recommended for sports app development"</p>
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
