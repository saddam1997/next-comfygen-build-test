import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nftmarketplace.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import HeroSectionForAllPages from "../components/HeroSectionForAllPages";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import { MdOutlineArrowOutward } from "react-icons/md";
import HireDeveloper from "../components/HireDeveloper";
import ProcessSec from "../components/ProcessSec";
import AboutSection from "../components/AboutSection";
import ServicesSec from "../components/ServicesSec";
import InfoSectionLeft from "../components/InfoSectionLeft";
import ModelsSec from "../components/ModelsSec";
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

const Processs = [
  {
    title: "Research and content creation",
    description: "Our team conducts comprehensive study and exploration into game development, including concept development, user flow, wire-frames, and value generation. We enhance game concepts with new ideas and features, allowing them to reach their full potential as immersive digital adventures."
  },
  {
    title: "Art and Design Production",
    description: "Our team crafts an engrossing game concept that fully engages players with its dynamic core loop, while also curating a diverse selection of assets that are tailored to your desired art style and personal tastes."
  },
  {
    title: "Game development",
    description: "Our professional NFT developers at Comfygen work their magic by effortlessly integrating several game modules and implementing all of the fantastic features stated in the technical specifications. They do comprehensive testing with painstaking attention to detail to ensure a faultless user experience."
  },
  {
    title: "Blockchain & Tokenomics",
    description: "Our company takes pride in deploying the blockchain technology that best meets your demands. We have Ethereum, Solana, Binance, and Tezos covered. To maintain a functioning economy, we combine numerous tokenomics ideas that encourage balance and sustainability. Trust us to bring your blockchain vision to life."
  },
  {
    title: "Security and Testing",
    description: "Our team of quality analysis professionals at Comfygen painstakingly investigates every component of the game, leaving no stone untouched. They carry out extensive verification and validation methods to ensure that the game not only meets but surpasses the highest security standards. You can rest confident that your gaming experience is in good hands with us."
  },
  {
    title: "Game Launch and Marketing",
    description: "We assist you in the seamless launch of your NFT game across multiple platforms, ensuring visibility and market readiness. Our marketing experts create tailored campaigns to attract the right audience and boost engagement, setting the stage for a successful entry into the gaming world."
  },
  {
    title: "Maintainance and support",
    description: "We go above and above to ensure that your game flourishes long after it has been developed. Our dedicated team provides extensive post-development assistance, including professional monetization methods, concept design, and server monitoring. Your game will have a longer and more successful life cycle with our help."
  }

];
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
          Best NFT Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading NFT Game Development Company In India & The USA that delivers the end-to-end finest NFT Game Development Services to build state-of-the-art NFT games. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-game-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="NFT Game Development Company | NFT Game Company | Build NFT Game | NFT Game Developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen specializes in delivering full-spectrum NFT Game development services backed by tailored technologies. Whether you need NFT Game development Organization or want to develop an NFT Game from the ground up, our rich experience NFT Game developers successfully cater to evolving and modern business needs. Our knowledge, experience, and expertise have helped us position ourselves as the best NFT Game development agency today!"
        />
        <meta
          property="og:twitter_title"
          content="NFT Game Development Company | NFT Game Development Services"
        />
        <meta
          property="og:twitter_description"
          content="When seeking to hire NFT Game Developers who possess the expertise to establish a robust and launch your own NFT Game that gives your customers a seamless buying experience, it's essential to find professionals who are adept in NFT Game blockchain technology. These NFT Game developers should have a deep understanding of blockchain technology, smart contracts, user experience (UX) design, security and compliance, and decentralized storage solutions like IPFS."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="NFT Game Development Company | NFT Software Development"
        />
        <meta
          name="summary"
          content="Choose Comfygen is a top NFT Game Development Company that offers the best NFT Game Development Services & NFT Game Development Solutions to Create NFT Game."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a White-label NFT Development Platform Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="NFT Game Development Company in India, USA"
          content="Comfygen is a prominent nft Game development company,helping businesses to Launch and deploy NFT trading platforms in coordination with certified NFT developers in the USA, UK, and India."
        />
        <meta
          name="category"
          content="NFT Game development company in the worldwide"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Complete NFT Game development company in the world"
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
          content="Best NFT Game Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/nft-game-development-company"
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
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      {/* hero section */}
      <div className="lg:bg-center bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/nft-game-development-company-hero-img.webp')]">
        <HeroSectionForAllPages
          heading="NFT Game Development Company"
          ptag1="What’s left to wait now? Call us, and discuss about the ideas and plans striking your head. Consult about the decentralized gaming ideologies with experienced IT Experts; who can suggest for the best NFT Game Development Services & solutions resulting profitability in your software."
          ptag="NFT Game Development is booming at vastest scale, and its user’s count is constantly rising unimaginably. Comfygen is the one-stop NFT Game Development Company In India & The USA provides agile development solutions and user-friendly UX/UI for seamless gameplay. We have skilled NFT Game Developers integrate some latest technologies, use advanced blockchain frameworks, and take leverages from tokenisation standards in the gaming development platforms."
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
        heading="Presenting The Reliable NFT Game Development Company"
        description1="We are pioneers in the creation of immersive NFT games that will take you to a whole new world of excitement and adventure. We specialize in producing innovative and exciting gaming experiences powered by non-fungible tokens as a leading game development firm. We bring to life virtual landscapes where you can unleash your imagination and go on fascinating expeditions using our knowledge and ingenuity. Join us on this remarkable trip as our cutting-edge NFT games transform the gaming market."
        imageSrc="https://www.comfygen.com/image/about-us-image.webp"
        link="/about-us"
        linkText="Explore More"
      />
      <ContactFromCenter />
      <section className="lg:py-16 py-10 bg-[#F5F5F9]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >NFT Game Development Services</h2>
          </div>
          <div className="">
            <ServicesSec servicesData={JSON_DATA.servicesData} />
          </div>
        </div>
      </section>
      <InfoSectionLeft
        heading="WHITE LABEL NFT GAME DEVELOPMENT SOLUTIONS"
        description1="Using a white label NFT game development solution can transform the journey of prospective game creators. These solutions include a pre-built game engine, a diverse variety of NFT assets, and tools for managing the economy of your game. Saving time and money by not having to create a custom NFT game from scratch is one of the benefits. Using current materials, you may easily construct a professional-looking game. These solutions also provide a high level of flexibility, allowing you to select from a variety of game templates and modify them to your exact requirements and creative vision. You may also use your own logo and artwork to give your game a personal touch. Finally, white label solutions are user-friendly, making them available to everyone, regardless of prior game development knowledge. Even beginners may design and launch their own NFT game with confidence."
        imageSrc="https://www.comfygen.com/img/white-label-nft-game-development-solutions.webp"
        link="/contact-us"
        linkText="LET'S CONNECT "
      />
      <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
      <section className="space-y-4 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto lg:py-16 py-10">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem] lg:w-[70%] w-full mx-auto capitalize">
            New technologies have been implemented in the development of NFT
            games
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 divide-y divide-x">
          {JSON_DATA.TecnologisStack.map((nftmarketplace) => {
            return (
              <div
                key={nftmarketplace.num}
                className="p-6 text-center bg-white space-y-2 hover:bg-[#5556D1] transition-all duration-300 ease-in-out group"
              >
                <Image
                  src={nftmarketplace.img}
                  alt={nftmarketplace.title}
                  className="mx-auto"
                  width={400}
                  height={200}
                />
                <h3 className="text-[#212121] font-bold lg:text-xl text-lg group-hover:text-white">
                  {nftmarketplace.title}
                </h3>
                <p className="group-hover:text-white">
                  {" "}
                  {nftmarketplace.stack}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-[#F5F5F9] lg:py-16 py-10">
        <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
          <div className="text-center">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">NFT Game Development Process</h2>
          </div>
          <ProcessSec processSlides={Processs} />
        </div>
      </section>
      <HireDeveloper
        heading="Hire NFT Game Developers"
        text="Find skilled developers with examples of previous work before beginning an NFT game development project. Ascertain that they have the relevant talents, such as 3D game development. Employ effective communicators who understand your vision and provide regular updates. Set a budget and solicit quotations from several developers. Inquire with them about their method and vision. Have a written contract that specifies the scope, timeline, and payment terms."
        buttonText="Hire Developer"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
        imageAlt="hire-developer"
        listItems={[
          "We have the best team of proficient Substrate blockchain developers.",
          "All our experts have undergone tough certification courses to earn their expertise in the domain.",
          "Our professionals are actively available to address our client's concerns or queries at any time of the day.",
          "Our Substrate developers will make use of the latest technology Substrate blockchain development services to help curate the perfect Substrate blockchain application development services for you."
        ]}
      />
      <WhyChoose
        title={JSON_DATA.pageData.title}
        description={JSON_DATA.pageData.description}
        mainCardData={JSON_DATA.pageData.mainCardData}
        gridData={JSON_DATA.pageData.gridData}
      />
      <div className="lg:py-16 py-10 space-y-4 mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            We Develop Other Games{" "}
          </h2>
        </div>
        <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 ">
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
                    <div className=" p-4 bg-[#5556D1]/90 flex flex-col">
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
                        <div className=" p-4 bg-[#5556D1]/90 flex flex-col">
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
          <div className="flex justify-center items-center mt-8">
            <button
              className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative "
              onClick={() => setShowContent(!showContent)}
            >
              Load Less <MdOutlineArrowOutward />
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-8">
            <button
              className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative  "
              onClick={() => setShowContent(!showContent)}
            >
              Load More <MdOutlineArrowOutward />
            </button>
          </div>
        )}
      </div>
      <Faq
        faqData={JSON_DATA.Frequently}
        title=" NFT Game Development"
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
