import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./accounting.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";
import Milestones from "../../components/Newcomponet/comman/Milestones";


const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse w-full"></div>
);

// About Section
const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
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


// Process Section
const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
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
  { loading: loader, ssr: true }
)






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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
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
            <ProcessSec processSlides={JSON_DATA.Process} />
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
          techData={JSON_DATA.technologyData}
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
          apps={JSON_DATA.appsadata}
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