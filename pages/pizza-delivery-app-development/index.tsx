
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./pizza-delivery-app-development.json";

import Features from "../../components/Features"
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
const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);





const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);








export default function ClinicalApp(props: any) {
  let { initialData } = props;


  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Custom Pizza Delivery App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Launch your own pizza ordering app with Comfygen, a leading Pizza Delivery App Development Company. We create scalable, secure & user-friendly pizza delivery apps with advanced features for restaurants & startups.",
      url: "https://www.comfygen.com/pizza-delivery-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/pizza-delivery-app-development",
      areaServed: "Global",
      serviceType: [
        "Custom Pizza Delivery App Development",
        "White-label Pizza Delivery App Solutions",
        "On-Demand Pizza Ordering App Development",
        "Cloud Kitchen Pizza Delivery App",
        "Franchise Pizza Chain Delivery App",
      ],

      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Food Delivery App Development",
          item: "https://www.comfygen.com/food-delivery-app-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pizza Delivery App Development",
          item: "https://www.comfygen.com/pizza-delivery-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop a pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of pizza delivery app development typically ranges from $5,000 to $15,000, depending on features, design complexity, and technology stack. As a trusted pizza delivery app development company, Comfygen offers cost-effective and scalable solutions tailored to startups and enterprises, ensuring your pizza delivery app is feature-rich, secure, and user-friendly.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline for pizza delivery app development varies based on custom features and integrations. On average, it may take 4–6 weeks for a full-fledged app. At Comfygen, we ensure quick delivery without compromising quality, using agile methods for faster pizza delivery mobile app development.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a custom white-label pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We specialize in white-label pizza delivery app development solutions that allow businesses to launch quickly with their own branding. Comfygen’s white-label apps come with core features like GPS tracking, secure payments, loyalty programs, and scalability to match your pizza business needs.",
          },
        },
        {
          "@type": "Question",
          name: "What features should be included in a pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A high-performance pizza delivery app should include real-time GPS tracking, AI-powered recommendations, a secure payment gateway, push notifications, discounts, loyalty programs, and an easy-to-use interface. Comfygen integrates advanced technologies to ensure your pizza delivery mobile app stands out with a smooth and engaging user experience.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide post-launch support & maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, as a trusted pizza delivery app development company, Comfygen provides complete post-launch support, regular updates, and technical maintenance. Our mobile app developers provide bug fixing, feature upgrades, and app monitoring so your pizza delivery business runs smoothly and continues to scale successfully after launch.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Top Pizza Delivery App Development Company</title>
        <meta
          name="description"
          content="Comfygen is a leading pizza delivery app development company offering pizza delivery app development services with AI recommendations, live tracking and smooth UX to boost your business."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/pizza-delivery-app-development"
        />
        <meta
          name="keywords"
          content="Custom Pizza Delivery App Development, White-label Pizza Delivery App Solutions, On-Demand Pizza Ordering App Development, Cloud Kitchen Pizza Delivery App, Franchise Pizza Chain Delivery App"
        />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Comfygen Pizza Delivery App"
        />

        {/* Author & Rights */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* SEO */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph (Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/pizza-delivery-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/pizza-delivery-app-development/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Pizza Delivery App Development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/pizza-delivery-app-development"
        />
        <meta
          property="og:title"
          content="Top Pizza Delivery App Development Company | Comfygen"
        />
        <meta
          property="og:description"
          content="Looking for a reliable pizza delivery app development company? Comfygen builds advanced pizza ordering apps with AI recommendations, push notifications, GPS & blockchain security."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pizza Delivery App Development Solutions | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Transform your food business with Comfygen’s custom pizza delivery app development solutions. We build secure, scalable & feature-rich pizza ordering apps tailored for startups, restaurants, and enterprises."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/pizza-delivery-app-development/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Emerging emerging={JSON_DATA.BusinessModel} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Emerging emerging={JSON_DATA.Advanced} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <DeliverySection hideUrl="flower-delivery-app-development" />
      <ClientTestimonials testimonials={JSON_DATA.customTestimonials}/>
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
