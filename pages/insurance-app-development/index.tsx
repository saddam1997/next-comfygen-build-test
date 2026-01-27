import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./insuranceappdevelopment.json";
import {
  IconHeartRateMonitor,
  IconCar,
  IconSteeringWheel,
  IconUserHeart,
  IconBriefcase,
  IconWorld,
  IconHome,
  IconGasStation,
  IconClipboardCheck,
  IconFirstAidKit,
  IconTruckDelivery,
  IconUsersGroup
} from "@tabler/icons-react";


import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CardFeatures = dynamic(() => import("../../components/Newcomponet/comman/CardFeatures"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
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

const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
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


const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { ssr: true }
);

const ClientStories = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientStories"),
  { ssr: true }
);




const Process = [
  {
    title: "Requirement Analysis & Strategy Planning",
    description:
      "We start by understanding your insurance business, user needs, and compliance rules. Our team sets clear goals, technical specs, and a roadmap that matches your vision.",
  },
  {
    title: "UI/UX Design & Wireframing",
    description:
      "We design simple, intuitive screens and wireframes that map the full user journey. The focus stays on easy navigation, modern visuals, and a smooth experience.",
  },
  {
    title: "App Development & Feature Implementation",
    description:
      "Our App developers build secure, scalable insurance apps for Android and iOS. Key features include policy management, claims, payments, and real-time alerts.",
  },
  {
    title: "Testing & QA",
    description:
      "Every feature goes through strict functional, performance, and security testing. We ensure the app meets industry regulations and handles data safely.",
  },
  {
    title: "Compliance & Security Checks",
    description:
      "We verify that your app follows major data protection standards and add strong security layers like encryption and multi-factor authentication.",
  },
  {
    title: "Deployment & Launch",
    description:
      "After testing, we publish your app to both app stores and set up cloud hosting for stability and scale.",
  },
  {
    title: "Post-launch Support & Maintenance",
    description:
      "We stay with you after launch, handling updates, bug fixes, monitoring, and security improvements to keep your app running smoothly.",
  },
];



