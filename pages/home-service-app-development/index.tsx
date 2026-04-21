import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./home-service-app-development.json";

import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";


const AboutSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/AboutSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const WhoCanStart = dynamic(() => import("../../components/Newcomponet/SectionCompoent/WhoCanStart"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const CardItem = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CardItem"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Features = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Features"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ProcessSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ProcessSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const TeckStack = dynamic(() => import("../../components/Newcomponet/SectionCompoent/TechStack"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const WhyChoose = dynamic(() => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const HireDeveloper = dynamic(() => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Portfolio = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Portfolio"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ClientTestimonials = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Faq = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Faq"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


const Process = [
  {
    title: "Requirement Analysis",
    description:
      "We start by understanding your business goals, target customers, and service model. This helps us create a home services app development plan that meets your needs today and supports growth in the future.",
  },
  {
    title: "UI/UX Designing",
    description:
      "Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX designers</a> create clean, attractive, and mobile-friendly layouts. We focus on easy navigation and smooth booking flow so users can quickly find and book services.",
  },
  {
    title: "App Development",
    description:
      "Our expert developers build secure, fast, and feature-rich home service booking apps using the latest technologies. We add features like real-time tracking, multi-service support, and secure payment gateways for both Android and iOS.",
  },
  {
    title: "QA & Testing",
    description:
      "We thoroughly test your home services app for speed, security, and compatibility. Our team ensures it works perfectly on all devices without any bugs.",
  },
  {
    title: "Deployment",
    description:
      "Once ready, we launch your app on Google Play and the App Store. We ensure a smooth rollout with full functionality across devices.",
  },
  {
    title: "Post-Launch Optimization",
    description:
      "After launch, we track performance, gather feedback, and make improvements so your app can grow and keep users engaged.",
  },
  {
    title: "Support & Maintenance",
    description:
      "As a reliable home services app development agency, we provide ongoing updates, bug fixes, performance checks, and security enhancements, so your business keeps running without issues.",
  },
];



const WhoCanStartCards = [
  {
    heading: "Single Service Aggregator",
    description:
      "This model is suitable for businesses that offer a single service, such as home cleaning, beauty, or plumbing. The app lets users book, pay, and track services easily.",
  },
  {
    heading: "Multi-Service Aggregator",
    description:
      "This is for businesses that offer many services in one home service mobile app — like electricians, AC repair, pest control, etc. Customers can choose and book any service they need.",
  },
  {
    heading: "Home Services Business",
    description:
      "If you have your own team and run a full home service company, we provide a white-label home services App to manage your staff, bookings, payments, and locations — all from one place.",
  },
  {
    heading: "Hyperlocal Marketplace Model",
    description:
      " This model connects users with nearby service professionals based on location. It helps customers find the closest available expert while giving local providers more visibility and faster job requests.",
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
      "@type": "Service",
      name: "Home Services App Development Company",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Comfygen offers scalable home services app development for startups and enterprises. Build your own app for cleaning, repair, salon, or handyman services with custom features and real-time updates.",
      url: "https://www.comfygen.com/home-service-app-development",
      mainEntityOfPage: "https://www.comfygen.com/home-service-app-development",
      areaServed: "Global",
      serviceType: [
        "White-Label Home Service App Development",
        "Salon and Beauty Services App Development",
        "Uber-like App for Home Services",
        "Handyman App Development",
        "Electrical Service App Development",
        "Home Services App Design and Development Services",
        "Laundry Service App Development",
        "Child Care Services",
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
          name: "Home Service App Development",
          item: "https://www.comfygen.com/home-service-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop a home services app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of a home services app development depends on its features, complexity, platforms (iOS/Android), and design. On average, it can range from $8,000 to $30,000 or more. Contact us for a custom quote based on your exact needs.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a home service app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Home services app development timelines vary depending on features and requirements. A basic home service app may take 4–6 weeks, while a fully customized one with advanced modules may take 10–12 weeks. We ensure fast, on-time delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Why is investing in home service app development is worthy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Investing in a home services app helps automate bookings, boost customer satisfaction, and grow your business online. It offers real-time service management, improves brand visibility, and creates recurring revenue with minimal operational hassle.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize the features of my app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely. We offer fully customizable home services app development. You can choose the features, design, and flow to match your business model. Everything is tailored to your brand and customer needs.",
          },
        },
        {
          "@type": "Question",
          name: "Will you provide white-label home service app solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer 100% white-label home services app solutions. Your app will have your own logo, colors, and branding. It’s ready for quick launch with your identity — perfect for startups and businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer support after the app launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide full post-launch support. Our mobile app development team makesure your app stays updated, secure, and bug-free. We offer ongoing maintenance, feature upgrades, and technical support to help your business grow.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Top Home Services App Development Company | Comfygen</title>
        <meta
          name="description"
          content="Top home services app development company offering real-time booking, tracking, secure payments, and scalable multi-vendor apps to boost customer engagement and business growth."
        />
        <meta
          name="keywords"
          content="White-Label Home Service App Development, Salon and Beauty Services App Development, Uber-like App for Home Services, Handyman App Development, Electrical Service App Development, Home Services App Design and Development Services, Laundry Service App Development, Child Care Services"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/home-service-app-development"
        />
        {/* Robots */}
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />

        {/* Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport */}
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
        <meta name="apple-mobile-web-app-title" content="Comfygen App" />

        {/* Author Info */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

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

        {/* Open Graph Meta */}
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
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/home-services-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/home-services-app-development/og.webp"
        />
        <meta property="og:image:alt" content="Home Service App Development" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/home-service-app-development"
        />
        <meta
          property="og:title"
          content="Top Mobile App Development Company for Home Services Industry"
        />
        <meta
          property="og:description"
          content="Looking to digitize your home service business? We develop high-performance mobile apps for all services — from plumbing to salon bookings. Scalable, secure, and easy to use."
        />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Home Services App Development Solutions | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Launch your branded home services app with Comfygen Technologies. We deliver tailored solutions for single and multi-service businesses with real-time tracking, secure payments, and user-friendly design."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/home-services-app-development/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />
        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden ">
        <div className="">
          <HeroSectionForAllPages
            heading="Best Home Services App Development Company"
            ptag="Comfygen is a top-rated home services app development company helping startups and enterprises build high-performing home service booking apps. We deliver result-oriented custom home services app development services with real-time booking, live service tracking, secure payments, and scalable admin control—designed to increase customer engagement and business revenue."
            li="Real-time booking, tracking & notifications"
            li1="Multi-service & multi-vendor app architecture"
            li2="Secure payment gateway integration"
            li3="Smart admin dashboard with analytics"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/home-services-app-development/hero.webp"
          />
        </div>
        <Milestones/>
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
             We offer on-demand Home Services App Development Services
              </h2>
              <p className="text-base text-center font-normal">
               Comfygen Technologies offers advanced and scalable on-demand home services app development services to startups, entrepreneurs, and enterprise businesses. We create feature-rich, user-friendly apps that help service providers grow faster and deliver better customer experiences.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Businesses Are Embracing on demand Home Service Apps for Success"
          description1="In today’s fast-growing world, people want quick and reliable home service at their fingertips via an app. Businesses are taking advantage of the growing demand for home services. And develop an on-demand home service app. According to research, the global home services market is projected to hit USD 1.13 trillion by 2026, driven by digital convenience, rising smartphone usage, and the popularity of on-demand home services app solutions."
          description2="Comfygen Technologies is a top-notch home service app development agency. We are a preferred choice for startups, entrepreneurs, and SMEs that want to grow their profits."
          imageSrc="https://www.comfygen.com/comfygen-images/home-services-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "80% of users prefer booking home services online.",
            "Save up to 40% on admin and operational costs by automating tasks.",
            "Real-time service tracking improves transparency and customer trust.",
          ]}
        />
        {/* who cane start */}
        <WhoCanStart
          title="On-Demand Home Services App Solution Models We Serve"
          description="At Comfygen Technologies, we build smooth, reliable home service apps for any kind of service business. Whether you focus on one niche or manage a full network of service providers, we shape the app around your workflow."
          cards={WhoCanStartCards}
        />

        
        {/* <ContactFromCenter /> */}

        <CardItem
          heading="Complete Home Services App Development Solutions for Every Business Need"
          subheading="We are a leading custom home services app development company. We create easy-to-use home service apps that help businesses serve their customers better. Our on-demand home services app development solutions cover many services like cleaning, repairs, beauty, and moving. With our apps, users can book quickly, track services in real-time, and make smooth payments."
          techData={JSON_DATA.cardData2}
        />


        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Home Services App Development Portfolio"
            description="Take a look at some of the powerful home services apps we've developed at Comfygen Technologies. From real-time service booking to advanced tracking features, our home services apps are designed to deliver a seamless and satisfying user experience across industries. Explore how we’ve helped businesses scale with our on-demand home services app development solutions."
          />
        </section>

        <Features
          heading='Our User-Friendly Key Features of the On-Demand Home Services App Development '
          description='At Comfygen Technologies, we develop powerful, easy-to-use home service app panels tailored to all user types. Whether you’re a customer, service provider, admin, or vendor, we create feature-rich panels to manage and grow your business smoothly.'
          featuresData={JSON_DATA.featuresData}
          grid='4'
        />


        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Proven Home Services App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                Comfygen Technologies is a top-rated home services app development company that creates powerful, scalable, and user-friendly apps for the home services industry. With our expertise in home service app development, we help businesses connect with customers more efficiently, boost bookings, and grow revenue.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TeckStack
          title="Technology Stack We Use in Home Service Booking App Development"
          description="At Comfygen Technologies, we use powerful and reliable technologies to develop high-performance home service booking apps. Our tech stack ensures your app is fast, secure, scalable, and future-ready — whether it's built for Android, iOS, or both."
          filterCategory={["crypto"]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire the Best Home Services App Developer"
          text="Want to build a powerful and easy-to-use Uber-like app for home services? Hire skilled <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >home services app developers</a> from Comfygen Technologies to bring your idea to life. We build your own home services apps for cleaning, plumbing, beauty, handyman and more — with features like online booking, real-time tracking, and secure payments. We deliver next-gen home service apps that grow with your business."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced in home services app development",
            "10+ years of mobile app experience",
            "Expert in booking, tracking, and payment features",
            "Fast delivery with full support after launch",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
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