import { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/taxi.json";
import {
  IconBike,
  IconBolt,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconBus,
  IconCar,
  IconHelicopter,
  IconPackage,
  IconPlane,
  IconShip,
  IconTruck,
  IconUsers,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Header from "../Newcomponet/layout/Header"
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages"


const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ModelsSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ModelsSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TeckStack = dynamic(
  () => import("../Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const AppcardSlider = dynamic(
  () => import("../Newcomponet/SectionCompoent/AppcardSlider"),
  { loading: loader, ssr: true }
);




// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
// import Features from "../Newcomponet/SectionCompoent/Features";
// import ModelsSec from "../Newcomponet/SectionCompoent/ModelsSec";
// import SolutionSec from "../Newcomponet/SectionCompoent/Solution";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import TeckStack from "../Newcomponet/SectionCompoent/TechStack";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import Faq from "../Newcomponet/SectionCompoent/Faq";
// import AppcardSlider from "../Newcomponet/SectionCompoent/AppcardSlider";







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
      title: "Requirement Analysis & Project Planning",
      description:
        "We begin by understanding your business model, app goals, market audience, and key features. Our <a href='https://www.comfygen.com/mobile-app-development' class='text-blue-600 font-semibold'>mobile app development</a> team creates a clear roadmap to deliver the best taxi booking app development experience.",
    },
    {
      title: "UI/UX Design & Wireframing",
      description:
        "Our <a href='https://www.comfygen.com/web-design' class='text-blue-600 font-semibold'>UI/UX designers</a> create intuitive and attractive screens for passengers, drivers, and admin dashboards. The goal is to provide a smooth user journey and easy navigation for all users.",
    },
    {
      title: "Custom Taxi App Development",
      description:
        "We develop fully functional taxi booking app modules (User App, Driver App, and Admin Panel) with real-time tracking, secure payments, and smart ride management using advanced technology.",
    },
    {
      title: " API Integration & Advanced Features",
      description:
        "We integrate GPS navigation, payment gateways, push notifications, and AI-powered auto-dispatch features to make your on-demand taxi booking app efficient and user-centric.",
    },
    {
      title: " Quality Testing & Security Assurance",
      description:
        "Our testing team performs performance, security, and usability testing to ensure a fast, error-free, and reliable taxi booking mobile app across all devices.",
    },
    {
      title: "Deployment & App Store Launch",
      description:
        "We launch your app on Google Play Store and Apple App Store with complete configuration, documentation, and store optimisation to ensure a smooth app release.",
    },
    {
      title: "Post-Launch Support & Maintenance",
      description:
        "We provide continuous support, feature upgrades, bug fixing, and performance monitoring to ensure your app stays updated and competitive in the ride-hailing industry.",
    },
  ];

  const latesttech = [
    {
      img: <IconBike stroke={1.5} className="w-12 h-12" />,
      title: "On-Demand Bike Taxi Booking App",
      desc: "Provide your users with fast, affordable, and eco-friendly two-wheeler rides for short distances. Our bike taxi app development solution ensures a smooth and cost-effective travel experience.",
    },
    {
      img: <IconCar stroke={1.5} className="w-12 h-12" />,
      title: "Car Taxi Booking App",
      desc: "Enable customers to book taxis effortlessly for their daily commutes. Our feature-rich car taxi booking app development offers real-time tracking, secure payments, and multiple ride options.",
    },
    {
      img: <IconBuildingSkyscraper stroke={1.5} className="w-12 h-12" />,
      title: "Tourism Taxi App",
      desc: "Cater to tourists with customized transportation services, including city tours, sightseeing, and intercity travel. Our tourism taxi app development ensures hassle-free bookings and a delightful user experience.",
    },
    {
      img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
      title: "Corporate Taxi App",
      desc: "Streamline corporate travel with our efficient taxi booking app designed for businesses. Features include expense tracking, ride scheduling, and centralized billing for organizations.",
    },
    {
      img: <IconBolt stroke={1.5} className="w-12 h-12" />,
      title: "EV Taxi Booking App",
      desc: "Promote sustainable transportation with our electric vehicle (EV) taxi booking app development solution. Empower eco-conscious riders with an environmentally friendly ride-sharing platform.",
    },
    {
      img: <IconBus stroke={1.5} className="w-12 h-12" />,
      title: "Bus Booking App Development",
      desc: "Enhance intercity and intracity travel with our efficient and scalable bus booking application. Our solution includes seat selection, real-time bus tracking, and digital ticketing.",
    },
    {
      img: <IconPlane stroke={1.5} className="w-12 h-12" />,
      title: "Flight Booking App",
      desc: "Provide users with a one-stop solution for booking flights seamlessly. Our flight booking app development services integrate real-time flight schedules, ticketing, and payment gateways for a convenient travel experience.",
    },
    {
      img: <IconShip stroke={1.5} className="w-12 h-12" />,
      title: "Ship & Cruise Booking App",
      desc: "Revolutionize maritime travel with our ship and cruise booking app, offering seamless ticket booking, route planning, and real-time updates for a hassle-free journey.",
    },
    {
      img: <IconTruck stroke={1.5} className="w-12 h-12" />,
      title: "Transport Vehicle Booking App",
      desc: "Support various transportation needs with our customizable vehicle booking app, designed for freight, rental, and logistics businesses.",
    },
    {
      img: <IconHelicopter stroke={1.5} className="w-12 h-12" />,
      title: "Air Taxi Booking App Development",
      desc: "Enter the future of transportation with our cutting-edge air taxi booking app development. This innovative solution ensures smooth urban air mobility and fast travel between cities.",
    },
    {
      img: <IconUsers stroke={1.5} className="w-12 h-12" />,
      title: "Ride-Sharing App",
      desc: "Empower users with a cost-effective carpooling solution. Our ride-sharing app development enhances convenience and affordability while reducing traffic congestion.",
    },
    {
      img: <IconPackage stroke={1.5} className="w-12 h-12" />,
      title: "Delivery & Logistics App",
      desc: "Optimize delivery and logistics operations with our advanced taxi booking app development solutions for cargo, parcels, and last-mile delivery services.",
    },
  ];



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
      name: "Custom Taxi Booking App Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Comfygen offers custom taxi booking app development services with advanced features, AI integration, and scalable solutions to help you launch your own ride-hailing business.",
      url: "https://www.comfygen.com/taxi-app-development-company",
      mainEntityOfPage: "https://www.comfygen.com/taxi-app-development-company",
      areaServed: "Global",
      serviceType: [
        "White-Label Taxi App Development",
        "Custom Taxi Booking App Development",
        "Cab Booking App Development",
        "Uber Ride Booking App Development",
        "Car Rental App Development",
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
      Name: "Taxi Booking Mobile App Development Solution | Comfygen Technologies",
      image: "https://www.comfygen.com/comfygen-images/taxi-app-development-company/about.webp",
      description:
        "Comfygen Technologies delivers cutting-edge taxi booking mobile app development solutions with AI features, real-time tracking, and secure payments for startups and enterprises.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "655",
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
        <title>Top Taxi Booking App Development Company in India</title>
        <meta
          name="description"
          content="Comfygen is a leading taxi booking app development company in India offering custom, scalable, and feature-rich taxi apps for startups and enterprises. Get a free consultation today!"
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen Taxi App" />

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
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Taxi Booking App Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Build your Uber-like taxi booking app with Comfygen, India’s trusted taxi booking app development company. Get AI-powered, secure, and custom solutions tailored to your business."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/taxi-app-development-company"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/og.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Taxi Booking App Development" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="twitter:title"
          content="Top Taxi App Development Company for Ride-Hailing Solutions"
        />
        <meta
          name="twitter:description"
          content="Build a high-performance ride-hailing app like Uber or Lyft with Comfygen. Our taxi app development services deliver scalable, secure, and user-friendly solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Best Taxi Booking App Development Company in India"
          ptag="Comfygen is a top taxi booking app development company in India, delivering custom and white-label taxi apps for startups, enterprises, and taxi service providers. Our scalable, secure, and feature-rich taxi booking apps help manage rides smoothly, track drivers in real-time, enable safe payments, and enhance customer experience. With AI-powered features and on-demand ride solutions, we ensure your taxi business grows faster and smarter."
          li="White-Label Taxi App Solutions"
          li1="AI & Blockchain Features"
          li2="Custom Features for Every Business"
          li3="Cross-Platform Expertise"
          li4="Cross-Platform Apps (iOS & Android)"
          li5="On-Time Delivery"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/taxi-app-development-company/h1.webp"
        />

        <AboutSection
          heading="Revolutionizing Taxi Booking Services with AI and Blockchain Technology"
          description1="AI and Blockchain are transforming the future of taxi booking app development, making ride-hailing faster, smarter, and more secure. AI-powered taxi apps improve user experience with real-time route optimization, demand prediction, and personalized ride suggestions. It also enhances safety using driver behavior analysis and fraud detection."
          description2="Blockchain taxi booking solutions ensure transparent and tamper-proof transactions, secure digital payments, and strong data privacy. These advanced technologies help taxi businesses minimize operational costs, prevent payment issues, and build customer trust."
          description3="For users, it means quicker pickups, fair pricing, and smooth ride experience. For companies, it boosts efficiency and customer satisfaction. Today, integrating AI and Blockchain is essential for any taxi booking app development company to stay competitive and future-ready."
          description4=""
          imageSrc="https://www.comfygen.com/comfygen-images/taxi-app-development-company/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}
        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
               We Provide World-Class Taxi Booking App Development Services for Startups & Enterprises
              </h2>
              <p className="text-base text-center font-normal">
                As a leading taxi booking app development agency in India, we deliver top-class and scalable solutions for businesses of all sizes. Our expert team offers on-demand taxi app development services designed to improve ride management, boost customer satisfaction, and grow revenue.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <AppcardSlider
          heading="Pre-built Taxi App Clone Solutions for Quick Market Launch"
          description="Looking to build a powerful taxi booking app like popular ride-hailing brands? Our taxi booking app clone solutions offer fully customizable and ready-to-launch apps designed to support fast growth, smooth ride management, and a seamless user experience. Each clone solution is developed with real-time tracking, secure payments, and advanced features to match top players in the industry."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />





        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Taxi Booking App Portfolio"
            description="Comfygen Technologies delivers innovative and feature-rich taxi booking app development solutions customized for businesses of all sizes. Here’s a quick look at some of our successful on-demand taxi app development projects."
          />
        </section>

        <div className="py-8">
          <Features
            heading="Features of a Taxi Booking App"
            description="As a leading on-demand taxi app development company in India, we integrate advanced functionalities to make your taxi app competitive and user-friendly."
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>



        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <SolutionSec
          heading="We Deliver Comprehensive Taxi Booking App Development Solutions"
          subheading="Are you looking for a trusted white-label taxi booking app development company in India? We specialize in designing and developing state-of-the-art ride-sharing applications tailored to meet your unique business requirements. Our taxi app development solutions are designed to enhance mobility, improve user experience, and drive business growth."
          techData={latesttech}
        />

        <CallToAction
          heading="Get Started with Your Taxi App Today!"
          text="Ready to transform your taxi business with a powerful mobile app? Contact us today for a free consultation and let’s build a top-notch taxi booking solution tailored to your needs!"
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
              Our Taxi Booking App Development Process
              </h2>
              <p className="text-base font-normal mt-2">
               We follow a structured and transparent taxi booking app development process to build high-performing, scalable, and user-friendly taxi apps for startups and enterprises. Each step ensures quality, smooth performance, and faster market launch.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TeckStack
          title="Technologies Used for Taxi Booking App Development"
          description="We use the core technologies in our cutting edge Taxi Booking App Development Services and solutions to build efficient cab booking app development service to ease users and businesses"
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire On-Demand Taxi App Developers"
          text="Looking to build your own taxi booking app like Uber or Ola? Hire expert <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>on-demand taxi app developers</a> from Comfygen to create secure, scalable, and feature-rich taxi apps tailored to your business needs. Our skilled developers specialise in custom taxi booking solutions with real-time GPS tracking, AI-powered auto-dispatch, multiple payment options, and white-label taxi app development for startups and enterprises."
          text1=""
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Dedicated experts in taxi booking app development",
            "AI-driven route optimization & smart ride allocation",
            "Real-time ride tracking with advanced GPS mapping",
            "End-to-end development, launch & maintenance support",
          ]}
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title="ReactJS Development Technology"
        />
      </div>
    </>
  );
}


export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  if (!resData.ok) {
    // console.error("API Request failed:", await resData);
    return { props: { initialData: [] } };
  }
  // console.log(resData)
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

