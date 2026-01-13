
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/aiinterviewschedulingsoftwaredevelopment.json";
import { useState } from "react";
import LazyLoad from "react-lazy-load";

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

const CardItem = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CardItem"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CoreFeaturesSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CoreFeaturesSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
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

const LatestTechnology = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/LatestTechnology"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



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
    "@type": "Organization",
    "name": "Comfygen",
    "url": "https://www.comfygen.com/",
    "logo": "https://www.comfygen.com/svg/Logo1.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "contactOption": "WhatsApp",
      "telephone": "+91 9587867258",
      "areaServed": ["US", "IN", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
      "email": "sales@comfygen.com",
      "availableLanguage": "en, in"
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
    "@type": "Service",
    "name": "Custom AI Interview Scheduling App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/"
    },
    "description": "Boost recruitment efficiency with our custom AI interview scheduling app development. Automate interview bookings, candidate notifications, and smart job recommendations with our advanced interview scheduling software.",
    "url": "https://www.comfygen.com/ai-interview-scheduling-software-development",
    "mainEntityOfPage": "https://www.comfygen.com/ai-interview-scheduling-software-development",
    "areaServed": "Global",
    "serviceType": [
      "smart job recommendation",
      "Smart Interview Scheduling Tools for HR",
      "Smart Interview Scheduling Tools for HR"

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
    "Name": "Automated Interview Management Solutions",
    "image": "Hero section image",
    "description": "Streamline your hiring with AI interview scheduler software development. Automate interview scheduling, candidate communication, and workflow optimization with our customizable and secure solutions.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "169"
    }


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
      "areaServed": ["US", "IN", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
      "email": "sales@comfygen.com",

      "availableLanguage": "en, in"
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
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-powered interview scheduling software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-powered interview scheduling software automates the hiring process by using artificial intelligence to match candidate availability, generate interview questions from CVs, and send automatic notifications. It reduces manual work, improves scheduling efficiency, and enhances the overall candidate experience with features like self-rescheduling, smart reminders, and personalized interview workflows."
        }
      },
      {
        "@type": "Question",
        "name": "Can your software integrate with our existing ATS or HRMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our AI interview scheduler seamlessly integrates with leading Applicant Tracking Systems (ATS) and HRMS platforms like SAP, Workday, Oracle, and more. This ensures smooth data flow, centralized operations, and zero disruption to your current hiring workflow while boosting recruitment efficiency with intelligent automation."
        }
      },
      {
        "@type": "Question",
        "name": "What types of interviews can your software schedule?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our software supports various interview formats including virtual, in-person, hybrid, group, 1-on-1, and round-robin interviews. It also includes video proctoring and live interview capabilities, making it a flexible solution for modern recruitment across industries and roles."
        }
      },
      {
        "@type": "Question",
        "name": "Is the interview scheduling software mobile-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We develop responsive web and mobile apps for Android and iOS. Candidates and recruiters can manage interviews on the go with real-time notifications, calendar sync, and self-scheduling features that make mobile access easy and efficient."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI improve the hiring workflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI analyzes millions of data points to recommend workflow improvements, detect bottlenecks, and automate repetitive tasks. It streamlines interview scheduling, candidate shortlisting, and question generation—resulting in faster, more accurate, and data-driven hiring decisions that reduce time-to-hire and increase candidate satisfaction."
        }
      },
      {
        "@type": "Question",
        "name": "Is your solution secure and compliant with regulations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our AI-powered interview scheduling software is built with enterprise-grade security. It complies with global standards like GDPR, SOC 2, and HIPAA. All data is encrypted, access is controlled, and systems are regularly audited to ensure maximum compliance and data protection."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to develop an AI-powered interview scheduling software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to develop AI-powered interview scheduling software typically ranges from $20,000 to $100,000+, depending on features, platform complexity, AI integration, and third-party integrations. Customization, scalability, and compliance requirements also impact pricing. We provide tailored quotes based on your specific needs and business goals."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build an AI Interview Scheduling App?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Development timelines usually range between 10 to 24 weeks, based on the project scope, platform (web/mobile), AI functionality, and integrations. Simple versions may take less time, while enterprise-grade solutions with ATS/HRMS integrations and custom AI features require longer development and testing cycles for best performance and security."
        }
      }
    ]

  }



];


