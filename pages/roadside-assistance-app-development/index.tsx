
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

import ReviewCard from "../../components/ReviewCard";

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});


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


  const jsonLdData = [

    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "On-Demand Roadside Assistance App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Get custom on-demand roadside assistance app development services from Comfygen. We build scalable tow truck apps with live tracking, multi-payment, and AI-based dispatch.",
      url: "https://www.comfygen.com/roadside-assistance-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/roadside-assistance-app-development",
      areaServed: "Global",
      serviceType: [
        "Tow Truck App Development Service",
        "Tow Car App Development Service",
        "Custom Roadside Assistance App Development",
        "Roadside Assistance App Like Uber",
        "Commercial Towing Services App",
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
          name: "Roadside Assistance App Development",
          item: "https://www.comfygen.com/roadside-assistance-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the cost to develop a roadside assistance app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on features, platforms (Android/iOS), design complexity, and integrations like GPS or AI. On average, it ranges from $10,000 to $50,000. For a custom quote, contact our team to discuss your specific business needs and technical requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop the app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Development time typically takes 8 to 16 weeks depending on project scope, features, and customization level. A basic MVP can be delivered faster, while complex roadside apps with AI and real-time tracking may take longer. We follow agile methods for timely delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize the features?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely! We offer fully customized roadside assistance app development tailored to your business model. From UI design to unique features like service bidding, multilingual support, and analytics, everything can be personalized to match your operational needs and target audience.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer post-launch support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide complete post-launch support, including bug fixing, performance optimization, updates, and new feature integration. Our goal is to ensure your towing or roadside app runs smoothly, stays updated, and meets the changing demands of your users and industry.",
          },
        },
        {
          "@type": "Question",
          name: "Will the app be available on Android and iOS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build cross-platform and native apps for both Android and iOS. Our developers ensure seamless performance and UI/UX consistency across devices so users can access your roadside assistance services anytime, from any mobile platform they prefer.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Best Roadside Assistance App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is the best roadside assistance app development company offering custom towing and roadside service apps with GPS tracking, AI features, and 24/7 support."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/roadside-assistance-app-development"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
          content="Comfygen Roadside App"
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
          content="Tow Truck App Development Service, Tow Car App Development Service, Custom Roadside Assistance App Development, Roadside Assistance App Like Uber, Commercial Towing Services App"
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
          content="Tow Truck & Car Assistance App Development | Comfygen Solutions"
        />
        <meta
          property="og:description"
          content="Comfygen offers top-tier tow truck and car assistance app development services. Leverage GPS tracking, service bidding, and secure payments for your roadside business."
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/roadside-assistance-app-development/og.webp"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/roadside-assistance-app-development/og.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/roadside-assistance-app-development"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Road Assistance App Development"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Roadside App Development Solutions"
        />
        <meta
          name="twitter:description"
          content="Build powerful roadside and towing apps with Comfygen. We offer real-time tracking, SOS alerts, and multilingual features tailored for fleet management and auto assistance."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/roadside-assistance-app-development/og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Scripts */}
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
      <Solution techData={JSON_DATA.Roadside} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.featuresData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      {/* <TestimonialSection testimonials={JSON_DATA.customTestimonials} /> */}
       <ReviewCard testimonials={JSON_DATA.ReviewData}/>
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

