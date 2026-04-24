import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./ice-cream.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../components/Newcomponet/comman/Milestones";


const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
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

const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
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
    title: "Requirement Analysis",
    description: "We start with detailed requirement gathering and market research to understand your business model. Our experts analyze competitor apps and design a custom ice cream delivery app solution tailored to your goals."
  },
  {
    title: "UI/UX Design & Wireframing",
    description: "Our <a href='https://www.comfygen.com/web-design' class='text-blue-600 font-semibold'>UI/UX design</a> team creates intuitive UI/UX for ice cream apps with smooth navigation, attractive visuals, and engaging user flows, ensuring an enjoyable ordering experience."
  },
  {
    title: "Custom App Development",
    description: "Using modern frameworks, we develop on-demand ice cream delivery apps with real-time tracking, multiple payment options, and AI-powered personalization features."
  },
  {
    title: "API Integration & Payment Gateway",
    description: "We integrate secure payment gateways, GPS tracking APIs, and third-party delivery tools to provide seamless ordering and delivery management."
  },
  {
    title: "Quality Testing & Performance Check",
    description: "Our QA team performs end-to-end app testing to ensure bug-free performance, fast loading speed, and secure transactions across Android and iOS platforms."
  },
  {
    title: "Deployment & App Store Launch",
    description: "We deploy your app on Google Play Store and Apple App Store, ensuring full compliance and optimized performance for maximum visibility and downloads"
  },
  {
    title: "Post-Launch Support & Maintenance",
    description: "Our job doesn’t end at launch. We provide 24/7 app support, updates, and feature upgrades, ensuring your ice cream delivery business app stays competitive."
  }
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







  return (
    <>
      <Head>
        <title>Ice Cream Delivery App Development Company | Comfygen
        </title>
        <meta name="description" content="Comfygen is a trusted ice cream delivery app development company offering AI-powered, secure, and scalable app solutions for startups and enterprises." />

        <meta name="keywords" content="Ice Cream Delivery App Development, On-demand Ice Cream Delivery App Development, White-label Ice Cream Delivery App Development, AI Ice Cream Delivery App Development, On-demand Dessert Delivery App" />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/ice-cream-delivery-app-development"></link>

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />


        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />


        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Ice Cream Delivery App Development Company" />
        <meta name="twitter:description" content="Comfygen Technologies builds custom ice cream delivery apps with GPS tracking, subscriptions, AI personalization, and blockchain security. Perfect for shops, chains & startups." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development.webp" />
        <meta property="og:image:alt" content="Ice Cream Delivery App Development" />
        <meta property="og:url" content="https://www.comfygen.com/ice-cream-delivery-app-development" />
        <meta property="og:title" content="AI-Powered Ice Cream Delivery App Development | Comfygen Technologies" />
        <meta property="og:description" content="Boost your business with AI-powered ice cream delivery app solutions. Get secure payments, real-time tracking & subscription features from Comfygen Technologies experts." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA.jsonLdData)
          }}
        />
      </Head>

     {/* <Header /> */}

      <div className="overflow-hidden ">
        <HeroSectionForAllPages
          heading="Best Ice Cream Delivery App Development Company"
          ptag="Launch a powerful ice cream delivery app with Comfygen and take your business online with confidence. We are a leading Ice cream delivery app development company offering advanced Ice cream delivery app development services, including AI-powered, on-demand, and subscription-based solutions for ice cream shops, startups, and enterprises."
          li="AI-Powered Personalization"
          li1="Real-Time Order & Delivery Tracking"
          li2="Enterprise-Grade Security"
          li3="Scalable & Fully Custom App Solutions"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development_hero.webp"
        />
        <Milestones />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our Ice Cream Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">We offer affordable online Ice cream delivery app development services tailored for ice cream parlors, cafes, dessert startups, and large enterprises. With AI-powered Ice cream delivery app solutions, we help businesses improve operations, drive customer engagement, and streamline order management. Our custom ice cream delivery apps are designed to meet all business needs with innovative, scalable, and visually stunning products.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Your Business Needs an Ice Cream Delivery App"
          description1="The global ice cream market is projected to reach $114.7 billion by 2030, with a growing share driven by online ice cream delivery services. Customers today expect convenience, real-time tracking, and personalized offers, making an Ice cream delivery app development solution a necessity rather than a luxury for ice cream brands, cafes, and dessert startups."
          description2="Whether you operate a standalone ice cream shop, run a multi-chain parlor, or launch a frozen dessert startup, a mobile app can boost your business with AI-powered personalization, subscription-based deliveries, blockchain-secure transactions, and instant notifications."
          description3="The AI-powered Ice cream delivery app development services provided by Comfygen help businesses to increase reach, streamline orders, and maximize customer satisfaction with future-ready digital solutions."
          points={[
            "Streamlines Ice Cream Orders & Subscription Deliveries",
            "Enhances Customer Retention with AI-based Flavor Recommendations",
            "Strengthens Security with Blockchain-Powered Payments",
            "Real-Time Delivery Tracking, Notifications & Order Management"
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/ice-cream-delivery-app-development/ice-cream-delivery-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />





        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  AI-Powered Ice Cream Delivery App Development Solutions
                </h2>
                <p>
                  Comfygen Technologies provides AI-powered Ice Cream Delivery App Development services that help brands, parlors, and startups automate operations, enhance user experiences, and increase customer engagement. Using AI to build smarter, data-driven ice cream delivery platforms, we offer personalized flavor suggestions to predict demand.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left md:grid-cols-3 grid-cols-1">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={title} className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>



        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Ice Cream Delivery App Portfolio"
            description="At Comfygen, we have successfully delivered innovative Ice Cream Delivery App Development projects for global clients. Our portfolio showcases feature-rich, scalable, and AI-powered mobile solutions that help brands deliver frozen treats at the tap of a button."
          />
        </section>

        <CallToAction
          heading="Launch Your Ice Cream Delivery App Today"
          text="Take your ice cream business online with a fast, secure, and feature-rich app. Delight your customers with easy ordering, real-time tracking, and seamless payments while boosting sales and loyalty."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />



        <section className=" lg:py-10 py-10">
          <Features
            grid='4'
            heading='We Develop Ice Cream Delivery Apps With Advanced Panel Features'
            description='Comfygen is among the best ice cream delivery mobile app development firm. We craft feature-rich Ice Cream Delivery Apps that deliver a seamless experience for customers, ice cream shop owners, delivery agents, and administrators. With AI-powered personalization, blockchain-secured payments, and real-time tracking, our apps are designed to transform the ice cream delivery experience.'
            featuresData={JSON_DATA.featuresData}
          />
        </section>


        <TrendsSection
          heading="Technologies We Utilize for Ice Cream Delivery App Development"
          subtitle="Comfygen is a top-notch ice cream delivery mobile app development agency. We leverage the latest technologies to build innovative and scalable ice cream delivery app solutions."
          trends={JSON_DATA.Emerging}
        />


        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">End-to-End Ice Cream Delivery App Development Process</h2>
              <p className="text-base font-normal mt-2">
               Comfygen Technologies is one of the best AI ice cream delivery app development company in India, USA, UK, and UAE. We follow a structured process to deliver high-quality and scalable ice cream delivery app development solutions. From idea to launch, our team ensures smooth execution, advanced features, and reliable performance.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>



        <TechStack
          title="Technology Stack We Use in Your Ice Cream Delivery App"
          description="At Comfygen, we use a modern and reliable technology stack for ice cream delivery app development that ensures scalability, security, and high performance. Our advanced tools and frameworks help us create feature-rich ice cream delivery apps with smooth functionality, real-time tracking, and AI-powered personalization."
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <DeliverySection hideUrl="https://www.comfygen.com/ice-cream-delivery-app-development" />

        <HireDeveloper
          heading="Hire Ice Cream Delivery App Developers"
          text="Want to start your own ice cream delivery business? Hire skilled ice cream delivery <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>mobile app developers</a> from Comfygen to build a safe, fast, and user-friendly mobile app for your brand. We create custom ice cream ordering apps with smart AI suggestions, live GPS tracking, easy subscription plans, and secure blockchain payments."
          text1=""
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experts in ice cream delivery app development",
            "10+ years of experience in on-demand food & delivery apps",
            "AI-powered recommendations & subscription modules",
            "Real-time order tracking with GPS integration"
          ]}
        />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials} />

        {/* <ContactFromCenter /> */}

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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}

