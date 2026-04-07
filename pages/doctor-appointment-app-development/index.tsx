import styles from "./styles.module.css";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { MdOutlineArrowOutward } from "react-icons/md";
import JSON_DATA from "./doctor-appointment-app-development/doctor.json";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionforHomeTest from "../../components/HeroSectionforHomeTest";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";

import Navbar from "../../components/Navbar";
import Trending from "../../components/Trending";
import TechStacks from "../../components/TechStacks";
import ReviewCard from "../../components/ReviewCard";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Solution"),
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
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)


const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)
const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


const latesttech = [
  {
    // img: <IconBike stroke={1.5} className="w-12 h-12" />,
    title: "ZocDoc Clone App Development",
    desc: "We <a href='https://www.comfygen.com/blog/cost-of-building-a-doctor-appointment-app-like-zocdoc/' class='text-blue-600'>develop a doctor appointment app like ZocDoc</a> that simplify patient-doctor interactions. The app hosts multiple doctor profiles, allowing patients to easily search, select, and book the best consultants, while hospitals and clinics benefit from streamlined appointment management and improved patient engagement."
  },
  {
    // img: <IconCar stroke={1.5} className="w-12 h-12" />,
    title: "Doctor Plus Clone App Development",
    desc: "Our <a href='https://www.comfygen.com/white-label-mobile-app-development' class='text-blue-600'>white-label doctor booking mobile app development</a> team builds advanced Doctor Plus-like apps, designed to simplify on-demand doctor bookings. The platform enhances healthcare workflows with real-time scheduling, appointment reminders, and innovative features tailored to meet both patient and doctor requirements for a smooth, convenient experience."
  },
  {
    // img: <IconBuildingSkyscraper stroke={1.5} className="w-12 h-12" />,
    title: "Lybrate Clone App Development",
    desc: "We create Lybrate-like doctor appointment apps that centralize prescriptions, billing, documents, and appointments. Our clone apps enable doctors to manage their practice efficiently while providing patients easy access to healthcare services, fostering better communication, engagement, and improved overall healthcare experiences."
  },
  {
    // img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "mFine Clone App Development",
    desc: "We build comprehensive mFine-like apps, offering online consultations, lab tests, health packages, skincare programs, scans, and X-rays. These platforms provide patients with holistic healthcare solutions while empowering clinics and hospitals to increase engagement, streamline workflows, and compete effectively in the digital health market."
  },
  {
    // img: <IconBolt stroke={1.5} className="w-12 h-12" />,
    title: "MyCure Clone App Development",
    desc: "Our developers can build enterprise-level MyCure-like apps for multi-specialty clinics, healthcare centers, and diagnostics. These apps function online and offline, offering customizable features, robust patient management, and a scalable solution for healthcare providers seeking advanced digital healthcare management systems."
  },
  {
    // img: <IconBus stroke={1.5} className="w-12 h-12" />,
    title: "Bookmed Clone App Development",
    desc: "We develop Bookmed-like doctor appointment apps with intuitive navigation and streamlined functionality. Patients can select a city, specialty, and book virtual appointments easily. Our readymade doctor appointment app development solution enhances user experience, improves patient retention, and ensures efficient healthcare services for clinics and hospitals."
  },
  {
    // img: <IconPlane stroke={1.5} className="w-12 h-12" />,
    title: "1MG Clone App Development",
    desc: "Our team <a href='https://www.comfygen.com/blog/build-medicine-delivery-app-like-1mg/' class='text-blue-600'>builds 1MG-like healthcare apps</a>, combining doctor consultations, pharmaceutical purchases, Ayurvedic treatments, and healthcare services. The apps are feature-rich, market-friendly, and customizable, helping healthcare businesses expand reach, increase engagement, and stay competitive in the digital health ecosystem."
  },
  {
    // img: <IconShip stroke={1.5} className="w-12 h-12" />,
    title: "HealthTap Clone App Development",
    desc: "We create HealthTap-like virtual healthcare apps, connecting users with doctors by specialty for various medical needs including mental health, elderly care, and pediatric treatment. Our solutions boost patient engagement and accessibility, enabling healthcare providers to grow their business efficiently."
  },
  {
    // img: <IconTruck stroke={1.5} className="w-12 h-12" />,
    title: "Practo Clone App Development",
    desc: "Our doctor app builder builds Practo-like doctor appointment apps, offering next-gen healthcare solutions for a global audience. These apps integrate appointment scheduling, telemedicine, digital prescriptions, and patient management, helping hospitals, clinics, and startups deliver modern, efficient, and engaging healthcare services."
  }
];

