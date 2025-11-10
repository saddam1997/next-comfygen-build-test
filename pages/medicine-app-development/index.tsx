import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/doctor.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import HireDeveloper from "../components/HireDeveloper";
import Faq from "../components/Faq";
import ProcessSec from "../components/ProcessSec";
import ModelsSec from "../components/ModelsSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
import Script from "next/script";
import AdvancedPanel from "./components/AdvancedPanel";
import TechStack from "../components/TechStack";
import LatestTechnology from "../components/SolutionSec";
import {
  IconCapsule,
  IconHeartbeat,
  IconPill,
  IconShoppingCart,
  IconStethoscope,
} from "@tabler/icons-react";
import PortfolioSlider from "../components/PortfolioSlider";
import ClientTestimonials from "../components/ClientTestimonials";


const HeroSectionForAllPages = dynamic(
  () => import("../components/HeroSectionForAllPages"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Services = [
  {
    num: "1",
    img: "https://www.comfygen.com/img/pharmeasy.webp",
    title: "PharmEasy",
    decs: "We can develop medicine ordering and pharmacy delivery apps similar to PharmEasy. Users could upload prescriptions for home delivery by linking to over 20,000 pharmacy partners. Custom features we can add:",
    features: [
      "Prescription scanner simplifies onboarding",
      "Gamified rewards boost engagement",
      "Predictive auto-refills for chronic medications",
    ],
    decs1:
      "Strong logistics integrations would enable transparent order tracking with courier and inventory syncing. Advanced machine learning algorithms could also suggest products matching past purchases.",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/img/netmeds.webp",
    title: "Netmeds",
    decs: (
      <p>
        We can create full-service medicine{" "}
        <a className="text-blue-500" href="/e-commerce-app-development">
          e-commerce app development
        </a>{" "}
        platforms like Netmeds, allowing online consultations and purchases.
        Unique highlights may include:
      </p>
    ),
    features: [
      "Personal health profiles guide product suggestions",
      "Automated prescription transfers to Netmeds pharmacy",
      "Symptom checker for over-the-counter recommendations",
    ],
    decs1:
      "Drawing on vast medicine catalogs, we can implement machine learning models to serve context-aware recommendations, mimicking in-pharmacy app development guidance. This boosts order values and buyer confidence.",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/img/apollo-pharmacy.webp",
    title: "Apollo Pharmacy is available 24/7.",
    decs: "Our expert team can develop integrated healthcare app development platforms for Android & iOS encompassing telehealth, diagnostics, prescriptions, and medicine deliveries - a robust ecosystem like Apollo 24/7. One-stop features we can enable:",

    features: [
      "Lab test scheduling with 1000+ diagnostic partners",
      "Integrated video consultations with prescription routing",
      "Post-visit care plan access through the patient portal",
    ],
    decs1:
      "Standing up end-to-end workflows requires extensive infrastructure integration into both digital systems and physical supply chains. Our dedicated engineering teams specialize in enabling these connections.",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/img/apps-like-1MG.webp",
    title: "1mg",
    decs: "We can build robust medicine application development platforms like 1mg, enabling telehealth consultations, diagnostic test bookings, and reliable medication deliveries app development. Useful custom additions may include:",
    features: [
      "Chronic care programs with medication adherence tracking",
      "Tools help validate medicine's authenticity and prevent counterfeits",
      "Automated prescription transfers to 1mg's licensed pharmacy",
    ],
    decs1:
      "A key aspect is developing extensive supply chain integrations to ensure consistent availability for all medication types. Our teams can architect the required links into pharmaceutical hubs across geographies.",
  },
  {
    num: "5",
    img: "https://www.comfygen.com/img/apps-like-practo.webp",
    title: "Practo",
    decs: "At Confygen, we can create physician marketplace app development like Practo that allow appointment bookings across specialities, fees, locations, etc. Unique differentiators could encompass:",
    features: [
      "ML-assisted provider finder matching symptoms",
      "Custom intake forms for faster consultations",
      "Post-visit care plan access via web development and mobile app development",
    ],
    decs1:
      "A seamless patient and doctor experience requires enabling intricate coordination workflows under the hood. Our full-stack engineering strengths unlock these capabilities through judicious API development and system integration.",
  },
];
const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/img/portfolio-for-medicine-delivery-app.webp",
      head: "medicine Ordering app",
      name: "At Comfygen Private Limited, we take pride in our strong portfolio of innovative medicine distribution apps. Our solutions are designed to bring revolution in health service by ensuring timely delivery of medicines at your doorstep. With a user-friendly interface, secure payment gateway, real-time tracking, and seamless integration with health service providers, our app fulfils all your medicine-related needs. Trusted by leading pharmacies and health service organizations, we combine modern technology with unmatched customer service to improve patient care. Know how Comfygen can change your health service experience along with our modern medicine and vitamin solutions. Contact us today!",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg",
      ],
    },
  ],
};

