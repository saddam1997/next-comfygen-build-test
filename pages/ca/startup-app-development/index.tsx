import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/startApp.json";

import Navbar from "../../../components/Navbar";
import HeroSectionforHome from "../../../components/HeroSectionforHome"
import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../../components/Newcomponet/comman/Milestones";
import WhoCanStart from "../../../components/Newcomponet/SectionCompoent/WhoCanStart";
import WhyChoose from "../../../components/Newcomponet/SectionCompoent/WhyChooseUs";
import ClientStories from "../../../components/Newcomponet/SectionCompoent/ClientStories";
import ClientTestimonials from "../../../components/Newcomponet/SectionCompoent/ClientTestimonials";

const AboutSection = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/AboutSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

import ReviewCard from "../../../components/ReviewCard";

const ServicesSec = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ConsultancyApproach = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Portfolio = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/Portfolio"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const LatestTechnology = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/LatestTechnology"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ProcessSec = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const IndustriesServe = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/IndustriesServe"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const HireDeveloper = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const CallToAction = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/CallToAction"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Faq = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/Faq"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const TechStack = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/TechStack"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





const WhoCanStartCards = [
  {
    heading: "MIdea-Stage Startup App Development",
    description: "At the idea stage, we help startups turn concepts into clear app strategies. Our team supports idea validation, feature planning, and UI/UX wireframes to ensure your product is market-ready. This approach reduces risk and sets a strong foundation for successful startup app development.",
  },
  {
    heading: "MVP & Prototype Development",
    description: "Our startup MVP app development focuses on building core features with fast development and lower cost. We help startups launch quickly, test real user feedback, and refine the product before full-scale investment, ensuring smart and cost-effective growth.",
  },
  {
    heading: "Growth-Stage App Scaling",
    description:
      "As your startup gains users, we provide scalable app development solutions to handle higher traffic and performance needs. Our team optimizes app speed, adds advanced features, and improves security to support smooth growth and better user experience.",
  },
  {
    heading: "Enterprise-Ready Startup Solutions",
    description: "For mature startups, we deliver enterprise-ready application development with advanced security, cloud scalability, and system integrations. These solutions support large user bases, complex workflows, and long-term business expansion.",
  },
];

const jsonLdData = [

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Startup App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/"
    },
    "description": "Launch scalable mobile & web apps with Comfygen. We provide startup app development, MVP solutions, SaaS apps & dedicated developers.",
    "url": "https://www.comfygen.com/ca/startup-app-development",
    "mainEntityOfPage": "https://www.comfygen.com/ca/startup-app-development",
    "areaServed": "Global",
    "serviceType": [
      "Startup Business App Development",
      "MVP App Development for Startups",
      "Product Development for Startups",
      "Startup Software Development",
      "Startup Web App Development",
      "MVP App Development for Startups",
      "Custom Application Development for Startups",
      "SaaS Product Development for Startups",
      "UI/UX Design for Startup Apps"

    ],

    "sameAs": [
      "https://www.facebook.com/comfygen.technologies",
      "https://x.com/Comfygen_Tech",
      "https://www.instagram.com/comfygen_technologies",
      "https://www.linkedin.com/company/comfygen-technologies"

    ]
  },

  {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.comfygen.com"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Startup App Development",
      "item": "https://www.comfygen.com/ca/startup-app-development"

    }]
  },
  {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How much does startup app development cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of startup app development depends on app features, platform (Android, iOS, web), design complexity, and technology used. A basic MVP app may cost less, while a full-featured startup app costs more. We offer flexible pricing to fit startup budgets."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take to build a startup app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The development timeline varies based on app complexity. A simple MVP can take 8–12 weeks, while a fully custom startup app may take 3–6 months. We follow an agile approach to ensure faster delivery."
      }

    }, {
      "@type": "Question",
      "name": "Do you provide MVP development for startups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in MVP app development for startups. Our MVP solutions focus on core features to help startups validate ideas, launch quickly, and collect real user feedback with minimal investment."
      }

    }, {
      "@type": "Question",
      "name": "Can you scale the app after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We build apps with scalable architecture, allowing easy upgrades, new features, and performance optimization as your startup grows. Post-launch support and scaling services are also available."
      }

    }, {
      "@type": "Question",
      "name": "Do you provide post-launch support and maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer complete post-launch support, including app updates, performance monitoring, security improvements, and feature enhancements to ensure long-term success."
      }

    }]
  }







];

