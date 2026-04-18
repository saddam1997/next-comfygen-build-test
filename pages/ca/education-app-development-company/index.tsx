import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import {
  IconBook,

  IconDevices,

  IconVideo,
  IconWorldWww,
} from "@tabler/icons-react";

import JSON_DATA from "./json/applicationConsulting.json";
import { IconTools } from "@tabler/icons-react";

import { MdControlPointDuplicate } from "react-icons/md";

import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

import dynamic from "next/dynamic";
import Milestones from "../../../components/Newcomponet/comman/Milestones";

const loader = () => <div className="h-96 bg-gray-100 animate-pulse" />;

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () =>
    import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);


const Process = [
  {
    title: "Requirement Analysis & Planning",
    description:
      "We understand your business goals, target users, and app requirements to create a clear roadmap for successful best education <a href='https://www.comfygen.com/mobile-app-development ' class='font-semibold underline text-blue-600'>mobile app development</a>.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our designers create intuitive and engaging <a href='https://www.comfygen.com/web-design  ' class='font-semibold underline text-blue-600'>UI/UX designs</a> that improve usability, accessibility, and learner engagement across all education app platforms.",
  },
  {
    title: "App Architecture & Technology Selection",
    description:
      "We choose the right technologies and architecture to ensure your education app is scalable, secure, and future-ready.",
  },
  {
    title: "Education App Development",
    description:
      "Our education app developers build high-performance education mobile apps with advanced features like live classes, AI learning, and analytics.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We perform rigorous testing to ensure your education app is bug-free, secure, and delivers smooth performance on all devices.",
  },
  {
    title: "Deployment & Launch",
    description:
      "After successful testing, we deploy your education app on Android, iOS, or web platforms with full technical support.",
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance, updates, and performance monitoring to keep your custom education app development solutions optimized and up-to-date.",
  },
];

const technologyData = [
  {
    img: <IconBook stroke={1.5} className="w-12 h-12" />,
    title: "Personalized Learning Engine",
    desc: "We design AI-based learning engines that analyze learner behavior, pace, and performance to create personalized learning paths, adaptive study plans, and customized course journeys for better academic outcomes.",
  },
  {
    img: <IconDevices stroke={1.5} className="w-12 h-12" />,
    title: "AI-Based Content Recommendation",
    desc: "Our AI education app development solutions intelligently recommend courses, videos, quizzes, and study materials based on user interests, progress history, and engagement patterns, ensuring relevant and focused learning.",
  },
  {
    img: <IconWorldWww stroke={1.5} className="w-12 h-12" />,
    title: "Smart Assessments & Automated Evaluation",
    desc: "We integrate AI-driven assessments that automate quizzes, exams, grading, and feedback. These smart systems provide real-time performance insights, reduce manual effort, and enhance evaluation accuracy.",
  },
  {
    img: <IconVideo stroke={1.5} className="w-12 h-12" />,
    title: "AI Chatbots & Virtual Tutors",
    desc: "Our AI chatbots and virtual tutors offer 24/7 learning support, instant doubt resolution, course guidance, and interactive assistance—improving student engagement and reducing educator workload.",
  },
  {
    img: <IconTools stroke={1.5} className="w-12 h-12" />,
    title: "Predictive Analytics & Learning Insights",
    desc: "Using predictive analytics in AI-powered education apps, we track learner progress, identify skill gaps, forecast performance, and generate actionable insights that help educators make data-driven decisions.",
  }
];

