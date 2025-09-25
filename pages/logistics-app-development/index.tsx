import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./logistics-app-development.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import ServicesSec from "../components/ServicesSec";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import ClientTestimonials from "../components/ClientTestimonials";
import NewTeckStack from "../componentsnew/NewTeckStack";
import WhoCanStart from "./components/WhoCanStart";
import AppCard from "../componentsnew/AppCard";
import PortfolioSlider from "../components/PortfolioSlider";
import NewPanel from "./components/NewPanel";

const HeroSectionForAllPages = dynamic(
  () => import("../components/HeroSectionForAllPages"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Faq = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business model, target users, and logistics flow. Our team gathers technical and functional requirements to define the project scope and architecture for your transportation app development project.",
  },
  {
    title: "Wireframing & UI/UX Design",
    description:
      "Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX designers</a> create wireframes and intuitive app layouts focused on user experience and brand identity. We design smooth, responsive interfaces that simplify delivery tracking, driver coordination, and warehouse operations.",
  },
  {
    title: "Development & Testing",
    description:
      "Using the latest tech stack, we develop your logistics app with clean, scalable code. Our QA team runs continuous testing—covering performance, security, and functionality—to ensure a bug-free, stable release.",
  },
  {
    title: "Integration of APIs",
    description:
      "We integrate essential third-party APIs for GPS, route optimization, payment gateways, SMS alerts, and ERP/CRM platforms. This ensures a connected and powerful logistics system with real-time capabilities.",
  },
  {
    title: "Deployment & Launch",
    description:
      "After rigorous testing, we deploy your logistics mobile app to app stores and hosting platforms. Our team ensures everything is optimized for performance, compliance, and scalability.",
  },
  {
    title: "Data Security & Compliance",
    description:
      "We implement strict security protocols and ensure compliance with global data regulations like GDPR and HIPAA. Your logistics data is encrypted, secure, and accessible only to authorized users.",
  },
  {
    title: "Post-launch Support & Maintenance",
    description:
      "Our job doesn’t end at launch. We offer ongoing maintenance, updates, and technical support to make sure your app remains up-to-date with market trends and user expectations.",
  },
];

const CardClone = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card1.webp",
    title: "Uber Freight Clone App",
    description:
      "Launch your own Uber Freight-like app with our robust logistics application development services. We develop freight management apps similar to Uber Freight clone app with real-time load tracking, driver-matching algorithms, and dynamic pricing tools.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card2.webp",
    title: "DHL Logistics Clone App",
    description:
      "Build DHL-like apps with enterprise-grade logistics functionalities. Our DHL Logistics clone app supports international shipping, warehouse integration, and customs tracking for a seamless global logistics network.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card3.webp",
    title: "Convoy Clone App",
    description:
      "We develop digital freight platforms similar to Convoy, focused on efficiency and sustainability. This transportation app development model empowers carriers and shippers with smart automation, real-time analytics, and optimized freight matching.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card4.webp",
    title: "Shiprocket Clone App",
    description:
      "Comfygen is a logistics software development firm that creates apps like Shiprocket are designed for eCommerce businesses and D2C brands. We help you replicate Shiprocket’s core capabilities like multi-carrier support, automated order syncing, and real-time delivery tracking.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card5.webp",
    title: "Delhivery Clone App",
    description:
      "With our Delhivery clone app, you can create a powerful logistics platform that handles hyperlocal deliveries, reverse logistics, and warehouse automation. It’s ideal for companies looking to scale delivery operations through logistics app development services tailored to the Indian market dynamics.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "BlackBuck Clone App",
    description:
      "Our BlackBuck-like logistics mobile app solution is built for large-scale freight movement and B2B trucking. We develop logistics platforms similar to BlackBuck, offering digital tools for long-haul transport, fleet coordination, and driver management.",
    buttonText: "View Demo",
  },
];

