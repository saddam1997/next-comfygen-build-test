import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaversegame.json";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { ssr: true }
);
const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { ssr: true }
);


const InfoSectionLeft = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSectionLeft"),
  { ssr: true }
);


const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { ssr: true }
);


const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { ssr: true }
);
const CardItem = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CardItem"),
  { ssr: true }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

const Process = [
  {
    title: "Selection of Blockchain",
    description: "Choose the ideal blockchain network on which you want to develop your metaverse game to offer a unique experience to players."
  },
  {
    title: "Design of Visual Content",
    description: "Our developers would work on designing visual assets for your metaverse game with the most appealing environment that delivers impressive gameplay experiences."
  },
  {
    title: "Storyboard Development",
    description: "We develop the concept of the game in the form of storyboards that help define the course of the game and finalize the important game ideas and assets."
  },
  {
    title: "Addition of Sounds",
    description: "One of the crucial aspects of our metaverse game development projects is the addition of sounds according to the requirements of the game."
  },
  {
    title: "Developing Game Environment",
    description: "Our team mainly focuses on creating an environment that will look like players are in an actual physical space rather than in virtual reality. We as a metaverse gaming platform development company built an immersive and detailed game environment."
  },
  {
    title: "User Interaction & Experience Design",
    description: "We ensure the game offers intuitive and engaging interactions, allowing players to fully immerse themselves in the virtual world. Our UX/UI experts optimize the user experience for smooth and seamless interactions, ensuring that players feel in control and connected within the metaverse."
  },
  {
    title: "Testing and Deployment",
    description: "After the development process of the metaverse game, we implement comprehensive testing and audits. It helps us ensure that the game does not have any bugs before the final deployment."
  },

];

const countryNames = [
  "US",
  "CA",
  "GB",
  "AD",
  "AU",
  "AT",
  "BS",
  "BH",
  "IO",
  "KM",
  "CU",
  "AR",
  "CW",
  "CY",
  "DK",
  "DM",
  "EG",
  "FK",
  "FI",
  "FR",
  "DE",
  "GR",
  "GL",
  "HK",
  "IS",
  "IN",
  "ID",
  "IT",
  "JP",
  "JE",
  "JO",
  "KW",
  "KG",
  "KR",
  "MX",
  "FM",
  "NZ",
  "NI",
  "OM",
  "PE",
  "PH",
  "PL",
  "PT",
  "QA",
  "RO",
  "RU",
  "SA",
  "SG",
  "SE",
  "SZ",
  "CH",
  "TH",
  "TR",
  "TN",
  "UA",
  "UM",
  "AE",
  "039",
  "155",
  "154",
  "151",
  "150",
];

const metaTags = countryNames.map((country, index) => (
  <meta key={index} name="og:country-name" content={country} />
));









