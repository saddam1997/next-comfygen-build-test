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

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
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
        <title>Leading Taxi Booking App Development Company | Comfygen Technology</title>
        <meta
          name="description"
          content="Top-notch taxi booking app development services with Comfygen Technology. We create scalable, secure, and user-friendly ride-hailing platforms for all. Elevate your business with real-time tracking and smart ride management today!"
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
          content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp"
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
          content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp"
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
          heading="Taxi Booking App Development Service"
          subhead='Looking for the best taxi app development company? Your search ends here.'
          ptag="At Comfygen, we deliver end-to-end taxi booking app development services customised for startups, taxi operators, fleet owners, and enterprises. We create scalable, high-performance ride-hailing solutions designed for real-world operations and long-term growth."
          ptag1="Taxi booking apps are engineered with real-time GPS tracking, smart ride matching, secure payments, and powerful admin control panels, ensuring smooth experiences for riders, drivers, and operators alike. Our taxi app development solution is fully customizable, giving you complete control over branding, pricing models, commissions, and fleet operations."
          li="Custom Taxi Booking App Development"
          li2="White-Label Ride-Hailing Solutions"
          li3="Driver, Rider & Admin Panel Development"
          li4="Advanced Analytics & Reporting"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/taxi-app-development-company/h1.webp"
        />

        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Custom Taxi Booking App Development Offerings
              </h2>
              <p className="text-base text-center font-normal">
                Our custom taxi <Link href='https://www.comfygen.com/mobile-app-development' className="text-blue-600 font-semibold">app development services</Link> are designed to meet the unique business needs and project requirements of companies across industries. We deliver high-performance taxi app development solutions that help you launch, scale, and succeed in today’s competitive mobility landscape.

              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          heading="What Is a Taxi Booking App and How Does It Work?"
          description1="A taxi booking app is a mobile application that connects passengers with nearby drivers, providing a fast, convenient, and cashless way to hail rides. By leveraging GPS technology, real-time data, and <a href='https://www.comfygen.com/ewallet-app-development' class='text-blue-600 font-semibold'>secure payment gateways</a>, these apps simplify transportation for users while enhancing efficiency for drivers and service providers."
          description2="The app ecosystem typically includes three key components: a passenger app, a driver app, and an <a href='https://www.comfygen.com/blog/admin-dashboard-development-for-grocery-delivery/' class='text-blue-600 font-semibold'>admin dashboard</a>. Passengers request rides by entering their pickup and drop-off locations, and the system matches them with the closest available driver through GPS tracking. Once a driver accepts the ride, the passenger can monitor the vehicle’s real-time location until arrival. Payments are processed via multiple integrated options such as credit cards, digital wallets, or cash. Additional <a href='https://www.comfygen.com/blog/ev-taxi-booking-app-development-cost-features/' class='text-blue-600 font-semibold'>EV taxi app development features</a> often include ride scheduling, fare estimation, driver and passenger ratings, and in-app communication, all designed to ensure a seamless and user-friendly experience."
          description3=""
          description4=""
          points={[]}
          imageSrc="https://www.comfygen.com/comfygen-images/taxi-app-development-company/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}


        <CallToAction
          heading="Get Started with Your Taxi Booking App"
          text="Have an idea for a taxi booking app? Comfygen can help turn it into a scalable, reliable solution tailored to your business needs."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <AppcardSlider
          heading="Taxi App Clone Development Solutions"
          description="Comfygen Technology offers taxi booking app clone development for businesses looking to launch quickly with a proven model. Our clone app development solutions provide ready-to-use frameworks that can be customized to match specific business requirements and branding."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />
        <div className="py-8">
          <Features
            heading="Taxi Booking App Features / Dashboard Features"
            description="ComfygenTechnology develops taxi booking apps with features designed for usability, control, and scalability. Each component ensures a smooth experience for passengers, drivers, and administrators."
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Experience in On-Demand Taxi Booking App Development"
            description="As the Best Taxi app development company, we provide on-demand mobility solutions for a range of businesses across different regions. Each project focuses on measurable business outcomes."
          />
        </section>

        <CardFeatures
          heading="AI and Blockchain-Based Taxi App Development Solutions"
          description="At Comfygen, we deliver AI and blockchain-powered taxi app development solutions that transform urban mobility. By combining artificial intelligence with decentralized technologies, our apps become smarter, safer, and more efficient for both riders and drivers."
          featuresData={JSON_DATA.featuresData1}
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
          description="We leverage the latest and modern technologies to build fast, secure, and scalable taxi booking apps. Our Taxi Booking App Development Services use a combination of backend, frontend, blockchain, and <a href='https://www.comfygen.com/ewallet-app-development' class='underline font-semibold'>ewallet solutions</a> to ensure smooth operations, seamless user experience, and robust performance."
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
          text="Build a taxi app like Uber or Ola with Comfygen. Hire expert on-demand taxi app developers to create secure, scalable, and feature-rich apps with real-time GPS tracking, AI-powered ride dispatch, multiple payment options, and white-label solutions."
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
          title="ReactJS Development Technology"
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

