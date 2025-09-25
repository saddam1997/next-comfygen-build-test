import Image from "next/image";
import "aos/dist/aos.css";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/healthCare.json";
import LazyLoad from "react-lazy-load";
import ServiceBenefit from "./components/ServiceBenifit";
import { FaDotCircle } from "react-icons/fa";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import SolutionSec from "../components/SolutionSec";
import { IconApps, IconCode, IconFirstAidKit, IconMessage, IconNews, } from '@tabler/icons-react';
import { IconCashBanknote, IconShoppingCart, IconTools, IconTicket, IconChartBar, IconHeart, IconShield, } from '@tabler/icons-react';
import PortfolioSec from "../components/PortfolioSec";
import ProcessSec from "../components/ProcessSec";

const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), { loading: () => <p>Loading...</p>, });
const FaQ = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Best Healthcare App development company | Comfygen",
  url: "https://www.comfygen.com/healthcare-app-development",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen - Best Healthcare App Development Service Provider",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const productSchema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Healthcare Mobile App Development Company - Medical Health App Development Service",
  image:
    "https://www.comfygen.com/img/we-are-the-healthcare-app-development-service-providers-evolving-healthcare-industry.webp",
  description:
    "Comfygen is a Leading custom healthcare app development company in India & the USA- Innovating digital health app development solutions for better patient care. Contact us for Hire top-notch healthcare app developers to reach your business goals faster.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1125",
  },
};

const areaServed = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  legalName: "Comfygen Pvt. Ltd.",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Saddam Husen",
    },
    {
      "@type": "Person",
      name: "Saddam Husen",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
    addressLocality: "Vaishali Nagar",
    addressRegion: "Jaipur, Rajasthan, India",
    postalCode: "302021",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+91 9587867258",
    email: "sales@comfygen.com",
  },
  areaServed: ["US", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "IN", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150",],
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};

