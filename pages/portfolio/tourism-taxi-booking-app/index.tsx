import Head from 'next/head';
import PortfolioHero from '../../../components/PortfolioPage/PortfolioHero';
import dynamic from 'next/dynamic';
import JSON_DATA from "./tourism.json"
import Features from "../../../components/PortfolioPage/Features"
const TechStacks = dynamic(() => import('../../../components/TechStacks'),
    { ssr: true }
);
const ReviewCard = dynamic(() => import("../../../components/ReviewCard"),
    { ssr: true }
);

const BlogSection = dynamic(
    () => import("../../../components/BlogSection"),
    { ssr: true }
);


export default function about(props:any) {
    let { initialData } = props;
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Tourism Taxi Booking App Development | Custom Travel Booking Solutions</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/tourism-taxi-booking-app" />
                <meta name="description" content="Explore our tourism taxi app development case study. As a top-rated travel taxi app development company, Comfygen delivers AI-powered tourism taxi apps with multi-city booking, real-time tracking, and multilingual support for a seamless travel experience." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Tourism Taxi Booking App Development | Custom Travel Booking Solutions" />
                <meta property="og:description" content="Boost corporate travel efficiency with our AI-powered corporate taxi app development. Automate scheduling, billing, and real-time tracking for seamless ride management." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/tourism-taxi-booking-app" />
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
            <div className="overflow-hidden">







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
