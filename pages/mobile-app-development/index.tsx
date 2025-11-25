import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import {
  IconApps,
  IconBook,
  IconBrain,
  IconBurger,
  IconCloud,
  IconCode,
  IconCurrencyBitcoin,
  IconMessage,
  IconNews,
  IconReportSearch,
  IconShoppingBag,
  IconSignal5g,
} from "@tabler/icons-react";
import {
  IconCashBanknote,
  IconTicket,
  IconChartBar,
  IconHeart,
  IconShield,
} from "@tabler/icons-react";

import Header from "../Newcomponet/layout/Header";
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Sponser from "../Newcomponet/comman/Sponser";
import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
import Solution from "../Newcomponet/SectionCompoent/Solution";
import LatestTechnology from "../Newcomponet/SectionCompoent/LatestTechnology";
import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
import TechStack from "../Newcomponet/SectionCompoent/TechStack";
import IndustriesServe from "../Newcomponet/SectionCompoent/IndustriesServe";
import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
import ClientTestimonials from "../Newcomponet/SectionCompoent/ClientTestimonials";
import Faq from "../Newcomponet/SectionCompoent/Faq";
import Milestones from "../Newcomponet/comman/Milestones";


const BreadcrumbSchema = {
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
      name: "Mobile App Development Company In India",
      item: "https://www.comfygen.com/mobile-app-development",
    },
  ],
};
const ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development Services for Startups & Enterprises",
  provider: {
    "@type": "Organization",
    name: "Comfygen Technologies",
    url: "https://www.comfygen.com/",
  },
  description:
    "Comfygen provides secure, scalable mobile app development services for startups, SMEs, and enterprises. Get custom solutions for Android, iOS, and hybrid platforms tailored to your business goals.",
  url: "https://www.comfygen.com/mobile-app-development",
  mainEntityOfPage: "https://www.comfygen.com/mobile-app-development",
  areaServed: "Global",
  serviceType: [
    "Android App Development",
    "iOS App Development",
    "Cross-Platform App Development",
    "React Native App Development",
    "Flutter App Development",
    "On-Demand Mobile App Development",
    "Hybrid Mobile App Development",
  ],

  sameAs: [
    "https://www.facebook.com/comfygen.technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies",
    "https://www.linkedin.com/company/comfygen-technologies",
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
  "@type": "Product",
  brand: "Comfygen Technologies",
  Name: "Top-Rated Mobile Application Development Company",
  image: "https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-about.webp",
  description:
    "Comfygen offers mobile application development services to help you launch fast, user-friendly, and secure mobile apps. Get custom solutions for iOS, Android, and cross-platform from expert developers.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1895",
  },
};

