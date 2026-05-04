import Head from 'next/head';
import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';

import dynamic from 'next/dynamic';

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
                <title>Pharmacy Chain App | Case Study </title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/pharmacy-chain-app" />
                <meta name="description" content="Using AI-powered recommendations, real-time tracking, prescription verification, and secure payments, our client created an app to streamline online pharmacy operations. For seamless healthcare e-commerce, we created a scalable, HIPAA-compliant platform." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Pharmacy Chain App | Case Study" />
                <meta property="og:description" content="Using AI-powered recommendations, real-time tracking, prescription verification, and secure payments, our client created an app to streamline online pharmacy operations. For seamless healthcare e-commerce, we created a scalable, HIPAA-compliant platform." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/pharmacy-chain-app" />
                <meta property="og:site_name" content="Comfygen" />
                <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
                <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
                <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@comfygentech" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="8 minutes" />
            </Head>
       
            <div className="overflow-hidden">
                <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="Pharmacy Chain App"
                        subhead=""
                        ptag="Our client, a leading pharmacy chain, required a medicine delivery app development solution to streamline online ordering, prescription verification, and real-time delivery tracking. As an experienced on-demand medicine delivery app development company, we built a feature-rich platform that enhances customer convenience, improves operational efficiency, and ensures secure transactions."
                        imageSrc="https://www.comfygen.com/image/hero-image-pharmacy-chain-app.webp"
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
                        "Managing Multi-Store Operations: The client wanted a unified platform to manage all their drug store locations efficiently.",
                        "Prescription Validation: Ensuring compliance with healthcare regulations for secure prescription uploads and pharmacist verification",
                        "Personalized Medicine Recommendations: Implementing AI-powered suggestions based on medical history and previous purchases.",
                        "Real-Time Order Tracking: Users needed real-time tracking and ETA notifications for medicine deliveries.",
                        "Secure Payments & Subscription Models: Enabling a seamless checkout process with multiple payment options and recurring subscription models.",
                        "Scalability & Performance: Building a platform capable of handling high traffic during peak hours, especially during health crises."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-pharmacy-chain-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Features"
                    points={[
                        "Multi-Pharmacy Support – Customers can choose from multiple pharmacy locations.",
                        "AI-Driven Medicine Recommendations – Personalized medicine suggestions based on purchase history and health conditions.",
                        "Prescription Upload & Verification – Secure system for doctors and pharmacists to review prescriptions.",
                        "Real-Time Order Tracking – Live updates on medicine delivery status.",
                        "Secure Payment Gateway Integration – Supports UPI, credit/debit cards, wallets, and net banking.",
                        "Subscription & Auto-Refill – Customers can set up scheduled medicine deliveries.",
                        "Instant Notifications & Alerts – Get updates on order status, medicine refills, and discounts.",
                        "E-Prescription Integration – Doctors can send prescriptions directly to the app, allowing patients to order medicines instantly.",
                        "Multi-Language Support – Available in multiple languages for broader reach.",
                        "Dark Mode & Custom UI – Enhances readability and user experience."

                    ]}
                    imageSrc="https://www.comfygen.com/image/features-pharmacy-chain-app.webp"
                />

                <Features
                    heading="Solution"
                    points={[
                        "As a leading medicine delivery app development company, we built a scalable and AI-powered medicine ordering platform that optimizes customer engagement and operational efficiency.",
                        "AI & Machine Learning Integration – Built an intelligent recommendation engine to personalize medicine suggestions.",
                        "Cloud-Based Infrastructure – Deployed the app on AWS & Google Cloud to ensure high performance and scalability.",
                        "Automated Inventory & Order Management – Developed real-time inventory tracking to prevent stockouts and over-ordering.",
                        "HIPAA-Compliant Prescription Handling – Ensured that all medical data was secure and met global healthcare standards.",
                        "Blockchain for Prescription Verification – Used blockchain technology to verify prescription authenticity and prevent misuse.",
                        "Real-Time Analytics Dashboard – Provided the client with insights on user behavior, order trends, and revenue reports."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-pharmacy-chain-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "50% Increase in Online Orders: With a seamless user experience, more customers opted for digital medicine purchases.",
                        "Improved Patient Retention: Auto-refill and AI-driven suggestions enhanced customer loyalty.",
                        "Higher Revenue Generation: Subscription models and targeted promotions boosted pharmacy revenue.",
                        "Enhanced Security & Compliance: Adhered to data protection laws, ensuring safe transactions.",
                        "Scalable & Future-Ready: The platform is built to support future expansion and new feature additions."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-pharmacy-chain-app.webp"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Rahul Sharma</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>India</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen built an advanced Pharmacy Chain App that has streamlined our medicine delivery operations. With AI-powered recommendations, real-time tracking, and multi-store support, our customers now enjoy a seamless and efficient medicine ordering experience. Highly recommended for pharmacy app development!"</p>
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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
