
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/upipaymentappdevelopment.json";
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

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
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






export default function Ecommerce(props:any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Top UPI Payment App Development Company | Secure Payment Solutions
        </title>
        <meta
          name="description"
          content="Comfygen offers UPI payment app development services to build scalable, secure, and feature-rich apps with instant payments, bank integrations, and seamless digital transactions."
        />
        <meta name="keywords" content="Custom UPI App Development, UPI Payment Gateway Integration, White Label UPI Payment Solutions, Android & iOS UPI App Development, QR Code and Scan & Pay Integration, Backend Admin Dashboard Development, NPCI and Bank API Integration, Digital Wallet Integration, UPI payment app development, Develop UPI app, UPI wallet app development" />

        <link
          rel="canonical"
          href="https://www.comfygen.com/upi-payment-app-development"
        />

        <meta name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />


        {/* Compatibility */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Mobile Banking App" />

        {/* Author Info */}
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />

        {/* SEO Meta */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Meta */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="upi-payment App Development" />
        <meta property="og:url" content="https://www.comfygen.com/upi-payment-app-development" />
        <meta property="og:title" content="Custom UPI App Development Services | Fintech-Ready UPI Solutions" />
        <meta property="og:description" content="Get tailor-made UPI payment apps from certified developers. We build fast, user-friendly, and secure apps with NPCI integration and real-time transactions for all platforms." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom UPI App Development Services | Fintech-Ready UPI Solutions" />
        <meta name="twitter:description" content="Get tailor-made UPI payment apps from certified developers. We build fast, user-friendly, and secure apps with NPCI integration and real-time transactions for all platforms." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/upi-payment-app-development/upi-payment-app-development-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="UPI App Development" />
        <meta property="og:url" content="https://www.comfygen.com/upi-payment-app-development" />
        <meta property="og:title" content="UPI Payment App Development Company" />
        <meta property="og:description" content="Partner with Comfygen, a top UPI payment app development company delivering secure, NPCI-compliant apps with seamless performance for fintech startups and enterprises." />

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
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <TestimonialSection testimonials={JSON_DATA.customTestimonials} />
        <FaqSection faqData={JSON_DATA.Frequently} />
   
      <BlogSection initialData={initialData} />

    </>
  );
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