const technologyData = [
  {
    img: <IconHeartRateMonitor stroke={1.5} className="w-12 h-12" />,
    title: "Health Insurance App Development",
    desc: "We create health insurance apps that put customers first. Our health insurance apps help people manage their health insurance policies, calculate premiums, connect with healthcare providers, and file claims easily—all while keeping data secure and compliant with <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blog/hipaa-compliance-in-mobile-health-apps/'>HIPAA</a> standards.",
  },
  {
    img: <IconCar stroke={1.5} className="w-12 h-12" />,
    title: "Vehicle Insurance App Development",
    desc: "Our vehicle insurance app development solutions help insurers streamline everything from policy renewals to claims and roadside assistance. With features like instant messaging and notifications, insurers can provide better service and make managing vehicle insurance effortless for their customers.",
  },
  {
    img: <IconSteeringWheel stroke={1.5} className="w-12 h-12" />,
    title: "Auto Insurance App Development",
    desc: "Our auto insurance apps include helpful tools like GPS accident reporting, easy claim filing, and premium calculators. We use modern tech like AI and real-time data to create user-friendly, efficient auto insurance experiences.",
  },
  {
    img: <IconUserHeart stroke={1.5} className="w-12 h-12" />,
    title: "Life Insurance App Development",
    desc: "Our life insurance apps offer users a simple and stress-free way to explore life insurance options. Features like instant quotes, easy policy comparisons, and reminders for renewals ensure users can manage life insurance confidently and conveniently.",
  },
  {
    img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "Business Insurance App Development",
    desc: "We develop apps that help insurers manage business insurance policies, track compliance, and automate claims. These tools improve transparency and make it easier for insurers to serve business customers with accurate information and timely support.",
  },
  {
    img: <IconWorld stroke={1.5} className="w-12 h-12" />,
    title: "Travel Insurance App Development",
    desc: "Our travel insurance apps provide complete coverage on the go. They make it simple for users to buy, manage, and claim travel insurance from anywhere, making travel stress-free and secure.",
  },
  {
    img: <IconHome stroke={1.5} className="w-12 h-12" />,
    title: "Property Insurance App Development",
    desc: "Our property insurance apps allow homeowners and landlords to handle everything from policy details to damage claims in one place. They ensure quick, easy access to important information while keeping data safe.",
  },
  {
    img: <IconGasStation stroke={1.5} className="w-12 h-12" />,
    title: "Car Insurance App Development",
    desc: "We create car insurance apps that simplify policy management, renewal processes, and claim filing. These apps have user-friendly designs and smart features that help insurers deliver better service and build trust with their customers.",
  },
  {
    img: <IconClipboardCheck stroke={1.5} className="w-12 h-12" />,
    title: "On-Demand Insurance Claim Apps",
    desc: "Our on-demand insurance claim apps give users the power to file, track, and approve claims anytime. With simple interfaces and helpful support tools, these apps make the entire process smooth for both users and insurance agents.",
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Medical Insurance App Development",
    desc: "Our medical insurance app solutions help patients, providers, and insurers manage policies and claims instantly. They make it easy to access medical coverage and help patients get the care they need without any hassle.",
  },
  {
    img: <IconTruckDelivery stroke={1.5} className="w-12 h-12" />,
    title: "Logistics Insurance App Development",
    desc: "We create logistics insurance apps to protect cargo and deliveries. These apps help companies keep track of goods, manage insurance coverage, and quickly file claims if anything goes wrong during transport.",
  },
  {
    img: <IconUsersGroup stroke={1.5} className="w-12 h-12" />,
    title: "Social Insurance App Development",
    desc: "Our social insurance apps make managing social insurance policies and claims easier for both citizens and government agencies. They’re designed to be simple, secure, and supportive, helping everyone get the most out of their social insurance programs.",
  },
];




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

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to develop an insurance app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of developing an insurance app depends on various factors like features, platforms (iOS, Android, or both), third-party integrations, and complexity. On average, it can range from $20,000 to $100,000+. At Comfygen, we offer flexible pricing models to suit startups, brokers, and enterprises while ensuring secure, scalable, and future-ready app solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom insurance app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development timeline for a custom insurance app typically ranges from 3 to 6 months, depending on the app's complexity, feature set, and platform requirements. At Comfygen, we follow an agile approach and ensure on-time delivery with milestone-based tracking, delivering a fully functional, secure, and compliant app tailored to your business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs and CRMs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in integrating third-party APIs, CRM systems, and tools like payment gateways, document management, policy validation, and analytics. Whether you're using Salesforce, HubSpot, or a custom CRM, our developers ensure seamless and secure integration to enhance operational efficiency and deliver a unified insurance app experience."
        }
      },
      {
        "@type": "Question",
        "name": "Is the app GDPR/HIPAA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Compliance is a top priority at Comfygen. We develop insurance apps that meet global regulatory standards including GDPR, HIPAA, and industry-specific data protection laws. From secure data storage and access controls to audit logs and encryption, we ensure your app is legally compliant and ready for global markets."
        }
      }
    ]
  };



  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Insurance App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get tailored insurance app development services from Comfygen. We specialize in AI & Blockchain integration, offering secure, scalable, and innovative mobile apps for health, vehicle, life, and business insurance.",
      "url": "https://www.comfygen.com/insurance-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/insurance-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Custom Insurance App Development",
        "Health Insurance App Development",
        "Vehicle Insurance App Development Solution",
        "Auto Insurance App Development Solution",
        "Life Insurance App Development",
        "Business Insurance App Development",
        "Travel Insurance App Development",
        "Property Insurance App Development",
        "Car Insurance App Development",
        "AI-based Insurance App Development",
        "Blockchain-based Insurance App Development"

      ],

      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://www.linkedin.com/company/comfygen-private-limited"
      ]

    },
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Private Limited",
      "Name": "Insurance App Development Services",
      "image": "Hero section image",
      "description": "Comfygen offers top-tier insurance app development services for health, auto, life, and business sectors. Build secure, scalable, and AI-integrated mobile insurance apps tailored to your business needs.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "829"
      }

    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com/"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Insurance App Development Company",
        "item": "https://www.comfygen.com/insurance-app-development"
      }]
    }



  ];

  return (
    <>
      <Head>
        <title>Insurance Mobile App Development Company | Comfygen</title>

        <meta
          name="description"
          content="Comfygen is a leading insurance mobile app development company delivering AI-powered underwriting, blockchain claims, and on-demand digital insurance apps."
        />
        <meta
          name="keywords"
          content="Custom Insurance App Development, Health Insurance App Development, Vehicle Insurance App Development Solution, Auto Insurance App Development Solution, Life Insurance App Development, Business Insurance App Development, Travel Insurance App Development, Property Insurance App Development, Car Insurance App Development, AI-based Insurance App Development, Blockchain-based Insurance App Development"
        />
        <link rel="canonical" href="https://www.comfygen.com/insurance-app-development" />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen Insurance App" />
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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <meta property="og:title" content="Top Insurance App Development Company – Custom InsurTech Solutions" />
        <meta
          property="og:description"
          content="Comfygen is a leading insurance mobile app development company delivering custom, AI-powered InsurTech solutions. We build secure, scalable, and compliant insurance apps for brokers, startups, and enterprises."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Insurance App Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/insurance-app-development" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:title" content="Top Insurance App Development Company – Custom InsurTech Solutions" />
        <meta
          name="twitter:description"
          content="Comfygen is a leading insurance mobile app development company delivering custom, AI-powered InsurTech solutions. We build secure, scalable, and compliant insurance apps for brokers, startups, and enterprises."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-og.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </Head>


      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Insurance Mobile App Development Company"
          ptag="Comfygen is a top-ranking insurance Mobile application development Company that assists in realizing your insurance ideas. We provide secure, easy-to-use, and non-compliant insurance mobile application development services to startups, brokers, and enterprises. We also provide solutions to address your business requirements, such as claims management, policy tracking, and customer engagement, and make sure that the experience of your users is flawless."
          li="Custom Insurance App Development for Startups, Brokers & Enterprises"
          li1="Secure, Compliant & Scalable Architecture"
          li2="Advanced Features for Claims, Policy & Customer Management"
          li3="AI-Powered Automation for Better Efficiency & User Experience"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-devlopment-hero.webp"
        />

        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our Insurance Mobile App Development Services</h2>
              <p className="text-base text-center font-normal">Creating an insurance mobile app that can be trusted requires more than forms and payment screens. You require a steady and reliable journey allowing you to make life easier to the customers and retain your internal team. Comfygen being a leading insurance Mobile app development Company offers precisely the same with its end to end insurance mobile app development services.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Invest in Insurance App Development?"
          description1="The global insurance market is experiencing rapid growth and is projected to reach $10–12 billion by 2027, driven by increasing digital adoption, smartphone penetration, and the growing demand for online insurance app development services. Mobile apps are transforming the way customers purchase, manage, and claim insurance policies, making interactions faster, simpler, and more transparent."
          description2="The shift toward digital-first solutions presents immense opportunities for insurers:"
          description3=""
          points={[
            "<b>Digital-first customers</b>: Over 60% of users now prefer managing their insurance policies through insurance mobile apps, emphasizing the need for convenient, on-the-go access.",
            "<b>Embedded insurance growth</b>: Integration with e-commerce, travel, and fintech platforms is creating new revenue streams and expanding market reach.",
            "<b>Operational efficiency</b>:  Insurance mobile apps streamline processes, reduce manual tasks, and accelerate claims handling, improving both efficiency and customer satisfaction"
           
          ]}

          imageSrc="https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-devlopment-about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Insurance Mobile App Development Portfolio"
            description="We are a top insurance mobile app development firm that deals with development of advanced insurance apps to facilitate easy operations, improve customer experience and propel business. The following is a demonstration of our new projects and our experience in various insurance industries and technologies."
          />
        </section>

        <div className="py-8">
          <CardFeatures
            heading="Advanced Features of Insurance Mobile App Development"
            description="Comfygen is a leading insurance Mobile app development Company specializing in creating feature-rich insurance apps. Our solutions include user-friendly and transparent panels for customers, along with high-performance admin panels that provide complete control, advanced analytics, and automation to streamline your insurance business operations."
            featuresData={JSON_DATA.featuresData1}
            grid={2} />
        </div>


        <CallToAction
          heading="Transform Your Insurance Business with Comfygen"
          text="Partner with Comfygen to get a secure, scalable, and user-friendly insurance app for iOS, Android, and web. Our expert developers deliver solutions tailored to your business goals."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now." />

        <div className="py-8">
          <Features
            heading="We Develop Insurance Apps with Advanced Panel Features"
            description="At Comfygen, we are a leading insurance mobile app development company, creating feature-rich apps with intuitive dashboards for users and administrators. Our apps streamline policy management, claims processing, and customer engagement, while ensuring security, scalability, and ease of use."
            featuresData={JSON_DATA.featuresData}
            grid={2} />
        </div>


        <IndustriesServe
          heading="Industries We Serve As Best Insurance App Development Company"
          description="Comfygen provides Insurance mobile app development solutions across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success."

        />


        <SolutionSec
          heading="A Variety of Insurance Application Development Solutions for Every Industry"
          subheading="The insurance mobile application we create at Comfygen is customised to meet the requirements of every industry and customer. We can help you better serve your clients in the following ways:"
          techData={technologyData} />

        <TrendsSection
          heading="The Emerging Technologies We Use For Insurance Mobile App Development"
          subtitle="At Comfygen, we harness the power of advanced technologies to deliver insurance app solutions that drive success. By integrating the latest innovations such as AI, Blockchain, Cloud Computing, and Big Data, we provide scalable, secure, and user-centric insurance applications that streamline operations, enhance customer experiences, and ensure business growth."
          trends={JSON_DATA.Emerging}
        />


        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our End-to-End insurance mobile App development process</h2>
              <p className="text-base font-normal mt-2">
                Our insurance mobile app development services follow a structured and transparent approach to ensure that we develop secure, scalable, and user-centric insurance apps. Using cutting-edge technologies and industry best practices, we provide innovative digital insurance solutions that meet regulatory standards.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>



        <TechStack
          title="Technologies We Use in Insurance Application Development"
          description="At Comfygen, we utilize an advanced and robust technology stack to deliver cutting-edge insurance application development solutions."
          filterCategory={["crypto"]}
        />

        
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <div className="py-5">
          <ClientStories />
        </div>

        <HireDeveloper
          heading="Hire Expert Insurance App Developers"
          text="At Comfygen, we are a leading insurance mobile app development company dedicated to delivering secure, scalable, and intuitive applications across iOS, Android, and web platforms. Our team of certified developers specializes in building solutions tailored to meet your business objectives while ensuring a seamless user experience."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Certified and Experienced Developers",
            "Flexible Hiring Models",
            "Custom Solutions Aligned with Your Business Goals",
            "Cutting-Edge Technologies Integration",
            "End-to-End Development and Support"
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Insurance App Development" />
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