const WhoCanStartCards = [
  {
    heading: "Logistics Startups",
    description:
      "Get your logistics business off the ground with our ready-to-deploy logistics app solutions. Launch your own branded app with features like shipment tracking, driver assignment, and live route navigation to enhance visibility, improve delivery speed, and build trust with your customers.",
  },
  {
    heading: "Enterprises & 3PL Providers",
    description:
      "Simplify complex logistics operations with custom enterprise-grade solutions. Manage warehouses, multiple delivery agents, and customer orders from a centralized dashboard. Integrate with ERP systems, automate workflows, and monitor performance in real time with advanced analytics and reporting tools.",
  },
  {
    heading: "Freight Forwarders & Fleet Operators",
    description:
      "Enhance efficiency with apps built for freight tracking and fleet management. Monitor vehicle movement, optimize routes, and ensure compliance with transport regulations. Real-time updates help reduce delays, save fuel costs, and improve driver coordination.",
  },
  {
    heading: "E-commerce & Retail Businesses",
    description:
      "Add powerful delivery capabilities to your <a class='text-black font-semibold' href='https://www.comfygen.com/e-commerce-app-development'>eCommerce</a> or retail business. Integrate last-mile delivery apps that support order tracking, digital proof of delivery, customer notifications, and automated dispatch, ensuring a seamless shopping and delivery experience.",
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
      name: "Transportation & Logistics App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Build scalable transportation and logistics apps and websites with Comfygen. We offer complete mobile app development for freight, courier, supply chain, and fleet management businesses.",
      url: "https://www.comfygen.com/logistics-app-development",
      mainEntityOfPage: "https://www.comfygen.com/logistics-app-development",
      areaServed: "Global",
      serviceType: [
        "Logistics App Consultancy",
        "On-Demand Logistics App Development",
        "Freight & Fleet Management App Development",
        "Courier Delivery App Development",
        "Warehouse Management System App Development",
        "Supply Chain App Development",
        "Real-time Shipment Tracking App Development",
        "Custom Logistics Software Development Solutions",
        "White-Label Logistics Mobile App Development",
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
      Name: "Enterprise Logistics App Development for Transport Businesses",
      image:
        "https://www.comfygen.com/comfygen-images/logistics-app-development/about.webp",
      description:
        "Comfygen Technologies offers enterprise-grade logistics and transport app development. Build custom solutions for freight, warehouse, courier, and supply chain operations with full post-launch support.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "560",
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
          name: "Logistics App Development",
          item: "https://www.comfygen.com/logistics-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop a logistics app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of logistics app development depends on factors like app complexity, features, tech stack, and development timeline. A basic logistics mobile app development cost may start from $10,000, while advanced logistics solutions with real-time tracking and warehouse integrations can cost $25,000 or more. We offer flexible pricing based on your project scope and needs.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a logistics application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Building a custom logistics application typically takes 3 to 6 months, depending on the features, platform (iOS, Android, or both), and integrations required. For white-label logistics app solutions, the timeline can be shorter. We follow an agile development process to ensure on-time delivery without compromising quality.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer white-label logistics solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide fully customizable white-label logistics mobile app development solutions. These apps are ready for quick deployment and can be branded with your company name, logo, and colors. Our white-label offerings are ideal for startups and transport aggregators looking for fast, cost-effective market entry.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track vehicles and shipments in real-time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Real-time tracking is one of the core features of our transportation app development. Using GPS and geofencing technologies, we enable businesses to monitor vehicles, delivery agents, and shipments with live status updates, route optimization, and geo-alerts—all through a user-friendly logistics dashboard.",
          },
        },
        {
          "@type": "Question",
          name: "Will you provide post-launch support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Comfygen offers dedicated post-launch support and maintenance for all our logistics app development services. We help with bug fixes, system updates, feature upgrades, performance optimization, and security patches to ensure your app remains stable, secure, and up-to-date in the long run.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Custom Logistics App Development Company</title>
        <meta
          name="description"
          content="Comfygen is a top logistics app development company offering custom logistics and transport mobile app development solutions with real-time tracking, fleet management, and warehouse integration."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/logistics-app-development"
        />
        <meta
          name="keywords"
          content="Logistics App Consultancy, On-Demand Logistics App Development, Freight & Fleet Management App Development, Courier Delivery App Development, Warehouse Management System App Development, Supply Chain App Development, Real-time Shipment Tracking App Development, Custom Logistics Software Development Solutions, White-Label Logistics Mobile App Development"
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
          content="Comfygen Logistics App"
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
          content="https://www.comfygen.com/comfygen-images/logistics-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/logistics-app-development/og.webp"
        />
        <meta property="og:image:alt" content="Logistic App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/logistics-app-development"
        />
        <meta
          property="og:title"
          content="On-Demand Logistics App Development Company"
        />
        <meta
          property="og:description"
          content="Launch your own logistics app with Comfygen’s on-demand app development services. We create high-performance apps for Android and iOS with real-time GPS, driver panels, and admin dashboards."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Logistics App Development Company | Transport App Experts"
        />
        <meta
          name="twitter:description"
          content="Comfygen Technologies builds powerful logistics and transport apps for fleet tracking, warehouse management, and real-time delivery monitoring. Get end-to-end logistics app development tailored to your business model."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/logistics-app-development/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden sm:pt-16">
        <div className="">
          <HeroSectionForAllPages
            heading="Custom Logistics App Development Company"
            ptag="Comfygen is a leading logistics app development company offering end-to-end custom logistics app development services tailored for transport, delivery, and supply chain businesses. We specialize in creating scalable logistics app development solutions with real-time tracking, route planning, fleet management, and analytics to streamline operations and boost efficiency across platforms"
            li="Real-Time GPS & Shipment Tracking"
            li1="Route & Delivery Optimization"
            li2="Fleet & Driver Management"
            li3="Scalable Multi-Platform Solutions"
            li4="Transportation app development"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/logistics-app-development/hero1.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Why Your Logistics Business Needs a Mobile App"
          description1="The logistics industry is undergoing a rapid digital shift, with mobile apps transforming how goods are tracked, fleets are managed, and customers stay informed. Businesses that adopt logistics app development services are experiencing tangible operational benefits and enhanced customer trust."
          description2="<a class='text-blue-500 font-semibold' >Comfygen Technologies</a> is a trusted logistics app development agency, delivering end-to-end digital solutions tailored to the needs of logistics startups, enterprises, freight operators, and 3PL providers. Our first-class logistics apps help streamline the entire delivery lifecycle — from route planning and vehicle tracking to automated dispatch and customer notifications."
          imageSrc="https://www.comfygen.com/comfygen-images/logistics-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "75% of logistics businesses improve delivery timelines with mobile solutions",
            "Up to 35% savings in fleet and administrative costs through automation",
            "Enhances Inventory & Route Management",
            "Real-time tracking & alerts enhance customer satisfaction and service transparency",
            "Custom <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/data/analytics-service-provider' >analytics dashboards</a> support data-driven decisions across operations",
          ]}
        />

        <WhoCanStart
          title="Who Can Use Our Logistics App Solutions?"
          description="Comfygen’s logistics app development services are designed to support a wide range of industries. Whether you're a startup looking for a quick launch or an enterprise aiming to optimize operations, our scalable and customizable apps help you transform your logistics processes with ease."
          cards={WhoCanStartCards}
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide the Greatest Logistics App Development Services for
                your Business
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen delivers advanced logistics app development services
                tailored to meet the unique needs of logistics providers,
                transportation companies, courier agencies, and supply chain
                businesses. From freight tracking to real-time delivery
                management, our solutions are designed for efficiency,
                automation, and business growth.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />

        <AppCard
          title="We Have Already Developed Clones of Popular Transport and Logistics Apps"
          subtitle="Comfygen specializes in building high-performance logistics <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/mobile-app-development' >mobile app development solutions</a> inspired by globally recognized platforms. As a leading transport and logistics app development company , we deliver white-label and custom-built alternatives to popular transportation and freight management apps, designed to meet your unique business needs and launch timeline."
          cards={CardClone}
          openModal={openModal}
        />

        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Our Portfolio – Logistics and Transportation App Development Projects"
          description="Explore how Comfygen helps logistics companies, transport aggregators, and freight startups with intelligent, scalable logistics app development services. From real-time shipment tracking to automated fleet management, our logistics mobile apps deliver seamless user experiences and operational efficiency."
        />

        <NewPanel />

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Emerging Technologies We Use to Build Smart Transport and
                  Logistics Apps
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  Comfygen Technologies develops intelligent, secure, and
                  scalable transportation and logistics applications utilizing
                  next-generation technologies. Using these technologies enables
                  supply chains to be transparent, reduce delivery costs, and be
                  controlled in real time. <br /> Explore the innovative
                  technologies that power our logistics mobile app development
                  services.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                        {/* <Image
                                  src={img}
                                  className="object-cover"
                                  width={35}
                                  height={50}
                                  alt={title}
                                /> */}
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p
                          className="break-all text-white text-start "
                          dangerouslySetInnerHTML={{ __html: decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Logistics App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                Comfygen delivers scalable and feature-rich logistics apps
                through a structured and agile logistics app development
                process. Your transport or logistics mobile app will be
                intuitive, performance-driven, and aligned with your business
                goals through our process.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <NewTeckStack
          title="Tech Stack We Use in Transportation App Development"
          description="Comfygen builds high-performance, secure, and scalable mobile apps for transport and logistics. Our team carefully selects the ideal tech stack based on your business objectives, operational workflows, and real-time logistics tracking requirements. All devices and platforms benefit from optimal performance, user experience, and system reliability."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Logistics App Developers"
          text="Want to build a scalable and intelligent logistics app? Hire talented logistics <a class='underline font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >mobile app developers</a> from Comfygen Technologies to transform your idea into a fully functional digital logistics platform. We develop the best logistics applications for transport management, shipment tracking, warehouse coordination, and last-mile delivery—backed by industry expertise and end-to-end support."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced in custom logistics app development",
            "10+ years of transport and mobility app expertise",
            "Skilled in fleet, freight, and warehouse app development solutions",
            "On-time delivery with ongoing support & maintenance",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Frequently Asked Questions (FAQs)" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
