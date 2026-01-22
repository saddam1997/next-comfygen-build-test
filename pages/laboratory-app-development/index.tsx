import styles from "./styles.module.css";
import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/pharmacyApp.json";
import { IconBrain, IconCloud, IconDeviceCctv, IconDeviceMobile, IconSettings, IconShieldLock, } from '@tabler/icons-react';
import { IconTicket, IconChartBar, IconHeart, } from '@tabler/icons-react';
import { MdOutlineArrowOutward } from "react-icons/md";


import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";

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


const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ConsultancyApproach = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)
const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





const Process = [
  {
    title: "Requirement Gathering",
    description: "Gather requirements by collaborating with lab stakeholders to understand their needs, workflows, and challenges, ensuring the app addresses key pain points and enhances efficiency."
  },
  {
    title: "Design Phase",
    description: "Consult with our leading laboratory app development in India believe implementing custom wireframes and mockups based on gathered requirements, focusing on user experience and intuitive interface design to ensure usability and accessibility for lab personnel."
  },
  {
    title: "Development Iterations",
    description: "Iteratively develop the software, beginning with essential functionalities and gradually adding new features. Use agile approaches to adapt to changes and feedback from stakeholders throughout the development process."
  },
  {
    title: "Backend Development",
    description: "Construct the backend infrastructure—which includes databases, server-side logic, and APIs—to support the functionality of the application and provide smooth data management and system-to-system communication."
  },
  {
    title: "Testing and Quality Assurance",
    description: "Perform thorough testing to detect and resolve bugs, errors, and usability issues, as well as functional, compatibility, and user acceptability testing, to guarantee the app satisfies quality standards and user expectations."
  },
  {
    title: "Deployment and Launch",
    description: "Deploy the app into production environments, either on-premises or in the cloud. Coordinate with lab administrators on rollout, user training, and support to ensure a smooth transition to the new app with little disruption to lab operations."
  },
  {
    title: "Post-Launch Support and Maintenance",
    description: "Provide ongoing support and maintenance to address any issues, implement updates, and introduce new features based on user feedback and evolving lab requirements, ensuring the app remains reliable, secure, and up-to-date over time"
  },

];

const technologyData = [
  {
    img: <IconDeviceCctv stroke={1.5} className="w-12 h-12" />, // IoT devices often connect like surveillance or monitoring systems
    title: "Internet of Things (IoT) Integration",
    desc: "Connecting lab equipment and devices to the internet enables real-time data monitoring and analysis, optimizing processes, and enhancing efficiency."
  },
  {
    img: <IconBrain stroke={1.5} className="w-12 h-12" />, // AI/ML can be represented with a brain
    title: "Artificial Intelligence (AI) and Machine Learning (ML)",
    desc: "Large datasets may be analyzed by AI and ML algorithms, which can also be used to spot trends and automate processes like sample classification, data analysis, and predictive maintenance."
  },
  {
    img: <IconShieldLock stroke={1.5} className="w-12 h-12" />, // Blockchain represents security and data integrity
    title: "Blockchain for Data Integrity",
    desc: "Utilizing blockchain technology ensures the integrity and immutability of lab data, enhancing trust and traceability in research, quality control, and regulatory compliance."
  },
  {
    img: <IconDeviceCctv stroke={1.5} className="w-12 h-12" />, // VR/AR is well-represented by a VR headset icon
    title: "Augmented Reality (AR) and Virtual Reality (VR)",
    desc: "AR and VR technologies offer immersive experiences for training, simulation, and visualization of complex lab processes, aiding in education, experimentation, and troubleshooting."
  },
  {
    img: <IconCloud stroke={1.5} className="w-12 h-12" />, // Cloud for scalability
    title: "Cloud Computing for Scalability",
    desc: "Leveraging cloud infrastructure allows labs to scale their app resources dynamically, store and process large datasets, and access applications from anywhere with internet connectivity."
  },
  {
    img: <IconDeviceMobile stroke={1.5} className="w-12 h-12" />, // Mobile apps or wearables can be symbolized with this icon
    title: "Mobile and Wearable Technology Integration",
    desc: "Mobile apps and wearable devices can monitor lab conditions, track personnel movements, and provide real-time alerts, enhancing safety and efficiency in the lab environment."
  },
  {
    img: <IconSettings stroke={1.5} className="w-12 h-12" />, // Tools or settings for Edge Computing
    title: "Edge Computing for Real-Time Processing",
    desc: "Edge computing brings computational power closer to the data source, enabling real-time processing and analysis of sensor data, ideal for time-sensitive applications in laboratories."
  },
  {
    img: <IconTicket stroke={1.5} className="w-12 h-12" />, // Ticketing apps match the ticket icon
    title: "Data Privacy and Security Measures",
    desc: "Implementing robust security measures, such as encryption, multi-factor authentication, and data access controls, ensures the confidentiality, integrity, and availability of sensitive lab information."
  },
  {
    img: <IconChartBar stroke={1.5} className="w-12 h-12" />, // Analytics/chart icons for investment apps
    title: "Collaborative Platforms and APIs",
    desc: "Integrating collaborative platforms and APIs enables seamless communication and data sharing among researchers, facilitating collaboration and accelerating scientific discoveries."
  },
  {
    img: <IconHeart stroke={1.5} className="w-12 h-12" />, // Heart for dating apps
    title: "Remote Monitoring and Control",
    desc: "Remote monitoring and control features allow lab managers to oversee operations, adjust settings, and receive alerts from anywhere, improving flexibility and responsiveness in lab management."
  }

];