const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "EMR/EHR Systems",
    desc: "The Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) solutions enable healthcare professionals to securely keep the records of patients' medical grounds. It enables tracking their health and improves caring."
  },
  {
    img: <IconCashBanknote stroke={1.5} className="w-12 h-12" />,
    title: "Healthcare CRM Software Solutions",
    desc: "Our healthcare CRM portals promote streamlined communications, enhance patient care, and enable personalized experiences. The solution delivers prompt and proficient patient relationships for personalized experiences."
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Wearable App & Software Development",
    desc: "Build apps for wearable devices that monitor health metrics in real-time. Improve patient wellness with data-driven insights for proactive care."
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />,
    title: "Telehealth Platforms",
    desc: "Enable remote consultations and healthcare services through easy-to-use telehealth platforms. Connect doctors and patients from anywhere for accessible and timely care."
  },
  {
    img: <IconMessage stroke={1.5} className="w-12 h-12" />,
    title: "Hospital Management Software",
    desc: "Simplify hospital operations with comprehensive management software. From patient admissions to billing, it streamlines processes and improves efficiency."
  },
  {
    img: <IconShoppingCart stroke={1.5} className="w-12 h-12" />,
    title: "Regulatory Compliance Management Software",
    desc: "Ensure your healthcare organization meets all industry regulations effortlessly. This software helps you stay compliant and avoid legal issues. "
  },
  {
    img: <IconTools stroke={1.5} className="w-12 h-12" />,
    title: "Revenue Cycle Management Software",
    desc: "Optimize your financial processes with revenue cycle management software. It ensures accurate billing, quick payments, and better cash flow."
  },
  {
    img: <IconTicket stroke={1.5} className="w-12 h-12" />,
    title: "Healthcare Analytics Solutions",
    desc: "Use data-driven insights to improve patient outcomes and operational efficiency. Analytics software helps track performance and make informed decisions."
  },
  {
    img: <IconChartBar stroke={1.5} className="w-12 h-12" />,
    title: "Pharmacy Management Software",
    desc: "Manage pharmacy operations with ease using software that tracks inventory, prescriptions, and sales. Improve service and reduce errors."
  },
  {
    img: <IconHeart stroke={1.5} className="w-12 h-12" />,
    title: "Patient Engagement Solution",
    desc: "Enhance patient interaction and engagement through digital tools that provide appointment reminders, health updates, and personalized care plans."
  },
  {
    img: <IconShield stroke={1.5} className="w-12 h-12" />,
    title: "On-Demand Doctor Appointment Booking Apps",
    desc: "Allow patients to book doctor appointments with ease through on-demand apps. These apps simplify scheduling and improve patient satisfaction."
  },
  {
    img: <IconApps stroke={1.5} className="w-12 h-12" />,
    title: "Online Doctor Consultation-Software",
    desc: "Facilitate virtual consultations between doctors and patients with secure, reliable software. It offers convenience and accessibility for everyone."
  },
  {
    img: <IconShield stroke={1.5} className="w-12 h-12" />,
    title: "Laboratory Information Management Software",
    desc: "Streamline lab operations with software that efficiently manages test results, data tracking, and sample processing."
  },
  {
    img: <IconApps stroke={1.5} className="w-12 h-12" />,
    title: "Medical Imaging Software",
    desc: "Improve diagnostic accuracy with software that processes and stores medical images. It enables seamless sharing between healthcare providers for better care."
  }
];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/image/telemedicine.png",
      head: "Telemedicine Platform for Virtual Consultations",
      name: "We developed a comprehensive telemedicine platform, enabling healthcare providers to offer virtual consultations. The software is HIPAA-compliant, and secure, and ensures high-quality video and audio communication between doctors and patients, promoting better healthcare access.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    },
    {
      img: "https://www.comfygen.com/image/Portfolio.png",
      head: "Hospital Management System (HMS) for Streamlined Operations",
      name: "Our Hospital Management System (HMS) is designed to digitize and automate hospital workflows. From patient registration to discharge, the software provides a centralized platform for hospitals to efficiently manage operations and enhance patient care.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    },
    {
      img: "https://www.comfygen.com/image/EHRM.png",
      head: "EHR System for Improved Patient Data Management",
      name: "We created a robust Electronic Health Records (EHR) system that allows healthcare professionals to securely store, retrieve, and update patient information. The system supports compliance with industry standards and helps reduce paperwork, improving clinical efficiency.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    },
    {
      img: "https://www.comfygen.com/image/Portfolio (1).png",
      head: "Mobile Health App for Remote Patient Monitoring",
      name: "Our mobile health app allows patients with chronic conditions to track their health metrics and share data with healthcare providers. The app improves patient engagement and enables real-time monitoring for timely interventions.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    }
    ,
    {
      img: "https://www.comfygen.com/image/Group 10964.png",
      head: "Medical Billing Software for Accurate Claims Processing",
      name: "We developed a specialized medical billing software that simplifies the claims processing workflow for healthcare providers. The software minimizes errors, accelerates reimbursements, and ensures compliance with insurance policies.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    }
  ],
};


export default function Mobile(props) {
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
        <title>Custom Healthcare Software Development Services In India | Comfygen</title>
        <meta name="description" content="Top custom healthcare Software development company in India! Get HIPAA-compliant, scalable solutions with advanced features and seamless UX. Build innovative healthcare apps today!" />
        <link rel="canonical" href="https://www.comfygen.com/healthcare-app-development" />
        <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Optimizing Digital Health Experiences: Comfygen is best Healthcare Mobile App Development Expertise" />
        <meta property="og:facebook_description" content="Comfygen custom healthcare mobile app development expertise focuses on optimizing digital health app development services experiences through advanced mobile app development services, solutions. We leverage technology to bridge the gap between healthcare app development service providers and patients, fostering enhanced communication,data-driven insights, and improved care outcomes." />
        <meta property="og:twitter_title" content="Healthcare Mobile App Development Services Innovation: Hire Top-Notch Healthcare App Developers in the United States at Comfygen" />
        <meta property="og:twitter_description" content="Comfygen empowers healthcare Mobile app development company in India & the USA innovation by offering top-notch healthcare mobile app development services. Our dedicated team of healthcare app developers combines healthcare expertise with technical prowess to build customized mobile app development that align with your business goals, enhancing patient care and operational efficiency." />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        <meta name="abstract" content="Top rated Healthcare App & Software Development Services" />
        <meta name="summary" content="Through our healthcare software development services, we prioritize quality to deliver robust mobile infrastructure tailored for both healthcare providers and patients, ensuring seamless integration and optimal functionality." />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="A Founder is one of the individuals who helped establish a comprehensive Healthcare Mobile Application Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement." />
        <meta name="Best Healthcare Mobile App Development Services" content="Comfygen, a prominent healthcare mobile app development company in India & the USA, is at the forefront of revolutionizing patient care through cutting-edge digital health app development solutions. Our innovative approach enhances patient engagement, streamlines healthcare operations, and delivers superior care experiences." />
        <meta name="category" content="Patient Care: Healthcare Mobile App Development Services, Solutions by Comfygen" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Best hire Healthcare dedicated mobile app developers in India - Best healthcare app developers in the USA, the UK" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="Hire Best Healthcare Mobile Application Programmers India & USA | offshore healthcare software Programmers" />
        <meta name="google-site-verification" content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema), }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServed) }} />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div>
          <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/healthcare-software-development-company-hero-img.webp')]">
            <HeroSectionForAllPages
              heading="Healthcare Software Development Company"
              ptag="We are known for providing top-rated healthcare software development services for startups and enterprises. Our healthcare software solutions are secure and compliance-friendly making it robust and streamlining operations throughout the healthcare organizations. We build custom mhealth apps focused on delivering excellent patient care experiences, meeting all the ever-changing industrial standards."
              li="Decade of Experienced Developers"
              li1="100% Security with No Data Breach"
              li2="Regulatory Compliance Integrated "
              li3="Future-Ready Healthcare Software Solutions"
              btnName="Talk With Expert"
              btnLink="/contact-us"
              openModal={openModal}
              talkToExpertModal={talkToExpertModal}
              setTalkToExpertModal={setTalkToExpertModal}
              closeModal={closeModal}
            />
          </div>
        </div>
        <AboutSection
          title="About Company"
          heading="Why Comfygen For Your Every Custom Healthcare Software Development Services?"
          description1="Comfygen is one top-leading healthcare software development companies that has built several mHealth apps, telemedicine apps, and other healthcare integration software. We have highly knowledgeable and experienced healthcare developers who understand the current industry needs and build unique healthcare software solutions that cater to seamless patient experiences and bring operational efficiency. Our solutions drive automation in the organization and enable patients to connect with healthcare services in real time."
          description2="We are using leading technologies, futuristic approaches, agile methodologies, and advanced techs to build innovative healthcare software tailored to the needs of clients and their business goals. Our promising solutions always satisfy the healthcare organizations' and patients' expectations."
          imageSrc="https://www.comfygen.com/image/why-comfygen-for-healthcare-software-development-services.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Healthcare Software Development Services</h2>
              <p className="text-base text-center font-normal">Our experience and advanced practices made us the master in providing simpler, complex custom healthcare software development services. The company focuses on building complex and intuitive medical software that enhances medical outcomes. Know our extensive range of mHealth development services.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <SolutionSec
          heading="Wide-Array of Healthcare Software Solutions We Build"
          subheading="Our development services include diverse medical software solutions built with cutting-edge technologies and futuristic parameters. These developed healthcare solutions deliver promising engagement and management following industrial needs."
          techData={technologyData} />
        <section className="benefit mb-2">
          <section className=" text-white lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="titleRow mb-10">
                <div className="menus-block my-auto">
                  <h2 className="xl:text-4xl text-3xl  text-center font-bold">Services Benefitted with Our Healthcare Software Development </h2>
                  <p className="text-lg text-center font-normal pt-4">Industries and businesses are leveraging streamlined operations and personalized patient experiences. Know the diverse segments where our solutions doing wonders in management.</p>
                </div>
              </div>
              <ServiceBenefit />
            </div>
          </section>
        </section>
        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Portfolio"
          description="Explore our selection of accomplished projects that highlight our proficiency in online solutions and app development. Every project demonstrates our dedication to excellence, creativity, and client fulfilment."
        />
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Smart Healthcare Software Solutions with Future-Driven Technologies
                </h2>
                <p>Step ahead in the future of healthcare using cutting-edge technologies and advanced techs that deliver interactive patient experiences.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.FutureDriven.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-[40px]">
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                      <p className=" text-base font-normal mt-2">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Working Process</h2>
              <p className="text-base font-normal mt-2">
                Using the agile healthcare software development process; we create intuitive mHealth software solutions to improve scalability in your organizations.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>
        <div className="bg-center bg-repeat bg-fixed" style={{ backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")` }}>
          <div className=" bg-gradient-to-r from-[#272868]/90 to-[#5556D1]/90">
            <section className="items-center py-20  space-y-10  md:flex md:space-x-10 md:space-y-0 mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div className="flex flex-col space-y-2">
                    <h2 className="py-2 lg:py-4 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#fff]">
                      Our Secured and Compliance-Friendly mHealth Applications Meeting Industry Standards{" "}
                    </h2>
                    <p className="text-base text-white">From designing the prototypes to building custom healthcare software solutions that are aligned with all necessary regulatory compliances. We are focused on fostering intuitive interfaces for healthcare professionals and patients.</p>
                    <Image
                      className="rounded-lg"
                      alt="Our Secured and Compliance-Friendly mHealth Applications Meeting Industry Standards"
                      src="https://www.comfygen.com/images/our-secured-and-compliance-friendly.webp"
                      width={640}
                      height={360}
                    />
                  </div>
                  <div className="grid gap-4 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[600px] overflow-auto head-scroll">
                    {JSON_DATA.WhyChoosed.map((elem) => {
                      const { num } = elem;
                      return (
                        <div key={num} className="group  pb-6 space-y-4 transition-all duration-200">
                          <div className="flex gap-2">
                            <span><FaDotCircle color="#FFF" /></span>
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
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <FaQ faqData={Frequently} title="" />
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