const schemaData = {
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
      streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
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
    "https://www.facebook.com/comfygen",
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.youtube.com/@ComfygenBusiness",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://in.pinterest.com/comfygenpvt/",
  ],
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Medicine Delivery App Development Company",
  provider: {
    "@type": "Organization",
    name: "Comfygen",
    url: "https://www.comfygen.com/",
  },
  description:
    "Comfygen is a leading medicine ordering app development company specializing in secure, scalable, and user-friendly pharmacy delivery solutions.",
  url: "https://www.comfygen.com/medicine-app-development",
  areaServed: "Global",
  serviceType: [
    "On Demand Medicine App Development",
    "Medicine Doorstep Ordering App Development",
    "Develop Medicine Ordering App like TATA 1MG",
    "Pharmacy Chain Solutions",
  ],
  sameAs: [
    "https://www.facebook.com/comfygen",
    "https://www.linkedin.com/company/comfygen-private-limited",
  ],
};

const faqSchema = {
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build a medicine ordering app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building a basic medicine ordering app costs around $45,000 to $60,000. More complex apps with advanced features can cost $100,000 to $150,000+. Cost depends on the custom features and complexity.",
      },
    },
    {
      "@type": "Question",
      name: "What features should a telehealth app have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key features in a telehealth app include video visits, appointment scheduling, EHR integration, e-prescribing, messaging, symptom trackers, and insurance/billing tools. These help connect patients and doctors remotely.",
      },
    },
    {
      "@type": "Question",
      name: "How long does medicine app development and testing take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a simple app, development and testing take 3 to 5 months. More complex apps can take 6 to 12 months. We use agile processes for faster results and add features iteratively.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use to build medicine apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Comfygen, we use Java, Swift, React Native, and other modern tools. Our backend technologies include MySQL, Node.js, and Firebase. We also follow healthcare standards like HL7 and FHIR.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get an estimate for my custom medicine app idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Share your needs with us via email or phone or by filling out a request form. We will analyze your app needs to provide a personalized estimate and plan for medicine app development.",
      },
    },
    {
      "@type": "Question",
      name: "Are your medicine app services HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comfygen never fails in adhering to privacy and security measures. We strongly follow security measures and data privacy to develop and deliver the best medicine app services without compromising the security and privacy of the users. We keep our application HIPAA-compliant to ensure users' security.",
      },
    },
    {
      "@type": "Question",
      name: "Will Comfygen believe in post-deployment services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We believe that deployment is not the last stage of app development services. Once the medicine app is developed, later we deploy and cross-verify how the application is responding to the marketplace. If there is any prevention, elimination, add-ons, maintenance, and support required; the developers will support it accordingly to make it a competitive medicine app.",
      },
    },
    {
      "@type": "Question",
      name: "Can developers customize the eMed app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Why not? Yes, we are open to retaining any challenge and following the best possible tech practices to customize the app according to requirements. The medicine app isn’t just about delivering the medicines, however, you can add other features such as consultation, testing, pharma consultation, etc.",
      },
    },
    {
      "@type": "Question",
      name: "Will you provide the MVP of the medicine app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We acknowledge the query and definitely will provide you with MVPs to have a clear picture of the upcoming results from the app development ideology. This MVP will help in understanding how things will go on, and what other alterations are required.",
      },
    },
    {
      "@type": "Question",
      name: "What to consider before developing a medicine application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need to cross-verify and consider multiple factors; which helps you to know how to develop a robust medicine application; such as targeted audience, cost, mobile app development company, features, competitors analysis, etc.",
      },
    },
  ],
};

