import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/whitelabelmobileappdevelopment.json";
import LazyLoad from "react-lazy-load";
import {
  IconApps,
  IconBrain,
  IconCloud,
  IconCurrencyBitcoin,
  IconReportSearch,
  IconSignal5g,
} from "@tabler/icons-react";
import Header from "../Newcomponet/layout/Header";
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages";
import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
import Sponser from "../Newcomponet/comman/Sponser";
import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
import ConsultancyApproach from "../Newcomponet/SectionCompoent/ConsultancyApproach";
import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
import TechStack from "../Newcomponet/SectionCompoent/TechStack";
import LatestTechnology from "../Newcomponet/SectionCompoent/LatestTechnology";
import IndustriesServe from "../Newcomponet/SectionCompoent/IndustriesServe";
import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
import ClientTestimonials from "../Newcomponet/SectionCompoent/ClientTestimonials";
import Faq from "../Newcomponet/SectionCompoent/Faq";

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
      name: "White Label Mobile App Development",
      item: "https://www.comfygen.com/white-label-mobile-app-development",
    },
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

const ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "White Label App Development Services",
  provider: {
    "@type": "Organization",
    name: "Comfygen Technologies",
    url: "https://www.comfygen.com/",
  },
  description:
    "Want to launch an app fast under your own brand? We offer custom white label app development that saves time and fits your business.",
  url: "https://www.comfygen.com/white-label-mobile-app-development",
  mainEntityOfPage:
    "https://www.comfygen.com/white-label-mobile-app-development",
  areaServed: "Global",
  serviceType: [
    "Custom White Label App Development",
    "White Label Mobile App Builder",
    "On-Demand White Label App Development",
    "White Label App Development Services for agency, startup, or enterprise",
    "White Label App Solutions",
  ],

  sameAs: [
    "https://www.facebook.com/comfygen.technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies",
    "https://www.linkedin.com/company/comfygen-technologies",
  ],
};

