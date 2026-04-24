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
            "name": "Secure Mobile Payment App Development Solution",
            "provider": {
                "@type": "Organization",
                "name": "Comfygen Technologies",
                "url": "https://www.comfygen.com/"
            },
            "description": "Comfygen Technologies developed a secure, AI-powered mobile payment app enabling fast, reliable, and seamless digital transactions. Explore our FinTech expertise in building next-gen payment platforms.",
            "url": "https://www.comfygen.com/portfolio/mobile-payment-app-solution",
            "mainEntityOfPage": "https://www.comfygen.com/portfolio/mobile-payment-app-solution",
            "areaServed": "Global",
            "serviceType": [
                "custom mobile payment app development",
                "Finance App Development",
                "AI-Powered Mobile Payment App Development",
                "Custom FinTech App Development Services"

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
            "Name": "Mobile Payment Solution Development Case Study | FinTech Innovation by Comfygen",
            "image": "https://www.comfygen.com/image/mobile-payment-app-solution-features.webp",
            "description": "See how Comfygen delivered an advanced mobile payment solution with multi-layer security, real-time tracking, and AI-based fraud detection for a flawless digital payment experience.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "555"
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
                "name": "Mobile Payment App Solution",
                "item": "https://www.comfygen.com/portfolio/mobile-payment-app-solution"
            }]
        }






    ];

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Custom Mobile Payment App Development | FinTech Portfolio</title>

                <meta name="description" content="Explore our innovative mobile payment app solution crafted for reliability and speed. Comfygen Technologies delivers FinTech apps with AI fraud detection, secure payment gateways, and real-time transaction insights." />

                <meta name="keywords" content="custom mobile payment app development, Finance App Development,AI-Powered Mobile Payment App Development,Custom FinTech App Development Services"/>


                {/* <!-- Canonical Tag --> */}
                <link rel="canonical" href="https://www.comfygen.com/portfolio/mobile-payment-app-solution" />

                {/* <!-- Robots → */}
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
                <meta name="twitter:title" content="Mobile Payment Solution Portfolio | Secure FinTech App Development" />
                <meta name="twitter:description" content=" Discover Comfygen’s custom mobile payment solution designed for fast, secure, and seamless digital transactions. Featuring AI-driven fraud detection, multi-layer security, and real-time payment tracking." />
                <meta name="twitter:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta name="twitter:site" content="@Comfygen_Tech" />

                {/* <!-- Facebook Meta --> */}
                <meta property="og:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:secure_url" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:alt" content="Mobile Payment App Development" />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/mobile-payment-app-solution" />
                <meta property="og:title" content="FinTech Mobile Payment Solution Case Study | Comfygen Portfolio" />
                <meta property="og:description" content="Learn how Comfygen Technologies built a secure and feature-rich mobile payment solution. Our FinTech app ensures smooth transactions, AI-powered fraud prevention, and next-level user experience." />



                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />

            </Head>
            <div className="">
              
                   {/* <Header /> */}
                
            </div>
            <div className="overflow-hidden">
                <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="Mobile Payment Solution"
                        subhead=""
                        ptag="Our client wanted a custom mobile payment app development solution that enables fast, secure, and seamless digital transactions. As a top-rated custom FinTech mobile app development company, we designed a feature-rich platform with AI-driven fraud detection, multi-layer security, and real-time transaction tracking, ensuring a smooth and reliable payment experience."
                        imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-hero-image.webp"
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
                        " <b>Instant Peer-to-Peer & Merchant Payments:</b>  Fast transactions for individuals and businesses.",
                        " <b>Multi-Layer Security:</b> Encryption, biometric authentication, and secure OTP verification.",
                        "<b>AI-Powered Fraud Detection:</b>  Real-time risk assessment and fraud prevention.",
                        "<b>Real-Time Transaction Tracking:</b> View detailed transaction history and spending insights.",
                        "<b>Bank & Digital Wallet Integration:</b>  Seamless connection with multiple banking networks.",
                        "<b>Cross-Border Payment Support:</b>Global transactions with currency conversion options.",
                        " <b>Cryptocurrency Payments: </b>Secure crypto transactions alongside traditional payment methods.",
                        " <b>Automated Bill Payments & Reminders: </b>Schedule recurring payments and receive alerts.",
                        "<b>Loyalty & Reward System: </b> Cashback, discounts, and reward points for user engagement."

                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-features.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client required a Finance App Development Solutions platform that ensures high-speed transactions, regulatory compliance, and seamless integration with multiple payment gateways.",
                        "Overcoming security threats, ensuring scalability, and providing an intuitive user experience were key challenges.",
                        "The app needed to support cross-border transactions, integrating with banks, digital wallets, and cryptocurrencies while maintaining financial compliance."
                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-challanges.webp"
                    imagePosition='left'
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As the Best Custom Finance App Development Company in India, we built a secure and scalable custom mobile payment app development platform with encrypted transactions, AI-powered risk analysis, and cross-border payment support.",
                        "Our custom FinTech app development services ensured smooth functionality, regulatory compliance, and a user-friendly interface.",
                        "The app architecture supported high transaction volumes, ensuring zero downtime and enhanced speed."
                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-solution.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Our custom mobile payment app development services improved transaction efficiency, reduced payment processing time, and increased customer trust with advanced security measures.",
                        "The scalable infrastructure supported business growth, allowing seamless expansion.",
                        "Integrated monetization strategies like transaction fees, premium services, and subscription-based models maximized revenue potential.",
                        "User-friendly design and AI-driven recommendations enhanced customer satisfaction and engagement."
                    ]}
                    imageSrc="https://www.comfygen.com/image/mobile-payment-app-solution-business-benefits.webp"
                    imagePosition='left'
                />

                <TechStack
                    title="Our Edgy Tech-Stacks Use for finance management app development"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>John Williams</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>USA</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen is the Best Custom Finance App Development Company in India! Their expertise in custom mobile payment app development helped us create a secure and scalable platform. Their custom FinTech app development services ensured smooth transactions, top-notch security, and seamless payment integrations."</p>
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
