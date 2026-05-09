import Head from 'next/head';
import React, { useState } from 'react';

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

import { Star } from 'lucide-react';
import { StarHalf } from 'lucide-react';
import styles from "../components/styles.module.css"


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
            "name": "Employee Transportation App Development | Corporate Taxi Solutions",
            "provider": {
                "@type": "Organization",
                "name": "Comfygen Technologies",
                "url": "https://www.comfygen.com/"
            },
            "description": "Our Corporate Taxi App integrates automated scheduling, billing, GPS tracking & AI route optimization. Comfygen delivers secure, cost-effective corporate ride management solutions for enterprises.",
            "url": "https://www.comfygen.com/portfolio/corporate-taxi-service-provider",
            "mainEntityOfPage": "https://www.comfygen.com/portfolio/corporate-taxi-service-provider",
            "areaServed": "Global",
            "serviceType": [
                "Corporate Taxi App Development",
                "Ride Management Solution",
                "AI-based Taxi App Development",
                "Corporate Taxi Booking App Development Showcase",
                "Transportation App Development"

            ],

            "sameAs": [
                "https://www.facebook.com/comfygen.technologies",
                "https://x.com/Comfygen_Tech",
                "https://www.instagram.com/comfygen_technologies",
                "https://www.linkedin.com/company/comfygen-technologies"

            ]
        }
        ,
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
        }

        ,
        {
            "@context": "http://www.schema.org",
            "@type": "Product",
            "brand": "Comfygen Technologies",
            "Name": "Corporate Taxi App Case Study | On-Demand Employee Ride Solutions",
            "image": "https://www.comfygen.com/image/features-corporate-taxi-service-provider.webp",
            "description": " See how Comfygen delivered a scalable corporate taxi app featuring ride automation, expense tracking, secure authentication & 24/7 support, boosting employee travel efficiency by 40%.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "400"
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
                "name": "Taxi Booking App Development",
                "item": "https://www.comfygen.com/taxi-app-development-company"
            }, {
                "@type": "ListItem",
                "position": 3,
                "name": "Corporate Taxi App Development",
                "item": "https://www.comfygen.com/portfolio/corporate-taxi-service-provider"
            }]
        }

    ];
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Corporate Taxi App Development Portfolio | Employee Ride Management Solution</title>
                <meta name="description" content="Discover how Comfygen built a smart Corporate Taxi App with AI-powered scheduling, real-time GPS tracking, and secure employee authentication. Our corporate ride management solutions enhance efficiency, reduce costs, and improve employee satisfaction." />


                <meta name="keywords" content="Corporate Taxi App Development, Ride Management Solution, AI-based Taxi App Development, Corporate Taxi Booking App Development Showcase, Transportation App Development" />

                {/* <!-- Canonical Tag --> */}
                <link rel="canonical" href="https://www.comfygen.com/portfolio/corporate-taxi-service-provider" />

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
                <meta name="twitter:title" content="Corporate Taxi App Development | Smart Employee Transportation Solutions" />
                <meta name="twitter:description" content=" Comfygen developed a Corporate Taxi App with AI-based scheduling, ride pooling, expense tracking & secure payments. Streamline employee travel with our custom corporate ride management solutions." />
                <meta name="twitter:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta name="twitter:site" content="@Comfygen_Tech" />

                {/* <!-- Facebook Meta --> */}
                <meta property="og:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:secure_url" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:alt" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/corporate-taxi-service-provider" />
                <meta property="og:title" content="Corporate Ride Management App | AI-Powered Taxi App Development" />
                <meta property="og:description" content=" Explore how we built a corporate ride management app with real-time GPS tracking, automated billing, and AI-powered route optimization. Enhance efficiency and reduce costs with Comfygen’s taxi app development services." />



                {/* Structured Data Scripts */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />

            </Head>
        
            <div className="overflow-hidden ">
                <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="Corporate Taxi App Development Services"
                        subhead=""
                        ptag="Our client required a Corporate Taxi Service Provider App Development solution to optimize employee transportation, enhance scheduling, and automate billing. As a top-rated transportation app development company, we built a smart, scalable, and user-friendly platform that ensures seamless corporate ride management with expense tracking and real-time ride monitoring."
                        imageSrc="https://www.comfygen.com/image/hero-image-corporate-taxi-service-provider.webp"
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
                        "<b>Automated Ride Scheduling: </b> Pre-booking and ride automation for employees.",
                        "<b>Real-Time GPS Tracking: </b> Live tracking of rides to ensure safety and efficiency.",
                        "<b>Expense Tracking & Automated Billing: </b> Seamless invoicing and cost reports for companies.",
                        "<b>Multi-User Corporate Accounts: </b> Manage multiple employees under one account.",
                        "<b>AI-Powered Route Optimization: </b> Reduces travel time and fuel consumption.",
                        "<b>Ride Sharing & Pooling: </b> Cost-effective group travel solutions for employees.",
                        "<b>Seamless Payment Integration: </b> Supports corporate wallets, UPI, and direct billing.",
                        "<b>Secure Employee Authentication: </b> OTP-based verification and corporate ID login.",
                        "<b>In-App Support & Feedback System: </b> 24/7 customer support and ride rating system."

                    ]}
                    imageSrc="https://www.comfygen.com/image/features-corporate-taxi-service-provider.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed a corporate taxi app development solution to streamline ride booking, automate invoicing, and ensure compliance with corporate travel policies.",
                        "Managing real-time tracking, scheduling multiple rides, and integrating secure payment solutions was a key challenge.",
                        "Ensuring a smooth user experience, advanced security protocols, and seamless integration with corporate systems required an innovative approach."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challanges-corporate-taxi-service-provider.webp"
                    imagePosition="left"
                />
                <Features
                    heading="Solution:"
                    points={[
                        "As a leading corporate taxi app development company, we designed a highly scalable and AI-powered transportation platform for seamless employee ride management.",
                        "Integrated automated billing, real-time ride monitoring, and advanced security features for a smooth corporate experience.",
                        "Our custom transportation app development services ensured an intuitive UI/UX, AI-powered route optimization, and compliance with corporate travel policies."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solution-corporate-taxi-service-provider.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Improved efficiency by 40% with automated scheduling and AI-based route optimization.",
                        "Increased employee satisfaction (90%) through seamless booking and real-time ride tracking.",
                        "Cost reduction with optimized ride pooling, automated billing, and expense tracking.",
                        "Scalable architecture allowed easy expansion to multiple corporate clients.",
                        "Enhanced security and compliance with corporate travel policies and automated reporting."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-corporate-taxi-service-provider.webp"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Amit G</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>India</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><Star size={24} /> <Star size={24} /><Star size={24} /><Star size={24} /> <StarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen transformed our corporate transportation system with their AI-powered Corporate Taxi Service Provider App. Their expertise as a top-rated transportation app development company streamlined our employee ride management, improving efficiency and reducing costs. Their robust security and seamless automation have made corporate travel hassle-free. Highly recommended!"</p>
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
