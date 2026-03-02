import { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/taxi.json";

import dynamic from "next/dynamic";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import CardFeatures from "../../components/Newcomponet/comman/CardFeatures";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";
import ClientTestimonials from "../../components/Newcomponet/SectionCompoent/ClientTestimonials";
import Link from "next/link";
import ComparisonSection from "../../components/Newcomponet/SectionCompoent/ComparisonSection";



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

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);



const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TeckStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
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

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const AppcardSlider = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AppcardSlider"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



export default function Ecommerce(props) {
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
      title: "Business Analysis & Planning",
      description:
        "Understand your vision, define workflows, target audience, and monetization strategy.",
    },
    {
      title: "Requirement Gathering",
      description:
        "Identify features, integrations, platforms, and technical specifications.",
    },
    {
      title: "UI/UX Designing",
      description:
        "Create intuitive, engaging, and conversion-focused designs for mobile and web.",
    },
    {
      title: "App Development",
      description:
        "Build feature-rich apps with scalable architecture, fast performance, and secure backend.",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous testing for bugs, usability, security, and a smooth user experience.",
    },
    {
      title: "Deployment",
      description:
        "Launch apps on iOS, Android, and web, ensuring seamless performance and stability.",
    },
    {
      title: "Support & Maintenance",
      description:
        "Provide updates, new features, bug fixes, and ongoing technical support for growth.",
    },
  ];




  const jsonLdData = [



    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Taxi App Development Company",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com"
      },
      "url": "https://www.comfygen.com/taxi-app-development-company ",
      "description": "End-to-end taxi app development services including ride-hailing apps, taxi booking solutions, fleet management systems, and white-label taxi app solutions for startups and enterprises.",
      "areaServed": "Worldwide",
      "serviceType": [
        "Taxi Booking App Development",
        "Ride-Hailing App Development",
        "Uber-Like App Development",
        "Fleet Management Software",
        "On-Demand Taxi App Solutions",
        "White Label Taxi App Development"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Best Taxi App Development Company | Comfygen Technologies",
      "image": " About Section Image ",
      "description": "Looking for the best taxi app development company? Comfygen delivers custom taxi booking app solutions, ride-hailing app development, and scalable mobility solutions for startups and enterprises.",
      "brand": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "824"
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
          name: "Mobile App Development",
          item: "https://www.comfygen.com/mobile-app-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Taxi App Development Company",
          item: "https://www.comfygen.com/taxi-app-development-company",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I customize my Taxi Booking Application Development Services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Comfygen offers fully customizable cab booking app development services. Tailor features, design, and functionalities like branding, real-time tracking, and payment gateways to meet your business needs seamlessly.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to build a taxi booking app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Taxi booking app development costs range from $5,000 for a simple app up to $40,000 for complex solutions, depending on the platform, features, app complexity, custom designs, and client needs.",
          },
        },
        {
          "@type": "Question",
          name: "Will Comfygen sign an NDA for the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we sign a Non-Disclosure Agreement (NDA) for our clients; so that they feel satisfied and have trust in us for their projects. We ensure the security, confidentiality, and privacy of the project. This NDA is a security, which cannot be breached by our company or experts at all.",
          },
        },
        {
          "@type": "Question",
          name: "Will Comfygen deploy the Uber-like app development solution?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Comfygen can deploy Uber-like app development solutions customized to your specific requirements. They specialize in creating feature-rich, scalable, and customizable taxi-booking apps.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop a taxi booking app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The development timeline varies based on the complexity and features of the app. On average, it can take 2-6 months. We provide detailed project timelines after understanding your needs.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms do you develop taxi apps for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We develop taxi apps for Android, iOS, and cross-platform solutions, ensuring compatibility across devices.",
          },
        },
        {
          "@type": "Question",
          name: "Is the taxi app scalable for future growth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build scalable taxi apps that can handle increasing user demands and allow easy integration of new features as your business grows.",
          },
        },
        {
          "@type": "Question",
          name: "Can the app support multiple languages and currencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we can integrate multiple languages and currency support to make your app accessible to a global audience.",
          },
        },
        {
          "@type": "Question",
          name: "Can the app be customized for specific business needs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our taxi app solutions are fully customizable to meet your specific requirements, including unique features, branding, and functionality.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Trusted Taxi App Development Company | Taxi App Development Experts</title>
        <meta
          name="description"
          content="Trusted taxi app development company to create custom ride-hailing apps with GPS tracking, in-app payments, driver management, and scalable architecture for your business."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/taxi-app-development-company"
        />
        <meta
          name="keywords"
          content="White-Label Taxi App Development, Custom Taxi Booking App Development, Cab Booking App Development, Uber Ride Booking App Development, Car Rental App Development"
        />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        {/* <!-- ================= OPEN GRAPH ================= --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Taxi App Development Company | Comfygen" />
        <meta property="og:description" content="Build scalable taxi booking and ride-hailing apps with Comfygen. We develop secure, feature-rich, and user-friendly taxi solutions for startups and enterprises." />
        <meta property="og:url" content="https://www.comfygen.com/taxi-app-development-company" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp"></meta>


        {/* <!-- ================= TWITT/ER CARD ================= --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxi App Development Company | Comfygen" />
        <meta name="twitter:description" content="Launch scalable taxi booking and ride-hailing apps with Comfygen. Secure, feature-rich, and enterprise-ready taxi app development solutions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading={JSON_DATA.Herosection.heading}
          subhead={JSON_DATA.Herosection.subhead}
          ptag={JSON_DATA.Herosection.ptag}
          li={JSON_DATA.Herosection.li}
          li2={JSON_DATA.Herosection.li2}
          li3={JSON_DATA.Herosection.li3}
          li4={JSON_DATA.Herosection.li4}
          alt={JSON_DATA.Herosection.alt}
          title={JSON_DATA.Herosection.title}
          btnName={JSON_DATA.Herosection.btnName}
          btnLink={JSON_DATA.Herosection.btnLink}
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage={JSON_DATA.Herosection.bgImage}
        />

        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                {JSON_DATA.ServicesData.heading}
              </h2>
              <p className="text-base text-center font-normal" dangerouslySetInnerHTML={{ __html: JSON_DATA.ServicesData.description }}>

              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.ServicesData.services} />
            </div>
          </div>
        </section>

        <AboutSection
          heading={JSON_DATA.AboutSection.heading}
          description1={JSON_DATA.AboutSection.description1}
          description2={JSON_DATA.AboutSection.description2}
          description3={JSON_DATA.AboutSection.description3}
          alt={JSON_DATA.AboutSection.alt}
          points={JSON_DATA.AboutSection.points}
          imageSrc={JSON_DATA.AboutSection.imageSrc}
          link={JSON_DATA.AboutSection.link}
          linkText={JSON_DATA.AboutSection.linkText}
        />
        {/* <ContactFromCenter /> */}


        <CallToAction
          heading={JSON_DATA.CallToAction.heading}
          text={JSON_DATA.CallToAction.text}
          buttonText={JSON_DATA.CallToAction.buttonText}
          buttonLink={JSON_DATA.CallToAction.buttonLink}
          imageSrc={JSON_DATA.CallToAction.imageSrc}
          imageAlt={JSON_DATA.CallToAction.imageAlt}

        />

        <AppcardSlider
          heading={JSON_DATA.Industries.heading}
          description={JSON_DATA.Industries.description}
          sliderData={JSON_DATA.Industries.IndustriesServe}
          openModal={openModal}
        />
        <div className="py-8">
          <Features
            heading={JSON_DATA.featuresData.heading}
            description={JSON_DATA.featuresData.description}
            featuresData={JSON_DATA.featuresData.features}
            grid={3} />
        </div>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.Portfoliodata.portfolio}
            heading={JSON_DATA.Portfoliodata.heading}
            description={JSON_DATA.Portfoliodata.description}
          />
        </section>

        <CardFeatures
          heading={JSON_DATA.featuresData1.heading}
          description={JSON_DATA.featuresData1.description}
          featuresData={JSON_DATA.featuresData1.features}
          grid="2"
        />


        <ComparisonSection data={JSON_DATA.BookingComparison} />

        <CallToAction
          heading="Looking for a Dedicated Development Partner?"
          text="Comfygen Technologies offers expert guidance to help businesses build scalable, high-performance taxi booking apps. Connect with our team to discuss your idea and plan your project."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our End-to-End Taxi App Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                We follow a structured development approach to build efficient, secure, and scalable <Link href={"https://www.comfygen.com/blog/ai-taxi-app-development/"} className="text-blue-600 font-semibold">AI-powered taxi booking apps</Link>. From initial concept to post-launch support, Our process ensures timely delivery and results in business-ready taxi app development solutions designed for long-term success.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TeckStack
          title="Technologies Powering Our Taxi Booking App Development"
          description="We leverage cutting-edge technologies to build fast, secure, and scalable taxi booking platforms. Our development approach combines modern backend and frontend technologies, enabling seamless experiences across Android and iOS. Whether it’s native Android and <a href='https://www.comfygen.com/ios-app-development' class='underline font-semibold'>iOS app development</a> or cross-platform solutions."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <ClientStories />

        <HireDeveloper
          heading="Hire On-Demand Taxi App Developers"
          text="Build a taxi app like Uber or Ola with Comfygen by hiring our expert taxi app developers. <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-extrabold'>Hire expert on-demand taxi mobile app developers</a> to create secure, scalable, and feature-rich apps with real-time GPS tracking, AI-powered ride dispatch, multiple payment options, and white-label solutions. For global projects, our offshore taxi app development team ensures seamless communication, timely delivery, and ongoing support."
          text1=""
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced taxi app developers",
            "AI-based route optimization & ride allocation",
            "Real-time GPS tracking for rides",
            "Full support: development, launch, and maintenance",
          ]}
        />

        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
        />


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

