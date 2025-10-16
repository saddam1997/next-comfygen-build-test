import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./delivery-app-development.json";
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
import CallToAction from "../components/CallToAction";
import PortfolioSec from "../componentsnew/PortfolioSec";
import Features from "./components/Features";
import DeliverySection from "../components/DeliverySection";



import Header from "../components/Header";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
const Faq = dynamic(() => import("../components/Faq"), {
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
    title: "Requirement Analysis & Market Research",
    description: "We start by analyzing your business goals, target audience, and market trends. Whether it’s wine on-demand app development, drink delivery app development, or liquor store app development, we tailor strategies to fit your business needs.",
  },

  {
    title: "UI/UX Design & Prototyping",
    description: "Our experts design intuitive interfaces for alcohol delivery mobile app development with seamless navigation, engaging product catalogs, and secure checkout flows. The aim is to deliver an engaging experience, much like Uber for alcohol delivery app development.",
  }
  ,
  {
    title: "Custom Development & Feature Integration",
    description: "As a leading alcohol delivery app development company in India, we build feature-rich solutions with real-time order tracking, age verification, multiple payment gateways, and loyalty programs. For businesses seeking quicker launches, we also provide ready-made liquor delivery app development for faster deployment.",
  }
  ,
  {
    title: "Advanced Tech Implementation",
    description: "We integrate AI, ML, blockchain, GPS, and cloud technologies into our on-demand alcohol delivery app development solutions. These innovations enhance security, optimize delivery routes, ensure compliance, and provide a seamless experience in online liquor delivery app development.",
  }
  ,
  {
    title: "Compliance & Age Verification",
    description: "Legal compliance is crucial in liquor delivery app development. Our solutions include AI-powered ID verification and secure age checks, ensuring every delivery adheres to regulations. This makes us one of the most reliable and trusted liquor delivery app development companies.",
  }
  ,
  {
    title: "Testing & Quality Assurance",
    description: "We conduct comprehensive end-to-end testing on every alcohol delivery app to guarantee seamless performance. Whether it’s a SaaS-based liquor delivery platform or a custom alcohol delivery solution, our priority is to deliver stability, reliability, and an exceptional user experience.",
  }
  ,
  {
    title: "Deployment & Post-launch Support",
    description: "Once your app is launched, our alcohol delivery app developers provide ongoing updates, maintenance, and scalability options. Whether you need alcohol distribution software development or aim for global expansion, we ensure long-term growth and success.",
  }
  ,
];




