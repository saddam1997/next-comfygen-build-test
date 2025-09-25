import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaversegame.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import HireDeveloper from "../components/HireDeveloper";
import CardItem from "../components/CardItem";
import IndustriesServe from "../components/IndustriesServe";
import ProcessSec from "../components/ProcessSec";
import ModelsSec from "../components/ModelsSec";
import ConsultancyApproach from "../components/ConsultancyApproach";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
// const BlogSection = dynamic(() => import("../components/BlogSection1"), {
//   loading: () => <p>Loading...</p>,
// });
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Industries = dynamic(() => import("./components/Industries"), {
  loading: () => <p>Loading...</p>,
});



const Process = [
  { title: "Conceptualization and Idea Generation", 
    description: "Our game development process begins with brainstorming and idea generation. We collaborate with you to conceptualize unique game ideas, define objectives, and create engaging storylines. This ensures a strong foundation for crafting an innovative and captivating game." },
  { title: "Game Design",
     description: "Our design team creates detailed blueprints, including gameplay mechanics, character design, level structure, and UI/UX elements. We focus on crafting visually appealing designs and intuitive user interfaces to deliver an immersive gaming experience tailored to your audience." },
  { title: "Development", 
    description: "Using cutting-edge tools and technologies, our developers bring the game design to life. From coding to integrating assets, we focus on creating a seamless gaming experience. Our expertise spans 2D, 3D, AR, VR, blockchain, and more, ensuring a robust and dynamic product." },
  {
    title: "Testing and Quality Assurance",
    description: "We conduct rigorous testing to ensure your game is free from bugs and glitches. Our QA team evaluates performance, compatibility, and user experience across various platforms, guaranteeing a smooth and enjoyable gaming experience for players."
  },
  {
    title: "Deployment",
    description: "Once the game meets all quality standards, we assist with deployment across your chosen platforms, including app stores, web, and consoles. Our deployment process ensures a hassle-free launch with optimized visibility and market readiness."
  },
  {
    title: "Custom Monetization Strategies",
    description: "We help you implement effective monetization strategies tailored to your game, including in-app purchases, advertisements, subscriptions, and premium content. This ensures a steady revenue stream without compromising the player's gaming experience."
  },
  {
    title: "Post-Launch Support",
    description: "Our commitment doesn’t end at launch. We provide ongoing support, including updates, bug fixes, and feature enhancements. By analyzing user feedback, we ensure your game evolves to meet player expectations, keeping it relevant and engaging in the long term."
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
  name: "Top Rated Board Game Development Company | Comfygen",
  url: "https://www.comfygen.com/board-game-development",
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
    "Comfygen is a top-rated Board Game Development Company. We provide the best Metaverse Blockchain Game Development services and custom metaverse game app development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};
const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Board Game Development Company | Comfygen",
  url: "https://www.comfygen.com/board-game-development",
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
          Board Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Looking to develop engaging board games? Explore with Comfygen, a leading board game development company In India & The USA. Create a personalized gaming experience with Comfygen; Bring your board game project to life."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/board-game-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Board Game Development Company | Board Game Development Services | Metaverse Game App Development Services"
        />
        <meta
          property="og:facebook_description"
          content="Our certified metaverse game developers at Comfygen are the best metaverse game app programmers in the industry. Board Game Development Services with end-to-end expertise. With metaverse game app development, turn ideas into reality!"
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Board Game Development company in the United States, Comfygen provide you top notch services of metaverse game application development with any game platform services and solutions with bets Board Game Development Programmers."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top rated Board Game Development Agency"
        />
        <meta name="summary" content="Leading Board Game Development Firm" />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Board Game Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="Best Board Game Development Company' content='Empowering businesses with cutting-edge Board Game Development Services and solutions and Comfygen's experts metverse blockchain dApp game development services to drive innovation and sustainable growth in the digital economy." />
        <meta
          name="category"
          content="Board Game Development Company, Services - Metaverse blockchain dApp game development"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best Board Game Development Company - Board Game Development Solution Firm in India, The USA, UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Board Game Development Service Provider"
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
      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/board-game-development-hero-img.webp')]">
        <HeroSectionForAllPages
          heading="Board Game Development Company"
          ptag="Are you looking for quality board game development services ? Comfygen is right here to provide you with nice board game development solutions with the support of a modern and nicely skilled group of game designers, testers, and developers. We are one of the main board game development company In India & The USA, giving you a nice roadmap to increase your board game."
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
          heading="Your Board Game Development Partner"
          description1="Are you caught in prototype hell? Introducing Comfygen, your collaborator in board game software development! With our revel in at every stage, we feed your passion. Our masters of advertising create buzz, artists create breathtaking pics, and we polish your mechanics. We carefully playtest to make sure your masterpiece is wonderful."
          description2="Put a stop to your solitary struggles with Comfygen. Now, you've got a group at the back of you, celebrating every win and overcoming obstacles together. So, let your inner game master loose; we are right here to convert your fantasies into cardboard kingdoms! Come along for the journey as we create imaginative games together, one cardboard container at a time!"
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
         <ContactFromCenter />
         <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >Our Board Game Design and Development Service</h2>
              <p className="text-base text-center font-normal">Board games can take you to imaginary worlds and create valuable recollections, whether you are playing them while cuddled up in a heated armchair or collected around a roaring fire. However, board game application development thoughts can be intimidating, hard, and fraught with unanticipated dangers, similar to mountain climbing Mount Cardboard.</p>
              <p  className="text-base text-center font-normal">Comfygen presents an all-inclusive 8-step carrier to lead you from an idea's inception to a cultured, playable masterpiece. Let's take a step-by-step observe the magic we weave.</p>
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
      <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Game Development Process our experts follow</h2>
              <p className="text-base font-normal mt-2">
              Creating a game is a complex and dynamic process requiring technical expertise, creativity, and precise execution. At Comfygen, we pride ourselves on delivering exceptional gaming experiences through a structured approach. Here’s an overview of the key stages our experts follow
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>
      <IndustriesServe />
      <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />    
      <CardItem
        heading="Choose your desired engagement Model for Board Game Development"
        subheading="The key to growing at a hit board recreation is selecting the right engagement version from the board game development company in the USA. At Comfygen, we offer three unique fashions to meet the diverse wishes of our customers."
        techData={JSON_DATA.Chooseyourdesired}
      />
      <WhyChoose
        title={JSON_DATA.pageData.title}
        description={JSON_DATA.pageData.description}
        mainCardData={JSON_DATA.pageData.mainCardData}
        gridData={JSON_DATA.pageData.gridData}
      />
      <HireDeveloper
        heading="Hire a game developer"
        text="Hiring our game developers guarantees an unparalleled blend of innovation, technical prowess, and collaborative spirit. With a deep reservoir of skills spanning coding, design, and creativity, our developers bring a holistic approach to every project. Their problem-solving ability and adaptability to various platforms ensure your game's perfection. By hiring our console game developers, you’re securing a team intended to transform ideas into extraordinary gaming realities."
        buttonText="Hire Developer"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
        imageAlt="hire-developer"
        listItems={[
          "Unlock unique and cutting-edge game development solutions.",
          "Craft captivating mechanics that keep players engaged.",
          "Ensure glitch-free experiences with optimized coding.",
          "Seamless team integration for efficient development as well as pro level testing."
        ]}
      />
      <Faq
        faqData={JSON_DATA.Frequently}
        title="Video Game Development"
      />
      <BlogSection initialData={initialData} />
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
