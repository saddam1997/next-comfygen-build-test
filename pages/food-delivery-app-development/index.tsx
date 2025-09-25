import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";
import NEW_JSON_DATA from "./json/fooddel.json";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import BlogSection from "../components/BlogSection";
import HireDeveloper from "../components/HireDeveloper";
import CallToAction from "../components/CallToAction";
import IndustriesServe from "../components/IndustriesServe";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import ProcessSec from "../components/ProcessSec";
import CardItem from "../components/CardItem";
import Features from "./components/Features";
import PortfolioSec from "../components/PortfolioSec";
import ServicesSection from "../componentsnew/ServicesSection";
import ProcessSection from "../componentsnew/ProcessSection";
import CoreFeaturesSection from "../componentsnew/CoreFeaturesSection";
import ClientTestimonials from "../components/ClientTestimonials";
import TechnologyStack from "../portfolio/technology-stack/TechnologyStack";
import TechStack from "../componentsnew/TechStack";
import DeliverySection from "../components/DeliverySection";
import AppCard from "../componentsnew/AppCard";
import WhoCanStart from "./components/WhoCanStart";
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
// const BlogSection = dynamic(() => import("../components/BlogSection1"), {
//   loading: () => <p>Loading...</p>,
// });
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);


const Process = [
  {
    title: " Discovery and Ideation",
    description:
      "We start with comprehensive market research and close collaboration with stakeholders to define business goals, target audience, and essential features. This stage allows us to create a clear roadmap for your on-demand food delivery app development project, ensuring it meets your specific business needs.",
  },
  {
    title: "Design and Prototyping",
    description:
      "Our creative <a class='text-blue-600' href='https://www.comfygen.com/web-design'>UI/UX designers</a> craft interactive prototypes and intuitive wireframes that reflect your brand identity. By focusing on engagement and usability, we ensure your food delivery app development services deliver a visually appealing and seamless user experience.",
  },
  {
    title: "Development",
    description:
      "Using the latest technology stack, we build scalable food delivery apps, from single-restaurant solutions to complex multi-restaurant platforms. Features include real-time order tracking, secure payment gateways, and a robust backend to support smooth operations.",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Our QA team conducts rigorous testing to ensure your food delivery mobile app development services is bug-free and high-performing. Functional, security, and performance testing guarantee reliability and a flawless experience for users.",
  },
  {
    title: "Deployment",
    description:
      "We manage the full deployment across iOS and Android, ensuring compliance with app store guidelines. With our food delivery app development services, your app launches smoothly and is optimized for maximum visibility and downloads.",
  },
  {
    title: "Analytics and Performance Optimization",
    description:
      "After launch, we provide detailed analytics to monitor performance, user behavior, and engagement. This data-driven approach allows us to optimize your on-demand food delivery app development for growth and long-term success.",
  },
  {
    title: "Post-Launch Support",
    description:
      "We offer dedicated post-launch support, including regular updates, bug fixes, and new feature integration. Our food delivery mobile app development company make sure your app remains competitive and relevant in the dynamic food tech industry.",
  },
];
const CardClone = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card1.webp",
    title: "UberEats Clone App",
    description:
      "Our UberEats clone app development helps you launch a robust food delivery platform quickly. Designed with modern features, it supports multiple restaurants and efficient delivery management.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card2.webp",
    title: "Zomato Clone App",
    description:
      "With our Zomato clone app, you can create a food delivery and restaurant discovery platform that connects customers with multiple eateries. Perfect for startups aiming to replicate Zomato’s success.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card3.webp",
    title: "Swiggy Clone App",
    description:
      "Our Swiggy clone app development offers a ready-to-launch solution with advanced features for food ordering and delivery. Scalable and customizable, it ensures high performance for businesses of all sizes.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card4.webp",
    title: "DoorDash Clone App",
    description:
      "Build a powerful delivery platform with our DoorDash clone app, designed for businesses seeking to efficiently manage food delivery across multiple regions.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card5.webp",
    title: "Delhivery Clone App",
    description:
      "With our Delhivery clone app, you can create a powerful logistics platform that handles hyperlocal deliveries, reverse logistics, and warehouse automation. It’s ideal for companies looking to scale delivery operations through logistics app development services tailored to the Indian market dynamics.",
    buttonText: "View Demo",
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/card6.webp",
    title: "BlackBuck Clone App",
    description:
      "Our BlackBuck-like logistics mobile app solution is built for large-scale freight movement and B2B trucking. We develop logistics platforms similar to BlackBuck, offering digital tools for long-haul transport, fleet coordination, and driver management.",
    buttonText: "View Demo",
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
      "For food startups, we offer end-to-end food delivery mobile app development solutions that are scalable, cost-effective, and designed to attract early adopters. Startups can quickly enter the market with a polished, fully functional app.",
  },


  {
    heading: "Enterprises & Franchise Chains",
    description:
      "We develop enterprise-grade and multi-location food delivery apps for franchises and large food businesses. Our enterprise food ordering app development solutions ensure centralized management, synchronized operations, and a consistent customer experience across all outlets.",
  }
];