const CardClone = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/delivery-app-development/food1.webp",
    title: "Drizly Clone App",
    description:
      "Create an app like Drizly with a vast liquor catalog, age verification, and real-time delivery tracking. Deliver a seamless experience that connects liquor stores with customers instantly.",
    buttonText: "Contact Us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/delivery-app-development/grocery1.webp",
    title: "Saucey Clone App",
    description:
      "Build an app like Saucey offering on-demand alcohol delivery with fast checkout, location-based services, and instant delivery options. Perfect for startups targeting urban markets.",
    buttonText: "Contact Us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/delivery-app-development/medicine1.webp",
    title: "Minibar Delivery Clone App",
    description:
      "Develop a Minibar Delivery-like app with advanced features such as scheduled deliveries, gift orders, and multi-store management to cater to a broad customer base.",
    buttonText: "Contact Us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/delivery-app-development/courier3.webp",
    title: "Thirstie Clone App",
    description:
      "Launch an app like Thirstie that combines alcohol delivery with eCommerce integrations, loyalty rewards, and digital marketing tools to enhance brand visibility and sales.",
    buttonText: "Contact Us",
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
    }
    ,

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
    }

    ,

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Technologies",
      Name: "Multi-Delivery App Development Services | Best App Company",
      image:
        "https://www.comfygen.com/comfygen-images/delivery-app-development/about2.webp",
      description:
        "Launch powerful multi-delivery apps with Comfygen. As a trusted delivery app development firm, we provide end-to-end app solutions for food, grocery, medicine, parcel & more.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "560",
      },
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
        "name": "Alcohol Delivery App Development",
        "item": "https://www.comfygen.com/alcohol-delivery-app-development"

      }]
    }
    ,

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to develop a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to develop a delivery app typically ranges between $10,000 to $50,000, depending on features, design, and platform (iOS, Android, or both). At Comfygen, we provide cost-effective delivery app development solutions with real-time tracking, secure payments, and custom features tailored to your business needs."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to build a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery app development timelines typically range from 8 to 20 weeks, depending on the complexity and features. Comfygen’s expert team follows an agile process, ensuring faster delivery without compromising quality. From design to deployment, we help you launch your app quickly and efficiently."
        }

      }, {
        "@type": "Question",
        "name": "Can I get a white-label delivery app solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Comfygen offers white-label delivery app solutions that are ready to launch, customizable, and cost-effective. Our solutions include real-time tracking, easy payments, and multi-vendor support, helping businesses save time and enter the market faster with a scalable and branded app."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide multi-delivery app development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in multi-delivery app development services, enabling businesses to manage food, grocery, parcel, and medicine deliveries from a single platform. With advanced features, user-friendly design, and AI-powered delivery application development solutions, our delivery mobile apps make delivery management seamless and efficient."
        }

      }, {
        "@type": "Question",
        "name": "Why should I choose Comfygen for delivery app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen is a leading delivery app development firm trusted by startups and enterprises. We provide custom, scalable, and cost-effective delivery app solutions with real-time tracking, AI integration, and secure payments. Make Sure your delivery business succeeds digitally from concept to launch."
        }


      }]

    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Best Alcohol Delivery App Development Company
        </title>
        <meta
          name="description"
          content="Comfygen is a top alcohol delivery app development company offering custom, white-label, and on-demand liquor app solutions with AI-powered, blockchain-based, scalable features."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/alcohol-delivery-app-development"
        />

        <meta name="keywords" content="Custom Alcohol Delivery App Development Solutions, White-label Alcohol Delivery App Development, Liquor Store App Development, Beer Delivery App Development, Wine Delivery App Development" />



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
          content="Comfygen Delivery App"
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
          content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/alcohol-delivery-app-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/about.webp"
        />
        <meta property="og:image:alt" content="Alcohol Delivery App Developments" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/comfygen-images/delivery-app-development/delivery_og2.webp"
        />
        <meta
          property="og:title"
          content="On Demand Liquor Delivery App Development Company | Comfygen Technologies"
        />
        <meta
          property="og:description"
          content="Launch your liquor delivery business with our on demand alcohol delivery app development services. Secure payments, compliance tools & real-time tracking included." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="On Demand Liquor Delivery App Development Company | Comfygen Technologies" />
        <meta name="twitter:description" content="Launch your liquor delivery business with our on demand alcohol delivery app development services. Secure payments, compliance tools & real-time tracking included." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/alcohol-delivery-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/about.webp" />
        <meta property="og:image:alt" content="Alcohol Delivery App Development" />
        <meta property="og:url" content="https://www.comfygen.com/alcohol-delivery-app-development" />
        <meta property="og:title" content="Affordable Alcohol Delivery App Development Company" />
        <meta property="og:description" content="Looking for affordable alcohol delivery app development? Comfygen Technologies is a top-rated liquor delivery app development company that builds AI-powered liquor delivery apps with age verification, payments & live order tracking." />



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
            heading="Alcohol Delivery App Development Services for Liquor Businesses"
            ptag="Boost your liquor business with Comfygen’s custom alcohol delivery app development services. We build secure and scalable liquor delivery apps designed to simplify ordering, ensure age verification, and provide real-time delivery tracking. Whether you run a single liquor store or a multi-location alcohol chain, our white-label and custom alcohol delivery app solutions deliver seamless performance, elegant UI/UX, and compliance-ready features like ID verification, secure payments, and order management."
            li="Seamless & User-friendly UI/UX Design"
            li1="Expertise in On-demand & Subscription-based Solutions"
            li2="Compliance with Liquor Laws & Age Verification"
            li3="Secure Payments, Real-time Tracking & Analytics"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/alcohol-delivery-app-development-hero.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Why Do You Need an Alcohol Delivery App for Your Business?"
          description1="The global online alcohol delivery market is growing rapidly, fueled by changing customer preferences for doorstep liquor purchases and contactless services. With the market expected to surpass $173 billion by 2032, investing in an alcohol delivery app is no longer a luxury — it’s a necessity for liquor stores, bars, and distributors looking to stay competitive."
          description2="Whether you own a standalone liquor shop, manage a multi-chain alcohol business, or run a startup in the beverage industry, a mobile app can revolutionize your business with automated ordering, compliance-ready ID verification, and real-time delivery tracking."
          description3="With Comfygen’s advanced liquor delivery app development services, we help you streamline operations, ensure legal compliance, and deliver unmatched customer convenience."
          imageSrc="https://www.comfygen.com/comfygen-images/alcohol-delivery-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Automates Liquor Orders & Delivery Scheduling",
            "Enhances Customer Convenience & Repeat Purchases",
            "Simplifies Compliance with Liquor Laws & Age Verification",
            "Real-Time Notifications, Delivery Tracking & Order Management",
          ]}
        />



        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Offer Affordable Alcohol Delivery App Development Services for Startups, Retailers & Enterprises

              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, our affordable alcohol delivery app development services are designed to help liquor businesses digitize operations, expand customer reach, and boost sales with ease. Whether you run a single liquor store, a multi-chain retail outlet, or an on-demand alcohol delivery startup, our expert developers create secure, scalable, and compliance-ready mobile solutions tailored to your business needs.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />

        <AppCard
          title="Popular Alcohol Delivery Apps We Take Inspiration From"
          subtitle="Looking to build an alcohol delivery app like the industry’s leading platforms? At Comfygen, we develop feature-rich alcohol delivery app solutions inspired by popular liquor delivery apps, customized to match your business goals and customer needs."
          cards={CardClone}
          openModal={openModal}
        />

        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Explore Our On-Demand Liquor Delivery App Development Portfolio"
          description="At Comfygen Technologies, we’re proud to showcase some of our successful alcohol delivery app development projects that help liquor businesses digitize sales, streamline operations, and expand customer reach. From single liquor stores to large beverage chains, our on-demand alcohol delivery solutions are built to make a real business impact."
        />

        {/* <PortfolioSec
          techData={techDataForPage1}
          heading="Explore Our On-Demand Liquor Delivery App Development Portfolio"
          description="At Comfygen Technologies, we’re proud to showcase some of our successful alcohol delivery app development projects that help liquor businesses digitize sales, streamline operations, and expand customer reach. From single liquor stores to large beverage chains, our on-demand alcohol delivery solutions are built to make a real business impact."
        /> */}

        <section>
          <Features />
        </section>

        <CallToAction
          heading="Ready to Launch Your Alcohol Delivery App?"
          text="Partner with Comfygen Technologies, a trusted custom liquor delivery app development agency, to build an AI-powered and custom alcohol delivery solution."
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
                  The Emerging Technologies We Use for Alcohol Delivery App Development

                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen, a leading alcohol delivery app development company, we leverage advanced technologies to create secure, scalable, and future-ready alcohol delivery apps. Our tech-driven approach ensures seamless user experiences, legal compliance, and intelligent automation for liquor businesses of all sizes.
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
                Our Alcohol Delivery Mobile App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                At Comfygen, a brilliant liquor delivery app development company, we follow a structured process to deliver custom alcohol delivery app development solutions that are scalable, secure, and compliant. From ideation to deployment, our alcohol delivery app development services ensure your liquor business gets the perfect digital solution.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <NewTeckStack
          title="Technology Stack We Use in Wine on-Demand App Development"
          description="As a top alcohol delivery mobile app development company, we use advanced technologies to build result-oriented alcohol delivery app development solutions. Our tech stack make sure faster performance, seamless integration, and long-term growth for your liquor business."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <DeliverySection hideUrl="https://www.comfygen.com/alcohol-delivery-app-development" />

        <HireDeveloper
          heading="Hire Alcohol Delivery App Developer"
          text="Looking to launch your own liquor delivery business? At Comfygen, you can hire an expert <a class='underline ' href='https://www.comfygen.com/ai-development'>liquor delivery app builder</a> who specializes in creating secure, scalable, and feature-packed apps for breweries, wine stores, and liquor delivery startups. Our saas based liquor delivery app development team ensures smooth ordering, real-time tracking, and compliance with liquor regulations, helping you grow faster in the competitive market."
          buttonText="Why Hire Our Delivery App Builder?"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "On-Demand Expertise – Skilled in alcohol & liquor delivery app development.",
            "Custom & White-Label – Tailored or ready-made solutions for quick launch.",
            "Smart Integrations – Payments, age verification, GPS, and tracking APIs.",
            "Scalable Apps – Cloud-based, secure, and future-ready architectures.",
            "Dedicated Support – End-to-end assistance with 24/7 availability.",

          ]}
        />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Frequently Asked Questions" />

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
