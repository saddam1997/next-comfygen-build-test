import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";



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



const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
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
    title: "Discovery & Requirement Analysis",
    description:
      "We start by understanding your health goals, target users, and app vision. Our personal health tracker app development team gathers all design, technical, and functional requirements to create a roadmap for your custom personal health tracking app development project.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our expert <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX designers</a> build intuitive and clean UI layouts that offer smooth navigation across devices. We ensure the design promotes engagement and reflects your brand’s identity.",
  },
  {
    title: "MVP Development",
    description:
      "We create a Minimum Viable Product (MVP) to launch your health tracking app with essential features like step tracking, heart rate monitoring, and wearable integration—perfect for early feedback and market testing.",
  },
  {
    title: "App Development",
    description:
      "Our team of health & fitness app developers builds a high-performance health tracking app utilizing the latest technology. This includes real-time health monitoring, AI integration, and compatibility with wearable devices such as Apple Watch or Fitbit.",
  },
  {
    title: "Testing & QA",
    description:
      "We run multiple tests on different devices to ensure your app performs flawlessly. From syncing with wearables to health data tracking—every feature is thoroughly tested.",
  },
  {
    title: "Deployment",
    description:
      "Once the app passes quality checks, we publish it on Google Play and Apple App Store. Our team handles all app store optimization (ASO) to improve visibility and downloads.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Post-launch, we offer ongoing updates, bug fixes, and performance monitoring. We ensure your health tracking app remains secure, compliant, and up-to-date as your user base grows.",
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
      name: "Comfygen",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        areaServed: [
          "US",
          "IN",
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
        email: "sales@comfygen.com",
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
      name: "Comfygen",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen",
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
          streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7",
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
      name: "Custom Health Tracking App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Build feature-rich health tracking apps with Comfygen. We offer custom mobile health app development services with AI, wearable integration, and secure HIPAA-compliant architecture.",
      url: "https://www.comfygen.com/health-tracking-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/health-tracking-app-development",
      areaServed: "Global",
      serviceType: [
        "Custom Health Tracker App Development",
        "Fitness & Activity Tracking App Development",
        "Nutrition & Calorie Counter App Development",
        "Mental Wellness App Solutions",
        "Wearable Device Integration",
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
      "brand": "Comfygen Technologies",
      "Name": "Health Tracking App Development Solution",
      "image": "https://www.comfygen.com/comfygen-images/health-tracking-app-development/about.webp",
      "description": "Get reliable and scalable health tracking app development solutions from Comfygen. We build custom mHealth apps with real-time monitoring, wearable integration, AI features, and HIPAA compliance. Perfect for fitness, wellness, and healthcare businesses.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "165"
      }
    }
    ,

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Health Tracking App Development",
        "item": "https://www.comfygen.com/health-tracking-app-development"

      }]
    }
    ,

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to build a health tracking app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of health tracking app development depends on features, tech stack, and platform. A basic app may cost between $15,000–$30,000, while advanced apps with wearable integration and AI features can go higher. Contact us for a detailed quote."
          }
        },
        {
          "@type": "Question",
          name: "Can you integrate wearables with the app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer full wearable integration for devices like Apple Watch, Fitbit, and Garmin. Our mobile health app developers ensure real-time syncing with Google Fit and Apple HealthKit for accurate health monitoring and activity tracking."
          }
        },
        {
          "@type": "Question",
          name: "Is the app HIPAA-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We develop HIPAA-compliant health tracking apps that follow strict data privacy standards. Our apps use encrypted databases, secure user access, and GDPR-ready architecture to protect sensitive health information at every level."
          }
        },
        {
          "@type": "Question",
          name: "How to build a health tracking mobile app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To build a health tracking mobile app, you need a reliable development partner like Comfygen. We guide you through requirement analysis, design, MVP, development, and deployment—ensuring a scalable, secure, and user-friendly health solution."
          }
        },
        {
          "@type": "Question",
          name: "How long does development take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The health tracking app development time for a custom health tracking app typically ranges from 8 to 16 weeks, depending on features and complexity. We follow agile practices to deliver fast, without compromising quality or performance."
          }
        },
        {
          "@type": "Question",
          name: "Do you offer maintenance and support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide complete post-launch maintenance and support for all our mobile health apps. From version upgrades to bug fixes and new features, our team ensures your app stays updated and running smoothly."
          }
        }
      ]
      ,
    },
  ];

  return (
    <>
      <Head>
        <title>
    Top Health Tracking App Development Company | Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen is a leading health tracking app development company offering intelligent health tracking app development services with AI insights, wearable integration, and HIPAA-compliant features."
        />
        <meta name="keywords" content="Custom Health Tracker App Development, Fitness & Activity Tracking App Development, Nutrition & Calorie Counter App Development, Mental Wellness App Solutions, Wearable Device Integration" />
        <link
          rel="canonical"
          href="https://www.comfygen.com/health-tracking-app-development"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
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
        <meta name="apple-mobile-web-app-title" content="Comfygen Health App" />

        {/* Author & Ownership */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* SEO Meta */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Location */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/health-tracking-app-development"
        />
        <meta
          property="og:title"
          content="Health & Fitness Tracking App Development Company"
        />
        <meta
          property="og:description"
          content="Comfygen builds intelligent health & fitness tracking apps with real-time monitoring, AI analytics, and wearable integration. Get HIPAA-compliant health app solutions designed for performance, security, and scalability."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/health-tracking-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/health-tracking-app-development/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Health Tracking App Development Services"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Wellness App Development Company | Health Tracker App Solutions"
        />
        <meta
          name="twitter:description"
          content="Comfygen offers wellness and health tracking app development with a focus on usability, real-time health data, and compliance. Partner with us to create custom mHealth apps that users trust."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/health-tracking-app-development/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>


      <Header />

      <div className="overflow-hidden lg:pt-[110px]">

        <HeroSectionForAllPages
          heading="Best Health Tracking App Development Company"
          ptag="Comfygen is a leading health tracking app development company delivering next-generation digital wellness solutions for healthcare providers, fitness brands, and wellness startups. Our expert health tracking app developers specialize in building feature-rich health tracking apps that track vital signs, physical activity, sleep, nutrition, and more—empowering users to manage their health in real time. From wearable integration to secure data storage and HIPAA compliance, we deliver scalable health tracking app development services tailored to your goals."
          li="Digital Health Powered by Innovation, Intelligence & Security"
          li1="Smarter Wellness Starts with a Smarter App"
          li2="Top-Tier mHealth App Developers With 10+ Years of Expertise"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/health-tracking-app-development/hero1.webp"
        />

        <Milestones/>

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
               End-to-End Health Tracking App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen delivers high-quality health tracking app development services designed for fitness brands, wellness startups, and healthcare organizations. With advanced features, smooth performance, and cross-platform compatibility, we create fitness health tracking apps that help users manage their physical, mental, and nutritional well-being effortlessly.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title=""
          heading="Why Should You Invest in Health Tracking App Development?"
          description1="A health tracking app helps users monitor physical activity, nutrition, heart rate, sleep, and other vital signs in real time—all from a single platform. These apps are increasingly popular as people prioritize preventive care and digital health tools. Whether you're a fitness startup, wellness brand, or healthcare provider, investing in health tracking app development opens doors to better user engagement, retention, and ROI."
          description2="With growing demand and <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blog/wearable-health-technology-integration/' >wearable technology integration</a>, now is the right time to launch your custom health app and lead the wellness revolution."
          points={[
            "Promote proactive and preventive healthcare",
            "Offer real-time health insights and goal tracking",
            "Integrate with wearables like Fitbit, Apple Watch, and Google Fit",
            "Build user loyalty with personalized fitness plans",
            "Capitalize on the $150B+ digital health tech market",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/health-tracking-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/tutor-apps-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Portfolio – Fitness and Health Tracking App Development Projects"
            description="Explore how Comfygen empowers fitness startups, healthcare providers, and wellness brands with robust, scalable fitness tracker app development solutions. Our custom fitness and health apps help users monitor daily activity, manage health goals, and sync with wearables through real-time features and a user-friendly design."
          />
        </section>



        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  The Emerging Technologies We Use for Health Tracking App
                  Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  Comfygen Technologies is a prominent health tracking app
                  development agency. We build intelligent, secure, and scalable
                  health tracking apps using next-gen technologies. Utilizing
                  the latest technology stack, we provide cutting-edge{" "}
                  <a
                    href="https://www.comfygen.com/healthcare-app-development"
                    className="underline font-semibold"
                  >
                    mobile health app development solutions
                  </a>{" "}
                  tailored to your specific needs.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                        {/* <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        /> */}
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p
                          className="break-all text-white text-start "
                          dangerouslySetInnerHTML={{ __html: decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Health Tracking App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                Comfygen follows a proven and agile development process to
                deliver powerful and user-centric health tracking apps. From
                idea validation to post-launch support, our process ensures that
                your app is scalable, secure, and ready to succeed in the
                growing mobile health app development market.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Tech Stack We Use in Health Tracking App Development"
          description="At Comfygen, we use the most advanced and trusted technologies to build scalable, high-performing, and secure health tracking apps. Our tech stack is designed to support real-time health monitoring, wearable integration, and <a class='underline font-semibold' href='https://www.comfygen.com/blog/hipaa-compliance-in-mobile-health-apps/'>HIPAA-compliant mobile health app development</a>—perfect for startups, fitness brands, and healthcare providers."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Mobile Health Tracking App Developer"
          text="Want to build an AI-based health tracking app? Hire experienced mobile health tracking app developers from Comfygen to turn your wellness or healthcare idea into a fully-functional, scalable solution. We create custom fitness and health tracking apps with real-time monitoring, wearable integration, AI insights, and HIPAA-compliant architecture. From MVP to full launch—we deliver fast, reliable, and support-driven development."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experts in fitness, wellness & remote health tracking apps",
            "10+ years of experience in mobile health app development",
            "Proficiency in wearable syncing, AI analytics & health data security",
            "Timely delivery with dedicated post-launch technical support",
          ]}
        />

        <ClientTestimonials
          heading="What Our Clients Say"
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