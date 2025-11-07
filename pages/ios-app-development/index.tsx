import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import React from 'react'
import Head from 'next/head';
import JSON_DATA from "./json/ios.json"
import { IconBook, IconClock, IconGlobe, IconHeartbeat, IconMusic, IconShoppingCart, IconUsers, IconWallet } from '@tabler/icons-react';
import HeroSectionForAllPages from '../componentsnew/HeroSectionForAllPages';
import Header from '../componentsnew/Header';
import AboutSection from '../componentsnew/AboutSection';
import ServicesSec from '../componentsnew/ServicesSec';
import ContactFromCenter from '../componentsnew/ContactFromCenter';
import LatestTechnology from '../componentsnew/LatestTechnology';
import TechStack from '../componentsnew/TechStack';
import ProcessSec from '../componentsnew/ProcessSec';
import IndustriesServe from '../componentsnew/IndustriesServe';
import WhyChoose from '../componentsnew/WhyChooseUs';
import HireDeveloper from '../componentsnew/HireDeveloper';
import Faq from '../componentsnew/Faq';
import BlogSection from '../componentsnew/BlogSection';
import LazyLoad from 'react-lazy-load';

const schema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "brand": {
    "@type": "Brand",
    "name": "iOS App Development Company | ios mobile app development company"
  },
  "description": "Comfygen is your dependable partner for the creation of a top iOS app development company in UK, USA and UAE, providing first-class iOS Application Development Services to help your online swift app development services for ventures to reach new heights.",
  "image": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  "name": "Custom iPhone App Development Company | Comfygen",
  "review": [{
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "author": {
      "@type": "Person",
      "name": "Mr. Saddam Husen"
    }
  }],
  "offers": {
    "@type": "Offer",
    "url": "https://www.comfygen.com/ios-app-development",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": "Comfygen Private Limited"
    }
  }
}

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
const Process = [
  {
    title: "Ideation and Conceptualization",
    description: "First, we collaborate with users to understand your vision, define the strategy, and choose the right tech stack for the iOS app."
  },
  {
    title: "App Design",
    description: "Our skilled designers team creates intuitive UI/UX designs and prototypes, ensuring a visually appealing and user-friendly experience."
  },
  {
    title: "Development",
    description: "Using the latest tools and frameworks, we build high-performance, scalable iOS apps that provide a seamless user experience."
  },
  {
    title: "Testing and Quality Assurance",
    description: "Our QA team tests for flawless performance, security, and compatibility to deliver a bug-free, reliable product."
  },
  {
    title: "Deployment to the App Store",
    description: "We manage the App Store submission process, ensuring the user’s app meets guidelines for smooth approval and launch."
  },
  {
    title: "Post-Launch Support",
    description: "We offer continuous support, resolving issues and adding updates to maintain app performance and keep it competitive."
  },
  {
    title: "Support & Maintenance",
    description: "We provide ongoing monitoring, optimization, and scaling to adapt to user feedback, market trends, and evolving iOS versions."
  },

];

const technologyData = [
  {
    title: "On-Demand Service Apps",
    desc: "We develop on-demand iOS apps for services like food delivery, taxi booking, and home services, ensuring real-time tracking and secure payment options. We provide On-demand iOS app development solutions for startups.",
    img: <IconClock stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Social Networking Apps",
    desc: "We develop social networking apps with messaging, video calls, and content-sharing features customized for enhanced user engagement.",
    img: <IconUsers stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Healthcare Apps",
    desc: "As a reliable iOS app development company we create HIPAA-compliant healthcare apps for appointment booking, telemedicine, and health monitoring, offering secure and user-friendly app solutions.",
    img: <IconHeartbeat stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "E-Commerce Apps",
    desc: "E-Commerce Apps",
    img: <IconShoppingCart stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Finance and Banking Apps",
    desc: "Create feature-packed financial apps with real-time updates, secure transactions, and user-friendly dashboards for effortless financial management.",
    img: <IconWallet stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Education Apps",
    desc: "Develop interactive learning apps with virtual classrooms, live video sessions, and progress tracking for enhanced learning experiences.",
    img: <IconBook stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Travel and Tourism Apps",
    desc: "Build travel apps with GPS navigation, itinerary management, and personalized recommendations to make every journey seamless.",
    img: <IconGlobe stroke={1.5} className="w-12 h-12" />,
  },
  {
    title: "Entertainment and Media Apps",
    desc: "We specialize in creating apps for streaming, gaming, and content delivery, incorporating the latest AR/VR technology for immersive experiences.",
    img: <IconMusic stroke={1.5} className="w-12 h-12" />,
  },
];


