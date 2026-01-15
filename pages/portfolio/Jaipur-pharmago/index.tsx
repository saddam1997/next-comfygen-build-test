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

export default function about(props) {
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => setTalkToExpertModal(true);
    const closeModal = () => setTalkToExpertModal(false);

    let { initialData } = props;
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Jaipur Pharmago – On-Demand Medicine Delivery App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/Jaipur-pharmago" />
                <meta name="description" content="Comfygen developed Jaipur Pharmago, a robust on-demand medicine delivery app for a Jaipur-based startup. This app, which integrates multiple pharmacies, offers AI-driven medicine recommendations, real-time order tracking, and HIPAA-compliant prescription uploads." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Jaipur Pharmago – On-Demand Medicine Delivery App Development" />
                <meta property="og:description" content="Comfygen developed Jaipur Pharmago, a robust on-demand medicine delivery app for a Jaipur-based startup. This app, which integrates multiple pharmacies, offers AI-driven medicine recommendations, real-time order tracking, and HIPAA-compliant prescription uploads." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/Jaipur-pharmago" />
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
                <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
                    <CompanyHeroSection
                        heading="Jaipur Pharmago – On-Demand Medicine Delivery App"
                        subhead=""
                        ptag="Our Jaipur-based client, a startup in the healthcare sector, needed an on-demand medicine delivery app development solution to provide quick and hassle-free access to medicines. As a top medicine delivery app development company, we built a scalable, user-friendly mobile app that allows users to order medicines from multiple pharmacies, track deliveries in real-time, and receive automated reminders for prescription refills."
                        imageSrc="https://www.comfygen.com/image/hero-image-Jaipur-pharmago.webp"
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
                        "Developing a robust on-demand medicine delivery app with real-time pharmacy inventory management.",
                        "Ensuring compliance with healthcare regulations for secure prescription uploads and transactions.",
                        "Implementing a seamless user experience with AI-driven medicine recommendations and instant order tracking.",
                        "Managing high traffic loads while ensuring quick order fulfillment and delivery optimization.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-Jaipur-pharmago.webp"

                />
                <Features
                    heading="Features"
                    points={[
                        "<b>Multiple Pharmacy Integration – </b>  Users can order from various verified pharmacies within the app.",
                        "<b>Automated Inventory Management –  </b> Live stock updates to ensure accurate medicine availability.",
                        "<b>AI-Powered Medicine Recommendations – </b>  Smart suggestions based on user history and prescriptions.",
                        "<b>Prescription Upload & Verification – </b>  Securely upload prescriptions for pharmacist approval.",
                        "<b>Real-Time Order Tracking – </b>  Track medicine deliveries with live status updates.",
                        "<b>Push Notifications & Refill Reminders – </b>  Automated alerts for medicine refills and health reminders.",
                        "<b>Multiple Payment Options – </b>  Secure transactions via UPI, wallets, cards, and net banking.",
                        "<b>Telemedicine & Doctor Consultation – </b>  In-app doctor appointments for remote medical assistance."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-Jaipur-pharmago.webp"
                    imagePosition='left'
                />

                <Features
                    heading="Solution"
                    points={[
                        "As a leading medicine delivery app development company, we built a high-performance mobile platform using Flutter for cross-platform support and Node.js for a robust backend.",
                        "Integrated AI-driven medicine recommendations for a personalized shopping experience.",
                        "Developed a secure and HIPAA-compliant prescription management system.",
                        "Optimized cloud infrastructure to handle high traffic and ensure smooth app performance.",
                        "Implemented real-time notifications and tracking for enhanced user engagement.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-Jaipur-pharmago.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "30% faster medicine delivery with optimized logistics and live tracking.",
                        "Higher customer retention through AI-powered recommendations and refill reminders.",
                        "Increased revenue with in-app promotions, subscriptions, and pharmacy partnerships.",
                        "Scalability & future expansion with a multi-pharmacy model and region-wise adaptability.",
                        "Secure & compliant with encrypted prescription handling and fraud detection."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-Jaipur-pharmago.webp"
                    imagePosition="left"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Ravi Sharma</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Jaipur, India</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen developed an outstanding on-demand medicine delivery app that revolutionized online pharmacy services. The AI-driven recommendations, secure prescription handling, and seamless user experience have significantly boosted our business. Highly recommended for healthcare app development!"</p>
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