export default function Mobile(props) {
  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };


  const Process = [
    {
      title: "Idea Validation & Requirement Analysis",
      description:
        "We analyze your startup idea, target users, and business goals to define clear app requirements.",
    },
    {
      title: "Market Research & Feature Planning",
      description:
        "Our team studies competitors and market trends to plan features that deliver real value.",
    },
    {
      title: "UI/UX Design & Wireframing",
      description:
        "We design intuitive UI/UX layouts and wireframes to ensure smooth navigation and better user experience.",
    },
    {
      title: "MVP or Full App Development",
      description:
        "Our developers build Minimal Viable Product (MVP) or full apps using scalable architecture and modern startup app development technologies.",
    },
    {
      title: "Backend Development & API Integration",
      description:
        "We create secure backend systems and integrate APIs for smooth performance and data management.",
    },
    {
      title: "Quality Testing & App Deployment",
      description:
        "We test apps for performance, security, and usability before deploying them on app stores.",
    },
    {
      title: "Post-Launch Support & App Scaling",
      description:
        "We provide ongoing support, updates, and scaling solutions to support your startup’s growth.",
    },
  ];



  return (
    <>
      <Head>
        <title>
           Top Startup App Development Company in Canada | App Development For Startup
        </title>
        <meta
          name="description"
          content="Comfygen is a leading startup app development company in Canada offering scalable startup app development services, MVP development, and custom mobile apps to help founders launch and grow faster."
        />

        <meta name="keywords" content="startup business app development, startup app development, mvp app development for startups, product development for startups, startup software development, startup web app development, custom application development for startups, saas product development for startups, ui ux design for startup apps"/>

        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/startup-app-development"
        />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Startup App Development Services for Startups & Entrepreneurs" />
        <meta name="twitter:description" content=" Build scalable mobile and web apps with Comfygen. We offer startup app development, MVP, SaaS solutions & dedicated developers." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/startup-app-development/Startup-App-Development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/startup-app-development/Startup-App-Development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/startup-app-development/Startup-App-Development.webp" />
        <meta property="og:image:alt" content="Startup App Development" />
        <meta property="og:url" content="https://www.comfygen.com/ca/startup-app-development" />
        <meta property="og:title" content="Custom Startup App Development Company" />
        <meta property="og:description" content="Comfygen helps startups build secure, scalable apps. Get mobile apps, web apps, MVP development & post-launch support." />




        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />

      </Head>
       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      
     
        <Milestones />
        <AboutSection
          title="About Company"
          heading="Transform Startup Business Ideas into Monetized App Solutions"
          description1="In today’s digital-first world, mobile apps have become a key growth driver for startups. The global mobile app market is expanding rapidly, with app downloads expected to cross 255 billion by 2025, showing strong user demand and engagement. "
          description2="With over 78% of the global population using smartphones and users spending 5+ hours daily on apps, startups have a massive opportunity to grow digitally."
          description3='Mobile app development benefits startup businesses in the following ways:'
          points={[
            "Reach customers anytime, anywhere through smartphones",
            "Deliver smooth user experiences that build trust and loyalty",
            "Generate revenue via subscriptions, ads, and in-app purchases",
            "Collect user data to improve products and business decisions"
          ]}
          description6="Startups need mobile apps to succeed in today's tech-first market - they're monetizable solutions that help them compete and grow. By transforming your business idea into a high-quality app, you can unlock recurring income, attract investors, and establish a strong presence in a digitally driven economy."
          imageSrc="https://www.comfygen.com/comfygen-images/startup-app-development/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Custom Startup App Development Services We Offer
              </h2>
              <p className="text-base text-center font-normal">As a top-rated app development company for startups, we help startups build scalable, secure, and revenue-ready digital products. Our best app development services for startups & entrepreneurs cover mobile apps, web applications, MVPs, and SaaS product solutions designed to validate ideas, attract users, and support long-term business growth.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <WhoCanStart
          title="App Development Solutions for Every Startup Stage"
          description="As an experienced startup app development agency, we provide flexible app development solutions tailored to each stage of your startup journey. Whether you are validating an idea, launching an MVP, scaling your app, or building an enterprise-ready product, our app development for startups ensures long-term growth, performance, and scalability."
          cards={WhoCanStartCards}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Startup App Development Portfolio"
            description="We have successfully delivered the best app development solutions for startups across multiple industries. Our portfolio highlights scalable mobile and web apps designed to solve real business challenges, improve user engagement, and drive revenue growth."
          />
        </section>
        <CallToAction
          heading="Launch Your Startup App with Experts"
          text="Turn your startup idea into a scalable, secure, and market-ready app with expert developers."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <section className="py-10 lg:py-20 bg-[#5556D1] mt-8">
          <div className="2xl:w-10/12 w-full lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto sm:py-8 p-2">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Advanced Technologies We Use for Startup Business App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  As a trusted startup app development company, we use advanced and future-ready technologies to build scalable, secure, and high-performance applications. Our startup business app development solutions enable startups to innovate faster, enhance user experience, and gain a competitive edge in the market.
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

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Startup App Development Process</h2>
              <p className="text-base font-normal mt-2">
                We are a reliable startup mobile and web app development company that follows a simple and transparent app development process to help startups launch quickly, reduce risks, and scale confidently.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="">
          <TechStack
            title="Tech Stack We Use for Startup App Development"
            description="At Comfygen, we build scalable, secure, and high-performance mobile and web apps using a modern tech stack. Leveraging cutting-edge technologies and innovative frameworks, we ensure your apps are future-ready, efficient, and growth-oriented."
          />
        </section>

        <IndustriesServe
          heading="Scalable Startups and Entrepreneurs App Development for Every Industry"
          description="We provide startup-friendly mobile app development services across multiple industries, helping businesses transform ideas into powerful digital solutions. Our apps are scalable, secure, and tailored to meet specific industry needs."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientStories />

        <HireDeveloper
          heading="Hire Our Dedicated App Developers for Your Advanced Startup Business Project"
          text="Looking to build a scalable and high-performing app for your startup? Hire dedicated <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>startup mobile app developers</a> from Comfygen to turn your startup idea into a powerful digital product. Our experienced developers specialize in startup software development, delivering secure, custom, and growth-ready mobile and web applications tailored to your business goals."
          text1="We help startups accelerate development, reduce costs, and launch faster with full-time, skilled developers who work as an extension of your team."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Proven expertise in startup app development services",
            "Skilled in mobile, web, MVP, and SaaS app development",
            "Strong focus on scalability, security, and performance",
            "Flexible hiring models with dedicated technical support",
          ]}
        />

         <ReviewCard testimonials={JSON_DATA.ReviewData}/>

        {/* <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        /> */}

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions"
        />

        <BlogSection initialData={initialData} />
     
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
