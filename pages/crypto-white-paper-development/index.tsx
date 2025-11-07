import Image from "next/image";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import { useRouter } from "next/router";
import { IoStarSharp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiCrop2Fill, RiDeviceLine, RiExchangeFill } from "react-icons/ri";
import { ImCircleLeft } from "react-icons/im";
import { TiStopwatch } from "react-icons/ti";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowhitepaper.json";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import TechStack from "../components/TechStack";
import CallToAction from "../components/CallToAction";
import WhyChoosee from "../components/WhyChooseUs";
import ModelsSec from "../components/ModelsSec";
import HireDeveloper from "../components/HireDeveloper";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import InfoSectionLeft from "../components/InfoSectionLeft";
import InfoSectionRight from "../components/InfoSectionRight";
import PortfolioSec from "../componentsnew/PortfolioSec";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
// const BlogSection = dynamic(() => import("../components/BlogSection1"), {
//   loading: () => <p>Loading...</p>,
// });
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Services = [
  {
    num: "01",
    url: "/cryptocurrency-mlm-software-development",
    icon: <RiCrop2Fill size={50} className="text-blue-500" />,
    title: "Cryptocurrency",
    decs: "The adroit whitepaper writers at our company provide us with a clear explanation of cryptocurrency's use cases in a whitepaper.",
  },
  {
    num: "02",
    icon: <ImCircleLeft size={50} className="text-blue-500" />,
    title: "ICO",
    decs: "With our ICO white paper writing services, you can raise funds with your ICO platform in the most elegant way.",
  },
  {
    num: "03",
    url: "/cryptocurrency-exchange-development",
    icon: <RiExchangeFill size={50} className="text-blue-500" />,
    title: "Crypto Exchange   ",
    decs: "Crypto exchange white paper writing services from our dedicated whitepaper writers revitalize your crypto exchange platform.",
  },
  {
    num: "04",
    url: "/nft-marketplace-development-company",
    icon: <FaPaperPlane size={50} className="text-blue-500" />,
    title: "NFT",
    decs: "By utilizing our well-written NFT whitepaper writing services, we assure you that you will experience success in your NFT project without any hassles. ",
  },
  {
    num: "05",
    url: "/defi-development-company",
    icon: <RiDeviceLine size={50} className="text-blue-500" />,
    title: "DeFI ",
    decs: "We can offer you the stunning DeFi white paper writing services that will clearly explain why your platform is the right investment for your investors.",
  },
  {
    num: "6",
    icon: <TiStopwatch size={50} className="text-blue-500" />,
    title: "STO",
    decs: "STO whitepaper writing services from us will help you meet your business goals in a timely manner.",
  },
];

