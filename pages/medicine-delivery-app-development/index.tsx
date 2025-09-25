import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";
import Providers from "./components/Providers";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import ServicesSec from "../components/ServicesSec";
import TechStack from "../components/TechStack";
import HireDeveloper from "../components/HireDeveloper";
import CallToAction from "../components/CallToAction";
import BlogSection from "../components/BlogSection";
import InfoSectionRight from "../components/InfoSectionRight";
import PortfolioSec from "../components/PortfolioSec";
import SolutionSec from "../components/SolutionSec";
import {
  IconCode,
  IconFirstAidKit,
  IconMessage,
  IconNews,
} from "@tabler/icons-react";
import { IconCashBanknote, IconShoppingCart } from "@tabler/icons-react";
import ConsultancyApproach from "../components/ConsultancyApproach";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import AdvancedPanel from "./components/AdvancedPanel";
import ClientTestimonials from "../components/ClientTestimonials";
import PortfolioSlider from "../components/PortfolioSlider";
import Tab from "../components/Tab";

const HeroSectionForAllPages = dynamic(
  () => import("../components/HeroSectionForAllPages"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const FaQ = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});
const Features = dynamic(() => import("./components/Features"), {
  loading: () => <p>Loading...</p>,
});

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  brand: {
    "@type": "Brand",
    name: "Medicine Delivery App Development Company | Fastest App For Pharmacy Delivery App Development",
  },
  description:
    "Comfygen stands out as a leading partner in medicine delivery app development, offering extensive expertise in creating innovative healthcare solutions. Our focus is on user-centric design, ensuring that our applications simplify the buying process for both over-the-counter and prescription medications, providing a seamless experience for customers of all ages. We understand that every business has unique requirements, which is why our team offers tailored development services suitable for local pharmacies and large healthcare providers alike. By leveraging advanced technologies such as AI, real-time tracking, and secure payment gateways, we enhance functionality while prioritizing regulatory compliance and implementing stringent security measures to protect user data. Our robust apps are designed for scalability and flexibility, allowing your business to grow and adapt to changing market needs. With continuous support and maintenance, we ensure that your app operates smoothly, freeing you to focus on expansion. Our proven track record features successful projects that have increased accessibility and convenience in the pharmacy sector, helping clients boost revenue and explore new market opportunities. Comfygen is committed to innovation, continuously integrating the latest features to enhance user satisfaction and engagement in medicine delivery, making us the ideal partner to transform your vision into reality in the evolving healthcare landscape.",
  image: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  name: "On-Demand Medicine delivery App Development Company | Comfygen",
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Mr. Saddam Husen",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
      },
      author: {
        "@type": "Person",
        name: "Mr. Saddam Husen",
      },
    },
  ],
};

const LocalBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  priceRange: "$20-$55",
  image: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/medicine-delivery-app-development",
  name: "On demand Medicine Delivery App Development Company in India",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
    addressLocality: "Vaishali Nagar, Near D A V Centenary Public School",
    addressRegion: "Jaipur, Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Saddam Husen",
    },
  },
  url: "https://www.comfygen.com/medicine-delivery-app-development",
  telephone: "+91 9587867258, +1 5145659471",
};