export default function Ecommerce(props:any) {
  const [showContent, setShowContent] = useState(false);
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
          Comfygen Metaverse Game Development Company In India and USA
        </title>
        <meta
          name="description"
          content="Comfygen is a trusted Metaverse Game development company In India & USA that helps to create a game with high-end technologies. Comfygen offers a very unique 3D virtual gaming platform on any decentralized network. Contact us today!"
        />

        <meta name="keywords" content="Metaverse Game App Development, AR VR Game Development, Blockchain Metaverse Development, NFT Game Development, Play-to-Earn Metaverse Games, Multiplayer Virtual World Development, Web3 Game Development Solutions"/>

        {/* <!-- Canonical Tag --> */}

        <link rel="canonical" href="https://www.comfygen.com/metaverse-game-development-company " />
        {/* <!-- Robots → */}

        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Metaverse Game Development Company" />

        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}

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

        {/* <!-- Geo Location Meta --> */}

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



        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Metverse Game App Development " />
        <meta name="twitter:description" content="Build immersive Metaverse game apps with Comfygen. We develop AR/VR-powered, blockchain-enabled, multiplayer Metaverse games with NFTs, virtual economies, and real-time interactions for next-gen gaming experiences." />
        <meta name="twitter:image" content=" OG Image link " />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="Metaverse Game App Development" />
        <meta property="og:url" content=" https://www.comfygen.com/metaverse-game-development-company" />
        <meta property="og:title" content="Football Live Line API Development Services | Comfygen" />
        <meta property="og:description" content="Build immersive Metaverse game applications with Comfygen. We specialize in AR/VR game development, blockchain-based Metaverse platforms, NFT integration, multiplayer virtual worlds, and scalable Web3 gaming solutions." />


        {metaTags}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_DATA?.jsonLdData),
          }} />
      </Head>

        <Header />

      <div className="lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Metaverse Game Development Services"
          ptag1="Comfygen is a leading Metaverse game development service provide, specializing in the creation of immersive 3D Metaverse worlds. Our highly skilled Metaverse game developers team brings your imaginative game ideas to life by integrating cutting-edge technologies. Whether you're looking for unique worlds, innovative gameplay, or engaging virtual environments, we have the expertise to craft custom Metaverse game development solutions tailored to your needs."
          li="Expert Metaverse Game Development"
          li1="Blockchain Network Expertise"
          li2="Innovative Gameplay"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/herosection/metaverse-game-development-hero-img.webp"
        />
      </div>
      <AboutSection
        title="About Company"
        heading="Create a New Generation of Gaming Experiences on the Metaverse with Experts"
        description1="One of the world's leading Metaverse game development companies, Comfygen consistently achieves excellence in every aspect of the work we do. We take immense pride in the dedication and expertise our metaverse game developers bring to creating immersive metaverse games that captivate and engage new users. With extensive industry experience, our experts are at the forefront of blending metaverse technologies with the gaming industry, developing groundbreaking games that push the boundaries of virtual interaction and entertainment."
        points={[
          "Next-Gen Metaverse Game Design & Development",
          "Seamless Integration of Blockchain & Virtual Reality",
          "In-depth user Experience for Engagement & Retention",
          "Cutting-Edge Graphics & Immersive Environments",
          "Dedicated Team of Experts Focused on Innovation"
        ]}
        imageSrc="https://www.comfygen.com/image/about-us-image.webp"
        link="/about-us"
        linkText="Explore More"
      />
      {/* <ContactFromCenter /> */}
      <section className="lg:py-16 py-10 bg-[#F3F4F6]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Metaverse Game Development Services</h2>
            <p className="text-base text-center font-normal">Our company is a leader in metaverse game development, with attention to the technologies that are required to create modern metaverse games. Our expertise in different metaverse development technologies, blockchain technology, AR/VR, and gaming models such as play-to-earn and play-to-earn helps us deliver excellence in all our services.</p>
          </div>
          <div className="">
            <ServicesSec servicesData={JSON_DATA.servicesData} />
          </div>
        </div>
      </section>
      <section className="bg-white lg:py-16 py-10">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
          <div className="text-center">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">The Process of Developing Immersive Metaverse Games</h2>

          </div>
          <ProcessSec processSlides={Process} />
        </div>
      </section>
      <InfoSectionLeft
        heading="Comfygen Programmers Metaverse For Diverse Industries"
        description1="Metaverse has become one of the prominent technologies that would change the course of operations in different industries. It has found its way into different types of use cases with innovative potential for business transformation. Our metaverse game development expertise has helped businesses across multiple industries."
        points={[
          "Gaming",
          "Ecommerce",
          "Education",
          "Tourism",
          "Fashion",
          "Entertainment",
          "Real estate",
          "Finance",
          "Social Media"
        ]}
        imageSrc="https://www.comfygen.com/media/metaverse/comfygen-programmers-metaverse-for-diverse-for-industries.webp"
        link="/contact-us"
        linkText="LET'S CONNECT "
      />
      <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-4 text-center ">
            <h2 className="text-4xl font-bold text-[#ffffff] ">
              Tech Stack Used for Metaverse Game Development
            </h2>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {JSON_DATA.ProcessNFT.map((elem) => {
              const { title, img, decs, num, url } = elem;
              return (
                <div
                  key={num}
                  className="p-6  bg-[#fff]/30 border rounded-xl group hover:bg-white transition-all duration-200"
                >
                  <a href={url} className="space-y-4">
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-white border rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold group-hover:text-[#0E1F51] transition-all duration-200 text-left text-white">
                      {title}
                    </h3>
                    <p className="font-medium text-left text-white group-hover:text-black break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CardItem
        heading="Build Your Own Metaverse Game with Your Preferred Engagement Model"
        subheading="We offer our metaverse gaming platform development expertise in different models tailored to your unique requirements."
        techData={JSON_DATA.Chooseyourdesired}
      />
      <WhyChoose
        title={JSON_DATA.pageData.title}
        description={JSON_DATA.pageData.description}
        mainCardData={JSON_DATA.pageData.mainCardData}
        gridData={JSON_DATA.pageData.gridData}
      />
      <InfoSectionLeft
        heading="Do You Have More Questions on Metaverse Game Development Services?"
        description1="If you have any doubts about our metaverse game development services, then you can talk to our consultant right now."
        imageSrc="https://www.comfygen.com/media/metaverse/do-you-have-more-questions-on-metaverse-game-development-services.webp"
        link="/contact-us"
        linkText="LET'S CONNECT "
      />

      <div className="space-y-4 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            We Develop Other Games{" "}
          </h2>
        </div>
        <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 py-10">
          {JSON_DATA.GameCardData.slice(0, 6).map((elem) => {
            const { title, url, img } = elem;
            return (
              <div className="w-full ">
                <Link href={url} passHref={true}>
                  <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <Image
                      src={img}
                      alt={title}
                      width={730}
                      height={419}
                      className="w-full"
                    />
                    <div className=" p-4 bg-[#5556D1] flex flex-col">
                      <div>
                        <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                          {title}
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          {showContent ? (
            <>
              {JSON_DATA.GameCardData.slice(6, 17).map((elem) => {
                const { title, url, img } = elem;
                return (
                  <div className="w-full ">
                    <Link href={url} passHref={true}>
                      <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <Image
                          src={img}
                          alt={title}
                          width={730}
                          height={419}
                          className="w-full"
                        />
                        <div className=" p-4 bg-[#5556D1] flex flex-col">
                          <div>
                            <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                              {title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {showContent ? (
          <div className="flex justify-center items-center">
            <button
              className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative "
              onClick={() => setShowContent(!showContent)}
            >
              Load Less
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button
              className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative "
              onClick={() => setShowContent(!showContent)}
            >
              Load More <MdOutlineArrowOutward />
            </button>
          </div>
        )}
      </div>
      <HireDeveloper
        heading="Hire Our Metaverse Game Developers for Creating Innovative Web3 Games."
        text="We take pride in the capabilities of our team of certified metaverse game developers. Our services can help in improving your metaverse game environments alongside elevating them to success. With our team of passionate developers, we can incorporate creativity and imagination into metaverse games. Our developers have honed their skills in metaverse game development by working on different types of projects."
        buttonText="Hire Developer"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
        imageAlt="hire-developer"
        listItems={[
          "Our developers specialize in blockchain technology and metaverse development.",
          "We offer different types of engagement models for leveraging our developers.",
          "Affordable solutions with opportunities for saving time.",
          "Comprehensive audits and secure coding.",
          "Transparent communication with clients."
        ]}
      />
      <Faq
        faqData={JSON_DATA.Frequently}
        title="Frequently Asked Questions"
      />
      <BlogSection initialData={initialData} />
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
