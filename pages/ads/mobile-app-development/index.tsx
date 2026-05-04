
import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import dynamic from "next/dynamic";

import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);


const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);


const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);









const BreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Books",
      item: "https://example.com/books",
    },
  ],
};
const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Mobile App Development Company In India | Comfygen",
  url: "https://www.comfygen.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const ProductSchema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Mobile App Development Agency - Mobile Application Development Company",
  image:
    "https://comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  description:
    "Comfygen is a top mobile application development company. We provide the best Mobile application development services and custom mobile app development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};

export default function Mobile(props: any) {
  let { } = JSON_DATA;

  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };



  const Process = [
    {
      title: "Discovery & Research",
      description:
        "We start by understanding user business goals, target audience, and market trends to put the foundation for user mobile apps’ success. This stage includes idea validation and competitive analysis.",
    },
    {
      title: "Planning & Wireframing",
      description:
        "We outline the mobile app’s structure and functionality, creating wireframes that define the user flow. This blueprint serves as a roadmap for mobile app development.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our UI/UX design team creates visually engaging combines and prototypes and makes sure the mobile app is intuitive and user-friendly.",
    },
    {
      title: "Development",
      description:
        "With the use of the latest and advanced technologies, we develop mobile apps front end and back end and make sure that the app is responsive and secure across all platforms.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Strong testing is conducted to identify and fix bugs. We ensure that the mobile app performs perfectly in various environments and devices.",
    },
    {
      title: "Deployment & Launch",
      description:
        "After approval, we deploy the app on app stores like Apple and Google Play Store and manage the launch, making sure it reaches the user's intended audience.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "After post-launch, we provide continuous support, monitoring, and updates to maintain mobile app performance, introduce new features, and ensure security.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Custom Mobile App Development Company | Get Best Services
        </title>
        <meta
          property="og:title"
          content="Custom Mobile App Development Company | Get Best Services"
        />
        <meta
          name="description"
          content="Comfygen is a leading best custom mobile application development agency , that offers Best iPhone/iOS app and Android app development services and solutions for startup to enterprise-level company. Contact Us today! "
        />
        <meta
          name="og:description"
          content="Comfygen is a leading best custom mobile application development agency, that offers Best iPhone/iOS app and Android app development services and solutions for startup to enterprise-level company. Contact Us today! "
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/mobile-app-development"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Development Services | Best App Development Company"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our expert mobile app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Mobile App Development Agency India & USA | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best mobile application development company in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Mobile App Development Company in India"
        />
        <meta
          name="summary"
          content="Comfygen is the top mobile app development Industry in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Development Company"
          content="Comfygen is a top-notch Mobile app development organization in the USA. Get ahead of the competition with the top mobile app development company In India. Our expert team can bring your ideas to Business Goal."
        />
        <meta
          name="category"
          content="Mobile App Development Company in India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Mobile App Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Mobile App Development Company In India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Top Mobile App Development Company in India | Comfygen",
              url: "https://www.comfygen.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Comfygen",
              legalName: "Comfygen Pvt. Ltd.",
              url: "https://www.comfygen.com/",
              logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
              foundingDate: "2019",
              founders: [
                {
                  "@type": "Person",
                  name: "Saddam Husen",
                },
                {
                  "@type": "Person",
                  name: "Saddam Husen",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
                addressLocality: "Vaishali Nagar",
                addressRegion: "Jaipur, Rajasthan, India",
                postalCode: "302021",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91 9587867258",
                email: "sales@comfygen.com",
              },
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
              sameAs: [
                "https://twitter.com/comfygentech",
                "https://www.instagram.com/comfygen_/?hl=en",
                "https://www.linkedin.com/company/comfygen-private-limited",
                "https://www.facebook.com/comfygen",
              ],
            }),
          }}
        />
      </Head>
      <div className="overflow-hidden ">

        <HeroSectionForAllPages
          heading="Transforming Ideas into Powerful Mobile App Solutions"
          ptag="Comfygen, a leading mobile app development company , specializes in providing cutting-edge on-demand mobile app solutions. We turn your ideas into feature-rich, custom mobile apps designed to engage your audience and elevate your brand's online presence. "
          li="Custom mobile app development"
          li1="24*7 support & maintenance "
          li2="Scalable & Secure App"
          li3="AI/ML and blockchain Expertise "
          li4="Payment gateway integrations "
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/mobile-app-development-hero-section-img.webp"
        />



        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                End-to-End Mobile App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                As a top custom mobile app development services provider , we develop cutting-edge on-demand mobile apps for
                various platforms and provide mobile application development
                services in India.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Process for Creating High-Impact Custom Mobile Apps
              </h2>
              <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                As a reliable mobile application development company . Our mobile app development process is a structured approach focused on delivering innovative and high-performing custom mobile app solutions customized to user business needs.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Medicine Delivery App Development Success Stories"
            description="Explore our innovative medicine delivery app development projects, designed to enhance accessibility, efficiency, and user convenience in the healthcare sector. Our expertise ensures secure, scalable, and feature-rich solutions tailored to business needs."
          />
        </section>




        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <TechStack
          title="Our Full Stack Technology for Agile Mobile App Development Projects"
          description="The full-stack technology we use encompasses the front end, back end, database, DevOps, and quality assurance to develop agile, high-performance mobile apps. Your business needs will be met by seamless, scalable, and reliable app solutions."
        />
        <IndustriesServe heading="" description="" />
        <HireDeveloper
          heading="Hire our Mobile App Developer"
          text="Looking to develop a user-friendly mobile app? Hire mobile app developers at Comfygen and boost your business to new heights with custom mobile solutions. As an affordable mobile app development company, India, we specialize in providing high-performance, scalable, and innovative apps for both iOS and Android platforms. Whether you need on-demand mobile app development services or complex enterprise app development solutions, our team ensures your app meets the highest standards of quality and functionality."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "10+ Years of experience in mobile app development",
            "Expertise in Latest Technologies",
            "Timely Delivery",
            "Scalable and Secure Apps",
          ]}
        />

        {/* <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        /> */}
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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}

