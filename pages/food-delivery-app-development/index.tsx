import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";
import NEW_JSON_DATA from "./json/fooddel.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";
import TechStackSection from "../../components/TechStackSection";



const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const AppCard = dynamic(() => import("../../components/Newcomponet/comman/AppCard"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
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
      "As a top online food delivery app development company in India, we provide continuous maintenance, updates, and feature enhancements to keep your app competitive and user-focused.",
  },
];


const WhoCanStartCards = [
  {
    heading: "Cloud Kitchen App Development",
    description:
      "Launch a powerful online ordering system for cloud kitchens. Our <a href='https://www.comfygen.com/blog/cloud-kitchen-management-software-development/' class='underline font-semibold'>cloud kitchen app solutions</a> help you manage menu updates, streamline kitchen operations, track orders in real-time, and handle multiple virtual brands efficiently.",
  },


  {
    heading: "Restaurant Aggregator App",
    description:
      "Build a top-tier food delivery marketplace like major restaurant aggregator platforms. Our enterprise-grade food ordering app development ensures restaurants can register, manage menus, receive orders, handle payouts, and track deliveries in real time.",
  },

  {
    heading: "Single Restaurant Mobile App Development",
    description:
      "Give your restaurant a branded mobile app that enables direct orders, secure payments, menu control, and customer loyalty features—helping you reduce third-party commission costs and grow repeat customers.",
  },


  {
    heading: "Meal Subscription App Development",
    description:
      "Develop a subscription-based food delivery app for diet meals, tiffin services, or healthy meal plans. Users can choose weekly/monthly packages, customize meals, and schedule deliveries easily.",
  },

  {
    heading: "Food Delivery Marketplace App ",
    description:
      "Build a full-fledged marketplace connecting customers, restaurants, and delivery partners in one ecosystem. This solution supports multi-location operations, promo campaigns, analytics dashboards, and automated delivery management.",
  },

  {
    heading: "Hyper-Local Food Delivery App Development",
    description:
      "Develop fast and efficient hyperlocal delivery apps for quick food delivery within a specific location. Perfect for instant delivery brands offering 30-minute or express delivery services.",
  },

  {
    heading: "Multi-Vendor Food Delivery App Development",
    description:
      "Launch a powerful multi-vendor food delivery platform where restaurants, home chefs, and food businesses can register, manage menus, track orders, and receive payments with an easy dashboard.",
  },

  {
    heading: "Grocery Delivery Mobile App ",
    description:
      "Expand your business with a custom <a href='https://www.comfygen.com/ecommerce/grocery' class='underline font-semibold'>grocery delivery app development</a>. Manage inventory, products, pricing, delivery slots, and payments—ideal for supermarkets, Kirana stores, and hyperlocal grocery businesses.",
  }
];




let { AppService } = NEW_JSON_DATA;

