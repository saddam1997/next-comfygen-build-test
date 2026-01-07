import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/webdevelopment.json";
import LazyLoad from "react-lazy-load";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Script from "next/script";

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);




// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import TechStack from "../Newcomponet/SectionCompoent/TechStack";
// import ConsultancyApproach from "../Newcomponet/SectionCompoent/ConsultancyApproach";
// import IndustriesServe from "../Newcomponet/SectionCompoent/IndustriesServe";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import Faq from "../Newcomponet/SectionCompoent/Faq";
// import Script from "next/script";
// import Milestones from "../Newcomponet/comman/Milestones";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";


// const ContactFromCenter = dynamic(
//   () => import("../components/ContactFromCenter"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );


const Processs = [
  {
    title: "Requirement Gathering & Analysis",
    description: "We start by understanding your business goals and website requirements. Our team analyzes your needs to create a clear roadmap for custom web development in Jaipur that aligns with your objectives."
  },
  {
    title: "Research & Strategy",
    description: "We conduct market research, competitor analysis, and user research to create a strong web strategy. This ensures your website stands out and achieves your business objectives."
  },
  {
    title: " UI/UX Design",
    description: "Our designers craft intuitive and visually appealing interfaces. We focus on user experience, responsive design, and modern layouts to make your website engaging and easy to navigate."
  },
  {
    title: "Development & Coding",
    description: "Using the latest technologies, our Jaipur web development team builds fast, secure, and scalable websites. We code cleanly to ensure optimal performance across all devices and platforms."
  },
  {
    title: "Testing & Quality Assurance",
    description: "Before launch, every website goes through rigorous testing. We check functionality, responsiveness, security, and speed to ensure your web application meets the highest quality standards."
  },
  {
    title: "Deployment & Launch",
    description: "After approval, we deploy your website on a secure server. Our team ensures a smooth launch and proper setup for SEO, performance, and accessibility, so your business is ready online."
  },
  {
    title: "Support & Maintenance",
    description: "We provide ongoing support and maintenance to keep your website running smoothly. From updates to troubleshooting, our team ensures your web solutions remain secure, functional, and up-to-date."
  },
];

const portfoliodata = [
  {
    "image": "https://www.comfygen.com/img/aria-coin-cryptocurrency.webp",
    "title": "Aria Coin Cryptocurrency",
    "description": "Welcome to ARIA Currency, where the future of transactions meets seamless empowerment. Join us as we rewrite the rules of digital currency, making security, accessibility, and efficiency our currency of trust.",
    "link": "#"
  },
  {
    "image": "https://www.comfygen.com/img/token-development.webp",
    "title": "Bitlearn Web",
    "description": "Join Bit Learn Web - Where Blockchain Fuels Fairness, Rewards Fuel Ambition, and Community Fuels Success. Embrace the Future of Network Marketing, Redefined.",
    "link": "#"
  },
  {
    "image": "https://www.comfygen.com/img/news-portfolio-footer-img.webp",
    "title": "News Application",
    "description": "Discover a new era of news with our cutting-edge News Application. Stay informed with real-time updates, personalized feeds, and multimedia content at your fingertips. Never miss a beat with breaking news notifications. Download now for a seamless, immersive news experience.",
    "link": "#"
  },

]




