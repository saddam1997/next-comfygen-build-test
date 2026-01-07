import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cardano.json";
// import BlockchainNav from "../Newcomponet/layout/blockchain-navbar";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
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

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);




// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import ConsultancyApproach from "../Newcomponet/SectionCompoent/ConsultancyApproach";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import TechStack from "../Newcomponet/SectionCompoent/TechStack";
// import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
// import IndustriesServe from "../Newcomponet/SectionCompoent/IndustriesServe";
// import ModelsSec from "../Newcomponet/SectionCompoent/ModelsSec";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import Faq from "../Newcomponet/SectionCompoent/Faq";



const Process = [
  {
    title: "Requirement Analysis",
    description: "We will initially be meeting one another to discuss your project requirements based on Cardano blockchain app development. Following that, we shall take note of your business goals or expectations and how you expect this Cardano solution to help you scale."
  },
  {
    title: "UI/UX design",
    description: "Following that, a blueprint for developing a Cardano blockchain app is ready, and the project will then be handed out to the UI/UX design experts. We focus on target design approaches to improve user experience and user interaction."
  },
  {
    title: "Development",
    description: "Our dedicated Cardano blockchain developers will then be appointed for the project, and they shall commence with the decided blueprint for quality-driven approaches and methodologies of development. In case of any query, they will connect with you for a discussion."
  },
  {
    title: "Testing",
    description: "Once the Cardano blockchain app development process is completed, we will send it to the QA experts, and they shall determine if any flaws or errors persist in it. Upon validation, the app will then be passed onto the deployment stage. We conduct rigorous testing in each development stage."
  },
  {
    title: "Deployment",
    description: "We will handle the next deployment phase under our expert supervision and management. We will then be deploying the Cardano blockchain solution to let it commence with its astounding operations for streamlining your business tasks."
  },
  {
    title: "Maintenance and support",
    description: "We will consistently be looking after the performance of your Cardano development solutions in the project and will make sure to suggest upgrades necessary for scaling the performance. You will get continuous support from our technical team."
  },
  {
    title: "Integration and Optimization",
    description: "To maximize the utility of your Cardano blockchain application, we assist in integrating it with existing systems and third-party tools. Additionally, we optimize the solution for improved performance, scalability, and user satisfaction over time."
  },

];




