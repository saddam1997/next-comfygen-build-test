
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaversegame.json";

import LazyLoad from "react-lazy-load";
import WhyChoose from "../../components/old/components/WhyChooseUs";
import Faq from "../../components/old/components/Faq";
import HireDeveloper from "../../components/old/components/HireDeveloper";
import CardItem from "../../components/old/components/CardItem";
import IndustriesServe from "../../components/old/components/IndustriesServe";
import ProcessSec from "../../components/old/components/ProcessSec";
import ModelsSec from "../../components/old/components/ModelsSec";
import ConsultancyApproach from "../../components/old/components/ConsultancyApproach";
import AboutSection from "../../components/old/components/AboutSection";
import ServicesSec from "../../components/old/components/ServicesSec";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
const Header = dynamic(() => import("../../components/old/components/Header"), {
  loading: () => <p>Loading...</p>,
});


const ContactFromCenter = dynamic(
  () => import("../../components/old/components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


const Process = [
  {
    title: "Conceptualization and Idea Generation",
    description: "Our game development process begins with brainstorming and idea generation. We collaborate with you to conceptualize unique game ideas, define objectives, and create engaging storylines. This ensures a strong foundation for crafting an innovative and captivating game."
  },
  {
    title: "Game Design",
    description: "Our design team creates detailed blueprints, including gameplay mechanics, character design, level structure, and UI/UX elements. We focus on crafting visually appealing designs and intuitive user interfaces to deliver an immersive gaming experience tailored to your audience."
  },
  {
    title: "Development",
    description: "Using cutting-edge tools and technologies, our developers bring the game design to life. From coding to integrating assets, we focus on creating a seamless gaming experience. Our expertise spans 2D, 3D, AR, VR, blockchain, and more, ensuring a robust and dynamic product."
  },
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

// const metaTags = countryNames.map((country, index) => (
//   <meta key={index} name="og:country-name" content={country} />
// ));






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


  const jsonLdData = [

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Innovative Board Game Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Bring your board game ideas to life with Comfygen Technologies. Our expert developers craft immersive, entertaining, and visually stunning board games with seamless gameplay for global audiences.",
      "url": "https://www.comfygen.com/board-game-development",
      "mainEntityOfPage": "https://www.comfygen.com/board-game-development",
      "areaServed": "Global",
      "serviceType": [
        "Board Game Development",
        "Online Board Game Development Company",
        "Board Game Development Company India",
        "Board Game Developers",
        "Decentralized Gaming Platform Development",
        "Multiplayer Board Game Development",
        "AR-Enhanced Board Game Development"
      ],

      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"

      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen Technologies",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      }, {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "email": "sales@comfygen.com",
        "areaServed": ["IN", "US", "CA", "GB", "UAE"],

        "availableLanguage": "en, in"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "Name": "Best Board Game Development Studio | 2D & 3D Game Design Experts",
      "Image": "https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp",
      "description": "Comfygen is your trusted board game development studio specializing in 2D and 3D design, cross-platform integration, and multiplayer experiences. Create games that players love to play.",

      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "560"
      }
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.comfygen.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Board Game Development",
        "item": "https://www.comfygen.com/board-game-development"

      }]
    },
    {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is the duration required to create a board game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In response, the length of time required for development varies based on features and complexity. While more complex projects can take several months to complete, simple board games can be completed in a few weeks. At Comfygen, timely delivery is our top priority when it comes to effective project management."
        }
      }, {
        "@type": "Question",
        "name": "Can board games be made multiplayer compatible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Of course, is the response! Multiplayer features are seamlessly integrated into our board game development services. We use powerful frameworks such as Photon to develop multiplayer augmented reality and online and local cooperative games."
        }

      }]
    }


  ];

  return (
    <>
      <Head>
        <title>
          Board Game Development Company | Custom Board Game Solutions
        </title>
        <meta
          name="description"
          content="Comfygen Technologies is a leading board game development company offering innovative and engaging board game solutions. Our expert designers and developers create interactive, fun, and scalable gaming experiences."
        />

         <meta
          name="keywords"
          content="Board Game Development, Online Board Game Development Company, Board Game Development Company India, Board Game Developers, Decentralized Gaming Platform Development, Multiplayer Board Game Development, AR-Enhanced Board Game Development"
        />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/board-game-development" />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Board Game Development Company in India & USA | Comfygen" />
        <meta name="twitter:description" content="Looking for professional board game development? Comfygen Technologies delivers custom board game design, development, and testing services to bring your creative gaming ideas to life." />
        <meta name="twitter:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta property="og:image:alt" content="Board Game Development" />
        <meta property="og:url" content="https://www.comfygen.com/board-game-development" />
        <meta property="og:title" content="Custom Board Game Development Services | Hire Expert Game Developers" />
        <meta property="og:description" content="Build exciting board games with Comfygen’s skilled developers and designers. We create innovative, engaging, and market-ready board games for web, mobile, and desktop platforms." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

        {/* {metaTags} */}

      </Head>
      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="lg:pt-[80px]">
        <HeroSectionForAllPages
          heading="Board Game Development Company"
          ptag="Are you looking for quality board game development services ? Comfygen is right here to provide you with nice board game development solutions with the support of a modern and nicely skilled group of game designers, testers, and developers. We are one of the main board game development company In India & The USA, giving you a nice roadmap to increase your board game."
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage='https://www.comfygen.com/herosection/board-game-development-hero-img.webp'
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
            <p className="text-base text-center font-normal">Comfygen presents an all-inclusive 8-step carrier to lead you from an idea's inception to a cultured, playable masterpiece. Let's take a step-by-step observe the magic we weave.</p>
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