export default function Ecommerce(props: any) {
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
      "@type": "Service",
      "name": "Custom Food Delivery App Development Services | Comfygen",
      "serviceType": "Food Delivery App Development Service",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com//"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, restaurants, enterprises"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.comfygen.com/food-delivery-app-development/"
      },
      "description": "End-to-end custom food delivery app development service to build scalable, secure and feature-rich mobile apps with real-time order tracking, secure payments and AI-powered capabilities for restaurants, startups and enterprises.",
      "category": "Food Delivery App Consultation, White Label Food Delivery App Development, Custom Food Delivery App Development, On-Demand Food Delivery App Development, Cloud Kitchen App Development, Grocery Delivery App Development, Food Ordering App Development, Food Delivery Aggregator, UI/UX Designing for Food Delivery App, Food Delivery Website Development",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Food Delivery App Development Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Food Delivery App Consultation",
              "description": "Expert food delivery app consultation services to help startups and enterprises plan, validate, and strategize scalable on-demand food delivery solutions with the right tech stack and monetization model."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Food Delivery App Development",
              "description": "End-to-end custom food delivery app development tailored to your business needs, featuring real-time tracking, secure payments, restaurant management, and user-friendly mobile experiences."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Demand Food Delivery App Development",
              "description": "Robust on-demand food delivery app development solutions with live order tracking, instant notifications, GPS integration, and seamless payment gateways for faster deliveries."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "White-Label Food Delivery App Development",
              "description": "Launch quickly with white-label food delivery app development solutions that are fully customizable, scalable, and ready to deploy for startups and restaurant chains."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Designing for Food Delivery App",
              "description": "Creative UI/UX design for food delivery apps focused on intuitive navigation, engaging interfaces, smooth checkout experiences, and improved customer retention."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Food Delivery Website Development",
              "description": "Professional food delivery website development services with responsive design, online ordering systems, secure payment integration, and SEO optimization."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Food Ordering App Development",
              "description": "Feature-rich food ordering app development services that enable customers to browse menus, place orders, track deliveries, and make secure online payments effortlessly."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Kitchen App Development",
              "description": "Advanced cloud kitchen app development solutions with order management, kitchen dashboard, real-time tracking, and multi-branch integration for virtual restaurant businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Restaurant Aggregator App",
              "description": "Scalable restaurant aggregator app development similar to Uber Eats or Zomato, with multi-vendor onboarding, commission management, ratings, and real-time delivery tracking."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Grocery Delivery Mobile App Development",
              "description": "Custom grocery delivery mobile app development services with inventory management, instant order placement, secure checkout, and doorstep delivery tracking features."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hyper-Local Food Delivery App Development",
              "description": "Reliable hyper-local food delivery app development solutions designed for fast neighborhood deliveries with GPS tracking, route optimization, and real-time order updates."
            }
          },

        ]
      }
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
            "text": "Through person, verifications, encrypted charge gateways, and in-app safety capabilities, online meal delivery apps put safety first. Your financial and personal information is kept private because of regular audits and adherence to data protection laws, providing a reliable and safe ordering experience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you develop cross-platform food delivery apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We offer seamless development for both Android and iOS platforms, ensuring consistent performance and a user-friendly design across devices."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I choose Comfygen if I’m based in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a leading food delivery app development company, we have successfully served local, national, and global clients with our expertise and commitment to excellence."
          }
        },
        {
          "@type": "Question",
          "name": "How do food delivery apps make money?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Food delivery apps generate revenue through multiple monetization models. The most common methods include commission-based earnings from restaurants, delivery charges, advertisements, subscription plans, and surge pricing during peak hours. Many food delivery app development companies also integrate premium memberships for faster deliveries and exclusive discounts. Choosing the right revenue model depends on your business goals and target audience."
          }
        },
        {
          "@type": "Question",
          "name": "What features should be integrated while developing a food delivery app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A successful food delivery app must include essential features such as real-time order tracking, multiple payment options, AI-driven recommendations, push notifications, ratings & reviews, and seamless restaurant management. As an on-demand food delivery app development provider, we integrate custom features like AI chatbots, blockchain security, and IoT-based kitchen automation to enhance user experience and operational efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to develop a food delivery app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of on-demand food delivery app development depends on various factors like app complexity, features, UI/UX design, and development platform. A basic app may cost around $10,000 - $25,000, while an advanced app with AI and blockchain features can exceed $50,000. As a food-ordering app development company, we offer cost-effective solutions tailored to startups, restaurants, and enterprises."
          }
        }
      ]
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com/"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Delivery App Development",
        "item": "https://www.comfygen.com/delivery-app-development"
      }
        , {
        "@type": "ListItem",
        "position": 3,
        "name": "Food Delivery App Development",
        "item": "https://www.comfygen.com/food-delivery-app-development"
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
          content="Comfygen is a award-winning food delivery app development company in India offering readymade food delivery app solutions with Android & iOS source code to launch your food ordering app fast."
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
            heading="Top Food Delivery App Development Company"
            ptag="Comfygen is a trusted food delivery app development company in India, offering customizable and ready-made food delivery app solutions to help you grow your business. Our highly rated food delivery apps make it easy to manage restaurants, track orders in real time, handle delivery partners, enable secure online/offline payments, and improve customer satisfaction with smooth and intuitive features."
            ptag1='We deliver the best food delivery app development services for food startups, restaurant chains, cloud kitchens, and enterprise brands seeking to establish a strong online presence and scale more quickly in the competitive food delivery industry.'
            li="Custom & Ready-Made Food Delivery App Solutions"
            li1="Real-Time Order Tracking & Restaurant Management"
            li2="Secure Payments & Delivery Partner App Integration"
            li3="Scalable, Fast & User-Friendly Mobile Apps"
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
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">We Offer Results-Driven Food Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">We offer a wide range of food delivery app development services designed to help digital food businesses run smoothly, deliver faster, and stay ahead in today’s competitive market. Each custom food delivery app solution is built with modern technology, real-time automation, and a strong focus on user convenience.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          heading="Why Your Business Must Invest in Food Delivery App Development Today"
          description1="The online food delivery market is growing fast — expected to reach $500+ billion by 2030, with millions of customers ordering food online every day. This makes it the best time for restaurants, cloud kitchens, and food startups to go digital."
          description2="A powerful food delivery app helps you increase online orders, improve customer experience, and streamline daily operations like order management, delivery tracking, and secure digital payments."
          description3="At Comfygen, we develop fully featured, ready-made food ordering apps that help your business stay ahead in the competitive food delivery market."
          imageSrc="https://www.comfygen.com/comfygen-images/food-delivery-app-development/invest-food-delivery-app-development.webp"
          link="/about-us"
          linkText="Talk to Food Delivery App Experts"
          points={[

          ]}
          description6="Now is the right time to bring your food business online with a powerful food delivery app. Let’s build your success together!"
        />



        <WhoCanStart
          title="Our Top-Of-The-Line Food Delivery App Development Services for Every Business Model"
          description="Comfygen, a reliable restaurant app development company in India, offers complete food delivery app development solutions tailored for startups, restaurants, cloud kitchens, and large enterprises. Our on-demand food delivery apps help you increase orders, simplify operations, and deliver a smooth online food ordering experience."
          cards={WhoCanStartCards}
        />



        <AppCard
          title="We Provide Best Ready-made Food Delivery Apps For Your Business"
          subtitle="Looking to build a white-label food delivery app similar to Zomato and DoorDash? Comfygen is a professional on-demand food delivery app development company in India, offering fully customizable, ready-made food delivery app solutions and proven app clones that help you launch faster. Our food ordering clone apps replicate the functionality of popular platforms, incorporating advanced features that help startups and enterprises save time and reduce costs as they enter the competitive food delivery market."
          cards={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />
        {/* 
        <AppcardSlider
          heading="We Provide Best Ready-made Food Delivery Apps For Your Business"
          description="Looking to build a white-label food delivery app similar to Zomato and DoorDash? Comfygen is a professional on-demand food delivery app development company in India, offering fully customizable, ready-made food delivery app solutions and proven app clones that help you launch faster. Our food ordering clone apps replicate the functionality of popular platforms, incorporating advanced features that help startups and enterprises save time and reduce costs as they enter the competitive food delivery market."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        /> */}

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Food Delivery App Development Project Delivered Successfully by Comfygen"
            description="Explore our diverse portfolio of food delivery application development solution projects designed to meet evolving business needs. From real-time order tracking to AI-powered recommendations and seamless user experiences, our food ordering apps are crafted to elevate customer satisfaction and streamline restaurant operations."
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
            heading="We Offer Feature-rich Food Delivery App Development"
            description="As a globally recognized food ordering app development company, we deliver cutting-edge, custom food delivery app solutions that empower your grocery business to scale faster, operate smarter, and achieve unprecedented growth in today’s competitive market."
            featuresData={JSON_DATA.featuresData}
            grid={4} />
        </div>


        <CoreFeaturesSection
          title="Custom AI-Powered Food Delivery App Development Solution"
          subtitle="At Comfygen, we specialize in delivering advanced <a href='https://www.comfygen.com/blog/the-role-of-ai-in-food-delivery-app-development/' class='underline text-blue-600 font-semibold'>AI-Driven food delivery app development solutions</a> that help businesses stay ahead in the competitive digital marketplace. By leveraging cutting-edge artificial intelligence technologies, we build smart food delivery applications that enhance customer engagement, streamline operations, and maximize overall business performance."
          features={JSON_DATA.AIPowered}
        />

        <section className="py-10 lg:py-20 bg-[#5556D1] mt-8">
          <div className="2xl:w-10/12 w-full lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto sm:py-8 p-2">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Technologies Powering Modern Food Delivery App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  We use modern and future-ready technologies to build smarter, faster, and more efficient food delivery apps. These advanced food app development solutions help improve customer experience, automate operations, and boost business growth.
                </p>
              </div>
              <div className="grid gap-[1px]  text-left lg:grid-cols-2 md:grid-cols-2  bg-white">
                {JSON_DATA.LeadingSoftware.map((elem, index) => {
                  const { title, decs } = elem;
                  return (
                    <div key={index} className={`bg-[#5556D1] transition-all cursor-pointer duration-300 hover:bg-[#0f0f0f] relative p-4`}>
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

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">The Process We Follow for Food Delivery App Development Services</h2>
              <p className="text-base font-normal mt-2">
                Comfygen Technologies is a top-rated food delivery app development company in India. We follow a structured, step-by-step process to deliver on-demand food delivery app solutions that are scalable, user-friendly, and market-ready. From initial concept to post-launch
                support, we ensure your food delivery mobile app development journey is seamless and results-driven.


              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="We Build High-Performance Food Delivery Apps Using a Modern & Powerful Tech Stack"
          description="We use a modern and powerful tech stack to create one-stop food delivery app development solutions. Our technology ensures smooth order management, real-time tracking, quick payments, and a seamless user experience across all platforms." />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Expert Food Delivery App Developers for Your On-Demand Business"
          text="Looking to build a high-performance and feature-rich food delivery app? <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>Hire our experienced food delivery app developers</a> in India to turn your idea into a scalable on-demand food ordering solution. Our reliable food delivery mobile app developers specialize in creating fast, secure, and user-friendly apps tailored for startups, restaurants, cloud kitchens, and enterprise brands.<br>
          With strong expertise in modern technology, real-time tracking systems, and custom UI/UX, we ensure your app delivers a seamless user experience and supports rapid business growth."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expert in on-demand app development",
            "Strong UI/UX design & smooth user experience",
            "Fast, secure & scalable architecture",
            "Integration of online payments & live tracking"

          ]}
          listheading="Why India-based development works:"
        />

        {/* <DeliverySection hideUrl="https://www.comfygen.com/food-delivery-app-development" /> */}


        <TechStackSection deliveryApps={JSON_DATA.deliveryApps}/>


        <div className="py-10">
          <ClientStories />
        </div>




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


