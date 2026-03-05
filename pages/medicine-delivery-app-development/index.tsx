
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";


import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BusinessSolustion from "../../components/Newcomponet/SectionCompoent/BusinessSolustion";
import AppcardSlider from "../../components/Newcomponet/SectionCompoent/AppcardSlider";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";
// import TechStackSection from "../../components/TechStackSection";

const loader = () => <div className="h-96 bg-gray-100 animate-pulse" />;
const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { loading: loader, ssr: true }
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
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

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
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
const ConsultancyApproach = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);






export default function Ecommerce(props:any) {
  let { initialData } = props;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

  let { Chartacterstics } = JSON_DATA;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };



  return (
    <>
      <Head>
        <title>
            Medicine Delivery Development Company | Medicine Delivery App Design Services
        </title>
        <meta
          name="description"
          content="Comfygen is the top medicine delivery app development company that builds AI-based medicine delivery apps for pharmacies and startups."
        />

        <meta
          name="keywords"
          content="Medicine Delivery App Development, Medicine Delivery App Development Company, Medicine Delivery App Development Services, Best Medicine Delivery App Development Company, Best Medicine Delivery App Development, Medical Delivery Application Development Services, Medical Delivery Application Development Company, Online Medicine Delivery App Development Company, Medicine Doorstep Delivery App Development, Custom Medicine Delivery App Development Company, Medicine Delivery App Development Solution, Medicine Delivery App Developers "
        />

        {/* <!-- Canonical Tag --> */}
        <link
          rel="canonical"
          href="https://www.comfygen.com/medicine-delivery-app-development"
        />

        {/* <!-- Robots → */}
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
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

        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}
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

        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medicine Delivery App Development Services | Comfygen"
        />
        <meta
          name="twitter:description"
          content=" Comfygen develops robust on-demand medicine delivery apps designed for pharmacies, hospitals, and startups. Ensure fast deliveries, real-time order tracking, and secure digital payments."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/media/og-images/medicine-delivery-app-development-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta
          property="og:image"
          content="https://www.comfygen.com/media/og-images/medicine-delivery-app-development-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/media/og-images/medicine-delivery-app-development-og.webp"
        />
        <meta
          property="og:image:alt"
          content="Medicine Delivery App Development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/medicine-delivery-app-development"
        />
        <meta
          property="og:title"
          content="On-Demand Medicine Delivery App Development | HIPAA-Compliant Solutions"
        />
        <meta
          property="og:description"
          content="Comfygen develops robust on-demand medicine delivery apps designed for pharmacies, hospitals, and startups. Ensure fast deliveries, real-time order tracking, and secure digital payments."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Advanced Medicine Delivery App Development Services"
          ptag="As a leading AI-powered medicine delivery app development company in India, we help pharmacies, startups and healthcare brands launch reliable and easy-to-use online medicine delivery apps. "
          ptag1="Comfygen Technologies provides advanced medicine delivery app development services for businesses looking to build powerful pharmacy app solutions. Our developed top-tier pharmacy apps are designed to simplify prescription uploads, enable real-time order tracking, and ensure seamless doorstep delivery—making your online pharmacy business more efficient, organized, and customer-focused."
          li="Custom & White-Label Solutions"
          li1="Easy Prescription Upload"
          li2="Real-Time Order Tracking"
          li3="Quick Reorders & Smart Delivery System"
          ptag3=""
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/your-partner-in-medicine-ordering-app-development-hero-img.webp"
        />

        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Full-Stack Medicine Delivery App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen Technologies is one of the top custom medicine delivery app development companies, providing exceptional AI-driven pharmacy delivery app development services to startups, pharmacies, and healthcare businesses. Our qualified medicine app developers have years of experience in the pharmacy industry and build high-quality medicine delivery apps. These solutions are designed to meet real customer needs while fully complying with healthcare regulations and standards.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          heading="Why Invest in Medicine Delivery App Development"
          description1="Investing in medicine delivery app development helps pharmacies, startups, and healthcare brands bring their services online with faster delivery, easy prescription handling, and improved customer convenience. A well-built medicine delivery app offers smooth ordering, secure payments, and real-time tracking—making the entire process simple for both customers and businesses."
          description2="With the rapid rise of digital healthcare, online medicine delivery is becoming a preferred choice for millions. Growing demand, increased mobile usage, and the success of platforms like online ePharmacy apps show how strong this market is. By adopting a custom and scalable medicine delivery app, businesses gain better reach, higher customer engagement, and a strong competitive advantage in the digital pharmacy space."
          description3="Let’s create your next-gen medicine delivery app"
          li1='On-Demand & 10-Minute Medicine Delivery Capabilities'
          li2='Custom & White-Label App Development by Expert Developers'
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Contact Us Now"
        />

        {/* <TechStackSection/> */}
        <BusinessSolustion
          imageSrc="https://www.comfygen.com/comfygen-images/medicine-delivery-app-development/aI-powered-medicine-delivery-app-development.webp"
          BusinessSolustion={JSON_DATA.BusinessSolustion}
        />

        <AppcardSlider
          heading="Advanced Medicine Delivery App Clone Solutions We Provide"
          description="Looking to launch a best medicine delivery app like leading pharmacy platforms? Our medicine delivery app clone development solutions offer ready-to-launch, secure, and fully customizable apps tailored to your healthcare business goals."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Medicine Delivery App Development Portfolio"
            description="Below are some of our featured medicine delivery and healthcare app projects that showcase our expertise, innovation, and commitment to building high-performing digital pharmacy delivery app solutions."
          />
        </section>

        <CallToAction
          heading="Build Your AI-Powered Medicine Delivery App Now"
          text="Leverage AI features and smart workflows to create a modern, intelligent delivery platform."
          buttonText="Request a Quote"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <div className="py-8">
          <Features
            heading="Key Features of Our Medicine Delivery Apps"
            description="Our medicine delivery apps are designed to simplify ordering, improve delivery accuracy, and enhance the overall customer experience. Each module—User App, Store App, Delivery App and Admin Panel—is built with powerful features that help pharmacies run operations smoothly and efficiently."
            featuresData={JSON_DATA.featuresData}
            grid={4}
          />
        </div>

        {/* <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Trending Technologies We Leverage for Online Medicine Delivery
                  App Development
                </h2>
                <p className="text-white text-center">
                  Comfygen is a brilliant custom medicine delivery app
                  development company that uses the latest technologies to build
                  a next-gen online medicine delivery app. Our tech-driven
                  pahrmcay solutions improve automation, user experience, and
                  operational efficiency for pharmacies and healthcare startups.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.FoodAppMaker.map((elem, index) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={index} className={` relative`}>
                      <div
                        className={` flex justify-start  place-items-center relative`}
                      >
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="">
                        <p
                          className=" text-white text-start "
                          dangerouslySetInnerHTML={{ __html: decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section> */}

        {/* <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        /> */}

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Agile Development Process For Building High-Performing Medicine Delivery Apps
              </h2>
              <p className="text-base font-normal mt-2">
                We follow a streamlined and agile development process to build secure, scalable, and high-performing medicine delivery apps. Our approach ensures faster delivery, smooth communication, and continuous improvements throughout the project. From understanding your business goals to launching a fully functional online pharmacy app, we keep everything transparent and efficient.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        <TechStack
          title="We Craft Scalable and Smart Medicine Delivery Apps With an Advanced Tech Stack"
          description="We use a modern, secure, and scalable technology stack for medicine delivery mobile app development solution. Our backend, frontend, and integration frameworks ensure fast performance, effortless user experience, secure data handling, and smooth scalability to support growing online pharmacy and medical delivery platforms."
          filterCategory={["crypto"]}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <div className="py-5">
          <ClientStories />
        </div>

        <HireDeveloper
          heading="Hire a Top-Rated Medicine Delivery App Developer"
          text="Hire qualified medicine delivery app developers from Comfygen Technologies, a trusted <a href='https://www.comfygen.com/healthcare-app-development' class='underline font-semibold'>healthcare app development company</a> to build secure, scalable, and high-performance medicine delivery solutions tailored to your business needs."
          text1="Our skilled <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>pharmacy mobile app developers</a> specialize in medicine delivery app development with real-time tracking and secure payment integrations, delivering cost-effective, compliant, and future-ready healthcare applications that help your business grow confidently."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Proven expertise in healthcare delivery app development",
            "Compliance with healthcare standards (HIPAA, GDPR)",
            "Secure, scalable, and user-friendly app solutions"
          ]}
        />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={JSON_DATA.Frequently} />

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
