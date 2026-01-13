import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";



const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const NumberCard = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/NumberCard"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
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

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const data = [
  {
    num: "01",
    title: "Programming Languages",
    decs: "We utilize the most powerful programming languages to develop AI apps.",
    list: ["Python", "JavaScript", "R", "Java"],
  },
  {
    num: "02",
    title: "Frameworks",
    decs: "Our team uses advanced frameworks for seamless development.",
    list: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    num: "03",
    title: "Cloud Platforms",
    decs: "We deploy AI solutions on robust and scalable cloud platforms.",
    list: ["AWS", "Google Cloud", "Azure", "IBM Cloud"],
  },
  {
    num: "04",
    title: "Data Processing",
    decs: "Efficient tools to manage and analyze data.",
    list: ["Apache Spark", "Pandas", "NumPy"],
  },
];
const Process = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your business needs, challenges, and objectives. Through workshops and consultations, we gather requirements and define the scope of the project to ensure a clear roadmap.",
  },
  {
    title: "AI Design",
    description:
      "Our team designs a tailored AI solution architecture that aligns with your goals. We create detailed technical specifications, select the right tools and technologies, and plan the development process for optimal results.",
  },
  {
    title: "AI Development",
    description:
      "Using state-of-the-art tools and frameworks, we build and train AI models tailored to your requirements. Our development process includes rigorous testing and validation to ensure accuracy and reliability.",
  },
  {
    title: "Deployment",
    description:
      "We seamlessly implement and integrate the AI solution into your existing systems. Our team ensures smooth deployment, providing training and documentation to help your team adapt to the new technology.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Our commitment doesn’t end with deployment. We provide ongoing maintenance, updates, and support to make sure your AI solution continues to perform at its best and evolves with your business needs.",
  },
  {
    title: "Performance Monitoring & Optimization",
    description:
      "We continuously monitor AI model performance, fine-tune algorithms, and optimize efficiency to maintain high accuracy and effectiveness over time.",
  },
  {
    title: "Scalability & Future Enhancements",
    description:
      "As your business grows, we help scale and enhance your AI solution with new features and improvements, ensuring it remains competitive and aligned with future industry trends.",
  },
];


