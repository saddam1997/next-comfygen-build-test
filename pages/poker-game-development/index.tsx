import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./poker.json";
import Link from "next/link";
import HeroSectionForAllPages from "../../components/old/components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../../components/old/components/WhyChooseUs";
import Faq from "../../components/old/components/Faq";
import AboutSection from "../../components/old/components/AboutSection";
import ProcessSec from "../../components/old/components/ProcessSec";
import HireDeveloper from "../../components/old/components/HireDeveloper";
import ServicesSec from "../../components/old/components/ServicesSec";
import SolutionSec from "../../components/old/components/SolutionSec";
import {
  IconChartLine,
  IconCpu,
  IconCurrencyDollar,
  IconDeviceLaptop,
  IconDevices,
  IconLayersDifference,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";


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




const Processs = [
  {
    title: "Define Your Poker Game Concept",
    description:
      "To begin, you should have a clear vision of the poker game you want to create. Decide on the type of poker game variant, whether it's Texas Hold'em Poker game development, Omaha Poker Game Development, or another variation. Additionally, consider any unique features or rules that will set your Poker game apart from others in the market. This initial concept will serve as the foundation for the entire Poker game development process.",
  },
  {
    title: "Planning",
    description:
      "Once you have a well-defined concept and market research in hand, create a comprehensive project plan for poker game development. Outline the Poker Game Application Development timeline, set milestones, and allocate resources accordingly. Additionally, establish a budget to ensure that your project remains financially viable. A well-thought-out plan will keep your Poker Game Development efforts on track and within scope.",
  },
  {
    title: "Design and User Interface",
    description:
      "Invest time and effort in designing an intuitive and visually appealing user interface for your poker app. Consider user experience as a top priority. Create wireframes and prototypes to visualize the app's layout, user flow, and interaction design. A well-crafted UI will enhance player engagement and retention.",
  },
  {
    title: "Development",
    description:
      "The backend of a poker app manages game logic, including card dealing, hand evaluation, matchmaking, and secure data storage, ensuring fair and seamless gameplay. Paired with a responsive frontend built using HTML, CSS, and JavaScript, the app delivers smooth player interactions across all devices. A scalable backend and visually appealing, mobile-friendly design are key to enhancing user satisfaction and engagement in your poker game app.",
  },
  {
    title: "Testing",
    description:
      "Testing is a crucial step to identify and rectify any issues in your poker game application. Perform thorough functional testing to ensure that all features work as intended. Conduct usability testing to gather feedback on the user experience. Additionally, security testing is vital to detect vulnerabilities that could be exploited. Addressing these issues before launch is essential for a smooth player experience.",
  },
  {
    title: "Deployment",
    description:
      "Deploy your poker game app to a web server or hosting platform. Configure domain and hosting settings to make your app accessible to users. Ensure that the deployment environment is stable and can handle the expected user load.",
  },
  {
    title: "Support and Maintenance",
    description:
      "Offer responsive customer support to address player inquiries and issues promptly. Continuously monitor and maintain your poker game app to keep it stable and secure. Regular updates and maintenance are essential for long-term success.",
  },
];

const technologyData = [
  {
    img: <IconDeviceLaptop stroke={1.5} className="w-12 h-12" />,
    title: "Graphic-Rich User Interface",
    desc: "When it comes to poker game app development, the most important thing to focus on is its graphics. The application should look much simpler with great navigational features.",
  },
  {
    img: <IconChartLine stroke={1.5} className="w-12 h-12" />,
    title: "Live Gaming Insights",
    desc: "The poker game application built by our experts claims to provide live gaming insights to improve your experience.",
  },
  {
    img: <IconUsers stroke={1.5} className="w-12 h-12" />,
    title: "Connect Social Media Friends",
    desc: "The poker game application allows the users to integrate their app with social media accounts to play with friends.",
  },
  {
    img: <IconCpu stroke={1.5} className="w-12 h-12" />,
    title: "Use of Artificial Intelligence",
    desc: "The poker app developers integrate AI features during poker gaming, which enables the users to get suggestions and advice during the real-time gaming.",
  },
  {
    img: <IconCurrencyDollar stroke={1.5} className="w-12 h-12" />,
    title: "Multi-Currency Support",
    desc: "The poker game application enables the gamers to use multi-currencies to make the gaming experience flexible and smooth.",
  },
  {
    img: <IconDevices stroke={1.5} className="w-12 h-12" />,
    title: "Cross-Platform Functionality",
    desc: "Our company suggests the best poker development solutions, and that’s where we prefer our clients to build cross-platform poker game applications to fetch attention from a vast-scale audience.",
  },
  {
    img: <IconShieldCheck stroke={1.5} className="w-12 h-12" />,
    title: "Poker Anti-Fraud System",
    desc: "We ensure our players play with full-fledged safety and security. We built an anti-fraud system in the app for user’s info security.",
  },
  {
    img: <IconLayersDifference stroke={1.5} className="w-12 h-12" />,
    title: "Multi-Games Offering",
    desc: "We provide multiple-games offerings; such as five-card Omaha Poker game development, Holdem Poker, Sit & Go and other RNNG Certified Games.",
  },
];

const Organization = {
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
    // "areaServed": "US, IN",
    "email": "sales@comfygen.com",
    "areaServed": ["IN", "US", "CA", "GB"],

    "availableLanguage": "en, in"
  },
  "sameAs": [
    "https://www.facebook.com/comfygen.technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies",
    "https://www.linkedin.com/company/comfygen-technologies"
  ]
}

