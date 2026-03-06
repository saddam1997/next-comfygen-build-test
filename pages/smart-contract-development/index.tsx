import { useState } from "react";
import Image from "next/image";
import { IconActivity, IconCalendarEvent, IconLayersIntersect, IconMessageCircle, IconNews, IconSettings, IconShieldCheck, IconShoppingBag } from '@tabler/icons-react';
import Head from "next/head";
import { BsFillStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/smartcontractdev.json";
import BlockchainNav from "../../components/Newcomponet/layout/blockchain-navbar";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";


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

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const WhyChoosee = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




const Process = [
  {
    num: "1",
    icon: (
      <Image
        src="https://www.comfygen.com/images/icons/ethereum.webp"
        alt="Ethereum"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Smart Contract Development",
    decs: "Ethereum is a leading blockchain network for smart contract development. At Comfygen, our expert team leverages <a href='https://www.comfygen.com/blog/how-to-build-and-ethereum-smart-contract-in-easy-steps/' class='underline font-semibold'>Ethereum smart contract development</a> to build secure, scalable, and efficient solutions, ensuring your project’s success from coding to deployment.",
  },
  {
    num: "2",
    icon: (
      <Image src="https://www.comfygen.com/images/icons/tron.webp" alt="TRON" width={60} height={60} />
    ),
    title: "TRON Smart Contract Development",
    decs: "Comfygen offers <a href='https://www.comfygen.com/tron-token-development' class='underline font-semibold'>TRON smart contract development</a> with dedicated experts who handle coding, testing, and deployment, delivering reliable and high-performance smart contracts for your business.",
  },
  {
    num: "3",
    icon: (
      <Image
        src="https://www.comfygen.com/images/icons/binance.webp"
        alt="Binance"
        width={60}
        height={60}
      />
    ),
    title: "Binance Smart Contract Development",
    decs: "Our team is proficient in Binance Smart Contract Development, using Binance Smart Chain to create fast, secure, and scalable smart contracts tailored to your project needs.",
  },
  {
    num: "4",
    icon: (
      <Image
        src="https://www.comfygen.com/images/icons/polygon.webp"
        alt="Polygon"
        width={60}
        height={60}
      />
    ),
    title: "Polygon Smart Contract Development",
    decs: "With <a href='https://www.comfygen.com/polygon-blockchain-development' class='underline font-semibold'>Polygon smart contract development</a>, we harness Ethereum’s security layers and Polygon’s interoperability to build efficient smart contracts on a network optimized for moderate, manageable traffic.",
  },
];

const Processs = [
  {
    title: "Requirement Gathering",
    description: "We analyze your business goals, project scope, and industry needs to create a tailored smart contract development roadmap that ensures every function aligns with your objectives."
  },
  {
    title: "Architecture Design",
    description: " Our smart contract development team crafts secure and scalable blueprints, incorporating compliance, security, and performance considerations to form a solid foundation for development."
  },
  {
    title: "Development",
    description: " Programming is executed in phases—Alpha, Beta, and Release—allowing for iterative feedback, feature testing, and precise execution by our expert developers."
  },
  {
    title: "Testing & QA",
    description: "Each smart contract undergoes rigorous validation, including functional, performance, and security checks, to guarantee reliability before deployment."
  },
  {
    title: "Deployment",
    description: "After approval, your smart contract is deployed on the blockchain, with continuous monitoring and guidance for maintenance or upgrades."
  },
  {
    title: "Integration and Optimization",
    description: "We integrate the smart contract with your existing systems or dApps, fine-tuning functions for smooth operation, interoperability, and maximum efficiency."
  },
  {
    title: "24/7 Support",
    description: "Our Blockchain development team is always available to assist with any queries, troubleshooting, or optimization needs to ensure uninterrupted performance."
  },

];

const technologyData = [
  {
    img: <IconLayersIntersect stroke={1.5} className="w-12 h-12" />,
    title: "Disintermediation",
    desc: "When you have embarked on the path of developing smart contracts with us, we assure you that there will be no intermediaries being part of the agreement exchanges between you and the users. Our job is to promote automation for your specific business tasks, and the smart contracts we integrate would keep out all the third-party involvements."
  },
  {
    img: <IconActivity stroke={1.5} className="w-12 h-12" />,
    title: "Real-Time Execution",
    desc: "Our team of consultants will help you understand the efficacy of real-time execution using smart contracts. It means that smart contracts take action simultaneously across all the computers that are taking part in specific operations. Based on your requests, we will set specific criteria within the smart contracts. Once that’s filled, the following pre-set action will take place instantly."
  },
  {
    img: <IconShieldCheck stroke={1.5} className="w-12 h-12" />,
    title: "Transparency",
    desc: "At Comfygen, we make sure that the information added to your smart contract is made visible to every participant who exists within the blockchain network. Thus, it enables an efficient environment of utmost trust. Once we execute the smart contracts for your business operations, be assured they cannot be altered due to the astounding transparency."
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />,
    title: "Security",
    desc: "As we are leveraging the potential of distributed ledger technology for making smart contracts, it ensures that the outcomes are immune to all forms of alterations and are impregnable as well. Thus, the security aspects of your smart contracts developed by our team of experts will be top-notch without leaving any vulnerable ends."
  },
  {
    img: <IconMessageCircle stroke={1.5} className="w-12 h-12" />,
    title: "Financial Savings",
    desc: "With the ideology of implementing automated operations into your business functions through our developed smart contracts, you can be free from hiring a human workforce to handle redundant tasks. Thus, it would lead you to alleviate the risks associated with human interference and will save the cost of hiring unnecessary staff members."
  },
  {
    img: <IconShoppingBag stroke={1.5} className="w-12 h-12" />,
    title: "Accuracy",
    desc: "With the introduction of smart contracts, our experts will help you navigate the record-keeping of your data, its storage, and easy retrieval with the use of automated techniques. Thus, it will help you be free from all human errors that might result in the loss of critical business data."
  },
  {
    img: <IconSettings stroke={1.5} className="w-12 h-12" />,
    title: "Trustworthiness",
    desc: "Upon utilising the smart contracts, you are allowing your business to develop immense trust among the customers and partners. Our smart contract development services ensure the creation of a highly secure and transparent transaction environment for your business to help all stakeholders attain peace of mind while conducting various business operations or transactions."
  },
  {
    img: <IconCalendarEvent stroke={1.5} className="w-12 h-12" />,
    title: "Easy Customisation",
    desc: "At Comfygen, we take pride in offering an astounding scope of customisation to our clients with respect to developing smart contracts. We make sure to assess the specific needs of your business alongside deciding on specific rules that you want to adopt for executing specific business transactions. In short, we shall help you include all business-specific conditions or clauses in your smart contract development project."
  }
];



export default function Ecommerce(props: any) {
  let { initialData } = props;
  let {

    Hire,
    myList,
    myList3,


  } = JSON_DATA;


  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the literal definition of smart contract development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smart contracts are better known as computer programs that can execute all by themselves by enforcing the terms set within the code only when the pre-set conditions are met by the users. It is one of the most renowned solutions that is used in integration with blockchain apps to ensure that all the contract’s conditions are met without the need for any intermediaries..."
        }
      },
      {
        "@type": "Question",
        "name": "What is the dedicated importance of smart contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The importance of smart contracts is associated with the need to eliminate the need for middlemen in processing diverse business transactions. It means you won’t need any kind of broker or lawyer to take part in any agreement..."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Comfygen serve with its smart contract services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some of the industries that we serve at Comfygen for offering our smart contract development services include Government, Media, Real Estate, Healthcare, and Insurance sectors..."
        }
      },
      {
        "@type": "Question",
        "name": "What is the process that your experts at Comfygen follow for smart contract development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The strategic and systematic process that we follow at Comfygen for your smart contract development needs includes: Understanding client requirements, Designing architecture, Writing smart contracts, Running security tests, and Deployment & Maintenance..."
        }
      },
      {
        "@type": "Question",
        "name": "How much time will you need to deliver the smart contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development time can range from a couple of days to several weeks, depending on project complexity. We provide realistic deadlines to ensure on-time delivery within budget..."
        }
      },
      {
        "@type": "Question",
        "name": "What is the ultimate role of smart contracts within the blockchain concept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ultimate role of smart contracts is to be the backbone of blockchain technology. They ensure secure, transparent, and automated transactions without intermediaries..."
        }
      },
      {
        "@type": "Question",
        "name": "Are you ok with signing the NDAs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we value client data privacy and readily sign NDAs to ensure confidentiality..."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most preferable blockchain platform at Comfygen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethereum is our most preferred blockchain platform due to its robust infrastructure, support for diverse coding languages, and extensive community..."
        }
      },
      {
        "@type": "Question",
        "name": "What is your overall cost of developing smart contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing depends on project complexity and effort required. Contact us for a free consultation and custom quote..."
        }
      },
      {
        "@type": "Question",
        "name": "What is the technical process of writing smart contracts over Ethereum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process includes setting up a MetaMask wallet, selecting a test network, writing smart contracts using Solidity, compiling with .sol extension, and deploying to production..."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any specific way for smart contracts to be validated during operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, smart contracts on the blockchain are validated using network nodes and consensus mechanisms, ensuring security and immutability..."
        }
      },
      {
        "@type": "Question",
        "name": "What does the future hold for smart contract development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smart contracts will continue to evolve with technological advancements, expanding their role in automation and diverse industries..."
        }
      },
      {
        "@type": "Question",
        "name": "Can the smart contracts developed by you handle diverse cryptocurrencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our experts can develop smart contracts that support multiple cryptocurrencies, including automated conversions between assets..."
        }
      },
      {
        "@type": "Question",
        "name": "How secure are the smart contracts developed by your firm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We ensure smart contract security by writing efficient, vulnerability-free code to prevent exploitation or hacking attempts..."
        }
      },
      {
        "@type": "Question",
        "name": "How do smart contracts differ from conventional contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smart contracts automate processes, minimize human errors, and reduce transaction costs compared to conventional contracts..."
        }
      },
      {
        "@type": "Question",
        "name": "How can you develop smart contracts by implementing regulatory compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We program smart contracts to enforce compliance with regulations, such as KYC or AML, by embedding rules in the code..."
        }
      },
      {
        "@type": "Question",
        "name": "Can we use smart contracts alongside conventional contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, smart contracts can be used alongside traditional contracts to enhance functionality..."
        }
      },
      {
        "@type": "Question",
        "name": "Can we make use of smart contracts for dApps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, smart contracts are widely used for DeFi applications like lending and borrowing platforms, as well as other dApps..."
        }
      },
      {
        "@type": "Question",
        "name": "Are smart contracts capable of handling disputes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smart contracts can be programmed with dispute resolution mechanisms to automate conflict resolution..."
        }
      },
      {
        "@type": "Question",
        "name": "What are the coding languages you prefer for developing smart contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our developers use Solidity, Rust, and Vyper for smart contract development..."
        }
      }
    ]
  };



  return (
    <>
      <Head>
        <title>
         Top Rated Smart Contract Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top rated smart contract development company delivering secure, scalable blockchain solutions for DeFi, NFTs, and enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/smart-contract-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Smart Contract Development Company | Custom Smart Contract Development Services"
        />
        <meta
          property="og:description"
          content="Partner with the best smart contract development company in India for custom smart contract development services. Build secure, automated, and efficient blockchain solutions for your business."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/smart-contract-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:12:49+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/smart-contract.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Smart Contract Development Company | Hire Our smart contract developer | Smart contract development company India"
        />
        <meta
          property="og:facebook_description"
          content="Looking for a Smart Contract Development Company in India? Hire our expert smart contract developers for secure and efficient blockchain solutions."
        />
        <meta
          property="og:twitter_title"
          content="Smart Contract Development Company India | Smart Contract Developer in India | Hire Blockchain Smart Contract Developer"
        />
        <meta
          property="og:twitter_description"
          content="Looking to engage a premier Smart Contract Development Company in India? Hire our seasoned Smart Contract Developers proficient in blockchain technology for unparalleled expertise in smart contract development."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Blockchain Smart Contract Development Industry | Hire Blockchain Smart Contract Development Services"
        />
        <meta
          name="summary"
          content="Smart Contract Development Services via Comfygen Privtate Limited: Are you Looking for a Smart Contract Development Company in India? Hire our expert smart contract developers for secure and efficient blockchain solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Smart Contract Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Smart Contract Development Company"
          content="Comfygen is a First Class Smart Contract Development Agency: We Build the Future of Business, One Blockchain Smart Contract Development Solution at a Time."
        />
        <meta
          name="category"
          content="Smart Contract Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Smart Contract Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Smart Contract Development Services Provider"
        />
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[110px]">

        <HeroSectionForAllPages
          heading="Top Rated Smart Contract Development Company"
          ptag="Comfygen is a top rated smart contract development company. We help enterprises build secure, reliable, and high-performance smart contracts that automate complex processes on the blockchain. Our expert blockchain developers design custom smart contract development solutions with a strong focus on precision, security, and scalability. developing NFT ecosystems, or automating enterprise workflows. Each smart contract is engineered to reduce risk, ensure transparency, and align seamlessly with your business objectives."
          li="Expert Blockchain & Smart Contract Developers"
          li1="Custom-Tailored Smart Contract Solutions"
          li2="Secure, Efficient & Automated Transactions"
          li3="Round-the-Clock Technical Support"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage='https://www.comfygen.com/herosection/smart-contract-dev-hero-img.webp'
        />

        <Milestones/>
        

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Blockchain Smart Contract Development Services</h2>
              <p className="text-base text-center font-normal">Comfygen offers the best custom blockchain smart contract development services for businesses looking to integrate smart contracts into their operations. As a leading smart contract development company, our expert team specializes in creating, optimizing, and auditing smart contracts for diverse applications, including DeFi platforms, NFTs, and decentralized exchanges (DEXs). Here’s a look at our core smart contract development services:</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Businesses Are Building Blockchain Smart Contracts?"
          description1="Many companies are adopting blockchain smart contract development services because these contracts solve problems that traditional systems can’t handle. By partnering with a trusted smart contract development company, businesses can implement secure, automated workflows that execute exactly as intended."
          description2="Blockchain smart contracts run automatically as soon as predefined conditions are met—no middlemen, no delays, and no human errors at critical moments. This automation reduces operational costs and speeds up processes across finance, supply chain, gaming, real estate, healthcare, and any industry that relies on trust and verification."
          description3="The benefits for businesses are clear: transparent workflows, tamper-proof records, and predictable outcomes. Payments settle instantly, agreements execute precisely as coded, and disputes decrease because every action is verifiable."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          description4="Whether a company is launching a DeFi platform, managing digital assets, running NFT operations, or automating enterprise approvals, blockchain smart contract development services from an experienced smart contract development company provide unmatched security, accuracy, and efficiency compared to legacy systems"
          link="/about-us"
          linkText="Explore More"
        />
        
        {/* <ContactFromCenter /> */}



        <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1] ">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Blockchain Platforms Using Smart Contract Development
                </h2>
                <p className="text-base text-white">
                  Comfygen provides comprehensive blockchain smart contract development services for businesses across finance, real estate, healthcare, and more. As a trusted smart contract development company, we deliver secure, efficient, and scalable solutions that streamline operations and harness the power of decentralization.
                </p>

              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {Process.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border rounded-2xl transition-all duration-300 hover:translate-y-2 group"
                    >
                      <div className="w-20 h-20 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
                        <span>{icon}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200">
                        {title}
                      </h3>
                      <p className="text-white transition duration-200 ease-in-out" dangerouslySetInnerHTML={{ __html: decs }}>
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        {/* <SolutionSec
          heading="Key Features of Our Smart Contract Development Solutions"
          subheading="Unlock the benefits of automation, security, and efficiency with our smart contract development solutions. Our expert team delivers secure, scalable contracts tailored to your business, streamlining processes and enhancing operational efficiency across various industries."
          techData={technologyData}
        /> */}

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Smart Contract Based Portfolio"
            description="Empowering businesses with cutting-edge design and development. Our work reflects innovation, creativity, and a relentless pursuit of excellence."
          />
        </section>



        <CallToAction
          heading="Ready to Transform Your Business with Blockchain Smart Contracts?"
          text="Unlock automation, security, and efficiency with Comfygen’s blockchain smart contract development services. Our experts deliver tailored smart contracts that align with your business goals."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />


        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our End-to-End Smart Contract Development Process</h2>
              <p className="text-base font-normal mt-2">
                As a best <a href='https://www.comfygen.com/blockchain-development' className="text-blue-600 font-semibold">blockchain development company</a> provide smart contract development services in India. Look at the sophisticated smart contract development process that we tend to implement for every new project.
              </p>
            </div>
            <ProcessSec processSlides={Processs} />
          </div>
        </section>

        <WhyChoosee
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Smart Contract Developers"
          text="All the smart contract developers who work at Comfygen have received immense training and expertise to handle the requests from both start-ups as well as established businesses. They have dedicated strategies that they implement to different use case scenarios. Every developer working with us is quite expert in using different tools and technologies to help your business stay updated with the market trends. In case there is a need for any kind of advancement in the long run, these developers would help bring in more result-centric smart contract development solutions to help you achieve that."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Outstanding team of developers, testers, and project managers.",
            "Every individual working at Comfygen is a certified professional.",
            "Actively available for support needs raised by the clients.",
            "Makes use of the latest technology solutions to tailor your business-specific smart contract development."
          ]}
        />

        <TechStack
          title="Technologies & Platforms We Work On"
          description="At Comfygen, our smart contract development services cover a wide range of blockchain networks to meet diverse business needs. Our team of multi-chain smart contract developers is skilled in building, deploying, and optimizing smart contracts."
        />
        <ClientStories/>
        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
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