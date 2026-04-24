
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./TutorDevelopment.json";

import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

import Emerging from "../../components/Emerging";

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

import Features from "../../components/Features"

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});
const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



export default function ClinicalApp(props: any) {
  let { initialData } = props;







  return (
    <>
      <Head>
        <title>Tutor App Development Company | Online Learning & Education Apps</title>
        <meta name="description" content="Comfygen is a top tutor app development company, creating secure, scalable, and interactive education apps with live classes, smart scheduling, and AI-based learning." />
        <link rel="canonical" href="https://www.comfygen.com/tutor-app-development" />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta name="keywords" content="Custom Tutor App Development, Language Learning App Development, On-Demand Tutor App Development, Kids Tutor App Development, Develop a Learning App, Education Mobile App Development, Tutor Booking App Development, Tutoring App Development, Edtech App Development" />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:title' content='Top-Rated On-Demand Tutor App Development Company' />
        <meta name='og:type' content='website' />


        <meta name='og:site_name' content='Comfygen Private Limited' />
        <meta name='og:description' content='Comfygen is a top-rated on-demand tutor app development company, offering custom tutor booking app development solutions with AI, AR/VR, and blockchain integration to enhance learning experiences.' />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Tutor Finder App Development Company | Comfygen" />
        <meta name="twitter:description" content=" Comfygen is a trusted tutor finder app development company, offering AI-driven tutoring app solutions with seamless booking, live classes, and personalized learning features." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta property="og:image:alt" content="Tutor App Development" />
        <meta property="og:url" content="https://www.comfygen.com/tutor-app-development" />
        <meta property="og:title" content="On-Demand Tutor App Development Company" />
        <meta property="og:description" content="If you're looking for a trusted on-demand tutor app development company, Comfygen delivers feature-rich, AI-powered tutoring solutions with seamless booking, live classes, and interactive learning features." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />

      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Technologies} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Solution techData={JSON_DATA.Solutions} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <TestimonialSection testimonials={JSON_DATA.customTestimonials} />

      <FaqSection faqData={JSON_DATA.Frequently} title="" />
      <BlogSection initialData={initialData} />

    </>
  );
}





export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=education-app-development&per_page=3`
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