const LocalBusiness = {
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
    "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
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
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Poker Game Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "url": "https://www.comfygen.com/"
  },
  "description": "Looking for reliable poker game development? Comfygen offers custom poker game development services in India and the USA. Get feature-rich and secure poker apps tailored to your needs.",
  "url": "https://www.comfygen.com/poker-game-development",
  "mainEntityOfPage": "https://www.comfygen.com/poker-game-development",
  "areaServed": "Global",
  "serviceType": [
    "Blockchain-Based Poker Platform",
    "Mobile Poker Game Development",
    "Blockchain-Based Poker Platform",
    "Turnkey Poker Game Solutions"

  ],

  "sameAs": [
    "https://www.facebook.com/comfygen.technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies",
    "https://www.linkedin.com/company/comfygen-technologies"

  ]
}

const schema = {
  "@context": "http://www.schema.org",
  "@type": "Product",
  "brand": "Comfygen Technologies",
  "Name": "Best Real Cash Poker App Development Services",
  "image": "Hero section image",
  "description": "Develop real cash poker games with Comfygen – a top poker game development company in India and the USA. Our poker game development solutions are scalable, legal-compliant, and revenue-ready. Connect with us now!",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "354"
  }
};

const breadCrum = {
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
    "name": "Game Development",
    "item": "https://www.comfygen.com/poker-game-development"
  }]
}

const faqSchema = {
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Is Poker Game App Development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Poker game app development is a process of developing game app interfaces for various mobile devices such as iOS and Android."
      }
    },
    {
      "@type": "Question",
      "name": "What Technologies Do You Use To Develop Poker Games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the backend, we use Java, and for the database, we rely on MySQL and PostgreSQL. The front end, we use technologies like Vue, Flutter, React Native, JavaScript, Angular, etc."
      }
    },
    {
      "@type": "Question",
      "name": "Have You Ever Worked In Game Development Before?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have developed 1000+ games for a number of clients. YES, we do have specialized in poker game development as per requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How Much Does Poker Game App Development Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Connect with our expert to know ballpark estimation. Besides, we provide poker game development services at pocket-friendly rates."
      }
    }
  ]
};