export default function Mobile(props) {
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an educational app and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An educational app is a digital platform designed to deliver learning content through videos, quizzes, assessments, and interactive modules. These apps support E-Learning App Development, mobile learning, and skill-based education for students, educators, and businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What types of educational apps can be developed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Educational apps include Learning Management Systems (LMS), language learning apps, kids’ educational apps, exam preparation apps, online course marketplace platforms, and advanced AI-based or AR/VR educational apps, depending on learning objectives."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to develop an educational app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of Educational Mobile App Development depends on features, platforms, UI complexity, and technology used. Basic apps cost less, while advanced AI-based educational apps, LMS platforms, or AR/VR learning solutions require higher investment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer custom e-learning and LMS app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide custom E-Learning App Development and Learning Management System (LMS) Development tailored to your business needs, including course management, assessments, analytics, user roles, and secure cloud integration."
        }
      },
      {
        "@type": "Question",
        "name": "Does Comfygen develop AI-based educational applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in AI-Based Educational App Development, integrating features like personalized learning paths, AI chatbots, smart recommendations, predictive analytics, and adaptive testing to enhance learning outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries can benefit from educational app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Educational app development benefits schools, universities, EdTech startups, coaching institutes, corporate training providers, and skill-based learning platforms by enabling scalable, interactive, and accessible digital education solutions."
        }
      }
    ]
  };

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Advanced Education App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen Technologies delivers scalable and innovative education app development services, including e-learning platforms, LMS solutions, AI-powered educational apps, and mobile learning applications for global clients.",
      "url": "https://www.comfygen.com/ca/education-app-development-company",
      "mainEntityOfPage": "https://www.comfygen.com/ca/education-app-development-company",
      "areaServed": "Global",
      "serviceType": [
        "Education App Development",
        "Educational Mobile App Development",
        "E-Learning App Development",
        "Learning Management System (LMS) Development",
        "AI-Based Educational App Development",
        "Online Course Marketplace Development",
        "Language Learning App Development",
        "Kids’ Educational App Development",
        "Exam Preparation App Development",
        "AR/VR Educational App Development",
        "Educational App Testing Services",
        "EdTech App Development Company",
        "Custom Education Software Development",
        "School Management App Development",
        "Online Learning Platform Development"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Education App Development",
          "item": "https://www.comfygen.com/ca/education-app-development-company"
        }
      ]
    },

  ]


  return (
    <>
      <Head>
        <title>
           Education App Development Company in Canada | eLearning App Services
        </title>
        <meta
          name="description"
          content="Comfygen is a leading education app development company in Canada offering custom eLearning app development services for universities and EdTech startups. Build scalable learning apps."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/education-app-development-company"
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
        <meta
          name="keywords"
          content="E-Learning App Development, Learning Management System (LMS) Development, AI-Based Educational App Development, Online Course Marketplace Development, Educational App Testing Services, Educational Mobile App Development, Language Learning App Development, Kids' Educational App Development, Exam Preparation App Development, AR/VR Educational App Development"
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="On-Demand Educational App Development Company in Canada"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a leading Educational app development company offering custom education app development services in Canada, USA, UK, and globally. Hire expert developers now!"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/media/og-images/education-app-development-og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/media/og-images/education-app-development-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/media/og-images/education-app-development-og.webp" />
        <meta property="og:image:alt" content="education app development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ca/education-app-development-company"
        />
        <meta property="og:title" content="Education App Development Company" />
        <meta
          property="og:description"
          content="Comfygen is a top Educational app development company offering tailored Education app development services across Canada, USA, UK, and worldwide. Hire skilled developers today for custom, feature-rich EdTech solutions."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>
      <div className="">
        <Header />
      </div>
      <div className="overflow-hidden lg:pt-[110px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Award winning Education App Development Company in Canada"
            ptag="Comfygen is the best education app development company in Canada offering innovative and reliable education app development services to universities, and EdTech startups. Our expert developers build custom eLearning apps with high performance, intuitive design, and advanced features to enhance the digital learning experience. As a leading education aap development company in canada we focus on creating scalable and user-friendly solutions that help institutions increase student engagement, streamline learning management, and grow their EdTech platforms in the competitive digital education market."
            li="Custom Learning App Solutions"
            li1="Expert EdTech App Development"
            li2="Engaging & Interactive Design"
            li3="Scalable, High-Performance Apps"

            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/herosection/education-app-development-company-hero-img.webp"
          />
        </div>
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Comprehensive Education App Development Services In Canada for Modern Learning
              </h2>
              <p className="text-base text-center font-normal">
                We deliver end-to-end education app development services designed for schools, universities, EdTech startups, and enterprises. As a reliable education app development company In Canada, we create secure, scalable, and interactive learning applications that enhance digital education. Our elearning app development solutions are built with advanced features, intuitive design, and high performance to improve student engagement, simplify learning management, and support the growth of your EdTech platform in today’s competitive market.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Invest in Education App Development for Business Growth?"
          description1="The global education apps market is growing rapidly as learners and institutions shift to mobile-first and personalized learning experiences. The market was valued at over USD 57 billion in 2024 and is expected to grow to nearly USD 300 billion by 2032, driven by rising smartphone use, AI integration, and global demand for flexible learning solutions."
          description2="Investing in education app development enables schools, EdTech startups, and training providers to scale, boost engagement, and increase revenue while staying ahead in the evolving digital education landscape."
          points={[
            "Simplifies online learning and course management",
            "Improves student engagement and retention",
            "Enables live classes, analytics, and secure payments",
            "Drives brand visibility and long-term growth"
          ]}
          imageSrc="https://www.comfygen.com/media/education-app-development-company/edu-about-img.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <SolutionSec
          heading="Build Smart Learning Platforms with Our AI-Powered Education App Development Solution"
          subheading="As a leading AI education mobile app development company, we create intelligent learning solutions that personalize education, improve student engagement, and enhance teaching efficiency. Our AI-driven apps empower schools, universities, and e-learning platforms to deliver adaptive, interactive, and data-driven learning experiences."
          techData={technologyData}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Online Education App Development Portfolio"
            description="We have successfully delivered a wide range of custom education app development solutions tailored for diverse learning needs. Here are some of our top projects that showcase our expertise in education app development services"
          />
        </section>

        <CallToAction
          heading="Build Your Education App with a Trusted Development Partner"
          text="Turn your education idea into a powerful digital learning platform with our expert EdTech app development services. From concept to launch, we help you build scalable, secure, and future-ready education apps that drive real growth."
          buttonText="Get in touch now"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />

        {/* <ContactFromCenter /> */}
        <div className="py-8">
          <Features
            heading="Key Features of Our Education Apps"
            description="Our education app development solutions are designed to deliver seamless learning, teaching, and management experiences. Each panel is crafted to improve engagement, simplify operations, and support scalable digital education platforms."
            featuresData={JSON_DATA.featuresData}
            grid={3}
          />
        </div>

        <section className="py-10 lg:py-20 mb-8 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Technologies We Use in Education App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  We use cutting-edge technologies to build scalable, secure, and future-ready education app development solutions. Our advanced tech stack ensures better learning experiences, high performance, and long-term growth for EdTech startups and institutions.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={title} className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                        {/* <Image
                                  src={img}
                                  className="object-cover"
                                  width={35}
                                  height={50}
                                  alt={title}
                                /> */}
                        <h3 className="sm:text-2xl text-xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p className="text-white text-start break-words whitespace-normal" dangerouslySetInnerHTML={{ __html: decs }}>

                        </p>
                      </div>
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
                Our End-to-End Education App Development Process
              </h2>
              <p className="text-center text-base text-[#000]">
                Our education app development process is simple, transparent, and result-driven. We follow a step-by-step approach to build secure, scalable, and user-friendly education apps for schools, EdTech startups, and enterprises.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Tech Stack We Use for Digital Education App Development"
          description="We use a modern and reliable tech stack for mobile learning solutions to build fast, secure, and scalable learning platforms. Our technology choices ensure smooth performance, seamless user experience, and future-ready education apps across all devices."
          filterCategory={["crypto"]}
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Education App Developers"
          text="Hire skilled <a href='https://www.comfygen.com/hire-mobile-app-developer' class='font-semibold underline'>education app developers</a> who understand real learning needs and deliver secure, scalable, and user-friendly applications. We ensure clear communication, full confidentiality, and complete satisfaction throughout the development process. From school management systems to advanced learning platforms, our team builds education apps that support growth and long-term success."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Custom education app development expertise",
            "Smooth LMS & third-party integrations",
            "AI, AR & VR powered learning features",
            "Secure, scalable, future-ready solutions"
          ]}
        />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={JSON_DATA.Frequently} title="Frequently Asked Questions" />

        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=education-app-development&per_page=3`
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
