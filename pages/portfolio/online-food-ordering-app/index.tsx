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
            "name": "Online Food Ordering App Case Study | AI Food Delivery App Development",
            "provider": {
                "@type": "Organization",
                "name": "Comfygen Technologies",
                "url": "https://www.comfygen.com/"
            },
            "description": "See how Comfygen created an AI-powered Food Ordering App with real-time order tracking, intelligent recommendations, and multi-payment support, boosting customer satisfaction and business revenue.",
            "url": "https://www.comfygen.com/portfolio/online-food-ordering-app",
            "mainEntityOfPage": "https://www.comfygen.com/portfolio/online-food-ordering-app",
            "areaServed": "Global",
            "serviceType": [
                "AI Recommendation Food Ordering App",
                "AI Food Delivery App Development",
                "Food Ordering App with Real-Time Tracking",
                "Food Ordering App Development Showcase",
                "Personalized Food Ordering App Portfolio"

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
        },
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
        },
        {
            "@context": "http://www.schema.org",
            "@type": "Product",
            "brand": "Comfygen Technologies",
            "Name": "Online Food Ordering App Case Study | AI Food Delivery App Development",
            "image": "https://www.comfygen.com/image/online-food-ordering-app-features-image.webp",
            "description": "See how Comfygen created an AI-powered Food Ordering App with real-time order tracking, intelligent recommendations, and multi-payment support, boosting customer satisfaction and business revenue.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "360"
            }
        },
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
                "name": "Food Delivery App Development",
                "item": "https://www.comfygen.com/food-delivery-app-development"
            }, {
                "@type": "ListItem",
                "position": 3,
                "name": "AI Recommendation Food Delivery App",
                "item": "https://www.comfygen.com/portfolio/online-food-ordering-app"
            }]
        }







    ];

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Online Food Ordering App | AI Recommendation Food Delivery App Development</title>


                 <meta  name="description" content="Comfygen built an AI-powered Online Food Ordering App with personalized meal recommendations, real-time tracking, and secure payments. As a leading food delivery app development company in India, we provide AI-powered food ordering solutions." />
                {/* <!-- Canonical Tag --> */}

                <link rel="canonical" href="https://www.comfygen.com/portfolio/online-food-ordering-app"></link>

                {/* <!-- Robots → */}
                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
                {/* keywords */}
                <meta name="keywords" content="AI Recommendation Food Ordering App, AI Food Delivery App Development, Food Ordering App with Real-Time Tracking, Food Ordering App Development Showcase, Personalized Food Ordering App Portfolio" />


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

                {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}

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
                <meta name="twitter:title" content="AI Recommendation Food Ordering App" />
                <meta name="twitter:description" content=" Comfygen developed an intelligent Online Food Ordering App with AI-driven recommendations, multiple payment gateways, and seamless restaurant integration to enhance user experience and business profitability." />
                <meta name="twitter:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta name="twitter:site" content="@Comfygen_Tech" />

                {/* <!-- Facebook Meta --> */}

                <meta property="og:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:secure_url" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:alt" content="AI-Powered Online Food Ordering App Development" />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/online-food-ordering-app" />
                <meta property="og:title" content="AI-Powered Online Food Ordering App | Custom Food Delivery Solutions" />
                <meta property="og:description" content="Our Online Food Ordering App uses AI to provide personalized meal suggestions, seamless ordering, and secure payments. Comfygen ensures scalable food delivery app development for startups and enterprises." />





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
                        heading="Online Food Ordering App"
                        subhead=""
                        ptag="Our client wanted an AI Recommendation Food Ordering App Development solution that provides personalized food suggestions based on user preferences, order history, and real-time trends. As a leading AI food delivery app development company, we created a smart, scalable, and engaging platform that enhances user experience with AI-driven recommendations and seamless food ordering."
                        imageSrc="https://www.comfygen.com/image/online-food-ordering-app-hero-image.webp"
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
                        "<b> AI-Powered Personalized Food Recommendations – </b> Smart AI algorithms suggest meals based on user behavior.",
                        "<b>Real-Time Order Tracking & Delivery Updates –</b>  Live updates on order status and estimated delivery time.",
                        "<b>Multiple Payment Gateways – </b> Secure transactions with credit/debit cards, UPI, wallets, and COD.",
                        "<b>Restaurant & Cuisine-Based Filtering –</b>  Advanced search options based on food preferences and dietary needs.",
                        "<b>Push Notifications for Deals & Offers – </b> AI-driven promotions to enhance user engagement."
                    ]}
                    imageSrc="https://www.comfygen.com/image/online-food-ordering-app-features-image.webp"
                />
                <Features
                    heading="Challenge"
                    points={[
                        "The client required a high-performing AI Recommendation Food Ordering App with advanced machine learning algorithms for precise food suggestions.",
                        "Real-time data processing, seamless restaurant partner integration, and a user-friendly interface were key challenges."
                    ]}
                    imageSrc="https://www.comfygen.com/image/online-food-ordering-app-challanges.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution"
                    points={[
                        "As the Best Food Delivery App Development Company in India, we developed a feature-rich AI Recommendation Food Ordering App using machine learning and AI-driven analytics.",
                        "Our best custom Food Delivery App Development services ensured intelligent order predictions, personalized deals, and a seamless ordering experience to enhance customer satisfaction."
                    ]}
                    imageSrc="https://www.comfygen.com/image/online-food-ordering-app-solution-image.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Our on-demand Food Delivery App Development Company built an AI-powered solution that increased customer retention, boosted order value, and enhanced user engagement.",
                        "The app’s intelligent recommendation system drove higher conversions, while its scalable architecture supported business growth and revenue expansion."
                    ]}
                    imageSrc="https://www.comfygen.com/image/online-food-ordering-app-business-benefits-image.webp"
                    imagePosition='left'
                />
                <TechStack
                    title="Our Technology Stack for delivering best Food Delivery App Development "
                    description="You can hire Android developers from our team with the assurance of expertise in the modern technology stack to create Android apps."
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Michael Johnson</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>USA</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen is the best food delivery app development company in India! Their expertise in AI food delivery app development has helped us build an innovative and efficient food ordering platform. Their best custom Food Delivery App Development services ensured a smooth, scalable, and secure experience for our users."</p>
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
