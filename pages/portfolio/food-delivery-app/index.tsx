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
            "name": "Food 24Hr – Advanced Food Delivery App Portfolio | Comfygen",
            "provider": {
                "@type": "Organization",
                "name": "Comfygen Technologies",
                "url": "https://www.comfygen.com/"
            },
            "description": "Comfygen developed Food 24Hr with advanced features like AI recommendations, real-time tracking, and wallet integration. Explore our portfolio of best food delivery app development solutions.",
            "url": "https://www.comfygen.com/portfolio/food-delivery-app",
            "mainEntityOfPage": "https://www.comfygen.com/portfolio/food-delivery-app",
            "areaServed": "Global",
            "serviceType": [
                "white-label food delivery app",
                "custom food delivery solutions",
                "AI based food delivery development solutions",
                "On-Demand Food Delivery App Development Showcase",
                "Food Delivery App Development Portfolio"

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
            "Name": "Portfolio: Food 24Hr | Best Food Delivery App Development Company",
            "image": "https://www.comfygen.com/image/food-delivery-app-portfolio-features-image.webp",
            "description": "Food 24Hr is a powerful food delivery app built by Comfygen. With user-friendly design, secure transactions, and scalable architecture, we showcase our expertise in food delivery app development.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "600"
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
                "name": "Food Delivery App Development",
                "item": "https://www.comfygen.com/food-delivery-app-development"
            }, {
                "@type": "ListItem",
                "position": 3,
                "name": "Food 24Hr Case Study",
                "item": "https://www.comfygen.com/portfolio/food-delivery-app"
            }]
        }








    ];
    return (
        <div className='overflow-hidden'>
            <Head>

                <title>Food 24Hr Portfolio | Best Food Delivery App Development Company
                </title>

                <meta name="description" content="Explore Food 24Hr, a feature-rich food delivery app built by Comfygen. With AI-powered recommendations, real-time tracking & secure payments, we deliver top-notch food delivery app development solutions that drive growth and customer engagement." />

                <meta name="keywords" content="white-label food delivery app, custom food delivery solutions, AI based food delivery development solutions, On-Demand Food Delivery App Development Showcase, Food Delivery App Development Portfolio" />



                {/* <!-- Canonical Tag --> */}
                <link rel="canonical" href="https://www.comfygen.com/portfolio/food-delivery-app"></link>

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
                <meta name="twitter:title" content="Food 24Hr Case Study | Custom Food Delivery App Development" />
                <meta name="twitter:description" content=" Discover how Comfygen built Food 24Hr, a scalable food delivery app with AI-driven recommendations, real-time tracking & secure payments. A true showcase of our food delivery app development expertise." />
                <meta name="twitter:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta name="twitter:site" content="@Comfygen_Tech" />

                {/* <!-- Facebook Meta --> */}
                <meta property="og:image" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:secure_url" content="https://www.comfygen.com/image/portfolio-hero-bg-img.webp" />
                <meta property="og:image:alt" content="Food 24Hr by Comfygen" />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/food-delivery-app" />
                <meta property="og:title" content="Food Delivery App Development Portfolio | Food 24Hr by Comfygen" />
                <meta property="og:description" content="Food 24Hr is a fast, reliable food delivery app crafted by Comfygen. From AI-powered suggestions to secure payments, explore how our food delivery app development services drive business success." />







                {/* Structured Data Scripts */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />

            </Head>

            <div className="overflow-hidden ">
                <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
                    <CompanyHeroSection
                        heading="Food Delivery App – Food 24Hr"
                        subhead=""
                        ptag="Our client envisioned Food 24Hr, a seamless and efficient food delivery app that offers real-time order tracking, AI-powered recommendations, and multiple payment options. As the Best Food Delivery App Development Company in India, we created a scalable, high-performance platform that connects users with nearby restaurants, ensuring fast and reliable food delivery."
                        imageSrc="https://www.comfygen.com/image/food-delivery-app-portfolio-herosection-image.webp"
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
                        "AI-driven restaurant and dish recommendations",
                        "Real-time order tracking and delivery status updates",
                        "Secure multiple payment options and wallet integration",
                        "User-friendly interface with smooth navigation",
                        "Push notifications for order updates and promotions",
                    ]}
                    imageSrc="https://www.comfygen.com/image/food-delivery-app-portfolio-features-image.webp"
                />
                <Features
                    heading="Challenge"
                    points={[
                        "The client required the best custom Food Delivery App Development solution that ensures quick delivery, seamless restaurant onboarding, and secure transactions. Managing real-time demand, optimizing delivery logistics, and integrating diverse payment options were key challenges."
                    ]}
                    imageSrc="https://www.comfygen.com/image/food-delivery-app-portfolio-challenges-image.webp"
                    imagePosition="left"
                />
                <Features
                    heading="Solution"
                    points={[
                        "As an on-demand Food Delivery App Development Company, we built a highly scalable app with AI-based order matching, real-time GPS tracking, and an automated dispatch system. Our best custom Food Delivery App Development services ensured an intuitive user experience, strong security, and seamless integration with multiple restaurants and payment gateways.",
                    ]}
                    imageSrc="https://www.comfygen.com/image/food-delivery-app-portfolio-solutions-image.webp"
                />
                <Features
                    heading="Business Benefits"
                    points={[
                        "Our food delivery app development increased customer engagement and order frequency through personalized recommendations and real-time tracking. The scalable architecture supported business expansion, while integrated revenue models like commissions and subscription plans boosted profitability"
                    ]}
                    imageSrc="https://www.comfygen.com/image/food-delivery-app-portfolio-business-benefits-image.webp"
                    imagePosition="left"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Rahul Sharma</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Mumbai, India</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Food 24Hr has completely transformed our food delivery business. Thanks to the expertise of the Best Food Delivery App Development Company in India, our app is fast, reliable, and loved by users. Their best custom Food Delivery App Development services ensured smooth operations and rapid growth"</p>
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
