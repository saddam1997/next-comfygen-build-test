import React, { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./logistics-app-development.json";
import Header from "../Newcomponet/layout/Header";
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages";
import AboutSection from "../Newcomponet/SectionCompoent/AboutSection"
import WhoCanStart from "../Newcomponet/SectionCompoent/WhoCanStart";
import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
import AppCard from "../Newcomponet/comman/AppCard"
import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
import TeckStack from "../Newcomponet/SectionCompoent/TechStack";
import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
import ClientTestimonials from "../Newcomponet/SectionCompoent/ClientTestimonials";
import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
import Features from "../Newcomponet/SectionCompoent/Features";
import Faq from "../Newcomponet/SectionCompoent/Faq"



const Process = [
  {
    title: "Discovery & Requirement Analysis",
    description:
      "We analyze business goals, logistics workflows, and feature needs to create a strategic roadmap for custom logistics app development, ensuring scalable, efficient transport and supply chain performance.",
  },
  {
    title: "UI/UX Designing",
    description:
      "We design intuitive, user-friendly interfaces for customers, drivers, and admins, ensuring seamless navigation and enhanced usability for high-performing logistics app solutions across transport and delivery operations.",
  },
  {
    title: "App Development & API Integration",
    description:
      "Our expert logistics app developers build secure, scalable solutions with GPS tracking, automated dispatch, ERP/CRM integration, and real-time delivery management to improve fleet coordination and operational accuracy.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We conduct thorough quality testing to ensure flawless real-time tracking, secure data handling, and smooth logistics workflows, delivering reliable transportation app development results across all platforms.",
  },
  {
    title: " Deployment & App Launch",
    description:
      "We deploy your logistics application across Android, iOS, and web platforms with optimized performance, cloud setup, and secure configurations for a smooth launch without operational interruptions.",
  },
  {
    title: "Support & Maintenance",
    description:
      "We provide continuous maintenance, performance monitoring, and feature upgrades for long-term logistics app development solutions, ensuring reliability, reduced downtime, and improvement in delivery speed and efficiency.",
  },
  {
    title: "App Scaling & Future Enhancements",
    description:
      "We scale your logistics app with AI dispatching, predictive analytics, IoT fleet tracking, and automated route planning for faster deliveries and optimized supply chain performance.",
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
      "Launch your branded logistics app with real-time tracking, driver assignment, navigation, and automated scheduling. Improve delivery speed, operational visibility, and customer trust with cost-effective solutions.",
  },
  {
    heading: "Enterprises & 3PL Providers",
    description:
      "Manage large-scale logistics operations from a centralised dashboard. Integrate ERP systems, automate workflows, track real-time performance, manage multi-warehouse operations, and generate actionable analytics.",
  },
  {
    heading: "Freight Forwarders & Fleet Operators",
    description:
      "Track freight and fleet activities with precision, optimise routes, monitor vehicle status, and reduce downtime. Improve coordination and minimise fuel consumption with predictive insights and automated updates.",
  },
  {
    heading: "E-commerce & Retail Businesses",
    description:
      "Enable end-to-end smart delivery processes with order tracking, proof of delivery, automated dispatching, customer alerts, and last-mile logistics for a seamless customer experience.",
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
        <title>Custom Logistics App Development Company | Transport & Supply Chain Solutions</title>
        <meta
          name="description"
          content="Comfygen is a leading logistics app development company offering custom transport, fleet, and delivery management solutions with real-time tracking, route optimisation, and automation."
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

      <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Top-Rated Logistics App Development Company"
            ptag="Comfygen is a leading custom logistics app development company in India delivering high-performance mobility solutions for transportation, delivery, and supply chain businesses. We delivered scalable and secure logistics mobile app development solutions integrated with real-time tracking, smart route planning, fleet management, automation, and advanced analytics to maximise operational efficiency and reduce delivery costs."
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
          title="Logistics App Development Solutions for Every Business Type"
          description="Our scalable and customizable logistics app development services cater to diverse logistics and transportation segments. Whether you need a ready-made platform or a fully custom-built enterprise solution, Comfygen delivers results that support growth and automation."
          cards={WhoCanStartCards}
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide the Greatest Logistics App Development Services for your Business

              </h2>
              <p className="text-base text-center font-normal">
                Comfygen Technologies offers robust logistics app development services designed for transportation companies, courier agencies, freight service providers, supply chain management, and last-mile delivery businesses. From freight tracking to real-time delivery management, our solutions are designed for efficiency, automation, and business growth.

              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        {/* <ContactFromCenter /> */}

        <AppCard
          title="We Have Already Developed Clones of Popular Transport and Logistics Apps"
          subtitle="Comfygen specializes in building high-performance logistics <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/mobile-app-development' >mobile app development solutions</a> inspired by globally recognized platforms. As a leading transport and logistics app development company , we deliver white-label and custom-built alternatives to popular transportation and freight management apps, designed to meet your unique business needs and launch timeline."
          cards={CardClone}
          openModal={openModal}
        />


        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Portfolio – Logistics and Transportation App Development Projects"
            description="Explore how Comfygen helps logistics companies, transport aggregators, and freight startups with intelligent, scalable logistics app development services. From real-time shipment tracking to automated fleet management, our logistics mobile apps deliver seamless user experiences and operational efficiency."
          />
        </section>

        <section className=" lg:py-10 py-10">
          <Features
            grid='4'
            heading='We Develop Ice Cream Delivery Apps With Advanced Panel Features'
            description='Comfygen is among the best ice cream delivery mobile app development firm. We craft feature-rich Ice Cream Delivery Apps that deliver a seamless experience for customers, ice cream shop owners, delivery agents, and administrators. With AI-powered personalization, blockchain-secured payments, and real-time tracking, our apps are designed to transform the ice cream delivery experience.' 
            featuresData={JSON_DATA.featuresData}
            />,
        </section>



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
                Our Streamlined Logistics App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                At Comfygen, we follow a structured and result-driven logistics app development process that ensures high performance, scalability, and seamless delivery operations. Our expert logistics app developers design and build powerful digital logistics solutions tailored to your business needs.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TeckStack
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
      </div>
    </>
  );
}


export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  if (!resData.ok) {
    // console.error("API Request failed:", await resData);
    return { props: { initialData: [] } };
  }
  // console.log(resData)
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