export default function Webdevelopment(props) {
  let { initialData } = props;
  let {
  } = JSON_DATA;
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
          Web Development Company in Jaipur | Custom Website App Solutions
        </title>
        <meta
          name="description"
          content="Comfygen is a top web development company in Jaipur offering custom website and web application development. Hire expert web developers for responsive and SEO-friendly web solutions that grow your business."
        />
        <link rel="canonical" href="https://www.comfygen.com/web-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Web Development Companies in Jaipur | Expert Services"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading web development company in Jaipur with experience of 7 years offering custom web solutions, E-commerce platforms, and responsive design."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/web-development"
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
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:image:width" content="1024" />
        <meta name="language" content="en-us" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />

        <Script
          type="application/ld+json"
          id="faq-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I optimize a web app for SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Optimizing a web app for SEO involves several key steps: use clean, semantic code; ensure fast load times; create mobile-friendly designs; implement keyword-rich, high-quality content; use meta tags and descriptions effectively; enable URL indexing by search engines; and integrate social media sharing options. Additionally, regular updates and content optimization help maintain SEO performance. These practices enhance visibility, drive traffic, and improve search engine rankings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to prepare before partnering with a web development company?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Before partnering with a website development company in Jaipur, define your project goals, budget, and timeline. Research potential companies, review their portfolios, and check client testimonials. Prepare a detailed project brief outlining your requirements, target audience, and design preferences. Have a list of questions ready to discuss during consultations, such as their website development process, communication methods, and post-launch support. This preparation ensures a smooth collaboration and a successful project outcome."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does a web development project take to complete from start to finish?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The time required to complete a web development project depends on its complexity, features, and specific client requirements. Basic Websites typically take 6-8 weeks. Complex Projects with advanced functionalities may extend the timeline to 3-6 months. This process includes essential stages like planning, design, development, testing, and deployment. Clear communication and prompt feedback from clients play a vital role in streamlining the workflow, keeping the project on track, and meeting deadlines effectively."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the cost of web development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of web development varies based on factors such as project complexity, desired features, design requirements, and the expertise of the web development team. Basic Websites typically range from $1,000 to $5,000. Complex Websites can cost between $10,000 to $50,000 or more. To budget effectively, it's important to request detailed quotes and clarify what’s included in the package, such as web design, development, testing, and post-launch support. This ensures transparency and helps you make informed decisions for your project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why should I hire a web development company in Jaipur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hiring a website development company in Jaipur, India, provides numerous benefits for creating a high-quality, customized website. With their expertise and experience, these professionals ensure your site is visually appealing, functional, secure, and optimized for SEO. They stay updated on the latest technologies and trends, enabling them to handle complex tasks efficiently while offering ongoing support. Partnering with a reputable web development company in Jaipur ensures a smooth website development process, a robust online presence, and significant time savings, helping you avoid potential challenges and ensuring long-term success for your business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How Should I Find the Best Website Development Company in Jaipur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To find the best website development company in Jaipur, start by defining your project requirements and budget. Research potential companies, check their portfolios, and read client reviews. Look for experience in your industry and expertise in relevant technologies. Schedule consultations to discuss your project, ask about their website development process, communication methods, and support services. Comparing multiple options will help you make an informed decision and choose a reliable partner."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are Progressive Web Apps (PWAs)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Progressive Web Apps (PWAs) are web applications that provide an app-like experience directly in the browser. They combine the best features of the web and apps, such as offline access, push notifications, and fast load times. PWAs are highly responsive, work on any device, and can be installed on the user’s home screen. They enhance user engagement and performance, offering a seamless, immersive experience without needing a separate app store download."
                  }
                }
              ]
            })
          }}
        />

      </Head>

      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div className="">
          <HeroSectionForAllPages
            heading="Web Development Company in Jaipur"
            ptag="Comfygen is a top web development company in Jaipur. We create easy-to-use, responsive, and SEO-friendly websites that help your business reach more customers and increase sales. Whether you need a small business site or a large web application, we deliver solutions that work."
            ptag1=""
            li="Custom Website Solutions"
            li1="Tech-Driven, Trend-Focused Designs"
            li2="Affordable and Transparent Pricing"
            li3="Dedicated to Your Business Success"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage={'https://www.comfygen.com/herosection/website-development-company-hero-img.webp'}
          />
        </div>
        <Milestones />

        <AboutSection
          title="About Company"
          heading="Affordable Website Development Company in Jaipur, India"
          description1="Comfygen is a trusted Full-stack website development company in Jaipur that delivers top-notch website solutions for small businesses, startups, and enterprises. With expertise in advanced technologies, we specialize in creating custom web solutions tailored to meet the unique requirements of businesses and their audiences."
          description2="Our professional website developers in Jaipur, India craft intuitive, user-friendly websites designed to establish a robust brand identity and foster reliability in the competitive digital market. Whether you’re looking to boost conversion rates, enhance customer relationships, or build trust among users, our web development solutions are designed to deliver exceptional results."
          description3="You can achieve sustainable growth and thrive in the ever-evolving digital landscape with Comfygen's web development services. We can help you stand out and succeed in your business."
          points={[
            "Custom Web Solutions for Every Business Size",
            "Intuitive, User-Friendly Designs",
            "Focus on Scalability and Market Expansion"
          ]}

          imageSrc="https://www.comfygen.com/image/web-development-company-about-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >We Provide Professional Website Development Services in Jaipur</h2>
              <p className="text-base text-center font-normal">Comfygen gives the best website development services and solutions that leave an indelible mark on site visitors. Our custom web development solutions are designed to provide an engaging user experience while also promoting corporate growth and profitability. With a focus on creativity and functionality, we ensure that our web development services are in line with your objectives and industry trends.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />

        <section className="py-8">

          <Portfolio
            projects={portfoliodata}
            heading="Our Website Development Portfolio"
            description="Explore our collection of successfully delivered website development projects that showcase our expertise in crafting dynamic, responsive, and user-friendly websites. Each project highlights our commitment to innovation, technical excellence, and client satisfaction."
          />
        </section>


        <CallToAction
          heading="Ready to Build Your Website?"
          text="Partner with Comfygen Technologies, the most trusted Web Development Company in Jaipur."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Website Development Process We Follow
              </h2>
              <p className="text-base font-normal mt-2">
                A structured and transparent development process is key to delivering exceptional websites that meet our clients’ needs. Our approach ensures that every project is completed on time, within budget, and to the highest standards. Here’s a step-by-step overview of our website development process:
              </p>
            </div>
            <ProcessSec processSlides={Processs} />
          </div>
        </section>


        <TechStack
          title="Technologies We Use for Website Development"
          description="Comfygen leverages the latest and most advanced technologies to deliver high-quality web solutions that meet your business needs. Our team of experts is proficient in a wide range of technologies, ensuring that we can provide the best tools and platforms for your project. Here’s a look at some of the key technologies we use"
          filterCategory={["mobile"]}
        />



        <IndustriesServe
          heading="Industries We Serve with Expert Web Development in Jaipur"
          description="We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations."
          sliderData={JSON_DATA.customSliderData}
        />
        {/* <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} /> */}




        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire DeFi Developers"
          text="Looking to build a custom website or web application? Hire expert web developers from Comfygen in Jaipur to create secure, scalable, and high-performing web solutions tailored to your business needs. Our skilled web developers specialize in building responsive websites, web apps, and enterprise solutions that drive growth and enhance user experience."

          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Dedicated experts in custom web development for startups, SMEs, and enterprises",
            "SEO-friendly, mobile-responsive, and fast-loading websites",
            "Scalable architecture with secure coding practices",

          ]}
        />


        {/* <CallToAction
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        /> */}
        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
        />
      </div>
    </>
  );
}

export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  if (!resData.ok) {
    // console.error("API Request failed:", await resData);
    return { props: { initialData: [] } };
  }
  // console.log(resData)
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}