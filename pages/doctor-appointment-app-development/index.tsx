import React, { useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/doctor.json";
import styles from "./styles.module.css";
import LazyLoad from "react-lazy-load";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import TechStack from "../components/TechStack";
import PortfolioSec from "../components/PortfolioSec";
import ProcessSec from "../components/ProcessSec"; 
import HireDeveloper from "../components/HireDeveloper";
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import BlogSection from "../components/BlogSection";
import ConsultancyApproach from "../components/ConsultancyApproach";
import { MdOutlineArrowOutward } from "react-icons/md";
import SolutionSec from "../componentsnew/SolutionSec";
// import { IconBike, IconBolt, IconBriefcase, IconBuildingSkyscraper, IconBus, IconCar, IconPlane, IconShip, IconTruck } from "@tabler/icons-react";
import WhyChoose from "../components/WhyChooseUs";
const Tech = dynamic(() => import("./components/tech1"), {
  loading: () => <p>Loading...</p>,
});

const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);


const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/img/doctor-appointment-portfolio-image.webp",
      head: "Doctor Appointment App",
      name: "At Comfygen Private Limited, we excel at innovative doctor appointment apps designed to make healthcare easier for patients and healthcare professionals. Our apps boast user-friendly interfaces, seamless appointment scheduling, and robust features such as real-time notifications, secure patient-physician communication, and integrated payment gateways We ensure that our apps not only work but also meet the highest data security standards and privacy.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    }
  ],
};