export default function Ecommerce(props) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };


  const jsonLdData = [

 

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
        "name": "Doctor Appointment App Development",
        "item": "https://www.comfygen.com/doctor-appointment-app-development"

      }]
    },

    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much does it cost to build a doctor appointment app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average doctor appointment app development cost is $15000-$40000. However, this is the basic cost, which might increase if you integrate more features, customise the app, hire a big team of developers, etc. So the cost of your project depends upon your requirements."
        }
      }, {
        "@type": "Question",
        "name": "Does the doctor appointment app target the local market only?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. It is an online consultation application, so one can also book for online consultation sitting from anywhere. In case the doctor feels like you better visit; he will suggest that you do that. Otherwise, people can choose a city, doctor, speciality, and everything to get the best online doctor consultation."
        }

      }, {
        "@type": "Question",
        "name": "How to build a doctor appointment app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is very clear that you are going to hire healthcare developers in the USA to build the product. But first you must have certain specific industry things; such as GDPR, HIPAA, ISO certification, support for FHIR, HL7, SMART on FHIR information exchange protocols, end-to-end connection encryption, two-factor authentication, Zero Trust or Castle and Moat information security, other Healthcare industry requirements. After having all of the above, at the last you hire a developer who is proficient in his skills and experience."
        }

      }, {
        "@type": "Question",
        "name": "How long does it take to build a doctor appointment app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The duration to build a doctor appointment app depends upon various things; such as how many features to integrate, customization on-going or not, extra designing elements or animation added or not, etc. Basic time to build a doctor appointment app is 2-3 months. If you have a large scale project to provide; that might increase the duration of development up to 5-6 months or more."
        }


      }]
    }
  ];

  return (
    <>
      <Head>
        <title>
       Best Doctor Appointment App Development Company | Comfygen

        </title>

        <meta
          name="description"
          content="Comfygen is the best doctor appointment app development company offering secure, scalable telemedicine and online Appointment solutions for the healthcare industry."
        />


        {/* keywords */}
        <meta name="keywords" content="On-demand Doctor Appointment App Development, Telemedicine App Development, Hospital Appointment App Development, Clinic Appointment App Development, Doctor Marketplace App Development, Doctor Consultation App Development, AI-Powered Doctor Appointment App Development, Blockchain Doctor Appointment App Development, IoT Doctor Appointment App Development" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/doctor-appointment-app-development" />



        {/* <!-- Viewport a/nd Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Doctor Appointment App Development Company | Comfygen Technologies" />
        <meta name="twitter:description" content=" Comfygen Technologies is the best doctor appointment booking app development company that delivers the best AI-powered doctor appointment apps with telemedicine and real-time scheduling for hospitals, clinics, and healthcare startups." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/doctor-appointment-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/doctor-appointment-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/doctor-appointment-app-development.webp" />
        <meta property="og:image:alt" content="Doctor Appointment App Development" />
        <meta property="og:url" content="https://www.comfygen.com/doctor-appointment-app-development" />
        <meta property="og:title" content="On-Demand Doctor Appointment App Development | Comfygen" />
        <meta property="og:description" content="Comfygen offers custom on-demand doctor appointment app development with telemedicine, AI recommendations, and real-time booking to enhance patient engagement and streamline healthcare services." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>

      <Navbar />
      <HeroSectionforHomeTest herosection={JSON_DATA.Herosection} />

  
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Affordable On-Demand Doctor Appointment App Development Services</h2>
              <p className="text-base text-center font-normal">At Comfygen, we offer a comprehensive suite of doctor appointment app development services designed to enhance the healthcare experience for patients, doctors, and providers. As a trusted Doctor Appointment App Development Company, we deliver customized, secure, and scalable solutions that ensure seamless medical appointment scheduling, real-time virtual consultations, and efficient healthcare management.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Invest in Doctor Appointment App Development?"
          description1="Healthcare has changed. Patients expect speed, convenience, and digital access. A doctor appointment app is no longer optional, it’s essential for modern hospitals and clinics."
          description2="With professional doctor appointment mobile app development, healthcare providers can offer instant appointment booking, reduce waiting times, enable online consultations, and streamline daily operations. Everything becomes faster and more organized, for both patients and medical staff."
          description3="The numbers back it up. The global mHealth market was valued at $62.7 billion in 2023, and the online doctor consultation market is projected to reach $158.3 billion by 2030. What this really means is simple: investing in doctor appointment app development isn’t just about technology, it’s about long-term growth and profitability."
          description4="Our healthcare appointment app development solutions help patients book appointments in seconds, consult doctors virtually, receive e-prescriptions, and securely store medical records. At the same time, doctors benefit from better schedule management, reduced no-shows, and improved workflow efficiency."
          description5='With built-in telemedicine, real-time notifications, secure billing, and data protection, a doctor appointment app delivers fast, personalized, and reliable healthcare, right at your fingertips.'
          imageSrc="https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/about-two.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <SolutionSec
          heading="We Offer White-label Doctor Appointment App Development Solutions"
          subheading="Get instant medical attention from expert doctors with our white-label doctor appointment app development solutions. At Comfygen, we deliver personalized, secure, and scalable readymade doctor appointment app development, providing patients quick consultations while fulfilling hospitals’ and clinics’ unique operational needs efficiently."
          techData={latesttech}
        />


        <div className="py-8">
          <Features
            heading="We Build Healthcare Apps with Powerful Patient, Doctor & Admin Panels"
            description="At Comfygen Technologies, we design and develop doctor appointment apps with advanced and easy-to-use panels for patients, doctors, and admins. Our custom app solutions ensure seamless communication, better healthcare management, and enhanced user experience for clinics, hospitals, and startups."
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>

         <Trending
        trendingData={JSON_DATA.trendingData}
         heading="Top-Rated App Development Company Recognized by Global Platforms"
      />


        <div className="mt-10">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Portfolio for Doctor Appointment App Development"
            description="We have successfully delivered powerful doctor appointment app development solutions for hospitals, multi-specialty clinics, diagnostic centers, and healthcare startups across India and the USA. Our portfolio reflects real-world healthcare challenges solved through smart technology and practical design."
          />
        </div>


        <CallToAction
          heading="Build Your Doctor Appointment App Today!"
          text="Take your healthcare services to the next level with a custom doctor appointment app from Comfygen Technologies."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/comfygen-images/home/future-technology-actual-400w.webp"
          imageAlt="Future of Technology"
        />

        <section className="bg-cover bg-no-repeat  w-full"
          style={{ backgroundImage: `url('https://www.comfygen.com/image/bg-sec.avif')` }}>
          <div className="bg-[#5556D1]/20">
            <div className="space-y-8  lg:py-16 py-8 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
              <div className="flex flex-col justify-center items-center mx-auto">
                <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#212121]">
                  How Does Our Doctor Appointment App Work?
                </h2>
                <p className="text-base text-[#212121] text-center">
                  On-demand solutions such as the doctor booking app provide users
                  with convenient access to expert health consultations. Our
                  Doctor appointment app development solutions fulfil the needs of
                  users entirely from finding the best to make a payment and fix
                  the one. Detailed information about the functionality of our app
                  for doctor appointments is provided in the following section.
                  There are some that users need to follow for the process done:
                </p>
              </div>
              <div className="grid  gap-6 lg:grid-cols-2 md:grid-cols-1">
                {JSON_DATA.OnDemandDoctor.map((doctor) => {
                  return (
                    <div
                      key={doctor.num}
                      className="p-8 bg-[#fff] border  transition-all duration-700  group rounded-lg"
                    >
                      <h3 className="text-[#212121] text-2xl font-semibold">
                        {doctor.title}
                      </h3>
                      <p className="text-[#212121] text-base  mt-2">
                        {doctor.decs}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/quote " className="mt-5">
                  <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                    ENQUIRE NOW <MdOutlineArrowOutward />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  The Emerging Technologies We Use for Doctor Appointment App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  At Comfygen Technologies, we leverage advanced technologies to build next-generation doctor appointment apps. Our tech-driven approach ensures high performance, seamless user experience, data security, and intelligent automation for hospitals, clinics, and healthcare startups.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.Emerging.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div key={title} className={` relative`}>
                      <div
                        className={` flex justify-start gap-2 place-items-center relative`}
                      >
                        {/* <Image
                                  src={img}
                                  className="object-cover"
                                  width={35}
                                  height={50}
                                  alt={title}
                                /> */}
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p
                          className="break-all text-white text-start "
                          dangerouslySetInnerHTML={{ __html: decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">End-to-End On-Demand Doctor Appointment App Development Process We Follow</h2>
              <p className="text-base font-normal mt-2">
                At Comfygen Technologies, our Doctor Appointment App Development Company follows a structured and result-driven doctor appointment app development process to deliver secure, scalable, and fully customized healthcare solutions.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        <div
          className="bg-cover bg-no-repeat lg:py-16 py-10 w-full"
          style={{ backgroundImage: `url('https://www.comfygen.com/image/why-choose-bg-img.webp')` }}>
          <div className="">
            <section className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto  space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto ">
                <h2 className=" text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Get Doctor Appointment Booking App At Hospitals or At Home{" "}
                </h2>
                <p className="text-base text-[#212121] md:text-center text-justify tracking-tight">
                  Do you know, these on-demand doctor appointment applications
                  won’t only schedule a meeting with a doctor, but this can work
                  for you either way as well. We believe in client’s
                  satisfaction; so we call up and arrange things exactly how the
                  patient needs.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-14 gap-14 py-10 text-left">
                {JSON_DATA.GetDoctor.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.carditem1} space-y-2 bg-white border rounded-xl border-[#000]/20 p-10`}
                    >
                      <h3 className="text-2xl font-semibold text-[#212121]">{title}</h3>
                      <p className="text-black text-base" >{decs} </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <a href="/contact-us">
                  <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                    Get Started <MdOutlineArrowOutward />
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>
        {/* <TechStack
          title="Technology Stack for Doctor Appointment App Development"
          description="Comfygen Technologies creates secure, scalable, and high-performing doctor appointment apps using the latest technology. Our cutting-edge technology stack make sure seamless functionality, a smooth user experience, and top-tier security."
        /> */}

          <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />


        <HireDeveloper
          heading="Hire Doctor App Builder"
          text="Looking to launch your own doctor appointment app? <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline'>Hire expert doctor appointment mobile app developers</a> from Comfygen to build a secure, scalable, and feature-rich mobile app tailored to your healthcare brand. Our skilled doctor app developers specialize in creating on-demand doctor appointment apps with AI features, telemedicine, and real-time consultation capabilities for hospitals, clinics, and healthcare startups."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Dedicated experts in custom doctor appointment app development",
            "AI-driven doctor recommendation and smart scheduling system",
            "Real-time appointment booking and patient consultation tracking",

          ]}
        />




  <ClientStories />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" "
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


