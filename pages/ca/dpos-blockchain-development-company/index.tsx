import Image from "next/image";
import React, { useState } from "react";
import { IconCode, IconCoin, IconEscalator, IconEye, IconHierarchy, IconLink, IconPlug, IconSettings, IconShieldCheck, } from '@tabler/icons-react';
import { IconHeart, } from '@tabler/icons-react';
import Head from "next/head";
import JSON_DATA from "./json/dpos.json";
import BlockchainNav from "../../../components/Newcomponet/layout/blockchain-navbar";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

import dynamic from "next/dynamic";
import Milestones from "../../../components/Newcomponet/comman/Milestones";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const InfoSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/InfoSection"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);





// import AboutSection from "../../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../../Newcomponet/SectionCompoent/ServicesSec";
// import SolutionSec from "../../Newcomponet/SectionCompoent/Solution";
// import InfoSection from "../../Newcomponet/SectionCompoent/InfoSection";
// import Portfolio from "../../Newcomponet/SectionCompoent/Portfolio";
// import Features from "../../Newcomponet/SectionCompoent/Features";
// import TechStack from "../../Newcomponet/SectionCompoent/TechStack";
// import ProcessSec from "../../Newcomponet/SectionCompoent/ProcessSec";
// import ConsultancyApproach from "../../Newcomponet/SectionCompoent/ConsultancyApproach";
// import WhyChoose from "../../Newcomponet/SectionCompoent/WhyChooseUs";
// import HireDeveloper from "../../Newcomponet/SectionCompoent/HireDeveloper";
// import Faq from "../../Newcomponet/SectionCompoent/Faq";

const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="https://www.comfygen.com/img/consulting-and-advisory-services.webp"
        alt="Consulting and Advisory Services"
        width={60}
        height={60}
      />
    ),
    title: "Consulting and Advisory Services",
    decs: "Our delegated proof of stake development company comes with holistic consulting services to guide businesses through the complexities of DPOS blockchain adoption. Our expert developers provide strategic insights for successful blockchain integration, from feasibility studies and architecture design to protocol selection and implementation strategies",
  },
  {
    num: "02",
    icon: (
      <Image
        src="https://www.comfygen.com/img/custom-dpos-blockchain-development.webp"
        alt="Custom DPOS Blockchain Development"
        width={60}
        height={60}
      />
    ),
    title: "Custom DPOS Blockchain Development",
    decs: "Comfygen specializes in designing and developing custom Delegated Proof of Stake (DPOS) blockchain networks. We have tailored-fit solutions to meet specific business requirements. We ensure scalability, efficiency, and security from the basic to integrated advanced algorithms and models.",
  },
  {
    num: "03",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="https://www.comfygen.com/img/smart-contract-development-icon-img.webp"
        alt="Smart Contract Development"
        width={60}
        height={60}
      />
    ),
    title: "Smart Contract Development",
    decs: "Comfygen enhances DPOS blockchain functionalities with smart contract development. Leveraging platforms like EOSIO and other DPOS-based frameworks, we create secure and automated contract solutions that streamline transactions and enforce business logic.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="https://www.comfygen.com/img/blockchain-security-audits-icon.webp"
        alt="Blockchain Security Audits"
        width={60}
        height={60}
      />
    ),
    title: "Blockchain Security Audits",
    decs: "We conduct thorough security audits that allow us to assess risks and identify vulnerabilities. Our team ensures the integrity and robustness of DPOS blockchain networks, implementing best practices for mitigating potential threats and safeguarding your business assets and data.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="https://www.comfygen.com/img/tokenomics-and-economics-design.webp"
        alt="Tokenomics and Economics Design"
        width={60}
        height={60}
      />
    ),
    title: "Tokenomics and Economics Design",
    decs: "Our team assists in designing tokenomics and economic models for DPOS blockchain projects. From token issuance and distribution strategies to incentive structures and governance mechanisms, we optimize economic parameters to align with project goals and community interests.",
  },
];
const Ser = [
  {
    num: "01",
    img: "https://www.comfygen.com/img/smart-contract-solutions-icon.webp",
    title: (
      <p>
        <a href="/smart-contract-development">Smart Contract Solutions</a>{" "}
      </p>
    ),
    decs: "",
  },
  {
    num: "02",
    img: "https://www.comfygen.com/img/high-scalability-icon.webp",
    title: "High Scalability",
    decs: "",
  },
  {
    num: "03",
    img: "https://www.comfygen.com/img/multilateral-ledger-icon.webp",
    title: "Multilateral Ledger",
    decs: "",
  },
  {
    num: "04",
    img: "https://www.comfygen.com/img/enterprise-support-icon.webp",
    title: "Enterprise Support",
    decs: "",
  },
  {
    num: "05",
    img: "https://www.comfygen.com/img/point-to-point-architecture-icon.webp",
    title: "Point-to-Point Architecture",
    decs: "Enabling point-to-point architecture is a winning move for business owners with their PoA blockchain development project, as this indicates that only the participants of the network will be able to access the transactions that take place. And Comfygen tends to help you implement the same on priority. ",
  },
  {
    num: "06",
    img: "https://www.comfygen.com/img/pluggable-consensus-icon.webp",
    title: "Pluggable Consensus",
    decs: "",
  },
];

