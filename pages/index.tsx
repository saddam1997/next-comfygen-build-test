
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
          content="Comfygen is AI-based mobile app and web development company delivering scalable, secure, and high-performance digital solutions for startups and enterprises."
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
      <div >

        <Header />
      </div>

      <div className="overflow-hidden lg:pt-[110px]">
        <div className="relative ">
          <HeroSection
            heading="AI-Based Mobile App and Web Development Company"
            isHome={true}
            ptag="Are you looking to build powerful mobile application? Comfygen is a trusted mobile app & web development company. We design and build mobile apps and websites with AI-powered solutions tailored for startups, enterprises, and global businesses."
            btnName="Let's Discuss"
            btnLink="/contact-us"
            altTag="blockchain-technology"
            bgImage="https://www.comfygen.com/comfygen-images/home/web development company home.webp"
          />
        </div>
        <Milestones />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Custom Mobile App and Web Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Our expert Mobile app developers create enterprise-grade AI-Powered web and mobile applications using modern frameworks and scalable architectures. We help businesses adopt futuristic technologies to improve performance, user experience, and market competitiveness.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        {/* <WallOfFame /> */}


        <AboutSection
          title="About Company"
          heading="Powering Businesses with Scalable Mobile App and Web Development"
          description1="Comfygen is a trusted web and mobile app development company delivering secure, scalable, and future-ready digital solutions for businesses worldwide. We help startups, enterprises, and fast-growing companies turn ideas into powerful digital products that drive efficiency, engagement, and long-term growth."
          description2="Our experienced custom mobile app development team utilizes modern frameworks, cloud-native architectures, and emerging technologies to build high-performing websites and mobile applications across industries such as fintech, healthcare, blockchain, on-demand, education, gaming, and enterprise solutions. With a strong focus on usability, performance, and scalability, we ensure every solution is built to evolve with your business needs."
          points={[]}
          imageSrc="https://www.comfygen.com/comfygen-images/home/mobile app and web development about.webp"
          link="/about-us"
          linkText="Explore More"
        />



        <section className="py-8">
          <Portfolio
            projects={JSON_DATA?.portfoliodata}
            heading="Explore Our Mobile App and Web Development Portfolio"
            description="Explore our collection of proven web and mobile app development projects built for startups, SMEs, and enterprises. From intuitive user experiences to scalable architectures, every solution demonstrates our focus on quality, creativity, and client success."
          />
        </section>

        <CallToAction
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

         
        <IndustriesServe
          heading="Industries We Serve As Best Mobile App Development Company"
          description="Comfygen provides custom web and mobile app development solutions across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success."
          sliderData={JSON_DATA.IndustriesServe}
        /> 

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Mobile App and Website Development Process

              </h2>
              <p className="text-base font-normal mt-2">
                As a trusted Mobile App and Web Development company, we follow a structured and agile website and application development process to deliver custom, scalable, and high-quality digital solutions.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA?.Process} />
          </div>
        </section>

        <TechStack
          customTechData={null}
          title="Our Advanced Tech Stack for Mobile App and Web Development"
          description="We leverage a modern and advanced tech stack to develop secure, scalable, and high-performance web and mobile applications. Our focus is on delivering future-ready digital solutions that drive sustainable business growth."
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
          heading="Hire Expert Web And App Developers"
          text="Hire skilled developers from Comfygen for mobile, web, blockchain, and AI projects. Our mobile app development teams deliver high-quality solutions, seamless collaboration, and on-time results to help your business grow."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Hire dedicated mobile app developers",
            "Hire Dedicated Website Developers",
            "Flexible engagement models",
            "Agile development and transparent communication",
            "Scalable teams for short-term or long-term projects"
          ]}
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
