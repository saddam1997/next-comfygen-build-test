
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
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



const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});


const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
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
        <title>
          Custom Truck Finance App Development Company | Comfygen

        </title>
        <meta
          name="description"
          content="Truck finance app development company offering secure, scalable finance app development solutions for truck loans, EMI tracking, KYC integration, and digital lending for fleet businesses."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/truck-finance-app-development"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Comfygen Truck Finance App"
        />
        <meta name="author" content="Comfygen Private Limited" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta
          name="keywords"
          content="Custom Truck Loan App Development, EMI Calculator App Development, Fleet Finance Management Solutions, Truck Leasing App Development, Loan Management System Integration"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:title"
          content="Truck Finance App Development Company | Custom Truck Loan App Solutions"
        />
        <meta
          property="og:description"
          content="Comfygen offers on-demand truck finance app development solutions. Build feature-rich apps for vehicle loan management, KYC, EMI tracking, and secure payments."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/truck-finance-app-development"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development/og1.webp"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development/og1.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Truck Finance App Development Services"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trusted Truck Loan App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Get affordable and secure truck loan app development services from Comfygen. We build scalable apps with real-time EMI tracking, loan applications, and custom fintech features for transport businesses"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development/og1.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data (optional) */}
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
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
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