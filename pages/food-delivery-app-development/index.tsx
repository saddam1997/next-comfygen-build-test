import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";
import NEW_JSON_DATA from "./json/fooddel.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";
import Appdevelopmentcost from "./component/appdevelopmentcost";


const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const AppcardSlider = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AppcardSlider"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CoreFeaturesSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CoreFeaturesSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhoCanStart = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhoCanStart"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





const Process = [
  {
    title: " Discovery and Ideation",
    description:
      "We begin with detailed research and brainstorming to define goals, target audience, and features—ensuring your food delivery application aligns perfectly with your business vision.",
  },
  {
    title: "Design and Prototyping",
    description:
      "Our expert <a href='https://www.comfygen.com/web-design' class='text-blue-500 font-semibold'>UI/UX designers</a> create engaging prototypes and user-friendly interfaces for a seamless experience. Every design enhances brand identity and boosts user satisfaction.",
  },
  {
    title: "Development",
    description:
      "We build scalable food delivery mobile apps using the latest technology stack, integrating features like real-time tracking, multiple restaurant support, and secure payment systems.",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Our QA experts conduct end-to-end testing to ensure your food delivery app development services are error-free, secure, and optimized for top-notch performance.",
  },
  {
    title: "Deployment",
    description:
      "We handle app store submissions and ensure smooth deployment on iOS and Android platforms for a flawless food delivery app launch experience.",
  },
  {
    title: "Analytics and Performance Optimization",
    description:
      "After launch, we use analytics to measure app performance and user engagement, continuously optimizing your on-demand food delivery app development for better ROI.",
  },
  {
    title: "Post-Launch Support",
    description:
      "As a trusted online food ordering website development India, we provide continuous maintenance, updates, and feature enhancements to keep your app competitive and user-focused.",
  },
];


const WhoCanStartCards = [
  {
    heading: "Restaurants & Cafes",
    description:
      "We build custom food delivery apps for restaurants and cafes, helping them manage orders, track deliveries, and engage customers with loyalty programs and promotions. Our restaurant app development solutions make online ordering seamless and hassle-free.",
  },


  {
    heading: "Cloud Kitchens",
    description:
      "Our on-demand food delivery app development for cloud kitchens focuses on operational efficiency, real-time order management, and delivery optimization, enabling kitchen-only businesses to expand their reach without the need for a storefront.",
  },

  {
    heading: "Food Startups",
    description:
      "<a class='underline ' href='https://www.comfygen.com/blog/food-delivery-app-development-for-startups/'>Food app development for food startups</a>, we offer end-to-end food delivery mobile app development solutions that are scalable, cost-effective, and designed to attract early adopters. Startups can quickly enter the market with a polished, fully functional app.",
  },


  {
    heading: "Enterprises & Franchise Chains",
    description:
      "We develop enterprise-grade and multi-location food delivery apps for franchises and large food businesses. Our enterprise food ordering mobile app development solutions ensure centralized management, synchronized operations, and a consistent customer experience across all outlets.",
  }
];




let { AppService } = NEW_JSON_DATA;

