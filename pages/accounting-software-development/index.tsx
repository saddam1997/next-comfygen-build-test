import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./accounting.json";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionforHome from "../../components/HeroSectionforHome"

import ServicesComponet from "../../components/ServicesSection/ServicesComponet";
import AboutComponent from "../../components/Abouts/AboutComponent";
import PortfolioSection from "../../components/PortfolioSection"
import TechSection from "../../components/TechSection"
import TechStackSection from "../../components/TechStackSection";

const Milestones = dynamic(
  () => import("../../components/Milestones"),
  { ssr: true }
);




const HireSection = dynamic(
  () => import("../../components/HireSection"),
  { ssr: true }
);

const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true }
);

const TestimonialSection = dynamic(
  () => import("../../components/TestimonialSection"),
  { ssr: true }
);


import ConsultancyApproach from "../../components/ConsultancyApproach"


import ProcesSection from "../../components/ProcesSection"
import Solution from "../../components/Solution";
import FaqSection from "../../components/FaqSection";
import ClientStories from "../../components/ClientStories";


// Delivery Section
const DeliverySection = dynamic(
  () => import("../../components/Newcomponet/comman/DeliverySection"),
  { ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
)


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
        {/* Primary Meta Tags */}
        <title>Accounting Software Development Company | Comfygen Technologies</title>
        <meta
          name="description"
          content="Comfygen is a leading accounting software development company delivering custom, cloud-based, GST-compliant accounting solutions for scalable business growth."
        />
        <link rel="canonical" href="https://www.comfygen.com/accounting-software-development" />


        <meta name="keywords" content="Accounting Software Development, Accounting Software Development Company, Accounting Software Development Services, Custom Accounting Software Development, Accounting Software Developers, Accounting Software Development Solutions, Online Accounting Software Development, Cloud-Based Accounting Software Development, Accounting Software Development Company in India, Accounting Software Development India, Best Accounting Software Development Company, Accounting Software Development Agency" />



        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accounting Software Development Company | Comfygen Technologies" />
        <meta name="twitter:description" content=" Transform your business finance with Comfygen’s accounting software—cloud-based, GST-compliant, and tailored for seamless operations and sustainable growth." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/accounting-software-development/Custom-AccountingSoftware-Development-Company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/accounting-software-development/Custom-AccountingSoftware-Development-Company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/accounting-software-development/Custom-AccountingSoftware-Development-Company.webp" />
        <meta property="og:image:alt" content="Accounting Software Development" />
        <meta property="og:url" content="https://www.comfygen.com/accounting-software-development" />
        <meta property="og:title" content="Accounting Software Development Company | Comfygen Technologies" />
        <meta property="og:description" content="Comfygen is a leading accounting software development company delivering custom, cloud-based, GST-compliant accounting solutions for scalable business growth." />


        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>


     {/* <Header /> */}

      <div className="overflow-hidden pt-16 lg:pt-24">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <ConsultancyApproach Consultancy={JSON_DATA.consultancy} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.technologyData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />

        <TechStackSection deliveryApps={JSON_DATA.deliveryApps}/>

      

        <ClientStories />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <TestimonialSection testimonials={JSON_DATA.customTestimonials} />
        <FaqSection faqData={JSON_DATA.Frequently} />
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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}