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
                <title>On-Demand Tutor Booking App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/on-demand-tutor-booking-app" />
                <meta name="description" content="Explore our tutor booking app development case study. As a top tutor app development company, Comfygen delivers AI-powered platforms with real-time scheduling, live video tutoring, and secure payments for seamless student-tutor interactions." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="On-Demand Tutor Booking App Development" />
                <meta property="og:description" content="Explore our tutor booking app development case study. As a top tutor app development company, Comfygen delivers AI-powered platforms with real-time scheduling, live video tutoring, and secure payments for seamless student-tutor interactions." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/on-demand-tutor-booking-app" />
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
                <div className="lg:py-[7rem] lg:mt-[110px] py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="On-Demand Tutor Booking App"
                        subhead=""
                        ptag="Our client wanted a real-time tutor booking app development solution that efficiently connects students with qualified tutors nearby. As a leading tutor mobile app development company, we built an AI-powered, user-friendly platform that ensures seamless tutor-student interactions through automated scheduling, secure payments, and live video sessions."
                        imageSrc="https://www.comfygen.com/image/hero-image-on-demand-tutor-booking-app.png"
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
                        "<b>AI-Powered Tutor Matching: </b> Smart algorithms recommend the best tutors based on subjects, ratings, and availability.",
                        "<b>Real-Time Booking & Scheduling: </b> Instant session booking with calendar synchronization and rescheduling options.",
                        "<b>Live Video Tutoring: </b> Integrated video conferencing for seamless virtual learning",
                        "<b>Secure Payment Gateway: </b> Multiple payment options with fraud protection",
                        "<b>Multi-Subject Support: </b> Tutors available for academic, professional, and skill-based courses.",
                        "<b>Interactive Whiteboard & File Sharing: </b> Enhance virtual lessons with digital tools.",
                        "<b>Student & Tutor Ratings: </b> Trust-based system for quality assurance.",
                        "<b>In-App Messaging & Notifications: </b> Seamless communication between students and tutors.",
                        "<b>Subscription Plans & Pay-Per-Session Model: </b> Flexible pricing for students.",
                        "<b> Multi-Language Support: </b> Expanding accessibility for global users."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-on-demand-tutor-booking-app.png"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed an on-demand tutor booking app with AI-based tutor matching, real-time availability tracking, and instant booking features.",
                        "A major challenge was ensuring seamless video tutoring, secure payment processing, and a robust review system.",
                        "The platform required multi-subject support, personalized recommendations, and scalability for future expansion."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-on-demand-tutor-booking-app.png"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a top-rated tutor booking app development company, we built a scalable and AI-driven tutoring platform with real-time scheduling, video-based learning, and an intuitive user experience.",
                        "Our e-learning app development services ensured seamless student-tutor matching, secure transactions, and high engagement rates.",
                        "Integrated automated reminders, progress tracking, and AI-based personalized learning suggestions."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-image-on-demand-tutor-booking-app.png"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Increased student engagement with AI-powered tutor recommendations.",
                        "Higher revenue generation through subscription models and in-app purchases.",
                        "Seamless learning experience, boosting student satisfaction and tutor retention.",
                        "Secure and scalable infrastructure, allowing business growth and expansion.",
                        "Real-time analytics for better platform performance and student success tracking."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-on-demand-tutor-booking-app.png"
                    imagePosition='left'
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Amit S</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Bangalore, India</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen transformed our vision into a high-performance tutor booking platform. The AI-driven tutor matching and seamless live video sessions have made learning more accessible and efficient. Their expertise in e-learning app development truly stands out!"</p>
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