export default function Ecommerce(props) {
  let { initialData } = props;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
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
      "name": "Comfygen",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "areaServed": ["US", "IN", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
        "email": "sales@comfygen.com",
        "availableLanguage": "en, in"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]

    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
          "addressLocality": "Jaipur",
          "postalCode": "302006",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7",
          "addressLocality": "Toronto",
          "postalCode": "M1G3S7",
          "addressCountry": "Canada"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Food Delivery App Development – Custom On-Demand Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get high-performance food delivery app development services from Comfygen. We build scalable, user-friendly, and feature-rich food ordering apps tailored to your business needs.",
      "url": "https://www.comfygen.com/food-delivery-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/food-delivery-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Food delivery app development",
        "Online food ordering app development",
        "Custom food delivery app solutions",
        "Multi-restaurant food delivery app development",
        "Single restaurant app development",
        "Restaurant delivery software",
        "Real-time order tracking integration",
        "AI-powered food recommendation system"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://www.youtube.com/@ComfygenBusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Private Limited",
      "name": "Food Delivery App Development Services",
      "image": "https://www.comfygen.com/comfygen-images/food-delivery-app-development/food-delivery-app-development-hero.webp",
      "description": "Get high-performance food delivery app development services from Comfygen. We deliver secure, scalable, and user-friendly food ordering apps with real-time tracking, AI recommendations, and seamless payment integration.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1928"
      }
    },


    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "areaServed": ["US", "IN", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
        "email": "sales@comfygen.com",

        "availableLanguage": "en, in"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen",
        "https://twitter.com/comfygentech",
        "https://www.instagram.com/comfygen_/?hl=en",
        "https://youtube.com/@comfygenbusiness",
        "https://www.linkedin.com/company/comfygen-private-limited",
        "https://in.pinterest.com/comfygenpvt/"
      ]
    },


    {

      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How Can I Use the Online Food Delivery App Development to Place an Order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Just download the app, register, and input your location. Look through eateries, select what you want, and put it in your cart. Order completion requires choosing a payment option. Follow your order's development in real time until it arrives at your property."
          }
        },
        {
          "@type": "Question",
          "name": "How Can I Be Sure That Online Transactions Are Secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through person verifications, encrypted charge gateways, and in-app safety capabilities, online meal delivery apps put safety first. Your financial and personal information is kept private because of regular audits and adherence to data protection laws, providing a reliable and safe ordering experience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you develop cross-platform food delivery apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We offer seamless development for both Android and iOS platforms, ensuring consistent performance and a user-friendly design across devices."
          }
        }
      ]
    }

  ];

  return (
    <>
      <Head>
        <title>
          Best Food Delivery App Development Company in India
        </title>
        <meta
          name="description"
          content="Looking for a food delivery app development company in India? We build scalable food ordering apps like Zomato or Swiggy for startups & restaurants. Get free consultation."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
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
        <meta name="apple-mobile-web-app-status-bar-style" content="#E03A3C" />
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
          content="Food Delivery App Development Company, food delivery app development services Food Delivery, App Development food delivery software, restaurant app development services, food ordering app development, on-demand food delivery software solutions, Custom Food Deliver App Solutions, food ordering mobile app development, food delivery website development, online food delivery app development, food ordering mobile app development, food app development services, on-demand food delivery app development, food delivery app development services, food ordering app development, on demand food delivery app development"
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:title"
          content="On-Demand Food Delivery App Development Company in India"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta
          name="og:image"
          content="https://www.comfygen.com/comfygen-images/food-delivery-app-development/food-delivery-app-development-og.webp"
        />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="We are top food delivery app development company in India, deliver on demand food ordering app development services for startup and enterprise business."
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Food Delivery App Development Company in India"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a best food develiry app development company in India. we provide online food-ordering app development services. Hire food develiry app developer now."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="food delivery app development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta
          property="og:title"
          content="Food Delivery App Development Company in India for Startups Business"
        />
        <meta
          property="og:description"
          content="Comfygen is a best food develiry app development company in India. we provide online food-ordering app development services. Hire food develiry app developer now."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <div className=" ">
          <HeroSectionForAllPages
            heading="Custom Food Delivery App Development Company in India"
            ptag="Build a scalable, secure, and high-performance food delivery app like Zomato or Swiggy with Comfygen. We are a trusted food delivery app development company in India, delivering custom, on-demand food ordering solutions for startups, restaurants, and enterprises worldwide."
            ptag1='With over 6+ years of experience and more than 40+ successful on-demand app projects, we specialize in AI-powered food delivery app development services that help businesses increase orders, automate operations, and grow revenue more quickly.'
            li="Scalable On-Demand Food Delivery App Development"
            li1="AI-Powered Food Delivery App Solutions"
            li2="Secure Payment & Real-Time Order Tracking"
            li3="Trusted by Global Startups & Restaurants"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/flower-delivery-app-development/food-delivery-app-development.webp"
          />

        </div>

        <div>
          <Milestones />
        </div>
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our Next-Gen Food Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">We offer end-to-end food delivery app development services in India designed to meet the needs of restaurants, cloud kitchens, and on-demand delivery startups.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          heading="Why Invest in Food Delivery App Development for Your Business Growth?"
          description1="The global food delivery market is expanding rapidly as customers prefer faster, smarter, and contactless ways to order meals. By 2030, the industry is expected to surpass hundreds of billions in revenue, making a food delivery app an essential tool for restaurants, startups, and cloud kitchens to remain competitive."
          description2="Whether you manage a single outlet or operate multiple chains, a custom food delivery app make sure smooth operations with real-time order tracking, secure payments, and loyalty programs that keep customers coming back."
          description3="With Comfygen food delivery app development company associative, we help you scale your business, enhance customer satisfaction, and increase revenue growth."
          imageSrc="https://www.comfygen.com/comfygen-images/food-delivery-app-development/invest-food-delivery-app-development.webp"
          link="/about-us"
          linkText="Talk to Food Delivery App Experts"
          points={[
            "Streamlines Online Orders & Delivery Management",
            "Improves Customer Convenience & Retention",
            "Enables Real-Time Tracking & Secure Payments",
            "Boosts Restaurant Visibility & Profitability",
          ]}
        />

        {/* <ContactFromCenter /> */}





        <AppcardSlider
          heading="Pre-Developed Food Delivery App Clone Solutions for Instant Market Entry"
          description="Looking to <a href='https://www.comfygen.com/blog/create-a-food-delivery-app/' class='text-blue-600 font-semibold'>build a food delivery apps</a> like Zomato and DoorDash? At Comfygen, we provide ready-made food delivery app solutions that are fully customizable and proven food delivery app clones that help you go live faster. Our food ordering clone apps replicate the functionality of popular platforms, incorporating advanced features that help startups and enterprises save time and reduce costs as they enter the competitive food delivery market."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />



        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Custom Food Delivery App Development Case Studies & Portfolio with Real-World Business Results"
            description="Explore our diverse portfolio of food delivery application solution projects designed to meet evolving business needs. From real-time order tracking to AI-powered recommendations and seamless user experiences, our food ordering apps are crafted to elevate customer satisfaction and streamline restaurant operations."
          />
        </section>


        <CallToAction
          heading="Ready to Build Your Food Delivery App?"
          text="Partner with Comfygen, the best food ordering mobile app development company, and bring your vision to life."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />



        <div className="py-8">
          <Features
            heading="Comfygen Delivers Powerful Food Delivery Features for Customers, Restaurants & Riders"
            description="Comfygen's development team develops food delivery app features that drive success for all stakeholders. Our food ordering apps simplify food ordering, improve delivery efficiency, and provide complete control for business owners — all within one robust platform."
            featuresData={JSON_DATA.featuresData}
            grid={4} />
        </div>



        <section className="py-10 lg:py-20 bg-[#5556D1] mt-8">
          <div className="2xl:w-10/12 w-full lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto sm:py-8 p-2">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Technologies We Use for Scalable Food Delivery App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen, we use next-generation technologies to build robust, scalable, and secure food delivery apps. Our technology-driven approach delivers smooth user experiences, lightning-fast performance, and reliable data protection for restaurants and food businesses
                </p>
              </div>
              <div className="grid gap-[1px]  text-left lg:grid-cols-2 md:grid-cols-2  bg-white">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs } = elem;
                  return (
                    <div key={title} className={`bg-[#5556D1] transition-all cursor-pointer duration-300 hover:bg-[#0f0f0f] relative p-4`}>
                      <div
                        className={`flex sm:justify-start justify-center text-center gap-2 place-items-center relative`}
                      >
                        {/* <Image
                                  src={img}
                                  className="object-cover"
                                  width={35}
                                  height={50}
                                  alt={title}
                                /> */}
                        <h3 className="text-2xl font-bold text-[#fff] sm:text-start text-center">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p className="break-all text-white text-start " dangerouslySetInnerHTML={{ __html: decs }}>

                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <CoreFeaturesSection
          title="We Offering Advanced AI-Powered Food Delivery App Development Solution"
          subtitle="At Comfygen, we specialize in delivering advanced <a href='https://www.comfygen.com/blog/the-role-of-ai-in-food-delivery-app-development/' class='text-blue-600 font-semibold'>AI-Driven food delivery app development solutions</a> that help businesses stay ahead in the competitive digital marketplace. By leveraging cutting-edge artificial intelligence technologies, we build smart food delivery applications that enhance customer engagement, streamline operations, and maximize overall business performance."
          features={JSON_DATA.AIPowered}
        />

        <WhoCanStart
          title="Food Delivery App Development Solutions for Every Business"
          description="Our food delivery app development solutions are built to support multiple business models, from single restaurants to large aggregator platforms."
          cards={WhoCanStartCards}
        />

        <Appdevelopmentcost
          heading="Food Delivery App Development Cost in India"
          text="The <a href='https://www.comfygen.com/blog/food-delivery-app-development-cost/' class=' underline font-semibold'>food delivery app development cost</a> in India depends on features, platform (Android, iOS, Web), design complexity, and integrations."
          buttonText="Request Food Delivery App Cost Estimate"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/food-delivery-app-development/food App Development Cost.webp"
          imageAlt=""
          listheading="Estimated cost range:"
          listItems={[
            "Basic app: $8,000 – $12,000",
            "Medium-scale app: $15,000 – $25,000",
            "Advanced on-demand solution: $30,000+"
          ]}

        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Food Delivery App Development Process</h2>
              <p className="text-base font-normal mt-2">
                Comfygen Technologies is a top-rated food delivery app development company in India. We follow a structured, step-by-step process to deliver on-demand food delivery app solutions that are scalable, user-friendly, and market-ready. From initial concept to post-launch support, we ensure your food delivery <a href='https://www.comfygen.com/mobile-app-development' className="text-blue-600 font-semibold">mobile app development</a> journey is seamless and results-driven.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>


        <TechStack
          title="Modern Stacks for Online Food Delivery App Development"
          description="At Comfygen, we believe that a great food delivery app and website isn’t just about functionality but reliability, scalability, and a seamless experience for users and businesses alike. We leverage cutting-edge tech stacks that ensure top performance and security to achieve this." />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <div className="py-10">
          <ClientStories />
        </div>

        <DeliverySection  hideUrl="https://www.comfygen.com/delivery-app-development" />

        <HireDeveloper
          heading="Hire Food Delivery App Developers in India"
          text="We have a skilled team of <a class='underline' href='https://www.comfygen.com/hire-mobile-app-developer'>food delivery app developers</a> in India who deliver high-quality food delivery app solutions at competitive pricing. Our India-based development model ensures faster turnaround, flexible communication, and cost savings without compromising quality."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Lower development cost",
            "Highly experienced developers",
            "Time-zone friendly support",
            "Proven global delivery model"

          ]}
          listheading="Why India-based development works:"
        />

        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={JSON_DATA.Frequently} title="" />
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


