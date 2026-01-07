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
            "name": "Custom Social Media App Development | Celebrity Platform EangeX",
            "provider": {
                "@type": "Organization",
                "name": "Comfygen Technologies",
                "url": "https://www.comfygen.com/"
            },
            "description": "See how Comfygen delivered EangeX, a celebrity-driven social media app with personalized feeds, video calls, secure chats & advanced engagement tools.",
            "url": "https://www.comfygen.com/portfolio/eange-x",
            "mainEntityOfPage": "https://www.comfygen.com/portfolio/eange-x",
            "areaServed": "Global",
            "serviceType": [
                "Professional social media app development",
                "custom social media app development solutions",
                "AI-powered social media development",
                "Celebrities based Social Media App Development Portfolio"

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
                "areaServed": ["IN", "US", "CA", "GB", "UAE"],

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
            "Name": " Celebrity Social Media App Development Services",
            "image": "https://www.comfygen.com/image/eange-x-features-image.webp",
            "description": "Build your own celebrity-focused social media app like EangeX with Comfygen. We deliver AI-powered feeds, real-time chat, encrypted messaging, and scalable social media app development solutions.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "520"
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
                "name": "Celebrities Social Media App Development | EangeX Portfolio",
                "item": "https://www.comfygen.com/portfolio/eange-x"
            }]
        }

    ];

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Celebrities Social Media App Development | EangeX</title>
                <meta name="description" content="Discover how Comfygen built EangeX, a next-gen celebrities social media app with AI-driven feeds, secure messaging, real-time interactions & scalable architecture." />

                {/* keywords */}
                <meta name="keywords" content="Professional social media app development, custom social media app development solutions, AI-powered social media development, Celebrities based Social Media App Development, social media app development portfolio, AI social media apps, custom social networking app solutions" />


                {/* <!-- Canonical Tag --> */}
                <link rel="canonical" href="https://www.comfygen.com/portfolio/eange-x" />

                {/* <!-- Robots → */}
                <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

                {/* <!-- Compatibility Meta → */}
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

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
                <meta name="twitter:title" content="Custom Social Media App Development | Celebrity Platform EangeX" />
                <meta name="twitter:description" content="See how Comfygen delivered EangeX, a celebrity-driven social media app with personalized feeds, video calls, secure chats & advanced engagement tools." />
                <meta name="twitter:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta name="twitter:site" content="@Comfygen_Tech" />

                {/* <!-- Facebook Meta --> */}
                <meta property="og:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:secure_url" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:alt" content="Celebrities Social Media App Development Portfolio " />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/eange-x" />
                <meta property="og:title" content="AI-Powered Social Media App Development for Celebrities | EangeX " />
                <meta property="og:description" content="Check out EangeX, a celebrity social media app we developed with AI-driven recommendations, real-time messaging & scalable cloud infrastructure." />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
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
                        heading="EangeX – A Social Media Platform"
                        subhead=""
                        ptag="Our client envisioned EangeX, a next-gen social media platform designed to foster engagement, content sharing, and seamless interactions. As a Best Social Media App Development Company, we built an innovative, user-friendly app with AI-driven recommendations, real-time messaging, and multimedia sharing features. Our expertise as an offshore social media app development company ensured a scalable and high-performance solution."
                        imageSrc="https://www.comfygen.com/image/eange-x-horo-image.webp"
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
                    heading="Features:"
                    points={[
                        "AI-driven content recommendations and personalized feeds",
                        "Secure messaging, video calls, and multimedia sharing",
                        "Real-time notifications and interactive user engagement tools",
                        "End-to-end encrypted chats and privacy-focused user settings",
                        "AI-based content moderation to prevent spam and misinformation",
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-features-image.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client required a Social Media App Development Company in India to create a dynamic platform with real-time content delivery, high user engagement, and secure data management. Overcoming challenges like high-traffic handling, content moderation, and seamless multimedia sharing was essential."
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-challenges-image.webp"
                    imagePosition="left"
                />

                <Features
                    heading="Solution"
                    points={[
                        "As the best custom social media app development company in India, we designed and developed a feature-rich social media app development services provider solution with AI-powered content suggestions, real-time chat, and cloud-based media storage. Our robust architecture ensured high-speed performance and enhanced user experience.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-solutions-image.webp"
                />

                <Features
                    heading="Business Benefits"
                    points={[
                        "Our Social Media App Development Company solution helped EangeX boost user engagement, enhance content virality, and provide a seamless networking experience. The scalable architecture supported future growth, while monetization models like in-app ads and premium subscriptions increased revenue."
                    ]}
                    imageSrc="https://www.comfygen.com/image/eange-x-business-benefits-image.webp"
                    imagePosition="left"
                />

                <TechStack
                    title="Development Technologies We Use"
                    description="We use cutting-edge technologies for blockchain solution development. There is no scope we leave building the best blockchain applications."
                    filterCategory={["crypto"]}
                />

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