import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import JSON_DATA from "./ecommerce.json";
// import EcommerceNav from "../Newcomponet/layout/ecommerce-navbar";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import EcommerceHeader from "../../components/Newcomponet/layout/EcommerceHeader";
import Milestones from "../../components/Newcomponet/comman/Milestones";

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ConsultancyApproach = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);
const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ProductCard = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProductCard"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);
const ClientTestimonials = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

const Process = [
  {
    title: "Requirement Analysis & Market Research",
    description:
      "We begin with an in-depth understanding of your business goals, target audience, and competitors. Our team gathers technical and functional requirements to define a clear roadmap for your eCommerce platform development.",
  },
  {
    title: "eCommerce Strategy & Growth Planning",
    description:
      "We align your business model with the right tech stack, monetization model, and feature set. From user acquisition to retention, our eCommerce consultants help you plan for long-term digital growth.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team creates responsive wireframes and user-friendly interfaces that deliver smooth navigation and fast interactions. We prioritize usability, branding, and performance in every <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-design' > UI/UX design.</a>",
  },
  {
    title: "Custom Development & Platform Integration",
    description:
      "Our professional ecommerce developers build secure, scalable eCommerce apps and websites using platforms like Shopify, Magento, or Laravel. We integrate essential features such as product catalogs, payments, shipping, CRM, and APIs for complete functionality.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We run thorough testing cycles—functional, security, usability, and performance—to ensure a flawless experience. Our QA team ensures that your enterprise eCommerce solution is fast, secure, and bug-free across all devices.",
  },
  {
    title: "Deployment & Store Launch",
    description:
      "Once approved, we launch your eCommerce app, website and web application on relevant platforms. Whether it's Play Store, App Store, or web, we ensure a smooth deployment with zero disruptions to business operations.",
  },
  {
    title: "Maintenance, Support",
    description:
      "Post-launch, we offer continuous monitoring, updates, and feature enhancements. Our eCommerce maintenance services keep your platform secure, up to date, and optimized for performance and user engagement.",
  },
];

