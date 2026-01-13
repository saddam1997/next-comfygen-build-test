import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../../components/Newcomponet/comman/Milestones";

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
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
        <title>Enterprise Data Analytics Services | BI, AI & Cloud Solutions – Comfygen</title>
        <meta
          property="og:title"
          content="Best Data Analytics Service Company"
        />
        <meta
          name="description"
          content="Comfygen provides end-to-end enterprise data analytics services, including BI dashboards, AI-driven analytics, data management, and cloud solutions to transform data into actionable business insights."
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                areaServed: ["IN", "US", "CA", "GB"],
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
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Comfygen",
              image:
                "https://www.comfygen.com/herosection/ai-development-company.webp",
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
                  addressCountry: "CA",
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
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Top-Rated Data Analytics Services",
              provider: {
                "@type": "Organization",
                name: "Comfygen Technologies",
                url: "https://www.comfygen.com/",
              },
              description:
                "As the best data analytics company, Comfygen Technologies empowers businesses with AI-driven insights, dashboards, data warehousing & governance services.",
              url: "https://www.comfygen.com/data/analytics-service-provider",
              mainEntityOfPage:
                "https://www.comfygen.com/data/analytics-service-provider",
              areaServed: "Global",
              serviceType: [
                "Data Analytics Strategy",
                "Data Analytics Consulting",
                "Data Management ",
                "Data Integration",
                "Data Warehousing",
                "Data Preparation",
                "Managed Data Analysis",
                "Analytics as a Service (AaaS / DAaaS) ",
                "Data Analytics Modernization ",
              ],

              sameAs: [
                "https://www.facebook.com/comfygen.technologies",
                "https://x.com/Comfygen_Tech",
                "https://www.instagram.com/comfygen_technologies",
                "https://www.linkedin.com/company/comfygen-technologies",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why should businesses invest in data analytics consulting?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Data analytics consulting helps businesses transform raw data into actionable insights. We guide organizations in unlocking siloed data, identifying untapped opportunities, and creating a sustainable analytics strategy that supports long-term growth, compliance, and innovation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes your data analytics services different?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our approach combines business acumen with deep technical expertise. We don’t just build dashboards—we uncover what matters most, align analytics with your KPIs, and ensure your team is empowered with tools and training for long-term value.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you help organizations become data-driven?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We partner with your team to assess maturity, define data goals, and implement scalable solutions. Whether it's centralizing data sources, improving governance, or enabling predictive models, we build a roadmap that aligns with your business priorities.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you work with our existing infrastructure and tools?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We work across modern and legacy environments and are experienced with platforms such as Snowflake, Power BI, Tableau, AWS, Azure, Google Cloud, SQL-based systems, and more. Our goal is to enhance—not replace—your existing investments.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is your approach to ensuring data security and compliance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We follow industry best practices and frameworks (e.g., ISO 27001, GDPR, HIPAA) to assess, secure, and monitor data. Our team helps implement policies and controls that ensure privacy, secure access, encryption, and regulatory compliance—without limiting usability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide custom analytics solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Every organization has unique data challenges. We design custom dashboards, automation workflows, and analytics models tailored to your operations, departments, and user roles—delivering insights that drive decisions and ROI.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you ensure data quality and integrity?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We use automated ETL pipelines, validation logic, and anomaly detection frameworks to cleanse and standardize data. We also establish governance processes to maintain quality across departments and systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of businesses do you typically work with?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We work with startups, SMBs, and enterprises across industries including retail, healthcare, finance, manufacturing, logistics, and e-commerce. Whether you’re just starting your data journey or scaling up, we adapt our solutions to your stage and sector.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is your process for delivering a data analytics project?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We follow a 5-step process: 1. Discovery & Assessment → 2. Strategy & Planning → 3. Data Integration & Engineering → 4. Insights & Visualization → 5. Handover & Support. You’ll have full transparency and collaboration at every stage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What’s the difference between a data lake and a data warehouse—and which do I need?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A data warehouse is structured and ideal for reporting and analytics. A data lake handles raw, unstructured data and is useful for large-scale, flexible storage (e.g., for machine learning). We help you determine the best solution—or hybrid setup—based on your use cases and goals.",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://www.schema.org",
              "@type": "Product",
              brand: "Comfygen Technologies",
              Name: "Best Data Analytics Services Provider for AI & BI Insights",
              image: "Hero section image",
              description:
                "Recognized as the best data analytics company, Comfygen Technologies provides customized solutions in BI, AI analytics, data pipelines, and modern cloud infrastructure.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "355",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.comfygen.com/data",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Data Analytics Company",
                  item: "https://www.comfygen.com/data/analytics-service-provider",
                },
              ],
            }),
          }}
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="">
        <HeroSectionForAllPages
          heading="Enterprise Data Analytics Service Provider"
          ptag="Next-Gen AI Solutions for Next-Level Success."
          ptag1="Comfygen helps businesses transform raw data into actionable insights through end-to-end data analytics services. As a trusted data analytics service provider, we offer data management, warehousing, governance, quality management, BI dashboard development, and AI-driven analytics. Using tools like Power BI, Tableau, Python, and cloud platforms such as Snowflake and BigQuery, we analyze structured and unstructured data to uncover opportunities, improve performance, and drive business growth."
          li="Actionable Insights for Better Decision-Making"
          li1="Advanced BI Dashboard Development"
          li2="Data Governance, Management & Quality Solutions"
          li3="AI-Driven Analytics & Predictive Modeling"
          li4='Expert Guidance for Business Growth'
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/analytics/analytics-hero.webp"
        />
