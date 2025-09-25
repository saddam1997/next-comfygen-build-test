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
                <title>E-Paper App Development | Digital Newspaper Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/e-paper-app" />
                <meta name="description" content="Scalable E-Paper app development with AI-powered recommendations, offline reading, and secure content distribution for a seamless digital newspaper experience." />
                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="E-Paper App Development | Digital Newspaper Solutions" />
                <meta property="og:description" content="Scalable E-Paper app development with AI-powered recommendations, offline reading, and secure content distribution for a seamless digital newspaper experience." />
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
                        heading="E-Paper App Development"
                        subhead=""
                        ptag="Our India-based client, a leading media and publishing house, needed a custom E-Paper app development solution to digitize their newspaper and provide a seamless online reading experience. As a top-rated E-Paper app development company, we built a feature-rich, scalable platform that delivers high-quality digital newspapers, interactive content, and AI-powered recommendations for an enhanced reader experience."
                        imageSrc="https://www.comfygen.com/image/hero-image-e-paper-app.webp"
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
                        "<span class='font-semibold'>AI-Powered News Recommendations: </span> Personalized E-Paper content suggestions based on user preferences.",
                        "<span class='font-semibold'>Multi-Edition & Multi-Language Support: </span> Access different regional and national newspaper editions.",
                        "<span class='font-semibold'>Offline Reading Mode: </span> Download E-Paper editions for reading without internet access.",
                        "<span class='font-semibold'>Interactive PDF & Smart Zoom: </span> High-resolution pages with pinch-to-zoom and text reflow features.",
                        "<span class='font-semibold'>Digital Archive & Search: </span> Access past editions with an advanced keyword search.",
                        "<span class='font-semibold'>Multimedia Integration: </span> Embed images, videos, and audio clips within articles.",
                        "<span class='font-semibold'>Push Notifications for Breaking News: </span> Real-time updates and alerts on trending stories.",
                        "<span class='font-semibold'>Subscription & Paywall Integration: </span> Premium content access through flexible subscription models.",
                        "<span class='font-semibold'>E-Paper Clipping & Sharing: </span> Save, highlight, and share articles securely within the app.",
                        "<span class='font-semibold'>Dark Mode & UI Customization: </span> Enhanced readability with adjustable themes."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-e-paper-app.webp"
                />
                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "The client required a user-friendly E-Paper app with real-time news updates, multi-edition support, and offline reading capabilities.",
                        "Ensuring secure content distribution while preventing unauthorized sharing and piracy.",
                        "Providing interactive reading features such as smart search, bookmarking, and multimedia integration.",
                        "Managing high traffic loads during peak hours while ensuring a smooth user experience."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-e-paper-app.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "As the number one E-Paper app development company, we specialize in building scalable and secure digital newspaper platforms that deliver an exceptional reading experience.",
                        "AI-Driven Content Personalization: Tailor content to each reader’s preferences for a truly personalized experience.",
                        "PDF-to-HTML Conversion: Ensure a smoother and more engaging digital reading experience.",
                        "Digital Rights Management (DRM): Protect content from piracy and unauthorized sharing, safeguarding your valuable intellectual property.",
                        "Cloud-Based Infrastructure: Support high traffic and seamless content delivery for uninterrupted access.",
                        "Partner with us to deliver top-notch, secure, and user-friendly digital newspaper solutions."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-image-e-paper-app.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        "30% increase in digital subscriptions with a user-friendly and engaging reading experience.",
                        "Faster content delivery with cloud-based distribution and AI-powered recommendations.",
                        "Improved content security with DRM and anti-piracy measures.",
                        "Wider audience reach through multi-edition, multi-language, and offline support.",
                        "Higher revenue generation through ads, subscriptions, and in-app purchases."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-e-paper-app.webp"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Rajesh S</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Mumbai, India</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen delivered a cutting-edge E-Paper app that transformed our newspaper into a fully digital platform. The offline reading, AI-based recommendations, and smooth user experience have significantly boosted our readership and subscriptions. A truly expert team in E-Paper app development!"</p>
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