const technologyData = [
  {
    img: <IconSettings stroke={1.5} className="w-12 h-12" />,
    title: "Customized Consensus Mechanism",
    desc: "We begin by defining a robust consensus mechanism based on Delegated Proof of Stake (DPOS). This involves selecting delegates who validate transactions and secure the network, ensuring efficient block production and consensus without compromising on decentralization."
  },
  {
    img: <IconEscalator stroke={1.5} className="w-12 h-12" />,
    title: "Scalability Architecture",
    desc: "Comfygen designs DPOS blockchains with scalability in mind, leveraging techniques such as sharding, sidechains, or parallel processing. This allows the network to handle increasing transaction volumes and support growing user bases while maintaining high performance and low latency."
  },
  {
    img: <IconShieldCheck stroke={1.5} className="w-12 h-12" />,
    title: "Security Features",
    desc: "Security is paramount in our blockchain development service. Our solutions incorporate advanced cryptographic techniques, multi-layered authentication mechanisms, and smart contract auditing. This mitigates risks such as double-spending, attacks, and other vulnerabilities."
  },
  {
    img: <IconHierarchy stroke={1.5} className="w-12 h-12" />,
    title: "Governance Models",
    desc: "We implement customizable governance frameworks tailored to the specific needs of the blockchain network. This includes voting mechanisms for delegate selection, proposal submission, and decision-making processes to ensure transparent and democratic governance."
  },
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Smart Contract Development",
    desc: "Our team excels in developing smart contracts that automate processes and enforce business logic within the DPOS blockchain ecosystem. Using languages like Solidity or languages compatible with EOSIO, we create secure and efficient smart contracts that facilitate various functionalities, including token issuance, transfers, and decentralized applications (dApps) integration."
  },
  {
    img: <IconCoin stroke={1.5} className="w-12 h-12" />,
    title: "Tokenomics Design",
    desc: "Comfygen assists in designing tokenomics that align with the project’s goals and user incentives. This includes defining token distribution models, inflation rates, staking mechanisms, and reward structures to foster ecosystem growth, incentivize participation, and maintain economic stability."
  },
  {
    img: <IconLink stroke={1.5} className="w-12 h-12" />,
    title: "Cross-Chain Interoperability",
    desc: "We enhance DPOS blockchain development solutions with cross-chain interoperability features, enabling seamless interaction and data exchange between different blockchain networks. This integration facilitates broader adoption, enhances liquidity, and supports diverse use cases across decentralized finance (DeFi) and other sectors."
  },
  {
    img: <IconEye stroke={1.5} className="w-12 h-12" />,
    title: "Privacy Enhancements",
    desc: "Based on the project requirements, we implement privacy-enhancing technologies such as zero-knowledge proofs (ZKPs), a cryptographic method, or ring signatures to protect user privacy and transaction confidentiality while ensuring compliance with regulatory standards."
  },
  {
    img: <IconPlug stroke={1.5} className="w-12 h-12" />,
    title: "Customizable APIs and SDKs",
    desc: "We provide customizable Application Programming Interfaces (APIs) and Software Development Kits (SDKs) to support developer adoption and integration. These tools enable developers to build and deploy applications. It will also help them to interact with smart contracts and access blockchain data efficiently"
  },
  {
    img: <IconHeart stroke={1.5} className="w-12 h-12" />,
    title: "Continuous Support and Maintenance",
    desc: "Beyond initial development and deployment, Comfygen also offers ongoing support and maintenance services to ensure the long-term success and sustainability of DPOS blockchain projects. Our team monitors network performance, implements upgrades and patches, and provides technical assistance to address emerging challenges."
  }
];



