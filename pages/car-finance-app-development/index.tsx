import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import ConsultancyApproach from "../components/ConsultancyApproach";
import ServicesSec from "../components/ServicesSec";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import HireDeveloper from "../components/HireDeveloper";
import Features from "./components/Features";
import ClientTestimonials from "../components/ClientTestimonials";
import PortfolioSec from "../componentsnew/PortfolioSec";
import SolutionsFeature from "../componentsnew/SolutionsFeature";
import NewTeckStack from "../componentsnew/NewTeckStack";

const HeroSectionForAllPages = dynamic(
  () => import("../components/HeroSectionForAllPages"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Faq = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Requirement Gathering",
    description:
      "We begin by understanding your business goals, target audience, and app expectations. This helps us define a tailored strategy for your car finance app development project.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX design</a> team crafts an intuitive and engaging interface that offers a seamless user experience. We focus on usability, simplicity, and trust-building layouts that guide users through the car loan journey.",
  },
  {
    title: "App Development",
    description:
      "Using the latest tech stacks, our dedicated car finance mobile app developers build secure and scalable car finance apps with all essential features like EMI calculators, loan applications, credit checks, and more.",
  },
  {
    title: "Testing & QA",
    description:
      "We conduct rigorous testing to ensure your car loan app is bug-free, secure, and high-performing across all devices. Functional, performance, and security testing is done at every stage.",
  },
  {
    title: "Deployment",
    description:
      "Once approved, we launch your car finance app on relevant platforms (Google Play, App Store) and set up backend servers and APIs for smooth operation and accessibility.",
  },
  {
    title: "Post-Launch Optimization",
    description:
      "We monitor user feedback, app performance, and analytics to optimize the app experience. Updates, improvements, and new features are rolled out as needed to boost engagement and ROI.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Our auto loan app development team provides ongoing support, regular updates, and security patches to keep your app running smoothly. We’re always here to help you scale and grow.",
  },
];