const technologyData = [
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Redefine Convenience",
    desc: "Pharmacy stores, marketplaces, and store chains can help redefine convenience for their customers by offering an easy way to order medicines by . Your customers don’t have to visit a physical pharmacy store anymore as they can order medicines conveniently with a medicine ordering app development from their homes or anywhere.",
  },
  {
    img: <IconCashBanknote stroke={1.5} className="w-12 h-12" />,
    title: "Easier Consultation",
    desc: "Pharmacy Businesses can also capitalize on medicine delivery app development services to ensure that patients can find easier opportunities for healthcare application consultation. Medicine delivery apps with telemedicine features can help patients contact doctors or nurses and healthcare professionals, thereby ensuring better quality of care.",
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Privacy Benefits",
    desc: "Users can also use medicine delivery apps to order medicines without disclosing their identities. The flexibility to avoid sharing performance information with pharmacy stores ensures that users can protect their privacy while purchasing important and sensitive medications.",
  },
  {
    img: <IconNews stroke={1.5} className="w-12 h-12" />,
    title: "Effective Time-Savings",
    desc: "The most important advantage of using medicine delivery apps is the assurance of time-saving benefits. Customers can order the medicines they want directly from the app within a few seconds. The use of medicine delivery apps ensures that patients can save money and time.",
  },
  {
    img: <IconMessage stroke={1.5} className="w-12 h-12" />,
    title: "Instant Deliveries",
    desc: "Customers of medicine delivery apps can also make the most of the benefits of medicine delivery mobile app development features to avail instant delivery medicine app. Mobile Apps for pharmacy delivery can help patients and their relatives explore medicines and place their orders with a few steps. Pharmacy stores can use apps to ensure instant delivery medicine application.",
  },
  {
    img: <IconShoppingCart stroke={1.5} className="w-12 h-12" />,
    title: "Centralization in Control",
    desc: "The dashboard of a pharmacy delivery app serves as an ideal resource to help you manage the control over your app from one panel. Business owners who have a pharmacy store can keep an eye on their business, customers, delivery personnel, and different stores with one powerful dashboard that has appealing features.",
  },
];
const Process = [
  {
    title: "Analysis of Requirements",
    description:
      "We begin every medicine doorstep delivery app development project with a clear impression of your requirements. Awareness of your requirements helps us define the accurate specifications for your medicine delivery app.",
  },
  {
    title: "Designing the Prototypes",
    description:
      "The next step in developing your medicine delivery app involves paying attention to the design of the prototype and wireframes for your project. The prototype and wireframes give the ideal start to every medicine delivery mobile app development project with the flexibility to check different options to see what will work for the app.",
  },
  {
    title: "Definition of System Architecture",
    description:
      "After going through different prototypes, we go with the MVP design in which we specify the system architecture. Our fastest online medicine delivery app development company in India, USA, UAE has proved to be effective at MVP design for different projects, thereby offering impressive benefits to pharmacy delivery app development projects.",
  },
  {
    title: "Development and Deployment",
    description:
      "The online medicine app development stage helps us bring all our expertise to the table and a <a href='https://www.comfygen.com/blog/on-demand-medicine-delivery-app-development-features-and-cost/' class='text-blue-600'> medicine delivery app development with comprehensive features </a> tailored to the target audience. We also follow detailed steps for medicine delivery app testing and quality assurance to make sure that your medicine delivery app is perfectly ready before you deploy pharmacy delivery apps.",
  },
  {
    title: "Dedicated App Development Team",
    description:
      "Our dedicated <a href='/mobile-app-development' class='text-blue-600'> mobile app development </a> team model makes us a reliable on-demand medicine delivery app development services, solutions with which to work for a long time. You can have our experts as in-house team members for creating effective pharmacy delivery apps.",
  },
  {
    title: "Project-based Model",
    description:
      "In order to develop pharmacy delivery apps with optimal resource utilization, pharmacy stores should choose the project-based model. You can hire our <a class='text-blue-600' href='/hire-mobile-app-developer'> medicine delivery mobile app developer </a> experts to work on your mobile app for healthcare projects without unwanted overheads.",
  },
  {
    title: "Support and Maintenance",
    description:
      "We also look after the continuous operations of your medicine delivery apps with our support and maintenance services. Our medicine doorstep delivery app development firm can help you make sure that your pharmacy or medicine delivery app can grow with the market trends and technologies also offer crucial maintenance benefits.",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

  let { Chartacterstics } = JSON_DATA;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const structuredData = [
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
      "@type": "Service",
      name: "Online Medicine Delivery App Development Company",
      provider: {
        "@type": "Organization",
        name: "Comfygen",
        url: "https://www.comfygen.com/",
      },
      description:
        "Comfygen is a leading online medicine delivery app development company...",
      url: "https://www.comfygen.com/medicine-delivery-app-development",
      areaServed: "Global",
      serviceType: [
        "On Demand Medicine Delivery App Development",
        "Medicine Doorstep Delivery App Development",
        "Develop Medicine Delivery App like TATA 1MG",
      ],
      sameAs: [
        "https://www.facebook.com/comfygen",
        "https://www.linkedin.com/company/comfygen-private-limited",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Comfygen",
      image: "https://www.comfygen.com/svg/Logo1.svg",
      url: "https://www.comfygen.com/",
      telephone: "+91-958-786-7258",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      brand: "Comfygen Private Limited",
      name: "On-Demand Medicine Delivery App Development Services",
      description:
        "Get top-notch on-demand medicine delivery app development services...",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1313",
      },
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you Build an MVP for Healthcare medicine delivery apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we build MVP for medicine delivery apps. You can come to our medicine delivery app development company which is located in India and USA, and get the best results with an effective MVP UI design. The MVP helps us find out how your medicine delivery app would be perceived by your target audience. It shows us the features that would have the maximum impact on the success of your app.",
        },
      },
      {
        "@type": "Question",
        name: "How much time do you need to build medicine delivery apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The time required to develop medicine delivery apps depends on the scale of the project and the complexity of the features. These factors influence the time required for prototyping, development, testing, and security of the delivery app for medicine before deployment.",
        },
      },
      {
        "@type": "Question",
        name: "Which technologies would influence the future of medicine delivery apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The technologies that are likely to influence the future of medicine delivery apps include blockchain development services, and AI development services. For example, Gen. AI can offer personalized recommendations for ordering medications, and IoT Development Services , can enable real-time health monitoring to order medications at the right time.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of developing pharmacy delivery apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of developing pharmacy delivery apps depends on different factors, such as the complexity of features, UI/UX design, app platform, technology stack, and third-party integrations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer quality assurance services for medicine delivery apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our medicine delivery app developer team also offers quality assurance or QA services for medicine delivery apps. Our QA services involve comprehensive functionality and security testing on the apps before deploying them on different platforms.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of creating medicine delivery apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medicine delivery apps provide a wide range of benefits for pharmacy business owners and patients. Convenience, security, and privacy are the top benefits of medicine delivery apps. Most important of all, medicine delivery apps have the potential to transform the healthcare sector with unique value advantages.",
        },
      },
      {
        "@type": "Question",
        name: "Is an MVP important before starting the development process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, an MVP is important before the development process as it helps find the features that would offer the best results according to your goals. The MVP is an ideal tool to measure customer sentiment and make adjustments before the development process.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work on cross-platform app development projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work on cross-platform app development projects as our medicine delivery app development company gives you the assurance of specialization in a powerful technology stack. Our experts can create apps for Android and iOS to ensure that it reaches more users.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide continuous improvements in the medicine delivery apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our experts offer continuous support and maintenance that helps you enjoy peace of mind as we implement new improvements. Based on the feedback of clients, we identify potential areas for improvement in the app and make the necessary adjustments.",
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>
          Best Medicine Delivery App Development Company 
        </title>
        <meta
          name="description"
          content="Looking for a medicine delivery app development company? Comfygen builds AI-powered, HIPAA-compliant apps with real-time tracking, secure payments, and seamless ordering. Empower your pharmacy business with cutting-edge solutions today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/medicine-delivery-app-development"
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
          content="Medicine Delivery App Consulting Service, Medicine Delivery App Designing Service, Medicine Delivery App Development Service, Supply Chain Management Solutions, Pharmacy Chain Solutions, On-Demand Medicine Ordering App Development, On Demand Medicine Delivery App Development, Medicine Doorstep Delivery App Development, Develop Medicine Delivery App like TATA 1MG"
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
          content="Online Medicine Delivery App Development Company | Pharmacy App Solutions"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a trusted online medicine delivery app development company, offering feature-rich pharmacy app solutions with real-time tracking, secure payments, and AI-powered features. Build your custom medicine delivery app today!"
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
          content="https://www.comfygen.com/medicine-delivery-app-development"
        />
        <meta
          property="og:title"
          content="On-Demand Medicine Delivery App Development Company "
        />
        <meta
          property="og:description"
          content="Comfygen is among the top Medicine Delivery App Development Company. Launch your Medicine Delivery app like 1MG, PharmEasy, Netmeds, or Truemeds."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div className="">
          <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/your-partner-in-medicine-ordering-app-development-hero-img.webp')]">
            <HeroSectionForAllPages
              heading="Medicine Delivery App Development Company"
              ptag="Empower your pharmacy business with a medicine delivery app development company that builds cutting-edge solutions for seamless medicine ordering, real-time tracking, and secure payments. At Comfygen, we specialize in developing HIPAA-compliant, AI-powered medicine delivery apps that enhance user experience, streamline pharmacy operations, and ensure faster, more efficient medicine delivery."
              li="Custom Medicine Delivery App Development"
              li1="24/7 Support & Maintenance"
              li2="Scalable & Secure Solutions"
              li3="AI/ML & Blockchain Expertise"
              li4="Seamless Payment Gateway Integrations"
              ptag3=""
              btnName="Talk With Expert"
              btnLink="/contact-us"
              openModal={openModal}
              talkToExpertModal={talkToExpertModal}
              setTalkToExpertModal={setTalkToExpertModal}
              closeModal={closeModal}
            />
          </div>
        </div>
        <AboutSection
          heading="Top-Rated On-Demand Medicine Delivery App Development Company"
          description1="At Comfygen, we are a globally recognized online medicine delivery app development company having successfully delivered 50+ medicine delivery app solutions for pharmaceutical businesses, pharmacy startups, and more. We specialize in developing robust, scalable, and user-friendly healthcare apps, empowering pharmacies, healthcare providers, and entrepreneurs to offer seamless medicine delivery services."
          description2="Our team of expert medicine delivery app developers crafts innovative solutions integrated with AI-driven features, secure architecture, and cutting-edge technology. We ensure compliance with healthcare regulations while delivering an efficient, seamless, and high-performing user experience."
          description3="Our custom medicine delivery app development services cater to startups, enterprises, and online pharmacy businesses looking to revolutionize the healthcare sector. From intuitive UI/UX design to secure payment gateways and real-time tracking, we provide end-to-end solutions. Partner with us to create a high-performing medicine delivery app that enhances accessibility and convenience for customers."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Offer Medicine Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                We have gained the trust of our clients by offering medicine
                delivery app development services tailored to their needs and
                business goals. The following list of different medicine
                delivery app development services.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Custom Medicine Delivery App Development Solutions Tailored
                  for You
                </h2>
                <p>
                  We are a leading medicine delivery mobile app development
                  agency in India with a specialization in developing medicine delivery
                  apps to transform medicine deliveries. Our mission revolves
                  around transforming one of the most crucial areas of the
                  healthcare sector by creating custom medicine delivery
                  applications. In addition, we also offer different types of
                  proven and tested solutions to help you manage the operations
                  of your custom medicine delivery apps.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-[#F5F5F9] lg:py-16 py-10 ">
          <div className=" mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <h2 className="text-center xl:text-4xl text-3xl text-[#212121]  font-bold ">
              We Develop Tailored Solutions for Various Pharmaceutical Delivery
              Business Models
            </h2>
            <p className="text-lg text-center font-normal pb-6">
              Comfygen offers different online pharmacy app development
              solutions based on business objectives. On-demand medicine
              delivery applications developed by our team are tailored to your
              needs and establish standard pharmacy chains that meet your
              standards.
            </p>
            <div className=" mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border ">
                  <Image
                    src="https://www.comfygen.com/image/imgpsh_fullsize_anim (12).png"
                    alt="Startups"
                    className="w-full h-48 object-cover"
                    height={1380}
                    width={773}
                    unoptimized={true}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      Stand-Alone Pharmacy Store{" "}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      It is a dedicated online pharmacy store built for one
                      specific pharma store or another e-pharmacy startups. Any
                      business can build their dedicated online medicine
                      delivery application with the similar features like
                      implemented in other online pharmacy software models.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <Image
                    src="https://www.comfygen.com/image/multi-chain.png"
                    alt="Small Businesses"
                    className="w-full h-48 object-cover"
                    height={1380}
                    width={773}
                    unoptimized={true}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      Multi-Chain Pharmacy Store / Aggregator Model
                    </h3>
                    <p className="text-gray-600 mb-4">
                      It’s an aggregator or multi-chain pharmacy store; which
                      partners with multitude pharmacy stores to list their
                      drugs for selling. People browse medicines and order them
                      from dedicated store through a single platform.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <Image
                    src="https://www.comfygen.com/image/modal_pharma.jpeg"
                    alt="Enterprises"
                    className="w-full h-48 object-cover"
                    height={1380}
                    width={773}
                    unoptimized={true}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      Franchise Online Pharmacy Model
                    </h3>
                    <p className="text-gray-600 mb-4">
                      With the franchise on-demand medicine delivery
                      application, it partners with other pharmacy chains to
                      build a branded online outlets. Each pharmacy chain has
                      its dedicated digital solution, that enable users to order
                      medicines for doorstep delivery from their preferred
                      chains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Medicine Delivery App Development Success Stories"
          description="Explore our innovative medicine delivery app development projects, designed to enhance accessibility, efficiency, and user convenience in the healthcare sector. Our expertise ensures secure, scalable, and feature-rich solutions tailored to business needs."
        />

        <AdvancedPanel />

        
        {/* <Tab /> */}
        <CallToAction
          heading="Launch Your Medicine Delivery App with Cutting-Edge Features Today!"
          text="Transform your business with our expert medicine delivery app development services and stay ahead in the healthcare industry"
          buttonText="Get Started Project"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/medicine-delivery-app-call-to-action-image.webp"
          imageAlt="Future of Technology"
        />
        
        {/* <Providers /> */}
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/investing-in-online-medicine-delivery-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Next-Gen Technologies We Use in Medicine Delivery App
                  Development
                </h2>
                <p className="text-white text-center">
                  At Comfygen, we integrate the latest technologies to build
                  cutting-edge pharmacy delivery apps that enhance efficiency,
                  security, and user experience. Our next-gen medicine delivery
                  app development solutions make sure seamless medicine
                  ordering, secure transactions, and AI-driven automation.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.FoodAppMaker.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={` relative`}>
                      <div
                        className={` flex justify-start  place-items-center relative`}
                      >
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="">
                        <p
                          className=" text-white text-start "
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
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                End to End Medicine Delivery App Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                We have been working on enhancing our capabilities as a 
                  <a href="https://www.comfygen.com/healthcare-app-development" className="text-blue-500 font-semibold" > healthcare app development company </a>
                with different types of apps. Our proven methodology for
                medicine delivery app development gives us a competitive edge in
                crafting customized, high-performing solutions designed for
                success.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <TechStack
          title="Technology Stack We Use for Medicine Delivery App Development"
          description="Comfygen builds high-performing, secure, and scalable medicine delivery apps using a robust and modern technology stack. Customers and pharmacies benefit from seamless functionality, real-time tracking, and a user-friendly experience."
          filterCategory={["crypto"]}
        />
        {/* <Features />  */}
        <SolutionSec
          heading="Why Should Pharmacy Businesses Utilize Online Medicine Delivery App Development?"
          subheading="Every business in the pharmacy industry must look for new Every business in the pharmacy industry must look for new opportunities to stay relevant in the market. Comfygen is among the top medicine delivery app development firm based in USA and India, gives the perfect option to all types of pharmacy businesses to improve their efficiency, customer experience, productivity, and resource utilization. Any business that wants to make a mark in the domain of pharmacy delivery can capitalize on diverse advantages."
          techData={technologyData}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <ContactFromCenter />
        <HireDeveloper
          heading="Hire Our Expert Developers for Your Medicine Delivery App Development Projects"
          text="Medicine delivery apps can change the face of healthcare with the advantages of easier and more convenient pharmacy delivery of medicines at the doorstep of patients. Our medical delivery app developer team can help you with their experience in working on different types of projects to bring you custom healthcare medicine delivery apps for pharmacy stores. With years of training and qualifications to work on mobile app development for healthcare projects, our experts can make the big difference you need to achieve success."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Our medicine delivery app development experts have professional certifications.",
            "Our experts have worked on different healthcare app development projects.",
            "Our developers specialize in the latest technologies, tools, and frameworks.",
            "We also prioritize transparency and maintain integrity in our services.",
          ]}
        />
        <InfoSectionRight
          heading="Do You Want More Information about Medicine Delivery App Development Services?"
          description1="Reach out to our experts through the channels of your choice and make the most of our expertise in developing medicine delivery apps right now."
          imageSrc="https://www.comfygen.com/media/images/android-app-development-landscape-img.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <FaQ
          faqData={JSON_DATA.Frequently}
        />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  try {
    const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
    if (!resData.ok) {
      throw new Error(`Failed to fetch: ${resData.statusText}`);
    }
    const data = await resData.json();
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    return { props: { initialData: data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { initialData: [] } }; // Handle error case
  }
}
