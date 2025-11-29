import React, { useState } from "react";
import { MdOutlineEngineering } from 'react-icons/md';
import { FaNetworkWired } from "react-icons/fa";
import Head from "next/head";
import { RiCustomerService2Fill, RiTodoLine } from "react-icons/ri";
import { AiOutlineDeploymentUnit, AiOutlineMobile } from "react-icons/ai";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/python.json"
import Header from "../Newcomponet/layout/Header"
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages"


const AboutSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const NewSection = dynamic(
  () => import("../Newcomponet/comman/NewSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const InfoSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/InfoSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



const Services = [
  {
    num: '1',
    icon: <MdOutlineEngineering className="text-blue-400" size={60} />,
    title: 'Machine learning solutions',
    decs: 'ML apps developed by our Python developers enable better business decisions by extracting insights from data.'
  },
  {
    num: '2',
    icon: <AiOutlineDeploymentUnit className="text-blue-400" size={60} />,
    title: 'Python CMS development',
    decs: 'We Make your systems relevant by developing a highly scalable CMS web application using Python.  '
  },
  {
    num: '3',
    icon: <RiTodoLine className="text-blue-400" size={60} />,
    title: 'Migration to Python',
    decs: 'Your existing app or website can be seamlessly updated to Python without affecting your data. '
  },
  {
    num: '4',
    icon: <RiCustomerService2Fill className="text-blue-400" size={60} />,
    title: 'Custom Python development',
    decs: 'Our Python developers can develop a customized solution for your business based on Python. '
  },
  {
    num: '5',
    icon: <AiOutlineMobile className="text-blue-400" size={60} />,
    title: 'Python mobile app development',
    decs: 'Our Python developers will create a perfect mobile app for you to make your business stand out.'
  },
  {
    num: '6',
    icon: <FaNetworkWired className="text-blue-400" size={60} />,
    title: 'Django framework development',
    decs: 'High-quality Django-based web development in Python includes scientific computation, statistical analysis, and data science capabilities.  '
  },
]
export default function Altcoin(props:any) {

  let { initialData } = props;
  let { NewSections, Hire, myList, Frequently } = JSON_DATA

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
        <title>Python Development Company In Jaipur, India | Hire Python Developers</title>
        <meta
          property="og:title"
          content="Python Development Company In Jaipur, India | Hire Python Developers"
        />
        <meta name="description" content="Looking for a reliable Python Development Company In Jaipur, Rajsthan India? Comfygen team of expert Python developers can help you build custom web applications, AI solutions, and more. Contact us now." />
        <link rel="canonical" href="https://www.comfygen.com/python-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Looking for a reliable Python Development Company In Jaipur, Rajsthan India? Comfygen team of expert Python developers can help you build custom web applications, AI solutions, and more. Contact us now." />
        <meta property="og:url" content="https://www.comfygen.com/python-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-12-26T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/python-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name='language' content='en-us' />
      </Head>

        <Header />

      <div className='overflow-hidden lg:pt-[100px]'>
        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/python-development-company-hero-img.webp')]">
              <HeroSectionForAllPages
                heading='Python Development Company'
                ptag="As a top-tier Python Development Company in India & the USA, Comfygen delivers next-level mobile and web applications. Our talented Python developers craft high-performing, robust, and flexible solutions tailored to client needs. With our expertise, you gain exceptional, top-notch web and app experiences that drive success."
                li="High-Performing Apps & Webs"
                li1="Expert Python Development Team"
                li2="Robust, Flexible Solutions"
                li3="Success-Oriented Results"
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
        <NewSection NewSection={NewSections} />
        <AboutSection
          title="We are Python Development Company"
          heading="Best python web development company"
          description1="We are one of the top Python development companies that deliver cutting-edge websites, mobile apps, and web apps using advanced Python frameworks, tools, and programming languages. We ensure error-free product development with innovative project management tools and collaborative tools. You will get seamless integration with APIs and other codes from our development team because we strictly follow international coding standards. Comfygen offers top-notch Python development services for next-generation mobile and web apps. Our solutions are highly scalable, customizable, and responsive due to the use of best-in-class libraries, frameworks, and technologies."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}
        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Python Development Services</h2>
              <p className="text-base text-center font-normal">We offer a comprehensive range of Python development services to cater to diverse business needs. With expertise in delivering robust, scalable, and innovative solutions, our Python developers ensure high performance and seamless integration to meet your goals effectively.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <InfoSection
          heading="Python App Development company"
          description1="With over a decade of experience delivering Python solutions, Comfygen has delivered everything from dynamic websites to sophisticated, avant-garde web apps. You can get your dream web or app development project done with Python, an open-source, clear, and powerful object-oriented programming language.By leveraging advanced Python development frameworks, programming languages, and front-end tools, Comfygen delivers high-quality websites, web apps, and mobile applications. We have developers who are proficient in Python web development frameworks such as Django. There are similar frameworks for Python web apps such as Flask, Zope, and Pyramid, among others."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/img/python app.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
          imagePosition="right"
        />

        <InfoSection
          heading="python development firm"
          description1="With decades of experience working across domains, we specialize in Python development services. With end-to-end Python development capabilities, we help clients unlock value and gain efficiencies. Offering Python development solutions and best-in-class consulting services, we partner with clients to achieve business objectives. The latest features and functionality of your web applications can be included with our expertise in Python frameworks such as Django & Flask. Building web apps quickly, efficiently, and with less coding requires the use of several Python frameworks."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/img/python-development.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <InfoSection
          heading="Leading Python Development Company In India"
          description1="Comfygen uses Django Python and Angular 2 for frontend technologies to enable entrepreneurs to build successful start-up businesses.Through the integrated platform, entrepreneurs could confirm start-up ideas through discussion, meet investors to get seed funding, and find competent talent via an integrated recruitment portal. Multi-funding sources are integrated into the platform, all based on cryptocurrencies and blockchain technology. As a result, all three profiles of a creator, a backer, and an employee are seamlessly combined. To nurture ideas and turn them into profitable businesses, the solution brings entrepreneurs, investors, and employees together."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/img/python-develop.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
          imagePosition="right"
        />
        <HireDeveloper
          heading="Hire Python Developers In India"
          text="Comfygen offers a team of expert Python developers with over a decade of experience in delivering high-performance, scalable, and flexible solutions for diverse industries. Whether for full-time projects, short-term tasks, or recurring assignments, our dedicated developers excel in creating minimalist, feature-rich applications using the latest web technologies. Beyond coding, our skilled professionals follow best practices to build competitive software tailored to your business needs. Partner with Comfygen for innovative Python development that drives success."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Identify your requirements",
            "Look for a reliable recruitment agency",
            "Check the developers' qualifications and experience",
            "Review their portfolio and projects",
            "Conduct technical interviews"
          ]}
        />
        <InfoSection
          heading="Why Choose Us As Your Python Development Company?"
          description1="Comfygen offers our clients the latest and most futuristic Python Development by incorporating it into their projects. Object-oriented programming languages, such as Python, are high-level languages with dynamic semantics. Comfygen is a prominent Python development company with top-of-the-line Python developers who can develop complex Python-driven web applications with in-depth knowledge and experience. As a Python Django web development company, we have experience delivering large-scale projects. We strive to build Python desktop and web applications with state-of-the-art industry practices. If you choose Comfygen as your Python development partner, you will get out-of-the-box web solutions based on Python 3.7.0, Django, Web2py, and Flask frameworks. Our Python web development expertise can help you build a Python web development project. Moreover, we can help identify bottlenecks and optimize your Python application's performance."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/img/why-choose-us python-developer.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
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
          title=" Node.JS Development Solutions"
        />
      </div>
    </>
  )
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