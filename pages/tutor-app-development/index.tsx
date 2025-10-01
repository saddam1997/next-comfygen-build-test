import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import ConsultancyApproach from "../components/ConsultancyApproach";
import ServicesSec from "../components/ServicesSec";
import SolutionSec from "../components/SolutionSec";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import Features from "./components/Features";
import Script from "next/script";
import TechStack from "../components/TechStack";
import ClientTestimonials from "../components/ClientTestimonials";
import PortfolioSec from "../componentsnew/PortfolioSec";
import {
  IconBook,
  IconSchool,
  IconBrain,
  IconAtom,
  IconLanguage,
  IconClipboardCheck,
  IconBriefcase,
  IconHeartbeat,
  IconApps
} from "@tabler/icons-react";

const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), {
  loading: () => <p>Loading...</p>,
});
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
    title: "Requirement Analysis & Research",
    description: "Our process begins with a deep analysis of business objectives, market trends, and competitor research. We gather client requirements, define user personas, and create a roadmap to build a feature-rich and efficient tutor booking app development solution."
  },
  {
    title: "Marketing & Growth Strategy ",
    description: "We go beyond development by offering marketing and growth strategies to help your app reach the right audience. Our development team assists with ASO (App Store Optimization), digital marketing, and user acquisition to maximize engagement and revenue."
  },
  {
    title: "Wireframing & UI/UX Design",
    description: "We design an intuitive, engaging, and responsive interface with a focus on user experience. Our tutor finder mobile app development company ensures seamless navigation, interactive elements, and a visually appealing UI to build up student and tutor engagement."
  },
  {
    title: "Development & Integration",
    description: "Our expert tutor booking app developers use cutting-edge technologies to build a robust, scalable tutor app. We integrate AI-driven tutor matching, real-time chat, payment gateways, and cloud-based storage for seamless functionality across platforms like iOS, Android, and the Web."
  },
  {
    title: "Testing & Quality Assurance",
    description: "We conduct rigorous testing, including functional, performance, security, and usability testing, to ensure a bug-free experience. Our QA team identifies and resolves any issues to deliver a smooth online learning app development solution."
  },
  {
    title: "Deployment & Launch",
    description: "After final approval, we deploy the tutor app across app stores and web platforms. Our tutor booking app development company ensures seamless integration with existing systems and provides post-launch support to optimize performance."
  },
  {
    title: "Maintenance & Support",
    description: "Our team provides ongoing support, regular updates, and continuous performance monitoring. We ensure on-demand tutor app development remains efficient, secure, and up to date with evolving trends."
  }

];

