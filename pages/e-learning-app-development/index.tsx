import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  IconBallpen,
  IconBook,
  IconBrain,
  IconLock,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import Script from "next/script";
import JSON_DATA from "./ELearningApp.json";

import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";

const loader = () => <div className="h-96 bg-gray-100 animate-pulse" />;

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const ClientTestimonials = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const Process = [
  {
    title: "Conceptualization",
    description:
      "Every successful eLearning platform begins with a clear vision. Our team works closely with you to understand your goals, target audience, and content structure. As part of our eLearning app development services, we define key features, ensuring a personalized and engaging learning experience.",
  },
  {
    title: "UI/UX Designs",
    description:
      "A compelling UI/UX design is essential for learner engagement. Our talented education app developers in india craft intuitive and visually appealing interfaces that enhance user experience. We focus on responsive design, seamless navigation, and interactive elements to maximize learning efficiency",
  },
  {
    title: "Development",
    description:
      "As an expert custom eLearning software development company, we build scalable and robust learning platforms using the latest technologies. Our developers integrate live classrooms, AI-based recommendations, gamification, and multimedia support to create an interactive and immersive learning environment.",
  },
  {
    title: "Security & Testing",
    description:
      "Security is crucial in eLearning platforms. We implement end-to-end encryption, secure logins, and data protection measures. Our talented education app developers conduct rigorous testing, ensuring that your app meets performance, usability, and security standards before launch.",
  },
  {
    title: "Deployment",
    description:
      "Once your app is fully tested, we manage the deployment across Google Play, App Store, or private servers. As part of our eLearning app development services, we handle app store approvals, configurations, and optimizations, ensuring a smooth and hassle-free launch.",
  },
  {
    title: "Analytics and Insights",
    description:
      "Understanding user engagement is key to improvement. We integrate advanced analytics tools to track learner progress, engagement levels, and course completion rates. These insights help optimize your eLearning platform for a better learning experience and higher retention.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Our commitment goes beyond development. As a trusted E-learning app development company, we offer continuous support, updates, and performance enhancements. Our team ensures your platform remains up-to-date, secure, and scalable as your eLearning business grows.",
  },
];

