import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
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
import AppcardSlider from "../Newcomponet/SectionCompoent/AppcardSlider";
import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
import Features from "../Newcomponet/SectionCompoent/Features";
import TrendsSection from "../Newcomponet/SectionCompoent/TrendsSection"
import TechStack from "../Newcomponet/SectionCompoent/TechStack"
import ClientTestimonials from "../Newcomponet/SectionCompoent/ClientTestimonials"


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
      title: "Business Analysis",
      description: "We understand your pharmacy business needs, target customers, and required features to plan the best pharmacy app development strategy for smooth success."
    },
    {
      title: "UX/UI Designing",
      description: "Our <a href='https://www.comfygen.com/web-design' class='text-blue-600 font-semibold'>UI/UX design</a> team creates a simple, attractive, and user-friendly interface for a seamless online medicine ordering experience."
    },
    {
      title: "App Development",
      description: "We build powerful pharmacy <a href='https://www.comfygen.com/mobile-app-development' class='text-blue-600 font-semibold'>mobile app solutions</a> with secure technology, advanced APIs, and custom features to support on-demand deliveries."
    },
    {
      title: "Third-party Integrations",
      description: "From payment gateways to maps, we integrate essential tools to make your medicine delivery app development complete and fully functional."
    },
    {
      title: "Testing & Quality Assurance",
      description: "We ensure the on-demand pharmacy app runs perfectly with strong security, fast performance, and smooth navigation before launch."
    },
    {
      title: "Launch & Deployment",
      description: "Your ePharmacy app goes live on the Play Store and App Store with full setup and optimization support."
    },
    {
      title: "Support & Maintenance",
      description: "We offer continuous updates, bug fixes, and feature improvements to help your pharmacy app grow and stay competitive."
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


  const jsonLdData = [


    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Online Pharmacy App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen offers top-notch online pharmacy app development services to build secure, scalable, and feature-rich ePharmacy apps. Deliver medicines, manage prescriptions, and grow your pharmacy business with our custom solutions.",
      "url": "https://www.comfygen.com/pharmacy-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/pharmacy-app-development",
      "areaServed": "Global",
      "serviceType": [
        "On-demand Pharmacy App Development",
        "Medicine Delivery App Development",
        "White-label Pharmacy App Solutions",
        "E-pharmacy software development",
        "Online drug store app development",
        "AI Pharmacy App Development",
        "Pharmacy Marketplace Development",
        "B2B Medical Distributors App Development",
        "Telemedicine App Development"

      ],

      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"

      ]
    },
    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "Name": "Best ePharmacy App Development Company",
      "image": "https://www.comfygen.com/image/about-us-image.webp",
      "description": "Comfygen is a trusted ePharmacy app development company offering online medicine delivery apps with advanced features, subscription services, and secure HIPAA-compliant architecture for pharmacies in India and USA.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200"
      }
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
        "name": "Pharmacy App Development",
        "item": "https://www.comfygen.com/pharmacy-app-development"

      }]
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Does the Whitelabel pharmacy delivery app support multiple payment gateways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most white-label pharmacy delivery apps support multiple payment gateways. This feature allows users to choose their preferred payment method, like credit cards, debit cards, digital wallets, net banking, or cash on delivery."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to develop a custom pharmacy app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development time for a custom pharmacy app can vary from 4 to 6 months. Factors like complexity, design, team size, and system integrations influence the timeline. It's important to work with a reputable pharmacy app development company for correct estimates."
        }

      }, {
        "@type": "Question",
        "name": "Can you able to enhance AI/ML and blockchain-based features in the existing pharmacy system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen is able to enhance AI/ML and blockchain-based features in the existing pharmacy System These technologies offer benefits like personalized recommendations, optimized inventory, secure data storage, and transparent supply chains."
        }

      }, {
        "@type": "Question",
        "name": "Is it UI/UX Uper friendly, If yes then How?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Comfygen's pharmacy apps are highly user-friendly. We give priority to intuitive design, clear navigation, accessibility features, and ongoing testing to ensure a seamless and enjoyable experience for users."
        }

      }, {
        "@type": "Question",
        "name": "Is it developed for both Android and iOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Comfygen's pharmacy apps are developed for both Android and iOS platforms. This ensures that your pharmacy app can reach a wider audience and be accessible to users with different devices and preferences"
        }

      }, {
        "@type": "Question",
        "name": "Is Whitelabel and custom pharmacy App ASO friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both white-label and custom pharmacy apps can be ASO-friendly. By optimizing keywords, app store metadata, and using ASO tools, you can improve your pharmacy app's visibility and attract more downloads."
        }

      }, {
        "@type": "Question",
        "name": "How much does On-Demand Pharmacy App Development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to develop an online pharmacy app depends on features, design, complexity, and the platform you choose. A basic medicine delivery app development solution may range from $10,000 to $35,000, while a fully advanced on-demand pharmacy app with AI automation, real-time tracking, and subscription features can cost $40,000 to $1,00,000+.  Our pharmacy delivery app development cost includes UI/UX, secure backend, API integrations, payment gateway setup, and app launch support. At Comfygen, we deliver budget-friendly and scalable ePharmacy app development solutions tailored to your business goals."
        }

      }, {
        "@type": "Question",
        "name": "How Business Can Leverage a Pharmacy Delivery App?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Single Medical Store or Hospital For single medical stores or hospitals, a custom pharmacy app can be a game-changer. By offering features like prescription upload, automatic refills, and home delivery, you can significantly expand your reach and improve patient satisfaction. Comfygen is the user's trusted partner in developing cutting-edge pharmacy apps. Our expertise will help streamline operations, reduce stock-related issues, and drive business growth. Enterprises By developing custom pharmacy delivery apps, enterprises can create a healthier, more productive workplace. These apps streamline prescription management, reduce administrative burdens, and ensure compliance with healthcare regulations. Partner with the best pharmacy app development company Our cutting-edge mobile app development technology and expert developers can help you optimize workflows, enhance employee satisfaction, make data-driven decisions, and develop custom pharmacy apps customized to customer-specific needs.  Wholesales or Startups Wholesalers and startups can leverage pharmacy delivery apps to expand their market reach, explore new revenue streams, and optimize logistics. By offering a wider range of products and services, you can attract new customers and increase sales. Our cutting-edge technology can help you streamline delivery operations, reduce costs, and improve efficiency, enhancing customer satisfaction."
        }

      }, {
        "@type": "Question",
        "name": "Benefits of the Online Pharmacy Delivery App We Developed",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High Performance Our white-label pharmacy app is developed with high-performance standards, ensuring quick load times and easy navigation. Hybrid Functionality With hybrid functionality, our white-label app is compatible with multiple platforms, allowing users to access services on both iOS and Android devices. Well-Tested Product Our well-testing ensures a bug-free app, providing a smooth user experience and increasing trust. Data Security We give priority to data security, implementing robust encryption methods, and conformity with healthcare regulations. On-Time and Reliable Delivery Our app includes advanced logistics features that ensure on-time and reliable medicine delivery. Intuitive Designs Our white-label app's user-friendly interface makes it easy to navigate, order medications, and access health information."
        }


      }]
    }





  ];




  return (
    <>
      <Head>
        <title>
          Online Pharmacy App Development Company in India | ePharmacy App Solutions
        </title>
        <meta
          name="description"
          content="Comfygen is a leading pharmacy app development company in India. We deliver ePharmacy apps for medicine delivery, digital prescriptions, and HIPAA-compliant pharmacy solutions."
        />

        <meta name="keywords" content="On-demand Pharmacy App Development,Medicine Delivery App Development,White-label Pharmacy App Solutions, E-pharmacy Software Development, Online Drug Store App Development, AI Pharmacy App Development, Pharmacy Marketplace Development, B2B Medical Distributors App Development, Telemedicine App Development, Pharmacy App Developers, Custom Pharmacy App Development, Medicine Ordering App Solutions, Online Pharmacy Software, Pharma Delivery App Development, Healthcare App Development "></meta>


        <link
          rel="canonical"
          href="https://www.comfygen.com/pharmacy-app-development"
        />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Online Pharmacy App Development Company in India & USA | Comfygen" />
        <meta name="twitter:description" content=" Build a secure and scalable online pharmacy app with Comfygen, a leading pharmacy app development company in India and USA. Get feature-rich ePharmacy solutions for medicine delivery, digital prescriptions, and subscriptions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/pharmacy-app-development/pharmacy-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/pharmacy-app-development/pharmacy-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/pharmacy-app-development/pharmacy-app-development.webp" />
        <meta property="og:image:alt" content="Custom Pharmacy App Development" />
        <meta property="og:url" content="https://www.comfygen.com/pharmacy-app-development" />
        <meta property="og:title" content="Custom Online Pharmacy App Development Company | India & USA" />
        <meta property="og:description" content="Looking for a custom pharmacy app development company? Comfygen creates on-demand pharmacy apps for India and USA with real-time tracking, prescription management, and secure, HIPAA-compliant solutions." />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
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
                heading="Online Pharmacy App Development Company"
                ptag="Take your pharmacy business online with our custom pharmacy app development solutions. We build secure, easy-to-use, and HIPAA-compliant medicine delivery apps designed to boost your sales and offer quick doorstep delivery. Scale your digital pharmacy with powerful features and seamless user experience.
                Looking for a Reliable and Innovative Pharmacy App Development Services"
                ptag1=""
                li="100% secure & compliant ePharmacy apps"
                li1="Real-time order tracking & smart delivery"
                li2="Custom features to fit your business needs"
                li3="Experienced pharmacy app developers"
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
          heading="Why Invest in On-Demand Pharmacy Apps?"
          description1="On-demand pharmacy apps are becoming the future of healthcare. Customers today prefer easy and fast ways to order medicines from home. With a <a href='https://www.comfygen.com/medicine-delivery-app-development' class='text-blue-600 font-semibold'>medicine delivery app development solution</a>, pharmacies can serve more customers and run operations smoothly without delays."
          description2="Investing in a on-demand pharmacy app development company like Comfygen helps you improve business growth, reduce manual work, and increase customer satisfaction. You also get secure prescription management, real-time delivery tracking, and multiple payment options to enhance user convenience."
          description3="Digital transformation in pharmacy services opens new revenue opportunities and helps you stay ahead of competitors in the ePharmacy market."
          description4="<strong>Benefits of On-Demand Pharmacy Apps</strong>"
          points={[
            "Boost sales with 24/7 online medicine orders",
            "Better medicine stock and delivery management",
            "Offer subscription-based medicine refills",
            "Safe & quick doorstep medicine delivery",
            "Build strong customer trust with a reliable app"
          ]}
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Tailor-Cut & Result-Oriented Pharmacy App Development Services</h2>

              <p className="text-base text-center font-normal">
                Comfygen offers custom pharmacy app development services to help retailers and healthcare businesses build secure and fast online medicine delivery platforms. We create user-friendly ePharmacy apps with powerful features to automate orders, delivery, and inventory management.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AppcardSlider
          heading="Pharmacy App Clone Solutions We Provide"
          description="As a leading pharmacy mobile app development company, Comfygen offers scalable online pharmacy app clone solutions based on top brands. Launch fast with 100% customization and advanced features."
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />


        <section className="py-4">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Online Pharmacy App Development Portfolio"
            description="We have successfully delivered innovative and user-friendly pharmacy and medicine delivery apps for startups, retail pharmacies, and healthcare businesses. Have a look at some of our work that helped clients grow digitally and serve customers better."
          />
        </section>

        <CallToAction
          heading="Launch Your Medicine Delivery App with Cutting-Edge Features Today!"
          text="Transform your business with our expert medicine delivery app development services and stay ahead in the healthcare industry"
          buttonText="Get Started Project"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/medicine-delivery-app-call-to-action-image.webp"
          imageAlt="Future of Technology"
        />



        <div className="py-8">
          <Features
            heading="Key Features of Our Pharmacy App Solutions"
            description="Our advanced panel features enable smooth interactions between customers, pharmacy owners, delivery agents, and administrators. We develop pharmacy apps that simplify operations, increase sales, and improve digital healthcare access."
            featuresData={JSON_DATA.featuresData}
            grid={4} />
        </div>

        <section className="py-8">
          <TrendsSection
            heading="The Emerging Technologies We Use for Pharmacy App Development"
            subtitle="We offer advanced and customizable pharmacy app development solutions powered by the latest technologies to improve performance, security, and user experience. Add these powerful features to make your ePharmacy app stand out."
            trends={JSON_DATA.Emerging}
          />
        </section>

        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Online Pharmacy Application Development Process</h2>
              <p className="text-base font-normal mt-2">
                As a trusted on-demand pharmacy app development company in India, we follow a clear and result-driven process to build secure and scalable online medicine delivery apps that match your business goals.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="py-8">
          <TechStack
            title="Tech Stack We Use in E-Pharmacy App Development"
            description="We use the latest and most secure technologies to <a href='https://www.comfygen.com/medicine-app-development' class='underline font-semibold'>build an online medicine ordering app</a> for startups. Our advanced tech stack supports smooth ordering, secure data handling, and real-time delivery operations."

          />
        </section>

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

        {/* <SolutionSec
          heading="Add-on Features You able to Update In a writeable Custom pharmacy app"
          subheading="Add-on features that the app can update in the custom pharmacy app. Comfygen provides many add-on features to make your pharmacy app better and give a better user experience."
          techData={technologyData}
        /> */}

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Dedicated Online Pharmacy App Developers"
          text="Want to launch a secure and fully customized pharmacy app? Hire dedicated <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>online pharmacy app builders</a> from Comfygen to build a reliable ePharmacy platform that supports fast medicine delivery, digital prescriptions, and smooth management. Our skilled mobile app developers create scalable and high-performance apps for pharmacy startups, retail chains, and healthcare businesses."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in online medicine delivery app development",
            "Strong focus on HIPAA & GDPR-compliant solutions",
            "Integration with payment gateways, GPS & inventory systems"
          ]}
        />



        <ClientTestimonials
          heading="What Our Clients Say About"
          testimonials={JSON_DATA.customTestimonials}
        />


        <Faq faqData={Frequently} />





        {/* <section className=" lg:py-16 py-10 bg-[#F5F5F9]">
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
        </section> */}

        {/* <div className="bg-center bg-repeat bg-fixed" style={{ backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")` }}>
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
        </div> */}



        {/* <div className="py-10 lg:py-20 bg-[#F5F5F9]">
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
        </div> */}

        {/* <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        /> */}


        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  );
}

