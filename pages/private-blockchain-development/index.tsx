import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchainconsulting.json";

import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import Milestones from "../../components/Newcomponet/comman/Milestones";


const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CoreFeatureBlockchain = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CoreFeatureBlockchain"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const BenifitBlockchain = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BenifitBlockchain"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const IndustriesBlockchain = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesBlockchain"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





export default function Page(props:any) {
  let { initialData } = props;
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
        <title>Trusted Private Blockchain Development Company | Enterprise Solutions</title>
        <meta
          name="description"
          content="Comfygen is a best private blockchain development company delivering secure, scalable permissioned blockchain solutions using Hyperledger, Quorum, and Corda."
        />
        <meta
          name="keywords"
          content="private blockchain development company, private blockchain development, private blockchain developers for hire, private blockchain app development, blockchain development company, types of private blockchain, private blockchain application development company"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/private-blockchain-development"
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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Private Blockchain Development Company | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Launch your app under your brand with Comfygen Technologie's expert private blockchain development services—fast, flexible, and ready-to-market solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/private-blockchain-development/private-blockchain-development.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/private-blockchain-development/private-blockchain-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/private-blockchain-development/private-blockchain-development.webp"
        />
        <meta
          property="og:image:alt"
          content="Top White Label Mobile App Development | Comfygen Technologies"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/private-blockchain-development"
        />
        <meta
          property="og:title"
          content="Private Blockchain Development Company"
        />
        <meta
          property="og:description"
          content="Launch your app under your brand with Comfygen's expert Private Blockchain Development services—fast, flexible, and ready-to-market solutions."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA.jsonLdData),
          }}
        />
      </Head>
      <div className="">
        <BlockChainHeader />
      </div>
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Private Blockchain Development Company for Secure Enterprise Solutions"
          subhead='Secure, Scalable & Permissioned Blockchain Solutions for Enterprises'
          ptag="Build secure blockchain networks with our private blockchain development services. At Comfygen, we help enterprises, startups, and organizations create custom private blockchain solutions that make sure data privacy, faster transactions, and controlled access. Our expert private blockchain developers design permissioned blockchain networks that integrate seamlessly with your existing business systems while maintaining transparency, security, and operational efficiency."
          li="Secure permissioned blockchain network development"
          li1="Enterprise-grade private blockchain solutions"
          li2="Fully custom private blockchain development"
          li3="Seamless integration with enterprise systems"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/private-blockchain-development/hero.webp"
        />
        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Explore Our Specialized Private Blockchain Development Services
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we deliver secure, permissioned blockchain
                solutions tailored to enterprise needs. As a trusted private
                blockchain development company, we specialize in smart
                contracts, network architecture, and seamless integration. Our
                expert team helps you build scalable systems using Hyperledger,
                Quorum, or Corda to enhance transparency, security, and business
                efficiency across various industries.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Why Do You Need a Private Blockchain for Your Business?"
          description1="A private blockchain helps your business manage data, permissions, and transactions in a secure, centralized platform. It makes your operations faster, more transparent, and tamper-proof—without exposing sensitive information to the public. Whether you’re an enterprise, government body, or financial institution, this app streamlines workflows and builds trust across your network."
          description2="With real-time access, smart contract automation, and permissioned controls, you can reduce fraud, cut delays, and enhance data integrity like never before."
          description3="Partner with ComfyGen to transform your operations through trusted, enterprise-grade private blockchain development."
          points={[
            "Easily manage access and permissions",
            "Track transactions securely in real time.",
            "Store sensitive data with encryption",
            "Automate processes with smart contracts",
            "Get alerts for changes and validations",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/private-blockchain-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}

        <CoreFeatureBlockchain
          heading="Core Features of Private Blockchain Development That Make It Enterprise -Ready"
          description="Private blockchain development offers the ideal foundation for enterprises seeking secure, scalable, and permissioned blockchain solutions. With fine-tuned access control, high performance, and built-in compliance, these features empower businesses to maintain trust, integrity, and efficiency across critical operations. Explore the key features that make private blockchains a perfect fit for enterprise-grade applications."
          cards={JSON_DATA.privateBlockchainFeatures}
        />
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Step‑by‑Step Private Blockchain Development Process
              </h2>
              <p className="text-base font-normal mt-2"></p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>
        <BenifitBlockchain
          heading="Key Benefits of Private Blockchain Development for Enterprises"
          description=""
          cards={JSON_DATA.benefitCards}
        />

        <TechStack
          customTechData={JSON_DATA.defaultTechData}
          title="Technology Stack and Platforms We Use for Private Blockchain Development"
          description="As a trusted private blockchain development company, we leverage advanced frameworks, protocols, and tools to build secure, permissioned, and enterprise-grade blockchain solutions. Our technology stack is designed to deliver high performance, scalability, and data integrity—customized to match your unique business goals."
        />


        <IndustriesBlockchain
          heading="Industries We Serve with Private Blockchain Solutions"
          description="With our enterprise-focused approach to private blockchain development, Comfygen Technologies empowers businesses in regulated and data-sensitive sectors to digitize trust, optimize workflows, and enable secure collaboration across multiple stakeholders. Whether it's financial transparency, healthcare compliance, or supply chain traceability, our solutions are designed for scalability, privacy, and governance."
          cards={JSON_DATA.IndustriesData}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Private Blockchain Developers for Scalable & Secure Enterprise Solutions"
          text="Looking to build a secure, permissioned blockchain tailored to your business? Hire private blockchain developers from Comfygen Technologies, a trusted private blockchain development company. Our expert team delivers high-performance, enterprise-grade blockchain solutions designed for confidentiality, compliance, and scalability."
          text1="Whether you're in finance, healthcare, logistics, or government, our blockchain specialists understand your industry's pain points and create secure architectures using frameworks like Hyperledger Fabric, Quorum, and Corda."
          text2="We don’t just write code—we create real-world impact through customized, future-ready blockchain solutions."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced Blockchain Developers in India",
            "Custom Private Blockchain App Development",
            "End-to-End Blockchain Development Services",
            "Smart Contract Development for Business Automation",
            "Private Blockchain Consultation",
            "Hire Expert Private Blockchain Developer",
          ]}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions (FAQs)"
        />
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