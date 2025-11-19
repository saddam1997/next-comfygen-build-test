import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/applicationConsulting.json";
import LazyLoad from "react-lazy-load";
import { IconApps, IconBrain, IconCloud, IconCurrencyBitcoin, } from '@tabler/icons-react';

import HeroSectionForAllPages from "../../componentsnew/HeroSectionForAllPages";
import AboutSection from "../../componentsnew/AboutSection";
import ContactFromCenter from "../../componentsnew/ContactFromCenter";
import ServicesSec from "../../componentsnew/ServicesSec";

import ConsultancyApproach from "../../componentsnew/ConsultancyApproach";
import HireDeveloperSec from "../../componentsnew/HireDeveloperSec";
import LatestTechnology from "../../componentsnew/LatestTechnology";
import WhyChoose from "../../componentsnew/WhyChooseUs";
import Faq from "../../componentsnew/Faq";
import Header from "../../componentsnew/Header";
import IndustriesServe from "../../components/IndustriesServe";


export default function Mobile(props) {
  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);


  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  

  const technologyData = [
    {
      img: <IconCloud stroke={1.5} className="w-12 h-12" />,
      title: "Cloud Computing",
      desc: "A fundamental component of contemporary applications, cloud computing provides scalability, cost-efficiency, and remote access. Comfygen excels in recommending the most suitable cloud platform (such as AWS, Azure, GCP) tailored to meet your specific requirements."
    },
    {
      img: <IconBrain stroke={1.5} className="w-12 h-12" />,
      title: "AI/Machine Learning (AI/ML)",
      desc: "Unlock the potential of cutting-edge technologies with Comfygen's expertise in AI and Machine Learning. By incorporating advanced features into your applications, you can stay ahead of the competition and provide users with a more interactive and personalized experience. Let Comfygen help you harness the full capabilities of AI to take your products to the next level."
    },
    {
      img: <IconCurrencyBitcoin stroke={1.5} className="w-12 h-12" />,
      title: "Blockchain",
      desc: "By leveraging the power of blockchain, businesses can streamline their operations, increase trust among stakeholders, and ensure the integrity of their data. Comfygen's expertise in blockchain technology can help organizations navigate the complexities of implementation and maximize the advantages it offers. Whether it's optimizing supply chain processes, ensuring secure financial transactions, or maintaining immutable records, blockchain has the potential to transform the way businesses operate."
    },
    {
      img: <IconCurrencyBitcoin stroke={1.5} className="w-12 h-12" />,
      title: "Mobile Development Technologies",
      desc: "At Comfygen, we specialize in utilizing cutting-edge mobile development technologies such as Kotlin for Android and Swift for iOS to craft high-quality native mobile applications. Additionally, we are well-versed in cross-platform frameworks like React Native, enabling us to reach a broader audience with our innovative mobile solutions. Trust Comfygen to deliver top-notch mobile development services tailored to your specific needs and requirements."
    },
    {
      img: <IconApps stroke={1.5} className="w-12 h-12" />,
      title: "Web Development Technologies",
      desc: "Web development technologies are crucial for creating dynamic and interactive web applications. HTML, CSS, and Javascript are the building blocks of these applications, providing the necessary foundation for functionality and design. Comfygen specializes in recommending the best frameworks, such as Angular and React, to develop robust and user-friendly web interfaces that meet the needs of modern users. Trust Comfygen to guide you in utilizing the latest technologies to enhance your online presence and user experience."
    },
    {
      img: <IconApps stroke={1.5} className="w-12 h-12" />,
      title: "Other Cutting-Edge Technologies",
      desc: "Explore the latest advancements in technology with Comfygen, as they delve into cutting-edge fields such as Quantum Computing and the Internet of Things (IoT). By partnering with Comfygen, you can receive expert guidance on seamlessly incorporating these innovative technologies into your applications to ensure they remain relevant and efficient for years to come."
    }
  ];


  return (
    <>
      <Head>
        <title>
          Application Consulting Services - Comfygen 📲🤝
        </title>
        <meta
          property="og:title"
          content="Mobile App Development & consulting services Company 📲🤝"
        />
        <meta
          name="description"
          content="Comfygen provide best mobile app consulting services with 15+ Experience Experts Centric provides app consulting to mobile app development. Get consult with us today!  "
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/application-consulting-services"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Consulting Services & mobile App Development Company | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our Consultancy expert in mobile app development, delivering custom mobile application services, user-friendly app development solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Custom Mobile Application Development & Consulting Services"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best Custom mobile application development and consultancy company in India & the USA that offers iPhone/iOS, Android app development consulting services from startup to enterprise level Business."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Mobile Application Consulting Services And App Development Company in India and USA"
        />
        <meta
          name="summary"
          content="Comfygen Pvt. LTD. is the best custom mobile app development Firm and Top-notch mobile app Consultant service provider in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development & App consultancy agency in Bharat, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Consulting and application Development Company"
          content="Comfygen is a top-notch Mobile app development and Consultancy services organization in the USA & India. Get ahead of the competition with the top mobile app development services, company In India. Our expert team can bring your ideas to Business Goal."
        />
        <meta
          name="category"
          content="Mobile App Development & Application Consulting Company in India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Mobile App Consulting Services & Mobile app Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="43.781269°" />
        <meta name="og:longitude" content="-79.230759" />
        <meta
          property="og:type"
          content="Mobile App Development & Consultancy app services Company In India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="overflow-hidden ">
        <HeroSectionForAllPages
          heading="Application Consulting Services"
          ptag="Comfygen helps clients acknowledge different business plans, possible exposures, and promising mobile application development consulting services to grow and level up among impeccable and settled market competitors. We are a proficient mobile app development company with many years of experienced developers and market researchers to provide mobile app development consultancy services to learn what’s best for the specific niche-oriented business."
          li="Influential Mobile App Development Consultancy"
          li1="Fulfill Business and User’s Perspective"
          li2="Strategic Plans for Mobile App Development"
          li3="Unique App Development Ideas with Innovative Approaches"
          bgImage="https://www.comfygen.com/herosection/application-consulting-services-hero-img.webp"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
        />
        <AboutSection
          title=""
          heading="Leading Mobile App Consultancy for a Futuristic Market"
          description1="Comfygen is an 8+ years experienced IT firm that has acquired the talents of 10 to 15+ years of experienced developers, researchers, and analysts. This company is more focused on delivering quality over quantity. We cater mobile app consulting services to clients with optimum innovative approaches to development, deployment, and even post-deployment support & maintenance. Our mobile app developers are attentive to cutting-edge technologies and trending techs to build robust mobile applications that carry the potential to engage users in the long run."
          description2="Not only the expertise we have, but our team of IT engineers also understands every domain, niche, and industrial type. Every industry is revolutionized by technological advancements and unique ideations. Our app development consultants are well-versed in the current revolutions and possible futuristic changes. Therefore, they can comment better on the clientele’s app development idea and suggest bright application consultancy to build a potent mobile application that fulfills every need with vast engagement."
          description3="Book your application consulting services today to take the business forward and grow in the market with advanced methods and technologies."
          imageSrc="https://www.comfygen.com/gallery/about-images/application-consulting-services-about-us-img.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="Our Mobile App Development Consultancy Services"
          description="The mobile app development idea and application integration services need to be evaluated in certain ways. Here are the top-notch strategic mobile application development consulting services we provide to assess the app development requirements."
        />
        <IndustriesServe />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/application-consulting-services-consultancy-approach.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <HireDeveloperSec
          heading="Hire App Development Consulting to success"
          dec="Looking for incredible mobile applications with modernized technical solutions? You have come to the absolute right platform “Comfygen”, where the highly skilled and years of experienced mobile app developers. "
          dec1="Looking for incredible mobile applications with modernized technical solutions? You have come to the absolute right platform “Comfygen”, where the highly skilled and years of experienced mobile app developers. "
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-consulting-img.webp"
          imageAlt="hire-developer"
        />
        <LatestTechnology
          heading="Adopting the Latest Technology Trends in App Development"
          subheading="Comfygen is widely known for its extensive knowledge of various technologies essential for application consulting services. Let's delve into a detailed analysis, highlighting crucial aspects:"
          techData={technologyData}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
        />
        {/* <FormSec /> */}
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