const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/comfygen-images/car-finance-app-development/potfolio1.webp",
      head: "Instant Car Loan App for Dealerships",
      name: "Car loan app is a custom car finance app developed for a large dealership network, offering real-time loan approvals directly from the showroom floor. It includes a smart EMI calculator, automated credit check API, and loan comparison tools.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "https://www.comfygen.com/contact-us",
    },
    {
      img: "https://www.comfygen.com/comfygen-images/car-finance-app-development/potfolio2.webp",
      head: "Car Loan Management App for Fintech Startups",
      name: "Car Loan Management App is a full-featured auto loan app for a fintech startup offering car loan services to Tier 2 & 3 cities. The car finance app includes digital onboarding, EMI planner, multi-lender loan comparison, and a repayment tracker.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
      buttonLink: "https://www.comfygen.com/contact-us",
    },
  ],
};

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
      name: "Comfygen Technologies",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      telephone: "+91-958-786-7258",
      priceRange: "$",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
          addressLocality: "Jaipur",
          postalCode: "302006",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
          addressLocality: "Toronto",
          postalCode: "M1G3S7",
          addressCountry: "Canada",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Custom Car Finance App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Get custom car finance app development with EMI calculators, credit score checks, and fast loan processing. Comfygen Technologies builds secure, scalable car loan apps tailored for startups, banks, and dealerships.",
      url: "https://www.comfygen.com/car-finance-app-development",
      mainEntityOfPage: "https://www.comfygen.com/car-finance-app-development",
      areaServed: "Global",
      serviceType: [
        "Custom car finance app development",
        "Car loan EMI calculator integration",
        "Auto loan app with credit score check",
        "Car dealership loan app solutions",
        "AI-powered car finance app development",
      ],

      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Technologies",
      Name: "Auto Loan App Development Solutions",
      image: "https://www.comfygen.com/comfygen-images/car-finance-app-development/about.webp",
      description:
        "Hire professional developers for auto loan app development. Comfygen builds secure car finance apps with real-time credit checks, EMI tools, and admin-user dashboards for complete control and user trust.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "169",
      },
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
          name: "Car Finance App Development",
          item: "https://www.comfygen.com/car-finance-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to build a car finance app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of developing a car finance app depends on features, platforms, design, and development time. On average, it may range from $10,000 to $30,000. For exact pricing, contact us with your project details.",
          },
        },
        {
          "@type": "Question",
          name: "How long does car finance app development take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The car finance app development time usually takes 4 to 10 weeks based on your app’s features, design, and platform. Complex apps with integrations may take longer. We ensure fast delivery without compromising quality.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate credit score checks in the app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we can easily integrate credit score checks using APIs like CIBIL, Equifax, or Experian. It helps users know their eligibility and speeds up the loan approval process within your car finance app.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide post-launch support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer full post-launch support, including bug fixes, updates, and feature enhancements. Our auto loan app development team ensures your car finance app stays updated, secure, and performs well after it goes live.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Car Finance App Development Company | Auto Loan App Solutions
        </title>
        <meta
          name="description"
          content="Comfygen is a leading car finance app development company offering custom auto loan apps with EMI calculators, credit score checks, and secure integrations. Hire experts to build high-performing car finance mobile apps for banks, NBFCs, and dealerships."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/car-finance-app-development"
        />


        <meta
          property="og:title"
          content="Car Finance Mobile App Development | Build Smart Auto Loan Apps"
        />
        <meta
          property="og:description"
          content="Comfygen Technologies delivers powerful car finance mobile apps with document upload, KYC, EMI simulation, and repayment management. We help fintech brands transform auto loan services through seamless digital solutions."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/car-finance-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/car-finance-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/car-finance-app-development/og.webp"
        />
        <meta property="og:image:alt" content="Car Finance App Development" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Car Finance App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Looking for a car finance app development company? Comfygen Technologies offers feature-rich, user-friendly auto loan apps with real-time approvals, secure APIs, and repayment tracking. Hire our expert developers today!"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/car-finance-app-development/og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
        <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden sm:pt-16">
        <div className="">
          <HeroSectionForAllPages
            heading="Car Finance App Development Company"
            ptag="Comfygen is a leading car finance app development company, delivering secure, scalable, and user-centric auto loan solutions for fintech startups, car dealerships, and financial institutions. Our expert car finance app developers create high-performing car finance apps with intuitive UI/UX, real-time loan processing, and credit integrations to streamline financing and enhance user experience. Partner with us to build future-ready car finance apps that simplify lending and accelerate digital growth."
            li="Empowering Car Finance with Smart Digital Solutions"
            li1="Driving Auto Lending with Custom Finance Apps"
            li2="10+ Year Expert Fintech App Developers"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/car-finance-app-development/hero1.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Building Smart Car Finance Apps That Simplify Auto Lending"
          description1="Partner with a trusted car finance mobile app development company that empowers dealerships, lenders, and fintech startups with modern, secure, and feature-rich finance solutions. At <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/' >Comfygen Technologies</a>, we build end-to-end car finance applications that streamline the loan process—from eligibility checks and EMI calculators to credit score integration and real-time approvals."
          description2="Our team of fintech developers, designers, and analysts works closely with clients across the auto and finance industries to craft tailored finance app development solutions that improve user engagement and operational efficiency. Whether you're a startup looking to launch a digital car loan app or an enterprise aiming to digitize your financing services, we help you achieve faster, smarter lending."
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide Custom and Scalable Car Finance App Development
                Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen provides tailored car finance app development to
                fintech startups, dealerships, and financial institutions. We
                build car finance mobile apps that simplify loan processing,
                improve user engagement, and enhance operational efficiency
                through real-time credit integrations.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Portfolio – Car Finance App Development Projects"
          description="Explore how Comfygen empowers businesses with innovative and scalable car finance app development solutions. Our custom-built auto loan apps are tailored for fintech startups, banks, and dealerships to streamline digital lending, boost engagement, and deliver real results."
        />
        <Features />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Car Finance App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                At Comfygen Technologies, we follow a simple and clear process
                to create a car finance app. As an experienced auto loan app
                development company, we make sure each step is done properly so
                your app works great and is easy to use.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <NewTeckStack
          title="Technology Stack We Use for Car Finance App Development"
          description="Comfygen develops top-notch car finance apps using the latest and most trusted technologies. Our tech stack ensures your app works smoothly and is easy to scale for future growth."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <SolutionsFeature
          title="Benefits of Developing a Car Finance App"
          subtitle="Developing a custom car finance app is a smart step for any business offering auto loans. It helps improve the user experience, save time, and grow your business faster. Here are the main benefits of car finance app development:  "
          data={JSON_DATA.servicesData1}
        />

        <HireDeveloper
          heading="Hire Car Finance App Developer"
          text="Want to build a smart and secure car finance app? Hire expert <a class='underline font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >car finance mobile app developers</a> from Comfygen to bring your idea to life. We create custom, easy-to-use apps with features like EMI calculators, credit checks, and document uploads. Get fast delivery, full support, and trusted solutions from a top car finance app development company."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Skilled in car finance app development",
            "10+ years of fintech experience",
            "Knowledge of credit score APIs & EMI tools",
            "On-time delivery with full support",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="" />
      
      </div>
    </>
  );
}
