import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BsTabletFill } from "react-icons/bs";
import { BiAccessibility, BiSupport } from "react-icons/bi";
import { AiFillMobile, AiOutlineCheck } from "react-icons/ai";
import { MdAdd, MdDesktopMac, MdRemove } from "react-icons/md";

import styles from "./styles.module.css";
import JSON_DATA from "./omaha.json";
const Header = dynamic(() => import("../../components/Newcomponet/layout/Header"), {
  ssr: true
});
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

const AdviceSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Advice"), {
   ssr: true
});

const WhiteNavButton = dynamic(() => import("../../components/Newcomponet/SectionCompoent/WhiteNavButton"), {
   ssr: true
});

const ConnectWithExpertButton = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ConnectWithExpertButton"), {
   ssr: true
});


const ConnectWithExpertButtonHoverEffect = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ConnectWithExpertButtonHoverEffect"), {
   ssr: true
});

import WhyChoosee from "./components/WhyChooseUs";

const OmahaServices = dynamic(() => import("./components/OmahaServices"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/Faq"), {
  loading: () => <p>Loading...</p>,
});



const TalkExpert = dynamic(() => import("../../components/Newcomponet/SectionCompoent/TalkExpert"), {
  loading: () => <p>Loading...</p>,
});

const WhyChoose = dynamic(() => import("./components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

const Crafting = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <BiAccessibility size={60} className="text-blue-500" />,
    title: "Platform Versatility: The Nexus of Innovation and Accessibility",
    decs: "Our conviction is rooted in the belief that the thrill of Omaha Poker should be within arm's reach for everyone, irrespective of their favored gaming apparatus. Our commitment to ingenuity propels us to engineer seamless encounters on a diverse range of platforms, empowering you to handpick when and where your play unfolds.",
  },
  {
    num: "2",
    bg: "#F6F0FE",
    icon: <AiFillMobile size={60} className="text-blue-500" />,
    title: "Mobile",
    decs: " Carry the thrill of Omaha Poker with you, wherever your adventures lead. Our mobile iteration ensures that the game seamlessly adapts to your smartphone's dimensions,transforming strategic decisions into an effortless endeavor even while on the move.",
  },
  {
    num: "3",
    bg: "#82AB101A",
    icon: <BsTabletFill size={60} className="text-blue-500" />,
    title: "Tablet",
    decs: " Immerse yourself in the game's intricate dance through the expansive canvas of a tablet. The touch controls, intuitive in nature, bestow precision, enabling you to concentrate on outwitting your adversaries.",
  },
  {
    num: "4",
    bg: "#6C54DE1A",
    icon: <BiSupport size={60} className="text-blue-500" />,
    title: "A Tapestry of Supported Platforms: A Glimpse into Our Versatility",
    decs: "Our Omaha Poker creations are meticulously crafted to cater to a diverse palette of players. Our embrace extends to:",
  },
  {
    num: "5",
    bg: "#82AB101A",
    icon: <MdDesktopMac size={60} className="text-blue-500" />,
    title: "Desktop",
    decs: "Immerse yourself in the game's immersive graphics and intricate gameplay on your computer, where expansive screens elevate the intensity of each hand.    ",
  },
];
const imageStyle = {
  backgroundImage: `url("https://www.comfygen.com/img/crafting-the-future-of-omaha-poker-where-technology-meets-expertise.webp")`,
  height: "400px",
  width: "300px",
};