const faqSchema = {
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which platform should I choose for app development – iOS or Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The platform choice depends on your target audience and business needs. If you're targeting a global audience, Android may offer wider reach, while iOS is preferred for high-value markets and better user engagement.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The development timeline varies depending on the app’s complexity, features, and design. On average, it may take 2 to 6 months for a standard mobile app to be developed, while complex apps might require more time.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to develop a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of mobile app development can vary widely depending on the app's features, complexity, platform, and the development team’s location. Estimated mobile app development cost $5,000 - $10,000. A more complex mobile application cost can be $50,000 - $75,000 and reach $300,000+.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop custom features for my app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We specialize in custom mobile app development and can incorporate features customized to your specific business requirements, ensuring your custom mobile app meets your goals and stands out in the market.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with my mobile app project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To get started, simply reach out to our team for a consultation. We’ll discuss your ideas, understand your goals, and provide a customized plan for developing your mobile app, from concept to launch.",
      },
    },
  ],
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

  const techDataForPage1 = {
    All: [
      {
        img: "https://www.comfygen.com/image/dating-app-development.webp",
        head: "Dating App Development",
        name: "We developed a dating app focused on user satisfaction, ensuring seamless interaction with cutting-edge features for a safe experience.",
        num: "1",
        icons: [
          "https://www.comfygen.com/image/react-portfolio-icon.svg",
          "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
          "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
          "https://www.comfygen.com/image/figma-portfolio-icon.png",
          "https://www.comfygen.com/image/html-portfolio-icon.svg",
        ],
      },
      {
        img: "https://www.comfygen.com/image/healthcare-app-development.webp",
        head: "Healthcare App Development",
        name: "As an emerging mobile app development company we developed innovative healthcare apps that empower patients to manage their health through virtual consultations, secure medical record access, and real-time health monitoring.",
        num: "2",
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

  const latesttech = [
    {
      img: <IconBrain stroke={1.5} className="w-12 h-12" />,
      title: "AI / ML",
      desc: "We integrate <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ai-development' >AI and ML</a> in your mobile applications; which is going to automate many operations; like testing and debugging the glitches inside. Also, get ready to improve the app’s performance and gain maximum user retention with the ultimate user experience.",
    },
    {
      img: <IconReportSearch stroke={1.5} className="w-12 h-12" />,
      title: "AR / VR",
      desc: "AR enables the users to try the product or service virtually before finalizing the deal. Whereas, VR will transport the users into a virtual world to gain an immersive experience. This technology will make your app look futuristic, in which the users will pay attention and engage more.",
    },
    {
      img: <IconSignal5g stroke={1.5} className="w-12 h-12" />,
      title: "5G Technology",
      desc: "Build your mobile application enabled with 5G technology, which helps it to process quicker, provide the ultimate user experience, and establish some efficiency among users.",
    },
    {
      img: <IconCloud stroke={1.5} className="w-12 h-12" />,
      title: "Big Data",
      desc: "We utilize the new and latest modernized database; such as MongoDB, Cassandra, and Hadoop. It helps in deploying huge data on the cloud, reducing the cost and improving the performance of the application.",
    },
    {
      img: <IconCurrencyBitcoin stroke={1.5} className="w-12 h-12" />,
      title: "Blockchain Integration",
      desc: "We assure you that integrating <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blockchain-development' >blockchain</a> into your application leads to building your app as the most competitive one in the marketplace afterward. The decentralized applications enable the users, as well as businesses to gain transparency, immutability, more security, helping every transaction to be tracked & safe, and much more.",
    },
    {
      img: <IconApps stroke={1.5} className="w-12 h-12" />,
      title: "IoT",
      desc: "We build smart, connected apps that integrate seamlessly with <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/iot-development-company' >IoT</a> devices to deliver real-time insights and automation. Our mobile app development team combines innovation with the latest technologies to create intelligent solutions that elevate both user experience and business performance.",
    },
  ];

  const technologyData = [
    {
      img: <IconCode stroke={1.5} className="w-12 h-12" />,
      title: "Healthcare Mobile App Development",
      desc: "As an affordable custom mobile app development company in India. We provide <a href='https://www.comfygen.com/healthcare-app-development' class='text-blue-600 font-semibold'>healthcare app development services</a> for medical, including doctor appointment scheduling, access to patient records, and increased telemedicine app development services.",
    },
    {
      img: <IconCashBanknote stroke={1.5} className="w-12 h-12" />,
      title: "Mobile Banking App Development",
      desc: "We <a href='https://www.comfygen.com/mobile-banking-app-development' class='text-blue-600 font-semibold'>develop a mobile banking app</a> to provide secure and efficient financial transactions. Also, simplify payment processing, enhance the user experience, and provide real-time transaction tracking, making financial management hassle-free for users.",
    },
    {
      img: <IconBurger stroke={1.5} className="w-12 h-12" />,
      title: "Food Delivery App Development",
      desc: "As a top mobile application development firm in Jaipur, India. We provide <a href='https://www.comfygen.com/food-delivery-app-development' class='text-blue-600 font-semibold'>food delivery app development solutions</a>. Develop a food delivery app with us like Swiggy, Zomato, or Uber Eats and boost your mobile app business.",
    },
    {
      img: <IconNews stroke={1.5} className="w-12 h-12" />,
      title: "News & Media Streaming Apps",
      desc: "Stay informed with <a href='https://www.comfygen.com/food-delivery-app-development' class='text-blue-600 font-semibold'>custom news application development</a> that provides real-time updates, articles, and multimedia content. News applications provide a personalized news experience that makes sure users receive relevant information at their fingertips.",
    },
    {
      img: <IconMessage stroke={1.5} className="w-12 h-12" />,
      title: "Messaging and VoIP Apps",
      desc: "Communication is key in every business. Messaging and VoIP applications provide secure messaging, voice, and video call functionalities that make it easy for teams and clients to stay connected and collaborate easily.",
    },
    {
      img: <IconBook stroke={1.5} className="w-12 h-12" />,
      title: "E-learning & Educational Apps",
      desc: "Our mobile application development company provides interactive <a href='https://www.comfygen.com/e-learning-app-development' class='text-blue-600 font-semibold'>e-learning app development</a> with video classes, live sessions, assessments, and progress tracking to support modern digital education and remote learning.",
    },
    {
      img: <IconShoppingBag stroke={1.5} className="w-12 h-12" />,
      title: "eCommerce & Shopping Apps",
      desc: "We are a top-rated mobile app development company in Jaipur, India. Transforms user market experience with <a href='https://www.comfygen.com/ecommerce' class='text-blue-600 font-semibold'>custom eCommerce development</a> that provides a user-friendly interface, secure payment gateways, and advanced inventory management.",
    },
    {
      img: <IconTicket stroke={1.5} className="w-12 h-12" />,
      title: "Booking, Ticketing & Travel Apps",
      desc: "From travel to events, develop booking and ticketing applications. These mobile apps enhance the user experience by offering perfect navigation, secure payments, and instant confirmation.",
    },
    {
      img: <IconChartBar stroke={1.5} className="w-12 h-12" />,
      title: "Investment & Trading Apps",
      desc: "We <a href='https://www.comfygen.com/stock-trading-app-development' class='text-blue-600 font-semibold'>build advanced trading apps</a> that offer portfolio management, live market insights, analytics, and secure transactions to support smart financial decision-making.",
    },
    {
      img: <IconHeart stroke={1.5} className="w-12 h-12" />,
      title: "Dating & Social Networking Apps",
      desc: "Develop a custom dating app and social apps with Comfygen, the best dating mobile application development company in Jaipur, India. We provide custom <a href='https://www.comfygen.com/blog/how-to-build-a-dating-app-like-tinder/' class='text-blue-600 font-semibold'>dating apps like Tinder</a>, Bumble, and Matchmaking apps that facilitate meaningful connections",
    },
    {
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
      title: "Insurance & Claims Apps",
      desc: "We provide <a href='https://www.comfygen.com/insurance-app-development' class='text-blue-600 font-semibold'>insurance app development solutions</a> to simplify policy management, claim submissions, tracking, and customer support for improved digital service delivery.",
    },
     {
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
      title: "Instant Delivery App Development",
      desc: "We <a href='https://www.comfygen.com/blog/build-quick-commerce-app-like-blinkit-zepto-instamart/' class='text-blue-600 font-semibold'>build instant delivery apps like Blinkit</a> with live GPS tracking, automated dispatch, quick checkout, and real-time order updates to deliver items faster and improve customer satisfaction for hyperlocal delivery businesses.",
    },
     {
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
      title: "Alcohol Delivery App Solutions",
      desc: "Develop legal and secure alcohol delivery apps with age verification, digital catalog, in-app offers, and real-time tracking. Our on-demand app development company in Jaipur enables smooth doorstep delivery experiences.",
    },
    {
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
      title: "Home Services App Solution",
      desc: "We provide a <a href='https://www.comfygen.com/home-service-app-development' class='text-blue-600 font-semibold'>home services app development</a> with scheduling, service provider profiles, secure payments, reviews, and real-time booking management to simplify home services for users and service professionals.",
    },
    {
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
      title: "Taxi Booking Mobile App",
      desc: "Build a ride-hailing <a href='https://www.comfygen.com/taxi-app-development-company' class='text-blue-600 font-semibold'>taxi booking app</a> like Uber and Ola with GPS navigation, fare calculation, driver tracking, wallet payments, and instant ride booking for reliable on-demand transportation services.",
    }
  ];

  return (
    <>
      <Head>
        <title>
          Custom Mobile App Development Company in Jaipur, India | Custom App
          Solutions
        </title>
        <meta
          name="keywords"
          content="Android App Development, iOS App Development, Cross-Platform App Development, React Native App Development, Flutter App Development, On-Demand Mobile App Development, Hybrid Mobile App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/mobile-app-development"
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
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen App" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        <meta
          name="description"
          content="Comfygen Technologies is a leading mobile app development company in Jaipur, India. We provide custom mobile app development services and solutions for Android, iOS platforms to startups and enterprise-level companies."
        />
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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta property="og:image:alt" content="Mobile App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/mobile-app-development"
        />
        <meta
          property="og:title"
          content="Best Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for mobile app developers in Jaipur? Comfygen offers professional mobile app development services for Android, iOS & hybrid apps. Trusted by 100+ clients across India and abroad."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Mobile App Development Company in India | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Comfygen Technologies is a trusted mobile app development company in India, offering custom Android and iOS app development services tailored for startups, enterprises, and growing businesses across industries."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                { "@type": "Person", name: "Saddam Husen" },
                { "@type": "Person", name: "Saddam Husen" },
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
              areaServed: ["IN", "US", "CA", "GB", "AE", "DE"],
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

      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>

      <div className="overflow-hidden lg:pt-[50px]">
        <div className="">
          <HeroSectionForAllPages
            heading="Leading Mobile App Development Company in Jaipur"
            ptag="Grow your business with smart, secure, and user-friendly mobile applications built to perform. Comfygen Technologies is a trusted mobile app development company in Jaipur delivering innovative Android, iOS, and cross-platform app solutions that enhance customer experience and drive business success. We turn your ideas into high-quality apps with seamless functionality and beautiful design."
            li=""
            li1=""
            li2=""
            li3=""
            bgImage="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-hero.webp"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        {/* <Sponser /> */}
        <Milestones/>

        <AboutSection
          title=""
          heading="Future Ready Mobile App Development Solutions for Global Businesses"
          description1="Comfygen Technologies is a trusted mobile app development company in Jaipur, India, delivering high-performing mobile apps for startups and enterprises. Based in Jaipur, we build feature-rich Android, iOS, and cross-platform apps for Healthcare, Fintech, Blockchain, Education, Gaming, On-Demand, and Entertainment industries."
          description2="With a skilled team of mobile app developers in Jaipur and 250+ successful projects, we offer end-to-end app development services using the latest technologies. Whether you need AI-powered apps, intuitive UI UX design, or high-quality gaming app development, we bring your idea to life with innovation and excellence."
          description3=""
          imageSrc="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Professional Mobile App Development Services in Jaipur, India

              </h2>
              <p className="text-base text-center font-normal">We offer a full suite of custom mobile app development services in Jaipur tailored to your business goals. Whether you're building a new product or upgrading an existing one, our mobile app development expert team delivers high-quality mobile application solutions for every platform.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <Solution
          heading="Grow Your Business with Comfygen’s Custom Mobile App Development Solutions"
          subheading="We offer a full suite of custom mobile app development services in Jaipur tailored to your business goals. Whether you're building a new product or upgrading an existing one, our mobile app development expert team delivers high-quality application development solutions for every platform."
          techData={technologyData}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Portfolio of Successful Mobile App Projects"
            description="Showcasing innovative, user-focused apps crafted with precision and creativity, each project reflects our dedication to excellence and client satisfaction."
          />
        </section>

        <LatestTechnology
          heading="Emerging Technologies We Leverage For Mobile Application Development"
          subheading=""
          techData={latesttech}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">End-to-End Mobile App Development Process</h2>
              <p className="text-base font-normal mt-2">
                As a reliable mobile application development company in Jaipur. Our mobile app development process is a structured approach focused on delivering innovative and high-performing custom mobile app solutions customized to user business needs.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          customTechData={null}
          title="Full Stack Technology for Agile Mobile App Development"
          description="The full-stack technology we use encompasses the front end, back end, database, DevOps, and quality assurance to develop agile, high-performance mobile apps. Your business needs will be met by seamless, scalable, and reliable app solutions."
        />

        <IndustriesServe
          heading={null}
          description={null}
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire our Dedicated Mobile App Developer in Jaipur"
          text="Looking to develop a user-friendly mobile app? <a class='font-semibold underline' href='https://www.comfygen.com/hire-mobile-app-developer' >Hire mobile app developers</a> at Comfygen and boost your business to new heights with custom mobile solutions. As an affordable mobile app development company in Jaipur, India, we specialize in providing high-performance, scalable, and innovative apps for both iOS and Android platforms. Whether you need on-demand mobile app development services or complex enterprise app development solutions, our team ensures your app meets the highest standards of quality and functionality."
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
        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={JSON_DATA.Frequently} title=" " />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}


export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

