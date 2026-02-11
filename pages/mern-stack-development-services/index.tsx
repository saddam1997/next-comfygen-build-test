import React from "react";
import Head from "next/head";
import { useState } from "react";
import JSON_DATA from "./json/mernstack.json";
import dynamic from "next/dynamic";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages"
import Milestones from "../../components/Newcomponet/comman/Milestones";


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { ssr: true }
);




export default function Stack(props: any) {
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
          MERN Stack Development Company in Jaipur, India

        </title>
        <meta
          name="description"
          content=" Comfygen is a MERN Stack development company in Jaipur, India, building scalable and high-performance web applications for businesses."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/mern-stack-development-services"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="en-us" />
        <meta
          property="og:title"
          content="Best MEAN Stack Development Company in Jaipur, India"
        />
        <meta
          property="og:description"
          content="Our MEAN Stack development company in Jaipur, India offers modern web development services. Make your next web application with us. Call us at +91-958-786-7258!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/mern-stack-development-services"
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
          content="http://www.comfygen.com/images/illuslator/mern-stack.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">

        <div className="">
          <div>
            <div className="">
              <HeroSectionForAllPages
                heading="MERN Stack Development Company"
                ptag="Comfygen is a reliable MERN Stack development company in Jaipur, India, specializing in building secure, scalable, and high-performing web applications for startups and enterprises. Our experienced MERN developers use modern technologies—MongoDB, Express.js, React, and Node.js—to deliver powerful solutions for eCommerce, healthcare platforms, fintech applications, and more. We focus on performance, usability, and long-term scalability to help businesses grow faster in the digital space."
                li="Experienced MERN Stack Development Team"
                li1="Latest MERN Technologies & Modern Frameworks"
                li2="User-Centric, Innovative Application Development"
                li3="Scalable Architecture with High Performance"
                btnName="Talk With Expert"
                btnLink="/contact-us"
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
                bgImage="https://www.comfygen.com/herosection/mern-stack-development-company-heri-img.webp"
              />
            </div>
          </div>
        </div>
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >MERN Stack Development Services in Jaipur</h2>
              <p className="text-base text-center font-normal">We offer comprehensive MERN Stack development services. The experts at Comfygen analyze your business model and organizational goals to tailor a roadmap that fits your project specifications. Count on us to deliver tailored solutions that drive your business forward.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="We are Mern Stack Development Company"
          heading="Best MERN Stack Development Company in Jaipur"
          description1="Comfygen provides the best MERN Stack development services in India, helping businesses keep up with the digital world. As a web development team with decades of experience in MongoDB, Express.js, React, and Node.js, our team in Jaipur, India, specializes in building scalable, performant, and scalable web applications."
          description2="We provide robust, flexible, and innovative solutions tailored to your unique business needs. The MERN Stack development services we provide in Jaipur, India come with years of experience and a proven track record. Top companies across industries depend on us to build secure, scalable, and high-performing web applications."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />




        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Technologies That Power Our MERN Stack Development
                </h2>
                <p>As a leading MERN Stack development company in India, we leverage the power of cutting-edge technologies to create dynamic, scalable web applications. The core technologies we use include:</p>
              </div>
              <div className="grid gap-10 pt-8 text-left md:grid-cols-2">
                {JSON_DATA.EngagementModels.map((elem, index) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={index} className="border-2 p-8 space-y-2 bg-white  border-[#5556D1]/40 rounded-2xl">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px]  flex justify-center items-center text-[40px] font-bold text-[#5556D1]">
                        {num}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl text-[#212121] font-semibold">{title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire MERN Stack developers"
          text="Are you looking to build highly interactive, user-friendly, and scalable applications? Hire our top MERN Stack developers at Comfygen, who are proficient in MongoDB, Express.js, React.js, and Node.js—the key components of the MERN stack."
          text1="Our skilled developers leverage ReactJS to create dynamic and engaging user interfaces while ensuring seamless backend integration with Node.js and Express.js. With extensive experience in building robust, scalable, and modern applications, our MERN Stack developers are the perfect fit for your business needs."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Interactive and strong performance skills",
            "24/7 support",
            "8+ years experienced developers",
            "Ensure alignment with your business needs"
          ]}
        />

        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
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