export default function Ecommerce(props: any) {
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
        <title>
          DPoS Blockchain Development Company for Enterprises | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen offers DPoS blockchain development services to build secure, scalable, and high-performance blockchain solutions for enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/dpos-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="DPoS Blockchain Development Company | Hire expert DPoS blockchain developers."
        />
        <meta
          property="og:facebook_description"
          content="Take your project to the next level with our exceptional DApp development company. As specialists in DPoS development and DPoS blockchain development, we offer tailored solutions to meet your specific requirements."
        />
        <meta
          property="og:twitter_title"
          content="DPoS development company | DPoS blockchain development company | DApp development company"
        />
        <meta
          property="og:twitter_description"
          content="Experience the difference with our distinguished DPoS blockchain development services. Our committed team offers comprehensive DApp development solutions alongside impeccable DPoS development expertise, positioning us as a notable DPoS blockchain development company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="DPoS Blockchain Development Company | Readymade DPoS Blockchain Development Company | Hire expert DPoS blockchain developers"
        />
        <meta
          name="summary"
          content="DPoS Blockchain Development Company | Readymade DPoS Blockchain Development Company || Comfygen Privtate Limited: Are you Looking for a Hire expert DPoS blockchain developers in India? Hire expert DPoS blockchain developers for secure and efficient NFT blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a DPoS Blockchain Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="DPoS Blockchain Development Company"
          content="Comfygen is a World Class DPoS Blockchain Development Industry: We Build the Future of Business, One DPoS Blockchain Development Services at a Time."
        />
        <meta
          name="category"
          content="DPoS Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="DPoS Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
      </Head>

      <BlockchainNav />
      <div className="overflow-hidden lg:pt-[110px]">
        {/* hero section */}
        <HeroSectionForAllPages
          heading="DPoS Blockchain Development Company"
          subhead='Secure, Scalable & High-Performance Blockchain DPoS Development Solutions'
          ptag="Comfygen offers expert Delegated Proof of Stake (DPoS) blockchain development services to help businesses build fast, secure, and scalable decentralized systems. Our DPoS solutions are designed for enterprise-grade applications, delivering efficient consensus, high transaction throughput, and strong data security. With optimized performance and reliable network governance, we help you deploy future-ready blockchain solutions that scale with your business needs."
          li="Robust Data Security"
          li1=" Scalable Enterprise-Grade Architecture"
          li2="Efficient DPoS Consensus Mechanism"
          li3="Expert Blockchain Development Team"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage='https://www.comfygen.com/herosection/dpos-blockchain-dev-hero-img.webp'
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Discover Our Services Related To DPOS Blockchain Development</h2>
              <p className="text-center">Being the most reputed DPoS blockchain development company in the USA, we offer top-notch blockchain development solutions to businesses. We offer a comprehensive service solution to meet specific requirements. Explore our services below</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Best DPoS Blockchain Development Company"
          description1="Comfygen stands out as a prominent DPOS blockchain development company that is recognized for innovative solutions and prioritizing a client-centric approach. Our developer team specializes in Delegated Proof of Stake – DPOS consensus mechanisms. Our service excels in creating scalable and highly secure blockchain ecosystems. We offer tailor-fit solutions to diverse business sectors. Our developer team of blockchain DPoS development combines deep technical expertise with a thorough understanding of blockchain strategies to offer robust solutions. Our commitment to excellence is evident in our track record of successful implementations of our DPOS solutions across various industries."
          description3="Our service ensures efficiency, transparency, and decentralization. Whether it is creating custom DPOS blockchain networks, optimizing existing infrastructures, or providing comprehensive blockchain consulting services, we consistently meet expectations. Our company stands as a trusted partner in the rapidly evolving blockchain landscape."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

        {/* <ContactFromCenter /> */}
        <SolutionSec
          heading="Our Proven Custom DPOS Blockchain Development Solutions"
          subheading="We understand that creating a custom Delegated Proof of Stake (DPOS) blockchain requires a careful approach and deep expertise. We prioritize scalability, security, and functionality with our custom approach. We follow proven solutions in DPOS blockchain development tailored to meet the diverse needs of business sectors."
          techData={technologyData}
        />
        <InfoSection
          heading="Who will Benefit From our DPOS Blockchain Development Solutions?"
          description1="Our DPOS (Delegated Proof of Stake) blockchain development solutions are highly advantageous for various business entities within the enterprise and fintech sectors. Cryptocurrency exchanges can leverage DPOS for faster transaction processing and enhanced security, benefiting from its efficient consensus mechanism. In addition, blockchain startups seeking scalable and robust infrastructure can find our DPOS solution ideal for building decentralized applications (DApps) cost-effectively and quickly."
          description2="Enterprises exploring blockchain for supply chain management benefit from our DPOS's consensus solutions in tracking and verifying transactions across distributed networks. Furthermore, organizations looking to integrate blockchain into governance or voting systems need DPOS for its transparency and to prevent fraud. Overall, our DPOS blockchain solutions cater to a diverse range of businesses seeking advanced blockchain technology for improved efficiency and security in their operations."
          description3=''
          dec=''
          points={[]}
          imageSrc="https://www.comfygen.com/img/what-advantages-does-blockchain-technology-have-to-offer.webp"
          link="/contact-us"
          linkText="Lets Discuss"
          imagePosition="right"
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="DPOS Blockchain Development Solutions for Blockchain Service Providers"
            description="We specialize in DPOS Blockchain Development and create DPOS blockchain apps for multiple purposes. Our development experts can help you create the following variations in DPOS apps."
          />
        </section>

        <Features
          heading='Features in DPOS blockchain apps you should look for!'
          description='Comfygen is a DPOS blockchain development company in the USA that specializes in Blockchain DPOS development for its clients. The development company can act as a trusted partner in the most advanced development project for DPOS blockchain apps. We suggest the best features for some advanced functions in a blockchain-enabled application.'
          featuresData={JSON_DATA.featuresData}
          grid='3'
        />





        <TechStack
          title="Our Technology Stack for Developing DPOS Blockchain Application"
          description="Our delegated proof of stake blockchain development firm meets all the expectations put on it for the development of the new DPOS blockchain app. With different and advanced software development technologies and languages, we create DPOS blockchain apps that are used by professionals and industry stakeholders. We rediscover software development for DPOS blockchain applications with an updated technology stack that integrates the most important features into the DPOS blockchain app."
        />

        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Working Methodology for Implementing DPOS Blockchain Application Development Solutions</h2>
              <p className="text-base font-normal mt-2">
                Our DPOS blockchain development services are offered by trained professionals, and we offer them through a streamlined and reliable methodology. Our methodology has definite steps and is well-managed by our professionals to create the best DPOS blockchain application for your company.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Make the most of our Flexible Engagement Models
                </h2>
                <p>
                  As a DPOS blockchain development firm, we always prioritize our clients and engage with them flexibly so that there is a factor of mutual benefit in the development process. We consult with our clients and help them choose the best engagement model for their business.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.FutureDriven.map((elem, index) => {
                  const { title, desc } = elem;
                  return (
                    <div key={index} className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-[40px]">
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

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our DPOS blockchain developers for your DPOS Blockchain projects"
          text="As a DPOS blockchain development company in India, we offer effective solutions for the development of DPOS systems for mobile devices and desktops. DPOS is a complex and advanced technology that has multiple aspects of functionality and security. To leverage the technology positively for your company, you need to hire a team that is well-versed in the current scenario around blockchain usage and can create the most useful and feature-rich DPOS Blockchain app to help achieve your desired objectives. Comfygen has a dedicated team for DPOS blockchain development, and we are ready to help you create an app that manages secure transactions and your company's internal workflow."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Our DPOS blockchain developers are highly skilled and professional in their work",
            "We have an extensive body of work that stands as a testimony to our professional work culture and success",
            "Hire our DPOS blockchain app development services to create a scalable and efficient workflow for your company.",
            "Our development team uses the latest technology stack and tools for the rapid development of the DPOS blockchain app.",
            "We are a passionate team of developers who follow development trends and deliver on the most notable technology improvements."
          ]}
        />
        <InfoSection
          heading="Is there any other information you need about our DPOS blockchain app development services?"
          description1="We are here to address your queries and quench your curiosity related to the DPOS blockchain development field. Consult with our experts and discuss your queries today to learn about our processes and approach in detail. Hire our team now and maximize the potential blockchain technology has for your company with the latest developments."
          imageSrc="https://www.comfygen.com/img/what-advantages-does-blockchain-technology-have-to-offer.webp"
          link="/contact-us"
          linkText="Lets Discuss"
          description2=''
          description3=''
          dec=''
          points={[]}
          imagePosition="right"
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
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
