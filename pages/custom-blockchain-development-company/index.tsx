import { useState } from "react";
import React from "react";
import Head from "next/head";
import JSON_DATA from "./json/blockchain.json";
import BlockchainNav from "../../components/Newcomponet/layout/blockchain-navbar";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";


import dynamic from "next/dynamic";
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

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
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

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
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



// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import TechStack from "../Newcomponet/SectionCompoent/TechStack";
// import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
// import IndustriesServe from "../Newcomponet/SectionCompoent/IndustriesServe";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import Faq from "../Newcomponet/SectionCompoent/Faq";


const Process = [
  {
    title: "Discovery & Consulting",
    description: "understanding business goals, conducting feasibility studies, and defining use cases."
  },
  {
    title: "Requirement Analysis ",
    description: "gathering technical and functional requirements, selecting the right blockchain platform."
  },
  {
    title: "Architecture & Design",
    description: "creating system architecture, workflows, and smart contract logic tailored to your industry."
  },
  {
    title: "Blockchain Development",
    description: "coding dApps, crypto wallets, NFT platforms, and DeFi solutions with seamless integration."
  },
  {
    title: "API & Third-Party Integration ",
    description: "ensuring interoperability with legacy systems and third-party services."
  },
  {
    title: "Testing & Deployment ",
    description: "security audits, QA, and deploying on chosen blockchain networks for reliability."
  },
  {
    title: "Maintenance & Upgrades",
    description: "continuous support, monitoring, and scalability improvements to ensure long-term success."
  },

];



