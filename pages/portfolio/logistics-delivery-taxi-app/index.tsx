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
                <title>AI-Powered Logistics & Delivery Taxi App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/logistics-delivery-taxi-app" />
                <meta name="description" content=" Discover our logistics & delivery taxi app development case study. Comfygen, a top logistics app development company, builds AI-powered apps with real-time tracking, route optimization & fleet management for seamless deliveries." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="AI-Powered Logistics & Delivery Taxi App Development" />
                <meta property="og:description" content=" Discover our logistics & delivery taxi app development case study. Comfygen, a top logistics app development company, builds AI-powered apps with real-time tracking, route optimization & fleet management for seamless deliveries." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/logistics-delivery-taxi-app" />
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
                        heading="Logistics & Delivery Service Taxi App"
                        subhead=""
                        ptag="Our client, a leading logistics company, required a custom logistics delivery taxi app development solution to enhance last-mile delivery and fleet management."
                        ptag1="As a top-rated logistics app development company, we built a feature-rich, AI-powered platform offering real-time tracking, route optimization, and driver performance analytics to improve operational efficiency and cost savings."
                        imageSrc="https://www.comfygen.com/image/hero-image-logistics-delivery-taxi-app.webp"
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
                        "<b>Real-Time GPS Tracking: </b> Monitor deliveries and fleet movement with live tracking.",
                        "<b>AI-Powered Route Optimization: </b> Reduce fuel consumption and delivery time with smart routing.",
                        "<b>Automated Order Dispatch: </b> AI-driven task allocation for efficient driver assignment.",
                        "<b>Fleet Management Dashboard: </b> Monitor vehicle health, fuel efficiency, and driver performance.",
                        "<b>Digital Proof of Delivery (POD): </b> Electronic signatures, QR code scanning, and photo verification.",
                        "<b>Multi-Stop Deliveries: </b> Optimize multiple drop-offs in a single trip.",
                        "<b>Predictive Analytics: </b> Forecast demand, optimize warehouse stocking, and improve efficiency.",
                        "<b>Seamless Payment Integration: </b> Support for online payments, invoicing, and cash on delivery.",
                        "<b>Automated Notifications & Alerts: </b> Real-time updates on delivery status and estimated arrival time.",
                        "<b>Customer & Driver App: </b> Separate user-friendly interfaces for drivers and customers."
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-img-logistics-delivery-taxi-app.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed a logistics delivery service taxi app capable of real-time order tracking, dynamic route planning, and automated dispatch management.",
                        "Ensuring efficient last-mile delivery, fleet performance monitoring, and seamless integration with third-party logistics providers was a major challenge.",
                        "The app required scalability, secure payment processing, and predictive analytics to enhance supply chain efficiency."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-img-logistics-delivery-taxi-app.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a custom logistics taxi app development company, we built an AI-driven logistics and delivery platform with smart route planning, fleet tracking, and predictive analytics.",
                        "Implemented secure digital payments, automated dispatching, and driver monitoring features for a seamless logistics experience.",
                        "Our logistics and delivery taxi booking app development services ensured a scalable, high-performance platform that could handle peak delivery loads efficiently."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-logistics-delivery-taxi-app.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "50% improvement in delivery efficiency through AI-powered route optimization.",
                        "20% reduction in fuel costs with intelligent fleet management and real-time tracking.",
                        "Increased customer satisfaction with real-time delivery updates and predictive ETAs.",
                        "Enhanced driver productivity and performance tracking with built-in analytics tools.",
                        "Scalable platform allowing expansion to new delivery regions and industries."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-img-logistics-delivery-taxi-app.webp"
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
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Amit K</h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Mumbai, India</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Comfygen delivered an outstanding logistics app development solution tailored to our business needs. The real-time tracking and route optimization features significantly enhanced our efficiency, while the predictive analytics helped us scale operations seamlessly. A highly recommended logistics taxi booking app development company!"</p>
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
