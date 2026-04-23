import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import {
  IconAdjustments,
  IconDatabase,
  IconPresentationAnalytics,
  IconShare,
} from "@tabler/icons-react";
import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"


import dynamic from "next/dynamic";
import Milestones from "../../../components/Newcomponet/comman/Milestones";
import ClientStories from "../../../components/Newcomponet/SectionCompoent/ClientStories";
import ReviewCard from "../../../components/ReviewCard";

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

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const LatestTechnology = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/LatestTechnology"),
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

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);


const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { ssr: true }
);

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { ssr: true }
);

const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



const jsonLdData = [

  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sales Dashboards",
    provider: {
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
    },
    description:
      "Track and visualize real-time sales data with Microsoft Power BI Dashboards developed by Comfygen Technologies. Get actionable insights and boost business performance.",
    url: "https://www.comfygen.com/data/sales-dashboard",
    mainEntityOfPage: "https://www.comfygen.com/data/sales-dashboard",
    areaServed: "Global",
    serviceType: [
      "Power BI Sales Dashboard Development",
      "Data Visualization",
      "Sales Analytics Solutions",
      "Custom Power BI Reports",
      "Predictive Sales Modeling",
    ],

    sameAs: [
      "https://www.facebook.com/comfygen.technologies",
      "https://x.com/Comfygen_Tech",
      "https://www.instagram.com/comfygen_technologies",
      "https://www.linkedin.com/company/comfygen-technologies",
    ],
  },
 

  {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I connect my sales data to Power BI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To connect your sales data with Power BI:\n\n1. **Open Power BI Desktop** – Launch the app on your computer.\n2. **Click ‘Get Data’** – Choose your source (Excel, SQL, Salesforce, SharePoint, etc.).\n3. **Authenticate** – Enter login or API credentials if needed.\n4. **Select Tables** – Pick the sales data you want (e.g., orders, revenue, products).\n5. **Load or Transform** – Click Load to import directly or Transform to clean it first.\n6. **Build Reports** – Use drag-and-drop to create sales dashboards and visuals.",
        },
      },
      {
        "@type": "Question",
        name: "What sales KPIs can I track with Power BI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The major KPIs you can track from the sales dashboard include revenue, conversion rates, win/loss ratios, pipeline value, quota attainment, deal cycle duration, rep performance, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How do you create a sales dashboard in Power BI? Where can you download it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To create a sales dashboard in Power BI, open Power BI Desktop, click Get Data, and connect to your sales source (Excel, SQL, CRM, etc.). Load your data, then drag key metrics—like revenue, region, and product sales—onto the canvas using charts and slicers. Customize visuals, add filters, and arrange your layout.\n\nOnce done, click Publish to upload it to Power BI Service for sharing, viewing online, and setting up automatic refresh.",
        },
      },
      {
        "@type": "Question",
        name: "How can I customize visualizations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can customize charts, tables, slicers, filters, colors, and layout. Comfygen also provides guided customization based on your KPIs and business needs.",
        },
      },
    ],
  },
];

