import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./billing.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import Link from "next/link";
import TechStackSection from "../../components/TechStackSection";
const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse w-full"></div>
);

// About Section
const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

// Who Can Start
const WhoCanStart = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhoCanStart"),
  { loading: loader, ssr: true }
);

// Services Section
const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

// Consultancy Approach
const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

// Portfolio
const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

// Features Section
const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

// Process Section
const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

// Tech Stack
const TeckStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

// Why Choose Us
const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

// Delivery Section
const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { loading: loader, ssr: true }
);

// Hire Developer
const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

// Client Testimonials
const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

// Faq Section
const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





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
        <title>Billing Software Development Company | Comfygen Technologies</title>
        <meta
          name="description"
          content="Comfygen is a leading billing software development company delivering custom, cloud-based, GST-compliant billing solutions for scalable business growth."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/billing-software-development "
        />
        <meta name="keywords" content="best billing software development company, billing software development company, billing software development services, custom billing software development, billing software developers, billing software development solutions, online billing software development, cloud billing software development, GST billing software development, billing software company, billing software services, billing software development firm, custom billing software solutions"/>


          {/* <!-- Twitter Card Tags -->  */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Billing Software Development Company | Comfygen Technologies" />
          <meta name="twitter:description" content=" Custom billing software development solutions with GST compliance, automation, and secure payment integrations." />
          <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/billing-software-development/Billing Software Development Company.webp" />
          <meta name="twitter:site" content="@Comfygen_Tech" />

          {/* <!-- Facebook Meta --> */}

          <meta property="og:image" content="https://www.comfygen.com/comfygen-images/billing-software-development/Billing Software Development Company.webp" />
          <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/billing-software-development/Billing Software Development Company.webp" />
          <meta property="og:image:alt" content="Billing Software Development" />
          <meta property="og:url" content="https://www.comfygen.com/billing-software-development" />
          <meta property="og:title" content="Billing Software Development Company | Comfygen Technologies" />
          <meta property="og:description" content="Build scalable, secure, and custom billing software with Comfygen Technologies to automate invoicing, payments, and financial operations." />

          {/* Structured Data Scripts */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
          />
      </Head>


     {/* <Header /> */}

      <div className="overflow-hidden ">
        <div className="">
          <HeroSectionForAllPages
            heading="Billing Software Development Company"
            subhead='Custom, Cloud & GST-Compliant Billing Software Solutions for Modern Businesses'
            ptag="Comfygen Technologies is a trusted billing software development company delivering secure, scalable, and customizable billing solutions for startups, SMEs, and enterprises. We specialize in custom billing software development to automate invoicing, tax calculations, payments, and financial reporting. Our cloud-based, GST-compliant billing software improves accuracy, ensures compliance, accelerates cash flow, and streamlines end-to-end financial operations across industries."
            
            li="Automated Invoicing process"
            li1="GST Tax Compliance solutions"
            li2="Custom Billing Software Development"
            li3="Secure Payment Gateway Integration"
            
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/billing-software-development/billing-software-development-company.webp"
          />
        </div>

        <Milestones />
        <AboutSection
          title="About Company"
          heading="Why Your Business Needs Custom Billing Software Development"
          description1="In today’s fast-paced digital economy, manual billing processes can slow down operations, increase errors, and limit business scalability. That’s why businesses across industries are adopting custom billing software development to automate invoicing, payments, and tax compliance."
          description2="As a leading billing software development company, Comfygen Technologies builds intelligent, cloud-based billing software that simplifies recurring billing, usage-based payments, and real-time financial tracking. Our billing software development services help organizations gain complete visibility into revenue, accelerate payment cycles, and ensure compliance with GST and other regulatory standards—driving operational efficiency and customer trust."
          imageSrc="https://www.comfygen.com/comfygen-images/billing-software-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Automated invoice generation & accurate GST tax calculation",
            "Real-time payment tracking and revenue analytics",
            "Faster billing cycles with improved cash flow management",
            "Secure cloud-based billing software with compliance support",
            "Professional, branded, and consistent invoicing workflows",
          ]}
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
               Our Billing Software Development Services
              </h2>
              <p className="text-base text-center font-normal">
              We deliver end-to-end billing software development services to help businesses automate invoicing, simplify payments, and optimize financial workflows. As a trusted <Link href='https://www.comfygen.com/blog/billing-software-development-companies-in-india' className="text-blue-600 font-semibold">billing software development company</Link>, Comfygen Technologies builds secure, scalable, and business-specific billing solutions tailored to diverse industry needs.
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
               Our Billing Software Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
               At Comfygen Technologies, we follow a structured and transparent billing software development process to deliver secure, scalable, and high-performance billing solutions. As an experienced billing software development company, we ensure accuracy, compliance, and seamless automation from planning to post-launch support.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Billing Software Portfolio"
            description="Explore Our Billing Software Portfolio showcases scalable, secure, and feature-rich billing solutions designed to automate invoicing, payments, and financial management across industries."
          />
        </section>

        <SolutionSec
          heading="Benefits of Custom Billing Software Systems"
          subheading="Custom billing software is designed to align perfectly with your business operations, offering flexibility, automation, and scalability. Our custom billing software development services help businesses improve accuracy, ensure compliance, and achieve long-term operational efficiency."
          techData={JSON_DATA.technologyData}
        />

        <TechStack
          title="Tech Stack We Use in Billing Software Development"
          description="We use a modern and reliable tech stack for billing software development, including robust frontend frameworks, secure backend technologies, scalable cloud platforms, and powerful databases. Our technology choices ensure high performance, data security, seamless integrations, tax compliance, and future-ready billing software solutions for businesses of all sizes."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

         <TechStackSection deliveryApps={JSON_DATA.deliveryApps}/>
{/* 
        <DeliverySection
          title="Custom Billing Software Development for Multiple Business Industries"
          description="Comfygen Technologies designs robust, user-friendly billing software tailored for diverse industries. From startups and growing businesses to large enterprises, our custom billing software development solutions are built to align perfectly with your operational requirements and business goals."
          apps={JSON_DATA.appsadata}
          hideUrl="https://www.comfygen.com/billing-software-development"
        /> */}

        <ClientStories />

        <HireDeveloper
          heading="Hire Billing Software Developers for Your Business"
          text="Hire skilled billing software <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>developers</a> from Comfygen Technologies to build secure, scalable, and custom billing solutions aligned with your business requirements. Our experts specialize in automated invoicing, subscription billing, payment gateway integration, and GST-compliant systems. Whether you need a dedicated developer or a full development team, we ensure seamless integration, high performance, and on-time delivery—helping you streamline financial operations, improve billing accuracy, and confidently scale your business."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Flexible Hiring Models",
            "High Performance & Timely Delivery",
            "Advanced Billing & Automation Expertise",
            "Hire Experienced Billing Software Developers",
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
