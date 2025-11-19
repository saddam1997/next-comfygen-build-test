import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import {
  IconAdjustments,
  IconDatabase,
  IconPresentationAnalytics,
  IconShare,
} from "@tabler/icons-react";
import ServicesSec from "../../componentsnew/ServicesSec";
import WhyChoose from "../../componentsnew/WhyChooseUs";
import LatestTechnology from "./components/LatestTechnology";
import Faq from "../../components/Faq";
import AboutSection from "../../componentsnew/AboutSection";
import Header from "../../componentsnew/Header";
import ContactFromCenter from "../../componentsnew/ContactFromCenter";
import MobileHero from "./components/MobileHero";
import ClientTestimonials from "../../components/ClientTestimonials";
import CallToAction from "../../components/CallToAction";
import Slider from "../../components/Slider";

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
          "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar  ",
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
    "@context": "http://www.schema.org",
    "@type": "Product",
    brand: "Comfygen Technologies",
    Name: "Microsoft Power BI Sales Dashboards | Real-Time Sales Insights",
    image: "Hero section image",
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
  let { } = JSON_DATA;

  let { initialData } = props;
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
      title: "Real-Time Analytics",
      decs: "Stay current with up-to-the-minute dashboards that refresh automatically as your sales information updates, providing immediate visibility into performance, pipeline health, and forecasting.",
    },
    {
      num: "02",
      title: "Intuitive, Interactive Visualizations",
      decs: "Drill down through information with easy-to-use charts, filters, and graphs—no IT skills required. Get your answers in just a few clicks.",
    },
    {
      num: "03",
      title: "Secure, Cloud-Based Access",
      decs: "Access your sales dashboards anywhere, on any device. Microsoft's security features ensure your data remains safe and compliant.",
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
        <title>Power BI Sales Dashboards | Real-Time Sales Insights</title>

        <meta
          name="description"
          content="Boost your sales performance with Microsoft Power BI Sales Dashboards. Track sales KPIs, monitor performance, uncover insights, and make faster, smarter sales decisions."
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
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>

      <div className="">
        <MobileHero
          heading="Sales Performance Dashboards"
          ptag="Microsoft Power BI Sales Dashboards authorize teams to monitor every stage of the sales funnel, from lead generation to revenue conversion. Get instant access to sales performance analytics, spot trends, track KPIs, and make data-driven decisions that accelerate growth."
          bgImage="https://www.comfygen.com/comfygen-images/sales-dashboard/hero-img.webp"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
        />
        <ContactFromCenter />

        <AboutSection
          title=""
          heading="Powering Smarter Sales Decisions with Power BI Sales Dashboards"
          description1="At Comfygen, we specialize in designing and delivering customized Power BI Sales Dashboards that help businesses transform raw sales data into actionable insights. Our goal is simple: to enable sales teams, managers, and decision-makers to visualize performance, identify trends, and make data-driven decisions with confidence."
          description2="With deep expertise in Microsoft Power BI, our team crafts interactive dashboards that align with your unique sales processes, KPIs, and goals. From lead tracking to revenue forecasting, our Power BI Sales Dashboard solutions provide real-time visibility into every aspect of your sales pipeline."
          imageSrc="https://www.comfygen.com/comfygen-images/sales-dashboard/about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  What Are Power BI Sales Dashboards and Why Your Business Needs
                  Them
                </h2>
                <p className="pt-4">
                  Microsoft Power BI is a powerful business intelligence and
                  data visualization solution that is used by organizations to
                  make better, faster decisions. When optimized for sales teams,
                  Microsoft Power BI Sales Dashboards deliver one centralized,
                  dynamic image of all of your sales performance, from lead
                  generation to revenue conversion.
                </p>
                <p className="pt-4">
                  Streamlined to break down intricate data, Power BI enables
                  sales managers, executives, and teams to discover trends,
                  track KPIs, and monitor progress in real time.
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

        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="What Makes a Power BI Sales Dashboard Powerful?"
          description="Microsoft Power BI Sales Dashboards are designed to go beyond basic reporting, giving you deep, actionable insights through visually compelling, real-time analytics. From high-level summaries to granular drill-downs, every element is crafted to help sales teams make faster, smarter decisions."
          description1="Key Features of Power BI Sales Dashboards:"
        />



        <section className="py-8">
          <Slider
            projects={JSON_DATA.portfoliodata}
            heading="Explore our Portfolio of Power BI Services "
            description=""
          />
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <CallToAction
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <LatestTechnology
          heading="Get Started with Your Power BI Sales Dashboard in 4 Simple Steps"
          subheading="Implementing a powerful, real-time Power BI Sales Dashboard with Comfygen is simple, efficient, and fully tailored to your business needs. Here's a closer look at the journey from raw data to actionable insights:"
          techData={latesttech}
        />

        <ClientTestimonials
          heading="What Our Clients Say About Comfygen's Power BI Solutions"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions"
        />
      </div>
    </>
  );
}