const technologyData = [
  {
    img: <IconBook stroke={1.5} className="w-12 h-12" />,
    title: "Elementary Application Development",
    desc: "Comfygen is a trusted tutor app development company that creates educational and engaging mobile apps for elementary and primary schools. Our education apps feature interactive learning modules, AI-driven assessments, and gamification to make education fun and effective for young learners. Our on-demand tutor app development services make sure safe and engaging learning."
  },
  {
    img: <IconSchool stroke={1.5} className="w-12 h-12" />,
    title: "Freelance Tutor Marketplace Development",
    desc: "Comfygen builds freelance tutor marketplace apps for independent tutors to offer their services. A profile can be created, a session can be booked, secure payments can be made, and rating systems provide quality assurance for students."
  },
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
    title: "K-12 Education App Development",
    desc: "Comfygen’s education mobile app development company delivers K-12 education apps that provide structured learning experiences with customizable content. We make sure of seamless curriculum alignment, progress tracking, and gamified learning elements for students of all ages."
  },
  {
    img: <IconAtom stroke={1.5} className="w-12 h-12" />,
    title: "STEM Learning Application Development",
    desc: "Our best custom tutor booking app development company specializes in STEM learning applications, integrating AI, AR/VR, and interactive simulations to make science, technology, engineering, and mathematics more engaging. With hands-on experiments and 3D models, students grasp complex concepts easily."
  },
  {
    img: <IconLanguage stroke={1.5} className="w-12 h-12" />,
    title: "Language Learning Application Development",
    desc: "As a leader in online learning app development, we develop innovative language learning applications with AI-powered voice recognition, multilingual support, and interactive exercises. Our tutor management app development solutions help learners master new languages with ease while guaranteeing an immersive experience."
  },
  {
    img: <IconClipboardCheck stroke={1.5} className="w-12 h-12" />,
    title: "Test Preparation App Development Solutions",
    desc: "We provide custom tutor app development services for test preparation platforms, helping students prepare for competitive exams with AI-driven mock tests, adaptive learning paths, and instant tutor assistance. Our education mobile app development company makes sure of an intuitive and user-friendly experience for aspirants."
  },
  {
    img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "Corporate Training & Employee Learning App Development",
    desc: "We offer corporate training app development solutions designed for businesses to upskill employees through on-demand courses, microlearning modules, and certification programs. Our on-demand tutor app development services help organizations enhance employee productivity."
  },
  {
    img: <IconApps stroke={1.5} className="w-12 h-12" />,
    title: "Special Needs & Inclusive Education App Development",
    desc: "We develop inclusive education apps that cater to students with disabilities. Our best <a class='font-semibold text-blue-600' href='/e-learning-app-development'>E-learning mobile app development</a>  agency offers accessibility features such as text-to-speech, sign language support, and adaptive learning modules, ensuring equal learning opportunities for all."
  },
  {
    img: <IconHeartbeat stroke={1.5} className="w-12 h-12" />,
    title: "Fitness and Wellness Coaching App Development",
    desc: "We provide fitness and wellness coaching apps that connect users with expert trainers for personalized health programs, yoga classes, and mental well-being sessions. Our on-demand tutor app development solutions ensure smooth live sessions and performance tracking"
  },

];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/image/hero-image-on-demand-tutor-booking-app.png",
      head: "On-Demand Tutor Booking App",
      name: "A real-time tutor booking app development solution that connects students with qualified tutors nearby. Integrated with AI-based matching, automated scheduling, secure payments, and live video sessions.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "/portfolio/on-demand-tutor-booking-app",
    },
    {
      img: "https://www.comfygen.com/image/hero-image-ai-powered-language-learning-app.png",
      head: "AI-Powered Language Learning App",
      name: "An interactive language learning app development platform with AI-driven personalized lessons, gamified exercises, speech recognition, and real-time progress tracking to help users master new languages effectively.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "/portfolio/ai-powered-language-learning-app",
    }
  ],
};



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
      "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      "addressLocality": "Jaipur, Rajasthan",
      "addressRegion": "India",
      "postalCode": "302006",
      "telephone": "+91-958-786-7258"
    },
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      "streetAddress": "40 Tuxedo Ct, Toronto, ON",
      "addressLocality": "Toronto",
      "addressRegion": "Canada",
      "postalCode": "M1G3S7",
      "telephone": "+1 579-977-4475"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tutor App Development Company",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen is a top tutor app development company, offering custom tutoring app development services with AI-driven features, live classes, secure payments & seamless booking.",
      "url": "https://www.comfygen.com/tutor-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/tutor-app-development",
      "areaServed": "Global",
      "serviceType": [
        "E-Learning App Development",
        "Edtech App Development",
        "AI-Based Educational App Development",
        "Tutor Management App Development",
        "Develop a Learning App",
        "Language Learning App Development",
        "Kids Tutor App Development",
        "Exam Preparation App Development",
        "AR/VR Tutor App Development",
        "On-Demand Tutor App Development",
        "E2C eLearning App Development",
        "Custom Tutor App Development",
        "Tutoring App Development"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://www.linkedin.com/company/comfygen-private-limited"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
          "addressLocality": "Jaipur",
          "postalCode": "302006",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7",
          "addressLocality": "Toronto",
          "postalCode": "M1G3S7",
          "addressCountry": "Canada"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "areaServed": ["IN", "US", "CA", "GB", "AU", "DE", "FR"],
        "email": "sales@comfygen.com",
        "availableLanguage": ["en", "in"]
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Private Limited",
      "name": "On-Demand Tutor App Development Services",
      "image": "Hero section image",
      "description": "Get top-notch on-demand tutor app development services with Comfygen. We build AI-powered tutoring apps with live classes, seamless booking, secure payments & interactive learning.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1928"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to develop a tutor app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Developing a tutor app involves several stages, including market research, UI/UX design, development, testing, and deployment. Comfygen handles everything—from concept to launch—with AI-powered tutor matching, real-time video classes, and secure payment systems."
          }
        },
        {
          "@type": "Question",
          "name": "How much does tutor app development cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A simple tutor app costs around $10,000 - $20,000, while a complex AI-driven education mobile app can go up to $50,000+. Contact us for a tailored quote!"
          }
        }
      ]
    }
  ];



  return (
    <>
      <Head>
        <title>Best Tutor App Development Company</title>
        <meta name="description" content="Comfygen is among the top tutor app development company, offering custom tutor app development services with AI tutor app solutions for edtech startups, institutes & enterprises." />
        <link rel="canonical" href="https://www.comfygen.com/tutor-app-development" />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
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
        <meta name="keywords" content="Custom Tutor App Development, Language Learning App Development, On-Demand Tutor App Development, Kids Tutor App Development, Develop a Learning App, Education Mobile App Development, Tutor Booking App Development, Tutoring App Development, Edtech App Development" />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:title' content='Top-Rated On-Demand Tutor App Development Company' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://www.comfygen.com/tutor-app-development' />
        <meta name='og:image' content='https://www.comfygen.com/image/og-image-tutor-app.webp' />
        <meta name='og:site_name' content='Comfygen Private Limited' />
        <meta name='og:description' content='Comfygen is a top-rated on-demand tutor app development company, offering custom tutor booking app development solutions with AI, AR/VR, and blockchain integration to enhance learning experiences.' />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Tutor Finder App Development Company | Comfygen" />
        <meta name="twitter:description" content=" Comfygen is a trusted tutor finder app development company, offering AI-driven tutoring app solutions with seamless booking, live classes, and personalized learning features." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/og-image-tutor-app.webp" />
        <meta property="og:image:alt" content="Tutor App Development" />
        <meta property="og:url" content="https://www.comfygen.com/tutor-app-development" />
        <meta property="og:title" content="On-Demand Tutor App Development Company" />
        <meta property="og:description" content="If you're looking for a trusted on-demand tutor app development company, Comfygen delivers feature-rich, AI-powered tutoring solutions with seamless booking, live classes, and interactive learning features." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/e-learning-app-development-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="Tutor App Development Company"
            ptag="Build an innovative and user-friendly tutoring app with Comfygen, a trusted tutor app development company known for delivering high-quality custom tutoring app development services. Whether you’re an edtech startup, an institute, or an enterprise, we craft tailored tutoring app development solutions with next-gen technology to enhance learning experiences and streamline tutor-student interactions."
            li="Engaging & Intuitive UI/UX Design"
            li1="Expertise in AI-powered learning Solutions"
            li2="Timely Project Delivery & Ongoing Support"
            li3="Advanced Virtual Classroom & Collaboration Features"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Top-Rated Tutor Booking App Development Company That Builds Next-Gen Tutor Apps"
          description1="Comfygen is a trusted on-demand tutor app development company, delivering innovative and scalable custom tutoring app development services for EdTech businesses, startups, and institutions. With expertise in AI-driven learning solutions, we build intuitive and feature-rich tutor apps that connect students and educators seamlessly. "
          description2="Our solutions include real-time video classes, AI-powered tutor matching, virtual whiteboards, and secure payment integration, ensuring a smooth and interactive learning experience. We focus on user-friendly designs, robust backend development, and cutting-edge technologies to create tailored tutoring platforms that drive engagement and efficiency."
          description3="With a strong focus on online learning app development, we help EdTech startups and businesses revolutionize education through innovative technology. Choose Comfygen for a cutting-edge tutor booking app development solution designed for success."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >We Provide Tailor-Made And Result-Oriented Tutor App Development Services</h2>
              <p className="text-base text-center font-normal">Our tutor app development services enhance the online education experience at Comfygen. Our tutor app development expertise make sure real-time engagement, seamless learning, and scalable features that meet your needs.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <SolutionSec
          heading="Start Your Business With Our Top-Tier Tutor App Development Solutions"
          subheading=""
          techData={technologyData}
        />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/tutor-apps-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <PortfolioSec
          techData={techDataForPage1}
          heading="We Have Developed Tutor Apps That You Can Check Out"
          description="At Comfygen, we take pride in delivering high-quality tutor app development solutions that transform online education. As a trusted tutor app development company, we have built feature-rich, scalable, and AI-powered education mobile app development solutions tailored to various learning needs."
        />
        <Features />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Custom AI-Powered Tutor App Development Solutions
                </h2>
                <p>At Comfygen, we specialize in AI-powered tutor app development solutions, transforming traditional education into a smart, interactive, and adaptive learning experience. Our custom tutoring app development services leverage AI and machine learning to enhance engagement, personalization, and efficiency for students and tutors alike.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left md:grid-cols-3 grid-cols-1">
                {JSON_DATA.AIPowered.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={title} className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                      <p
                        className=""
                        dangerouslySetInnerHTML={{ __html: decs }}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  The Emerging Technologies We Use For Tutor App Development
                </h2>
                <p className="text-center text-white lg:w-1/2 mx-auto">At Comfygen, a leading tutor app development company, we leverage the latest technologies to build on-demand tutor app development solutions with high scalability, security, and AI-driven personalization. Our advanced tech stack ensures an interactive and seamless learning experience.</p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={title} className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                        <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        />
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p className="break-all text-white text-start ">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Tutor App Development Process</h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">Our tutor app development company follows a structured and transparent development process to ensure smooth communication between tutor app designers, developers, and clients. Providing high-quality, scalable, and user-friendly tutor apps on demand is one of our top priorities.</p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <TechStack
          title="Technology Stack We Use"
          description="At Comfygen, we leverage cutting-edge technologies to develop high-performance, scalable, and secure tutor app solutions that enhance the learning experience."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Dedicated Tutor App Developer"
          text="Looking to build a top-notch tutor booking app? At Comfygen, we have a team of highly skilled tutor app developers who bring your vision to life with cutting-edge technology and seamless functionality."
          text1="With 8+ years of experience in mobile app development, our developers specialize in crafting custom tutor app solutions that are intuitive, scalable, and AI-powered. Whether you need an on-demand tutor booking app, AI-driven learning platform, or a cross-platform tutor application, our team ensures a smooth, high-performance experience for both students and educators."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in Advanced Technologies – AI, ML, AR/VR, Blockchain & Cloud Integration",
            "Customized, Scalable Solutions – Tailored to your business needs",
            "Seamless User Experience – Engaging UI/UX for tutors and students",
            "Secure & High-Performance Apps – Robust architecture with encryption & compliance",
            "Dedicated Support & Maintenance – Continuous improvements & bug fixes"
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials} />
        <Faq faqData={Frequently} title="" />
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
