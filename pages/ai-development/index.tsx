import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/Aidevelopment.json";
import LazyLoad from "react-lazy-load";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";
import HeroSection from "../../components/HeroSection";



const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);


const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
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
        <title>
          AI & ML Mobile App Development Services in India | Comfygen
        </title>
        <meta
          property="og:title"
          content="Custom Enterprise AI ML Mobile App Development Company In India | Get Best Services"
        />
        <meta
          name="description"
          content="Comfygen offers AI & ML mobile app development services in India to build intelligent, scalable apps with predictive analytics, smart automation, and personalized experiences."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence Development Services, AI Software Development Company, AI Software Development Services, AI Product Development, AI Chatbot Development, AI Engineer "
        />
        <meta
          name="og:description"
          content="Looking for AI-based Enterprise to SME mobile app development company to boost your business. Comfygen custom AI ML development services in Jaipur, India help you to achieve your goal."
        />
        <link rel="canonical" href="https://www.comfygen.com/ai-development" />



        <meta name="og:url" content="https://www.comfygen.com/ai-development" />
        <meta
          name="og:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Our AI software development experts create custom AI solutions for startups, ensuring fast, affordable, and efficient project completion. Build your AI system today!"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258/" />
        <meta
          property="og:image:type"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Development Company | Artificial Intelligence Development Services"
        />
        <meta
          name="twitter:description"
          content="Boost your business efficiency with Comfygen, a leading AI development company offering custom artificial intelligence solutions tailored to your needs."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:image:alt"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ai-development"
        />
        <meta
          property="og:title"
          content="Custom AI Development Company | AI Solutions for Startups"
        />
        <meta
          property="og:description"
          content="Our AI Based App development experts create custom AI Development Service for startups, ensuring fast, affordable, and efficient project completion. Build your AI system today!"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />




      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="">
        <HeroSection
          heading="AI & ML Mobile App Development Services in India"
          ptag="Next-Gen AI Solutions for Next-Level Success."
          ptag1="Comfygen offers custom AI and ML mobile app development services in Jaipur, India. Our expert developers build intelligent mobile apps, machine learning models, and AI-powered software to help businesses innovate, automate processes, and drive growth. Turn your vision into reality with our AI/ML solutions—request a free consultation today."
          li='Custom AI & ML Mobile App Development'
          li1='Intelligent Software & Automation Solutions'
          li2='Machine Learning Model Development'
          li3='AI-Powered Business Process Optimization'
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/ai-solutions-for-smarter-businesses.webp"
        />
        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">We Offer The Best AI App Mobile App Development Services For Startups
              </h2>
              <p className="text-base text-center font-normal">Data is used to drive business results through custom AI and machine learning Mobile App Development solutions. As one of the leading custom AI mobile app development solution companies, we transform raw data into actionable insights, facilitating operational efficiency and enhanced decision-making. We offer reliable AI enterprise software development services that can make your vision a reality.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title=""
          heading="Hire Best Custom AI ML App & web Development Company In India for Startups to Enterprise"
          description1="Comfygen is a leading AI ML-based mobile app development company in India dedicated to helping businesses harness the power of artificial intelligence. We deliver custom AI ML app & software development solutions tailored to your unique needs, leveraging advanced technologies like machine learning, natural language processing (NLP), and computer vision. Whether you're looking to automate processes, enhance customer experiences, or gain data-driven insights, our best-experience AI software developers in India are here to design and deploy innovative AI-powered mobile app solutions and services that drive growth and efficiency—partner with us to transform your business with cutting-edge custom AI ML software development services."
          imageSrc="https://www.comfygen.com/image/best-ai-development-company.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Artificial Intelligence Success Stories"
            description="At Comfygen, we take pride in delivering AI solutions that drive measurable results for our clients. Here are some examples of how we’ve helped businesses achieve their goals"
          />
        </section>

        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our AI Mobile App Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                At Comfygen, we follow a structured, transparent, and collaborative approach to deliver AI development solutions that align perfectly with your business objectives. Our proven development process ensures efficiency, seamless communication, and high-quality outcomes at every stage.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA?.Process} />
          </div>
        </section>

        <IndustriesServe
          heading="Get your industry to the next level with our custom AI Development services"
          description="Our Artificial Intelligence (AI) engineers specialize in integrating the highest quality AI services into your business offerings, processes, and growth strategies."

        />

        <TechStack
          title="Tech Stack Use to Develop Best AI Mobile App Development Services"
          description="At Comfygen, we use cutting-edge tools and technologies to build scalable, secure, and innovative AI-powered mobile apps for enterprises and SMEs. Our AI and ML expertise across modern platforms and cloud services ensures high-performance solutions tailored to your business goals."
          customTechData={JSON_DATA.customTechData}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />


        <ClientStories />


        <HireDeveloper
          heading="Hire Our Dedicated AI Mobile Application Developers"
          text="Hire expert AI software developers from Comfygen with deep expertise in Machine Learning, Deep Learning, Neural Networks, and Computer Vision. Our AI engineers build secure, scalable, and data-driven solutions tailored to your business needs—helping you improve efficiency, drive innovation, and accelerate growth."
          text1=""
          listItems={[
            "80+ AI products successfully delivered across industries",
            "Recognized as a Top AI Development Company in Toronto by DesignRush",
            "Dedicated AI Solution Architect and Project Consultant",
            "Strict NDA and data security compliance",
            "Expert-driven solutions aligned with your business goals",
          ]}
          buttonText="Hire Developer"
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
          title=""
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