export default function PokerGame(props) {
  const [showContent, setShowContent] = useState(false);

  let { initialData } = props;
  let { AppService, GameCardData } = JSON_DATA;
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
        <title>No. 1 Poker Game Development Company In India & The USA</title>
        <meta
          name="description"
          content="Comfygen is the No.1 poker game development company in India and the USA, offering customized poker game development services. Hire expert poker game developers for scalable, secure, and engaging poker platforms. Get in touch today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/poker-game-development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/poker-game-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top-Rated Poker Game Development Firm | India & USA

"
        />
        <meta
          name="twitter:description"
          content=" Comfygen offers cutting-edge poker game development in India and the USA. From concept to launch, our expert developers create dynamic, secure, and user-friendly poker experiences.
"
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="Poker Game Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/poker-game-development"
        />
        <meta
          property="og:title"
          content="Real-Money Poker Game Development Company"
        />
        <meta
          property="og:description"
          content="Comfygen builds secure, real-money poker game platforms in India & the USA. Get customized poker games with payment gateway integration and anti-fraud systems. Launch your poker app today!

"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrum) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>

      <div className="overflow-hidden">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/poker-game-development-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="No. 1 Poker Game Development Company"
            ptag="Comfygen is the leading poker game development company in India and the USA, catering to excellent and user-friendly app solutions with a seamless navigational experience. We have been developing super-fantastic games for years and delivering robust and engaging apps. Our talented and skilled game developers are renowned to build authentic applications with ground-breaking designs. We provide seamless poker game development services with advancements and next level techniques."
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
          heading="No. 1 Poker Game Development Company"
          description1="Comfygen is the leading poker game development company in India and the USA, catering to excellent and user-friendly app solutions with a seamless navigational experience. We have been developing super-fantastic games for years and delivering robust and engaging apps. Our talented and skilled game developers are renowned to build authentic applications with ground-breaking designs. We provide seamless poker game development services with advancements and next level techniques"
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Poker Game Development Services
              </h2>
              <p className="text-base text-center font-normal">
                Your poker gaming experience can skyrocket with great
                navigational and other useful features. Here are some poker game
                development services to opt for vast engagement
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <div className="space-y-4 lg:py-16 py-10 text-center 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className=" text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#212121]">
              Poker Game Application Development Services
            </h2>
            <p className="text-base text-black md:text-center text-justify tracking-tight">
              Our expert Poker game app/ software developers believe in
              developing cutting-edge Poker Game Development solutions with
              supremacy features. The engineers works on:
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
            {AppService.map((poker) => {
              return (
                <div
                  key={poker.num}
                  className="space-y-4 border-2 border-[#5556D1]/30 rounded-xl p-6"
                >
                  <Link href={poker.url} passHref={true}>
                    <h3 className="mb-3 md:text-2xl text-xl font-semibold leading-5">
                      {poker.title}
                    </h3>
                    <p className="text-base text-black">{poker.decs}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Mark Your Presence in Web/App-based Top Cards Games Development
                via Comfygen
              </h2>
            </div>
            <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 py-10">
              {GameCardData.slice(0, 6).map((elem) => {
                const { title, url, img, num } = elem;
                return (
                  <div key={num} className="w-full ">
                    <Link href={url} passHref={true}>
                      <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <Image
                          src={img}
                          alt={title}
                          width={730}
                          height={419}
                          className="w-full"
                        />

                        <div className=" p-4 bg-[#5556D1]/80 flex flex-col">
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
                  {GameCardData.slice(6, 17).map((elem) => {
                    const { title, url, img, num } = elem;
                    return (
                      <div key={num} className="w-full ">
                        <Link href={url} passHref={true}>
                          <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                            <Image
                              src={img}
                              alt={title}
                              width={730}
                              height={419}
                              className="w-full"
                            />
                            <div className=" p-4 bg-[#5556D1]/80 flex flex-col">
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
                  className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative"
                  onClick={() => setShowContent(!showContent)}
                >
                  Load Less <MdOutlineArrowOutward />
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <button
                  className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative"
                  onClick={() => setShowContent(!showContent)}
                >
                  Load More <MdOutlineArrowOutward />
                </button>
              </div>
            )}
          </div>
        </section>
        <SolutionSec
          heading="Features of Poker Game App Development"
          subheading="Following the latest tech trends, we integrate the poker game application with some incredible features providing smooth user-experience"
          techData={technologyData}
        />
        <HireDeveloper
          heading="Hire our Dedicated Poker Game Software Developers"
          text="At Comfygen, we deliver top-notch poker game development solutions tailored to enhance client satisfaction. Our dedicated team of expert poker software developers ensures a seamless development process, leveraging the latest technologies and proven techniques for an exceptional gaming experience. Whether you need custom poker game development or platform-specific solutions, our skilled developers are your trusted partners for creating engaging and reliable poker software."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "It is necessary to have on-going software tools and experienced game developers for amazing poker game design.",
            "Our developers approach their legacy of abundance to deliver satisfied results.",
            "We can, additionally, could help to build an online poker game for real money using the open source script.",
            "Faultless conversation with our users",
            "Affordable and time-saving gaming solutions",
            "Powerful and secure coding",
          ]}
        />
        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Poker Game App Development Process
              </h2>
              <p className="text-center">
                Know the poker game application development process to know how
                our experts can serve you with best practices
              </p>
            </div>
            <ProcessSec processSlides={Processs} />
          </div>
        </section>
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Poker Game Development Technology"
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
