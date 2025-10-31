import { useState } from "react";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchain.json";
import LazyLoad from "react-lazy-load";
import { IconBrain, IconBroadcast, IconDiamond, IconServer, IconShieldCheck, IconWorld, } from '@tabler/icons-react';
import Header from "../componentsnew/Header";
import AboutSection from "../componentsnew/AboutSection";
import ServicesSec from "../componentsnew/ServicesSec";
// import ContactFromCenter from "../componentsnew/ContactFromCenter";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import IndustriesServe from "../componentsnew/IndustriesServe";
import HireDeveloper from "../componentsnew/HireDeveloper";
import LatestTechnology from "../componentsnew/LatestTechnology";
import ProcessSec from "../componentsnew/ProcessSec";
import PortfolioSec from "../componentsnew/PortfolioSec";
import TechStack from "../componentsnew/TechStack";
import WhyChoose from "../componentsnew/WhyChooseUs";
import Faq from "../componentsnew/Faq";
import BlogSection from "../componentsnew/BlogSection";
import Craditem from "../componentsnew/Fullcards";
import CallToAction from "../components/CallToAction";
import BlockchainNav from "../componentsnew/blockchain-navbar";


const GuidSectionBlockchain = dynamic(
  () => import("./components/GuidSectionBlockchain"),
  {
    loading: () => <p>Loading...</p>,
  }
);
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
const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-image.webp",
      head: "NASDAC Crypto Coin",
      based: "Blockchain-based Cryptocoin Development",
      name: "NASDAC Crypto Coin is a next-gen cryptocurrency with its own dedicated blockchain, not just a token. Designed with a robust 'Four Square' architecture, it prioritizes speed, mining benefits, seamless integration, and growth predictability. Stronger, faster, and more secure than Bitcoin, NASDAC Coin is engineered for business, making it the first true SUPER COIN in the blockchain crypto space.",
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
      img: "https://www.comfygen.com/image/croston-portfolio-image.webp",
      head: "Croston ",
      based: "Decentralized Blockchain-based Coin Development",
      name: "Croston is the first decentralized cryptocurrency fully backed by gold at a 1:1 ratio, ensuring stability and value growth. Unlike fiat money, it leverages blockchain for security, transparency, and decentralized control. Croston enables secure transactions and controlled coin creation while offering easy purchasing options via credit card, exchange, or crypto. As a gold-backed digital asset, Croston redefines secure investments and powers a decentralized marketplace with standardized blockchain development solutions.",
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
      img: "https://www.comfygen.com/image/yatripay-portfolio-image.webp",
      head: "YatriPay",
      based: "Peer-to-Peer Blockchain Development",
      name: "YatriPay enables instant, zero-fee global transactions through its decentralized P2P blockchain development, powered by the YatriPay Virtual Machine (YVM). With seamless peer-to-peer transfers, YatriPay ensures secure and efficient digital payments. The YatriPay Mobile App makes onboarding easy, bringing borderless transactions to users worldwide.",
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
      img: "https://www.comfygen.com/image/mezovest-portfolio-image.webp",
      head: "Mezovest",
      based: "Blockchain Logistics Software Development Solutions",
      name: "Mezovest is transforming commerce in the energy industry, focusing on LPG and CNG with its pioneering F.I.T (Finance, Infrastructure, and Technology) model. Through Mezo Energy Trading Limited (METL), it introduces non-corrosive composite gas cylinders for safety and efficiency. Additionally, its logistics arm, Spatch, streamlines supply and distribution. Mezovest’s blockchain-powered solutions ensure transparency, security, and seamless operations in the energy sector.",
      num: "1",
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
const technologyData = [
  {
    title: "NFT at Boom",
    desc: "It is the time when you eliminate the need of intermediaries and take the use of Non-Fungible tokens. We can facilitate businesses to turn their assets into efficient NFTs, and help them to attain a new revenue generation stream; especially for the content creators, artists, and influencers. They can transform their digital content into tokens, and sell them; which will add authenticity and value in their business.",
    img: <IconDiamond stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Internet of Things (IoT) with Blockchain",
    desc: "Blockchain is becoming a vital asset for third-generation security. Internet of Things (IoT) and Blockchain; both the technologies are surpassing the next-gen tech solutions. Integrating these both will make the digital transactional solutions more secure and quicker. However, we will carefully integrate and build blockchain solutions with IOT to simplify the centralized IT infrastructure at affordable cost.",
    img: <IconBroadcast stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "The Meet of Cyber-Security with Blockchain",
    desc: "Integrating blockchain with cyber security systems will help prevent ransom attacks, and even decentralization will enable us to identify the attack’s nature for further security. We have the best blockchain developers in India, who can create such dApps, which enable them to protect the cyber systems and eliminate the errors before they impact any system or data.",
    img: <IconShieldCheck stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Metaverse Blockchain Solutions",
    desc: "Metaverse, also known as the virtual reality space for people to build realistic interactions. Metaverse has taken itself far beyond expected; still blockchain is playing a role in providing more security. The decentralized applications have the potential to make more secured transactions and prevent data breaches by any means. Blockchain has immutability and security purposes for any tech segment.",
    img: <IconWorld stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Blockchain with Artificial Intelligence (AI)",
    desc: "AI has become the blockbuster for tech-savvies, because it has automated the functions in organizations. AI does things with the help of its humongous database. Catching up with AI and blockchain in one solution altogether can be the most dynamic change; where the functions will be seamlessly performed without risking any data. Also that leads to more security and brings positivity in the growth of technology.",
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Blockchain-as-a-Service (BaaS)",
    desc: "Blockchain-as-a-Service (BaaS) simplifies blockchain application development by cloud providers offering infrastructure and tools. Users can create, deploy, and manage blockchain apps without setting up networks. BaaS provides pre-configured networks and tools, removing the need for deep blockchain understanding. It ensures scalability and supports various protocols, offering flexibility to businesses and developers.",
    img: <IconServer stroke={1.5} className="w-12 h-12" />,
  },
];


