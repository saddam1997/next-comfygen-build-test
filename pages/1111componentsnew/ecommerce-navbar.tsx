import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu, MdAddCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
// import $ from "jquery";

// const MobileApp = [
//     { num: "1", name: "Mobile App Development", url: "/mobile-app-development" },
//     {
//         num: "2",
//         name: "Application Consulting Service",
//         url: "/ca/application-consulting-services",
//     },
//     {
//         num: "3",
//         name: "Hybrid Mobile App Development",
//         url: "/hybrid-mobile-app-development",
//     },
//     { num: "4", name: "IOS App Development", url: "/ios-app-development" },
//     {
//         num: "5",
//         name: "Android App Development",
//         url: "/android-app-development",
//     },
//     {
//         num: "6",
//         name: "Flutter Development",
//         url: "/flutter-development-company",
//     },
//     {
//         num: "7",
//         name: "React Native Development",
//         url: "/react-native-development",
//     },
//     {
//         num: "8",
//         name: "E-Commerce App Development",
//         url: "/e-commerce-app-development",
//     },
//     {
//         num: "9",
//         name: "Startup App Development ",
//         url: "/ca/startup-app-development",
//     },
//     {
//         num: "10",
//         name: "White Label Mobile App Development",
//         url: "/white-label-mobile-app-development",
//     },
// ];
// const Ai = [
//     {
//         num: "1",
//         name: "Ai Development",
//         url: "/ai-development",
//     },
//     {
//         num: "2",
//         name: "Generative AI Development",
//         url: "/generative-ai-development",
//     },
//     {
//         num: "3",
//         name: "AI Interview Scheduling Software Development",
//         url: "/ai-interview-scheduling-software-development",
//     },
// ];

const EcommerceSer = [
  {
    num: "1",
    name: "Ecommerce App Development",
    url: "/e-commerce-app-development",
  },
  {
    num: "2",
    name: "Quick Ecommerce Development",
    url: "/quick-commerce-app-development",
  },
  {
    num: "3",
    name: "Food Delivery App Development",
    url: "/food-delivery-app-development",
  }

];

const Metaverse = [
  {
    num: "1",
    name: "Metaverse Development Company",
    url: "/metaverse-development",
  },
  {
    num: "2",
    name: "NFT marketplace development",
    url: "/nft-marketplace-development-company",
  },
];
const Token = [
  {
    num: "1",
    name: "Social Media App Development",
    url: "/social-media-app-development",
  },
  {
    num: "2",
    name: "Finance App Development",
    url: "/finance-app-development",
  },
  {
    num: "3",
    name: "IoT Development",
    url: "/iot-development-company",
  },
  {
    num: "4",
    name: "Mobile Game Development",
    url: "/mobile-game-development-company",
  },
  {
    num: "6",
    name: "News & Web App Development",
    url: "/news-application-development",
  },
  {
    num: "7",
    name: "Cricket Fast Line App Development",
    url: "/live-line-cricket-mobile-app-development",
  },
  {
    num: "8",
    name: "Education App Development",
    url: "/ca/education-app-development-company",
  },
  {
    num: "9",
    name: "E-Learning App Development",
    url: "/e-learning-app-development",
  },
  {
    num: "10",
    name: "Magazine App Development",
    url: "/ca/magazine-app-development-company",
  },
];

const Ecommerce = [
  {
    num: "1",
    name: "Grocery App Development",
    url: "/ecommerce/grocery",
  },
  {
    num: "2",
    name: "FMCG App Development",
    url: "/ecommerce/fmcg",
  },
  {
    num: "3",
    name: "Fashion App Development",
    url: "/ecommerce/fashion",
  },
  {
    num: "4",
    name: "Water Delivery App Development",
    url: "/water-delivery-app-development",
  },
  {
    num: "5",
    name: "Pizza Delivery App Development",
    url: "/pizza-delivery-app-development",
  },

];