export default function Altcoin(props) {
  const [currentCount, setCurrentCount] = useState("");
  const [currentCount1, setCurrentCount1] = useState("");

  let { initialData } = props;
  let {

    myList,
    myList4,
    Shaping,
    SoftwareMode,
    SolutionsHead,
    StepInto,
    UniqueSelling,
    Elevating,
    ElevatingExprience,
    TecnologisStack,
    glimpse,
    Multiverse,
    Mode1,
    featured,
    featured1,
    Whychoose,
    PremierOnline,
    Process,
    Frequently,
    Hire,
    Bestchoice,
    OmahaProcess,
    Distinguishing,
  } = JSON_DATA;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "https://www.comfygen.com/img/hire-baccrate-game.webp";
    img.src = "https://www.comfygen.com/images/glance-for-top-class-bg.webp";
    img.src =
      "https://www.comfygen.com/img/welcome-to-our-online-omaha-poker-game-development-solution.webp";
    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  const imageHire = {
    backgroundImage: loaded
      ? `url("https://www.comfygen.com/img/hiring-omaha-poker-game-developers-unleash-the-future-of-gaming.webp")`
      : "none",
  };
  const imageStyle2 = {
    backgroundImage: loaded
      ? `url("https://www.comfygen.com/img/empower-your-vision-with-comfygen-lets-redefine-omaha-poker-gaming.webp")`
      : "none",
  };
  const imageStyle1 = {
    backgroundImage: loaded
      ? `url("https://www.comfygen.com/img/welcome-to-our-online-omaha-poker-game-development-solution.webp")`
      : "none",
  };

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
          Top Online Omaha Poker Game Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Comfygen isn't just a name, it's a legacy of excellence. Comfygen is one of the best leading Online Omaha Poker Game Development Company In India & The USA. We offer Customized Omaha Poker App and Software Development Services.
"
        />
        <meta
          property="og:title"
          content="Top Online Omaha Poker Game Development Company in India | Comfygen "
        />
        <meta
          property="og:description"
          content="Comfygen isn't just a name, it's a legacy of excellence. Comfygen is one of the best leading Online Omaha Poker Game Development Company In India & The USA. We offer Customized Omaha Poker App and Software Development Services."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/omaha-poker-game-development"
        />
        <meta
          name="robots"
          content="index,follow,MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top-notch Omaha Poker Game Development Company | Hire Omaha Poker Game Developers Now! | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Best Online Omaha Poker Game Website & Application Development Company in India and USA. Professional Techie developers & programmers aim to provide maximum satisfaction to all game lovers."
        />
        <meta
          property="og:twitter_title"
          content="Best Omaha Poker Game App Development Company in India and USA | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is one of the best leading Omaha Poker Game Development Company that provides the best Online Omaha poker software, app, and website."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="es-us" />
        <meta
          name="abstract"
          content=" Omaha Poker Game Development Company | Hire Omaha Poker Developers"
        />
        <meta
          name="summary"
          content="Comfygen is the best Omaha Poker Game Development Company in India and USA."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a company, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Omaha Poker Game Development Company | Hire Omaha Poker Developers"
          content="Comfygen is the best Omaha Poker Game Development Company | Hire Omaha Poker Developers India & USA. Our Omaha Poker Game Development Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta
          name="category"
          content="Omaha Poker Game App, Software and Website"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Online Omaha Poker Game Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Omaha Poker Game Development Software"
        />
      </Head>
      <div className="">
       {/* <Header /> */}
      </div>
      <div className="overflow-hidden ">
        <div className="">
          <HeroSectionForAllPages
            heading="Omaha Poker Game Development Company"
            ptag="At the forefront of the Omaha Poker game development industry, Comfygen emerged as a prominent and accomplished company. Specializing in Omaha Poker game software development, we are your reliable providers of top-notch solutions. With an array of services ranging from crafting enticing Omaha Poker game websites to offering the option to hire dedicated Omaha Poker game developers, we cater to your every need. "
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/herosection/omaha-poker-game-development-hero-img.webp"
          />
        </div>

        <section className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:py-10">
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <div className="space-y-4">
              <h2 className="md:text-3xl text-xl font-bold">
                {PremierOnline?.head}
              </h2>
              <p className="text-base text-slate-800">{PremierOnline?.para}</p>
              <p className="text-base text-slate-800">{PremierOnline?.para1}</p>
              <p className="text-base text-slate-800">{PremierOnline?.para2}</p>
            </div>
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-3">
              <div className="border-dashed border-2 rounded-xl border-black p-6 bg-purple-100 space-y-3">
                <h3 className="text-xl font-semibold">
                  {PremierOnline?.head1}
                </h3>
                <p className="text-base text-slate-800">
                  {PremierOnline?.para3}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <ContactFromCenter /> */}

        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                {ElevatingExprience?.head}
              </h2>
              <p className="text-base text-slate-800">
                {ElevatingExprience?.para}
              </p>
            </div>
            <div className="grid gap-16 pt-10 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {Elevating.map((omaha) => {
                return (
                  <div
                    key={omaha.num}
                    className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={omaha.img}
                        alt={omaha.title}
                        title={omaha.title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {omaha.title}
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {omaha.decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                {UniqueSelling?.head}
              </h2>
              <p className="text-base text-slate-800">{UniqueSelling?.para}</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {SoftwareMode.map((ele) => {
                return (
                  <div
                    key={ele.num}
                    className="p-4 border border-blue-100 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-86"
                  >
                    <div className="flex flex-col justify-center items-center p-10">
                      <Image
                        className="object-cover"
                        src={ele.img}
                        alt={ele.title}
                        width={100}
                        height={100}
                      />
                      <h3 className="text-lg font-semibold text-[#0E1F51] text-center">
                        {ele.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 p-4 flex justify-center items-center text-center transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                      <p className="tracking-normal text-sm text-white text-justify">
                        {ele.decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        <OmahaServices />

        <AdviceSection
          head=""
          heading="Innovative Technologies Powering Omaha Poker Game Development at Comfygen"
          ptag="Welcome to Comfygen, where the convergence of technology and gaming expertise results in extraordinary Omaha Poker experiences. Our commitment to pushing the boundaries of gaming excellence is driven by the cutting-edge technologies and meticulous technical details that fuel our Omaha Poker game development. "
          ptag1="Here's an in-depth look at the advanced tech stack and development languages that power our creations: Step into the realm of Comfygen, a nexus where the artistry of technology intertwines with the craft of gaming expertise, birthing awe-inspiring Omaha Poker encounters. Our fervent pursuit of gaming's zenith finds its fuel in the realm of cutting-edge technologies and intricacies that underpin the marvels of our Omaha Poker game development."
          ptag2="Now, let's dive into the intricate tapestry of the advanced technological landscape and the languages that breathe life into our creations:"
          imgSrc="https://www.comfygen.com/img/innovative-technologies-powering-omaha-poker-game-development-at-comfygen.webp"
          imgW={564}
          imgH={559}
          altTag="Innovative Technologies Powering Omaha Poker Game Development at Comfygen"
        />

        <section className="py-10 w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Technical{" "}
              <span className="text-blue-500">
                Intricacies and Technological{" "}
              </span>{" "}
              Weaves:{" "}
            </h2>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {TecnologisStack.map((omaha) => {
              return (
                <div key={omaha.num} className={`${styles.letter} space-y-4`}>
                  <div>
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {omaha.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p>{omaha.stack} </p>
                    <p>{omaha.stack1} </p>
                    <p>{omaha.stack2} </p>
                    <p>{omaha.stack3} </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center lg:text-center  space-y-4 shadow-lg border p-6">
            <p className="text-base text-slate-800">
              Comfygen isn't just a conduit for an Omaha Poker game; it's a
              symphony orchestrated by the most profound technologies. With our
              technical prowess, we craft games that capture the very soul of
              poker, presenting an experience unparalleled. Walk alongside us in
              reshaping the contours of Omaha Poker gaming, where every deal
              reveals a canvas of innovation and mastery.
            </p>
            <div>
              <ConnectWithExpertButtonHoverEffect
                url={"/contact-us"}
                title={"Let's Communicate With IT Expert!"}
              />
            </div>
          </div>
        </section>
        <div className="py-10 px-4 bg-gray-100 bg-no-repeat bg-cover bg-center">
          <section className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto  text-black lg:flex">
            <div className="w-full text-left space-y-4">
              <h3 className="text-[24px] lg:text-4xl font-bold text-black capitalize">
                Discover a Multiverse of Card Games and Poker Variants at
                Comfygen:
              </h3>
              <p className="text-base font-light text-black text-justify">
                Within the realm of card games and poker, a panorama of
                diversity unfolds, offering players a symphony of experiences.
                Strategic gambits, lowball twists, and the allure of split-pot
                intrigue beckon. Behind the scenes, online game development
                artisans orchestrate innovation, crafting captivating
                adaptations of these beloved classics, curating a galaxy of
                exhilarating gaming options.{" "}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {Multiverse.map((omaha) => {
                  return (
                    <Link
                      key={omaha.num}
                      href={omaha.url}
                      passHref={true}
                      className=""
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Image
                          src={omaha.img}
                          alt={omaha.title}
                          width={100}
                          height={100}
                          blurDataURL="URL"
                          placeholder="blur"

                          unoptimized={true}
                        />
                        <p className="text-xl font-semibold">{omaha.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <p className="text-base font-light text-black text-justify">
                Remember, the galaxy of poker variants may harbor regional
                whispers and house-specific enigmas. Thus, the wisest sojourn
                entails a harmonious dialogue with the rules. Each variation
                etches its legend, an opus of stratagem and dynamics, painting
                the canvas of poker's tapestry in vibrant hues.
              </p>
              <div className="">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Let’s connect Now!"}
                />
              </div>
            </div>
            <div className=" w-full lg:py-0 py-6">
              <h4 className="text-4xl text-center font-semibold mb-6">
                Here, a glimpse into the mosaic:
              </h4>
              <div className="">
                <div
                  className={`${styles.Pokercardbar} flex flex-col md:grid grid-cols-12 py-4 text-gray-50  h-[564px] overflow-y-auto`}
                >
                  {glimpse.map((omaha) => {
                    return (
                      <div key={omaha.num} className="flex md:contents">
                        <div className="col-start-2 col-end-4 md:mx-auto relative">
                          <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] pointer-events-none"></div>
                          </div>
                          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                          </div>
                        </div>
                        <div className=" bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                          <h3 className="font-semibold text-lg mb-1">
                            {omaha.title}
                          </h3>
                          <p className="leading-tight text-justify w-full">
                            {omaha.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="bg-[#]">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                {Distinguishing?.head}{" "}
              </h2>
              <p className="text-base text-slate-800">{Distinguishing?.para}</p>
              <p className="text-base text-slate-800">
                {Distinguishing?.para1}
              </p>
              <h3 className="py-4 text-[#0E1F51] xl:text-2xl text-xl font-semibold">
                {Distinguishing?.head1}
              </h3>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10 py-10">
              {Mode1.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div className="">
                    <div
                      key={num}
                      className="p-3 space-y-4 rounded-[17px] flex items-center space-x-4"
                    >
                      <div
                        className="w-24 h-24 bg-[#F45F391A] rounded-full flex justify-center items-center"
                        style={{ backgroundColor: elem.bg }}
                      >
                        <div className="p-2 bg-white rounded-full h-14 w-14">
                          <p className="text-[26px] font-bold text-center text-[#1E293B]">
                            {num}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold   text-slate-900 group-hover:text-white">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <div>
                      <p>{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col justify-center lg:text-center  space-y-4 shadow-lg lg:p-6 p-0">
              <p className="text-base text-slate-800">
                Feel free to journey into the tapestry, where the allure of
                Omaha Poker beckons. An odyssey where the art of play and the
                realm of technology converge, a haven of discovery and delight
                that sets the stage for immersive encounters
              </p>
              <div>
                <ConnectWithExpertButtonHoverEffect
                  url={"/contact-us"}
                  title={"Let's Communicate With IT Expert!"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-center bg-cover  bg-fixed" style={imageStyle1}>
          <div className=" bg-[#1B1C30CC] py-10">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 lg:text-center text-white">
                <div className="flex flex-col justify-center mx-auto space-y-2">
                  <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                    {SolutionsHead?.head}
                  </h2>
                  <p className="text-base lg:text-center text-justify">
                    {SolutionsHead?.para}
                  </p>
                  <p className="text-base text-[#ffffff] md:text-center text-justify tracking-tight">
                    {SolutionsHead?.para1}{" "}
                  </p>
                </div>
                <div className="grid gap-16 py-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                  {Process.map((omaha) => {
                    return (
                      <div
                        key={omaha.num}
                        className="lg:flex lg:space-x-6 space-x-0 lg:space-y-0 space-y-2 items-left drop-shadow-2xl"
                      >
                        <div>
                          <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold text-white rounded-full bg-white/20">
                            {omaha.num}
                          </div>
                        </div>
                        <div className="text-left space-y-2">
                          <h2 className="text-lg font-semibold">
                            {omaha.title}
                          </h2>
                          <div>
                            <p className="">{omaha.decs}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col justify-center lg:text-center  space-y-4 shadow-2xl border p-6">
                  <p className="text-base text-white">
                    Unveil a new chapter in Omaha Poker's saga, where the
                    interplay of gameplay and technology metamorphoses into an
                    arena of boundless fascination and delight.{" "}
                  </p>
                  <div>
                    <Link href="/contact-us" passHref={true}>
                      <button className=" bg-white text-black rounded-lg  px-10 hover:scale-75 transition-all duration-500 ease-in py-5 text-2xl">
                        Let's Communicate With IT Expert!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <section className="py-20">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
                <div className="flex xl:py-12">
                  <Image
                    src="https://www.comfygen.com/img/lets-craft-your-omaha-poker-gaming-experience.webp"
                    width={781}
                    height={521}
                    blurDataURL="URL"
                    placeholder="blur"

                    unoptimized={true}
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                    alt=" Let's Craft Your Omaha Poker Gaming Experience"
                  />
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
                <div className="flex h-full items-center rounded-lg bg-blue-900 p-6 text-center text-white xl:pl-12 xl:text-left">
                  <div className="xl:pl-12 space-y-2">
                    <h2 className="mb-6 text-3xl font-bold">
                      Let's Craft Your Omaha Poker Gaming Experience
                    </h2>
                    <p className="">
                      Are you excited to embark on the journey of online Omaha
                      Poker game development? Reach out to us today to converse
                      about your concepts, ambitions, and dreams. Together,
                      we'll craft a gaming solution poised to captivate players'
                      hearts and establish new benchmarks in the industry.
                    </p>
                    <p className="">
                      Be Prepared to redefine the landscape of virtual poker
                      play!
                    </p>
                    <p className="">
                      Eager to reign supreme in the online poker arena?
                    </p>
                    <p className="">
                      Let's collaborate on your magnum opus of an Omaha Poker
                      game!!! Call now. Innovation converges with poker finesse.
                      Let's shape your distinctive Omaha Poker marvel today!!!
                    </p>
                    <div className="pt-8">
                      <Link href="/contact-us" passHref={true}>
                        <button
                          type="button"
                          className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Get in touch now.
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="py-10">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center">
              <div className="flex flex-col justify-center mx-auto space-y-2">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Crafting the Omaha Poker Universe:{" "}
                  <span className="text-blue-600">
                    {" "}
                    Gaming Across All Platforms
                  </span>
                </h2>
                <p className="text-slate-800 text-base">
                  Step into a dimension where Omaha Poker knows no boundaries.
                  At Comfygen, our game development prowess transcends the
                  confines of platforms, ensuring the exhilarating domain of
                  Omaha Poker is within reach for players across a spectrum of
                  devices.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Crafting.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer "
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-24 h-24">
                          {" "}
                          {icon}{" "}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold "> {title}</h3>
                        <p className="break-all text-slate-800 "> {decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <WhyChoose Whychoose={Whychoose} Bestchoice={Bestchoice} />
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              {StepInto?.head}
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
              {StepInto?.para}
            </p>
            <h2 className="py-4 text-xl lg:text-2xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              {StepInto?.head1}{" "}
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
              {StepInto?.para1}
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {OmahaProcess.map((omaha) => {
              return (
                <div key={omaha.num} className="shadow-xl">
                  <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                    <div className="flex items-center justify-center h-14 w-14">
                      <Image
                        className="rounded-md"
                        alt={omaha.tittle}
                        src={omaha.img}
                        height={512}
                        width={512}
                        unoptimized={true}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {omaha.tittle}
                    </h3>
                  </div>
                  <div className="px-4 py-4 ">
                    <p className="px-4 py-4 text-black text-justify">
                      {omaha.decs}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="flex flex-col-reverse items-center  space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-20 md:space-y-0">
            <div className="w-full space-y-6 text-left ">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl font-bold text-[#0E1F51] ">
                  Experience the Difference: Your Omaha Poker Awaits
                </h2>
                <p className="text-base text-slate-800">
                  It's not just about development at Comfygen; it's about
                  developing exceptional experiences. Our Omaha Poker game
                  creation process mixes creativity, expertise, and your unique
                  vision. We are not just simply game creators; we are your
                  companions on the path to gaming superiority.
                </p>
              </div>
              <div className="text-base text-black">
                <ul className="space-y-1 ">
                  {myList4.map((item, index) => (
                    <li className="flex items-start space-x-4" key={index}>
                      <span>
                        {" "}
                        <AiOutlineCheck size={20} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <Link
                  href="https://api.whatsapp.com/send?phone=919587867258"
                  target="_blank"
                  passHref={true}
                >
                  <button className="shadow-lg transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Want To Get The Best Solution? Connect Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title=" Experience the Difference: Your Omaha Poker Awaits"
                alt=" Experience the Difference: Your Omaha Poker Awaits"
                src="https://www.comfygen.com/img/experience-the-difference-your-omaha-poker-awaits.webp"
                height={600}
                width={600}
                unoptimized={true}
                blurDataURL="URL"
                placeholder="blur"
              />
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Leading Technologies Shaping Our Omaha Poker Experience
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Shaping.map((omaha) => {
                return (
                  <div key={omaha.num} className="border p-3 space-y-2 shadow">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {omaha.title}
                    </p>
                    <p className="text-base text-slate-800">{omaha.decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="mx-auto space-y-10  2xl:w-9/12 xl:w-5/6 w-11/12 md:space-x- md:space-y-0">
            <div className="flex flex-col justify-center text-center ">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Expert Skills Elevating{" "}
                <span className="text-blue-600"> Our Omaha Poker </span>{" "}
                Craftsmanship
              </h2>
            </div>
            <div className="md:flex  md:space-x-10 md:space-y-0 space-y-6 py-6">
              <div className="w-full space-y-4">
                {featured.map((elem: any, index: any) => {
                  const { title, num, desc } = elem;
                  return (
                    <div
                      className="p-4 mt-2 bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-lg cursor-pointer w-full"
                      onClick={() =>
                        setCurrentCount(currentCount === index ? false : index)
                      }
                    >
                      <div
                        key={num}
                        className="flex justify-between w-full text-base font-medium text-left text-white rounded-lg md:text-lg "
                      >
                        <span>{title}</span>
                        {currentCount === index ? (
                          <MdRemove size={26} />
                        ) : (
                          <MdAdd size={26} />
                        )}
                      </div>
                      <div
                        className={
                          currentCount === index
                            ? "pt-4 text-sm text-white"
                            : "pt-4 text-sm text-white hidden"
                        }
                      >
                        {desc}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full space-y-4">
                {featured1.map((elem: any, index: any) => {
                  const { title, num, desc } = elem;
                  return (
                    <div
                      className="p-4 mt-2 bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-lg cursor-pointer w-full"
                      onClick={() =>
                        setCurrentCount1(
                          currentCount1 === index ? false : index
                        )
                      }
                    >
                      <div
                        key={num}
                        className="flex justify-between w-full text-base font-medium text-left text-white  rounded-lg md:text-lg "
                      >
                        <span>{title}</span>
                        {currentCount === index ? (
                          <MdRemove size={26} />
                        ) : (
                          <MdAdd size={26} />
                        )}
                      </div>
                      <div
                        className={
                          currentCount1 === index
                            ? "pt-4 text-sm text-white"
                            : "pt-4 text-sm text-white hidden"
                        }
                      >
                        {desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="block md:flex">
            <div
              className="lg:flex flex-1 hidden bg-cover bg-no-repeat bg-center"
              style={imageStyle}
            ></div>
            <div className="flex-1 flex justify-center items-center bg-white p-4 md:p-0">
              <div className="text-center md:text-left w-full md:w-5/6 space-y-5">
                <div className="space-y-4">
                  <h2 className="font-bold text-2xl md:text-3xl">
                    Crafting the Future of Omaha Poker: Where Technology Meets
                    Expertise
                  </h2>
                  <p className="text-justify text-base text-slate-800">
                    The Omaha Poker games we develop aren't just products;
                    they're a fusion of art and science, technology and
                    expertise. With an arsenal of cutting-edge technologies and
                    specialized skills at our disposal, we're poised to redefine
                    the Omaha Poker landscape. Join us as we harness innovation
                    to craft a gaming experience that's immersive, exciting, and
                    unforgettable.Getting a new business off the ground is a lot
                    of hard work. Here are five ideas you can use to find syour
                    first customers.
                  </p>
                </div>
                <div className="">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"Join Us now !"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={imageHire}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>


        <WhyChoosee
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 py-10">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-md image-container"
            style={imageStyle2}
          >
            <div className="bg-black/80">
              <section className="px-3 py-2 lg:px-14 lg:py-20">
                <div className="flex items-center justify-center p-4">
                  <div className="flex flex-col space-y-4 text-center">
                    <h3 className="text-3xl font-semibold leading-none text-white">
                      Empower Your Vision with Comfygen: Let's Redefine Omaha
                      Poker Gaming
                    </h3>
                    <p className="text-base text-white">
                      The decision to work with Comfygen is more than a choice;
                      it is a commitment to developing an Omaha Poker game that
                      is great in every aspect. Welcome to the world of Comfygen
                      if you're ready to start on a journey fuelled by
                      innovation, knowledge, and a shared enthusiasm for gaming.
                      Let's work together to make your Omaha Poker fantasy a
                      reality that captivates gamers, breaks down barriers, and
                      stands as a tribute to gaming brilliance.
                    </p>
                    <div className="flex items-center justify-center pt-4">
                      <WhiteNavButton
                        url={"/contact-us"}
                        title={"Let's Connect"}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <FaqSection
          faqData={Frequently}
          title="Omaha Poker Gaming App Development"
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