const productData = {
  "@context": "http://www.schema.org",
  "@type": "Product",
  brand: "Comfygen Private Limited",
  name: "On-Demand Medicine App Development Services",
  image: "https://www.comfygen.com/svg/Logo1.svg",
  description:
    "Get on-demand medicine app development services with Comfygen. We build secure, scalable, and feature-rich apps with real-time tracking, AI-driven recommendations, and multi-vendor support to enhance pharmacy operations and improve patient care.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "659",
  },
};
const technologyData = [
  {
    title: "PharmEasy Clone Development",
    desc: "We can develop a feature-rich PharmEasy-like medicine ordering app that allows users to upload prescriptions and receive doorstep delivery from a vast network of pharmacies. With advanced logistics integration, users can track their orders in real time. AI-powered features like prescription scanning, predictive auto-refills, and gamified rewards enhance customer experience and engagement.",
    img: <IconPill stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Netmeds Clone Development",
    desc: "We build robust Netmeds-like medicine e-commerce platforms that enable users to consult doctors, purchase medications, and receive AI-driven product recommendations. Features such as personalized health profiles, automated prescription transfers, and a symptom checker provide a seamless experience, improving medication accessibility and boosting customer confidence in online medicine purchases.",
    img: <IconShoppingCart stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Apollo 24/7 Clone Development",
    desc: "Our dedicated medicine app develops Apollo 24/7-inspired healthcare platforms that integrate telehealth, lab test scheduling, e-prescriptions, and medicine delivery into one app. With features like video consultations, patient portals, and post-visit care plans, users can access end-to-end healthcare services from a single, intuitive platform.",
    img: <IconHeartbeat stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "1mg Clone Development",
    desc: "We <a class='text-blue-600' href='https://www.comfygen.com/blog/build-medicine-delivery-app-like-1mg/'>developed a 1mg clone app</a> that offers online doctor consultations, diagnostic test bookings, and trusted medicine delivery. Advanced capabilities such as chronic care management, medicine authenticity validation, automated prescription transfers, and AI-powered medicine comparison tools help ensure a seamless and reliable healthcare experience.",
    img: <IconCapsule stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Practo Clone Development",
    desc: "At Comfygen, we develop Practo-like doctor appointment booking apps that connect patients with healthcare providers across various specialties. With features such as AI-assisted provider matching, custom intake forms, and secure video consultations, we streamline patient-doctor interactions while ensuring a secure and efficient consultation process.",
    img: <IconStethoscope stroke={1.5} className="w-12 h-12" />,
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };
  return (
    <>
      <Head>
        <title> Medicine Ordering App Development Company</title>
        <meta
          name="description"
          content="Comfygen is a leading medicine ordering app development company, offering secure, scalable, and user-friendly solutions with AI-driven features, real-time tracking, and seamless pharmacy management."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/medicine-app-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />
        <meta
          name="keywords"
          content="Medicine App Consulting Service, Medicine App Designing Service, Medicine Ordering App Development Service, Supply Chain Management Solutions, Pharmacy Chain Solutions, On-Demand Medicine Ordering App Development, On Demand Medicine Ordering App Development, Medicine Doorstep Ordering App Development, Develop Medicine Ordering App like TATA 1MG"
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Medicine Ordering App Development | Secure & Scalable Solutions"
        />
        <meta
          name="twitter:description"
          content=" Build a secure and scalable online medicine ordering app with Comfygen. Get features like prescription upload, real-time tracking, AI recommendations & multi-vendor support to enhance pharmacy operations and patient care."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta
          property="og:image:alt"
          content="Medicine Delivery App Development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/medicine-app-development"
        />
        <meta
          property="og:title"
          content="On-Demand Medicine Ordering App Development | Custom Solutions "
        />
        <meta
          property="og:description"
          content="Looking for an on-demand medicine ordering app development company? Comfygen builds secure, scalable, and user-friendly apps with real-time tracking, AI recommendations, and multi-vendor support to streamline pharmacy operations and enhance patient care. "
        />
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceData),
          }}
        />
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productData),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/medicine-ordering-app-development-company-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="Medicine Ordering App Development Company"
                ptag="Looking for a medicine ordering app development company that delivers secure, scalable, and user-friendly solutions? Comfygen specializes in building feature-rich medicine delivery apps that enhance patient care and streamline pharmacy operations. Our expert team ensures seamless integration, regulatory compliance, and a superior user experience—partner with us to create a cutting-edge app that revolutionizes online medicine ordering."
                li="Prescription Upload & Verification"
                li1="Real-time Order Tracking"
                li2="AI-driven Medicine Recommendations"
                li3="Multi-vendor & Pharmacy Management"
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
        <AboutSection
          title="About Company"
          heading="Your Trusted Medicine Ordering App Development Company"
          description1="Comfygen empowers the healthcare industry with cutting-edge medicine ordering app development services, enabling seamless, secure, and efficient online pharmacy solutions. We specialize in developing scalable and user-friendly mobile apps that bridge the gap between patients, pharmacies, and healthcare providers. Our medicine app development solutions are designed to enhance patient care, reduce operational costs, and keep businesses ahead in the evolving healthcare landscape."
          description2="Whether you need an app for telemedicine, prescription delivery, or an online pharmacy marketplace, we offer custom medicine ordering app development solutions for iOS and Android. With expertise in building apps like Medscape and Netmeds, we deliver innovative platforms that revolutionize healthcare services. partner with Comfygen to create a medicine ordering app that enhances accessibility and transforms patient care."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Cutting-Edge Medicine Ordering App Development Services by
                Comfygen
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we offer a wide range of medicine ordering app
                development services tailored to meet the needs of pharmacies,
                healthcare providers, and startups. Our expertise includes:
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <LatestTechnology
          heading="Online Medicine Ordering App Development Solution"
          subheading="Our versatile teams have experience building custom and clone medicine ordering apps tailored to diverse business models. Whether you want a marketplace, pharmacy delivery app, or telehealth integration, we offer cutting-edge solutions with advanced features. Below, we highlight popular examples and key features we can recreate or even enhance:"
          techData={technologyData}
        />

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Business Models We Offer
                </h2>
                <p>
                  At Comfygen, we provide tailored medicine ordering app
                  solutions based on different business models. Whether you're a
                  standalone pharmacy, a multi-vendor marketplace, or a pharma
                  company, we can develop the perfect app to match your
                  operational needs.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.High1.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[40px] font-bold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p className=" text-base font-normal mt-2">{decs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <AdvancedPanel />
        {/* <div className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <section className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-white xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Core Healthcare Mobile App Development for Medicine Ordering
                  Features
                </h2>
                <p className="text-base text-white">
                  A medicine mobile app becomes valuable when it solves real
                  problems for patients and providers. Our apps pack the
                  must-have tools to simplify healthcare tasks, improve access,
                  and enable better outcomes.
                </p>
              </div>
              <div>
                <Tech />
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us " className="mt-5">
                  <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#ffff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                    Get A Free Consultation <MdOutlineArrowOutward />
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div> */}
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Medicine Ordering App Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                Our comprehensive medicine ordering app development process
                allows us to deliver maximum value for your business. We take an
                extremely thorough approach, applying our mobile applications
                for healthcare expertise to ensure the highest quality and
                security standards at every stage.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>
        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Our Medicine Ordering App Development Portfolio"
          description="We have developed and launched several medicine ordering and healthcare apps that have transformed how users access medicines and healthcare services. The following are some of our most notable medicine ordering app development projects."
        />
        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />

        {/* <PortfolioSec
          techData={techDataForPage1}
          heading="Our Medicine Ordering App Development Portfolio"
          description="We have developed and launched several medicine ordering and healthcare apps that have transformed how users access medicines and healthcare services. The following are some of our most notable medicine ordering app development projects."
        /> */}

        <TechStack
          title="Technologies We Use for Medicine Ordering App Development "
          description="We use cutting-edge technologies and frameworks to build high-performance, scalable, and secure medicine ordering apps. We ensure seamless user experiences, fast performance, and compliance with healthcare industry standards."
        />


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/investing-in-online-medicine-delivery-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Medicine App Developers From Us"
          text="You might find various medicine delivery app development companies around, but Comfygen promises to be the best one due to the most skilled and talented professionals associated here. We have the most advanced and experienced medicine app developers, who can work dedicatedly on a client's project and bring optimum results from the software. You can book a call and consult with us about the plans, as we have reasons to claim that our mobile app developers are right for you:"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "We have the dedicated app developers for project",
            "The professionals work on customized solutions",
            "Developers available on different time-zones to work",
            "Advancements and modern technology implementation",
            "Under-Budgeted Solutions with promising quality",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          description="Find answers to common queries about medicine app development. Get insights to make informed decisions for your pharmacy business."
        />
      </div>
    </>
  );
}
