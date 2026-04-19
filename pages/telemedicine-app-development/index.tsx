
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[700px] sm:min-h-[650px] lg:min-h-[500px] bg-[#F5F5F9] animate-pulse" />
  ),
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});

const BusinessSolustion = dynamic(() => import("../../components/BusinessSolustion"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px] bg-white animate-pulse" />
  ),
});


const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const Features = dynamic(() => import("../../components/Features"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[750px] lg:min-h-[600px] bg-white animate-pulse" />
  ),
});


const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});


const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
  loading: () => (
    <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px] bg-white animate-pulse" />
  ),
});





export default function Ecommerce(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Top Telemedicine App Development Company | Healthcare Solutions</title>
        <meta
          name="description"
          content="As a top telemedicine app development company, we build secure, scalable, and user-friendly healthcare apps with video consultations and real-time patient care."
        />
        <meta
          name="keywords"
          content="Consultancy for Telemedicine App, Custom Telemedicine App Development,Telemedicine Software Development Services,Telehealth App Development in India"
        />

        {/* <!-- Canonical Tag -->  */}
        <link rel="canonical" href=" https://www.comfygen.com/telemedicine-app-development" />

        {/* <!-- Robots →  */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta →  */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />


        {/* <!-- Viewport and Mobile Optimization →  */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- New in iOS6 -->  */}
        {/* <!-- Author and Company Information -->  */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta -->  */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta -->  */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag -->  */}
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

        {/* <!-- Twitter Card Tags -->   */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Custom Telemedicine App Development Services | Comfygen Healthcare Experts" />
        <meta name="twitter:description" content=" Looking for reliable telemedicine app development services? Comfygen builds scalable, secure, and feature-rich telehealth applications to transform patient care and digital healthcare delivery. " />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-og-image.webp " />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta -->  */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-og-image.webp" />
        <meta property="og:image:alt" content="Telemedicine App Development" />
        <meta property="og:url" content="https://www.comfygen.com/telemedicine-app-development" />
        <meta property="og:title" content=" Telemedicine App Development Company in India | Build Secure Telehealth Apps" />
        <meta property="og:description" content="Empower your healthcare business with custom telemedicine app development by Comfygen Technologies. We deliver secure, HIPAA-compliant telehealth apps with real-time consultation and EHR integration. " />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />

      </Head>

      <div className="min-h-[60px] md:min-h-[70px]">
        <Navbar />
      </div>
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <BusinessSolustion BusinessSolustion={JSON_DATA.BusinessSolustion} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.featuresData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Solution techData={JSON_DATA.Security} />
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
      `${process.env.URL}/api/v1/posts?tag=telemedicine-app-development&per_page=3`
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