const ProductSchema = {
  "@context": "http://www.schema.org",
  "@type": "Product",
  brand: "Comfygen Technologies",
  Name: "Best White Label Mobile App Development",
  image:
    "https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/white-label-mobile-app-development-about.webp",
  description:
    "Looking for a trusted app team? We create branded, ready-made apps that are easy to use, easy to manage, and fast to launch.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is white label mobile app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means we build a complete mobile app for you that’s ready to launch. You can add your brand name, logo, and colors to make it look like your own. It saves time, cost, and helps you go live faster.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the app with my brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can fully customize the app. You can change the logo, text, design, colors, and more. Our white label apps are made to look like they were built just for your business.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can launch your white label app in just 2 to 3 weeks. Since the app is already built, we only need to add your brand and make a few changes to match your needs.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with many industries like food delivery, fitness, eLearning, healthcare, real estate, taxi booking, and eCommerce. Our apps are flexible and suitable for small businesses, startups, and large companies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we do. After the app is live, we help with updates, bug fixes, and support. We make sure your app keeps working smoothly and stays up-to-date with the latest features.",
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

  const Process = [
    {
      title: "Discovery & Requirement Analysis",
      description:
        "We start by understanding your business goals, target audience, and functional needs. Our team outlines the right features and flow, setting the foundation for your white label mobile app development project with a focus on speed, customization, and scalability.",
    },
    {
      title: "UI/UX Branding",
      description:
        "We craft visually engaging and brand-aligned designs. As part of our white-label mobile app development services, we personalize the app's layout, colors, and icons—ensuring your business app feels uniquely yours and aligns with your business identity.",
    },
    {
      title: "Backend & Feature Integration",
      description:
        "Our expert white-label mobile app developers integrate essential features like chat, payments, user profiles, and more. Using modern tech stacks, we ensure your white label app development is smooth, secure, and flexible to connect with APIs and external systems.",
    },
    {
      title: "App Customization & White Labeling",
      description:
        "With our white label app builder approach, we customize everything from splash screens to in-app content. Your app is fully branded using your business name, logo, and theme—providing a ready-to-market white label mobile app solution.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "To ensure flawless performance, each app undergoes strict testing procedures. Our mobile app development team performs functionality, security, and device compatibility checks—delivering reliable, bug-free results you can confidently launch.",
    },
    {
      title: "App Store Deployment",
      description:
        "We take care of publishing your white label app under your brand. From asset submission to compliance checks, our team manages the end-to-end deployment process—making us a top white-label mobile app development and design service provider you can trust.",
    },
    {
      title: "Post-Launch Support & Maintenance",
      description:
        "Our work doesn’t end at launch. We provide regular updates, technical fixes, and performance monitoring to keep your app optimized. As one of the best white-label mobile app builders, we ensure your product stays current and competitive.",
    },
  ];

  const latesttech = [
    {
      img: <IconBrain stroke={1.5} className="w-12 h-12" />,
      title: "AI & Machine Learning",
      desc: "We provide <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ai-development' >AI/ML app development</a> to help automate functions like app testing, performance optimization, and behavior analysis. These technologies enhance user experience, increase retention, and reduce manual errors.",
    },
    {
      img: <IconReportSearch stroke={1.5} className="w-12 h-12" />,
      title: "Augmented Reality (AR) & Virtual Reality (VR)",
      desc: "AR allows users to interact with products virtually before purchasing, while VR offers immersive digital experiences. Both technologies boost user engagement and add a modern edge to your white label apps.",
    },
    {
      img: <IconSignal5g stroke={1.5} className="w-12 h-12" />,
      title: "5G Technology",
      desc: "We develop mobile apps optimized for 5G, delivering faster loading times, smoother performance, and real-time responsiveness, giving your users a premium experience.",
    },
    {
      img: <IconCloud stroke={1.5} className="w-12 h-12" />,
      title: "Big Data Solutions",
      desc: "By leveraging modern databases like MongoDB, Cassandra, and Hadoop, we manage large-scale data efficiently. This reduces operational costs and improves the overall speed and scalability of your app.",
    },
    {
      img: <IconCurrencyBitcoin stroke={1.5} className="w-12 h-12" />,
      title: "Blockchain Integration",
      desc: "Our team integrates <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/blockchain-development' >blockchain technology</a> to enhance app security, transparency, and data integrity. It’s ideal for apps that handle transactions or sensitive data, offering added peace of mind for your users.",
    },
    {
      img: <IconApps stroke={1.5} className="w-12 h-12" />,
      title: "Internet of Things (IoT)",
      desc: "We <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/iot-development-company' >build connected IoT mobile apps</a> that sync with smart devices, allowing you to tap into the growing IoT ecosystem. From home automation to wearable tech, your white label app can be as connected as your audience needs.",
    },
  ];

  const technologyData = [
    {
      title: "Ready-to-Launch Architecture",
      desc: "Our top-rated white-label apps are built on a ready-to-launch framework, helping you reduce app development time and cost. This scalable architecture ensures faster deployment, making white label mobile app development ideal for startups, agencies, and enterprises looking to go live quickly.",
    },
    {
      title: "Multi-language & Currency Support",
      desc: "Reach global users with built-in multi-language and multi-currency support. Our white label mobile apps can be localized easily, offering seamless experiences for international audiences while supporting regional languages and payment preferences.",
    },
    {
      title: "In-app Chat & Push Notifications",
      desc: "Keep users engaged with in-app chat, real-time messaging, and push notifications. These features enhance communication, drive user retention, and add value to your white label mobile application by keeping your audience informed and active.",
    },
    {
      title: "Analytics & Admin Dashboard",
      desc: "Track user activity and app performance with powerful analytics tools and an intuitive admin dashboard. With our white label mobile application development services, you gain full control and real-time insights to improve decisions and enhance user experience.",
    },
    {
      title: "Payment Gateway Integration",
      desc: "We integrate secure and reliable payment gateways like Stripe, Razorpay, and PayPal. Our white label mobile apps support one-time, recurring, and multi-currency payments—ensuring smooth and trusted transactions for your customers.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          White Label Mobile App Development Company | White Label App Builders
        </title>

        <meta
          name="description"
          content="Launch branded apps faster with Comfygen’s white label mobile app development services. Custom, scalable, and cost-effective solutions for iOS & Android. Hire a white label app developer."
        />

        <meta
          name="keywords"
          content="Custom White Label App Development, White Label Mobile App Builder, On-Demand White Label App Development, White Label App Development Services for agency, startup, or enterprise, White Label App Solutions"
        />

        <meta
          property="og:title"
          content="White Label Mobile App Development | Rebrandable App Solutions - Comfygen"
        />
        <meta
          property="og:description"
          content="Launch your branded app quickly with Comfygen's white label mobile app development—complete customization, full ownership, and fast go-to-market solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/white-label-mobile-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/white-label-mobile-app-development-og.webp"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="og:locale" content="en_US" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434" />
        <meta name="og:longitude" content="75.787271" />
        <meta property="fb:page_id" content="110909321596135" />

        <meta
          name="twitter:title"
          content="White Label Mobile App Development Services | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Rebrandable mobile app development services with full customization and expert support. Launch your app fast with Comfygen."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/white-label-mobile-app-development-og.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="canonical"
          href="https://www.comfygen.com/white-label-mobile-app-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-us" />
        <meta name="author" content="Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Private Limited" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="abstract"
          content="White Label Mobile App Development Company"
        />
        <meta
          name="summary"
          content="Rebrandable White Label App Development Solutions from Comfygen"
        />
        <meta
          name="category"
          content="White Label Mobile App Development Company"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "White Label Mobile App Development Company | Comfygen",
              url: "https://www.comfygen.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
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
                {
                  "@type": "Person",
                  name: "Saddam Husen",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
                addressLocality: "Vaishali Nagar",
                addressRegion: "Jaipur, Rajasthan",
                postalCode: "302021",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91 9587867258",
                email: "sales@comfygen.com",
              },
              areaServed: ["IN", "US", "UK", "UAE", "AU", "CA"],
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

      <div className="">
        <HeroSectionForAllPages
          heading="White Label Mobile App Development Company"
          ptag="Comfygen is a trusted white label mobile app development company offering ready-to-launch and fully customizable mobile app solutions. Our white label mobile app development services help startups, agencies, and enterprises launch feature-rich apps under their own brand—quickly, affordably, and without the need to build from scratch."
          li="Customizable Apps for iOS & Android"
          li1="Fast Time-to-Market with Pre-Built Architecture"
          li2="Ongoing Support & Easy Scalability"
          li3="Ideal for Agencies, Startups & Tech Partners"
          bgImage="https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/white-label-mobile-app-development-hero.webp"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
        />
        {/* <ContactFromCenter /> */}
        <AboutSection
          title=""
          heading="White Label App Development Company for Agencies, Startups & Enterprises"
          description1="White label mobile app development allows businesses to launch ready-made, customizable apps under their own brand name—without investing time or resources in building from scratch. It’s the smartest way to enter the app market quickly with full control over your brand identity."
          description2="As a leading white label <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/mobile-app-development' >mobile app development company</a>, we help agencies, startups, and enterprises scale faster by providing fully functional, rebrandable apps. You get all the core features, user-friendly design, and powerful backend—ready to launch and tailored to your audience."
          description3="With fast deployment, easy customization, and end-to-end support, our white label solutions are ideal for anyone looking to save development time, reduce costs, and stay ahead of the competition."
          imageSrc="https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/white-label-mobile-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <Sponser />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >End-to-End White Label Mobile App Development Services Tailored for Your Brand
              </h2>
              <p className="text-base text-center font-normal">At Comfygen, we offer end-to-end white label mobile app development services that cover everything from app design to deployment. Whether you're launching your own app or reselling under your brand, our white label mobile application solutions are tailored to meet your business goals quickly and affordably.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/tutor-apps-image.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Portfolio of Successful Mobile App Projects"
            description="Showcasing innovative, user-focused apps crafted with precision and creativity, each project reflects our dedication to excellence and client satisfaction."
          />
        </section>

        <CallToAction
          heading="Ready to Launch Your Own Branded Mobile App?"
          text="Let us build a white label app tailored to your business goals."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our White Label App Development Process</h2>
              <p className="text-base font-normal mt-2">
                At Comfygen, we follow a structured process to deliver top-notch white-label mobile app solutions that are scalable, secure, and ready to launch. As an affordable white-label mobile app development agency, we help you build fully branded apps quickly with our proven and flexible approach.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          customTechData={null}
          title="Full Stack Technology for Scalable White Label App Development"
          description="We follow a full-stack development approach to build flexible, scalable white label mobile apps. From UI to backend, DevOps to QA, we deliver rebrandable, high-performance apps tailored to your industry and business goals. Our solutions are secure, fast, and built to meet today’s and tomorrow’s digital demands."
        />


        <LatestTechnology
          heading="Adopting the Latest Tech Trends in White Label App Development"
          subheading="We believe in building mobile application solutions that aren’t just relevant today but remain powerful and adaptable for tomorrow’s digital world. We stay ahead of the curve by integrating the latest technologies into our white label mobile app development process—ensuring your app is innovative, competitive, and future-ready."
          techData={latesttech}
        />
        <IndustriesServe
          heading="Tailored White Label App Solutions for Every Industry"
          description="Comfygen Technologies offers white label mobile app development services for a variety of industries. We provide white label app solutions tailored to your specific industry needs, whether you are launching a startup, updating a business, or expanding your digital reach."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire the Best White Label Mobile App Builder"
          text="Looking to launch your mobile app fast and under your brand? Hire the best <a class='underline font-semibold' href='https://www.comfygen.com/hire-mobile-app-developer'>white label mobile app developer</a> at Comfygen and take your business to market with a fully branded, ready-to-use solution. We design, develop, and customize mobile apps that align with your goals—no coding or delays."
          text1="As a trusted on-demand white label mobile app development company, we help startups, agencies, and enterprises get scalable, high-performance apps with full rebranding flexibility. Whether you want a food delivery app, eLearning platform, or on-demand service app—we’ve got the right solution for you."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Ready-to-Deploy White Label App Solutions",
            "Full Customization with Your Branding",
            "Fast Turnaround Time with End-to-End Support",
            "Expertise in iOS & Android Platforms",
            "Cost-Effective and Scalable for Any Industry",
          ]}
        />

        <ClientTestimonials
          heading="What Our Clients Say"
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
