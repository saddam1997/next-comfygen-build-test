import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowallet.json";
import LazyLoad from "react-lazy-load";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: loader, ssr: true }
)


const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
  { loading: loader, ssr: true }
)


const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
)

const SolutionsFeature = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/astrology/SolutionsFeature"),
  { loading: loader, ssr: true }
)

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
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
    title: "Requirement Analysis ",
    description: "  We gather insights into your business model, target audience, and must-have features to shape a wallet strategy."
  },
  {
    title: "Planning & Roadmap",
    description: "A clear development plan is created, outlining timelines, milestones, and technology stacks."
  },
  {
    title: "UI/UX Design Customization",
    description: "Our designers craft a branded, intuitive interface to provide users with a seamless experience across all devices."
  },
  {
    title: "Core Development",
    description: "We integrate essential wallet functionalities such as multi-currency support, KYC/AML compliance, and advanced security."
  },
  {
    title: "API & Feature Integration",
    description: "Liquidity providers, payment gateways, NFT modules, DeFi features, and custom add-ons are connected for extended usability."
  },
  {
    title: "Testing & Quality Assurance ",
    description: "Rigorous testing is performed to ensure security, scalability, and flawless performance before deployment."
  },
  {
    title: "Launch & Ongoing Support",
    description: "The wallet is deployed on your chosen platforms, with continuous monitoring, updates, and 24/7 maintenance."
  }
]


