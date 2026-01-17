import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./mobilebankingappdevelopment.json";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);
const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { loading: loader, ssr: true }
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);


const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const CardFeatures = dynamic(
  () => import("../../components/Newcomponet/comman/CardFeatures"),
  { loading: loader, ssr: true }
);

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


const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
  { loading: loader, ssr: true }
)


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




const Process = [
  {
    title: "Requirement Analysis & Strategy Planning",
    description: "We start by thoroughly analyzing your banking business needs, customer expectations, and regulatory requirements. Our mobile banking app development team collaborates with stakeholders to define app goals, technical specifications, and a feature roadmap that aligns with market trends and user demands."
  },
  {
    title: "UI/UX Design & Wireframing",
    description: "Our experienced designers create intuitive and engaging wireframes to ensure seamless user journeys. During this stage of mobile banking app development, we focus on user-friendly interfaces, modern design elements, and responsive layouts that enhance customer satisfaction and retention."
  },
  {
    title: "Prototyping and User Flow Validation",
    description: "Before moving into full-scale development, we deliver an interactive prototype of your digital banking app development. This prototype simulates user experience and app flow, allowing stakeholders to validate features, design, and navigation for a flawless end-user experience."
  },
  {
    title: "App Development & Feature Implementation",
    description: "Our banking app developers build secure, robust, and scalable applications for both iOS and Android platforms. This stage involves implementing core banking features such as fund transfers, account management, bill payments, and notifications using the latest mobile banking app development tools and technologies."
  },
  {
    title: "Integration with Banking APIs and Core Systems",
    description: "We seamlessly integrate your app with core banking systems, third-party APIs, digital wallets, and payment gateways. This ensures real-time transaction processing, secure authentication, and data synchronization—key to high-performance mobile banking application development."
  },
  {
    title: "QA, Security, and Compliance Testing",
    description: "Our QA experts perform rigorous testing, including functional, usability, performance, and security testing. We also ensure your banking app complies with global financial regulations like PCI-DSS, GDPR, and RBI guidelines to protect user data and build trust."
  },
  {
    title: "Deployment, Launch & Support",
    description: "Once your mobile banking app is fully tested and approved, we deploy it across app stores and cloud infrastructure. Post-launch, we provide regular updates, monitoring, and 24/7 support to ensure performance, compliance, and security are maintained at all times."
  }
];







