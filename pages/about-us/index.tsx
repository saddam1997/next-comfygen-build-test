

import Head from 'next/head';
import JSON_DATA from "./json/about.json"
import AboutSection from './components/AboutSection';
import Navbar from '../../components/Navbar';
// import PortfolioSection from "./components/PortfolioSection"
const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"),
  { ssr: false }
);
import OurGeography from './components/OurGeography';
import IndustryGrid from './components/IndustryGrid';
import ClientStories from './components/ClientStories';
import LeadershipSection from './components/LeadershipSection';
import Trending from './components/Trending';
import FaqSection from '../../components/FaqSection';
import DownloadOverview from './components/DownloadOverview';
import dynamic from 'next/dynamic';

export default function about() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>About Comfygen Technologies | AI, Blockchain & App Development Company</title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="Comfygen Technologies is a global digital solutions company offering AI development, blockchain solutions, and mobile & web app development with 550+ successful projects."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" About Us | App and Web Development Company - comfygen.com" />
        <meta property="og:description" content="ComfyGen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
        <meta property="og:url" content="https://www.comfygen.com/about-us" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      {/* <Navbar /> */}

      <div className="overflow-hidden ">
        <AboutSection />
        {/* <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} /> */}
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <OurGeography />
        <IndustryGrid />
        <DownloadOverview />
        <section className="py-8">
          <Trending
            trendingData={JSON_DATA.trendingData}
            heading="Awards, Ratings & Recognitions"
          />
        </section>
        <ClientStories />
        <LeadershipSection />
        <FaqSection faqData={JSON_DATA.Frequently} />

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
