import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../components/Newcomponet/comman/Milestones";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse w-full"></div>
);

// About Section
const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

// Who Can Start
const WhoCanStart = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhoCanStart"),
  { loading: loader, ssr: true }
);

// Services Section
const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

// Consultancy Approach
const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

// Portfolio
const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

// Features Section
const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

// Process Section
const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

// Tech Stack
const TeckStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

// Why Choose Us
const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

// Delivery Section
const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { loading: loader, ssr: true }
);

// Hire Developer
const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

// Client Testimonials
const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

// Faq Section
const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



const Process = [
  {
    title: "Discovery & Requirement Gathering",
    description:
      "We begin by understanding your goals, delivery model, and customer needs. Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/mobile-app-development' >mobile app development</a> team collects all technical, design, and functional requirements to shape your ideal on-demand milk delivery app development solution.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX designers</a> create user-friendly layouts with seamless navigation for both Android and iOS users. We ensure that your app’s UI reflects the branding and delivers a great user experience across devices.",
  },
  {
    title: "App Development",
    description:
      "Using robust technologies like Flutter and <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/react-native-development' >React Native</a>, our mobile app developers build high-performing milk delivery apps with real-time tracking, subscription plans, and multi-payment integration for smooth operations.",
  },
  {
    title: "Testing & QA",
    description:
      "We test the app thoroughly for performance, security, and functionality across all devices. From subscription flows to payment and GPS tracking — every feature is tested for a flawless experience.",
  },
  {
    title: "Deployment",
    description:
      "Once approved, we deploy your milk delivery app to the Google Play Store and Apple App Store. Our milk delivery mobile app development team ensures a smooth go-live process with proper app store optimization (ASO).",
  },
  {
    title: "Support & Maintenance",
    description:
      "We offer continuous support, performance monitoring, and updates post-launch. Our mobile application development team ensures your milk delivery apps stay relevant, secure, and bug-free as your business grows.",
  },
  {
    title: "Marketing & App Store Optimization (ASO)",
    description:
      "We also help you reach more users by optimizing your app title, description, keywords, and visuals. This increases visibility and downloads for your online milk delivery app.",
  },
];




const WhoCanStartCards = [
  {
    heading: "Milk Delivery Startups",
    description:
      "Quickly enter the dairy delivery market with our white-label milk delivery app built for startups. Launch your own branded platform with subscription, tracking, and payment features to scale operations and reach customers faster.",
  },
  {
    heading: "Enterprises & Dairy Franchises",
    description:
      "Simplify operations with our custom milk delivery app solutions for enterprises and franchises. Manage multiple branches, delivery agents, customer data, and orders through one centralized admin panel with real-time analytics and smart automation tools.",
  },
  {
    heading: "FMCG Businesses",
    description:
      "Expand your <a class='underline font-semibold' href='https://www.comfygen.com/ecommerce/fmcg' >FMCG</a> offerings by adding milk delivery as a recurring service. Our milk delivery mobile app development solutions help streamline inventory, track customer orders, and boost sales through automated scheduling and doorstep delivery.",
  },
  {
    heading: "Dairy Farms & Local Milk Vendors",
    description:
      "Take your local dairy business online with our custom milk delivery app development solutions. anage daily subscriptions, flexible quantities, digital payments, and doorstep delivery while reducing manual work and increasing repeat customers.",
  },
];

