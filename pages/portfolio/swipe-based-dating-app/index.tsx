import Head from 'next/head';
import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';


import dynamic from 'next/dynamic';
import Header from '../../Newcomponet/layout/Header';
import CompanyHeroSection from '../../Newcomponet/portfolio/CompanyHeroSection';
const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);
const Features = dynamic(() => import("../../Newcomponet/portfolio/Features"),
  { loading: loader, ssr: true }
);
const TechStack = dynamic(() => import("../../Newcomponet/SectionCompoent/TechStack"),
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
            "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
            "addressLocality": "Jaipur, Rajasthan",
            "addressRegion": "India",
            "postalCode": "302006",
            "telephone": "+91-958-786-7258"
        },
        {
            "@context": "https://schema.org",
            "@type": "PostalAddress",
            "streetAddress": "40 Tuxedo Ct, Toronto, ON",
            "addressLocality": "Toronto",
            "addressRegion": "Canada",
            "postalCode": "M1G3S7",
            "telephone": "+1 579-977-4475"
        },

        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Powered Swipe Dating App | Feature-Rich Matchmaking Platform",
            "provider": {
                "@type": "Organization",
                "name": "Comfygen Technologies",
                "url": "https://www.comfygen.com/"
            },
            "description": "Discover our AI-powered swipe dating app with GPS matching, secure authentication, multi-language support & dark/light mode. Comfygen builds engaging dating apps for global users.",
            "url": "https://www.comfygen.com/portfolio/swipe-based-dating-app",
            "mainEntityOfPage": "https://www.comfygen.com/portfolio/swipe-based-dating-app",
            "areaServed": "Global",
            "serviceType": [
                "Matchmaking dating app development",
                "custom dating app development solutions",
                "AI-powered swipe dating app development",
                "Dating app like Tinder",
                "Swipe Dating App Development Portfolio"

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
            "Name": "Portfolio: Swipe-Based Dating App",
            "image": "https://www.comfygen.com/image/dating-portfolio-feature-image.webp",
            "description": "See how Comfygen built a swipe-based dating app with AI matchmaking, real-time communication & profile verification, boosting user engagement & retention.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "350"
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
                "name": "Portfolio",
                "item": "https://www.comfygen.com/portfolio"
            }, {
                "@type": "ListItem",
                "position": 3,
                "name": "Swipe Dating App Development Portfolio",
                "item": "https://www.comfygen.com/portfolio/swipe-based-dating-app"
            }]
        }

    ];

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Swipe-Based Dating App Development | AI Matchmaking</title>
               

                <meta name="description" content="Comfygen Technologies built a swipe-based dating app with AI matchmaking, secure chat, video calls & location-based matches. A scalable dating app development solution for modern users." />

                {/* keywords */}
                <meta name="keywords" content="Matchmaking dating app development, Custom dating app development solutions, AI-powered swipe dating app development, Dating app like Tinder, Swipe dating app development portfolio" />

                {/* <!-- Canonical Tag --> */}
                <link rel="canonical" href="https://www.comfygen.com/portfolio/swipe-based-dating-app" />
                {/* <!-- Robots → */}
                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

                {/* <!-- Compatibility Meta → */}
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />

                {/* <!-- Viewpo/rt and Mobile Optimization → */}
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

                {/* <!-- Twitter Card Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Swipe Dating App Development | Secure & Scalable Matchmaking Solutions" />
                <meta name="twitter:description" content=" Our swipe-based dating app integrates AI matchmaking, encrypted chats, social logins & monetization features. Comfygen delivers scalable, high-performance dating app development." />
                <meta name="twitter:image" content="https://www.comfygen.com/image/dating-portfolio-feature-image.webp" />
                <meta name="twitter:site" content="@Comfygen_Tech" />

                {/* <!-- Facebook Meta --> */}
                <meta property="og:image" content="https://www.comfygen.com/image/dating-portfolio-feature-image.webp" />
                <meta property="og:image:secure_url" content="https://www.comfygen.com/image/dating-portfolio-feature-image.webp" />
                <meta property="og:image:alt" content="Swipe Dating App Development Portfolio " />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/swipe-based-dating-app" />
                <meta property="og:title" content="Swipe Dating App Development Portfolio " />
                <meta property="og:description" content=" Explore our swipe-based dating app featuring AI-powered recommendations, real-time chat, video calls & profile verification. Comfygen Technologies delivers innovative dating app development." />


                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdData)
                    }}
                />

            </Head>
            <div className="">
                <LazyLoad height={80} offset={100}>
                    <Header />
                </LazyLoad>
            </div>
            <div className="overflow-hidden">
                <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
                    <CompanyHeroSection
                        heading="Swipe-Based Dating App"
                        subhead=""
                        ptag="Our client sought an innovative swipe-based dating app development solution to connect users through a seamless, interactive interface. The goal was to design an intuitive, engaging platform that enhances user experience while ensuring security, scalability, and real-time communication. As a top-rated dating app development company, we created a feature-rich application that facilitates effortless matchmaking and social interaction."
                        imageSrc="https://www.comfygen.com/image/dating-app-portfolio-hero-image.png"
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
                        "<b>AI-Powered Matching : </b> Smart recommendations based on interests, behavior, and location",
                        "<b>Swipe-Based Interface : </b>  Quick and interactive matching experience with left/right swipes.",
                        "<b>Real-Time Chat & Video Calls : </b>   Secure in-app messaging and live video calls",
                        "<b>Location-Based Matching : </b>  Connect with nearby users using GPS-based suggestions",
                        "<b>Profile Verification & Security : </b>  AI-based identity verification to prevent fake profiles",
                        "<b>Social Media Integration : </b>  Seamless sign-up and profile linking with Facebook, Google, and Instagram",
                        "<b>Multi-Language Suppor : </b>  Expand user base with language customization",
                        "<b>Dark & Light Mode : </b>  Enhanced UI experience with theme customization"
                    ]}
                    imageSrc="https://www.comfygen.com/image/dating-portfolio-feature-image.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client required an advanced swipe dating app development solution with AI-driven matchmaking.",
                        "Needed real-time chat, video calls, and location-based recommendations for enhanced user engagement.",
                        "Ensuring secure authentication, profile verification, and data privacy was a major concern.",
                        "The app had to be highly scalable to handle a rapidly growing user base without performance issues.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/dating-portfolio-page-challenge-image.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a custom dating app development company, we built a feature-rich dating mobile app development solution.",
                        "Implemented AI-powered matchmaking algorithms for personalized user recommendations.",
                        "Developed a secure and scalable backend with real-time features like chat and video calls.",
                        "Integrated social media login, profile verification, and end-to-end encryption for data security.",
                        "Designed an intuitive swipe-based interface for seamless user interactions.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/dating-portfolio-page-solution-image.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Improved user engagement and retention through personalized matchmaking and interactive features.",
                        "Enhanced security and trust with AI-driven profile verification and encrypted messaging.",
                        "Scalable infrastructure ensured effortless business expansion and growth.",
                        "Integrated monetization strategies like premium memberships and in-app purchases for increased revenue.",
                        "Positioned as a top-rated dating app development company by delivering an innovative and secure platform."
                    ]}
                    imageSrc="https://www.comfygen.com/image/dating-portfolio-page-business-benefits-image.webp"
                    imagePosition='left'
                />

                <TechStack
                    title="Our Edgy Tech-Stacks Use for Dating app development"
                    description="The only focus is not the engagement, but building a highly-secured and robust web or application. For strong Dating app development, some edgy tech stacks are being used."
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Michael S., Los Angeles,</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Muscat, Oman</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen delivered exactly what we envisioned for our Matchmaking Dating App Development. The AI-powered matching system has significantly improved user engagement and the app's security features ensure a trustworthy experience. Their expertise as a top-rated dating app development company made the entire process smooth and efficient. Highly recommended !"</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
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