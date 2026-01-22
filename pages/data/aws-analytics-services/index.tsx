import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";

import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../../components/Newcomponet/comman/Milestones";



const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);


const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);


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


const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);








const Process = [
  {
    title: "Requirements & Goal Mapping",
    description:
      "We start by understanding your business goals, KPIs, current data environment, and what you want to achieve with analytics. This helps us define a clear, aligned roadmap.",
  },
  {
    title: "Solution Architecture Design",
    description:
      "Based on your needs, we design a scalable AWS data architecture — selecting the right mix of services like Redshift, Glue, Kinesis, S3, and Athena to handle your data volume, speed, and complexity.",
  },
  {
    title: "Data Integration & Pipeline Development",
    description:
      "We connect your existing systems (ERP, CRM, web apps, APIs, etc.) and build ETL/ELT pipelines using tools like AWS Glue or Data Pipeline — ensuring your data is clean, organized, and ready for analysis.",
  },
  {
    title: "Data Storage & Processing Setup",
    description:
      "We configure secure, high-performance storage — setting up data lakes with S3 or warehouses with Redshift. For big data processing, we use EMR with Spark or Hive as needed.",
  },
  {
    title: "Analytics & Visualization Layer",
    description:
      "We enable querying with Athena or Redshift and build custom dashboards using Amazon QuickSight or integrate with tools like Power BI/Tableau for intuitive visual insights.",
  },
  {
    title: "Security, Compliance & Cost Controls",
    description:
      "We implement IAM roles, encryption, logging, and access governance — and set up budgets and cost-monitoring tools to keep your AWS usage optimized.",
  },
  {
    title: "Testing, Launch & Ongoing Support",
    description:
      "Before going live, we test performance, data accuracy, and cost-efficiency. After deployment, we provide training, monitoring, and support — so your system evolves with your business.",
  },
];



export default function Mobile(props) {
  let { initialData } = props;
  let { LeadingSoftware } = JSON_DATA;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  return (
    <>
      <Head>
        <title>AWS Analytics Services | Data Engineering & AI/ML Solutions – Comfygen</title>
        <meta name="description" content="Comfygen provides AWS analytics services, offering secure, scalable, and cost-efficient data pipelines, real-time analytics, AI/ML integration, and cloud-native solutions to drive smarter business decisions." />

        <meta name="keywords" content="Data Engineering on AWS, Real-Time Analytics, Cloud Data Warehousing, BI Dashboard Development, ETL Pipeline Automation" />

        <link rel="canonical" href="https://www.comfygen.com/data/aws-analytics-services" />



        <meta property="og:url" content="https://www.comfygen.com/data/aws-analytics-services" />
        <meta property="og:title" content="AWS Analytics Services | Real-Time Data Insights" />
        <meta property="og:description" content="Comfygen helps businesses unlock the full potential of AWS Analytics Services — including Redshift, Glue, QuickSight, and more. Scalable. Secure. Built for action." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/aws-analytics-services/og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/aws-analytics-services/og.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AWS Data Analytics services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AWS Analytics Services | Real-Time Data Insights" />
        <meta name="twitter:description" content=" Track performance, analyze data pipelines, and make better decisions with AWS analytics solutions by Comfygen." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/aws-analytics-services/og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>

      <Header />

      <div className="pt-16">
        <HeroSectionForAllPages
          heading="AWS Analytics Services"
          ptag="At Comfygen Technologies, we help businesses transform data into actionable insights with secure, scalable, and cost-efficient AWS Analytics services. Our AWS-certified experts design cloud-native solutions, from advanced data pipelines to real-time analytics, enabling startups and enterprises to make smarter, faster business decisions."
          li="End-to-End AWS Data Analytics & Engineering Solutions"
          li1="Real-Time Analytics for Smarter Decisions"
          li2="Serverless & Scalable Cloud Architecture"
          li3="AI & ML Integration with Amazon SageMaker"
          li4="Secure, Compliant, and Governed Data Infrastructure"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/aws-analytics-services/hero1.webp"
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                AWS Analytics Services We Offer
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we offer AWS <a className='text-blue-500 font-semibold' href='https://www.comfygen.com/data/analytics-service-provider' >Data Analytics Services</a> designed for startups, enterprises, and data-driven organizations. Our cloud-native solutions help you harness the full power of data analytics and data science using AWS tools.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title=""
          heading="Why Your Business Needs AWS Analytics Services"
          description1="In today's digital world, businesses are growing fast and taking smart and fast decisions by data analytic services. Outdated spreadsheets or isolated systems can put your business at a major disadvantage. No matter you're in retail, finance, healthcare, logistics, or manufacturing, data is your most valuable factor. AWS Analytics Services empower your organization to convert raw, unstructured data into clear, actionable intelligence."
          description2="With Comfygen’s AWS <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/data' >Data service</a> approach, we help you build a future-ready data platform that centralizes your data by the help of cloud-based data analytics and data science, delivers real-time insights, and enhances decision-making — all while improving operational efficiency and driving business growth."
          imageSrc="https://www.comfygen.com/comfygen-images/aws-analytics-services/about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our AWS Analytics Services Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                As a Top AWS data analytics service provider, we follow a
                structured, outcome-focused development process. Every step is
                designed to make sure your data architecture is scalable,
                secure, and business-ready. Whether you're starting from scratch
                or optimizing an existing setup, we deliver custom AWS analytics
                services that turn raw data into real decisions.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Our Technology Stack Used for AWS Analytics Services"
          description="At Comfygen, we leverage advanced AWS tools and cloud technologies to build robust, scalable, and data-driven analytics solutions for businesses of all sizes. Our AWS analytics expertise spans data storage, processing, and visualization, ensuring actionable insights that drive smarter business decisions. Here’s a glimpse of the AWS technologies our team uses:"
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire AWS Data Analytics Experts"
          text="Looking to hire AWS analytics, data engineering, and business intelligence? Hire certified AWS analytics experts from Comfygen to build scalable, cloud-native analytics solutions tailored to your industry needs. We specialize in designing data lakes, integrating AI/ML, and delivering actionable insights from complex datasets."
          text1="Proven experience in AWS data analytics tools like Redshift, Glue, Kinesis, and Athena 10+ years of delivering enterprise-grade data solutions Experts in data warehousing, ETL pipelines, and real-time dashboards Faster deployment and full-cycle analytics project support"
          text2="Let our team turn your raw data into competitive advantage with secure, high-performance AWS data analytics services."
          buttonText="Hire AWS Analytics Today"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions – AWS Analytics Services"
        />
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
