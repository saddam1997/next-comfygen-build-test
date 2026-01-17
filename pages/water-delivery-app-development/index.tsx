import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./water-delivery-app-development.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../components/Newcomponet/comman/Milestones";


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

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
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

const WhoCanStart = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhoCanStart"),
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

const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);







const Process = [
  {
    title: "Requirement Analysis",
    description:
      "We begin with a detailed requirement analysis to understand your business model, goals, and customer needs. This helps us design the right strategy for on-demand water delivery mobile app development services.",
  },
  {
    title: "UI/UX Designing",
    description:
      "Our expert <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX designers</a> create intuitive, user-friendly, and engaging interfaces. We focus on smooth navigation and attractive layouts, ensuring customers enjoy a seamless experience in your custom water delivery app development.",
  },
  {
    title: "App Development (iOS & Android)",
    description:
      "Using advanced technologies, our developers build robust, scalable, and secure apps for both iOS and Android platforms, offering top-notch water delivery mobile app development solutions with cutting-edge functionality.",
  },
  {
    title: "API & Payment Gateway Integration",
    description:
      "We integrate third-party APIs, GPS, and secure payment gateways to ensure smooth transactions, accurate tracking, and better connectivity, strengthening the efficiency of your on-demand water delivery app development services.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA team runs multiple testing cycles to ensure bug-free performance, security, and reliability. Every feature of your water delivery app development solution is tested for flawless functionality.",
  },
  {
    title: "Deployment & Launch",
    description:
      "We handle a smooth deployment process on App Store and Google Play Store. Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/mobile-app-development' >mobile app development</a> team ensures a hassle-free launch and compliance with all guidelines.",
  },
  {
    title: "Post-Launch Support & Maintenance",
    description:
      "Our work doesn’t end at launch. We provide ongoing maintenance and support services, including feature upgrades, bug fixes, and performance improvements to keep your app competitive and future-ready.",
  },
];



