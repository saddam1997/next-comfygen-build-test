import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ecommerce.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import ClientTestimonials from "../components/ClientTestimonials";
import ServicesSection from "../componentsnew/ServicesSection";
import CallToAction from "../components/CallToAction";
import ProcessSection from "../componentsnew/ProcessSection";
import PortfolioSlider from "../components/PortfolioSlider";
import TeckStack from "./components/TeckStack";

const HeroSectionForAllPages = dynamic(
  () => import("../components/HeroSectionForAllPages"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Faq = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Discovery & Requirement Analysis",
    description:
      "We begin by understanding your business objectives, data challenges, and technical needs. This helps us define clear goals, use cases, and a strategic data roadmap tailored to your success.",
  },
  {
    title: "Data Collection & Preprocessing",
    description:
      "Our experts gather data from various sources (databases, CRMs, APIs, etc.) and clean, validate, and organize it for analytics. We ensure data quality, accuracy, and readiness for deeper processing.",
  },
  {
    title: "Architecture & Pipeline Design",
    description:
      "We design scalable and secure data pipelines using cloud platforms (AWS, Azure, GCP) and tools like SQL, Spark, and Kafka. Our focus is on high availability, real-time processing, and smooth integration.",
  },
  {
    title: "Data Modeling & Analytics",
    description:
      "Using <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/python-development' >Python</a>, R, Power BI, or <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/data/tableau-consulting-services' >Tableau</a>, we build custom reports, dashboards, and predictive models to uncover actionable insights that support decision-making and business growth.",
  },
  {
    title: "AI/ML Model Integration (If Required)",
    description:
      "We develop and train machine learning models to automate processes, detect patterns, or forecast trends. Models are tested, optimized, and seamlessly integrated into your systems or apps.",
  },
  {
    title: "Deployment & Visualization",
    description:
      "We deploy the final data solution on your infrastructure or cloud with full visualization dashboards. Our goal is to make insights accessible to your teams in real time.",
  },
  {
    title: "Support & Optimization",
    description:
      "Post-deployment, we provide continuous support, performance monitoring, and ongoing optimization to ensure your data systems stay efficient, secure, and aligned with changing business needs.",
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
      "@type": "PostalAddress",
      streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      addressLocality: "Jaipur, Rajasthan",
      addressRegion: "India",
      postalCode: "302006",
      telephone: "+91-958-786-7258",
    },
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "40 Tuxedo Ct, Toronto, ON",
      addressLocality: "Toronto",
      addressRegion: "Canada",
      postalCode: "M1G3S7",
      telephone: "+1 579-977-4475",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Trusted Data Services Provider",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Looking for a reliable data services provider? Comfygen Technologies delivers custom data engineering, AI, and analytics solutions that drive results across industries.",
      "url": "https://www.comfygen.com/data",
      "mainEntityOfPage": "https://www.comfygen.com/data",
      "areaServed": "Global",
      "serviceType": [
        "Data Science Services",
        "Data Engineering Services",
        "AI & Machine Learning Solutions",
        "Big Data Development Services",
        "Power BI",
        "Data visualization",
        "Predication Engine",
        "AI & Machine Learning Solutions",
        "MS Excell",
        "predictive models"
    
      ],
     
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
        
      ]
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
        // "areaServed": "US, IN",
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

    {"@context":"http://www.schema.org",
      "@type":"Product",
      "brand":"Comfygen Technologies",
      "Name":"Top Data Services Provider | AI, BI & Big Data Solutions",
      "image":"https://www.comfygen.com/comfygen-images/data/data-about.webp",
      "description":"Comfygen Technologies is a leading data services provider offering analytics, AI, BI dashboards, and big data solutions to help businesses make smarter, faster decisions.",
      "aggregateRating":{"@type":"AggregateRating",
      "ratingValue":"4.9",
      "reviewCount":"115"}
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          "name": "What types of businesses can benefit from data services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Almost every business today can benefit from data services—whether you're in healthcare, retail, fintech, logistics, or education. Data services help companies make smarter decisions, automate processes, understand customer behavior, and optimize operations using insights from structured and unstructured data."
          }
        },
        {
          "@type": "Question",
          "name": "How secure is my data with Comfygen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Comfygen, we follow enterprise-grade data security protocols including end-to-end encryption, role-based access, and compliance with standards like GDPR and ISO. Your data is fully protected, monitored, and governed to prevent unauthorized access or breaches during every stage of development and deployment."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom data analytics dashboards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We build fully customized data dashboards using Power BI, Tableau, and other BI tools. These dashboards are tailored to your KPIs, industry, and user roles—making it easy to monitor real-time data, track performance, and make fast, data-driven decisions from any device."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate AI or machine learning into our existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our AI and ML experts can build and integrate predictive models, recommendation systems, or automation tools into your existing infrastructure. Whether you're using cloud platforms or legacy systems, we ensure seamless deployment and real-time model performance for business optimization."
          }
        }
      ],      
    },
  ];

  return (
    <>
      <Head>
        <title>Top Data Services Company | AI, BI & Data Solutions</title>
        <meta
          name="description"
          content="Comfygen Technologies is best data services company that offers custom data analytics, AI/ML, BI dashboards, and big data solutions for startups and enterprises. Hire expert data engineers to turn your raw data into actionable insights."
        />
        <meta
          name="keywords"
          content="Data Analytics Services, Big Data Solutions, AI ML Services, Business Intelligence Solutions, Data Science Company, Custom Data Engineering"
        />
        <link rel="canonical" href="https://www.comfygen.com/data" />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
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
        <meta name="apple-mobile-web-app-title" content="Comfygen" />

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
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/data/data-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/data/data-og.webp"
        />
        <meta property="og:image:alt" content="Data Services" />
        <meta property="og:url" content="https://www.comfygen.com/data" />
        <meta
          property="og:title"
          content="Data Services Company for AI, Analytics & Big Data"
        />
        <meta
          property="og:description"
          content="Transform your raw data into real-time business insights with Comfygen’s end-to-end data services and engineering solutions."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top-Notch Data Services Company" />
        <meta
          name="twitter:description"
          content="Comfygen Technologies is a top-rated data services company delivering end-to-end data analytics, AI, and big data solutions. Turn raw data into insights with our expert-driven, secure, and scalable data services."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/data/data-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>

      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/comfygen-images/data/data-hero.webp')]">
          <HeroSectionForAllPages
            heading="Comprehensive Data Services Tailored to Your Business Needs"
            ptag="Unlock the true value of your business data with Comfygen Technologies. We are a trusted data services company offering end-to-end solutions in data analytics, engineering, visualization, AI/ML, and big data. Whether you’re a startup, enterprise, or government body, we deliver future-ready data solutions tailored to your unique needs"
            li="Custom Data Analytics & Engineering Solutions"
            li1="Expertise in AI & Machine Learning Integration"
            li2="Secure, Scalable, and Cloud-Based Data Infrastructure"
            li3="Real-Time Dashboards & Business Intelligence Reporting"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>

        <AboutSection
          title=""
          heading="Delivering Smart Data Solutions That Power Business Transformation"
          description1="Partner with a leading data services company trusted by global startups and enterprises to deliver modern, scalable, and secure data solutions. At Comfygen Technologies, we specialize in providing end-to-end data services—including data analytics, engineering, visualization, AI/ML, and big data—to help businesses extract maximum value from their information assets"
          description2="Our cross-functional team of data scientists, engineers, AI experts, and business analysts collaborates closely with clients across industries such as healthcare, fintech, retail, logistics, and <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/e-learning-app-development' >e-learning</a> to design and implement future-ready data infrastructures. From building real-time dashboards to predictive models, we ensure seamless integration and smart decision-making for your business."
          description3="Whether you're looking to modernize legacy systems or build a new data strategy from the ground up, Comfygen provides custom, cloud-powered data solutions tailored to your goals."
          description4=""
          description5=""
          imageSrc="https://www.comfygen.com/comfygen-images/data/data-about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <ServicesSection
          heading="Our Complete Suite of Data Services Provides"
          subtitle="We offer a full spectrum of data services tailored to help businesses turn raw data into measurable business outcomes. From data analytics and engineering to AI/ML and big data solutions, we build future-ready systems for growth, innovation, and operational intelligence."
          servicesData={JSON_DATA.servicesData}
        />

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Smarter Decisions Across Industries with Our Data Expertise
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  We deliver tailored data services across various industries to
                  help organizations improve efficiency, boost profitability,
                  and make smarter decisions with real-time insights.
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

        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Our Portfolio of Data-Driven Success"
          description="We’ve empowered businesses across industries with custom data solutions that deliver measurable results. Here are a few real-world examples of how our data services transformed client operations, improved decisions, and fueled growth."
        />

        <CallToAction
          heading="Let’s Make Your Data Work Smarter"
          text="Ready to Transform Your Business with Data Intelligence?"
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/data/data-call.webp"
          imageAlt="Get in touch now."
        />

        <ContactFromCenter />

        <ProcessSection
          title="Our Data Services Process"
          description="We follow a structured, transparent, and result-driven approach to deliver intelligent data solutions. From planning to deployment, every step is designed to align with your business goals and provide measurable outcomes."
          processSlides={Process}
        />

        <TeckStack
          title="Tech Stack We Use in Data Services Development"
          description="We leverage modern, secure, and scalable technologies to deliver data solutions tailored to your business needs. Our tech stack drives speed, performance, and reliability across all platforms, whether it is big data infrastructure, AI model development, or interactive dashboards."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Dedicated Data Experts for Your Business"
          text="Looking to turn your raw data into actionable insights? Hire dedicated data experts from Comfygen to develop scalable, secure, and intelligent data solutions tailored to your business goals. From architecture to deployment, our team handles it all with precision."
          text1="Our data analysts, engineers, and AI developers specialize in building real-time dashboards, prediction engines, ETL pipelines, and custom data apps. Whether you're in healthcare, fintech, logistics, or eCommerce—we bring your data vision to life."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experts in Data Analytics, BI, AI & ML Solutions",
            "Custom Development for Any Industry or Data Type",
            "Transparent Process, Dedicated Team, Ongoing Support",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={Frequently} title="Frequently Asked Questions" />

        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
