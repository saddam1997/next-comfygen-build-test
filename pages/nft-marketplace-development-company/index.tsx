import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nftmarketplace.json";
import Header from "../../components/Newcomponet/layout/Header";
import Milestones from "../../components/Newcomponet/comman/Milestones";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const loader = () => <div className="h-96 bg-gray-100 animate-pulse" />;

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: loader, ssr: true }
);

const CardItem = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CardItem"),
  { loading: loader, ssr: true }
);

const Guidance = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Guidance"),
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

export default function Page(props:any) {
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
          Best NFT Marketplace Development Company | Custom NFT Solutions
        </title>
        <meta
          name="description"
          content="Looking for the best NFT marketplace development company? We build secure, scalable NFT platforms with smart contracts, multi-wallet support, and advanced trading features."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-marketplace-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="NFT Marketplace Development Company | NFT Marketplace Company | Build NFT Marketplace | NFT Marketplace Developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen specializes in delivering full-spectrum NFT marketplace development services backed by tailored technologies. Whether you need NFT marketplace development Organization or want to develop an NFT marketplace from the ground up, our rich experience NFT marketplace developers successfully cater to evolving and modern business needs. Our knowledge, experience, and expertise have helped us position ourselves as the best NFT marketplace development agency today!"
        />
        <meta
          property="og:twitter_title"
          content="NFT Marketplace Development Company | NFT Marketplace Development Services"
        />
        <meta
          property="og:twitter_description"
          content="When seeking to hire NFT Marketplace Developers who possess the expertise to establish a robust and launch your own NFT marketplace that gives your customers a seamless buying experience, it's essential to find professionals who are adept in NFT Marketplace blockchain technology. These NFT Marketplace developers should have a deep understanding of blockchain technology, smart contracts, user experience (UX) design, security and compliance, and decentralized storage solutions like IPFS."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="NFT Marketplace Development Company | NFT Software Development"
        />
        <meta
          name="summary"
          content="Choose Comfygen is a top NFT Marketplace Development Company that offers the best NFT Marketplace Development Services & NFT Marketplace Development Solutions to Create NFT Marketplace."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a White-label NFT Development Platform Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="NFT Marketplace Development Company in India, USA"
          content="Comfygen is a prominent nft marketplace development company,helping businesses to Launch and deploy NFT trading platforms in coordination with certified NFT developers in the USA, UK, and India."
        />
        <meta
          name="category"
          content="NFT marketplace development company in the worldwide"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Complete NFT marketplace development company in the world"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Best NFT Marketplace Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/nft-marketplace-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:09:06+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/ogimages/blockchain-development-company.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.faqSchema) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden pt-[110px]">
        {/* hero section */}
        <HeroSectionForAllPages
          heading="Best NFT Marketplace Development Company"
          ptag1="Comfygen is the best NFT marketplace development company in India helping startups, creators, and enterprises launch secure, scalable, and feature-rich NFT marketplaces. We deliver custom and white-label NFT marketplace solutions with multi-chain blockchain support, smart contract security, and seamless wallet integration to help you build a profitable NFT trading platform with global reach.  "
          li="Custom NFT Marketplace Development "
          li1="Multi-Blockchain Support"
          li2="Secure Smart Contract Integration "
          li3="Advanced Trading Features"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/nft-marketplace-development-company-hero-img.webp"
        />
        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our NFT Marketplace Development Services
              </h2>
              <p className="text-base text-center font-normal">
                At Comfygen, we offer a comprehensive range of NFT marketplace
                development services to help businesses launch secure, scalable,
                and feature-rich platforms. Our expertise spans multiple
                blockchain networks, ensuring seamless transactions, advanced
                security, and top-tier user experience.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="NFT Marketplace Development"
          description1="An NFT marketplace is a blockchain-based platform that enables users to create, buy, sell, and trade digital assets such as artwork, music, virtual real estate, and gaming items. These platforms operate using smart contracts, ensuring security, transparency, and automation in transactions. At Comfygen, we provide end-to-end NFT marketplace development solutions, catering to businesses, artists, and game developers looking to launch a scalable and user-friendly NFT marketplace. "
          points={[
            "Decentralized Ownership & Trading ",
            "Multi-Blockchain Compatibility ",
            "NFT Minting & Smart Contracts ",
            "User-Friendly Interface ",
            "Wallet Integration ",
            "Multiple Revenue Models ",
            "White Label NFT Marketplace Development ",
            "Scalable Architecture ",
          ]}
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}

        <InfoSection
          heading="White Label NFT Marketplace Development"
          description1="At Comfygen, we offer white-label NFT marketplace development solutions that enable businesses to launch a fully functional, customizable, and scalable NFT marketplace in no time. Whether you want to create an NFT platform for art, gaming, real estate, or collectibles, our pre-built solution is tailored to meet your needs."
          description2=""
          description3=""
          dec=""
          points={[
            "Fully Customizable UI/UX ",
            "Multi-Blockchain Support ",
            "Integrated Smart Contracts ",
            "Multi-Wallet Compatibility  ",
            "Advanced NFT Minting & Auction System",
            "Royalty & Revenue Sharing ",
            "KYC & Security Protocols ",
            "Mobile-Friendly & Responsive Design ",
          ]}
          imageSrc="https://www.comfygen.com/img/white-label-nft-marketplace-development.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our NFT marketplace development Portfolio"
            description="At Comfygen, we have successfully developed custom NFT marketplace solutions that empower businesses to tokenize digital assets seamlessly. Our expertise spans secure smart contract integration, multi-chain compatibility, and advanced trading features, ensuring a scalable and high-performance NFT marketplace. With a focus on user-friendly design, high-speed transactions, and enhanced security, we have delivered NFT marketplaces for real estate, gaming, art, collectibles, and more. Whether you're looking for a custom-built solution or a white-label NFT marketplace, our team ensures a seamless development process from ideation to deployment."
          />
        </section>

        <SolutionSec
          heading="Features of Our NFT Marketplace Development"
          subheading="At Comfygen, we build secure, scalable, and feature-rich NFT marketplace platforms tailored to diverse industries such as art, gaming, real estate, and collectibles. Our custom NFT marketplace development services ensure seamless trading, enhanced security, and multi-chain compatibility to provide a next-gen NFT experience."
          techData={JSON_DATA.technologyData}
        />
        <section className="bg-[#F5F5F9] lg:py-16 py-10 ">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our NFT Marketplace Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                At Comfygen, we follow a structured and efficient NFT
                marketplace development process to build a robust, secure, and
                scalable platform. Our step-by-step approach ensures a seamless
                user experience, high performance, and future-ready solutions.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>
        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <CardItem
          heading="What Makes Us the Best NFT Marketplace Development Company?"
          subheading="At Comfygen, we specialize in developing secure, feature-rich, and scalable NFT marketplace solutions that cater to various industries, including art, gaming, real estate, music, and collectibles. Our expertise in blockchain technology, smart contract development, and cross-chain integration allows us to deliver custom and white-label NFT marketplace solutions that align with the latest industry trends."
          techData={JSON_DATA.cardData}
        />
        <InfoSection
          heading="Create Your Own NFT Marketplace with Comfygen"
          description1="Comfygen is a team of knowledgeable developers that specializes in NFT marketplaces a nd provides excellent services at a reasonable cost. Custom design, smart contract development, payment gateway integration, security testing, and maintenance are among the services they offer. For reputable and high-quality NFT marketplaces, trust Comfygen. Select Comfygen for the development of your own NFT marketplace because they possess the know-how, dedication, and experience necessary to build a successful platform that suits your particular requirements."
          description2=""
          description3=""
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/media/metaverse/do-you-want-other-information-aboutour-metaverse-development-services.webp"
          link="/contact-us"
          linkText="LET'S CONNECT "
        />
        <Guidance />
        <Faq faqData={JSON_DATA.Frequently} title="" />
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