import React, { Suspense, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./index.json";
// Lazy load all major components
import Header from "./Newcomponet/layout/Header";
import HeroSectionHomePage from "./Newcomponet/SectionCompoent/HeroSectionHomePage";
import AboutSection from "./Newcomponet/SectionCompoent/AboutSection";





const ServicesSec = dynamic(() => import("./Newcomponet/SectionCompoent/ServicesSec"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true, // keep SSR for SEO
});


const CallToAction = dynamic(() => import("./Newcomponet/SectionCompoent/CallToAction"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
});
const IndustriesServe = dynamic(() => import("./Newcomponet/SectionCompoent/IndustriesServe"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ProcessSec = dynamic(() => import("./Newcomponet/SectionCompoent/ProcessSec"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const TechStack = dynamic(() => import("./Newcomponet/SectionCompoent/TechStack"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Portfolio = dynamic(() => import("./Newcomponet/SectionCompoent/Portfolio"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const WhyChoose = dynamic(() => import("./Newcomponet/SectionCompoent/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});



const HireDeveloper = dynamic(() => import("./Newcomponet/SectionCompoent/HireDeveloper"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ClientTestimonials = dynamic(() => import("./Newcomponet/SectionCompoent/ClientTestimonials"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Faq = dynamic(() => import("./Newcomponet/SectionCompoent/Faq"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const ClientStories = dynamic(() => import("./Newcomponet/SectionCompoent/ClientStories"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});






export default function Home(props: any) {

  let { initialData } = props;
  const [typedText] = useState("");
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
      "image": "https://www.comfygen.com/comfygen-images/comfygen/urban-ride-hailing-startup-new.webp",
      "title": "Urban Ride-Hailing Startup",
      "description": "Challenge: A startup wanted to enter the competitive ride-hailing market with a unique offering. We developed an Uber-like taxi app clone with real-time tracking, dynamic pricing, and multi-language support. The app gained 50,000+ users in 6 months, with a 30% increase in driver sign-ups.",
      "link": "/portfolio/ride-hailing-app"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/comfygen/fitclub-app-portfolio-new.webp",
      "title": "Fitclub Mobile App",
      "description": "Welcome to FitClub, where your fitness journey meets innovation. Seamlessly sculpt your well-being with our all-in-one mobile app, empowering you to own your health like never before. Unleash the power of convenience and comprehensive access, tailored for your fitness success.",
      "link": "https://www.comfygen.com/portfolio/fitclub-app"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/comfygen/great-wallet-portfolio-new.webp",
      "title": "Great Wallet Application",
      "description": "Introducing our Great Wallet Application – your all-in-one solution for seamless and secure financial management. Consolidate cards, track spending, and make quick, hassle-free transactions. With cutting-edge security measures, intuitive design, and insightful analytics, our app transforms the way you handle money.",
      "link": "#"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/comfygen/food-delivery-app-development-new.webp",
      "title": "Food Delivery App – Food 24Hr",
      "description": "Food 24Hr is a high-performance food delivery app developed for a client seeking a reliable and user-friendly solution. The app features real-time order tracking, AI-based food recommendations, and a smooth user interface for both customers and delivery partners.",
      "link": "/portfolio/food-delivery-app"
    },
    {
      "image": "https://www.comfygen.com/comfygen-images/comfygen/love-horoscope.webp",
      "title": "Love Horoscope App",
      "description": "A personalized love horoscope app development solution that provides daily, weekly, and monthly love predictions based on zodiac compatibility. Integrated with AI-driven astrology insights, real-time astrologer consultations, and interactive matchmaking features, this app enhances the love and relationship experience for users.",
      "link": "/portfolio/love-horoscope-app"
    },
  ]

  const Process = [
    { title: "Requirement Gathering", description: "We start with a detailed discussion to understand your needs, set goals, and create a roadmap. This phase includes cost evaluation, timelines, and defining project milestones for a clear direction." },
    { title: "UI/UX Design", description: "Our designers craft intuitive, visually engaging interfaces tailored to your users. By focusing on creativity and functionality, we ensure user-friendly designs that enhance the overall experience." },
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


        {/* <!-- Viewport and/ Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://www.comfygen.com" />


        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Web And App Development Company" />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta name="keywords" content="Comfygen Technologies, software development, app development, blockchain development, IT company, custom software solutions" />

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
        <link
          rel="preload"
          href="/gif/blockchain-development-company.webp"
          as="image"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusiness) }}
        />
        {/* <script
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

        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div >
        <Header />
      </div>

      <div className="overflow-hidden lg:pt-[120px] pt-5">
        <div className="relative">
          <HeroSectionHomePage
            heading={typedText}
            isHome={true}

            ptag="Excel in business growth with modern digital transformation. We are a top-tier web & mobile app development company that designs cutting-edge IT Solutions tailored to unique needs and conquers all market challenges. Our webs and apps propel toward streamlined operations and vast engagement empowering businesses across various industries."
            btnName="Let's Discuss"
            btnLink="/contact-us"
            imgSrc="/"
            Width={740}
            Height={340}
            altTag="blockchain-technology"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="/landing-hero-img.webp"

          />
        </div>
        <AboutSection
          title="About Company"
          heading="Build Future-Driven Webs and Apps that Transforms Industries "
          description1="Comfygen is a result-oriented IT Service Provider that builds secured and scaled apps to fulfill the needs of every business in various industries; be it Finance, Blockchain, Healthcare, On-Demand, Education, Gaming, Entertainment, etc."
          description2="We have highly experienced web and mobile app developers using cutting-edge technologies to redefine IT Solutions. The tech engineers are more attentive to the latest tech trends to optimize the business and obtain huge engagement. Our objective is to create an intuitive digital infrastructure for clients that makes them the best in their respective industries."
          points={[
            "Dedicated Development Team",
            "End-to-End Software Development Technology",
            "Focused on the Latest Trends and Modern Solutions",
            "High-Performing Solutions at Competitive Cost",
            "Strategic Development Process",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/comfygen/about-us-home-page.webp"
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

        <section className="py-8">
          <Portfolio
            projects={portfoliodata}
            heading="Explore Our Web & App Development Portfolio"
            description="Explore our selection of accomplished projects that highlight our proficiency in online solutions and app development. Every project demonstrates our dedication to excellence, creativity, and client fulfilment."
          />
        </section>

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
          customTechData={null}
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

        <div className="py-5">
          <ClientStories />
        </div>

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


        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
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