const productCard = [
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c1.svg",
    link: "https://www.comfygen.com/ecommerce/fashion",
    heading: "Fashion & Apparel",
    description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c2.svg",
    link: "https://www.comfygen.com/ecommerce/grocery",
    heading: "Grocery ",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c3.svg",
    link: "https://www.comfygen.com/ecommerce/fmcg",
    heading: "FMCG",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c11.svg",
    link: "https://www.comfygen.com/food-delivery-app-development",
    heading: "Food Ordering",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c5.svg",
    link: "https://www.comfygen.com/ecommerce",
    heading: "Electronics",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c6.svg",
    link: "https://www.comfygen.com/home-service-app-development",
    heading: "Furniture & Home Decor",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c7.svg",
    link: "https://www.comfygen.com/ecommerce",
    heading: "B2B & Wholesale",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c8.svg",
    link: "https://www.comfygen.com/salon-app-development",
    heading: "Beauty & Personal Care",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c9.svg",
    link: "https://www.comfygen.com/healthcare-app-development",
    heading: "Healthcare & Medicine",
     description:null
  },
  {
    image:
      "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-c10.svg",
    link: "https://www.comfygen.com/portfolio/e-commerce",
    heading: "Jewelry",
     description:null
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
      "@type": "Service",
      name: "Custom eCommerce Development Services",
      provider: {
        "@type": "Organization",
        name: "Comfygen Technologies",
        url: "https://www.comfygen.com/",
      },
      description:
        "Get high-performance eCommerce apps and websites built by experts at Comfygen Technologies. We specialize in Shopify, Magento, WooCommerce, and custom eCommerce development for startups and enterprises.",
      url: "https://www.comfygen.com/ecommerce",
      mainEntityOfPage: "https://www.comfygen.com/ecommerce",
      areaServed: "Global",
      serviceType: [
        "Custom eCommerce Website Development",
        "Multi-Vendor Marketplace Development",
        "Headless eCommerce Solutions",
        "B2B Ecommerce Solutions",
        "B2C Ecommerce Solutions",
        "C2C Ecommerce Solutions",
        "C2B Ecommerce Solutions",
        "B2A Ecommerce Solutions",
        "Shopify Ecommerce Development",
        "Woocommerce Development",
        "Bigcommerce Development Services",
        "Magento Ecommerce development",
      ],

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
            "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar  ",
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
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        // "areaServed": "US, IN",
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
      "@context": "http://www.schema.org",
      "@type": "Product",
      brand: "Comfygen Technologies",
      Name: "eCommerce Development Services",
      image:
        "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-about.webp",
      description:
        "Boost your online business with Comfygen’s expert eCommerce development services. We build scalable, secure, and high-performing eCommerce websites and apps using Shopify, Magento, WooCommerce, and more.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "745",
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
          name: "Ecommerce Development",
          item: "https://www.comfygen.com/ecommerce",
        },
      ],
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does eCommerce development cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of eCommerce development varies based on project complexity, platform choice, features, and integrations. On average, a basic eCommerce website may cost $3,000–$10,000, while advanced apps or custom solutions can go beyond $20,000. We offer flexible pricing based on your specific needs and goals.",
          },
        },
        {
          "@type": "Question",
          name: "Which platform is best for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best eCommerce platform depends on your business model and goals. Shopify is ideal for startups, WooCommerce suits WordPress users, Magento is great for enterprise needs, and custom PHP/Laravel offers full flexibility. Our experts help you choose the right platform based on scalability, budget, and features.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build an eCommerce site?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on your project’s scope. A basic eCommerce website can be completed in 3–5 weeks. More complex platforms with custom features, integrations, or mobile apps may take 2–4 months. We follow agile development to ensure timely delivery and flexibility throughout the process.",
          },
        },
        {
          "@type": "Question",
          name: "Will I get support after the launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely. We provide end-to-end support after the launch, including regular updates, bug fixes, performance optimization, and technical maintenance. Our top rated ecommerce development team ensures your eCommerce platform stays secure, fast, and aligned with evolving business needs.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Custom eCommerce Development Services | Online Store Solutions
        </title>
        <meta
          name="description"
          content="Looking for an eCommerce development company? Comfygen builds high-performance online stores, eCommerce apps, and web solutions tailored to your business growth."
        />

        <meta
          name="keywords"
          content="Custom eCommerce Website Development, Multi-Vendor Marketplace Development, Headless eCommerce Solutions, B2B Ecommerce Solutions, B2C Ecommerce Solutions, C2C Ecommerce Solutions, C2B Ecommerce Solutions, B2A Ecommerce Solutions, Shopify Ecommerce Development, Woocommerce Development, Bigcommerce Development Services, Magento Ecommerce development"
        />

        <link rel="canonical" href="https://www.comfygen.com/ecommerce" />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
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

        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-og.webp"
        />
        <meta
          property="og:image:alt"
          content="Ecommerce Development Solution"
        />
        <meta property="og:url" content="https://www.comfygen.com/ecommerce" />
        <meta
          property="og:title"
          content="eCommerce Development Company | Scalable Online Store Solutions"
        />
        <meta
          property="og:description"
          content="Looking to launch your eCommerce store? Comfygen builds scalable and secure mobile apps and websites tailored for fashion, grocery, electronics, and more. Hire top eCommerce developers today!"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best eCommerce Development Company"
        />
        <meta
          name="twitter:description"
          content="Comfygen is India’s trusted eCommerce development company delivering top-notch web and app solutions. We serve fashion, grocery, B2B, electronics, and other industries worldwide."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>
      <EcommerceHeader />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="eCommerce Development Company for Scalable Online Stores"
          ptag="Comfygen is a trusted eCommerce development company helping businesses build secure, scalable, and high-performing online stores. We design and develop custom eCommerce websites, mobile apps, and web applications that deliver seamless shopping experiences and drive higher conversions."
          ptag1="Our expert eCommerce developers work with leading platforms like Shopify, Magento, and WooCommerce, integrating modern technologies such as AI-driven recommendations, advanced analytics, and secure payment systems to help your brand grow in competitive digital markets."
          li="Custom eCommerce Website & App Development"
          li1="Shopify, Magento & WooCommerce Expertise"
          li2="Scalable, Secure & Conversion-Focused Solutions"
          li3="AI-Powered Shopping Experiences & Recommendations"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-hero.webp"
        />
        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Revolutionizing the e-commerce Industry with Our Cutting-Edge
                eCommerce Development Services
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we deliver powerful and professional eCommerce
                development services for SMBs and Enterprises to help you create
                seamless online shopping experiences. Whether you're launching a
                startup, scaling an existing online store, or upgrading to a
                next-gen platform, we offer fully customized eCommerce
                development solutions aligned with your goals.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why eCommerce Development is a Global Game-Changer"
          description1="eCommerce is no longer a trend—it's the foundation of modern retail. With over 60% of global retail sales influenced by digital channels, businesses worldwide are rapidly investing in mobile-first eCommerce experiences to meet rising customer expectations."
          description2="Globally, the eCommerce app and web market is expected to exceed $1.2 trillion by 2027, driven by the growth of smartphones, digital payments, and AI-powered personalization. From small retailers to global enterprises, eCommerce apps are enabling faster checkouts, better user engagement, and higher conversion rates across industries."
          description3="Building a custom eCommerce app and website today positions your business for long-term success in the fast-evolving digital economy."
          description4=""
          description5=""
          imageSrc="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Take your Business to New Heights with our Top-Notch eCommerce
                  Development Solutions
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  At Comfygen, we offer versatile eCommerce development
                  solutions to serve every business model—whether you're a
                  startup, large enterprise, or government body. Our team builds
                  secure, scalable, and future-ready platforms designed to
                  accelerate your digital commerce journey.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 ">
                {JSON_DATA.FutureDriven2.map((elem) => {
                  const { title, desc } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-2xl">
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p className=" text-base font-normal mt-2">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Discover the expertise we have in e-commerce development by exploring our recent work"
            description="At Comfygen, we specialize in building robust, scalable, and <a  class='text-blue-500 font-semibold' href='https://www.comfygen.com/e-commerce-app-development' >custom eCommerce app development solutions</a> tailored for various industries. Explore some of our standout projects to see how we’re helping global brands elevate their digital commerce experiences."
          />
        </section>

        <div className="py-8">
          <Features
            heading="Essential Features for Your E-commerce Development"
            description="Comfygen develops eCommerce apps and websites to ensure seamless
            business operations and an outstanding user experience. We offer
            affordable custom eCommerce development with dynamic panels for
            customers, vendors, admins, delivery agents, inventory managers, and
            marketing teams."
            featuresData={JSON_DATA.Feature}
            grid={4}
          />
        </div>

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <CallToAction
          heading="Get The Best Ecommerce Development Services at The Most Affordable Price"
          text="Ecommerce development solutions tailored to your business needs."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-call.webp"
          imageAlt="Get in touch now."
        />

        <TrendsSection
          heading="The Emerging Technologies We Use for Enterprise eCommerce Development"
          subtitle="At Comfygen, we future-proof your business by integrating the latest technologies into our enterprise eCommerce development services. From intelligent automation to immersive customer experiences, we use cutting-edge tools that make your eCommerce platform faster, smarter, and more competitive."
          trends={JSON_DATA.Emerging}
        />

        <ProductCard
          title="Transforming Businesses with Industry-Specific eCommerce Solutions"
          subtitle="We build tailored eCommerce solutions to meet the unique needs of various industries and markets."
          cards={productCard}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Enterprise eCommerce Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                At Comfygen, we follow a transparent and agile development
                process to ensure smooth collaboration and successful project
                delivery. From strategy to support, we build enterprise-grade
                eCommerce app and{" "}
                <a
                  className="text-blue-500 font-semibold"
                  href="https://www.comfygen.com/web-development"
                >
                  website solutions
                </a>{" "}
                that are scalable, secure, and user-focused.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Technology Stack We Use in eCommerce Solutions"
          description="At Comfygen, we utilize the latest and most reliable technologies to build fast, secure, and scalable eCommerce applications. Our top ecommerce development team selects the ideal stack based on your business model, scalability goals, and user experience expectations, ensuring seamless performance across devices."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Top-Rated eCommerce Developers"
          text="Looking to launch a feature-rich, scalable, and secure online store? Hire dedicated eCommerce developers from Comfygen to turn your vision into a high-performing digital commerce platform. From startup MVPs to enterprise-grade solutions, we deliver full-cycle eCommerce development tailored to your business goals."
          text1="Our expert <a class='underline font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer' >mobile app developers</a> specialize in building fast, user-friendly eCommerce websites and mobile apps for B2B, B2C, multi-vendor marketplaces, and niche industries. With deep platform expertise in Shopify, Magento, WooCommerce, Laravel, and headless commerce, we help you scale with confidence."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experts in eCommerce App & Web Development",
            "Custom Development for B2C, B2B, and Multi-Vendor Platforms",
          ]}
        />
        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq faqData={Frequently} title="Frequently Asked Questions" />

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

