import React, { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./logistics-app-development.json";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

import dynamic from "next/dynamic";
import CallToAction from "../../components/Newcomponet/SectionCompoent/CallToAction";
import AppcardSlider from "../../components/Newcomponet/SectionCompoent/AppcardSlider";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const WhoCanStart = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhoCanStart"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const AppCard = dynamic(
  () => import("../../components/Newcomponet/comman/AppCard"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TeckStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

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
    title: "Requirement Analysis & Business Consultation",
    description:
      "Understand your logistics workflows, pain points, and goals to define clear project requirements.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Create intuitive, user-friendly designs and interactive prototypes for admin, driver, and customer apps.",
  },
  {
    title: "App Development & API Integration",
    description:
      "Build web and mobile apps with robust backend systems and integrate necessary APIs for tracking, payments, and ERP/CRM.",
  },
  {
    title: "Quality Testing & Security Checks",
    description:
      "Conduct functional, performance, and security testing to ensure your app is reliable and secure.",
  },
  {
    title: "Deployment & Store Submission",
    description:
      "Publish apps on iOS and Android platforms, ensuring compliance with store guidelines.",
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "Provide continuous support, bug fixes, updates, and feature enhancements to keep your app running smoothly.",
  },
  {
    title: "Post-Launch Optimization & Analytics",
    description:
      "Monitor app performance, user engagement, and operational metrics. Use analytics to optimize routes, improve delivery efficiency, and guide future app enhancements.",
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
        <title> Logistics App Development Company comfygen</title>
        <meta
          name="description"
          content="A leading on-demand logistics app development company in India, we provide real-time tracking, route optimization, and automation to streamline logistics services."
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
            heading="Logistics App Development Company"
            ptag="We are a transport and logistics app development company specializing in custom logistics app development for transportation and supply chain businesses, delivering mobile and web logistics solutions such as fleet management apps, real-time shipment tracking, route optimization, and last-mile delivery platforms, built for scalability, system integration, and high-volume logistics operations."
            li="Proven experience in logistics and transportation app development"
            li1="Successfully delivered multiple logistics and delivery platforms"
            li2="Serving global clients across transportation, supply chain, and on-demand delivery"
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
          heading="Why Logistics Businesses Must Invest in Logistics App Development"
          description1="Logistics is no longer about moving goods from point A to point B. It’s about speed, visibility, cost control, and customer trust. Manual processes, phone-based coordination, and fragmented systems simply don’t scale your logistics business in fast fast-growing world."
          description2="Develop a logistics app that gives business owners real-time control over fleet movement, deliveries, drivers, and inventory. With a centralized logistics platform, you reduce delivery delays, cut fuel and operational costs, improve route planning, and respond faster to customer demands."
          description3="A custom logistics app also brings transparency across the supply chain. Logistics business owners can track shipments live, monitor driver performance, automate dispatching, and generate data-driven insights that directly impact profitability. As order volumes grow and customer expectations rise, a scalable logistics app becomes a growth enabler, not just a technology upgrade."
          description4="For logistics companies looking to stay competitive, improve margins, and expand operations efficiently, investing in logistics app development is no longer optional; it’s a strategic business decision."
          imageSrc="https://www.comfygen.com/comfygen-images/logistics-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[]}
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Logistics App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen offers logistics app development services designed to solve real operational challenges faced by transportation, supply chain, courier agencies, freight service providers, and delivery businesses. Our app development solution is custom-built to match your business needs, scale with demand, and integrate with existing systems.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <CallToAction
          heading="Ready to Build Your Logistics App?"
          text="Partner with a leading logistics app development company and launch your custom app faster with Comfygen’s expert."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />


        <AppcardSlider
          heading="Top Logistics App Clones Ready for Development"
          description="Kickstart your logistics business with <a href='https://www.comfygen.com/white-label-mobile-app-development' class='text-blue-600 font-semibold'>White-label logistics apps</a> like Uber Freight, DHL, Delhivery, Convoy, Shiprocket, and BlackBuck clones. Streamline fleet management, order tracking, and warehouse operations with our expert logistics app development solutions."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />

        <section className=" lg:py-10 py-10">
          <Features
            grid='4'
            heading='We Develop Logistics Apps With Advanced Panel Features'
            description='Comfygen is a logistics app development company delivering feature-rich apps for managers, drivers, and customers. With real-time tracking, automated dispatch, route optimization, and analytics, our solutions streamline operations, cut costs, and improve delivery efficiency.'
            featuresData={JSON_DATA.featuresData}
          />
        </section>

        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Showcasing Our Expertise in Logistics & Transportation App Development"
            description="Comfygen builds custom apps for logistics companies, transport aggregators, and freight startups, offering real-time tracking, automated fleet management, and smart dispatch systems to streamline operations and enhance efficiency."
          />
        </section>

        <CallToAction
          heading="Build Smarter Logistics Solutions"
          text="Collaborate with Comfygen to design a logistics app that enhances operational efficiency, delivery accuracy, and customer experience."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Logistics App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                We follow a structured, end-to-end logistics app development process that is efficient, scalable, and aligned with business goals. Our methodology reduces risk, accelerates development, and ensures high-quality delivery.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Technologies for Next-Generation Logistics App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  Building the next-generation logistics and delivery apps requires cutting-edge technologies to ensure speed, efficiency, and scalability. Key technologies we use include:
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

        <TeckStack
          title="Logistics App Development Technology Stack"
          description="We use an advanced technology stack to build high-performance, secure, and scalable logistics apps for businesses of all sizes. Our technology choices ensure your app can handle real-time tracking, large fleets, and complex supply chain operations efficiently."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientStories />


        <HireDeveloper
          heading="Hire Logistics App Developers"
          text="Hire skilled logistics app developers from Comfygen to build scalable mobile and web apps. We specialize in fleet management, shipment tracking, warehouse systems, and last-mile delivery, delivering reliable solutions with ongoing support."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in custom logistics and transportation app development",
            "Strong experience with fleet, freight, and warehouse management systems",
            "Skilled in real-time tracking, route optimization, and system integrations",
            "Agile development with timely delivery and long-term support",
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
