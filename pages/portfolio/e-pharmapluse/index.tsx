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
                <title>E-PharmaPluse – Advanced Medicine Delivery App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/ai-powered-medicine-ordering-app" />
                <meta name="description" content="Check out our innovative medicine delivery app development solution for seamless online pharmacy services, real-time tracking, and secure prescription verification. E-PharmaPluse app is built for a German client to ensure user convenience and efficiency." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="E-PharmaPluse – Advanced Medicine Delivery App Development" />
                <meta property="og:description" content="Check out our innovative medicine delivery app development solution for seamless online pharmacy services, real-time tracking, and secure prescription verification. E-PharmaPluse app is built for a German client to ensure user convenience and efficiency." />
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
                <LazyLoad height={80} offset={100}>
                    <Header />
                </LazyLoad>
            </div>
            <div className="overflow-hidden">
                <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
                    <CompanyHeroSection
                        heading="E-PharmaPluse App – Advanced E-Pharmacy Solution"
                        subhead=""
                        ptag="Our Germany-based client, a leading healthcare enterprise, needed a cloud-based e-pharmacy app development solution to streamline online medicine delivery and enhance accessibility for customers. As a top medicine delivery app development company, we developed E-PharmaPluse, a feature-rich on-demand e-pharmacy app that ensures seamless medicine ordering, real-time tracking, and multi-language support for a diverse user base."
                        imageSrc="https://www.comfygen.com/image/e-pharmapluse-hero-image.webp"
                        buttonText="Talk To Consultant"
                        openModal={openModal}
                        closeModal={closeModal}
                        talkToExpertModal={talkToExpertModal}
                        buttonLink="/portfolio"
                        imageHeight={423}
                        imageWidth={640}
                    />
                </div>
                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "Building a secure and scalable cloud-based pharmacy platform to handle high demand.",
                        "Implementing real-time GPS tracking for accurate medicine delivery updates.",
                        "Enabling multi-language support for a diverse customer base in Germany and beyond.",
                        "Introducing a subscription-based model for hassle-free monthly medicine deliveries.",
                        "Ensuring regulatory compliance with GDPR and pharmacy laws for data security and prescription validation."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-e-pharmapluse.webp"
                />
                <Features
                    heading="Features"
                    points={[
                        "<span class='font-semibold' >Real-Time GPS Tracking – </span> Live delivery updates and estimated time of arrival.",
                        "<span class='font-semibold' >Multi-Language Support – </span> Available in German, English, and other regional languages.",
                        "<span class='font-semibold' >AI-Powered Medicine Recommendations – </span> Smart suggestions based on user health profiles.",
                        "<span class='font-semibold' >Subscription-Based Medicine Delivery – </span> Monthly auto-refill and scheduled deliveries.",
                        "<span class='font-semibold' >Secure Prescription Upload & Verification – </span> Ensuring compliance with healthcare regulations.",
                        "<span class='font-semibold' >Multiple Payment Options – </span> Integration with PayPal, credit/debit cards, and e-wallets.",
                        "<span class='font-semibold' >Order History & Repeat Orders – </span> Quick reordering for frequently purchased medicines.",
                        "<span class='font-semibold' >Dark Mode & UI Customization – </span> Enhanced accessibility and user experience.",
                        "<span class='font-semibold' >Push Notifications & Alerts – </span> Timely reminders for medicine intake and order updates."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-e-pharmapluse.webp"
                />

                <InfomationFirst
                    heading="Solution"
                    points={[
                        "<span class='font-semibold'> At Comfygen, we focused on creating an AI- </span>powered and scalable e-pharmacy solution that enhances user engagement, ensures compliance, and streamlines operations.",
                        "<span class='font-semibold'> AI-Powered Medicine Recommendations – </span> Integrated machine learning algorithms to suggest medicines based on user health profiles and past orders.",
                        "<span class='font-semibold'> Cloud-Based Architecture – </span> Developed a scalable and high-performance infrastructure for seamless operations.",
                        "<span class='font-semibold'> Real-Time GPS Tracking – </span> Enabled users to track their medicine deliveries with live updates.",
                        "<span class='font-semibold'> Secure Prescription Upload & Verification – </span> Implemented automated AI-based prescription scanning for quick verification and fraud prevention.",
                        "<span class='font-semibold'> Subscription-Based Refill System – </span> Introduced auto-refill and scheduled medicine delivery to improve customer convenience.",
                        "<span class='font-semibold'> Multi-Language & Localization Support – </span> Provided German, English, and regional language support for a broader audience reach.",
                        "<span class='font-semibold'> Smart Search & Categorization – </span> Designed an intelligent search system with filters for symptoms, brands, and categories to enhance user experience.",
                        "<span class='font-semibold'> Secure Payment Gateway Integration – </span> Supported multiple payment methods, including credit/debit cards, e-wallets, and online banking.",
                        "<span class='font-semibold'> Data Security & GDPR Compliance – </span> Ensured end-to-end encryption and secure authentication to protect user data."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-e-pharmapluse.webp"
                />
                <InfomationSecound
                    heading="Business Benefits"
                    points={[
                        "45% increase in repeat orders through subscription-based medicine delivery.",
                        "Higher customer satisfaction with real-time tracking and multi-language support.",
                        "Improved security & compliance with GDPR-aligned data encryption and authentication.",
                        "Scalable infrastructure ready for global expansion and enterprise-level operations.",
                        "Enhanced revenue generation via premium subscriptions and vendor partnerships."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-e-pharmapluse.webp"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Johannes Schmidt</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Berlin, Germany</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen developed a cutting-edge E-Pharmacy app that has revolutionized how our customers access medicines. The real-time tracking, AI-driven recommendations, and subscription-based delivery model have greatly improved customer retention and engagement. A truly outstanding medicine delivery app development company!"</p>
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