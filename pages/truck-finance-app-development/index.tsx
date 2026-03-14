import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";



import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";

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

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
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


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




const Process = [
  {
    title: "Requirement Gathering & Consultation",
    description:
      "We begin by understanding your business goals, target users, and feature needs. Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/finance-app-development'>finance app development company</a> listens closely to deliver tailored truck loan app development solutions that match your vision.",
  },
  {
    title: "Market & Competitor Analysis",
    description:
      "Our experts study your industry, competitors, and user behavior to ensure your app stands out. This helps us design user-focused features for on-demand truck finance app development.",
  },
  {
    title: "UI/UX Design",
    description:
      "We create clean, intuitive, and modern app designs that are easy to use. Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX designs</a> are built for truck dealers, loan agents, and borrowers—focused on smooth navigation and quick access.",
  },
  {
    title: "App Development",
    description:
      "Our skilled on-demand truck finance app developers use the latest technologies to build fast, secure, and scalable apps. As a leading truck loan app development company, we ensure your app meets top industry standards.",
  },
  {
    title: "Third-Party API Integration",
    description:
      "We integrate KYC, credit score, payment gateways, and bank APIs to provide a complete truck finance application development solution. This allows users to apply for loans, upload documents, and make payments in real-time.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA team performs rigorous testing on all devices to ensure your app works perfectly. We fix bugs, improve speed, and test user flow before launching.",
  },
  {
    title: "Launch & Support",
    description:
      "Once approved, we publish your app on Play Store, App Store, or web platforms. We also provide post-launch support, updates, and maintenance to keep your app running smoothly.",
  },
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
      name: "Custom Truck Finance App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Looking to build a custom truck finance app? Hire expert developers from Comfygen. We develop smart, scalable, and user-friendly truck loan apps for NBFCs and fleet owners.",
      url: "https://www.comfygen.com/truck-finance-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/truck-finance-app-development",
      areaServed: "Global",
      serviceType: [
        "Custom Truck Loan App Development",
        "EMI Calculator App Development",
        "Fleet Finance Management Solutions",
        "Truck Leasing App Development",
        "Loan Management System Integration",
      ],

      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
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
          name: "Truck Finance App Development",
          item: "https://www.comfygen.com/truck-finance-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a truck finance app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A truck finance app helps users apply for truck loans, calculate EMIs, track loan status, and manage financing digitally. It simplifies the loan process for truck owners, drivers, and businesses by offering quick access to loan options, payments, and documentation in one place.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to develop a truck finance app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on app features, platform (Android/iOS), design, and tech stack. On average, developing a custom truck finance app may cost between $10,000 to $50,000. We offer flexible pricing and free consultation based on your specific project needs.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a truck loan app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The development timeline varies depending on features, design complexity, and integrations. A basic truck finance app can take 4–6 weeks, while advanced apps with AI and payment features may take 10–12 weeks. We ensure timely delivery with complete support.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide custom truck finance app solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build 100% custom truck finance apps tailored to your business model. Whether you're a loan provider, transport company, or startup, we design solutions that fit your goals with a unique UI/UX, secure backend, and smart features.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate third-party APIs like payment gateways or loan calculators?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! We integrate payment gateways, credit score APIs, loan calculators, and document verification tools. These integrations enhance your app’s functionality and deliver a seamless experience for users applying for or managing truck finance.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
        Custom Truck Finance App Development Company | Comfygen

        </title>
        <meta
          name="description"
          content="Truck finance app development company offering secure, scalable finance app development solutions for truck loans, EMI tracking, KYC integration, and digital lending for fleet businesses."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/truck-finance-app-development"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Comfygen Truck Finance App"
        />
        <meta name="author" content="Comfygen Private Limited" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta
          name="keywords"
          content="Custom Truck Loan App Development, EMI Calculator App Development, Fleet Finance Management Solutions, Truck Leasing App Development, Loan Management System Integration"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:title"
          content="Truck Finance App Development Company | Custom Truck Loan App Solutions"
        />
        <meta
          property="og:description"
          content="Comfygen offers on-demand truck finance app development solutions. Build feature-rich apps for vehicle loan management, KYC, EMI tracking, and secure payments."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/truck-finance-app-development"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development/og1.webp"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development/og1.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Truck Finance App Development Services"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trusted Truck Loan App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Get affordable and secure truck loan app development services from Comfygen. We build scalable apps with real-time EMI tracking, loan applications, and custom fintech features for transport businesses"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/truck-finance-app-development/og1.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data (optional) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Best Truck Finance App Development Company"
            ptag="Build a secure, scalable, and user-friendly truck finance app with Comfygen Technologies. As a trusted truck finance app development company, we help lenders, fleet owners, and transport businesses digitize truck loans with seamless EMI management, real-time tracking, and secure KYC integrations. Our custom truck finance app solutions are designed to simplify loan processing, improve transparency, and accelerate business growth."
            li="Secure KYC, Banking & Document Integration"
            li1="Custom Truck Loan & Vehicle Finance App Development"
            li2="Seamless EMI, Repayment & Loan Lifecycle Management"
            li3="Scalable Fintech Architecture for Growing Fleet Businesses"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/truck-finance-app-development/hero.webp"
          />
        </div>
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Truck Finance App Development Services We Offer
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen offers truck finance app development services tailored
                to transport companies, vehicle dealers, and fintech startups.
                Our commercial vehicle finance apps simplify the entire
                financing process, whether you're managing EMIs, offering truck
                loans, or handling fleet financing.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Why Do You Need a Truck Finance App for Your Business?"
          description1="A truck finance app helps your business manage loans, EMI payments, and documents in one place. It makes the loan process faster, easier, and more transparent for both you and your customers. Whether you’re a truck dealer, transport company, or finance provider, this app saves time and improves service."
          description2="With smart features and real-time updates, you can avoid delays, reduce paperwork, and offer a better loan experience to your users."
          points={[
            "Easily approve and manage truck loans",
            "Track EMI payments on time",
            "Upload and verify KYC documents",
            "Get alerts for payments and due dates",
            "Keep all finance records safe and organized",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/truck-finance-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />




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
            heading="Our Portfolio – Truck Finance App Projects"
            description="Explore how Comfygen delivers innovative, user-friendly, and scalable truck finance app development solutions for businesses across the transportation and finance sectors."
          />
        </section>

        <CallToAction
          heading="Want to launch a truck finance app?"
          text="We build custom, secure, and user-friendly truck finance apps tailored to your business needs."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/truck-finance-app-development/call2.webp"
          imageAlt="Get in touch now."
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Process for Truck Finance App Development
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                As the best truck finance app development company, we follow a
                clear and proven process to deliver high-quality, reliable, and
                affordable truck finance app development solutions. Whether
                you're a startup or an established lender, our step-by-step
                method ensures smooth project execution and on-time delivery.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <TechStack
          title="Technology Stack We Use for Truck Finance App Development"
          description="We use the latest and most secure technologies to build reliable, scalable, and high-performance truck finance applications. Across all platforms, we support real-time syncing, fast performance, and secure loan transactions."
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Our Expert Truck Finance App Developers"
          text="Looking to build a secure, smart, and scalable truck loan finance app? Hire our skilled Truck finance <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >mobile app developers</a> to turn your vision into a feature-rich mobile solution. Our finance app development team understands both financial technology and the transportation industry, making us the perfect fit for your next project."
          text1="Why Hire Developers from Comfygen?"
          text2=""
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Dedicated Fintech Expertise: Our fintech app developers specialize in truck loan app development and understand complex lending workflows.",
            "Custom & Scalable Solutions: We tailor every app to match your goals, user needs, and compliance standards.",
            "Cost-Effective Hiring Models: Flexible hiring options—hourly, part-time, or full-time—fit your project and budget.",
            "Agile Development Approach: Rapid development with clear timelines and milestone tracking.",
            "Full-Cycle Support: From design to deployment and post-launch maintenance—we handle it all.",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
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