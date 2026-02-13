import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  MdKeyboardArrowDown,
  MdMenuOpen,
  MdMenu,
  MdAddCall,
} from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import { MobileApp, Ai, BlockchainSer, coin, Healthcare, FullStackDev, Hire, Blockchain, Blockchain1, Finance, Finance1, Metaverse, Token, EcommerceApp, EducationApp, Other, Sports, Sports1, Sports2, company, company1, cryptoDevelopment, cryptoDevelopment1 } from "../../../navData"


export default function DesktopNav(props: any) {
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
      <div className="flex gap-6 justify-end mx-10">
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
            className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 lg:hidden"
          >
            {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
          </div>
          <div
            className={
              "lg:flex hidden xl:w-auto w-full items-center text-white px-6 "
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

              {/* Services */}
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
                              src="https://www.comfygen.com/image/mobile-app-development-header-icon.svg"
                              alt="mobile-app-development-header-icon"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-2">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Mobile App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal ">
                                Innovative Solutions for Every Platform
                              </span>
                            </div>
                          </div>
                          <li
                            onClick={() => handleTabClick("Tab7")}
                            className={
                              activeTab === "Tab7"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/ai-development-icon.svg"
                              alt="AI Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                AI Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Best AI Development Service
                              </span>
                            </div>
                          </li>

                          <Link
                            href="/blockchain-development"
                            onClick={() => handleTabClick("Tab2")}
                            className={
                              activeTab === "Tab2"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/blockchain-app-dev-header-icon.svg"
                              alt="blockchain-app-dev-header-icon.svg"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                {/* <Link
                                  href="/blockchain-development"
                                  className="flex items-start gap-2"
                                >
                                  Blockchain App Development
                                </Link> */}
                                Blockchain App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Secure Blockchain-Based App Solutions
                              </span>
                            </div>
                          </Link>

                          <li
                            onClick={() => handleTabClick("Tab3")}
                            className={
                              activeTab === "Tab3"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/coin-and-tokens-dev-header-icon.svg"
                              alt="Coin And Tokens Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Coin And Tokens Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                {" "}
                                Custom Cryptocurrency Creation Made Easy
                              </span>
                            </div>
                          </li>

                          <li
                            onClick={() => handleTabClick("Tab5")}
                            className={
                              activeTab === "Tab5"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/full-stack-dev-header-icon.svg"
                              alt="Full Stack Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Full Stack Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                In-depth End-to-End Development Services
                              </span>
                            </div>
                          </li>

                          <li
                            onClick={() => handleTabClick("Tab6")}
                            className={
                              activeTab === "Tab6"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/hire-dedicated-dev-header-icon.svg"
                              alt="Hire Dedicated Developers"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Hire Dedicated Developers
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Skilled Developers for Your Projects
                              </span>
                            </div>
                          </li>
                        </ul>



                      </div>
                      <div className="space-y-10">
                        <div>
                          {activeTab === "Tab1" && (
                            <div className="text-sm font-medium space-y-2">
                              {MobileApp.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <Link
                                    key={index}
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

                          {activeTab === "Tab2" && (
                            <ul className="text-sm font-medium space-y-2 hidden">
                              {BlockchainSer.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 1 ? 0 : 1)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}mm
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {activeTab === "Tab3" && (
                            <ul className="text-sm font-medium space-y-2">
                              {coin.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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
                          )}
                          {activeTab === "Tab4" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Healthcare.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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
                          )}

                          {activeTab === "Tab5" && (
                            <ul className="text-sm font-medium space-y-2">
                              {FullStackDev.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
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
                          )}
                          {activeTab === "Tab6" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Hire.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
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
                          )}
                          {activeTab === "Tab7" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Ai.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
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
                          )}
                        </div>
                      </div>
                      <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/mobile-app-development-services-img.webp"
                            alt=""
                            height={475}
                            width={452}
                            loading="lazy"
                            fetchPriority="low"
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

              {/* Solutions */}
              <div
                className="group"
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
                  {/* <div className="absolute -top-2 2xl:inset-x-[29rem] xl:inset-x-[29rem]   bg-white rotate-45   w-4 h-4"></div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="">
                        <ul className="space-y-2">
                          <li
                            onClick={() => handleTabClick("Tab1")}
                            className={
                              activeTab === "Tab1"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/on-demand-mobile-header-icon.svg"
                              alt="On Demand Mobile App"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-3 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                On Demand Mobile App
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Tailored Apps for Instant Needs
                              </span>
                            </div>
                          </li>
                          <Link
                            href="/blockchain-development"
                            onClick={() => handleTabClick("Tab2")}
                            className={
                              activeTab === "Tab2"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/blockchain-app-dev-header-icon.svg"
                              alt="Blockchain Solution"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                {/* <Link
                                  href="/blockchain-development"
                                  className="flex items-start gap-2"
                                >
                                  Blockchain Solution
                                </Link> */}
                                Blockchain Solution
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Secure Your Digital Future
                              </span>
                            </div>
                          </Link>
                          <li
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
                          </li>
                          <li
                            onClick={() => handleTabClick("Tab4")}
                            className={
                              activeTab === "Tab4"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/web3-deve-header-icon.svg"
                              alt="Web3 Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Web3 Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Building the Future with Web3
                              </span>
                            </div>
                          </li>
                          <li
                            onClick={() => handleTabClick("Tab5")}
                            className={
                              activeTab === "Tab5"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/navbar-img/crypto-development1.svg"
                              alt="Web3 Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Crypto Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Innovate Your Crypto Vision
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-10">
                        <div>
                          {activeTab === "Tab1" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Blockchain.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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


                          {activeTab === "Tab2" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Other.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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
                              {Token.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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
                              {Metaverse.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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
                              {cryptoDevelopment.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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



                      <div className={`${activeTab === "Tab5" ? "" : "hidden"}`}>
                        {activeTab === "Tab5" && (
                          <ul className="text-sm font-medium space-y-2">
                            {cryptoDevelopment1.map((elem: any, index: any) => {
                              const { name, num, url } = elem;
                              return (
                                <li
                                  key={index}
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

                      <div className={`${activeTab === "Tab1" ? "" : "hidden"}`}>
                        {activeTab === "Tab1" && (
                          <ul className="text-sm font-medium space-y-2">
                            {Blockchain1.map((elem: any, index: any) => {
                              const { name, num, url } = elem;
                              return (
                                <li
                                  key={index}
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

                      <div className={`${activeTab === "Tab5" || activeTab === "Tab1" ? "hidden" : ""}`}>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/solutions-header-img.webp"
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

              {/* add new section industries by madhusudan 12-11-2025*/}
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
                    Industries
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative left-0 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-full ">
                  {/* <div className="absolute -top-2 2xl:inset-x-[29rem] xl:inset-x-[29rem]   bg-white rotate-45   w-4 h-4"></div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="">
                        <ul className="space-y-2">
                          <li
                            onClick={() => handleTabClick("Tab1")}
                            className={
                              activeTab === "Tab1"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/healthcare-app-dev-header-icon.svg"
                              alt="Healthcare App Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-3 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Healthcare App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Transforming Healthcare with Smart Apps
                              </span>
                            </div>
                          </li>
                          <li
                            onClick={() => handleTabClick("Tab2")}
                            className={
                              activeTab === "Tab2"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/astrology-app-development/finance.svg"
                              alt="Web3 Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Finance App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Transforming Financial Ideas into Apps
                              </span>
                            </div>
                          </li>


                          <li
                            onClick={() => handleTabClick("Tab3")}
                            className={
                              activeTab === "Tab3"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/navbar/education-app-development.svg"
                              alt="education-app-development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Education App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Customized Applications for Every Industry
                              </span>
                            </div>
                          </li>

                          <li
                            onClick={() => handleTabClick("Tab4")}
                            className={
                              activeTab === "Tab4"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/navbar/ecommerce-development.svg"
                              alt="ecommerce-development"
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
                          </li>

                          <Link
                            onClick={() => handleTabClick("Tab5")}

                            href="/dating-app-development"
                            className={
                              activeTab === "Tab5"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/navbar/dating-app-development.svg"
                              alt="dating-app-development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Dating App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Smart Solutions for Digital Romance
                              </span>
                            </div>
                          </Link>

                        </ul>
                      </div>
                      <div className="space-y-10">
                        <div>
                          {activeTab === "Tab1" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Healthcare.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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


                          {activeTab === "Tab2" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Finance.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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
                              {EducationApp?.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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
                              {EcommerceApp.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
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



                      <div className={`${activeTab === "Tab2" ? "" : "hidden"}`}>
                        {activeTab === "Tab2" && (
                          <ul className="text-sm font-medium space-y-2">
                            {Finance1.map((elem: any, index: any) => {
                              const { name, num, url } = elem;
                              return (
                                <li
                                  key={index}
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
                      <div className={`${activeTab === "Tab5" || activeTab === "Tab2" ? "hidden" : ""}`}>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/solutions-header-img.webp"
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


              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 3 ? "  font-medium " : " font-medium "
                    }
                  >
                    Sports
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative left-0 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-full ">
                  {/* <div className="absolute -top-2 2xl:inset-x-[19rem] xl:inset-x-[20rem]   bg-white rotate-45   w-4 h-4"></div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="space-y-10">
                        <div>
                          <ul className="text-[18px] font-medium space-y-3">
                            {Sports.map((elem: any, index: any) => {
                              const { name, num, img, dec, url } = elem;
                              return (
                                <li key={index}>
                                  <a
                                    href={url}

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
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <ul className="text-[18px] font-medium space-y-3">
                        {Sports1.map((elem: any, index: any) => {
                          const { name, num, img, dec, url } = elem;
                          return (
                            <li key={index}>
                              <a
                                href={url}

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
                            </li>
                          );
                        })}
                      </ul>

                      <ul className="text-[18px] font-medium space-y-3">
                        {Sports2.map((elem: any, index: any) => {
                          const { name, num, img, dec, url } = elem;
                          return (
                            <li key={index}>
                              <a
                                href={url}

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
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                  {/* <div className="absolute -top-2 2xl:inset-x-[4rem] xl:inset-x-[5rem]   bg-white rotate-45  w-4 h-4">
                  {" "}
                </div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company.map((elem: any, index: any) => {
                            const { name, num, img, dec, url } = elem;
                            return (
                              <li key={index}>
                                <a
                                  href={url}

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
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company1.map((elem: any, index: any) => {
                            const { name, num, img, dec, url } = elem;
                            return (
                              <li key={index}>
                                <a
                                  href={url}

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
                              </li>
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
        <div className="hidden xl:block ">
          <Link href="/contact-us" passHref={true}>
            <span className="text-base font-medium text-white head-button rounded-full px-8 py-3.5 text-center hover:text-white  cursor-pointer transition duration-300 relative flex gap-3 items-center ">
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
