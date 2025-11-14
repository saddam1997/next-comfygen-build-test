import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./fuel-delivery-app-development.json";
import WhyChoose from "../components/WhyChooseUs";
import ServicesSec from "../components/ServicesSec";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import ClientTestimonials from "../components/ClientTestimonials";
import NewTeckStack from "../componentsnew/NewTeckStack";
import AppCard from "../componentsnew/AppCard";
import CallToAction from "../components/CallToAction";
import NewSection from "./components/NewSection";
import Features from "./components/Features";
import DeliverySection from "../components/DeliverySection";
import Slider from "../components/Slider";



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

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Research & Requirement Analysis",
    description: "We start by understanding your business goals, target audience, and market trends. Our <a href='https://www.comfygen.com/mobile-app-development' class='text-blue-500'>mobile app development</a> team identifies the key features for your fuel delivery app development services, ensuring your app meets real user needs and stands out in the on-demand fuel delivery market.",
  },
  {
    title: "UI/UX Design",
    description: "Our UI/UX designers create an intuitive and visually appealing interface for users, drivers, vendors, and admins. We focus on smooth navigation, engaging visuals, and responsive layouts to deliver the best fuel delivery mobile app development experience.",
  },
  {
    title: "MVP Development",
    description: "We develop a minimum viable product (MVP) that includes essential features like fuel ordering, live tracking, and payments. This approach allows you to launch faster, collect feedback, and iterate on your custom fuel delivery app solution.",
  },
  {
    title: "Full-Scale App Development",
    description: "Our gas delivery app developers build the best AI-based fuel delivery mobile app, integrating features like fuel station discovery, fleet management, and marketplace functionality. The result is a robust app ready to serve customers and vendors efficiently.",
  },
  {
    title: "Testing & Quality Assurance (QA)",
    description: "We perform thorough testing and QA to ensure the app is bug-free, secure, and performs seamlessly across Android, iOS, and web platforms. Our development team validates fuel delivery app development services to maintain high quality and user satisfaction.",
  },
  {
    title: "Launch & Deployment",
    description: "Once tested, we deploy your app to major app stores with proper backend configuration. Your Uber-like gas delivery app development solution is ready for real users, ensuring smooth operations from day one.",
  },
  {
    title: "Post-Launch Support & Maintenance",
    description: "After launch, we provide continuous monitoring, bug fixes, feature upgrades, and performance optimization. Our fuel delivery app developers make sure your delivery app stays updated, secure, and competitive in the on-demand fuel delivery market.",
  },
];