export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let { Frequently } = JSON_DATA;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      addressLocality: "Jaipur, Rajasthan",
      addressRegion: "India",
      postalCode: "302006",
      telephone: "+91-958-786-7258",
    },

    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "40 Tuxedo Ct, Toronto, ON",
      addressLocality: "Toronto",
      addressRegion: "Canada",
      postalCode: "M1G3S7",
      telephone: "+1 579-977-4475",
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        email: "sales@comfygen.com",
        areaServed: ["IN", "US", "CA", "GB"],

        availableLanguage: "en, in",
      },
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Comfygen Technologies",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      telephone: "+91-958-786-7258",
      priceRange: "$",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
          addressLocality: "Jaipur",
          postalCode: "302006",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
          addressLocality: "Toronto",
          postalCode: "M1G3S7",
          addressCountry: "Canada",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "On-Demand Milk Delivery App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Hire expert milk delivery app developers from Comfygen. We create on-demand dairy delivery apps with custom features like subscriptions, delivery tracking, and admin dashboards to ensure efficient operations.",
      url: "https://www.comfygen.com/milk-delivery-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/milk-delivery-app-development",
      areaServed: "Global",
      serviceType: [
        "Dairy Delivery App Development",
        "White-label Milk Delivery App Development",
        "Milk Ordering App Development",
        "Custom Milk Delivery App Solutions",
        "Milk Subscription App Development",
      ],

      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Technologies",
      Name: "Custom Milk Delivery App Development Solutions",
      image: "Hero section image",
      description:
        "Build your own custom milk delivery app with Comfygen. We deliver user-friendly, scalable, and secure dairy delivery app solutions for startups, businesses, and enterprises. Launch your app with subscription models and real-time tracking.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "190",
      },
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
          name: "Milk Delivery App Development",
          item: "https://www.comfygen.com/milk-delivery-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          "name": "How much does it cost to develop a milk delivery app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of milk delivery app development depends on features, platform, design, and tech stack. A basic app may start from $5,000, while feature-rich custom solutions can cost $15,000 or more. We offer tailored quotes based on your specific business needs."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a milk delivery app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development time varies based on complexity. A standard milk delivery app takes 4–6 weeks, while advanced solutions with subscriptions, GPS tracking, and analytics may take 10–12 weeks. We ensure timely delivery without compromising on quality."
          }
        },
        {
          "@type": "Question",
          "name": "What key features should a milk delivery app include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Core features include user registration, product catalog, subscription management, payment gateway, delivery tracking, order scheduling, and push notifications. We can also add features like route optimization, inventory alerts, and customer support chat as per your business requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer support and maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide complete post-launch support, including bug fixes, updates, server maintenance, and app enhancements. Our dedicated support ensures your milk delivery app remains secure, updated, and efficient as your business grows."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build the app for both Android and iOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We develop native and cross-platform apps for both Android and iOS using modern frameworks. This ensures wider reach, faster performance, and a consistent user experience across all devices."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer white-label milk delivery app solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer customizable white-label milk delivery app solutions. These are ready-to-launch and fully branded for your business, helping you save time and go live faster without building everything from scratch."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate subscription and recurring billing options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in building milk subscription apps. You can offer daily, weekly, or monthly delivery plans with recurring billing, auto-renewals, and flexible scheduling, improving convenience for your customers and stability for your business."
          }
        },
        {
          "@type": "Question",
          "name": "Will the app support multi-location or multi-dairy operations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely. We can develop the app to manage multiple delivery zones, branches, or dairy partners. You can monitor sales, deliveries, and customer engagement across all locations from a centralized admin panel."
          }
        }
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Milk Delivery App Development Company | Service Provider</title>
        <meta
          name="description"
          content="Comfygen is a top milk delivery app development company offering custom, white-label, and on-demand milk delivery app solutions with subscriptions, real-time tracking, and secure payments for dairies, startups, and enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/milk-delivery-app-development"
        />
        <meta
          name="keywords"
          content="Dairy Delivery App Development, White-label Milk Delivery App Development, Milk Ordering App Development, Custom Milk Delivery App Solutions, Milk Subscription App Development"
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
        <meta name="apple-mobile-web-app-title" content="My App" />

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
          content="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/og1.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/og1.webp"
        />
        <meta property="og:image:alt" content="Milk Delivery App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/milk-delivery-app-development"
        />
        <meta
          property="og:title"
          content="White-Label Milk Delivery App Development Company"
        />
        <meta
          property="og:description"
          content="Comfygen offers white-label milk delivery app development services with advanced features like route optimization, payment gateways, and delivery scheduling. Launch your dairy app quickly and grow your business digitally."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Milk Delivery App Builder | Dairy App Development Company"
        />
        <meta
          name="twitter:description"
          content="Build a smart and efficient milk delivery app with our online milk delivery app builder. We offer affordable, custom solutions with subscription, GPS, and multi-payment options."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/og1.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>


      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Milk Delivery App Development Company for Dairies, Startups & Enterprises"
            ptag="Comfygen is a top-notch milk delivery app development company helping dairies, startups, FMCG brands, and enterprises go digital. We design and develop custom milk delivery app solutions with subscription management, real-time delivery tracking, secure payments, and advanced admin control—built to scale your daily milk delivery business faster and smarter."
            li="Seamless Milk Ordering & Subscription Management"
            li1="Real-Time Delivery Tracking & Route Optimization"
            li2="Secure Payments & Smart Inventory Control"
            li3="Custom & White-Label Milk Delivery App Solutions"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/hero.webp"
          />
        </div>
        <Milestones/>
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Milk Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen provides top-notch milk delivery app development
                services to dairy companies, milk distributors, and startups.
                Real-time features enhance customer satisfaction with our
                advanced milk delivery app development services.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Why Your Dairy Business Needs a Milk Delivery App"
          description1="In today’s fast-paced world, convenience is key — and a milk delivery app is the perfect solution to meet daily dairy demands with ease. Whether you're a dairy startup, a local milk vendor, or a large-scale distributor, investing in a milk delivery app can help streamline operations, automate deliveries, and build lasting customer loyalty."
          description2="With Comfygen’s tech-driven approach, we help you create a future-ready milk delivery platform that ensures smooth logistics, real-time updates, and enhanced customer experience — all while boosting revenue."
          imageSrc="https://www.comfygen.com/comfygen-images/milk-delivery-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Automates Subscription & Daily Delivery Scheduling",
            "Increases Customer Convenience & Retention",
            "Enhances Inventory & Route Management",
            "Offers Real-Time Order Tracking & Notifications",
            "Supports Digital Payments & Invoice Generation",
          ]}
        />
        {/* who cane start */}
        <WhoCanStart
          title="Who Can Start a Milk Delivery App Business?"
          description="Comfygen’s milk delivery app development solutions are ideal for a wide range of businesses. Whether you're just starting out or already established, our scalable and customizable apps help you grow fast in the digital dairy market."
          cards={WhoCanStartCards}
        />


        {/* <ContactFromCenter /> */}
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Portfolio – Milk Delivery App Development Projects"
            description="Explore how Comfygen empowers dairy businesses and startups with powerful, scalable milk delivery app development solutions. Our custom online milk delivery apps help streamline daily deliveries, manage subscriptions, and improve customer satisfaction with real-time features and user-friendly design."
          />
        </section>

        <Features
          heading="Key Features of Our Milk Delivery App"
          description=" At Comfygen, we integrate Using Comfygen Technologies, a top-rated dairy milk delivery app development company, you will get robust milk delivery apps for customers, delivery agents, and admins. The panels are thoughtfully designed to ensure a smooth ordering, delivery, and management process."
          featuresData={JSON_DATA.featuresData}
          grid="3"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Milk Delivery App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                Our company is one of the top milk delivery app development
                companies, with a structured and result-driven development
                process. The process we use ensures your milk delivery mobile
                app development project is efficient, scalable, and ready for
                market. From concept to launch and beyond, we deliver custom
                milk delivery app solutions built for success.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TeckStack
          title="Tech Stack We Use to Build Scalable Milk Delivery Apps"
          description="The Comfygen team leverages the most cutting-edge and reliable technologies for building scalable, secure, and high-performing milk delivery applications. With our tech stack, you can create white-label milk delivery apps, custom solutions, or milk ordering apps for startups."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <DeliverySection hideUrl="milk-delivery-app-development" />

        <HireDeveloper
          heading="Hire Online Milk Delivery App Builder"
          text="Want to launch an AI-based milk delivery app? Hire expert <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >milk delivery mobile app builder</a> from Comfygen to turn your dairy business idea into a high-performance, customer-friendly app. We build customized milk ordering platforms with subscription features, GPS tracking, payment integration, and more. Get fast delivery, post-launch support, and solutions tailored to your business."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced in dairy and milk delivery app development",
            "10+ years of mobile app expertise across food & delivery",
            "Strong grip on subscription, tracking & payment modules",
            "Fast project delivery with full-time technical support",
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="" />
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
