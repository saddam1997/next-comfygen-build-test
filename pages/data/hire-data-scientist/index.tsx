import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mobile.json";
import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../../components/Newcomponet/comman/Milestones";

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

// const Features = dynamic(
//   () => import("./components/NewFeatures"),
//   { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
// );

const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




const Process = [
  {
    title: "Define Your Needs",
    description:
      "Share your project objectives, preferred tech stack, and required expertise - whether in machine learning, NLP, AI, or data engineering. This helps us align the right talent with your requirements.",
  },
  {
    title: "Choose Hiring Type",
    description:
      "Determine the engagement model that best suits your needs - full-time, part-time, freelance, or remote. We accommodate your timeline, workload, and budget flexibility.",
  },
  {
    title: "Get Expert Matches",
    description:
      "We shortlist top-tier, pre-vetted candidates from our global network who closely match your technical and industry requirements.",
  },
  {
    title: "Interview Candidates",
    description:
      "Interview handpicked professionals to assess technical capabilities, communication, and culture fit. We support you with tailored evaluations or coding assessments if needed.",
  },
  {
    title: "Select Your Expert",
    description:
      "Pick the candidate who aligns best with your goals, team structure, and business strategy. We ensure a smooth and efficient transition from selection to onboarding.",
  },
  {
    title: "Onboard Seamlessly",
    description:
      "We handle contracts, documentation, and onboarding, so your new hire can get started quickly and focus on delivering results.",
  },
  {
    title: "Scale and Support",
    description:
      "Easily expand or adjust your team as your project evolves. Our ongoing support ensures continued productivity and talent alignment.",
  },
];