const CardClone = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/delivery-app-development/food1.webp",
    title: "PetroApp Clone",
    description:
      "Our qualified team of developers has experience in creating fuel delivery apps similar to PetroApp clone. You can launch your own PetroApp-like app with features like fuel ordering, real-time tracking, and secure digital payments at an affordable cost and within a quick turnaround time.",
    buttonText: "Contact Us",
  },
  // {
  //   image:
  //     "https://www.comfygen.com/comfygen-images/delivery-app-development/grocery1.webp",
  //   title: "CAFU Clone App",
  //   description:
  //     "Build an <a href='https://www.comfygen.com/cost-to-develop-fule-delivery-app-like-cafu' class='text-blue-500'>on-demand fuel delivery app like CAFU</a> with doorstep fuel delivery, GPS navigation, and secure payment options. Designed for startups and enterprises, our CAFU clone app ensures your business delivers fuel to customers anytime, anywhere.",
  //   buttonText: "Contact Us",
  // },
  {
    image:
      "https://www.comfygen.com/comfygen-images/delivery-app-development/medicine1.webp",
    title: "FuelBuddy Clone App",
    description:
      "We specialize in FuelBuddy clone app development to help businesses provide seamless doorstep petrol and diesel delivery. With features like fuel station integration, order scheduling, and automated alerts, you can scale your fuel delivery business easily.",
    buttonText: "Contact Us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/delivery-app-development/courier3.webp",
    title: "EzFill Clone App",
    description:
      "Launch a fuel delivery app like EzFill clone with powerful features such as multi-fuel support, subscription models, and real-time driver tracking. Our EzFill clone app ensures maximum convenience for customers and efficient management for businesses.",
    buttonText: "Contact Us",
  }



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
      "@type": "Service",
      "name": "On-Demand Fuel Delivery App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Build a powerful on-demand fuel delivery app with Comfygen. Our expert developers create custom fuel, petrol, and gas delivery apps with GPS tracking, fleet management, and secure payments. Launch your Uber-like fuel delivery business today.",
      "url": "https://www.comfygen.com/fuel-delivery-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/fuel-delivery-app-development",
      "areaServed": "Global",
      "serviceType": [
        "On-demand Fuel Delivery App Development",
        "Uber-like fuel delivery",
        "Petrol Delivery App Development",
        "Diesel Delivery App Development",
        "Gas Delivery App Development",
        "White-label Fuel Delivery App Solutions",
        "Fuel Station Finder App Development",
        "Fleet Fuel Management App Development",
        "Fuel Delivery Marketplace App Development"

      ],

      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"

      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen Technologies",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      }, {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "email": "sales@comfygen.com",
        "areaServed": ["IN", "US", "CA", "GB"],

        "availableLanguage": "en, in"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "Name": "Fuel Ordering App Development Company",
      "image": "https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development-about.webp",
      "description": "Launch your own on-demand fuel ordering app with Comfygen Technologies. We create custom mobile solutions for fuel delivery businesses with AI-driven features, predictive analytics, and real-time customer tracking.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "130"
      }
    },

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
        "name": "Fuel Delivery App Development",
        "item": "https://www.comfygen.com/fuel-delivery-app-development"

      }]
    },

    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to develop a fuel delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of fuel delivery app development depends on features, technology stack, and platform choice. A basic app may cost less, while advanced apps with GPS tracking, AI features, and secure payments require a higher investment. We provide tailored quotes based on needs."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to build a fuel delivery mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On average, developing a custom fuel delivery app takes 12–20 weeks, depending on complexity. MVP versions are faster to launch, while feature-rich apps with advanced integrations like fleet management and real-time analytics take more time. We ensure timely delivery with agile development."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide white-label fuel delivery app solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide ready-to-launch white-label fuel delivery app solutions customized with your branding, features, and workflows. These apps are cost-effective and allow startups or enterprises to launch quickly without compromising on performance, security, or scalability."
        }

      }, {
        "@type": "Question",
        "name": "Can I launch a fuel delivery startup with this app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our on-demand fuel delivery app development services are designed for startups, enterprises, and fuel stations. With features like fuel ordering, live tracking, payment integration, and vendor management, you can launch your own fuel delivery business seamlessly."
        }

      }, {
        "@type": "Question",
        "name": "What features are included in a custom fuel delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A custom-built fuel delivery app includes user-friendly ordering, secure payments, real-time GPS tracking, fuel station finder, fleet management, vendor dashboards, admin controls, and push notifications. Advanced features like AI-driven analytics and IoT integration can also be added for scalability and efficiency."
        }


      }]
    }

  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Best Fuel Delivery App Development Company | Comfygen</title>
        <meta
          name="description"
          content="Comfygen is a trusted fuel delivery app development company offering custom petrol, diesel & gas app delivery app development services with AI and blockchain-based fuel delivery solutions."
        />

        {/* keywords */}
        <meta name="keywords" content="On-demand Fuel Delivery App Development, Uber-like fuel delivery, Petrol Delivery App Development, Diesel Delivery App Development, Gas Delivery App Development, White-label Fuel Delivery App Solutions, Fuel Station Finder App Development, Fleet Fuel Management App Development, Fuel Delivery Marketplace App Development" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/fuel-delivery-app-development" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fuel Delivery App Development Company | Custom On-Demand Fuel Delivery Solutions" />
        <meta name="twitter:description" content=" Comfygen is a top fuel delivery app development company offering custom, scalable, and secure on-demand fuel delivery solutions. Hire expert fuel delivery app developers to build Uber-like gas, petrol, and diesel delivery apps with GPS tracking, fleet management, and white-label options." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development.webp" />
        <meta property="og:image:alt" content="Fuel Delivery App Development" />
        <meta property="og:url" content="https://www.comfygen.com/fuel-delivery-app-development" />
        <meta property="og:title" content="Custom Fuel Delivery App Development Company | White-Label Solutions" />
        <meta property="og:description" content="Comfygen Technologies offers custom fuel delivery app development services for startups and enterprises. Get white-label, scalable, and AI-powered fuel ordering apps with real-time tracking and multi-platform support." />






        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden">
        <div className="">
          <HeroSectionForAllPages
            heading="Top Fuel Delivery App Development Company"
            ptag="Comfygen is a trusted fuel delivery app development company that creates result-oriented on-demand fuel delivery apps for petrol, diesel, and gas. Our expert fuel delivery app developers deliver AI-based fuel delivery app development solutions with real-time tracking, GPS navigation, and seamless payments to empower startups and enterprises in the fuel delivery industry."
            li="100% Customizable Fuel Delivery App"
            li1="White-label & Scalable Solutions"
            li2="AI-powered Features & Automation"
            li3="End-to-End Development & Support"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development-hero.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Why Invest in Fuel Delivery App Development?"
          description1="The global on-demand fuel delivery market is expanding rapidly, driven by increasing demand for doorstep delivery of petrol, diesel, and gas. With increasing adoption of digital services in the energy sector, investing in a fuel delivery app is no longer optional — it’s a smart move for fuel stations, logistics providers, and startups that want to stay competitive."
          description2="Whether you manage a fuel station chain, operate a transportation business, or plan to launch a fuel delivery startup, a mobile app can revolutionize your operations with automated ordering, real-time fuel tracking, and secure digital payments."
          description3="Comfygen Technologies will help you deliver unmatched customer convenience and streamline fuel supply with innovative fuel delivery mobile app development solutions. We are the leading on-demand fuel delivery app development company."
          imageSrc="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/fuel-delivery-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Automates Fuel Orders & Delivery Scheduling",
            "Enhances Customer Convenience with Doorstep Delivery",
            "Secures Transactions with Digital Payments & GPS Tracking",
            "Boosts Revenue with Smarter Fuel Management & Insights",
          ]}
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Affordable Fuel Delivery App Development Services for Startups & Enterprises
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen Technologies, our fuel delivery app development services are crafted to help startups, enterprises, and fuel station owners digitize operations, boost customer convenience, and streamline delivery. With deep domain expertise and innovative tech, we create secure, scalable, and visually engaging on-demand fuel delivery apps tailored to the energy and logistics industry.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <NewSection />
        <ContactFromCenter />
        <AppCard
          title="We Have Already Developed Clones of Popular Fuel Delivery Apps"
          subtitle="Looking to build a fuel delivery app like the industry’s leading platforms? At Comfygen, we develop feature-rich fuel delivery app solutions inspired by popular apps, customized to match your business goals, customer needs, and market requirements."
          cards={CardClone}
          openModal={openModal}
        />
        <Features />



        {/* portfoliodata */}
        <section className="py-8">
          <Slider
            projects={JSON_DATA.portfoliodata}
            heading="Our Fuel Delivery Apps Portfolio"
            description="At Comfygen, we have delivered custom AI fuel delivery app solutions. Each project is designed to streamline fuel ordering, delivery, and management while ensuring a seamless experience for users, drivers, and vendors. Here are some of our successful custom fuel delivery app development projects."
          />
        </section>

    

        {/* <NewPanel /> */}
        <CallToAction
          heading="Ready to Build Your Fuel Delivery App?"
          text="At Comfygen, we build simple and custom delivery apps for startups, small shops, and big businesses. From idea to launch, we take care of everything for you."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Emerging Technologies We Use for Smart Fuel Delivery App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen, we leverage cutting-edge technologies to create smart and scalable fuel delivery apps. By combining AI, blockchain, IoT, and data-driven solutions, we deliver apps that are secure, reliable, and highly efficient for startups and enterprises in the fuel delivery industry.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={title} className={` relative`}>
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
                Our End-to-End Fuel Ordering App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                Comfygen Technologies is a result-oriented fuel delivery mobile app development company. Our custom fuel delivery app solutions are built using a structured and transparent process. We make sure that all our fuel delivery apps are high-performing, scalable, and user-friendly from concept to launch. Here’s how we develop your next AI fuel ordering app.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <NewTeckStack
          title="Tech Stack We Use in Custom Fuel Delivery App Development"
          description="At Comfygen, we use cutting-edge technologies to build high-performance, scalable, and secure fuel delivery mobile apps. Our tech stack ensures smooth app performance, real-time fuel tracking, seamless payments, and a reliable experience for users, drivers, and vendors."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Fuel Delivery App Developers"
          text="Looking to launch your own fuel delivery business? Hire expert fuel delivery mobile app developers from Comfygen to build a secure, scalable, and feature-rich mobile app tailored to your brand. Our skilled gas delivery app developers specialize in creating on-demand fuel delivery apps with smart routing, real-time tracking, multiple payment options, and white-label solutions for startups, enterprises, and fuel service providers."
          buttonText="Why Hire Our Delivery App Builder?"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Dedicated experts in custom fuel delivery app development",
            "AI-driven route optimization and smart fuel dispatch system",
            "Real-time fuel delivery tracking with GPS integration",
            "End-to-end app development from UI/UX design to deployment"

          ]}
        />

        <DeliverySection hideUrl="https://www.comfygen.com/fuel-delivery-app-development" />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Frequently Asked Questions (FAQs)" />
      </div>
    </>
  );
}
