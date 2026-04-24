
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./p2ppaymentappdevelopment.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import Emerging from "../../components/Emerging";

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

import AppCardClones from "../../components/AppCardClones"

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});
import ClientTestimonials from "../../components/TestimonialSection";
import ClientStories from "../../components/ClientStories";
const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



export default function ClinicalApp(props: any) {
  let { initialData } = props;
 
  const jsonLdData = [

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom P2P Payment App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get secure and scalable peer-to-peer payment apps from Comfygen. We build custom P2P payment solutions for startups and enterprises with wallet, crypto, and real-time features.",
      "url": "https://www.comfygen.com/p2p-payment-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/p2p-payment-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Custom P2P Payment App Development",
        "Mobile Wallet App Development",
        "Cross-platform Mobile Payment Application Development",
        "Blockchain-Based P2P Payment App Development",
        "AI & Machine Learning Integration"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    }






  ];

  return (
    <>
      <Head>
        <title>Best P2P Payment App Development Company | Secure Fintech Solutions</title>
        <meta
          name="description"
          content="Comfygen offers secure P2P payment app development servcie with real-time transfers, mobile wallet integration, and scalable fintech solutions."
        />
        <meta
          name="keywords"
          content="P2P Payment App Development, Peer-to-Peer Payment App, Money Transfer App Development, Mobile Wallet App Development, Digital Payment Solutions, Fintech App Development, Secure Payment App Development, Crypto Payment Integration"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/p2p-payment-app-development"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


        <meta
          property="og:title"
          content="Top P2P Payment App Development Company | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading P2P payment app development company offering secure, scalable, and custom peer-to-peer payment apps for fintech startups, banks, and enterprises."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/p2p-payment-app/p2p-payment-app-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/p2p-payment-app/p2p-payment-app-og.webp"
        />
        <meta property="og:image:alt" content="P2P Payment App Development Company" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/p2p-payment-app-development"
        />


        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top P2P Payment App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Comfygen develops secure, scalable, and custom peer-to-peer payment apps for startups, banks, and fintech enterprises worldwide."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/p2p-payment-app/p2p-payment-app-og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Schema */}


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Solution techData={JSON_DATA.Business} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <Emerging emerging={JSON_DATA.Emerging} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <ClientTestimonials
        heading="Testimonials from Our Clients"
        testimonials={JSON_DATA.customTestimonials}
      />
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


