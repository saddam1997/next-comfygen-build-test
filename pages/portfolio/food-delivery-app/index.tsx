import Head from 'next/head';
import JSON_DATA from "./food-delivery.json"
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
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
                />

            </Head>
            <PortfolioHero Data={JSON_DATA.HeroSection} />
            <Features Data={JSON_DATA.Features} />
            <Features Data={JSON_DATA.Challenge} />
            <Features Data={JSON_DATA.Solution} />
            <Features Data={JSON_DATA.BusinessBenefits} />
            <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
            <ReviewCard testimonials={JSON_DATA.ReviewData} />
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
