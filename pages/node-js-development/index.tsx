import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nodejs.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../components/Newcomponet/comman/Milestones";


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import Faq from "../Newcomponet/SectionCompoent/Faq";


const Process = [
  {
    title: "Requirement Gathering and Analysis",
    description: "Our development process begins with a thorough understanding of your business objectives. We analyze your requirements to design a custom Node.js solution that meets your specific needs and supports long-term growth."
  },
  {
    title: "Detailed Project Planning",
    description: "We create a roadmap that outlines project goals, timelines, and milestones. This plan ensures transparency and keeps the project on track, so you can anticipate key deliverables and their expected outcomes throughout the development process."
  },
  {
    title: "Design and Prototyping",
    description: "Our team develops an intuitive user interface (UI) and experience (UX) design. Through prototyping, we ensure that your application’s look and feel align with your business goals, offering seamless interaction and enhanced usability."
  },
  {
    title: "Development and Coding",
    description: "Once the design is approved, our developers begin building the solution using the latest Node.js technologies. We ensure clean, maintainable code, following best practices to ensure scalability, performance, and future-proof capabilities."
  },
  {
    title: "Testing and Quality Assurance",
    description: "Before launch, comprehensive testing is conducted to identify and fix any bugs. Our QA team performs functional, performance, security, and usability testing to ensure the application meets your requirements and offers a flawless user experience."
  },
  {
    title: "Deployment and Integration",
    description: "After testing, we deploy the application to your production environment. We integrate the solution with existing systems, ensuring smooth operation across platforms and optimizing for real-time performance and security."
  },
  {
    title: "Post-Launch Support and Maintenance",
    description: "Once deployed, we offer continuous support and maintenance to address any issues or required updates. Regular monitoring ensures that your application remains efficient, secure, and optimized to meet evolving business needs."
  },

];

export default function Altcoin(props: any) {
  let { initialData } = props;


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
        <title>
          Node.js Development Company in Jaipur, India | Experts

        </title>
        <meta
          name="description"
          content="Comfygen is a Node.js development company in Jaipur, India delivering scalable, high-performance web and app solutions for businesses."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/node-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="en-us" />
        <meta
          property="og:title"
          content="Best Node JS Development Company in Jaipur, India"
        />
        <meta
          property="og:description"
          content="Our company is the #1 NodeJS development company in Jaipur, India. Our NodeJS development services help you build secure, scalable, user-friendly, and faster web applications."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/node-js-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/node-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">

        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/node-js-development-company-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="Node.js Development Company in Jaipur, India"
                ptag="Comfygen is a trusted Node.js development company in Jaipur, India, delivering fast, scalable, and reliable web and application solutions. Our experienced Node.js developers build real-time, performance-driven applications tailored to your business needs. Using modern Node.js frameworks and best practices, we create custom web and app solutions that enhance efficiency, support scalability, and drive measurable business growth."
                li="Skilled Node.js Development Specialists"
                li1="Secure, Scalable & High-Performance Solutions"
                li2="Custom Web & Application Development"
                li3=" Business-Focused & Strategic Execution"
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Affordable Node.js Development Services</h2>
              <p className="text-base text-center font-normal">Our best Node.js development services in Jaipur, India are designed to meet diverse business objectives by merging technology expertise with a deep understanding of industry needs. Whether building custom applications or scaling existing ones, Comfygen ensures seamless and efficient solutions using Node.js.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="Node.Js development Company"
          heading="Top Node.js Development Company in Jaipur, India"
          description1="Comfygen is a top Node.js development company in Jaipur, India, offering custom mobile app and web development solutions. Our skilled Node.js developers specialize in building high-performance, scalable applications, from server-side solutions to powerful APIs. Whether you need to create a new app or migrate your existing backend to Node.js, Comfygen provides efficient and feature-rich solutions tailored to your needs. Trust us to deliver robust, scalable applications that drive business growth and enhance user experience."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Node.js Development Process</h2>
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
        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <HireDeveloper
          heading="Hire Node.Js Application Developers"
          text="Get the best Node.js developers to help your business grow. They will organize, scale, and change your web apps using the best Node.js development services. You can trust our skills to build a strong, safe, and working Node.js online and mobile app"
          text1="What skills are required of Node.js developers?"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Understanding design thinking.",
            "It is necessary to be proficient in JavaScript",
            "Node.js expertise.",
            "The ability to program functionally, asynchronously, and parallelly is required.",
            "Mobile and web delivery platforms must be thoroughly understood.",
            "Expertise in front-end technologies.",
            "Debugging existing bugs and integrating modules are essential skills."
          ]}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" Node.JS Development Solutions"
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