const WhoCanStartCards = [
  {
    heading: "Mineral Water Delivery App",
    description:
      "Our mineral water delivery app development helps suppliers offer pure, quality mineral water to customers with easy ordering, secure payments, and real-time tracking. It’s ideal for businesses focusing on premium water delivery services.",
  },
  {
    heading: "Packaged Water Delivery App",
    description:
      "We create packaged water delivery apps for businesses that supply sealed water bottles in bulk or retail. With smart inventory and route management, our solutions ensure faster deliveries and customer satisfaction.",
  },
  {
    heading: "Bottled Water Delivery App",
    description:
      "Our bottled water delivery app development allows suppliers to handle small to large-scale bottle deliveries with ease. The app comes with customer subscriptions, delivery reminders, and real-time updates to boost retention.",
  },
  {
    heading: "Drinking Water Delivery App",
    description:
      "We design drinking water delivery apps that make daily drinking water supply simple and convenient. Suitable for local vendors and distributors, these apps offer flexible delivery slots and hassle-free payments.",
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
      name: "Custom Water Delivery App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Build your own water delivery app with Comfygen Technologies. We provide on-demand water delivery app development services for bottled, mineral & packaged water businesses. Fast, scalable & secure mobile app solutions.",
      url: "https://www.comfygen.com/water-delivery-app-development",
      mainEntityOfPage:
        "https://www.comfygen.com/water-delivery-app-development",
      areaServed: "Global",
      serviceType: [
        "Mineral Water Delivery App Development",
        "Packaged Water Delivery App Development",
        "Bottled Water Delivery App Development",
        "Drinking Water Delivery App Development",
        "White-label Water Delivery App Solutions",
        "Custom Water Delivery App Development",
        "On-Demand Water Delivery Mobile App Development",
        "Subscription & Water Ordering App Development",
        "Water Delivery App for Startups",
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
      Name: "Water Delivery App Development Solutions",
      image: "https://www.comfygen.com/comfygen-images/water-delivery-app-development/about.webp",
      description:
        "Launch your branded water delivery app with Comfygen’s expert developers. Our on-demand water delivery app solutions offer quick ordering, GPS tracking, online payments & subscription-based plans for maximum business growth.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "160",
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
          name: "Water Delivery App Development",
          item: "https://www.comfygen.com/water-delivery-app-development",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop a water delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of water delivery app development depends on features, technology stack, and platforms. A basic water delivery app can start at a low cost of around $5,000–$8,000, while advanced apps with real-time tracking, subscription plans, and secure payments may range from $10,000–$25,000. At Comfygen, we provide affordable and low-cost water delivery app development services tailored to your business needs.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a custom water delivery app like Bisleri?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we specialize in custom water delivery app development like Bisleri and other leading brands. Our expert developers build feature-rich bottled and mineral water delivery apps with real-time tracking, subscription management, secure payments, and customer engagement tools. We ensure your app is scalable, user-friendly, and aligned with your business model for seamless water distribution.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide white-label water delivery app solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Comfygen Technologies offers white-label water delivery app solutions that allow you to launch your business quickly under your own brand name. Our white-label apps are customizable, ready-to-deploy, and come with essential features such as ordering, tracking, subscription, and secure payment gateways. This helps startups and enterprises streamline bottled and packaged water delivery services without long development timelines.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop a water delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline to develop a water delivery app varies depending on features, UI/UX design, and level of customization. A basic water delivery mobile app may take 4–6 weeks, while advanced apps with subscription, AI-based analytics, and real-time GPS tracking could take 10–12 weeks. Our agile development process ensures faster delivery with high-quality results.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer post-launch maintenance & support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Comfygen provides complete post-launch app maintenance and support for your water delivery app. Our water monitoring app development services include bug fixing, regular updates, feature enhancements, security patches, and performance optimization. We ensure your water delivery app remains stable, secure, and up-to-date with the latest technology to provide the best experience for your customers and delivery team.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Water Delivery App Development Services</title>
        <meta
          name="description"
          content="Comfygen offers professional water delivery app development services in India for startups and enterprises. Build custom water delivery apps with subscription management and live tracking for bottled, mineral, and packaged water delivery."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/water-delivery-app-development"
        />
        <meta
          name="keywords"
          content="Mineral Water Delivery App Development, Packaged Water Delivery App Development, Bottled Water Delivery App Development, Drinking Water Delivery App Development, White-label Water Delivery App Solutions, Custom Water Delivery App Development, On-Demand Water Delivery Mobile App Development, Subscription & Water Ordering App Development, Water Delivery App for Startups"
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Comfygen Water Delivery App"
        />

        {/* Author & Rights */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* SEO */}
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

        {/* Open Graph (Facebook) */}
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
          content="https://www.comfygen.com/comfygen-images/water-delivery-app-development/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/water-delivery-app-development/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Water Delivery App Development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/water-delivery-app-development"
        />
        <meta
          property="og:title"
          content="On-Demand Water Delivery App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for a water delivery app development company? Comfygen Technologies builds feature-rich, user-friendly apps with subscription plans, real-time tracking & secure payment integration for water delivery startups & enterprises."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="White Label Water Delivery App Development Company"
        />
        <meta
          name="twitter:description"
          content="Get a white-label water delivery app with advanced features like live order tracking, easy scheduling & secure online payments. Comfygen Technologies is a trusted water ordering app development company for startups & brands."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/water-delivery-app-development/og.webp"
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
        <div className="">
          <HeroSectionForAllPages
            heading="Water Delivery App Development Services"
            ptag="Comfygen provides reliable Custom Water Delivery App Development Services for startups and enterprises. As a trusted water delivery app development company, we build fast, secure, and user-friendly apps that simplify bottled, mineral, and packaged water delivery. Our water delivery app development solutions help businesses manage orders, deliveries, and payments smoothly while improving customer experience and growth."
            li="Quick water ordering & smart scheduling"
            li1="Real-time delivery tracking"
            li2="Safe and secure online payment integration"
            li3="Flexible daily, weekly & monthly subscription plans"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/water-delivery-app-development/hero.webp"
          />
        </div>
        <Milestones/>

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Water Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen Technologies offers the best on-demand water delivery
                app development services to streamline bottled, mineral, and
                packaged water distribution. Boost your business efficiency by
                integrating our water delivery app developers to create
                feature-rich, scalable, and user-friendly apps that simplify
                ordering, tracking, and payments for customers.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Why Your Business Needs a Water Delivery App"
          description1="In today’s busy lifestyle, people prefer quick and reliable solutions — and a water delivery app is the perfect way to meet daily water needs with ease. Whether you are a startup, bottled water supplier, or large-scale distributor, investing in a water delivery app helps streamline operations, automate scheduling, and build strong customer loyalty."
          description2="With Comfygen’s water delivery app development services, we create future-ready platforms that ensure hassle-free logistics, real-time tracking, and an enhanced customer experience — while boosting your business growth and revenue."
          description3="Automates subscription & daily water delivery scheduling"
          imageSrc="https://www.comfygen.com/comfygen-images/water-delivery-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Increases customer convenience & retention",
            "Improves inventory & delivery route management",
            "Provides real-time order tracking & updates",
            "Supports secure digital payments & invoice generation",
          ]}
        />


        {/* <ContactFromCenter /> */}

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
            heading="Explore Our On-Demand Water Delivery App Development Portfolio"
            description="Visit our on-demand water delivery app development portfolio for user-friendly water delivery app solutions designed for startups, local vendors, and large-scale distributors. From subscription-based water delivery to real-time tracking, our apps are built to streamline operations and deliver the best customer experience."
          />
        </section>

        <div className="py-8">
          <Features
            heading=" We Develop Water Delivery Apps With Advanced Panel Features"
            description="At Comfygen Technologies, we integrate advanced features into our
          water delivery app development services to ensure a smooth experience
          for customers, delivery agents, and admins. Our scalable and
          user-friendly app panels help businesses manage daily operations,
          streamline deliveries, and enhance customer satisfaction."
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>


        <WhoCanStart
          title="Types of Water Delivery Apps We Develop"
          description="At Comfygen Technologies, we specialize in building different types of water delivery apps to suit the needs of startups, suppliers, and large distributors. Whether you want to deliver mineral, packaged, bottled, or drinking water, our apps are tailored to provide seamless operations and excellent customer experiences."
          cards={WhoCanStartCards}
        />

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Emerging Technologies We Use to Build a Water Delivery App
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen Technologies, we combine innovation with
                  technology to deliver future-ready solutions. Our water
                  delivery app development agency uses the latest tools and
                  frameworks to ensure every app is fast, secure, and scalable.
                  With our advanced water delivery app development solution,
                  businesses can stay ahead of the competition and deliver
                  seamless customer experiences.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={title} className={` relative`}>
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
                End-to-End Water Delivery App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-6xl mx-auto">
                At Comfygen Technologies, we follow a proven development process
                to deliver high-quality and scalable water delivery mobile app
                development solutions. Our step-by-step approach ensures your
                app is secure, user-friendly, and future-ready.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TeckStack
          title="Tech Stack We Use to Create a Water Delivery App"
          description="At Comfygen Technologies, we use the latest and most reliable technologies to build secure, scalable, and high-performing water delivery mobile apps. Our carefully chosen tech stack ensures seamless operations, smooth performance, and future-ready water ordering app development solutions for startups, SMEs, and enterprises."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <DeliverySection hideUrl='water-delivery-app-development' />
        <HireDeveloper
          heading="Hire Online Water Delivery App Developers"
          text="Want to launch a feature-rich water delivery app? Hire expert <a class='underline font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >water delivery mobile app developers</a> from Comfygen to transform your bottled and packaged water business into a customer-friendly, high-performance digital platform. We build customized water delivery apps with subscription models, GPS tracking, secure payment gateways, and real-time order management. Get fast delivery, post-launch support, and scalable solutions tailored to your business needs."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced in water delivery app development for startups & enterprises",
            "10+ years of expertise in on-demand delivery app development",
            "Skilled in subscription, tracking & payment module integration",
            "Fast project delivery with dedicated post-launch technical support",
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Frequently Asked Questions" />
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