export default function Blockchain(props:any) {
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
    <div className="overflow-hidden">
      <Head>
        <title> Custom Blockchain Development Company | Enterprise Blockchain Solutions </title>
        <meta
          name="description"
          content="Comfygen custom blockchain development company offering secure, scalable, and enterprise-level blockchain solutions. Build private, public, and hybrid blockchain networks."
        />

        <meta
          name="keywords"
          content="Custom Blockchain Development, Custom Blockchain Development company, Enterprise Blockchain Solutions, DeFi and NFT Blockchain Solutions, Private and Public Blockchain Development, Hybrid Blockchain Network Development, Blockchain Consulting Services, Blockchain Security Auditing, Supply Chain Blockchain Solutions, Blockchain for Finance and Banking, Blockchain Integration Services, Crypto Exchange and Wallet Development, Blockchain-Based Identity Management Systems"
        />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/custom-blockchain-development-company " />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />


        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Custom Blockchain development company" />


        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />


        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.region" content="GER" />

        {/* <!-- Open Graph (OG) Tag --> */}

        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

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
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <BlockchainNav />
      <HeroSectionForAllPages
        heading="Custom Blockchain Development Company"
        ptag="As a leading custom blockchain development company, Confygen delivers specially designed, scalable, and transparent blockchain ecosystems that empower businesses to innovate with confidence. Our custom blockchain solutions are designed to meet diverse business goals—whether it’s building enterprise blockchain applications for financial transparency or developing decentralized apps (DApps) for secure digital transactions."
        li="Custom Blockchain Solutions"
        li1="Enterprise Blockchain Development"
        li2="Smart Contract Integration"
        li3="Blockchain Software Development Services"
        btnName="Talk With Expert"
        btnLink="/contact-us"
        openModal={openModal}
        talkToExpertModal={talkToExpertModal}
        setTalkToExpertModal={setTalkToExpertModal}
        closeModal={closeModal}
        bgImage="https://www.comfygen.com/herosection/blockchain-development-hero-img.webp"
      />
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
      <ServicesSec
        servicesData={JSON_DATA.servicesData}
        title="Our Custom Blockchain Development Services"
        description="Comfygen, a <a class='underline text-blue-500' href='https://www.comfygen.com/blockchain-development'>Blockchain development company</a>, specializes in providing custom blockchain development services that empower businesses to harness the full potential of decentralized technology. Our blockchain developer team builds secure, scalable, and tailored blockchain applications for startups, enterprises, and global brands."
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
      <ProcessSec
        title="Our Custom Blockchain Development Process"
        description="Comfygen, a leading custom blockchain development company, follows a strategic and agile process to deliver innovative custom blockchain development solutions tailored to your business needs. Here’s how we do it"
        processSlides={Process}
      />
      <TechStack
        title="Our Custom Blockchain Development Technology Stack"
        description="As a leading custom blockchain app development company, we use cutting-edge technologies and platforms to build secure and scalable blockchain solutions tailored to your business needs."
      />
      <PortfolioSec
        techData={techDataForPage1}
        heading="Case Studies: Successful Custom Blockchain Projects"
        description="Explore Comfygen’s diverse portfolio of successful projects powered by our custom blockchain development services. As a trusted custom blockchain development company, we have delivered secure, scalable, and innovative blockchain solutions across industries, including <a class='text-blue-700 font-semibold' href='/defi-development-company'>DeFi development</a> , NFT marketplaces,  <a class='text-blue-700 font-semibold' href='/crypto-wallet-development'>cryptocurrency wallet development</a> , and supply chain management. Our team of expert custom blockchain developers leverages advanced blockchain development technology to build tailored solutions on leading platforms like Polygon, Ethereum, and Hyperledger."
      />

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
      <BlogSection initialData={initialData} />
    </div>
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