const technologyData = [
  {
    img: <IconBook stroke={1.5} className="w-12 h-12" />,
    title: "E2C eLearning App Development",
    desc: "If you want to develop a custom E2C eLearning app, our expert mobile app team specializes in creating highly interactive platforms designed for personalized learning experiences. These education apps are perfect for bridging the gap between education and technology.",
  },
  {
    img: <IconSchool stroke={1.5} className="w-12 h-12" />,
    title: "Tutoring App Development",
    desc: "Are you looking to build a custom tutoring app that connects students with expert tutors? Our eLearning app development solutions offer real-time learning, making education more accessible and flexible.",
  },
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />,
    title: "Edtech App Development",
    desc: "Do you want to develop a custom Edtech app, we specialize in creating custom eLearning app development solutions that foster learning in dynamic and engaging ways. Our eLearning app solutions provide to various educational needs, from K-12 to adult learning.",
  },
  {
    img: <IconBallpen stroke={1.5} className="w-12 h-12" />,
    title: "App like Educose",
    desc: "Want to develop an app like Educose for free online coaching apps? Our mobile app development team can build an educational app that supports students preparing for academic and competitive exams.",
  },
  {
    img: <IconLock stroke={1.5} className="w-12 h-12" />,
    title: "Brilliant Pala e-learning",
    desc: "Want to create a custom e-learning app like Brilliant Pala for NEET & JEE aspirants? We provide eLearning app development services that focus on developing apps to help students succeed in their entrance exams.",
  },
  {
    img: <IconUsers stroke={1.5} className="w-12 h-12" />,
    title: "eLearn App",
    desc: "Are you looking to develop an eLearning app? We are the top eLearning app development company in India that creates educational apps that house digitized textbooks under the national curriculum and augment them with multimedia features.",
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Comfygen",
    image: "https://www.comfygen.com/svg/Logo1.svg",
    "@id": "Comfygen",
    url: "https://www.comfygen.com/",
    telephone: "+91-958-786-7258",
    priceRange: "$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
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
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.youtube.com/@ComfygenBusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comfygen",
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
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    brand: "Comfygen Private Limited",
    name: "Best Custom eLearning App Development Company in India & USA",
    image: "https://www.comfygen.com/img/education-for-students-img.svg",
    description:
      "Looking for a custom eLearning app development company in India & the USA? Comfygen delivers custom edtech solutions with AI, AR/VR, and blockchain integration to enhance learning experiences. Build future-proof eLearning apps today!",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1928",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of e-learning apps can you develop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in creating various types of e-learning apps, including online training apps, school apps, corporate training apps, exam preparation apps, language learning apps, mobile learning platforms, and AR/VR educational apps.",
        },
      },
      {
        "@type": "Question",
        name: "What is the eLearning app development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of eLearning app development varies widely, typically ranging from $20,000 to $250,000 or more depending on features and complexity.",
        },
      },
      {
        "@type": "Question",
        name: "How much time does it take to build an educational mobile application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Developing an education mobile application usually takes between 3 to 9 months, depending on complexity, features, and platforms (iOS, Android, Web).",
        },
      },
      {
        "@type": "Question",
        name: "Will the e-learning app be compatible with all devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our apps are designed to be cross-platform compatible, ensuring they work seamlessly across different devices, including iOS, Android, and web platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Can you customize the app for specific learning needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Definitely! We specialize in custom e-learning app development that is specifically designed to address your unique learning goals, whether for schools, corporate training, or niche educational programs.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Custom eLearning App Development Company in India & USA | Comfygen</title>
        <meta
          name="description"
          content="Looking for a top eLearning app development company? Comfygen builds custom online elearning apps with AI, AR/VR, live classes, and advanced analytics for schools, coaching centers, and corporate training."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/e-learning-app-development"
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
          content="Custom E-Learning App Development, Language Learning App Development, On-Demand E-Learning App Development, Kids Educational Games App Development, School App Development, Online Training App Development, E2C eLearning App Development, Tutoring App Development, Edtech App Development"
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:title"
          content="Top eLearning App Development Company in India & USA"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/e-learning-app-development"
        />
        <meta name="og:image" content="og img url" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Comfygen is a leading eLearning app development company in India and the USA, offering custom edtech solutions with AI, AR/VR, and blockchain integration to enhance learning experiences."
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
          content="Best eLearning App Development Company | Comfygen"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a leading eLearning app development company in India & the USA, building AI-powered edtech solutions for students & educators. Get a custom eLearning app today!"
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="eLearning app development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/e-learning-app-development"
        />
        <meta
          property="og:title"
          content="Leading eLearning App Development Company | Build Future-Ready EdTech Apps"
        />
        <meta
          property="og:description"
          content="Comfygen, a trusted eLearning app development company, creates high-performance EdTech solutions integrating AI, AR/VR, and Blockchain. Transform digital learning with personalized, engaging, and scalable apps."
        />
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Top eLearning App Development Company in India & USA"
          ptag="Comfygen is a leading eLearning app development company delivering custom online learning apps for schools, coaching centers, and corporate training. We integrate AI-driven learning, AR/VR classrooms, analytics, and secure scalable platforms to create interactive and future-ready EdTech solutions. Hire expert eLearning app developers to transform your learning ideas into reality."
          ptag1=""
          li="AI-powered personalized learning experiences"
          li1="AR/VR interactive classrooms & immersive content"
          li2="Advanced analytics for student performance tracking"
          li3="Secure, scalable, and feature-rich learning platforms"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/e-learning-app-development-hero-img.webp"
        />
        <Milestones/>
<section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Comprehensive E-Learning App Development Services in India
              </h2>
              <p className="text-base text-center font-normal">
                We're a leading eLearning app development company in India
                dedicated to providing the best eLearning app development
                services.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Leading eLearning app development company in India & USA"
          description1="Comfygen is a leading eLearning app and website development company in India, renowned for providing innovative and reliable on-demand eLearning app development services to clients globally. With over 10+ years of talented education app developers provide the best eLearning app development services in India and the USA. We have successfully delivered 50+ projects annually, making us one of the top custom E-learning mobile app development companies in the region. Our skilled m-learning developers is proficient in creating custom e-learning apps that are scalable, user-friendly, and equipped with advanced features."
          description2="As a prominent eLearning app development company in India, we specialize in developing customized education app solutions that enhance the learning experience, whether for schools, online training platforms, or corporate training apps. We are considered the best eLearning app development services provider in India, USA, UK, and globally because we focus on delivering top-quality mobile apps that align with our client's business goals. Partner with Comfygen to develop a cutting-edge eLearning mobile app and grow your startup E-learning app business with innovative solutions."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        

        <SolutionSec
          heading="E-Learning App Development Solutions We Offer"
          subheading="Elevate Learning Experiences. We transform your education business into engaging eLearning app development solutions that deliver personalized learning, empower educators, and drive impactful results"
          techData={technologyData}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our eLearning App Development Portfolio"
            description="At Comfygen, we are proud to have delivered innovative, user-centric eLearning solutions for clients across various industries. Our portfolio showcases the diverse range of eLearning apps we’ve developed, each offering unique features and tailored experiences for learners and educators."
          />
        </section>

        <div className="py-8">
          <Features
            heading=" We provide Advanced Panel Features for E-learning App Development"
            description="Efficient and feature-rich panels for seamless learning and management. The User Panel enhances the student experience, while the Admin Panel provides complete control over course management and analytics."
            featuresData={JSON_DATA.featuresData}
            grid={2}
          />
        </div>

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our eLearning App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                As a leading E-learning software development agency in India,
                the USA, we follow a strategic and user-centric approach to
                building high-quality learning solutions. Our talented education
                app developers ensure a seamless experience with cutting-edge
                technology and innovative features.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Technology Stack We Use in eLearning App Development"
          description="At Comfygen, we leverage the latest and most reliable technologies to build high-performing, scalable, and secure eLearning apps. Our team uses cutting-edge tools and frameworks to ensure a seamless learning experience for users across the globe."
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Advanced Technologies We Integrate in e-learning Mobile Apps
                </h2>
                <p>
                  Using the advanced latest technologies; we are building a
                  futuristic e-learning application that is making teaching
                  convenient and learning more engaging.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p
                        className=""
                        dangerouslySetInnerHTML={{ __html: decs }}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire our eLearning app developer"
          text="When you hire our e-learning app developer, you are partnering with experts 100% Satisfaction Guaranteed, and Confidentiality developers that Assured who specialize in creating personalized, high-performance educational apps. Whether you're developing an online training app, a school app, or a mobile learning platform, our top eLearning mobile app development team provides solutions customized to meet your unique educational goals."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in Custom E-Learning App Development",
            "Seamless Integration with Learning Management Systems ",
            "Advanced AI/AR/VR Capabilities for Enhanced Learning",
            "Scalable Solutions for Future Growth",
          ]}
        />
        <ClientTestimonials
          heading="Some Words From Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="" />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}
