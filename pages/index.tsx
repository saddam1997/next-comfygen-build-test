
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./index.json";


const Milestones = dynamic(
  () => import("../components/Newcomponet/comman/Milestones"),
  {
    ssr: true,
  }
);


import HeroSection from "../components/HeroSection";

/* ======================
   CRITICAL (Above-the-fold)
====================== */
const Header = dynamic(
  () => import("../components/Newcomponet/layout/Header"),
  {
    ssr: true,
  }
);

/* ======================
   SEO IMPORTANT (SSR)
====================== */
const AboutSection = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/AboutSection"),
  { ssr: true }
);

const ServicesSec = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/ServicesSec"),
  { ssr: true }
);

/* ======================
   BELOW THE FOLD (No SSR)
====================== */
const Portfolio = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/Portfolio"),
  { ssr: true }
);


const CallToAction = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/CallToAction"),
  { ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { ssr: true }
);

const ProcessSec = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/ProcessSec"),
  { ssr: true }
);

const TechStack = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/TechStack"),
  { ssr: true }
);

const WhyChoose = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { ssr: true }
);

const ClientStories = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/ClientStories"),
  { ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { ssr: true }
);

const Faq = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/Faq"),
  { ssr: true }
);

const BlogSection = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/BlogSection"),
  {
    loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  }
);

export default function Home(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>
          AI-Based Mobile App and Web Development Company
        </title>
        <meta
          name="title"
          content="Custom Blockchain & Mobile App Development Company - Comfygen Technologies"
        />
        <meta
          name="description"
          content="Comfygen is a AI-based mobile app and web development company delivering scalable, secure, and high-performance digital solutions for startups and enterprises."
        />
        {/* <!-- Viewport and/ Mobile Optimization → */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://www.comfygen.com" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Web And App Development Company"
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta
          name="keywords"
          content="Comfygen Technologies, software development, app development, blockchain development, IT company, custom software solutions"
        />

        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="Comfygen Technologies – App & Software Development Experts"
        />
        <meta
          name="og:description"
          content="Explore top-tier software, app, and blockchain development services by Comfygen Technologies."
        />
        <meta property="og:url" content="https://www.comfygen.com" />
        <meta
          name="og:site_name"
          content="Custom Blockchain & Mobile App Development Company"
        />
        <meta
          name="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          name="article:modified_time"
          content="2022-12-06T08:49:10+00:00"
        />
        <meta
          name="og:image"
          content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />

        {/* Author and Company Information */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* Twitter Card  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comfygen Technologies – Digital Transformation Partner" />
        <meta name="twitter:description" content="Join hands with Comfygen for robust software and mobile solutions that scale." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        {/* ✅ LCP IMAGE PRELOAD */}


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      <div>
        <Header />
      </div>

      <div className="overflow-hidden lg:pt-[110px]">
        <div className="relative ">
          <HeroSection
            heading={JSON_DATA.Herosection.heading}
            isHome={true}
            ptag={JSON_DATA.Herosection.ptag}
            btnName="Let's Discuss"
            btnLink="/contact-us"
            altTag="blockchain-technology"
            bgImage={JSON_DATA.Herosection.bgImage}
            // mobileBgImage="https://www.comfygen.com/comfygen-images/home/mobileHrom.webp"
          />

        
        </div>
        <Milestones />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                {JSON_DATA.ServicesData.heading}
              </h2>
              <p className="text-base text-center font-normal">
                {JSON_DATA.ServicesData.description}
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.ServicesData.services} />
            </div>
          </div>
        </section>

        {/* <WallOfFame /> */}


        <AboutSection
          title="About Company"
          heading={JSON_DATA.AboutSection.heading}
          description1={JSON_DATA.AboutSection.description1}
          description2={JSON_DATA.AboutSection.description2}
          points={[]}
          imageSrc={JSON_DATA.AboutSection.imageSrc}
          link={JSON_DATA.AboutSection.link}
          linkText={JSON_DATA.AboutSection.linkText}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA?.Portfoliodata.portfolio}
            heading={JSON_DATA?.Portfoliodata.heading}
            description={JSON_DATA?.Portfoliodata.description}
          />
        </section>

        <CallToAction
          heading={JSON_DATA.CallToAction.heading}
          text={JSON_DATA.CallToAction.text}
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc={JSON_DATA.CallToAction.imageSrc}
          imageAlt={JSON_DATA.CallToAction.imageAlt}
        />


        <IndustriesServe
          heading={JSON_DATA.Industries.heading}
          description={JSON_DATA.Industries.description}
          sliderData={JSON_DATA.Industries.IndustriesServe}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">

                {JSON_DATA?.ProcessData.heading}
              </h2>
              <p className="text-base font-normal mt-2">
                {JSON_DATA?.ProcessData.description}
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA?.ProcessData.Process} />
          </div>
        </section>

        <TechStack
          customTechData={null}
          title={JSON_DATA.TechStack.title}
          description={JSON_DATA.TechStack.description}
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />


        <div className="py-5">
          <ClientStories />
        </div>

        <HireDeveloper
          heading={JSON_DATA.HireDeveloper.heading}
          text={JSON_DATA.HireDeveloper.text}
          buttonText={JSON_DATA.HireDeveloper.buttonText}
          buttonLink={JSON_DATA.HireDeveloper.buttonLink}
          imageSrc={JSON_DATA.HireDeveloper.imageSrc}
          imageAlt={JSON_DATA.HireDeveloper.imageAlt}
          listItems={JSON_DATA.HireDeveloper.listItems}
        />

        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
        />


        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
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
