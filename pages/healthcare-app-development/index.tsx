import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/healthCare.json";
import { IconCode, IconFirstAidKit, IconMessage, IconNews, } from '@tabler/icons-react';
import { IconCashBanknote, IconShoppingCart, IconTools, IconTicket, IconChartBar } from '@tabler/icons-react';
import { FaDotCircle } from "react-icons/fa";


import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Link from "next/link";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);
const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { loading: loader, ssr: true }
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);


const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Doctor Appointment App Development",
    desc: "Our <a href='https://www.comfygen.com/doctor-appointment-app-development' class='text-blue-500 font-semibold'>doctor appointment app development solutions</a> simplify online bookings, allowing patients to schedule visits seamlessly while helping doctors manage availability, consultations, and patient records efficiently through a user-friendly mobile platform."
  },
  {
    img: <IconCashBanknote stroke={1.5} className="w-12 h-12" />,
    title: "Pharmacy App Development",
    desc: "Boost your pharmacy business with our <a href='https://www.comfygen.com/pharmacy-app-development' class='text-blue-500 font-semibold'>pharmacy app development</a> that enables easy medicine ordering, digital prescriptions, secure payments, and real-time delivery tracking for customers seeking convenient healthcare access at home."
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Telemedicine App Development",
    desc: "Deliver remote care with our <a href='https://www.comfygen.com/telemedicine-app-development' class='text-blue-500 font-semibold'>telemedicine app development solutions</a> that connect patients and doctors via secure video consultations, real-time chat, and digital prescriptions—making healthcare more accessible and efficient worldwide."
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />,
    title: "Fitness App Development",
    desc: "Encourage healthier lifestyles through our fitness app development services that track workouts, diet, and health goals, helping users maintain wellness while integrating smart wearables for real-time activity monitoring."
  },
  {
    img: <IconMessage stroke={1.5} className="w-12 h-12" />,
    title: "Medical Devices Software Development",
    desc: "We offer medical devices software development that connects smart healthcare equipment to apps, ensuring real-time monitoring, accurate data collection, and improved diagnosis for hospitals and medical institutions."
  },
  {
    img: <IconShoppingCart stroke={1.5} className="w-12 h-12" />,
    title: "Laboratory App Development",
    desc: "Our <a href='https://www.comfygen.com/laboratory-app-development' class='text-blue-500 font-semibold'>laboratory app development solutions</a> streamline lab operations by managing test bookings, tracking samples, and delivering reports digitally, thereby ensuring faster turnaround times and an enhanced patient experience."
  },
  {
    img: <IconTools stroke={1.5} className="w-12 h-12" />,
    title: "Medicine Delivery App Development",
    desc: "Simplify medicine sales and delivery with our <a href='https://www.comfygen.com/medicine-delivery-app-development' class='text-blue-500 font-semibold'>medicine delivery app development services</a>, offering prescription uploads, order tracking, and seamless payment integration for efficient pharmacy operations."
  },
  {
    img: <IconTicket stroke={1.5} className="w-12 h-12" />,
    title: "Clinical App Development",
    desc: "Enhance hospital workflows with <a href='https://www.comfygen.com/clinical-application-development' class='text-blue-500 font-semibold'>clinical app development</a> that manages patient data, clinical reports, and scheduling, improving coordination between healthcare professionals and boosting overall care efficiency."
  },
  {
    img: <IconChartBar stroke={1.5} className="w-12 h-12" />,
    title: "mHealth App Development",
    desc: "Our mHealth app development solutions bring healthcare to mobile devices, enabling remote consultations, health monitoring, and real-time updates to make medical care more accessible to everyone."
  },
];




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
    "name": "Next-Gen Healthcare App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/"
    },
    "description": "Boost your medical business with Comfygen’s next-gen healthcare app development solutions. We develop scalable, compliant, and data-driven healthcare applications for global clients.",
    "url": "https://www.comfygen.com/healthcare-app-development",
    "mainEntityOfPage": "https://www.comfygen.com/healthcare-app-development",
    "areaServed": "Global",
    "serviceType": [
      "Healthcare App Development",
      "Medical App Development Company",
      "HIPAA Compliant Healthcare App",
      "Telemedicine App Development",
      "Custom Healthcare App Development",
      "AI Healthcare Solutions",
      "Hospital Management App",
      "HealthTech App Developers",
      "Medical Software Development",
      "Healthcare App Consultation Services",
      "Remote Patient Monitoring App Development",
      "Healthcare CRM App Development",
      "EHR & EMR App Development",
      "Doctor Appointment App Development",
      "Pharmacy App Development",
      "Fitness App Development"

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
      "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
      "addressLocality": "Jaipur",
      "postalCode": "302006",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
      "addressLocality": "Toronto",
      "postalCode": "M1G3S7",
      "addressCountry": "Canada"
    }
      , {
      "@type": "PostalAddress",
      "streetAddress": "Rhederstraße 34, 53881 Euskirchen ",
      "addressLocality": "Euskirchen",
      "postalCode": "53881",
      "addressCountry": "Germany"
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
      "areaServed": ["IN", "US", "CA", "GB", "DE", "AE"],

      "availableLanguage": "en, in, ar, de, es"
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
    "Name": "Comfygen – Innovative mHealth App Development Company",
    "image": "about section image",
    "description": "Comfygen Technologies is a trusted mHealth app development company creating innovative healthcare apps with telemedicine, wearable, and data analytics features to empower modern healthcare.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2800"
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
      "name": "Healthcare App Development",
      "item": "https://www.comfygen.com/healthcare-app-development"

    }]
  },
  {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of healthcare apps do you develop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop a wide range of healthcare apps including telemedicine apps, patient monitoring apps, medical appointment booking apps, wearable healthcare apps, EHR/EMR apps, and AI-powered diagnostic apps tailored to hospitals, clinics, and healthcare startups."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use in healthcare app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our healthcare mobile app developers leverage modern tech stacks such as Node.js, Python, Django, Next.js, React, blockchain integration, and IoT solutions to create secure, scalable, and HIPAA-compliant apps."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to develop a healthcare app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of healthcare app development depends on app complexity, features, platform (iOS, Android, or cross-platform), and third-party integrations. At Comfygen, we provide customized quotes to fit your project requirements and budget."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a healthcare app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare mobile app development timelines vary depending on features, integrations, and complexity. Typically, a standard app takes 12–20 weeks, while complex AI-powered or telemedicine apps may require 24+ weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate telemedicine and AI-based features?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we integrate telemedicine functionalities such as video consultations, chat, and e-prescriptions, along with AI-powered features like predictive analytics, diagnostic support, and personalized healthcare recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle updates and maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer ongoing app support, updates, and optimization, including bug fixes, security patches, and feature enhancements to ensure your healthcare app remains secure, HIPAA-compliant, and up-to-date with industry standards."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs and devices into the app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we integrate third-party APIs, wearable devices, and medical IoT sensors to provide real-time monitoring, seamless data sharing, and enhanced patient engagement across your healthcare ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide customization options for healthcare apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our custom healthcare app development services allow tailored solutions to meet your unique workflows, branding, patient care processes, and compliance requirements."
        }
      }
    ]
  }



];


