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
                <title>LGBTQ Dating App Development</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/lgbtq-dating-app" />
                <meta name="description" content="Discover our LGBTQ Dating App Development solution, designed for inclusivity, AI-powered matchmaking, and security. This feature-rich app enhances engagement, real connections, and user safety for a client in India. Our top-rated dating app development company delivers seamless and scalable apps." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="LGBTQ Dating App Development" />
                <meta property="og:description" content="Discover our LGBTQ Dating App Development solution, designed for inclusivity, AI-powered matchmaking, and security. This feature-rich app enhances engagement, real connections, and user safety for a client in India. Our top-rated dating app development company delivers seamless and scalable apps." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/lgbtq-dating-app" />
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
                        heading="LGBTQ Dating App"
                        subhead=""
                        ptag="Comfygen, a top-rated dating app development company, built a dynamic LGBTQ Dating App Development solution to create a safe, inclusive, and engaging platform for LGBTQ+ individuals. The app includes AI-powered matchmaking, real-time messaging, and robust security features to enhance user experience while ensuring privacy and authenticity."
                        imageSrc="https://www.comfygen.com/image/lgbtq-dating-app-hero-image.webp"
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
                        " <span class='font-semibold text-black '>AI-Powered Matchmaking:</span>  Personalized recommendations based on user preferences.",
                        " <span class='font-semibold text-black '>Identity Verification & Privacy Protection:</span>   Secure authentication to prevent fake profiles.",
                        "<span class='font-semibold text-black '>Real-Time Chat & Video Calling:</span>  Instant messaging with multimedia support.",
                        "<span class='font-semibold text-black '> Location-Based Matching:</span> Suggests nearby connections with adjustable search filters.",
                        "<span class='font-semibold text-black '>In-App Events & Community Features:</span>   Virtual meetups, group chats, and discussion forums.",
                        "<span class='font-semibold text-black '>AI-Powered Moderation & Reporting System:</span>   Automatic detection of harmful content and behavior.",
                        "<span class='font-semibold text-black '>Multi-Language Support:</span>   Catering to diverse users globally.",
                        "<span class='font-semibold text-black '>Customizable Profile Preferences: </span>  Users can express their identity with pride.",
                        "<span class='font-semibold text-black '>Social Media Integration:</span>  Easy sign-up using existing social accounts.",
                        "<span class='font-semibold text-black '>Premium Membership & In-App Purchases:</span>   Monetization features like boosts, premium filters, and exclusive content.",

                    ]}
                    imageSrc="https://www.comfygen.com/image/features-lgbtq-portfolio-image.webp"
                />
                <InfomationFirst
                    heading="Solution"
                    points={[
                        "As a leader in custom dating app development services, Comfygen developed a feature-rich AI LGBTQ dating mobile app development solution with intelligent matchmaking, live chat, profile authentication, and location-based recommendations.",
                        "Our scalable backend architecture and high-performance security protocols ensured data protection and a seamless user experience.",
                        "AI-driven moderation helped create a safe, respectful, and inclusive digital environment for LGBTQ+ users."
                    ]}
                    imageSrc="https://www.comfygen.com/image/lgbtq-dating-app-solutions.webp"
                />

                <Features
                    heading="Challenge"
                    points={[
                        "The client needed a custom dating app development company to build an inclusive platform with AI-driven matchmaking, identity verification, and secure communication.",
                        "They required an intuitive UI/UX tailored for diverse communities, ensuring a discrimination-free, safe space with real-time moderation to prevent abuse and fraud.",
                        "The platform had to support scalability, seamless performance, and integration with social media platforms for better user engagement."
                    ]}
                    imageSrc="https://www.comfygen.com/image/lgbtq-dating-app-challenges.webp"
                />

                <InfomationSecound
                    heading="Business Benefits"
                    points={[
                        "Our LGBTQ dating app development services enhanced engagement through personalized AI-powered recommendations and interactive features.",
                        "As a dating mobile app development company, we implemented monetization strategies like premium subscriptions and in-app purchases, boosting profitability while ensuring community growth and safety.",
                        "Advanced data security measures built trust and reliability, increasing user retention and app success.",
                        "Scalable architecture allowed for business expansion, ensuring seamless growth as user numbers increased."
                    ]}
                    imageSrc="https://www.comfygen.com/image/lgbtq-dating-app-business Benefits.webp"
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
                                <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Subham</h3>
                                <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>India</p>
                            </div>
                            <div className='space-y-2 mt-4'>
                                <div className=''>
                                    <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                                </div>
                                <div>
                                    <p className='md:text-base text-sm text-black'>"Comfygen truly understood our vision for an inclusive and secure LGBTQ Dating App Development. Their expertise as a top-rated dating app development company helped us create a seamless, AI-powered platform that fosters real connections while ensuring user safety. The intuitive design and strong security measures have made our app a trusted space for the LGBTQ+ community. We highly recommend Comfygen for custom dating app development services"</p>
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