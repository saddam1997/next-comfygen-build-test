import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";


import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const CardGrid = dynamic(() => import("../../components/CardGrid"), {
  ssr: true
});

const Features = dynamic(() => import("../../components/Features"), {
  ssr: true,
});

const CardFeatures = dynamic(() => import("../../components/CardFeatures"),
  { ssr: true }
);

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
});

const AppCard = dynamic(() => import("../../components/AppCard"), {
  ssr: true,
});

const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

import TechStacks from "../../components/TechStacks";

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});


import Trending from "../../components/Trending";

const BusinessSolustion = dynamic(() => import("../../components/Newcomponet/SectionCompoent/BusinessSolustion"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});































































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
import IndustryGrid from "../../components/IndustryGrid";

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

// const CardFeatures = dynamic(() => import("../../components/Newcomponet/comman/CardFeatures"),
//   { loading: loader, ssr: true }
// );

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



// const Features = dynamic(
//   () => import("../../components/Newcomponet/SectionCompoent/Features"),
//   { loading: loader, ssr: true }
// );

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




const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
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



  return (
    <>
      <Head>
        <title>Comfygen custom Insurance Mobile App Development Company</title>

        <meta
          name="description"
          content="Build secure and scalable insurance apps with the best insurance mobile app development company. We develop custom insurtech apps with claims management, policy tracking, and seamless user experience."
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
           dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
         />
      </Head>


      <div className="min-h-[60px] md:min-h-[70px]">
         {/* <Navbar /> */}
      </div>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CardFeatures featuresData={JSON_DATA?.featuresData3} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.FeaturesData} />
      <IndustryGrid />
      <Solution techData={JSON_DATA.Trading} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />


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