import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./accounting.json";
import Header from "../Newcomponet/layout/Header"
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages"
import ClientStories from "../Newcomponet/SectionCompoent/ClientStories";
import Milestones from "../Newcomponet/comman/Milestones";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse w-full"></div>
);

// About Section
const AboutSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

// Who Can Start
const WhoCanStart = dynamic(
  () => import("../Newcomponet/SectionCompoent/WhoCanStart"),
  { loading: loader, ssr: true }
);

// Services Section
const ServicesSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

// Consultancy Approach
const ConsultancyApproach = dynamic(
  () => import("../Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

// Portfolio
const Portfolio = dynamic(
  () => import("../Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

// Features Section
const Features = dynamic(
  () => import("../Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

// Process Section
const ProcessSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

// Tech Stack
const TeckStack = dynamic(
  () => import("../Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

// Why Choose Us
const WhyChoose = dynamic(
  () => import("../Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

// Delivery Section
const DeliverySection = dynamic(
  () => import("../Newcomponet/comman/DeliverySection"),
  { loading: loader, ssr: true }
);

// Hire Developer
const HireDeveloper = dynamic(
  () => import("../Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

// Client Testimonials
const ClientTestimonials = dynamic(
  () => import("../Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

// Faq Section
const Faq = dynamic(
  () => import("../Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(() => import("../Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const technologyData = [
  {
    img: null,
    title: "Increased Efficiency",
    desc: "Custom accounting software development automates repetitive financial tasks such as invoicing, reconciliation, payroll processing, and tax calculations, significantly reducing manual effort and enabling finance teams to focus on strategic business activities.",
  },
  {
    img: null,
    title: "Reduced Errors",
    desc: "By minimizing manual data entry and automating calculations, custom accounting systems improve accuracy in financial records, helping businesses avoid costly mistakes and maintain reliable financial data.",
  },
  {
    img: null,
    title: "Tailored Financial Reporting",
    desc: "Custom accounting software generates role-based, business-specific reports that deliver actionable financial insights, supporting informed decision-making beyond the limitations of generic accounting tools.",
  },
  {
    img: null,
    title: "Seamless System Integration",
    desc: "Custom accounting solutions integrate effortlessly with ERP, CRM, inventory management, banking systems, and third-party APIs, creating a unified financial ecosystem and eliminating data silos.",
  },
  {
    img: null,
    title: "Enhanced Data Security",
    desc: "Advanced security measures such as encryption, role-based access control, and secure authentication protect sensitive financial information while ensuring compliance with industry regulations and data protection standards.",
  },
  {
    img: null,
    title: "Scalability for Business Growth",
    desc: "Custom accounting software is built with a scalable architecture that adapts to increasing transaction volumes, users, and evolving business requirements without compromising performance.",
  },
  {
    img: null,
    title: "Cost Efficiency Over Time",
    desc: "Although custom development requires an initial investment, it reduces long-term costs by eliminating unnecessary features, lowering dependency on manual processes, and avoiding recurring licensing fees.",
  },
  {
    img: null,
    title: "Regulatory Compliance Support",
    desc: "Built-in compliance features simplify adherence to GST, VAT, and financial regulations by automating tax calculations, filings, and audit-ready reporting.",
  },
  {
    img: null,
    title: "Improved Financial Visibility",
    desc: "Real-time dashboards and automated reports provide clear visibility into cash flow, profitability, and overall financial health, enabling proactive business management.",
  }
];


const Process = [
  {
    title: "Requirement Analysis & Planning",
    description:
      "We begin by understanding your business needs, financial workflows, compliance requirements, and desired features to create a detailed roadmap that guides the software development process.",
  },
  {
    title: "UI/UX Design & Architecture",
    description:
      "Our <a href='https://www.comfygen.com/web-design' class='text-blue-600 font-semibold'>UI/UX designer</a> team creates intuitive interfaces and a robust architecture, ensuring smooth navigation, user-friendly experience, and scalable system performance across web and mobile platforms.",
  },
  {
    title: "Custom Development",
    description:
      "We develop tailored accounting software using the latest technologies, implementing core financial features, automation workflows, and integrations with APIs, ERP, or third-party tools.",
  },
  {
    title: "Quality Testing & Security Checks",
    description:
      "Comprehensive testing ensures the software is secure, bug-free, compliant, and performs efficiently under all scenarios, safeguarding sensitive financial data.",
  },
  {
    title: "Deployment & Integration",
    description:
      "The software is deployed on your preferred platform—cloud or on-premise—and integrated with existing systems, ERP, or third-party tools for seamless financial operations.",
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Post-deployment, we provide continuous monitoring, updates, maintenance, and optimization to ensure smooth performance, security, and scalability as your business grows.",
  },
  {
    title: "Training & Knowledge Transfer",
    description:
      "We provide comprehensive training sessions and detailed documentation to ensure your team can effectively use, manage, and maintain the accounting software, empowering them to maximize productivity and leverage all features efficiently.",
  },
];


const appsadata = [

  {
    title: "Healthcare Accounting Software",
    description: "We develop <a href='https://www.comfygen.com/blog/healthcare-accounting-software/' class='text-blue-600 font-semibold'>healthcare accounting software</a> organizations to manage billing, insurance claims payroll, and regulatory compliance with accuracy and data security.",
    link: "",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Healthcare-Accounting-Software.webp",
    gradient: "from-violet-500 to-purple-500"
  },

  {
    title: "Retail & E-Commerce Accounting Software",
    description: "Our accounting solutions for retail and e-commerce businesses streamline inventory accounting invoicing, tax calculations, and real-time sales reporting.",
    link: "",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Retail-&-E-Commerce-Accounting-Software.webp",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Manufacturing Accounting Software",
    description: "We build accounting systems that handle cost accounting, production expenses, supplier payments, and multi-location financial management for manufacturing enterprises.",
    link: "",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Manufacturing-Accounting-Software.webp",
    gradient: "from-green-500 to-teal-500",
    key: "food-delivery-app-development"
  },
  {
    title: "Logistics & Supply Chain Accounting Software",
    description: "Our custom accounting software supports freight billing, expense tracking, vendor payments, and financial reporting for logistics and supply chain operations.",
    link: "",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Logistics-&-Supply-Chain-Accounting-Software.webp",
    gradient: "from-blue-500 to-cyan-500",
    key: "grocery-app-development"
  },
  {
    title: "Real Estate Accounting Software",
    description: "We deliver accounting solutions for real estate businesses to manage property accounting, rent collection, expense tracking, and financial reporting efficiently.",
    link: "https://www.comfygen.com/medicine-delivery-app-development",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Real-Estate-Accounting-Software.webp",
    gradient: "from-sky-500 to-blue-500"
  },
  {
    title: "Education Accounting Software",
    description: "Our accounting software for educational institutions simplifies fee management, payroll, budgeting, and compliance reporting.",
    link: "#",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Education-Accounting-Software.webp",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Finance & Professional Services Accounting Software",
    description: "We develop secure and scalable accounting software for financial service providers to manage client accounts, compliance, invoicing, and advanced financial reporting.",
    link: "",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Finance-&-Professional-Services-Accounting-Software.webp",
    gradient: "from-pink-500 to-rose-500",
    key: "water-delivery-app-development"
  },
  {
    title: "Startups & Enterprises Accounting Software",
    description: "From early-stage startups to large enterprises, our custom accounting software adapts to evolving business models, growth requirements, and complex financial structures.",
    link: "#",
    image: "https://www.comfygen.com/comfygen-images/accounting-software-development/Startups-&-Enterprises-Accounting-Software.webp",
    gradient: "from-purple-500 to-pink-500",
    key: "milk-delivery-app-development"
  }

];




const WhoCanStartCards = [
  {
    heading: "Milk Delivery Startups",
    description:
      "Quickly enter the dairy delivery market with our white-label milk delivery app built for startups. Launch your own branded platform with subscription, tracking, and payment features to scale operations and reach customers faster.",
  },
  {
    heading: "Enterprises & Dairy Franchises",
    description:
      "Simplify operations with our custom milk delivery app solutions for enterprises and franchises. Manage multiple branches, delivery agents, customer data, and orders through one centralized admin panel with real-time analytics and smart automation tools.",
  },
  {
    heading: "FMCG Businesses",
    description:
      "Expand your <a class=' underline text-black font-semibold' href='https://www.comfygen.com/ecommerce/fmcg' >FMCG</a> offerings by adding milk delivery as a recurring service. Our milk delivery mobile app development solutions help streamline inventory, track customer orders, and boost sales through automated scheduling and doorstep delivery.",
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
      "@type": "Service",
      "name": "Accounting Software Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen is a leading accounting software development company delivering custom, cloud-based, GST-compliant accounting solutions for scalable business growth.",
      "url": "https://www.comfygen.com/accounting-software-development",
      "mainEntityOfPage": "https://www.comfygen.com/accounting-software-development",
      "areaServed": "Global",
      "serviceType": [
        "Accounting Software Development",
        "Accounting Software Development Company",
        "Accounting Software Development Services",
        "Custom Accounting Software Development",
        "Accounting Software Developers",
        "Accounting Software Development Solutions",
        "Online Accounting software development",
        "Cloud-Based Accounting Software Development",
        "Accounting Software Development Company in India"

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
      "Name": "Accounting Software Development Company",
      "image": " https://www.comfygen.com/comfygen-images/accounting-software-development/about.webp",
      "description": "Comfygen is a leading accounting software development company delivering custom, cloud-based, GST-compliant accounting solutions for scalable business growth.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "620"
      }
    }
    ,
   
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
        "name": "Accounting Software Development",
        "item": "https://www.comfygen.com/accounting-software-development"

      }]
    }
    ,

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is custom accounting software development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom accounting software development involves creating tailored financial management solutions that meet your business-specific workflows, regulatory requirements, and scalability needs. Unlike off-the-shelf tools, custom software adapts precisely to your operations."
          }
        },
        {
          "@type": "Question",
          "name": "Why should my business invest in custom accounting software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom accounting software automates core financial tasks, reduces manual errors, ensures GST/VAT compliance, provides real-time reporting, and scales with your business growth, leading to improved efficiency and smarter decision-making."
          }
        },
        {
          "@type": "Question",
          "name": "Which industries can benefit from custom accounting software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Industries such as healthcare, retail & e-commerce, manufacturing, logistics & supply chain, real estate, education, financial services, and startups can leverage custom accounting software to streamline financial operations and reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Can your accounting software handle GST and tax compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we develop GST-compliant systems that automate tax calculations, invoicing, filings, and reporting, ensuring adherence to local regulations and minimizing compliance risks."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide cloud-based accounting solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our cloud-based accounting software allows real-time access, automated updates, secure data storage, and seamless collaboration, enabling businesses to manage finances efficiently from anywhere."
          }
        }
      ]
    }
    ,
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Accounting Software Development Company | Comfygen Technologies</title>
        <meta
          name="description"
          content="Comfygen is a leading accounting software development company delivering custom, cloud-based, GST-compliant accounting solutions for scalable business growth."
        />
        <link rel="canonical" href="https://www.comfygen.com/accounting-software-development" />


       <meta name="keywords" content="Accounting Software Development, Accounting Software Development Company, Accounting Software Development Services, Custom Accounting Software Development, Accounting Software Developers, Accounting Software Development Solutions, Online Accounting Software Development, Cloud-Based Accounting Software Development, Accounting Software Development Company in India, Accounting Software Development India, Best Accounting Software Development Company, Accounting Software Development Agency" />



        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accounting Software Development Company | Comfygen Technologies" />
        <meta name="twitter:description" content=" Transform your business finance with Comfygen’s accounting software—cloud-based, GST-compliant, and tailored for seamless operations and sustainable growth." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/accounting-software-development/Custom-AccountingSoftware-Development-Company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/accounting-software-development/Custom-AccountingSoftware-Development-Company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/accounting-software-development/Custom-AccountingSoftware-Development-Company.webp" />
        <meta property="og:image:alt" content="Accounting Software Development" />
        <meta property="og:url" content="https://www.comfygen.com/accounting-software-development" />
        <meta property="og:title" content="Accounting Software Development Company | Comfygen Technologies" />
        <meta property="og:description" content="Comfygen is a leading accounting software development company delivering custom, cloud-based, GST-compliant accounting solutions for scalable business growth." />


        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>


      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Custom Accounting Software Development Company in India"
            ptag="Comfygen Technologies is a trusted accounting software development company in India delivering secure, scalable, and custom accounting solutions for startups, SMEs, and enterprises. Our expert financial software developers create cloud-based accounting software that automates financial operations, enhances accuracy, ensures GST compliance, and simplifies real-time reporting. Using modern technologies and industry best practices, we build accounting systems tailored to your unique business requirements."
            li="Custom Accounting Solutions"
            li1="Cloud-Based & Secure"
            li2="GST-Compliant Systems"
            li3="Automated Financial Management"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/accounting-software-development/Custom-Accounting-Software-Development-Company.webp"
          />
        </div>

        <Milestones />
        <AboutSection
          title="About Company"
          heading="Why Your Business Needs Accounting Software?"
          description1="Managing business finances manually takes time and often leads to errors. Today, most businesses are moving to accounting software to automate daily tasks like billing, expense tracking, and financial reporting. Studies show that businesses using accounting software save up to 40–50% time on accounting work compared to manual methods."
          description2="The demand for accounting software is growing fast because companies want better control over their finances. More than 70% of small and medium businesses now use digital accounting systems to improve accuracy and make faster financial decisions. Real-time reports help business owners clearly understand profits, losses, and cash flow."
          description3="With custom accounting software development, your business can reduce errors, stay tax-compliant, and manage finances from anywhere. It helps you work smarter, scale faster, and focus more on growth instead of manual calculations."
          imageSrc="https://www.comfygen.com/comfygen-images/accounting-software-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[]}
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide The Best Accounting Software Development Services For Businesses
              </h2>
              <p className="text-base text-center font-normal">
                Our enterprise accounting management software development services deliver custom web, mobile, and cloud-based solutions that automate invoicing, payroll, taxation, and reporting. We ensure GST/VAT compliance, secure API integrations, AI-driven insights, continuous maintenance, and seamless system scalability for efficient financial management.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Accounting Software Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                Our accounting software development process follows a structured, agile methodology to deliver secure, scalable, and efficient financial solutions. From planning and design to deployment and maintenance, we ensure high-quality custom software that meets your business requirements and supports seamless financial operations.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Accounting Management Software Development Portfolio"
            description="Explore our accounting software portfolio showcasing secure, scalable, and feature-rich financial solutions designed to automate invoicing, payroll, reporting, and compliance across industries."
          />
        </section>

        <SolutionSec
          heading="Benefits of Custom Accounting Software Systems"
          subheading="A custom accounting software development company in India enhances business efficiency by automating core financial tasks, minimizing manual errors, and saving valuable time. It delivers tailored financial reporting, seamless integration with existing systems, advanced data security, regulatory compliance, and scalable architecture that adapts to business growth while providing deeper, real-time financial insights."
          techData={technologyData}
        />

        <TechStack
          title="Tech Stack We Use in Accounting Software Development"
          description="We leverage a secure, scalable tech stack with modern frontend and backend frameworks, cloud platforms, and databases to deliver high-performance, compliant, and future-ready accounting solutions for businesses."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <DeliverySection
          title="Custom Accounting Software Development for Multiple Business Industries"
          description="At Comfygen Technologies, our custom accounting software development company in India & <a href='https://www.comfygen.com/billing-software-development' class='text-blue-600 font-semibold'>billing software Development</a> company in India solutions are designed to meet the unique financial workflows, compliance requirements, and operational challenges of multiple industries. By tailoring accounting systems to industry-specific needs, we help businesses improve accuracy, automate processes, gain real-time financial insights, and ensure long-term scalability and regulatory compliance."
          apps={appsadata}
          hideUrl="billing-software-development"
        />

        <ClientStories />

        <HireDeveloper
          heading="Hire Accounting Software Developers For Your Business."
          text="At Comfygen Technologies, we offer expert accounting software <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>developers</a> who can build, customize, and maintain secure and efficient financial management systems. Our financial software development team specializes in accounting software development for web, mobile, and cloud platforms, ensuring solutions tailored to your startup business workflows, scalability needs, and regulatory compliance. Focus on growth while we handle your accounting software development company with precision and expertise."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Custom Accounting Software Development",
            "Web, Mobile & Cloud Applications",
            "Automation & Accuracy Enhancement",
            "Regulatory Compliance Support",
            "Seamless Integration with Existing Systems",
            "Dedicated & Flexible Hiring Models"
          ]}
        />

        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={Frequently} title="" />



        {/* who cane start */}
        {/* <WhoCanStart
          title="Who Can Start a Milk Delivery App Business?"
          description="Comfygen’s milk delivery app development solutions are ideal for a wide range of businesses. Whether you're just starting out or already established, our scalable and customizable apps help you grow fast in the digital dairy market."
          cards={WhoCanStartCards}
        /> */}


        {/* <ContactFromCenter /> */}




        {/* <Features
          heading="Key Features of Our Milk Delivery App"
          description=" At Comfygen, we integrate Using Comfygen Technologies, a top-rated dairy milk delivery app development company, you will get robust milk delivery apps for customers, delivery agents, and admins. The panels are thoughtfully designed to ensure a smooth ordering, delivery, and management process."
          featuresData={JSON_DATA.featuresData}
          grid="3"
        />



        <TeckStack
          title="Tech Stack We Use to Build Scalable Milk Delivery Apps"
          description="The Comfygen team leverages the most cutting-edge and reliable technologies for building scalable, secure, and high-performing milk delivery applications. With our tech stack, you can create white-label milk delivery apps, custom solutions, or milk ordering apps for startups."
        />

 */}




        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}