const latesttech = [
  {
    // img: <IconBike stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like ZocDoc",
    desc: "We can build reliable and seamless doctor appointment app development services, and solutions for you, just <a href='' class='text-blue-600 font-bold hover:underline'>doctor appointment apps like ZocDoc</a>. The application will revolutionize the meet-ups between doctors and patients in a few clicks. The doctor appointment application development accommodates hundreds and more best doctors’ profiles, and the patients have numerous options to find one of the best consultants to resolve and treat their problems."
  },
  {
    // img: <IconCar stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like Doctor Plus",
    desc: "We can build a groundbreaking doctor appointment app like Doctor Plus, which is going to transform healthcare work processes. On-demand doctor booking appointment app developed by our expert developers will ease the appointment task much conveniently. Most importantly, we will also make the application advanced with some extra unique and innovative custom features."
  },
  {
    // img: <IconBuildingSkyscraper stroke={1.5} className="w-12 h-12" />,
    title: "App Like Lybrate",
    desc: "Lybrate revolutionizes the way doctors manage patient prescriptions, billing, documents, and appointments by keeping everything in one place. At Comfygen, our skilled mobile app developers can create a similar platform, like Lybrate, with advanced features and innovative ideas to increase user engagement and enhance the healthcare experience. Our custom Lybrate-like app will allow doctors to seamlessly manage their practice, while offering patients easy access to healthcare services."
  },
  {
    // img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like mFine",
    desc: "mFine is another app for online doctor consultation. It is a complete package solution, where the patients can book for lab tests, health packages, skincare, care programs, scans & X-Rays, and more. We can build similar apps with better engagement possible for businesses to stand against the competition."
  },
  {
    // img: <IconBolt stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like MyCure",
    desc: "It’s an enterprise-level healthcare solution that works online and offline both. It has occupied multi-speciality clinics, healthcare centres, diagnostics, etc. This is a large-scale healthcare management solution app; which our developers can create by adding some custom features for better attractions."
  },
  {
    // img: <IconBus stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like Bookmed",
    desc: "Bookmed is a leading doctor appointment app that offers easy navigation and streamlined functionality, enabling users to select a city, choose a specialty, and book virtual appointments with ease. At Comfygen, we can develop similar applications with improved features and smoother user experiences, ensuring patient engagement and efficient healthcare services."
  },
  {
    // img: <IconPlane stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like 1MG",
    desc: "1MG is a huge healthcare solution, where the users can choose to consult with doctors, purchase pharmaceuticals, try ayurveda, treat severe medical health problems, and more. This application is a complete solution, and we have the potential to develop apps like 1MG. Our developers are proficient to add different services, features, and functions into the app to make it more competitive and market friendly."
  },
  {
    // img: <IconShip stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like HealthTap",
    desc: "HealthTap is a virtual primary care solution that connects users with doctors based on their specialty for treatment of various medical conditions, including children's health, mental and behavioral issues, elderly care, sexual healthcare, and more. The app has raised approximately $37.85M due to its success in providing accessible healthcare services. At Comfygen, we can develop similar competitive apps like Health tap to help your business grow quickly. Our version of a HealthTap-like app will include"
  },
  {
    // img: <IconTruck stroke={1.5} className="w-12 h-12" />,
    title: "Apps Like Practo",
    desc: "Within ten years of its establishment, Practo has become a one-stop solution for health-related services and hospitality. This application is now demanded by 15 countries. Do you want a similar kinda application to build? Well, we have experienced healthcare developers to create next-gen healthcare app development solutions and doctor appointment mobile apps to engage a vast audience. If you're looking to develop a similar app like Practo, Comfygen has the expertise to build next-gen healthcare solutions that will engage a vast audience. Here’s what we can offer in your Practo-like app."
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
  return (
    <>
      <Head>
        <title>
          Doctor on-demand appointment App Development Company In India & The
          USA
        </title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/doctor-appointment-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Doctor Booking App Development Company In India & The USA"
        />
        <meta
          property="og:description"
          content="Comfygen is Top rated Doctor Appointment App Development Company In India & The USA. Enhance and update your Doctor Appointment app with our expertise. Tap into Comfygen Global Network to Hire On-Demand doctor appointment app developers Today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/doctor-appointment-app-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="description"
          content="Comfygen is Top rated On-demand Doctor Appointment App Development Company In India & The USA. Enhance and update your Doctor Appointment app with our expertise. Tap into Comfygen Global Network to Hire On-Demand doctor appointment app developers Today!"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top Doctor Appointment App Development Company In India!"
        />
        <meta
          property="og:facebook_description"
          content="As the on-demand Doctor Appointment Development Company in India, Comfygen offers Top-Notch Online Doctor Booking Application Development Services in India for Android app development and iOS app development platform."
        />
        <meta
          property="og:twitter_title"
          content="The Best Doctor Appointment App | On-Demand Doctor App Development Company | Online Dr Booking App development Services | Doctor Scheduling App India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen offer top-notch Doctor Booking App Development Services in India, specializing in creating medical applications for doctors, clinics, and hospitals. We are dedicated to enhancing and updating your Doctor Appointment app. Find Top Talent Globally & Launch Your Project Today!"
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Doctor Booking App Development Company | Doctor Appointment App Development Services | Comfygen"
        />
        <meta
          name="summary"
          content="We offer top-notch Doctor Booking App Development Services in India, specializing in creating medical applications for doctors, clinics, and hospitals. Our expert team is dedicated to enhancing and updating your Doctor Appointment app to meet the latest standards."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom Doctor Appointment App Development Services & Solutions in India! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="On-Demand Doctor App Development Company in India"
          content="Are you looking to hire the best On-Demand Doctor App Development Agency in India for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="On-Demand Doctor App Development Company In jaipur: Find Expert On-Demand App Developers for Doctor Booking Apps with Expertise in Android app development and iOS app development! We are providing you a better Doctor Booking App Development Service in India. We help to develop medical applications for doctors, clinics, hospitals. Our skilled team helps you to develop the updated version of your Doctor Appointment app."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Doctor On-Demand App Design and User Experience company in Jaipur, India - We builds unique online doctor appointment booking applications for hospitals, clinics, and individual doctors."
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:country-name"
          content="US,CA,GB,AD,AU,AT,BS,BH,IO,KM,CU,AR,CW,CY,DK,DM,EG,FK,FI,FR,DE,GR,GL,HK,IS,IN,ID,IT,JP,JE,JO,KW,KG,KR,MX,FM,NZ,NI,OM,PE,PH,PL,PT,QA,RO,RU,SA,SG,SE,SZ,CH,TH,TR,TN,UA,UM,AE,039,155,154,151,150"
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best Doctor Appointment App development Company India | offshore Doctor Appointment App developer or Programmers"
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/doctor-appointment-development-app-hero-imfg.webp')]">
              <HeroSectionForAllPages
                heading="Doctor Appointment App Development Company"
                ptag="Digitally manage patient information with Comfygen’s advanced doctor appointment app development solutions. As the leading doctor appointment app development company in India and the USA, we offer AI-driven, super-efficient mobile applications for healthcare providers and investors looking to thrive in the marketplace. Our experienced mHealth app developers are skilled in creating custom doctor appointment apps designed for success and growth."
                li="AI-Driven Doctor Appointment Apps"
                li1="Custom mHealth Solutions"
                li2="Experienced Developers with Proven Success"
                li3="Build a Million-Dollar Healthcare Brand"
                ptag3="Discover how we can elevate your brand and create impactful digital solutions for your business."
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
        <AboutSection
          title="About Company"
          heading="Build an Online Doctor Appointment Software Development for Scaling Healthcare Business"
          description1="Maintaining good health is crucial, and it should never be compromised under any circumstances. Comfygen is a leading healthcare app development Firm in India, and the USA, which builds different types of mHealth app development services. We can make your on-demand doctor appointment mobile app development super engaging and advanced, which claims to accelerate your healthcare app development business in the industry. Our company knows the worth of emerging technology, that is why we have hired super-talented and skillful healthcare mobile app developers. These expert mobile app developers can build a competitive Doctor Appointment App development Services to fulfil every possible needs of users."
          description2="The global mHealth market size was valued at $43.5 Billion in 2022, where online doctor consultation market was projected to build $26.29 Billion in 2024. Investing in building a doctor appointment app development is very profitable."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Affordable On-Demand Doctor Appointment App Development Services</h2>
              <p className="text-base text-center font-normal">At Comfygen, we offer a comprehensive suite of doctor appointment app development services designed to enhance the healthcare experience for patients, doctors, and healthcare providers. Our on-demand doctor appointment app development solutions are customized, secure, and scalable, ensuring smooth medical appointment management and virtual consultations.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <SolutionSec
          heading="White-label Doctor Appointment Booking App Solutions"
          subheading="Get instant medical attention from the expert doctors through our efficient White label doctor booking app development like are discussed in below. Our top doctor appointment app development company offer personalised white-label doctor appointment booking app development solutions, fulfills certain needs, and also provide quick consultations to patients. Experience the convenient and customised <a href='healthcare-app-development' class='text-blue-600 font-bold hover:underline'>healthcare app development solutions</a> and fix the medical appointment app development services through our app development solution."
          techData={latesttech}
        />
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Streamline Healthcare Management with Doctor Appointment Mobile Apps For Patients, Clinics, Hospitals, And Doctors
                </h2>
                <p>
                  Our doctor appointment mobile app development is not only the saviour of patients, but enables the hospitals and clinics to streamline patient management as well. It is an incredible solution, which can work at both ends providing solidifying leverages</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Streamline.map((elem) => {
                  const { title, decs } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-xl">
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                      <p className=" text-base font-normal mt-2">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <ContactFromCenter />
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
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
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
        <Tech />
        <TechStack
          title="Technology Stack for Doctor Appointment App Development"
          description="At Comfygen, we leverage the latest and most robust technologies to develop secure, scalable, and high-performing doctor appointment apps. Our cutting-edge tech stack ensures seamless functionality, smooth user experience, and top-tier security for healthcare applications."
        />
        <PortfolioSec
          techData={techDataForPage1}
          heading="Our Portfolio for Doctor Appointment App Development"
          description=""
        />
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">On Demand Doctor Appointment App Development Process</h2>
              <p className="text-base font-normal mt-2">
                Comfygen follows a very streamlined and transparent process to build a doctor booking mobile application development solutions and services. Here are the key steps we follow
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Doctor Booking App Developer"
          text="Hire healthcare app developers in India from Comfygen, who knows what is best, how to build best, and how to attract the market potential. We have experienced app developers and designers to create captivating designs and applications. Every developer is experienced for more than 12+ years, who has the potential to handle simpler to complex projects. Choose us and be #NO1 in the competition."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experience of Years",
            "Modern Technologies used",
            "Customized solutions",
            "Promising attraction and engagement",
            "Affordability assured"
          ]}
        />
        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" "
        />
        <BlogSection initialData={initialData} />
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