const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/image/portfolio-image-food-delivery-app-development1.webp",
      head: "Food Delivery App – Food 24Hr",
      name: "Food 24Hr is a high-performance food delivery app developed for a client seeking a reliable and user-friendly solution. The app features real-time order tracking, AI-based food recommendations, and a smooth user interface for both customers and delivery partners.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "/portfolio/food-delivery-app"
    },
    {
      img: "https://www.comfygen.com/image/portfolio-image-food-delivery-app-development2.webp",
      head: "Online Food Ordering App",
      name: "This robust online food ordering app was created to streamline the ordering process for multi-restaurant platforms. It supports advanced search filters, restaurant listings, order scheduling, and delivery tracking—delivering a comprehensive food delivery experience tailored for both single vendors and aggregators.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
      buttonLink: "/portfolio/online-food-ordering-app"
    }
  ]
};


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
      "@type": "PostalAddress",
      "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      "addressLocality": "Jaipur, Rajasthan",
      "addressRegion": "India",
      "postalCode": "302006",
      "telephone": "+91-958-786-7258"
    },

    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      "streetAddress": "40 Tuxedo Ct, Toronto, ON",
      "addressLocality": "Toronto",
      "addressRegion": "Canada",
      "postalCode": "M1G3S7",
      "telephone": "+1 579-977-4475"
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
          content="Comfygen is a leading food delivery app development company in India for startups, restaurants, and aggregators. We build custom food delivery apps like Zomato, UberEats & DoorDash with AI-driven personalization, real-time tracking & secure payments."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/food-delivery-app-development"
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
          content="Restaurant App Development Company, food delivery app development company, Restaurant Mobile App Development, Restaurant App Developer, mobile app for restaurant ordering, Custom Food Delivery App Development, White-Label Food Delivery App Solutions, Cloud Kitchen App Development, Food Delivery App Maintenance "
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
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden ">
        <div className=" ">
          <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/food-delivery-app-dev-hero-img.webp')]">
            <HeroSectionForAllPages
              heading="Custom Food Delivery App Development Company in India"
              ptag="Comfygen Technologies is a leading food delivery app development company offering AI-based food delivery app development services. We build user-friendly food delivery apps with AI-powered food recommendation and blockchain-based security. Whether you’re a startup, restaurant, or enterprise, our online food ordering app development experts help you launch a high-performance food delivery app that drives growth."
              li="Real-Time Order Tracking"
              li1="AI-powered Recommendation"
              li2="Customizable Food App Solutions"
              li3="User-Friendly Interface"
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
          heading="Why Invest in Food Delivery App Development for Your Business Growth?"
          description1="The global food delivery market is expanding rapidly as customers prefer faster, smarter, and contactless ways to order meals. By 2030, the industry is expected to surpass hundreds of billions in revenue, making a food delivery app an essential tool for restaurants, startups, and cloud kitchens to remain competitive."
          description2="Whether you manage a single outlet or operate multiple chains, a custom food delivery app ensures smooth operations with real-time order tracking, secure payments, and loyalty programs that keep customers coming back."
          description3="With Comfygen’s food delivery app development services, we help you scale your business, enhance customer satisfaction, and increase revenue growth."
          imageSrc="https://www.comfygen.com/image/food-delivery-app-development-about-img.webp"
          link="/about-us"
          linkText="Explore More"
          points={[
            "Streamlines Online Orders & Delivery Management",
            "Improves Customer Convenience & Retention",
            "Enables Real-Time Tracking & Secure Payments",
            "Boosts Restaurant Visibility & Profitability",
          ]}
        />

        <ContactFromCenter />


        <ServicesSection
          heading="We Offer Food Delivery App Development Services for Startups, Restaurants, and Aggregators"
          subtitle="At Comfygen, we deliver top-class food delivery app development services designed for startups, restaurants, and enterprises. From custom-built apps to enterprise-grade solutions, our expertise ensures your business thrives in the competitive online food delivery industry."
          servicesData={JSON_DATA.servicesData}
        />

        <AppCard
          title="Food Delivery App Clone Solutions We Provide"
          subtitle="Looking to build a successful food delivery app like the industry leaders? At Comfygen, we provide ready-made food delivery app development solutions that are fully customizable and ready to launch. Our food ordering clone apps replicate the functionality of popular platforms, incorporating advanced features that help startups and enterprises save time and reduce costs as they enter the competitive food delivery market."
          cards={CardClone}
          openModal={openModal}
        />


        {/* <CardItem
          heading="Food Ordering App Clone Solutions We Provide"
          subheading="We offer ready-made, fully customizable food ordering app clone solutions that replicate the success of popular platforms like UberEats, Zomato, Swiggy, and DoorDash. Launch your own branded app faster with robust features, scalable architecture, and seamless user experience."
          techData={JSON_DATA.cardData}
        /> */}

        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Food Ordering Apps Portfolio"
          description="Explore our diverse portfolio of food delivery app development projects designed to meet evolving business needs. From real-time order tracking to AI-powered recommendations and seamless user experiences, our food ordering apps are crafted to elevate customer satisfaction and streamline restaurant operations. Partner with us to build a food delivery app that’s fast, reliable, and scalable."
        />

        <CallToAction
          heading="Ready to Build Your Food Delivery App?"
          text="Partner with Comfygen, the best food ordering mobile app development company, and bring your vision to life."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section>
          <Features />
        </section>

        {/* <CoreFeaturesSection
          title="Advanced Tech We Integrate in Food Delivery App Development"
          subtitle="At Comfygen, we integrate cutting-edge technologies to build high-performance, scalable, and feature-rich food delivery apps. Our advanced tech makes sure seamless user experience, high-speed performance, and top-notch security for your restaurant app application."
          features={JSON_DATA.LeadingSoftware}
        /> */}

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Tech We Integrate in Food Delivery App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen, we integrate cutting-edge technologies to build high-performance, scalable, and feature-rich food delivery apps. Our advanced tech makes sure seamless user experience, high-speed performance, and top-notch security for your restaurant app application.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs } = elem;
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
          title="AI-Powered Food Delivery App Development Solutions"
          subtitle="At Comfygen, we leverage AI technology to take your food delivery app to the next level. Our AI-powered food delivery apps are designed to enhance user experience, optimize operations, and boost business efficiency."
          features={JSON_DATA.AIPowered}
        />

        <WhoCanStart
          title="Tailored Food Delivery App Development for Diverse Industries"
          description="At Comfygen, we offer flexible flower delivery app development solutions to meet the unique needs of different business models. Whether you're a solo florist, a growing startup, or an enterprise-level aggregator, we build scalable apps that fit your operations perfectly."
          cards={WhoCanStartCards}
        />

        <ProcessSection
          title="Our Food Delivery App Development Process"
          description="Comfygen Technologies is a top-rated food delivery app development agency. We follow a structured, step-by-step process to deliver on-demand food delivery app development solutions that are scalable, user-friendly, and market-ready. From initial concept to post-launch support, we ensure your food delivery <a class='text-blue-600' href='https://www.comfygen.com/mobile-app-development'>mobile app development</a> journey is seamless and results-driven."
          processSlides={Process}
        />
        <TechStack
          title="Our Edgy Tech Stacks for Food Delivery Mobile App Development"
          description="At Comfygen, we believe that a great food delivery app isn’t just about functionality but reliability, scalability, and a seamless experience for users and businesses alike. We leverage cutting-edge tech stacks that ensure top performance and security to achieve this." />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <DeliverySection hideUrl="food-delivery-app-development" />

        <HireDeveloper
          heading="Hire a Qualified Food Delivery App Developer"
          text="Hire a talented food ordering application developer from Comfygen, India's best <a class='underline' href='https://www.comfygen.com/hire-mobile-app-developer'>food delivery mobile app developer</a>. We provide industry-focused food ordering mobile app development solutions, such as food delivery apps for cloud kitchens, that cater specifically to your business's unique requirements. Whether you’re looking to build a food delivery app for enterprises or need a personalized app for single or multi-restaurant app development services, our developers ensure that every solution meets your expectations."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "We have certified food delivery app developers who guarantee that your project is carried out with the utmost professionalism",
            "We understand the latest custom food delivery app Industry trends with the best features",
            "We follow industry regulations while building the app",

          ]}
        />

        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={JSON_DATA.Frequently} title="" />
        {/* <BlogSection initialData={initialData} /> */}
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