export default function Blockchain(props: any) {
  let { initialData } = props;

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
      "@type": "Service",
      "name": "Custom Blockchain Development Service",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen is a leading custom blockchain development company offering secure, scalable, and enterprise-grade blockchain solutions. We specialize in private, public, and hybrid blockchain networks, smart contract development, DeFi platforms, and decentralized applications for startups and enterprises.",
      "url": "https://www.comfygen.com/custom-blockchain-development",
      "mainEntityOfPage": "https://www.comfygen.com/custom-blockchain-development-company ",
      "areaServed": "Global",
      "serviceType":
        [
          "Custom Blockchain Development",
          "Custom Blockchain Development company",
          "Enterprise Blockchain Solutions",
          "DeFi and NFT Blockchain Solutions",
          "Private and Public Blockchain Development",
          "Hybrid Blockchain Network Development",
          "Blockchain Consulting Services",
          "Blockchain Security Auditing",
          "Supply Chain Blockchain Solutions",
          "Blockchain for Finance and Banking",
          "Blockchain Integration Services",
          "Crypto Exchange and Wallet Development",
          "Blockchain-Based Identity Management Systems",
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
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Rhederstraße 34",
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
        "areaServed": ["IN", "US", "CA", "GB", "GER"],

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
      "name": "Custom Blockchain Development Company | Secure & Scalable Blockchain Solutions",
      "image": "https://www.comfygen.com/gallery/about-images/blockchain-development-about-image.webp",
      "description": "Comfygen is a leading custom blockchain development company delivering secure, scalable, and enterprise-grade blockchain solutions. We specialize in private and public blockchain networks, smart contract development, DeFi platforms, token creation, and decentralized application (DApp) development for startups and enterprises.",
      "url": "https://www.comfygen.com/custom-blockchain-development-company ",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "442"
      }
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com/ "
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": " Blockchain Development Company",
          "item": "https://www.comfygen.com/blockchain-development   "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Custom Blockchain Development Company",
          "item": "https://www.comfygen.com/custom-blockchain-development-company  "
        }
      ]
    }
  ];


  return (
    <>
      <Head>
        <title>Custom Blockchain Software Development for Enterprises & Startups</title>
        <meta
          name="description"
          content="Custom blockchain development company offering enterprise blockchain applications, smart contracts, dApps, and scalable blockchain solutions."
        />
        <meta
          name="keywords"
          content="Custom Blockchain Development, Custom Blockchain Development company, Enterprise Blockchain Solutions, DeFi and NFT Blockchain Solutions, Private and Public Blockchain Development, Hybrid Blockchain Network Development, Blockchain Consulting Services, Blockchain Security Auditing, Supply Chain Blockchain Solutions, Blockchain for Finance and Banking, Blockchain Integration Services, Crypto Exchange and Wallet Development, Blockchain-Based Identity Management Systems"
        />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/custom-blockchain-development-company " />
        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Blockchain Development Company | Enterprise Blockchain Solutions by Comfygen" />
        <meta name=" twitter: description" content="Build secure, scalable, and customized blockchain solutions with Comfygen. Our blockchain development experts design private, public, and hybrid networks for businesses worldwide." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/custom-blockchain-development-company/custom-blockchain-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/custom-blockchain-development-company/custom-blockchain-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/custom-blockchain-development-company/custom-blockchain-development-company.webp" />
        <meta property="og:image:alt" content="Custom Blockchain Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/custom-blockchain-development-company" />
        <meta property="og:title" content="Comfygen Custom Blockchain Development Company | Secure & Scalable Solutions" />
        <meta property="og: description" content="Build secure, scalable, and enterprise-grade blockchain solutions with Comfygen. We specialize in private, public, and hybrid blockchain networks, smart contract development, and decentralized application design." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <div className="">
        <BlockChainHeader />
      </div>

      <div className="overflow-hidden lg:pt-[100px]">
        <HeroSectionForAllPages
          heading="Custom Blockchain App Development Company"
          ptag="As a trusted custom blockchain development company, Comfygen builds and design scalable, and transparent blockchain ecosystems that help businesses move faster and innovate securely. Our custom blockchain development solutions are crafted around real business needs, from enterprise-level blockchain applications that improve financial transparency to decentralized applications that enable safe and reliable digital transactions."
          li="Custom Blockchain Solution Development"
          li1="Enterprise Blockchain Application Development"
          li2="Smart Contract Design and Integration"
          li3="End-to-End Blockchain Software Development Services"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/blockchain-development-hero-img.webp"
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Custom Blockchain Development Services
              </h2>
              <p className="text-base text-center font-normal">Comfygen, a <a className=' text-blue-500' href='https://www.comfygen.com/blockchain-development'>Blockchain development company</a>  specializes in providing custom blockchain development services that empower businesses to harness the full potential of decentralized technology. Our blockchain developer team builds secure, scalable, and tailored blockchain applications for startups, enterprises, and global brands.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title=""
          heading="Why Businesses Choose Custom Blockchain Solutions"
          description1="In the digital world, companies are increasingly adopting custom blockchain development solutions to enhance efficiency, security, and transparency. Unlike off-the-shelf software, custom blockchain development provides tailored architectures according to business needs while ensuring scalability, reliability, and regulatory compliance. All the industries like finance, healthcare, supply chain, logistics, gaming, and real estate are leveraging blockchain technology."
          description2="<b>Enhanced Security & Data Protection</b> – secure transactions and sensitive information with tamper-proof, encrypted blockchain networks"
          description3="<b>High Performance & Scalability</b>– enterprise-grade blockchain applications capable of handling millions of transactions efficiently"
          description4="<b>Transparency & Auditability</b> – immutable ledgers and smart contract automation boost accountability and trust among clients and partners"
          description5="<b>Tailored Industry-Specific Solutions</b> – fully customized blockchain apps, dApps, and DeFi platforms built for your business vertical"
          points={
            []
          }
          imageSrc="https://www.comfygen.com/gallery/about-images/blockchain-development-about-image.webp"
          link="/about-us"
          linkText="Explore More"
        />



        <CallToAction
          heading="Ready to Launch Your Custom Blockchain Project?"
          text="Build Your Custom Blockchain Solution with Comfygen Today and stay ahead in the digital economy."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        {/* <ContactFromCenter /> */}

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Custom Blockchain Development Process</h2>
              <p className="text-base font-normal mt-2">
                Comfygen, a leading custom blockchain development company, follows a strategic and agile process to deliver innovative custom blockchain development solutions tailored to your business needs. Here’s how we do it
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Our Custom Blockchain Development Technology Stack"
          description="As a leading custom blockchain app development company, we use cutting-edge technologies and platforms to build secure and scalable blockchain solutions tailored to your business needs."
          customTechData={JSON_DATA.TechData}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Case Studies: Successful Custom Blockchain Projects"
            description="Explore Comfygen’s diverse portfolio of successful projects powered by our custom blockchain development services. As a trusted custom blockchain development company, we have delivered secure, scalable, and innovative blockchain solutions across industries, including <a class='text-blue-700 font-semibold' href='/defi-development-company'>DeFi development</a> , NFT marketplaces,  <a class='text-blue-700 font-semibold' href='/crypto-wallet-development'>cryptocurrency wallet development</a> , and supply chain management. Our team of expert custom blockchain developers leverages advanced blockchain development technology to build tailored solutions on leading platforms like Polygon, Ethereum, and Hyperledger."
          />
        </section>


        <IndustriesServe
          heading="Industries We Serve with Custom Blockchain Solutions"
          description="At Comfygen, we deliver blockchain solutions that drive innovation across various industries. Our experience spans sectors like finance, healthcare, supply chain, real estate, gaming, and more. Whether you're looking to enhance security, improve transparency, or streamline operations, our custom blockchain application development services are tailored to meet the unique needs of each industry. We help businesses harness the power of blockchain technology to stay competitive and future-ready."
          sliderData={JSON_DATA.IndustriesServe}
        />
        <HireDeveloper
          heading="Hire Expert Custom Blockchain Developers"
          text="Hire certified blockchain developers from Comfygen to build secure, scalable, and custom blockchain development solutions. Our team brings proven expertise in multiple blockchain platforms and industries."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Custom Solutions",
            "Secure Coding",
            "Flexible Hiring Models",
            "Faster Time-to-Market"
          ]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
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


export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  if (!resData.ok) {
    // console.error("API Request failed:", await resData);
    return { props: { initialData: [] } };
  }
  // console.log(resData)
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