<Milestones/>

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Data Analytics Services to Better Management of Every Business
              </h2>
              <p className="text-base text-center font-normal">As a leading data analytics service company in India & USA, we deliver end-to-end data analytics services that help businesses unlock real value from their data. From strategic consulting to building scalable infrastructure, we serve as your trusted enterprises data analytics services provider for long-term growth and efficiency. Explore our professional data analytics services</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <AboutSection
          title=""
          heading="Why Hire Data Analytics Expert "
          description1="In the dynamic and complex world of business, a robust data infrastructure is crucial for helping companies convert raw data into valuable insights. Without skilled engineers to manage data storage, integration, and security, businesses may miss valuable opportunities inherent within their data."
          description2="Our data analytics experts, with their deep expertise, build scalable, secure, and efficient data environments tailored to your unique needs. From handling complex data migrations to designing seamless integration pipelines, they ensure that your analytics foundation supports rapid and reliable decision-making."
          description3="With data becoming the driving force behind innovation and growth, now is the time to hire data analytics expert who can help you harness the power of your data, reduce costs, and accelerate your path to building future-ready data ecosystems "
          imageSrc="https://www.comfygen.com/comfygen-images/analytics/analytics-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}





        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Smarter Decisions Across Industries with Our Data Expertise
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  We deliver tailored <a className="text-blue-500 font-semibold " href='https://www.comfygen.com/data' >data services</a> across various industries to
                  help organizations improve efficiency, boost profitability,
                  and make smarter decisions with real-time insights.
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
            description="At ComfyGen, we take pride in delivering data analytics solutions that create measurable business value. Our portfolio spans diverse industries and use cases—each project tailored to meet specific client objectives, improve decision-making, and drive operational excellence. Here's a glimpse of how we've helped organizations transform their data into strategic assets"
          />
        </section>


        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Data Analytics Process
              </h2>
              <p className="text-base font-normal mt-2">
                We follow a structured, quality-driven process to turn raw data
                into reliable insights. Every step is carefully executed to
                ensure accuracy, scalability, and business relevance.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Our Technology Stack Use to Develop Best AI Services"
          description="At Comfygen, we leverage cutting-edge tools and technologies to build robust, scalable, and innovative AI enterprise to SME mobile app development solutions. Our best AI and ML app development expertise spans a wide range of platforms, frameworks, and cloud services, ensuring that we deliver the best results for your startup business. Here’s a glimpse of the technologies we use"
        />

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

        <HireDeveloper
          heading="Hire Data Analytics Experts for business growth "
          text="Looking to turn complex data into clear, actionable insights? You’re in the right place - Comfygen offers expert data analytics services backed by skilled professionals and real-world experience. Partner with Comfygen to transform raw data into real business value. "
          buttonText="Hire Data Analytics Expert "
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="FAQs for Our Data Analytics Services "
        />

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

