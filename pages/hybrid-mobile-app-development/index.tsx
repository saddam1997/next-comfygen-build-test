import 'aos/dist/aos.css';
import React, { useState } from 'react'
import Head from 'next/head';
import JSON_DATA from "./json/hybrid.json"
import LazyLoad from 'react-lazy-load';
import Header from '../componentsnew/Header';
import ServicesSec from '../componentsnew/ServicesSec';
import HireDeveloper from '../componentsnew/HireDeveloper';
import ConsultancyApproach from '../componentsnew/ConsultancyApproach';
import InfoSection from '../componentsnew/InfoSectionLeft';
import WhyChooseUs from '../componentsnew/WhyChooseUs';

import CallToAction from '../componentsnew/CallToAction';
import HeroSectionForAllPages from '../componentsnew/HeroSectionForAllPages';
import AboutSection from '../componentsnew/AboutSection';
import ContactFromCenter from '../componentsnew/ContactFromCenter';
import IndustriesServe from '../components/IndustriesServe';
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
        <title>Best Hybrid Mobile App Development Company in jaipur, India | Get Best Solutions</title>
        <meta property="og:title" content="Best Hybrid Mobile App Development Company in jaipur, India | Get Best Solutions" />
        <meta name='description' content='Comfygen, the premier hybrid mobile app development company in Jaipur India, offers top-notch hybrid mobile app development services to bring your app vision to life. Contact us today!' />
        <meta name='og:description' content='Comfygen, the premier hybrid mobile app development company in Jaipur India, offers top-notch hybrid mobile app development services to bring your app vision to life. Contact us today!' />
        <link rel='canonical' href='https://www.comfygen.com/hybrid-mobile-app-development' />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Are you looking for best Hybrid App Development Company | Hire Hybrid App Developers" />
        <meta property="og:facebook_description" content="Looking for a reliable Hybrid mobile app development Industry? Our expert Hire Hybrid App Developers provide end-to-end Hybrid mobile app development services that meet your business needs." />
        <meta property="og:twitter_title" content="Top Hybrid Mobile App Developers Company India & USA | Hybrid App Development Services | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen, the Best Hybrid mobile application development company in India, UK, UAE & USA. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5." />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='en-us' />
        <meta name='abstract' content='Hybrid Mobile App Development Company in  India' />
        <meta name='summary' content='Comfygen is the No 1 Hybrid mobile app development Industry in India, USA.' />
        <meta name='author' content='Mr. Dilip khan, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a company, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Hybrid Mobile App Development Company in  India' content='Comfygen is a leading Hybrid Mobile app development company in jaipur, India. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5.' />
        <meta name='category' content='Hybrid Mobile App Development Company in  India' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Hybrid Mobile Application Development Organization' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Hybrid Mobile App Development Company in  India' />
        <meta name="google-site-verification" content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg" />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <HeroSectionForAllPages
        heading="Best Hybrid Mobile App Development Company"
        ptag="Providing all your software development needs in India and USA, Comfygen is a leading Hybrid App Development Service, Solution Company. We offer expert advice on selecting the most appropriate hybrid development tools and incorporating advanced technologies to develop custom business applications that meet your requirements seamlessly."
        li="Experts with 15+ Years of Experience"
        li1="Security & IP Protection"
        li2="Flexible Engagement Models"
        li3="On-Time Project Delivery"
        bgImage="https://www.comfygen.com/herosection/mobile-app-development-hero-section-img.webp"
        btnName="Talk With Expert"
        btnLink="/contact-us"
        openModal={openModal}
        talkToExpertModal={talkToExpertModal}
        setTalkToExpertModal={setTalkToExpertModal}
        closeModal={closeModal}
      />
      <AboutSection
        title="About Company"
        heading="Best Hybrid App Development Service Provider in India"
        description1="At Comfygen Softwares' Hybrid app developers create apps that not only deliver utility but also deliver EXPERIENCE! Being able to deliver a lasting experience is a real challenge. Our team has delivered hundreds of Hybrid applicationss for hundreds of businesses across a wide range of industries over more than a decade."
        description2="The apps developed by our company feature powerful performance, next-generation features, research-based UX/UI, and support for current technologies such as machine learning app development, IoT app development, augmented reality app development, and 3D modeling. It is our goal to put your enterprise, small business, or startup way ahead of the competition. We are known for our uncompromised work ethics and world-class quality of work. When it comes to turning your idea into a profitable business, we leave no stone unturned."
        imageSrc="https://www.comfygen.com/gallery/about-images/hybrid-mobile-app-development-about-us-img.webp"
        link="/about-us"
        linkText="Explore More"
      />
      <ServicesSec
        servicesData={JSON_DATA.servicesData}
        title=" Our Hybrid App Development Services"
        description="Accelerate your digital transformation with our cutting-edge hybrid app development services. Harnessing the power of cross-platform compatibility, cost-effectiveness, and seamless user experiences, our team delivers high-performing, feature-rich apps that cater to diverse business needs. Partner with us to unlock the full potential of hybrid app development companies in Jaipur and elevate your business to new heights"
      />
      <HireDeveloper
        heading="Hire Hybrid App Developers"
        text="If you want a quick delivery of your project at a nominal charge, it would be a great idea to hire professional Hybrid Mobile App Developers. They can focus on your project entirely and deliver you faster results."
        buttonText="Hire Developer"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
        imageAlt="hire-developer"
        listItems={[
          "Determine project requirements.",
          "Look for hybrid app development experience.",
          "Evaluate technical skills.",
          "Consider communication skills ."
        ]}
      />
      <ContactFromCenter />
      <ConsultancyApproach
        Head={JSON_DATA.consultancyHead}
        ItemData={JSON_DATA.consultancyData}
        imageSrc="https://www.comfygen.com/image/hybrid-mobile-app-development-advantages-img.webp"
        buttonText="Let’s Discuss"
        buttonLink="/contact-us"
      />
      <InfoSection
        heading="Leading Hybrid Web Application Development Company in India"
        description1="At Comfygen Softwares' Hybrid app developers create apps that not only deliver utility but also deliver EXPERIENCE! Being able to deliver a lasting experience is a real challenge. Our team has delivered hundreds of Hybrid applicationss for hundreds of businesses across a wide range of industries over more than a decade."
        description2="The apps developed by our company feature powerful performance, next-generation features, research-based UX/UI, and support for current technologies such as machine learning app development, IoT app development, augmented reality app development, and 3D modeling. It is our goal to put your enterprise, small business, or startup way ahead of the competition. We are known for our uncompromised work ethics and world-class quality of work. When it comes to turning your idea into a profitable business, we leave no stone unturned."
        imageSrc="https://www.comfygen.com/image/hybrid-web-application-development-img.webp"
        link="/about-us"
        linkText="Explore More"
      />
      <WhyChooseUs
        title={JSON_DATA.pageData.title}
        description={JSON_DATA.pageData.description}
        mainCardData={JSON_DATA.pageData.mainCardData}
        gridData={JSON_DATA.pageData.gridData}
      />
      <IndustriesServe />
      <CallToAction
        heading="Let’s Build the Future of Technology Together"
        text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
        buttonText="Get Started"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
        imageAlt="Future of Technology"
      />
    </>
  );
}



export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