export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let { Frequently } = JSON_DATA;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);


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
      "name": "Mobile Banking App Development Company",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen is a leading mobile banking app development company offering secure, AI/ML and blockchain-powered fintech app development services with core banking integration and stunning UI/UX.",
      "url": "https://www.comfygen.com/mobile-banking-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/mobile-banking-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Mobile Banking App Development",
        "AI-Powered Banking App Solutions",
        "Blockchain Banking App Development",
        "Digital Wallet Integration",
        "Core Banking System Integration",
        "Neo Banking App Development",
        "Fintech App UI/UX Design",
        "Mobile Banking Security Solutions"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://www.linkedin.com/company/comfygen-private-limited"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
          "addressLocality": "Jaipur",
          "postalCode": "302006",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7",
          "addressLocality": "Toronto",
          "postalCode": "M1G3S7",
          "addressCountry": "Canada"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "areaServed": ["IN", "US", "CA", "GB", "AU", "DE", "FR"],
        "email": "sales@comfygen.com",
        "availableLanguage": ["en", "in"]
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Private Limited",
      "name": "Mobile Banking App Development Services",
      "image": "https://www.comfygen.com/image/og-image-mobile-banking-app.webp",
      "description": "Build secure and feature-rich mobile banking apps with Comfygen. Our experts offer AI, blockchain, and core banking integrations tailored to your business needs.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1928"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to develop a mobile banking app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To develop a mobile banking app, start by identifying key features like secure login, transaction tracking, account management, and integration with core banking systems. Choose a development approach (native or cross-platform) and ensure compliance with industry regulations. Partnering with an experienced mobile banking app development firm like Comfygen ensures the app is built with advanced security features and user-friendly design."
          }
        },
        {
          "@type": "Question",
          "name": "How much does mobile banking app development cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of mobile banking app development can range from $25,000 for a basic version to over $100,000 for AI and blockchain-integrated enterprise solutions. Contact Comfygen for a custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "What features should a mobile banking app include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A robust mobile banking app should include secure login, real-time transaction tracking, fund transfers, digital wallet integration, AI-driven insights, and core banking connectivity."
          }
        },
        {
          "@type": "Question",
          "name": "What security features are included in the mobile banking software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our mobile banking software development solutions prioritize user security. Features include two-factor authentication (2FA), biometric authentication, encryption protocols like AES, secure payment gateways, and real-time fraud detection. We also ensure compliance with PCI-DSS and other regulatory standards to protect your users’ sensitive financial data from threats, providing peace of mind for both businesses and customers."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a mobile banking app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline for mobile banking app development depends on the complexity of the features and integrations. On average, it takes around 3 to 6 months to develop a fully functional mobile banking app. Simple apps can be completed faster, while more complex apps with features like AI-driven insights and blockchain integration may take longer. We provide a customized timeline after analyzing your specific requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate AI and Blockchain into mobile banking apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in AI and Blockchain-based mobile banking app development. AI enhances your app with features like smart chatbots, personalized financial insights, and fraud detection. Blockchain ensures data transparency, secure transactions, and immutability. These technologies make your mobile banking application secure, scalable, and future-ready."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms do you support for mobile banking app development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Comfygen, we provide mobile banking app development for both iOS and Android platforms, ensuring a seamless experience across devices. We use technologies like React Native, Flutter, Swift, and Kotlin for cross-platform and native app development. Whether you're targeting a specific platform or need a universal solution, we tailor the app to match your banking business requirements."
          }
        }
      ]
    }
  ];




  return (
    <>
      <Head>
        <title>Custom Mobile Banking App Development Company</title>
        <meta name="description" content="Comfygen Technologies is a custom mobile banking app development company delivering secure, scalable, and compliant fintech solutions for banks and startups." />
        <link rel="canonical" href="https://www.comfygen.com/mobile-banking-app-development" />

        <meta name="keywords" content="Custom Digital Banking App Development, Best Mobile Banking App Development Company, iOS & Android Banking Apps, Fintech App Development Services, AI-Based Mobile Banking App Development, Mobile Banking Software Development, Custom Mobile Banking App Development, Digital Wallet Integration, Core Banking System Integration, Paytm Payments Clone App Development, blockchain-based banking app development" />


        {/* Robots */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* Compatibility */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Mobile Banking App" />

        {/* Author Info */}
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />

        {/* SEO Meta */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Meta */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/mobile-banking-app-development/mobile-banking-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/mobile-banking-app-development/mobile-banking-app-development-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mobile Banking App Development" />
        <meta property="og:url" content="https://www.comfygen.com/mobile-banking-app-development" />
        <meta property="og:title" content="Custom Mobile Banking App Development Company | Fintech App Developers – Comfygen" />
        <meta property="og:description" content="Comfygen is a top-rated mobile banking app development company offering secure, scalable, and custom digital banking solutions. Our expert fintech app developers build Android & iOS banking apps integrated with AI, blockchain, and core banking systems." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Banking App Development Services | Fintech App Experts – Comfygen" />
        <meta name="twitter:description" content="Build secure and feature-rich mobile banking apps with Comfygen, a leading mobile banking app development company offering AI, blockchain, and core banking integrations." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/comfygen.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Mobile Banking App Development",
              "operatingSystem": "ANDROID, iOS",
              "applicationCategory": "FinanceApplication",
              "url": "https://www.comfygen.com/mobile-banking-app-development",
              "description": "Top-rated mobile banking app development company building AI and blockchain-powered apps with core banking integration.",
              "author": {
                "@type": "Organization",
                "name": "Comfygen Private Limited"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Comfygen Private Limited",
                "url": "https://www.comfygen.com"
              },
              "image": "https://www.comfygen.com/image/og-image-mobile-banking-app.webp"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>


      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Custom Mobile Banking App Development Company"
          ptag="Comfygen Technologies is a trusted custom mobile banking app development company delivering secure, scalable, and innovative banking solutions for fintech startups, banks, and financial institutions. We build advanced mobile banking applications with seamless transactions, strong data security, and intuitive UI/UX to enhance customer experience."
          ptag1='Our expert fintech developers leverage cutting-edge technologies such as AI, blockchain, and cloud computing to create next-generation mobile banking apps that ensure compliance, improve operational efficiency, and support business growth. From digital wallets to full-scale core banking solutions, Comfygen Technologies provides reliable mobile banking app development services tailored to modern financial needs.'
          li="AI-Powered Personalization"
          li1="Advanced Security Protocols"
          li2="Blockchain Integration"
          li3="Seamless User Experience"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/mobile-banking-app-development/mobile-banking-app-development-hero.webp"
        />

        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">End-to-End Mobile Banking Application Development Services We Offer</h2>
              <p className="text-base text-center font-normal">Comfygen delivers custom, scalable, and secure mobile banking app development services, helping banks and fintech startups stay ahead with modern tech like AI, Blockchain, and AR/VR. From UI/UX to compliance, we cover it all.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <AboutSection
          title="About Company"
          heading="Custom Mobile Banking App Development Company"
          description1="With the rising demand for seamless digital transactions, mobile banking app development has become essential for modern financial institutions. As a leading <a class='font-semibold text-blue-500' href='/finance-app-development'>FinTech app development company</a>, Comfygen specializes in building secure, feature-rich, and scalable banking applications tailored for both startups and enterprises."


          description2="Backed by a skilled fintech team and over a decade of experience, we’ve successfully delivered multiple digital banking app development projects using cutting-edge technologies like AI/ML, Blockchain, and AR/VR."
          description3="Our mission is to transform traditional banking into intuitive, mobile-first experiences that meet today’s user expectations. Choose Comfygen to build a custom mobile banking solution that stands out in functionality, security, and performance."
          imageSrc="https://www.comfygen.com/comfygen-images/mobile-banking-app-development/mobile-banking-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />




        <CardFeatures
          heading="AI and Blockchain-Based Mobile Banking Application Development Solutions"
          description=" At Comfygen, we deliver AI and Blockchain-powered mobile banking app development solutions that redefine digital finance. By integrating artificial intelligence and decentralized technologies, we empower banking apps to be smarter, safer, and more efficient."
          featuresData={JSON_DATA.featuresData1}
          grid="2"
        />


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/mobile-banking-app-development/develop-app-clones.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Mobile Banking Apps Portfolio"
            description="Explore our cutting-edge mobile banking app development portfolio, showcasing secure, scalable, and feature-rich banking solutions. From AI-integrated finance apps to blockchain-backed wallets, our apps deliver seamless digital banking experiences across platforms. Partner with us to launch your next-gen mobile banking application with confidence."
          />
        </section>


        <div className="py-8">
          <Features
            heading="We Develop Mobile Banking Apps With Advanced Panel Features"
            description="At Comfygen, we specialize in creating mobile banking apps with advanced panel features designed to enhance the user experience while providing comprehensive control and management tools for administrators."
            featuresData={JSON_DATA.featuresData}
            grid={2} />
        </div>



        <TrendsSection
          heading="The Emerging Technologies We Use for Mobile Banking App Development"
          subtitle="At Comfygen, a trusted mobile app development company, we integrate cutting-edge technologies to build robust, secure, and scalable digital banking solutions. Our advanced tech stack ensures seamless user experiences, real-time data processing, and future-proof app architecture that aligns with modern financial needs."
          trends={JSON_DATA.Emerging}
        />


        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Mobile Banking App Development Process</h2>
              <p className="text-base font-normal mt-2">
                As a trusted mobile banking app development company, Comfygen follows a comprehensive and transparent development approach to deliver secure, scalable, and high-performing mobile banking applications. Our structured process ensures alignment with your business goals and compliance with financial industry standards.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>



        <TechStack
          title="Technology Stack We Use in Banking Mobile App Development"
          description="At Comfygen, we leverage an advanced technology stack to deliver secure, high-performance, and scalable mobile banking app development solutions. Our team utilizes industry-best frameworks and tools to create seamless, compliant, and robust digital banking apps that meet evolving financial needs."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Dedicated Mobile Banking App Developers For Your Advanced Mobile Banking App Project"
          text="In the mobile banking app development landscape, Comfygen stands out as a reliable and expert technology partner. As a top-rated mobile banking application development company, we build advanced banking apps that are secure, compliant, and highly scalable across iOS, Android, and web platforms. Our team adapts to your requirements and delivers high-performing fintech applications with precision."

          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "We have certified mobile banking app developers with 10+ years of experience in building complex financial and fintech solutions.",
            "Hire hourly-based, project-based, or a dedicated development team as per your business model and project scope.",
            "We offer custom mobile banking softwre development services backed by skilled developers with deep knowledge of the banking domain.",
            "Our team stays aligned with the latest banking app development trends, including AI, blockchain, and biometric security integration.",
            "We support you through every phase—from development to testing, deployment, and post-launch updates—ensuring a stress-free experience."
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials} />

        <Faq faqData={Frequently} title="" />
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

