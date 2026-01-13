import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nextjs.json";
import {
  IconDeviceMobile,
  IconShieldCheck,
  IconRocket,
  IconSpeedboat,
  IconHeadset,
  IconDirectionArrows
} from "@tabler/icons-react";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../components/Newcomponet/comman/Milestones";


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const NewSection = dynamic(
  () => import("../../components/Newcomponet/comman/NewSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoosee = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import NewSection from "../Newcomponet/comman/NewSection"
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import SolutionSec from "../Newcomponet/SectionCompoent/Solution";
// import ModelsSec from "../Newcomponet/SectionCompoent/ModelsSec";
// import InfoSection from "../Newcomponet/SectionCompoent/InfoSection";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import WhyChoosee from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import Faq from "../Newcomponet/SectionCompoent/Faq"




const technologyData = [
  {
    img: <IconDeviceMobile stroke={1.5} className="w-12 h-12" />,
    title: "Apps that are adaptable and responsive",
    desc: "It is possible to run Next Js applications on any device and view them on any screen"
  },
  {
    img: <IconShieldCheck stroke={1.5} className="w-12 h-12" />,
    title: "Security of data",
    desc: "Data, dependencies, users, and other sensitive information are not directly accessible by static web apps."
  },
  {
    img: <IconRocket stroke={1.5} className="w-12 h-12" />,
    title: "Launching faster",
    desc: "MVPs can be developed more quickly with NextJS` predesigned components."
  },
  {
    img: <IconDirectionArrows stroke={1.5} className="w-12 h-12" />,
    title: "Channels of distribution",
    desc: "Apps built with NextJS facilitate multi-channel sales of your products and services."
  },
  {
    img: <IconSpeedboat stroke={1.5} className="w-12 h-12" />,
    title: "Page loading is faster",
    desc: "Improved performance of static websites enhances customer engagement."
  },
  {
    img: <IconHeadset stroke={1.5} className="w-12 h-12" />,
    title: "On-demand support",
    desc: "The development and support of Next Js apps can be handled by a Next Js app development agency."
  }
];

export default function Altcoin(props) {
  let { initialData } = props;
  const [currentCount, setCurrentCount] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const settingstwo = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
         Next.js Development Company | Hire Expert Next.js Developers – Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen is a trusted Next.js development company delivering fast, scalable, and SEO-friendly web applications with expert developers and server-side rendering solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/next-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best NextJS Development Company In Jaipur, India | Hire NextJS Developers"
        />
        <meta
          property="og:description"
          content="Hire Best NextJS Development company In Jaipur India. We are providing user friendly website and app in NextJS to boost your sells and services. "
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/next-js-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/next-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name="language" content="en-us" />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/next-js-development-company-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="Next.js Development Company"
                ptag="Build fast, scalable, and SEO-friendly web applications with Comfygen, a trusted Next.js development company. Our experienced Next.js developers leverage server-side rendering and modern JavaScript architecture to deliver high-performance, secure, and business-ready web solutions."
                ptag1='From custom web applications to enterprise-grade platforms, we create Next.js solutions with seamless navigation, optimized performance, and future-ready scalability to help your business grow.'
                li="High-Performance Server-Rendered Applications"
                li1="Custom Next.js Web & App Development"
                li2="SEO-Optimized, User-Friendly Interfaces"
                li3="Expert Next.js Developers for Scalable Solutions"
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
        <Milestones/>

                <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Next.JS Development Services</h2>
              <p className="text-base text-center font-normal">We offer high-quality development services using Next.js to meet the diverse needs of our clients worldwide. We build high-performance, SEO-friendly, and scalable web applications.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        {/* <NewSection NewSection={JSON_DATA.NewSections} /> */}
        <AboutSection
          title="About Company"
          heading="Next.JS Development Services in India"
          description1="Comfygen provides fast and scalable server-side application development services using Next.js, one of the fastest JavaScript frameworks. Using Next.js, our developers build applications that are feature-rich, high-speed, and customized for your business. The main goal of our company is to create interactive, innovative, and bespoke applications for your business. The entire development process at Comfygen is designed to be smooth, high-performing, and scalable. Hot reloading, reusable elements, pre-rendering, and other features of Next.js are utilized. Get a robust business solution for your business with Comfygen's Next.js development service. Comfygen offers a variety of engagement models depending on your budget and requirements. You can get the best solutions from us irrespective of the domain or industry you're in."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}

        <SolutionSec
          heading="Our Top Next.JS Development Services"
          subheading="By creating a tailored user experience focused on targeted users, Next JS increases conversion rates and enhances sales. In addition, it has other advantages."
          techData={technologyData}
        />

        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <InfoSection
          heading="Next.js Software Development"
          description1="Bringing your vision to life with our expertise We at Comfortygen focus on satisfying our clients at every step of the process while delivering more than their expectations. Using the latest technology, we develop and deploy web services, always focusing on the big picture!"
          description2=''
          description3=''
          dec=''
          points={[]}
          imageSrc="https://www.comfygen.com/img/next.js-software-development.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <HireDeveloper
          heading="Hire Next.JS Developers"
          text="Next.js is one of the most popular frameworks for building high-performance web applications, thanks to its speed and scalability. Many companies prefer it for backend development to create outstanding applications. Hiring expert Next.js developers can cost between $22 and $80 per hour, with annual salaries ranging from $31,680 to $150,000, depending on experience and location. These professionals require skills in React.js, server-side rendering (SSR), API integration, and advanced JavaScript. Understanding these factors helps businesses make informed decisions when hiring remote Next.js developers for their projects."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Thinking like a designer.",
            "JavaScript proficiency is required",
            "Expertise in Next.js.",
            "Understanding mobile and web delivery platforms is essential."
          ]}
        />
        <WhyChoosee
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Next.js Development"
        />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}

