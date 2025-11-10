import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaversegame.json";
import Link from "next/link";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import Faq from "../components/Faq";
import HireDeveloper from "../components/HireDeveloper";
import ProcessSec from "../components/ProcessSec";
import { MdOutlineArrowOutward } from "react-icons/md";
import InfoSectionLeft from "../components/InfoSectionLeft";
import CardItem from "../components/CardItem";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
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

const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Rated Metaverse Game Development Company | Comfygen",
  url: "https://www.comfygen.com/media/metaverse-game-development-company",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const productschema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Metaverse Game App Development Agency - Metaverse Game Application Development Company",
  image:
    "https://comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  description:
    "Comfygen is a top-rated Metaverse Game Development Company. We provide the best Metaverse Blockchain Game Development services and custom metaverse game app development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};
const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Metaverse Game Development Company | Comfygen",
  url: "https://www.comfygen.com/media/metaverse-game-development-company",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  legalName: "Comfygen Pvt. Ltd.",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Saddam Husen",
    },
    {
      "@type": "Person",
      name: "Saddam Husen",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
    addressLocality: "Vaishali Nagar",
    addressRegion: "Jaipur, Rajasthan, India",
    postalCode: "302021",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+91 9587867258",
    email: "sales@comfygen.com",
  },
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
export default function Ecommerce(props) {
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
          Best Metaverse Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a best Metaverse Game development company In India & The USA that helps to create a game with high-end technologies. Comfygen offers a very unique 3D virtual gaming platform on any decentralized network. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/media/metaverse-game-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Metaverse Game Development Company | Metaverse Game Development Services | Metaverse Game App Development Services"
        />
        <meta
          property="og:facebook_description"
          content="Our certified metaverse game developers at Comfygen are the best metaverse game app programmers in the industry. Metaverse Game Development Services with end-to-end expertise. With metaverse game app development, turn ideas into reality!"
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Metaverse game development company in the United States, Comfygen provide you top notch services of metaverse game application development with any game platform services and solutions with bets metaverse game development Programmers."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top rated Metaverse Game Development Agency"
        />
        <meta
          name="summary"
          content="Leading Metaverse Game Development Firm"
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Metaverse Game Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="Best Metaverse Game Development Company' content='Empowering businesses with cutting-edge Metaverse game Development Services and solutions and Comfygen's experts metverse blockchain dApp game development services to drive innovation and sustainable growth in the digital economy." />
        <meta
          name="category"
          content="Metaverse Game Development Company, Services - Metaverse blockchain dApp game development"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best Metaverse Game Development Company - Metaverse Game Development Solution Firm in India, The USA, UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Metaverse Game Development Service Provider"
        />
        {metaTags}
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productschema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/metaverse-game-development-hero-img.webp')]">
        <HeroSectionForAllPages
          heading="Metaverse Game Development Services"
          ptag1="Comfygen is a leading Metaverse game development company in India & the USA, specializing in the creation of immersive 3D Metaverse worlds. Our team of highly skilled game developers brings your imaginative game ideas to life by integrating cutting-edge technologies. Whether you're looking for unique worlds, innovative gameplay, or engaging virtual environments, we have the expertise to craft custom Metaverse game development solutions tailored to your needs."
          li="Expert Metaverse Game Development"
          li1="Blockchain Network Expertise"
          li2="Innovative Gameplay"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
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
      <ContactFromCenter />
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
        title="Metaverse Game Development"
      />
      {/*<BlogSection initialData={initialData} />*/}
    </>
  );
}
