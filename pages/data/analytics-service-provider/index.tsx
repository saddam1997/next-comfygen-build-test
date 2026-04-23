import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../../components/Newcomponet/comman/Milestones";
import Link from "next/link";
import ClientStories from "../../../components/Newcomponet/SectionCompoent/ClientStories";
import ReviewCard from "../../../components/ReviewCard";

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
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

const IndustriesServe = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/IndustriesServe"),
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


const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



const FutureDriven2 = [
  {
    title: "Analytics Platform Engineering",
    description:
      "We build and manage scalable data analytics platforms that support the entire data lifecycle, covering ingestion, storage, processing, and real-time visualization. Our platforms serve as the backbone of modern, insight-driven organizations.",
  },
  {
    title: "Big Data Processing",
    description:
      "We handle vast volumes of structured and unstructured data with ease. Our big data capabilities enable rapid data processing, advanced querying, and pattern discovery, fuelling strategic decisions and operational agility.",
  },
  {
    title: "Business Intelligence (BI)",
    description:
      "We process raw data into visual analytics through customized dashboards and key performance indicators tailored to your goals. Our data analytics services give business leaders the clarity and confidence to make informed, real-time decisions based on trusted metrics.",
  },
  {
    title: "Visual Analytics and Dashboards",
    description:
      "We build user-friendly, interactive dashboards using tools like Power BI, <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/data/tableau-consulting-services' >Tableau</a>, and Looker. Designed for clarity and ease of use, these visualizations simplify complex datasets, enabling teams to uncover insights at a glance.",
  },
];

const Process = [
  {
    title: "Requirement Analysis and Architecture Design",
    description:
      "We begin by understanding your business objectives, data challenges, and reporting needs. Based on this, we define the analytics scope and design the architecture, including data sources, flow, storage structure, and access protocols.",
  },
  {
    title: "Data Ingestion and Integration",
    description:
      "We collect data from multiple sources, including CRMs, ERPs, IoT devices, and third-party APIs. Our team then consolidates this data into a central location such as a data warehouse or data lake for unified access.",
  },
  {
    title: "Data Cleaning and Preparation",
    description:
      "To ensure data accuracy and relevance, we identify and resolve inconsistencies, handle missing values, and prepare datasets for downstream analytics.",
  },
  {
    title: "ETL/ELT Pipeline Development",
    description:
      "Our engineers design and implement ETL/ELT workflows to transform raw inputs into clean, usable formats, optimized for analysis and reporting.",
  },
  {
    title: "Data Modeling and Structuring",
    description:
      "We organize data into logical models, establish relationships, and create semantic layers. Rigorous testing and validation are done to ensure accuracy and trustworthiness.",
  },
  {
    title: "Analytics and Insight Generation",
    description:
      "With clean, structured, and accessible data in place, we apply statistical analysis, machine learning, and data visualization to deliver actionable insights that drive smarter business decisions.",
  },
  {
    title: "Compliance and Governance Support",
    description:
      "We ensure your data is secure, auditable, and compliant with industry regulations through strong governance and quality controls.",
  },
];

