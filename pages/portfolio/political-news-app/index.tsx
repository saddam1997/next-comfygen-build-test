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
                <title>Political News App Development | Case Study</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/political-news-app" />
                <meta name="description" content="Discover our AI-driven political news app development solution for real-time updates, expert analysis, and multilingual support. Built for a UAE-based client, our secure and scalable platform delivers verified political news, live streams, and personalized content." />
                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Political News App Development | Case Study" />
                <meta property="og:description" content="Discover our AI-driven political news app development solution for real-time updates, expert analysis, and multilingual support. Built for a UAE-based client, our secure and scalable platform delivers verified political news, live streams, and personalized content." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/political-news-app" />
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
                        heading="Political News App"
                        subhead=""
                        ptag="Our UAE-based client, a leading media company, required a custom political news app development solution to deliver real-time political updates, in-depth analysis, and AI-powered personalized news feeds. As a top-rated news app development company, we built a feature-rich, secure, and scalable platform that provides users with verified political news, live updates, and expert opinions in multiple languages."
                        imageSrc="https://www.comfygen.com/image/hero-image-political-news-app.webp"
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
                        "<b>AI-Driven Personalized News Feed: </b>  Custom political news suggestions based on user interests.",
                        "<b> Real-Time Political Updates:  </b> Instant delivery of election results, government policies, and legislative news.",
                        "<b> Live Streaming & Video Content:  </b> Integration of live debates, press conferences, and expert opinions.",
                        "<b> Multi-Language Support:  </b> Arabic, English, and other regional languages for a diverse audience.",
                        "<b> Political Analysis & Expert Opinions:  </b> Detailed insights from journalists and political analysts.",
                        "<b> Fact-Checking & Verified News Sources:  </b> AI-driven credibility checks to prevent misinformation.",
                        "<b> Push Notifications & Alerts:  </b> Breaking news and personalized updates on political events.",
                        "<b> Customizable News Categories:  </b> Users can follow specific parties, leaders, or topics.",
                        "<b> In-App Discussion Forums:  </b> Engage with political debates and discussions within the app.",
                        "<b> Dark Mode & UI Customization:  </b> Enhanced readability and a user-friendly interface."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-political-news-app.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed a politics-focused news aggregator app with AI-driven content curation and multilingual support.",
                        "Ensuring real-time updates, credibility, and fact-checking was a priority.",
                        "Handling high traffic loads, especially during elections, debates, and breaking news events.",
                        "Implementing secure data encryption to prevent misinformation and unauthorized access."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-political-news-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a leading political news app development company, we built a high-performance, AI-powered platform that delivers real-time, multi-language political news updates with a seamless user experience.",
                        "Integrated machine learning algorithms to provide tailored political content and trending topics.",
                        "Implemented blockchain-based content verification to ensure the authenticity of political news.",
                        "Developed a secure, scalable architecture to handle high user engagement during peak political events"
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-political-news-app.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "40% increase in user engagement with personalized political news recommendations",
                        "Faster news delivery with real-time updates and push notifications.",
                        "Enhanced security and credibility with AI-powered fact-checking.",
                        "Wider audience reach through multilingual support and localization.",
                        "Higher ad revenue & subscriptions through premium content access and political analysis reports."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-political-news-app.webp"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Ahmed M</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Dubai, UAE</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen developed a powerful and engaging political news app that informs our audience with real-time updates and AI-driven content. Their expertise in secure news delivery and multilingual support has transformed how users consume political news"</p>
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
