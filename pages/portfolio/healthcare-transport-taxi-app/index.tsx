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

export default function about(props:any) {
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => setTalkToExpertModal(true);
    const closeModal = () => setTalkToExpertModal(false);

    let { initialData } = props;
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Emergency Healthcare Taxi App Development | Medical Transport Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/healthcare-transport-taxi-app" />
                <meta name="description" content="Take a look at our healthcare transport taxi app development portfolio. As a top-rated taxi booking app development company, Comfygen builds AI-powered apps with real-time ambulance tracking, SOS alerts & hospital integration for reliable medical transport." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Emergency Healthcare Taxi App Development | Medical Transport Solutions" />
                <meta property="og:description" content="Take a look at our healthcare transport taxi app development portfolio. As a top-rated taxi booking app development company, Comfygen builds AI-powered apps with real-time ambulance tracking, SOS alerts & hospital integration for reliable medical transport." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/healthcare-transport-taxi-app" />
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
            <div className="overflow-hidden">
                <div className="lg:py-[7rem] lg:mt-[110px] py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="Emergency Healthcare Transport Taxi Booking App"
                        subhead=""
                        ptag="Our client, a leading healthcare provider, required a custom healthcare taxi booking app development solution to offer fast, reliable, and life-saving patient transport services."
                        ptag1="As a top-rated healthcare app development company, we built a feature-rich, AI-powered emergency transport app integrating priority booking, real-time ambulance tracking, and SOS alerts for immediate medical assistance."
                        imageSrc="https://www.comfygen.com/image/hero-image-healthcare-transport-taxi-app.webp"
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
                        "<b>Priority Booking System: </b> Fast-track ride requests for emergency patients.",
                        "<b>Real-Time GPS Tracking: </b> Monitor ambulances and medical taxis in real time.",
                        "<b>SOS Emergency Alerts: </b> One-tap emergency request notification for faster response.",
                        "<b>AI-Based Route Optimization: </b> Smart navigation for the quickest and safest routes.",
                        "<b>Hospital & Paramedic Integration: </b> Seamless coordination between hospitals and ambulances.",
                        "<b>Multi-Tier Vehicle Options: </b> Choose between ambulances, wheelchair-accessible taxis, and standard healthcare transport.",
                        "<b>Secure Digital Payments & Insurance Integration: </b> Support for online payments and medical insurance claims.",
                        "<b>Automated Notifications & ETA Updates: </b> Real-time alerts for patients, caregivers, and hospitals.",
                        "<b>In-App Call & Chat Support: </b> Direct communication between patients, drivers, and hospital staff.",
                        "<b>HIPAA-Compliant Data Security: </b> Ensuring safe storage of patient transport records and medical history."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-healthcare-transport-taxi-app.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed a healthcare transport taxi app that ensures quick response times, seamless patient scheduling, and real-time ambulance tracking.",
                        "The app had to provide secure and efficient emergency dispatching, ensuring integration with hospitals, paramedics, and healthcare facilities.",
                        "Managing high-demand situations, ensuring GPS accuracy, and maintaining HIPAA-compliant data security were key challenges."
                    ]}
                    imageSrc="https://www.comfygen.com/image/Challanges-healthcare-transport-taxi-app.webp"
                    imagePosition="left"
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a custom taxi booking app development company, we built a scalable, AI-powered taxi booking platform that enables fast medical response, optimized routing, and real-time tracking.",
                        "Integrated secure SOS alerts, automated dispatching, and hospital coordination to ensure efficient patient transport management.",
                        "Our healthcare transport app development services provided a seamless, user-friendly experience with high security and reliability."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-healthcare-transport-taxi-app.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "40% reduction in emergency response time, improving patient survival rates.",
                        "Increased operational efficiency for healthcare providers and ambulance services.",
                        "Boosted patient and caregiver satisfaction with real-time tracking and instant updates.",
                        "Enhanced safety and compliance with secure medical data handling and fraud prevention.",
                        "Scalable architecture enabling future expansion into non-emergency medical transport (NEMT) services."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-healthcare-transport-taxi-app.webp"
                    imagePosition="left"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Dr. Shruti</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Bangalore, India</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen transformed our emergency healthcare transport services with their innovative taxi booking app. The real-time ambulance tracking and priority booking system have significantly reduced patient wait times, saving countless lives"</p>
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