const company = [
  {
    num: "1",
    img: "https://www.comfygen.com/image/about-us-header-icon.svg",
    name: "About us",
    dec: "Who We Are and What We Do",
    url: "/about-us",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/image/our-portfolio-header-icon.svg",
    name: "Our Portfolio",
    dec: "Showcasing Our Successful Projects",
    url: "/portfolio",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/image/career-at-comfygen-header-icon.svg",
    name: "Career At comfygen",
    dec: "Join Our Dynamic Team Today",
    url: "/career",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/image/life-at-comfygen-header-icon.svg",
    name: "Life at Comfygen",
    dec: "Experience Our Collaborative Work Culture",
    url: "/life-at-comfygen",
  },
];

const company1 = [
  {
    num: "1",
    img: "https://www.comfygen.com/image/client-testimonial-img.svg",
    name: "Client testimonial",
    dec: "What Our Clients Say About Us",
    url: "/client-testimonials",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/image/contact-us-img.svg",
    name: "Contact us",
    dec: "Get in Touch with Us",
    url: "/contact-us",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/image/our-blog-img.svg",
    name: "Our Blog",
    dec: "Insights and Updates from Comfygen",
    url: "https://www.comfygen.com/blog/",
  },
];

const cryptoDevelopment = [
  {
    num: "1",
    name: "Crypto Wallet Development",
    url: "/crypto-wallet-development",
  },
  {
    num: "2",
    name: "Crypto Exchange Services",
    url: "/cryptocurrency-exchange-development",
  },
  {
    num: "3",
    name: "Crypto MLM Software Development",
    url: "/cryptocurrency-mlm-software-development",
  },
  {
    num: "4",
    name: "Crypto White Paper Development",
    url: "/crypto-white-paper-development",
  },
  {
    num: "5",
    name: "Decentralized Exchange Development",
    url: "/decentralized-exchange-development",
  },
  {
    num: "6",
    name: "White Label Crypto Exchange Development",
    url: "/white-label-crypto-exchange-development",
  },
  {
    num: "7",
    name: "Hybrid Crypto Exchange Development",
    url: "/hybrid-crypto-exchange-development",
  },
  {
    num: "8",
    name: "Centralized Crypto  Exchange Development",
    url: "/centralized-crypto-exchange-development",
  },
  {
    num: "9",
    name: "Crypto Launchpad  Development",
    url: "/crypto-launchpad-development",
  },
  {
    num: "10",
    name: "OTC Crypto Exchange Development",
    url: "/otc-crypto-exchange-development",
  },
  {
    num: "11",
    name: "Crypto NFT Exchange Development",
    url: "/crypto-nft-exchange-development",
  },
  {
    num: "12",
    name: " Crypto Derivatives Exchange Development",
    url: "/crypto-derivatives-exchange-development",
  },
  {
    num: "13",
    name: "Margin Trading Exchange Development",
    url: "/crypto-margin-trading-exchange-development",
  },
  {
    num: "14",
    name: "Crypto Exchange Admin Panel Development ",
    url: "/crypto-exchange-admin-panel-development",
  },
  {
    num: "15",
    name: "Ai Crypto Exchange Development",
    url: "/ai-crypto-exchange-development",
  },
  {
    num: "16",
    name: "Crypto Payment Gateway Development",
    url: "/crypto-payment-gateway-development",
  },
];