export default function Mobile(props) {
  let { initialData } = props;

  useEffect(() => {
    AOS.init();
  }, [])
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
        <title>iOS App Development Company in Jaipur, India</title>
        <meta name="description" content="Comfygen is a trusted iOS app development company in Jaipur, India, with an award-winning team of iPhone app developers delivering tailored iOS applications for your needs." />
        <link rel="canonical" media="handheld" href="https://www.comfygen.com/ios-app-development" />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Are you looking for the best iPhone App Development Company | Hire iPhone App Developers" />
        <meta property="og:facebook_description" content="Are you looking for a reliable IOS App Development Industry? Hire our expert for iOS Applications we provide end-to-end Iphone app development services that meet your business needs." />
        <meta property="og:twitter_title" content="Top-Class iOS App Development Services in India & USA | iPhone App Development Services | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen is a top-ranked iOS app development company in India offering iPhone/iPad app development services to startups and dealings globally." />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='en-us' />
        <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <meta name="robots" content="imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <meta name='abstract' content='IOS App Development Company' />
        <meta name='summary' content='Comfygen is the Leading No 1 IOS App development company in India, USA.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish an iOS app company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='iphone app development company' content='Comfygen is a leading iPhone app development company in jaipur, India. Our iPhone app developers can create mobile apps..' />
        <meta name='category' content='ios application development services' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='ios application development Organization' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='ios application development company' />
        <meta name="robots" content="imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="iOS App Development Company in Jaipur, India" />
        <meta property="og:description" content="Comfygen is a trusted iOS app development company in Jaipur, India, with an award-winning team of iPhone app developers delivering tailored iOS applications for your needs." />
        <meta property="og:url" content="https://www.comfygen.com/ios-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-12-26T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/blockchain-mim-software.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <HeroSectionForAllPages
          heading="iOS App Development Company in India"
          ptag="Transform Your Ideas into Successful iOS Apps!"
          ptag1="Comfygen is a top iOS App Development Company in Jaipur, India, that specializes in developing custom iOS, iPad, and WatchOS applications that are customized to your business needs using Swift, Objective-C, and SwiftUI."
          li="8+ Years of experience in mobile app development"
          li1="Anytime Support "
          li2="Secure and Scalable Apps"
          li3="AI, ML, AR/VR, and blockchain technology Expertise"
          li4="On-Time Delivery"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/ios-app-dev-hero-img.webp"
        />
        <AboutSection
          title="About Company"
          heading="Trusted iOS App Development Company in India to Turn Ideas into Reality"
          description1="As a leading iOS app development company in Jaipur, India, we specialize in creating innovative and high-performance custom iOS, iPad, and WatchOS applications that drive business growth. Utilizing cutting-edge technologies like Swift, SwiftUI, and AR/VR, we deliver exceptional user experiences across various industries, including Finance, Healthcare, Education, and E-commerce."
          description2="We craft future-ready iOS app solutions that focus on performance, security, and user experience, ensuring end-to-end expertise aligned with your business goals. As a top-notch custom iOS app development company in India, we provide custom iOS app solutions that meet the specific needs of our clients."
          description3="Whether you’re an enterprise or a startup, we design cost-effective, scalable iOS app solutions to maximize ROI. We help businesses of all sizes develop future-proof apps that adhere to industry standards and stand out in today’s competitive digital landscape."
          imageSrc="https://www.comfygen.com/gallery/about-images/ios-app-development-about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title=" Our iOS App Development Services"
          description="As the best iOS app development company in Jaipur, India, elevate your business with our expert iOS app development services, providing custom, high-performance custom iOS apps for iPhone, iPad, and WatchOS."
        />
        <ContactFromCenter />
        <LatestTechnology
          heading="Bring Your Vision to Life with Expert iOS App Development"
          subheading="As a top iOS app development company in Jaipur, India, we specialize in providing cutting-edge iOS app development services across various industries. Whether you're looking to build on-demand iOS apps or create a niche application, we ensure innovation and seamless functionality."
          techData={technologyData}
        />
        <TechStack
          title=" Our Advanced Tech Stack for iOS App Development"
          description="Our iOS mobile app development company utilizes the latest technologies to empower new iOS apps for unique business ideas. We utilize the most robust and latest app development tools and frameworks to build your custom iOS apps. The selection of the right tools and frameworks for iOS app development has helped us serve our clients with user-friendly, secure, and robust iOS applications."
          filterCategory={["mobile"]}
        />
        <ProcessSec
          title="Our iOS App Development Process"
          description="As a leading iOS app development company in Jaipur, Comfygen provides top-quality iPhone app development services through a streamlined process."
          processSlides={Process}
        />
        <IndustriesServe />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our iOS Mobile App Developers"
          text="Looking for quick and cost-effective project delivery? Hire professional iOS mobile app developers from Comfygen to achieve exceptional results within your budget. Our skilled developers are dedicated to your project, ensuring faster delivery and high-quality iOS app solutions."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Determine Project Requirements",
            "Certified Developers",
            "Up-to-date with iOS Trends",
            "Collaboration and Communication",
            "Adherence to Apple Guidelines",
            "Post-Launch Support"
          ]}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" "
        />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
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