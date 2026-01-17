import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./fmcg.json";


import EcommerceNav from "../../../components/Newcomponet/layout/ecommerce-navbar"
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import EcommerceHeader from "../../../components/Newcomponet/layout/EcommerceHeader";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);


const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const TrendsSection = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/TrendsSection"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);


const Features = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const IndustriesServe = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const ConsultancyApproach = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ClientTestimonials = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)
const DeliverySection = dynamic(
  () => import("../../../components/Newcomponet/comman/DeliverySection"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)

const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);















const Process = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business goals, target market, and unique needs. Our team analyzes your concept to lay the foundation for a successful FMCG <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/mobile-app-development' >mobile app development</a> strategy tailored to your audience.",
  },
  {
    title: "UI/UX Designing",
    description:
      "We design user-friendly interfaces that make browsing and ordering products smooth and enjoyable. Our <a class='text-blue-500  font-semibold' href='https://www.comfygen.com/mobile-app-development' >UI/UX designs</a> make sure your FMCG app looks great and works fast—boosting engagement for any FMCG delivery app development firm.",
  },
  {
    title: "Development & Integration",
    description:
      "Our expert FMCG delivery app developers build the core features, APIs, and backend systems needed for smooth operations. This step ensures your white-label FMCG app development services are reliable, scalable, and equipped with the latest technology.",
  },
  {
    title: "Testing & QA",
    description:
      "We conduct extensive testing to remove bugs and ensure app security, speed, and performance. This helps us deliver flawless FMCG software development that meets user expectations and industry standards.",
  },
  {
    title: "Deployment",
    description:
      "Our development team provides FMCG app development for Android, iOS and Web. When you hire FMCG app developers for professional deployment, we ensure a smooth go-live process.",
  },
  {
    title: "Support & Scaling",
    description:
      "Post-launch, we offer continuous updates, monitoring, and scaling support. Whether you’re handling 100 or 1 million users, we offer enterprise FMCG delivery solutions built to grow with your business.",
  },
  {
    title: "Growth Strategy & Optimization",
    description:
      "We help you plan app marketing, improve app store visibility, and gather user feedback for upgrades. Our goal is to fuel FMCG app development for startups and enterprises alike through ongoing product optimization and scalable FMCG delivery software.",
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
      "@type": "Service",
      "name": "FMCG Delivery App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get top-notch FMCG app development services from Comfygen Technologies. We build AI-driven, custom delivery apps for groceries, packaged goods, and personal care FMCG brands. Launch faster with us!",
      "url": "https://www.comfygen.com/ecommerce/fmcg",
      "mainEntityOfPage": "https://www.comfygen.com/ecommerce/fmcg",
      "areaServed": "Global",
      "serviceType": [
        "White-Label FMCG Delivery App Development",
        "FMCG Software Development",
        "Custom FMCG Delivery App Development Services",
        "AI-Based FMCG App Development",
        "Pharmaceutical FMCG App Development"

      ],

      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"

      ]
    }
    ,
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
            "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar  ",
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
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        // "areaServed": "US, IN",
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
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "Name": "FMCG Delivery App Development Solution",
      "image": "https://www.comfygen.com/comfygen-images/fmcg/fmcg-about.webp",
      "description": "Get a complete FMCG delivery app development solution tailored to your business. We create the best AI-powered FMCG apps for grocery, personal care, and packaged food delivery.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "194"
      }
    }
    ,
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Ecommerce Development",
        "item": "https://www.comfygen.com/ecommerce"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "FMCG Delivery App Development Company",
        "item": "https://www.comfygen.com/ecommerce/fmcg"
      }]
    }
    ,
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to develop an FMCG delivery app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of developing an FMCG delivery app typically ranges from $12,000 to $70,000, depending on the features, platforms (iOS, Android, or Web), design complexity, and integrations like AI or real-time tracking. Comfygen offers affordable and scalable FMCG app development packages tailored to both startups and enterprises."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build an FMCG mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An FMCG mobile app can take 5 to 14 weeks to develop, depending on the number of modules, design revisions, and complexity. At Comfygen, our agile approach ensures fast delivery with regular updates and sprint-based releases for consistent progress."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer white-label FMCG app solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide fully customizable white-label FMCG app development services. These ready-to-launch solutions come with your branding and are equipped with advanced features like order tracking, smart reordering, multi-vendor support, and secure payment integration."
          }
        },
        {
          "@type": "Question",
          "name": "What key features should an FMCG delivery app include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Must-have features in an FMCG delivery app include user registration, product catalog, real-time delivery tracking, smart search, order scheduling, repeat ordering, secure payment gateway, and analytics dashboard. At Comfygen, we tailor these features to match your business goals and audience."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate AI or IoT in my FMCG delivery application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We integrate AI for personalized recommendations, demand forecasting, and dynamic pricing, while IoT helps with real-time inventory tracking and delivery logistics. These technologies enhance the efficiency and intelligence of your FMCG delivery operations."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support for FMCG mobile apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Comfygen offers complete post-launch support including bug fixes, performance optimization, version upgrades, and feature enhancements. We ensure your FMCG app remains updated, secure, and aligned with user needs and market trends."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Comfygen for FMCG app development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comfygen is a leading FMCG app development company with 10+ years of experience, offering scalable, secure, and user-centric mobile solutions. Our expertise in AI, real-time tracking, and agile delivery makes us a reliable tech partner for FMCG startups and enterprises globally."
          }
        }
      ]
      ,
    },
  ];

  return (
    <>
      <Head>
        <title>
          Top FMCG Delivery App Development Company | Build Smart FMCG Apps
        </title>
        <meta
          name="description"
          content="Partner with the top FMCG delivery app development company to build AI-powered FMCG apps for D2C brands, supermarkets, and startup businesses to grow online sales."
        />
        <link rel="canonical" href="https://www.comfygen.com/ecommerce/fmcg " />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

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

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

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
          content="https://www.comfygen.com/comfygen-images/fmcg/fmcg-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/fmcg/fmcg-og.webp"
        />
        <meta property="og:image:alt" content="FMCG App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ecommerce/fmcg"
        />
        <meta
          property="og:title"
          content="FMCG Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for reliable FMCG mobile app development? Comfygen develops the best delivery app platforms for groceries, pharma, and consumer goods. Tailored FMCG app development solutions for enterprise and startup growth."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom FMCG App Development Company | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Hire expert FMCG app developers for custom delivery app development solutions. We build powerful mobile apps for FMCG startups, supermarkets, and direct-to-consumer brands with real-time tracking & smart reordering."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/fmcg/fmcg-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="FMCG App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ecommerce/fmcg"
        />
        <meta
          property="og:title"
          content="FMCG Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for reliable FMCG mobile app development? Comfygen develops the best delivery app platforms for groceries, pharma, and consumer goods. Tailored FMCG app development solutions for enterprise and startup growth."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>
      <EcommerceHeader />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="FMCG Delivery App Development Company"
          subhead=""
          ptag="Partner with industry's leading FMCG delivery app development company that has delivered top-notch FMCG apps. We offer the best FMCG delivery app development services that help brands deliver daily essentials faster and smarter. Whether you're a supermarket, D2C brand, or FMCG startup, our FMCG delivery apps are tailored to meet your specific business needs and make sure a seamless customer experience."
          li="AI-Based Product Recommendations"
          li1="Multi-Platform App Development"
          li2="POS, ERP & CRM Integration"
          li3="Smart Inventory & Order Management"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/fmcg/fmcg-hero.webp"
        />
        <AboutSection
          title="About Company"
          heading="Why FMCG App Development is a Game-Changer"
          description1="The FMCG industry is evolving—and so are customer expectations. With digital shopping becoming the norm, consumers now demand faster, more convenient ways to access daily essentials like groceries, beverages, personal care items, and household products."
          description2="A custom-built FMCG delivery app allows your business to respond in real time, automate order fulfillment, and deliver an experience that’s fast, accurate, and personalized."
          description3="In the USA, FMCG eCommerce is expected to grow steadily with the rising adoption of mobile-first shopping, especially for packaged and household goods."
          description4="Meanwhile in India, the FMCG delivery sector is witnessing 20%+ YoY growth, driven by urban demand, quick-commerce models, and mobile-first consumption, making it a golden opportunity for brands to go digital."
          description5="Whether you're serving a local market or scaling across cities, FMCG delivery app development gives you the tools to grow fast, stay competitive, and meet modern buyer expectations head-on."
          points={[]}
          imageSrc="https://www.comfygen.com/comfygen-images/fmcg/fmcg-about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">We Provide Top FMCG Delivery App Development Services</h2>
              <p className="text-base text-center font-normal">At Comfygen, we offer top-tier FMCG Delivery App Development Services tailored to help brands streamline supply chains, optimize deliveries, and meet customer expectations with speed and precision. Whether you're a startup or an established FMCG brand, our solutions are built to scale and succeed.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  AI-Powered FMCG App Development Solutions
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  At Comfygen, we harness the power of AI to build intelligent
                  and scalable FMCG delivery apps that go beyond basic ordering
                  and tracking. Our AI-powered FMCG app development solutions
                  empower businesses to automate operations, predict demand, and
                  deliver highly personalized shopping experiences to customers.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 ">
                {JSON_DATA.FutureDriven2.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-2xl">
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p className=" text-base font-normal mt-2">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our FMCG Apps Portfolio"
            description="View our FMCG app development portfolio, which demonstrates innovative, scalable, and user-centric solutions. Our FMCG apps integrate real-time tracking and AI-powered automation to streamline logistics and enhance the user experience. We build future-ready FMCG delivery platforms tailored to your business needs."
          />
        </section>

        <TrendsSection
          heading="Advanced Technologies We Integrate to Make Future-Ready FMCG Apps"
          subtitle="At Comfygen, we don’t just build apps—we build intelligent, scalable, and future-ready solutions. To ensure your FMCG Delivery App Development stays ahead of the competition, we integrate cutting-edge technologies that enhance performance, efficiency, and customer satisfaction."
          trends={JSON_DATA.Emerging}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/fmcg/fmcg-feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <CallToAction
          heading="Ready to Transform FMCG Sales with a Powerful App?"
          text="Build a custom FMCG delivery app with Comfygen—experts in fast, scalable, and feature-rich mobile solutions."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/fmcg/fmcg-call.webp"
          imageAlt="Get in touch now."
        />



        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our FMCG App Development Process</h2>
              <p className="text-base font-normal mt-2">
              Comfygen delivers high-performing FMCG delivery app development solutions step-by-step, transparently, and scalable. It doesn't matter if you are a startup or an enterprise, our process ensures speed, quality, and innovation throughout the process.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>


        <IndustriesServe
          heading="Industries We Serve"
          description="We provide scalable on-demand FMCG delivery management app development solutions for a wide range of industries. Whether you're selling groceries or wellness products, our apps help you connect with customers faster and smarter."
        />

        <TechStack
          title="Tech Stack We Use in FMCG App Development"
          description="At Comfygen, we use modern and powerful technology to build fast, secure, and easy-to-use FMCG delivery apps. Whether you need a mobile app or a website, our tech makes sure everything runs smoothly and works well on all devices."
        />



        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <DeliverySection />

        <HireDeveloper
          heading="Hire FMCG Delivery App Developers"
          text="Want to build an FMCG app? Hire dedicated FMCG delivery app developers from Comfygen to create high-performance, real-time delivery solutions tailored to your business model. From concept to launch, we offer full-cycle FMCG app development with cutting-edge features and industry best practices."
          text1="Our <a class='underline font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >FMCG mobile app developers</a> specialize in building fast, user-friendly FMCG delivery apps for groceries, daily essentials, household goods, personal care products, and more. With expertise in logistics, real-time tracking, and multi-store management, we bring your vision to life."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experts in FMCG Mobile App Development",
            "Custom Development for Multi-Vendor & Enterprise Needs",
            "Dedicated Team. Transparent Process. Full Support.",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={Frequently} title="Frequently Asked Questions" />

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
