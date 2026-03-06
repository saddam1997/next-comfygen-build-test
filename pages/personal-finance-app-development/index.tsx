import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./PersonalFinance.json";


import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);



const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);




const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }

)

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



const Process = [
  {
    title: "Idea & Requirement Analysis",
    description:
      "We begin by understanding your business goals, target users, and app vision. This step ensures we build a personal finance app tailored to your unique requirements and future scalability.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design clean, user-friendly interfaces that simplify money management. Our design team ensures the personal finance software is easy to use, visually appealing, and delivers a great user experience.",
  },
  {
    title: "Development (iOS/Android/Web)",
    description:
      "Our developers build fast, secure, and responsive apps for iOS, Android, and web platforms. We use modern frameworks to ensure smooth performance and cross-platform compatibility.",
  },
  {
    title: "API & Payment Gateway Integration",
    description:
      "We integrate third-party APIs and secure payment gateways for real-time transactions, bank syncing, and financial data management to enhance your finance app’s functionality.",
  },
  {
    title: "Testing & QA",
    description:
      "We conduct full testing to ensure the app runs smoothly without bugs. Our QA team checks performance, security, and usability before final delivery.",
  },
  {
    title: "App Launch",
    description:
      "Once the app is ready, we help you launch it successfully on the App Store, Play Store, or web server. We ensure your product meets all publishing guidelines.",
  },
  {
    title: "Ongoing Maintenance",
    description:
      "After launch, we offer regular updates, bug fixes, and new feature integration to keep your personal finance app running smoothly and up to date.",
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
      name: "Comfygen",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        areaServed: [
          "US",
          "IN",
          "CA",
          "GB",
          "AD",
          "AU",
          "AT",
          "BS",
          "BH",
          "IO",
          "KM",
          "CU",
          "AR",
          "CW",
          "CY",
          "DK",
          "DM",
          "EG",
          "FK",
          "FI",
          "FR",
          "DE",
          "GR",
          "GL",
          "HK",
          "IS",
          "ID",
          "IT",
          "JP",
          "JE",
          "JO",
          "KW",
          "KG",
          "KR",
          "MX",
          "FM",
          "NZ",
          "NI",
          "OM",
          "PE",
          "PH",
          "PL",
          "PT",
          "QA",
          "RO",
          "RU",
          "SA",
          "SG",
          "SE",
          "SZ",
          "CH",
          "TH",
          "TR",
          "TN",
          "UA",
          "UM",
          "AE",
          "039",
          "155",
          "154",
          "151",
          "150",
        ],
        email: "sales@comfygen.com",
        availableLanguage: "en, in",
      },
      sameAs: [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Comfygen",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen",
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
          streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7",
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
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Personal Finance App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "We provide expert personal finance app development services to help users manage money, track expenses, and set goals. Build secure and intuitive financial apps tailored to your business needs.",
      "url": "https://www.comfygen.com/personal-finance-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/personal-finance-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Budget tracker app development",
        "Personal finance app development",
        "Custom personal finance app",
        "Personal finance software development",
        "Expense tracker app development"

      ],

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
      "Name": "Personal Finance App Development Company",
      "image": "https://www.comfygen.com/comfygen-images/personal-finance-app-development/about.webp",
      "description": "Looking to build a finance app? We offer personal finance app development in India with secure architecture, rich UI/UX, and advanced financial planning tools for users.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "160"
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
        "name": "Personal Finance App Development",
        "item": "https://www.comfygen.com/personal-finance-app-development"
      }]
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Comfygen",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        email: "sales@comfygen.com",

        availableLanguage: "en, in",
      },
      sameAs: [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What features are essential in a personal finance app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A personal finance app should include expense tracking, budget management, bill reminders, investment tracking, financial goal setting, secure login, and analytics dashboards. Advanced apps may also offer AI-driven insights and expense categorization."
          }
        },
        {
          "@type": "Question",
          "name": "Which technologies are used to develop personal finance apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Popular technologies include React Native, Flutter, Swift (iOS), Kotlin (Android) for front-end, and Node.js, Python, Java, or Ruby on Rails for back-end. Secure API integration with banks and payment gateways is crucial."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate third-party services into my app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, apps can integrate third-party APIs like banking APIs, payment gateways, credit score providers, and investment platforms to enhance functionality and provide real-time data."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure security in personal finance apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security is ensured via data encryption, two-factor authentication, secure cloud storage, PCI DSS compliance, and regular security audits to protect sensitive financial information."
          }
        },
        {
          "@type": "Question",
          "name": "Can the app be customized for different users or businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Personal finance apps can be customized for individual users, family budgeting, or even small business financial management, offering features tailored to each audience."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a personal finance app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development time depends on complexity. A basic app may take 3–4 months, while advanced apps with AI features and multiple integrations can take 6–9 months or more."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of developing a personal finance app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs vary based on features, platform (iOS, Android, or both), integrations, and design complexity. On average, development ranges from $15,000 to $80,000+ for a full-featured app."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide app maintenance and updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ongoing maintenance, bug fixes, performance optimization, and feature updates are provided to keep the app secure, compatible, and user-friendly."
          }
        }
      ]
    }
    ,
  ];

  return (
    <>
      <Head>
        <title>Personal Finance App Development Company | Scalable Finance Apps</title>
        <meta
          name="description"
          content="Comfygen is a top-rated personal finance app development company offering secure, scalable, and user-friendly finance apps for startups, fintech firms, and enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/personal-finance-app-development"
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
          content="Comfygen Finance App"
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
          content="Budget tracker app development, Personal finance app development, Custom personal finance app, Personal finance software development, Expense tracker app development"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:title"
          content="Personal Finance App Development Company | Custom Finance Solutions"
        />
        <meta
          property="og:description"
          content="We create secure, scalable personal finance apps to track expenses, manage budgets, and automate savings. Build your own fintech solution today with Comfygen."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/personal-finance-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/personal-finance-app-development/og.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/comfygen-images/personal-finance-app-development/og.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Personal Finance App Development Services"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Personal Finance App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Partner with Comfygen – a trusted personal finance app development company. We build custom apps for expense tracking, budget management, and financial insights."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/personal-finance-app-development/og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data (optional) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden pt-16">
        <HeroSectionForAllPages
          heading="Top Rated Personal Finance App Development Company"
          ptag="Comfygen Technologies is a top rated personal finance app development company offering advanced Personal Finance App Development services for startups, fintech firms, and enterprises. We create secure, scalable, and user-friendly finance apps that simplify budgeting, expense tracking, and money management, helping businesses deliver exceptional financial solutions and enhance user engagement across Android, iOS, and web platforms."
          li="Simple and intuitive UI/UX for finance apps"
          li1="Secure bank & wallet integrations"
          li2="Real-time expense tracking and budgeting"
          li3="AI-powered financial reports and insights"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/personal-finance-app-development/hero.webp"
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide the Best Personal Finance App Development Services for Startups
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen Technologies, we offer end-to-end personal finance app development services to help startups, banks, and fintech companies launch powerful money management applications. Our custom solutions empower users to track expenses, manage budgets, and plan financial goals anytime, anywhere.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <AboutSection
          title="About Company"
          heading="Why Should You Invest in Personal Finance App Development?"
          description1="Investing in personal finance app development offers strong business potential due to rapidly growing global demand for digital money management solutions. The personal finance app market was valued in the tens of billions in 2026 and is projected to exceed $100 billion by 2030–2035, growing at a 15–25% CAGR. Rising smartphone adoption, financial awareness, and AI-driven automation fuel recurring revenue through subscriptions, ads, and premium features, making it a highly profitable and scalable investment opportunity."
          description2=""
          points={[
            "High market growth",
            "Strong user demand",
            "AI-driven innovation",
            "Recurring revenue models",
            "Scalable business opportunity",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/personal-finance-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/tutor-apps-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Personal Finance App Development Portfolio"
            description="Our personal finance app development portfolio showcases a diverse range of secure, scalable, and user-centric finance applications. As a trusted personal finance app development company, we deliver innovative solutions for budgeting, expense tracking, and intelligent money management across multiple platforms."
          />
        </section>



        <CallToAction
          heading="Ready to Build Your Personal Finance App?"
          text="Have an idea for a smart money management app? Our expert team is here to turn your vision into a secure and user-friendly solution. Let's create something amazing together."
          buttonText="Request a Proposal"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/personal-finance-app-development/call.webp"
          imageAlt="Get in touch now."
        />

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Types of Personal Finance Apps We Build
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  We specialize in building a wide range of personal finance
                  apps that help users take full control of their financial
                  life. Whether it’s budgeting, tracking expenses, managing
                  investments, or monitoring credit scores, we create secure and
                  scalable apps for all your financial needs.
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
                Our Personal Finance App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                As a trusted personal finance app development company, we follow a streamlined and agile development process to build secure, scalable, and user-centric finance applications. Our personal finance app development services ensure transparency, quality, and timely delivery at every stage.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <TechStack
          title="Technology Stack We Use for Personal Finance App Development"
          description="We use the latest and most reliable technologies to build secure, scalable, and high-performance personal finance apps. Our advanced tech stack supports real-time syncing, smooth performance, and secure financial operations for users across platforms."
        />
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Why Your Business Needs a Personal Finance App
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  With the rapid shift toward digital money management, personal finance app development has become a strategic investment for modern businesses. A well-designed finance app helps companies attract users, build trust, and deliver smart financial tools that enhance customer experience and long-term engagement.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 ">
                {JSON_DATA.FutureDriven2.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-2xl">
                      <h3
                        className="text-2xl text-[#212121] font-semibold"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <p
                        className=" text-base font-normal mt-2"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Personal Finance App Developers"
          text="Hire skilled personal finance app developers from Comfygen Technologies to build secure, intuitive, and scalable finance applications. Our team focuses on smart budgeting, expense tracking, and financial insights that enhance user experience. With proven personal finance app development services, we help startups and enterprises launch high-performing apps that support long-term business growth."
          text1=""
          text2="Why Choose Our Personal Finance App Developers?"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced in fintech and banking solutions",
            "Skilled in cross-platform development (Flutter, React Native)",
            "Experts in API integration (Plaid, Yodlee, Razorpay)",
            "Focus on security (AES-256, Biometric Auth)",
          ]}
        />
        <ClientStories/>
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

