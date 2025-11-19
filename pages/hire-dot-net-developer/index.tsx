
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hireDotNet.json";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import CardItem from "../components/CardItem";
import ModelsSec from "../components/ModelsSec";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);


export default function Mobile(props) {
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
          Hire .Net Developer | ASP.NET Developers In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Looking to hire skilled .NET or ASP.NET developers for software development In India & The USA? Trust Comfygen to complete your project on time. Explore cost-effective ASP.NET development by hiring us."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-dot-net-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Optimizing Digital Health Experiences: Comfygen's Hire .Net Developer Expertise"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen's Hire .Net Developer expertise focuses on optimizing digital health app development services experiences through advanced mobile app development services, solutions. We leverage technology to bridge the gap between healthcare app development service providers and patients, fostering enhanced communication,data-driven insights, and improved care outcomes."
        />
        <meta
          property="og:twitter_title"
          content="Hire .Net Developer Services Innovation: Hire Top-Notch Healthcare App Developers in the United States at Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen empowers Hire .Net Developer company in India & the USA innovation by offering top-notch Hire .Net Developer services. Our dedicated team of healthcare app developers combines healthcare expertise with technical prowess to build customized mobile app development that align with your business goals, enhancing patient care and operational efficiency."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        <meta
          name="abstract"
          content="Top rated Healthcare App & Software Development Services"
        />
        <meta
          name="summary"
          content="Through our healthcare software development services, we prioritize quality to deliver robust mobile infrastructure tailored for both healthcare providers and patients, ensuring seamless integration and optimal functionality."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Healthcare Mobile Application Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Best Hire .Net Developer Services"
          content="Comfygen, a prominent Hire .Net Developer company in India & the USA, is at the forefront of revolutionizing patient care through cutting-edge digital health app development solutions. Our innovative approach enhances patient engagement, streamlines healthcare operations, and delivers superior care experiences."
        />
        <meta
          name="category"
          content="Patient Care: Hire .Net Developer Services, Solutions by Comfygen"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Healthcare dedicated mobile app developers in India - Best healthcare app developers in the USA, the UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best Healthcare Mobile Application Programmers India & USA | offshore healthcare software Programmers"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="">

        <div className="">
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/hire-dot-net-developer-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="Hire Best .Net Developer India"
                ptag="Secure your business by integrating blockchain technology into your existing digital solutions. Hire skilled blockchain developers at Comfygen to build effective decentralized applications for protocols like Ethereum, Polkadot, Tezos, Hyperledger, Stellar, Neo, and more. Our full-stack blockchain developers specialize in creating smart contracts tailored to your organization's needs."
                ptag1="Comfygen is here to help you secure your business and streamline transactional flows. Let’s consult and find the perfect solution for you."
                li="Expert Blockchain Developers"
                li1="Full-Stack Blockchain Solutions"
                li2="Smart Contract Development"
                li3="Secure & Scalable Solutions"
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
          title="About Us"
          heading="Comfygen - Your Leading Partner to Hire ASP Dot Net Developer"
          description1="Comfygen has deep knowledge and expertise in blockchain and decentralized applications. Take advantage of our skilled professional's knowledge and talent. Consult and understand which the best blockchain solution is right to build for your organization, resolve the technology challenges, and empower your business with rising potentials and profits. Improve the performance and credibility of your organization in the tech era with our comprehensive blockchain consulting services."
          description2="Within our projected project deadlines, our Asp.Net experts will work 100% accurately on your development project. Just tell us what kind of development experience you need, and we'll provide you with a list of candidates that is sorted to meet your project. It is not worth waiting, so tap and hire asp dot net developer"
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >.Net Development Services</h2>
              <p className="text-base text-center font-normal">We are able to provide a wide range of .NET development services in the .NET Domain because of our technical proficiency and use of the agile development technique. We provide the following tactful solutions when you work with our .NET programmers:</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <CardItem
          heading="How to Connect With Our ASP .Net Developers?"
          subheading="Do you want to hire dedicated asp net developers in India? Comfygen should be your one-stop destination, as we have experienced and expert developers to conquer in the marketplace with our development process. Connect with our skilled team seamlessly:"
          techData={JSON_DATA.cardData}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
        />
      </div>
    </>
  );
}

