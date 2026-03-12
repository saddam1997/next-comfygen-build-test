import Head from "next/head";
import JSON_DATA from "./json/whitelabelcryptoexchangedevelopmen.json";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import dynamic from "next/dynamic";
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

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
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

























export default function Ecommerce(props) {
  let { initialData } = props;




  return (
    <>
      <Head>
        <title>Best White Label Crypto Exchange Development Service | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen, top-notch white label Crypto Exchange Development Company. Provide customizable software with multi-currency & multi-chain support, bank-grade security, and fast deployment."
        />
        <meta
          name="keywords"
          content="white label crypto exchange, crypto exchange development, white label cryptocurrency exchange, crypto exchange solutions, crypto exchange platform, white label exchange software, secure crypto trading platform"
        />
        <link rel="canonical" href="https://www.comfygen.com/white-label-crypto-exchange-development" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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
        <meta name="apple-mobile-web-app-title" content="Comfygen" />
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

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="White Label Crypto Exchange Development | Secure & Scalable Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.comfygen.com/white-label-crypto-exchange-development" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/white-label-crypto-exchange-development/white-label-crypto-exchange-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/white-label-crypto-exchange-development/white-label-crypto-exchange-development-company.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="White Label Crypto Exchange Development Company" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:description" content="Launch your own customizable, secure, and scalable crypto exchange with our white label solutions. Fast deployment and enterprise-grade security. Contact us today!" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Label Crypto Exchange Development | Secure & Scalable Solutions" />
        <meta name="twitter:description" content="Launch your own customizable, secure, and scalable crypto exchange with our white label solutions. Fast deployment and enterprise-grade security. Contact us today!" />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/white-label-crypto-exchange-development/white-label-crypto-exchange-development-og.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Schema */}


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />

      </Head>

      <Navbar />
      <div className="overflow-hidden lg:pt-0 pt-16">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Solution techData={JSON_DATA.technologyData} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
        <TestimonialSection testimonials={JSON_DATA.customTestimonials} />
        <FaqSection faqData={JSON_DATA.Frequently} />
        <BlogSection initialData={initialData} />
      </div>
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