export default function EcommerceNav(props: any) {

  const [activeTab, setActiveTab] = useState("Tab1");
    const [showNav, setShowNav] = useState(0);
    const [menu] = useState(false);
  
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
    };
  
    function toggleSlideover() { }
  
    useEffect(() => {
      let ticking = false;
      const handleScroll = () => {
        const newScrollState = window.scrollY > 50;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setIsScrolled(prev => {
              if (prev !== newScrollState) {
                return newScrollState;
              }
              return prev;
            });
            ticking = false;
          });
          ticking = true;
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // Combine fixed class with the dynamic scroll class
    const headerClasses = isScrolled
      ? "fixed top-0 w-full bg-white z-50 max-w-[1600px] mx-auto "
      : "fixed top-0 w-full bg-white z-50 max-w-[1600px] mx-auto ";
  


  return (
    <div className={headerClasses}>
      <div className="  flex gap-6 justify-end mx-10">
        <p className="hidden lg:block">
          <a href="mailto:sales@comfygen.com" className="flex  pt-1 gap-2">
            <IoMdMail className=" mt-1" /> sales@comfygen.com
          </a>
        </p>

        <p className="hidden lg:block">
          <a
            className="flex pt-1 gap-1"
            href="https://api.whatsapp.com/send?phone=919587867258"
          >
            <MdAddCall className=" mt-1" />
            +91 9587867258
          </a>
        </p>
      </div>
      <nav className="flex items-center justify-between px-4 py-0  md:px-0 relative 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
        <div>
          <Link
            href="/"
            passHref={true}
            className="relative flex items-center flex-shrink-0 text-white"
          >
            <Image
              // src="https://www.comfygen.com/media/svg/comfygen-logo.svg"
              src="/svg/Logo1.svg"
              alt="comfygen-logo"
              width={244}
              height={51}
              priority
            />
          </Link>
        </div>
        <div>
          <div
            onClick={() => toggleSlideover()}
            className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden"
          >
            {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
          </div>
          <div
            className={
              "xl:flex hidden xl:w-auto w-full items-center text-white px-6 "
            }
          >
            <div className="block space-x-4 text-sm font-medium 2xl:space-x-4 lg:flex lg:items-center lg:space-y-0 lg:p-0">
              <div>
                <Link href="/" passHref={true}>
                  <span className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-black/100 text-black/80 ">
                    Home
                  </span>
                </Link>
              </div>
              <div
                className=" group "
                onMouseEnter={() => setActiveTab("Tab1")}
              >
                <button
                  onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={showNav === 1 ? "font-medium " : " font-medium "}
                  >
                    Services
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-50 relative lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20  lg:drop-shadow-xl lg:border whitespace-nowrap  left-0  transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-full">
                  {/* <div className="absolute -top-2 2xl:inset-x-[34rem] xl:inset-x-[33rem] bg-white rotate-45   w-4 h-4"></div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm h-full">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="">
                        <ul className="">
                          <div
                            onClick={() => handleTabClick("Tab1")}
                            className={
                              activeTab === "Tab1"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-service.svg"
                              alt="blockchain-app-dev-header-icon.svg"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Ecommerce Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Empowering Seamless Online Shopping
                              </span>
                            </div>
                          </div>


                        </ul>
                      </div>

                      <div className="space-y-10">
                        <div>
                          {activeTab === "Tab1" && (
                            <div className="text-sm font-medium space-y-2">
                              {EcommerceSer.map((elem: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <Link
                                    key={num}
                                    className="py-1.5 block text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4"
                                    onClick={() =>
                                      setShowNav(showNav === 1 ? 0 : 1)
                                    }
                                    href={url}
                                    passHref={true}
                                  >
                                    {name}
                                  </Link>
                                );
                              })}
                            </div>
                          )}

                          {/* {activeTab === "Tab2" && (
                                <ul className="text-sm font-medium space-y-2">
                                  {BlockchainSer.map((elem: any) => {
                                    const { name, num, url } = elem;
                                    return (
                                      <li
                                        key={num}
                                        className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                      >
                                        <Link
                                          onClick={() =>
                                            setShowNav(showNav === 1 ? 0 : 1)
                                          }
                                          href={url}
                                          passHref={true}
                                        >
                                          {name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )} */}


                        </div>
                      </div>
                      <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/mobile-app-development-services-img.webp"
                            alt=""
                            height={475}
                            width={452}
                            className="w-full"
                          />
                          <span className="bg-[#fff] absolute bottom-0 right-0 p-4 block justify-end items-center rounded-tl-[50px]">
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-base text-white">
                              Connect to expert
                              <Image
                                src="https://www.comfygen.com/image/button-arrow.svg"
                                alt=""
                                height={22}
                                width={22}
                              />
                            </button>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* solutions  */}
              <div
                className=" group  "
                onMouseEnter={() => setActiveTab("Tab1")}
              >
                <button
                  onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 2 ? "  font-medium " : " font-medium "
                    }
                  >
                    Solutions
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative left-0 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-full ">
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="">
                        <ul className="space-y-2">
                          <li
                            onClick={() => handleTabClick("Tab2")}
                            className={
                              activeTab === "Tab2"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-solution.svg"
                              alt="Blockchain Solution"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Ecommerce Solution
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Future-Ready Ecommerce Solutions
                              </span>
                            </div>
                          </li>
                          {/* <li
                                onClick={() => handleTabClick("Tab3")}
                                className={
                                  activeTab === "Tab3"
                                    ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                    : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                }
                              >
                                <Image
                                  src="https://www.comfygen.com/image/mobile-app-solutions-header-icon.svg"
                                  alt="Mobile App Solutions"
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    Mobile App Solutions
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    Customized Applications for Every Industry
                                  </span>
                                </div>
                              </li> */}

                        </ul>
                      </div>
                      <div className="space-y-10">
                        <div>
                          {activeTab === "Tab1" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Ecommerce.map((elem: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={num}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}


                          {activeTab === "Tab3" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Token.map((elem: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={num}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {activeTab === "Tab4" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Metaverse.map((elem: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={num}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {activeTab === "Tab5" && (
                            <ul className="text-sm font-medium space-y-2">
                              {cryptoDevelopment.map((elem: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={num}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      </div>

                      <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/solutions-header-img.webp"
                            alt=""
                            height={486}
                            width={511}
                          />
                          <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block  justify-end items-center rounded-tl-[50px]">
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-lg text-white">
                              Connect to expert
                              <Image
                                src="https://www.comfygen.com/image/button-arrow.svg"
                                alt=""
                                height={22}
                                width={22}
                              />
                            </button>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* game  */}
              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 3 ? "  font-medium " : " font-medium "
                    }
                  >
                    <Link href="/portfolio?category=blockchain">Portfolio</Link>
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
              </div>

              {/* company  */}
              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 5 ? " font-medium " : " font-medium "
                    }
                  >
                    Company
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize  text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  left-0 xl:right-50 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company.map((elem: any) => {
                            const { name, num, img, dec, url } = elem;
                            return (
                              <a
                                href={url}
                                key={num}
                                className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={name}
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    {name}
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    {dec}
                                  </span>
                                </div>
                              </a>
                            );
                          })}
                        </ul>
                      </div>
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company1.map((elem: any) => {
                            const { name, num, img, dec, url } = elem;
                            return (
                              <a
                                href={url}
                                key={num}
                                className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={name}
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    {name}
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    {dec}
                                  </span>
                                </div>
                              </a>
                            );
                          })}
                        </ul>
                      </div>
                      <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/about-us-header-img.webp"
                            alt=""
                            height={486}
                            width={511}
                          />
                          <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block justify-end items-center rounded-tl-[50px]">
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-lg text-white">
                              Connect to expert
                              <Image
                                src="https://www.comfygen.com/image/button-arrow.svg"
                                alt=""
                                height={22}
                                width={22}
                              />
                            </button>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:block hidden">
          <Link href="/contact-us" passHref={true}>
            <span className="text-base font-medium text-white head-button rounded-full px-8 py-3.5 text-center hover:text-white   cursor-pointer transition duration-300 relative flex gap-3 items-center ">
              Get a Quote
              <Image
                src="https://www.comfygen.com/image/button-arrow.svg"
                alt="button-arrow"
                height={24}
                width={24}
              />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