export default function ClinicalApp(props) {
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
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Laboratory App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen Technologies offers custom laboratory app development services to build secure, scalable, and cloud-based lab management, pathology, and diagnostic software solutions.",
      "url": "https://www.comfygen.com/laboratory-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/laboratory-app-development",
      "areaServed": "Global",
      "serviceType": [
        "Custom Laboratory App Development",
        "Laboratory Information System (LIS) Development",
        "Pathology Lab App Development",
        "Diagnostic Lab App Development",
        "Cloud-Based Laboratory Software Development",
        "Laboratory App Development Company"
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
  "name": "Laboratory App Development Solutions",
  "image": "https://www.comfygen.com/image/about-us-image.webp",
  "description": "Build advanced laboratory app development solutions with Comfygen Technologies. Our apps help diagnostic and pathology labs manage samples, workflows, reports, compliance, and secure data efficiently.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1500"
  }
},
{
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.comfygen.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Laboratory App Development",
      "item": "https://www.comfygen.com/laboratory-app-development"
    }
  ]
},
{
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a laboratory app and how does it benefit diagnostic labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A laboratory app helps diagnostic and pathology labs manage sample tracking, test processing, reports, billing, and workflows digitally, improving efficiency, accuracy, and patient experience."
      }
    },
    {
      "@type": "Question",
      "name": "What types of laboratory apps does Comfygen Technologies develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comfygen develops custom laboratory apps including LIS software, pathology lab apps, diagnostic lab management systems, sample tracking apps, inventory management solutions, and mobile lab applications."
      }
    },
    {
      "@type": "Question",
      "name": "Which platforms do you support for laboratory app development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We develop laboratory apps for Android, iOS, and web platforms, ensuring seamless performance across devices with cloud-based, scalable, and secure laboratory software solutions."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure data security and compliance in laboratory apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We follow HIPAA-compliant architecture, encrypted data storage, role-based access, and secure APIs to protect sensitive laboratory and patient data while meeting healthcare regulatory standards."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build a custom laboratory app based on our workflow needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide custom laboratory app development tailored to your specific diagnostic workflows, lab processes, reporting requirements, and integration needs."
  }
    },
    {
      "@type": "Question",
      "name": "Do you offer post-launch support and maintenance services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Comfygen provides end-to-end post-deployment support including performance optimization, updates, security monitoring, bug fixes, and feature enhancements for long-term reliability."
      }
    }
  ]
}




  ];



  return (
    <>
      <Head>
        <title>
          Best Laboratory App Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen Technologies delivers secure and scalable laboratory app development solutions for diagnostic labs with test management and digital reporting."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/laboratory-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Laboratory App and Web Development Company In Canada & The USA  | Top-Notch Laboratory App Development Service Provider"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen is dedicated to crafting the best laboratory mobile app development services & solutions and most comprehensive healthcare mobile apps. Our latest innovation integrates online pharmacy services, virtual doctor consultations, lab appointments, and seamless access to lab tests. By addressing the industry-wide challenge of accommodating diverse patient needs, we are revolutionizing the healthcare landscape. Don't hesitate—reach out to us now for a free demo, and let us resolve all your remaining queries instantly!"
        />
        <meta
          property="og:twitter_title"
          content="Online Laboratory App Development Company: Tailored App Development Services / Solutions by Comfygen Private Limited"
        />
        <meta
          property="og:twitter_description"
          content="At Comfygen, we redefine healthcare mobile apps with an innovative integration of online pharmacy, doctor consultations, lab appointments, and tests. Addressing the challenge of accommodating a diverse patient base, our comprehensive solution aims to revolutionize the healthcare industry. Contact us now for a free demo and let us resolve all your remaining queries instantly!"
        />
        <meta
          property="schema:type"
          content="Best Unveiling Excellence: Discover the Top Laboratory Website Development | Laboratory App Development Services"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En" />
        <meta
          name="abstract"
          content="Laboratory Website Development Organization |  Canada & The USA  Best Laboratory App Development Builder | Comfygen"
        />
        <meta
          name="summary"
          content="Comfygen is a reliable and trusted name in the industry, specializing in assisting entrepreneurs in establishing their online laboratory website development Firm. Our seasoned team offers bespoke app development solutions for iOS and Android platforms, guaranteeing smooth and effective laboratory website development experiences tailored to meet your specific business requirements. Elevate your services with Comfygen's innovative and reliable Mobile app development expertise."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Laboratory App Development Company Canada & The USA , firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="Laboratory App Development Services Company In Canada & The USA ' content='Comfygen is a well-established and trustworthy provider known for empowering entrepreneurs in launching their online Laboratory Website Development businesses. Our experienced team excels in crafting Customized Laboratory Application Development solutions for iOS and Android platforms, ensuring seamless and efficient Healthcare industry experiences tailored to your unique business needs. Elevate your services with Comfygen's cutting-edge and dependable app development expertise." />
        <meta
          name="category"
          content="Leading Laboratory App Development Company In Canada & The USA "
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="No. 1 Laboratory App Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="US" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden pt-10 lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Laboratory App Development Company"
          ptag="A reliable Laboratory App Development Company delivering secure, scalable, and efficient digital solutions for diagnostic labs, pathology centers, and healthcare organizations. Comfygen Technologies specializes in building advanced laboratory applications that streamline test management, sample tracking, report generation, and patient data handling. Our expert developers focus on compliance, data security, and intuitive UI/UX to create high-performance lab apps that improve operational efficiency, enhance patient experiences, and support long-term business growth."
          li="Test & Sample Management"
          li1="Digital Report Generation & Sharing"
          li2="Appointment Booking & Status Updates"
          ptag3=""
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/laboratory-app-development-company-hero-img.webp"
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Laboratory App Development Services</h2>
              <p className="text-base text-center font-normal">We offer end-to-end laboratory app development services, delivering secure, scalable, and cloud-based lab management, pathology, and diagnostic software solutions for healthcare providers and laboratories.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Your Diagnostic Lab Needs Laboratory App Development Solutions"
          description1="Investing in laboratory app development solutions is a profitable move for diagnostic labs seeking scalability, automation, and long-term growth. Modern laboratory management software reduces operational costs, eliminates manual errors, improves data accuracy, and enhances patient experience through real-time test tracking, digital reports, and secure data management."
          description2="From an investor’s perspective, the laboratory app development market is rapidly expanding, driven by digital transformation, AI-powered diagnostics, cloud-based LIMS solutions, and rising demand for efficient healthcare services. With the global laboratory informatics and automation market projected to reach multi-billion-dollar valuations by 2030, investing in diagnostic lab app development offers high ROI, recurring revenue opportunities, and strong market sustainability."
          description3=""
          points={[
            "Scalability & Competitive Advantage",
            "Strong Market Growth & High ROI Potential",
            "Higher Operational Efficiency & Cost Reduction",
            "Improved Data Security & Regulatory Compliance"
          ]}
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Our Laboratory App Development Solutions
                </h2>
                <p>We deliver secure, scalable laboratory app development solutions that automate workflows, enhance data accuracy, support compliance, and improve diagnostic efficiency for pathology and diagnostic laboratories.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {JSON_DATA.TecnologisStack.map((elem) => {
                  const { title, stack, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[40px] font-bold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                      <p
                        className=""
                        dangerouslySetInnerHTML={{ __html: stack }}
                      ></p>
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
            heading="Our Laboratory App Development Portfolio"
            description="Showcasing our laboratory app development portfolio, featuring innovative, secure, and scalable biomedical and diagnostic lab solutions that streamline workflows, enhance data management, and improve efficiency for healthcare and research laboratories."
          />
        </section>

        <CallToAction
          heading="Let’s Build Your Smart Laboratory App"
          text="Connect with Comfygen Technologies to discuss your laboratory app development requirements."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        {/* <SolutionSec
          heading="Modern Tech-Trends in Laboratory App Development for Industrial Evolutions"
          subheading="Modern technologies are changing the way of digitization. These tech-trends are evolving laboratory industries via easing the operations and automating the processes"
          techData={technologyData}
        /> */}


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Laboratory App Development Process To Follow</h2>
              <p className="text-base font-normal mt-2">
                We build laboratory mobile applications and software following a certain qualified and tested process. This app development process can build super-efficient and scalable app solutions run in the marketplace with engagement among the end- users
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  Latest Technology Trends in Laboratory App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  Latest technology trends in laboratory app development include AI-powered diagnostics, cloud-based LIMS, IoT-enabled lab automation, advanced data analytics, and secure mobile laboratory solutions improving efficiency, accuracy, scalability, and regulatory compliance.
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


        <TechStack
          title="Technologies to Use for Laboratory App Development"
          description="Comfygen is known as the best laboratory app development company, so apparently we believe in using cutting edge technologies to build laboratory mobile applications. The technologies will create a worthy app with competitive nature:"
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Laboratory App Developers"
          text="Comfygen is committed to staying at the forefront of cutting-edge technologies and the latest tech trends to deliver the best app solutions. To achieve this, we have assembled a team of experts from diverse domains. Our healthcare app developers are skilled in understanding client needs, analyzing requirements, staying updated on market trends, and creating robust solutions that thrive in a competitive landscape. Whether it's laboratory app development or other healthcare solutions, our developers excel in crafting engaging features and functionalities tailored to meet industry demands."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Developers are experienced with 10+ years",
            "Use cutting edge technologies to create solutions",
            "Aware of trending technologies to bring engagement in market for the app",
            "AThey cost what’s right and competitive to market.",
            "Available for the customer support anytime.",
            "Available to work dedicatedly on your project"
          ]}
        />

   <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
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
