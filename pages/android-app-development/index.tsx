import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import React from 'react'
import Head from 'next/head';
import JSON_DATA from "./json/ios.json"
import LazyLoad from 'react-lazy-load';
import BlogSection from '../componentsnew/BlogSection';
import HeroSectionForAllPages from '../componentsnew/HeroSectionForAllPages';
import AboutSection from '../componentsnew/AboutSection';
import ServicesSec from '../componentsnew/ServicesSec';
import TechStack from '../componentsnew/TechStack';
import ProcessSec from '../componentsnew/ProcessSec';

import WhyChoose from '../componentsnew/WhyChooseUs';
import HireDeveloper from '../componentsnew/HireDeveloper';
import Faq from '../componentsnew/Faq';
import Header from '../componentsnew/Header';
import ContactFromCenter from '../componentsnew/ContactFromCenter';
import IndustriesServe from '../components/IndustriesServe';



const ldJson = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "priceRange": "$20-$55",
  "image": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/ios-app-development",
  "name": "Best iOS App Development Company India, USA, UAE, Germany",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-152, Dayanand Marg, Nemi Nagar,",
    "addressLocality": "Vaishali Nagar, Near D A V Centenary Public School",
    "addressRegion": "Jaipur, Rajasthan",
    "postalCode": "302021",
    "addressCountry": "IN"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Saddam husen"
    }
  },
  "url": "https://www.comfygen.com/ios-app-development",
  "telephone": "+91 9587867258"
};


export default function Mobile(props) {
  let { initialData } = props;

  // useEffect(() => {
  //   AOS.init();
  // }, [])


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
        <title>Top Android App Development Company in Jaipur, India</title>
        <meta name="description" content="Comfygen is a top rated Android app development company in Jaipur, India with a proven success record of over 6 years in mobile application development." />
        <link rel="canonical" href="https://www.comfygen.com/android-app-development" />
        <meta property="og:locale" content="en-us" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top Android App Development Company in Jaipur, India" />
        <meta property="og:description" content="Comfygen is a top rated Android app development company in Jaipur, India with a proven success record of over 6 years in mobile application development." />
        <meta property="og:url" content="https://www.comfygen.com/android-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:04:03+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.comfygen.com/android-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2025-01-13T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/blockchain-mim-software.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="overflow-hidden">
        <HeroSectionForAllPages
          heading="Top-Rated Custom Android App Development Company"
          ptag="Comfygen is a Leading Android App Development Company in Jaipur, India with a team of highly experienced developers. We provide customized, scalable, high-performance Android app development solutions for startups and small businesses. Our cutting-edge mobile apps are designed to boost business growth, enhance user engagement, and ensure long-term success from concept to launch."
          li="10+ Years of Expertise"
          li1="High-Performance & Secure Apps"
          li2="User-Friendly UI/UX Designs"
          li3="Strict NDA Compliance"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/android-app-dev-hero-img.webp"
        />
        <AboutSection
          title=""
          heading="Why Comfygen is Your Trusted Android App Development Partner in India"
          description1="As a Trusted Android application development company, We provide custom Android app solutions, we are committed to building innovative, high-performance Android mobile apps that perfectly align with your mobile app development business goals. "
          description2="As expert Android app developers providing custom Android app solutions for startups and small businesses. We specialize in creating custom mobile apps for B2B, and B2C models, including domains like gaming, AR/VR, IoT, news, entertainment, multimedia, utility, chat, shopping, ticket booking, and more. "
          description3="We provide expert Android app development services in Jaipur, creating secure, scalable, and user-friendly mobile apps for businesses. From enterprise solutions to consumer apps, we deliver seamless functionality and long-term value. We provide custom Android app development solutions that are agile, flexible, and future-proof, allowing your Android mobile app to scale as your <a href='/mobile-app-development' class='text-blue-700 font-semibold'>mobile app development</a> business evolves. "
          description4="Our Android app development approach ensures optimized user experiences and business outcomes, making us a leading app development company in Jaipur for e-commerce and beyond. With a focus on performance, security, and innovation, we transform your vision into a powerful mobile app that drives success."
          imageSrc="https://www.comfygen.com/gallery/about-images/android-app-development-about-us-img.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="Our Comprehensive Android App Development Services"
          description="As the best Android app development company in Jaipur, India, We provide the top Android app development services for entrepreneurs and startups in India. What services, We offer"
        />
        <TechStack
          title=" Our Cutting-Edge Technology Stack for Android App Development"
          description="You can hire Android developers from our team with the assurance of expertise in the modern technology stack to create Android apps."
        />
        <ProcessSec
          title="Step-by-Step Android App Development Process"
          description="As a trusted Android app development company in Jaipur, India, we create secure, scalable, and future-proof Android apps."
          processSlides={JSON_DATA.Process}
        />
        <ContactFromCenter />
        <IndustriesServe />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Android Application Developers"
          text="If you want a quick delivery of your project at a nominal charge, it would be a great idea to hire professional Android Developers. They can focus on your project entirely and deliver you faster results."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Dynamic mobile apps can be built with the help of well-versed resources",
            "The management of glazing ideas, development, and delivery",
            "Ability to Meet Deadlines",
            "NDA confidentiality is 100% guaranteed"
          ]}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" "
        />
      </div >
    </>
  );
}

