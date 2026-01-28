import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./ELearningApp.json";
import Header from "../../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"

import dynamic from "next/dynamic";
import Milestones from "../../../components/Newcomponet/comman/Milestones";

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

const SolutionsFeature = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/astrology/SolutionsFeature"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ClientTestimonials = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);


const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





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



  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Business Intelligence & Analytics Services | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen delivers end-to-end Business Intelligence and Analytics services that convert complex data into actionable insights through advanced dashboards, data warehousing, and predictive analytics."
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden lg:pt-[120px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Business Intelligence & Business Analytics Services"
            ptag="Business Intelligence & Business Analytics services transform raw data into actionable insights, enabling organizations to understand past performance, uncover underlying trends, and make informed decisions. By analyzing patterns, market trends, and performance metrics, these services drive smarter decision-making, enhance operational efficiency, and support future planning. With BI and analytics, businesses can move from reactive responses to proactive strategies, ensuring continuous improvement and long-term success in a data-driven world."
            li='Real-Time Data Insights for Smarter Decisions'
            li1='Performance Metrics & Trend Analysis'
            li2='Operational Efficiency & Process Optimization'
            l13='Data-Driven Future Planning & Strategy'
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/business-intelligence/hero.webp"
          />
        </div>
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
               Business Intelligence & Business Analytics Services
              </h2>
              <p className="text-base text-center font-normal">
                We provide comprehensive Business Intelligence and Analytics services, giving you the insights and tools you need when you partner with Comfygen. Our solutions are designed to transform your data into clear, actionable results.

              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Your Business Needs Business Intelligence & Analytics Services"
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

        <section className="py-8">
          <SolutionsFeature title="Why Your Business Needs Business Intelligence & Analytics Services"
            subtitle="In the digital world, with the help of BI Implementation, Businesses stay ahead of their competition by making better decisions based on data, enabling smarter decisions, improved efficiency, and sustainable growth. Here are some of the main benefits BI and BA can bring to your organization"
            data={JSON_DATA.servicesData1}
          />
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
            heading="Portfolio of Our Business Intelligence & Business Analytics Projects"
            description="At Comfygen, we specialize in delivering Business Intelligence (BI) and Analytics solutions that turn complex data into actionable insights. Our projects span multiple industries, helping organizations make data-driven decisions, optimize operations, and uncover strategic opportunities. Each solution is tailored to harness the power of analytics, transforming raw data into a competitive advantage."
          />
        </section>


        <TechStack
          title="Our Technology Stack for Business Intelligence & Analytics Services"
          description="At Comfygen, we leverage modern tools and platforms to build robust, scalable, and insightful Business Intelligence and Analytics solutions. Our expertise spans data integration, warehousing, visualization, and advanced analytics, ensuring your business turns raw data into actionable intelligence. Here’s a snapshot of the technologies we use"
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

