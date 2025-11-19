import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchainconsulting.json";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import ProcessSec from "../components/ProcessSec";
import Faq from "../components/Faq";
import HireDeveloper from "../components/HireDeveloper";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import BlockchainNav from "../componentsnew/blockchain-navbar";
import WhyChoose from "../components/WhyChooseUs";
import BlockChainTech from "./components/BlockChainTech";
import IndustriesBlockchain from "../componentsnew/IndustriesBlockchain";
import WhoCanStart from "../componentsnew/WhoCanStart";
import ConsultancyApproach from "../components/ConsultancyApproach";
// import BlockchainNav from "../blockchain/blockchain-navbar";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
export default function rummy(props) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const Process = [
    {
      title: "Ideation & Use Case Validation",
      description:
        "We start by understanding your ideas, your targeted visions, and the problem you're solving. This step includes verifying whether blockchain is right for you, defining the fundamental reason for publishing, and laying the foundation for everything that follows.",
    },
    {
      title: "Technical Architecture & Chain Selection",
      description:
        "Next, we define at a technical level how the system will work, which includes selecting the most suitable public blockchain based on performance, scalability, and cost. We also architect how smart contracts, user interactions, and data flows will function across your ecosystem.",
    },
    {
      title: "Smart Contract & Backend Development",
      description:
        "Once the design is ready, we start building the engine of your product. Our developers write smart contracts in secure, optimized code and build backend systems that manage wallet interactions, APIs, and all off-chain logic that supports the core functionality.",
    },
    {
      title: "Frontend & Web3 Integration",
      description:
        "A solid backend needs a clean and intuitive frontend. We create interfaces that are fast, responsive, and user-friendly—connecting seamlessly to the blockchain via wallet integrations and transaction handlers to give users a smooth Web3 experience.",
    },
    {
      title: "Testing, QA & Security Review",
      description:
        "Before going live, we run multiple levels of testing to ensure your platform is secure, bug-free, and ready for real users. Our team simulates real-world usage, reviews the contract logic, and prepares everything for audit and mainnet deployment.",
    },
    {
      title: "Deployment & Mainnet Launch",
      description:
        "With everything tested and approved, we launch your dApp or token on the public blockchain. We make sure it’s fully functional, properly verified, and optimized for public use—ready for users, investors, or community adoption on day one.",
    },
    {
      title: "Post-Launch Support & Upgrades",
      description:
        "The launch is just the start. We provide ongoing technical support, performance monitoring, feature upgrades, and improvements based on real-time user feedback. Whether you need to scale, secure, or evolve, we keep your blockchain project moving forward.",
    },
  ];

  const WhoCanStartCards = [
    {
      heading: "Define Your Purpose",
      description:
        "Start by being clear about your goal. Are you making a new crypto token, launching a DeFi app, creating NFTs, or building a decentralized autonomous organization (DAO)? This decision sets the direction for your entire project.",
    },
    {
      heading: "Choose the Right Blockchain Platform",
      description:
        "Decide whether to build on an existing public blockchain like Ethereum, Solana, or Avalanche, or create your custom Layer-1 using <a class='text-black font-semibold underline' href='https://www.comfygen.com/substrate-development-company' >Substrate</a> or Cosmos SDK. Your right platform depends on things like speed, cost, and how much control you need.",
    },
    {
      heading: "Design the Core Infrastructure",
      description:
        "Establish the core components of your network: the consensus mechanism (<a class='text-black font-semibold underline' href='https://www.comfygen.com/pow-blockchain-development-company' >PoW</a>, PoS, etc.), tokenomics (supply, utility, rewards), and governance model (on-chain voting, protocol upgrades, permissions).",
    },
    {
      heading: "Develop and Audit Smart Contracts",
      description:
        "Write the smart contracts that will power your app’s functionality—handling logic for transactions, tokens, staking, and user roles. Use Solidity, Rust, or Move based on your platform, and conduct thorough security audits.",
    },
    {
      heading: "Build the Front-End Interface",
      description:
        "Create a responsive Web3 UI that connects to wallets like MetaMask or Phantom, supports real-time blockchain interactions, and delivers a seamless user experience on desktop and mobile.",
    },
    {
      heading: "Test, Optimize, and Launch",
      description:
        "Deploy your system on a testnet to simulate real-world usage, fix bugs, and optimize performance. Once stable, move to mainnet and monitor for updates, scalability, and long-term performance.",
    },
  ];

  const IndustriesData = [
    {
      title: "Healthcare",
      description:
        "Private blockchain ensures secure patient data sharing, medical record management, and compliance with health regulations like HIPAA.",
      points: [
        "Immutable electronic health records (EHRs)",
        "Consent-based data access",
        "Medical supply chain transparency",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/healthcare.svg",
      alt: "Blockchain in Healthcare",
    },
    {
      title: "Retail & eCommerce",
      description:
        "Improve trust and transparency in transactions, inventory tracking, and customer loyalty programs with blockchain-powered solutions.",
      points: [
        "Tamper-proof transaction logs",
        "Verified product sourcing",
        "Smart contract-based loyalty systems",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/retail.svg",
      alt: "Blockchain in Retail",
    },
    {
      title: "Financial Services (Fintech)",
      description:
        "Streamline operations, automate compliance, and enable secure peer-to-peer transactions in a regulated environment.",
      points: [
        "KYC/AML on blockchain",
        "Automated settlements with smart contracts",
        "Secure, private asset tokenization",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/finance.svg",
      alt: "Blockchain in Fintech",
    },
    {
      title: "Supply Chain & Logistics",
      description:
        "Track goods in real time, prevent fraud, and ensure supply chain accountability using permissioned ledgers.",
      points: [
        "Real-time product tracking",
        "Vendor verification and authentication",
        "Automated contract enforcement",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/supply-chain.svg",
      alt: "Blockchain in Logistics",
    },
    {
      title: "Real Estate",
      description:
        "Digitize property records, simplify title transfers, and enable transparent, fraud-proof real estate deals.",
      points: [
        "Tokenized property ownership",
        "Smart contract-driven sales agreements",
        "Immutable title and deed records",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/real-estate.svg",
      alt: "Blockchain in Real Estate",
    },
    {
      title: "Insurance",
      description:
        "Speed up claim processing, prevent fraud, and ensure transparent policy management with private blockchain apps.",
      points: [
        "Automated claim validation",
        "Fraud-resistant policy issuance",
        "Customer identity verification",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/insurance.svg",
      alt: "Blockchain in Insurance",
    },
    {
      title: "Manufacturing",
      description:
        "Ensure traceability, quality control, and secure supplier collaboration across production lines and global facilities.",
      points: [
        "Provenance tracking",
        "Smart inventory automation",
        "Vendor compliance monitoring",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/manufacturing.svg",
      alt: "Blockchain in Manufacturing",
    },
    {
      title: "Energy & Utilities",
      description:
        "Enable secure energy trading, grid monitoring, and data privacy for utility customers and providers.",
      points: [
        "Peer-to-peer energy trading",
        "Smart metering and billing",
        "Grid asset tracking and automation",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/energy.svg",
      alt: "Blockchain in Energy",
    },
    {
      title: "Government & Public Sector",
      description:
        "Promote transparency, streamline public services, and secure identity verification systems with blockchain-based governance.",
      points: [
        "Digital ID verification",
        "Transparent public recordkeeping",
        "Blockchain voting systems",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/government.svg",
      alt: "Blockchain in Government",
    },
    {
      title: "Telecommunications",
      description:
        "Manage data integrity, automate service agreements, and secure user identity in telecom operations.",
      points: [
        "Fraud prevention for roaming and billing",
        "Secure subscriber identity management",
        "Smart contract-based SLAs",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/telecom.svg",
      alt: "Blockchain in Telecom",
    },
    {
      title: "Education & EdTech",
      description:
        "Create verifiable academic credentials, prevent certificate fraud, and support lifelong learning records.",
      points: [
        "Blockchain-verified diplomas",
        "Decentralized student records",
        "Skill-based smart certification",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/education.svg",
      alt: "Blockchain in Education",
    },
    {
      title: "Travel & Hospitality",
      description:
        "Enhance guest experience with secure bookings, loyalty programs, and verified identity processes.",
      points: [
        "Verified traveler identity",
        "Blockchain-enabled rewards programs",
        "Seamless booking authentication",
      ],
      image:
        "https://www.comfygen.com/comfygen-images/private-blockchain-development/travel.svg",
      alt: "Blockchain in Travel",
    },
  ];

  const jsonLdData = [
    {
      "@type": "WebSite",
      "@id": "https://www.comfygen.com/#website",
      url: "https://www.comfygen.com/",
      name: "Blockchain Technology, Mobility, AI and IoT Development Company",
      description: "Trusted Blockchain AI IoT Development Company",
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.comfygen.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Public Blockchain Development",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Build secure and scalable public blockchain applications with Comfygen. We specialize in dApps, DeFi platforms, NFT marketplaces, smart contracts, and cross-chain blockchain solutions.",
      url: "https://www.comfygen.com/public-blockchain-development",
      mainEntityOfPage:
        "https://www.comfygen.com/public-blockchain-development",
      areaServed: "Global",
      serviceType: [
        "Public Blockchain Development",
        "Decentralized Application (dApp) Development",
        "DeFi Platform Development",
        "NFT Marketplace Development",
        "Smart Contract Development",
      ],

      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Comfygen Technologies",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "https://maps.app.goo.gl/WRvQs16yDQ624dda6",
      url: "https://www.comfygen.com/",
      telephone: "+91-9587867258",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd",
        addressLocality: "Jaipur",
        postalCode: "302019",
        addressCountry: "IN",
        addressRegion: "IN",
      },
      priceRange: "Contact Us",
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Thursday", "Wednesday", "Tuesday", "Monday"],
          opens: "09:00",
          closes: "19:30",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
      alternateName: "Comfygen Technologies",
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9587867258",
          contactType: "sales",
          email: "sales@comfygen.com",
          areaServed: [
            "US",
            "CA",
            "GB",
            "AD",
            "AU",
            "AT",
            "BS",
            "BH",
            "IO",
            "KM",
            "CU",
            "AR",
            "CW",
            "CY",
            "DK",
            "DM",
            "EG",
            "FK",
            "FI",
            "FR",
            "DE",
            "GR",
            "GL",
            "HK",
            "IS",
            "IN",
            "ID",
            "IT",
            "JP",
            "JE",
            "JO",
            "KW",
            "KG",
            "KR",
            "MX",
            "FM",
            "NZ",
            "NI",
            "OM",
            "PE",
            "PH",
            "PL",
            "PT",
            "QA",
            "RO",
            "RU",
            "SA",
            "SG",
            "SE",
            "SZ",
            "CH",
            "TH",
            "TR",
            "TN",
            "UA",
            "UM",
            "AE",
            "039",
            "155",
            "154",
            "151",
            "150",
          ],
          availableLanguage: ["en", "hi"],
        },
      ],
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Technologies",
      Name: "Microsoft Power BI Sales Dashboards | Real-Time Sales Insights",
      image:
        "https://www.comfygen.com/comfygen-images/public-blockchain-development/about.webp",
      description:
        "Track KPIs, analyze performance, and forecast revenue with Comfygen’s Microsoft Power BI Sales Dashboards. Designed for real-time decision-making and sales optimization.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "115",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com ",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blockchain Development",
          item: "https://www.comfygen.com/blockchain-development ",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Public Blockchain Development",
          item: "https://www.comfygen.com/public-blockchain-development ",
        },
      ],
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a public blockchain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: " A public blockchain is a decentralized network that anyone can join and interact with. All transactions are visible to everyone, and no central authority controls the system.",
          },
        },
        {
          "@type": "Question",
          name: "How is public blockchain different from private or permissioned blockchains?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Public blockchains are open, permissionless, and transparent. Private or permissioned blockchains restrict who can access or validate transactions, making them more suitable for enterprise use.",
          },
        },
        {
          "@type": "Question",
          name: "What’s an example of a public permissioned blockchain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ripple (XRP) and Hedera Hashgraph are examples where the network is public, but node participation is permissioned.",
          },
        },
        {
          "@type": "Question",
          name: "Which is the best public blockchain for development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your use case. Ethereum is widely adopted, Solana is great for speed, and Polkadot is strong in interoperability.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop a public blockchain app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anywhere from 4 to 20+ weeks, depending on complexity, integrations, and custom features.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Public Blockchain Development – dApps, DeFi, NFTs & Smart Contracts
        </title>
        <meta
          name="description"
          content="Comfygen, the best Public Blockchain development company, delivers a secure, scalable solution. From DeFi platforms and NFT marketplaces to smart contracts and 
          cross-chain dApps."
        />
        <meta
          name="keywords"
          content="Public Blockchain Development, Decentralized Application (dApp) Development, DeFi Platform Development, NFT Marketplace Development, Smart Contract Development"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/public-blockchain-development"
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
        <meta
          name="apple-mobile-web-app-title"
          content="Blockchain Development"
        />
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

        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph */}
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
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/public-blockchain-development/public-blockchain-development.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/public-blockchain-development/public-blockchain-development.webp"
        />
        <meta
          property="og:image:alt"
          content="Public Blockchain Development Solutions by Comfygen"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/public-blockchain-development"
        />
        <meta
          property="og:title"
          content="Public Blockchain Development Services | dApps, DeFi, NFTs & Smart Contracts"
        />
        <meta
          property="og:description"
          content="Launch secure and scalable blockchain apps with Comfygen. From DeFi and NFT platforms to custom smart contracts and cross-chain dApps—we build future-ready public blockchain solutions."
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Public Blockchain Development Services | dApps, DeFi, NFTs & Smart Contracts"
        />
        <meta
          name="twitter:description"
          content="Build secure and scalable public blockchain Development with Comfygen. We deliver dApps, DeFi platforms, NFT marketplaces, and smart contracts on Ethereum, Solana, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/public-blockchain-development/public-blockchain-development.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>
      <div className="">
        {/* <LazyLoad height={80} offset={100}> */}
        <Header />
        {/* </LazyLoad> */}
      </div>
      <BlockchainNav />
      <div className="overflow-hidden pt-16">
        <HeroSectionForAllPages
          heading="Public blockchain development company"
          ptag="A Public blockchain was built for transparency, decentralization, and trust. It's open to everyone—perfect for projects that require global collaboration, sustainability, and public verifiability. At Comfygen, we build scalable and secure Public Blockchain Development solutions. Whether you're building a decentralized app, launching a token, or creating a system that can be publicly leveraged—we give you full power of open and paramilitary networks, without any bias, and with complete transparency and security."
          li="Open Architecture Expertise"
          li1="End-to-End Development"
          li2="Security-First Approach"
          li3="Community-Driven Deployments"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/public-blockchain-development/hero.webp"
        />
        <AboutSection
          title="About Company"
          heading="What is Public Blockchain Development?"
          description1="Public <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blockchain-development'>blockchain development</a> means building systems, tools, and protocols that run on open and arbitrary blockchain networks—like Aithairium, Bitcoin, or Solan. Anyone can participate in these networks without any approval. They are completely transparent, meaning every transaction and activity is public and verifiable by everyone."
          description2="Public Blockchain Development includes smart contracts, tokens, decentralized apps (dapps), and systems that take advantage of decentralization, security, and global access."
          description3="Key features of public blockchain development:"
          points={[
            "Completely decentralized and traversable",
            "Open participation",
            "Transparent and Immutable",
            "Perfect for dapps and token launch",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/public-blockchain-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Public Blockchain Development Services
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we don’t just build on blockchains—we build
                solutions that can be adopted in the real world, scale, and last
                long-term. From idea to launch, we offer full-cycle public
                blockchain development customized to your product goals,
                ecosystem, and compliance landscape.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Public Blockchain Development Roadmap
              </h2>
              <p className="text-base font-normal mt-2">
                Public blockchain development isn’t just about writing code—it’s
                about building something the world can trust, use, and scale
                with. Here's what your journey with Comfygen looks like, from
                initial concept to live deployment and beyond:
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <WhoCanStart
          title="How Can You Develop a Public Blockchain?"
          description="Developing a public blockchain isn’t just writing smart contracts. You’re building a trustless, decentralized system that anyone can interact with. That means security, scalability, and open access aren’t optional—they’re mission-critical."
          cards={WhoCanStartCards}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <IndustriesBlockchain
          heading="Industries We Serve with Public Blockchain Solutions"
          description="Public blockchains aren’t just for crypto projects. They're transforming how entire industries handle transparency, automation, and trust. At Comfygen Technologies, we help businesses tap into that potential—securely and strategically."
          cards={IndustriesData}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <BlockChainTech
          title="Technology Stack & Platforms We Use for Public Blockchain Development"
          description="Public blockchains demand transparency, speed, and rock-solid security. We build on the most battle-tested platforms and tools in the ecosystem—choosing each one based on what your project needs, not what's trendy."
        />

        <HireDeveloper
          heading="Hire Public Blockchain Developers"
          text="Want to launch on Ethereum, Solana, or build your own Layer-1? Hire skilled public blockchain developers from Comfygen to bring your decentralized vision to life."
          text1="From DeFi apps and NFT platforms to DAOs and token launches—we build secure, scalable, and open solutions designed for adoption."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expert Web3 & blockchain developers in India",
            "Smart contract development (Solidity, Rust, Move)",
            "<a class='underline font-semibold' href='https://www.comfygen.com/dapp-development-company' >DApp development</a> & public network integration",
            "Full-cycle support from testnet to mainnet",
          ]}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions (FAQs)"
        />
      </div>
    </>
  );
}