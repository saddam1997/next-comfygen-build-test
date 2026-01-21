import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import Script from "next/script";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";


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

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
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




const Process = [
  {
    title: "In-Depth Discovery & Business Analysi",
    description:
      "We start with a thorough discovery phase, where we work closely with you to understand your business challenges, goals, and requirements. This allows us to identify potential AI opportunities and define the project’s objectives.",
  },
  {
    title: "Strategic AI Planning & Roadmap",
    description:
      "Using insights from the discovery phase, we develop a strategic AI plan. This includes defining the project scope, setting clear milestones, and establishing timelines to ensure efficient resource allocation and successful delivery.",
  },
  {
    title: "UX/UI Design & Prototype Development",
    description:
      "Our design team creates detailed wireframes and interactive prototypes to visualize how the AI solution will function. With iterative feedback, we refine the design to meet your expectations and align it with your business identity.",
  },
  {
    title: "Agile Development & Solution Implementation",
    description:
      "We adopt agile methodologies to build the AI solution, focusing on scalability, performance, and custom functionality. The development process is highly collaborative, ensuring that the solution meets your specific business needs.",
  },
  {
    title: "Comprehensive Testing & Quality Assurance",
    description:
      "Our quality assurance team conducts extensive testing at each stage of development to ensure reliability and security. We address any bugs or issues before launch to guarantee that the final product meets the highest standards.",
  },
  {
    title: "Smooth Deployment & Seamless Integration",
    description:
      "Once testing is complete, we deploy the AI solution in your production environment. Our team ensures a smooth integration with your existing systems, minimizing disruption and optimizing performance for your business processes.",
  },
  {
    title: "Ongoing Maintenance & Continuous Improvement",
    description:
      "After deployment, we provide continuous support and monitoring, ensuring the AI solution stays optimized, evolves with your business needs, and adapts to emerging technologies for long-term success.",
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
        <link
          rel="canonical"
          href="https://www.comfygen.com/generative-ai-development"
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556d1" />
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
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
        <title>
          Generative AI Development Company | Custom AI Solutions India

        </title>
        <meta
          name="description"
          content="Comfygen is a leading Generative AI development company in India, delivering custom AI models, automation tools, AI-powered applications, and scalable enterprise AI solutions to drive innovation and growth."
        />
        <meta
          name="keywords"
          content="Generative AI Consulting Services, Generative AI Software Development Company, Generative AI Software Development Services, Generative AI Model Development, Generative AI Engineer "
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:title"
          content="Generative AI Development Company in India | Custom GenAI Services"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/generative-ai-development"
        />
        <meta name="og:image" content="url" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Looking for expert Generative AI development services? Build AI-driven applications for content creation, automation, chatbots, and more with cutting-edge GenAI solutions."
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top-notch Custom Generative AI Mobile App Development Company"
        />
        <meta
          name="twitter:description"
          content="A leading generative AI company that specializes in creating end-to-end generative AI software solutions and applications. Get customized GenAI development services from experts"
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta
          property="og:image:alt"
          content="custom generative ai development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/generative-ai-development"
        />
        <meta
          property="og:title"
          content="Best Generative AI software development company in India | Service Provider"
        />
        <meta
          property="og:description"
          content="Looking for the best Generative AI software development company in India? We offer cutting-edge AI development solutions, including custom GenAI models, automation, and AI-powered applications for enterprise businesses."
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
        <HeroSectionForAllPages
          heading="Generative AI Development Company"
          ptag="Comfygen is a leading Generative AI development company, delivering custom AI software development solutions that drive innovation. We specialize in building Gen AI models, automation tools, and AI-powered applications tailored to your business needs."
          ptag1="From AI-driven content creation to predictive analytics and process automation, we provide scalable, future-ready generative AI development solutions that enhance efficiency, boost creativity, and fuel growth. Partner with us to unlock the full potential of AI in your enterprise."
          li='Custom Generative AI Model Development'
          li1='AI-Powered Automation & Applications'
          li2='AI-Driven Content Creation & Predictive Analytics'
          li3='Scalable, Enterprise-Ready AI Solutions'
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/image/ai-development-hero-section-image.webp"
        />

        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >We Offer the Best Generative AI Software Development Services
              </h2>
              <p className="text-base text-center font-normal">We leverage data-driven Generative AI solutions to help startups innovate and scale faster. Our custom AI models and intelligent automation transform raw data into actionable insights, delivering secure, scalable, and future-ready Generative AI software solutions.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title=""
          heading="Best Generative AI Software Development Company in India"
          description1="Comfygen is a top-notch <a class='text-blue-600' href='/ai-development'>Custom enterprise AI ML mobile app development company</a>  in India that transforms businesses with cutting-edge AI enterprise software development. Our team of gen AI software experts, data scientists, and software developers specializes in building custom AI-powered mobile applications, machine learning models, and automation solutions tailored to various industries' unique needs."
          description2="With years of experience in artificial intelligence research and development, we leverage advanced AI models such as GPT-4, DALL·E, Stable Diffusion, and BERT to create intelligent automation systems, AI chatbots, AI-generated content solutions, and deep learning applications."
          imageSrc="https://www.comfygen.com/image/best-ai-development-company.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}




        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  We Specialize in a Variety of AI Models – Tailored Gen AI
                  Development Solutions for Every Business Need
                </h2>
                <p>
                  At Comfygen, we pride ourselves on our expertise in developing
                  and deploying a wide range of AI models that cater to specific
                  business requirements. Our team utilizes state-of-the-art
                  algorithms and machine learning techniques to create powerful,
                  custom models that deliver real value and enhance your
                  business operations. We specialize in the following AI models
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <TechStack
          title="Tech Stack Used in Our Generative AI App Development"
          description="Our generative AI apps are built using a reliable technology stack that includes OpenAI GPT models, Hugging Face Transformers, spaCy, and NLTK. This setup helps us create AI solutions that understand and generate language accurately while scaling smoothly for real business use."
          customTechData={JSON_DATA.customTechData}
        />


        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Generative AI Development process
              </h2>
              <p className="text-base font-normal mt-2">
                Comfygen follows a well-defined and proven process to ensure the success of every Generative AI development project. Our comprehensive approach is built around a set of 
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Generative AI Development Project Success Stories"
            description="At Comfygen, we deliver powerful Generative AI solutions that drive measurable business results. Our GenAI expertise helps organizations automate workflows, improve decision-making, and build scalable, intelligent systems that accelerate innovation and operational efficiency."
          />
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <IndustriesServe
          heading=""
          description=""
         
        />
        <HireDeveloper
          heading="Hire Generative AI Developers to Build Intelligent & Scalable AI Solutions"
          text="Looking to integrate cutting-edge Generative AI into your business? Hire expert Generative AI developers from Comfygen to build custom AI models, automation tools, and intelligent applications tailored to your business needs. Our skilled developers specialize in AI-driven content generation, NLP, deep learning, and machine learning to deliver high-performance AI solutions."
          listItems={[
            "Experienced AI Specialists – Skilled in developing advanced AI models and applications.",
            "Custom AI Solutions – Tailored AI development to fit your unique business requirements.",
            "Scalable & Secure AI Development – AI-powered systems designed for performance and security.",
            "Seamless Integration – Smooth AI integration into your existing workflows.",
            "End-to-End Development & Support – From ideation to deployment and ongoing maintenance.",
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
          title=" About Blockchain Technology"
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