export default function Mobile(props: any) {
  let { initialData } = props;
  let { } = JSON_DATA;


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const LeadingSoftware = [
    {
      num: "01",
      title: "Sales KPI Tracking",
      decs: "Monitor revenue, leads, conversion rates, and pipeline health in real time. Identify trends, spot gaps, and uncover growth opportunities to ensure your sales strategy stays on target.",
    },
    {
      num: "02",
      title: "Interactive Visualizations",
      decs: "Explore complex sales data through dynamic charts, maps, and tables. Easily compare performance across regions, products, or teams, and make insights immediately actionable.",
    },
    {
      num: "03",
      title: "Drill-Through Analysis",
      decs: "Go beyond surface-level data to understand the underlying causes of sales spikes, drops, or underperformance. This helps teams make informed decisions and quickly address challenges.",
    },
    {
      num: "04",
      title: "Trend Analysis & Forecasting",
      decs: "Leverage historical sales data and predictive analytics to anticipate future trends. Forecast revenue, evaluate “what-if” scenarios, and plan proactively to stay ahead of market changes.",
    },
    {
      num: "05",
      title: "Team & Individual Performance Monitoring",
      decs: "Track each sales rep’s achievements against targets, recognize top performers, and identify areas where coaching or support is needed to boost productivity.",
    },
    {
      num: "06",
      title: "Dynamic Filtering & Sorting",
      decs: "Focus on the metrics that matter most at any moment. Instantly filter, sort, or segment data by product, region, time period, or salesperson for tailored insights.",
    },
    {
      num: "07",
      title: "Mobile-Friendly Dashboards",
      decs: "Access critical sales insights anywhere, on any device. Empower your team to stay informed, collaborate, and act quickly—even on the go.",
    },


  ];

  const Process = [
    {
      title: "Requirement Discovery & Goal Alignment",
      description:
        "We begin by understanding your sales objectives, KPIs, data sources, and reporting needs to define a clear Power BI dashboard strategy.",
    },
    {
      title: "Demo or Template Selection",
      description:
        "Explore our ready-to-use Power BI sales dashboard templates or request a live demo to see how Power BI fits into your existing sales workflow.",
    },
    {
      title: "Data Source Integration",
      description:
        "We securely connect your sales data from Excel, SQL databases, cloud platforms, and CRMs like Salesforce, HubSpot, and Microsoft Dynamics.",
    },
    {
      title: "Data Cleaning & Transformation",
      description:
        "Raw sales data is cleaned, validated, and transformed to ensure accuracy, consistency, and reliable analytics within Power BI.",
    },
    {
      title: "KPI-Based Dashboard Customization",
      description:
        "We design Sales Performance Dashboards with Microsoft Power BI tailored to your KPIs—lead conversion, revenue trends, pipeline velocity, and quota attainment.",
    },
    {
      title: "Testing, Validation & Optimization",
      description:
        "Dashboards are tested for performance, accuracy, and usability, ensuring fast load times and dependable real-time insights.",
    },
    {
      title: "Deployment, Sharing & Ongoing Support",
      description:
        "Once live, dashboards are securely shared across teams with role-based access. We provide training, optimization, and ongoing support to maximize value.",
    },
  ];


  const latesttech = [
    {
      img: <IconPresentationAnalytics stroke={1.5} className="w-12 h-12" />,
      title: "Request a Demo or Download a Template",
      desc: "Start by exploring our pre-built dashboard templates designed for different industries and sales models. Or, book a live demo with our Power BI experts to walk you through real use cases based on your business objectives.<br>🔹 No technical expertise needed to get started<br>🔹 See how Power BI fits into your existing workflow<br>🔹 Choose from ready-to-use layouts or request a custom build",
    },
    {
      img: <IconDatabase stroke={1.5} className="w-12 h-12" />,
      title: "Connect Your Sales Data Sources",
      desc: "We help you integrate your sales data from multiple platforms—Excel spreadsheets, SQL databases, cloud storage, or CRM systems like Salesforce, HubSpot, Microsoft Dynamics, and more.<br>🔹 Secure, cloud-based data connectors<br>🔹 Support for both real-time and scheduled refreshes<br>🔹 Clean and transform your raw data for analysis",
    },
    {
      img: <IconAdjustments stroke={1.5} className="w-12 h-12" />,
      title: "Customize to Your KPIs",
      desc: "No two businesses measure success the same way. That’s why we tailor your Power BI dashboards to reflect your specific KPIs and workflows.<br>🔹 Customize visuals, filters, and dashboard layout<br>🔹 Track metrics like lead conversion, revenue trends, rep performance, and quota attainment<br>🔹 Add forecasting, goal tracking, and alerts to stay ahead of targets",
    },
    {
      img: <IconShare stroke={1.5} className="w-12 h-12" />,
      title: "Share & Collaborate Across Teams",
      desc: "Once your dashboards are live, you can share them instantly with your team on any device, at any time. Whether in the boardroom or on the move, everyone gets access to the same insights.<br>🔹 Role-based access and data-level security<br>🔹 Desktop, mobile, and embedded sharing options<br>🔹 Collaborate directly within dashboards using comments and annotations",
    },
  ];

  return (
    <>
      <Head>
        <title>Sales Performance Dashboards Using Microsoft Power BI solution | Comfygen</title>

        <meta
          name="description"
          content="Comfygen offers interactive sales performance dashboards using Microsoft Power BI to help sales teams track leads, monitor KPIs, and optimize the sales funnel."
        />
        <meta
          name="keywords"
          content="Power BI Sales Dashboard Development, Data Visualization, Sales Analytics Solutions, Custom Power BI Reports, Predictive Sales Modeling"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/sales-dashboard"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

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
        <meta name="apple-mobile-web-app-title" content="Sales Dashboard" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/sales-dashboard/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/sales-dashboard/og.webp"
        />
        <meta property="og:image:alt" content="Power BI Sales Dashboard" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/sales-dashboard"
        />
        <meta
          property="og:title"
          content="Power BI Sales Dashboards | Real-Time Sales Insights"
        />
        <meta
          property="og:description"
          content="Visualize, track, and optimize your sales performance with interactive dashboards built in Microsoft Power BI. Turn your sales data into actionable insights with Comfygen."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Power BI Sales Dashboards | Real-Time Sales Insights"
        />
        <meta
          name="twitter:description"
          content="Track revenue, monitor sales KPIs, and gain real-time insights with Microsoft Power BI Sales Dashboards. Transform your sales data into actionable strategies."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/sales-dashboard/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>

      <div className="">
       {/* <Header /> */}
      </div>

      <div className="overflow-hidden lg:pt-[120px]">
        <HeroSectionForAllPages
          heading="Sales Performance Dashboards Using Microsoft Power BI"
          ptag="Sales Performance Dashboards Using Microsoft Power BI sales teams to track and optimize every stage of the sales funnel—from lead generation to revenue conversion. These interactive dashboards provide real-time visibility into sales performance, key KPIs, and emerging trends, empowering businesses to make data-driven decisions, improve forecasting accuracy, and accelerate sustainable revenue growth."
          li='Real-Time Sales Analytics'
          li1='KPI Tracking & Trend Analysis'
          li2='Funnel Performance Monitoring'
          li3='Data-Driven Sales Decisions'
          bgImage="https://www.comfygen.com/comfygen-images/sales-dashboard/hero-img.webp"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
        />

        <Milestones />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Sales Performance Dashboards with Microsoft Power BI Service
              </h2>
              <p className="text-base text-center font-normal">At Comfygen, we help businesses unlock the full potential of their sales data through expertly designed Microsoft Power BI dashboards. Our services are tailored to meet your unique sales processes, ensuring every insight drives real business results.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        {/* <ContactFromCenter /> */}
        <AboutSection
          title=""
          heading="Why Microsoft Power BI for Sales Performance?"
          description1="Microsoft Power BI empowers your team to move beyond static reports and spreadsheets, providing dynamic, interactive dashboards that turn raw data into actionable intelligence."
          description2=""
          points={[
            "<b>Real-Time Data Visualization</b>: Track your sales KPIs as they happen. Monitor revenue, leads, conversion rates, and pipeline health in real time to make faster, data-driven decisions.",
            "<b>Customizable Dashboards for Every Role</b>: From sales executives to team managers, Power BI allows you to create dashboards tailored to each role, ensuring that every user sees the metrics that matter most.",
            "<b>Seamless Integration with Your Tools</b>: Connect Power BI effortlessly with your CRM, ERP, Excel files, and other data sources. Consolidate your sales information in one place for a complete view of performance.",
            "<b>Predictive Analytics for Forecasting</b>: Go beyond historical reporting. Power BI leverages predictive analytics to anticipate sales trends, identify opportunities, and highlight potential risks, giving your team a competitive edge.",
            "<b>Power BI vs Other Tools</b>: Unlike traditional reporting tools, Power BI combines speed, flexibility, and advanced analytics in one platform. Interactive visualizations, mobile accessibility, and AI-powered insights make it a superior choice for sales-driven organizations"
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/sales-dashboard/about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Key Features of Sales Performance Dashboards

                </h2>
                <p className="pt-4">
                  Microsoft Power BI sales dashboards transform complex data into clear, actionable insights that help your team make smarter, faster decisions. They provide comprehensive tracking of sales KPIs, including revenue, leads, conversion rates, and pipeline health, allowing you to monitor performance over time and identify trends or gaps quickly.

                </p>

              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div
                      key={num} // Always add a unique key when mapping
                      className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]"
                    >
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>





        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Portfolio of Power BI & Big Data Solutions"
            description="Our portfolio showcases innovative Power BI dashboards, big data platforms, and analytics solutions that help businesses optimize operations, improve decision-making, and drive growth."
          />
        </section>

        <IndustriesServe
          heading="Industries We Serve As Best Sales Performance Dashboards Creator"
          description="Comfygen provides Sales Performance Dashboards Creator Service across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success."

        />

        <TechStack
          customTechData={null}
          title="Our Technology Stack to Build Sales Performance Dashboards"
          description="At Comfygen, we leverage advanced tools and technologies to build insightful, scalable, and interactive sales performance dashboards. Our expertise spans across Microsoft Power BI, data integration, and cloud services, ensuring actionable analytics for businesses of all sizes. Here’s a glimpse of the technologies we use:"
        />

        <CallToAction
          heading="Let’s Transform Your Sales Data into Actionable Insights"
          text="At Comfygen, we turn your sales data into actionable Power BI dashboards. Track performance, forecast trends, and make smarter decisions to drive growth."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Get Started with Your Power BI Sales Dashboard
              </h2>
              <p className="text-base font-normal mt-2">
                Creating a real-time Power BI Sales Dashboard with Comfygen is straightforward and fully aligned with your business goals. Here’s our proven process—from data setup to actionable insights:


              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Sales Performance Dashboards Expert"
          text="Your sales data with a Sales Performance Dashboards Expert. Our professionals specialize in designing, developing, and optimizing interactive dashboards that provide actionable insights, helping your sales team drive revenue and make informed decisions"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Hire dedicated mobile app developers",
            "Hire Dedicated Website Developers",
            "Flexible engagement models",
            "Agile development and transparent communication",
            "Scalable teams for short-term or long-term projects"
          ]}
        />
        {/* 
        <LatestTechnology
          heading="Get Started with Your Power BI Sales Dashboard in 4 Simple Steps"
          subheading="Implementing a powerful, real-time Power BI Sales Dashboard with Comfygen is simple, efficient, and fully tailored to your business needs. Here's a closer look at the journey from raw data to actionable insights:"
          techData={latesttech}
        /> */}

        <ClientStories/>
  <ReviewCard testimonials={JSON_DATA.ReviewData}/>
        {/* <ClientTestimonials
          heading="What Our Clients Say About Comfygen's Power BI Solutions"
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





