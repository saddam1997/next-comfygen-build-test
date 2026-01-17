import Head from 'next/head';
import React, { useState } from 'react';

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
                <title>AI-Powered Medicine-Ordering App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/ai-powered-medicine-ordering-app" />
                <meta name="description" content="Comfygen developed an AI-powered medicine-ordering app with personalized recommendations, real-time tracking, multi-vendor support, and secure prescription verification. Our HIPAA-compliant solution enhances user engagement and streamlines online medicine purchases." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="AI-Powered Medicine-Ordering App Development" />
                <meta property="og:description" content="Comfygen developed an AI-powered medicine-ordering app with personalized recommendations, real-time tracking, multi-vendor support, and secure prescription verification. Our HIPAA-compliant solution enhances user engagement and streamlines online medicine purchases." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/ai-powered-medicine-ordering-app" />
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
                        heading="AI-Powered Medicine-Ordering App"
                        subhead=""
                        ptag="Our client required an advanced medicine ordering app development solution that leverages AI and machine learning to provide personalized medicine recommendations based on users' health conditions. As a top medicine delivery app development company, we created a seamless, user-friendly platform that simplifies online medicine ordering, integrates secure payments, and supports multiple vendors for a smooth and efficient purchasing experience."
                        imageSrc="https://www.comfygen.com/image/hero-image-ai-powered-medicine-ordering-app.webp"
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
                    heading="Challenge"
                    points={[
                        "Implementing AI-driven medicine recommendations tailored to user health conditions and purchase history.",
                        "Ensuring real-time stock updates and order management for multiple pharmacy vendors.",
                        "Developing a secure prescription verification system for compliance with medical regulations.",
                        "Integrating multiple payment gateways for a hassle-free checkout process.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-ai-powered-medicine-ordering-app.webp"
                    imagePosition="left"
                />
                <Features
                    heading="Features"
                    points={[
                        "<b>AI-Powered Medicine Suggestions – </b> Smart recommendations based on user health conditions and past orders.",
                        "<b>Multi-Vendor Support – </b> Users can choose from various pharmacies for better availability and pricing..",
                        "<b>Easy Prescription Upload & Verification – </b> Secure system for doctors and pharmacists to verify orders.",
                        "<b>Real-Time Order Tracking – </b> Live updates on medicine delivery status.",
                        "<b>Secure Payment Integration – </b> Multiple payment options including UPI, credit/debit cards, and wallets.",
                        "<b>Subscription & Auto-Refill –  </b>Set up automatic medicine refills for ongoing treatments.",
                        "<b>Multi-Language Support – </b> Accessible to users in different regions with localized language options.",
                        "<b>Dark Mode & Custom UI – </b> Enhanced readability and personalized user experience."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-ai-powered-medicine-ordering-app.webp"
                />

                <Features
                    heading="Solution"
                    points={[
                        "As a leading medicine delivery app development company, we built an AI-powered ordering platform that enhances user engagement and streamlines medicine purchases.",
                        "Integrated machine learning algorithms for personalized medicine recommendations.",
                        "Developed a HIPAA-compliant system for secure prescription handling and user data protection.",
                        "Implemented multi-vendor order management to ensure smooth pharmacy coordination.",
                        "Optimized cloud infrastructure for high scalability and real-time inventory updates.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-ai-powered-medicine-ordering-app.webp"
                    imagePosition="left"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "35% increase in user engagement with AI-driven medicine recommendations.",
                        "Higher revenue generation through vendor partnerships and premium subscriptions.",
                        "Enhanced security & compliance with encrypted prescription handling.",
                        "Faster medicine deliveries with optimized logistics and tracking.",
                        "Scalability & expansion-ready for global markets with multi-language support."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-ai-powered-medicine-ordering-app.webp"
                />

                <TechStack
                    title="Technology Stack: Pharmacy Chain App"
                    description="Our team of expert developers used the latest technologies to build a robust and scalable medicine delivery platform."
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'> Al Zaif</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Sohar, Oman</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen delivered an exceptional AI-powered medicine ordering app that has transformed the way users purchase medicines. The personalized recommendations, secure payment options, and seamless multi-vendor support have significantly improved customer satisfaction. Highly recommended for healthcare app development!"</p>
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
