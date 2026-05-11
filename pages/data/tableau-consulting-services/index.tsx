import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/tableau.json";

import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
import TechStacks from "../../../components/TechStacks";
const Consultancy = dynamic(() => import("../../../components/Consultancy"), {
  ssr: true,
});
const ClientStories = dynamic(() => import("../../../components/ClientStories"), {
  ssr: true,
});
const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"),
  { ssr: true }
);
import ReviewCard from "../../../components/ReviewCard";

const ServicesComponet = dynamic(
  () => import("../../../components/ServicesSection/ServicesComponet"),
  {
    ssr: true,
  },
);
const ProcesSection = dynamic(
  () => import("../../../components/ProcesSection"),
  {
    ssr: true,
  },
);


const WhyChooseSection = dynamic(
  () => import("../../../components/WhyChooseSection"),
  { ssr: true },
);


const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});

import AboutComponent from "../../../components/Abouts/AboutComponent";

const BlogSection = dynamic(() => import("../../../components/BlogSection"), {
  ssr: true,
});




































import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../../components/Newcomponet/comman/Milestones";
import Link from "next/link";


const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
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
    title: "Tableau Next",
    description:
      "We help businesses leverage Tableau Next's advanced AI features to gain contextual, real-time insights. Powered by agentic AI through AgentForce, Tableau Next introduces a suite of pre-built analytical skills designed to accelerate the journey from data to action. With Data Pro, organisations can seamlessly unify, clean, and visualise complex datasets. Concierge enables natural language queries and suggests next-best actions, while Inspector continuously monitors data to detect anomalies and surface timely, relevant insights.",
  },
  {
    title: "Tableau Cloud",
    description:
      "We leverage Tableau Cloud, a fully hosted, enterprise-grade analytics platform, to deliver fast, secure, and self-service data exploration, without the need for server setup. It enables teams to access, analyse, and share insights anytime, from anywhere. With features like Tableau Pulse for real-time data alerts and Tableau Agent for conversational AI, insights become part of everyday decision-making. Seamless integration with tools like Slack and Salesforce ensures your teams stay informed and responsive, accelerating business outcomes.",
  },
  {
    title: "Tableau Server",
    description:
      "We implement Tableau Server to give organisations complete control over their analytics environment. Whether deployed on-premises or in a private cloud, it ensures data security, user access, and governance stay within your control. Tableau Server supports enterprise-wide collaboration through seamless integration with tools like Slack and Microsoft Teams, enabling secure, scalable, and intelligent decision-making across the enterprise.",
  },
  {
    title: "Tableau Desktop",
    description:
      "We utilise Tableau Desktop to design high-performance dashboards, create custom visual experiences, and equip teams with data-driven insights tailored to their specific goals. From multi-fact relationships and custom themes to powerful viz extensions, Tableau Desktop supports advanced yet intuitive data exploration. Enhanced accessibility features ensure broader usability, enabling teams across departments to create impactful, insight-driven dashboards that support faster, better decision-making.",
  },
];

const Process = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive consultation to understand your organisation's goals, reporting challenges, and data landscape. This discovery phase ensures that our Tableau solution is aligned with your strategic goals and addresses the most pressing data and reporting challenges from the outset.",
  },
  {
    title: "Data Assessment",
    description:
      "Our Tableau experts conduct a thorough review of your existing data infrastructure, including data sources, formats, structures, and quality. Using advanced <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/data/analytics-service-provider' >data analytics</a> techniques, we identify integration opportunities, detect inconsistencies or gaps, and assess data readiness to ensure a smooth Tableau integration.",
  },
  {
    title: "Solution Design",
    description:
      "Based on the data evaluation, we design a tailored Tableau solution that fits your business needs. This includes developing data models, defining KPIs, designing dashboard layouts, and planning for scalability, security, and performance optimisation to ensure a robust and user-centric solution.",
  },
  {
    title: "Development and Implementation",
    description:
      "We build and configure dashboards, set up data connections, and ensure that the solution integrates seamlessly with your existing systems, ensuring all components function as intended in your live environment.",
  },
  {
    title: "Testing and Validation",
    description:
      "Before deployment, we perform end-to-end testing to ensure accuracy, responsiveness, and stability. This includes validating data consistency, dashboard functionality, user experience, and system performance under various use cases and data loads.",
  },
  {
    title: "Training and User Adoption",
    description:
      "To maximise the value of your Tableau investment, we provide hands-on training for end-users, analysts, and decision-makers. Our goal is to build confidence in using Tableau and encourage adoption of self-service analytics across teams.",
  },
  {
    title: "Ongoing Support and Optimisation",
    description:
      "Once deployed, we continue to monitor and support your Tableau solution. This includes regular maintenance, troubleshooting, performance enhancements, ensuring long-term success, and scalability.",
  },
];

