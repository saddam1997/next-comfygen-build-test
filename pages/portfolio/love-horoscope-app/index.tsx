import Head from 'next/head';
import JSON_DATA from "./love.json"
import dynamic from 'next/dynamic';

import PortfolioHero from '../../../components/PortfolioPage/PortfolioHero';
import Features from "../../../components/PortfolioPage/Features"

const BlogSection = dynamic(
    () => import("../../../components/BlogSection"),
    { ssr: true }
);

const TechStacks = dynamic(() => import('../../../components/TechStacks'),
    { ssr: true }
);

const ReviewCard = dynamic(() => import("../../../components/ReviewCard"),
    { ssr: true }
);


export default function about(props: any) {
    let { initialData } = props;
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Love Horoscope App Development | AI-Powered Astrology Solution</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/love-horoscope-app" />
                <meta name="description" content="Discover our love horoscope app development solution with AI-driven astrology insights, real-time astrologer consultations, zodiac matchmaking, and personalized love predictions. Built for enhanced user engagement, our feature-rich app ensures a seamless astrology experience." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Love Horoscope App Development | AI-Powered Astrology Solution" />
                <meta property="og:description" content="Explore our Casual Dating App Development case study. As a top-rated dating app development company, Comfygen delivers casual dating apps with AI-driven matchmaking, seamless interactions, and strong security to enhance user engagement and retention." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/love-horoscope-app" />
                <meta property="og:site_name" content="Comfygen" />
                <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
                <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
                <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@comfygentech" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="8 minutes" />
            </Head>

            <PortfolioHero Data={JSON_DATA.HeroSection} />
            <Features Data={JSON_DATA.Features} />
            <Features Data={JSON_DATA.Challenge} />
            <Features Data={JSON_DATA.Solution} />
            <Features Data={JSON_DATA.BusinessBenefits} />
            <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
            <ReviewCard testimonials={JSON_DATA.ReviewData} />
            {/* <TechStack
                title="Technology Stack"
                description=""
                filterCategory={["crypto"]}
            /> */}
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