export default function Ecommerce(props) {
  let { initialData } = props;
  const slider: any = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settingstwo = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        email: "sales@comfygen.com",
        areaServed: ["IN", "US", "CA", "GB"],

        availableLanguage: "en, in",
      },
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
      "@type": "Service",
      "name": "White Label Cryptocurrency Wallet Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Build a secure, customizable, and market-ready cryptocurrency wallet with Comfygen’s white label wallet development services. Multi-currency, NFT & DeFi ready—perfect for startups, fintechs, and exchanges.",
      "url": "https://www.comfygen.comwhite-label-cryptocurrency-wallet-development",
      "mainEntityOfPage": "https://www.comfygen.comwhite-label-cryptocurrency-wallet-development",
      "areaServed": "Global",
      "serviceType": [
        "White Label Crypto Wallet Development",
        "Multi-Currency Crypto Wallet Solutions",
        "NFT Wallet Development",
        "DeFi Wallet Integration",
        "Custom Crypto Wallet Solutions"
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a white label crypto wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A white label crypto wallet is a ready-made, fully customizable wallet solution that allows businesses to launch their own branded cryptocurrency platform without building from scratch. It comes pre-integrated with essential features like multi-currency support, security protocols, and user management."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on customization and features, a white label crypto wallet can be launched in 4–8 weeks. Comfygen ensures fast deployment without compromising on security or performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can you customize design & features?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer complete UI/UX customization, branding, and feature integration, including NFT support, DeFi modules, staking, and more, so your wallet matches your business goals."
          }
        },
        {
          "@type": "Question",
          "name": "Is it secure and compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our wallets include bank-level security, two-factor authentication, biometric verification, private key encryption, and multi-signature support. We also integrate KYC/AML compliance to meet global regulations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost range?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of a white label crypto wallet depends on features, customization, blockchain integrations, and additional modules. Contact us for a personalized quote tailored to your business needs."
          }
        }
      ]
    }
    ,


    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Technologies",
      Name: "Crypto Wallet Development Company | Custom Blockchain Wallet Solutions",
      image: "Hero section image",
      description:
        "Comfygen builds powerful crypto wallets tailored for startups and enterprises. Our crypto wallet development services ensure high security, multi-currency support, and smooth integration across mobile, desktop, and web platforms.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "115",
      },
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
          "name": "Wallet development company",
          "item": "https://www.comfygen.com/wallet-development-company  "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "White Label Cryptocurrency Wallet Development",
          "item": "https://www.comfygen.com/white-label-cryptocurrency-wallet-development "
        }
      ]
    }
    ,
  ];

  return (
    <>
      <Head>
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <title>
          White Label Cryptocurrency Wallet Development Services | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises."
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/white-label-cryptocurrency-wallet-development"
        />


        <meta name="keywords" content="White Label Crypto Wallet Development, Multi-Currency Crypto Wallet Solutions, NFT Wallet Development, DeFi Wallet Integration, Custom Crypto Wallet Solutions"></meta>


        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"></meta>

        {/* <!-- Compatibili/ty Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and/ Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="White Label Cryptocurrency Wallet Development" />


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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp"
        />
        <meta
          property="og:title"
          content="White Label Cryptocurrency Wallet Development Services | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises."
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="White Label Cryptocurrency Wallet Development | Comfygen"

        />
        <meta
          name="twitter:description"
          content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/white-label-cryptocurrency-wallet.webp" />
        <meta property="og:image:alt" content="White Label Cryptocurrency Wallet Development" />

        <meta property="og:title" content="White Label Cryptocurrency Wallet Development | Comfygen" />
        <meta property="og:description" content="Comfygen’s white label cryptocurrency wallet development services. Multi-currency support, NFT integration, DeFi features, and fast deployment for startups, fintechs, exchanges, and enterprises." />


        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden lg:pt-[20px]">
        {/* hero section */}
        <div className="">
          <HeroSectionForAllPages
            heading="White Label Cryptocurrency Wallet Development Services"
            ptag="Comfygen, a top-rated White Label Cryptocurrency Wallet Development Company, delivers end-to-end wallet White Label Crypto Wallet Development solutions tailored to your business. With our ready-to-deploy, customizable crypto wallet, you can launch a safe, secure, fully branded platform without the complexity of building from zero. Our White Label Cryptocurrency Wallet Development services combine speed, flexibility, and enterprise-level security that help to expand your business while we handle the technology."
            ptag1=""
            li="Multi-currency support for global adoption"
            li1="Bank-level security with encryption & 2FA"
            li2="Custom branding and UI/UX options"
            li3="Fast deployment with ongoing support"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage={"https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/White_Label_Cryptocurrenc_herotow.webp"}
          />
        </div>
        <AboutSection
          heading="Why Choose White Label Cryptocurrency Wallet Development Services?"
          description1="A white-label cryptocurrency wallet is a ready-made, yet fully customizable <a class='text-blue-500 underline' href='https://www.comfygen.com/wallet-development-company'>wallet development solution </a>that allows businesses to launch a safe, secure, and feature-rich wallet without developing it from scratch. Instead of investing months and high <a class='text-blue-500 underline' href='https://www.comfygen.com/blog/cost-to-make-a-crypto-wallet-app'>wallet development cost</a>, companies can deploy a wallet quickly, designed with their own branding, UI, and features. That’s why Most of the startups, exchanges, and enterprises are choosing white label cryptocurrency wallet development services, which guarantee faster time-to-market, cost efficiency, and future scalability. At Comfygen, we bring deep blockchain expertise, delivering crypto wallets that are secure, compliant, and built to grow with your business."
          description2=""
          description3=""
          points={[
            "Rapid deployment to launch your wallet in weeks, not months",
            "Full customization with branding, UI/UX, and advanced features",
            "Bank-grade security with encryption, 2FA, and multi-signature support",
            "Scalable architecture designed for future crypto and DeFi integrations",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/white-label-cryptocurrency-wallet-development/White_Label_about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Core Features of Our White Label Cryptocurrency Wallet Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Our white label cryptocurrency wallet development services provide businesses with a secure, customizable, and future-ready wallet platform. Packed with advanced functionality, our ready-made Cryptocurrency Wallet development solutions empower you to deliver a flawless user experience while ensuring the highest level of security.

              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
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


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our White Label Crypto Wallet Development Portfolio"
            description="At Comfygen, we specialize in delivering secure, customizable, and market-ready white label cryptocurrency wallet solutions. Our portfolio showcases a diverse range of projects, each tailored to meet the unique needs of our clients while ensuring scalability and user engagement."
          />
        </section>

        <CallToAction
          heading="Ready to Launch Your White Label Crypto Wallet?"
          text="Comfygen’s white label cryptocurrency wallet development services help you launch secure, customizable, and ready-to-use crypto wallets that scale your business and attract more users."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our End-to-End White Label Wallet Development Process
              </h2>
              <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                At Comfygen, we follow a structured approach to deliver white label cryptocurrency wallet development services that are secure, scalable, and tailored to your business needs. Each stage is handled by our <a className='text-blue-500 underline' href='https://www.comfygen.com/blockchain-development'>blockchain development</a> expert to ensure precision and reliability.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          customTechData={null}
          title="Technology Stack We Use in White Label Crypto Development"
          description="At Comfygen, we build our white label cryptocurrency wallets on a powerful, secure, and scalable tech stack. By combining advanced blockchain platforms, enterprise-grade security, and modern frameworks, we ensure your wallet is future-ready and reliable."
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <IndustriesServe
          heading="Industries We Serve with White Label Cryptocurrency Wallet Development"
          description="Comfygen delivers secure, scalable, and customizable white label cryptocurrency wallet development solutions tailored to diverse industries, enabling faster crypto adoption and growth."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <HireDeveloper
          heading="Hire White Label Crypto Wallet Developers"
          text="Looking to build a crypto wallet? Comfygen offers experienced white label crypto wallet developers who can turn your vision into reality. Our team has expertise in blockchain technology, DeFi integration, NFT support, and multi-currency wallet solutions, ensuring your platform is future-ready and market-competitive."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise Across Blockchain Platforms",
            "Custom Wallet Development",
            "Advanced Security Implementation",
            "Faster Time-to-Market",
            "Ongoing Support & Maintenance",
          ]}
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions"
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