const portfolioData = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/tableau-consulting-services/p1.webp",
    title: "Healthcare Operational Intelligence Platform",
    description:
      "We supported a multi-location hospital network in optimizing its operations by building Tableau dashboards to monitor patient wait times, staff utilization, and department performance. With real-time access to these KPIs, hospital administrators improved scheduling, reduced operational bottlenecks, and increased service efficiency by over 30%.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/tableau-consulting-services/p2.webp",
    title: "Financial Forecasting and Budget Control",
    description:
      "A growing financial services firm approached us to enhance their forecasting and budget tracking processes. We created a suite of Tableau dashboards that provided clear visibility into cash flows, expense categories, and profitability metrics. As a result, the client reported a 45% increase in budgeting accuracy and gained greater confidence in strategic financial decision-making.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/tableau-consulting-services/p3.webp",
    title: "E-Commerce Order Analytics",
    description:
      "An online retail brand partnered with us to visualize order trends, customer purchase behavior, and delivery KPIs. The solution enabled faster decisions and improved fulfillment rates by 28%.",
    link: "/contact-us",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/tableau-consulting-services/p4.webp",
    title: "Grocery Store Inventory & Sales Dashboard",
    description:
      "We worked with a grocery chain to build a dashboard tracking real-time inventory levels, expiry risks, and product sales by location, reducing waste and improving stock availability by 30%.",
    link: "/contact-us",
  },
];

export default function Mobile(props: any) {
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
        <title>Best Tableau Consulting Service Provider | Data Visualization & BI Solutions</title>
        <meta
          name="description"
          content="Comfygen is a leading Tableau consulting service provider, offering expert data visualization, business intelligence, and analytics solutions. Transform your data into actionable insights with our professional Tableau consulting services"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/tableau-consulting-services"
        />

        <meta
          property="og:title"
          content="Tableau Consulting Services | Comfygen Data Experts"
        />
        <meta
          property="og:description"
          content="Comfygen’s Tableau consulting services cover dashboards, data integration, real-time reporting, and server performance tuning for smarter business decisions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/tableau-consulting-services"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/tableau-consulting-services/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/tableau-consulting-services/og.webp"
        />
        <meta property="og:image:type" content="image/webp" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tableau Consulting Services | Comfygen Data Experts"
        />
        <meta
          name="twitter:description"
          content="Hire Tableau consultants to build dashboards, automate reporting, and optimize performance. Tailored solutions for your data challenges."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/tableau-consulting-services/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta
          name="keywords"
          content="Tableau Dashboard Development, Tableau Consulting Services, Data Visualization, Business Intelligence Services, Predictive Analytics, Data Strategy & Architecture, Big Data Solutions, AI & Machine Learning Consulting, Data Engineering"
        />
        <meta name="author" content="Comfygen Technologies" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>

      <div className="pt-16">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
 {/* <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} /> */}
        <section className="py-8">
          <Portfolio
            projects={portfolioData}
            heading="Portfolio of Our Tableau Consulting Projects"
            description="At Comfygen Technologies, we specialize in crafting Tableau dashboards that deliver real-time visibility, actionable insights, and measurable impact. Our Tableau services portfolio showcases our experience across multiple industries, helping businesses harness the power of data visualization for smarter decision-making."
          />
        </section>
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col  mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Our Capabilities As Leading Tableau Consulting Service Provider
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  At Comfygen, we empower businesses to unlock the full value of their data through tailored Tableau solutions. Our certified Tableau consultants work across the entire suite - Tableau Next, Cloud, Server, and Desktop - helping you build a more intelligent, faster, and more connected data environment.
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


        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Approach to Tableau Consulting Services
              </h2>
              <p className="text-base font-normal mt-2">
                As a trusted Tableau Consulting Service Provider, we follow a structured yet flexible approach to deliver <Link href='https://www.comfygen.com/blog/tableau-dashboards-improve-business-decisions/' className="text-blue-600 font-semibold">Tableau solutions</Link> aligned with real business goals. From data assessment and dashboard design to deployment and performance optimisation, every step is focused on building scalable, high-performing Tableau dashboards that deliver consistent business value.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <IndustriesServe
          heading="Industries We Serve"
          description="Comfygen's tableau consulting services are designed to bring clarity, efficiency, and insight to data-heavy industries. We recognize the unique challenges of your industry and develop customized tableau solutions that redefine the way your business analyzes and leverages data."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientStories />

        <HireDeveloper
          heading="Unlock the Power of Data with Comfygen's Tableau Consulting Services"
          text="Looking to transform raw data into clear, actionable insights? Hire our dedicated Tableau consultants to build dynamic dashboards, streamline analytics, and enable faster decision-making. From healthcare to retail, finance to manufacturing, we deliver custom tableau solutions tailored to your industry, goals, and data environment. Partner with Comfygen to simplify complexity, enhance performance, and make smarter decisions."
          buttonText="Contact us"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
        {/* <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        /> */}
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions"
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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
