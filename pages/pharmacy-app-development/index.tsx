import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./pharmacyApp.json";
import styles from "./styles.module.css";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import { IconBarrel, IconBrain, IconBrandStorj, IconCloud, IconLock, } from '@tabler/icons-react';
import { IconChartBar, IconShield, } from '@tabler/icons-react';
import SolutionSec from "../components/SolutionSec";
import ProcessSec from "../components/ProcessSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
import HireDeveloper from "../components/HireDeveloper";


const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), {
  loading: () => <p>Loading...</p>,
});
const Faq = dynamic(() => import("../components/Faq"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const AdvanceFunction = dynamic(() => import("./components/AdvanceFunction"), {
  ssr: false,
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
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});


export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let { Frequently, WhyChoosed, Hire, myList, TecnologisStack, } = JSON_DATA;

  const portfolioData = {
    title: "Our Pharmacy App Development Portfolio",
    subtitle: "My Meds Pharma Care",
    description:
      "A cutting-edge application that offers users seamless and efficient pharmacy delivery, My Meds Pharma Care offers a seamless and efficient pharmacy delivery experience. Using blockchain technology, this iOS and Android app, developed with extensive experience in both native and hybrid development, enhances its capabilities. As a result of difficulties leaving their homes or accessing traditional pharmacies, the app is thoughtfully designed to meet the needs of those patients who may have difficulty obtaining essential medications.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
    imageUrl: "https://www.comfygen.com/img/my-meds-pharma-care.svg",
    imageAlt: "pharmacy app development services",
  };
  const technologyData = [
    {
      img: <IconBrain stroke={1.5} className="w-12 h-12" />,
      title: "AI / ML",
      desc: "AI/ML-based features can provide personalization based on user priorities and purchase history, automatic medicine reminders, and an AI-powered chatbot for customer help."
    },
    {
      img: <IconBrandStorj stroke={1.5} className="w-12 h-12" />,
      title: "Blockchain",
      desc: "Blockchain technology can be used to secure patient data, ensure transparency in medicine supply problems, and to prevent counterfeit medicines"
    },
    {
      img: <IconChartBar stroke={1.5} className="w-12 h-12" />,
      title: "Data Science",
      desc: "Data science can be used to predict ideas and optimize inventory management, customer segmentation to optimize marketing efforts, and for predictive analysis to detect fraud to prevent fraudulent activities."
    },
    {
      img: <IconBarrel stroke={1.5} className="w-12 h-12" />,
      title: "AR/VR",
      desc: "AR/VR can be used to create interactive product presentations, rich content, and immersive experiences to enhance patient engagement."
    },
    {
      img: <IconCloud stroke={1.5} className="w-12 h-12" />,
      title: "Cloud",
      desc: "Cloud-based pharmacy app development solutions provide scalability to accommodate growing user demands, access from anywhere with an internet connection, and data backup and recovery for increased security and reliability."
    },
    {
      img: <IconShield stroke={1.5} className="w-12 h-12" />,
      title: "HIPAA",
      desc: "HIPAA or the Health Insurance Portability and Accountability Act is one of the core laws for pharmacy delivery app development. The regulation safeguards sensitive information of patients such as their names, medicine prescriptions and other important details."
    },
    {
      img: <IconLock stroke={1.5} className="w-12 h-12" />,
      title: "GDPR",
      desc: "GDPR or General Data Protection Regulation also applies to the domain of pharmacy app development for European users. The law presents guidelines for the secure management of personal data and focuses on information encryption, user consent and rights."
    }
  ];

  const Process = [
    {
      title: "Pharmacy App Development Consultation",
      description: "We provide pharmacy app development and consulting services, helping you build efficient online medicine delivery apps. Our consultants are reliable experts in pharmaceuticals and healthcare with an in-depth awareness of the latest technology trends and guide you through development challenges, ensuring a smooth process and optimal success in the healthcare market. Most important of all, our clients can leverage the mobile application consulting service provided by experts to discover optimal routes for success."
    },
    {
      title: "Pharmacy App Design",
      description: "We create user-friendly designs that enhance the user experience and boost engagement. Our software development team includes fluent designers with 10+ years of experience in creating appealing designs for pharmacy apps. Our design approach focuses on attractiveness, functionality, and ease of navigation to make sure that customer pharmacy app stands out in the competitive market."
    },
    {
      title: "Pharmacy App Development Service",
      description: "We offer a comprehensive range of application development services for different types of mobile apps in the pharmaceutical and healthcare industries. we develop scalable and secure pharmacy apps customized to user needs. We can help you create e-pharmacy app development services, and solutions that mold in according to the latest trends and offer benefits to every user."
    },
    {
      title: "Scalable Pharmacy Solutions",
      description: "Our development services focus on creating scalable pharmacy solutions tailored to your specific business needs. Whether you're a small local pharmacy or a large chain, our apps are designed to grow alongside your business, ensuring long-term success and customer satisfaction."
    },
    {
      title: "Integration with Healthcare Systems",
      description: "We ensure seamless integration of your pharmacy app with existing healthcare systems such as Electronic Health Records (EHR) or Electronic Medical Records (EMR). This integration enhances the app's functionality and streamlines workflows, improving the overall efficiency of pharmacy operations and patient care."
    },
    {
      title: "QA Testing",
      description: "We conduct complete quality assurance testing to make sure that the pharmacy app is free of bugs, highly reliable, and performs better. Our rigorous testing process makes sure a smooth user experience across multiple devices and platforms."
    },
    {
      title: "Deployment and Maintenance",
      description: "We manage the pharmacy app's deployment, ensuring a smooth launch and easy integration. Help users deploy their custom pharmaceutical software solutions across different popular platforms to make sure that the apps reach their target audience and provide consistent support and maintenance services 24*7 according to the needs of our clients. After post-launch, we provide continued maintenance services, providing updates, security enhancements, and continuous support to keep their pharmacy app running easily."
    }

  ];


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
        <title>
          Best Pharmacy App Development Company In India and USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen as an online pharmacy app development company In India & The USA with secure, user-centric whitelabel medicine delivery app development solutions for medical stores, ensuring seamless integration and custom pharmacy delivery app development."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/pharmacy-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top Online Pharmacy App Development Company In USA!"
        />
        <meta
          property="og:facebook_description"
          content="As the premier Pharmacy App Development Company in USA, Comfygen delivers top-notch Online Pharmacy App Development Services for both Android and iOS platforms. Our team of experts combines state-of-the-art software development with deep industry knowledge to create custom Pharmacy Apps that revolutionize patient care, streamline Pharmacy workflows and access healthcare services. Let Comfygen be your partner in shaping the future of digital healthcare solutions."
        />
        <meta
          property="og:title"
          content="Best Pharmacy App Development Company In India &  The USA"
        />
        <meta
          property="og:twitter_description"
          content="Discover top-notch Online Pharmacy App Development Services from Comfygen in USA for both Android and iOS platforms. Our expertise combines Pharmacy App Development and Pharmacy Software Development to revolutionize patient care and streamline healthcare services. Let us be your partner in shaping the future of digital healthcare solutions!"
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta
          name="robots"
          content="imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta
          name="abstract"
          content="Pharmacy App Development Company | Pharmacy App Development Services | Comfygen"
        />
        <meta
          name="summary"
          content="We offer top-notch Pharmacy App Development Services in USA, specializing in creating medical applications for doctors, clinics, and hospitals. Our expert team is dedicated to enhancing and updating your Pharmacy App to meet the latest standards."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom Pharmacy App and Software Development Services & Solutions in USA! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="On-Demand Pharmacy App Development Company in USA"
          content="Are you looking to hire the best Pharmacy App Development Agency in USA for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="Pharmacy App Development Company In India: Find Expert Pharmacy App and Software Developers for Pharmacy App and Software development services with Expertise in Android app development and iOS app development! We are providing you a better Pharmacy App Development Service in USA. We help to develop medical applications for doctors, clinics, hospitals. Our skilled team helps you to develop the updated version of your Pharmacy App."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Pharmacy App Design and User Experience company in India, USA - We builds unique online Pharmacy App for patients, doctors and healthcare providers, and individual doctors."
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          name="og:country-name"
          content="US,CA,GB,AD,AU,AT,BS,BH,IO,KM,CU,AR,CW,CY,DK,DM,EG,FK,FI,FR,DE,GR,GL,HK,IS,IN,ID,IT,JP,JE,JO,KW,KG,KR,MX,FM,NZ,NI,OM,PE,PH,PL,PT,QA,RO,RU,SA,SG,SE,SZ,CH,TH,TR,TN,UA,UM,AE,039,155,154,151,150"
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <meta
          property="og:type"
          content="Hire Best Pharmacy HeroSectionFormApp Development Company USA | offshore Pharmacy App developer or Programmers"
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">

        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/pharmacy-app-development-company-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="Pharmacy App Development Company"
                ptag="Looking for a Reliable and Innovative Pharmacy App Development Services"
                ptag1="Comfygen is a top pharmacy app development company, backed by a team with over 10 years of experience. We offer innovative, tailored pharmacy app solutions designed to meet user needs."
                li="Secure Prescription Management"
                li1="Intuitive User Interfaces"
                li2="Collaborations with PharmEasy, 1mg, Apollo Pharmacy"
                li3="Advanced Tech: AI/ML & Blockchain"
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
          heading="Best Pharmacy Delivery App Development Company"
          description1="Comfygen is a leading pharmacy app development company in India, specializing in robust and seamless medicine delivery app solutions for both established pharma companies and startups. With over 10 years of experience, our expert developers craft high-quality, user-friendly apps for Android and iOS. We are committed to innovation, offering transformative solutions for single and multiple pharmacy stores."
          description2="Our custom pharmacy apps integrate value-driven features, including Augmented Reality (AR) and Virtual Reality (VR), to create immersive experiences that set your app apart. Comfygen provides complete e-commerce solutions for online pharmacy websites, ensuring success in healthcare businesses."
          points={[
            "95% Customer satisfaction rate",
            "400+ projects delivered",
            "300+ satisfied clients"
          ]}
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Cutting-Edge Pharmacy Delivery App Development Solutions</h2>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <SolutionSec
          heading="Add-on Features You able to Update In a writeable Custom pharmacy app"
          subheading="Add-on features that the app can update in the custom pharmacy app. Comfygen provides many add-on features to make your pharmacy app better and give a better user experience."
          techData={technologyData}
        />
        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Custom Pharmacy app development Company provides valuable Services</h2>
              <p className="text-base font-normal mt-2">
                As a leading pharmacy app development service provider in India, Our custom pharmacy app development company provides a valuable service that is designed to meet the needs of modern pharmacies We strive to deliver the best pharmacy application development services.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <AdvanceFunction />
        <ContactFromCenter />

        <section className=" lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="space-y-4 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Develop a Pharmacy App Similar to
              </h2>
              <p className="text-base text-slate-800">
                Do you want to develop a pharmacy app? Look no further than Comfygen!  We are experts in custom healthcare app development solutions that compete with industry leaders like NetMeds, Practo, 1Mg, PharmaEasy, Walgreens, and Medscape. We provide on-demand pharmacy app development solutions.  Partnering with our pharmacy app development services can help you launch your healthcare business swiftly and effectively.</p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
              {TecnologisStack.map((omaha) => {
                return (
                  <div key={omaha.num} className="bg-white rounded-[20px] shadow p-6 border border-[#5556D1]">
                    <div className="bg-[#5556D1] w-20 h-20 rounded-lg p-4 flex justify-center items-center">
                      <Image
                        className="rounded-md"
                        alt={omaha.title}
                        src={omaha.img}
                        height={48}
                        width={48}
                      />
                    </div>
                    <h3 className="text-[#212121] text-2xl font-bold mt-5">
                      {omaha.title}
                    </h3>
                    <p
                      className=""
                      dangerouslySetInnerHTML={{ __html: omaha.stack }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="bg-center bg-repeat bg-fixed" style={{ backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")` }}>
          <div className="bg-gradient-to-r from-[#272868]/90 to-[#5556D1]/90 ">
            <section className="items-center md:flex md:space-x-10  2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto lg:py-16 py-10">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div className="flex flex-col space-y-2">
                    <h2 className="py-2 lg:py-4 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#fff]">
                      How Business Can Leverage with Pharmacy Delivery App ?{" "}
                    </h2>
                    <Image
                      className="rounded-lg w-full"
                      alt="How Business Can Leverage with Pharmacy Delivery App ?"
                      src="https://www.comfygen.com/images/how-business-can-leverage-with-pharmacy-delivery-app.webp"
                      height={774}
                      width={405}
                    />
                  </div>
                  <div className={`${styles.TechnologyStack} grid gap-4 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[600px] overflow-auto head-scroll`}>
                    {WhyChoosed.map((elem) => {
                      const { title, img, num } = elem;
                      return (
                        <div key={num} className="group  pb-6 space-y-4 transition-all duration-200">
                          <div className="flex items-center justify-start">
                            <div className="flex items-center justify-center gap-3 ">
                              <div className="w-16 h-16 flex justify-center items-center bg-white rounded-full ">
                                <Image src={img} className="" alt="" width={40} height={40} />
                              </div>
                              <h3 className="text-2xl text-white font-semibold ">
                                {title}
                              </h3>
                            </div>
                          </div>
                          <div>
                            <p className="text-white" dangerouslySetInnerHTML={{ __html: elem.decs }}></p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="py-10 lg:py-20 bg-[#F5F5F9]">
          <section className="items-center space-y-10 lg:flex space-x-0 lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="w-full ">
              <div className="w-full space-y-6 text-left">
                <div className="space-y-4">
                  <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                    Team Required to Develop Custom Pharmacy App
                  </h2>
                </div>
                <p className="text-base text-black">At Comfygen, we're committed to developing innovative pharmacy app development solutions that streamline the healthcare app development industry. Our team of experienced professionals is dedicated to developing custom pharmacy apps customized to customers' specific needs.
                </p>
                <ul className="grid grid-cols-2 gap-6 list-disc px-6">
                  <li>Project manager</li>
                  <li>Business Analyst</li>
                  <li>UX/UI Designer</li>
                  <li>iOS Developer</li>
                  <li>Android Developer</li>
                  <li>Back End Developers</li>
                  <li>FrontEnd Developers</li>
                  <li>QA engineer</li>
                  <li>AQA Engineers</li>
                  <li>DevOps Engineer</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center 2xl:justify-start w-full  pb-10 lg:pb-0">
              <Image
                className=""
                alt="Team Required to Develop Custom Pharmacy App"
                src="https://www.comfygen.com/img/online-pharmacy-app-development-company.webp"
                height={650}
                width={571}
              />
            </div>
          </section>
        </div>
        <HireDeveloper
          heading="Hire a Pharmacy app developer"
          text="Hire a Pharmacy app developer You can hire the best pharmacy app builders with years of experience in working with different pharma development projects. We have a dedicated team of experts to develop an online pharmacy app personalized to your unique requirements. Make the most of your opportunity to hire a pharmacy app developer with an unswerving commitment to delivering the best apps. Our team of experts can help you redefine user experiences, productivity and profits with personalized pharmacy apps."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Proven experience in delivering a wide range of pharmacy apps.",
            "Capability to serve clients across different verticals.",
            "Comprehensive vetting and review process for selecting developers.",
            "Assurance of integrity and confidentiality of user data.",
            "Round-the-clock support according to SLAs."
          ]}
        />
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Our Development Module
                </h2>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.High1.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[40px] font-bold text-[#5556D1]">
                        {num}
                      </div>
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
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <Faq faqData={Frequently}  />
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