export default function Ecommerce(props) {
  let { initialData } = props;

  let { Hire, myList, WhyChoosed } = JSON_DATA;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const [show, setshow] = useState(true);
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
        <title>AI Interview Scheduler Software Development Company | Comfygen</title>
        <meta name="description" content="Comfygen delivers intelligent AI interview scheduling software for startups and enterprises, offering automated recruitment workflows, smart job recommendations, and scalable talent acquisition solutions." />
        <link rel="canonical" href="https://www.comfygen.com/ai-interview-scheduling-software-development" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
        <meta name="apple-mobile-web-app-title" content="Comfygen App" />

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


        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:url" content="https://www.comfygen.com/ai-interview-scheduling-software-development" />
        <meta property="og:title" content="AI-Powered Interview Scheduling Software Development Company" />
        <meta property="og:description" content="Automate interview booking, CV parsing, and candidate management with our secure, scalable AI-powered scheduling software solutions for enterprises." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-og.webp" />
        <meta property="og:image:alt" content="AI Interview Scheduling Software" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2025-05-28T10:13:21+00:00" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Interview Scheduling Software Development Company" />
        <meta name="twitter:description" content="Develop enterprise-grade AI interview scheduling apps. Automate processes like booking, reminders, CV parsing, and more with secure, scalable AI solutions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-og.webp" />
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



      <div className="overflow-hidden lg:pt-[10px]">

        <HeroSectionForAllPages
          heading="AI Interview Scheduler Software Development Company"
          ptag="Comfygen is a leading AI interview scheduling software development company delivering intelligent, scalable, and fully customized solutions to optimize recruitment workflows. Our AI-powered software brings speed, accuracy, and automation to talent acquisition for startups and enterprises alike."
          li="Modern UI/UX for Seamless Scheduling"
          li1="10+ Years of Custom Software Development Experience"
          li2="Timely Delivery with Agile Execution"
          li3="AI-Driven Automation & Smart Job Recommendations"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-hero.webp"
        />

        <Milestones/>

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >All-in-One AI Interview Scheduling Software Development Services by Comfygen
              </h2>
              <p className="text-base text-center font-normal">Our AI-powered interview scheduling software development services are tailored to meet the unique needs of startups, staffing agencies, and large enterprises, helping you transform how you hire.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          heading="AI Interview Scheduler Software Development Tailored to Your Hiring Needs"
          description1="At Comfygen, we specialize in AI-powered interview scheduler software development that transforms the way enterprises manage interviews. Our intelligent platforms eliminate manual coordination, enabling HR teams to focus on what truly matters—finding the right talent."
          description2="Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ai-development' >AI development solutions</a> include automated interview scheduling tools with self-rescheduling features, personalized communication, and smart calendar syncing. Designed for modern recruitment, our automated interview scheduling software integrates seamlessly with your existing ATS and hiring workflows."
          description3="With our custom AI interview scheduling mobile app development services, you gain access to real-time analytics, branded candidate experiences, and smart job recommendations, helping your business optimize hiring efficiency and scale recruitment effortlessly."
          imageSrc="https://www.comfygen.com/comfygen-images/ai-interview-scheduling-software-development/ai-interview-scheduling-software-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}




        <CardItem
          heading="Unlock Seamless Hiring with Our AI Interview Scheduling Software Features"
          subheading="Empower your recruitment process with Comfygen’s feature-rich AI interview scheduler software development services. Our AI interview scheduling app development solutions are designed to automate, optimize, and scale your hiring workflow using intelligent features tailored for modern HR teams and enterprises."
          techData={JSON_DATA.CardGridData}
        />
        <CallToAction
          heading="Transform Your Hiring Process with AI Innovation"
          text="Partner with Comfygen to build AI-powered interview scheduling software that streamlines hiring, enhances candidate experience, and boosts recruitment efficiency. Let’s innovate together!"
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <CoreFeaturesSection
          title="Advanced AI Capabilities That Redefine Recruitment"
          subtitle="Our AI interview scheduler software development services come packed with next-level intelligence to help you hire faster, smarter, and bias-free. Explore the powerful features our platform delivers right out of the box:"
          features={JSON_DATA.LeadingSoftware}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our AI-Powered Interview Scheduling Software Portfolio"
            description="Explore our portfolio of advanced AI interview scheduler software development solutions, built for modern enterprises and hiring teams. Platforms are designed to be user-centric, automated, and seamlessly integrated."
          />
        </section>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">End-to-End Recruitment Suite Integration</h2>
              <p className="text-base font-normal mt-2">
                Our AI-powered recruitment software development process delivers a fully integrated, feature-rich hiring ecosystem tailored to streamline your entire talent acquisition journey—from attraction to onboarding. We combine automation, AI, and user-centric design to ensure hiring efficiency, brand consistency, and candidate engagement.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>





        <TechStack
          title="Cutting-Edge Tech Stacks We Use for AI Interview Scheduler Software Development"
          description="Our team builds smart interview scheduling apps as well as secure, scalable, and high-performance solutions. A top-notch AI-powered interview scheduling software development company for enterprises, we make use of modern technologies for real-time automation, AI integration, and enterprise-grade reliability."
        />

        <LatestTechnology
          heading="Boost Team Productivity with Our Collaborative Interview Scheduling Tools"
          subheading="As a top AI-powered interview scheduling software development company, we go beyond automation to enable seamless collaboration and candidate experience management. Our advanced tools empower hiring teams to manage interviews, review responses, and communicate efficiently across all stages of the hiring lifecycle."
          techData={JSON_DATA.latesttech}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Skilled AI Interview Scheduling App Developers"
          text="Looking to build a powerful, intelligent interview automation platform? At Comfygen, our experienced AI-powered interview scheduling app developers specialize in creating scalable, secure, and fully customized hiring solutions. With deep expertise in HRTech and AI integrations, we help you streamline recruitment, reduce manual tasks, and boost hiring efficiency with smart automation."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "AI-Powered Resume Screening & Question Generation",
            "Real-Time Scheduling & Calendar Sync Capabilities",
            "Intuitive UI/UX with Self-Scheduling Options",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="ReactJS Development Technology"
        />
        {/*<BlogSection initialData={initialData} />*/}
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
