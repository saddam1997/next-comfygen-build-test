import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import { RiFlutterFill, RiFlutterLine } from "react-icons/ri";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import { TfiSupport } from "react-icons/tfi";
import JSON_DATA from "./json/flutter.json";
import LazyLoad from "react-lazy-load";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import Header from "../componentsnew/Header";
import AboutSection from "../componentsnew/AboutSection";
import ServicesSec from "../componentsnew/ServicesSec";
import ContactFromCenter from "../componentsnew/ContactFromCenter";
import HireDeveloper from "../componentsnew/HireDeveloper";
import WhyChoose from "../componentsnew/WhyChooseUs";
import CallToAction from "../componentsnew/CallToAction";
import Faq from "../componentsnew/Faq";
import BlogSection from "../componentsnew/BlogSection";
import InfoSectionLeft from "../componentsnew/InfoSectionLeft";
import InfoSectionRight from "../componentsnew/InfoSectionRight";
import HeadingSec from "../componentsnew/headingSec";



export default function MultiChain(props) {
  let { initialData } = props;
  useEffect(() => {
    AOS.init();
  }, []);

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
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Flutter Development Company in Jaipur, India | Hire Best Cross-Platform App Developers
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Flutter Development Company in Jaipur, India that creates customized cross-platform apps for businesses. Get in touch with Comfygen expert flutter app developers to build your next cross-platform app today."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/flutter-development-company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Flutter Development Company in Jaipur, India | Hire Best Cross-Platform App Developers"
        />
        <meta name="language" content="en-us" />
        <meta
          property="og:description"
          content="Comfygen is a leading Flutter Development Company in Jaipur, India that creates customized cross-platform apps for businesses. Get in touch with Comfygen expert flutter app developers to build your next cross-platform app today."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/flutter-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <HeroSectionForAllPages
          heading="Flutter App Development for Next-Gen Mobile Experiences"
          ptag="As the leading Flutter app development company in India, we’re your ideal partner for building cross-platform, user-friendly applications. Our expert Flutter developers work across industries to help clients achieve business goals, whether for startups or large enterprises. We deliver tailored Flutter solutions that elevate brands and meet specific business needs on every digital platform."
          li="10+ Yr Expert Flutter Team"
          li1="End-to-End Flutter Solutions"
          li2="Apps That Scale Fast"
          li3="Cross-Platform Excellence"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/flutter-app-dev-hero-img.webp"
        />
        <AboutSection
          title="About Company"
          heading="Unlock New Business Potential with Cutting-Edge Flutter Solutions"
          description1="We Provide end-to-end Flutter app development services, including business idea generation, development, deployment, and support. Also we provide complete UI/UX design, programming, testing, and maintenance services for Flutter apps. Our team of skilled Flutter developers has experience building cross-platform digital experiences that work flawlessly on a variety of devices. Whether you require a Flutter online application or a Flutter mobile application, our developers can provide custom solutions to satisfy your needs. Hire one of our talented Flutter programmers to realize your vision for a digital product and deliver top-notch user experiences."
          imageSrc="https://www.comfygen.com/gallery/about-images/flutter-development-company-about-us-img.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ServicesSec
          servicesData={JSON_DATA.servicesData}
          title="Flutter Development Service"
          description="We Provide end-to-end Flutter app development services, including business idea generation, development, deployment, and support."
        />
        <HeadingSec
          title="Why We're India's Premier Flutter App Development Company"
          description="With our Flutter mobile app development services, you can create a multi-platform presence. From discovering the best product-market fit to smoothly deploying your application across multiple platforms, our Flutter developers can help you design, develop, test, and launch full-featured Flutter applications."
        />
        <InfoSectionLeft
          heading="Cost of Flutter App Development"
          description1="We develop Flutter apps with native performance and flexible UI designs that are highly interactive and functional. With our Flutter app development expertise, we can turn your idea into a profitable and fully-fledged app. Our team has vast Flutter architecture experience and builds apps with interactive UI, high performance, and agile deployment."
          imageSrc="https://www.comfygen.com/media/images/cost-of-flutter-app-development-img.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <InfoSectionRight
          heading="Flutter App Migration Services"
          description1="You can migrate your Android and iOS app development to Flutter with our help. Taking your existing application across platforms and operating systems is one of our specialties. Our team of Flutter Android app development and deployment experts can help you. For platform-agnostic apps, we are the Flutter app development company the world trusts."
          imageSrc="https://www.comfygen.com/media/images/flutter-app-migration-services-img.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <InfoSectionLeft
          heading="Flutter Consulting Services"
          description1="In terms of framework maturity and use cases, Flutter app development has come a long way since its inception. Providing you with assistance in validating your Flutter app idea and ensuring that the framework is the best technical solution for your product idea is our goal."
          imageSrc="https://www.comfygen.com/media/images/flutter-consulting-services-img.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <ContactFromCenter />
        <HireDeveloper
          heading="Benefits of hire Flutter developer"
          text="The Flutter iOS app development services we provide are built on the framework's best features.With the SDK, we provide a native end-user experience, expressiveness, flexible UI, and lightning-fast load speed of 60ms Make your application the symbol of excellence across all platforms with FPS."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Development at a rapid pace",
            "Flexible and expressive user interface",
            "Native Performance",
          ]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <CallToAction
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Flutter App Development Services"
        />
        <BlogSection initialData={initialData} />
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