export default function Mobile(props: any) {
  let { initialData } = props;
  let { LeadingSoftware } = JSON_DATA;

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
          AI & ML Mobile App Development Company | Custom AI Solutions India
        </title>
        <meta
          property="og:title"
          content="Custom Enterprise AI ML Mobile App Development Company In India | Get Best Services"
        />
        <meta
          name="description"
          content="Comfygen offers custom AI and ML mobile app development in India, delivering intelligent apps, machine learning models, and AI-powered solutions to automate processes and drive business growth."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence Development Services, AI Software Development Company, AI Software Development Services, AI Product Development, AI Chatbot Development, AI Engineer "
        />
        <meta
          name="og:description"
          content="Looking for AI-based Enterprise to SME mobile app development company to boost your business. Comfygen custom AI ML development services in Jaipur, India help you to achieve your goal."
        />
        <link rel="canonical" href="https://www.comfygen.com/ai-development" />



        <meta name="og:url" content="https://www.comfygen.com/ai-development" />
        <meta
          name="og:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Our AI software development experts create custom AI solutions for startups, ensuring fast, affordable, and efficient project completion. Build your AI system today!"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258/" />
        <meta
          property="og:image:type"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Development Company | Artificial Intelligence Development Services"
        />
        <meta
          name="twitter:description"
          content="Boost your business efficiency with Comfygen, a leading AI development company offering custom artificial intelligence solutions tailored to your needs."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:image:alt"
          content="https://www.comfygen.com/herosection/ai-development-company.webp"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ai-development"
        />
        <meta
          property="og:title"
          content="Custom AI Development Company | AI Solutions for Startups"
        />
        <meta
          property="og:description"
          content="Our AI Based App development experts create custom AI Development Service for startups, ensuring fast, affordable, and efficient project completion. Build your AI system today!"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Comfygen",
              url: "https://www.comfygen.com/",
              logo: "https://www.comfygen.com/svg/Logo1.svg",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                contactOption: "WhatsApp",
                telephone: "+91 9587867258",
                email: "sales@comfygen.com",
                areaServed: ["IN", "US", "CA", "GB"],
                availableLanguage: "en, in",
              },
              sameAs: [
                "https://www.facebook.com/comfygen",
                "https://twitter.com/comfygentech",
                "https://www.instagram.com/comfygen_/?hl=en",
                "https://youtube.com/@comfygenbusiness",
                "https://www.linkedin.com/company/comfygen-private-limited",
                "https://in.pinterest.com/comfygenpvt/",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Comfygen",
              image:
                "https://www.comfygen.com/herosection/ai-development-company.webp",
              "@id": "Comfygen",
              url: "https://www.comfygen.com/",
              telephone: "+91-958-786-7258",
              priceRange: "$",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
                  addressLocality: "Jaipur",
                  postalCode: "302006",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7",
                  addressLocality: "Toronto",
                  postalCode: "M1G3S7",
                  addressCountry: "CA",
                },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/comfygen",
                "https://twitter.com/comfygentech",
                "https://www.instagram.com/comfygen_/?hl=en",
                "https://www.youtube.com/@ComfygenBusiness",
                "https://www.linkedin.com/company/comfygen-private-limited",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Development Services - Artificial Intelligence Development Company",
              provider: {
                "@type": "Organization",
                name: "Comfygen",
                url: "https://www.comfygen.com/ai-development",
              },
              description:
                "Empower your business with Comfygen's AI development services. We deliver cost-effective, custom AI solutions with expert AI engineers for automation and efficiency.",
              url: "https://www.comfygen.com/",
              mainEntityOfPage: "https://www.comfygen.com/ai-development",
              areaServed: "Global",
              serviceType: [
                "Generative AI",
                "Smart AI Assistants and Chatbot",
                "AI Software Development",
                "AI Development Consulting",
                "AI Product Development",
              ],
              sameAs: [
                "https://www.facebook.com/comfygen",
                "https://www.linkedin.com/company/comfygen-private-limited",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What industries do you serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We serve a wide range of industries, including healthcare, finance, retail, manufacturing, logistics, education, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to develop a custom AI solution?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The timeline varies based on project complexity. It can take anywhere from a few weeks to several months.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide ongoing support and maintenance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer comprehensive ongoing support and maintenance services for AI solutions.",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Product",
              name: "Artificial Intelligence Development Services | AI App Development Company",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                worstRating: "3",
                bestRating: "5",
                reviewCount: "46",
              },
              description:
                "We offer complete AI development services, including defining a viable AI implementation strategy, deploying, scaling, and scalability.",
              image: "https://www.comfygen.com/svg/Logo1.svg",
              brand: {
                "@type": "Organization",
                name: "Comfygen",
                logo: "https://www.comfygen.com/svg/Logo1.svg",
              },
            }),
          }}
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="">
        <HeroSectionForAllPages
          heading="AI & ML Mobile App Development Services in India"
          ptag="Next-Gen AI Solutions for Next-Level Success."
          ptag1="Comfygen offers custom AI and ML mobile app development services in Jaipur, India. Our expert developers build intelligent mobile apps, machine learning models, and AI-powered software to help businesses innovate, automate processes, and drive growth. Turn your vision into reality with our AI/ML solutions—request a free consultation today."
          li='Custom AI & ML Mobile App Development'
          li1='Intelligent Software & Automation Solutions'
          li2='Machine Learning Model Development'
          li3='AI-Powered Business Process Optimization'
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/ai-solutions-for-smarter-businesses.webp"
        />
        <Milestones/>
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">We Offer The Best Artificial Intelligence Software Development
                Services For Startups
              </h2>
              <p className="text-base text-center font-normal">Data is used to drive business results through custom AI and
                machine learning software development solutions. As one of the
                leading custom AI mobile app development solution companies, we
                transform raw data into actionable insights, facilitating
                operational efficiency and enhanced decision-making. We offer
                reliable AI enterprise software development services that can
                make your vision a reality.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title=""
          heading="Hire Best Custom AI ML App & web Development Company In India for Startups to Enterprise"
          description1="Comfygen is a leading AI ML-based mobile app development company in India dedicated to helping businesses harness the power of artificial intelligence. We deliver custom AI ML app & software development solutions tailored to your unique needs, leveraging advanced technologies like machine learning, natural language processing (NLP), and computer vision. Whether you're looking to automate processes, enhance customer experiences, or gain data-driven insights, our best-experience AI software developers in India are here to design and deploy innovative AI-powered mobile app solutions and services that drive growth and efficiency—partner with us to transform your business with cutting-edge custom AI ML software development services."
          imageSrc="https://www.comfygen.com/image/best-ai-development-company.webp"
          link="/about-us"
          linkText="Explore More"
        />




        <NumberCard
          heading="Our Technology Stack Use to Develop Best AI Services"
          description="At Comfygen, we leverage cutting-edge tools and technologies to build robust, scalable, and innovative AI enterprise to SME mobile app development solutions. Our best AI and ML app development expertise spans a wide range of platforms, frameworks, and cloud services, ensuring that we deliver the best results for your startup business. Here’s a glimpse of the technologies we use"
          data={data}
        />
        <TechStack
          title="Our Technology Stack Use to Develop Best AI Services"
          description="At Comfygen, we leverage cutting-edge tools and technologies to build robust, scalable, and innovative AI enterprise to SME mobile app development solutions. Our best AI and ML app development expertise spans a wide range of platforms, frameworks, and cloud services, ensuring that we deliver the best results for your startup business. Here’s a glimpse of the technologies we use"
          customTechData={JSON_DATA.customTechData}
        />
        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our AI Software Development Roadmap
              </h2>
              <p className="text-base font-normal mt-2">
                At Comfygen, we follow a structured and collaborative approach
                to deliver AI solutions that align with your business goals. Our
                proven process ensures transparency, efficiency, and
                high-quality results at every stage. Here’s how we work
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>


        {/* portfoliodata */}
        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Artificial Intelligence Success Stories"
            description="At Comfygen, we take pride in delivering AI solutions that drive measurable results for our clients. Here are some examples of how we’ve helped businesses achieve their goals"
          />
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <IndustriesServe
          heading="Get your industry to the next level with our custom AI Development services"
          description="Our Artificial Intelligence (AI) engineers specialize in integrating the highest quality AI services into your business offerings, processes, and growth strategies."
          sliderData={JSON_DATA.customSliderData}
        />
        <HireDeveloper
          heading="Hire Our Dedicated AI Application Developers"
          text="Are you looking to enhance your company’s technical capabilities? Why not hire expert AI software developers from Comfygen? Our artificial intelligence specialists have deep expertise in Machine Learning, Neural Networks, Deep Learning, Computer Vision, Data Mining, Analytics, and AI-powered Visualization. They can build user-centric, data-driven AI application development solutions customized to your business needs."
          text1="By hiring our best artificial intelligence engineer in India, you gain access to cutting-edge AI development solutions that drive business growth and efficiency. Ready to take your AI capabilities to the next level?"
          listItems={[
            "Experience in developing 80+ AI products across industries.",
            "Constantly ranked as a Top AI Development Company in Toronto, Canada on DesignRush.",
            "A Project Consultant and AI development Solution Architect assigned to your project.",
            "Strict NDA policies to protect your business data.",
            "Subject matter experts to understand and align AI software development solutions with your goals.",
          ]}
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
        />
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
