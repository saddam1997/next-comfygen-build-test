
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";
import {
  IconCode,
  IconFirstAidKit,
  IconMessage,
  IconNews,
} from "@tabler/icons-react";
import { IconCashBanknote, IconShoppingCart } from "@tabler/icons-react";

import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BusinessSolustion from "../../components/Newcomponet/SectionCompoent/BusinessSolustion";
import AppcardSlider from "../../components/Newcomponet/SectionCompoent/AppcardSlider";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";

const loader = () => <div className="h-96 bg-gray-100 animate-pulse" />;
const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { loading: loader, ssr: true }
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
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

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
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
  () =>
    import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);
const ConsultancyApproach = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Redefine Convenience",
    desc: "Pharmacy stores, marketplaces, and store chains can help redefine convenience for their customers by offering an easy way to order medicines by . Your customers don’t have to visit a physical pharmacy store anymore as they can order medicines conveniently with a medicine ordering app development from their homes or anywhere.",
  },
  {
    img: <IconCashBanknote stroke={1.5} className="w-12 h-12" />,
    title: "Easier Consultation",
    desc: "Pharmacy Businesses can also capitalize on medicine delivery app development services to ensure that patients can find easier opportunities for healthcare application consultation. Medicine delivery apps with telemedicine features can help patients contact doctors or nurses and healthcare professionals, thereby ensuring better quality of care.",
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Privacy Benefits",
    desc: "Users can also use medicine delivery apps to order medicines without disclosing their identities. The flexibility to avoid sharing performance information with pharmacy stores ensures that users can protect their privacy while purchasing important and sensitive medications.",
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />,
    title: "Effective Time-Savings",
    desc: "The most important advantage of using medicine delivery apps is the assurance of time-saving benefits. Customers can order the medicines they want directly from the app within a few seconds. The use of medicine delivery apps ensures that patients can save money and time.",
  },
  {
    img: <IconMessage stroke={1.5} className="w-12 h-12" />,
    title: "Instant Deliveries",
    desc: "Customers of medicine delivery apps can also make the most of the benefits of medicine delivery mobile app development features to avail instant delivery medicine app. Mobile Apps for pharmacy delivery can help patients and their relatives explore medicines and place their orders with a few steps. Pharmacy stores can use apps to ensure instant delivery medicine application.",
  },
  {
    img: <IconShoppingCart stroke={1.5} className="w-12 h-12" />,
    title: "Centralization in Control",
    desc: "The dashboard of a pharmacy delivery app serves as an ideal resource to help you manage the control over your app from one panel. Business owners who have a pharmacy store can keep an eye on their business, customers, delivery personnel, and different stores with one powerful dashboard that has appealing features.",
  },
];
const Process = [
  {
    title: "Requirement Analysis & Planning",
    description:
      "We start by understanding your business goals, pharmacy model, and target users. Our experts analyze market trends, competitors, and compliance needs to plan a clear roadmap for successful <a href='https://www.comfygen.com/blog/medicine-delivery-app-development-for-pharmacies/' class='text-blue-600 font-semibold'>medicine delivery app development for pharmacies & SMEs.</a>",
  },
  {
    title: "UI/UX Design",
    description:
      "Our <a href='https://www.comfygen.com/web-design' class='text-blue-600 font-semibold'>designers</a> create a simple, clean, and user-friendly UI for customers, pharmacies, and delivery partners. The focus is on easy navigation, fast medicine search, and smooth prescription uploads for better user experience.",
  },
  {
    title: "App Development (Android, iOS & Web)",
    description:
      "We build secure and scalable medicine delivery apps for Android, iOS, and web platforms using modern technologies. Our <a href='https://www.comfygen.com/pharmacy-app-development' class='text-blue-600 font-semibold'>pharmacy app development</a> ensures fast performance, high security, and seamless functionality across all devices.",
  },
  {
    title: "API & Payment Gateway Integration",
    description:
      "We integrate secure APIs for pharmacy systems, telemedicine, logistics, and third-party services. <a href='https://www.comfygen.com/upi-payment-app-development' class='text-blue-600 font-semibold'>Multiple payment gateways like UPI</a>, cards, and wallets are added to ensure smooth and safe online medicine transactions.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA team performs strict testing to check app performance, security, usability, and compatibility. This ensures the online medicine delivery app runs smoothly without bugs or technical issues.",
  },
  {
    title: "App Launch & Deployment",
    description:
      "After successful testing, we deploy your app on Google Play Store, Apple App Store, and web servers. Our generic medicine mobile app development team ensures proper configuration, security setup, and smooth go-live execution.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Post-launch, we provide ongoing support, regular updates, performance monitoring, and feature enhancements. This keeps your medicine delivery app secure, updated, and ready for future growth.",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

  let { Chartacterstics } = JSON_DATA;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

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
      name: "Medicine Delivery App Development for Startups",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Kickstart your online pharmacy business with Comfygen’s medicine delivery app development services. Build cost-effective, scalable, and feature-rich apps to deliver medicines anytime, anywhere.",
      url: "https://www.comfygen.com/medicine-delivery-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/medicine-delivery-app-development",
      areaServed: "Global",
      serviceType: [
        "On-Demand Medicine Delivery App Development",
        "AI-Powered Medicine Delivery App Development",
        "Custom Medicine Delivery App Development",
        "White-Label Medicine Delivery App Development",
        "Online Medicine Delivery App Development",
        "Medicine Delivery App Development Services",
      ],

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
            "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
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
        email: "sales@comfygen.com",
        areaServed: ["IN", "US", "CA", "GB", "UAE"],

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
      brand: "Comfygen Technologies",
      Name: "Pharmacy Chain Medicine Delivery App Development",
      image: "https://www.comfygen.com/image/about-us-image.webp",
      description:
        "Streamline your pharmacy operations with Comfygen’s custom medicine delivery apps. Manage multiple branches, real-time deliveries, and secure payments under one digital platform.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1500",
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
          name: "Medicine Delivery App Development",
          item: "https://www.comfygen.com/medicine-delivery-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How Much Does It Cost to Build a Medicine Delivery App?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost to build a medicine delivery app typically ranges from $8,000 to $25,000, depending on features, platforms (Android/iOS/Web), design complexity, and integrations.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a medicine delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A basic medicine delivery app takes around 8–12 weeks. Advanced features like AI, multi-vendor support, or integrations may take 3–5 months.",
          },
        },
        {
          "@type": "Question",
          name: "Is online medicine delivery legal in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, online medicine delivery is legal in India if the app follows drug laws, prescription validation, and data privacy regulations like HIPAA and local guidelines.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build an app like 1mg or PharmEasy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can build an app like 1mg or PharmEasy with similar features, custom design, scalability, and compliance using a trusted medicine delivery app development firm in India.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide post-launch support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer complete post-launch support, including bug fixes, updates, security patches, and performance optimization to keep your app running smoothly.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
        Medicine Delivery App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen Technologies is a trusted medicine delivery app development company offering secure, scalable apps with prescription upload, tracking, and payments."
        />

        <meta
          name="keywords"
          content="Medicine Delivery App Development, Medicine Delivery App Development Company, Medicine Delivery App Development Services, Best Medicine Delivery App Development Company, Best Medicine Delivery App Development, Medical Delivery Application Development Services, Medical Delivery Application Development Company, Online Medicine Delivery App Development Company, Medicine Doorstep Delivery App Development, Custom Medicine Delivery App Development Company, Medicine Delivery App Development Solution, Medicine Delivery App Developers "
        />

        {/* <!-- Canonical Tag --> */}
        <link
          rel="canonical"
          href="https://www.comfygen.com/medicine-delivery-app-development"
        />

        {/* <!-- Robots → */}
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
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

        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}
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

        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medicine Delivery App Development Services | Comfygen"
        />
        <meta
          name="twitter:description"
          content=" Comfygen develops robust on-demand medicine delivery apps designed for pharmacies, hospitals, and startups. Ensure fast deliveries, real-time order tracking, and secure digital payments."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta
          property="og:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta
          property="og:image:alt"
          content="Medicine Delivery App Development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/medicine-delivery-app-development"
        />
        <meta
          property="og:title"
          content="On-Demand Medicine Delivery App Development | HIPAA-Compliant Solutions"
        />
        <meta
          property="og:description"
          content="Comfygen develops robust on-demand medicine delivery apps designed for pharmacies, hospitals, and startups. Ensure fast deliveries, real-time order tracking, and secure digital payments."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Medicine Delivery App Development Company"
          ptag="Comfygen Technologies is a leading Medicine Delivery App Development Company delivering secure, scalable, and high-performance on-demand solutions for pharmacies, healthcare startups, and enterprises. We specialize in custom medicine delivery app development that enables online medicine ordering, doorstep delivery, real-time tracking, and fast fulfillment — including a medicine delivery app in 10 minute models."
          ptag1="Our expert medicine app developers build feature-rich platforms using the latest technologies to help you launch a powerful online medicine delivery app tailored to your business needs. From white label medicine delivery app development to fully customized solutions, we ensure compliance, performance, and seamless user experience."
          li="Secure & High-Performance Medicine Delivery Solutions"
          li1="On-Demand & 10-Minute Medicine Delivery Capabilities"
          li2="Custom & White-Label App Development by Expert Developers"
          ptag3=""
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/your-partner-in-medicine-ordering-app-development-hero-img.webp"
        />

        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Custom Medicine Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                We offer end-to-end medicine delivery app development services
                for startups, pharmacies, and healthcare businesses. Our
                qualified healthcare app developers have years of experience in
                the pharmacy industry and build high-quality medicine delivery
                apps. These solutions are designed to meet real customer needs
                while fully complying with healthcare regulations and standards.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          heading="Why Invest in Medicine Delivery App development"
          description1="Investing in Medicine Delivery App Development helps pharmacies, startups, and healthcare enterprises deliver medicines faster, manage prescriptions digitally, and offer 24/7 services. An online medicine delivery app improves customer convenience, boosts repeat orders, and ensures secure payments with real-time order tracking."
          description2="India’s online pharmacy and medicine delivery market is experiencing rapid growth, with strong revenue potential expected to reach US$418 million to over US$1 billion in the coming years. This expansion is driven by increasing internet adoption, rising demand for convenient healthcare services, seamless telemedicine integration, and growing health awareness among consumers. Leading platforms such as Tata 1mg and PharmEasy continue to dominate this fast-evolving and highly competitive sector."
          description3="By choosing custom and on-demand medicine delivery app development, businesses gain scalability, long-term growth, and a competitive edge in the digital healthcare ecosystem."
          li='Secure & High-Performance Medicine Delivery Solutions'
          li1='On-Demand & 10-Minute Medicine Delivery Capabilities'
          li2='Custom & White-Label App Development by Expert Developers'
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

      

        <BusinessSolustion
          imageSrc="https://www.comfygen.com/comfygen-images/medicine-delivery-app-development/aI-powered-medicine-delivery-app-development.webp"
          BusinessSolustion={JSON_DATA.BusinessSolustion}
        />

        <AppcardSlider
          heading="Medicine Delivery App Clone Solutions We Provide"
          description="Looking to launch a best medicine delivery app like leading pharmacy platforms? Our medicine delivery app clone development solutions offer ready-to-launch, secure, and fully customizable apps tailored to your healthcare business goals."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Medicine Delivery App Development Success Stories"
            description="Explore some of our successfully delivered on-demand medicine delivery app projects, built for startups, pharmacy chains, and healthcare businesses with a focus on performance, security, and scalability."
          />
        </section>

        <CallToAction
          heading="Build Your Medicine Delivery App with Experts"
          text="Launch a secure, scalable, and user-friendly medicine delivery app tailored to your pharmacy business needs."
          buttonText="Get Started Project"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <div className="py-8">
          <Features
            heading="Essential Features for Your Medicine Delivery Application"
            description="Comfygen specializes in developing feature-rich multi-vendor medicine delivery app solutions with advanced control panels for seamless operations. Medicine doorstep delivery app development enhances user convenience, streamlines pharmacy management, and ensures efficient deliveries."
            featuresData={JSON_DATA.featuresData}
            grid={4}
          />
        </div>

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Trending Technologies We Leverage for Online Medicine Delivery
                  App Development
                </h2>
                <p className="text-white text-center">
                  Comfygen is a brilliant custom medicine delivery app
                  development company that uses the latest technologies to build
                  a next-gen online medicine delivery app. Our tech-driven
                  pahrmcay solutions improve automation, user experience, and
                  operational efficiency for pharmacies and healthcare startups.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.FoodAppMaker.map((elem, index) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={index} className={` relative`}>
                      <div
                        className={` flex justify-start  place-items-center relative`}
                      >
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="">
                        <p
                          className=" text-white text-start "
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

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                End-to-End Medicine Delivery App Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                We follow a transparent and result-driven development process at
                Comfygen is a top-rated medicine delivery app development
                company in India. From idea validation to app launch, we make
                sure to secure, scalable, and high-performance online medicine
                delivery app solutions.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Technology Stack We Use for Medicine Delivery App Solution"
          description="We use a modern, secure, and scalable technology stack for medicine delivery app solutions. Our backend, frontend, and integration frameworks ensure fast performance, effortless user experience, secure data handling, and smooth scalability to support growing online pharmacy and healthcare delivery platforms."
          filterCategory={["crypto"]}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <div className="py-5">
          <ClientStories />
        </div>

        <HireDeveloper
          heading="Hire Qualified Medicine Delivery App Developers"
          text="Hire qualified <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>Medicine Delivery App Developers</a> from Comfygen Technologies, a trusted <a href='https://www.comfygen.com/healthcare-app-development' class='underline font-semibold'>healthcare app development company</a> to build secure, scalable, and high-performance medicine delivery solutions tailored to your business needs."
          text1="Our developers specialize in medicine delivery app development, on-demand pharmacy platforms, real-time tracking, and secure payment integrations, delivering cost-effective, compliant, and future-ready healthcare applications that help your business grow confidently."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Proven expertise in healthcare delivery app development",
            "Compliance with healthcare standards (HIPAA, GDPR)",
            "Secure, scalable, and user-friendly app solutions",
            "On-time delivery with ongoing support",
          ]}
        />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={JSON_DATA.Frequently} />

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
