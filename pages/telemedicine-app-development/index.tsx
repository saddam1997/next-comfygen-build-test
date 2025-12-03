import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";
import {
  IconCode,
  IconFirstAidKit,
  IconMessage,
  IconNews,
} from "@tabler/icons-react";
import { IconCashBanknote, } from "@tabler/icons-react";


import Header from "../Newcomponet/layout/Header"
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(() => import("../Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const ConsultancyApproach = dynamic(
  () => import("../Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ClientTestimonials = dynamic(
  () => import("../Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)

const CryptoTradingList = dynamic(
  () => import("../Newcomponet/SectionCompoent/TrendsSection"),
  { loading: loader, ssr: true }
);


// import PointsCardBg from "../componentsnew/PointsCardBg";




const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "AI & Machine Learningce",
    desc: "We <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ai-development' >integrate AI</a> and ML to enable smart diagnosis, automated patient triage, and personalized treatment plans, ensuring your telemedicine app delivers faster, more efficient care experiences.",
  },
  {
    img: <IconCashBanknote stroke={1.5} className="w-12 h-12" />,
    title: "IoT & Wearable Integration",
    desc: "Our telemedicine app development solutions incorporate <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/iot-development-company' >IoT</a>  and wearable devices for real-time remote health monitoring, empowering healthcare providers to make data-driven decisions and provide proactive, connected care.",
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Blockchain",
    desc: "By leveraging <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blockchain-development' >blockchain technology</a>, we build secure, transparent telemedicine apps that ensure data privacy, enable secure data sharing, and establish trust between patients and healthcare providers.",
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />,
    title: "Cloud Solutions",
    desc: "Our cloud-based telemedicine app development approach ensures scalable performance, easy access to data, and high reliability, so your healthcare solutions can grow and adapt to evolving needs.",
  },
  {
    img: <IconMessage stroke={1.5} className="w-12 h-12" />,
    title: "Big Data & Analytics",
    desc: "We utilize big data and analytics to provide actionable insights, enabling healthcare professionals to enhance patient care quality, monitor outcomes, and drive better decision-making.",
  },
];
const Process = [
  {
    title: "Requirement Collection",
    description:
      "We begin every telemedicine app development project by collecting information about the app's requirements. Some of the essential aspects we focus on in this phase include telemedicine app features, development of product ideas, and establishing the software and compliance requirements."
  },
  {
    title: "Project Planning",
    description:
      "The project planning stage helps us create the foundation on which we would build your telemedicine app project. We specialize in custom telemedicine app development with the help of comprehensive project planning that involves identification of the project scope, KPI planning, budget planning, and risk assessment."
  },
  {
    title: "UX/UI Design",
    description:
      "We aim to develop telemedicine apps that can cater to the preferences of the end user in different scenarios. Our success in projects to develop telemedicine apps stems from our expertise in UI prototyping and design. On top of that, we also visualize the core functionalities of telehealth applications, map user journeys, and identify important user scenarios for UX design."
  },
  {
    title: "Development and Deployment",
    description:
      "The core element in the process to create a telemedicine app emphasizes development and deployment. In this stage, we create the server and user-facing components of the app with backend and frontend coding. Furthermore, we implement comprehensive testing to verify compliance, usability, security, and functional behavior of the app. In addition, we will implement a pilot roll-out for focus groups to implement improvements before the launch."
  },
  {
    title: "Integration of Advanced Features",
    description:
      "To enhance the functionality of your telemedicine app, we incorporate advanced features such as AI-powered chatbots for virtual assistance, real-time video consultations, and secure payment gateways. This ensures a user-friendly and feature-rich app experience."
  },
  {
    title: "Performance Monitoring and Optimization",
    description:
      "Post-deployment, we monitor the app’s performance to analyze user feedback and system efficiency. By tracking key metrics, we continuously optimize the app to deliver seamless functionality, scalability, and responsiveness, ensuring its long-term success."
  },
  {
    title: "Support and Maintenance",
    description:
      "We also emphasize continuous support and maintenance services in our process of developing telemedicine apps. It helps us ensure seamless evolution of your telemedicine app according to emerging trends and security risks. Our experts implement software security audits and roll out new features in regular maintenance routines to keep your app updated."
  }
];


export default function Ecommerce(props) {
  let { initialData } = props;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

  let { Chartacterstics } = JSON_DATA;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

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
      "name": " Telemedicine App Development Services | Custom Telehealth App Solutions ",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Revolutionize patient care with Comfygen’s telemedicine app development services. We design HIPAA-compliant telehealth apps with video consultation, EHR integration, and real-time chat features.",
      "url": "https://www.comfygen.com/telemedicine-app-development ",
      "mainEntityOfPage": "https://www.comfygen.com/telemedicine-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Consultancy for Telemedicine App ",
        "Custom Telemedicine App Development",
        "Telemedicine Software Development Services",
        "Telehealth App Development in India",
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
      "name": "Comfygen Technologies",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      }, {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "email": "sales@comfygen.com",
        "areaServed": ["IN", "US", "CA", "GB"],

        "availableLanguage": "en, in"
      },
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
      "Name": "End-to-End Telemedicine App Development",
      "image": "https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-about.webp",
      "description": "Leverage Comfygen’s expertise in telemedicine app development to create user-friendly, HIPAA-compliant healthcare apps. Enable remote consultations, prescriptions, and virtual health monitoring.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200"
      }
    },
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
        "name": "Telemedicine App Development",
        "item": "https://www.comfygen.com/telemedicine-app-development"

      }]
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Can you offer customization for telemedicine apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer customization for telemedicine apps according to client preferences and business goals. We account for different factors such as desired functionalities, UI, branding, and add-ons for the customization of telehealth apps."
        }
      }, {
        "@type": "Question",
        "name": "I have a legacy telemedicine app. Do you offer app modernization services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our telehealth app development company also specializes in telehealth app modernization services. We can help you reinvent your legacy apps and introduce new advantages such as interoperability, enhanced security, and advanced features."
        }

      }, {
        "@type": "Question",
        "name": "What is the cost of developing a telemedicine app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of telemedicine app development can vary from $150,000 to $250,000 for a full-fledged app. Other important factors that influence the development cost include the type of telemedicine app, number of user roles, scale and complexity of features, data storage capacity, and scalability goals."
        }

      }, {
        "@type": "Question",
        "name": "How can I begin developing a telemedicine app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can begin a project to develop telemedicine apps by submitting your requirements to us and telling us about your goals. Once you finalize the project scope and requirements, we can start working on your project after completing the formalities."
        }

      }, {
        "@type": "Question",
        "name": "Who should choose telemedicine solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our telemedicine app development solutions are tailored for doctors, trainers, physicians, and healthcare businesses. We offer robust telemedicine apps that can help reach more users and effectively manage clinical administration tasks."
        }

      }, {
        "@type": "Question",
        "name": "Can users upload prescriptions on telemedicine apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, patients and doctors can use our telemedicine apps to upload prescriptions, which can help in easier allocation of pharmacy services. In addition, the flexibility to upload online prescriptions also helps during the consultation process."
        }

      }, {
        "@type": "Question",
        "name": "Do you design appointment-scheduling apps for doctors and clinics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doctors and clinics can leverage our app development expertise to create telemedicine solutions for efficient appointment scheduling. Our telemedicine software apps can also help in easier appointment management and availability marking."
        }

      }, {
        "@type": "Question",
        "name": "How much time do you take to develop telemedicine apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The time required to develop a telemedicine app can vary between 3 and 6 months, depending on different factors. For example, the number of features and the platforms for developing telemedicine apps can affect the time required for development"
        }

      }, {
        "@type": "Question",
        "name": "Is it safe to make payments through telemedicine apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Telemedicine apps are the most flexible solutions for efficient and faster medical transactions. We offer the assurance of comprehensive security testing of our apps to ensure safe payment options for patients."
        }

      }, {
        "@type": "Question",
        "name": "Do you safeguard sensitive patient data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our telemedicine app developer team prioritizes safeguards for patient data through app security testing before deployment. At the same time, we also follow the essential guidelines for data protection in the field of healthcare to protect the sensitive information of patients."
        }

      }, {
        "@type": "Question",
        "name": "Who Should Use Our Telemedicine App Development Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The key factor that differentiates our telemedicine app development solutions is the assurance of effective experiences for all users. We specialize in telemedicine application software development and pay special attention to the preferences of our different target audiences. Furthermore, our expertise in healthcare app development empowers us to create telemedicine apps that improve value for doctors, patients, support staff, and healthcare organizations or clinics."
        }


      }]
    }
  ];


  return (
    <>
      <Head>
        <title>Telemedicine App Development Company | HIPAA-Compliant Telehealth Solutions </title>
        <meta
          name="description"
          content="Comfygen is a leading telemedicine app development company offering secure, HIPAA-compliant telehealth solutions for hospitals, clinics, and startups. Build your custom healthcare app today! "
        />
        <meta
          name="keywords"
          content="Consultancy for Telemedicine App, Custom Telemedicine App Development,Telemedicine Software Development Services,Telehealth App Development in India"
        />

        {/* <!-- Canonical Tag -->  */}
        <link rel="canonical" href=" https://www.comfygen.com/telemedicine-app-development" />

        {/* <!-- Robots →  */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta →  */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />


        {/* <!-- Viewport and Mobile Optimization →  */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- New in iOS6 -->  */}
        {/* <!-- Author and Company Information -->  */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta -->  */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta -->  */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag -->  */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->   */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Custom Telemedicine App Development Services | Comfygen Healthcare Experts" />
        <meta name="twitter:description" content=" Looking for reliable telemedicine app development services? Comfygen builds scalable, secure, and feature-rich telehealth applications to transform patient care and digital healthcare delivery. " />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-og-image.webp " />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta -->  */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-og-image.webp" />
        <meta property="og:image:alt" content="Telemedicine App Development" />
        <meta property="og:url" content="https://www.comfygen.com/telemedicine-app-development" />
        <meta property="og:title" content=" Telemedicine App Development Company in India | Build Secure Telehealth Apps" />
        <meta property="og:description" content="Empower your healthcare business with custom telemedicine app development by Comfygen Technologies. We deliver secure, HIPAA-compliant telehealth apps with real-time consultation and EHR integration. " />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>


      <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Telemedicine App Development Company "
          ptag="Comfygen helps doctors, clinics, and hospitals build easy-to-use telemedicine apps that connect them to patients anywhere. Our telemedicine app development company creates custom solutions that are safe, simple, and feature modern functionalities such as video calls, appointment booking, and online prescription management. We offer world-class telemedicine mobile app development services that are compliant with healthcare laws, including HIPAA, helping providers and patients work more efficiently."
          li="AI-Powered Features for Better Care"
          li1="Safe & HIPAA-Compliant"
          li2="Easy-to-Use Design for Everyone"
          li3="Cloud Integration for Smooth Workflows"
          li4="Connect to Your Existing Systems"
          ptag3=""
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-hero1.webp"
        />

        <AboutSection
          heading="Most Trusted Telemedicine App Development Company"
          description1="Comfygen has always strived to serve as a valuable companion on your journey to achieve digital transformation. With our experience in telehealth app development, we are prepared to take on any new challenge that comes our way. We have strengthened our reputation as a trusted app development company with more than 300 successfully completed projects and over 250+ happy clients. Our expertise in telemedicine software development revolves around the 15+ years of professional experience of our app developers."
          description2="We stand out as the first choice to create a telemedicine app and embrace the benefits of technology in healthcare at cost-effective prices with the assurance of distinctive advantages over your competitors."

          imageSrc="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Comprehensive Telemedicine App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                We offer a complete range of telemedicine app development services to meet the diverse needs of healthcare providers and patients. Our innovative telemedicine mobile app development solutions are designed to enhance patient care, improve workflows, and ensure compliance with the latest healthcare regulations.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <CryptoTradingList
          heading="Best-in-Class Custom Telemedicine App Development Solutions"
          subtitle="Comfygen has been the beacon of excellence as one of the top telemedicine app development solution providers with proven experience in this domain. We want to reinvent the wheel in the field of telemedicine with our innovative apps tailored to perfection according to your requirements. Our collection of custom telehealth app development solutions can establish the foundations for new experiences for all users in healthcare."
          trends={JSON_DATA.LeadingSoftware}
        />

        <div className="py-8">
          <Features
            heading="Features We Implement in Your Telemedicine Mobile App to Make it Stand Out"
            description="Our telemedicine app development company focuses on creating apps that deliver seamless experiences for patients, doctors, and administrators. Here’s a look at the key features we include in your telemedicine app development solutions to ensure they stand out:"
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Telemedicine App Work"
            description="Explore our advanced telemedicine app development portfolio, featuring secure and user-friendly solutions for healthcare providers and patients. Partner with us to launch digital health solutions that deliver exceptional care and efficiency."
          />
        </section>

        <TechStack
          title="Technology Stack We Use for Telemedicine App Development"
          description="Our telemedicine app development company uses a modern, robust technology stack to build high-performing, secure, and feature-rich healthcare applications. Here’s a glimpse of the core tools we rely on:"
          filterCategory={["crypto"]}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/telemedicine-app-development-new/telemedicine-app-development-feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        {/* <PointsCardBg
          heading="Diverse Functionalities in Telemedicine Apps for Everyone"
          description=""
          items={JSON_DATA.WhyChooseUs}
          buttonText="Explore More"
          buttonLink="/contact-us"
        /> */}

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Choose Your Desired Engagement Models for Our Services
                </h2>
                <p>
                  Comfygen offers the flexibility to choose any engagement model that fits your needs and taps into the potential of our telehealth development services. You can pick any engagement model for telemedicine app development with us by your side.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left md:grid-cols-2 grid-cols-1">
                {JSON_DATA.IndustryApplications.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Methodology for Telemedicine App Development
              </h2>
              <p className="text-base font-normal mt-2">
                We follow a strategic approach in our methodology to create telemedicine applications that cater to the needs of our clients. Our telemedicine app development services have always contributed to the success of our customers with new advantages. The trusted methodology allows us to fulfill every client requirement while creating an efficient, productive, and feature-rich telemedicine app
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>


        <SolutionSec
          heading="Emerging Technologies We Leverage for Telemedicine Application Development"
          subheading="We harness the power of emerging technologies to create innovative and secure telemedicine apps. Our telemedicine app development company integrates cutting-edge solutions like:"
          techData={technologyData}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <CryptoTradingList
          heading="Why Invest in a Telemedicine App?"
          subtitle="In today’s digital age, investing in a telemedicine app is one of the smartest ways to grow your healthcare business. These apps not only help you reach more patients but also provide fast and convenient healthcare services. If you want to expand your practice and confidently meet the demands of modern healthcare, investing in a telemedicine app is essential."
          trends={JSON_DATA.LeadingSoftware2}
        />

        <HireDeveloper
          heading="Hire Telemedicine App Developers"
          text="Looking to build a cutting-edge telemedicine app for your business? Our experienced telemedicine <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >mobile app developers</a> are here to bring your vision to life! At Comfygen, we offer flexible hiring models so you can easily hire dedicated telemedicine app developers who understand healthcare technology and patient-centric design."
          text1="Whether you need full-time developers, part-time experts, or a dedicated team for your project, we ensure:"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Proven expertise in telemedicine app development",
            "Compliance with healthcare standards (HIPAA, GDPR)",
            "User-friendly and innovative app design",
            "Ongoing support and collaboration"
          ]}
        />

        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
        />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}
