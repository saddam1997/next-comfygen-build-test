import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import JSON_DATA from "./json/flutter.json";
import LazyLoad from "react-lazy-load";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const HeadingSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/headingSec"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { ssr: true }
);

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


// import ContactFromCenter from "../componentsnew/ContactFromCenter";

export default function MultiChain(props: any) {
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
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Flutter App Development Company in India | Hire Flutter Developers
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Flutter app development company in India delivering scalable, secure cross-platform apps for Android and iOS with expert Flutter developers."
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
          heading="Flutter App Development Company in India "
          ptag="Comfygen is a trusted Flutter app development company in India, delivering high-performance, cross-platform mobile applications for startups and enterprises. Our experienced Flutter developers build secure, scalable, and user-friendly apps using a single codebase for Android, iOS, and web—helping businesses reduce costs and accelerate time-to-market."
          ptag1="We focus on custom Flutter app development that supports long-term growth, smooth UI/UX, and seamless performance across devices. From MVPs to enterprise-grade applications, our Flutter solutions are designed to meet your business goals and evolving digital needs."
          li="Custom Cross-Platform App Development Services"
          li1="Scalable, Secure & High-Performance Flutter Apps"
          li2="End-to-End Flutter Development & Support"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/flutter-app-dev-hero-img.webp"
        />
        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Flutter app development services
              </h2>
              <p className="text-base text-center font-normal">
                We provide end-to-end Flutter app development services, covering business idea validation, development, deployment, and ongoing support. Our solutions help businesses create high-performance, cross-platform apps with a seamless user experience.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title=""
          heading="Unlock New Business Potential with Advanced Flutter Solutions"
          description1="We offer end-to-end Flutter app development services, covering everything from business idea consultation and app design to development, deployment, and ongoing support. Our comprehensive flutter app development services include UI/UX design, programming, testing, and maintenance to ensure your Flutter app performs flawlessly across platforms."
          description2="Our team of expert Flutter developers specializes in building cross-platform applications that deliver seamless user experiences on both web and mobile devices. Whether you need a Flutter mobile app or a Flutter web application, we create custom solutions tailored to your business goals."
          imageSrc="https://www.comfygen.com/gallery/about-images/flutter-development-company-about-us-img.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <CallToAction
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <IndustriesServe
          heading="Industries We Serve As Best Flutter App Development Company"
          description="Comfygen provides flutter app development solutions across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success."

        />

        <HeadingSec
          title="Why We're India's Premier Flutter App Development Company"
          description="With our Flutter mobile app development services, you can create a multi-platform presence. From discovering the best product-market fit to smoothly deploying your application across multiple platforms, our Flutter developers can help you design, develop, test, and launch full-featured Flutter applications."
        />
        <InfoSection
          heading="Cost of Flutter App Development"
          description1="We develop Flutter apps with native performance and flexible UI designs that are highly interactive and functional. With our Flutter app development expertise, we can turn your idea into a profitable and fully-fledged app. Our team has vast Flutter architecture experience and builds apps with interactive UI, high performance, and agile deployment."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/media/images/cost-of-flutter-app-development-img.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
          imagePosition="left"
        />
        <InfoSection
          heading="Flutter App Migration Services"
          description1="You can migrate your Android and iOS app development to Flutter with our help. Taking your existing application across platforms and operating systems is one of our specialties. Our team of Flutter Android app development and deployment experts can help you. For platform-agnostic apps, we are the Flutter app development company the world trusts."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/media/images/flutter-app-migration-services-img.webp"
          imagePosition="right"
          link="/contact-us"
          linkText="Lets Discuss"
        />
        <InfoSection
          heading="Flutter Consulting Services"
          description1="In terms of framework maturity and use cases, Flutter app development has come a long way since its inception. Providing you with assistance in validating your Flutter app idea and ensuring that the framework is the best technical solution for your product idea is our goal."
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

        <ClientStories/>

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Flutter App Development Services"
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

