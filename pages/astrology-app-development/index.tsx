
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./Astrology.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../components/Newcomponet/comman/Milestones";
import Link from "next/link";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";

const AboutSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/AboutSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});




const Features = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Features"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Portfolio = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Portfolio"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ProcessSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ProcessSec"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const TechStack = dynamic(() => import("../../components/Newcomponet/SectionCompoent/TechStack"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const SolutionsFeature = dynamic(() => import("../../components/Newcomponet/SectionCompoent/astrology/SolutionsFeature"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const WhyChoose = dynamic(() => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const HireDeveloper = dynamic(() => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const ClientTestimonials = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const Faq = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Faq"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const CallToAction = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CallToAction"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const AppcardSlider = dynamic(() => import("../../components/Newcomponet/SectionCompoent/AppcardSlider"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});


const BlogSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/BlogSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: true,
});



export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let { Frequently } = JSON_DATA;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);

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
          Astrology App Development Company in India | Comfygen
        </title>
        <meta
          name="description"
          content="Looking for an astrology app development company in India to take your astrology business online? Comfygen offers advanced astrology app development services with AI-powered & Blockchain for startups."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/astrology-app-development"
        />

        <meta
          name="keywords"
          content="Astrology App Development, Horoscope App Development, Kundli App Development, Panchang App Development, Numerology App Development, AI Astrology App, AR Horoscope App, Develop Astrology App like Astrotalk"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:title" content="Best Astrology App Development Company | Comfygen" />
        <meta
          property="og:description"
          content="Build powerful, AI-driven astrology apps with Comfygen – a trusted astrology app development company for personalized, real-time horoscope, kundli, and numerology apps."
        />
        <meta property="og:url" content="https://www.comfygen.com/astrology-app-development" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp"
        />
        <meta
          property="secure_url"
          content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Astrology App Development Services" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Astrology App Development Company | Custom Astrology Solutions" />
        <meta
          name="twitter:description"
          content="Partner with Comfygen – a leading astrology app development company delivering AI, Blockchain, and AR/VR-powered astrology apps for startups and astrologers worldwide."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/astrology-app-development/astrology-app-development.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      <Header />
      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Astrology App Development Company in India"
          ptag="Partner with a trusted astrology app development company in India to build top-notch astrology applications. At Comfygen, we deliver advanced astrology app development services using AI/ML, blockchain, and modern frameworks to create accurate, engaging, and high-performance astrology apps. Our expert astrology app developers transform your idea into a future-ready digital astrology solution tailored to your business goals."
          ptag1=""
          li="Custom Astrology App Development"
          li1="AI/ML & Blockchain Integration"
          li2="Scalable & Secure App Architecture"
          li3="Hire Experienced Astrology App Developers"
          li4="24/7 Support & Maintenance"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/image/hero-imageastrology-app-development.webp"
        />

        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                We Provide Result-Oriented Astrology App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen provides top-notch custom astrology app development services for modern businesses, enhancing user engagement and delivering accurate astrological insights. Our dedicated astrology app developer offers real-time predictions, seamless consultations, and scalable solutions tailored to meet your business requirements.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Build Feature-Rich Astrology Apps for Startups & Enterprises"
          description1="The astrology industry is growing rapidly and is expected to reach $22.8 billion by 2031. Today, more than 70% of users prefer mobile-based astrology services for instant predictions and consultations."
          description2="Astrology apps are popular because users want quick and trusted predictions on their phones. With on-demand astrology app development, businesses can earn money through subscriptions, paid chats, and premium features, while reaching a wider audience worldwide."
          description3="Our best Astrology app development teams to help you create world-class astrology apps that show daily horoscopes, kundli details, and online astrologer consultations. These best astrology applications work smoothly on Android, iOS, and web devices."
          points={[]}
          imageSrc="https://www.comfygen.com/comfygen-images/astrology-app-development/about1.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <AppcardSlider
          heading="Explore Our Pre-Built Clones of Popular Astrology Apps for Quick Launch"
          description="Comfygen is a next-gen astrology app development agency in India, offering high-quality, on-demand astrology app solutions inspired by top astrology platforms. Get a customized, feature-rich astrology app tailored to your business needs today!"
          sliderData={JSON_DATA.IndustriesServe}
          openModal={openModal}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Astrology App Development Portfolio"
            description="At Comfygen, we take pride in delivering innovative and feature-rich astrology apps. Here are some of our recent projects showcasing our expertise in creating secure, scalable, and engaging astrology solutions"
          />
        </section>

        <CallToAction
          heading="Start Your Astrology App Project Today"
          text="Bring your astrology app idea to life with Comfygen’s expert astrology software developers. Build feature-rich, AI-powered, and secure astrology apps that engage users and grow your business fast. Don’t wait—turn your idea into reality now!"
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <div className="py-8">
          <Features
            heading="Essential Features for Your Astrology App"
            description="At Comfygen, we integrate cutting-edge features into our astrology app development services to enhance user experience, streamline management, and optimize astrology consultations. Our custom astrology app solutions include advanced panels for users, astrologers, and administrators, ensuring a seamless and feature-rich platform."
            featuresData={JSON_DATA.featuresData}
            grid={3} />
        </div>

        <section className="lg:py-16 py-10 bg-[#F5F5F9] mt-8">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Next-Gen AI-Powered Astrology App Development Solution
                </h2>
                <p>
                  Comfygen is a trusted astrology app development company offering <Link className="text-blue-600 font-semibold" href='https://www.comfygen.com/ai-development'>AI-based astrology app development services</Link>. Our developers use AI to create astrology apps that provide accurate horoscopes, personalized predictions, and online consultations.

                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left md:grid-cols-2 grid-cols-1">
                {JSON_DATA.AIPowered.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={title} className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p
                        className=""
                        dangerouslySetInnerHTML={{ __html: decs }}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
                  The Emerging Technologies We Use for Astrology App Development
                </h2>
                <p className="text-center text-white lg:w-10/12 mx-auto">
                  Comfygen Technologies is a top astrology mobile app development agency. We create high-level astrology apps using the latest technology. Our horoscope app development services combine innovation with precision, delivering personalized user experiences and accurate predictions.
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

                        <h3 className="sm:text-2xl text-xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                      </div>

                      <div className="mt-3">
                        <p className="break-all text-white text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: decs }}>

                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                End-to-End Astrology App Development Process
              </h2>
              <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
                We follow a structured and transparent astrology app development process to ensure your app is feature-rich, scalable, and ready for success. We deliver seamless performance and next-generation user experiences from concept to launch.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>
        <TechStack
          title="Technology Stack We Use for Astrology App Development"
          description="At Comfygen, we leverage cutting-edge technologies to develop high-performance, scalable, and secure astrology app solutions. Our advanced tech stack ensures seamless performance, real-time predictions, and immersive user experiences."
          filterCategory={["crypto"]}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />


        <section className="py-8">
          <SolutionsFeature title="Benefits of Creating an Astrology App"
            subtitle="Building an astrology app offers multiple advantages for businesses and users alike. Here are the key benefits:"
            data={JSON_DATA.servicesData1}
          />
        </section>

        <HireDeveloper
          heading="Hire Our Dedicated Astrology App Developer"
          text="Build a high-performance astrology app with Comfygen’s expert developers. Our dedicated <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline'>astrology app developers<a> specialize in AI-powered horoscope apps, Kundli platforms, numerology apps, and live consultation solutions. With 8+ years of experience, we deliver scalable, secure, and fully customized astrology app development tailored to your business needs."
          text1=""
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in AI, ML, AR/VR & Blockchain",
            "100% custom, scalable astrology app solutions",
            "Smooth UI/UX for astrologers & users",
            "Secure & High-Performance Apps – Robust architecture with encryption & compliance",
            "Secure architecture with encrypted payments",
          ]}
        />

        <ClientStories />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={Frequently} title="" />

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
