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
                <title>Urban Ride-Hailing App Development | Custom Taxi Booking Solution</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/ride-hailing-app" />
                <meta name="description" content="Comfygen, a top ride-hailing app development company, built a feature-rich Uber-like taxi app for a Dubai startup with real-time GPS tracking, dynamic pricing & AI-driven ride-matching." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Urban Ride-Hailing App Development | Custom Taxi Booking Solution" />
                <meta property="og:description" content="Comfygen, a top ride-hailing app development company, built a feature-rich Uber-like taxi app for a Dubai startup with real-time GPS tracking, dynamic pricing & AI-driven ride-matching." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/ride-hailing-app" />
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
                        heading="Urban Ride-Hailing – Taxi Booking App Development"
                        subhead=""
                        ptag="Our client, a Dubai-based ride-hailing startup, wanted to enter the competitive ride-hailing market with a unique and scalable taxi app development solution. As a leading ride-hailing app development company, we built an Uber-like taxi app clone with real-time tracking, dynamic pricing, and multi-language support to ensure a seamless and efficient urban commuting experience."
                        imageSrc="https://www.comfygen.com/image/hero-image-ride-hailing-app.webp"
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
                        "<b>Real-Time Ride Matching & GPS Tracking: </b> Live ride requests and driver location updates.",
                        "<b>Dynamic Pricing Algorithm: </b> Adjusts fares based on demand and traffic conditions.",
                        "<b>Multi-Language Support: </b> Arabic, English, and other regional languages.",
                        "<b>Multiple Ride Categories: </b> Economy, premium, luxury, and shared rides.",
                        "<b>In-App Wallet & Multiple Payment Options: </b> Credit/debit card, digital wallets, and cash payments.",
                        "<b>Driver Earnings Dashboard: </b> Real-time income tracking and automated payout system",
                        "<b>User & Driver Ratings System: </b> Build trust through feedback and reviews.",
                        "<b>AI-Powered Route Optimization: </b> Reduces wait time and improves ride efficiency.",
                        "<b>Ride Scheduling & Corporate Accounts: </b> Pre-book rides and offer business travel solutions.",
                        "<b>Emergency SOS Button & Live Support: </b> Enhanced security for riders and drivers."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-ride-hailing-app.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed a custom ride-hailing app with fast ride matching, automated fare calculation, and multilingual support to cater to Dubai’s diverse population.",
                        "Ensuring real-time tracking, secure payment integration, and dynamic surge pricing was a major challenge.",
                        "Competing with established ride-hailing giants while offering a differentiated user experience and driver incentives."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-ride-hailing-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a top-rated taxi booking app development company, we developed a highly scalable and feature-rich ride-hailing platform tailored for Dubai.",
                        "Integrated AI-based ride matching, multi-language support, and an intuitive user interface for seamless navigation.",
                        "Our ride-hailing app development services ensured a competitive edge with real-time ride tracking, secure payments, and dynamic pricing algorithms."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-ride-hailing-app.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "50,000+ user sign-ups in the first 6 months, proving rapid adoption.",
                        "30% increase in driver registrations, ensuring better ride availability.",
                        "Improved revenue generation through commission-based earnings and surge pricing models.",
                        "Enhanced user retention with personalized ride recommendations and loyalty programs.",
                        "Scalable architecture, allowing easy expansion to other UAE cities and global markets."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-ride-hailing-app.webp"
                    imagePosition='left'
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Ahmed R</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Dubai, UAE</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen delivered a world-class urban ride-hailing app that has transformed the taxi service experience in Dubai. Their expertise in ride-hailing app development and focus on scalability helped us enter the market successfully. Highly recommended!"</p>
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
