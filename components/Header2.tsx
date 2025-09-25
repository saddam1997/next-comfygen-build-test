import Link from "next/link";
import React, { useState } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { GrReactjs } from "react-icons/gr";
import { BiShapePolygon } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from "react-icons/md";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import {
  RiGroupFill,
  RiFilePaperLine,
  RiFlutterFill,
  RiBitCoinLine,
  RiBriefcaseLine,
  RiBuilding4Line,
  RiCoinLine,
  RiCompasses2Line,
  RiCopperCoinLine,
  RiCustomerService2Line,
  RiExchangeCnyFill,
  RiFileList3Line,
  RiGitMergeLine,
  RiPhoneLockLine,
  RiStackFill,
  RiStore2Line,
  RiWallet3Line,
  RiWindowFill,
} from "react-icons/ri";
import { TbCoin, TbBrandAndroid } from "react-icons/tb";
import {
  GiInvertedDice4,
  GiRadioTower,
  GiCardJoker,
  GiCartwheel,
  GiCricketBat,
  GiTabletopPlayers,
} from "react-icons/gi";
import { SiEthereum, SiDogecoin } from "react-icons/si";
import { BiMobileAlt, BiMobileVibration } from "react-icons/bi";
import { ImCoinPound } from "react-icons/im";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircle,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { VscChromeClose, VscGroupByRefType } from "react-icons/vsc";
export default function Header(props) {
  const [showNav, setShowNav] = useState(0);
  const [menu] = useState(false);

  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      .classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }

  return (
    <div className="sticky top-0 z-20 bg-transparent ">
      <nav className="z-20 flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-10/12 lg:w-11/12 md:px-0 ">
        <div className="flex items-center flex-shrink-0 text-white ">
          <a href="/" className="relative">
            <Image
              src="https://www.comfygen.com/svg/comfygen-logo.svg"
              className=""
              alt="comfygen-logo"
              width={225}
              height={48}
              priority
            />
          </a>
        </div>
        <label
          onClick={() => toggleSlideover()}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden"
        >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </label>

        <div
          className={
            "xl:flex hidden  xl:w-auto w-full items-center text-white px-6 "
          }
        >
          <div className="block space-x-0 text-sm font-medium lg:space-x-0 lg:flex lg:items-center lg:space-y-0 lg:p-0">
            <Link href="/" passHref={true}>
              <span className="relative block px-4 mr-4 text-base leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white/100 text-white/80 lg:mt-0 ">
                Home
              </span>
            </Link>
            <div className="group ">
              <button
                onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                className="inline-flex items-center px-4 py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100"
              >
                <span
                  className={
                    showNav === 1
                      ? "mr-2 font-medium text-white/80"
                      : "mr-2 font-medium "
                  }
                >
                  Development
                </span>
                {showNav === 1 ? (
                  <MdKeyboardArrowDown className="text-white/80" size={18} />
                ) : (
                  <MdKeyboardArrowDown size={18} />
                )}
              </button>
              {/* {showNav === 1 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  2xl:right-80 xl:right-40 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">

                {/* tip */}
                <div className="absolute -top-2 2xl:inset-x-[19rem] xl:inset-x-[16rem]   bg-white rotate-45   w-4 h-4"> </div>

                <div className="p-10 mx-auto text-sm">
                  <ul className="grid grid-cols-3 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Mobile App Development
                      </p>

                      <div className="space-y-2 text-sm font-medium">
                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/mobile-app-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Mobile app Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/hybrid-mobile-app-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Hybrid Mobile App Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/ios-app-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> iOS App Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/smart-contract-mlm-software"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Smart Contract MLM Software</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/web-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Website Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/web-design"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Website Design company</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/flutter-development-company"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Flutter Development</span>
                            </div>
                          </Link>
                        </li>
                      </div>
                    </div>

                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Web Development
                      </p>

                      <div className="space-y-2 text-sm font-medium">
                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/mern-stack-development-services"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> MERN stack development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/e-commerce-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> e-commerce development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/node-js-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Node JS Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/react-js-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> React JS Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/next-js-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Next JS Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/iot-development-company"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> IoT Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/python-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Python Development</span>
                            </div>
                          </Link>
                        </li>
                      </div>
                    </div>

                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Stack Development
                      </p>
                      <div className="space-y-2 text-sm font-medium">
                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/react-native-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> React Native Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="/defi-smart-contract-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> DeFi Smart Contract Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href="android-app-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Android App Development</span>
                            </div>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              {/* // :
								// null} */}
            </div>

            <div className="group ">
              <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100"
              >
                <span
                  className={
                    showNav === 2
                      ? "mr-2 font-medium text-white/80"
                      : "mr-2 font-medium "
                  }
                >
                  Blockchain & Token
                </span>
                {showNav === 2 ? (
                  <MdKeyboardArrowDown className="text-white/80" size={18} />
                ) : (
                  <MdKeyboardArrowDown size={18} />
                )}
              </button>
              {/* {showNav === 2 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  2xl:right-80 xl:right-40 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">

                {/* tip */}
                <div className="absolute -top-2 2xl:inset-x-[19rem] xl:inset-x-[28rem]   bg-white rotate-45   w-4 h-4"> </div>

                <div className="p-10 mx-auto text-sm">
                  <ul className="grid grid-cols-3 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Blockchain Development
                      </p>

                      <div className="space-y-2 text-sm font-medium">
                        <li
                          className=" py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                        >
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/blockchain-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiBitCoinLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>blockchain Development company</span>
                            </div>


                          </Link>
                        </li>

                        <li className=" py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                      <Link
                        onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                        href="/altcoin-development-services"
                        passHref={true}
                      >
                        <div className="flex items-center space-x-2 ">
                          <RiCopperCoinLine
                            className="text-[#16BDFA]"
                            size={22}
                          />
                          <span>Altcoin Development services</span>
                        </div>
                        
                      </Link>
                    </li>

                    <li className=" py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                      <Link
                        onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                        href="/crypto-wallet-development"
                        passHref={true}
                      >

                         <div className="flex items-center space-x-2 ">
                          <RiWallet3Line
                            className="text-[#16BDFA]"
                            size={22}
                          />
                          <span>  Crypto wallet development</span>
                        </div>
                        
                      </Link>
                    </li>

                        <li className=" py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                      <Link
                        onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                        href="/cryptocurrency-exchange-development"
                        passHref={true}
                      >
                      <div className="flex items-center space-x-2 ">
                          <RiExchangeCnyFill
                            className="text-[#16BDFA]"
                            size={22}
                          />
                          <span> Crypto exchange services</span>
                        </div>

                       
                      </Link>
                    </li>

                    <li className=" py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                      <Link
                        onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                        href="/cryptocurrency-mlm-software-development"
                        passHref={true}
                      >
                         <div className="flex items-center space-x-2 ">
                          <RiGitMergeLine
                            className="text-[#16BDFA]"
                            size={22}
                          />
                          <span> Crypto MLM Software development</span>
                        </div>
                        
                      </Link>
                    </li>

                    <li className=" py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                      <Link
                        onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                        href="/smart-contract-development"
                        passHref={true}
                      >
                         <div className="flex items-center space-x-2 ">
                          <RiFileList3Line
                            className="text-[#16BDFA]"
                            size={22}
                          />
                          <span> Smart Contract Development</span>
                        </div>
                       
                      </Link>
                    </li>

                    <li className=" py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                      <Link
                        onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                        href="/multichain-blockchain-development"
                        passHref={true}
                      >
                         <div className="flex items-center space-x-2 ">
                          <SiHiveBlockchain
                            className="text-[#16BDFA]"
                            size={22}
                          />
                          <span>  Multichain Blockchain</span>
                        </div>
                       
                      </Link>
                    </li>
                      </div>
                    </div>

                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Token Development
                      </p>

                      <div className="space-y-2 text-sm font-medium">
                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/crypto-token-development-company"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiCoinLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>Crypto Token Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/erc20-token-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <ImCoinPound
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>ERC-20 Token Develpment</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/ethereum-token-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <SiEthereum
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>Ethereum token development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/solana-token-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <TbCoin
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>Solona token development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/tron-token-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <MdGeneratingTokens
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>Tron token development</span>
                            </div>
                          </Link>
                        </li>

                        {/* <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/iot-development-company"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>Smart Contract development</span>
                            </div>
                          </Link>
                        </li> */}
                      </div>
                    </div>

                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Other Development
                      </p>
                      <div className="space-y-2 text-sm font-medium">
                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="crypto-white-paper-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiFilePaperLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>  Crypto White Paper Development</span>
                            </div>
                          </Link>
                        </li>

                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="/polygon-blockchain-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span>polygon Blockchain development</span>
                            </div>
                          </Link>
                        </li>
{/* 
                        <li className="  py-1.5 text-black/80 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href="android-app-development"
                            passHref={true}
                          >
                            <div className="flex items-center space-x-2 ">
                              <RiPhoneLockLine
                                className="text-[#16BDFA]"
                                size={22}
                              />
                              <span> Android App Development</span>
                            </div>
                          </Link>
                        </li> */}
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              {/* // :
								// null} */}
            </div>

           
            <div className="hidden group">
              <button
                onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                className="inline-flex items-center px-4 py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100"
              >
                <span
                  className={
                    showNav === 3
                      ? "mr-2 font-medium text-white/80"
                      : "mr-2 font-medium "
                  }
                >
                  Token{" "}
                </span>
                {showNav === 3 ? (
                  <MdKeyboardArrowDown className="text-white/80" size={18} />
                ) : (
                  <MdKeyboardArrowDown size={18} />
                )}
              </button>
              {/* {showNav === 2 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white bg-transparent capitalize  overflow-hidden text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border  w-screen left-0 transform h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out origin-top">
                <ul className="grid w-11/12 grid-cols-4 gap-6 py-6 mx-auto text-sm  2xl:w-4/6 xl:w-5/6">
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                      href="/crypto-token-development-company"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Crypto token development
                        <RiCoinLine className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                      href="/erc20-token-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        ERC20 token development
                        <ImCoinPound className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                      href="/ethereum-token-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Ethereum Token Development
                        <SiEthereum className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                      href="/solana-token-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Solana Token Development
                        <TbCoin className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                      href="/tron-token-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Tron Token Development
                        <MdGeneratingTokens className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                      href="/crypto-white-paper-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Crypto White Paper Development
                        <RiFilePaperLine className="" size={22} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* // : null} */}
            </div>
            <div className=" group">
              <button
                onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                className="inline-flex items-center px-4 py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100"
              >
                <span
                  className={
                    showNav === 4
                      ? "mr-2 font-medium text-white/80"
                      : "mr-2 font-medium "
                  }
                >
                  Game{" "}
                </span>
                {showNav === 4 ? (
                  <MdKeyboardArrowDown className="text-white/80" size={18} />
                ) : (
                  <MdKeyboardArrowDown size={18} />
                )}
              </button>
              {/* {showNav === 3 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white bg-transparent capitalize  overflow-hidden text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border  w-screen left-0 transform h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out origin-top">
                <ul className="grid w-11/12 grid-cols-4 gap-6 py-6 mx-auto text-sm  2xl:w-4/6 xl:w-5/6">
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link href="/ludo-game-development" passHref={true}>
                      <span className="flex items-center justify-between">
                        Ludo Game Development
                        <GiInvertedDice4 className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                      href="/poker-game-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Poker Game Development
                        <GiCartwheel className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                      href="/rummy-game-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Rummy Game Development
                        <GiCardJoker className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                      href="/baccarat-game-development"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Baccarat Game Development
                        <GiTabletopPlayers className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                      href="/cricket-live-line-api"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Cricket live line
                        <GiCricketBat className="" size={22} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* :
								null} */}
            </div>

            <div className="group">
              <button
                onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                className="inline-flex items-center px-4 py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100"
              >
                <span
                  className={
                    showNav === 5
                      ? "mr-2 font-medium text-white/80"
                      : "mr-2 font-medium "
                  }
                >
                  Company
                </span>
                {showNav === 5 ? (
                  <MdKeyboardArrowDown className="text-white/80" size={18} />
                ) : (
                  <MdKeyboardArrowDown size={18} />
                )}
              </button>
              {/* {showNav === 4 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white bg-transparent capitalize  overflow-hidden text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border  w-screen left-0 transform h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out origin-top">
                <ul className="grid w-11/12 grid-cols-4 gap-6 py-6 mx-auto text-sm  2xl:w-4/6 xl:w-5/6">
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                      href="/about-us"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        About us
                        <RiBuilding4Line className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                      href="/contact-us"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Contact us
                        <RiCustomerService2Line className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                      href="/career"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        Career at comfygen
                        <RiBriefcaseLine className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                      href="/client-testimonials"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        client Testimonials
                        <RiGroupFill className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  {/* <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 5 ? 0 : 5)} href='/life-at-comfygen' passHref={true}  >
                      <span className="flex items-center justify-between">
                        
                         life at comfygen
                       
                        <RiGroupFill className="" size={22} />
                      </span>
                    </Link>
                  </li> */}

                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link
                      onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                      href="https://www.comfygen.com/blog/"
                      passHref={true}
                    >
                      <span className="flex items-center justify-between">
                        blog
                        <RiBriefcaseLine className="" size={22} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* : null} */}
            </div>

            {/* <Link href='https://www.comfygen.com/blog/' passHref={true}  >
              <span className="block text-base font-medium  active text-white  bg-gradient-to-b from-[#639df5] to-[#2B69ED] rounded-full px-6 lg:py-1.5 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">Blog</span>
            </Link> */}
            <Link href="/quote" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Get a Quote
              </span>
            </Link>
          </div>
        </div>

        {/* mobile menu */}
        <div
          id="slideover-container"
          className="fixed inset-0 invisible w-full h-full"
        >
          <span
            onClick={() => toggleSlideover()}
            id="slideover-bg"
            className="absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gray-900 opacity-0 "
          ></span>
          <div
            id="slideover"
            className="absolute right-0 h-full overflow-scroll transition-all duration-300 ease-out translate-x-full md:w-96 w-80 bg-gradient-to-br from-blue-500 to-purple-500"
          >
            <div className="sticky top-0 z-20 flex justify-end px-6 py-2 bg-transparent">
              <span
                onClick={() => toggleSlideover()}
                className="p-2 rounded-full bg-slate-100/10"
              >
                <VscChromeClose size={24} className="text-white" />
              </span>
            </div>

            <div className="font-medium text-white divide-y divide-white/10">
              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/"
                  passHref={true}
                >
                  <div className="flex justify-between p-3 px-8 hover:bg-white/10">
                    <p>Home</p>
                  </div>
                </Link>
              </div>
              <div>
                <div
                  onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                  className={
                    showNav === 1
                      ? "flex justify-between p-3 items-center px-8 bg-white/10"
                      : "flex justify-between p-3 items-center px-8 bg-transparent "
                  }
                >
                  <span>Development</span>
                  {showNav === 1 ? (
                    <IoIosRemoveCircleOutline size={30} />
                  ) : (
                    <IoIosAddCircleOutline size={30} />
                  )}
                </div>

                {/* {showNav === 1 ? */}
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 1 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <div className="px-8 py-2 ">
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/mobile-app-development"
                      passHref={true}
                    >
                      <p className="py-2">Mobile App Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/hybrid-mobile-app-development"
                      passHref={true}
                    >
                      <p className="py-2">Hybrid Mobile App Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/iphone-app-development"
                      passHref={true}
                    >
                      <p className="py-2">iOS App Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/smart-contract-mlm-software"
                      passHref={true}
                    >
                      <p className="py-2"> Smart Contract MLM Software</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/web-development"
                      passHref={true}
                    >
                      <p className="py-2">web-development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/web-design"
                      passHref={true}
                    >
                      <p className="py-2"> web-design</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/flutter-development-company"
                      passHref={true}
                    >
                      <p className="py-2">Flutter Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/mern-stack-development-services"
                      passHref={true}
                    >
                      <p className="py-2">Mern Stack Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/e-commerce-development"
                      passHref={true}
                    >
                      <p className="py-2">E-Commerce development </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/node-js-development"
                      passHref={true}
                    >
                      <p className="py-2">Node JS Development </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/react-js-development"
                      passHref={true}
                    >
                      <p className="py-2">React JS Development </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/next-js-development"
                      passHref={true}
                    >
                      <p className="py-2">Next JS Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/iot-development-company"
                      passHref={true}
                    >
                      <p className="py-2">IoT Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/python-development"
                      passHref={true}
                    >
                      <p className="py-2">Python Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/react-native-development"
                      passHref={true}
                    >
                      <p className="py-2">React Native Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/defi-smart-contract-development"
                      passHref={true}
                    >
                      <p className="py-2">DeFi Smart Contract Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/android-app-development"
                      passHref={true}
                    >
                      <p className="py-2">Android App Development</p>
                    </Link>
                  </div>
                </div>
                {/* : null
								} */}
              </div>

              <div>
                <div
                  onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                  className={
                    showNav === 2
                      ? "flex justify-between p-3 items-center px-8 bg-white/10"
                      : "flex justify-between p-3 items-center px-8 bg-transparent "
                  }
                >
                  <span>Blockchain Development</span>
                  {showNav === 2 ? (
                    <IoIosRemoveCircleOutline size={30} />
                  ) : (
                    <IoIosAddCircleOutline size={30} />
                  )}
                </div>

                {/* {showNav === 2 ? */}
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 2 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <div className="px-8 py-2 ">
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/blockchain-development"
                      passHref={true}
                    >
                      <p className="py-2">Blockchain Development Company</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/altcoin-development-services"
                      passHref={true}
                    >
                      <p className="py-2">Altcoin Development Services</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/cryptocurrency-exchange-development"
                      passHref={true}
                    >
                      <p className="py-2">Crypto Exchange Services</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/crypto-wallet-development"
                      passHref={true}
                    >
                      <p className="py-2">Crypto Wallet development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/cryptocurrency-mlm-software-development"
                      passHref={true}
                    >
                      <p className="py-2">Crypto MLM Software development </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/smart-contract-development"
                      passHref={true}
                    >
                      <p className="py-2">Smart Contract Development </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/polygon-blockchain"
                      passHref={true}
                    >
                      <p className="py-2">Polygon Blockchain </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/multichain-blockchain"
                      passHref={true}
                    >
                      <p className="py-2">Multichain Blockchain </p>
                    </Link>
                  </div>
                </div>
                {/* : null
								} */}
              </div>

              <div>
                <div
                  onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                  className={
                    showNav === 3
                      ? "flex justify-between p-3 items-center px-8 bg-white/10"
                      : "flex justify-between p-3 items-center px-8 bg-transparent "
                  }
                >
                  <span>Token Development</span>
                  {showNav === 3 ? (
                    <IoIosRemoveCircleOutline size={30} />
                  ) : (
                    <IoIosAddCircleOutline size={30} />
                  )}
                </div>

                {/* {showNav === 3 ? */}
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 3 ? "max-h-60" : "max-h-0"
                    } `}
                >
                  <ul className="px-8 py-2 list-inside ">
                    <li>
                      <Link
                        onClick={() => toggleSlideover()}
                        href="/crypto-token-development-company"
                        passHref={true}
                      >
                        <p className="py-2">Crpto Token development</p>
                      </Link>
                    </li>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/erc20-token-development"
                      passHref={true}
                    >
                      <p className="py-2">ERC20 Token development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/ethereum-token-development"
                      passHref={true}
                    >
                      <p className="py-2">Ethereum Token Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/solana-token-development"
                      passHref={true}
                    >
                      <p className="py-2">Solana Token Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/tron-token-development"
                      passHref={true}
                    >
                      <p className="py-2">Tron Token Development </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/crypto-white-paper-development"
                      passHref={true}
                    >
                      <p className="py-2">Crypto White Paper Development</p>
                    </Link>
                  </ul>
                </div>
                {/* : null
								} */}
              </div>

              <div>
                <div
                  onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                  className={
                    showNav === 4
                      ? "flex justify-between p-3 items-center px-8 bg-white/10"
                      : "flex justify-between p-3 items-center px-8 bg-transparent "
                  }
                >
                  <span>Game Development</span>
                  {showNav === 4 ? (
                    <IoIosRemoveCircleOutline size={30} />
                  ) : (
                    <IoIosAddCircleOutline size={30} />
                  )}
                </div>

                {/* {showNav === 4 ? */}
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 4 ? "max-h-60" : "max-h-0"
                    } `}
                >
                  <div className="px-8 py-2 ">
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/ludo-game-development"
                      passHref={true}
                    >
                      <p className="py-2"> Ludo Game Development </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/poker-game-development"
                      passHref={true}
                    >
                      <p className="py-2">Poker Game Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/rummy-game-development"
                      passHref={true}
                    >
                      <p className="py-2">Rummy Game Development</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/baccarat-game-development"
                      passHref={true}
                    >
                      <p className="py-2">Baccarat Game Development</p>
                    </Link>

                    <Link
                      onClick={() => toggleSlideover()}
                      href="/cricket-live-line-api"
                      passHref={true}
                    >
                      <p className="py-2">Cricket Live Line API</p>
                    </Link>
                  </div>
                </div>
                {/* : null} */}
              </div>

              <div>
                <div
                  onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                  className={
                    showNav === 5
                      ? "flex justify-between p-3 items-center px-8 bg-white/10"
                      : "flex justify-between p-3 items-center px-8 bg-transparent "
                  }
                >
                  <span>Our Company</span>
                  {showNav === 5 ? (
                    <IoIosRemoveCircleOutline size={30} />
                  ) : (
                    <IoIosAddCircleOutline size={30} />
                  )}
                </div>

                {/* {showNav === 5 ? */}
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 5 ? "max-h-60" : "max-h-0"
                    } `}
                >
                  <div className="px-8 py-2 ">
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/about-us"
                      passHref={true}
                    >
                      <p className="py-2"> About Us </p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/contact-us"
                      passHref={true}
                    >
                      <p className="py-2"> Contact Us</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/career"
                      passHref={true}
                    >
                      <p className="py-2">Career At Comfygen</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="/client-testimonials"
                      passHref={true}
                    >
                      <p className="py-2">Client Testimonials</p>
                    </Link>
                    <Link
                      onClick={() => toggleSlideover()}
                      href="https://www.comfygen.com/blog/"
                      passHref={true}
                    >
                      <p className="py-2">blog</p>
                    </Link>
                  </div>
                </div>
                {/* : null} */}
              </div>

              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="https://www.comfygen.com/blog/"
                  passHref={true}
                >
                  <div className="flex justify-between p-3 px-8 hover:bg-white/10">
                    <p>Blog</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/quote"
                  passHref={true}
                >
                  <div className="flex justify-between p-3 px-8 hover:bg-white/10">
                    <p>Quote</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