const portfolioData = [
  {
    image: "https://www.comfygen.com/comfygen-images/data/data-p1.webp",
    title: "Retail Analytics Dashboard for eCommerce Brand",
    description:
      "We developed a custom Power BI dashboard for an eCommerce client to track real-time sales, customer behavior, and inventory levels. The data solution improved forecasting accuracy by 35% and helped personalize marketing strategies across multiple regions.",
    link: "/contact-us",
  },
  {
    image: "https://www.comfygen.com/comfygen-images/data/data-p2.webp",
    title: "Predictive Model for Healthcare Risk Scoring",
    description:
      "Using Python and machine learning, we built a prediction engine that helped a healthcare provider identify high-risk patients early. This solution improved treatment planning and reduced emergency visits by over 20% within the first quarter.",
    link: "/contact-us",
  },
  {
    image: "https://www.comfygen.com/comfygen-images/data/data-p3.webp",
    title: "Big Data Platform for Logistics Automation",
    description:
      "We implemented a scalable big data architecture using Apache Spark and Hadoop for a logistics firm. The system enabled real-time fleet tracking, reduced delivery delays by 25%, and optimized route planning across 5 major cities.",
    link: "/contact-us",
  },
  {
    image: "https://www.comfygen.com/comfygen-images/data/data-p4.webp",
    title: "Student Performance Analytics for EdTech App",
    description:
      "Our team designed an AI-powered performance tracking system for an EdTech platform. It analyzed test scores, engagement rates, and course progress to generate personalized learning recommendations, boosting student retention by 30% in just two months.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Retail.webp",
    title: "Retail & e-Commerce Analytics",
    description:
      "For a leading fashion retailer in the USA, we developed a centralized data warehouse that integrated POS, CRM, and online store data. It enabled customer segmentation, personalized marketing, and real-time inventory optimization, increasing customer retention by 30%.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Healthcare.webp",
    title: "Healthcare Analytics",
    description:
      "We helped a multispecialty hospital in India implement a data lake with Power BI dashboards. This improved real-time visibility into patient flow and KPIs, reducing wait times by 40% and enhancing compliance tracking.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Financial1.webp",
    title: "Financial Analytics",
    description:
      "For a UK-based FinTech startup, we built real-time fraud detection models using Python and AWS. The system identified 98% of fraudulent transactions proactively, minimizing financial loss and improving user trust.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Manufacturing.webp",
    title: "Manufacturing & IoT Analytics",
    description:
      "We integrated IoT sensor data with Azure analytics for a German automotive parts manufacturer. Predictive maintenance models reduced machine downtime by 25% and saved over $500,000 annually.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Logistics.webp",
    title: "Logistics & Supply Chain Optimization",
    description:
      "We built a geospatial route optimization solution with real-time data and Looker dashboards for a global logistics firm. This improved delivery predictions and reduced transportation costs by 18%.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/analytics/analytics-Education.webp",
    title: "Education & EdTech Insights",
    description:
      "We developed dashboards for a 500K-user EdTech platform to track learning KPIs and engagement. Educators gained insight into student performance, increasing engagement by 35% and platform retention.",
    link: "/contact-us",
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
        <title>Data Analytics Services Provider Company | Data Analytics Consulting </title>
        <meta
          property="og:title"
          content="Best Data Analytics Service Company"
        />
        <meta
          name="description"
          content="Comfygen is a leading data analytics services provider company delivering custom data analytics solutions, big data analytics, predictive insights, and business intelligence services to help businesses make smarter data-driven decisions."
        />
        <meta
          name="og:description"
          content="Comfygen Technologies, the best data analytics company, delivers end-to-end data analytics services including BI dashboards, data warehousing, AI analytics & consulting to boost data-driven business growth."
        />

        <meta
          name="keywords"
          content="Data Analytics Strategy, Data Analytics Consulting, Data Management, Data Integration, Data Warehousing, Data Preparation, Managed Data Analysis, Analytics as a Service (AaaS / DAaaS), Data Analytics Modernization"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/analytics-service-provider"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Data Analytics Services Provider"
        />
        <meta
          name="twitter:description"
          content="Recognized as the best data analytics company, Comfygen Technologies provides customized data analytics solutions in BI, AI analytics, data pipelines, and modern cloud infrastructure."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/analytics/analytics-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/analytics/analytics-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/analytics/analytics-og.webp"
        />
        <meta property="og:image:alt" content="Data Analytics Services" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/analytics-service-provider"
        />
        <meta
          property="og:title"
          content="Best Data Analytics Services Provider for Enterprises"
        />
        <meta
          property="og:description"
          content="As a leading data analytics company, we help businesses unlock insights through BI dashboards, AI models, and modern data infrastructure."
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />






      </Head>

     {/* <Header /> */}

      <div className="">
        <HeroSectionForAllPages
          heading="Data Analytics Services Provider Company for Data-Driven Business Growth"
          ptag="Transform your raw business data into powerful insights with our advanced data analytics services. Comfygen is a trusted data analytics services provider company in India, we help startups, small business and enterprises unlock valuable patterns, predict trends, and make smarter decisions using AI-powered analytics and business intelligence solutions."
          ptag1="Our experts deliver custom data analytics solutions that allow real-time reporting, predictive forecasting and interactive dashboards to improve operational efficiency and accelerate business growth."
          li="AI-Driven Data Analytics Solutions"
          li1="Real-Time Business Insights & Reporting"
          li2="Custom Data Analytics Services for Enterprises"
          li3="Scalable & Secure Analytics Infrastructure"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/analytics/analytics-hero.webp"
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Enterprise Data Analytics Service Provider
              </h2>
              <p className="text-base text-center font-normal">Comfygen is a leading Data Analytics Service Provider offering end-to-end analytics solutions that enable businesses to extract real value from their data. From analytics strategy to scalable implementation, we support enterprises with reliable, growth-focused data analytics services.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <AboutSection
          title=""
          heading="Why Choose a Data Analytics Service Provider for Consulting"
          description1="A strong and well-structured data ecosystem is essential for turning raw information into meaningful insights. Without expert guidance on data strategy, architecture, integration, and governance, organizations risk underutilizing their data and missing critical growth opportunities."
          description2="A professional Data Analytics Service Provider offers end-to-end consulting that goes beyond tools and dashboards. From defining a clear analytics roadmap to designing secure, scalable data architectures, experienced consultants ensure your data infrastructure is built to support long-term business objectives and agile decision-making."
          description3="By partnering with a data analytics consulting provider, businesses gain access to specialized expertise for data modernization, migration, and advanced analytics implementation. This strategic approach helps reduce operational costs, improve data quality, and accelerate innovation—empowering organizations to build future-ready, insight-driven data ecosystems with confidence."
          imageSrc="https://www.comfygen.com/comfygen-images/analytics/analytics-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="container mx-auto ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col container mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Business Intelligence & Reporting Solutions

                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  We help businesses make sense of their <Link href='https://www.comfygen.com/data' className='text-blue-600 font-semibold'>data</Link> through clear, accurate reports and interactive dashboards. By unifying data from multiple sources and defining the right KPIs, our BI solutions give decision-makers a reliable view of performance, trends, and opportunities, so teams can act faster and with confidence.

                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 ">
                {FutureDriven2.map((elem) => {
                  const { title, description } = elem;
                  return (
                    <div
                      key={title}
                      className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/40 rounded-2xl"
                    >
                      <h3
                        className="text-2xl text-[#212121] font-semibold"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <p
                        className="text-base font-normal mt-2"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        <section className="py-8">
          <Portfolio
            projects={portfolioData}
            heading="Portfolio of Our Data Analytics Projects"
            description="Comfygen is the best data analytics service provider. We take pride in delivering data analytics solutions that create measurable business value. Our portfolio spans diverse industries and use cases—each project tailored to meet specific client objectives, improve decision-making, and drive operational excellence. Here's a glimpse of how we've helped organizations transform their data into strategic assets"
          />
        </section>

        <TechStack
          title="Our Technology Stack for Data Analytics Services"
          description="At Comfygen, we use modern tools and technologies to build robust and scalable data analytics solutions for enterprises and SMEs. Our expertise helps transform raw data into actionable insights, enabling smarter business decisions."
        />


        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Data Analytics Process
              </h2>
              <p className="text-base font-normal mt-2">
                As a trusted Data Analytics Service Provider, we follow a structured, quality-focused approach to transform raw data into actionable insights. Each step is designed to ensure accuracy, scalability, and alignment with real business goals—delivering results that are reliable, relevant, and ready for informed decision-making.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <IndustriesServe
          heading="Delivering Data Analytics Services Across Industries "
          description="At Comfygen, we recognize that every industry has distinct data challenges, and that one-size-fits-all solutions often fall short. To address this, we offer tailored data analytics services designed to meet the unique needs of specific sectors. Here's how various industries are leveraging data to drive measurable impact:"
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientStories />

        <HireDeveloper
          heading="Hire Data Analytics Experts for business growth "
          text="Looking to turn complex data into clear, actionable insights? You’re in the right place - Comfygen offers expert data analytics services backed by skilled professionals and real-world experience. Partner with Comfygen to transform raw data into real business value. "
          buttonText="Hire Data Analytics Expert "
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />


        <ReviewCard testimonials={JSON_DATA.ReviewData} />


        {/* 
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        /> */}
        <Faq
          faqData={JSON_DATA.Frequently}
          title="FAQs for Our Data Analytics Services "
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