export default function MultiChain(props:any) {
  let { initialData } = props;
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
        "name": "What makes a well-written white paper essential for a successful project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A well-written white paper is essential because it acts as a comprehensive guide to your project, explaining complex concepts clearly. It builds trust with investors by demonstrating transparency, credibility, and a clear vision. A strong white paper sets the foundation for successful fundraising and investor interest in your project."
        }
      },
      {
        "@type": "Question",
        "name": "How does Comfygen’s approach to white paper development stand out from others?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen’s approach to white paper development focuses on a deep understanding of your project’s goals, combining technical expertise with clear, engaging writing. We ensure every document is tailored to your audience, whether they are investors, developers, or the general public, offering both technical accuracy and readability."
        }
      },
      {
        "@type": "Question",
        "name": "Can Comfygen assist with the visual design of my white paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Comfygen not only handles the writing but also offers white paper design services to ensure that the document is visually appealing. Our team focuses on creating a professional, polished document that enhances readability, draws attention to key sections, and aligns with your branding."
        }
      },
      {
        "@type": "Question",
        "name": "How do I ensure my white paper appeals to potential investors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To appeal to investors, your white paper must combine technical details with clear, concise language that highlights the unique value proposition of your project. At Comfygen, we focus on addressing investor concerns, such as potential returns, project scalability, and the problem-solving aspects of your offering."
        }
      },
      {
        "@type": "Question",
        "name": "What industries benefit the most from having a white paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industries such as blockchain, cryptocurrency, fintech, healthcare, and technology benefit greatly from white papers. These sectors require clear, well-researched documents that explain complex technical details and help stakeholders understand the value of your innovation. Comfygen specializes in crafting white papers for these cutting-edge industries."
        }
      },
      {
        "@type": "Question",
        "name": "Can Comfygen help with revisions or updates to an existing white paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Comfygen provides revision and updating services for existing white papers. Whether you need to incorporate new research, refine your messaging, or adapt to industry changes, our team will ensure your white paper remains relevant, effective, and aligned with your current project goals."
        }
      }
    ],




  };

  const techDataForPage1 = {
    All: [
      {
        img: "https://www.comfygen.com/img/aria-coin-cryptocurrency.webp",
        head: "Aria Coin Cryptocurrency",
        name: "aRIA Currency is revolutionizing the digital financial landscape with a secure, decentralized, and user-focused platform for global transactions. Built on the principles of accessibility, transparency, and efficiency, aRIA empowers individuals and businesses to transact seamlessly and with complete trust in a borderless digital economy.",
        num: "2",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },
      {
        img: "https://www.comfygen.com/img/footer-image-great-wallet.webp",
        head: " Great Wallet Application",
        name: "Great Wallet is a cutting-edge iOS wallet designed for seamless integration with the Great Crypto Network (GREAT Blockchain). As a key component of the Global Real Economic Asset Transformation Crypto Network, this decentralized blockchain solution drives the digital evolution of global economic governance and operations in the Fourth Industrial Revolution. With a vision to establish a large-scale economic blockchain ecosystem, Great Wallet leverages machine learning and artificial intelligence, applying macroeconomic principles to foster sustainable, equitable, and transparent economic growth worldwide.",
        num: "2",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },
      {
        img: "https://www.comfygen.com/img/decentralised-mlm.webp",
        head: "Decentralized MLM",
        name: "Join Decentralized MLM Web – Where blockchain ensures fairness, rewards drive ambition, and community powers success. Step into the future of network marketing, reimagined for transparency and growth.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg"
        ],
      },


    ],
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
    }
    ,

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Crypto Whitepaper Writing Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen provides professional crypto whitepaper writing services, delivering clear, engaging, and investor-ready documents. Our blockchain experts craft whitepapers that explain your vision, tokenomics, technology, and business model to attract investors and build credibility.",
      "url": "https://www.comfygen.com/crypto-whitepaper-writing-services",
      "mainEntityOfPage": "https://www.comfygen.com/crypto-whitepaper-writing-services",
      "areaServed": "Global",
      "serviceType": [
        "Crypto Whitepaper Writing",
        "Blockchain Whitepaper Development",
        "ICO Whitepaper Writing",
        "DeFi Whitepaper Services",
        "NFT Whitepaper Creation",
        "Tokenomics Documentation",
        "Web3 Project Whitepaper"
      ],
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
      "brand": {
        "@type": "Brand",
        "name": "Comfygen Technologies"
      },
      "name": "Crypto Whitepaper Writing Services | Professional Blockchain & Tokenomics Solutions",
      "image": "https://www.comfygen.com/image/about-us-image.webp",
      "description": "Comfygen offers professional crypto whitepaper writing services tailored for blockchain projects, ICOs, DeFi platforms, NFTs, and Web3 startups. Our experts create investor-ready whitepapers covering tokenomics, business models, and technical architecture with clarity and precision.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "450"
      }
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Crypto Whitepaper Writing Services",
          item: "https://www.comfygen.com/crypto-whitepaper-writing-services",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to develop a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to develop a delivery app typically ranges between $10,000 to $50,000, depending on features, design, and platform (iOS, Android, or both). At Comfygen, we provide cost-effective delivery app development solutions with real-time tracking, secure payments, and custom features tailored to your business needs."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to build a delivery app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery app development timelines typically range from 8 to 20 weeks, depending on the complexity and features. Comfygen’s expert team follows an agile process, ensuring faster delivery without compromising quality. From design to deployment, we help you launch your app quickly and efficiently."
        }

      }, {
        "@type": "Question",
        "name": "Can I get a white-label delivery app solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Comfygen offers white-label delivery app solutions that are ready to launch, customizable, and cost-effective. Our solutions include real-time tracking, easy payments, and multi-vendor support, helping businesses save time and enter the market faster with a scalable and branded app."
        }

      }, {
        "@type": "Question",
        "name": "Do you provide multi-delivery app development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in multi-delivery app development services, enabling businesses to manage food, grocery, parcel, and medicine deliveries from a single platform. With advanced features, user-friendly design, and AI-powered delivery application development solutions, our delivery mobile apps make delivery management seamless and efficient."
        }

      }, {
        "@type": "Question",
        "name": "Why should I choose Comfygen for delivery app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen is a leading delivery app development firm trusted by startups and enterprises. We provide custom, scalable, and cost-effective delivery app solutions with real-time tracking, AI integration, and secure payments. Make Sure your delivery business succeeds digitally from concept to launch."
        }


      }]

    },
  ];

  return (
    <>
      <Head>


        <title>
          Crypto Whitepaper Writing Services | ICO, STO, DeFi, NFT Whitepapers
        </title>
        <meta
          name="description"
          content="Meta description:- Comfygen offers expert crypto whitepaper writing services for blockchain projects. Our professional writers craft investor-ready whitepapers with tokenomics, roadmap, and technical documentation."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-white-paper-development"
        />

        <meta name="keywords" content="Crypto Whitepaper Writing, Blockchain Whitepaper Development, ICO Whitepaper Writing, DeFi Whitepaper Services, NFT Whitepaper Creation, Tokenomics Documentation, Web3 Project Whitepaper"/>


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
        <meta name="apple-mobile-web-app-title" content="Whitepaper Writing Solution" />

        {/* <!-- New in iOS6 -->
    <!-- Author and Company Information --> */}
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
        <meta name="twitter:title" content="Crypto Whitepaper Writing Services" />
        <meta name="twitter:description" content="Get expertly crafted crypto whitepapers with Comfygen. We create clear, engaging, and investor-ready blockchain whitepapers that showcase your vision, technology, and tokenomics for maximum impact." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/crypto-white-paper-development/crypto-whitepaper-writing-services.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/crypto-white-paper-development/crypto-whitepaper-writing-services.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/crypto-white-paper-development/crypto-whitepaper-writing-services.webp" />


        <meta property="og:image:alt" content="crypto whitepaper writing services" />
        <meta property="og:url" content="https://www.comfygen.com/crypto-whitepaper-writing-services" />
        <meta property="og:title" content="Expert Crypto Whitepaper Writing Services | Comfygen" />
        <meta property="og:description" content="Get professionally written crypto whitepapers with Comfygen. Our blockchain experts craft clear, engaging, and investor-ready documents covering tokenomics, technology, and business vision to attract funding and credibility.

"/>


        {/* <meta property="og:locale" content="en_US" />
        <meta name="language" content="en-us" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Crypto White Paper Development Company | Expert White Paper Services"
        />
        <meta
          property="og:description"
          content="Looking for Top White Paper Development Services? Comfygen, a Leading White Paper Development Company, Helps You Build Credibility, Attract Investors, and Showcase Your Business Effectively."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/crypto-white-paper-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/crypto-white-paper-development/crypto-whitepaper-writing-services.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" /> */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        /> */}


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/crypto-white-paper-dev-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="Crypto Whitepaper Writing Services"
            ptag="At Comfygen, we provide the best crypto whitepaper writing services specifically developed for ICOs, STOs, DeFi, NFTs, and blockchain projects. Our Blockchain development expert writers craft clear, persuasive, and investor-ready whitepapers that explain your project’s vision, technology, tokenomics, and roadmap with precision. A well-structured whitepaper builds credibility, attracts investors, and ensures compliance with industry standards."
            li="Investor-Ready Whitepaper Creation"
            li1="Tokenomics & Market Research"
            li2="Technical Documentation & Compliance"
            li3="Clear, Engaging, and Professional Writing"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        {/* <NewSection NewSection={JSON_DATA.NewSections} /> */}
        <AboutSection
          title="About Company"
          heading="Your Trusted Crypto White Paper Development Company"
          description1="A strong white paper does more than explain tech details—it tells your project’s story and wins investor trust. That takes research, domain knowledge, and clear writing."
          description2="At Comfygen India, we create impactful Crypto, ICO, and IDO White Papers that simplify complex blockchain ideas, highlight your vision, and make your project stand out. From DeFi to NFTs, we turn concepts into persuasive documents that attract serious investors."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Comprehensive Crypto Whitepaper Writing Services</h2>
              <p className="text-base text-center font-normal">Comfygen offers professional Crypto White Paper Development Services to help businesses effectively present their cryptocurrency-related projects. Our skilled Crypto Whitepaper Writing company crafts compelling, well-researched documents tailored to your needs, ensuring clarity, credibility, and investor confidence.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <InfoSectionRight
          heading="Your Trusted Crypto White Paper Development Company for Strategic Growth"
          description1="Writing a white paper requires a lot of research, time, and knowledge of the domain you are writing about. Moreover, it requires proficiency in writing, which can be demonstrated by choosing the right format or structuring the content in a particular way. It's the job of professionals who know what they're doing and are skilled at making technical aspects of any line of work understandable and intriguing to their readers."
          description3="To accomplish this task perfectly, you need to work with the best Crypto Whitepaper Development Company or ICO/IDO white paper writing services. An example of a company that consistently illustrates its projects in the best possible way is Comfygen India."
          imageSrc="https://www.comfygen.com/img/white-paper-development.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <InfoSectionLeft
          heading="Leading White Paper Writing Services India"
          description1="Writing a white paper requires a lot of research, time, and knowledge of the domain you are writing about. Moreover, it requires proficiency in writing, which can be demonstrated by choosing the right format or structuring the content in a particular way. It's the job of professionals who know what they're doing and are skilled at making technical aspects of any line of work understandable and intriguing to their readers. At White Paper Writing Services India, we specialize in crafting Crypto White Paper Development that ensures your project is communicated clearly and effectively."
          description2="We can assist you with writing cryptocurrency white papers that will ensure the success of your project. We present your idea most vividly in our white paper to convert the reader into an investor."
          imageSrc="https://www.comfygen.com/images/white-paper-writting-service.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <PortfolioSec
          techData={techDataForPage1}
          heading="Explore Our Crypto Whitepaper Based Portfolio"
          description="Propelling innovation and achievement through visionary design and development. A reflection of our unwavering passion for creativity and excellence."
        />
        <section className=" lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="space-y-10  mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto ">
              <h2 className=" py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                How We Create Your Crypto White Paper – Step-by-Step Process
              </h2>
              <p className="text-base text-white">
                There should be technical details in a white paper, but it should also be easy to understand by the general public. Using authoritative information, we create crypto white papers that are equally accessible to investors with less knowledge.
              </p>
            </div>
            <section className="items-center space-y-10  lg:flex lg:space-x-28 lg:space-y-4">
              <div className="flex justify-center w-full lg:justify-start">
                <Image
                  className="rounded-md"
                  title=" Our Crypto White Paper Creation Process"
                  alt=" Our Crypto White Paper Creation Process"
                  src="https://www.comfygen.com/img/our-crypto-white-paper-creation-process.webp"
                  height={600}
                  width={600}
                  loader={uploadcareLoader}
                  unoptimized={true}
                />
              </div>
              <div>
                <ul className="space-y-5">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li className="flex text-white" key={index}>
                      <span className="pr-2 mt-1.5 text-[#fff]">
                        <IoStarSharp className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>

        <HireDeveloper
          heading="Hire Cryptocurrency White Paper Writers"
          text="Comfygen provides quality whitepaper writing services by proficient whitepaper writers who do research for each project. Our whitepapers cover all business sectors with high-end security, including crypto and non-crypto"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Using our expert writers, we will create a white paper that will meet the business people's needs.",
            "focus on the information that will be convenient for the business.",
            "The writers of our whitepapers also take note of the data's style, layouts, and anything else that needs to be designed.",
            "Having worked in the Whitepaper Writing field for 14 years, Comfygen writers have a lot of experience",
            "More than 600 white papers have been completed"
          ]}
        />
        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />
        <ModelsSec Qa={JSON_DATA.TechHead} Whycomfygen={JSON_DATA.TechData} />
        <WhyChoosee
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <TechStack
          title="Our Cryptocurrency Development Technology Stack"
          description=""
        />


        <Faq
          faqData={JSON_DATA.Frequently}
          title="White Paper Development"
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