export default function Ecommerce(props) {
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
      "name": "Cardano Blockchain Development",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen provides secure, scalable, and feature-rich Cardano Blockchain Development services, including smart contracts, dApps, token creation, NFT integration, DeFi solutions, and enterprise blockchain solutions.",
      "url": "https://www.comfygen.com/cardano-blockchain-development-company  ",
      "mainEntityOfPage": "https://www.comfygen.com/cardano-blockchain-development-company ",
      "areaServed": "Global",
      "serviceType": [
        "Cardano Blockchain Development",
        "Smart Contract Development on Cardano",
        "Cardano dApps Development",
        "Token Creation on Cardano",
        "NFT Integration on Cardano",
        "Decentralized Finance (DeFi) Solutions",
        "Enterprise Blockchain Solutions",
        "Cardano Wallet Development",
        "Staking and Governance Solutions",
        "Cardano Blockchain Consulting"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    }
    ,
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
      }, {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
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
        "areaServed": ["IN", "US", "CA", "GB"],

        "availableLanguage": "en, in"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    }
    ,
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "name": "Cardano Blockchain Development | Smart Contracts, dApps & Token Solutions",
      "image": "https://www.comfygen.com/gallery/about-images/cardano-blockchain-development-company-about-img.webp",
      "description": "Comfygen delivers secure, scalable, and feature-rich Cardano Blockchain Development services, including smart contracts, dApps, token creation, NFT integration, and enterprise blockchain solutions.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "245"
      }
    }
    ,
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
          "name": "Blockchain Development",
          "item": "https://www.comfygen.com/blockchain-development  "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cardano Blockchain Development",
          "item": "https://www.comfygen.com/cardano-blockchain-development-company "
        }
      ]
    }
    ,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do you think Cardano is used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cardano is a third-generation blockchain technology used for decentralized applications, financial solutions, training platforms, and integration with medical or legal data protection systems. It provides users with unmatched ownership and control while enabling developers to execute blockchain solutions efficiently due to its mathematically robust architecture."
          }
        },
        {
          "@type": "Question",
          "name": "What are the major perks of the Cardano blockchain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cardano offers a flexible and modular framework for designing sidechains and scaling solutions. It allows developers to create Ethereum-based blockchain networks and supports Ethereum-style smart contracts and transactions with improved efficiency and scalability."
          }
        },
        {
          "@type": "Question",
          "name": "Why should you choose Comfygen for your Cardano blockchain app development needs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comfygen specializes in Cardano blockchain development, leveraging its PoS mechanism for energy-efficient and fast transactions. We ensure high-quality solutions, timely project delivery, and ongoing support with recommendations for upgrades and performance improvements."
          }
        }
      ]
    }




  ];
  return (
    <>
      <Head>
        <title>
          Cardano Blockchain Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Cardano Blockchain Development Company offering DApps, smart contracts, DeFi platforms, NFT marketplaces, and token solutions."
        />
        <link rel="canonical" href="https://www.comfygen.com/cardano-blockchain-development-company" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* keywords */}
        <meta name="keywords" content="Cardano Blockchain Development, Smart Contract Development on Cardano, Cardano dApps Development, Token Creation on Cardano, NFT Integration on Cardano, Decentralized Finance (DeFi) Solutions, Enterprise Blockchain Solutions, Cardano Wallet Development, Staking and Governance Solutions, Cardano Blockchain Consulting" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cardano Blockchain Development Services | Comfygen" />
        <meta name="twitter:description" content="Build secure, scalable, and decentralized applications with Comfygen’s Cardano Blockchain Development services. Leverage smart contracts, dApps, and token solutions for your business." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/cardano-blockchain-development-company/cardano-blockchain-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/cardano-blockchain-development-company/cardano-blockchain-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/cardano-blockchain-development-company/cardano-blockchain-development-company.webp" />
        <meta property="og:image:alt" content="Cardano Blockchain Development" />
        <meta property="og:url" content="https://www.comfygen.com/data/sales-dashboard" />
        <meta property="og:title" content="Cardano Blockchain Development Services | Comfygen" />
        <meta property="og:description" content="Comfygen delivers expert Cardano Blockchain Development solutions, including smart contracts, decentralized apps, and token creation, ensuring secure, scalable, and efficient blockchain applications" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[100px]">
        <HeroSectionForAllPages
          heading="Best Cardano Blockchain Development Company"
          ptag="Comfygen, Cardano Blockchain Development Company, delivers secure, scalable, and customized Cardano blockchain development solutions for enterprises and startups worldwide. Our blockchain development expert specializes in building Cardano DApps, smart contracts, DeFi platforms, and NFT marketplaces, ensuring high performance, seamless integration, and future-ready applications. Partner with a trusted Cardano Blockchain Development Company to leverage advanced blockchain technology, accelerate your digital transformation, and enhance transparency, security, and efficiency in your business operations."
          li="End-to-end Cardano blockchain development solutions"
          li1="Certified developers with proven expertise"
          li2="Scalable, secure, and high-performance decentralized applications"
          li3="Seamless integration with enterprise systems"
          ptag3=""
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/cardano-blockchain-development-hero-img.webp"
        />
        <AboutSection
          title="About Company"
          heading="What is a Cardano Blockchain Development Company?"
          description1="A Cardano Blockchain Development Company specializes in building secure, scalable, and decentralized solutions using the Cardano blockchain technology. <a class='text-blue-600' href='https://www.comfygen.com/blockchain-development'>Blockchain Development company</a> helps businesses create dApps, smart contracts, NFT marketplaces, and DeFi platforms that leverage Cardano’s proof-of-stake (PoS) protocol for high efficiency, low energy consumption, and high security. By partnering with Cardano Blockchain Development experts, enterprises and startups can automate processes, enhance transparency, and ensure seamless blockchain integration, driving innovation and staying competitive in the rapidly evolving blockchain system."
          description2=""
          points={[
            "Expertise in Cardano DApps, smart contracts, and DeFi solutions",
            "Secure, scalable, and future-ready blockchain applications",
            "Built on Cardano’s energy-efficient PoS protocol",
            "Tailored solutions for startups and enterprises",
          ]}
          imageSrc="https://www.comfygen.com/gallery/about-images/cardano-blockchain-development-company-about-img.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Cardano Blockchain Development Services
              </h2>
              <p className="text-base text-center font-normal">{`AComfygen, a Leading Cardano Blockchain Development Company, provides end-to-end blockchain solutions specially designed for startups and enterprises. Our expert developers leverage Cardano’s proof-of-stake (PoS) protocol to deliver secure, scalable, and high-performance applications that drive business innovation.`}</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        {/* <ContactFromCenter /> */}
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <CallToAction
          heading="Do you want to learn more about our services?"
          text=" If you want to learn more about our Cardano blockchain development services, our team is here to explain the technology in detail. Once you feel convinced about using Cardano as your priority blockchain network, we shall then approach you to discuss your project requirements and goals."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Cardano Development Process</h2>
              <p className="text-base font-normal mt-2">At Comfygen, we follow a streamlined and efficient process for Cardano blockchain app development, ensuring a seamless journey from conceptualization to deployment. Here's how we execute your project</p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <TechStack
          title="Tech stack we use for Cardano Blockchain Development"
          description="At Comfygen, our Cardano Blockchain Development Company leverages a powerful and cutting-edge tech stack to deliver secure, scalable, and high-performance blockchain solutions."
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Discover Our Cardano Blockchain Projects & Success Stories"
            description="Explore our portfolio of successful projects built on the Cardano Blockchain, showcasing our expertise in online solutions and app development. Each project reflects our commitment to excellence, innovation, and client satisfaction."
          />
        </section>


        <IndustriesServe heading="" description=""/>
        <ModelsSec Qa={JSON_DATA.ModelHead} Whycomfygen={JSON_DATA.ModelCon} />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Cardano Blockchain Developers for the Web3 Transformation"
          text="Comfygen, being the best Cardano blockchain development company, has an experienced team that is proficient in working with dedicated Cardano projects, irrespective of the complexities. Our developers have the skills to build custom projects based on your specific technical parameters. May it be dApps, NFT marketplace, native token, or DEX platform, our developers have the proficiency to create them all for you over Cardano blockchain technology."
          text1="So, you can undoubtedly hire our developers at Comfygen and expect the utmost reliability for getting your Cardano blockchain app developed."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Our developers provide end-to-end services.",
            "All our experts have made it a ground rule to approach secure development practices.",
            "Your custom requirements are attended to on priority.",
          ]}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
        />

      </div>
    </>
  );
}

