
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ethereumblock.json";

import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  {  ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  {  ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  {  ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  {  ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  {  ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  {  ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  {  ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  {  ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { ssr: true }
);


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import ReviewCard from "../../components/ReviewCard";

export default function Ecommerce(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Best Ethereum Blockchain Development Company | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is the best Ethereum blockchain development company, offering secure, scalable, and customized blockchain solutions. Build smart contracts, DApps, DeFi platforms, and tokenization solutions."
        />

        <link rel="canonical" href="https://www.comfygen.com/ethereum-blockchain-development-company" />

        {/* <!-- Robots → */}
        <meta name="keywords" content="Ethereum DApp Development, Smart Contract Development, Ethereum Token Development, DeFi Development Solutions, NFT Marketplace Development, Ethereum Wallet & Exchange Development, Enterprise Ethereum Solutions" />


        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Ethereum Blockchain Development" />


        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta/ --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

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


        {/* <!-- Twit/ter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ethereum Blockchain Development Company | Hire Expert Ethereum Developers" />
        <meta name=" twitter: description" content="Comfygen offers expert Ethereum development services, including DApps, NFTs, DeFi platforms, and smart contracts. Hire certified Ethereum developers to scale your blockchain solutions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum-blockchain-development-company.webp " />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* <!-- Faceb/ook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum-blockchain-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum-blockchain-development-company.webp" />
        <meta property="og:image:alt" content="Ethereum Blockchain Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/ethereum-blockchain-development-company" />
        <meta property="og:title" content="Ethereum Blockchain Development Company | Secure, Scalable & User-Friendly" />
        <meta property="og: description" content=" Comfygen is a top Ethereum Blockchain Development Company offering DApp, DeFi, NFT, and smart contract solutions. Hire certified Ethereum developers for secure, scalable, and future-ready blockchain applications." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden  pt-16">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        {/* <HeroSectionForAllPages
          heading="Best Ethereum Blockchain Development Company"
          ptag="Comfygen is a leading Ethereum blockchain development company delivering secure, scalable, and high-performance ethereum blockchain solutions for modern businesses. Our blockchain experts specialize in custom Ethereum DApps, smart contracts, NFT marketplaces, and enterprise-grade integrations, building future-ready applications that drive transparency, innovation, and business growth."
          li="Custom Ethereum DApp Development"
          li1="Secure Smart Contract Development & Audits"
          li2="Token & NFT Marketplace Solutions"
          li3="Enterprise-Grade Ethereum Integration"
          li4="Transform your business with Ethereum expertise"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum-blockchain-development-company.webp"
        /> */}
        {/* <Milestones/> */}
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Comprehensive Ethereum for Blockchain Development Services We Offer
              </h2>
              <p className="text-base text-center font-normal">Comfygen Ethereum for Blockchain Development Company delivered secure and scalable Ethereum blockchain services. From DeFi platforms and NFT marketplaces to ERC-20 tokens and custom dApps, our experts harness Ethereum’s smart contract capabilities to build future-ready decentralized solutions.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>


        <AboutSection
          title="About Company"
          heading="Why Choose Ethereum for Blockchain Development?"
          description1="Ethereum Blockchain Development offers businesses a secure, scalable, and reliable foundation for building next-generation decentralized applications. Its strong ecosystem, developer community, and proven track record make it the ideal choice for businesses seeking innovation. From DeFi to NFTs, Ethereum powers diverse use cases with unmatched flexibility and security. With Ethereum, enterprises can harness smart contracts, digital assets, and decentralized networks to stay ahead in the digital economy."
          points={[
            "Trusted platform for dApps & smart contracts",
            " Highly scalable & secure blockchain network",
            "EVM compatibility for cross-chain development",
            "Strong global developer community & ecosystem",
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/ethereum-blockchain-development-company/ethereum_about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <SolutionSec
          heading="Our Ethereum Blockchain Development Solutions"
          subheading="Businesses choose a Custom Ethereum Blockchain Development Company for its ability to deliver secure, scalable, and future-ready solutions. With Ethereum’s smart contracts and decentralized infrastructure, companies can streamline operations, enhance transparency, and drive innovation in the evolving blockchain landscape."
          techData={JSON_DATA.technologyData}
        />
        <TechStack
          title="Tech Stack we used for Ethereum Blockchain Development."
          description="At Comfygen, our Cardano Blockchain Development Company leverages a powerful and cutting-edge tech stack to deliver secure, scalable, and high-performance blockchain solutions."
        />
        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Ethereum Blockchain Development Process</h2>
              <p className="text-base font-normal mt-2">At Comfygen, as a leading Ethereum Blockchain Development Company, we follow a proven and transparent process to deliver secure and scalable blockchain solutions. Our Ethereum blockchain development services are designed to align with your unique requirements while ensuring faster go-to-market and long-term success.</p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/car-finance-app-development/feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <HireDeveloper
          heading="Hire Our Expert Ethereum Blockchain Developers"
          text="Hire a dedicated Ethereum Blockchain developer from India to build secure, scalable, and future-ready blockchain solutions. Our certified Ethereum developers specialize in tokens, DApps, NFT marketplaces, and DeFi platforms, ensuring seamless blockchain integration. With proven expertise, compliance-driven processes, and a strong record of success, we deliver high-performance solutions tailored to your business needs."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Certified Ethereum Developers",
            "Proven Record of Success",
            "Compliance and Governance",
            "Capability in Building Ethereum Infrastructures",
            "Smart Contract & DeFi Development Skills"
          ]}
        />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Ethereum Blockchain Based Portfolio"
            description="Explore our portfolio of successful projects built on the Ethereum Blockchain, showcasing our expertise in online solutions and app development. Each project reflects our commitment to excellence, innovation, and client satisfaction."
          />
        </section>


        <CallToAction
          heading=" Need More Information on Ethereum Blockchain Development?"
          text=" Our excellence in delivering Ethereum blockchain development services continues to grow with every new project. As one of the leading blockchain networks, Ethereum provides unlimited possibilities for revolutionizing digital transformation of your business. If you want to learn more about our Ethereum development services, then you can connect with us through your preferred channels right now."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />

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