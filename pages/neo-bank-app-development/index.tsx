
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/neobankappdevelopment.json";

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

import BusinessSolustion from "../../components/BusinessSolustion"

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import Features from "../../components/Features"

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

import Emerging from "../../components/Emerging";

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

import InformationSection from "../../components/InformationSection"
import ClientTestimonials from "../../components/TestimonialSection";
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




const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Build Your NeoBank App – Innovative Digital Banking Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/"
    },
    "description": "Partner with Comfygen for expert NeoBank app development. We offer secure, scalable, and AI-powered banking apps designed to redefine digital finance.",
    "url": "https://www.comfygen.com/neo-bank-app-development",
    "mainEntityOfPage": "https://www.comfygen.com/neo-bank-app-development",
    "areaServed": "Global",
    "serviceType": [
      "NeoBank app development",
      "NeoBank software development",
      "Digital banking app development",
      "Fintech app development",
      "Custom NeoBank app solutions",
      "NeoBank MVP development",
      "NPCI and Bank API Integration",
      "Digital Wallet Integration"

    ],

    "sameAs": [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.youtube.com/@ComfygenBusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/"

    ]
  },

  {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NeoBank App Development",
        "item": "https://www.comfygen.com/neo-bank-app-development"
      }
    ]
  },
  {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to develop a NeoBank app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of NeoBank app development depends on features, tech stack, platform, and compliance requirements. A basic MVP may start from $25,000, while a full-featured online banking app can exceed $100,000. We provide customized quotes based on your business goals and functionality."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a NeoBank app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for NeoBank software development varies by complexity. A simple NeoBank MVP can take 10–14 weeks, while advanced apps with full banking features may require 6+ months. We follow agile development for faster iteration and delivery without compromising on security or compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What compliance standards are followed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We ensure your NeoBank app meets all key financial regulations including PCI DSS, GDPR, and KYC/AML requirements. Our mobile banking app development experts stay updated with global compliance standards to deliver secure, legally compliant mobile banking app development solutions for both startups and financial institutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer complete post-launch support and maintenance for all our NeoBank app development services. From bug fixes and updates to performance monitoring, our team ensures your app runs smoothly, stays secure, and evolves with user needs and fintech regulations."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our team has deep expertise in integrating third-party APIs such as Plaid, Mambu, Yodlee, and Stripe. These integrations enhance your NeoBank software with features like account aggregation, digital payments, and real-time data, all while maintaining security and a seamless user experience."
        }
      }
    ]
  }


];



export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Trusted NeoBank App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a trusted NeoBank app development company, delivering secure, scalable, and feature-rich digital banking apps. Build apps with real-time payments, seamless user experience, and advanced financial features."
        />

        <meta name="keywords" content="NeoBank app development, NeoBank software development, Digital banking app development, Fintech app development, Custom NeoBank app solutions, NeoBank MVP development, NPCI and Bank API Integration, Digital Wallet Integration" />

        <link
          rel="canonical"
          href=" https://www.comfygen.com/neo-bank-app-development"
        />

        <meta
          name="robots"
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
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Neo Bank App Development" />
        <meta property="og:url" content="https://www.comfygen.com/neo-bank-app-development" />
        <meta property="og:title" content="Next-Gen NeoBank App Development Services for Digital Banking" />
        <meta property="og:description" content="Comfygen delivers cutting-edge NeoBank app development solutions. Build secure, scalable, and AI-driven apps to revolutionize digital banking experiences." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next-Gen NeoBank App Development Services for Digital Banking" />
        <meta name="twitter:description" content="Comfygen delivers cutting-edge NeoBank app development solutions. Build secure, scalable, and AI-driven apps to revolutionize digital banking experiences." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="UPI App Development" />
        <meta property="og:url" content="https://www.comfygen.com/neo-bank-app-development" />
        <meta property="og:title" content="UPI Payment App Development Company" />
        <meta property="og:description" content="Partner with Comfygen, a top UPI payment app development company delivering secure, NPCI-compliant apps with seamless performance for fintech startups and enterprises." />


        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta property="og:image:alt" content="NeoBanking App Development" />
        <meta property="og:url" content="https://www.comfygen.com/neo-bank-app-development" />
        <meta property="og:title" content="White Label Neo Banking App Development – Scalable & Secure" />
        <meta property="og:description" content="Comfygen offers white label NeoBank app development services. Launch a secure, scalable, and feature-rich digital banking platform with custom branding and AI-powered solutions." />


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
      <Solution techData={JSON_DATA.Features} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <ClientTestimonials
        testimonials={JSON_DATA.customTestimonials} />
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