const portfolioData = [
  {
    image: "https://www.comfygen.com/comfygen-images/hire-data-scientist/p1.webp",
    title: "Hospital Operations",
    description:
      "Built predictive models to forecast patient inflow and optimize staff allocation, resulting in 30% faster patient processing and significantly reduced wait times.",
    link: "/contact-us",
  },
  {
    image: "https://www.comfygen.com/comfygen-images/hire-data-scientist/p2.webp",
    title: "Financial Forecasting",
    description:
      "Developed machine learning models for cash flow prediction and expense trend analysis, improving budgeting accuracy by 45% and enhancing financial decision-making.",
    link: "/contact-us",
  },
  {
    image: "https://www.comfygen.com/comfygen-images/hire-data-scientist/p3.webp",
    title: "E-Commerce Analytics",
    description:
      "Analyzed customer purchase patterns using segmentation and propensity scoring, leading to targeted campaigns and a 28% increase in order conversion rates.",
    link: "/contact-us",
  },
  {
    image: "https://www.comfygen.com/comfygen-images/hire-data-scientist/p4.webp",
    title: "Retail Inventory Optimization",
    description:
      "Used demand forecasting and expiry risk modeling to reduce grocery stock waste by 30% while ensuring high availability of top-selling products.",
    link: "/contact-us",
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
         Hire Data Scientists | Comfygen Data Science & Analytics Services

        </title>
        <meta
          name="description"
          content="Hire data scientists from Comfygen to turn complex data into actionable insights. Our experts deliver advanced analytics, predictive modeling, and data-driven solutions."
        />
        <meta
          name="keywords"
          content="Hire Data Science Developer, Hire Data Scientist, Hire Machine Learning Engineer, Hire AI Developer, Hire Data Engineer, Hire Python Developer for Data Science, Hire Freelance Data Scientist, Hire Remote Data Scientist, Data Science Developer for Hire, Affordable Data Science Hiring in India and Europe, Hire Data Scientist for FinTech, Healthcare Data Science Developer for Hire, E-commerce Machine Learning Expert"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/data/hire-data-scientist"
        />


        <meta
          property="og:title"
          content="Hire data scientist and data science developer"
        />
        <meta
          property="og:description"
          content="Hire data scientist and data science developer for your next project. Comfygen helps you develop a future-ready, data-driven team. Hire now!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/data/hire-data-scientist"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/hire-data-scientist/og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/hire-data-scientist/og.webp"
        />
        <meta
          property="og:image:alt"
          content="Hire data scientist and data science developer"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Data Scientist & Developer" />
        <meta
          name="twitter:description"
          content="Need expert data scientists or developers for your next project? Comfygen helps you build a future-ready, data-driven team. Hire top talent and start innovating today!"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/hire-data-scientist/og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>
      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="pt-16">
        <HeroSectionForAllPages
          heading="Hire Data Scientists"
          subhead='Want to hire data scientists who can actually turn data into results? '
          ptag="At Comfygen, we help businesses hire data scientists and build skilled data teams without delays or overhead. Our experts include data scientists, machine learning engineers, AI developers, data engineers, and Python developers with strong hands-on experience in statistical modeling, data mining, feature engineering, and exploratory data analysis. They manage everything from data cleaning and structuring to building ML models and delivering actionable insights that drive smarter decisions across industries like healthcare, fintech, retail, and SaaS."
          li="Flexible hiring contracts with transparent pricing"
          li1="Strong adherence to data security and compliance practices"
          li2="Time zone and language alignment for smooth collaboration"
          li3="Seamless remote hiring models that scale with your needs"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/hire-data-scientist/hero.webp"
        />

        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Services Offered by Our Data Scientists
              </h2>
              <p className="text-base text-center font-normal">When you hire data scientists from Comfygen, you unlock the power to transform raw, complex data into structured, actionable intelligence. Our Data Scientist turns raw data into structured intelligence through advanced analytics, modelling, and engineering. Explore our services to see how we help businesses harness data for smarter, faster decisions.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title=""
          heading="Hire Data Scientists to Unlock the Potential of Your Business Data"
          description1="Want to turn complex data into smart business moves? The first step is to hire data scientist."
          description2="Whether you're looking to hire data scientist, machine learning engineer, or <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/python-development' >Python developer</a> for data science, the goal remains the same: uncover insights, automate workflows, and stay ahead of the curve. At Comfygen, we connect you with domain-focused professionals who bring technical skills and industry awareness - whether in fintech, healthcare, E-commerce, and more."
          description3="From full-time to freelance, on-site or remote, our global hiring network ensures you can access affordable data science developers without compromising on quality. Whether you need to build intelligent systems or optimise decision-making through analytics, we make hiring seamless, strategic, and scalable. "
          imageSrc="https://www.comfygen.com/comfygen-images/hire-data-scientist/about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}



        <section className="py-8">
          <Portfolio
            projects={portfolioData}
            heading="Our Data Science Consulting Portfolio"
            description=" At Comfygen, our data scientists bring clarity to complex business challenges through AI, machine learning, and predictive modeling."
          />
        </section>


        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        {/* <Features /> */}

        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
               Process To Hire Data Scientist With Us
              </h2>
              <p className="text-base font-normal mt-2">
              We make hiring simple, fast, and tailored to your specific business needs. From initial consultation to seamless onboarding, we guide you through every step of the process.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <TechStack
          title="Our Technology Stack to Support Data Science & Analytics"
          description="At Comfygen, when you hire data scientists, you gain access to expertise in the latest tools and technologies that turn raw data into actionable insights. Our team works across platforms, frameworks, and cloud services to ensure high-quality analytics, predictive modeling, and data engineering for your business. Here’s a glimpse of the technologies our data scientists use:"
          customTechData={JSON_DATA.TechData}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />


        <HireDeveloper
          heading="Hire Data Scientist to Transform Data into Business Decisions"
          text="Looking to harness the power of data to drive growth, innovation, and efficiency? Hire experienced data science developers who bring the right mix of domain knowledge, technical expertise, and business acumen."
          text1="Whether you're a   FinTech disruptor, a healthcare innovator, or an e-commerce powerhouse, we connect you with top-tier data scientists, machine learning engineers, and AI developers who understand your industry and deliver measurable impact."
          buttonText="Hire Data Analytics Expert "
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />



        <ClientTestimonials testimonials={JSON_DATA.defaultTestimonials}/>

        <Faq
          faqData={JSON_DATA.Frequently}
          title="FAQs for Our Data Analytics Services "
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






