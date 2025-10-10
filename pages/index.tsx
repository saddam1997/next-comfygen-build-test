import React, { Suspense, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./index.json";
import PortfolioSec from "./components/PortfolioSec";
import ProcessSec from "./components/ProcessSec";
// import IndustriesServe from "./components/IndustriesServe";
import IndustriesServe from "./componentsnew/IndustriesServe";
import TechStack from "./components/TechStack";
import Faq from "./components/Faq";
import FormSec from "./components/FormSec";
import ClientTestimonials from "./components/ClientTestimonials";
import ServicesSec from "./components/ServicesSec";
import AboutSection from "./components/AboutSection";
import CallToAction from "./components/CallToAction";
import HireDeveloper from "./components/HireDeveloper";
import HeroSectionHomePage from "./components/HeroSectionHomePage";
import PortfolioSlider from "./components/PortfolioSlider";
const WhyChoose = dynamic(() => import("./components/WhyChooseUs"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("./components/Header"), {
  ssr: true,
});
const BlogSection = dynamic(() => import("./components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});


export default function Home(props: any) {
  let { initialData } = props;
  const [typedText] = useState("");
  const [show, setshow] = useState(true);
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const websiteJsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Custom Blockchain & Mobile App Development Company",
    url: "https://www.comfygen.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };


  const portfoliodata = [
    {
      "image": "https://www.comfygen.com/image/urban-ride-hailing-startup.webp",
      "title": "Urban Ride-Hailing Startup",
      "description": "Challenge: A startup wanted to enter the competitive ride-hailing market with a unique offering. We developed an Uber-like taxi app clone with real-time tracking, dynamic pricing, and multi-language support. The app gained 50,000+ users in 6 months, with a 30% increase in driver sign-ups.",
      "link": "/portfolio/ride-hailing-app"
    },
    {
      "image": "https://www.comfygen.com/image/fitclub-app-portfolio.webp",
      "title": "Fitclub Mobile App",
      "description": "Welcome to FitClub, where your fitness journey meets innovation. Seamlessly sculpt your well-being with our all-in-one mobile app, empowering you to own your health like never before. Unleash the power of convenience and comprehensive access, tailored for your fitness success.",
      "link": "https://www.comfygen.com/portfolio/fitclub-app"
    },
    {
      "image": "https://www.comfygen.com/image/great-wallet-portfolio.webp",
      "title": "Great Wallet Application",
      "description": "Introducing our Great Wallet Application – your all-in-one solution for seamless and secure financial management. Consolidate cards, track spending, and make quick, hassle-free transactions. With cutting-edge security measures, intuitive design, and insightful analytics, our app transforms the way you handle money. Embrace a cashless lifestyle with confidence and convenience. Your financial future, simplified.",
      "link": "#"
    },
    {
      "image": "https://www.comfygen.com/image/portfolio-image-food-delivery-app-development1.webp",
      "title": "Food Delivery App – Food 24Hr",
      "description": "Food 24Hr is a high-performance food delivery app developed for a client seeking a reliable and user-friendly solution. The app features real-time order tracking, AI-based food recommendations, and a smooth user interface for both customers and delivery partners.",
      "link": "/portfolio/food-delivery-app"
    },
    {
      "image": "https://www.comfygen.com/image/hero-section-love-horoscope-app.webp",
      "title": "Love Horoscope App",
      "description": "A personalized love horoscope app development solution that provides daily, weekly, and monthly love predictions based on zodiac compatibility. Integrated with AI-driven astrology insights, real-time astrologer consultations, and interactive matchmaking features, this app enhances the love and relationship experience for users.",
      "link": "/portfolio/love-horoscope-app"
    },
    {
      "image": "https://www.comfygen.com/image/hero-image-tarot-card-reading-app.webp",
      "title": "Tarot Card Reading App",
      "description": "A virtual tarot reading app development platform designed to offer accurate and insightful tarot card readings. Featuring AI-powered tarot interpretations, live tarot reader consultations, customizable card decks, and in-app purchase options, this app provides a seamless and intuitive tarot reading experience.",
      "link": "/portfolio/tarot-card-reading-app"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/salon-app-development/salon-development-salon-chain-management-app.webp",
      "title": "Salon Chain Management App",
      "description": "Developed for a national beauty brand with multiple outlets, this app enables centralized appointment management, staff coordination, and client tracking. It also includes loyalty programs and detailed analytics for business growth.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/comfygen/hero-image-on-demand-tutor-booking-app.webp",
      "title": "On-Demand Tutor Booking App",
      "description": "A real-time tutor booking app development solution that connects students with qualified tutors nearby. Integrated with AI-based matching, automated scheduling, secure payments, and live video sessions.",
      "link": "/portfolio/on-demand-tutor-booking-app"
    },
    {
      "image": "https://www.comfygen.com/image/eangex-social-media-app-portfolio.webp",
      "title": "EangeX A social media platform",
      "description": "EngageX is a dynamic web application that allows users to chat, share reels, and celebrate special moments with friends and family. A platform designed for real-time interaction and seamless content sharing.",
      "link": "/portfolio/eange-x"
    },
    {
      "image": "https://www.comfygen.com/image/hero-image-global-news-aggregator-app.webp",
      "title": "Global News Aggregator App",
      "description": "We developed a news aggregator app with AI-driven recommendations, multi-language support, and real-time updates. Achieved 200K+ downloads, 60% engagement growth, and higher revenue through a hybrid monetization model.",
      "link": "/portfolio/global-news-aggregator-app"
    },
    {
      "image": "https://www.comfygen.com/image/hero-image-global-news-aggregator-app.webp",
      "title": "Political News App",
      "description": "Our UAE-based client, a leading media company, required a custom political news app development solution to deliver real-time political updates, in-depth analysis, and AI-powered personalized news feeds. As a top-rated news app development company, we built a feature-rich, secure, and scalable platform that provides users with verified political news, live updates, and expert opinions in multiple languages.",
      "link": "/portfolio/political-news-app"
    },
    {
      "image": "https://www.comfygen.com/img/hero-book-my-tutor.webp",
      "title": "Book My Tutor",
      "description": "Book My Tutor aims to revolutionize the education sector in India by providing a seamless platform for students to connect with experienced and qualified tutors. The vision is to make quality education accessible to every student, regardless of their location or academic level. The project seeks to bridge the gap between students and tutors, creating a conducive environment for personalized learning.",
      "link": "https://www.comfygen.com/contact-us"
    },

    {
      "image": "https://www.comfygen.com/image/portfolio-fin-flow.webp",
      "title": "FinFlow - A Personal Finance Management App",
      "description": "FinFlow is a personal finance management app, that tracks and manages the user’s finances very conveniently. The app includes a multitude of features; such as expense tracking, budget creation, finance goal setting, etc. These features make the app more efficient.",
      "link": "/portfolio/personal-finance-management-app"
    },
    {
      "image": "https://www.comfygen.com/image/portfolio-invest-smart.webp",
      "title": "PayMaster - A Mobile Payment Solution",
      "description": "PayMaster is a fast and very secure app for mobile payments. It allows bill splitting, peer-to-peer transfers, and contactless payments. The app works in conjunction with bank accounts and digital wallets so that people can perform their transactions with a few taps. It has an effective design to match the use of every kind of user. Protects identity and security by way of biometric verification and end-to-end encryption for secure payments. PayMaster is set to cater to individuals and businesses that require reliable digital payment facilities.",
      "link": "/portfolio/mobile-payment-app-solution"
    },

    {
      "image": "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/ai-driven-app.webp",
      "title": "AI-Driven Mobile Banking App",
      "description": "We developed an AI-powered mobile banking app featuring smart budgeting, predictive insights, and automated assistance for personalized, real-time financial management and customer support.",
      "link": "https://www.comfygen.com/contact-us"
    },

    {
      "image": "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-ai-stock-app.webp",
      "title": "AI-Powered Stock Trading App",
      "description": "We developed an AI-integrated trading app with real-time analytics, automated buy/sell execution, and predictive investment suggestions, empowering users with smarter and faster decision-making in volatile markets.",
      "link": "https://www.comfygen.com/contact-us"
    },

    {
      "image": "https://www.comfygen.com/comfygen-images/p2p-payment-app/p2p-money-transfer-app.webp",
      "title": "P2P Money Transfer App for Emerging Fintech Startup",
      "description": "We developed a robust peer-to-peer money transfer app for a fintech startup aiming to offer instant, secure, and fee-free domestic transfers. The app includes biometric authentication, multi-bank linking, and real-time transaction tracking.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/comfygen/telemedicine.webp",
      "title": "Telemedicine Platform for Virtual Consultations",
      "description": "We developed a comprehensive telemedicine platform, enabling healthcare providers to offer virtual consultations. The software is HIPAA-compliant, and secure, and ensures high-quality video and audio communication between doctors and patients, promoting better healthcare access.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/health-tracking-app-development/portfolio1.webp",
      "title": "Personalized Fitness Tracker App",
      "description": "Custom health and fitness app built for an urban fitness startup. It allows users to set fitness goals, track workouts, monitor calories burned, and receive AI-based health tips. The app syncs with Apple Health and Google Fit for real-time performance updates.",
      "link": "/portfolio/personalized-fitness-tracker-app",
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-zepto.webp",
      "title": "Zepto-Style Quick Commerce App",
      "description": "Inspired by Zepto, this app supports ultra-fast grocery delivery in under 10 minutes. Includes dark store integration, real-time delivery tracking, push notifications, and advanced inventory management for micro-fulfillment.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-custom.webp",
      "title": "Custom Supermarket App Solution",
      "description": "A custom grocery app solution built for a supermarket chain with over 20 branches. Features barcode-based in-store scanning, loyalty rewards, click & collect scheduling, and integration with existing POS and ERP systems.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/fashion/fashion-slider2.webp",
      "title": "Multi-Vendor Fashion Marketplace",
      "description": "A robust fashion marketplace platform connecting multiple vendors and independent fashion labels. The app supports separate vendor dashboards, real-time inventory updates, commission management, and advanced filter/search tools.",
      "link": "https://www.comfygen.com/contact-us"
    }, {
      "image": "https://www.comfygen.com/comfygen-images/quick-commerce-app-development/quick-commerce-app-development-panel1.webp",
      "title": "Hyperlocal Grocery Delivery App",
      "description": "An ultra-fast grocery delivery platform designed for metro cities. Users can browse nearby dark stores, track live delivery, and reorder essentials in just a few taps. The app includes real-time inventory sync, multi-location support, and integrated e-wallets—empowering the client to reduce delivery time to under 10 minutes.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/quick-commerce-app-development/quick-commerce-app-development-panel2.webp",
      "title": "Instant Pharma Delivery App",
      "description": "Developed for a healthcare startup, MediRun connects users with local pharmacies for express medicine delivery. The app allows prescription uploads, doctor chat, and same-day doorstep delivery. Features include AI-based product suggestions, secure payment gateways, and automated refill reminders, ensuring both compliance and convenience.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/ai-driven-app.webp",
      "title": "AI-Driven Mobile Banking App",
      "description": "We developed an AI-powered mobile banking app featuring smart budgeting, predictive insights, and automated assistance for personalized, real-time financial management and customer support.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/mobile-banking-app-development/blockchain-wallet.webp",
      "title": "Blockchain-Based Digital Wallet",
      "description": "This blockchain-integrated digital wallet app ensures secure, transparent, and lightning-fast transactions with features like crypto-wallet linking, biometric login, and immutable ledger history.",
      "link": "https://www.comfygen.com/contact-us"
    },
    {
      "image": "https://www.comfygen.com/image/nasdac-crypto-coin-portfolio-image.webp",
      "title": "NASDAC Crypto Coin",
      "description": "NASDAC Crypto Coin is a next-gen cryptocurrency with its own dedicated blockchain, not just a token. Designed with a robust 'Four Square' architecture, it prioritizes speed, mining benefits, seamless integration, and growth predictability. Stronger, faster, and more secure than Bitcoin, NASDAC Coin is engineered for business, making it the first true SUPER COIN in the blockchain crypto space.",
      "link": "/portfolio/blockchain-based-cryptocoin-development",
    },
    {
      "image": "https://www.comfygen.com/image/yatripay-portfolio-image.webp",
      "title": "YatriPay",
      "description": "YatriPay enables instant, zero-fee global transactions through its decentralized P2P blockchain development, powered by the YatriPay Virtual Machine (YVM). With seamless peer-to-peer transfers, YatriPay ensures secure and efficient digital payments. The YatriPay Mobile App makes onboarding easy, bringing borderless transactions to users worldwide.",
      "link": "/portfolio/peer-to-peer-blockchain-based-payment-system",
    },
  ]




  const Process = [
    { title: "Requirement Gathering", description: "We start with a detailed discussion to understand your needs, set goals, and create a roadmap. This phase includes cost evaluation, timelines, and defining project milestones for a clear direction." },
    { title: "UI/UX Design", description: "Our <a href='https://www.comfygen.com/web-design' class='text-blue-500'>UI/UX designers</a> craft intuitive, visually engaging interfaces tailored to your users. By focusing on creativity and functionality, we ensure user-friendly designs that enhance the overall experience." },
    { title: "Prototype", description: "We develop a prototype to simulate user interaction and workflows, allowing you to review and address design or functionality issues early in the development process." },
    {
      title: "Development",
      description: "Our developers use advanced tools and technologies to create a robust backend and a seamless front end, ensuring high performance and easy navigation for your application."
    },
    {
      title: "Quality Assurance",
      description: "Through rigorous manual and automated testing, we identify and resolve bugs, ensuring the application meets the highest standards for functionality, reliability, and performance."
    },
    {
      title: "Deployment",
      description: "Once tested, we launch your app on the preferred platform, ensuring compliance with all requirements to make it accessible and ready for your target audience."
    },
    {
      title: "Support & Maintenance",
      description: "Post-launch, we provide ongoing support and maintenance, monitoring performance, updating features, and keeping your app aligned with market trends."
    },

  ];

  const LocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Comfygen Technologies",
    "image": "https://www.comfygen.com/svg/Logo1.svg",
    "@id": "https://www.comfygen.com/",
    "url": "https://www.comfygen.com/",
    "telephone": "+91-958-786-7258",
    "priceRange": "$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
        "addressLocality": "Jaipur",
        "postalCode": "302021",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "CA"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/comfygen.technologies/",
      "https://x.com/Comfygen_Tech",
      "https://www.instagram.com/comfygen_technologies/",
      "https://www.youtube.com/@ComfygenTechnologies",
      "https://www.linkedin.com/company/comfygen-technologies"
    ]

  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.comfygen.com/#webpage",
    "url": "https://www.comfygen.com/",
    "inLanguage": "en-US",
    "name": "Custom Blockchain & Mobile App Development Company",
    "isPartOf": {
      "@id": "https://www.comfygen.com/#website"
    },
    "datePublished": "2020-07-08T00:09:36-08:00",
    "dateModified": "2024-04-06T00:19:05-08:00",
    "description": "Comfygen Technologies is a leading software development company. Offering a wide range of mobile apps, blockchain, and web development solutions globally."
  };

  return (
    <>
      <Head>
        <title>Custom Blockchain & Mobile App Development Company - Comfygen Technologies</title>
        <meta name="title" content="Custom Blockchain & Mobile App Development Company - Comfygen Technologies" />
        <meta
          name="description"
          content="Comfygen Technologies is a leading software development company. Offering a wide range of mobile apps, blockchain, and web development solutions globally."
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta name="keywords" content="Comfygen Technologies, software development, app development, blockchain development, IT company, custom software solutions" />
        <link rel="canonical" href="https://www.comfygen.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Comfygen Technologies – App & Software Development Experts" />
        <meta
          property="og:description"
          content="Explore top-tier software, app, and blockchain development services by Comfygen Technologies."
        />
        <meta property="og:url" content="https://www.comfygen.com" />
        <meta property="og:site_name" content="Custom Blockchain & Mobile App Development Company" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-06T08:49:10+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />

        {/* Author and Company Information */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* Twitter Card  */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comfygen Technologies – Digital Transformation Partner" />
        <meta name="twitter:description" content="Join hands with Comfygen for robust software and mobile solutions that scale." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />


        {/* <link
          rel="preload"
          href="/gif/blockchain-development-company.webp"
          as="image"
          type="image/webp"
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Comfygen Technologies",
              "url": "https://www.comfygen.com/",
              "logo": "https://www.comfygen.com/svg/Logo1.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "contactOption": "TollFree",
                "telephone": "+91-9587867258",
                "email": "sales@comfygen.com",
                "areaServed": [
                  "IN", "US", "CA", "GB"],
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/comfygen.technologies/",
                "https://x.com/Comfygen_Tech",
                "https://www.instagram.com/comfygen_technologies/",
                "https://youtube.com/@comfygentechnologies",
                "https://www.linkedin.com/company/comfygen-technologies"
              ]

            }),
          }}

        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div style={{ height: '80px', }}>
        <Header />
      </div>
      <div className="overflow-hidden">
        <div className="relative">
          <HeroSectionHomePage
            heading={typedText}
            isHome={true}
            Provider
            ptag="Excel in business growth with modern digital transformation. We are a top-tier web & mobile app development company that designs cutting-edge IT Solutions tailored to unique needs and conquers all market challenges. Our webs and apps propel toward streamlined operations and vast engagement empowering businesses across various industries."
            btnName="Let's Discuss"
            btnLink="/contact-us"
            imgSrc="/"
            Width={907}
            Height={762}
            altTag="blockchain-technology"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/herosection/landing-hero-img.webp"
          />
        </div>

        <AboutSection
          title="About Company"
          heading="Build Future-Driven Webs and Apps that Transforms Industries"
          description1="Comfygen is a result-oriented IT Service Provider that builds secured and scaled apps to fulfill the needs of every business in various industries; be it Finance, Blockchain, Healthcare, On-Demand, Education, Gaming, Entertainment, etc."
          description2="We have highly experienced web and mobile app developers using cutting-edge technologies to redefine IT Solutions. The tech engineers are more attentive to the latest tech trends to optimize the business and obtain huge engagement. Our objective is to create an intuitive digital infrastructure for clients that makes them the best in their respective industries."
          points={[
            "Dedicated Development Team",
            "End-to-End Software Development Technology",
            "Focused on the Latest Trends and Modern Solutions",
            "High-Performing Solutions at Competitive Cost",
            "Strategic Development Process",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/comfygen/thumbnail.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Custom Web & Mobile App Development Services
              </h2>
              <p className="text-base text-center font-normal">Get a scalable web or mobile app for your business with modern systems and futuristic technologies implemented. Open the gateways for better growth opportunities with prominent web and mobile app development services.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <PortfolioSlider
          techData={portfoliodata}
          heading="Explore Our Web & App Development Portfolio"
          description="Explore our selection of accomplished projects that highlight our proficiency in online solutions and app development. Every project demonstrates our dedication to excellence, creativity, and client fulfilment."
        />

        <CallToAction
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <IndustriesServe
          heading="Industries We Serve"
          description="We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Development Process: From Idea to Execution</h2>
              <p className="text-base font-normal mt-2">
                To deliver custom mobile app development services, our web and mobile app development company incorporates a streamlined development lifecycle to meet the business needs.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Our Edgy Tech-Stacks Use for Development"
          description="The only focus is not the engagement, but building a highly-secured and robust web or application. For strong development, some edgy tech stacks are being used."
        />

        <Suspense fallback={<p>Loading...</p>}>
          <WhyChoose
            title={JSON_DATA.pageData.title}
            description={JSON_DATA.pageData.description}
            mainCardData={JSON_DATA.pageData.mainCardData}
            gridData={JSON_DATA.pageData.gridData}
          />
        </Suspense>

        <HireDeveloper
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced developers for every project",
            "Custom solutions tailored to your needs",
            "Cutting-edge technologies to ensure success"
          ]}
        />

        {/* <PortfolioSec
          techData={techDataForPage1}
          heading=" Explore Our Web & App Development Portfolio"
          description="Explore our selection of accomplished projects that highlight our proficiency in online solutions and app development. Every project demonstrates our dedication to excellence, creativity, and client fulfilment."
        /> */}
        {/* <IndustriesServe /> */}

        <ClientTestimonials />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
        />

        <FormSec />
        <BlogSection initialData={initialData} />
        {false && show ? (
          <div className="fixed flex items-center justify-center w-10/12 p-4 bottom-8 left-10">
            <div className="z-10 p-2 space-y-2 bg-white border border-gray-800 rounded-md shadow-md shadow-black/50 md:flex lg:p-4 md:space-y-0">
              <div>
                <h5 className="mb-2 text-sm font-medium leading-tight text-gray-900 md:text-base">
                  This website uses cookies.
                </h5>
                <p className="pr-5 text-xs text-gray-900 lg:text-sm">
                  {
                    "We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data"
                  }
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setshow(!show)}
                  type="button"
                  className="w-full inline-block px-3 md:px-6 md:py-2.5 py-2 bg-[#161616]/50 text-white font-medium text-xs leading-tight capitalize transition duration-150 ease-in-out rounded-md"
                >
                  Decline
                </button>
                <button
                  onClick={() => setshow(!show)}
                  type="button"
                  className="w-full inline-block px-3 md:px-6 md:py-2.5 py-2 bg-[#161616]/50 text-white font-medium text-xs leading-tight capitalize transition duration-150 ease-in-ou rounded-md"
                >
                  {" "}
                  Accept
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}


export async function getStaticProps() {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();

  return {
    props: { initialData: data },
    revalidate: 10, // Revalidate data every 10 seconds
  };
}
