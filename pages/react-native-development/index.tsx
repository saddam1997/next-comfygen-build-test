import React, { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/reactnative.json";
import LazyLoad from "react-lazy-load";
import dynamic from "next/dynamic";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const AboutSection = dynamic(() => import('../../components/Newcomponet/SectionCompoent/AboutSection'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const InfoSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/InfoSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ConsultingSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ConsultingSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const HireDeveloper = dynamic(() => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Faq = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Faq"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});






export default function Altcoin(props: any) {
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
          Top React Native Development Company | Custom React Native App
          Development
        </title>
        <meta
          name="description"
          content="Looking for a reliable Indian React Native development company in India to build custom apps for your business? Contact us today for a free consultation."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/react-native-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Top React Native Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading React Native Development Company in India, widely known for its expertise to build web and mobile app development  for your business. Contact us today."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/react-native-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta name="language" content="en-us" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/react-native-development"
        />
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
          heading="React Native Development Services for Mobile Apps"
          ptag="Comfygen offers top-tier React Native app development services, creating highly functional and user-friendly cross-platform applications. Our experts deliver end-to-end solutions with exceptional coding standards, interactive UI/UX designs, and enhanced productivity for your business. Partner with us for superior React Native app development to build scalable, efficient apps that drive success."
          li="10+ Yr Expert React Native Team"
          li1="End-to-End React Native Solutions"
          li2="Apps & web That Scale Fast"
          li3="Cross-Platform Excellence"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/react-native-dev-hero-img.webp"
        />
        <AboutSection
          title="About Company"
          heading="React Native app Development Company"
          description1="React Native brings together the best of native development and React, a JavaScript library for building user interfaces. Create Android, iOS, Web, and UWP applications. React Native is flexible and scale able, so you can adapt it as much or aslittle as you need. Boost your distribution and exposure. Get a better understanding of your users data to enhance your marketing efforts and interactions."
          description2="You can build anything mobile-worthy, whether its a news aggregator, ride-sharing service, or anything else. You will make the right choice when you choose React Native."
          imageSrc="https://www.comfygen.com/gallery/about-images/react-native-development-about-us-img.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our React Native Development Services
              </h2>
              <p className="text-base text-center font-normal">We can help you build a high-performing application utilizing cutting-edge technologies, from designing an intuitive user interface to building multi-platform applications for iOS and Android.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        {/* <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="Our React Native Development Services"
          description="We can help you build a high-performing application utilizing cutting-edge technologies, from designing an intuitive user interface to building multi-platform applications for iOS and Android."
        /> */}
        <InfoSection
          heading="React Native Development"
          description1="The greatest React Native app development firm, Comfygen, stands out for providing top-notch services. When it comes to providing seamless solutions for your mobile app demands, our skilled team excels. We offer thorough consulting and migration services along with React Native app development. You can engage our skilled React Native app developers to ensure the success of your projects."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/images/react-native-dev.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <InfoSection
          heading="We Provide React Native App Migration Services"
          description1="As Businesses need to keep up with the technological landscape as it evolves. For modernizing legacy apps, React Native is the best solution. With powerful legacy app modernization services, we can help you re-configure your legacy apps or convert them completely to React Native for better UI and UX. Businesses have benefited from React Native in a number of ways, including"
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/media/images/flutter-app-migration-services-img.webp"
          link="/contact-us"
          linkText="Lets Discuss"
          imagePosition="right"
        />
        <InfoSection
          heading="Cost of React Native App Development"
          description1="The React Native framework, being free and open-source, provides a versatile platform for developing your idea, whether by assembling your own team or outsourcing the project. However, implementing features will require an investment based on the hourly rates of skilled software developers. The cost of building and developing with React Native often aligns with general software development expenses, making it a practical choice for creating robust and feature-rich applications."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/media/images/flutter-consulting-services-img.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        {/* <ContactFromCenter /> */}
        <HireDeveloper
          heading="Hire React Native App Developer India"
          text="With your thoughtfulness, we'll create the best native React Native based mobile apps using the React Native language for reasonable charges."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Experienced React Native developers are available for hire",
            "Dynamic mobile apps can be built with the help of well-versed resources",
            "NDA confidentiality is 100% guaranteed",
            "Hire a dedicated React Native developer"
          ]}
        />
        <ConsultingSec
          title="React Native Consulting Services"
          description="Build cross-platform applications with a native look and feel by hiring React Native consultants. We’ll guide you through a detailed process after understanding your business requirements."
          image="https://www.comfygen.com/images/react-native-consulting-services.webp"
          contactNumber="9587867258"
          ctaText="Get Instant Professional Advice"
        />
        <CallToAction
          heading="Kickstart Your Dream Project With Us"
          text="We have worked with some of the best innovative ideas and brands in the world across industries."
          buttonText="Initiate a Partnership"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="React Native App Development Services"
        />
      </div>
    </>
  );
}

