import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./ELearningApp.json";
import Header from "../../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"

import dynamic from "next/dynamic";

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);




// import AboutSection from "../../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../../Newcomponet/SectionCompoent/ServicesSec";
// import ConsultancyApproach from "../../Newcomponet/SectionCompoent/ConsultancyApproach";
// import Portfolio from "../../Newcomponet/SectionCompoent/Portfolio";
// import TechStack from "../../Newcomponet/SectionCompoent/TechStack";
// import WhyChoose from "../../Newcomponet/SectionCompoent/WhyChooseUs";
// import HireDeveloper from "../../Newcomponet/SectionCompoent/HireDeveloper";
// import ClientTestimonials from "../../Newcomponet/SectionCompoent/ClientTestimonials";
// import Faq from "../../Newcomponet/SectionCompoent/Faq"




const portfolioData = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/data/data-p1.webp",
    title: "Retail & E-Commerce",
    description:
      "We help brands monitor sales, inventory, and customer behavior in real time. Our dashboards have led to a 25% boost in ROAS and an 18% drop in stockouts by giving teams faster, clearer insights across all sales channels.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/data/data-p2.webp",
    title: "Healthcare",
    description:
      "We turn complex patient and billing data into clean, actionable dashboards. Clients have cut claims processing time by 20% and reduced billing errors by 15% while improving care coordination across departments.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Financial1.webp",
    title: "Finance & Insurance",
    description:
      "We automate reporting and forecasting to replace spreadsheet chaos. Our solutions have helped teams cut reporting time by 60%, improve forecast accuracy by 30%, and close books 40% faster.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/business-intelligence/p4.webp",
    title: "Marketing & Agencies",
    description:
      "We centralize campaign data across platforms into one real-time view. This has helped teams reduce reporting time by 70%, improve budget allocation by 22%, and increase client retention by 28%.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Education.webp",
    title: "Education & EdTech",
    description:
      "We track student engagement and course progress to improve learning outcomes. Dashboards we’ve built have raised course completion rates by 12% and boosted student engagement by 25%.",
    link: "/contact-us",
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
      name: "Business Intelligence and Business Analytics Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Comfygen offers Business Intelligence and Analytics services to help businesses turn raw data into real-time decisions, predictive insights, and strategic growth. Our services include custom dashboards, KPI tracking, data visualization, forecasting, and advanced analytics solutions.",
      url: "https://www.comfygen.com/data/business-intelligence",
      mainEntityOfPage: "https://www.comfygen.com/data/business-intelligence",
      areaServed: "Global",
      serviceType: [
        "Business Intelligence service",
        "Business Analytics Service",
        "BI Services",
        "Data Visualization Service",
        "KPI & Performance Tracking",
        "Marketing Analytics",
        "Predictive Analytics",
        "Data Dashboard Development",
        "Data Integration & Warehousing",
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
      Name: "Microsoft Power BI Sales Dashboards | Real-Time Sales Insights",
      image: "https://www.comfygen.com/comfygen-images/business-intelligence/about.webp",
      description:
        "Track KPIs, analyze performance, and forecast revenue with Comfygen’s Microsoft Power BI Sales Dashboards. Designed for real-time decision-making and sales optimization.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "115",
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
          name: "Data science",
          item: "https://www.comfygen.com/data",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Business Intelligence & Analytics Services",
          item: "https://www.comfygen.com/data/business-intelligence",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Business Intelligence (BI) and Business Analytics (BA)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business Intelligence focuses on collecting and visualizing historical performance—think dashboards, reports, and KPIs. Business Analytics goes further, using statistical models and predictive forecasting to answer not only what happened—but what might happen next and why.",
          },
        },
        {
          "@type": "Question",
          name: "What business problems can BI & Analytics actually solve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BI helps answer questions like, “Where are your sales outperforming or lagging?” or “Which marketing campaign is actually driving revenue?” Business Analytics tackles deeper questions like, “Why has customer retention changed year over year?” or “Which product segment will grow next quarter?” Answers lead to action.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my business really needs BI and Analytics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your data lives in silos across multiple tools, if your spreadsheets take too long to compile, or if decisions are based on guesses—we’ll call it: you need BI & Analytics. These services bring clarity, boost efficiency, and enable real-time decisions from accurate data.",
          },
        },
        {
          "@type": "Question",
          name: "How do businesses get started with BI & Analytics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Begin with a data discovery workshop: map where data lives, what problems you want to solve, and define your key business questions. Then we build targeted dashboards, integrations, and models aligned to those goals.",
          },
        },
        {
          "@type": "Question",
          name: "Is BI & Analytics secure and compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modern BI platforms enforce enterprise-grade security like SOC 2 Type II, ISO 27001, GDPR compliance, role-based access, and encryption. Your data stays safe while relevant stakeholders get just the insight they need.",
          },
        },
        {
          "@type": "Question",
          name: "What challenges should I expect in BI & Analytics projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common issues include: poor data quality, lack of leadership buy-in, integration bottlenecks, and not defining business goals clearly. Overcoming these requires strategy, collaboration, and expert execution.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Business Intelligence and Analytics Services | Comfygen Experts
        </title>
        <meta
          name="description"
          content="Turn business data into smart decisions with Comfygen’s BI and analytics services. From dashboards to forecasting, we help you move faster, with clarity."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/data/business-intelligence"
        />
        <meta
          name="keywords"
          content="Business Intelligence service, Business Analytics Service, BI Services, Data Visualization Service, KPI & Performance Tracking, Marketing Analytics, Predictive Analytics, Data Dashboard Development, Data Integration & Warehousing"
        />

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/business-intelligence/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/business-intelligence/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Business Intelligence and Analytics Services"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/business-intelligence"
        />
        <meta
          property="og:title"
          content="Business Intelligence & Analytics Services | Comfygen"
        />
        <meta
          property="og:description"
          content="Unlock real-time dashboards, predictive insights, and smarter decisions with Comfygen’s Business Intelligence and Analytics services."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Business Intelligence & Analytics Services | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Turn your business data into smart decisions with Comfygen. Get BI dashboards, analytics, forecasting, and insights that actually drive growth."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/business-intelligence/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden lg:pt-[120px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Business Intelligence and Business Analytics Services"
            ptag="Business Intelligence and Business Analytics services are the backbone of business. They turn raw data into real-time, actionable insights, helping organizations to not only understand what has happened but also identify the reasons behind it and determine the best course of action. By analyzing patterns, market trends, and performance metrics, these services support smarter decision-making, enhance operational efficiency, and future planning. They empower businesses to be proactive rather than reactive, ensuring continuous improvement and long-term success in an increasingly data-driven world."
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/business-intelligence/hero.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Why Your Business Needs BI & Analytics Services"
          description1="Data is not a problem. The Problem is not arranged perfectly. Metrics are not aligned, reports are slow, and decisions are taken on the basis of this. BI and <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/data/analytics-service-provider' >Analytics services</a> fix this problem. They gather all the data and show you what’s going on, and help you act in real time—not after the damage is done."
          description2="With the help Business intelligence service, you are not dependent on spreadsheets or guessing, you will get clear, actionable insights that help to improve performance in all sectors like:- Marketing, sales, finance and etc."
          description3="And when you work with Comfygen, you’re not just buying dashboards. You will get a business intelligence expert team that builds a dashboard according to your goals, your data, and the way your business actually runs."
          imageSrc="https://www.comfygen.com/comfygen-images/business-intelligence/about.webp"
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

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Benefits of Business Intelligence & Business Analytics Services
              </h2>
              <p className="text-base text-center font-normal">
                In the digital world, with the help of BI Implementation,
                Businesses stay ahead of their competition by making better
                decisions based on data, enabling smarter decisions, improved
                efficiency, and sustainable growth. Here are some of the main
                benefits BI and BA can bring to your organization:
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

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
            projects={portfolioData}
            heading="Portfolio of Our Data Analytics Projects"
            description="At ComfyGen, we take pride in delivering data analytics solutions that create measurable business value. Our portfolio spans diverse industries and use cases—each project tailored to meet specific client objectives, improve decision-making, and drive operational excellence. Here's a glimpse of how we've helped organizations transform their data into strategic assets"
          />
        </section>


        <TechStack
          title="Our Technology Stack Use to Develop Best AI Services"
          description="At Comfygen, we leverage cutting-edge tools and technologies to build robust, scalable, and innovative AI enterprise to SME mobile app development solutions. Our best AI and ML app development expertise spans a wide range of platforms, frameworks, and cloud services, ensuring that we deliver the best results for your startup business. Here’s a glimpse of the technologies we use"
          customTechData={JSON_DATA.TechData}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Expert Business Intelligence & Analytics experts"
          text="Want to transform your business with real-time insights and smarter decisions? Hire a BI and Analytics expert from Comfygen to build a custom data solution tailored to your operations. We design high-performance analytics systems with <a class='underline font-semibold' href='https://www.comfygen.com/blog/tableau-dashboards-improve-business-decisions/' >real-time dashboards</a>, predictive models, automated reports, and deep customer insights—all built around your specific goals."
          text1="We help you move faster, act smarter, and scale with confidence using data that actually drives results."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced in BI, analytics, and enterprise reporting solutions",
            "10+ years of expertise across finance, marketing, operations, and tech",
            "Deep knowledge of Power BI, Tableau, Looker, SQL, Python, and cloud platforms",
            "Fast project delivery with full-time technical support and post-launch optimization",
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="" />
        {/*<BlogSection initialData={initialData} />*/}
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