export default function Mobile(props: any) {
  let { initialData } = props;
  let {
    Frequently,
    Streamlined,
  } = JSON_DATA;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };



  return (
    <>
      <Head>
        <title>Best Ethereum Blockchain Development Company | Comfygen</title>
        <meta name="description" content="Comfygen is the best Ethereum blockchain development company, offering secure, scalable, and customized blockchain solutions. Build smart contracts, DApps, DeFi platforms, and tokenization solutions." />

        <meta name="keywords" content="Healthcare App Development, Medical App Development Company, HIPAA Compliant Healthcare App, Telemedicine App Development, Custom Healthcare App Development, AI Healthcare Solutions, Hospital Management App, HealthTech App Developers, Medical Software Development, Healthcare App Consultation Services, Remote Patient Monitoring App Development, Healthcare CRM App Development, EHR & EMR App Development, Doctor Appointment App Development, Pharmacy App Development, Fitness App Development" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/healthcare-app-development" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- New in iOS6 -->
        <!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale" content="en_IN" />
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

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Healthcare App Development Services | HIPAA-Compliant Medical Apps" />
        <meta name="twitter:description" content="Partner with Comfygen Technologies for cutting-edge healthcare app development. We create HIPAA-compliant, AI-powered, and scalable medical apps tailored for hospitals, doctors, and startups." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/healthcare-app-development/healthcare-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/healthcare-app-development/healthcare-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/healthcare-app-development/healthcare-app-development.webp" />
        <meta property="og:image:alt" content="Healthcare App Development" />
        <meta property="og:url" content="https://www.comfygen.com/healthcare-app-development" />
        <meta property="og:title" content="Revolutionize Healthcare with Comfygen’s Custom Medical App Development Solutions" />
        <meta property="og:description" content="Build next-gen healthcare apps with Comfygen Technologies. From telemedicine to AI-driven diagnostics, we develop secure, scalable, and HIPAA-compliant healthcare applications for your business success." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Top-Rated Healthcare Mobile App Development Company In India"
          ptag="A trusted healthcare mobile app development company delivering secure, HIPAA-compliant, and scalable digital healthcare solutions for hospitals, clinics, startups, and enterprises worldwide."
          ptag1='We specialize in custom healthcare mobile app development using advanced technologies like AI, IoT, and cloud to improve patient care, streamline clinical workflows, and ensure data security. Our expert healthcare app developers build future-ready solutions tailored to your business needs.'
          li="Custom Healthcare App Development Services for Android & iOS"
          li1="Secure & HIPAA-compliant Medical App Development Solutions"
          li2="Scalable Healthcare Software Development with AI & IoT integration"
          li3=""
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/healthcare-app-development/hero.webp"
        />

        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Affordable Custom Healthcare App Development Services In India for Your Startup</h2>
              <p className="text-base text-center font-normal">Take your healthcare business to the next level with Comfygen’s custom healthcare app development services. As a trusted AI healthcare app development company, we provide the best <a href='https://www.comfygen.com/blog/hipaa-compliance-in-mobile-health-apps' className='text-blue-500 font-medium'>HIPAA-compliant mobile app development solutions</a> tailored to hospitals, startups, and enterprises. Empower your patients and streamline operations with our advanced healthcare app services.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Invest in Custom Healthcare Mobile App Development?"
          description1="According to Grand View Research, the global healthcare mobile app market is expected to grow from USD 114.17 billion in 2024 to USD 1,070.58 billion by 2030, registering a strong CAGR of 45.2%. This rapid growth highlights the increasing demand for custom healthcare mobile app development among hospitals, clinics, and healthcare startups."
          description2="Investing in custom healthcare app development services enables organizations to improve patient care quality, streamline clinical operations, and unlock new revenue opportunities through scalable, secure, and HIPAA-compliant digital healthcare solutions."
          points={[
            "24/7 virtual consultations",
            "Real-time patient monitoring",
            "Improved patient engagement",
            "Automated workflows & analytics",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/healthcare-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <SolutionSec
          heading="Our Custom Healthcare Mobile App Development Solutions"
          subheading="Comfygen Technologies offers custom healthcare mobile app development solutions designed to empower hospitals, clinics, pharmacies, and startups. We build scalable, HIPAA-compliant, and AI-powered healthcare apps that enhance patient care, streamline workflows, and boost your digital healthcare journey."
          techData={technologyData}

        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Heathcare Mobile Application Portfolio"
            description="Explore our selection of accomplished projects that highlight our proficiency in online solutions and app development. Every project demonstrates our dedication to excellence, creativity, and client fulfilment."
          />
        </section>


        <div className="py-8">
          <Features
            heading="We Build Healthcare Apps with Powerful Patient, Doctor & Admin Panels"
            description="Comfygen Technologies delivers next-gen healthcare app development solutions equipped with powerful admin, doctor, and patient panels. Our advanced panels ensure smooth communication, secure data access, and efficient management for a seamless healthcare experience."
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>

        <CallToAction
          heading="Let’s Build the Future of Digital Healthcare Together"
          text="Transform your healthcare idea into a cutting-edge mobile app with Comfygen Technologies."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />


        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Next-Gen Healthcare App Development Solutions Powered by AI, IoT, and Blockchain
                </h2>
                <p>At Comfygen Technologies, we bring innovation and intelligence together with our next-gen healthcare mobile app development solutions. Our 10+ year experienced healthcare application developers leverage the latest technologies, including AI, Blockchain, IoT, and Cloud Computing, to build secure, smart, and scalable healthcare mobile apps.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.FutureDriven.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-[40px]">
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                      <p className=" text-base font-normal mt-2" dangerouslySetInnerHTML={{ __html: desc }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className=" py-8">
          <div className="bg-black">
            <section className="items-center py-20  space-y-10  md:flex md:space-x-10 md:space-y-0 mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div className="flex flex-col space-y-2">
                    <Image
                      className="rounded-lg bg-contain"
                      alt="Our Secured and Compliance-Friendly mHealth Applications Meeting Industry Standards"
                      src="https://www.comfygen.com/comfygen-images/healthcare-app-development/Next Gen Healthcare App.webp"
                      width={640}
                      height={360}
                    />
                    <h2 className="py-2 lg:py-4 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-white">
                      Next-Gen Healthcare App Development Company for Diverse Medical Sectors
                    </h2>
                    <p className="text-base text-white">At <Link href='https://www.comfygen.com' className="underline font-semibold">Comfygen Technologies</Link>, we are a next-gen healthcare app development company delivering custom, secure, and scalable healthcare app solutions for diverse medical sectors. Our expertise covers patient care management, clinical workflows, telemedicine platforms, and AI-powered healthcare applications, enabling hospitals, clinics, startups, and enterprises to enhance care delivery, streamline operations, ensure HIPAA compliance, and drive sustainable digital healthcare transformation.
                    </p>

                  </div>
                  <div className="grid gap-4 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[650px] overflow-auto head-scroll">
                    {JSON_DATA.WhyChoosed.map((elem) => {
                      const { num } = elem;
                      return (
                        <div key={num} className="group  pb-6 space-y-4 transition-all duration-200">
                          <div className="flex gap-2">
                            <span><FaDotCircle className="text-white" /></span>
                            <p className="text-white" dangerouslySetInnerHTML={{ __html: elem.decs }}></p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Step-by-Step Healthcare App Development Process We Follow</h2>
              <p className="text-base font-normal mt-2">
                Comfygen Technologies is a trusted healthcare mobile app development company in India that builds custom, secure, and high-performance healthcare apps. We follow a clear and flexible development process focused on real results. From planning to launch and ongoing support, we ensure smooth user experience and better business efficiency.

              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        <section className="py-8">
          <TechStack
            title="Modern Technology Stack for Secure Healthcare App Development"
            description="At Comfygen Technologies, we use a robust and future-ready healthcare app development technology stack to build high-performance, secure, and scalable medical applications. Our backend and frontend frameworks, combined with modern databases and APIs, ensure seamless functionality, data security, and full compliance with healthcare regulations such as HIPAA and GDPR, delivering reliable digital healthcare solutions for hospitals, startups, and enterprises."
          />
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Dedicated Healthcare App Developers"
          text="Looking to build a secure and scalable healthcare mobile app? Hire dedicated <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline'>healthcare mobile app developers</a> from Comfygen Technologies to create HIPAA-compliant, feature-rich medical applications tailored to your business. Our expert developers specialize in delivering smart, innovative, and reliable medical mobile app development solutions for hospitals, startups, and telemedicine providers."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in custom healthcare app development",
            "HIPAA & GDPR-compliant app architecture",
            "Integration with EHR, IoT & wearables"
          ]}
        />

        <ClientTestimonials
          heading="What Our Clients Say About"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={Frequently} title="Frequently Asked Questions" />
        <BlogSection initialData={initialData} />

      </div >
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
