import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";

import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";




const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
  { loading: loader, ssr: true }
);

const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { ssr: true }
);
const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { ssr: true }
);

const ClientStories = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientStories"),
  { ssr: true }
);



export default function Mobile(props:any) {
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
          Top Social Media App Development Company - Comfygen
        </title>
        <meta
          property="og:title"
          content="Top custom Social Media App Development Company in India"
        />
        <meta
          name="description"
          content=" Comfygen offers custom Social media app development services, building scalable and feature-rich apps like Instagram and Reddit for Android, iOS, and web platforms."
        />


        <meta name="keywords" content="social media app development company, social media app development services, custom social media apps, social networking app development, hire social media app developers, mobile social app development, scalable social networking platforms, AI-powered social media apps" />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/social-media-app-development "></link>

        {/* <!-- Robots → */}

        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />


        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Wallet Development" />

        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies"></meta>

        {/* <!-- SEO Meta --> */}

        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />


      

        {/* <!-- Open Graph (OG) Tag --> */}

        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media App Development Company in India | Comfygen " />
        <meta name="twitter:description" content=" Comfygen is a trusted Social Media App Development Company offering scalable Social Media App Development Services with real-time features, AI integration, and secure architecture." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/social-media-app-development/Social Media App Development company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/social-media-app-development/Social Media App Development company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/social-media-app-development/Social Media App Development company.webp" />
        <meta property="og:image:alt" content="Social Media App Development " />
        <meta property="og:url" content="https://www.comfygen.com/comfygen-images/social-media-app-development/Social Media App Development company.webp" />
        <meta property="og:title" content="Social Media App Development Company in India | Comfygen" />
        <meta property="og:description" content="comfygen is a leading social media app development company providing scalable social media app development services with real-time features, AI integration, and secure architecture." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />



      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        
          <HeroSectionForAllPages
            heading="Leading Social Media App Development Company in India"
            ptag="Hiring a social media app development company  is a crucial decision for anyone looking to build a powerful social media platform. Comfygen is a top-notch social media app development company in India that delivers the best social networking app solutions to help businesses create world-class social networking applications. With a proven track record of delivering high-quality projects on time and within budget, Comfygen is the ideal partner for anyone looking to develop a social media app that stands out in a highly competitive market."
            li="AI-powered personalization & content feeds"
            li1="Real-time chat, video sharing & live streaming"
            li2="High-performance & privacy-first architecture"
            li3="Scalable solutions for startups & global enterprises"
            bgImage="https://www.comfygen.com/herosection/social-media-app-development-hero-img.webp"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
    
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >We Offer Advanced Social Media App Development Services for Startups & Enterprises</h2>
              <p className="text-base text-center font-normal">Comfygen is a top-rated custom social media app development company in India, delivering end-to-end custom social networking app development services to turn your unique idea into a powerful digital platform. Our experienced social networking app developers develop high-performing social media platforms that work seamlessly across all devices, from modern social media app development to long-term support and maintenance.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Should You Invest in Social Media App Development?"
          description1="Investing in social media app development is a smart, future-ready business move for investors seeking high growth and long-term profitability. A custom social media app strengthens brand visibility, boosts user engagement, and opens scalable monetization opportunities through advertising, subscriptions, and in-app purchases. It also enables businesses to build niche communities and gain valuable user data for data-driven decisions."
          description2="The global social media app market presents massive investment potential, valued at around USD 49–50 billion in 2022 and expected to surpass USD 310 billion by 2030, growing at a 26.2% CAGR. Platforms like Facebook, Instagram, WhatsApp, and Messenger dominate with over one billion users each. Growth is driven by mobile adoption, 5G expansion, and advertising, generating 64–78% of total revenue, offering investors scalable profit opportunities."
          description3=""
          imageSrc="https://www.comfygen.com/comfygen-images/social-media-app-development/social-about.webp"
          link="/about-us"
          linkText="Explore More"
        />



        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Best Custom Social Application Development Solutions
                </h2>
                <p>As an experienced social media app development company, we provide social media app clone scripts that replicate and enhance the core functionality of leading platforms. Our social media clone app development solutions are built with advanced social networking platform features, robust social media app backend development, and scalable architecture—helping startups and enterprises launch faster with confidence.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
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


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Social Media App Development Portfolio"
            description="Explore our portfolio showcasing innovative social media app projects by a leading social media app development company in India, delivering custom, secure, scalable solutions with real-time engagement, high performance, and feature-rich experiences for startups, enterprises, and growing digital communities."
          />
        </section>

        <CallToAction
          heading="Build a modern social platform backed by advanced technology and engineered for measurable results."
          text=""
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <section className=" lg:py-10 py-10">
          <Features
            grid='3'
            heading='Top Social Networking App Development Features'
            description='Comfygen builds powerful social media apps with advanced features like real-time communication, content sharing, smart personalization, and secure admin controls, enabling businesses to deliver scalable, high-performing, and engaging social networking experiences.'
            featuresData={JSON_DATA.featuresData}
          />,
        </section>





        <TrendsSection
          heading="Emerging Technologies For Social Media Platform Development"
          subtitle="As the best social media app development company in India, Comfygen leverages modern technologies to transform how social media platforms are built, scaled, and personalized. These emerging innovations enhance user experiences, boost engagement, improve security, and enable businesses to create smarter, more connected, and future-ready digital ecosystems."
          trends={JSON_DATA.Emerging}
        />




        {/* 
        <IndustriesServe heading="Industries We Serve As a Best Social Media App Development Company" description="Comfygen provides custom Social media web and <a href='https://www.comfygen.com/mobile-app-development' class='text-blue-600 font-semibold'>mobile app development solutions</a> across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success." /> */}



        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Step-by-Step Social Media App Development Process</h2>
              <p className="text-base font-normal mt-2">
                As a leading social media software development company in India, Comfygen follows a structured and transparent process to deliver high-quality solutions. Our custom social networking software development services focus on strategic planning, intuitive design, scalable development, and rigorous testing to build secure, high-performance social media applications that meet business goals and user expectations.

              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>


        <TechStack
          title="Technology Stack We Use for Social Media Platform Development"
          description="We use a future-ready technology stack to build scalable, secure, and high-performance social media applications. Our tech ecosystem enables seamless user experiences, fast performance, and reliable architecture to support millions of users worldwide."
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Social Media App Developers"
          text="Get expert Social Media App Developers to build fast, secure, and scalable social platforms tailored to your business goals. Our <a href='https://www.comfygen.com/hire-mobile-app-developer' class='underline font-semibold'>social networking app developers</a> deliver modern features, smooth performance, and on-time project execution."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          listItems={[
            "Skilled in custom social media app development",
            "Fast delivery with high-quality code",
            "Flexible hiring models (hourly, weekly, monthly)",
            "Scalable, secure, and future-ready solutions"
          ]}
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />

        <ClientStories />

        <ClientTestimonials
          heading="Testimonials from Our Clients"
          testimonials={JSON_DATA.customTestimonials}
        />

        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions "
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


