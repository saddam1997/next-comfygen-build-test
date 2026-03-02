import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchain.json";

import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import Milestones from "../../components/Newcomponet/comman/Milestones";


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const BlockchainIcon = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlockchainIcon"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
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

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);


const GuidSectionBlockchain = dynamic(
  () => import("./components/GuidSectionBlockchain"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





















export default function Blockchain(props) {
  let { initialData } = props;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  return (
    <div className="overflow-hidden">
      <Head>
        <title>
          Blockchain App Development Company | Custom dApp Solutions
        </title>
        <meta
          name="description"
          content="As  a leading blockchain app development company to build secure, scalable, and high-performance dApps, smart contracts, and enterprise blockchain solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/blockchain-development"
        />
        <meta
          name="keywords"
          content="blockchain development company, blockchain development services, blockchain app development services, blockchain development solutions, blockchain development service, blockchain software development company, blockchain software development services, custom blockchain development company, blockchain development services company"
        />



        <meta
          property="og:title"
          content="Blockchain Development Company | Blockchain App Development"
        />
        <meta
          property="og:description"
          content="Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/blockchain-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Best Blockchain Development Company in India"
        />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="fb:page_id" content="110909321596135" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="twitter:title"
          content="Blockchain Development Company | Blockchain App Development"
        />
        <meta
          name="twitter:description"
          content="Explore leading blockchain development services tailored to your business goals. Get expert solutions from a trusted blockchain development company."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/blockchain-development-new/blockchain-development.webp"
        />




        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA.jsonLdData),
          }}
        />



      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Best Blockchain App Development Company In India and USA"
          subhead='Looking for a blockchain app development service?'
          ptag="Comfygen is the best blockchain app development company in Jaipur, India, delivering secure, scalable, and production-ready decentralized solutions for startups to enterprises. Our expert blockchain developers in India build customized applications that enhance transparency, automate operations, and ensure advanced data security using cutting-edge blockchain technologies."
          ptag1='We offer end-to-end blockchain development services in the USA, the Middle East, Africa, and India, from ideation and architecture to deployment and maintenance, ensuring every blockchain app solution aligns perfectly with your business goals.'
          li='Blockchain with real impact'
          li1='Blockchain built for ROI'
          li2='Enterprise-ready blockchain'
          li3='Business-first blockchain'
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/blockchain-development-new/hero.webp"
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">India's Blockchain App Development Services Provider
              </h2>
              <p className="text-base text-center font-normal">AAt Comfygen, we are a trusted blockchain development service provider delivering end-to-end blockchain development services that empower SME, enterprises, and startup innovators to build secure, scalable, and decentralized digital ecosystems.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title=""
          heading="Blockchain App Development Expertise"
          description1="At Comfygen, we focus on solving real business challenges through custom blockchain Development solutions and services that improve transparency, strengthen data security, and automate complex processes. As a trusted blockchain app development company in India, we help startups and enterprises confidently adopt decentralized technologies that deliver measurable business value."
          description2="Our clients work with certified <a href='https://www.comfygen.com/hire-blockchain-developer' class='text-blue-600 font-semibold'>blockchain developers</a> and experienced solution architects who take the time to understand your goals, compliance needs, and scalability requirements before designing the right blockchain architecture. Every solution we build is secure, scalable, and aligned with your long-term growth strategy."
          description3="We help businesses launch and scale smart contracts, tokenization platforms, DeFi applications, NFT marketplaces, and blockchain wallets—ensuring faster time-to-market, reduced operational risk, and future-ready performance. From consulting and development to deployment and ongoing support, we provide end-to-end blockchain services that keep your business in control at every stage."
          imageSrc="https://www.comfygen.com/gallery/about-images/blockchain-development-about-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <CallToAction
          heading="Build a Future-Ready Blockchain Application"
          text="Take your business to the next level with secure, scalable, and high-performance blockchain app development solutions."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Customized Blockchain Solutions to Drive Business Excellence
                </h2>
                <p>
                  Explore our suite of cutting-edge blockchain App development solutions and services crafted to accelerate digital transformation, enhance trust, and unlock new revenue streams. At Comfygen, we tailor blockchain tech innovations that align with your unique industry needs and future goals.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {JSON_DATA?.LeadingSoftware.map((elem, index) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={index} className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
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

        {/* <ContactFromCenter /> */}

        <BlockchainIcon
          heading="Scalable Blockchain Development Services Across Leading Platforms"
          desc="At Comfygen, we help businesses build blockchain applications on the most suitable blockchain app development platforms to match their goals, industry needs, and growth plans. Our expert blockchain app development team designs secure, scalable, and customized blockchain app development solutions that reduce operational risk, improve transparency, and accelerate time-to-market. From DeFi products to enterprise-grade systems, we transform your ideas into production-ready blockchain applications that deliver long-term value and support sustainable business growth."
          cards={JSON_DATA.Blockchaincards}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/exclusive-features-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our End-to-End Blockchain App Development Service Process</h2>
              <p className="text-base font-normal mt-2">
                At Comfygen, we follow a transparent and agile blockchain app development process that keeps you informed and in control at every stage. We work closely with you to understand your vision, reduce risks early, and deliver a secure, high-performance blockchain development solution that aligns with your business goals—ensuring faster delivery, flexibility, and long-term success.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Blockchain App Development Portfolio"
            description="Explore our blockchain application development portfolio and see how we turn ideas into secure, powerful, and easy-to-use blockchain solutions. Each project shows our strong technical skills, creative thinking, and commitment to delivering real results for our clients."
          />
        </section>



        <IndustriesServe
          heading="Our Blockchain Development Services for Diverse Industries"
          description="At Comfygen, we provide cutting-edge blockchain development services designed to transform industries across the globe. With a focus on innovation, security, and scalability, our blockchain solutions cater to diverse sectors, offering a tailored approach that meets the unique demands of each industry. From financial services to healthcare, supply chain, gaming, and beyond, our blockchain applications streamline operations, reduce costs, and enhance transparency."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <TechStack
          title="Development Technologies We Use"
          description="We use cutting-edge technologies for blockchain solution development. There is no scope we leave building the best blockchain applications."
        />

        <HireDeveloper
          heading="Hire Blockchain Developers In Jaipur, India"
          text="When you hire blockchain developers in Jaipur, India from Comfygen, you gain a dedicated and expert end-to-end team like designers, blockchain developers, counselor, tester etc. that focuses on solving your business challenges—not just writing code. Our certified blockchain experts work closely with you to design and build secure, scalable, and custom blockchain solutions that support your growth, reduce operational risk, and give you a competitive edge.
From smart contracts and dApp development to enterprise blockchain integration, we ensure faster time-to-market, transparent collaboration, and solutions that align with your business goals—today and in the future."
          text1="<b>Why Clients Choose Our Blockchain Developers In India</b>"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "<b>Tailored Solutions</b> : Blockchain architectures designed around your business model and scalability needs",
            "<b>Cutting-Edge Technology</b> : Expertise in DeFi, NFTs, and cross-chain solutions for future-ready products",
            "<b>Enhanced Security</b>: Secure coding practices, audits, and compliance-focused development",
            "<b>Agile Execution</b>: Faster delivery through iterative development and continuous feedback",
            "<b>Comprehensive Support</b>: End-to-end assistance from planning and development to deployment and maintenance",
          ]}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientTestimonials
          testimonials={JSON_DATA.testimonialData}
          heading="What Our Clients Say"
        />

        <GuidSectionBlockchain />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
        />

        <BlogSection initialData={initialData} />
      </div>
    </div>
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

