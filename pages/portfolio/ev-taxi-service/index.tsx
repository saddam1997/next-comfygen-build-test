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

    const jsonLdData = [
        {
            "@context": "https://schema.org",
            "@type": "PostalAddress",
            streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
            addressLocality: "Jaipur, Rajasthan",
            addressRegion: "India",
            postalCode: "302006",
            telephone: "+91-958-786-7258",
        },

        {
            "@context": "https://schema.org",
            "@type": "PostalAddress",
            streetAddress: "40 Tuxedo Ct, Toronto, ON",
            addressLocality: "Toronto",
            addressRegion: "Canada",
            postalCode: "M1G3S7",
            telephone: "+1 579-977-4475",
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "EV Ride-Hailing App Development | Smart & Sustainable Taxi Solutions",
            "provider": {
                "@type": "Organization",
                "name": "Comfygen Technologies",
                "url": "https://www.comfygen.com/"
            },
            "description": "Discover our EV Taxi App Development case study. With AI-driven routes, charging station integration, and eco ride-sharing, Comfygen delivers green taxi solutions.",
            "url": "https://www.comfygen.com/portfolio/ev-taxi-service",
            "mainEntityOfPage": "https://www.comfygen.com/portfolio/ev-taxi-service",
            "areaServed": "Global",
            "serviceType": [
                "Eco-Friendly Taxi App Development",
                "Green Mobility App Development",
                "On-Demand EV Taxi App Development",
                "AI-powered EV taxi booking app development",
                "EV Ride-Hailing App Development"

            ],

            "sameAs": [
                "https://www.facebook.com/comfygen.technologies",
                "https://x.com/Comfygen_Tech",
                "https://www.instagram.com/comfygen_technologies",
                "https://www.linkedin.com/company/comfygen-technologies"

            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Comfygen Technologies",
            "image": "https://www.comfygen.com/svg/Logo1.svg",
            "@id": "Comfygen Technologies",
            "url": "https://www.comfygen.com/",
            "telephone": "+91-958-786-7258",
            "priceRange": "$",
            "address": [{
                "@type": "PostalAddress",
                "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
                "addressLocality": "Jaipur",
                "postalCode": "302006",
                "addressCountry": "IN"
            }, {
                "@type": "PostalAddress",
                "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
                "addressLocality": "Toronto",
                "postalCode": "M1G3S7",
                "addressCountry": "Canada"
            }
            ],
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            },
            "sameAs": [
                "https://www.facebook.com/comfygen.technologies",
                "https://x.com/Comfygen_Tech",
                "https://www.instagram.com/comfygen_technologies",
                "https://www.linkedin.com/company/comfygen-technologies",
                "https://www.comfygen.com/"
            ]
        }
        ,
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Comfygen Technologies",
            "url": "https://www.comfygen.com/",
            "logo": "https://www.comfygen.com/svg/Logo1.svg",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "contactOption": "WhatsApp",
                "telephone": "+91 9587867258",

                "email": "sales@comfygen.com",
                "areaServed": ["IN", "US", "CA", "GB"],

                "availableLanguage": "en, in"
            },
            "sameAs": [
                "https://www.facebook.com/comfygen.technologies",
                "https://x.com/Comfygen_Tech",
                "https://www.instagram.com/comfygen_technologies",
                "https://www.linkedin.com/company/comfygen-technologies"
            ]
        }
        ,
        {
            "@context": "http://www.schema.org",
            "@type": "Product",
            "brand": "Comfygen Technologies",
            "Name": "Portfolio: EV Taxi App Development | AI-Powered Eco-Friendly Rides",
            "image": "https://www.comfygen.com/image/features-image-ev-taxi-service.webp",
            "description": " Comfygen created a sustainable EV Taxi App with GPS tracking, battery range estimation, charging locators & eco ride options to enhance green transportation efficiency.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "550"
            }
        }

        ,
        {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.comfygen.com"
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Taxi Booking App Development",
                "item": "https://www.comfygen.com/taxi-app-development-company"
            }, {
                "@type": "ListItem",
                "position": 3,
                "name": "EV Taxi App Development Services",
                "item": "https://www.comfygen.com/portfolio/ev-taxi-service"
            }]
        }









    ];
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>EV Taxi App Development Services | Custom Taxi Booking Solution</title>
                <meta name="description" content="Explore our EV taxi app development case study. As a top-rated EV taxi app development company, Comfygen delivers AI-driven, eco-friendly ride-hailing apps with real-time charging station locators and carbon footprint tracking for sustainable transportation." />

                {/* <!-- Canonical Tag --> */}
                <link rel="canonical" href="https://www.comfygen.com/portfolio/ev-taxi-service"></link>

                {/* <!-- Robots → */}

                <meta name="keywords" content="Eco-Friendly Taxi App Development, Green Mobility App Development, On-Demand EV Taxi App Development, AI-powered EV Taxi Booking App Development, EV Ride-Hailing App Development"/>


                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

                {/* <!-- Compatibility Meta → */}
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />

                {/* <!-- Viewport and Mobile Optimization → */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="MobileOptimized" content="320" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="viewport-fit" content="cover" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
                <meta name="apple-mobile-web-app-title" content="My App" />

                {/* <!-- New in iOS6 --> */}
                {/* <!-- Author and Company Information --> */}

                <meta name="author" content="Comfygen Technologies" />
                <meta name="web-author" content="Comfygen Technologies" />
                <meta name="reply-to" content="sales@comfygen.com" />
                <meta name="rights" content="Copyright Comfygen Technologies" />
                <meta name="copyright" content="Comfygen Technologies" />

                {/* <!-- SEO Meta --> */}

                <meta name="googlebot" content="all" />
                <meta name="revisit-after" content="3 days" />
                <meta name="distribution" content="Global" />
                <meta name="rating" content="General" />
                <meta name="coverage" content="Worldwide" />
                <meta name="language" content="English" />

                {/* <!-- Geo Location Meta --> */}

                <meta name="geo.region" content="IN" />
                <meta name="geo.region" content="US" />
                <meta name="geo.region" content="CA" />
                <meta name="geo.region" content="GB" />
                <meta name="geo.region" content="AE" />
                <meta name="geo.region" content="DE" />

                {/* <!-- Open Graph (OG) Tag --> */}

                <meta name='og:type' content='website' />
                <meta name='og:site_name' content='Comfygen Technologies' />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="en_CA" />
                <meta property="og:locale:alternate" content="en_GB" />
                <meta property="og:locale:alternate" content="en_DE" />
                <meta property="og:locale:alternate" content="en_AE" />
                <meta name='fb:page_id' content='110909321596135' />
                <meta name='og:email' content='sales@comfygen.com' />
                <meta name='og:phone_number' content='+91-958-786-7258' />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* <!-- Twitter Card Tags -->  */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Electric Taxi App Development | Sustainable Ride-Hailing Solutions" />
                <meta name="twitter:description" content=" Comfygen developed an eco-friendly EV Taxi App featuring real-time charging station maps, carbon footprint tracking, and AI-powered route optimization for green mobility." />
                <meta name="twitter:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta name="twitter:site" content="@Comfygen_Tech" />

                {/* <!-- Facebook Meta --> */}

                <meta property="og:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:secure_url" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:alt" content="Electric Taxi App Development" />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/ev-taxi-service" />
                <meta property="og:title" content="Corporate Ride Management App | AI-Powered Taxi App Development" />
                <meta property="og:description" content=" Explore how we built a corporate ride management app with real-time GPS tracking, automated billing, and AI-powered route optimization. Enhance efficiency and reduce costs with Comfygen’s AI taxi app development services." />







                {/* Structured Data Scripts */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />

            </Head>
            <div className="">
               
                    <Header />

            </div>
            <div className="overflow-hidden lg:pt-[110px]">
                <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
                    <CompanyHeroSection
                        heading="Eco-Friendly EV Taxi Service"
                        subhead=""
                        ptag="Our client sought a custom EV taxi app development solution to promote sustainable transportation while ensuring a seamless ride-booking experience. As a top-rated EV taxi app development company, we built a smart, scalable, and feature-rich platform with real-time EV charging station locators, eco-friendly ride options, and carbon footprint tracking to enhance user engagement and sustainability."
                        imageSrc="https://www.comfygen.com/image/hero-section-image-ev-taxi-service.webp"
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
                        "<b>EV Charging Station Locator: </b> Real-time map integration for nearby charging stations.",
                        "<b>Eco-Friendly Ride Options: </b> Choose between electric taxis and shared rides.",
                        "<b>Carbon Footprint Tracker: </b> Displays CO₂ savings per ride.",
                        "<b>AI-Powered Route Optimization: </b> Ensures battery-efficient travel routes.",
                        "<b>Seamless Booking System: </b> Quick ride-hailing with estimated fare and charging stops.",
                        "<b>In-App Digital Wallet: </b> Supports UPI, digital payments, and corporate billing.",
                        "<b>Driver & Vehicle Performance Monitoring: </b> Ensures efficiency and sustainability.",
                        "<b>Ride-Sharing & Pooling: </b> Encourages shared rides to reduce emissions.",
                        "<b>Real-Time Tracking & Safety Features: </b> GPS tracking, SOS alerts, and driver authentication."
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-image-ev-taxi-service.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed an Electric Vehicle taxi booking app development solution that integrates real-time EV charging station data, automated ride booking, and an eco-friendly travel calculator.",
                        "Managing battery range estimations, optimizing routes for EV efficiency, and ensuring seamless payments was a significant challenge.",
                        "Ensuring scalability, regulatory compliance, and a smooth user experience required an innovative approach."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-image-ev-taxi-service.webp"
                    imagePosition="left"
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a leading EV taxi app development company, we designed a high-performance, AI-powered platform tailored for sustainable transportation.",
                        "Integrated real-time EV charging station data, battery range estimation, and AI-driven route optimization for maximum efficiency.",
                        "Our custom transportation app development services ensured a smooth UI/UX, regulatory compliance, and a seamless booking system for eco-conscious users."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-image-ev-taxi-service.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "20% increase in eco-conscious riders due to sustainability-focused features.",
                        "15% reduction in operational costs with AI-driven efficiency and optimized energy consumption.",
                        "Lower carbon footprint with EV ride-sharing and automated route optimization.",
                        "Scalable platform for expansion to new cities and fleet sizes.",
                        "Improved driver efficiency with battery management insights and real-time tracking."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-ev-taxi-service.webp"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'> Rohit M</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>India</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen delivered a cutting-edge EV taxi app development solution that revolutionized our sustainable ride-hailing business. Their expertise in AI-driven mobility solutions ensured seamless operations, reduced costs, and enhanced customer engagement. The carbon footprint tracker and real-time charging station locator set us apart in the industry"</p>
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
