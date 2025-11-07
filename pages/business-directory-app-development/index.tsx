import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ELearningApp.json";
import LazyLoad from "react-lazy-load";

import Header from "../components/Header";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
// import AboutSection from "../components/AboutSection";
const AboutSection = dynamic(() => import("../components/AboutSection"), {
  loading: () => <p>Loading...</p>,
});
import ServicesSec from "../components/ServicesSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
// import PortfolioSlider from "../components/PortfolioSlider";
const PortfolioSlider = dynamic(() => import("../components/PortfolioSlider"),
  {
    loading: () => <p>Loading...</p>,
  }
);
// import Features from "./components/Features";
const Features = dynamic(() => import("./components/Features"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import ProcessSec from "../components/ProcessSec";
// import NewTeckStack from "../componentsnew/NewTeckStack";
const NewTeckStack = dynamic(() => import("../componentsnew/NewTeckStack"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import WhyChoose from "../components/WhyChooseUs";
// import HireDeveloper from "../components/HireDeveloper";
const HireDeveloper = dynamic(() => import("../components/HireDeveloper"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import ClientTestimonials from "../components/ClientTestimonials";




const Faq = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});

const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Process = [
  {
    title: "Requirement Gathering",
    description:
      "We begin by understanding your business model, industry niche, target audience, and goals. This helps us shape a personalized strategy for your business directory app development project and define the right feature set.",
  },
  {
    title: "UI/UX Designing",
    description:
      "Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' >UI/UX design</a> team creates clean, modern, and user-friendly interfaces for your custom business directory app. We focus on ease of navigation, intuitive layouts, and engaging visual elements to ensure high user retention.",
  },
  {
    title: "MVP Development",
    description:
      "We develop a Minimum Viable Product (MVP) with all core functionalities such as listings, search filters, map integration, and user profiles — allowing you to launch faster, gather feedback, and validate the app concept.",
  },
  {
    title: "Feature Integration",
    description:
      "Once the MVP is approved, we integrate advanced features like geo-location search, reviews & ratings, chat options, admin controls, and monetization modules into your business listing app for a complete user experience.",
  },
  {
    title: "QA & Testing",
    description:
      "Our QA experts conduct rigorous testing to ensure your app is bug-free, secure, and responsive across all devices. Functional, UI, performance, and security testing is done at every development stage.",
  },
  {
    title: "Deployment & Launch",
    description:
      "After final approval, we launch your business directory mobile app on major platforms like Google Play and App Store. We also configure backend servers, databases, and third-party APIs for smooth performance.",
  },
  {
    title: "Ongoing Support",
    description:
      "As your reliable business directory mobile app development partner, we provide long-term support and maintenance. From performance monitoring to feature updates, our team ensures your app continues to evolve and scale with your business.",
  },
];



export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let { Frequently } = JSON_DATA;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

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
      "name": "Custom Business Directory App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Get scalable and secure business directory app development services from Comfygen. We create custom business listing apps with search, maps, and reviews for startups, franchises, and enterprises.",
      "url": "https://www.comfygen.com/business-directory-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/business-directory-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Local Business Directory App Development",
        "Niche Industry Directory App Development",
        "B2B/B2C Business Listing App Development",
        "Franchise & Multi-location Directory App Development",
        "White-label Business Directory App Development"
    
      ],
     
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
        
      ]
    }
    ,

    {"@context":"http://www.schema.org",
      "@type":"Product",
      "brand":"Comfygen Technologies",
      "Name":"Business Listing App Development Company",
      "image":"https://www.comfygen.com/comfygen-images/business-directory-app-development/about.webp",
      "description":"Comfygen Technologies builds scalable multi-location and niche business directory apps. From UI design to deployment, we deliver complete business directory software development with admin panel and real-time updates.",
      "aggregateRating":{"@type":"AggregateRating",
      "ratingValue":"4.9",
      "reviewCount":"400"}}
      ,

      {
        "@context": "https://schema.org/", 
        "@type": "BreadcrumbList", 
        "itemListElement": [{
          "@type": "ListItem", 
          "position": 1, 
          "name": "Home",
          "item": "https://www.comfygen.com"  
        },{
          "@type": "ListItem", 
          "position": 2, 
          "name": "Business Directory App Development",
          "item": "https://www.comfygen.com/business-directory-app-development"  
      
        }]
      }
      ,

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop a business directory app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of business directory app development depends on features, platform, and complexity. A basic app may start around $5,000–$10,000, while a fully-featured, custom solution can range higher. We provide flexible pricing based on your project requirements and budget."
          }
        },
        {
          "@type": "Question",
          name: "How long does it take to build the app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "B2B directory app development time depends on the scope and features. A simple business directory app takes 4–6 weeks, while complex projects with custom integrations may take 8–12 weeks. We follow agile development to ensure faster delivery without compromising quality."
          }
        },
        {
          "@type": "Question",
          name: "Can I customize the app as per my niche?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer custom business directory website development tailored to your specific niche — whether it's healthcare, real estate, local services, or B2B. You can choose custom features, branding, layouts, and functionality based on your business needs."
          }
        },
        {
          "@type": "Question",
          name: "Do you provide post-launch support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! As a trusted review website development company, we offer complete post-launch support, including bug fixes, updates, security patches, and feature enhancements to ensure your app runs smoothly and scales with your business."
          }
        },
        {
          "@type": "Question",
          name: "Is the business listing app available for both Android and iOS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build business directory apps for both Android and iOS using Flutter, React Native, and native technologies. You get a consistent and optimized experience across all devices, increasing your reach and user engagement."
          }
        }
      ]
      ,
    },
  ];

  return (
    <>
      <Head>
        <title>Business Directory App Development Company</title>
        <meta
          name="description"
          content="Looking to develop a business directory app like IndiaMart, JustDial, and Yelp? Comfygen Technologies is a top business directory app development company offering custom directory app development services, white-label, and scalable business listing app solutions for Android, iOS, and web platforms."
        />

        <meta
          name="keywords"
          content="Local Business Directory App Development, Niche Industry Directory App Development, B2B Business Listing App Development, B2C Business Directory App, Franchise Directory App, Multi-location Directory App, White-label Business Directory App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/business-directory-app-development"
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
        <meta name="apple-mobile-web-app-title" content="My App" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

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
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/business-directory-app-development"
        />
        <meta
          property="og:title"
          content="Top Business Directory App Development Company"
        />
        <meta
          property="og:description"
          content="Hire the best business directory app developers. We build powerful, feature-rich business review apps like Yelp, IndiaMart or Justdial for Android, iOS, and web platforms with full support and maintenance."
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/business-directory-app-development/og1.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/business-directory-app-development/og1.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Business Directory App Development"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Develop Business Directory App with Comfygen | B2B & Local Listings"
        />
        <meta
          name="twitter:description"
          content="Comfygen Technologies helps you develop custom business directory apps tailored for B2B, B2C, or local markets. Our business directory apps are secure, fast, and optimized for user engagement and revenue generation."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/business-directory-app-development/og1.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden sm:pt-16">
        <div className="">
          <HeroSectionForAllPages
            heading="Business Directory App Development Company"
            ptag="Looking to build a powerful online listing platform? Our business directory app development company helps you create location-based business listing directory apps like Yelp, JustDial or IndianMart for your startups and enterprises. We offer world-class business directory app development services that connect users with local businesses and services in real time."
            li="Smart Business Listings with Filters"
            li1="Location-Based Search Integration"
            li2="Ratings, Reviews & Contact Info"
            li3="Easy-to-Use Admin Dashboard"
            li4="IT-based Listing App Development Solution"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/business-directory-app-development/hero.webp"
          />
        </div>
        <AboutSection
          title="About Company"
          heading="How Business Listing Sites Boost Your Online Visibility"
          description1="In the digital-first era, being discoverable online is critical for business growth. A business listing app helps your brand get found quickly by potential customers searching locally or by category."
          description2="It not only increases online presence but also improves your ranking in search engines, maps, and mobile searches."
          description3="With a feature-rich business directory app, you unlock higher visibility and more leads — all while managing listings from a centralized platform."
          points={[
            "Improves Local SEO & Search Engine Rankings",
            "Increases Organic Traffic to Business Profiles",
            "Boosts Brand Trust via Reviews & Ratings",
            "Allows Instant Discovery on Maps & Mobile",
            "Helps Target Niche Audiences with Filters & Tags",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/business-directory-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide the Best Business Directory App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen offers the most reliable business listing directory app
                development services tailored for startups, enterprises, and
                niche platforms. Our scalable and secure solutions empower you
                to launch your own listing app with advanced features like
                search filters, map integration, reviews, and admin control —
                all backed by a dedicated development team.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

     
        <PortfolioSlider
          techData={JSON_DATA.portfoliodata}
          heading="Our Portfolio – Enterprise Directory App and Website Development Projects"
          description="Explore how Comfygen helps businesses across industries with powerful and scalable business directory app and <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-development' >website development solutions</a>. From local listing platforms to niche-specific B2B directories, our projects showcase advanced search features, seamless user experience, and fully customizable interfaces tailored to client goals."
        />


        <Features />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Business Directory App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                At Comfygen Technologies, a trusted business directory app
                development company, we follow a transparent and proven process
                to build scalable, feature-rich directory apps. Whether it's a
                local listing platform or a custom B2B directory solution, we
                ensure your app is fast, reliable, and built for growth.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <NewTeckStack
          title="Our Technology Stack for Business Directory App Development"
          description="We build business listing directory apps using modern technologies trusted by global enterprises at <a class='underline font-semibold' href='https://www.comfygen.com' >Comfygen Technologies</a>. Any successful business finder app development project requires high performance, easy maintenance, cross-platform compatibility, and future scalability."
          filterCategory={["crypto"]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Online Business Directory App Builders"
          text="Want to create a review website and app like Yelp, Justdial, or Clutch? Hire our expert online <a class='underline font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >business directory mobile app builders</a> to develop a fast, scalable, and feature-rich app tailored to your niche. Whether it's for B2B services, local businesses, or multi-location franchises — we turn your vision into a fully functional app ready for Android, iOS, and web."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experts in custom business directory app development",
            "10+ years of experience in app design & deployment",
            "Scalable, secure, and fully white-label solutions",
            "Quick delivery, full support, and post-launch updates",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="Frequently Asked Questions (FAQs)" />
        {/*<BlogSection initialData={initialData} />*/}
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
