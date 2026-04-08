import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import { BsFillStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/dapp.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
// import BlockchainNav from "../Newcomponet/layout/blockchain-navbar";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import AboutSection from "../../components/Newcomponet/SectionCompoent/AboutSection";

const loader = () => <div className="h-96 bg-gray-100 animate-pulse" />;

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
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

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
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



import {
  IconUsers,
  IconLayoutDashboard,
  IconWallet,
  IconShieldCheck,
  IconChartBar,
  IconExchange,
  IconHierarchy,
  IconGift,
  IconAutomation,
  IconSettings,
  IconBell,
} from "@tabler/icons-react";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import Milestones from "../../components/Newcomponet/comman/Milestones";



const technologyData = [
  {
    img: <IconUsers stroke={1.5} className="w-12 h-12" />,
    title: "Identity Management",
    desc: "Decentralized app development could serve as a competitive advantage to businesses by helping them prove their identity as a leader in embracing new technologies.",
  },
  {
    img: <IconExchange stroke={1.5} className="w-12 h-12" />,
    title: "Seamless Product Exchange",
    desc: "The working of dApps involves optimization of resource usage alongside accelerating the processing phase, thereby enabling seamless product exchange.",
  },
  {
    img: <IconShieldCheck stroke={1.5} className="w-12 h-12" />,
    title: "Immutable Security",
    desc: "dApps ensure that all the changes are documented in immutable records, safeguarded by the consensus model and in-built cryptographic security.",
  },
  {
    img: <IconLayoutDashboard stroke={1.5} className="w-12 h-12" />,
    title: "Consistent Uptime",
    desc: "Decentralized apps run on blockchain networks with multiple devices that ensure freedom from hardware failures and glitches in software.",
  },
  {
    img: <IconWallet stroke={1.5} className="w-12 h-12" />,
    title: "Supports Trustless Transactions",
    desc: "Users don’t have to depend on third parties or trust each other for transactions in dApps with the facility of blockchain explorers and audit trails.",
  },
  {
    img: <IconBell stroke={1.5} className="w-12 h-12" />,
    title: "Self-Managing App",
    desc: "Decentralized applications require limited management intervention and support as compared to traditional applications with management support from communities.",
  },
  {
    img: <IconSettings stroke={1.5} className="w-12 h-12" />,
    title: "Fault-Tolerance",
    desc: "Decentralized applications do not have a single point of failure, which improves their fault tolerance and ensures immediate recognition of faults.",
  },
  {
    img: <IconAutomation stroke={1.5} className="w-12 h-12" />,
    title: "Implements Automation",
    desc: "Smart contracts in dApps could help in automated execution of transactions without the involvement of central intermediaries or authorities.",
  },
  {
    img: <IconGift stroke={1.5} className="w-12 h-12" />,
    title: "Provides Incentivization Mechanism",
    desc: "Decentralized apps could also feature incentivization mechanisms for rewarding users for participation or ensuring positive behaviour.",
  },
  {
    img: <IconChartBar stroke={1.5} className="w-12 h-12" />,
    title: "Promotes User Governance",
    desc: "Decentralized apps promote user governance by providing an equal stake to all participants in the decision-making process for the future of dApp.",
  },
  {
    img: <IconHierarchy stroke={1.5} className="w-12 h-12" />,
    title: "Better Transparency",
    desc: "Decentralized apps can guarantee better transparency with the facility of audit and data trails that also ensure internal accountability and regulatory compliance.",
  },
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

  const jsonLdData = [
  

    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Best dApp Development Company",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com ",
      },
      description:
        "Comfygen, the best dApp development company, designs and develops secure, scalable decentralized applications (dApps) with unmatched user experience. From DeFi platforms to NFT marketplaces, we bring your blockchain vision to life on Ethereum, Solana, Polygon, BNB Chain, and more.",
      url: "https://www.comfygen.com/dapp-development-company",
      mainEntityOfPage: "https://www.comfygen.com/dapp-development-company  ",
      areaServed: "Global",
      serviceType: [
        "dApp Development Services",
        "Decentralized Application Development",
        "Custom dApp Development",
        "Best dApp Development Company",
        "DeFi Platform Development",
        "NFT Marketplace Development",
        "Web3 Application Development",
        "Ethereum dApp Development",
        "Solana dApp Development",
        "Polygon dApp Development",
        "BNB Chain dApp Development",
        "Smart Contract Development",
        "Blockchain App Development",
      ],
      sameAs: [
        "https://www.facebook.com/comfygen.technologies ",
        "https://x.com/Comfygen_Tech ",
        "https://www.instagram.com/comfygen_technologies ",
        "https://www.linkedin.com/company/comfygen-technologies ",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.comfygen.com/dapp-development-company",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blockchain Development",
          item: "https://www.comfygen.com/blockchain-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "dApp Development Company",
          item: "https://www.comfygen.com/dapp-development-company",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are decentralized applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Decentralized applications are the decentralized alternatives to conventional applications. They run on peer-to-peer networks rather than a single computer.",
          },
        },
        {
          "@type": "Question",
          name: "What are the advantages of dApps over conventional apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "dApps ensure immutability of transaction records, run autonomously without centralized intervention, depend on consensus mechanisms, and have no single point of failure.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost of dApp development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the complexity of the app and number of features, as well as factors such as the blockchain platform, consensus mechanism, security layers, API integrations, and UI/UX requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What are the notable examples of dApps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular examples include decentralized exchanges, NFT marketplaces, and DAOs. Industry-specific dApps include insurance dApps and money management dApps.",
          },
        },
        {
          "@type": "Question",
          name: "How can you choose a dApp development company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evaluate past projects, check developer skillsets, and assess expertise with different dApp development technologies before selecting a dApp development company.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average time for completing a dApp development project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On average, a dApp development project may take 4 to 12 months, depending on the complexity and the number of basic and advanced features required.",
          },
        },
        {
          "@type": "Question",
          name: "How can dApps interact with conventional systems and databases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "dApps can interact with conventional systems and databases using middleware or APIs. However, this requires additional development and may introduce centralization trade-offs.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Enterprise DApp Development Company | Blockchain Solutions
        </title>

        {/* Primary Meta */}
        <meta
          name="description"
          content="Build secure and scalable decentralized applications with our expert DApp development services for Web3, DeFi, NFT marketplaces, and enterprises."
        />
        <meta
          name="keywords"
          content="dApp Development Services, Decentralized Application Development, Custom dApp Development, Best dApp Development Company, DeFi Platform Development, NFT Marketplace Development, Web3 Application Development, Ethereum dApp Development, Solana dApp Development, Polygon dApp Development, BNB Chain dApp Development, Smart Contract Development, Blockchain App Development"
        />

        {/* Canonical Tag */}

        <link
          rel="canonical"
          href="https://www.comfygen.com/dapp-development-company "
        ></link>
        {/* Viewport + Mobile */}
        <meta
          name="apple-mobile-web-app-title"
          content="dApp Development Company"
        />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a dApp Development Company in India, the USA, startup, or organization."
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />

        {/* Extended SEO */}
        <meta
          name="abstract"
          content="Decentralized application development | dApp Development Company | dApp developers | dApp Development Services"
        />
        <meta
          name="summary"
          content="Blockchain dApp Development Company | Comfygen Private Limited: Are you Looking for a blockchain dApp Development Company in India? Hire our expert blockchain dApp developers for secure and efficient blockchain development solutions."
        />
        <meta
          name="Decentralized Application Development Company"
          content="Comfygen is a World Class Decentralized Application Development Agency."
        />
        <meta
          name="category"
          content="Decentralized Application Development Organisation"
        />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Decentralized application development Firm in India"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.comfygen.com/dapp-development-company"
        />

        {/* Extra OG for Facebook */}
        <meta
          property="og:facebook_title"
          content="Looking for dApp Development Services | Hire Top dApps developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen provide top-notch dApp development services to help startups and enterprises build scalable and robust decentralized applications."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="dApp Development Company | Custom Blockchain Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a top dApp development company delivering secure and scalable decentralized applications on Ethereum, Solana, Polygon, BNB Chain, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/dapp-development-company/dApp-development-company.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Facebook Meta  */}

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/dapp-development-company/dApp-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/dapp-development-company/dApp-development-company.webp"
        />
        <meta property="og:image:alt" content="dApp Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/dapp-development-company "
        />
        <meta
          property="og:title"
          content="dApp Development Company | DeFi & NFT Solutions – Comfygen"
        />
        <meta
          property="og:description"
          content=" Comfygen builds secure, scalable dApps for DeFi, NFT marketplaces, and more. Launch your blockchain project on Ethereum, Solana, Polygon, and BNB Chain with our expert team."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[110px] pt-16">
        <div className="">
   <HeroSectionNewCls Data={JSON_DATA.Herosection} />

          {/* <HeroSectionForAllPages
            heading="Blockchain DApp Development Company"
            ptag="Grow your business with Comfygen’s expert DApp development services. As a leading decentralized application development company, we build secure, scalable, and user-friendly blockchain applications for DeFi platforms, NFT marketplaces, metaverse projects, gaming, and enterprise use cases. Our blockchain experts deliver high-performance smart contracts and seamless Web3 integration to ensure reliability, scalability, and future-ready innovation."
            li="End-to-End Custom DApp Development"
            li1="Secure & Scalable Blockchain Integration"
            li2=" Expertise in DeFi, NFT & Web3 Solutions"
            li3="Cross-Platform Decentralized App Development"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/herosection/dapp-development-company-hero-img.webp"
          /> */}
        </div>
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Expert dApp Development Services
              </h2>
              <p className="text-base text-center font-normal">
                <a className="text-blue-600" href="https://www.comfygen.com/">
                  Comfygen
                </a>
                stands as a leading dApp Development Company, offering a wide
                range of expert dApp development services to help businesses
                create innovative and high-performance decentralized
                applications. With our proficiency in custom dApp development
                across multiple domains, we assist you in transforming your
                ideas into reality while ensuring business growth.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Experience Unmatched dApp Development Services with Our Expertise!"
          description1="We are one of the pioneers in delivering dApp development services with a client-centric approach. Our experience in creating backend code for dApps and intuitive, user-friendly interfaces enhances the quality of our dApp development solutions. We also leverage our business acumen to provide custom dApp development services that help your business grow. You can rely on our decentralized application development expertise to translate your ideas into ready-to-use dApps with seamless user experiences."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <SolutionSec
          heading="Advantages of Choosing Our dApp Development Services"
          subheading="When you choose Comfygen for your decentralized application (dApp) development, you're tapping into a team that delivers tailored solutions with the latest technology. Here’s why partnering with us can make a real difference for your business"
          techData={technologyData}
        />
        <section className="lg:py-16 py-4 bg-[#F5F5F9]">
          <div className=" space-y-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="">
              {JSON_DATA.Major.map((elem: any) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="w-full flex flex-col justify-center items-center text-center space-y-2"
                  >
                    <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#212121] text-center">
                      {title}
                    </h2>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.Service.map((elem: any) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-4 rounded-lg border-2 border-dashed bg-[#5556D1]/20 space-y-2"
                  >
                    <div className="flex items-center  space-x-2">
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="60" height="60" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                    <div>
                      <p>{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <TechStack title="Technology Stack" description="" />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Artificial Intelligence Success Stories"
            description="At Comfygen, we take pride in delivering AI solutions that drive measurable results for our clients. Here are some examples of how we’ve helped businesses achieve their goals"
          />
        </section>

        <section className="bg-gradient-to-r from-[#272868] to-[#5556D1] lg:py-16 py-10">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center ">
              <h2 className="lg:text-4xl text-2xl font-bold text-[#fff] ">
                Have a Closer Look at Our Methodology for Developing Your dApps!
              </h2>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.LeadingSoftware.map((elem) => {
                const { title, img, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-[#fff]/30 border rounded-xl group transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <ul className="space-y-2 text-left text-white">
                      {elem.pList.map((item, index) => (
                        <li
                          className="flex text-base text-black/80 text-white"
                          key={index}
                        >
                          <span className="pr-2 mt-1.5 text-[#fff]">
                            <BsFillStarFill className="w-4 h-4" />
                          </span>
                          {item}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <IndustriesServe
          heading="Our Diverse Industry Expertise in dApp Development"
          description="At Comfygen, we’re passionate about building decentralized applications (dApps) that fit the unique needs of different industries. With our strong blockchain expertise, we create tailored solutions that help each sector thrive. Take a look at the industries we’ve worked with and the innovative Custom dApp development we bring to them"
          sliderData={JSON_DATA.customSliderData}
        />
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Explore Our Business-Oriented Engagement Models
                </h2>
                <p>
                  We provide flexible business-centric engagement models that
                  help you choose the best path for your business to leverage
                  our dApp development services, backed by our expertise as a
                  leading dApp development company, ensuring optimal use of
                  resources and maximum efficiency.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.FutureDriven.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-2xl">
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p className=" text-base font-normal mt-2">{desc}</p>
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
          heading="Hire Our DApp Developers"
          text="As the best dApp development company, we empower businesses with high-performance, secure, and scalable solutions tailored to their needs. Hire dApp developers from our team, leaders in DeFi, gaming Apps, and smart contract development, who bring extensive experience and innovation to every project. With a focus on quality and precision, we deliver best-in-class dApps, helping clients seamlessly navigate the blockchain and Web3 landscape to achieve their business goals."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Extensive industry knowledge.",
            "Experience working on multiple dApp projects.",
            "Client-centric approach to development",
            "Timely and relevant support.",
            "Guidance for achieving success with dApps.",
            "Collaboration with technical and business stakeholders.",
          ]}
        />
        <CallToAction
          heading="Is There Any Other Information We Can Help You With?"
          text="We are a trusted choice among top dApp development platforms with a broad range of services. You can explore the details of our services, such as dApp consultation and porting, to learn more about the depth of our expertise in dApp development. If you want any other information, then you can reach out to us through your preferred channels right now."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />
        <Faq faqData={JSON_DATA.Frequently} title=" " />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.URL}/api/v1/posts?per_page=3`);

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
