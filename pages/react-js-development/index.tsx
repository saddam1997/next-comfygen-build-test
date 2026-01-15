import React, { useRef, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/reactjs.json";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"

import dynamic from "next/dynamic";

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
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

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import SolutionSec from "../Newcomponet/SectionCompoent/Solution";
// import IndustriesServe from "../Newcomponet/SectionCompoent/IndustriesServe";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import Faq from "../Newcomponet/SectionCompoent/Faq";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";




import { IconCode, IconFileText, IconFolderOpen, IconRecycle, IconRosetteDiscountCheck, IconUsers, } from '@tabler/icons-react';
import Milestones from "../../components/Newcomponet/comman/Milestones";


const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Develop Complex Advanced Mobile Applications",
    desc: "React Native empowers developers to build complex advanced mobile applications with ease. Its modular architecture and robust framework ensure scalability and performance, allowing apps to handle intricate functionalities effortlessly. Whether for startups or enterprises, React Native delivers advanced features and user experiences across multiple platforms efficiently."
  },
  {
    img: <IconFolderOpen stroke={1.5} className="w-12 h-12" />,
    title: "React Native is Open Source",
    desc: "Being open-source, React Native fosters innovation and collaboration. Mobile App developers worldwide contribute to its extensive library, ensuring constant improvement and support. This open ecosystem accelerates development, reduces costs, and provides access to reliable tools and pre-built components for crafting high-quality applications that meet diverse business needs."
  },
  {
    img: <IconRecycle stroke={1.5} className="w-12 h-12" />,
    title: "Reusable Code",
    desc: "With React Native, developers can use reusable code across platforms, significantly speeding up development and reducing effort. A single codebase eliminates redundancy, simplifies maintenance, and ensures consistent performance on both iOS and Android, making it an ideal choice for efficient and scalable app development."
  },
  {
    img: <IconUsers stroke={1.5} className="w-12 h-12" />,
    title: "Powerful User Interface",
    desc: "React Native delivers a powerful user interface with smooth interactions and a native-like experience. Its pre-built components and flexibility in customization ensure apps are visually appealing and highly functional, offering users an intuitive and engaging experience that enhances satisfaction and retention."
  },
  {
    img: <IconRosetteDiscountCheck stroke={1.5} className="w-12 h-12" />,
    title: "Cost-Efficiency",
    desc: "React Native’s cross-platform development approach boosts cost efficiency by reducing the need for separate iOS and Android teams. Businesses can save time and resources while delivering high-quality apps, making it a perfect solution for startups and enterprises aiming to optimize their budget without compromising on performance."
  },
  {
    img: <IconFileText stroke={1.5} className="w-12 h-12" />,
    title: "Combine it with Native Code",
    desc: "React Native allows seamless integration with native code, enabling developers to combine its flexibility with the robustness of native features. This hybrid approach ensures access to device-specific functionalities, enhances performance, and enables the development of sophisticated, high-performance apps tailored to unique business requirements."
  },
];
const Process = [
  {
    title: "Ideation & Research",
    description: "We start by understanding your business objectives, audience, and market landscape. This phase includes brainstorming, validating ideas, and conducting competitor analysis to set a strong foundation for your app's success."
  },
  {
    title: "Design",
    description: "Our UI/UX designers focus on creating visually stunning and intuitive designs that align with your brand identity. Every interface is crafted to ensure user engagement and a seamless navigation experience."
  },
  {
    title: "Prototyping",
    description: "Through interactive prototypes, we bring your app idea to life, demonstrating its functionality and user flow. This stage provides a clear visualization of your app’s structure, allowing refinements before development begins."
  },
  {
    title: "Development",
    description: "Harnessing the power of React Native, we develop robust and cross-platform applications. Our developers ensure that the code is responsive, secure, and optimized to deliver exceptional performance across iOS and Android devices."
  },
  {
    title: "Testing",
    description: "We conduct thorough testing to eliminate bugs and ensure your app functions flawlessly. Our quality assurance process guarantees compatibility across devices and operating systems, offering a reliable and smooth user experience."
  },
  {
    title: "Deployment",
    description: "After final approval, we launch your app on platforms like the Apple App Store and Google Play Store. Our team ensures a hassle-free deployment process, optimizing for maximum reach and visibility."
  },
  {
    title: "Support & Maintenance",
    description: "Post-launch, we provide ongoing support and maintenance to keep your app updated and secure. From performance monitoring to introducing new features, we ensure your app evolves with your business needs."
  },

];



export default function ReactJS(props) {
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
         Top React Native App Development Company in Jaipur, India | Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen is a leading React Native app development company in Jaipur, India, delivering scalable iOS and Android apps with expert developers, agile process, and cost-effective solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/react-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best React Native APP Development Company in Jaipur, India"
        />
        <meta
          property="og:description"
          content="Comfygen is a top React Native app development company in Jaipur, India, specializing in building business apps for startups. Hire expert developers for global success"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/react-js-development"
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
          content="https://www.comfygen.com/images/react-js-development"
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
            <div className="">
              <HeroSectionForAllPages
                heading="Top React Native App Development Company"
                ptag="Build high-performance, scalable mobile applications with Comfygen, a trusted React Native app development company in Jaipur, India. Our expert React Native developers create secure, cross-platform iOS and Android apps using a single codebase—helping you reduce development time, control costs, and launch faster."
                ptag1='From startups to enterprises, we deliver custom React Native solutions with smooth UI, seamless API integration, and future-ready architecture tailored to your business goals.'
                li="Cross-Platform iOS & Android App Development"
                li1="10+ Years of React Native Expertise"
                li2="Scalable, Secure & High-Performance Apps"
                li3="Agile, Transparent Development Process"
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
                bgImage="https://www.comfygen.com/herosection/react-js-development-company-hero-img.webp"
              />
            </div>
          </div>
        </div>
        <Milestones />


        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our React Native Development Services</h2>
              <p className="text-base text-center font-normal">We provide the Best React Native app development services in India centered around your requirements, augmented by our expertise. Our React Native app development experts are skilled in the nuances of React Native and adept at delivering React Native app development projects on time without compromising on quality.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Best React Native Mobile App Development Company"
          description1="Our company offers scalable and flexible solutions for Android, iOS, Web, and UWP applications through our React Native app development company in Jaipur, India. By combining native development with React, we create cross-platform apps that deliver exceptional user experiences."
          description2="Whether your project involves a news aggregator, ride-sharing service, or any other mobile app, React Native allows us to create customized solutions that boost user engagement and market your product more efficiently. Experience the future of app development with React Native by choosing us for your next mobile app project."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}

        <SolutionSec
          heading="Benefits of React Native App Developmen"
          subheading=""
          techData={technologyData}
        />
        <section className="bg-[#F3F4F6] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our React Native Development Process</h2>
              <p className="text-base font-normal mt-2">
                We follow a streamlined React Native development process to craft high-quality mobile applications tailored to your unique needs. Every stage is designed to ensure seamless performance, innovative features, and a user-centric approach.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <IndustriesServe heading="" description="" />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire a React Native App Developer in India"
          text="Partner with Comfygen to bring your mobile app ideas to life. Our team of skilled React Native mobile app developers crafts high-performing, cross-platform apps that deliver exceptional user experiences. "
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced React Native developers are available for hire",
            "Dynamic mobile apps can be built with the help of well-versed resources",
            "NDA confidentiality is 100% guaranteed",
            "Hire a dedicated React Native developer"
          ]}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="" />
        {/*<BlogSection initialData={initialData} />*/}
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

