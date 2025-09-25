import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/webdevelopment.json";
import LazyLoad from "react-lazy-load";
import AboutSection from "../components/AboutSection";
import WhyChoose from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import BlogSection from "../components/BlogSection";
import ProcessSec from "../components/ProcessSec";
import TechStack from "../components/TechStack";
import IndustriesServe from "../components/IndustriesServe";
import ServicesSec from "../components/ServicesSec";
import ModelsSec from "../components/ModelsSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
import PortfolioSec from "../components/PortfolioSec";
import Script from "next/script";
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForAllPages = dynamic(() => import("../components/HeroSectionForAllPages"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);


const Processs = [
  {
    title: "Discovery and Planning",
    description: "Our journey begins with understanding your business goals, target audience, and specific requirements. We conduct thorough research and hold detailed discussions to gather all necessary information. This phase helps us create a comprehensive project plan, outlining the scope, timeline, and deliverables."
  },
  {
    title: "Design and Prototyping",
    description: "In the design phase, our creative team brings your vision to life. We develop wireframes and prototypes to illustrate the website’s layout and user interface. Our focus is on creating intuitive, aesthetically pleasing designs that provide an excellent user experience. We ensure that the design aligns with your brand identity and resonates with your audience."
  },
  {
    title: "Development",
    description: "Once the design is approved, our skilled developers start building the website. We use the latest technologies and coding standards to ensure a high-quality, responsive, and secure website. Front-end and back-end development are carried out in parallel, ensuring seamless integration of all components."
  },
  {
    title: "Testing and Quality Assurance",
    description: "Before launching, we rigorously test the website to ensure it functions flawlessly across different devices and browsers. Our quality assurance team checks for bugs, performance issues, and security vulnerabilities. We conduct usability testing to make sure the site is easy to navigate and provides a positive user experience."
  },
  {
    title: "Deployment",
    description: "After successful testing, we deploy the website to the live server. Our team handles all the technical aspects of the launch, ensuring a smooth transition without any downtime. We work closely with you during this phase to ensure everything is set up correctly and meets your expectations."
  },
  {
    title: "SEO and Analytics Integration",
    description: "To maximize the website’s visibility and performance, we integrate advanced SEO strategies and analytics tools. This ensures your website is optimized for search engines and provides valuable insights into user behavior, helping you make informed decisions for continuous improvement."
  },
  {
    title: "Support and Maintenance",
    description: "Our commitment to your success doesn’t end with the launch. We offer ongoing support and maintenance to keep your website running smoothly. From regular updates and backups to performance monitoring and issue resolution, we ensure your website remains secure, up-to-date, and fully functional."
  },
];
const techDataForPage1 = {
  All: [
    {
      img: "https://www.comfygen.com/img/aria-coin-cryptocurrency.webp",
      head: "Aria Coin Cryptocurrency",
      name: "Welcome to ARIA Currency, where the future of transactions meets seamless empowerment. Join us as we rewrite the rules of digital currency, making security, accessibility, and efficiency our currency of trust.",
      num: "1",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    },
    {
      img: "https://www.comfygen.com/img/token-development.webp",
      head: "Bitlearn Web",
      name: "Join Bit Learn Web - Where Blockchain Fuels Fairness, Rewards Fuel Ambition, and Community Fuels Success. Embrace the Future of Network Marketing, Redefined.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    },
    {
      img: "https://www.comfygen.com/img/news-portfolio-footer-img.webp",
      head: "News Application",
      name: "Discover a new era of news with our cutting-edge News Application. Stay informed with real-time updates, personalized feeds, and multimedia content at your fingertips. Never miss a beat with breaking news notifications. Download now for a seamless, immersive news experience.",
      num: "2",
      icons: [
        "https://www.comfygen.com/image/react-portfolio-icon.svg",
        "https://www.comfygen.com/image/next-js-portfolio-icon.svg",
        "https://www.comfygen.com/image/tailwind-portfolio-icon.svg",
        "https://www.comfygen.com/image/figma-portfolio-icon.png",
        "https://www.comfygen.com/image/html-portfolio-icon.svg"
      ],
    }
  ],
};
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
          Best Web Development Companies in Jaipur | Expert Services
        </title>
        <meta
          name="description"
          content="Comfygen is a leading web development company in Jaipur with experience of 7 years offering custom web solutions, E-commerce platforms, and responsive design."
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
          <div>
            <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/website-development-company-hero-img.webp')]">
              <HeroSectionForAllPages
                heading="Web Development Services in Jaipur"
                ptag="Our web design and development services will empower your business in the digital world by creating professional, visually appealing websites. As a trusted website development company in Jaipur India, we combine innovation with expertise to deliver customized web solutions tailored to your business needs."
                ptag1="Our team leverages the latest technologies and modern trends to craft websites that engage your audience and drive measurable results. Whether you want to expand your reach, enhance customer engagement, or strengthen your online presence, Comfygen is your partner in digital growth."
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
              />
            </div>
          </div>
        </div>
        <AboutSection
          title="About Company"
          heading="Affordable Website Development Company in Jaipur, India"
          description1="Comfygen is a trusted website development company in Jaipur that delivers top-notch website solutions for small businesses, startups, and enterprises. With expertise in advanced technologies, we specialize in creating custom web solutions tailored to meet the unique requirements of businesses and their audiences."
          description2="Our professional website developers in Jaipur India craft intuitive, user-friendly websites designed to establish a robust brand identity and foster reliability in the competitive digital market. Whether you’re looking to boost conversion rates, enhance customer relationships, or build trust among users, our web development solutions are designed to deliver exceptional results."
          points={[
            "Custom Web Solutions for Every Business Size",
            "Intuitive, User-Friendly Designs",
            "Focus on Scalability and Market Expansion"
          ]}
          description3="You can achieve sustainable growth and thrive in the ever-evolving digital landscape with Comfygen's web development services. We can help you stand out and succeed in your business."
          imageSrc="https://www.comfygen.com/image/web-development-company-about-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >We Provide the Best Website Development Services in Jaipur</h2>
              <p className="text-base text-center font-normal">Comfygen gives the best website development services and solutions that leave an indelible mark on site visitors. Our custom web development solutions are designed to provide an engaging user experience while also promoting corporate growth and profitability. With a focus on creativity and functionality, we ensure that our web development services are in line with your objectives and industry trends.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <TechStack
          title="Technologies We Use for Website Development"
          description="Comfygen leverages the latest and most advanced technologies to deliver high-quality web solutions that meet your business needs. Our team of experts is proficient in a wide range of technologies, ensuring that we can provide the best tools and platforms for your project. Here’s a look at some of the key technologies we use"
          filterCategory={["mobile"]}
        />
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <IndustriesServe
          heading="Web Development Services in Jaipur For Various Industries"
          sliderData={JSON_DATA.customSliderData}
        />
        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <CallToAction
          heading="Let’s Build the Future of Technology Together"
          text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
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
        <PortfolioSec
          techData={techDataForPage1}
          heading="Website Development Portfolio"
          description="Explore our collection of successfully delivered website development projects that showcase our expertise in crafting dynamic, responsive, and user-friendly websites. Each project highlights our commitment to innovation, technical excellence, and client satisfaction."
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
          title=""
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
